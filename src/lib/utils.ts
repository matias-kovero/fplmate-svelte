import { getType } from './stores/season';
import type { Gamedays } from './types';
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
export function getTeamBadge(team_doce: number): { big: string, small: string } {
  if (!team_doce) team_doce = 0;
  return {
    big: `${API}/dist/img/badges/badge_${team_doce}_80.png`,
    small: `${API}/dist/img/badges/badge_${team_doce}_40.png`
  };
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
/**
 * Sort matches by gameday.
 */
export function gameDays(matches): Gamedays[] {
  const lastIdx = (arr, key, val) => {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (new Date(arr[i][key]).getDate() === val) return i;
    }
    return -1;
  }

  return matches.reduce((result, match, i, arr) => {
    let gameday = new Date(match.kickoff_time).getDate();
    let last = lastIdx(arr, 'kickoff_time', gameday);
    if (last <= i) {
      result.push({
        gameday,
        label: new Date(match.kickoff_time).toDateString(),
        matches: arr.reduce((day, m) => { // Recursive, too bloated - optimize maybe?
          if (new Date(m.kickoff_time).getDate() === gameday) day.push(m);
          return day;
        }, [])
      });
    }
    return result;
  }, []);
}