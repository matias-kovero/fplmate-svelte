import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { event } = params;
  console.log('[GET]', event);
  const response = await api.get(`fixtures/?event=${event}`);
  console.log('[DONE]', event);
  return { body: response };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}