'use client';

import { Phone, Star, CheckCircle, Zap, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';
import RequestCallback from './RequestCallback';

export default function Hero() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-2 to-brand-blue text-white overflow-hidden">
        {/* Subtle Static Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        {/* Emergency Alert Banner */}
        <div className="relative bg-brand-red text-white py-3 text-center animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 animate-pulse" />
            <span className="font-bold text-sm md:text-base animate-slide-in">
              🚨 EMERGENCY PLUMBING? CALL NOW - AVAILABLE 24/7!
            </span>
            <Zap className="w-5 h-5 ml-2 animate-pulse" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-16">
          {/* Mobile Logo - Smaller and centered */}
          <div className="lg:hidden flex justify-center mb-4">
            <Image
              src="/handymanlogo.png"
              alt="Twin Handyman & Plumbing Logo"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-lg animate-scale-in"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Rating Badge - Smaller on mobile */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center bg-brand-gold px-3 py-1.5 rounded-full text-brand-navy font-bold text-xs sm:text-sm animate-slide-up">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 animate-spin-slow" />
                  4.9★ RATED • 500+ CUSTOMERS
                </div>
              </div>
              
              {/* Main Headline - Improved mobile readability */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-white drop-shadow-lg animate-slide-left">Bay Area&apos;s</span>
                  <span className="block text-brand-gold text-glow drop-shadow-lg text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl animate-bounce-in">#1 TRUSTED</span>
                  <span className="block text-white drop-shadow-lg animate-slide-right">Plumbing Experts</span>
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed font-semibold max-w-2xl mx-auto lg:mx-0 drop-shadow-sm animate-fade-in-delayed">
                  Professional plumbing services you can count on.
                </p>
                
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium animate-fade-in-delayed-2">
                  <span className="text-yellow-400 font-black">Same-day service, 24/7 emergency response,</span> <span className="text-yellow-300 font-bold">and 
                  free estimates</span> <span className="text-blue-200">for the Bay Area.</span>
                </p>
                
              </div>

              {/* CTA Buttons - Hierarchical design */}
              <div className="space-y-4">
                {/* PRIMARY: FREE Virtual Estimate - Most prominent */}
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    className="bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold hover:from-yellow-500 hover:to-brand-gold text-brand-navy font-black px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg shadow-2xl border-2 border-yellow-300 transform hover:scale-105 transition-all duration-300 w-auto mx-auto lg:mx-0 min-h-[60px] sm:min-h-0"
                    asChild
                  >
                    <div className="cursor-pointer">
                      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-1 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="uppercase tracking-wide sm:tracking-wider text-sm sm:text-base font-black">FREE VIRTUAL ESTIMATE</span>
                        </div>
                        <div className="text-center text-sm sm:text-sm font-bold text-brand-navy/80">
                          VIA FACETIME • ZOOM
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>

                {/* SECONDARY: Call button - Less prominent but accessible */}
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    className="border-0 bg-brand-gold/30 backdrop-blur-sm text-white hover:bg-brand-gold hover:text-brand-navy font-bold px-6 py-3 text-sm sm:text-base shadow-lg transition-all duration-300 rounded-xl"
                    asChild
                  >
                    <a href="tel:(510) 926-7272">
                      <Phone className="w-4 h-4 mr-2" />
                      or CALL: (510) 926-7272
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Info Panel */}
            <div className="relative">
              {/* Desktop Logo */}
              <div className="hidden lg:flex justify-center mb-8">
                <div className="relative">
                  <Image
                    src="/handymanlogo.png"
                    alt="Twin Handyman & Plumbing Logo"
                    width={280}
                    height={280}
                    className="w-60 h-60 xl:w-72 xl:h-72 object-contain drop-shadow-2xl animate-scale-in"
                    priority
                  />
                  <div className="absolute inset-0 bg-brand-gold opacity-5 rounded-full blur-2xl scale-125 -z-10 animate-pulse-slow"></div>
                </div>
              </div>

              {/* Stats Grid - Smaller on mobile */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 animate-slide-up-1">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black text-yellow-400">4.9★</div>
                  <div className="text-xs sm:text-sm text-gray-300">Rating</div>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 animate-slide-up-2">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black text-yellow-400">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300">Emergency</div>
                </div>
                <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 animate-slide-up-3">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-black text-yellow-400">500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Happy Clients</div>
                </div>
              </div>

              {/* Features List - Smaller on mobile */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center bg-white bg-opacity-10 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl backdrop-blur-sm animate-slide-left-1">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm sm:text-base">Licensed & Insured</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl backdrop-blur-sm animate-slide-left-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm sm:text-base">Same-Day Service</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl backdrop-blur-sm animate-slide-left-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="font-semibold text-white text-sm sm:text-base">Free Estimates</span>
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
      
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(184, 142, 59, 0.5);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes bounceIn {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-in {
          animation: slideIn 1.2s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-slide-left {
          animation: slideLeft 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slideRight 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out;
        }

        .animate-bounce-in {
          animation: bounceIn 1.2s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        .animate-slide-up-1 {
          animation: slideUp 0.8s ease-out 0.2s both;
        }

        .animate-slide-up-2 {
          animation: slideUp 0.8s ease-out 0.4s both;
        }

        .animate-slide-up-3 {
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        .animate-slide-left-1 {
          animation: slideLeft 0.8s ease-out 0.8s both;
        }

        .animate-slide-left-2 {
          animation: slideLeft 0.8s ease-out 1s both;
        }

        .animate-slide-left-3 {
          animation: slideLeft 0.8s ease-out 1.2s both;
        }
      `}</style>
    </>
  );
}