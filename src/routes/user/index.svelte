<script context="module">
  export async function load({ page, fetch, session }) {
    if (session.user) {
      //const response = await fetch(`/user/${session.user}/index.json`);
      // Redirect to user page
      return {
        status: 302,
        redirect: `/user/${session.user}/`
      };
    }
    // No user selected on session!
    return {};

    const response = await fetch(`/user.json`);
    if (response.ok && session.user) {
      console.log('seems to be ok?', session.user);
      const user = await response.json();
      return { props: { user } };
    } else {
      console.log('No user selected!');
      //return goto(response.headers.get('location'));
      return { 
        status: 307,
        redirect: response.headers.get('location'),
      };
    }
  }
</script>

<script>
  export let user;
  import { session } from '$app/stores';
  import { goto } from '$app/navigation';
  import { activeUser, getUser } from '$lib/stores/user';


  if (!$session.user && getUser()) {
    $session.user = getUser();
    goto(`/user/${getUser()}`);
  };

  $: console.log('UserID:', $session.user);

  function login() {
    goto('/login');
  }

</script>

<div>
  <h4>Select user: {user}</h4>
  <p>Sample user: <a href="/user/775357" sveltekit:prefetch> click here</a></p>
  <p>Sample2 user: <a href="/user/1598128" sveltekit:prefetch> click here</a></p>
  <button on:click={login}>Login</button>
</div>