<script context="module">
  export async function load({ page, fetch }) {
    const { slug } = page.params;

    // check that slug is number!!
    const [ fixture ] = await Promise.all([
      await fetch(`/fixtures/${slug}.json`).then((r) => r.json())
    ]);

    return { props: { slug: parseInt(slug), fixture } };
  }
</script>

<script>
  import Controls from '$lib/components/fixtures/Controls.svelte';
  export let fixture;
  //export let season;
  export let slug;

  import Match from '$lib/components/fixtures/Match.svelte';
</script>

<svelte:head>
  <title>Gameweek - {slug}</title>
</svelte:head>

<div class="user">
  <Controls gameweek={slug} />
  <p>Fixture</p>
  {#each fixture as match (match)}
    <Match {match} />
  {/each}
    <pre>{JSON.stringify(fixture, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>