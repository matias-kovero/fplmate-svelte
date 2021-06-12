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

/**
 * Get player basic information
 * @param {number} id player id
 * @returns {import('svelte/store').Readable<import('./types').ElementsEntity>}
 */
export function getPlayer(id)  {
  return derived(session, $s => $s.season.elements.find(p => p.id === id));
}

/**
 * Get team basic information
 * @param {number} id team id
 * @returns {import('svelte/store').Readable<import('./types').TeamsEntity>}
 */
export function getTeam(id) {
  return derived(session, $s => $s.season.teams.find(t => t.id === id));
}

/**
 * Get basic information of the player type.
 * @param {number} id 
 * @returns {import('svelte/store').Readable<import('./types').ElementTypesEntity>}
 */
export function getType(id) {
  return derived(session, $s => $s.season.element_types.find(t => t.id === id));
}