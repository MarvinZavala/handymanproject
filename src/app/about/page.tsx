import { Metadata } from 'next';
import { Phone, Shield, Clock, Heart, Wrench, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Twin Handyman & Plumbing | Bay Area Experts',
  description: 'Learn about Twin Handyman & Plumbing - your trusted Bay Area plumbing and handyman experts. Licensed, insured, and committed to exceptional service since day one.',
  keywords: 'about Twin Handyman, Bay Area plumbers, licensed plumbing company, handyman services Oakland, San Leandro plumbing',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                <span>Our Story</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                <span className="block text-white">Meet the</span>
                <span className="block text-brand-gold" style={{ textShadow: '0 0 20px rgba(184, 142, 59, 0.5)' }}>Twin Team</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                We're not just another plumbing company. We're your Bay Area neighbors, 
                committed to solving your plumbing problems with honesty, expertise, and care.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/bathroom.jpg"
                  alt="Beautiful bathroom renovation by Twin Handyman & Plumbing"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                    <p className="text-sm opacity-90">Transforming spaces with expert precision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us - Unique Approach */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy">
              What Makes Us Different
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We do things differently because we believe your experience matters as much as the end result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-gold rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">We Actually Show Up</h3>
              <p className="text-gray-600">
                On time, every time. No more waiting around all day wondering if your plumber will actually show up. 
                We respect your schedule because we know your time is valuable.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">No Surprise Bills</h3>
              <p className="text-gray-600">
                We give you honest, upfront pricing before we start any work. No hidden fees, no "unexpected discoveries" 
                that mysteriously double your bill. What we quote is what you pay.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center mx-auto">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Fix It Right</h3>
              <p className="text-gray-600">
                We don't just patch problems – we solve them. Our goal is to fix your plumbing issue so well 
                that you don't have to think about it again for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Trust */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-4">
                  Fully Licensed, Bonded & Insured
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Your peace of mind is our priority. We maintain all required licenses, comprehensive insurance, 
                  and bonding to protect you and your property. When you choose Twin Handyman & Plumbing, 
                  you're choosing a company that does things the right way.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">California State Contractor's License</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">$2 Million General Liability Insurance</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Worker's Compensation Coverage</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">Bonded for Your Protection</span>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  className="bg-brand-blue hover:bg-brand-navy text-white font-bold px-8 py-3"
                  asChild
                >
                  <a href="tel:(510) 926-7272">
                    <Phone className="w-5 h-5 mr-2" />
                    Experience the Difference
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/lavamanos.jpg"
                  alt="Professional sink installation by Twin Handyman & Plumbing"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                    <p className="text-sm opacity-90">Licensed experts you can trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Trusted by Bay Area Families
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              These numbers tell our story, but our customers' smiles tell it better.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-2">500+</div>
              <div className="text-sm sm:text-base text-blue-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-2">4.9★</div>
              <div className="text-sm sm:text-base text-blue-200">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-2">24/7</div>
              <div className="text-sm sm:text-base text-blue-200">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-2">50+</div>
              <div className="text-sm sm:text-base text-blue-200">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy">
              Ready to Work with a Team You Can Trust?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Join hundreds of satisfied Bay Area customers who've discovered what it's like 
              to work with plumbers who actually care about getting the job done right.
            </p>
            
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-yellow-600 text-brand-navy font-bold px-8 py-4"
                asChild
              >
                <a href="tel:(510) 926-7272">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (510) 926-7272
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              Available 24/7 for emergencies • Same-day service available
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}