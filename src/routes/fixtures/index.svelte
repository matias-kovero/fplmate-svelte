<script context="module">
  export const prerender = true;
  
  export async function load({ page, fetch }) {
    const [ fixtures ] = await Promise.all([
      await fetch(`/fixtures.json`).then((r) => r.json())
    ]);
    return { props: { fixtures } };
  }
</script>

<script>

  export let fixtures;

</script>

<svelte:head>
  <title>Fixtures</title>
</svelte:head>

<div class="fixtures">
    <pre>{JSON.stringify(fixtures, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>