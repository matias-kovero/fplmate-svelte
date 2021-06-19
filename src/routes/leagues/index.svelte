<script context="module">
  export async function load({ fetch, session }) {

    if (!session.entry) {
      return {
        status: 302,
        redirect: '/leagues/login'
      };
    }

    const id = session.entry;

    const [ user ] = await Promise.all([
      await fetch(`/user/${id}.json`).then((r) => r.json())
    ]);

    return { props: { id, user } };
  }
</script>

<script>
  export let id, user;
  import { currentGameweek } from '$lib/stores/season';
  import Leagues from '$lib/components/users/Profile/Leagues.svelte';

  $: gameweek = currentGameweek();
</script>

<svelte:head>
  <title>Leagues</title>
</svelte:head>

<div class="leagues">
  <Leagues leagues={user.leagues} {id} />
</div>

<style>
</style>