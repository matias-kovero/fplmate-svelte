<script lang="ts">
  import { onMount } from 'svelte';
  import Switcher from './Switcher.svelte';

  let Modal;
  let bg;

  onMount(async () => {
    const svelteSimpleModal = await import('svelte-simple-modal');
    Modal = svelteSimpleModal.default;
    // This is really wacky, is there a better way?
    bg = getComputedStyle(document.documentElement)
      .getPropertyValue('--surface1');
  });
</script>

<svelte:component 
  this={Modal}
  styleBg={{color: '#222'}},
  styleWindow={{background: bg }}
>
  <Switcher />
</svelte:component>