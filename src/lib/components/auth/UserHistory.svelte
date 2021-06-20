<script lang="ts">
  import Close from 'carbon-icons-svelte/lib/Close20/Close20.svelte';
  import Icon from 'carbon-icons-svelte/lib/UserFilled20/UserFilled20.svelte';
  /* user: {name, owner } */
  export let user, select, remove;
</script>

<div class="player shadow">
  <div class="icon"><Icon class="shadow" /></div>
  <div class="name" on:click={select(user)}>
    <div>{user.name}</div>
    <div>{user.owner}</div>
  </div>
  <div class="btn" on:click={remove(user)}>
    <Close />
  </div>
</div>

<style>
  .player {
    background: var(--surface2);
    padding: .25em;
    border-radius: 5px;
    height: 40px;
    display: grid;
    grid-template-columns: 45px 1fr 40px;
    place-items: center;
  }
  .icon {
    font-weight: 700;
    background: var(--surface4);
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    color: var(--text2);
  }
  .name { font-size: small; }
  .name > div:first-child {
    font-weight: 700;
  }
  .name {
    display: grid;
    width: 100%;
    color: var(--text1);
  }
  .name > div { padding-left: 1.5em;}
  .btn {
    display: grid;
    margin: auto;
  }
</style>