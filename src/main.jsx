import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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
  requestAnimationFrame(() => setTimeout(() => ReactDOM.hydrateRoot(root, app), 0))
} else {
  ReactDOM.createRoot(root).render(app)
}
