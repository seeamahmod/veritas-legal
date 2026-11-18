import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { reloadOnceForNewBuild } from './lib/chunks.js'

// Vite fires this when a lazy chunk from an older deploy is gone.
window.addEventListener('vite:preloadError', (event) => {
  if (reloadOnceForNewBuild()) event.preventDefault()
})
// Clear the one-shot guard once a page has loaded successfully.
window.addEventListener('load', () => {
  setTimeout(() => {
    try {
      sessionStorage.removeItem('veritas:chunk-reload')
    } catch {
      /* ignore */
    }
  }, 5000)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
