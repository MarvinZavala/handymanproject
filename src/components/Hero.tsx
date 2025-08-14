'use client';

import { Phone, MessageSquare, Mail, Star, Clock, Shield, CheckCircle, Zap, Award, Users, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import RequestCallback from './RequestCallback';

export default function Hero() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-2 to-brand-blue text-white overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-gold opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue-light opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-brand-gold-light opacity-3 rounded-full blur-2xl animate-bounce delay-500"></div>
        </div>
        
        {/* Emergency Alert Banner */}
        <div className="relative bg-brand-red text-white py-3 text-center animate-pulse">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 animate-bounce" />
            <span className="font-bold text-sm md:text-base">
              🚨 EMERGENCY PLUMBING? CALL NOW - AVAILABLE 24/7!
            </span>
            <Zap className="w-5 h-5 ml-2 animate-bounce" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left lg:pr-8">
              {/* Mobile Logo */}
              <div className="lg:hidden flex justify-center mb-4">
                <Image
                  src="/handymanlogo.png"
                  alt="Twin Handyman & Plumbing Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Headline with enhanced styling */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center bg-brand-gold px-3 py-1.5 rounded-full text-brand-navy font-bold text-xs sm:text-sm">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    4.9★ RATED • 500+ HAPPY CUSTOMERS
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                  <span className="block text-white">Bay Area&apos;s</span>
                  <span className="block text-brand-gold text-glow"> #1 TRUSTED </span>
                  <span className="block text-white">Plumbing Experts</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed font-medium max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  Professional plumbing services you can count on. 
                  <span className="text-brand-gold-light font-bold"> Same-day service, 24/7 emergency response,</span> and 
                  free estimates for the Bay Area.
                </p>
              </div>

              {/* Simple Stats */}
              <div className="flex justify-center lg:justify-start gap-8 text-center">
                <div>
                  <div className="text-2xl font-black text-brand-gold">4.9★</div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-gold">24/7</div>
                  <div className="text-sm text-gray-300">Emergency</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-gold">500+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>

              {/* Key Features with better styling */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-2" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-2" />
                  <span className="font-semibold">Same-Day Service</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <CheckCircle className="w-5 h-5 text-brand-gold mr-2" />
                  <span className="font-semibold">Free Estimates</span>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-brand-gold to-brand-gold-light hover:from-brand-gold-dark hover:to-brand-gold text-brand-navy font-black px-8 py-6 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-brand-gold-light"
                    asChild
                  >
                    <a href="tel:(510) 926-7272">
                      <Phone className="w-6 h-6 mr-3 animate-pulse" />
                      CALL NOW: (510) 926-7272
                    </a>
                  </Button>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-brand-gold bg-brand-gold bg-opacity-20 text-white hover:bg-brand-gold hover:text-brand-navy font-bold px-6 py-6 backdrop-blur-sm"
                      asChild
                    >
                      <a href="sms:(510) 926-7272">
                        <MessageSquare className="w-5 h-5 mr-2" />
                        TEXT US
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-brand-gold bg-brand-gold bg-opacity-20 text-white hover:bg-brand-gold hover:text-brand-navy font-bold px-6 py-6 backdrop-blur-sm"
                      asChild
                    >
                      <a href="mailto:info@twinhandyman.com">
                        <Mail className="w-5 h-5 mr-2" />
                        EMAIL
                      </a>
                    </Button>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  size="lg"
                  className="w-full sm:w-auto bg-white bg-opacity-10 text-brand-gold-light hover:text-white hover:bg-brand-gold border-2 border-brand-gold-light hover:border-brand-gold font-bold px-8 py-4 backdrop-blur-sm transition-all duration-300"
                  onClick={() => setIsCallbackOpen(true)}
                >
                  📞 GET FREE CALLBACK - WE&apos;LL CALL YOU BACK!
                </Button>
              </div>
            </div>

            {/* Right Content - Clean Logo Display */}
            <div className="relative hidden lg:flex lg:justify-center lg:items-center">
              <div className="relative">
                <Image
                  src="/handymanlogo.png"
                  alt="Twin Handyman & Plumbing Logo"
                  width={300}
                  height={300}
                  className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Subtle glow effect behind logo */}
                <div className="absolute inset-0 bg-brand-gold opacity-10 rounded-full blur-3xl scale-150"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestCallback 
        isOpen={isCallbackOpen} 
        onClose={() => setIsCallbackOpen(false)} 
      />
      
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(184, 142, 59, 0.5);
        }
      `}</style>
    </>
  );
}