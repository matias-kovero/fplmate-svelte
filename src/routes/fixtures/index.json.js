import * as api from '$lib/api.js';

import oldData from '$lib/historyData/160920-fixtures';
const develop = true;

export async function get({ params, locals }) {
  let gameweek = locals.season.events.find(e => e.is_current)?.id || 1;

  if (develop) {
    return { body: oldData }
  }
  const event = await api.get(`api/fixtures/?event=${gameweek}`);
  return { body: event };
}