<script lang="ts">
  import type { RosterElement } from "$lib/types";
  import { getTeam } from '$lib/stores/season';
  import Shirt from './shirt.svelte';
  import Info from './info.svelte';
  export let element: RosterElement;

  /* MODAL POPUP */
  import ModalPlayer from '$lib/components/ModalPlayer/index.svelte';
  import CloseButton from '$lib/UI/ModalCloseButton.svelte';
  import { getContext } from 'svelte';
  const { open } = getContext('simple-modal');

  const showPlayer = () => {
    open(ModalPlayer, { player, team }, { closeButton: CloseButton });
  };

  $: player = element.player;
  $: team = player ? getTeam(player.team) : null;
  $: showPoints = element.started;
  $: hasBonus = element.points.bonus;
</script>

<tr class="element" on:click={() => showPlayer()}>
  <td class="selected">
    <span>{player?.selected_by_percent || '?'}</span>
  </td>
  <td class="info">
    <Shirt {team} {player} />
    <Info {element} />
  </td>
  {#if showPoints}
    {#if hasBonus}
      <td class="pts">{element.points.bonus + element.points.value}</td>
    {:else}
      <td class="pts">{element.points.value}</td>
    {/if}
  {:else}
    <td class="waiting">-</td>
  {/if}
</tr>

<style>
  .element {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 40px 1fr 60px;
    border-bottom: 1px solid var(--surface1);
  }
  .info {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 30px 1fr;
  }
  .selected, .pts, .waiting {
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: x-small;
  }
  .pts { font-size: small; }
</style>