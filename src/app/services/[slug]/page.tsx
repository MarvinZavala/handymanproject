import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getServiceBySlug, services } from '@/lib/services';
import { Phone, Mail, MessageSquare, ArrowLeft, CheckCircle, Clock, Star, Shield } from 'lucide-react';
import * as Icons from 'lucide-react';
import CtaBanner from '@/components/CtaBanner';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Twin Handyman & Plumbing',
    };
  }

  return {
    title: `${service.title} | Twin Handyman & Plumbing Bay Area`,
    description: `Professional ${service.title.toLowerCase()} services in Bay Area. ${service.short} Licensed, bonded, insured. Call (510) 926-7272`,
    keywords: `${service.title.toLowerCase()}, plumbing, handyman, San Leandro, Oakland, Bay Area`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  const features = [
    { icon: Clock, title: 'Same-Day Service', desc: 'Available for most appointments' },
    { icon: Star, title: 'Licensed & Insured', desc: 'Fully bonded and insured technicians' },
    { icon: Shield, title: 'Satisfaction Guaranteed', desc: 'We stand behind our work' },
    { icon: Phone, title: '24/7 Emergency', desc: 'Available anytime you need us' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              href="/services" 
              className="inline-flex items-center text-brand-gold-light hover:text-brand-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Services
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                {IconComponent && (
                  <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-brand-navy" />
                  </div>
                )}
                <div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    service.category === 'featured' 
                      ? 'bg-brand-gold text-brand-navy' 
                      : service.category === 'installation'
                      ? 'bg-brand-blue-light text-brand-blue'
                      : 'bg-brand-red-light text-brand-red'
                  }`}>
                    {service.category === 'featured' ? 'Featured Service' : 
                     service.category === 'installation' ? 'Installation' : 'Repair Service'}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold">
                {service.title}
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed">
                {service.description}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-4"
                  asChild
                >
                  <a href="tel:(510) 926-7272">
                    <Phone className="w-5 h-5 mr-3" />
                    Call (510) 926-7272
                  </a>
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-brand-navy"
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
                    className="border-white text-white hover:bg-white hover:text-brand-navy"
                    asChild
                  >
                    <a href="mailto:info@twinhandyman.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <feature.icon className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">
                Why Choose Our {service.title} Service?
              </h2>
              
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-brand-blue-light bg-opacity-20 rounded-lg">
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  Professional Guarantee
                </h3>
                <p className="text-gray-700">
                  All our {service.title.toLowerCase()} work comes with our satisfaction guarantee. 
                  We're licensed, bonded, and insured for your protection and peace of mind.
                </p>
              </div>
            </div>

            {/* Service Process */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8">
                Our Service Process
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Initial Assessment</h3>
                    <p className="text-gray-600">We evaluate your specific needs and provide transparent pricing upfront.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Professional Service</h3>
                    <p className="text-gray-600">Our experienced technicians complete the work using quality materials and proper techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Testing & Cleanup</h3>
                    <p className="text-gray-600">We test all work, ensure everything functions properly, and clean up completely.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy mb-1">Follow-Up Support</h3>
                    <p className="text-gray-600">We provide warranty coverage and are always available for questions or concerns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {service.faq.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Have more questions about our {service.title.toLowerCase()} service?
            </p>
            <Button 
              className="bg-brand-gold hover:bg-brand-gold-dark text-white"
              asChild
            >
              <a href="tel:(510) 926-7272">
                Call Us for Expert Advice
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Emergency {service.title}?
          </h2>
          <p className="text-lg mb-6 text-red-100">
            Don't wait for the problem to get worse. We're available 24/7 for emergency service.
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

      {/* CTA Banner */}
      <CtaBanner />
    </div>
  );
}