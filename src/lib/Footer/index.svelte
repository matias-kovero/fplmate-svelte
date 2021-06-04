<script>
	import Home20 from 'carbon-icons-svelte/lib/Home20/Home20.svelte';
	import UserAvatar20 from 'carbon-icons-svelte/lib/UserAvatar20/UserAvatar20.svelte';
	import Calendar20 from 'carbon-icons-svelte/lib/Calendar20/Calendar20.svelte';
	import Group20 from 'carbon-icons-svelte/lib/Group20/Group20.svelte';
	import Settings20 from 'carbon-icons-svelte/lib/Settings20/Settings20.svelte';
	import { page } from '$app/stores';
</script>
<footer>
	<div class="buttons">
		<a sveltekit:prefetch href="/" class:active={$page.path === '/'}>
			<Home20 aria-labelledby="Home" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label id="Home">Home</label>
		</a>
		<a sveltekit:prefetch href="/user" class:active={$page.path.startsWith('/user')}>
			<UserAvatar20 aria-labelledby="Profile" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label id="Profile">Profile</label>
		</a>
		<a sveltekit:prefetch href="/fixtures" class:active={$page.path.startsWith('/fixtures')}>
			<Calendar20 aria-labelledby="Fixtures" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label id="Fixtures">Fixtures</label>
		</a>
		<a sveltekit:prefetch href="/leagues" class:active={$page.path.startsWith('/leagues')}>
			<Group20 aria-labelledby="Leagues" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label id="Leagues">Leagues</label>
		</a>
		<a sveltekit:prefetch href="/settings" class:active={$page.path.startsWith('/settings')}>
			<Settings20 aria-labelledby="Settings" />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label id="Settings">Settings</label>
		</a>
	</div>
</footer>

<style lang="css">
	footer {
		z-index: 1;
		position: sticky;
		bottom: 0;
		background-color: #000;
	}
	.buttons {
		font-size: 60%;
		font-weight: 800;
		background: var(--pure-white);
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
		color: var(--darkpurple);
		text-decoration: none;
	}
	.buttons a {
		transition: color var(--transition-duration);
		padding: auto;
	}
	.buttons a.active {
		color: var(--lightpurple);
		background-color: var(--tertiary-color);
	}
	.buttons > a.active:first-of-type {
		border-bottom-left-radius: inherit;
	}
	.buttons > a.active:last-of-type {
		border-bottom-right-radius: inherit;
	}
	.buttons a label {
		font-size: smaller;
		margin-top: -10px;
	}
	
</style>