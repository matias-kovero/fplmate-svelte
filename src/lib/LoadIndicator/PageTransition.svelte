<script>
  import { fly, fade } from 'svelte/transition';
  export let refresh;
  const duration = 500;
  const delay = 500;

  /* Different routes would have different transitions? */
  $: console.log('PageTrasition:', refresh);
  //out:fly={{ x: 5, duration }}>
</script>

{#key refresh}
  <slot name="static"></slot>
  <div in:fly={{ x: -5, duration, delay }}
    out:fade>
    <slot />
  </div>
{/key}

<style>
  div {
    padding-top: 2em;
  }
</style>