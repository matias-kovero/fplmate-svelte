import { writable, get } from 'svelte/store';

export const season = writable(undefined);

export async function setSeason(_data) {
  let hasData = get(season);
  if (hasData) return;

  let data = await _data.then((r) => r.json());
  season.update((old) => {
    old = data;
    return old;
  });
  return data;
}

/**
 * Get current gameweeks id
 * @returns {number}
 */
export function currentGameweek() {
  return get(season).events.find(e => e.is_current).id;
}
/**
 * Get the last gameweek
 * @returns {number}
 */
export function lastGameweek() {
  return get(season).events.length;
}

/**
 * Helper object that has functions to get
 * data from the season object.
 */
/**
 * All functions needed in fixtures
 */
export const hpFix = {
  currentGameweek
};
