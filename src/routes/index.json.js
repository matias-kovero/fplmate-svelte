// Data fetched on index page
// This data is mandatory on everypage - so if user reloads
// an page in a different route - this endpoint should get also loaded.
// What could be the best way to handle this?
// https://github.com/sveltejs/sapper/issues/1627

import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  // The base info of FPL - mandatory to every other request
  const season = await api.get(`bootstrap-static/`);
  return { body: season };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}