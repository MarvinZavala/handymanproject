import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work Gallery | Twin Handyman & Plumbing | Bay Area Projects',
  description: 'View our complete portfolio of professional plumbing and handyman projects across the Bay Area. See real work from satisfied customers in San Leandro, Oakland, and surrounding areas.',
  keywords: 'plumbing gallery, handyman work photos, Bay Area plumbing projects, before and after plumbing, bathroom renovation gallery, Twin Handyman portfolio',
  openGraph: {
    title: 'Professional Plumbing & Handyman Work Gallery | Twin Handyman & Plumbing',
    description: 'Explore our complete portfolio of Bay Area plumbing and handyman projects. Real work, real results from satisfied customers.',
    type: 'website',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}