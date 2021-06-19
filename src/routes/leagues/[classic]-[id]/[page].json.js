import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { classic, id, page } = params;
  if (classic == 'classic') {
    const league = await api.get(`api/leagues-classic/${id}/standings/?page_new_entries=1&page_standings=${page}`);
    return { body: league };
  } else {
    console.log('Help! <(´.¨)', classic);
    const league = await api.get(`api/leagues-classic/${id}/standings/?page_new_entries=1&page_standings=${page}`);
    return { body: league };
  }
}