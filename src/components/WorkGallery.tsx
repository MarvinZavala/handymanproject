'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'bathroom' | 'plumbing' | 'installation' | 'repair';
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/before-after.jpg',
    alt: 'Professional plumbing before and after',
    title: 'Complete Transformation',
    description: 'Professional plumbing renovation showing our quality workmanship',
    category: 'repair'
  },
  {
    src: '/bathroom.jpg',
    alt: 'Modern bathroom renovation',
    title: 'Bathroom Renovation',
    description: 'Complete bathroom remodel with modern fixtures and professional installation',
    category: 'bathroom'
  },
  {
    src: '/lavamanos.jpg',
    alt: 'Modern sink installation',
    title: 'Sink Installation',
    description: 'Professional sink installation with quality fixtures and perfect finishing',
    category: 'installation'
  },
  {
    src: '/lavamanos1.jpg',
    alt: 'Bathroom sink and fixtures',
    title: 'Bathroom Fixtures',
    description: 'High-quality bathroom fixtures installed with precision and care',
    category: 'bathroom'
  },
  {
    src: '/lavamanos4.jpg',
    alt: 'Professional sink work',
    title: 'Professional Installation',
    description: 'Expert sink installation showcasing our attention to detail',
    category: 'installation'
  },
  {
    src: '/lavamanos-after-before.jpg',
    alt: 'Sink before and after renovation',
    title: 'Sink Transformation',
    description: 'Before and after comparison showing dramatic improvement',
    category: 'repair'
  },
  {
    src: '/manillera.jpg',
    alt: 'Faucet installation work',
    title: 'Faucet Installation',
    description: 'Professional faucet installation with modern, durable fixtures',
    category: 'installation'
  },
  {
    src: '/manillerashowe.jpg',
    alt: 'Shower faucet installation',
    title: 'Shower Fixtures',
    description: 'Quality shower faucet installation for optimal performance',
    category: 'installation'
  },
  {
    src: '/bomba.jpg',
    alt: 'Water pump installation',
    title: 'Pump Installation',
    description: 'Professional water pump installation and maintenance service',
    category: 'plumbing'
  },
  {
    src: '/bombawaterorfilter.jpg',
    alt: 'Water filtration system',
    title: 'Water Filtration',
    description: 'Advanced water filtration system installation for clean, pure water',
    category: 'plumbing'
  },
  {
    src: '/watermanillera.jpg',
    alt: 'Water system installation',
    title: 'Water System Setup',
    description: 'Complete water system installation with quality components',
    category: 'plumbing'
  },
  {
    src: '/before-afterxd.jpg',
    alt: 'Plumbing work comparison',
    title: 'Quality Results',
    description: 'Professional results that exceed customer expectations',
    category: 'repair'
  },
  {
    src: '/plumbing.jpg',
    alt: 'Professional plumbing installation',
    title: 'Expert Plumbing Work',
    description: 'Professional plumbing installation with precision and care',
    category: 'plumbing'
  },
  {
    src: '/bathroom.jpg',
    alt: 'Complete bathroom renovation project',
    title: 'Bathroom Remodel',
    description: 'Full bathroom renovation with modern fixtures and finishes',
    category: 'bathroom'
  },
  {
    src: '/lavamanos.jpg',
    alt: 'Modern vanity and sink installation',
    title: 'Vanity Installation',
    description: 'Beautiful vanity and sink installation with professional finishing',
    category: 'installation'
  },
  {
    src: '/manillera.jpg',
    alt: 'High-quality faucet and fixture work',
    title: 'Premium Fixtures',
    description: 'Installation of high-quality faucets and bathroom fixtures',
    category: 'installation'
  },
  {
    src: '/bomba.jpg',
    alt: 'Water pump and system installation',
    title: 'Water System Work',
    description: 'Professional water pump and system installation service',
    category: 'plumbing'
  },
  {
    src: '/bombawaterorfilter.jpg',
    alt: 'Water filtration and pump system',
    title: 'Filtration Systems',
    description: 'Advanced water filtration and pump system installation',
    category: 'plumbing'
  },
  {
    src: '/watermanillera.jpg',
    alt: 'Complete water system setup',
    title: 'Water System Installation',
    description: 'Complete water system setup with quality components and connections',
    category: 'plumbing'
  },
  {
    src: '/before-after.jpg',
    alt: 'Dramatic before and after transformation',
    title: 'Amazing Transformation',
    description: 'Dramatic before and after showing our exceptional workmanship',
    category: 'repair'
  },
  {
    src: '/lavamanos-after-before.jpg',
    alt: 'Sink renovation before and after',
    title: 'Sink Renovation',
    description: 'Complete sink area renovation with stunning results',
    category: 'repair'
  },
  {
    src: '/lavamanos1.jpg',
    alt: 'Modern bathroom sink installation',
    title: 'Modern Sink Work',
    description: 'Modern bathroom sink installation with contemporary design',
    category: 'bathroom'
  },
  {
    src: '/lavamanos4.jpg',
    alt: 'Professional sink and counter work',
    title: 'Counter & Sink Installation',
    description: 'Professional counter and sink installation with perfect alignment',
    category: 'installation'
  },
  {
    src: '/manillerashowe.jpg',
    alt: 'Shower fixture and valve installation',
    title: 'Shower Systems',
    description: 'Professional shower fixture and valve installation for optimal performance',
    category: 'installation'
  },
  {
    src: '/1002ac21-d8f9-4568-9615-57c2fa0fdaa2.JPG',
    alt: 'Professional plumbing installation work',
    title: 'Quality Installation',
    description: 'Expert plumbing installation with attention to detail and craftsmanship',
    category: 'installation'
  },
  {
    src: '/1558571a-48dd-4f50-8d4f-c797eadea29a.JPG',
    alt: 'Bathroom renovation project',
    title: 'Bathroom Upgrade',
    description: 'Complete bathroom renovation with modern fixtures and professional finishing',
    category: 'bathroom'
  },
  {
    src: '/337a247a-98c3-405b-8fd9-f090f84a87bf.JPG',
    alt: 'Plumbing repair and maintenance',
    title: 'Expert Repairs',
    description: 'Professional plumbing repair work ensuring long-lasting solutions',
    category: 'repair'
  },
  {
    src: '/37d81e63-9feb-4a51-b228-a838c030df7f.JPG',
    alt: 'Advanced plumbing installation',
    title: 'Complex Installation',
    description: 'Advanced plumbing installation requiring specialized expertise and tools',
    category: 'plumbing'
  },
  {
    src: '/409c0804-3b45-4483-a3b6-bbcafa4b1a35.JPG',
    alt: 'Professional fixture installation',
    title: 'Fixture Work',
    description: 'Precision fixture installation with professional grade materials',
    category: 'installation'
  },
  {
    src: '/4c379b4e-26e0-48e0-9dc1-ed14029111d4.JPG',
    alt: 'Bathroom plumbing work',
    title: 'Bathroom Plumbing',
    description: 'Comprehensive bathroom plumbing work with modern upgrades',
    category: 'bathroom'
  },
  {
    src: '/72c87435-9506-4b7f-9c91-7c59526df098.JPG',
    alt: 'Plumbing system repair',
    title: 'System Repair',
    description: 'Complete plumbing system repair and optimization for better performance',
    category: 'repair'
  },
  {
    src: '/af9953cb-ecc0-494a-a4da-fb8d32bbcc9e.JPG',
    alt: 'Professional plumbing service',
    title: 'Professional Service',
    description: 'High-quality plumbing service with guaranteed satisfaction',
    category: 'plumbing'
  },
  {
    src: '/d90d3358-a0ec-49db-a304-cf4dda92bb72.JPG',
    alt: 'Installation and repair work',
    title: 'Installation & Repair',
    description: 'Combined installation and repair work showcasing versatile expertise',
    category: 'installation'
  }
];

