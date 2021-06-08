import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  let gameweek = locals.season.events.find(e => e.is_current).id;
  const event = await api.get(`fixtures/?event=${gameweek}`);
  return { body: event };
}