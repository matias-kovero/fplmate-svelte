<script lang="ts">
  import { getStatsElement } from '$lib/stores/season';
  import Element from './element.svelte';
  import type { StatsEntity } from "$lib/types";
  export let stats: StatsEntity;

  $: st = getStatsElement(stats.identifier);
</script>

<li class="shadow">
  <div class="heading">{$st.label}</div>
  <div class="body">
    <ul class="stat-list">
      {#each stats.h as homeStat}
        <Element {...homeStat} />
      {/each}
    </ul>
    <ul class="stat-list">
      {#each stats.a as awayStat}
        <Element {...awayStat} />
      {/each}
    </ul>
  </div>
</li>

<style>
  li {
    margin-bottom: 2em;
    background: var(--surface2);
    list-style-type: none;
    border-radius: 5px;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  .heading {
    padding: .3em 1em;
    background-color: var(--darkpurple);
    color: white;
    text-align: center;
    font-weight: bolder;
    font-size: x-small;
    border-top-left-radius: 2.5px;
    border-top-right-radius: 2.5px;
  }
  .body {
    display: flex;
    padding-top: .5em;
    padding-bottom: .5em;
  }
  .stat-list {
    flex: 1 1 0%;
    padding: 0 1em;
  }
  .stat-list:first-child {
    border-right: 1px dotted var(--surface1);
    text-align: right;
  }
</style>