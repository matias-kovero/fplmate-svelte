<script context="module">
  export async function load({ page, fetch }) {
    const { id } = page.params;
    const [ user ] = await Promise.all([
      await fetch(`/user/${id}.json`).then((r) => r.json())
    ]);

    return { props: { id, user } };
  }
</script>

<script>
  export let user, id;

</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<div class="user">
  <p>User | {id}</p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>