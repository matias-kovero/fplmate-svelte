<script context="module">  
  export async function load({ page, fetch }) {
    const [ matches ] = await Promise.all([
      await fetch(`/fixtures.json`).then((r) => r.json())
    ]);
    return { props: { matches } };
  }
</script>

<script>
  import { getGameweek } from '$lib/stores/season';
  import { gameDays } from '$lib/utils';
  import Controls from '$lib/components/fixtures/Controls.svelte';
  import GwInfo from '$lib/components/fixtures/GameweekInfo.svelte';
  import Gameday from '$lib/components/fixtures/Gameday.svelte';

  export let matches;
  /* Get given gameweek */
  $: gameweek = getGameweek(matches[0].event);
  /* Gamedays of said gameweek */
  $: gamedays = gameDays(matches);
  /* Nav state, is an matche visible */
  $: showMatch = false;
</script>

<svelte:head>
  <title>Fixtures</title>
</svelte:head>

<div class="gameweek">
  {#await $gameweek then gameweek}
    <Controls {gameweek} />
    <GwInfo {gameweek} />
  {/await}

  <div class="gamedays">
    {#if gamedays && gamedays.length}
      {#each gamedays as gameday (gameday)}
        <Gameday {gameday} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .gamedays {
    display: grid;
    gap: 1em;
  }
  .gameweek {
    display: grid;
    gap: 2em;
  }
</style>