<script lang="ts">
  import type { ElementsEntity, TeamsEntity } from "$lib/stores/types";
  import type { Readable } from "svelte/store";
  import { getTeamShirt } from '$lib/utils';

  export let player: Readable<ElementsEntity>;
  export let team: Readable<TeamsEntity>;
  
  $: shirt = getTeamShirt($player);
</script>

<div>
<picture>
    <source>
      <img
       alt={$team.short_name}
       sizes="20px"
       src={`${shirt}-66.png`}
       srcset={`${shirt}-66.png 66w, ${shirt}-110.png 110w, ${shirt}-220.png 220w`}
      />
  </picture>
</div>

<style>
  div {
    display: grid;
    place-items: center;
    grid-template-columns: auto auto;
  }
  picture {
    margin-top: 2px;
  }
</style>