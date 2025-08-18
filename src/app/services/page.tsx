'use client';

import { useState, useMemo, useEffect, useRef, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services';
import { Phone, Search, Filter, Star, Wrench, Settings, CheckCircle } from 'lucide-react';

function ServicesContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedCategory('all');
  }, []);

  // Handle URL search parameters
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchTerm(decodeURIComponent(search));
    }
  }, [searchParams]);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const heroRefCurrent = heroRef.current;
    
    if (heroRefCurrent) {
      heroObserver.observe(heroRefCurrent);
    }

    return () => {
      if (heroRefCurrent) {
        heroObserver.unobserve(heroRefCurrent);
      }
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Filter, color: 'brand-navy' },
    { id: 'featured', name: 'Featured', icon: Star, color: 'brand-gold' },
    { id: 'installation', name: 'Installations', icon: Wrench, color: 'brand-blue' },
    { id: 'repair', name: 'Repairs', icon: Settings, color: 'brand-red' }
  ];

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.short.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div ref={heroRef} className="text-center space-y-6">
            <div className={`inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium transition-all duration-700 ${isHeroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <Settings className="w-4 h-4" />
              <span>All Services</span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight transition-all duration-700 ${isHeroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-white">All Our</span>
              <span className="block text-brand-gold" style={{ textShadow: '0 0 20px rgba(184, 142, 59, 0.5)' }}>Plumbing Services</span>
            </h1>
            
            <p className={`text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isHeroVisible ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
              From emergency repairs to full installations. Licensed, bonded, and here when you need us most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4"
                asChild
              >
                <a href="tel:(510) 926-7272">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (510) 926-7272
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-brand-blue text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {category.id === 'all' 
                        ? services.length 
                        : services.filter(s => s.category === category.id).length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-brand-navy">{filteredServices.length}</span> services
              {searchTerm && (
                <span className="ml-1">
                  for "<span className="font-semibold text-brand-blue">{searchTerm}</span>"
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div key={service.slug} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-brand-blue/30">
                  <div className="space-y-4">
                    {/* Service Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        service.category === 'featured' 
                          ? 'bg-brand-gold/10 text-brand-gold' 
                          : service.category === 'installation'
                          ? 'bg-brand-blue/10 text-brand-blue'
                          : 'bg-brand-red/10 text-brand-red'
                      }`}>
                        {service.category === 'featured' ? 'Featured' : 
                         service.category === 'installation' ? 'Installation' : 'Repair'}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-xl font-bold text-brand-navy leading-tight">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {service.short}
                    </p>

                    {/* Benefits Preview */}
                    <div className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                      {service.benefits.length > 2 && (
                        <div className="text-xs text-brand-blue font-medium">
                          +{service.benefits.length - 2} more benefits
                        </div>
                      )}
                    </div>


                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="space-y-4">
                <Search className="w-16 h-16 text-gray-400 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-600">No services found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or category filter
                </p>
                <Button 
                  onClick={clearFilters}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Need Service Right Now?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't wait! Our licensed technicians are standing by 24/7 for emergency service throughout the Bay Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4"
                asChild
              >
                <a href="tel:(510) 926-7272">
                  <Phone className="w-6 h-6 mr-2" />
                  Emergency: (510) 926-7272
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-brand-navy px-8 py-4"
                asChild
              >
                <a href="mailto:info@twinhandyman.com">
                  Request Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}