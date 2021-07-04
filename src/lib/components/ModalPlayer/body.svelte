<script lang="ts">
  import { getPlayersOfType } from '$lib/stores/season';
  import ListElement from './listelement.svelte';
  import type { ElementsEntity } from '$lib/stores/types';
  import VirtualList from 'svelte-tiny-virtual-list';
  export let player: ElementsEntity, renderCount: number;
  let displayCount = 7;
  let players = getPlayersOfType(player.element_type);
</script>

<div class="body">

  <div class="list-headers">
    <div>Pts</div>
    <div>Club</div>
    <div class="left-align">Name</div>
    <div>£</div>
    <div>ppM</div>
    <div>ppG</div>
  </div>

  <div class="suggestion-list">
    <VirtualList 
      width="auto"
      height={40 * displayCount}
      itemCount={players.length}
      itemSize={40}>
      <div slot="item" let:index let:style {style}>
        <ListElement player={players[index]} fixCount={renderCount} />
      </div>
    </VirtualList>
  </div>
</div>

<style>
  .body {
    padding: 1em;
    background: var(--surface3);
  }
  .list-headers {
    display: grid;
    place-items: center;
    grid-template-columns: 30px 40px 1fr 40px 40px 40px;
    font-weight: 700;
    font-size: small;
    background: var(--surface2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: .5em 0;
  }
  .suggestion-list {
    display: grid;
    gap: 1em;
  }
  .suggestion-list :global(.virtual-list-wrapper) {
    overflow: visible;
    overflow-x: hidden;
    white-space: nowrap;
    background: var(--surface2);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .left-align {
    text-align: left;
    width: 100%;
  }
</style>