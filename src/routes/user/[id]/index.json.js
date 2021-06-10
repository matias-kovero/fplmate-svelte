import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  const { id } = params;
  const user = await api.get(`api/entry/${id}/`, locals.userid);
  if (user) {
    //console.log('[User]:' , user.id, user.name);
  }
  return { body: user };
}