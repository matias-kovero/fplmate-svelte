<script>
  /**
   * event, points, rank, rank_sort, overall_rank, bank, value, event_transfers, event_transfer_cost, points_on_bench
   */
  export let data;
  export let root_url; // Base url to do routing on. Is there a better way to handle this?
  //export let gameweek; // gameweek id - change to the event object

  import { lastGameweek } from '$lib/stores/season';
  let disabled = "javascript:void(0)";

  // Button states
  $: max = lastGameweek();
  $: id = data.event;
  $: prev = id > 1 ? id - 1 : 0;
  $: next = id < $max ? id + 1 : 0;

  $: points = data.points;
  //$: deadline = new Date(gameweek.deadline_time).toDateString().slice(0, -4); // Remove last 4 digits (year)
  //$: time = new Date(gameweek.deadline_time).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  // Not a fan how verbose the html code is. 
  // How to toggle prefetch?
</script>

<div class="controls">
  {#if prev}
  <a 
    href={`${root_url}/${prev}`} 
    sveltekit:prefetch 
    class="prev-btn">Prev
  </a>
  {:else}
  <a href={disabled} class="prev-btn disabled">Prev</a>
  {/if}
  <div class="gameweek-info">
    <span>GW {id}</span>
    <span>{data.points} | {data.total_points}</span>
  </div>
  {#if next}
  <a 
    href={`${root_url}/${next}`} 
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
    background: #0000000c;
    gap: 5px;
    grid-template-columns: 0.2fr 1fr 0.2fr;
    border-radius: 5px;
  }
  .controls a {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		color: var(--text1);
    background: var(--surface2);
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
		color: var(--text1);
    background: var(--surface2);
  }
</style>