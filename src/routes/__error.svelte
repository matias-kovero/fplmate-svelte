<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: `${status}: ${error.message}`,
        status
			}
		};
	}
</script>

<script>
	export let message, status;
</script>

<h1>{status}</h1>
<small>Uh oh... you bad!</small>