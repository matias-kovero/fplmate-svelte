<script context="module" lang="ts">
	export const prerender = true;
	export async function load({ page, fetch }) {
    const [ season ] = await Promise.all([
      await fetch(`/index.json`).then((r) => r.json())
    ]);
    return { props: { season } };
  }
</script>

<script lang="ts">
	// FPL Season data - save to a store to access in other components
	export let season;

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		Season loaded:<br /><small>{!!season}</small>
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>
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
