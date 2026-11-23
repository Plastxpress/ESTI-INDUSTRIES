# Pre-commit checks (2026-11-22)

## 1–2. Schema: reviews, ratings, offers, prices
None present. No page or source file contains `aggregateRating`, `review`, `offers`, `price` or `AggregateOffer`.
Product schema = name, description, images, category, brand, manufacturer, spec `additionalProperty`.

## 3. Pre-rendered HTML (curl proof)
Every page's H1, H2/H3 headings, product text and FAQ questions/answers are in the raw HTML served
to `curl` (no JavaScript). Example: `curl -s https://www.estipack.com/octagonal-bins | grep -o '<h3[^>]*>[^<]*</h3>'`
lists the 5 FAQ questions as `<h3>` elements.

## 4. Videos
All videos < 3 MB. factory-manufacturing and hero-factory-bg each have an AV1 (WebM) version (sharper at
the same size; Chrome/Edge/Firefox/newer Safari) plus an H.264 MP4 fallback. All non-hero videos use
`preload="none"` and start only when scrolled into view; the hero keeps `preload="auto"` + a poster image.
Original hero file is kept in `Media/make_one_more_video_to_add_bef (1).mp4`.

## 5. Quote form — does NOT email info@estipack.com
At the owner's earlier request the form opens **WhatsApp (+91 98331 82733)** with all fields pre-filled
(plus the page it was sent from). Below the form is an "or email us at info@estipack.com" link (mailto).
Nothing is sent to info@estipack.com automatically. Options if email delivery is wanted — owner decision:
- **Netlify Forms** (if the site is hosted on Netlify): free tier, emails each submission to info@estipack.com.
- **FormSubmit.co / Web3Forms**: free, works on any host; one-time activation from the info@estipack.com inbox. Form data passes through that third-party service.
- Keep WhatsApp as primary and add email as a second destination.

## 6. Address audit (report only — nothing changed)
Single source: `src/data/site.js` (`ADDRESS_TEXT`, `UNITS`).

| Where | Shows |
|---|---|
| Schema LocalBusiness `address` (all pages) | 21, Arkose Industrial Estate, Dheku, Khalapur, Khopoli 410203 (owner-provided) |
| Schema `department` (all pages) | Mumbai: Deonar 400088; Pune: Shirur - Ranjangaon Industrial Zone |
| Footer "Direct Contact" (all pages) | Full Khopoli address |
| Footer "Manufacturing Units" (all pages) | Mumbai: Deonar, Mumbai - 400 088 · Khopoli: Dheku, Khopoli - 410 203 · Pune: Shirur - Ranjangaon |
| Footer bottom line (all pages) | "Deonar, Mumbai • Khopoli • Pune" |
| Header info bar (all pages) | "Mumbai • Khopoli • Pune" |
| /contact | Full Khopoli address, map of Khopoli address, units list |
| /about | Units list, Khopoli shown with full address |
| Home FAQ "Where is ESTI Packaging located?" | Khopoli address + all three units |
| `<meta name="geo.placename">` | Khopoli, Maharashtra, India |
| llms.txt / Markdown pages | Khopoli address; units list |
| Unused legacy file `src/components/Contact.jsx` (not rendered) | Deonar as address; "Raigad District" (not on the live site) |

Inconsistencies to resolve with the owner:
1. **Which is the head office?** Khopoli is the main address in schema/contact, but the footer bottom line lists "Deonar, Mumbai" first, and Deonar is labelled a *Manufacturing Unit*. The original site used Deonar as the main schema address.
2. **Is Deonar a manufacturing unit or an office?**
3. PIN formatting differs: "410203" (owner address, schema) vs "410 203" (units list); "400 088" (units) vs "400088" (schema).
4. Pune has no street address or PIN code.
5. Google Business Profile, directory listings and the site must all use the same main address.

## 7. /company-info (hidden until filled)
Fill `src/data/companyInfo.js`. Each section renders only when its value is real (anything starting with
"[" counts as empty). With nothing filled, the page, its footer link, sitemap entry and Markdown copy do not
exist. Verified both states locally.
