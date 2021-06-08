import { session } from '$app/stores';
import { derived } from 'svelte/store';

export function currentGameweek() {
  return derived(session, $s => $s.season.events.find(e => e.is_current).id);
}

/**
 * Get given gameweeks event object.
 * @param {number} id
 */
export function getGameweek(id) {
  return derived(session, $s => $s.season.events.find(e => e.id === id));
}

export function lastGameweek() {
  return derived(session, $s => $s.season.events.length);
}