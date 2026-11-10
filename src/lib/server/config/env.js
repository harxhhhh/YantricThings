/**
 * Environment access (replaces config.php values).
 *
 * Reads process.env, and — if a `.env` file exists in the working directory — loads it first
 * without overriding variables that are already set (so real environment variables win).
 * That makes `npm run dev`, `npm run preview` and `npm start` all behave the same.
 */
import { existsSync } from 'node:fs';

let dotenvLoaded = false;

function loadDotEnv() {
  if (dotenvLoaded) return;
  dotenvLoaded = true;
  if (existsSync('.env') && typeof process.loadEnvFile === 'function') {
    try {
      process.loadEnvFile('.env');
    } catch (e) {
      console.warn('[env] could not read .env:', e.message);
    }
  }
}

/** Proxy-free accessor:  env.DB_NAME  */
export const env = new Proxy(
  {},
  {
    get(_target, name) {
      if (typeof name !== 'string') return undefined;
      loadDotEnv();
      return process.env[name];
    }
  }
);
