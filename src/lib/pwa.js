async function getInstalledApps() {
  // @ts-ignore
  const installedApps = await navigator.getInstalledRelatedApps();
  return { supports: true, status: !!installedApps.length }
}

export async function checkPWA() {
  if (typeof window !== 'undefined') { // Are we on browser

    runHooks();

    if ('getInstalledRelatedApps' in navigator) {
      return getInstalledApps();
    }
  }
  return { supports: false, status: false };
}

function runHooks() {
  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPropt = e;
  });

  window.addEventListener('appinstalled', (evt) => {
    deferredPropt = null;
  });
}

let deferredPropt;

export function showPWAInstall() {
  if (deferredPropt) deferredPropt.prompt();
  else console.log('PWA propt is null');
}