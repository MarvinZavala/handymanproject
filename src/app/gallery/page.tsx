'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowLeft, Phone, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { galleryImages, categories } from '@/components/WorkGallery';


export default function GalleryPage() {
  const [isGalleryHeroVisible, setIsGalleryHeroVisible] = useState(false);
  const galleryHeroRef = useRef<HTMLDivElement>(null);
  const galleryGridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12; // Show 12 images per page for better performance
  
  const filteredImages = useMemo(() => {
    return selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);
  
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, startIndex + imagesPerPage);
  
  // Utility function to scroll to gallery grid - Professional implementation
  const scrollToGallery = () => {
    if (!galleryGridRef.current) return;
    
    try {
      const element = galleryGridRef.current;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Calculate optimal offset based on viewport and device
      const headerHeight = 80; // Account for sticky header
      const paddingTop = 40; // Additional breathing room
      const targetScrollPosition = Math.max(0, absoluteElementTop - headerHeight - paddingTop);
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
      });
      
      // Fallback for older browsers
      if (!window.CSS || !CSS.supports('scroll-behavior', 'smooth')) {
        window.scrollTo(0, targetScrollPosition);
      }
    } catch (error) {
      console.warn('Scroll to gallery failed:', error);
      // Graceful fallback - scroll to a reasonable position
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return; // Prevent unnecessary updates
    
    setSelectedCategory(category);
    setCurrentPage(1);
    
    // Use double RAF to ensure DOM has fully updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToGallery();
      });
    });
  };

  // Handle page change with auto-scroll to gallery
  const handlePageChange = (page: number) => {
    if (page === currentPage) return; // Prevent unnecessary updates
    if (page < 1 || page > totalPages) return; // Validate page bounds
    
    setCurrentPage(page);
    
    // Use double RAF to ensure state update and re-render complete
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToGallery();
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGalleryHeroVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = galleryHeroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const openLightbox = (index: number) => {
    // Convert local index to global index in filtered images
    const globalIndex = startIndex + index;
    setSelectedImage(globalIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextLightboxImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevLightboxImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={galleryHeroRef} className="text-center space-y-6">
            <div className={`inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium transition-all duration-700 ${isGalleryHeroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <Star className="w-4 h-4" />
              <span>Premium Quality Work</span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight transition-all duration-700 ${isGalleryHeroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-white">See What We've</span>
              <span className="block text-brand-gold" style={{ textShadow: '0 0 20px rgba(184, 142, 59, 0.5)' }}>Built Together</span>
            </h1>
            
            <p className={`text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ${isGalleryHeroVisible ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
              Real homes, real families, real results. Take a look at some of our favorite projects 
              from neighbors just like you across The San Francisco Bay Area, Silicon Valley and Sacramento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4"
                asChild
              >
                <a href="tel:(510) 926-7272">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Your Project Started
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-brand-navy px-8 py-4"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-brand-blue text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-brand-blue'
                }`}
              >
                {category.name} ({
                  category.id === 'all' 
                    ? galleryImages.length 
                    : galleryImages.filter(img => img.category === category.id).length
                })
              </button>
            ))}
          </div>

          {/* Gallery Grid - Paginated */}
          <div ref={galleryGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 4 ? "eager" : "lazy"}
                    priority={index < 4}
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs opacity-90 line-clamp-2">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mb-12">
              <Button
                variant="outline"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-brand-blue text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          {/* Results Info */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + imagesPerPage, filteredImages.length)} of {filteredImages.length} photos
              {selectedCategory !== 'all' && (
                <span className="ml-2 text-brand-blue font-medium">
                  in {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Ready for Your Project?</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Let's Create Your Next Success Story
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  Join hundreds of satisfied Bay Area customers who trust us with their plumbing and handyman needs. 
                  Your project could be our next showcase!
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
                    className="border-white bg-transparent text-white hover:bg-white hover:text-brand-navy px-8 py-4"
                    asChild
                  >
                    <Link href="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-sm opacity-90">{filteredImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}