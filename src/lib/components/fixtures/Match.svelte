<script>
  // https://svelte.dev/tutorial/context-api
  import { setContext } from 'svelte';

  export let match;
  // Childs will have access to the given data, no need to pass props :)
  setContext('match', { match });
  /*
    import { getContext } from 'svelte';
    const { match } = getContext('match');
  */

  $: kickoff = new Date(match.kickoff_time);
</script>

<div>
  <small>{match.event} | {match.id} => {match.code} | {kickoff.toLocaleDateString()} {kickoff.toLocaleTimeString()}</small>
</div>