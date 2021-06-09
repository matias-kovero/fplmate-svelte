import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { event } = params;
  const response = await api.get(`api/fixtures/?event=${event}`);
  return { body: response };
}