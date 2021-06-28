<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: `${error.message}`,
        status: `${status}`
			}
		};
	}
</script>

<script>
	export let status, message;
	$: numArr = [...status] || [''];
</script>

<div class="error-container">
	<div class="error-wrapper">
		{#each numArr as num }
			<div class="big-num">{num}</div>
		{/each}
	</div>
	<div class="error-text">
		<small>Sorry, this page was not found</small>
		<small>{message}</small>
		<p>
			<a sveltekit:prefetch href="/">Go back</a>
		</p>
	</div>
</div>


<style>
	.error-container {
		padding-top: 30%;
		display: grid;
		place-items: center;
	}
	.error-wrapper {
		display: flex;
	}
	.big-num {
		font-size: 80px;
		font-weight: 700;
		color: var(--primary-color);
		font-family: var(--font-mono);
	}
	.error-text {
		font-family: var(--font-mono);
		font-weight: 700;
		text-align: center;
	}
	.error-text a {
		color: var(--lightpurple);
	}
</style>