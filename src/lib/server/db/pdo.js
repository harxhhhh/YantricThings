/**
 * A thin PDO-style wrapper over a mysql2 pool.
 *
 * It exposes only the calls the handlers use (prepare / execute / fetch / fetchAll /
 * fetchColumn / rowCount / query / lastInsertId) and keeps PDO's binding semantics, so the
 * handlers return the same results the PHP/PDO implementation did.
 */

/**
 * PDO's execute($array) binds every value as a string (null stays NULL; arrays become
 * "Array"; true/false become "1"/""). mysql2 would send numbers/booleans/objects natively,
 * so convert the same way to get identical results — including for out-of-range or odd input.
 */
function bindValue(v) {
  if (v === undefined || v === null) return null;
  if (typeof v === 'string' || Buffer.isBuffer(v)) return v;
  if (typeof v === 'boolean') return v ? '1' : '';
  if (typeof v === 'number' || typeof v === 'bigint') return String(v);
  return 'Array';
}

function normalizeParams(params) {
  if (Array.isArray(params)) return params.map(bindValue);
  const out = {};
  for (const [k, v] of Object.entries(params ?? {})) {
    out[k.startsWith(':') ? k.slice(1) : k] = bindValue(v);
  }
  return out;
}

class PDOStatement {
  constructor(pdo, sql, simple = false) {
    this.pdo = pdo;
    this.sql = sql;
    this.simple = simple; // PDO::query() (text protocol) vs prepare()+execute()
    this.rows = [];
    this.cursor = 0;
    this.affected = 0;
  }

  async execute(params = {}) {
    const hasParams = Array.isArray(params) ? params.length > 0 : Object.keys(params ?? {}).length > 0;
    const [result] = this.simple
      ? await this.pdo.pool.query(this.sql)
      : await this.pdo.pool.execute(this.sql, hasParams ? normalizeParams(params) : []);

    this.cursor = 0;
    if (Array.isArray(result)) {
      this.rows = result;
      this.affected = result.length;
    } else {
      this.rows = [];
      this.affected = result.affectedRows ?? 0;
      if (result.insertId) this.pdo.setLastInsertId(result.insertId);
    }
    return true;
  }

  fetchAll() {
    return this.rows;
  }

  /** @returns {object|false} */
  fetch() {
    return this.cursor < this.rows.length ? this.rows[this.cursor++] : false;
  }

  /** @returns {*|false} first column of the next row */
  fetchColumn() {
    const row = this.fetch();
    if (row === false) return false;
    const values = Object.values(row);
    return values.length ? values[0] : false;
  }

  rowCount() {
    return this.affected;
  }
}

export class PDO {
  constructor(pool) {
    this.pool = pool;
    this._lastInsertId = '0';
  }

  prepare(sql) {
    return new PDOStatement(this, sql);
  }

  async query(sql) {
    const stmt = new PDOStatement(this, sql, true);
    await stmt.execute();
    return stmt;
  }

  setLastInsertId(id) {
    this._lastInsertId = String(id);
  }

  lastInsertId() {
    return this._lastInsertId;
  }
}
