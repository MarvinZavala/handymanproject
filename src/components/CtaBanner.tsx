import { Clock, Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-navy text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/plumbing.jpg"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Same-Day Appointments Available
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Don&apos;t wait days for plumbing service. We offer same-day appointments 
              for most services, with emergency response available 24/7.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base">24/7 Emergency</div>
                <div className="text-xs sm:text-sm text-gray-300">Available anytime</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base">Same-Day Service</div>
                <div className="text-xs sm:text-sm text-gray-300">Most appointments</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-brand-gold flex-shrink-0" />
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base">Free Estimates</div>
                <div className="text-xs sm:text-sm text-gray-300">Virtual or in-person</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center max-w-lg mx-auto">
            <Button 
              size="lg"
              className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="tel:(510) 926-7272">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Call for Same-Day Service
              </a>
            </Button>
            
            <div className="text-center space-y-3">
              <div className="text-brand-gold-light text-sm">
                Or contact us another way:
              </div>
              <div className="flex gap-6 justify-center">
                <a 
                  href="sms:(510) 926-7272"
                  className="text-white hover:text-brand-gold transition-colors text-sm underline font-medium"
                >
                  Text Us
                </a>
                <a 
                  href="mailto:info@twinhandyman.com"
                  className="text-white hover:text-brand-gold transition-colors text-sm underline font-medium"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <MapPin className="w-5 h-5 text-brand-gold" />
              <span className="font-semibold text-brand-gold">Service Area</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
              Proudly serving San Leandro, Oakland, Alameda, Berkeley, Hayward, 
              Castro Valley, San Lorenzo, Fremont, and surrounding Bay Area communities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}