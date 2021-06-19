<script lang="ts">
import { goto } from "$app/navigation";

  import type { Leagues } from "$lib/types";
  import { rankLabel } from '$lib/utils';
  import Dots from 'carbon-icons-svelte/lib/OverflowMenuVertical24/OverflowMenuVertical24.svelte';
  import Icon from 'carbon-icons-svelte/lib/ChevronRight24/ChevronRight24.svelte';
  import Cup from "./Cup.svelte";
  export let leagues: Leagues, id: number;

  function viewLeague(id: number) {
    if (!id) return;
    console.log('Show me:', id);
    goto(`/leagues/classic-${id}`);
  }

</script>

<div class="wrapper">
  <div class="container-classic">
    <div class="title">Leagues</div>
    <div class="content">
      {#each leagues.classic as league}
        <div class="league shadow">
          <div class={"rank" + (league.entry_rank < 4 ? ` r-${league.entry_rank}`: '')}>{rankLabel(league.entry_rank)}</div>
          <div class="name">{league.name}</div>
          <div class="btn" on:click={() => viewLeague(league.id)}>
            <Icon />
          </div>
        </div>
      {/each}
    </div>
  </div>

 {#if leagues.cup.matches.length}
    <div class="container-cup">
      <div class="title">Cups</div>
      <div class="content">
        {#each leagues.cup.matches as match}
          <Cup {match} {id} />
        {/each}
      </div>
    </div>
  {/if}

</div>

<style>
  .title {
    display: grid;
    place-items: center;
    padding-top: 1.5em;
    color: var(--text1);
    text-shadow: 0 0 1px var(--text2);
  }
  .container-classic, .container-classic > .content, .container-cup, .container-cup > .content {
    display: grid;
    gap: .5em;
  }
  .league {
    background: var(--surface2);
    padding: .25em;
    border-radius: 5px;
    height: 40px;
    display: grid;
    grid-template-columns: 45px 1fr 30px;
    place-items: center;
  }
  .rank {
    font-weight: 700;
    background: var(--surface3);
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    border-radius: 2.5px;
    font-size: 3.5vw;
  }
  .name {
    width: 100%;
    text-align: left;
    padding-left: 1em;
  }
  .btn {
    color: var(--surface4);
  }
  .r-1 { background-color: var(--gold); }
  .r-2 { background-color: var(--silver); }
  .r-3 { background-color: var(--bronze); }
</style>