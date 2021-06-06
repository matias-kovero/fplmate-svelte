<script>
	import Home from 'carbon-icons-svelte/lib/Home24/Home24.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar24/UserAvatar24.svelte';
	import Calendar from 'carbon-icons-svelte/lib/Calendar24/Calendar24.svelte';
	import Group from 'carbon-icons-svelte/lib/Group24/Group24.svelte';
	import Settings from 'carbon-icons-svelte/lib/Settings24/Settings24.svelte';
	import { page } from '$app/stores';
</script>
<footer>
	<div class="buttons">
		<a sveltekit:prefetch href="/" class:active={$page.path === '/'}>
			<Home aria-labelledby="Home" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- <label id="Home">Home</label> -->
		</a>
		<a sveltekit:prefetch href="/user" class:active={$page.path.startsWith('/user')}>
			<UserAvatar aria-labelledby="Profile" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- <label id="Profile">Profile</label> -->
		</a>
		<a sveltekit:prefetch href="/fixtures" class:active={$page.path.startsWith('/fixtures')}>
			<Calendar aria-labelledby="Fixtures" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- <label id="Fixtures">Fixtures</label> -->
		</a>
		<a sveltekit:prefetch href="/leagues" class:active={$page.path.startsWith('/leagues')}>
			<Group aria-labelledby="Leagues" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- <label id="Leagues">Leagues</label> -->
		</a>
		<a sveltekit:prefetch href="/settings" class:active={$page.path.startsWith('/settings')}>
			<Settings aria-labelledby="Settings" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- <label id="Settings">Settings</label> -->
		</a>
	</div>
</footer>

<style lang="css">
	.buttons {
		font-size: 60%;
		font-weight: 800;
		/*background: var(--pure-white);*/
		letter-spacing: 0.5px;
		text-transform: uppercase;
		font-family: var(--font-header);
		border-top: 1px solid rgba(34,40,49,0.3);
		color: rgba(255, 255, 255, 0.65);
		justify-content: center;
		position: sticky;
		bottom: 0;
		align-items: center;
		height: 48px;
		display: grid;
  	grid-template-columns: repeat(5, 1fr);
  	place-items: center;
		z-index: 1;
		/* Mobile like corners - should we check if on mobile? */
		border-bottom-left-radius: 1em;
		border-bottom-right-radius: 1em;
	}
	.buttons a {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		color: var(--pure-white);
		text-decoration: none;
		position: relative;
		padding: auto;
	}
	.buttons a.active {
		color: var(--lightpurple);
	}
	a.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-bottom: var(--size) solid var(--lightpurple);
	}

</style>