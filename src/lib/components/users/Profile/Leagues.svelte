<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Leagues } from "$lib/types";
  import { rankLabel } from '$lib/utils';
  import Icon from 'carbon-icons-svelte/lib/ChevronRight24/ChevronRight24.svelte';
  import Cup from "./Cup.svelte";
  import IconButton from '$lib/UI/IconButton.svelte';

  export let leagues: Leagues, id: number;

  function viewLeague(id: number) {
    if (!id) return;
    goto(`/leagues/classic-${id}`);
  }

</script>

<div class="wrapper">
  <div class="container-classic">
    <div class="title">Leagues</div>
    <div class="content">
      {#each leagues.classic as league}
        <IconButton>
          <svelte:fragment slot="icon">
            <div class={(league.entry_rank < 4 ? `rank r-${league.entry_rank}`: 'rank')}>{rankLabel(league.entry_rank)}</div>
          </svelte:fragment>
          <svelte:fragment slot="content">
            <div>{league.name}</div>
          </svelte:fragment>
          <div slot="btn" class="btn" on:click={() => viewLeague(league.id)}>
            <Icon />
          </div>
        </IconButton>
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
  .rank {
    font-weight: 700;
    font-size: 12px;
  }
  .btn {
    color: var(--surface4);
  }
  .r-1 { background-color: var(--gold); }
  .r-2 { background-color: var(--silver); }
  .r-3 { background-color: var(--bronze); }
</style>