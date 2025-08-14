import { Phone, Calendar, Wrench, CheckCircle } from 'lucide-react';

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent process from initial contact to job completion. 
            We make getting professional plumbing service easy and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-brand-gold-light transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center space-y-4 z-10">
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don&apos;t wait for plumbing problems to get worse. Call now for same-day service 
              or schedule a convenient appointment that works with your schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:(510) 926-7272"
                className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (510) 926-7272
              </a>
              <span className="text-gray-400">or</span>
              <a 
                href="mailto:info@twinhandyman.com"
                className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}