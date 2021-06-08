<script>
  export let gameweek; // gameweek id - change to the event object
  import { lastGameweek } from '$lib/stores/season';
  let disabled = "javascript:void(0)";

  // Button states
  $: lastGw = lastGameweek();
  $: gwNum = gameweek.id;
  $: prev = gwNum > 1 ? gwNum - 1 : 0;
  $: next = gwNum < $lastGw ? gwNum + 1 : 0;

  //$: event = getGameweek(gameweek);
  $: deadline = new Date(gameweek.deadline_time).toDateString().slice(0, -4); // Remove last 4 digits (year)
  $: time = new Date(gameweek.deadline_time).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  // Not a fan how verbose the html code is. 
  // How to toggle prefetch?
</script>

<div class="controls">
  {#if prev}
  <a 
    href={`/fixtures/${prev}`} 
    sveltekit:prefetch 
    class="prev-btn">Prev
  </a>
  {:else}
  <a href={disabled} class="prev-btn disabled">Prev</a>
  {/if}
  <div class="gameweek-info">
    <span>GW {gwNum}</span>
    <span>{deadline} {time}</span>
  </div>
  {#if next}
  <a 
    href={`/fixtures/${next}`} 
    sveltekit:prefetch 
    class="next-btn">Next
  </a>
  {:else}
  <a href={disabled} class="next-btn disabled">Next</a>
  {/if}
</div>

<style>
  .controls {
    font-size: 80%;
		font-weight: 700;
    min-height: 3.5em;
    display: grid;
    background: #0000001a;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 5px;
  }
  .controls a {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		color: var(--darkpurple);
    background: var(--pure-white);
		text-decoration: none;
	}
  a.disabled {
    opacity: 0.5;
    cursor: default !important;
    pointer-events: none;
  }
  .prev-btn {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .next-btn {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .controls div {
    width: 100%;
		height: 100%;
    display: grid;
		place-items: center;
		color: var(--darkpurple);
    background: var(--pure-white);
  }
</style>