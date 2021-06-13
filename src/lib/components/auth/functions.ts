import { addUser, getUsers } from './userStore';
/**
 * This file contains functions that handle the auth + session on front-end
 * These functions will communicate with the backend, and will keep 
 * cookies/localStorage + session in sync.
 */

/**
 * Return true if success full login - else false.
 */
export async function login(user): Promise<boolean> {
  try {
    const res = await fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
      // localStorage
      addUser({ id: user.id, name: user.name, owner: user.owner });
      return true;
    } else {
      console.log('[Login] else', res.status);
      return false;
    }
  } catch (err) {
    console.log('[Login] catch', err.message);
    return false;
  }
}