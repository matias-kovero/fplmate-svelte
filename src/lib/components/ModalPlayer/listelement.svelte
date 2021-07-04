<script lang="ts">
  import { getTeam } from "$lib/stores/season";
  import Shirt from '../users/Roster/shirt.svelte';
  import Fixtures from '../users/Fixture/index.svelte';
  import type { ElementsEntity } from "$lib/stores/types";
  export let player: ElementsEntity, fixCount = 6;

  $: team = getTeam(player.team);
  $: price = player.now_cost / 10;
  $: ppM = player.total_points / price;
  $: ppG = player.points_per_game;

</script>

<div class="list-element">
  <div class="nbr-field">{player.total_points}</div>
  <Shirt {player} {team} />
  <div class="player-info">
    <div>{player.web_name}</div>
    <Fixtures id={player.id} team={player.team} count={fixCount} />
  </div>
  <div class="nbr-field">{price.toFixed(1)}</div>
  <div class="nbr-field">{ppM.toFixed(1)}</div>
  <div class="nbr-field">{ppG}</div>
</div>


<style>
  .list-element {
    height: inherit;
    border-bottom: 1px solid var(--surface3);
    display: grid;
    grid-template-columns: 30px 40px 1fr 40px 40px 40px;
    place-items: center;
  }
  .nbr-field { 
    font-size: x-small;
    font-weight: 700;
  }
  .player-info {
    text-align: left;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
</style>