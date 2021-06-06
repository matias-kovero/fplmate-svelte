<script context="module">
	// Is this accepted? Should force this on 1st load - will it impact initial render?
  export async function load({ page, fetch }) {		
		//const season = await fetch(`/index.json`).then((r) => r.json());
		// just sending it as promise, resolving it after page load
		const data = fetch(`/index.json`);
    return { props: { data } };
  }
</script>

<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.css';
	import { season, setSeason } from '$lib/stores/season';

  export let data;

	// Save result from season to store and 
	// components use that store to fetch season info
	// This way we will still have fast 1st load
	setSeason(data);
  // Childs will have access to the given data, no need to pass props :)
  //setContext('season', { data });
</script>

<Header />

<main>
	<div class="content">
		{#if $season}
			<slot />
		{/if}
	</div>
</main>

<Footer />

<style>
	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	main {
		overflow-y: scroll;
	}
</style>
