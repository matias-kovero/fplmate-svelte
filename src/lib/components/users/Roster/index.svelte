<script lang="ts">
  export let data: any;
  import Category from './category.svelte';
  import { onMount } from 'svelte';
  let Modal;

  onMount(async () => {
    const module = await import('svelte-simple-modal');
    Modal = module.default;
  });
</script>

<div class="roster">
  {#if data && data.data}
    <svelte:component this={Modal}>
      {#each data.data as category, i}
        <div class={`cat-${i}`}>
          <Category {category} />
        </div>
      {/each}
    </svelte:component>
  {/if}
</div>

<style>
  .profile-picks {
    display: grid;
    gap: .2em;
  }
  .roster {
    display: grid;
    gap: .5em;
  }
  .cat-0 {
    grid-column: 1;
    grid-row: 6 / 6; /* Force last */
  }
</style>