import * as api from '$lib/api.js';
import mockData from '$lib/historyData/1012365/entry';

export async function get({ params, locals }) {
  const { id } = params;
  if (id == 1012365) { // Mock-data
    let user = mockData;
    console.log('Using Mock Data!');
    return { body: user };
  }
  const user = await api.get(`api/entry/${id}/`, locals.userid);
  if (user) {
    //console.log('[User]:' , user.id, user.name);
  }
  return { body: user };
}