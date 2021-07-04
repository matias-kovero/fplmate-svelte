<script lang="ts">
  import { data, getFixtures } from '$lib/stores/fixtures';
  import Pill from "./pill.svelte";
  export let id: number;
  export let team: number;
  export let count = 6;
  export let blink = false;
  
  if (count > 6) count = 6;

  $: getFixtures(team, id);
</script>

<div class="fixture-wrapper">
  {#if $data[team]}
    {#each [...$data[team]].slice(0, count) as fixture}
      <Pill {fixture} {blink} />
    {/each}
  {:else}
    {#each Array(count) as _}
      <span>-</span>
    {/each}
  {/if}
</div>

<style>
  div {
    display: flex;
    gap: .25em;
  }
  span {
    border-radius: 20%;
    width: 24px !important;
    display: grid;
    width: 100%;
    place-items: center;
    font-size: xx-small;
    line-height: 1.5;
    background-color: var(--gray);
  }
</style>