<script lang="ts">
  import type { Leagues } from "$lib/types";

  export let leagues: Leagues;
</script>

<div class="wrapper">
  <div class="title">Leagues</div>
  <div class="container-classic">
    {#each leagues.classic as league}
      <div class="league">
        <div class="name">{league.name}</div>
      </div>
    {/each}
  </div>
</div>