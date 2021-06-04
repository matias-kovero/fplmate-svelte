// ===========================
// Fixtures route will forward data request here
// This file will send an request to our underlying api
// - Returns request from api + will get cached
// * How to invalidate cahce?
// * Are these tied to session?
// ===========================
import * as api from '$lib/api.js';
import { currentGameweek } from '$lib/stores/season';

export async function get({ params, locals }) {
  const event = await api.get(`fixtures/?event=${currentGameweek()}`);
  return { body: event };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}