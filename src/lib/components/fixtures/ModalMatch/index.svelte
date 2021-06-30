<script lang="ts">
  import { getTeam } from '$lib/stores/season';

  import TabPoints from './PlayerList/index.svelte';
  import TabStats from './stats.svelte';
  import TabPreds from './predictions.svelte';
  import IconPoints from 'carbon-icons-svelte/lib/Trophy16/Trophy16.svelte';
  import IconStats from 'carbon-icons-svelte/lib/ReportData16/ReportData16.svelte';
  import IconPred from 'carbon-icons-svelte/lib/Data_116/Data_116.svelte';

  import type { MatchesEntity, LiveData } from "$lib/types";
  export let match: MatchesEntity, live: LiveData;

  let tabs = [
    { id: 0, label: 'points', component: TabPoints, icon: IconPoints },
    { id: 1, label: 'stats', component: TabStats, icon: IconStats },
    { id: 2, label: 'predictions', component: TabPreds, icon: IconPred }
  ];

  $: active_tab = 0;

  $: team_h = getTeam(match.team_h);
  $: team_a = getTeam(match.team_a);
</script>

<div class="match-wrapper">
  <div class="header">
    <div class="home">{$team_h.name}</div>
    <div class="angle-right"></div>
    <div class="score">
      <div class="s-home">{match.team_h_score || 0}</div>
      <div class="divider"></div>
      <div class="s-away">{match.team_a_score || 0}</div>
    </div>
    <div class="angle-left"></div>
    <div class="away">{$team_a.name}</div>
  </div>
  <div class="content">
    <div class="tab-btn-group">
      {#each tabs as tab}
        <div 
          class="btn" 
          value={tab.id} 
          class:active={active_tab == tab.id}
          on:click={() => active_tab = tab.id}
        >
        <div>
          <svelte:component this={tab.icon} />
          <span>{tab.label}</span>
        </div>
      </div>
      {/each}
    </div>
    <div class="tab-content">
      <svelte:component this={tabs[active_tab].component} {match} {live} />
    </div>
  </div>
</div>

<style>
  .tab-btn-group {
    display: flex;
    justify-content: space-evenly;
    padding: 1em 3em .5em 3em;
    font-size: x-small;
  }
  .btn div {
    display: grid;
    grid-template-columns: auto 1fr;
    place-items: center;
    gap: .5em;
  }
  .btn span { 
    text-align: left; 
    width: 100%;
  }
  .tab-btn-group > div {
    width: 100%;
    place-items: center;
    display: grid;
    text-transform: capitalize;
    background: var(--surface4);
    padding: .5em 0;
    cursor: pointer;
  }
  .tab-btn-group > div:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .tab-btn-group > div:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .tab-btn-group > .active {
    background: var(--surface3);
  }
  .tab-content {
    padding: .5em;
    place-items: center;
    display: grid;
  }
  .match-wrapper {
    padding: 0;
    border-radius: 5px;
  }
  .header {
    font-weight: 700;
    font-size: small;
    display: flex;
    justify-content: center;
    position: relative;
    justify-content: center;
    background: var(--surface3);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 30px;
  }
  .header > .angle-right {
    transform: skewX(30deg) translateY(0px) translateX(25px);
    border-bottom-left-radius: 5px;
    background: var(--surface2);
    width: 40px;
    z-index: 0;
  }
  .header > .angle-left {
    transform: skewX(-30deg) translateY(0px) translateX(-25px);
    border-bottom-right-radius: 5px;
    background: var(--surface2);
    width: 40px;
    z-index: 0;
  }
  .header > .home, .header > .away {
    flex: 1;
    display: grid;
    font-size: smaller;
  }
  .header > .home {
    place-items: center end;
  }
  .header > .away {
    place-items: center start;
  }
  .header > .score {
    padding: .3em .3em;
    text-transform: uppercase;
    display: grid;
    place-items: center;
    background: var(--surface2);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    grid-template-columns: auto 1px auto;
    z-index: 1;
  }
  .score .s-home, .score .s-away {
    padding: 0 .75em;
  }
  .divider {
    content: "";
    background: var(--text1);
    width: 1px;
    height: 70%;
    filter: opacity(0.3);
  }
  .content {
    min-height: 20em;
    max-height: 100%;
    background-color: var(--surface1);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .tab-content {
    min-height: inherit;
    max-height: 30em;
    overflow-y: scroll;
  }
</style>