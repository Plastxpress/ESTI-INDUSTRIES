// Google Analytics 4, loaded after the page: at the first interaction or 6 s after load,
// and only once a real measurement ID is set in data/site.js.
// Click events: whatsapp_click, phone_click, email_click. Form event: quote_form_submit.
import { GA_MEASUREMENT_ID } from './data/site';

const enabled = () => /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== 'G-XXXXXXX';

export function track(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag('event', name, params);
}

function clickEvent(href) {
  if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return 'whatsapp_click';
  if (href.startsWith('tel:')) return 'phone_click';
  if (href.startsWith('mailto:')) return 'email_click';
  return null;
}

export function initAnalytics() {
  if (typeof window === 'undefined' || !enabled()) return;
  const start = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(s);
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      const name = a && clickEvent(a.getAttribute('href') || '');
      if (name) track(name, { link_url: a.href, page_path: window.location.pathname });
    }, { capture: true });
  };
  // Start at the first interaction (scroll, tap, key) or 6 s after load, whichever comes first,
  // so the GA script never competes with the first paint or first input.
  let started = false;
  const go = () => { if (started) return; started = true; start(); };
  const later = () => setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(go, { timeout: 2000 }) : go()), 6000);
  if (document.readyState === 'complete') later();
  else window.addEventListener('load', later, { once: true });
  ['scroll', 'pointerdown', 'keydown', 'touchstart'].forEach((t) => window.addEventListener(t, go, { once: true, passive: true }));
}
