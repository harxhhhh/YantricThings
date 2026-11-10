/**
 * Read-only diagnostic catalog lists (ECUs, DIDs, DTCs, routines, flash, freeze frames, UDS services, security).
 */
import { requireAuth } from '#lib/server/auth/auth.js';
import { getPdo } from '#lib/server/db/connection.js';
import { fetchAllSafe, resolveTable } from '#lib/server/db/table-helper.js';
import { sendError, sendJson } from '#lib/server/http/json-response.js';
import { boolval, intval, isset, strval } from '#lib/server/utils/php.js';

export async function ecuList() {
  requireAuth();
  const pdo = await getPdo();
  const rows = await fetchAllSafe(pdo, 'SELECT * FROM `ecu` ORDER BY id');
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      name: strval(r.name ?? r.ecu_name ?? 'ECU'),
      manufacturer: r.manufacturer ?? null,
      can_tx_id: r.can_tx_id ?? r.tx_id ?? null,
      can_rx_id: r.can_rx_id ?? r.rx_id ?? null,
      protocol: r.protocol ?? null,
      description: r.description ?? null,
      can_speed: isset(r.can_speed) ? intval(r.can_speed) : null,
      can_fd_support: isset(r.can_fd_support) ? intval(r.can_fd_support) : null,
      security_library: r.security_library ?? null,
      seed_subfunc: isset(r.seed_subfunc) ? intval(r.seed_subfunc) : null,
      security_seed_byte_limit: isset(r.security_seed_byte_limit) ? intval(r.security_seed_byte_limit) : null,
      uds_profile: r.uds_profile ?? null
    });
  }
  sendJson(out);
}

export async function didList() {
  requireAuth();
  const pdo = await getPdo();
  const rows = await fetchAllSafe(pdo, 'SELECT * FROM `did` ORDER BY id');
  const out = [];
  for (const r of rows) {
    out.push({
      did: strval(r.did ?? r.did_id ?? r.identifier ?? ''),
      name: r.name ?? r.did_name ?? null,
      description: r.description ?? null,
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? null,
      length: isset(r.length) ? intval(r.length) : isset(r.data_length) ? intval(r.data_length) : null,
      read_access: r.read_access ?? null,
      write_access: r.write_access ?? null,
      security_level: isset(r.security_level) ? intval(r.security_level) : null,
      session: r.session ?? null,
      unit: r.unit ?? null,
      value: r.value ?? null
    });
  }
  sendJson(out);
}

export async function didByKey(did) {
  requireAuth();
  const pdo = await getPdo();
  let rows = await fetchAllSafe(
    pdo,
    'SELECT * FROM `did` WHERE `did` = :d OR `did_id` = :d2 LIMIT 1',
    { d: did, d2: did }
  );
  if (!rows.length) {
    // Fallback: scan list
    for (const r of await fetchAllSafe(pdo, 'SELECT * FROM `did`')) {
      const key = strval(r.did ?? r.did_id ?? '');
      if (key.toLowerCase() === did.toLowerCase()) {
        rows = [r];
        break;
      }
    }
  }
  if (!rows.length) {
    sendError('DID not found', 404);
  }
  const r = rows[0];
  sendJson({
    did: strval(r.did ?? r.did_id ?? did),
    name: r.name ?? null,
    description: r.description ?? null,
    ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
    ecu_name: r.ecu_name ?? null,
    length: isset(r.length) ? intval(r.length) : null,
    read_access: r.read_access ?? null,
    write_access: r.write_access ?? null,
    security_level: isset(r.security_level) ? intval(r.security_level) : null,
    session: r.session ?? null,
    unit: r.unit ?? null,
    value: r.value ?? null
  });
}

