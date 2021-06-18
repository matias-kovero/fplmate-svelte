<script>
  import Login from '$lib/components/auth/Login.svelte';
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';

  function redirectToProfile() {
    console.log('Logged in as:', $session.entry);
    goto(`/user/${$session.entry}`);
    /* if ($session.entry) {
      goto(`/user/${$session.entry}`);
    } else {
      console.log('session seems messed up!');
      goto('/user');
    } */
  }

</script>

<div>
  <Login on:success={redirectToProfile} />
</div>