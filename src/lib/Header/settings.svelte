<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.png';
  import BackIcon from 'carbon-icons-svelte/lib/ArrowLeft32/ArrowLeft32.svelte';

  $: subPath = $page.path !== '/settings';
</script>

<header>
  {#if subPath}
  <div class="corner">
    <a sveltekit:prefetch href="/settings">
			<BackIcon aria-labelledby="Back" />
		</a>
	</div>
  {:else}
  <div></div>
  {/if}

	<div class="center">
		<a href="/">
			<img src={logo} alt="FPLMate" />
		</a>
	</div>
</header>

<style>
  header {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
		/*justify-content: space-between; */
		background-color: var(--pure-white);
	}
	.center, .corner {
		width: 3em;
		height: 3em;
	}
  .center a, .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
  .center img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
  .corner a {
    color: var(--darkpurple);
  }
</style>