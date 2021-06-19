<script lang="ts">
  export let user: import("$lib/types").ResultsEntity;
</script>

<div class="container">
  <div class="position">{user.rank}</div>
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
    /* background: var(--surface2); */
  }
  .info {
    /* text-align: left; */
    width: 100%;
    /* font-size: 80%; */
  }
  .owner {
    font-size: small;
  }
</style>