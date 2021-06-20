<script lang="ts">
  import { session } from '$app/stores';
  export let user: import("$lib/types").ResultsEntity;
  $: isTop3 = user.rank <= 3;
  $: isLocal = user.entry == $session.entry;
  
</script>

<div class={isLocal ? 'container local' : 'container'}>
  {#if isTop3}
    <div class={`position r-${user.rank}`}>{user.rank}</div>
  {:else}
    <div class="position">{user.rank}</div>
  {/if}
  <div class="info">
    <div class="name">{user.entry_name}</div>
    <div class="owner">{user.player_name}</div>
  </div>
  <div class="event-points">{user.event_total}</div>
  <div class="points">{user.total}</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 40px 1fr 40px 60px;
    height: 40px;
    place-items: center;
    border-bottom: 1px solid var(--surface1);
  }
  .local {
    background: #c097ff94;
  }
  .info {
    width: 100%;
  }
  .owner {
    font-size: small;
  }
  .position {
    height: 34px;
    width: 34px;
    display: grid;
    place-items: center;
    border-radius: 2.5px;
  }
  .r-1 { background-color: var(--gold); }
  .r-2 { background-color: var(--silver); }
  .r-3 { background-color: var(--bronze); }
</style>