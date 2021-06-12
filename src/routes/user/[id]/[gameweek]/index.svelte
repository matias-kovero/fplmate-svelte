<script context="module">
  export async function load({ page, fetch }) {
    const { id, gameweek } = page.params;
    const [ picks, user ] = await Promise.all([
      await fetch(`/user/${id}/${gameweek}.json`).then((r) => r.json()),
      await fetch(`/user/${id}.json`).then((r) => r.json())
    ]);

    return { props: { id, picks, gameweek, user } };
  }
</script>

<script>
  export let picks, id, user, gameweek;
  import Controls from '$lib/components/users/Controls.svelte';
  import Roster from '$lib/components/users/Roster.svelte';
</script>

<svelte:head>
	<title>{user.name} | GW {gameweek}</title>
</svelte:head>

<div class="user-gameweek">
  <Controls data={picks.entry_history} root_url={`/user/${id}`} />

  <div class="gw-info">
    <div class="chips">
      <div>Chips</div>
      {#if picks.active_chip}
        <div>{picks.active_chip}</div>
      {:else}
        <div>x</div>
      {/if}
    </div>
    <div class="subs">
      <div>Subs</div>
      <div>{picks.automatic_subs.length}</div>
    </div>
  </div>

  <Roster picks={picks.picks} />
  <!-- <pre>{JSON.stringify(picks, null, 2)}</pre> -->
</div>

<style>
  .user-gameweek {
    display: grid;
    gap: 1em;
  }
  .gw-info {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
  .gw-info > div {
    text-align: center;
  }
</style>