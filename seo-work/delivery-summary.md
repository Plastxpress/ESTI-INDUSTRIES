# SEO + AEO delivery summary

Status: **implemented-locally** (not deployed, not committed). Date: 2026-11-22.
Scope: all 14 public pages of estipack.com in this repo. Rule: no new facts — every answer, spec
and claim comes from existing site content or the owner-provided address/phone/hours.

## Done (on-site)

| Area | Change | Where |
|---|---|---|
| Titles & descriptions | Rewritten to target buyer queries (see keyword-map.md); all titles ≤60 chars, descriptions 134–156 chars | `src/routes.js`, `src/data/products.js` |
| AEO: visible FAQs | Home (7 Q&A) + every product page (4–5 Q&A), answers built from the product's own specs | `src/data/faqs.js`, `src/components/Faq.jsx` |
| Structured data | FAQPage (same text as visible FAQs, verified), Product `additionalProperty` from spec tables, home ItemList of products, Organization `knowsAbout` + `hasMap` | `src/routes.js` |
| Internal links | Each industry card links to the products whose "Recommended Sectors" name that industry | `src/components/IndustriesSection.jsx`, `src/data/catalogue.js` |
| Page speed (LCP) | Hero video poster image (12 KB); video file unchanged | `src/components/Hero.jsx` |
| Image sitemap | About page now lists the 12 plant photos (48 images total) | `scripts/prerender.mjs` |
| Markdown profile | `/llms.txt`, `/sitemap.md` and a `.md` version of every page, generated from the same data as the HTML; robots.txt + sitemap.xml comments point to them; UTF-8 `text/markdown` headers for Vercel/Netlify/Apache | `src/markdown.js`, `scripts/prerender.mjs`, hosting configs |

Already in place from earlier work: static pre-rendered HTML, one H1 per page, canonicals, breadcrumbs,
WebP images with width/height, lazy media, sitemap.xml, robots.txt, LocalBusiness with address/hours.

## Verified locally

- JSON-LD parses on all pages; FAQ schema text appears verbatim in the visible page; no offers/ratings.
- 198 links in the Markdown corpus resolve; sitemap.xml has 14 URLs, no `.md` URLs.
- Browser suites: all pages at 375/768/1280 px (H1, canonical, no overflow, no console errors, tap targets),
  Packaging Guide tools, forms, lazy videos.

## Limitations (honest)

- No Google Search Console / keyword-volume data was available → query families are reasoned, not measured.
- Google currently shows FAQ rich results only for a small set of authoritative sites; the FAQs still help
  answer engines and on-page relevance, but do not expect FAQ snippets in Google.
- VideoObject schema was **not** added: it needs an upload date, which is not known.
- No ranking, citation or traffic outcome is guaranteed by any of this.

## Needs the owner / off-site (biggest remaining ranking levers)

1. **Deploy, then Google Search Console:** verify the domain, submit `sitemap.xml`, request indexing of the home and product pages.
2. **Google Business Profile** for the Khopoli address (same name/address/phone/hours as the site) — the main lever for "near me" and local manufacturer searches.
3. **Bing Webmaster Tools:** import from Search Console.
4. **Directory listings / links:** IndiaMART, TradeIndia, Justdial, industry associations — same NAP everywhere.
5. **Reviews** on the Google Business Profile (real customers only).
6. After 4–8 weeks: review Search Console queries and refine titles/FAQs for the queries that actually show impressions.