export async function dtcList() {
  requireAuth();
  const pdo = await getPdo();
  const rows = await fetchAllSafe(pdo, 'SELECT * FROM `dtc` ORDER BY id');
  const out = [];
  for (const r of rows) {
    out.push({
      dtc: strval(r.dtc ?? r.dtc_code ?? r.code ?? ''),
      description: r.description ?? null,
      severity: r.severity ?? null,
      status: r.status ?? null,
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? null,
      timestamp: r.timestamp ?? r.created_at ?? null
    });
  }
  sendJson(out);
}

export async function routineList() {
  requireAuth();
  const pdo = await getPdo();
  const rows = await fetchAllSafe(pdo, 'SELECT * FROM `routine` ORDER BY id');
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      routine_id: r.routine_id ?? r.rid ?? null,
      name: r.name ?? null,
      description: r.description ?? null,
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? null,
      input_length: isset(r.input_length) ? intval(r.input_length) : null,
      output_length: isset(r.output_length) ? intval(r.output_length) : null,
      security_level: isset(r.security_level) ? intval(r.security_level) : null,
      session: r.session ?? null
    });
  }
  sendJson(out);
}

export async function flashList() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['flash_configuration', 'flash']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\` ORDER BY id`);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? null,
      bin_file: r.bin_file ?? r.filename ?? null,
      software_version: r.software_version ?? r.version ?? null,
      flash_start: r.flash_start ?? null,
      flash_end: r.flash_end ?? null
    });
  }
  sendJson(out);
}

export async function freezeFrameList() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['freeze_frame', 'freeze_frames']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\` ORDER BY id`);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      frame_id: r.frame_id ?? null,
      dtc_code: r.dtc_code ?? r.dtc ?? null,
      parameter: r.parameter ?? r.param ?? null,
      value: r.value ?? null,
      unit: r.unit ?? null,
      timestamp: r.timestamp ?? null,
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? null
    });
  }
  sendJson(out);
}

export async function udsServiceList() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['uds_service', 'uds_services']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\` ORDER BY id`);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      service_id: r.service_id ?? r.sid ?? null,
      service_name: r.service_name ?? r.name ?? null,
      sub_function: r.sub_function ?? r.subfunction ?? null,
      variant: r.variant ?? null,
      description: r.description ?? null,
      security_required: isset(r.security_required) ? boolval(r.security_required) : null,
      security_level: isset(r.security_level) ? intval(r.security_level) : null,
      target_session: r.target_session ?? null,
      sequence: r.sequence ?? null,
      session_default: isset(r.session_default) ? boolval(r.session_default) : null,
      session_extended: isset(r.session_extended) ? boolval(r.session_extended) : null,
      session_programming: isset(r.session_programming) ? boolval(r.session_programming) : null,
      addressing_mode: r.addressing_mode ?? null,
      profile_source: r.profile_source ?? null,
      ecu_id: isset(r.ecu_id) ? intval(r.ecu_id) : null,
      ecu_name: r.ecu_name ?? null
    });
  }
  sendJson(out);
}

export async function securityList() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['security_info', 'security']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\``);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      name: r.name ?? r.algorithm ?? r.level ?? 'security'
    });
  }
  sendJson(out);
}

export async function securityLibraryList() {
  requireAuth();
  const pdo = await getPdo();
  const table = await resolveTable(pdo, ['security_libranes', 'security_libraries', 'security_library']);
  if (!table) {
    sendJson([]);
  }
  const rows = await fetchAllSafe(pdo, `SELECT * FROM \`${table}\``);
  const out = [];
  for (const r of rows) {
    out.push({
      id: isset(r.id) ? intval(r.id) : null,
      library_type: strval(r.library_type ?? r.type ?? 'MMW'),
      file_name: strval(r.file_name ?? r.filename ?? ''),
      abi: strval(r.abi ?? 'arm64-v8a'),
      version: r.version ?? null,
      sha256: r.sha256 ?? null,
      file_size: isset(r.file_size) ? intval(r.file_size) : null,
      file_path: r.file_path ?? null,
      key_format: r.key_format ?? null,
      description: r.description ?? null
    });
  }
  sendJson(out);
}
