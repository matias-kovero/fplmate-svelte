<script>
  import { createEventDispatcher } from 'svelte';

  import { session } from '$app/stores';
  import { goto } from '$app/navigation';

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

<div>
  {#if error}<p>{error}</p>{/if}
</div>
<div>
  <button on:click={handleLogout}>Logout</button>
</div>

<style>
</style>