<script lang="ts">
  import Element from './element.svelte';
  export let category;

  $: value = (category?.played?.value || 0) / 10;
  $: sum = (category?.played?.sum || 0) / 10;
  $: points = category?.played?.points || 0;
</script>

{#if category.players.length}
<table class="container shadow">
  <thead class={`title ${category.cssKey}`}>
    <tr>
      <th>%</th>
      <th>
        <div>{category.name}</div>
        <div>£ {value} / {sum}</div>
      </th>
      <th>{points}</th>
    </tr>
  </thead>
  <tbody>
    {#each category.players as element}
      <Element {element} />
    {/each}
  </tbody>
</table>
{/if}

<style>
  .container {
    display: grid;
    border-radius: 5px;
    table-layout: fixed;
  }
  .title {
    font-size: x-small;
    font-weight: 700;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    padding: .2em 0;
  }
  tr {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 40px 1fr 60px;
  }
  tr th:first-of-type {
    display: grid;
    place-items: center;
    font-weight: 700;
    font-size: x-small;
  }
  tr th:nth-of-type(2) {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  tr th:last-of-type {
    border-top-right-radius: 2.5px;
  }
  tbody {
    background: var(--surface2);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }
</style>