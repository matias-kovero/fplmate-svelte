import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { event } = params;
  const response = await api.get(`fixtures/?event=${event}`, locals.userid);
  return { body: response };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}