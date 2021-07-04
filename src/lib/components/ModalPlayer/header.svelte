<script lang="ts">
  import { getType } from "$lib/stores/season";
  import type { ElementsEntity, TeamsEntity } from "$lib/stores/types";
  import type { Readable } from 'svelte/store';
  import { getPlayerPicture, getTeamBadge } from "$lib/utils";
  export let player: ElementsEntity, team: Readable<TeamsEntity>;

  $: picture = getPlayerPicture(player.code);
  $: badge = getTeamBadge($team.code);
  $: role = getType(player.element_type);
</script>

<div class="header shadow">
  <div class="container">
    <div class={`mugshot border-bg-${player.element_type} shadow`}>
      <picture>
        <img
          alt={player.web_name}
          src={picture}
          srcset={`${picture} 220w`}
          sizes="100px"
          class="shadow-alt"
        />
      </picture>
    </div>
    <div class="info">
      <div class="name">{player.first_name} {player.web_name}</div>
      <div class="team">
        <div class="badge">
          <img 
            alt={`${$team.name} badge`}
            src={`${badge.small}`}
            srcset={`${badge.small} 40w`}
            sizes="20px"
          />
        </div>
        <div class="position">
          <div>{$role.singular_name}</div>
          <div>{$team.name}</div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .header {
    padding: 1em;
    background: var(--surface1);
  }
  .container {
    display: grid;
    grid-template-columns: 80px 1fr;
  }
  .mugshot {
    min-width: 65px;
    position: relative;
    width: 70px;
    height: 82px;
    overflow: hidden;
    border: 2px solid;
    border-radius: 5px;
  }
  .mugshot img {
    position: absolute;
    left: -15px;
    top: 5px;
  }
  .team {
    display: grid;
    grid-template-columns: 25px 1fr;
    font-size: x-small;
  }
  .badge {
    display: grid;
    place-items: center;
  }
  .border-bg-1 { border-color: var(--neonyellow); }
  .border-bg-2 { border-color: var(--lightgreen); }
  .border-bg-3 { border-color: var(--cyan); }
  .border-bg-4 { border-color: var(--indico); }
</style>