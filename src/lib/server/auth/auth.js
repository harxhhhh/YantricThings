/**
 * Authentication used by the API handlers: requireAuth() for protected endpoints and
 * authenticate() for POST /api/auth/login.
 */
import bcrypt from 'bcryptjs';
import { sendError, isResponseSent } from '#lib/server/http/json-response.js';
import { requestContext } from '#lib/server/http/request-context.js';
import { getPdo } from '#lib/server/db/connection.js';
import { getColumns, pickColumn } from '#lib/server/db/table-helper.js';
import { hashEquals, strval, trim } from '#lib/server/utils/php.js';
import { issueToken } from './token.js';

/**
 * Returns the authenticated user (set by hooks.server.js), or answers 401.
 * @returns {{u: string, r: string, exp: number, iat: number}}
 */
export function requireAuth() {
  const user = requestContext().event.locals.user ?? null;
  if (user === null) {
    sendError('Unauthorized', 401);
  }
  return user;
}

/** password_verify() for bcrypt ($2y$/$2a$/$2b$) hashes; false for anything else. */
async function passwordVerify(password, hash) {
  if (!/^\$2[abxy]\$/.test(hash)) {
    return false;
  }
  try {
    return await bcrypt.compare(password, hash);
  } catch {
    return false;
  }
}

/**
 * Authenticate against the `users` table.
 * Accepts password_hash() hashes or (experiment only) plain-text match.
 * Falls back to admin/admin123 when the users table is empty / has no matching columns.
 */
export async function authenticate(username, password) {
  username = trim(username);
  if (username === '' || password === '') {
    sendError('Username and password required', 400);
  }

  try {
    const pdo = await getPdo();
    const cols = await getColumns(pdo, 'users');
    if (cols.length > 0) {
      const userCol = pickColumn(cols, ['username', 'user_name', 'email', 'login']);
      const passCol = pickColumn(cols, ['password', 'password_hash', 'pass', 'passwd']);
      const roleCol = pickColumn(cols, ['role', 'user_role', 'type']);

      if (userCol && passCol) {
        const sql = `SELECT * FROM \`users\` WHERE \`${userCol}\` = :u LIMIT 1`;
        const stmt = pdo.prepare(sql);
        await stmt.execute({ u: username });
        const row = stmt.fetch();
        if (row) {
          const stored = strval(row[passCol]);
          const ok = (await passwordVerify(password, stored)) || hashEquals(stored, password);
          if (!ok) {
            sendError('Invalid credentials', 401);
          }
          const role = roleCol && row[roleCol] !== undefined && row[roleCol] !== null ? strval(row[roleCol]) : 'admin';
          return {
            token: issueToken(username, role),
            username: username,
            role: role
          };
        }
      }
    }
  } catch (e) {
    // PHP's exit() (sendJson / sendError) is not catchable — never swallow it.
    if (isResponseSent(e)) throw e;
    // Fall through to experiment default
  }

  // Experiment fallback (matches Android defaults)
  if (username === 'admin' && password === 'admin123') {
    return {
      token: issueToken('admin', 'admin'),
      username: 'admin',
      role: 'admin'
    };
  }

  sendError('Invalid credentials', 401);
  return []; // unreachable
}
