<script>
  export let gameweek;
</script>

<div class="gameweek-info">
  <div class="average-score">AVG points: {gameweek.average_entry_score}</div>
  <div class="highest-profile">
    <!-- Should we instead navigate to /fixtures/{gw}/leader-->
    <span>GW leader: <a sveltekit:prefetch href={`/user/${gameweek.highest_scoring_entry}`}>{gameweek.highest_scoring_entry}</a></span>
    <span>Points: {gameweek.highest_score}</span>
  </div>
</div>

<style>
  .gameweek-info {
    padding-top: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
  .average-score, .highest-profile {
    padding: 1em;
    background-color: var(--surface2);
    border-radius: 5px;
  }
</style>