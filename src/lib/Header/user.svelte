<script lang="ts">
	import { page, session } from '$app/stores';
	import { updateUser } from '$lib/stores/user';
	import logo from './logo.png';
  import BackIcon from 'carbon-icons-svelte/lib/ArrowLeft32/ArrowLeft32.svelte';
  // This is under every page under /users/
  $: previous = $page.path.substring(0, $page.path.lastIndexOf('/'));

	function removeActiveUser() {
		console.log('Bye bye user!');
		updateUser(null);
		$session.user = null;
	}

</script>

<header>
  <div class="corner">
    <a sveltekit:prefetch href={previous} on:click={removeActiveUser}>
			<BackIcon aria-labelledby="Back" />
		</a>
	</div>

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