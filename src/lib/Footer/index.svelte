<script>
	// Will import everything slows build times
	//import { Home24 } from 'carbon-icons-svelte';
	import Home20 from 'carbon-icons-svelte/lib/Home20/Home20.svelte';
	import UserAvatar20 from 'carbon-icons-svelte/lib/UserAvatar20/UserAvatar20.svelte';
	import Calendar20 from 'carbon-icons-svelte/lib/Calendar20/Calendar20.svelte';
	import Group20 from 'carbon-icons-svelte/lib/Group20/Group20.svelte';
	import Settings20 from 'carbon-icons-svelte/lib/Settings20/Settings20.svelte';

	import { page } from '$app/stores';
	$: console.log($page);
	//console.log($page);
</script>

<footer class="footer">
  <!-- <li class:active={$page.path === '/'}> -->
	<a href="/" class:active={$page.path === '/'} sveltekit:prefetch>
		<Home20 aria-labelledby="Home" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="Home">Home</label>
	</a>
	<a href="/user" class:active={$page.path.startsWith('/user')} sveltekit:prefetch>
		<UserAvatar20 aria-labelledby="Profile" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="Profile">Profile</label>
	</a>
	<a href="/fixtures" class:active={$page.path.startsWith('/fixtures')} sveltekit:prefetch>
		<Calendar20 aria-labelledby="Fixtures" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="Fixtures">Fixtures</label>
	</a>
	<a href="/leagues" class:active={$page.path.startsWith('/leagues')} sveltekit:prefetch>
		<Group20 aria-labelledby="Leagues" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="Leagues">Leagues</label>
	</a>
	<a href="/settings" class:active={$page.path.startsWith('/settings')} sveltekit:prefetch>
		<Settings20 aria-labelledby="Settings" />
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label id="Settings">Settings</label>
	</a>
</footer>

<style lang="css">
	.footer {
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
	}
	.footer a {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		color: var(--darkpurple);
		text-decoration: none;
	}
	.footer a {
		transition: color var(--transition-duration);
		padding: auto;
	}
	
	.footer a.active {
		color: var(--lightpurple);
		background-color: var(--tertiary-color);
	}

	.footer a label {
		font-size: smaller;
		margin-top: -10px;
	}
	
</style>