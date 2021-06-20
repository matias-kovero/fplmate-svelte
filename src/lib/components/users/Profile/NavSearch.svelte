<script>
  import { page, session } from '$app/stores';
  import Icon from 'carbon-icons-svelte/lib/Search20/Search20.svelte';
</script>

<div class="wrapper">
  <a class="btn shadow" sveltekit:prefetch href={`/user/login`}>
    <Icon class="shadow-alt" />
  </a>
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
    padding: .45em;
    display: flex;
  }
  a {
    color: var(--text1);
  }
</style>