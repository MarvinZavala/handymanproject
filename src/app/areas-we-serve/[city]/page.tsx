import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, ArrowRight, Clock, Shield, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JsonLd from '@/components/seo/JsonLd';
import { services } from '@/lib/services';
import { BUSINESS, cities, getCity } from '@/lib/site';
import { BUSINESS_ID, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  return pageMetadata({
    title: `Plumber in ${city.name}, CA – 24/7 Emergency Plumbing`,
    description: `Licensed plumbers serving ${city.name}, CA. Water heaters, drain cleaning, leak repair, repiping and sewer laterals. 24/7 emergency service – call ${BUSINESS.phone}.`,
    path: `/areas-we-serve/${city.slug}`,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const featured = services.filter((s) => s.category === 'featured');
  const popular = services.filter((s) =>
    ['water-heater-installation', 'water-heater-repair', 'drain-repair', 'toilet-repair', 'faucet-repair', 'plumbing-repair', 'sewer-repair', 'gas-line-repair'].includes(s.slug)
  );
  const nearby = city.nearby.map(getCity).filter((c) => c !== undefined);

  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Plumbing services in ${city.name}, CA`,
            serviceType: 'Plumbing',
            provider: { '@id': BUSINESS_ID },
            areaServed: { '@type': 'City', name: `${city.name}, CA` },
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Areas We Serve', path: '/areas-we-serve' },
            { name: city.name, path: `/areas-we-serve/${city.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-100 mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-brand-gold">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/areas-we-serve" className="hover:text-brand-gold">Areas We Serve</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{city.name}</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Plumber in <span className="text-brand-gold">{city.name}, CA</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed">{city.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-bold px-8" asChild>
              <a href={`tel:${BUSINESS.phoneE164}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS.phone}
              </a>
            </Button>
            <Button size="lg" className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8" asChild>
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-blue-100">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-gold" />24/7 emergency service in {city.name}</li>
            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-gold" />Licensed, bonded &amp; insured</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold" />Free estimates</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">
          Plumbing services in {city.name}
        </h2>
        <p className="text-gray-600 mb-6">
          Residential and commercial plumbing for {city.name} and the rest of {city.county}.
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...featured, ...popular].map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="flex h-full flex-col gap-2 bg-white rounded-lg border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <span className="flex items-center justify-between gap-3 font-semibold text-brand-navy">
                  {s.title}
                  <ArrowRight className="w-4 h-4 text-brand-blue flex-shrink-0" />
                </span>
                <span className="text-sm text-gray-600">{s.short}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/services" className="inline-flex items-center gap-1 mt-6 text-brand-blue font-semibold hover:text-brand-navy">
          See all plumbing services <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Nearby */}
      {nearby.length > 0 && (
        <section className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
              Also serving areas near {city.name}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {nearby.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/areas-we-serve/${c.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-white px-4 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
