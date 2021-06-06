<script lang="ts">
	import Header from '$lib/Header/settings.svelte';
	import Footer from '$lib/Footer/index.svelte';
	//import '../app.css';
</script>

<Header />

<main>
	<div class="content">
  	<slot />
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