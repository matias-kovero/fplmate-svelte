import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { id, gameweek } = params;
  //let gameweek = locals.season.events.find(e => e.is_current).id;
  const picks = await api.get(`api/entry/${id}/event/${gameweek}/picks/`);
  return { body: picks };
}