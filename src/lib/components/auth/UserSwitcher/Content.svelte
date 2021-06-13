<script>
  import { getUsers } from '../userStore';

  $: users = getUsers();
  $: hasUsers = users && users.length;
</script>

{#if hasUsers}
  {#each users as user}
    <div class="container">
      <div class="owner">{user.owner}</div>
      <div class="name">{user.name}</div>
    </div>
  {/each}
{/if}

<style>
  .container {
    background-color: var(--surface2);
    padding: .2em;
    border-radius: 5px;
  }
  .name {
    font-size: small;
    font-weight: 700;
  }
</style>