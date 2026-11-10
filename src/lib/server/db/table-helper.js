/**
 * Schema-tolerant query helpers.
 *
 * The database has several historical spellings of table and column names, so handlers
 * ask for a table by a list of candidate names and pick columns the same way.
 * (The column cache lives per request, so schema changes are picked up immediately.)
 */
import { requestContext } from '#lib/server/http/request-context.js';
import { intval } from '#lib/server/utils/php.js';

/** @returns {Promise<string[]>} column names of `table` ([] when it doesn't exist) */
export async function getColumns(pdo, table) {
  const key = table.toLowerCase();
  const cache = requestContext().tableColumns;
  if (cache.has(key)) {
    return cache.get(key);
  }
  try {
    const stmt = await pdo.query('DESCRIBE `' + table.replaceAll('`', '') + '`');
    const cols = [];
    for (const row of stmt.fetchAll()) {
      cols.push(String(row.Field));
    }
    cache.set(key, cols);
    return cols;
  } catch (e) {
    cache.set(key, []);
    return [];
  }
}

/** @returns {string|null} the first of `candidates` that exists in `cols` (case-insensitive) */
export function pickColumn(cols, candidates) {
  const lower = {};
  for (const c of cols) {
    lower[c.toLowerCase()] = c;
  }
  for (const name of candidates) {
    if (Object.prototype.hasOwnProperty.call(lower, name.toLowerCase())) {
      return lower[name.toLowerCase()];
    }
  }
  return null;
}

async function tableExists(pdo, table) {
  return (await getColumns(pdo, table)).length > 0;
}

/** Resolve alternate table names (typos / plural). @returns {Promise<string|null>} */
export async function resolveTable(pdo, candidates) {
  for (const name of candidates) {
    if (await tableExists(pdo, name)) {
      return name;
    }
  }
  return null;
}

/** Runs a SELECT and returns its rows, or [] if the query fails. */
export async function fetchAllSafe(pdo, sql, params = {}) {
  try {
    const stmt = pdo.prepare(sql);
    await stmt.execute(params);
    return stmt.fetchAll();
  } catch (e) {
    return [];
  }
}

/** COUNT(*) of `table`, or 0 if the query fails. */
export async function countSafe(pdo, table) {
  try {
    const stmt = await pdo.query('SELECT COUNT(*) FROM `' + table.replaceAll('`', '') + '`');
    return intval(stmt.fetchColumn());
  } catch (e) {
    return 0;
  }
}
