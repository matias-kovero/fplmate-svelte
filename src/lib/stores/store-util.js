import { init, validate_component } from 'svelte/internal';
import { writable, get } from 'svelte/store';

function persist(key, value) {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

export function writableSession(key, initialValue) {
  let sessionValue;
  
  if (typeof window !== 'undefined') {
    sessionValue = JSON.parse(sessionStorage.getItem(key));
    // If store not found, create it with initial value
    if (!sessionValue) persist(key, initialValue);
  }

  const store = writable(sessionValue || initialValue);
  store.subscribe(value => persist(key, value));
  return store;
}