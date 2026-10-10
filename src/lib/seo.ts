import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/site';

// openGraph is not deep-merged with the root layout, and nested layouts break the
// title template, so every page sets its full title, OG data and image explicitly
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${BUSINESS.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: BUSINESS.name,
      type: 'website',
      locale: 'en_US',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}
