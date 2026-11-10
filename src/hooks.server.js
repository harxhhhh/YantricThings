/**
 * Server hooks — run for every request before any route.
 *
 * Authentication today: the API uses signed Bearer tokens. `handle` resolves the caller
 * once (event.locals.user) for /api requests; handlers read it with requireAuth().
 *
 * Pages: the portal is guarded here. Signing in (POST /api/auth/login) also sets an HttpOnly
 * session cookie; a request for a protected page without a valid cookie is redirected to the
 * login page before any portal markup is sent. (The browser still keeps the bearer token in
 * localStorage for its /api calls.) When Keycloak is added, only lib/server/auth/session.js
 * has to change — resolveUser() for /api, resolvePageUser() for pages.
 */
import { clearSessionCookie, resolvePageUser, resolveUser, SESSION_COOKIE } from '#lib/server/auth/session.js';
import { shellFor } from '#lib/server/shell.js';

/** Routes that need a signed-in user (route ids, i.e. the folder under src/routes). */
const PROTECTED_PAGES = ['/vehicleiq-web/portal'];
const LOGIN_PAGE = '/vehicleiq-web/login/';

const isProtectedPage = (routeId) => routeId != null && PROTECTED_PAGES.some((p) => routeId === p || routeId.startsWith(p + '/'));

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  event.locals.user = null;

  if (event.url.pathname.startsWith('/api')) {
    event.locals.user = resolveUser(event.request);
  }

  const protectedPage = isProtectedPage(event.route.id);
  if (protectedPage) {
    event.locals.user = resolvePageUser(event);
    if (!event.locals.user) {
      return new Response(null, { status: 303, headers: { location: LOGIN_PAGE, 'cache-control': 'no-store' } });
    }
  }

    // Leaving the portal ends the session: any other page the browser opens (login, home, contact, ...)
  // drops the session cookie, so going back to the portal URL lands on the login page again.
  // Only real page navigations count — not /api calls, assets, or SvelteKit's own data requests.
  if (!protectedPage && event.request.method === 'GET' && event.request.headers.get('sec-fetch-dest') === 'document' && event.cookies.get(SESSION_COOKIE)) {
    clearSessionCookie(event);
  }

  // Per-route utility classes for <html> and <body> (they live in app.html, outside the pages).
  const shell = shellFor(event.route.id);
  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replaceAll('%html.class%', shell.html).replaceAll('%body.class%', shell.body)
  });
  // Don't let the browser show a cached portal (e.g. with the Back button) after signing out.
  if (protectedPage) response.headers.set('cache-control', 'no-store');
  return response;
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
  // Errors inside API handlers are answered as JSON by lib/server/http/endpoint.js;
  // this catches everything else (page rendering, routing) so it is logged in one place.
  console.error(`[server] ${event.request.method} ${event.url.pathname}`, error);
}
