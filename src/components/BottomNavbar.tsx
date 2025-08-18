'use client';

import { useState, useEffect } from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function BottomNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 100;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'sms:(510) 926-7272';
  };

  const handleCalendly = () => {
    window.open('https://calendly.com/gladiatorman4', '_blank');
  };

  const handleCallSecondary = () => {
    window.location.href = 'tel:(510) 926-7272';
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        {/* Safe area spacer for devices with home indicator */}
        <div className="bg-white">
          <div className="h-safe-bottom"></div>
        </div>
        
        {/* Main navbar content */}
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-300 shadow-2xl">
          <div className="px-3 py-3">
            <div className="flex justify-center space-x-3 max-w-xs mx-auto">
              
              {/* Call Button */}
              <button
                onClick={handleCall}
                className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-700 active:to-blue-800 text-white rounded-xl shadow-lg active:shadow-sm transition-all duration-200 active:scale-95 py-3 px-2 min-h-[68px]"
                style={{ touchAction: 'manipulation' }}
              >
                <MessageCircle className="w-5 h-5 mb-1 flex-shrink-0" />
                <span className="text-xs font-bold leading-none">TEXT</span>
                <span className="text-[10px] opacity-90 leading-none mt-0.5">(510) 926-7272</span>
              </button>

              {/* Schedule Button */}
              <button
                onClick={handleCalendly}
                className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 active:from-yellow-700 active:to-yellow-800 text-white rounded-xl shadow-lg active:shadow-sm transition-all duration-200 active:scale-95 py-3 px-2 min-h-[68px]"
                style={{ touchAction: 'manipulation' }}
              >
                <Calendar className="w-5 h-5 mb-1 flex-shrink-0" />
                <span className="text-xs font-bold leading-none">SCHEDULE</span>
                <span className="text-[10px] opacity-90 leading-none mt-0.5">Free Estimate</span>
              </button>

              {/* Call Button Secondary */}
              <button
                onClick={handleCallSecondary}
                className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 active:from-red-700 active:to-red-800 text-white rounded-xl shadow-lg active:shadow-sm transition-all duration-200 active:scale-95 py-3 px-2 min-h-[68px]"
                style={{ touchAction: 'manipulation' }}
              >
                <Phone className="w-5 h-5 mb-1 flex-shrink-0" />
                <span className="text-xs font-bold leading-none">CALL</span>
                <span className="text-[10px] opacity-90 leading-none mt-0.5">(510) 926-7272</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .h-safe-bottom {
          height: env(safe-area-inset-bottom, 0px);
          min-height: 8px;
        }
        
        /* Prevent zoom on double tap for mobile buttons */
        button {
          touch-action: manipulation;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        
        /* Improve mobile touch targets */
        @media (max-width: 640px) {
          button {
            min-height: 68px !important;
          }
        }
      `}</style>
    </>
  );
}