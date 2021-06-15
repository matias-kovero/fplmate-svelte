<script>
  import Search from './UserSearch.svelte';
  import RecentUser from './RecentUser.svelte';
  import { createEventDispatcher } from 'svelte';
  import { session } from '$app/stores';
  import { getUsers, removeUser } from './userStore';
  import { login } from './functions';

  const dispatch = createEventDispatcher();

  async function selectUser(user) {
    if (user && user.id) {
      const ok = await login(user);
      if (ok) {
        // Annoying, unable to update session in functions...
        // Need to update it here
        console.log('[C] Login:', user.owner, user.id);
        $session.entry = user.id;
        dispatch('success');
      }
      else console.log('Failed to login. Kassalla tarvitaan apua.');
    }
  }

  function remove(user) {
    if (user) {
      removeUser(user);
      recentUser = getUsers(); // Will update this element
    }
  }

  $: recentUser = getUsers();
</script>

<div class="login-container">
  <Search {selectUser} />

  <div class="recent-container">
    <div class="recent-divider">
      <div class="line-container">
        <div class="recent-line"></div>
        <div></div>
      </div>
      <div class="recent-text">or use recent</div>
      <div class="line-container">
        <div class="recent-line"></div>
        <div></div>
      </div>
    </div>
    <div class="recent-searches">
      {#if recentUser && recentUser.length}
        {#each recentUser as user}
          <RecentUser {user} select={selectUser} {remove} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .login-container {
    display: grid;
    place-items: center;
  }
  .recent-container {
    padding-top: 1em;
  }

  /* Recent line */
  .recent-divider {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 3em;
  }
  .line-container > div{
    height: 1.5em;
  }
  .recent-line {
    border-bottom: 1px solid var(--text2);
  }
  .recent-text {
    padding: 10px; /* Should we use relative instead */
    align-self: center;
    color: var(--text2);
  }

  /* Recent searches */
  .recent-searches {
    display: grid;
    grid-row: auto;
    gap: 1em;
    position: relative;
  }

</style>