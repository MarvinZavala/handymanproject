import { Metadata } from 'next';
import { MapPin, Phone, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import ServiceAreaMapWrapper from '@/components/ServiceAreaMapWrapper';

export const metadata: Metadata = {
  title: 'Service Areas | Twin Handyman & Plumbing | Bay Area Coverage',
  description: 'Professional plumbing and handyman services throughout the Bay Area. Serving San Leandro, Oakland, Alameda, Berkeley, Hayward, and surrounding communities with 24/7 emergency service.',
  keywords: 'plumbing Bay Area, handyman Oakland, San Leandro plumber, Alameda plumbing, Berkeley handyman, Hayward plumbing services',
};





export default function AreasWeServe() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Bay Area Coverage</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
              <span className="block text-white">Serving the Entire</span>
              <span className="block text-brand-gold" style={{ textShadow: '0 0 20px rgba(184, 142, 59, 0.5)' }}>Bay Area</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              From San Leandro to Sacramento, from Oakland to Stockton – we bring professional 
              plumbing and handyman services directly to your door, 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4"
                asChild
              >
                <a href="tel:(510) 926-7272">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Service in Your Area
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4"
                asChild
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>




      {/* Interactive Service Area Map */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
              <MapPin className="w-4 h-4" />
              <span>Interactive Coverage Map</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
              See Our Service Areas
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our coverage zones across Northern California. Click on any area to see specific services and contact information.
            </p>
          </div>

          <ServiceAreaMapWrapper />
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  <span>Local Expertise</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-4">
                  Why Choose Local Bay Area Experts?
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  As longtime Bay Area residents, we understand the unique challenges of our local homes and businesses. 
                  From older Oakland Victorian plumbing to modern Alameda condos, we've seen it all.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-lg mb-1">Local Knowledge</h3>
                    <p className="text-gray-600">We know Bay Area building codes, common issues, and the best local suppliers for parts and materials.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-lg mb-1">Faster Response</h3>
                    <p className="text-gray-600">Being local means shorter travel times and quicker emergency response throughout the Bay Area.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-lg mb-1">Community Focused</h3>
                    <p className="text-gray-600">We're invested in our community's success and build lasting relationships with our neighbors.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-navy text-white font-bold px-8 py-3"
                  asChild
                >
                  <a href="tel:(510) 926-7272">
                    <Phone className="w-5 h-5 mr-2" />
                    Experience Local Service
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/plumbing.jpg"
                  alt="Local Bay Area plumber providing professional service"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Professional Local Service</h3>
                    <p className="text-sm opacity-90">Your trusted Bay Area plumbing and handyman experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              No matter where you are in the Bay Area, we're here to help. 
              Call now for same-day service in most locations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4"
                asChild
              >
                <a href="tel:(510) 926-7272">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (510) 926-7272
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4"
                asChild
              >
                <Link href="/services">
                  View Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}