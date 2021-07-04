<script context="module">  
  export async function load({ page, fetch }) {
    const [ matches, live ] = await Promise.all([
      await fetch(`/fixtures.json`).then((r) => r.json()),
      await fetch(`/fixtures/live.json`).then((r) => r.json()),
    ]);
    return { props: { matches, live } };
  }
</script>

<script>
  import { getGameweek } from '$lib/stores/season';
  import { gameDays } from '$lib/utils';
  import Controls from '$lib/components/fixtures/Controls.svelte';
  import GwInfo from '$lib/components/fixtures/GameweekInfo.svelte';
  import Gameday from '$lib/components/fixtures/Gameday.svelte';
  import { onMount } from 'svelte';

  let Modal;

  onMount(async () => {
    const module = await import('svelte-simple-modal');
    Modal = module.default;
  });

  export let matches, live;
  /* Get given gameweek - just verifying gw from matches array child */
  $: gameweek = getGameweek(matches[0].event);
  /* Gamedays of said gameweek */
  $: gamedays = gameDays(matches);
</script>

<svelte:head>
  <title>Fixtures</title>
</svelte:head>

<div class="gameweek">
  {#await $gameweek then gameweek}
    <Controls {gameweek} />
    <GwInfo {gameweek} />
  {/await}
  <svelte:component this={Modal}>
    <div class="gamedays">
      {#if gamedays && gamedays.length}
        {#each gamedays as gameday, i}
          <Gameday {gameday} {live} position={i} />
        {/each}
      {/if}
    </div>
  </svelte:component>
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