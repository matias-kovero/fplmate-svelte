<script lang="ts">
  interface pick {
    element: number,
    position: number,
    multiplier: number,
    is_captain: boolean,
    is_vice_captain: boolean
  };
  export let picks: pick[];
  import Player from './Player/index.svelte';

  function is_playing(mult: number) {
    return mult > 0;
  }
</script>

<div class="profile-picks">
  {#each picks as pick}
    <Player {pick} />
  {/each}
</div>

<style>
  .profile-picks {
    display: grid;
    gap: .2em;
  }
</style>