<script lang="ts">
	import { page, session } from '$app/stores';
	import { userInfo } from '$lib/components/auth/userStore';
	import Logout from '$lib/components/auth/Logout.svelte';
	import NavHistory from '$lib/components/users/Profile/NavHistory.svelte';
	import NavBack from '$lib/components/users/Profile/NavBack.svelte';
	import logo from './logo.png';
	import { goto } from '$app/navigation';

	$: isLogged = !!$session.entry;
	$: user = isLogged ? userInfo($session.entry) : null;

	function redictToLogin() {
		goto('/user');
	}

</script>

<header class="shadow">
	<div class="corner">
		{#if isLogged}
			{#if $page.params.gameweek}
				<NavBack />
			{:else}
				<NavHistory />
			{/if}
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
	}
  .corner a {
    color: var(--text1);
  }
</style>