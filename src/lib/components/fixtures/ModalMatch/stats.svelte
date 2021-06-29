<script lang="ts">
  import Stat from './statsCategory.svelte';
  import type { MatchesEntity } from "$lib/types";
  export let match: MatchesEntity;
</script>

<div>
  {#if match.stats.length}
  {#each match.stats as stats}
    {#if stats.a.length || stats.h.length}
      <Stat {stats} />
    {/if}
  {/each}
  {:else}
    <small>Waiting for data...</small>
  {/if}
</div>

<style>
  div {
    width: 85%;
    display: grid;
    place-items: stretch;
  }
  small {
    text-align: center;
  }
</style>