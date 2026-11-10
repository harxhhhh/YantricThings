/**
 * Sign-in and sign-out: POST /api/auth/login, POST /api/auth/logout.
 */
import { authenticate } from '#lib/server/auth/auth.js';
import { clearSessionCookie, setSessionCookie } from '#lib/server/auth/session.js';
import { jsonBody, requestContext } from '#lib/server/http/request-context.js';
import { sendJson } from '#lib/server/http/json-response.js';
import { strval } from '#lib/server/utils/php.js';

export async function login() {
  const body = await jsonBody();
  const username = strval(body.username ?? '');
  const password = strval(body.password ?? '');
  const session = await authenticate(username, password); // answers 400/401 itself when it fails
  setSessionCookie(requestContext().event, session.token);
  sendJson(session);
}

export function logout() {
  clearSessionCookie(requestContext().event);
  sendJson({ ok: true });
}
