<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { MatchesEntity, LiveData } from "$lib/types";
  import { playersFromMatch } from '$lib/utils';
  import Cell from './element.svelte';
  export let match: MatchesEntity, live: LiveData;

  $: players = playersFromMatch(match, live);
</script>

{#if players}
  <table class="shadow" transition:fade>
    <thead>
      <tr>
        <th>%</th>
        <th>Player</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      {#each players as data}
        <Cell {data} />
      {/each}
    </tbody>
  </table>
{:else}
  <div transition:fade>
    <div>Puput syö ruohoa</div>
    <small>Please wait, no data found.</small>
  </div>
{/if}


<style>
  table {
    border-spacing: 0;
    table-layout: fixed;
    width: 85%;
  }
  thead {
    color: #FFF; /* Find an var to this */
    background: var(--darkpurple);
    padding: .3em 1em;
    text-align: center;
    font-weight: bolder;
    font-size: x-small;
    border-top-left-radius: 2.5px;
    border-top-right-radius: 2.5px;
  }
  tbody {
    background: var(--surface2);
  }
  tr th:first-of-type {
    border-top-left-radius: 2.5px;
    width: 50px;
    padding: .3em 0em;
  }
  tr th:nth-of-type(2) {
    text-align: left;
  }
  tr th:last-of-type {
    border-top-right-radius: 2.5px;
    width: 70px;
  }
  div {
    display: grid;
    place-items: center;
  }
</style>