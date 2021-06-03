// ===========================
// Fixtures route will forward data request here
// This file will send an request to our underlying api
// - Returns request from api + will get cached
// * How to invalidate cahce?
// * Are these tied to session?
// ===========================
import * as api from '$lib/api.js';

export async function get({ params, locals }) {
  // This request will req all fixtures - high chance the user is only intrested a few only
  const fixtures = await api.get(`fixtures/`);
  return { body: fixtures };
}

// Where do we need this?
export async function put(request) {
  console.log('put', request);
}