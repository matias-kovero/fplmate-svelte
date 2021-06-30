import { getType, getPlayerElement } from './stores/season';
import { get } from 'svelte/store';
import type { Gamedays, MatchesEntity, LiveData, EnrichedPlayerEntity } from './types';
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

/**
 * Return rank position to other players.  
 * If under 1% will return 2 decimal accuracy, else 0 decimal.
 */
export function rankPercent(rank: number, players: number): string {
  if (!rank || !players) return null;
  let npl = rank / players * 100;
  let pos = npl < 1 ? Math.round(npl*100) / 100 : Math.round(npl);
  return pos < 50 ? `Top: ${pos}%` : `Bottom: ${100-pos}%`;
}
/**
 * Return abrevated value of rank. _1 decimal accuracy._  
 * _Longest strings on xxx.xK_
 */
export function rankLabel(rank: number): string {
  if (!rank) return '?'; // |.?.|
  // Not on the mood to think -> throwing an ugly 'simple' if else mayhem.
  // Potentially, we could have only ifs as they return, but for clarity keeping elses.
  if (rank < 4) return rank === 1 ? '1st' : rank === 2 ? '2nd' : '3rd';
  else if (rank < 1E3) return `${rank}th`; // 1E3 == 10^3 == 1K
  else if (rank < 1E6) return `${+(rank /= 1E3).toFixed(1)}K`; // 10^6 == 1M
  else return `${+(rank /= 1E6).toFixed(1)}M`;
}

/**
 * Calculates points for players on given match.
 */
export function playersFromMatch(match: MatchesEntity, live: LiveData) {
  if (!live || !live.elements.length) return null;
  let elements = [];

  // Loop all gamestats, add element id's to array.
  elements = match.stats.reduce((out, i, arr) => {
    // Check both teams (away & home)
    let players = i.a.concat(i.h);
    if (players.length) {
      let ids = players.map(e => e.element);
      out.push(...ids);
    }
    return out;
  }, []);
  // Array might have duplicates (ex. player gains points in vaurious ways)
  elements = [... new Set(elements)];
  // Magic function to do the math
  return calculateMatch(elements, match, live);
}

/**
 * Counts points for player of a specific game.
 */
function calculateMatch(elements: number[], match: MatchesEntity, live: LiveData): EnrichedPlayerEntity[] {
  let players = [];
  let stats = getMatchStats(match);

  for (let element of elements) {
    let player = get(getPlayerElement(element));
    if (!player) continue; // Something is fck'd -> yeet
    let points = getPlayerPoints(player.id, live, match.id);
    let { bonus, remove } = getPlayerBPS(player.id, { gameweek: [match] });
    let cards = { yellow: 0, red: 0 };

    if (stats) {
      cards.yellow = stats.yellow_cards.find(p => p.element === element)?.value || 0;
      cards.red = stats.red_cards.find(p => p.element === element)?.value || 0;
    }

    if (bonus && points === player.event_points) {
      if (remove) points = (points - remove);
    }

    players.push({
      player,
      points: { value: points, bonus: bonus },
      cards: { yellow: cards.yellow, red: cards.red },
      sort: points + bonus
    });
  }

  players.sort((a,b) => b.sort - a.sort);
  return players;
}


function getMatchStats(match: MatchesEntity) {
  if (!match || !match.started || !match.stats) return null;

  let { a: ag, h: hg } = match.stats.find(s => s.identifier === 'goals_scored');
  let { a: aa, h: ha } = match.stats.find(s => s.identifier === 'assists');
  let { a: aog, h: hog } = match.stats.find(s => s.identifier === 'own_goals');
  let { a: aps, h: hps } = match.stats.find(s => s.identifier === 'penalties_saved');
  let { a: apm, h: hpm } = match.stats.find(s => s.identifier === 'penalties_missed');
  let { a: ayc, h: hyc } = match.stats.find(s => s.identifier === 'yellow_cards');
  let { a: arc, h: hrc } = match.stats.find(s => s.identifier === 'red_cards');
  let { a: as, h: hs } = match.stats.find(s => s.identifier === 'saves');

  return {
    goals: ag.concat(hg),
    assists: aa.concat(ha),
    own_goals: aog.concat(hog),
    penalties_saved: aps.concat(hps),
    penalties_missed: apm.concat(hpm),
    yellow_cards: ayc.concat(hyc),
    red_cards: arc.concat(hrc),
    saves: as.concat(hs)
  };
}

/**
 * Get livepoints for player from specific match.
 */
function getPlayerPoints(id: number, live: LiveData, fixture: number): number | null {
  if (!live || !id || !fixture) return null;
  let player = live.elements.find(e => e.id === id);
  if (!player) return null;

  let match = player.explain.find(e => e.fixture === fixture);
  if (match && player.stats) {
    return match.stats.reduce((a,b) => { return a + b.points }, 0);
  } 
  else return null;
}

/**
 * Gets players possible BPS, when match isn't even ended.
 */
function getPlayerBPS(id: number, match) {
  if (!match.gameweek) return null; // Player has no matches on current gameweek.
  let points = 0, remove = 0;
  // Looping matches, player might have multiple matches.
  match.gameweek.forEach((m: MatchesEntity) => {
    let m_points = 0;
    if (!m.started || !m.stats) return;
    let bps = m.stats.find(s => s.identifier === "bps");
    let players = [...bps.a, ...bps.h].sort((a,b) => b.value - a.value);
    // Check if player is found in bps, if not no need to calculate.
    if (!players.find(i => i.element === id)) return;

    /** TOP 3 Gains Points (3p, 2p, 1p) - can't be arsed to optimize */
    let f = Math.max.apply(Math, players.map(o => o.value));
    let s = Math.max.apply(Math, players.map(o => o.value != f ? o.value : null));
    let t = Math.max.apply(Math, players.map(o => o.value != f && o.value != s ? o.value : null));

    let p3 = players.filter(p => p.value === f);
    let p2 = players.filter(p => p.value === s);
    let p1 = players.filter(p => p.value === t);

    if (p3.find(i => i.element === id)) m_points += 3;
    else if (p2.find(i => i.element === id)) {
      if (p3.length < 2) m_points += 2;
      else if (p3.length < 3) m_points += 1;
    }
    else if (p1.find(i => i.element === id)) {
      if (p3.length + p2.length < 3) m_points += 1;
    }
    // Add points from match to ovr
    points += m_points;
    // If match already ended, we need to remove the bps to avoid duplicated points
    if (m.finished && m.finished_provisional) remove += m_points;
  });
  return { bonus: points, remove };
}
