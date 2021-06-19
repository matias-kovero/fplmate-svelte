import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { classic, id } = params;
  const league = await api.get(`api/leagues-classic/${id}/standings`);
  return { body: league };
}