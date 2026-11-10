/**
 * Communication logs: the latest entries, and per-session append / list.
 */
import { requireAuth } from '#lib/server/auth/auth.js';
import { getPdo } from '#lib/server/db/connection.js';
import { fetchAllSafe, getColumns, pickColumn, resolveTable } from '#lib/server/db/table-helper.js';
import { jsonBody } from '#lib/server/http/request-context.js';
import { sendError, sendJson } from '#lib/server/http/json-response.js';
import { arrayValues, intval, isPhpArray, isoDate, isset, strval } from '#lib/server/utils/php.js';

export async function logs() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['logs', 'communication_log']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\` ORDER BY id DESC LIMIT 200`);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      timestamp: r.timestamp ?? r.logged_at ?? r.created_at ?? null,
      level: r.level ?? r.status ?? 'INFO',
      source: r.source ?? r.feature ?? r.ecu_name ?? null,
      message: r.message ?? r.decoded ?? r.request ?? null
    });
  }
  sendJson(out);
}

export async function appendLogs(uuid) {
  requireAuth();
  const body = await jsonBody();
  const entries = body.entries ?? [];
  if (!isPhpArray(entries)) {
    sendError('entries must be an array', 400);
  }
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['communication_log', 'logs']);
  if (!table) {
    sendJson({ inserted: 0 });
  }
  const cols = await getColumns(pdo, table);
  let inserted = 0;
  for (const entry of arrayValues(entries)) {
    if (!isPhpArray(entry)) {
      continue;
    }
    const map = {
      session_uuid: uuid,
      entry_uuid: strval(entry.entry_uuid ?? ''),
      ecu_id: entry.ecu_id ?? null,
      ecu_name: strval(entry.ecu_name ?? ''),
      feature: strval(entry.feature ?? ''),
      sid: strval(entry.sid ?? ''),
      request: strval(entry.request ?? ''),
      response: strval(entry.response ?? ''),
      status: strval(entry.status ?? 'OK'),
      decoded: strval(entry.decoded ?? ''),
      logged_at: strval(entry.logged_at ?? isoDate()),
      timestamp: strval(entry.logged_at ?? isoDate()),
      message: strval(entry.decoded ?? entry.request ?? ''),
      level: strval(entry.status ?? 'INFO'),
      source: strval(entry.feature ?? '')
    };
    const fields = [];
    const params = {};
    for (const [col, val] of Object.entries(map)) {
      if (pickColumn(cols, [col])) {
        fields.push(`\`${col}\``);
        params[col] = val;
      }
    }
    if (fields.length === 0) {
      continue;
    }
    const placeholders = fields.map((c) => ':' + c.replace(/^`+|`+$/g, ''));
    const sql = 'INSERT INTO `' + table + '` (' + fields.join(',') + ') VALUES (' + placeholders.join(',') + ')';
    try {
      const stmt = pdo.prepare(sql);
      await stmt.execute(params);
      inserted++;
    } catch (e) {
      // skip bad rows
    }
  }
  sendJson({ inserted: inserted });
}

export async function sessionLogs(uuid) {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['communication_log', 'logs']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(
    pdo,
    `SELECT * FROM \`${table}\` WHERE \`session_uuid\` = :u ORDER BY id`,
    { u: uuid }
  );
  const out = [];
  for (const r of rows) {
    out.push({
      entry_uuid: r.entry_uuid ?? strval(r.id ?? ''),
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? '',
      feature: r.feature ?? '',
      sid: r.sid ?? '',
      request: r.request ?? '',
      response: r.response ?? '',
      status: r.status ?? 'OK',
      decoded: r.decoded ?? '',
      logged_at: r.logged_at ?? r.timestamp ?? ''
    });
  }
  sendJson(out);
}
