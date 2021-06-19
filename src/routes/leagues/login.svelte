<script>
  import Login from '$lib/components/auth/Login.svelte';
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';

  function redirectToProfile() {
    console.log('Logged in as:', $session.entry);
    //goto(`/leagues/${$session.entry}`);
    goto('/leagues');
  }

</script>

<div>
  <Login on:success={redirectToProfile} />
</div>