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
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
