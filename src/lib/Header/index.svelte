<script lang="ts">
	import { page, session } from '$app/stores';
	import { userInfo } from '$lib/components/auth/userStore';
	import logo from './logo.png';

	$: isLogged = !!$session.entry;
	$: user = isLogged ? userInfo($session.entry) : null;
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="FPLMate" />
		</a>
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
	<div class="corner"></div>
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
