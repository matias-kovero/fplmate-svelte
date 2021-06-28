<script>
  export let gameweek;
  import IconAvg from 'carbon-icons-svelte/lib/Events24/Events24.svelte';
  import IconHigh from 'carbon-icons-svelte/lib/TrophyFilled32/TrophyFilled32.svelte';
  import IconArrow from 'carbon-icons-svelte/lib/ChevronRight24/ChevronRight24.svelte';
  $: invalid_data = gameweek.average_entry_score <= 0;
  $: hurl = `/user/${gameweek.highest_scoring_entry}`;
</script>

<div class="container" class:hidden={invalid_data}>
  <div class="skew">
    <div class="row">
      <div class="title"><span>AVG</span></div>
      <div class="divider"></div>
      <div class="title"><span>TOP</span></div>
    </div>
    <div class="row">
      <div class="content">
        <div class="avg-icon"><IconAvg /></div>
        <div class="avg-score">{gameweek.average_entry_score}</div>
      </div>
      <div class="divider"></div>
      <div class="content">
        <div class="king-icon"><IconHigh /></div>
        <div class="king-score">{gameweek.highest_score}</div>
        <!-- Should we instead navigate to /fixtures/{gw}/leader-->
        <a sveltekit:prefetch href={hurl}><IconArrow /></a>
      </div>
    </div>
  </div>
</div>

<style>
  .hidden {
    display: none;
  }
  .container {
    height: 60px;
  }
  .skew {
    transform: skew(-10deg);
    height: inherit;
    display: grid;
    grid-template-rows: auto 1fr;
    /* border: var(--surface1) solid 5px; */
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.123));
    padding: 0 .5em;
  }
  .row {
    /* height: inherit; */
    display: grid;
    grid-template-columns: .75fr 5px 1fr;
    /* border: var(--surface1) solid 5px; */
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.123));
    padding: 0 .5em;
  }
  .title {
    font-size: x-small;
    font-weight: 700;
    font-family: "Coiny";
    display: flex;
  }
  .title span {
    background: var(--surface2);
    padding: 0 .5em;
    margin-bottom: -.2em;
  }
  .content {
    background: var(--surface2);
    display: grid;
    grid-auto-flow: column;
    place-items: center;
  }
  .king-icon {
    color: #ffcc4d;
  }
  .avg-score, .king-score {
    font-family: "Coiny";
    font-size: x-large;
    color: var(--text1);
  }
  a { color: var(--text1); }
</style>