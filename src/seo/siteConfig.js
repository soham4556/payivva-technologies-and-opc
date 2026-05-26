// Centralized SEO configuration (single source of truth).
// Keep this file simple: constants and helpers only.

export const SITE = {
  name: 'Payivva Technologies',
  legalName: 'PAYIVVA Technologies (OPC) Private Limited',
  domain: 'payivva-technologies-and-opc.vercel.app',
  url: 'https://payivva-technologies-and-opc.vercel.app',
  // Keep in sync with public assets
  logoPath: '/logo.png',
  // Prefer a real, shipped asset for social previews.
  // If you add a proper 1200x630 OG image later, change this back.
  defaultOgImagePath: '/logo.png',
  locale: 'en_IN',
  language: 'en',
  themeColor: '#0f172a',
  author: 'PAYIVVA Technologies (OPC) Private Limited',
  address: {
    streetAddress: 'House no. 105, Green Park - Venkatesh Properties, Autadwadi Handewadi',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411060',
    addressCountry: 'IN',
  },
  geo: {
    // Pune (approx). Used for LocalBusiness schema.
    latitude: 18.5204,
    longitude: 73.8567,
  },
  contact: {
    email: 'info@payivva.com',
    phone: '+91 20 6712 8900',
  },
  social: {
    linkedin: 'https://linkedin.com/company/payivva',
    twitter: 'https://twitter.com/payivva',
  },
};

export function absoluteUrl(pathname = '/') {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE.url}${path}`;
}
