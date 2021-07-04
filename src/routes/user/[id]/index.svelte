<script context="module">
  export async function load({ page, fetch, session }) {
    const gameweek = session.season.events.find(e => e.is_current)?.id || 1;
    const { id } = page.params;
    const [ user, roster, fixtures, live ] = await Promise.all([
      await fetch(`/user/${id}.json`).then((r) => r.json()),
      await fetch(`/user/${id}/${gameweek}.json`).then((r) => r.json()),
      await fetch(`/fixtures/raw.json`).then((r) => r.json()),
      await fetch(`/fixtures/live.json`).then((r) => r.json())
    ]);

    return { props: { id, user, gameweek, roster, fixtures, live } };
  }
</script>

<script>
  export let user, roster, fixtures, id, gameweek, live;
  import { createRosterData } from '$lib/utils';
  import Info from '$lib/components/users/Profile/Info.svelte';
  import Roster from '$lib/components/users/Roster/index.svelte';
  /* Create scuffed custom data for roster view */
  $: rosterData = createRosterData(fixtures, roster, live, gameweek);
</script>

<svelte:head>
  <title>{user.name}</title>
</svelte:head>

<div class="user">
  <Info {user} />
  {#if roster && rosterData}
    <Roster data={rosterData} />
  {/if}
</div>

<style>
  .user {
    display: grid;
    gap: 1em;
  }
</style>