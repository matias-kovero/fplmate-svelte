/**
 * We have: Array of all mathces = 380 objects
 * Edit to: Array with Object by gameweek - containing its matches
 * Functions:
 * - Fetch original data
 * - Create our custom array after fetch
 * - Get specific gameweek
 */
 import { writable, get } from 'svelte/store';
 import * as api from '$lib/api';
 //import { fetchFixtures } from './api';
 
 /**
  * Internal store for the sorted data from api request
  */
 export const data = writable([]);
 
 /**
  * Fetch fixtures and update internal store.
  * This could be fired on initial component load
  * @returns 
  */
 export async function fetchData() {
   let hasData = get(data).length;
   console.log('Check data!', hasData);
   if (hasData) return hasData;

   return api.get(`/fixtures`).then((_data) => {
     let sorted = parseGameweeks(_data);
     console.log('Updating store!');
     data.update((oldData) => {
       oldData = sorted;
       return oldData;
     });
     return sorted;
   });
 };
 
 /**
  * Sort original data from api to { event: gameweek, matches: [] }
  * @param {*} gameweeks 
  * @returns 
  */
 function parseGameweeks(gameweeks) {
   return gameweeks.reduce((result, match, i, arr) => {
     //console.log(match);
     // event = gameweek, we want to stack every object with same event to arr
     //console.log(result.length, match.event, match.event == result.length);
     // Issue, won't get the last gameweek
     if (result.length < match.event)
     {
       //console.log(match);
       result.push({
         gameweek: match.event,
         matches: arr.filter(f => f.event === match.event),
       });
     }
     return result;
   }, []);
 };
 
 /**
  * Exported store containing matches of given gameweek
  */
 export const gameweek = writable({});
 
 export async function getGameweek(gw) {
   // Please check that we aren't going out_of_bounds
   // This should be invalidated everytime, just update gameweek from data.
   console.log('[getGameweek]', gw);
 
   let result = get(data).find(g => g.gameweek === gw);
   console.log('Getting from data store');
   gameweek.update((old) => {
     old = result;
     return old;
   });
   return result;
 }