<script lang="ts">
  import type { CupMatchesEntity } from "$lib/types";
  export let match: CupMatchesEntity, id: number;

 $: isWinner = match.winner == id;
 $: isEntry1 = match.entry_1_entry == id;
</script>

<div class="element shadow">
  {#if isWinner}
    <div class="results w">W</div>
  {:else}
    <div class="results l">L</div>
  {/if}
  <div class="info">
    {#if isEntry1}
    <div class="players">
      <div>{match.entry_1_name}</div>
      <div>{match.entry_2_name}</div>
    </div>
    <div class="player-score">
      <div>{match.entry_1_points}</div>
      <div>{match.entry_2_points}</div>
    </div>
    {:else}
    <div class="players">
      <div>{match.entry_2_name}</div>
      <div>{match.entry_1_name}</div>
    </div>
    <div class="player-score">
      <div>{match.entry_2_points}</div>
      <div>{match.entry_1_points}</div>
    </div>
    {/if}
  </div>
</div>

<style>
  .element {
    display: grid;
    grid-template-columns: 40px 1fr;
    background: var(--surface2);
    place-items: center;
    height: 40px;
    border-radius: 5px;
    padding: .25em;
  }
  .results {
    font-weight: 700;
    background: var(--surface3);
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    border-radius: 2.5px;
    color: var(--surface2);
  }
  .w { background: var(--lightgreen); }
  .l { background: var(--indico); }
  .info {
    display: grid;
    grid-template-columns: 1fr 20px;
    height: 100%;
    width: 100%;
    place-items: center;
  }
  .info div { 
    width: inherit;
    font-size: small;
  }
  .info  div > div:first-child {
    font-weight: 700;
  }
  .players { padding-left: 1.5em;}
</style>