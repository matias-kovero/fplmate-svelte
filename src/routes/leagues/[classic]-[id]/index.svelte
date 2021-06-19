<script context="module">
  export async function load({ page, fetch }) {
    const [ league ] = await Promise.all([
      await fetch(`${page.path}.json`).then((r) => r.json())
    ]);

    return { props: { league } };
  }
</script>

<script lang="ts">
  import type { LeagueEntity } from "$lib/types";
  import User from '$lib/components/leagues/stadingUser.svelte';
  export let league: LeagueEntity;

  $: info = league.league;
  $: entry = league.new_entries;
  $: standings = league.standings;
</script>

<div class="wrapper">
  <div class="name">{info.name}</div>
  <div class="players shadow">
    {#each standings.results as user}
      <User {user} />  
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    gap: 1em;
  }
  .name {
    display: grid;
    place-items: center;
    font-weight: 700;
  }
  .players {
    background: var(--surface2);
    border-radius: 5px;
  }
</style>