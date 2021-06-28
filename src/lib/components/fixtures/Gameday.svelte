<script lang="ts">
  import Match from './Match.svelte';
  export let gameday: import("$lib/types").Gamedays;

  $: [weekday, month, day, year] = gameday.label.split(' ');
</script>

<div class="container">
  <div class="title">
    <span>{weekday} {day}</span>
  </div>
  <div class="matches shadow">
    {#each gameday.matches as match}
      <Match {match} />
    {/each}
  </div>
</div>

<style>
  .container {
    /* background: var(--surface2); */
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
  }
  .title {
    font-weight: 700;
    font-size: small;
    /* z-index: 2; */
    filter: drop-shadow(0px 2px 4px #00000015);
    /* margin-bottom: -.1em; */
  }
  .title span {
    padding: .3em .3em;
    text-transform: uppercase;
    background: var(--surface2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .matches {
    background: var(--surface2);
    width: 100%;
    display: grid;
    border-radius: 5px;
    /* border-top-left-radius: 0px; */
    /* filter: drop-shadow(0px 2px 4px #00000015); */
  }
</style>