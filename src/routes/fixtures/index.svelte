<script context="module">  
  export async function load({ page, fetch }) {
    const [ fixtures ] = await Promise.all([
      await fetch(`/fixtures.json`).then((r) => r.json())
    ]);
    return { props: { fixtures } };
  }
</script>

<script>
  import { season, currentGameweek } from '$lib/stores/season';
  import Controls from '$lib/components/fixtures/Controls.svelte';
  export let fixtures;

</script>

<svelte:head>
  <title>Fixtures</title>
</svelte:head>

<div class="fixtures">
  <Controls gameweek={currentGameweek()} />

  <p>Fixtures {$season.events.length}</p>
  <!-- Add components that are dependent on fixtures -->
  <pre>{JSON.stringify(fixtures, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>