<script lang="ts">
  import type { ElementsEntity } from "$lib/stores/types";
  import type { Readable } from "svelte/store";

  export let player: Readable<ElementsEntity>;
</script>

<div>
  <small>{$player.web_name}</small>
  <div class="fixtures">() () ()</div>
</div>

<style>
  .fixtures {
    font-size: xx-small;
  }
</style>