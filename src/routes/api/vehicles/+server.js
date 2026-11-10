import { vehicleCreate, vehicleList } from '#lib/server/handlers/vehicles.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const GET = endpoint(() => vehicleList());
export const POST = endpoint(() => vehicleCreate());
export { fallback, trailingSlash };
