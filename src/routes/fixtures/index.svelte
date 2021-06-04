<script context="module">  
  export async function load({ page, fetch }) {
    const [ matches ] = await Promise.all([
      await fetch(`/fixtures.json`).then((r) => r.json())
    ]);
    return { props: { matches } };
  }
</script>

<script>
  import { season, currentGameweek, getGameweek } from '$lib/stores/season';
  import Controls from '$lib/components/fixtures/Controls.svelte';
  import GwInfo from '$lib/components/fixtures/GameweekInfo.svelte';
  export let matches; // gameweek_matches

  $: gameweek = getGameweek(currentGameweek());
</script>

<svelte:head>
  <title>Fixtures</title>
</svelte:head>

<div class="fixtures">
  <Controls {gameweek} />
  <GwInfo {gameweek} />

  <p>Fixtures {$season.events.length}</p>
  <!-- Add components that are dependent on fixtures -->
  <pre>{JSON.stringify(matches, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>