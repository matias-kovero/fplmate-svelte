<script context="module">
  export async function load({ page, fetch, session }) {
    console.log('[load()] entry', session.entry);
    if (session.entry) {
      console.log('[Redirect] /user/', session.entry);
      // Redirect to user page
      return {
        status: 302,
        redirect: `/user/${session.entry}/`
      };
    }
    // No user selected on session!
    return {};
  }
</script>

<script>
  import Login from '$lib/components/auth/Login.svelte';
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';
  //import { activeUser, getUser } from '$lib/stores/user';


  /* if (!$session.user && getUser()) {
    $session.user = getUser();
    goto(`/user/${getUser()}`);
  }; */

  $: console.log('Session entry:', $session.entry);

  function redirectToProfile() {
    console.log('Logged in as:', $session.entry);
    if ($session.entry) {
      goto(`/user/${$session.entry}`);
    } else {
      console.log('session seems messed up!');
      goto('/user');
    }
  }

</script>

<div>
  <p>Sample user: <a href="/user/775357" sveltekit:prefetch> click here</a></p>
  <p>Sample2 user: <a href="/user/1598128" sveltekit:prefetch> click here</a></p>
</div>

<br />
<div>
  <Login on:success={redirectToProfile} />
</div>