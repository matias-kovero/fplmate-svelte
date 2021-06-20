<script>
  import { page, session } from '$app/stores';
  import Icon from 'carbon-icons-svelte/lib/ArrowLeft24/ArrowLeft24.svelte';
  $: previous = $page.path.substring(0, $page.path.lastIndexOf('/'));
</script>

<div class="wrapper">
  <a class="btn" sveltekit:prefetch href={`${previous}`}>
    <Icon />
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
    padding: .3em;
    display: flex;
    filter: drop-shadow(2px 2px 2px #0000000e);
  }
  a {
    color: var(--text1);
  }
</style>