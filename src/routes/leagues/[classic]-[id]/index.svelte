<script context="module">
  export async function load({ page, fetch, session }) {
    const [ league, entry ] = await Promise.all([
      await fetch(`${page.path}.json`).then((r) => r.json()),
      session.entry ? fetch(`/user/${session.entry}.json`).then((r) => r.json()) : null,
    ]);

    return { props: { league, entry } };
  }
</script>

<script lang="ts">
  import type { Entry, LeagueEntity } from "$lib/types";
  import { page } from '$app/stores';
  import VirtualList from 'svelte-tiny-virtual-list';
  import InfiniteLoading from 'svelte-infinite-loading';
  import User from '$lib/components/leagues/stadingUser.svelte';
  import LocalUser from '$lib/components/leagues/currentUser.svelte';

  export let league: LeagueEntity, entry: Entry;

  const showCount = 7;
  let pp = league.standings.page;
  let hasMore = league.standings.has_next;

  /* Reactive stuff - updated will trigger render */
  $: info = league.league;
  $: new_entries = league.new_entries;
  $: standings = league.standings;

  /* Sink - fetch more stuff */
  function infiniteHandler({ detail: { complete, loaded, error }}) {
    if (!hasMore) complete();

    try {
      fetch(`${$page.path}/${pp+1}.json`)
        .then(res => res.json())
        .then((data) => {
          if (data.standings.results.length) {
            hasMore = data.standings.has_next;
            pp = data.standings.page;
            standings.results = [...standings.results, ...data.standings.results];
            loaded();
          } else complete();
        });
    } catch (e) {
      error();
    }
  }
</script>

<div class="wrapper">
  <div class="name">{info.name}</div>
  {#if standings.results.length >= showCount}
    <VirtualList
      width="100%"
      height={40 * showCount}
      itemCount={standings.results.length}
      itemSize={40}>
      <div slot="item" let:index let:style {style} class="list-item">
        <User user={standings.results[index]} />
      </div>
      <div slot="footer">
        <InfiniteLoading on:infinite={infiniteHandler}>
          <div slot="noResults"></div>
          <div slot="noMore">the end</div>
        </InfiniteLoading>
      </div>
    </VirtualList>
  {:else}
    <div class="fallback-list">
      {#each standings.results as user}
        <User {user} />
      {/each}
    </div>
  {/if}
  {#if entry}
    <div class="current-user">
      <LocalUser user={entry} {info} />
    </div>
  {/if}
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
  .wrapper :global(.virtual-list-wrapper), .fallback-list, .current-user {
    overflow: visible;
    overflow-x: hidden;
    white-space: nowrap;
    background: var(--surface2);
    border-radius: 5px;
  }
  .list-item { height: 40px; }
</style>