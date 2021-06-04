<script>
  import { season, currentGameweek } from '$lib/stores/season';
</script>

<svelte:head>
  <title>Leagues</title>
</svelte:head>

<div class="fixtures">
  <p>The season has {$season.events.length} gameweeks.</p>
  <small>Current: GW{currentGameweek()}</small>
</div>

<style>
</style>