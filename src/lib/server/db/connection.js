/**
 * MySQL connection handling: one shared mysql2 pool for the whole process and one
 * PDO-style handle per API request.
 */
import mysql from 'mysql2/promise';
import { appConfig } from '#lib/server/config/app-config.js';
import { sendError } from '#lib/server/http/json-response.js';
import { requestContext } from '#lib/server/http/request-context.js';
import { PDO } from './pdo.js';

let pool = null;
let poolPromise = null;

async function getPool() {
  if (pool) return pool;
  if (!poolPromise) {
    poolPromise = (async () => {
      const c = appConfig();
      const candidate = mysql.createPool({
        host: c.db_host,
        port: Number(c.db_port),
        database: c.db_name,
        user: c.db_user,
        password: c.db_pass,
        charset: c.db_charset ?? 'utf8mb4',
        namedPlaceholders: true, // :name placeholders, like PDO
        dateStrings: true, // DATETIME/TIMESTAMP as strings, like PDO
        waitForConnections: true,
        connectionLimit: 10
      });
      try {
        const connection = await candidate.getConnection(); // PDO connects on construct
        connection.release();
      } catch (e) {
        await candidate.end().catch(() => {});
        throw e;
      }
      pool = candidate;
      return pool;
    })().catch((e) => {
      poolPromise = null; // retry on the next request
      throw e;
    });
  }
  return poolPromise;
}

/**
 * The database handle for the current API request (connects on first use).
 * Answers 500 "Database connection failed: …" when MySQL is unreachable.
 * @returns {Promise<PDO>}
 */
export async function getPdo() {
  const store = requestContext();
  if (store.pdo instanceof PDO) {
    return store.pdo;
  }

  let sharedPool;
  try {
    sharedPool = await getPool();
  } catch (e) {
    sendError('Database connection failed: ' + (e && e.message ? e.message : String(e)), 500);
  }

  store.pdo = new PDO(sharedPool);
  return store.pdo;
}
