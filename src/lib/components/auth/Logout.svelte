<script>
  import { createEventDispatcher } from 'svelte';

  import { session } from '$app/stores';
  import Icon from 'carbon-icons-svelte/lib/Logout24/Logout24.svelte';
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

<div on:click={handleLogout}>
  <Icon />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
  }
</style>