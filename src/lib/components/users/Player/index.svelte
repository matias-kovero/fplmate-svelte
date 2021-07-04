<!-- Component showing player information from given gameweek -->
<script lang="ts">
  import { getPlayer, getTeam } from '$lib/stores/season';
  import Shirt from './shirt.svelte';
  import Name from './name.svelte';

  export let pick: any;

  $: player = getPlayer(pick.element);
  $: team = $player ? getTeam($player.team) : null;
</script>
<!-- Use table ?? -->
<div class="shadow-1">
  <span>{$player?.selected_by_percent || '?'}</span>
  <Shirt {team} {player} />
  <Name {player} />
</div>

<style>
  div {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 40px 30px 1fr;
    background-color: var(--surface2);
    border-radius: 5px;
  }
  span {
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: x-small;
  }
</style>