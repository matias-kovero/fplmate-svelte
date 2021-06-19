<script lang="ts">
  import type { CupMatchesEntity } from "$lib/types";
  export let match: CupMatchesEntity;
</script>

<div class="cup">
  <div class="entry-score left">{match.entry_1_points}</div>
  <div class="entry-1">{match.entry_1_name}</div>
  <div class="score">VS</div>
  <div class="entry-2">{match.entry_2_name}</div>
  <div class="entry-score right">{match.entry_2_points}</div>
</div>

<style>
  .cup {
    display: grid;
    grid-template-columns: 40px 1fr 40px 1fr 40px;
    background: var(--surface2);
    place-items: center;
    height: 50px;
    border-radius: 5px;
    filter: drop-shadow(2px 2px 2px #0000000e);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 20px;
    border: solid 1px var(--surface4);
  }
  .cup div {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
  }
  .score {
    background: var(--surface4);
  }
  .entry-score {
    background: var(--surface3);
  }
  .entry-1, .entry-2 {
    font-size: 3.5vw;
  }
  .left { 
    border-top-left-radius: 15px;
    border-bottom-left-radius: 20px;
  }
  .right { 
    border-top-right-radius: 15px;
    border-bottom-right-radius: 20px;
  }
</style>