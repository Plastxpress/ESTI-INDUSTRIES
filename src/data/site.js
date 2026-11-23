// Single source of truth for contact details used across pages, footer and schema.

export const SITE_URL = 'https://www.estipack.com';
export const SITE_NAME = 'ESTI Packaging Industry';

export const EMAIL = 'info@estipack.com';

// Existing site phone link + display format (header, hero) — unchanged.
export const PHONE_TEL = '+919833182733';
export const PHONE_DISPLAY_LEGACY = '(+91) 983 318 2733';

// Owner-provided details — use exactly as written.
export const PHONE_DISPLAY = '+91 98331 82733';
export const ADDRESS_TEXT = '21, Arkose Industrial Estate, Dheku, Khalapur, Khopoli, Maharashtra 410203';
export const HOURS_TEXT = 'Open 24 hours, 7 days';

export const WHATSAPP_BASE = 'https://wa.me/919833182733';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/estipack/';

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_TEXT)}&output=embed`;
export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_TEXT)}`;

// Manufacturing units exactly as listed in the existing footer.
export const UNITS = [
  { city: 'Mumbai', text: 'Deonar, Mumbai - 400088' },
  { city: 'Khopoli', text: 'Dheku, Khopoli - 410203' },
  { city: 'Pune', text: 'Shirur - Ranjangaon Industrial Zone' },
];

export const whatsappLink = (text) => `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
