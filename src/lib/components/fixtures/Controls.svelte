<script>
  export let gameweek;
  import { lastGameweek } from '$lib/stores/season';
  let disabled = "javascript:void(0)";
  // Button states
  $: prev = gameweek > 1 ? gameweek - 1 : 0;
  $: next = gameweek < lastGameweek() ? gameweek + 1 : 0;
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
  <span>GW {gameweek}</span>
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
    font-size: 60%;
		font-weight: 800;
    min-height: 35px;
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
  .controls span {
    width: 100%;
		height: 100%;
    display: grid;
		place-items: center;
		color: var(--darkpurple);
    background: var(--pure-white);
  }
</style>