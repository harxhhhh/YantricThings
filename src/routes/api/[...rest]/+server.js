// Any /api path that no route above matches: JSON 404 (or 204 for OPTIONS).
export { fallback, trailingSlash } from '#lib/server/http/endpoint.js';
