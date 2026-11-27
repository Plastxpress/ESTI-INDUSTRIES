import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { EMAIL, WHATSAPP_BASE } from '../data/site';
import { track } from '../analytics';

/**
 * Short quote form. There is no server: submitting opens WhatsApp
 * (wa.me/919833182733) with every field pre-filled as a message, plus the URL
 * of the page it was sent from. Without JavaScript the form simply opens the
 * WhatsApp chat (no pre-filled text). An email link is shown below the form.
 */
export default function InquiryForm({ defaultProductId = '', heading = 'Request a Quote', id = 'quote-form' }) {
  const selectRef = useRef(null);
  const [sent, setSent] = useState(false);

  // /contact?product=<slug> preselects the product (set after hydration).
  useEffect(() => {
    if (defaultProductId || !selectRef.current) return;
    const slug = new URLSearchParams(window.location.search).get('product');
    const match = PRODUCTS.find((p) => p.slug === slug);
    if (match) selectRef.current.value = match.title;
  }, [defaultProductId]);

  const defaultTitle = PRODUCTS.find((p) => p.id === defaultProductId)?.title || '';

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k) => String(f.get(k) || '').trim() || '-';
    const text = [
      '*Quote Request - ESTI Packaging*',
      '',
      `*Name:* ${get('name')}`,
      `*Phone:* ${get('phone')}`,
      `*Company:* ${get('company')}`,
      `*Product:* ${get('product')}`,
      `*Delivery Location:* ${get('deliveryLocation')}`,
      `*Message:* ${get('message')}`,
      '',
      `*Sent from:* ${window.location.href.split('#')[0]}`,
    ].join('\n');
    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
    track('quote_form_submit', { product: get('product'), page_path: window.location.pathname });
    // New tab on desktop; if a popup blocker stops it, open in the same tab.
    const win = window.open(url, '_blank', 'noopener');
    if (!win) window.location.href = url;
    setSent(true);
  };

  const field =
    'mt-1 block w-full min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base sm:text-sm text-ink placeholder:text-slate-500 focus:border-kraft-700 focus:outline-none focus:ring-2 focus:ring-kraft-700/20';
  const label = 'block text-sm font-semibold text-ink';

  return (
    <form
      id={id}
      action={WHATSAPP_BASE}
      method="get"
      target="_blank"
      onSubmit={onSubmit}
      className="scroll-mt-36 rounded-2xl border border-line bg-white p-5 sm:p-7 shadow-sm"
    >
      <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight font-grotesk flex items-center gap-2">
        <Mail className="w-5 h-5 text-kraft-700" />
        {heading}
      </h2>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className={label}>
          Name <span className="text-rose-600">*</span>
          <input name="name" type="text" required autoComplete="name" className={field} />
        </label>
        <label className={label}>
          Phone <span className="text-rose-600">*</span>
          <input name="phone" type="tel" required autoComplete="tel" className={field} />
        </label>
        <label className={label}>
          Company
          <input name="company" type="text" autoComplete="organization" className={field} />
        </label>
        <label className={label}>
          Product
          <select ref={selectRef} name="product" defaultValue={defaultTitle} className={field}>
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title}
              </option>
            ))}
          </select>
        </label>
        <label className={`${label} sm:col-span-2`}>
          Delivery Location
          <input
            id={`${id}-delivery-location`}
            name="deliveryLocation"
            type="text"
            placeholder="e.g. Mumbai, Pune, Gujarat"
            autoComplete="address-level2"
            className={field}
          />
        </label>
        <label className={`${label} sm:col-span-2`}>
          Message
          <textarea name="message" rows={4} className={field} />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-3 min-h-12 rounded-full bg-wa hover:bg-wa-dark text-white text-sm font-bold shadow-sm transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Send on WhatsApp
        </button>
        <p className="text-sm text-slate-600">Opens WhatsApp with your details filled in.</p>
      </div>
      {sent && (
        <p role="status" className="mt-3 text-sm text-kraft-800">
          If WhatsApp did not open, please email us directly at {EMAIL}.
        </p>
      )}
      <p className="mt-4 pt-4 border-t border-line text-sm text-slate-600">
        or email us at{' '}
        <a href={`mailto:${EMAIL}`} className="font-semibold text-kraft-800 underline underline-offset-2">
          {EMAIL}
        </a>
      </p>
    </form>
  );
}
