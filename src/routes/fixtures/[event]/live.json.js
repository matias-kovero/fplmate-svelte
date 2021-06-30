import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { event } = params;
  const live = await api.get(`api/event/${event}/live/`);
  return { body: live };
}