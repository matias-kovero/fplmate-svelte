<script>
  import { session } from '$app/stores';
  import { currentGameweek } from '$lib/stores/season';

  $: gameweek = currentGameweek();
</script>

<svelte:head>
  <title>Leagues</title>
</svelte:head>

<div class="fixtures">
  <p>The season has {$session.season.events.length} gameweeks.</p>
  <small>Current: GW{$gameweek}</small>
</div>

<style>
</style>