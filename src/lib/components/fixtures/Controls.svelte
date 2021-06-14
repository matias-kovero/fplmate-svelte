<script>
  export let gameweek;
  import { lastGameweek } from '$lib/stores/season';

  // Button states
  $: last = lastGameweek();
  $: current = gameweek.id;
  $: prev = current > 1 ? current - 1 : 0;
  $: next = current < $last ? current + 1 : 0;

  // Info of current gameweek
  $: deadline = new Date(gameweek.deadline_time).toDateString().slice(0, -4);
  $: time = new Date(gameweek.deadline_time).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

</script>

<div class="container">
  <div class={prev ? `prev`: 'prev disabled'}>
    {#if prev}
      <a sveltekit:prefetch href={`/fixtures/${prev}`} class="btn">Prev</a>
    {:else}
      <div class="btn">Prev</div>
    {/if}
  </div>
  <div class="info">
    <div>{deadline} {time}</div>
    <div>GW {current}</div>
    <!-- <div class="bg-bottom"></div> -->
  </div>
  <div class={next ? `next`: 'next disabled'}>
    {#if next}
      <a sveltekit:prefetch href={`/fixtures/${next}`} class="btn">Next</a>
    {:else}
      <div class="btn">Next</div>
    {/if}
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 80px 1fr 80px;
    height: 50px;
    color: var(--text1);
    position: relative;
    filter: drop-shadow(1px 2px 5px #0000001e);
  }
  .prev {
    transform: skew(15deg);
    transform-origin: top right;
    background-color: var(--surface4);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 10px;
  }
  .info {
    background-color: var(--surface2);
    display: grid;
    place-items: center;
    font-size: small;
  }
  .next {
    transform: skew(-15deg);
    transform-origin: top left;
    background-color: var(--surface4);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 10px;
  }
  .btn {
    height: 100%;
    display: grid;
    place-items: center;
    text-decoration: none;
  }
  a { 
    color: var(--text1);
    -webkit-tap-highlight-color: transparent;
  }
  .prev > .btn { transform: skew(-15deg); }
  .next > .btn { transform: skew(15deg); }
  .disabled > .btn {
    filter: opacity(0.5);
  }
  .disabled { background-color: var(--surface3) !important;}
  .bg-bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: 4px;
  }
  .bg-bottom {
    bottom: 0;
    background: #00000014;
  }
</style>