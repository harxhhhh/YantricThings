import { vehicleDelete, vehicleUpdate } from '#lib/server/handlers/vehicles.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';
import { intval } from '#lib/server/utils/php.js';

export const PUT = endpoint(({ params }) => vehicleUpdate(intval(params.id)));
export const DELETE = endpoint(({ params }) => vehicleDelete(intval(params.id)));
export { fallback, trailingSlash };
