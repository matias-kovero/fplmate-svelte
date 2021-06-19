<script>
  import { createEventDispatcher } from 'svelte';

  import { session } from '$app/stores';
  import Icon from 'carbon-icons-svelte/lib/Renew24/Renew24.svelte';
  import { logout } from './functions';

  const dispatch = createEventDispatcher();

  async function handleLogout() {
    if ($session.entry) {
      let ok = await logout($session.entry);
      if (ok) {
        $session.entry = null;
        dispatch('success');
      }
    }
  }
</script>

<div class="wrapper">
  <div class="btn" on:click={handleLogout}>
    <Icon />
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }
  .btn {
    background-color: var(--surface4);
    border-radius: 100%;
    padding: .3em;
    display: flex;
    filter: drop-shadow(2px 2px 2px #0000000e);
  }
</style>