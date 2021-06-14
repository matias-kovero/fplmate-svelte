<script lang="ts">
  export let user, select, remove;

  import Fav from 'carbon-icons-svelte/lib/Favorite20/Favorite20.svelte';
  import FavFill from 'carbon-icons-svelte/lib/FavoriteFilled20/FavoriteFilled20.svelte';
  import Close from 'carbon-icons-svelte/lib/Close20/Close20.svelte';
</script>

<div class="recent-wrapper">
  <div class="recent">
    <div class="favorite">
        <div class="content">
          <Fav />
        </div>
    </div>
    <div class="info" on:click={select(user)}>
      <div class="content">
        <div class="name">{user.name}</div>
        <div class="owner">{user.owner}</div>
      </div>
    </div>
    <div class="remove">
      <div class="content" on:click={remove(user)}>
        <div class="remove-btn">
          <Close />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .recent-wrapper {
    position: relative;
    z-index: 1;
    /* height: 100%; */
  }
  .recent {
    /* background-color: var(--surface2); */
    /* padding: .5em; */
    display: grid;
    grid-template-columns: 45px auto 45px;
    position: relative;
    padding: .5em;
    height: 100%;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
  .favorite, .info, .remove {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
  }
  .favorite::after, .info::after, .remove::after, .recent-wrapper::after {
    content: " ";
    position: absolute;
    top: 0;
    transform-origin: top left;
    transform: skew(-15deg);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .favorite::after { background-color: var(--surface3); transform: skew(0) !important; }
  .info::after { background-color: var(--surface2); }
  .remove::after { background-color: var(--surface4); }
  .favorite .content {
    place-items: center start;
    padding-left: 10px;
  }
  .info div {
    color: var(--text2);
  }
  .name {
    font-weight: 700;
    font-size: medium;
  }
  .owner {
    font-size: small;
  }
  .remove-btn {
    display: grid;
    place-items: center start;
    padding-right: 10px;
  }
  .recent-wrapper::after {
    content: " ";
    position: absolute;
    top: 0;
    transform-origin: top left;
    transform: skew(-15deg);
    height: calc(100% + 1em);
    background: linear-gradient(
      180deg,
      var(--surface1) 0%,
      transparent 20%,
      transparent 80%,
      var(--surface1) 90%
    );
  }
</style>