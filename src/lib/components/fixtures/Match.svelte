<script>
  // https://svelte.dev/tutorial/context-api
  import { setContext } from 'svelte';

  export let match;
  // Childs will have access to the given data, no need to pass props :)
  setContext('match', { match });
  /*// On Child use:
    import { getContext } from 'svelte';
    const { match } = getContext('match');
  */
  $: kickoff = new Date(match.kickoff_time);
</script>
<small>{kickoff.toLocaleDateString()} {kickoff.toLocaleTimeString()}</small>
<div class="match-container">
  <small>{match.event} | {match.id} => {match.code} | {kickoff.toLocaleDateString()} {kickoff.toLocaleTimeString()}</small>
</div>

<style>
  .match-container {
    background-color: var(--surface2);
    padding: 1em;
    border-radius: 5px;
  }
</style>