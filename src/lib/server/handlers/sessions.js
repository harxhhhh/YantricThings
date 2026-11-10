/**
 * Diagnostic sessions: create and close.
 */
import { requireAuth } from '#lib/server/auth/auth.js';
import { getPdo } from '#lib/server/db/connection.js';
import { getColumns, pickColumn, resolveTable } from '#lib/server/db/table-helper.js';
import { jsonBody } from '#lib/server/http/request-context.js';
import { sendError, sendJson } from '#lib/server/http/json-response.js';
import { intval, isoDate, strval } from '#lib/server/utils/php.js';

export async function createSession() {
  requireAuth();
  const body = await jsonBody();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['diagnostic_session', 'diagnostic_sessions']);
  if (!table) {
    sendError('diagnostic_session table missing', 501);
  }

  const uuid = strval(body.session_uuid ?? '');
  if (uuid === '') {
    sendError('session_uuid required', 400);
  }

  const cols = await getColumns(pdo, table);
  const fields = [];
  const params = {};
  const map = {
    session_uuid: uuid,
    device_name: strval(body.device_name ?? ''),
    vehicle_name: strval(body.vehicle_name ?? ''),
    server_host: strval(body.server_host ?? ''),
    ecu_name: strval(body.ecu_name ?? ''),
    started_at: strval(body.started_at ?? isoDate()),
    ended_at: body.ended_at ?? null,
    operation_count: intval(body.operation_count ?? 0)
  };
  for (const [col, val] of Object.entries(map)) {
    if (pickColumn(cols, [col])) {
      fields.push(`\`${col}\``);
      params[col] = val;
    }
  }
  if (fields.length === 0) {
    sendError('No matching columns on diagnostic_session', 500);
  }

  const placeholders = fields.map((c) => ':' + c.replace(/^`+|`+$/g, ''));
  const sql = 'INSERT INTO `' + table + '` (' + fields.join(',') + ') VALUES (' + placeholders.join(',') + ')';
  try {
    const stmt = pdo.prepare(sql);
    await stmt.execute(params);
  } catch (e) {
    // Likely duplicate — treat as upsert success
  }

  sendJson({
    id: intval(pdo.lastInsertId()) || null,
    session_uuid: uuid,
    device_name: map.device_name,
    vehicle_name: map.vehicle_name,
    server_host: map.server_host,
    ecu_name: map.ecu_name,
    started_at: map.started_at,
    ended_at: map.ended_at,
    operation_count: map.operation_count
  });
}

export async function closeSession(uuid) {
  requireAuth();
  const body = await jsonBody();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['diagnostic_session', 'diagnostic_sessions']);
  if (!table) {
    sendError('diagnostic_session table missing', 501);
  }
  const ended = strval(body.ended_at ?? isoDate());
  try {
    const stmt = pdo.prepare(`UPDATE \`${table}\` SET \`ended_at\` = :e WHERE \`session_uuid\` = :u`);
    await stmt.execute({ e: ended, u: uuid });
  } catch (e) {
    // ignore
  }
  sendJson({
    session_uuid: uuid,
    ended_at: ended
  });
}
