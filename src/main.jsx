import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initAnalytics } from './analytics'

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App path={window.location.pathname} />
  </React.StrictMode>
)

// Production pages are pre-rendered to static HTML, so hydrate them.
// In dev (or if pre-rendering is skipped) the root is empty: render normally.
if (root.firstElementChild) {
  // Let the browser paint the pre-rendered HTML first, then attach React on the next
  // frame (hydration is a long task; running it before first paint delays the page).
  // Hydrate once the browser is idle after load, or at the first interaction, whichever comes first.
  let done = false
  const hydrate = () => {
    if (done) return
    done = true
    ReactDOM.hydrateRoot(root, app)
  }
  const idle = () => (window.requestIdleCallback ? requestIdleCallback(hydrate, { timeout: 3000 }) : setTimeout(hydrate, 1500))
  if (document.readyState === 'complete') idle()
  else window.addEventListener('load', idle, { once: true })
  ;['pointerdown', 'keydown', 'touchstart', 'focusin'].forEach((t) => window.addEventListener(t, hydrate, { once: true, passive: true, capture: true }))
} else {
  ReactDOM.createRoot(root).render(app)
}

initAnalytics()
