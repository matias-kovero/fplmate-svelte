<script>
  export let onClose;
  import IconClose from 'carbon-icons-svelte/lib/Close20/Close20.svelte';
</script>

<div>
  <IconClose on:click={onClose} />
</div>

<style>
  div {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 200;
  }
</style>