// Build-time entry: renders each route to static HTML (see scripts/prerender.mjs).
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { ROUTES, NOT_FOUND, findRoute, headHtml } from './routes';
import { markdownFor, mdPath, sitemapMd, llmsTxt } from './markdown';
import { PLANT_PHOTOS } from './data/plant';

export { ROUTES, NOT_FOUND, markdownFor, mdPath, sitemapMd, llmsTxt, PLANT_PHOTOS };

export function render(path) {
  const route = findRoute(path);
  return {
    html: renderToString(
      <React.StrictMode>
        <App path={path} />
      </React.StrictMode>,
    ),
    head: headHtml(route),
  };
}
