import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Process() {
  const steps = [
    {
      icon: Phone,
      title: 'Call or Request Service',
      description: 'Contact us by phone, text, email, or request a callback. We provide free virtual estimates and same-day scheduling.',
      step: '01'
    },
    {
      icon: Calendar,
      title: 'Schedule Appointment',
      description: 'We work around your schedule with flexible appointment times, including evenings and weekends. Emergency service available 24/7.',
      step: '02'
    },
    {
      icon: Wrench,
      title: 'Expert Service',
      description: 'Our licensed technicians arrive with fully stocked vehicles, professional tools, and years of experience to solve your problem right.',
      step: '03'
    },
    {
      icon: CheckCircle,
      title: 'Satisfaction Guaranteed',
      description: 'We clean up after ourselves, test all work, and provide warranties. Your complete satisfaction is our top priority.',
      step: '04'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/lavamanos1.jpg"
          alt="Professional plumbing work background"
          fill
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gray-50/90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
            How We Work
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Simple, transparent process from initial contact to job completion. 
            We make getting professional plumbing service easy and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-brand-gold-light transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center space-y-3 sm:space-y-4 z-10 mx-2 sm:mx-0">
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-brand-navy leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}