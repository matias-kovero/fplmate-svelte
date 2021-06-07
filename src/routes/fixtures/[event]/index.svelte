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
  import { navigating } from '$app/stores';
  import { getGameweek } from '$lib/stores/season';
  import Controls from '$lib/components/fixtures/Controls.svelte';
  import GwInfo from '$lib/components/fixtures/GameweekInfo.svelte';
  import Match from '$lib/components/fixtures/Match.svelte';
  export let matches, event;

  $: gameweek = getGameweek(event);
</script>

<svelte:head>
  <title>Gameweek - {event}</title>
</svelte:head>

<div class="gameweek">
  <Controls {gameweek} />
  {#if $navigating}
    <p><b>from: </b>{$navigating.from.path}, <b>to: </b>{$navigating.to.path}</p>
  {/if}
  <GwInfo {gameweek} />

  <div class="gameweek-matches">
    {#each matches as match (match)}
      <Match {match} />
    {/each}
  </div>

  <pre>{JSON.stringify(matches, null, 2)}</pre>
</div>

<style>
  .gameweek, .gameweek-matches {
    display: grid;
    gap: 2em;
  }
  .gameweek-matches {
    padding-top: 2em;
  }

  pre {
    font-size: 10px;
  }
</style>