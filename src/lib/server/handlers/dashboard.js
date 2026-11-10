/**
 * Record counts for the portal dashboard: GET /api/dashboard.
 */
import { requireAuth } from '#lib/server/auth/auth.js';
import { getPdo } from '#lib/server/db/connection.js';
import { countSafe, fetchAllSafe, resolveTable } from '#lib/server/db/table-helper.js';
import { sendJson } from '#lib/server/http/json-response.js';

export async function dashboard() {
  requireAuth();
  const pdo = await getPdo();

  const flash = await resolveTable(pdo, ['flash_configuration', 'flash']);
  const freeze = await resolveTable(pdo, ['freeze_frame', 'freeze_frames']);
  const uds = await resolveTable(pdo, ['uds_service', 'uds_services']);
  const sessions = await resolveTable(pdo, ['diagnostic_session', 'diagnostic_sessions']);
  const reports = await resolveTable(pdo, ['diagnostic_report', 'diagnostic_reports']);

  let lastImport = null;
  const versions = await resolveTable(pdo, ['csv_import_versions']);
  if (versions) {
    const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${versions}\` ORDER BY 1 DESC LIMIT 1`);
    if (rows.length) {
      lastImport = rows[0].imported_at ?? rows[0].created_at ?? rows[0].timestamp ?? null;
    }
  }

  sendJson({
    ecu_count: await countSafe(pdo, 'ecu'),
    did_count: await countSafe(pdo, 'did'),
    dtc_count: await countSafe(pdo, 'dtc'),
    routine_count: await countSafe(pdo, 'routine'),
    flash_count: flash ? await countSafe(pdo, flash) : 0,
    freeze_frame_count: freeze ? await countSafe(pdo, freeze) : 0,
    uds_service_count: uds ? await countSafe(pdo, uds) : 0,
    session_count: sessions ? await countSafe(pdo, sessions) : 0,
    report_count: reports ? await countSafe(pdo, reports) : 0,
    last_import: lastImport
  });
}
