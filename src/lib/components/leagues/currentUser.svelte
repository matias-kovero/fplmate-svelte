<script lang="ts">
  import { rankLabel } from "$lib/utils";


  export let user: import("$lib/types").Entry, info: import("$lib/types").League;
  $: league = user.leagues.classic.find(l => l.id == info.id);
  $: isTop3 = league.entry_rank <= 3;
  $: rank = rankLabel(league.entry_rank);
</script>

<div class="container">
  {#if isTop3}
    <div class={`position r-${league.entry_rank}`}>{rank}</div>
  {:else}
    <div class="position">{rank}</div>
  {/if}
  <div class="info">
    <div class="name">{user.name}</div>
    <div class="owner">{user.player_first_name} {user.player_last_name}</div>
  </div>
  <div class="event-points">{user.summary_event_points}</div>
  <div class="points">{user.summary_overall_points}</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 40px 1fr 40px 60px;
    height: 40px;
    place-items: center;
    border-bottom: 1px solid var(--surface1);
  }
  .info {
    width: 100%;
  }
  .owner {
    font-size: small;
  }
  .position {
    height: 34px;
    width: 34px;
    display: grid;
    place-items: center;
    border-radius: 2.5px;
    font-weight: 700;
    font-size: 10px;
  }
  .r-1 { background-color: var(--gold); }
  .r-2 { background-color: var(--silver); }
  .r-3 { background-color: var(--bronze); }
</style>