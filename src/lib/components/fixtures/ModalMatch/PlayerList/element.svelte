<script lang="ts">
  import { fade } from 'svelte/transition';
  import { getTeamShirt } from '$lib/utils';
  import { getTeam } from '$lib/stores/season';
  import type { EnrichedPlayerEntity } from "$lib/types";
  export let data: EnrichedPlayerEntity;

  $: player = data.player;
  $: shirt = getTeamShirt(player);
  $: team = getTeam(player.team);

  $: hasBonus = data.points.bonus;
  $: hasYellow = data.cards.yellow;
  $: hasRed = data.cards.red;
</script>

<tr transition:fade>
  <td>{player.selected_by_percent}</td>
  <td class="player">
    <div class="info">
      <div>{player.web_name}</div>
      <span>{$team.short_name}</span>
    </div>
    <div class="cards">
      {#if hasYellow}
        <span class="card yellow"></span>
      {:else if hasRed}
        <span class="card red"></span>
      {/if}
    </div>
  </td>
  {#if hasBonus}
    <td>
      <div>{data.points.bonus + data.points.value}</div> 
      <span>({data.points.value} + {data.points.bonus})</span>
    </td>
  {:else}
    <td>{data.points.value}</td>
  {/if}
</tr>

<style>
  tr td:first-of-type {
    width: 50px;
    font-size: x-small;
    font-weight: 700;
    text-align: center;
  }
  tr td:last-of-type {
    width: 60px;
    font-size: small;
    font-weight: 700;
    text-align: center;
  }
  span {
    font-size: xx-small;
  }
  td {
    padding: .25em 0;
    border-bottom: 1px solid var(--surface1);
  }
  .player {
    font-size: small;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .cards {
    display: grid;
    place-items: center;
  }
  .card {
    content: "";
    display: block;
    width: 13px;
    height: 20px;
    border-radius: 3px;
  }
  .red { background:  red; }
  .yellow { background:  yellow; }
</style>