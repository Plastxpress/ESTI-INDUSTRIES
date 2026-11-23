// Route table + per-page SEO (title, description, canonical, JSON-LD).
// Shared by the client (App.jsx) and the build-time prerenderer (entry-server.jsx).
import { PRODUCTS } from './data/products';
import { HOME_FAQS, faqsForProduct } from './data/faqs';
import { COMPANY_INFO_READY } from './data/companyInfo';
import { webp } from './components/Img';
import {
  SITE_URL,
  SITE_NAME,
  EMAIL,
  PHONE_TEL,
  MAP_LINK_URL,
  PROFILE_URLS,
  GEO,
  GOOGLE_SITE_VERIFICATION,
} from './data/site';

const abs = (p) => `${SITE_URL}${p === '/' ? '/' : p}`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// ---------- JSON-LD builders ----------

const organization = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: ['ESTI Packaging'],
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon-512x512.png?v=2`, width: 512, height: 512 },
  image: [
    `${SITE_URL}/assets/images/og/about.jpg`,
    `${SITE_URL}/assets/images/og/contact.jpg`,
  ],
  description:
    'ESTI Packaging Industry manufactures corrugated boxes (3-ply, 5-ply and 7-ply), heavy-duty pallet boxes, UN 1266 certified boxes, octagonal bulk bins, 2-metre tall cartons, die-cut boxes, dividers, document storage boxes and supplies heat-treated wooden pallets. Over 30 years of box manufacturing since 1995.',
  foundingDate: '1995',
  telephone: PHONE_TEL,
  email: EMAIL,
  contactPoint: [{ '@type': 'ContactPoint', telephone: PHONE_TEL, email: EMAIL, contactType: 'sales' }],
  // Only real, owner-confirmed profiles (empty slots in data/site.js are skipped).
  sameAs: Object.values(PROFILE_URLS).filter(Boolean),
  hasMap: MAP_LINK_URL,
  ...(GEO.latitude && GEO.longitude ? { geo: { '@type': 'GeoCoordinates', latitude: GEO.latitude, longitude: GEO.longitude } } : {}),
  openingHours: 'Mo-Su 00:00-23:59',
  knowsAbout: [
    'Corrugated boxes',
    '3-ply, 5-ply and 7-ply corrugated board',
    'Heavy-duty corrugated pallet boxes',
    'UN 1266 certified packaging',
    'Octagonal bulk bins',
    'Die-cut corrugated boxes',
    'Corrugated partitions and dividers',
    'Document storage and archival boxes',
    'ISPM-15 heat-treated wooden pallets',
    'Export packaging',
  ],
  // Owner-provided address, phone and hours.
  address: {
    '@type': 'PostalAddress',
    streetAddress: '21, Arkose Industrial Estate, Dheku, Khalapur',
    addressLocality: 'Khopoli',
    postalCode: '410203',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  // Other units exactly as listed in the site footer.
  department: [
    {
      '@type': 'LocalBusiness',
      name: 'ESTI Packaging — Mumbai',
      address: { '@type': 'PostalAddress', streetAddress: 'Deonar', addressLocality: 'Mumbai', postalCode: '400088', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    },
    {
      '@type': 'LocalBusiness',
      name: 'ESTI Packaging — Pune',
      address: { '@type': 'PostalAddress', streetAddress: 'Shirur - Ranjangaon Industrial Zone', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
    },
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
};

const breadcrumb = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  // Fragment URLs (e.g. /#products) are left out of the structured breadcrumb.
  itemListElement: crumbs.filter((c) => !c.path.includes('#')).map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

const webPage = (r) => ({
  '@context': 'https://schema.org',
  '@type': r.pageType || 'WebPage',
  '@id': `${abs(r.path)}#webpage`,
  url: abs(r.path),
  name: r.title,
  description: r.description,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en-IN',
});

// Product schema: only on the product's own page, no offers/price/ratings.
const productSchema = (p) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${abs(p.path)}#product`,
  name: p.title,
  description: p.description,
  image: p.images.map((src) => `${SITE_URL}${webp(src)}`),
  category: p.category,
  url: abs(p.path),
  brand: { '@type': 'Brand', name: 'ESTI Packaging' },
  manufacturer: { '@id': ORG_ID },
  additionalProperty: p.specs.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })),
});

// FAQPage: built from the same data as the visible FAQ section on the page.
const faqSchema = (r, items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${abs(r.path)}#faq`,
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

// Home: the product catalogue as an ItemList of the product pages.
const productList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${SITE_URL}/#products`,
  name: 'Comprehensive Product Portfolio',
  numberOfItems: PRODUCTS.length,
  itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: abs(p.path) })),
};

// ---------- Routes ----------

const HOME = { name: 'Home', path: '/' };

