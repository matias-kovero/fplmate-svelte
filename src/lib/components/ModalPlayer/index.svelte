<script lang="ts">
  import Header from './header.svelte';
  import Body from './body.svelte';
  import type { ElementsEntity } from "$lib/stores/types";
  export let player: ElementsEntity, team;
  let sw;

  function limitRenderOnWidth(w: number) {
    if (w > 390) return 6;
    if (w >= 360) return 5;
    if (w >= 330) return 4;
    return 3;
  }
</script>

<svelte:window bind:innerWidth={sw}></svelte:window>

<div class="modal-wrapper">
  <Header {player} {team} />
  <Body {player} renderCount={limitRenderOnWidth(sw)}/>
</div>

<style>
  .modal-wrapper {
    height: 100vh;
    max-height: inherit;
    display: grid;
    grid-template-rows: 30% 1fr;
  }
</style>