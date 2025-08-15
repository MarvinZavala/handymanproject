import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Plumbing Services | Twin Handyman & Plumbing Bay Area',
  description: 'Complete plumbing services in Bay Area. Water heater installation, drain cleaning, leak repair, and more. Licensed, bonded, insured. Call (510) 926-7272',
  keywords: 'plumbing services, water heater, drain cleaning, leak repair, toilet installation, San Leandro, Oakland, Bay Area',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}