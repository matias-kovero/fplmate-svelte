/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Gamedays {
  gameday: number;
  label: string;
  matches?: (MatchesEntity)[] | null;
}
export interface MatchesEntity {
  code: number;
  event: number;
  finished: boolean;
  finished_provisional: boolean;
  id: number;
  kickoff_time: string;
  minutes: number;
  provisional_start_time: boolean;
  started: boolean;
  team_a: number;
  team_a_score: number;
  team_h: number;
  team_h_score: number;
  stats?: (StatsEntity)[] | null;
  team_h_difficulty: number;
  team_a_difficulty: number;
  pulse_id: number;
}
export interface StatsEntity {
  identifier: string;
  a?: (HEntityOrAEntity | null)[] | null;
  h?: (HEntityOrAEntity1 | null)[] | null;
}
export interface HEntityOrAEntity {
  value: number;
  element: number;
}
export interface HEntityOrAEntity1 {
  value: number;
  element: number;
}
