<script context="module">  
  export const prerender = true;
</script>
<script>
  // Scripts needed here?
  // We need percistent store for user settings
  // Should we trust localStorage??
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<div class="settings">
  <div class="block">
    <p><a sveltekit:prefetch href="/settings/1">Option 1</a></p>
  </div>
  <div class="block">
    <p><a sveltekit:prefetch href="/settings/2">Option 2</a></p>
  </div>
  <div class="block">
    <p>Option 3</p>
  </div>
</div>

<style>
  .settings {
    padding-top: 10%;
    display: grid;
    gap: 3em;
  }
  .block {
    padding: .5em;
    border-radius: .5em;
    background-color: var(--pure-white);
  }
</style>