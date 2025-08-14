import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';
import { services, getFeaturedServices } from '@/lib/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredServices = getFeaturedServices();
  const popularServices = services.slice(0, 8); // First 8 services for homepage

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, we&apos;re the Bay Area&apos;s 
              trusted choice for all your plumbing and handyman needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="bg-brand-blue hover:bg-brand-navy text-white px-8 py-3"
              asChild
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are our most requested services by Bay Area homeowners and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Banner */}
      <CtaBanner />

      {/* Emergency Contact Section */}
      <section className="py-12 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Emergency Plumbing? We&apos;re Here 24/7
          </h2>
          <p className="text-lg mb-6 text-red-100">
            Burst pipe? Water heater failure? Don&apos;t wait - call now for immediate assistance.
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100 px-8 py-4 text-lg font-bold"
            asChild
          >
            <a href="tel:(510) 926-7272">
              Emergency Line: (510) 926-7272
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
