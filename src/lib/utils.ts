import { getType } from './stores/season';
/**
 * Proxy for https://fantasy.premierleague.com
 * Advice to create your own proxy as this one
 * might go down at any point. Don't rely on this.
 * - - I might as well track your traffic... - -
 */
const API = 'https://fpl-server.vercel.app';

/**
 * Get base url for teams badge.  
 * Big __80px__ else __40px__
 */
export function getTeamBadge(team_doce: number, big = false): string {
  if (!team_doce) team_doce = 0;
  return `${API}/dist/img/badges/badge_${team_doce}_${big ? 80 : 40}.png`;
}
/**
 * Get players shirt.  
 * You must add `-size.png` to the end of the returned url.  
 * Valid size: __66, 110, 220__
 */
export function getTeamShirt(player: any): string {
  if (!player || !player.team_code) return ''; // Will return invalid url - instead return empty shirt?
  let type;
  // Is this an memory leak?
  getType(player.element_type).subscribe(val => { type = val; });
  return `${API}/dist/img/shirts/standard/shirt_${player.team_code}${type.ui_shirt_specific ? `_${player.element_type}`: ''}`;
}