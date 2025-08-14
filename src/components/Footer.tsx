import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

export default function Footer() {
  const serviceLinks = [
    { name: 'Plumbing Installation', href: '/services/plumbing-installation-replacement' },
    { name: 'Water Heater Service', href: '/services/water-heater-installation' },
    { name: 'Drain Cleaning', href: '/services/drain-snake-service' },
    { name: 'Emergency Repairs', href: '/services/plumbing-repair' },
    { name: 'Tankless Water Heaters', href: '/services/tankless-water-heater-installation' },
    { name: 'Leak Detection', href: '/services/leak-inspection' },
  ];

  const areaLinks = [
    'Oakland', 'San Leandro', 'Alameda', 'Berkeley', 
    'Hayward', 'San Lorenzo', 'Castro Valley', 'Fremont'
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/handymanlogo.png"
                alt="Twin Handyman & Plumbing Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-lg font-bold text-brand-gold">
                Twin Handyman & Plumbing
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Professional plumbing and handyman services in the Bay Area. 
              Licensed, insured, and committed to quality workmanship.
            </p>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-300">
                4.9/5 stars • 185+ reviews on Yelp
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">
              Popular Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-brand-gold text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {areaLinks.map((area) => (
                <li key={area}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/areas"
              className="text-brand-gold hover:text-brand-gold-light text-sm transition-colors inline-block"
            >
              View all areas →
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-brand-gold">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <a 
                    href="tel:(510) 926-7272"
                    className="text-white hover:text-brand-gold transition-colors"
                  >
                    (510) 926-7272
                  </a>
                  <p className="text-xs text-gray-300">24/7 Emergency Service</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <a 
                    href="mailto:info@twinhandyman.com"
                    className="text-white hover:text-brand-gold transition-colors text-sm"
                  >
                    info@twinhandyman.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <p className="text-white text-sm">
                    2763 San Leandro Blvd<br />
                    San Leandro, CA 94578
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <p className="text-white text-sm">
                    Mon-Fri: 7 AM - 7 PM<br />
                    Sat-Sun: 8 AM - 6 PM<br />
                    <span className="text-brand-gold-light">24/7 Emergency</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-navy-2 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © 2024 Twin Handyman & Plumbing. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-gray-300 hover:text-brand-gold text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-brand-gold text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="text-gray-300 text-sm">
              Licensed • Bonded • Insured
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}