import type { MetadataRoute } from 'next';
import { SITE_URL, cities } from '@/lib/site';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/services`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/areas-we-serve`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/gallery`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: s.category === 'featured' ? 0.8 : 0.7,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${SITE_URL}/areas-we-serve/${c.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...pages, ...servicePages, ...cityPages];
}
