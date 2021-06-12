<script lang="ts">
	import { page, session } from '$app/stores';
	import logo from './logo.png';
  import BackIcon from 'carbon-icons-svelte/lib/ArrowLeft32/ArrowLeft32.svelte';
	import Logout from '$lib/components/auth/Logout.svelte';
	import UserSwitcher from '$lib/components/auth/UserSwitcher/index.svelte';
	import { goto } from '$app/navigation';
  // This is under every page under /users/
  $: previous = $page.path.substring(0, $page.path.lastIndexOf('/'));
	$: loggedIn = !!$session.entry;

	function removeActiveUser() {
		console.log($page);
		//$session.entry = null;
	}

	function redictToLogin() {
		goto('/user');
	}

</script>

<header>
  <div class="corner">
    <a sveltekit:prefetch href={previous} on:click={removeActiveUser}>
			<BackIcon aria-labelledby="Back" />
		</a>
	</div>

	<div class="center">
		<UserSwitcher />
	</div>
	{#if loggedIn}
	<div class="corner">
		<Logout on:success={redictToLogin} />
	</div>
	{/if}
</header>

<style>
  header {
		display: grid;
		grid-template-columns: auto 1fr auto;
		place-items: center;
		/*justify-content: space-between; */
		background-color: var(--surface2);
	}
	.corner {
		width: 3em;
		height: 3em;
	}
	.center { height: 3em; }
  .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
  .corner a {
    color: var(--text1);
  }
</style>