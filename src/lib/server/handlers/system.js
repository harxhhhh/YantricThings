/**
 * Service health check.
 */
import { appConfig } from '#lib/server/config/app-config.js';
import { sendJson } from '#lib/server/http/json-response.js';

export function health() {
  const c = appConfig();
  sendJson({
    status: 'ok',
    service: c.service_name ?? 'VehicleIQ',
    mode: c.mode ?? 'experiment',
    database: c.db_name ?? null
  });
}
