'use client';

import { Phone, MessageSquare, Mail, Star, Clock, Shield, Award, Users, Wrench, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import RequestCallback from './RequestCallback';

export default function Hero() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  const quickStats = [
    { icon: Star, value: '4.9★', label: 'Rating' },
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Clock, value: '24/7', label: 'Emergency' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ];

  const urgentServices = [
    'Emergency Plumbing',
    'Water Heater Repair',
    'Pipe Burst Fix',
    'Drain Cleaning'
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-2 to-brand-blue text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold opacity-10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-blue-light opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-gold-light opacity-5 rounded-full blur-lg animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Emergency Banner */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center bg-brand-red px-6 py-3 rounded-full text-white font-bold text-sm md:text-base animate-pulse">
              <Phone className="w-5 h-5 mr-2" />
              🚨 EMERGENCY SERVICE AVAILABLE 24/7 - CALL NOW!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Main Logo for Mobile */}
              <div className="lg:hidden flex justify-center mb-8">
                <Image
                  src="/handymanlogo.png"
                  alt="Twin Handyman & Plumbing Logo"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Bay Area&apos;s</span>
                  <span className="block text-brand-gold">Most Trusted</span>
                  <span className="block">Plumbing Experts</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  Professional emergency plumbing services you can count on. 
                  <span className="font-semibold text-brand-gold-light"> Same-day appointments, 24/7 emergency response,</span> and 
                  free estimates throughout the Bay Area.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-30 transition-all">
                    <stat.icon className="w-6 h-6 text-brand-gold mx-auto mb-2" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Urgent Services */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-bold text-brand-gold mb-4 flex items-center">
                  <Wrench className="w-5 h-5 mr-2" />
                  Most Requested Emergency Services
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {urgentServices.map((service, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold px-8 py-6 text-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
                    asChild
                  >
                    <a href="tel:(510) 926-7272">
                      <Phone className="w-6 h-6 mr-3" />
                      Call: (510) 926-7272
                    </a>
                  </Button>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold px-6 py-6"
                      asChild
                    >
                      <a href="sms:(510) 926-7272">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Text
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold px-6 py-6"
                      asChild
                    >
                      <a href="mailto:info@twinhandyman.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  size="lg"
                  className="w-full sm:w-auto text-brand-gold-light hover:text-brand-gold hover:bg-brand-navy-2 border-2 border-brand-gold-light hover:border-brand-gold font-semibold px-8 py-4"
                  onClick={() => setIsCallbackOpen(true)}
                >
                  📞 Request FREE Callback - We'll Call You Back!
                </Button>
              </div>
            </div>

            {/* Right Content - Desktop Logo & Trust Signals */}
            <div className="relative hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 space-y-8 shadow-2xl">
                {/* Large Logo */}
                <div className="text-center">
                  <Image
                    src="/handymanlogo.png"
                    alt="Twin Handyman & Plumbing Logo"
                    width={200}
                    height={200}
                    className="w-40 h-40 lg:w-48 lg:h-48 object-contain mx-auto drop-shadow-2xl"
                    priority
                  />
                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-gold mt-6 mb-8">
                    Why Choose Twin Handyman?
                  </h3>
                </div>

                {/* Trust Signals */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-20 rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">4.9/5 Star Rating</p>
                      <p className="text-sm text-gray-300">185+ verified Yelp reviews</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-20 rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Same-Day Service</p>
                      <p className="text-sm text-gray-300">Emergency appointments available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-20 rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Licensed & Insured</p>
                      <p className="text-sm text-gray-300">Fully bonded for your protection</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white bg-opacity-20 rounded-lg">
                    <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-brand-navy" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Satisfaction Guaranteed</p>
                      <p className="text-sm text-gray-300">We stand behind our work 100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestCallback 
        isOpen={isCallbackOpen} 
        onClose={() => setIsCallbackOpen(false)} 
      />
    </>
  );
}