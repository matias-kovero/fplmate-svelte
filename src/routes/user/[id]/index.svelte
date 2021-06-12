<script context="module">
  export async function load({ page, fetch, session }) {
    const gameweek = session.season.events.find(e => e.is_current).id;
    console.log('It is', gameweek, 'my doods.');
    const { id } = page.params;
    const [ user ] = await Promise.all([
      await fetch(`/user/${id}.json`).then((r) => r.json())
    ]);

    return { props: { id, user, gameweek } };
  }
</script>

<script>
  export let user, id, gameweek;

</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<div class="user">
  <p>{user.name} - Check history: <a sveltekit:prefetch href={`/user/${id}/${gameweek}`}>here</a></p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>