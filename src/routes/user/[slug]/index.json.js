import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { slug } = params;
  const user = await api.get(`entry/${slug}/`, locals.userid);
  console.log('[User]:', user);
  return { body: user };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}