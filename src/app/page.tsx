import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';
import WorkGallery from '@/components/WorkGallery';
import { services } from '@/lib/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, CheckCircle, Award } from 'lucide-react';

export default function Home() {
  const popularServices = services.slice(0, 6); // Top 6 services for homepage
  const commercialServices = services.filter(s => s.category === 'featured' && s.title.toLowerCase().includes('commercial') || s.title.includes('100 Gallon') || s.title.includes('Hydro Jet') || s.title.includes('Rough Plumbing')).slice(-4); // Latest commercial services
  
  // Commercial service images mapping
  const commercialServiceImages = {
    'commercial-floor-drain-maintenance': '/draincleaningservice.jpeg',
    'commercial-water-heaters-100-gallon': '/bomba.jpg',
    'drain-hydro-jet-cleaning-4-6-inch': '/Hydro-DrainCleaning 4-6 inch.jpg',
    'commercial-rough-plumbing': '/COMMERCIALPLUMBING.jpg'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />


      {/* Work Gallery - New Photo Section */}
      <WorkGallery />

      {/* Popular Services Section */}
      <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/5 to-brand-blue/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
              <span>⚡</span>
              <span>Most Requested</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
              Popular Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert solutions for your most common plumbing and handyman needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {popularServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Simplified CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left sm:flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                    Need a different service?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We offer 60+ plumbing and handyman services
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-6 py-3"
                    asChild
                  >
                    <a href="tel:(510) 926-7272">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-3"
                    asChild
                  >
                    <Link href="/services">
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-brand-navy via-slate-800 to-brand-navy text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center space-x-2 bg-brand-gold/20 border border-brand-gold/30 text-brand-gold px-6 py-3 rounded-full text-sm font-bold">
              <Award className="w-5 h-5" />
              <span>COMMERCIAL SPECIALISTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              <span className="block">Professional Commercial</span>
              <span className="block bg-gradient-to-r from-brand-gold to-yellow-300 bg-clip-text text-transparent">
                Plumbing Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specialized commercial solutions for businesses, restaurants, and industrial facilities. 
              <span className="text-brand-gold font-semibold"> Licensed, bonded, and ready for your project.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {commercialServices.map((service, index) => (
              <div key={service.slug} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-brand-gold/50 transition-all duration-300 hover:scale-[1.02]">
                  
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={commercialServiceImages[service.slug as keyof typeof commercialServiceImages] || '/plumbing.jpg'}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-brand-navy">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {service.short}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center space-x-1 text-brand-gold text-sm font-medium">
                        <CheckCircle className="w-4 h-4" />
                        <span>Commercial Grade</span>
                      </span>
                      <a 
                        href="tel:(510) 926-7272"
                        className="inline-flex items-center text-white hover:text-brand-gold transition-colors text-sm font-medium"
                      >
                        Call Now
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Commercial CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Commercial Plumbing Services?
              </h3>
              <p className="text-gray-300 mb-6">
                Get a free consultation for your business project. We handle everything from maintenance contracts to major installations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-brand-navy font-bold px-8 py-4"
                  asChild
                >
                  <a href="tel:(510) 926-7272">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Commercial Quote
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4"
                  asChild
                >
                  <Link href="/services">
                    View All Commercial Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Expertise Showcase Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Award className="w-4 h-4" />
                  <span>Professional Results</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-4">
                  Transforming Bay Area Homes
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  From emergency repairs to complete renovations, our expert team delivers 
                  quality results that exceed expectations. See the difference professional 
                  craftsmanship makes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-brand-navy text-lg mb-3">Recent Project Highlights</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                    Complete bathroom renovation in Oakland
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                    Emergency pipe repair in San Leandro
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-gold mr-3 flex-shrink-0" />
                    Kitchen sink installation in Hayward
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Button 
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-navy text-white font-bold px-8 py-3"
                  asChild
                >
                  <a href="tel:(510) 926-7272">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Your Project Today
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Before/After Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/bathroom.jpg"
                  alt="Modern bathroom renovation by Twin Handyman & Plumbing"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Premium Bathroom Renovations</h3>
                    <p className="text-sm opacity-90">Complete transformations with attention to every detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Banner */}
      <CtaBanner />

    </div>
  );
}
