<script context="module" lang="ts">
	//import { getStores, navigating, page, session } from '$app/stores';
	//console.log(session, navigating);
	/*
	export const prerender = true;
	export async function load({ page, fetch }) {
    const [ season ] = await Promise.all([
      await fetch(`/index.json`).then((r) => r.json())
    ]);
    return { props: { season } };
  }
	*/
</script>

<script lang="ts">
	// Get FPL season metadata
	import { session } from '$app/stores';
	import { checkPWA, showPWAInstall } from '$lib/pwa';
	$: season = $session.season;
	$: pwaStatus = checkPWA();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	{#if season}
		<h1>
			Season loaded:<br /><small>{!!season}</small>
		</h1>
		<h2>
			try editing <strong>src/routes/index.svelte</strong>
		</h2>
		<div class="test-season">
			<p>Total players: {season.total_players}</p>
			{#await pwaStatus then res}
				{#if res.supports && !res.status}
					<button on:click={showPWAInstall}>Install PWA</button>
				{/if}
			{/await}
			<!--<pre>{JSON.stringify(season, null, 2)}</pre> -->
		</div>
	{:else}
		<p>Please wait...</p>
	{/if}
</section>

<style>
	section {
		display: grid;
		/* flex-direction: column; */
		justify-content: center;
		align-items: center;
		/* flex: 1; */
		place-items: center;
	}
	h1 {
		width: 100%;
	}
</style>
