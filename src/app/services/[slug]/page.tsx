import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Phone, ArrowRight, Clock, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JsonLd from '@/components/seo/JsonLd';
import { services, getServiceBySlug } from '@/lib/services';
import { BUSINESS, SITE_URL, cities } from '@/lib/site';
import { BUSINESS_ID, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: `${service.title} in San Leandro & Bay Area`,
    description: `${service.short} Licensed, bonded & insured. 24/7 service – call ${BUSINESS.phone}.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 6);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: cities.map((c) => ({ '@type': 'City', name: `${c.name}, CA` })),
  };

  return (
    <div className="min-h-screen">
      <JsonLd
        data={[
          serviceSchema,
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title, path: `/services/${service.slug}` },
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
              <li><Link href="/services" className="hover:text-brand-gold">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{service.title}</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            {service.title} <span className="text-brand-gold">in San Leandro &amp; the Bay Area</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed">
            {service.description}
          </p>
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
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-gold" />24/7 emergency service</li>
            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-gold" />Licensed, bonded &amp; insured</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-gold" />Free estimates</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
          Why choose us for {service.title.toLowerCase()}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 bg-white rounded-lg border border-gray-100 shadow-sm p-4">
              <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
              {service.title} FAQ
            </h2>
            <div className="space-y-4">
              {service.faq.map((f) => (
                <details key={f.question} className="group bg-white rounded-lg border border-gray-200 p-5" open>
                  <summary className="font-semibold text-brand-navy cursor-pointer list-none">
                    <h3 className="inline">{f.question}</h3>
                  </summary>
                  <p className="mt-3 text-gray-700 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
          {service.title} near you
        </h2>
        <ul className="flex flex-wrap gap-3">
          {cities.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/areas-we-serve/${c.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 px-4 py-2 text-sm text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">Related services</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex h-full items-center justify-between gap-3 bg-white rounded-lg border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
                  >
                    <span className="font-semibold text-brand-navy">{s.title}</span>
                    <ArrowRight className="w-4 h-4 text-brand-blue flex-shrink-0" />
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
