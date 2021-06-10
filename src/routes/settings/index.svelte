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
  <div class="block shadow-1">
    <a sveltekit:prefetch href="/settings/1">Option 1</a>
  </div>
  <div class="block shadow-1">
    <a sveltekit:prefetch href="/settings/theme">Theme</a>
  </div>
  <div class="block shadow-1">
    <a sveltekit:prefetch href="/settings/1">Memory</a>
  </div>
</div>

<style>
  .settings {
    padding-top: 10%;
    display: grid;
    gap: 2em;
  }
  .block {
    /* padding: .5em; */
    border-radius: .5em;
    background-color: var(--surface1);
    color: var(--text1);
  }
  a { 
    color: inherit;
    display: block;
    padding: 1em;
  }
</style>