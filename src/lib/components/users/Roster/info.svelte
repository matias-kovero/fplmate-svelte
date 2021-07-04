<script lang="ts">
  import Fixture from '../Fixture/index.svelte';
  import type { RosterElement } from "$lib/types";
  export let element: RosterElement;

  $: player = element.player;
  $: isSpecial = element.is_captain || element.is_vice_captain;
  $: badge = element.is_captain ? 'C' : 'V';

  $: ohBabyATriple = element.multiplier === 3 && element.is_captain;
  
</script>

<div class="container">
  <div class="name-col">
    <small>{player?.web_name || 'Mystery Man'}</small>
    {#if isSpecial}
    <div class="badges">
      <span class:captain={element.is_captain} class:vice-captain={element.is_vice_captain}>{badge}</span>
      {#if ohBabyATriple} <span class="triple">3x</span> {/if}
    </div>
    {/if}
  </div>
  <div class="fixtures">
    <Fixture id={player.id} team={player.team} blink />
  </div>
</div>

<style>
  .container {
    display: grid;
    place-items: start;
    grid-template-rows: auto auto;
  }
  .name-col, .badges {
    display: flex;
    gap: .25em;
    place-items: center;
  }
  .fixtures {
    display: flex;
    gap: .25em;
  }
  span {
    border-radius: 2.5px;
    font-size: x-small;
    display: grid;
    place-items: center;
    width: 20px;
  }
  .captain {
    background: var(--lightpurple);
    color: #FFF;
  }
  .vice-captain {
    background: var(--gray);
    color: #000;
  }
  .triple {
    background: var(--gold);
    border-radius: 30%;
    width: 15px;
    color: #000;
  }
</style>