import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { slug } = params;
  const fixture = await api.get(`fixtures/?event=${slug}`, locals.userid);
  return { body: fixture };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}