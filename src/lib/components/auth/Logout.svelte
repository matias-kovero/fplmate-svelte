<script>
  import { createEventDispatcher } from 'svelte';

  import { session } from '$app/stores';
  import Icon from 'carbon-icons-svelte/lib/LogOut24/LogOut24.svelte';

  const dispatch = createEventDispatcher();
  let error;

  async function handleLogout() {
    try {
      const res = await fetch('/auth/logout', {
        method: 'POST',
        body: JSON.stringify($session.entry),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        $session.entry = undefined;
        dispatch('success');
      } else {
        error = 'Error occured!';
      }
    } catch (err) {
      console.log('[ERR]', err);
      error = err.message;
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