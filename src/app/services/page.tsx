import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';
import { getAllInstallations, getAllRepairs, getFeaturedServices } from '@/lib/services';
import { Wrench, Settings, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Professional Plumbing Services | Twin Handyman & Plumbing Bay Area',
  description: 'Complete plumbing services in Bay Area. Water heater installation, drain cleaning, leak repair, and more. Licensed, bonded, insured. Call (510) 926-7272',
  keywords: 'plumbing services, water heater, drain cleaning, leak repair, toilet installation, San Leandro, Oakland, Bay Area',
};

export default function ServicesPage() {
  const featuredServices = getFeaturedServices();
  const installations = getAllInstallations();
  const repairs = getAllRepairs();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Professional Plumbing Services
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              From emergency repairs to complete installations, Twin Handyman & Plumbing 
              offers comprehensive plumbing services throughout the Bay Area. Our licensed 
              technicians are ready to solve your plumbing problems with quality workmanship 
              and transparent pricing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Featured Services</h3>
                <p className="text-gray-300 text-sm">Our most popular and specialized services</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Installations</h3>
                <p className="text-gray-300 text-sm">New fixtures, pipes, and complete systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Repairs</h3>
                <p className="text-gray-300 text-sm">Quick fixes and emergency service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-8 h-8 text-brand-gold" />
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
                Featured Services
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most requested and specialized services, designed to meet the unique 
              needs of Bay Area homeowners and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <Wrench className="w-8 h-8 text-brand-blue" />
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
                Installation Services
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation of new plumbing fixtures, pipes, and systems. 
              We ensure code compliance and warranty all our installation work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installations.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <Settings className="w-8 h-8 text-brand-red" />
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
                Repair Services
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable repairs for all your plumbing problems. From leaky faucets 
              to emergency pipe bursts, we're available 24/7 to restore your plumbing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairs.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Serving the Entire Bay Area
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              'San Leandro', 'Oakland', 'Alameda', 'Berkeley',
              'Hayward', 'Castro Valley', 'San Lorenzo', 'Fremont',
              'Union City', 'Newark', 'Emeryville', 'Piedmont',
              'Albany', 'El Cerrito', 'Richmond', 'San Pablo'
            ].map((city) => (
              <div key={city} className="text-brand-gold-light text-sm font-medium">
                {city}
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-300 text-lg">
            Don't see your area listed? Call us at (510) 926-7272 - we likely serve your location!
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}