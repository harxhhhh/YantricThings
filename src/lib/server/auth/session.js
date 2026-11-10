/**
 * Who is making this request?
 *
 * hooks.server.js calls resolveUser() once per API request and stores the result in
 * `event.locals.user`; handlers read it through requireAuth() (auth.js).
 *
 * This is the single swap point for Keycloak: replace the body of resolveUser() with
 * "validate the access token / session cookie and map its claims (sub, realm roles) to a
 * user object" and nothing else in the app has to change.
 */
import { loadConfig } from '#lib/server/config/app-config.js';
import { env } from '#lib/server/config/env.js';
import { verifyBearer } from './token.js';

/**
 * @param {Request} request
 * @returns {{u: string, r: string, exp: number, iat: number}|null} the signed-in user, or null
 */
export function resolveUser(request) {
  // Without configuration there is no secret to verify against; the endpoint wrapper
  // reports the missing configuration itself.
  if (!loadConfig()) return null;
  return verifyBearer(request.headers.get('authorization'));
}

/** Name of the HttpOnly cookie that lets the server recognise a signed-in browser on page requests. */
export const SESSION_COOKIE = 'viq_session';

/**
 * Cookie settings. No `maxAge`/`expires`: it is a browser-session cookie, so closing the browser
 * signs the user out of the portal and typing the portal URL again lands on the login page.
 * (Add `maxAge: 60 * 60 * 8` here for a fixed 8-hour sign-in instead.)
 */
function cookieOptions(event) {
  return { path: '/', httpOnly: true, sameSite: 'lax', secure: useSecureCookie(event) };
}

const LOOPBACK = new Set(['localhost', '127.0.0.1', '[::1]']);

/**
 * "Secure" cookies are only sent over HTTPS. On the live site that is what we want; on a developer's
 * machine (http://localhost) it would make the cookie vanish, so loopback hosts never get it.
 * Set COOKIE_SECURE=false in .env to turn it off elsewhere (e.g. testing over plain http on a LAN IP).
 */
function useSecureCookie(event) {
  if (env.COOKIE_SECURE) return env.COOKIE_SECURE.toLowerCase() !== 'false';
  return event.url.protocol === 'https:' && !LOOPBACK.has(event.url.hostname);
}

/** Called after a successful sign-in: remember the signed token in the session cookie. */
export function setSessionCookie(event, token) {
  event.cookies.set(SESSION_COOKIE, token, cookieOptions(event));
}

/** Called on sign-out: forget the session cookie. */
export function clearSessionCookie(event) {
  event.cookies.delete(SESSION_COOKIE, cookieOptions(event));
}

/**
 * Who is requesting this *page*? Browsers cannot attach an Authorization header to a page
 * navigation, so pages use the session cookie. Same signed token, same expiry check.
 * @returns {{u: string, r: string, exp: number, iat: number}|null}
 */
export function resolvePageUser(event) {
  if (!loadConfig()) return null;
  return verifyBearer(event.cookies.get(SESSION_COOKIE));
}
