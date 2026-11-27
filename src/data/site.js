// Single source of truth for NAP (name, address, phone) and other site-wide details.
// Confirmed by the owner — use EXACTLY, the same text everywhere.

export const SITE_URL = 'https://www.estipack.com';
export const SITE_NAME = 'ESTI Packaging Industry';

export const EMAIL = 'admin@estipack.com';
export const PHONE_TEL = '+919833182733';
export const PHONE_DISPLAY = '+91 98331 82733';
export const ADDRESS_TEXT = 'Arkose Industrial Estate, Dheku, Khalapur, Khopoli, Maharashtra 410203, India';
export const HOURS_TEXT = 'Open 24 hours, 7 days';

export const WHATSAPP_BASE = 'https://wa.me/919833182733';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/estipack/';

// ---------------------------------------------------------------------------
// OWNER TO FILL (left empty on purpose — nothing is guessed).
// Empty values are simply not output.
// ---------------------------------------------------------------------------

// Official profile URLs for schema "sameAs" (only real, existing profiles).
export const PROFILE_URLS = {
  googleBusinessProfile: '', // [PASTE GBP SHARE LINK] — Google Business Profile > Share
  indiamart: '', // [LINK]
  globallinker: 'https://www.globallinker.com/seller/esti-packaging-industry',
  linkedin: LINKEDIN_URL, // existing LinkedIn link on the site
  youtube: '', // [LINK]
  linkerStore: 'https://estipackaging.linker.store',
};

// Google Analytics 4 measurement ID. Placeholder until the owner creates the GA4 property;
// while it is the placeholder, no analytics script is loaded.
export const GA_MEASUREMENT_ID = 'G-XXXXXXX';

// Khopoli plant coordinates (Google Maps: right-click the pin → copy the two numbers).
export const GEO = { latitude: null, longitude: null };

// Google Search Console → HTML tag method → paste ONLY the content="..." value here.
export const GOOGLE_SITE_VERIFICATION = '';

// ---------------------------------------------------------------------------

const ADDRESS_Q = encodeURIComponent(ADDRESS_TEXT);
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${ADDRESS_Q}&output=embed`;
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_Q}`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_Q}`;
// Google profile link: the Business Profile once filled, otherwise a Maps search for the address.
export const GOOGLE_PROFILE_URL = PROFILE_URLS.googleBusinessProfile || MAP_LINK_URL;

// Manufacturing units exactly as listed in the existing footer.
export const UNITS = [
  { city: 'Mumbai', text: 'Deonar, Mumbai - 400088' },
  { city: 'Khopoli', text: 'Dheku, Khopoli - 410203' },
  { city: 'Pune', text: 'Shirur - Ranjangaon Industrial Zone' },
];

export const whatsappLink = (text) => `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
