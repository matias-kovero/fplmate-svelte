import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const fixtures = await api.get(`api/fixtures/`);
  return { body: fixtures };
}