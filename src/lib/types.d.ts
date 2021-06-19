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

/** ENTRY */
export interface Entry {
  id: number;
  joined_time: string;
  started_event: number;
  favourite_team?: null;
  player_first_name: string;
  player_last_name: string;
  player_region_id: number;
  player_region_name: string;
  player_region_iso_code_short: string;
  player_region_iso_code_long: string;
  summary_overall_points: number;
  summary_overall_rank: number;
  summary_event_points: number;
  summary_event_rank: number;
  current_event: number;
  leagues: Leagues;
  name: string;
  name_change_blocked: boolean;
  kit?: null;
  last_deadline_bank: number;
  last_deadline_value: number;
  last_deadline_total_transfers: number;
}
export interface Leagues {
  classic?: (ClassicEntity)[] | null;
  h2h?: (H2hEntity)[] | null;
  cup: Cup;
}
export interface ClassicEntity {
  id: number;
  name: string;
  short_name?: string | null;
  created: string;
  closed: boolean;
  rank?: null;
  max_entries?: null;
  league_type: string;
  scoring: string;
  admin_entry?: number | null;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league?: number | null;
  cup_qualified?: boolean | null;
  entry_rank: number;
  entry_last_rank: number;
}
export interface H2hEntity {
  id: number;
  name: string;
  short_name?: null;
  created: string;
  closed: boolean;
  rank?: null;
  max_entries: number;
  league_type: string;
  scoring: string;
  admin_entry: number;
  start_event: number;
  entry_can_leave: boolean;
  entry_can_admin: boolean;
  entry_can_invite: boolean;
  has_cup: boolean;
  cup_league?: null;
  cup_qualified?: null;
  entry_rank: number;
  entry_last_rank: number;
}
export interface Cup {
  matches?: (CupMatchesEntity)[] | null;
  status: CupStatus;
  cup_league: number;
}
export interface CupMatchesEntity {
  id: number;
  entry_1_entry: number;
  entry_1_name: string;
  entry_1_player_name: string;
  entry_1_points: number;
  entry_1_win: number;
  entry_1_draw: number;
  entry_1_loss: number;
  entry_1_total: number;
  entry_2_entry: number;
  entry_2_name: string;
  entry_2_player_name: string;
  entry_2_points: number;
  entry_2_win: number;
  entry_2_draw: number;
  entry_2_loss: number;
  entry_2_total: number;
  is_knockout: boolean;
  winner: number;
  seed_value?: null;
  event: number;
  tiebreak?: null;
}
export interface CupStatus {
  qualification_event: number;
  qualification_numbers: number;
  qualification_rank: number;
  qualification_state: string;
}
// leagues-classic/[id]/standings/
export interface LeagueEntity {
  league: League;
  new_entries: NewEntries;
  standings: Standings;
}
export interface League {
  id: number;
  name: string;
  created: string;
  closed: boolean;
  max_entries?: null;
  league_type: string;
  scoring: string;
  admin_entry?: null;
  start_event: number;
  code_privacy: string;
  has_cup: boolean;
  cup_league?: null;
  rank?: null;
}
export interface NewEntries {
  has_next: boolean;
  page: number;
  results?: (null)[] | null;
}
export interface Standings {
  has_next: boolean;
  page: number;
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  id: number;
  event_total: number;
  player_name: string;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  entry_name: string;
}
