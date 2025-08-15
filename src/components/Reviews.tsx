import { Star, ExternalLink, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'San Leandro',
      rating: 5,
      text: 'Twin Handyman saved the day! Our water heater failed on a Sunday morning and they had someone out within 2 hours. Professional, fair pricing, and excellent service. Highly recommend!',
      service: 'Water Heater Repair'
    },
    {
      name: 'Mike R.',
      location: 'Oakland',
      rating: 5,
      text: 'Had a persistent kitchen sink leak that other plumbers couldn\'t fix. Twin Handyman diagnosed the issue quickly and provided a lasting solution. Great communication throughout the process.',
      service: 'Sink Repair'
    },
    {
      name: 'Jennifer L.',
      location: 'Alameda',
      rating: 5,
      text: 'Excellent work installing our new bathroom faucets and shower. Clean, professional installation with attention to detail. They even cleaned up better than I expected!',
      service: 'Faucet Installation'
    },
    {
      name: 'David K.',
      location: 'Castro Valley',
      rating: 5,
      text: 'Emergency drain cleaning at 9 PM on a weeknight. They came right out and fixed our backed-up sewer line. Truly 24/7 service when you need it most. Fair pricing too.',
      service: 'Drain Cleaning'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/lavamanos.jpg"
          alt="Professional work background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gray-50/85"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-lg" />
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-navy">4.9/5</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
            What Our Customers Say
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. See why hundreds of Bay Area residents 
            trust Twin Handyman & Plumbing for their service needs.
          </p>
          
          <div className="text-sm text-gray-500">
            Based on 185+ verified reviews across Google, Yelp, and Facebook
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-8 h-8 text-brand-gold" />
              </div>

              {/* Review Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold text-brand-navy text-lg">{review.name}</h4>
                    <span className="text-gray-500 text-sm">• {review.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-brand-blue font-semibold bg-brand-blue bg-opacity-10 px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed text-base relative z-10">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Simple CTA Button */}
        <div className="text-center">
          <Button 
            className="bg-brand-gold hover:bg-yellow-600 text-brand-navy px-8 py-3 font-bold"
            asChild
          >
            <a 
              href="https://www.yelp.com/biz_photos/twin-handyman-and-plumbing-san-leandro" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Yelp Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}