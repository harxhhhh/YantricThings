import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
  // The PHP router used `(\d+)` for /api/vehicles/{id} and /api/reports/{id}.
  // The string itself is returned (not Number()) so ids like "007" still match, as in PHP.
  integer: (param) => (/^\d+$/.test(param) ? param : undefined)
});