export const categories = [
  { id: 'all', name: 'All Work', color: 'brand-navy' },
  { id: 'bathroom', name: 'Bathrooms', color: 'brand-blue' },
  { id: 'installation', name: 'Installations', color: 'brand-gold' },
  { id: 'plumbing', name: 'Plumbing', color: 'brand-red' },
  { id: 'repair', name: 'Repairs', color: 'brand-navy' }
];

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
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
    setSelectedImage(index);
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
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={sectionRef} className="text-center space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full text-sm font-medium">
            <span>🏆</span>
            <span>Premium Quality Work</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Our Work Speaks for Itself
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-delayed' : 'opacity-0'}`}>
            See real projects from satisfied Bay Area customers. Every job showcases our commitment 
            to excellence, quality craftsmanship, and professional service.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
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


        {/* Gallery Grid - Show only first 6 images for performance */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.slice(0, 6).map((image, index) => (
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
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading={index < 3 ? "eager" : "lazy"}
                  priority={index < 3}
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

        {/* View All Images Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-brand-blue hover:bg-brand-navy text-white font-bold px-8 py-4"
            asChild
          >
            <Link href="/gallery">
              <Camera className="w-5 h-5 mr-2" />
              View All {galleryImages.length} Photos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

      </div>

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
      
      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.5s ease-out 0.3s both;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1.5s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
}