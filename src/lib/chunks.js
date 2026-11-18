const RELOAD_KEY = 'veritas:chunk-reload'

export function isChunkError(error) {
  return /dynamically imported module|Importing a module script failed|error loading dynamically/i.test(String(error?.message || error))
}

/** After a redeploy, old tabs may request chunks that no longer exist. Reload once to pick up the new build. */
export function reloadOnceForNewBuild() {
  try {
    if (sessionStorage.getItem(RELOAD_KEY)) return false
    sessionStorage.setItem(RELOAD_KEY, '1')
  } catch {
    /* storage blocked: still try once */
  }
  window.location.reload()
  return true
}
