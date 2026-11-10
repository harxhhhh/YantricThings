/**
 * Vehicles owned by the signed-in user: list, create, update, delete.
 */
import { requireAuth } from '#lib/server/auth/auth.js';
import { getPdo } from '#lib/server/db/connection.js';
import { jsonBody } from '#lib/server/http/request-context.js';
import { sendError, sendJson } from '#lib/server/http/json-response.js';
import { intval, isset, strval, trim } from '#lib/server/utils/php.js';

export async function vehicleList() {
  const user = requireAuth();
  const pdo = await getPdo();

  const stmt = pdo.prepare(
    `SELECT id, vehicle_name, brand, model, year, vin, created_at
           FROM \`vehicles\`
           WHERE user_id = :user_id
           ORDER BY id DESC`
  );

  await stmt.execute({
    user_id: await getUserId(pdo, user)
  });

  const rows = stmt.fetchAll();

  const out = [];

  for (const r of rows) {
    out.push({
      id: intval(r.id),
      vehicle_name: r.vehicle_name,
      brand: r.brand,
      model: r.model,
      year: isset(r.year) ? intval(r.year) : null,
      vin: r.vin,
      created_at: r.created_at
    });
  }

  sendJson(out);
}

export async function vehicleCreate() {
  const user = requireAuth();
  const body = await jsonBody();
  const pdo = await getPdo();

  const userId = await getUserId(pdo, user);

  const vehicleName = trim(strval(body.vehicle_name ?? ''));
  const brand = trim(strval(body.brand ?? ''));
  const model = trim(strval(body.model ?? ''));
  let year = body.year ?? null;
  const vin = trim(strval(body.vin ?? ''));

  if (vehicleName === '') {
    sendError('vehicle_name is required', 400);
  }

  if (year !== null && year !== '') {
    year = intval(year);
  } else {
    year = null;
  }

  const stmt = pdo.prepare(
    `INSERT INTO \`vehicles\`
           (user_id, vehicle_name, brand, model, year, vin)
           VALUES
           (:user_id, :vehicle_name, :brand, :model, :year, :vin)`
  );

  await stmt.execute({
    user_id: userId,
    vehicle_name: vehicleName,
    brand: brand,
    model: model,
    year: year,
    vin: vin
  });

  const id = intval(pdo.lastInsertId());

  sendJson(
    {
      id: id,
      user_id: userId,
      vehicle_name: vehicleName,
      brand: brand,
      model: model,
      year: year,
      vin: vin
    },
    201
  );
}

export async function vehicleUpdate(id) {
  const user = requireAuth();
  const body = await jsonBody();
  const pdo = await getPdo();

  const userId = await getUserId(pdo, user);

  const vehicleName = trim(strval(body.vehicle_name ?? ''));
  const brand = trim(strval(body.brand ?? ''));
  const model = trim(strval(body.model ?? ''));
  let year = body.year ?? null;
  const vin = trim(strval(body.vin ?? ''));

  if (vehicleName === '') {
    sendError('vehicle_name is required', 400);
  }

  if (year !== null && year !== '') {
    year = intval(year);
  } else {
    year = null;
  }

  const stmt = pdo.prepare(
    `UPDATE \`vehicles\`
           SET vehicle_name = :vehicle_name,
               brand = :brand,
               model = :model,
               year = :year,
               vin = :vin
           WHERE id = :id
             AND user_id = :user_id`
  );

  await stmt.execute({
    vehicle_name: vehicleName,
    brand: brand,
    model: model,
    year: year,
    vin: vin,
    id: id,
    user_id: userId
  });

  if (stmt.rowCount() === 0) {
    sendError('Vehicle not found', 404);
  }

  sendJson({
    id: id,
    vehicle_name: vehicleName,
    brand: brand,
    model: model,
    year: year,
    vin: vin
  });
}

export async function vehicleDelete(id) {
  const user = requireAuth();
  const pdo = await getPdo();

  const userId = await getUserId(pdo, user);

  const stmt = pdo.prepare(
    `DELETE FROM \`vehicles\`
           WHERE id = :id
             AND user_id = :user_id`
  );

  await stmt.execute({
    id: id,
    user_id: userId
  });

  if (stmt.rowCount() === 0) {
    sendError('Vehicle not found', 404);
  }

  sendJson({
    success: true,
    id: id
  });
}

async function getUserId(pdo, user) {
  const username = strval(user.u ?? '');

  if (username === '') {
    sendError('Authenticated username missing', 401);
  }

  const stmt = pdo.prepare('SELECT id FROM `users` WHERE username = :username LIMIT 1');

  await stmt.execute({
    username: username
  });

  const id = stmt.fetchColumn();

  if (id === false) {
    sendError('Authenticated user not found', 401);
  }

  return intval(id);
}
