import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-brand-navy">4.9/5</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
            What Our Customers Say
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See why hundreds of Bay Area residents 
            trust Twin Handyman & Plumbing for their service needs.
          </p>
          
          <div className="text-sm text-gray-500">
            Based on 185+ verified reviews across Google, Yelp, and Facebook
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-bold text-brand-navy">{review.name}</h4>
                    <span className="text-gray-500 text-sm">• {review.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-brand-blue font-medium bg-brand-blue-light bg-opacity-20 px-2 py-1 rounded">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed italic">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* CTA to View More Reviews */}
        <div className="text-center space-y-6">
          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              See All Our Reviews
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Read hundreds more reviews from satisfied customers across the Bay Area. 
              Our reputation speaks for itself.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3"
                asChild
              >
                <a 
                  href="https://www.yelp.com/biz/twin-handyman-plumbing-san-leandro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Yelp Reviews
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-3"
                asChild
              >
                <a 
                  href="https://maps.google.com/search/twin+handyman+plumbing+san+leandro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Google Reviews
                </a>
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-brand-navy">185+</div>
              <div className="text-sm text-gray-600">Total Reviews</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-brand-navy">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-brand-navy">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-brand-navy">Licensed</div>
              <div className="text-sm text-gray-600">Bonded & Insured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}