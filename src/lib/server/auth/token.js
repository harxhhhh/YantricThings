/**
 * Signed bearer tokens.
 *
 * Token format is unchanged from the PHP API (base64url(payload).base64url(HMAC-SHA256)),
 * so tokens issued by the old server keep working as long as TOKEN_SECRET is the same.
 * This is the module a Keycloak integration replaces (see session.js).
 */
import { createHmac } from 'node:crypto';
import { appConfig } from '#lib/server/config/app-config.js';
import { hashEquals, intval, time, trim } from '#lib/server/utils/php.js';

function b64(raw) {
  return Buffer.from(raw).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function ub64(value) {
  const std = value.replace(/-/g, '+').replace(/_/g, '/');
  // base64_decode($s, true): strict mode returns false on invalid input -> (string) false === ''
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(std) || std.length % 4 === 1) {
    return '';
  }
  return Buffer.from(std, 'base64').toString('utf8');
}

export function issueToken(username, role = 'admin') {
  const c = appConfig();
  const payload = {
    u: username,
    r: role,
    exp: time() + Number(c.token_ttl_seconds ?? 604800),
    iat: time()
  };
  const body = b64(Buffer.from(JSON.stringify(payload), 'utf8'));
  const sig = b64(createHmac('sha256', c.token_secret).update(body).digest());
  return body + '.' + sig;
}

/**
 * Verifies an `Authorization` header value ("Bearer <token>" or the bare token).
 * @returns {{u: string, r: string, exp: number, iat: number}|null} the payload, or null
 */
export function verifyBearer(header) {
  if (header === null || header === undefined || header === '') {
    return null;
  }
  if (header.slice(0, 7).toLowerCase() === 'bearer ') {
    header = trim(header.slice(7));
  }
  const parts = header.split('.');
  if (parts.length !== 2) {
    return null;
  }
  const [body, sig] = parts;
  const c = appConfig();
  const expected = b64(createHmac('sha256', c.token_secret).update(body).digest());
  if (!hashEquals(expected, sig)) {
    return null;
  }
  const json = ub64(body);
  let payload;
  try {
    payload = JSON.parse(json);
  } catch {
    return null;
  }
  if (
    payload === null ||
    typeof payload !== 'object' ||
    !('exp' in payload) ||
    payload.exp === null ||
    time() > intval(payload.exp)
  ) {
    return null;
  }
  return payload;
}
