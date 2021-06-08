<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.png';
</script>

<header>
	<div class="corner">
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
		height: var(--header-height);
	}
	.center {
		width: 3em;
		height: 3em;
	}
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a, .center a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img, .center img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	a:hover {
		color: var(--accent-color);
	}
</style>
