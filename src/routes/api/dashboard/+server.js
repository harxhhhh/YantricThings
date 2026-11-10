import { dashboard } from '#lib/server/handlers/dashboard.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const GET = endpoint(() => dashboard());
export { fallback, trailingSlash };
