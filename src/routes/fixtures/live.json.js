import * as api from '$lib/api.js';

import oldData from '$lib/historyData/160920-live';
const develop = true;

export async function get({ params, locals }) {
  let gameweek = locals.season.events.find(e => e.is_current)?.id || 1;

  if (develop) {
    return { body: oldData }
  }
  const live = await api.get(`api/event/${gameweek}/live/`);
  return { body: live };
}