/**
 * Per-request context for the API handlers.
 *
 * PHP code could read $_SERVER / php://input from anywhere. Here an AsyncLocalStorage
 * holds the SvelteKit event for the duration of one API request, so handlers keep
 * no-argument signatures: jsonBody(), requestContext(), getPdo(), requireAuth()…
 */
import { AsyncLocalStorage } from 'node:async_hooks';

const requestStore = new AsyncLocalStorage();

/** Run `fn` with a fresh per-request context (the equivalent of one PHP request). */
export function runWithRequest(event, fn) {
  return requestStore.run(
    {
      event,
      request: event.request,
      url: event.url,
      rawBody: undefined,
      tableColumns: new Map(), // table-helper column cache — per request, like PHP
      pdo: null // database handle — per request, like PHP
    },
    fn
  );
}

export function requestContext() {
  const store = requestStore.getStore();
  if (!store) throw new Error('No request context — call from inside an API route handler');
  return store;
}

/** Decoded JSON request body, or {} when empty or not an array/object. */
export async function jsonBody() {
  const store = requestContext();
  if (store.rawBody === undefined) {
    store.rawBody = await store.request.text();
  }
  const raw = store.rawBody;
  if (raw === '') {
    return {};
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return {};
  }
  return data !== null && typeof data === 'object' ? data : {};
}

/** Normalised '/api/...' path of the current request. */
export function requestPath() {
  const { url } = requestContext();
  const path = url.pathname || '/';
  // Support both /api/... and /experiment_vehicleiq_bridge/api/...
  const m = /(\/api)(\/.*)?$/.exec(path);
  if (m) {
    const rest = m[2] ?? '';
    return '/api' + rest;
  }
  return path;
}
