<script context="module">  
  export const prerender = true;
</script>
<script>
  import Icon from 'carbon-icons-svelte/lib/PhraseSentiment20/PhraseSentiment20.svelte';
  import Theme from 'carbon-icons-svelte/lib/ColorPalette20/ColorPalette20.svelte';
  import Text from 'carbon-icons-svelte/lib/StringText20/StringText20.svelte';
  import App from 'carbon-icons-svelte/lib/App20/App20.svelte';
  import SelectBar from './_SelectBar.svelte';

  const items = [
    {
      icon: Text,
      content: 'Option 1',
      path: '/settings/1'
    },
    {
      icon: Theme,
      content: 'Theme',
      path: '/settings/theme'
    },
    {
      icon: App,
      content: 'Application memory',
      path: '/settings/1'
    }
  ];
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<div class="settings">
  {#each items as item}
    <SelectBar {...item} />
  {/each}
</div>

<style>
  .settings {
    padding: 2em 1em;
    display: grid;
    gap: 2em;
  }
</style>