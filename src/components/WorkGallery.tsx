'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ZoomIn, X, ChevronLeft, ChevronRight, ArrowRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'bathroom' | 'plumbing' | 'installation' | 'repair' | 'sewer' | 'commercial' | 'copper-repair' | 'water-heater';
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
    category: 'bathroom'
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
    category: 'bathroom'
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
    category: 'bathroom'
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
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/0c11bc7a-f272-4a73-87dd-58ae81f5e533.JPG',
    alt: 'Sewer lateral installation project',
    title: 'Sewer Lateral Installation',
    description: 'Professional sewer lateral installation with precision excavation and connection',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/0d20e757-983d-4bfc-9e5d-5f0f71714f20.JPG',
    alt: 'Large scale sewer project',
    title: 'Major Sewer Project',
    description: 'Complex sewer installation requiring specialized equipment and expertise',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/45d3c3ec-2bc6-4fc8-a519-ef8a499e1387.JPG',
    alt: 'Sewer line excavation work',
    title: 'Sewer Line Excavation',
    description: 'Careful excavation for sewer line installation with proper safety protocols',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/78dc5fce-5031-4de3-8ac5-924b93233b07.JPG',
    alt: 'Underground sewer installation',
    title: 'Underground Sewer Work',
    description: 'Expert underground sewer installation with advanced techniques',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/8bdf811d-ea30-4c33-9126-14463b16442e.JPG',
    alt: 'Sewer pipe installation process',
    title: 'Sewer Pipe Installation',
    description: 'Professional sewer pipe installation ensuring proper grade and connection',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/a436ce5e-926d-439f-96f3-483ed90ea86d.JPG',
    alt: 'Large sewer project completion',
    title: 'Big Project Completion',
    description: 'Successful completion of major sewer installation project',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/c95cf85e-d16b-48dd-9451-0966efdaf23d.JPG',
    alt: 'Sewer system connection work',
    title: 'Sewer System Connection',
    description: 'Professional connection of new sewer lines to existing infrastructure',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/dddbbb4b-ab7d-4581-b9e0-b646009a9b48.JPG',
    alt: 'Sewer lateral construction',
    title: 'Sewer Lateral Construction',
    description: 'Complete sewer lateral construction from property to main line',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/e35da8a6-9f59-4cd8-89cf-975d833b79c3.JPG',
    alt: 'Advanced sewer installation techniques',
    title: 'Advanced Sewer Installation',
    description: 'Utilizing advanced techniques for challenging sewer installation projects',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/e5fa217e-d7f8-4bc8-8434-4e819931cd65.JPG',
    alt: 'Professional sewer excavation',
    title: 'Professional Excavation',
    description: 'Precise excavation work for sewer line installation and repair',
    category: 'sewer'
  },
  {
    src: '/Fotos-Sewer-Lateral-Intallation-Big-Projects/fded3118-f238-4ce5-9b6f-e50ac1b4f378.JPG',
    alt: 'Complete sewer project showcase',
    title: 'Complete Sewer Project',
    description: 'Comprehensive sewer project demonstrating our expertise in large-scale installations',
    category: 'sewer'
  },
  {
    src: '/commercial-system/0614b987-99e8-4e50-bb09-7ccd49f27ce4 2.JPG',
    alt: 'Commercial plumbing system installation',
    title: 'Commercial System Installation',
    description: 'Professional commercial plumbing system installation for business facilities',
    category: 'commercial'
  },
  {
    src: '/commercial-system/37b0282c-6905-4b03-984a-145e6cbf6b49.JPG',
    alt: 'Commercial plumbing infrastructure',
    title: 'Commercial Infrastructure',
    description: 'Advanced commercial plumbing infrastructure for large-scale operations',
    category: 'commercial'
  },
  {
    src: '/commercial-system/dee74272-0fea-4cd8-bb76-acaac2a49d85.JPG',
    alt: 'Commercial plumbing project completion',
    title: 'Commercial Project Completion',
    description: 'Successful completion of comprehensive commercial plumbing system',
    category: 'commercial'
  },
  {
    src: '/copper-waterline-repair/0614b987-99e8-4e50-bb09-7ccd49f27ce4.JPG',
    alt: 'Copper waterline repair work',
    title: 'Copper Waterline Repair',
    description: 'Professional copper waterline repair ensuring long-lasting water flow',
    category: 'copper-repair'
  },
  {
    src: '/copper-waterline-repair/3ec4cfd9-30ff-4fbe-805e-bc6bb8bee159.JPG',
    alt: 'Copper pipe installation and repair',
    title: 'Copper Pipe Installation',
    description: 'Expert copper pipe installation and repair with precision soldering',
    category: 'copper-repair'
  },
  {
    src: '/copper-waterline-repair/6311d1ed-7967-4775-ae6d-6e7bb72c29a5.JPG',
    alt: 'Copper waterline system maintenance',
    title: 'Copper System Maintenance',
    description: 'Comprehensive copper waterline system maintenance and upgrades',
    category: 'copper-repair'
  },
  {
    src: '/copper-waterline-repair/7615c35a-9bb5-4a11-b969-b55ff6e41614.JPG',
    alt: 'Professional copper line repair',
    title: 'Professional Copper Repair',
    description: 'High-quality copper line repair with durable connections',
    category: 'copper-repair'
  },
  {
    src: '/copper-waterline-repair/7bfa3b3d-2c69-4118-b657-9567bd9273f8.JPG',
    alt: 'Copper waterline replacement project',
    title: 'Copper Line Replacement',
    description: 'Complete copper waterline replacement for improved water quality',
    category: 'copper-repair'
  },
  {
    src: '/copper-waterline-repair/c006b6ec-d5f0-4ce1-8300-16c5627b364a.JPG',
    alt: 'Advanced copper repair techniques',
    title: 'Advanced Copper Repair',
    description: 'Utilizing advanced techniques for complex copper waterline repairs',
    category: 'copper-repair'
  },
  {
    src: '/Tankless-and-water-heater-photos/14cd6255-d7bb-44f8-9abd-e60d6a6434d2.JPG',
    alt: 'Tankless water heater installation',
    title: 'Tankless Water Heater Installation',
    description: 'Professional tankless water heater installation for energy efficiency',
    category: 'water-heater'
  },
  {
    src: '/Tankless-and-water-heater-photos/265f3552-b56f-4be7-bf55-524426d10fe8.JPG',
    alt: 'Water heater system upgrade',
    title: 'Water Heater System Upgrade',
    description: 'Complete water heater system upgrade with modern efficient units',
    category: 'water-heater'
  },
  {
    src: '/Tankless-and-water-heater-photos/2ae60d75-a562-4af6-bba9-2143ed2c0ff7.JPG',
    alt: 'Professional water heater installation',
    title: 'Professional Water Heater Installation',
    description: 'Expert water heater installation with proper venting and connections',
    category: 'water-heater'
  },
  {
    src: '/Tankless-and-water-heater-photos/49060450-d467-42e7-ae92-8a8b968e6d46.JPG',
    alt: 'High-efficiency water heater setup',
    title: 'High-Efficiency Water Heater',
    description: 'Installation of high-efficiency water heater for optimal performance',
    category: 'water-heater'
  }
];

export const categories = [
  { id: 'all', name: 'All Work', color: 'brand-navy' },
  { id: 'bathroom', name: 'Bathrooms', color: 'brand-blue' },
  { id: 'installation', name: 'Installations', color: 'brand-gold' },
  { id: 'plumbing', name: 'Plumbing', color: 'brand-red' },
  { id: 'repair', name: 'Repairs', color: 'brand-navy' },
  { id: 'sewer', name: 'Sewer Projects', color: 'brand-gold' },
  { id: 'commercial', name: 'Commercial', color: 'brand-blue' },
  { id: 'copper-repair', name: 'Copper Repair', color: 'brand-red' },
  { id: 'water-heater', name: 'Water Heaters', color: 'brand-gold' }
];

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filteredImages = useMemo(() => {
    return selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

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

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextLightboxImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  }, [selectedImage, filteredImages.length]);

  const prevLightboxImage = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  }, [selectedImage, filteredImages.length]);

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
              key={`${image.src}-${index}`}
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