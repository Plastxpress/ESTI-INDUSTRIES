// Google Analytics 4, loaded only after the page has finished loading (and the browser is idle),
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
  const idle = () => (window.requestIdleCallback ? requestIdleCallback(start, { timeout: 4000 }) : setTimeout(start, 2000));
  if (document.readyState === 'complete') idle();
  else window.addEventListener('load', idle, { once: true });
}
