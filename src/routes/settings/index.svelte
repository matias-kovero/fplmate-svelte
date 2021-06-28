<script context="module">  
  export const prerender = true;
</script>
<script>
  import Theme from 'carbon-icons-svelte/lib/ColorPalette20/ColorPalette20.svelte';
  import Text from 'carbon-icons-svelte/lib/StringText20/StringText20.svelte';
  import App from 'carbon-icons-svelte/lib/App20/App20.svelte';

  import IconButton from '$lib/UI/IconButton.svelte';
  import Icon from 'carbon-icons-svelte/lib/ChevronRight24/ChevronRight24.svelte';

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
    <IconButton>
      <svelte:fragment slot="icon">
        <svelte:component this={item.icon} class="shadow" />
      </svelte:fragment>
      <svelte:fragment slot="content">
        <a sveltekit:prefetch href={`${item.path}`}>{item.content}</a>
      </svelte:fragment>
      <svelte:fragment slot="btn">
        <Icon class="shadow" />
      </svelte:fragment>
    </IconButton>
  {/each}
</div>

<style>
  .settings {
    padding: 2em .5em;
    display: grid;
    gap: 1.5em;
  }
</style>