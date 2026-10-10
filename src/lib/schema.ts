import { BUSINESS, SITE_URL, cities } from '@/lib/site';

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}${BUSINESS.logo}`,
    image: `${SITE_URL}/opengraph-image`,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    areaServed: cities.map((c) => ({ '@type': 'City', name: `${c.name}, CA` })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: BUSINESS.sameAs,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { '@id': BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faq: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
