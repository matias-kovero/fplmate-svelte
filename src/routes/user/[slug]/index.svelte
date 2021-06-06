<script context="module">
  export async function load({ page, fetch }) {
    const { slug } = page.params;
    const [ user ] = await Promise.all([
      await fetch(`/user/${slug}.json`).then((r) => r.json())
    ]);

    return { props: { slug, user } };
  }
</script>

<script>

  export let user;
  //export let season;
  export let slug;


</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<div class="user">
  <p>User</p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>