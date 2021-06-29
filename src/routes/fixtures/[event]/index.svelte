<script context="module">
  export async function load({ page, fetch }) {
    const { event } = page.params;

    // check that slug is number!!
    const [ matches ] = await Promise.all([
      await fetch(`/fixtures/${event}.json`).then((r) => r.json())
    ]);

    return { props: { event: parseInt(event), matches } };
  }
</script>

<script>
  import { getGameweek } from '$lib/stores/season';
  import { gameDays } from '$lib/utils';
  import Gameday from '$lib/components/fixtures/Gameday.svelte';
  import Controls from '$lib/components/fixtures/Controls.svelte';
  import GwInfo from '$lib/components/fixtures/GameweekInfo.svelte';
  import { onMount } from 'svelte';

  let Modal;

  onMount(async () => {
    const module = await import('svelte-simple-modal');
    Modal = module.default;
  });

  export let matches, event;

  $: gameweek = getGameweek(event);
  $: gamedays = gameDays(matches);
</script>

<svelte:head>
  <title>Gameweek - {event}</title>
</svelte:head>

<div class="gameweek">
  {#await $gameweek}
    <p>Loading...</p>
  {:then gameweek} 
    <Controls {gameweek} />
    <GwInfo {gameweek} />
  {/await}
  <svelte:component this={Modal}>
    <div class="gamedays">
      {#if gamedays && gamedays.length}
        {#each gamedays as gameday (gameday)}
          <Gameday {gameday} />
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