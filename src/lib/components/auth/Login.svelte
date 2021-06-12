<script>
  import Search from './UserSearch.svelte';
  import { createEventDispatcher } from 'svelte';
  import { session } from '$app/stores';
  import { addUser, getUsers } from './userStore';

  const dispatch = createEventDispatcher();
  let error;

  async function selectUser(user) {
    if (user && user.id) {
      error = undefined;
      try {
        const res = await fetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
          addUser({ id: user.id, name: user.name, owner: user.owner }); // Add user to localStorage
          $session.entry = user.id;
          dispatch('success');
        } else {
          error = 'Error occured!';
        }
      } catch (err) {
        console.log('[ERR]', err);
        error = err.message;
      }
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
          <p>{user.id} | {user.name} | {user.owner}</p>
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
  }

</style>