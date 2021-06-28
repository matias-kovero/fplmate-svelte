<script>
  import Search from './UserSearch.svelte';
  import { createEventDispatcher } from 'svelte';
  import { session } from '$app/stores';
  import { getUsers, removeUser } from './userStore';
  import { login } from './functions';
  /* Transation */
  import { fade, slide } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  /* Recent Users */
  import IconButton from '$lib/UI/IconButton.svelte';
  import IconClose from 'carbon-icons-svelte/lib/Close20/Close20.svelte';
  import IconUser from 'carbon-icons-svelte/lib/UserFilled20/UserFilled20.svelte';

  const dispatch = createEventDispatcher();
  let recentUser = getUsers();

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
      recentUser = recentUser.filter(u => u.id !== user.id);
    }
  }
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
        {#each recentUser as user (user)}
        <div animate:flip="{{duration: 200}}" out:slide|local>
          <IconButton>
            <svelte:fragment slot="icon">
              <IconUser class="shadow" />
            </svelte:fragment>
            <div slot="content" on:click={() => selectUser(user)} in:fade|local out:fade>
              <div class="bold">{user.name}</div>
              <div>{user.owner}</div>
            </div>
            <div slot="btn" on:click={() => remove(user)}>
              <IconClose class="shadow" />
            </div>
          </IconButton>
        </div>
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
    gap: .5em;
    position: relative;
  }
  .bold { font-weight: 700; }

</style>