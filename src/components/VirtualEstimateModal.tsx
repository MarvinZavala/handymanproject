'use client';

import { useState } from 'react';
import { X, Calendar, Phone, Video, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VirtualEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VirtualEstimateModal({ isOpen, onClose }: VirtualEstimateModalProps) {
  if (!isOpen) return null;

  const handleScheduleCall = () => {
    window.open('https://calendly.com/gladiatorman4', '_blank');
    onClose();
  };

  const handleCallNow = () => {
    window.location.href = 'tel:(510) 926-7272';
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform animate-scale-in">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-navy to-brand-blue text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-brand-gold/20 p-2 rounded-lg">
              <Video className="w-6 h-6 text-brand-gold" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Free Virtual Estimate</h2>
              <p className="text-blue-100 text-sm">Via FaceTime or Zoom</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-center mb-6">
            Choose how you'd like to get your free estimate:
          </p>

          {/* Schedule Option */}
          <div className="space-y-3">
            <Button
              onClick={handleScheduleCall}
              className="w-full bg-gradient-to-r from-brand-gold to-yellow-500 hover:from-yellow-500 hover:to-brand-gold text-brand-navy font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-bold">Schedule Appointment</div>
                  <div className="text-sm opacity-80">Pick a convenient time</div>
                </div>
              </div>
            </Button>

            {/* Call Now Option */}
            <Button
              onClick={handleCallNow}
              variant="outline"
              className="w-full border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-200"
            >
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-bold">Call Now</div>
                  <div className="text-sm opacity-80">(510) 926-7272</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 p-4 rounded-xl mt-6">
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
              <div className="text-sm text-brand-navy">
                <p className="font-semibold mb-1">We're Here for You:</p>
                <p>Available 24/7, Monday through Sunday</p>
                <p className="text-brand-blue font-medium mt-1">Always ready to help with your plumbing needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}