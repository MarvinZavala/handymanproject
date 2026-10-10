import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Plumbing Project Gallery – Real Bay Area Jobs',
  description: 'Photos of real plumbing projects by Twin Handyman & Plumbing: sewer laterals, tankless water heaters, copper repiping, commercial systems and bathroom work across the Bay Area.',
  path: '/gallery',
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}