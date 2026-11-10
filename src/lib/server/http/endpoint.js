/**
 * Glue between SvelteKit endpoints (every +server.js under src/routes/api) and the request handlers.
 *
 * Every API +server.js wraps its handler with `endpoint()`, which
 *   1. opens a per-request context (request-context.js),
 *   2. checks configuration ("Missing configuration"),
 *   3. converts sendJson()/sendError() "exits" into a Response with CORS headers,
 *   4. converts any other error into  {"error":"Server error: ..."}  / 500.
 *
 * Anything that doesn't match a route+method is answered by the exported `fallback` with
 * {"error":"Not found: <METHOD> <path>"} / 404, and OPTIONS pre-flights get a 204.
 */
import { loadConfig, MISSING_CONFIG_MESSAGE } from '#lib/server/config/app-config.js';
import { corsHeaders } from './cors.js';
import { ResponseSent, isResponseSent, sendError, sendJson } from './json-response.js';
import { requestContext, requestPath, runWithRequest } from './request-context.js';

/** /api/foo and /api/foo/ are the same route. Re-exported by every API +server.js. */
export const trailingSlash = 'ignore';

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' };

/** PHP json_encode(): null for missing values, never `undefined`; big ints as numbers. */
function replacer(_key, value) {
  if (value === undefined) return null;
  if (typeof value === 'bigint') return Number(value);
  return value;
}

function toResponse(sent) {
  const headers = { ...JSON_HEADERS, ...corsHeaders() };
  if (sent.status === 204) {
    return new Response(null, { status: 204, headers });
  }
  return new Response(JSON.stringify(sent.data, replacer), { status: sent.status, headers });
}

/** Answers 404 {"error":"Not found: METHOD /api/path"}. */
function notFound() {
  const method = requestContext().request.method.toUpperCase();
  let path = requestPath();
  // Normalize trailing slash
  if (path !== '/' && path.endsWith('/')) {
    path = path.replace(/\/+$/, '');
  }
  sendError('Not found: ' + method + ' ' + path, 404);
}

/** n-th raw (still URL-encoded) path segment counted from the end: 0 = last. */
export function segmentFromEnd(event, n = 0) {
  const segments = event.url.pathname.replace(/\/+$/, '').split('/');
  return segments[segments.length - 1 - n] ?? '';
}

async function run(event, fn) {
  return runWithRequest(event, async () => {
    if (!loadConfig()) {
      return new Response(JSON.stringify({ error: MISSING_CONFIG_MESSAGE }), {
        status: 500,
        headers: JSON_HEADERS
      });
    }

    try {
      await fn();
      notFound(); // handler returned without responding -> 404
    } catch (e) {
      if (isResponseSent(e)) {
        return toResponse(e);
      }
      console.error('[api] unhandled error on', event.request.method, event.url.pathname, e);
      return toResponse(new ResponseSent({ error: 'Server error: ' + (e && e.message ? e.message : String(e)) }, 500));
    }
  });
}

/** Wrap a handler:  export const GET = endpoint(() => ecuList()); */
export function endpoint(fn) {
  return (event) => run(event, () => fn(event));
}

/** Handles OPTIONS pre-flight (204) and every method/path nothing else matched (404). */
export function fallback(event) {
  return run(event, async () => {
    if (event.request.method === 'OPTIONS') {
      sendJson(null, 204);
    }
    notFound();
  });
}
