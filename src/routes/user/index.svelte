<script context="module">
  export async function load({ page, fetch, session }) {

    // if not logged in - redirect to /user/login
    if (!session.entry) {
      return {
        status: 302,
        redirect: '/user/login'
      };
    } else {
      return {
        status: 302,
        redirect: `/user/${session.entry}/`
      };
    }
    // else check session and redirect to /user/id

    console.log('[/user load()] entry', session.entry);
    if (session.entry && !isNaN(session.entry)) {
      console.log('Typeof entry:', typeof session.entry);
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

  //$: console.log('Session entry:', $session.entry);

  let activeUser;

  session.subscribe(value => {
    activeUser = value.entry;
  });

  function redirectToProfile() {
    console.log('Logged in as:', $session.entry);
    /* if ($session.entry) {
      goto(`/user/${$session.entry}`);
    } else {
      console.log('session seems messed up!');
      goto('/user');
    } */
  }
  $: console.log('/user', activeUser);
</script>

<div>
  <p>Sample user: <a href="/user/775357" sveltekit:prefetch> click here</a></p>
  <p>Sample2 user: <a href="/user/1598128" sveltekit:prefetch> click here</a></p>
</div>

<br />
<div>
  <Login on:success={redirectToProfile} />
</div>