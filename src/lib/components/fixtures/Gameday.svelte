<script lang="ts">
  import Match from './Match.svelte';
  import MatchInfo from './ModalMatch/index.svelte';
  import CloseButton from '$lib/UI/ModalCloseButton.svelte';
  import { getContext } from 'svelte';
  export let gameday: import("$lib/types").Gamedays, live, position;

  const { open } = getContext('simple-modal');

  const showMatch = (match) => {
    open(MatchInfo, { match, live }, { closeButton: CloseButton });
  };

  $: [weekday, month, day, year] = gameday.label.split(' ');
</script>

<div class="container shadow" style={`grid-row: ${position}/${position};`}>
  <div class="title">
    <div></div>
    <span>{weekday} {day}</span>
    <div></div>
  </div>
  <div class="matches">
    {#each gameday.matches as match, i (match)}
      <Match {match} {showMatch} />
    {/each}
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-column: 1 / 1;
  }
  .title {
    font-weight: 700;
    font-size: small;
    display: flex;
    justify-content: center;
    /* grid-template-columns: minmax(100px, 45%) minmax(80px, 10%) minmax(100px, 45%); */
    position: relative;
    justify-content: center;
    max-height: 23px;
  }
  .title div {
    background: var(--surface2);
    width: 40px;
    z-index: -1;
  }
  .title div:first-of-type {
    transform: skewX(-30deg) translateY(0px) translateX(25px);
    border-top-left-radius: 5px;
  }
  .title div:last-of-type {
    transform: skewX(30deg) translateY(0px) translateX(-25px);
    border-top-right-radius: 5px;
  }
  .title span {
    padding: .3em .3em;
    text-transform: uppercase;
    display: grid;
    place-items: center;
    background: var(--surface2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .matches {
    background: var(--surface2);
    width: 100%;
    display: grid;
    border-radius: 5px;
  }
</style>