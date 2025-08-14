import { Clock, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand-blue to-brand-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Same-Day Appointments Available
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Don&apos;t wait days for plumbing service. We offer same-day appointments 
              for most services, with emergency response available 24/7.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-brand-gold" />
              <div className="text-left">
                <div className="font-bold">24/7 Emergency</div>
                <div className="text-sm text-gray-300">Available anytime</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="w-8 h-8 text-brand-gold" />
              <div className="text-left">
                <div className="font-bold">Same-Day Service</div>
                <div className="text-sm text-gray-300">Most appointments</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-8 h-8 text-brand-gold" />
              <div className="text-left">
                <div className="font-bold">Free Estimates</div>
                <div className="text-sm text-gray-300">Virtual or in-person</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="tel:(510) 926-7272">
                <Phone className="w-6 h-6 mr-3" />
                Call for Same-Day Service
              </a>
            </Button>
            
            <div className="text-center space-y-2">
              <div className="text-brand-gold-light text-sm">
                Or contact us another way:
              </div>
              <div className="flex gap-3 justify-center">
                <a 
                  href="sms:(510) 926-7272"
                  className="text-white hover:text-brand-gold transition-colors text-sm underline"
                >
                  Text Us
                </a>
                <a 
                  href="mailto:info@twinhandyman.com"
                  className="text-white hover:text-brand-gold transition-colors text-sm underline"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="border-t border-brand-navy-2 pt-6">
            <p className="text-gray-300 text-sm">
              Proudly serving San Leandro, Oakland, Alameda, Berkeley, Hayward, 
              Castro Valley, San Lorenzo, Fremont, and surrounding Bay Area communities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}