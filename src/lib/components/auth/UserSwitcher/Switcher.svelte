<script lang="ts">
  import { getContext } from 'svelte';
  import { session } from '$app/stores';
  import IconSwitch from 'carbon-icons-svelte/lib/CaretSort16/CaretSort16.svelte';
  import Content from './Content.svelte';
  import { getUsers, userInfo } from '../userStore';

  const { open } = getContext('simple-modal');

  const show = () => {
    open(Content)
  };

  $: loggedIn = $session.entry;
  $: user = userInfo(loggedIn);
</script>

{#if loggedIn}
  <div class="current-user">
    <div>{user.owner}</div>
    <div on:click={show}><IconSwitch /></div>
  </div>
{:else}
  <div on:click={show}>
    <small>Select Profile</small>
  </div>
{/if}

<style>
  .current-user {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 3em;
  }
</style>