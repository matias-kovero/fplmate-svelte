<script context="module">
  export async function load({ page, fetch, session }) {
    const gameweek = session.season.events.find(e => e.is_current).id;
    const { id } = page.params;
    const [ user, roster ] = await Promise.all([
      await fetch(`/user/${id}.json`).then((r) => r.json()),
      await fetch(`/user/${id}/${gameweek}.json`).then((r) => r.json())
    ]);

    return { props: { id, user, gameweek, roster } };
  }
</script>

<script>
  export let user, roster, id, gameweek;
  import Info from '$lib/components/users/Profile/Info.svelte';
  import Roster from '$lib/components/users/Roster.svelte';
</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<div class="user">
  <Info {user} />
  <Roster picks={roster.picks} />
</div>

<style>
  .user {
    display: grid;
    gap: 1em;
  }
</style>