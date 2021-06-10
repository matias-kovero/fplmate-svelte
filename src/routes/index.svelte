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
	import { checkPWA } from '$lib/pwa';
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
			{#await pwaStatus}
				<p>Checking PWA status...</p>
			{:then res} 
				{#if res.status}
					<small>PWA Results</small>
					<pre>{JSON.stringify(res.apps, null, 2)}</pre>
				{:else}
					<p>Failed to check PWA</p>
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	h1 {
		width: 100%;
	}
</style>
