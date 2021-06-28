<script>
  import IconUser from 'carbon-icons-svelte/lib/User24/User24.svelte';
  import IconSearch from 'carbon-icons-svelte/lib/Search20/Search20.svelte';
  import AutoComplete from 'simple-svelte-autocomplete';
  import * as api from '$lib/api';

  export let selectUser;

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
          team,
          name: team.replace(`(${i.value})`,'').trim(),
          owner,
        });
      });
    } catch (err) {
      console.log(err);
      return [];
    }
  }
</script>

<div class="user-search">
  <div class="login-icon">
    <IconUser />
  </div>
  {#if error}<p>{error}</p>{/if}
  <div class="search-bar shadow">
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
      onChange={async () => selectUser(selected)}
      className="search-element"
      inputClassName="search-input"
      dropdownClassName="search-dropdown"
      >
      <div slot="item" let:item>
        <div class="user-option">
          <div class="search-owner">
            {item.owner}
          </div>
          <div class="search-team">
            {item.team}
          </div>
        </div>
      </div>
      <div slot="no-results" let:noResultsText>{noResultsText}</div>
      <div slot="loading" let:loadingText>{loadingText}</div>
    </AutoComplete>
    <div class="search-icon"><IconSearch /></div>
  </div>
</div>

<style>
  .user-search {
    width: 100%;
    max-width: 400px;
    z-index: 10;
  }
  .login-icon {
    display: grid;
    place-items: center;
    padding-bottom: 1em;
    color: var(--brand);
  }
  .user-option {
    font-size: smaller;
    color: var(--text1);
  }
  .search-bar {
    background: var(--surface2);
    display: grid;
    border-radius: 5px;
    grid-template-columns: 1fr 40px;
  }
  .search-icon {
    background: var(--surface4);
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    display: grid;
    place-items: center;
    color: var(--text2);
  }
  .search-owner {
    font-weight: 700;
  }
  .search-team {
    font-size: small;
  }
</style>