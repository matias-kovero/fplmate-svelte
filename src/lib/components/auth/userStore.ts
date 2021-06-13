interface localStorageUser {
  id: number,
  name: string,
  owner: string,
};
const key = 'userHistory';
/**
 * Returns basic info saved in localStorage
 */
export function userInfo(id: number): localStorageUser {
  if(!inBrowser() || !id) return;
  let users = getUsers();
  return users.find(u => u.id === id);
}
/**
 * Get users from localStorage.
 */
export function getUsers(): localStorageUser[] {
  if (!inBrowser()) return;
  return JSON.parse(localStorage.getItem(key) || "[]");
}
/**
 * Add user to localStorage.
 */
export function addUser(_user: localStorageUser) {
  if (!inBrowser()) return;
  let users = getUsers();
  let old = users.findIndex(u => u.id === _user.id);
  if (old !== -1) {
    users.splice(old, 1);
  }
  users.unshift({ ..._user });
  localStorage.setItem(key, JSON.stringify(users));
}
/**
 * Remove given user from localStorage
 */
export function removeUser(_user: localStorageUser) {
  if(!inBrowser) return;
  let users = getUsers();
  let idx = users.findIndex(u => u.id === _user.id);
  if (idx > -1) users.splice(idx, 1);
  localStorage.setItem(key, JSON.stringify(users));
}
/**
 * Simple check to verify we are running 
 * these in browser and not in server.
 */
function inBrowser(): boolean {
  return typeof window !== 'undefined';
}