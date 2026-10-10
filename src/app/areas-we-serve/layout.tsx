import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Areas We Serve – Bay Area & Sacramento Plumbers',
  description: 'Twin Handyman & Plumbing serves San Leandro, Oakland, Hayward, Castro Valley, Alameda, Berkeley, Fremont, San Francisco, San Jose, Sacramento and nearby cities. 24/7 emergency service.',
  path: '/areas-we-serve',
});

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
