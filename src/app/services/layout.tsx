import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Plumbing Services – Installation & Repair',
  description: 'Water heater and tankless installation, drain cleaning, hydro jetting, leak detection, repiping, sewer laterals and more. Licensed Bay Area plumbers – call (510) 926-7272.',
  path: '/services',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}