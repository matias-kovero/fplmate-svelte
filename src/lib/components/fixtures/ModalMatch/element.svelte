<script lang="ts">
  import { getPlayerElement } from '$lib/stores/season';
  export let element: number, value: number;
  
  $: player = getPlayerElement(element);
</script>

{#if $player}
  <li>{$player.web_name} ({value})</li>
{:else}
  <li>MysteryMan</li>
{/if}

<style>
  li {
    padding: .25em 0;
    border-bottom: 1px solid var(--surface1);
    font-size: small;
    /* font-weight: 700; */
  }

  li:last-child {
    border-bottom: 0px;
  }
</style>