const STATIC_ROUTES = [
  {
    path: '/',
    page: 'home',
    title: 'Corrugated Box Manufacturer in India | ESTI Packaging',
    description:
      'ESTI Packaging Industry makes 3, 5 & 7-ply corrugated boxes, pallet boxes, UN 1266 certified boxes and octabins in Khopoli, Maharashtra. Since 1995.',
    crumbs: [HOME],
    og: 'home',
  },
  {
    path: '/packaging-guide',
    page: 'guide',
    title: 'Corrugated Board & Box Die-Line Guide | ESTI Packaging',
    description:
      'Build a 3, 5 or 7-ply corrugated board section and see its caliper, then draw a FEFCO 0201 die-line and see how many blanks fit one 1800 × 3500 sheet.',
    crumbs: [HOME, { name: 'Packaging Guide', path: '/packaging-guide' }],
  },
  {
    path: '/industries',
    page: 'industries',
    title: 'Industrial Packaging for 16 Industries | ESTI Packaging',
    description:
      'Corrugated packaging for 16 industries, from heavy engineering, automotive and pharmaceuticals to FMCG, food, e-commerce, logistics and export.',
    crumbs: [HOME, { name: 'Industries', path: '/industries' }],
  },
  {
    path: '/about',
    page: 'about',
    pageType: 'AboutPage',
    title: 'About ESTI Packaging Industry | Box Manufacturing Since 1995',
    description:
      'Box manufacturing since 1995. ISO 9001 and UN 1266 certified, 1,200 MT monthly board capacity, with units in Mumbai, Khopoli and Pune.',
    crumbs: [HOME, { name: 'About', path: '/about' }],
  },
  {
    path: '/contact',
    page: 'contact',
    pageType: 'ContactPage',
    title: 'Contact ESTI Packaging, Khopoli | Request a Quote',
    description:
      'ESTI Packaging Industry, 21, Arkose Industrial Estate, Dheku, Khalapur, Khopoli, Maharashtra 410203. Call +91 98331 82733, open 24 hours, 7 days.',
    crumbs: [HOME, { name: 'Contact Us', path: '/contact' }],
  },
];

// Company Info: published only once the owner fills data/companyInfo.js (hidden until then).
if (COMPANY_INFO_READY) {
  STATIC_ROUTES.push({
    path: '/company-info',
    page: 'companyInfo',
    title: 'Company Info | ESTI Packaging Industry',
    description: 'ESTI Packaging Industry company information: registration, certificates, location and customer reviews.',
    crumbs: [HOME, { name: 'Company Info', path: '/company-info' }],
  });
}

const PRODUCT_ROUTES = PRODUCTS.map((p) => ({
  path: p.path,
  page: 'product',
  productId: p.id,
  title: p.seoTitle,
  description: p.seoDescription,
  crumbs: [HOME, { name: 'Products', path: '/#products' }, { name: p.navLabel, path: p.path }],
  og: p.slug,
  product: p,
}));

export const ROUTES = [...STATIC_ROUTES, ...PRODUCT_ROUTES];

export const NOT_FOUND = {
  path: '/404',
  page: 'notfound',
  title: 'Page not found | ESTI Packaging',
  description: 'The page you were looking for could not be found.',
  crumbs: [HOME],
  noindex: true,
};

export function normalizePath(pathname) {
  let p = (pathname || '/').split(/[?#]/)[0];
  p = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p || '/';
}

export function findRoute(pathname) {
  const p = normalizePath(pathname);
  return ROUTES.find((r) => r.path === p) || NOT_FOUND;
}

export function jsonLdFor(r) {
  if (r.noindex) return [];
  const blocks = [organization, website, webPage(r), breadcrumb(r.crumbs)];
  if (r.product) {
    blocks.push(productSchema(r.product));
    const faqs = faqsForProduct(r.product.id);
    if (faqs.length) blocks.push(faqSchema(r, faqs));
  }
  if (r.page === 'home') blocks.push(productList, faqSchema(r, HOME_FAQS));
  return blocks;
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** <head> tags for a route (inserted at build time by the prerenderer). */
const OG_KEYS = new Set(['home', 'packaging-guide', 'industries', 'about', 'contact', ...PRODUCTS.map((p) => p.slug)]);

export function headHtml(r) {
  const url = abs(r.path);
  // Per-page 1200x630 share image (real product / plant photo) from public/assets/images/og/.
  const ogKey = r.og || r.path.replace(/^\//, '');
  const image = `${SITE_URL}/assets/images/og/${OG_KEYS.has(ogKey) ? ogKey : 'home'}.jpg`;
  const tags = [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    r.noindex
      ? '<meta name="robots" content="noindex, follow" />'
      : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
  ];
  if (GOOGLE_SITE_VERIFICATION) tags.push(`<meta name="google-site-verification" content="${esc(GOOGLE_SITE_VERIFICATION)}" />`);
  // Home: start fetching the hero poster (first paint) right away.
  if (r.page === 'home') tags.push('<link rel="preload" as="image" href="/assets/videos/posters/hero-factory-bg.webp" fetchpriority="high" />');
  if (!r.noindex) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="${r.product ? 'product' : 'website'}" />`,
      `<meta property="og:site_name" content="${SITE_NAME}" />`,
      `<meta property="og:title" content="${esc(r.title)}" />`,
      `<meta property="og:description" content="${esc(r.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${image}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      `<meta property="og:image:alt" content="${esc(r.title)}" />`,
      '<meta property="og:locale" content="en_IN" />',
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${esc(r.title)}" />`,
      `<meta name="twitter:description" content="${esc(r.description)}" />`,
      `<meta name="twitter:image" content="${image}" />`,
    );
    for (const block of jsonLdFor(r)) {
      tags.push(`<script type="application/ld+json">${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`);
    }
  }
  return tags.join('\n    ');
}
