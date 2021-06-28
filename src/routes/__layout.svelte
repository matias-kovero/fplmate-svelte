<script context="module">
	export const load = async ({ page }) => ({
		props: { key: page.path },
	})
</script>

<script lang="ts">
	import { navigating } from '$app/stores';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import LoadIndicator from '$lib/LoadIndicator/index.svelte';
	import PageTransition from '$lib/LoadIndicator/PageTransition.svelte';
	import '../app.css';
	// Get FPL season metadata
	import { session } from '$app/stores';
	export let key; // Used to identify page change for transition
	$: console.log($$slots);
</script>

<Header />

{#if $navigating}
	<LoadIndicator />
{/if}
<main>
	<!-- <PageTransition refresh={key}> -->
		<div class="content">
			<!-- {#await $session.season}
				<p>Loading...</p>
			{:then d}
				<slot />
			{/await} -->
			<slot />
		</div>
	<!-- </PageTransition> -->
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
		display: grid;
		grid-template-rows: auto 1fr;
	}
	main {
		overflow-y: scroll;
		overflow-x: hidden;
		height: 100%;
	}
</style>
