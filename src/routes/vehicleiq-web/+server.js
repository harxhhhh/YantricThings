import { redirect } from '@sveltejs/kit';

// vehicleiq-web/index.html was just  <meta http-equiv="refresh" content="0; url=login/">
export const trailingSlash = 'always';

export function GET() {
  redirect(302, '/vehicleiq-web/login/');
}
