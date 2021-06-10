async function getInstalledApps() {
  // @ts-ignore
  const installedApps = await navigator.getInstalledRelatedApps();
  console.log(`[PWA] resolved (${installedApps.length})`);
  return { status: true, apps: installedApps };
}
export async function checkPWA() {
  if (typeof window !== 'undefined') { // Are we on browser
    if ('getInstalledRelatedApps' in navigator) {
      return getInstalledApps();
    }
  }
  return { status: false, apps: null };
}