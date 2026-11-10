import { logs } from '#lib/server/handlers/logs.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const GET = endpoint(() => logs());
export { fallback, trailingSlash };
