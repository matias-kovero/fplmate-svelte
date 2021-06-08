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
  import Controls from '$lib/components/fixtures/Controls.svelte';
  import GwInfo from '$lib/components/fixtures/GameweekInfo.svelte';
  import Match from '$lib/components/fixtures/Match.svelte';
  export let matches; // gameweek_matches
  $: gameweek = getGameweek(matches[0].event);
</script>

<svelte:head>
  <title>Fixtures</title>
</svelte:head>

<div class="gameweek">
  {#await $gameweek then gameweek}
    <Controls {gameweek} />
    <GwInfo {gameweek} />
  {/await}

  <div class="gameweek-matches">
    {#each matches as match (match)}
      <Match {match} />
    {/each}
  </div>
  <!-- <p>Fixtures {$season.events.length}</p> -->
  <!-- Add components that are dependent on fixtures -->
  <!-- <pre>{JSON.stringify(matches, null, 2)}</pre> -->
</div>
<style>
  .gameweek, .gameweek-matches {
    display: grid;
    gap: 2em;
  }
  .gameweek-matches {
    padding-top: 2em;
  }
</style>