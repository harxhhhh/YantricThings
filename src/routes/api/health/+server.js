import { health } from '#lib/server/handlers/system.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const GET = endpoint(() => health());
export { fallback, trailingSlash };
