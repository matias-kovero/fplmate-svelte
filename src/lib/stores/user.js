import { session } from '$app/stores';
import { derived, writable, get } from 'svelte/store';

import { writableSession } from './store-util';

export const activeUser = writableSession('user', undefined);

export function updateUser(id) {
  activeUser.set(id);
}
export function getUser() {
  return get(activeUser);
}

export const user = writable(undefined);

export let cachedUser;

export function setUser(_user) {
  /* session.update((state) => {
    console.log('Old', state);
    state = { 
      ...state, 
      user: _user 
    };
    console.log('New', state);
  }); */
  user.set(_user);
  cachedUser = _user;
  console.log('Session + user updated:', cachedUser);
};
