import { session } from '$app/stores';
import { derived, get } from 'svelte/store';

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

/* export function getRole(element_type) {
  if (!element_type) return null;
  return derived(session, $s => $s.season.element_types.find(t => t.id === id))
} */

/**
 * Gets all players of given element_type
 * @param {number} element_type 
 * @returns {import('./types').ElementsEntity[]}
 */
export function getPlayersOfType(element_type) {
  return get(derived(session, $s => $s.season.elements.filter(e => e.element_type === element_type)));
}

export function getStatsElement(name) {
  return derived(session, $s => $s.season.element_stats.find(e => e.name === name));
}

/**
 * Get Element information of given element id
 * @param {number} element 
 * @returns {import('svelte/store').Readable<import('./types').ElementsEntity>}
 */
export function getPlayerElement(element) {
  return derived(session, $s => $s.season.elements.find(e => e.id === element));
}