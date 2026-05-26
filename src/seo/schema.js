import { SITE, absoluteUrl } from './siteConfig';

function stripUndefined(obj) {
  // JSON-LD should not include undefined values.
  return JSON.parse(JSON.stringify(obj));
}

export function organizationSchema() {
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logoPath),
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    sameAs: [SITE.social.linkedin, SITE.social.twitter].filter(Boolean),
  });
}

export function localBusinessSchema({
  // Accept lightweight overrides when needed.
  name = SITE.name,
  url = SITE.url,
  image = absoluteUrl(SITE.defaultOgImagePath),
  priceRange,
  services,
} = {}) {
  const hasServices = Array.isArray(services) && services.length > 0;
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    image,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: 'Pune',
    },
    priceRange,
    // Use makesOffer/hasOfferCatalog if you want richer modeling later.
    knowsAbout: hasServices ? services : undefined,
  });
}

export function websiteSchema() {
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.language,
  });
}

export function breadcrumbSchema(items) {
  // items: [{ name, item }] where item is absolute URL
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: (items || []).map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  });
}

export function faqSchema(faqItems) {
  // faqItems: [{ question, answer }]
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (faqItems || []).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  });
}

export function serviceSchema({
  name,
  description,
  serviceType,
  areaServed = 'Pune',
  urlPath,
} = {}) {
  return stripUndefined({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: {
      '@type': 'City',
      name: areaServed,
    },
    url: urlPath ? absoluteUrl(urlPath) : undefined,
  });
}
