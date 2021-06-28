import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  let gameweek = locals.season.events.find(e => e.is_current)?.id || 1;
  const event = await api.get(`api/fixtures/?event=${gameweek}`);
  return { body: event };
}