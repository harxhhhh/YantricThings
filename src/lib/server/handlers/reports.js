/**
 * Diagnostic reports: generate, list and fetch by id.
 */
import { requireAuth } from '#lib/server/auth/auth.js';
import { getPdo } from '#lib/server/db/connection.js';
import { fetchAllSafe, getColumns, pickColumn, resolveTable } from '#lib/server/db/table-helper.js';
import { jsonBody } from '#lib/server/http/request-context.js';
import { sendError, sendJson } from '#lib/server/http/json-response.js';
import { intval, isoDate, isset, strval } from '#lib/server/utils/php.js';

export async function generateReport() {
  requireAuth();
  const body = await jsonBody();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['diagnostic_report', 'diagnostic_reports']);
  if (!table) {
    sendError('diagnostic_report table missing', 501);
  }
  const cols = await getColumns(pdo, table);
  const map = {
    session_uuid: strval(body.session_uuid ?? ''),
    report_type: strval(body.report_type ?? 'session'),
    format: strval(body.format ?? 'txt'),
    title: body.title ?? 'Diagnostic Report',
    content: body.content ?? '',
    summary: body.summary ?? '',
    ecu_name: body.ecu_name ?? '',
    generated_at: body.generated_at ?? isoDate()
  };
  const fields = [];
  const params = {};
  for (const [col, val] of Object.entries(map)) {
    if (pickColumn(cols, [col])) {
      fields.push(`\`${col}\``);
      params[col] = val;
    }
  }
  let id = null;
  if (fields.length) {
    const placeholders = fields.map((c) => ':' + c.replace(/^`+|`+$/g, ''));
    const sql = 'INSERT INTO `' + table + '` (' + fields.join(',') + ') VALUES (' + placeholders.join(',') + ')';
    try {
      const stmt = pdo.prepare(sql);
      await stmt.execute(params);
      id = intval(pdo.lastInsertId());
    } catch (e) {
      sendError('Failed to save report: ' + (e && e.message ? e.message : String(e)), 500);
    }
  }
  sendJson({ id: id, session_id: null, ...map });
}

export async function reportsList() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['diagnostic_report', 'diagnostic_reports']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\` ORDER BY id DESC LIMIT 100`);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      session_id: isset(r.session_id) ? intval(r.session_id) : null,
      session_uuid: r.session_uuid ?? null,
      report_type: r.report_type ?? null,
      title: r.title ?? null,
      format: r.format ?? null,
      content: r.content ?? null,
      summary: r.summary ?? null,
      ecu_name: r.ecu_name ?? null,
      generated_at: r.generated_at ?? null
    });
  }
  sendJson(out);
}

export async function reportById(id) {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['diagnostic_report', 'diagnostic_reports']);
  if (!table) {
    sendError('Not found', 404);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\` WHERE id = :id LIMIT 1`, { id: id });
  if (!rows.length) {
    sendError('Not found', 404);
  }
  const r = rows[0];
  sendJson({
    id: isset(r.id) ? intval(r.id) : null,
    session_id: isset(r.session_id) ? intval(r.session_id) : null,
    session_uuid: r.session_uuid ?? null,
    report_type: r.report_type ?? null,
    title: r.title ?? null,
    format: r.format ?? null,
    content: r.content ?? null,
    summary: r.summary ?? null,
    ecu_name: r.ecu_name ?? null,
    generated_at: r.generated_at ?? null
  });
}
