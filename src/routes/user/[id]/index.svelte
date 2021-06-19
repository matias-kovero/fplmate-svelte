<script context="module">
  export async function load({ page, fetch, session }) {
    const gameweek = session.season.events.find(e => e.is_current).id;
    const { id } = page.params;
    const [ user ] = await Promise.all([
      await fetch(`/user/${id}.json`).then((r) => r.json())
    ]);

    return { props: { id, user, gameweek } };
  }
</script>

<script>
  export let user, id, gameweek;
  import Info from '$lib/components/users/Profile/Info.svelte';
  import Leagues from '$lib/components/users/Profile/Leagues.svelte';
</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<div class="user">
  <Info {user} />
  <Leagues leagues={user.leagues} {id} />
  <p>{user.name} - Check history: <a sveltekit:prefetch href={`/user/${id}/${gameweek}`}>here</a></p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
</div>

<style>
  pre {
    font-size: 10px;
  }
</style>