import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us – 24/7 Emergency Plumber',
  description: 'Call (510) 926-7272 for 24/7 emergency plumbing in San Leandro, Oakland and the Bay Area, or schedule a free estimate with Twin Handyman & Plumbing.',
  path: '/contact',
});

export default function Contact() {
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
              <Phone className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
              <span className="block text-white">Contact</span>
              <span className="block text-brand-gold" style={{ textShadow: '0 0 20px rgba(184, 142, 59, 0.5)' }}>Twin Handyman</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to solve your plumbing problem? We're here to help, 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
                  Get Started Today
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Choose the method that works best for you. We're available 24/7 for emergencies 
                  and offer same-day service for most appointments.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-3">For fastest service, call us directly</p>
                    <Button 
                      className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold"
                      asChild
                    >
                      <a href="tel:(510) 926-7272">
                        (510) 926-7272
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Text */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Text Us</h3>
                    <p className="text-gray-600 mb-3">Quick questions or appointment requests</p>
                    <Button 
                      variant="outline"
                      className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                      asChild
                    >
                      <a href="sms:(510) 926-7272">
                        Text (510) 926-7272
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-3">For detailed project inquiries</p>
                    <Button 
                      variant="outline"
                      className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                      asChild
                    >
                      <a href="mailto:info@twinhandyman.com">
                        info@twinhandyman.com
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Calendly */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-brand-gold/10 to-yellow-500/10 rounded-xl border border-brand-gold/20">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Schedule Online</h3>
                    <p className="text-gray-600 mb-3">Book your appointment at your convenience</p>
                    <Button 
                      variant="outline"
                      className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white"
                      asChild
                    >
                      <a 
                        href="https://calendly.com/gladiatorman4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Appointment
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Follow on Instagram</h3>
                    <p className="text-gray-600 mb-3">See our latest work and behind-the-scenes</p>
                    <Button 
                      variant="outline"
                      className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                      asChild
                    >
                      <a 
                        href="https://www.instagram.com/twinhandyman_plumbing?igsh=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        @twinhandyman_plumbing
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Yelp */}
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/YelpSVGcon.svg"
                      alt="Yelp"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Review on Yelp</h3>
                    <p className="text-gray-600 mb-3">Share your experience with our service</p>
                    <Button 
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      asChild
                    >
                      <a 
                        href="https://www.yelp.com/biz/twin-handyman-and-plumbing-san-leandro?rr=1#location-and-hours"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/YelpSVGcon.svg"
                          alt="Yelp"
                          width={16}
                          height={16}
                          className="w-4 h-4 mr-2"
                        />
                        Read & Write Reviews
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
                  Service Information
                </h2>
              </div>

              <div className="space-y-6">
                {/* Service Hours */}
                <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-xl font-bold">Service Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-bold text-brand-gold mb-2">
                        We're Available 24/7
                      </div>
                      <p className="text-white/90">
                        Monday through Sunday, around the clock
                      </p>
                      <p className="text-white/80 text-xs mt-2">
                        Always ready to help with your plumbing emergencies and scheduled services
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                    <h3 className="text-xl font-bold text-brand-navy">Service Area</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We proudly serve San Leandro, Oakland, Alameda, Berkeley, Hayward, 
                    Castro Valley, and surrounding Bay Area communities.
                  </p>
                </div>

                {/* Response Time */}
                <div className="bg-brand-gold/10 rounded-xl p-6 border border-brand-gold/20">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">Response Time</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      Emergency calls: Within 1 hour
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      Same-day service: Most appointments
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                      Scheduled service: Within 24-48 hours
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 sm:py-12 bg-brand-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            Emergency Plumbing? Don't Wait!
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-red-100 max-w-2xl mx-auto leading-relaxed">
            Burst pipes, water heater failures, and sewer backups can't wait. Call now for immediate help.
          </p>
          <Button 
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100 px-8 py-4 text-lg font-bold"
            asChild
          >
            <a href="tel:(510) 926-7272">
              Emergency Line: (510) 926-7272
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}