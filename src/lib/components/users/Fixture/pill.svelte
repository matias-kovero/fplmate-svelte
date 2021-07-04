<script lang="ts">
  import { fade } from 'svelte/transition';
  import { getTeam } from "$lib/stores/season";
  import { onInterval } from "$lib/utils";
  import type { FixturesEntity } from "$lib/types";

  export let fixture: FixturesEntity;
  export let blink;
  /* 
    Stack them by gameweek? 
    Remove current GW? - Useless, as can't act to it anymore
    Divider for next gw?
  */
  let location = fixture.is_home ? 'H' : 'A';
  $: opponent = fixture.is_home ? getTeam(fixture.team_a) : getTeam(fixture.team_h);

  let text, showTeam = true;
  
  if (blink) {
    onInterval(() => {
      showTeam = !showTeam;
      text = showTeam ? $opponent?.short_name : location;
    }, 5000);
  }
</script>

<div class={`fdr-${fixture.difficulty}`}>
  {#key text}
    <span in:fade>{text || $opponent?.short_name}</span>
  {/key}
</div>

<style>
  div {
    border-radius: 20%;
    width: 24px !important;
    display: grid;
    width: 100%;
    place-items: center;
    font-size: xx-small;
    line-height: 1.5;
  }
  span {
    padding: .1em 0;
    display: grid;
    place-items: center;
  }
</style>