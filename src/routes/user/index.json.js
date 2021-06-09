import * as api from '$lib/api.js';

export async function get({ params, locals }) {

  console.log('We have user:', locals.user);

  if (!locals.user) {
    return {
      headers: { Location: '/login'},
      status: 307,
    };
  }
  console.log('user endpoint!');
  // Do stuff..
  let gameweek = locals.season.events.find(e => e.is_current).id;
  const event = await api.get(`api/fixtures/?event=${gameweek}`);
  return { body: event };
}