import { writable, get } from "svelte/store";
import * as api from '$lib/api';

const cropCount = 6;

export const data = writable({});

/**
 * Get team fixtures. If no fixtures are found, uses provided user id to fetch data.
 * @param {number} team team id.
 * @param {number} id Players id that is in wanted team.
 */
export async function getFixtures(team, id) {
  let fixture = get(data)[team];
  if (fixture) return fixture;

  return api.get(`api/element-summary/${id}/`).then((_data) => {
    data.update((state) => {
      // Here we could crop this data! - now it is sending the whole bunch.
      state[team] = cropFixtures(_data);
      return state;
    });
    return cropFixtures(_data);
  });
}
// This will get teams first fixture gameweek. When match is played it will move to history
// Will go out-of sync with players who have not yet played. 
function cropFixtures(_data) {
  let future = _data.fixtures;
  let gameweek = future[0].event;
  return future.filter(f => f.event >= gameweek && f.event < (gameweek + cropCount));
};