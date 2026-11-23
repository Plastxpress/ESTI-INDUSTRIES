// =====================================================================
// COMPANY INFO — details the OWNER must supply.
// ---------------------------------------------------------------------
// Replace each "[... - from owner]" placeholder with the real value.
// Anything still starting with "[" is treated as EMPTY and is never shown.
// The /company-info page (and its menu, footer and sitemap entries) only
// exists once at least one section below is filled in.
//
// Certificate files: put the PDF or image in public/assets/docs/ and use
// its path, e.g. '/assets/docs/iso-9001-certificate.pdf'.
// =====================================================================

export const COMPANY_INFO = {
  gstNumber: '[GST NUMBER - from owner]',

  certificates: [
    {
      name: 'ISO 9001',
      certificateNumber: '[ISO 9001 CERTIFICATE NUMBER - from owner]',
      file: '[ISO 9001 CERTIFICATE FILE PATH - from owner]',
    },
    {
      name: 'UN 1266',
      certificateNumber: '[UN 1266 CERTIFICATE NUMBER - from owner]',
      file: '[UN 1266 CERTIFICATE FILE PATH - from owner]',
    },
  ],

  // Google Maps > Share > Embed a map > copy only the src="..." URL.
  mapEmbedUrl: '[GOOGLE MAP EMBED URL - from owner]',

  // Google Business Profile > Share profile link (e.g. https://g.page/... or https://maps.app.goo.gl/...).
  businessProfileUrl: '[GOOGLE BUSINESS PROFILE LINK - from owner]',

  // Real customer reviews only, with the customer's permission. Copy text exactly.
  // Example entry (remove the brackets when filling):
  // { name: 'Customer name', company: 'Company', text: 'Review text', source: 'Google' }
  reviews: [],
};

export const isFilled = (v) => typeof v === 'string' && v.trim() !== '' && !v.trim().startsWith('[');

export const filledCertificates = () =>
  COMPANY_INFO.certificates.filter((c) => isFilled(c.file) || isFilled(c.certificateNumber));

export const filledReviews = () =>
  COMPANY_INFO.reviews.filter((r) => isFilled(r.text) && isFilled(r.name));

/** True once any section has real content — only then is /company-info published. */
export const COMPANY_INFO_READY =
  isFilled(COMPANY_INFO.gstNumber) ||
  filledCertificates().length > 0 ||
  isFilled(COMPANY_INFO.mapEmbedUrl) ||
  isFilled(COMPANY_INFO.businessProfileUrl) ||
  filledReviews().length > 0;
