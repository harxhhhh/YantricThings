import { logout } from '#lib/server/handlers/auth.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const POST = endpoint(() => logout());
export { fallback, trailingSlash };
