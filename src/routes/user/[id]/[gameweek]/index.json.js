import * as api from '$lib/api.js';
import mockData from '$lib/historyData/1012365/event-20';

export async function get({ params, locals }) {
  const { id, gameweek } = params;
  if (id == 1012365) { // Mock-data
    console.log('Mock Picks');
    let picks = mockData;
    return { body: picks };
  }
  //let gameweek = locals.season.events.find(e => e.is_current).id;
  const picks = await api.get(`api/entry/${id}/event/${gameweek}/picks/`);
  return { body: picks };
}