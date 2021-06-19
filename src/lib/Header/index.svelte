<script lang="ts">
	import { page, session } from '$app/stores';
	import { userInfo } from '$lib/components/auth/userStore';
	import logo from './logo.png';
	import { goto } from '$app/navigation';

	/* ICONS */
	import Logout from '$lib/components/auth/Logout.svelte';
	import IconBack from 'carbon-icons-svelte/lib/ArrowLeft24/ArrowLeft24.svelte';

	$: isLogged = !!$session.entry;
	$: user = isLogged ? userInfo($session.entry) : null;

	// Maybe an retarded way of knowing where we are in the weepbage.
	$: isLeague = $page.path.startsWith('/leagues');
	$: deepLeague = $page.path.startsWith('/leagues/') && $page.path !== '/leagues/login'; // Dumb
	/* helper functions */
	function redictToLogin() {
		if (isLeague) goto('/leagues');
		else goto('/user');
	}
</script>

<header>
	<div class="corner">
		{#if deepLeague}
			<a sveltekit:prefetch href="/leagues">
				<IconBack aria-labelledby="Back" />
			</a>
		{:else}
			<a href="/">
				<img src={logo} alt="FPLMate" />
			</a>
		{/if}
	</div>

	<div class="center">
		{#if isLogged && user}
			<div class="selected">
				<span>{user.name}</span>
			</div>
		{:else}
			<div>
				<a href="/user">Select profile</a>
			</div>
		{/if}
	</div>
	{#if isLogged}
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
		height: var(--header-height);
	}
	.corner {
		width: 3em;
		height: 3em;
	}
	.selected {
		font-weight: 700;
	}
	.corner a, .center a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: var(--text1);
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	a:hover {
		color: var(--accent-color);
	}
</style>
