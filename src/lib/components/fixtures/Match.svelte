<script lang="ts">
  import { getTeam } from '$lib/stores/season';
  import { getTeamBadge } from '$lib/utils';
  import type { MatchesEntity } from '$lib/types';;

  // https://svelte.dev/tutorial/context-api
  import { setContext } from 'svelte';

  export let match: MatchesEntity;
  // Childs will have access to the given data, no need to pass props :)
  setContext('match', { match });
  /* On Child use:
    import { getContext } from 'svelte';
    const { match } = getContext('match');
  */

  $: team_h = getTeam(match.team_h);
  $: team_a = getTeam(match.team_a);

  $: badge_h = getTeamBadge($team_h.code);
  $: badge_a = getTeamBadge($team_a.code);
</script>

<div class="match-container">
  <div class="team-h">
    <div class="name">{$team_h.name}</div>
    <div class="logo">
      <img 
        alt={$team_h.short_name} 
        src={badge_h.small}
        sizes="(min-width: 1024px) 40px, 30px"
        srcset={`${badge_h.small} 40w, ${badge_h.big} 80w,`}
      />
    </div>
  </div>
  <div class="score">
    <div class="score-end">{match.team_h_score}</div>
    <div class="score-end">{match.team_a_score}</div>
  </div>
  <div class="team-a">
    <div class="logo">
      <img 
        alt={$team_a.short_name} 
        src={badge_a.small}
        sizes="(min-width: 1024px) 40px, 30px"
        srcset={`${badge_a.small} 40w, ${badge_a.big} 80w,`}
      />
    </div>
    <div class="name">{$team_a.name}</div>
  </div>
</div>

<style>
  .match-container {
    background-color: var(--surface2);
    display: grid;
    grid-template-columns: minmax(100px, 45%) minmax(80px, 10%) minmax(100px, 45%);
    padding: .3em;
    place-items: center;
    border-bottom: 1px solid var(--surface1);
  }
  .team-h, .team-a {
    display: grid;
    width: 100%;
    place-items: center;
    word-break: break-all;
  }
  .team-h {
    text-align: right;
    grid-template-columns: 1fr auto;
  }
  .team-a {
    text-align: left;
    grid-template-columns: auto 1fr;
  }
  .name {
    font-size: x-small;
    font-weight: 700;
  }
  .score {
    display: grid;
    place-items: center;
    grid-template-columns: auto auto;
    padding: .4em;
    background: var(--darkpurple);
  }
  .score-end {
    padding: .3em .4em;
    font-weight: 700;
    display: grid;
    place-items: center;
    background: var(--darkpurple);
    color: #fff;
  }
  .score-end:first-child {
    border-right: 1px solid hsla(0, 0%, 100%, .5);
  }
</style>