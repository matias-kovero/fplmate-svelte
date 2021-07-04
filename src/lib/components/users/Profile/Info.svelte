<script lang="ts">
  import type { Entry } from "$lib/types";
  import { session } from "$app/stores";
  import { rankLabel, rankPercent } from "$lib/utils";

  export let user: Entry;
  $: rankPosition = rankPercent(user.summary_event_rank, $session.season.total_players);
  $: overallLabel = rankLabel(user.summary_overall_rank);
  $: gwLabel = rankLabel(user.summary_event_rank);
</script>

<!-- <div class="title"></div> -->
<div class="wrapper">
  <div class="info">
    <div class="owner">{user.player_first_name} {user.player_last_name}</div>
    <div class="name">{user.name}</div>
    <br />
    <div class="rank-score">
      <div class="overall">Overall: {overallLabel}</div>
      <div class="gw">GW: {gwLabel}</div>
    </div>
  </div>
  <div class="gameweek">
    <div class="score">{user.summary_event_points || 0}</div>
    <div class="position">{rankPosition || ''}</div>
  </div>
</div>

<style>
  .wrapper {
    background: var(--surface2);
    border-radius: 5px;
    padding: .5em;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    filter: drop-shadow(2px 2px 2px #0000000e);
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  .info {
    height: 100%;
  }
  .name {
    font-size: small;
    font-weight: 700;
  }
  .score {
    font-family: 'Coiny';
    font-size: 50px;
  }
  .position {
    font-size: small;
  }

  .rank-score {
    font-weight: 700;
    font-size: small;
  }
</style>