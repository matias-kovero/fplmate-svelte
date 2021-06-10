<script>
  import AutoComplete from 'simple-svelte-autocomplete';
  import { createEventDispatcher } from 'svelte';
  import * as api from '$lib/api';

  import { session } from '$app/stores';
  import { goto } from '$app/navigation';

  const dispatch = createEventDispatcher();

  let selected;
  let error;

  async function getUsers(str) {
    const url = `search/${encodeURIComponent(str)}`;
    try {
      const response = await api.get(url);
      /* label, value */
      return response.map((i) => {
        let [ owner, team ] = i.label.split(',', 2);
        return ({
          value: i.value,
          id: i.value,
          label: i.label,
          owner,
          team
        });
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async function handleSelect() {
    if (selected && selected.value) {
      error = undefined;
      try {
        const res = await fetch('/auth/login', {
          method: 'POST',
          body: JSON.stringify(selected),
          headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
          console.log('[Login] Login as:', selected.id);
          console.log('[Login] Session:', $session.entry);
          // Risky - need an better fix
          $session.entry = selected.id;
          dispatch('success');
        } else {
          error = 'Error occured!';
        }
      } catch (err) {
        console.log('[ERR]', err);
        error = err.message;
      }
    }
  }
</script>

<div>
  {#if error}<p>{error}</p>{/if}
  <AutoComplete 
    searchFunction={getUsers} 
    delay=500
    localSearch=false 
    labelFieldName="label" 
    valueFieldName="value" 
    bind:selectedItem={selected}
    minCharactersToSearch={3}
    hideArrow={true}
    showClear={false}
    placeholder="Team ID/Name or owner"
    onChange={async () => handleSelect()}
    >
    <div slot="item" let:item let:label>
      <div class="user-option">
        <div class="search-owner">
          {item.owner}
        </div>
        <div class="search-team">
          {item.team}
        </div>
      </div>
    </div>

    <div slot="no-results" let:noResultsText>
      <span>{noResultsText}</span>
    </div>

    <div slot="loading" let:loadingText>
      <span>{loadingText}</span>
    </div>
  </AutoComplete>
    {#if selected && selected.value}
      <p>Selected: {selected.value}</p>
    {:else}
      <p>No user seleceted</p>
    {/if}
  <div>
    <small>or</small>
    <p>List old searcehs</p>
  </div>
</div>

<style>
  .user-option {
    font-size: smaller;
  }
  .search-owner {
    font-weight: 700;
  }
  .search-team {
    font-size: small;
  }
</style>