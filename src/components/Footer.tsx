import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Star, Instagram, Calendar } from 'lucide-react';
import { cities } from '@/lib/site';

export default function Footer() {
  const serviceLinks = [
    { name: 'Water Heater Installation', href: '/services/water-heater-installation' },
    { name: 'Tankless Water Heaters', href: '/services/tankless-water-heater-installation' },
    { name: 'Water Heater Repair', href: '/services/water-heater-repair' },
    { name: 'Hydro Jet Drain Cleaning', href: '/services/drain-hydro-jet-cleaning-4-6-inch' },
    { name: 'Drain Repair', href: '/services/drain-repair' },
    { name: 'Leak Inspection', href: '/services/leak-inspection' },
    { name: 'Gas Line Repair', href: '/services/gas-line-repair' },
    { name: 'Waterline Repiping', href: '/services/waterline-repiping' },
    { name: 'Sewer Lateral Installation', href: '/services/sewer-lateral-installation' },
  ];

  const majorAreas = [
    'San Francisco Bay Area', 'Silicon Valley', 'Sacramento'
  ];
  
  const localAreas = cities.filter((c) => c.county === 'Alameda County');

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
            
            {/* Social Media Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-brand-gold">Follow Us</h4>
              
              {/* Instagram */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/twinhandyman_plumbing?igsh=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg transition-all duration-300 group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
                </a>
                <div className="flex-1">
                  <a
                    href="https://www.instagram.com/twinhandyman_plumbing?igsh=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-500 text-xs transition-colors"
                  >
                    @twinhandyman_plumbing
                  </a>
                </div>
              </div>

              {/* Yelp */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.yelp.com/biz/twin-handyman-and-plumbing-san-leandro?rr=1#location-and-hours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-all duration-300 group"
                  aria-label="Read our reviews on Yelp"
                >
                  <Image
                    src="/YelpSVGcon.svg"
                    alt="Yelp"
                    width={16}
                    height={16}
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                  />
                </a>
                <div className="flex-1">
                  <a
                    href="https://www.yelp.com/biz/twin-handyman-and-plumbing-san-leandro?rr=1#location-and-hours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-500 text-xs transition-colors"
                  >
                    Read our reviews
                  </a>
                </div>
              </div>

              {/* Calendly */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://calendly.com/gladiatorman4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-brand-gold/20 hover:bg-brand-gold/30 rounded-lg transition-all duration-300 group"
                  aria-label="Schedule an appointment"
                >
                  <Calendar className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
                </a>
                <div className="flex-1">
                  <a
                    href="https://calendly.com/gladiatorman4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-brand-gold text-xs transition-colors"
                  >
                    Schedule Appointment
                  </a>
                </div>
              </div>
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
            
            {/* Major Areas */}
            <div>
              <h4 className="text-sm font-medium text-brand-gold mb-2">Regional Coverage</h4>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-1">
                {majorAreas.map((area) => (
                  <span key={area} className="text-gray-300 text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Local Areas */}
            <div>
              <h4 className="text-sm font-medium text-brand-gold mb-2">Local Communities</h4>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-1">
                {localAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-we-serve/${area.slug}`}
                    className="text-gray-300 hover:text-brand-gold text-sm transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/areas-we-serve"
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
                    Serving The San Francisco Bay Area, Silicon Valley and Sacramento Area.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <p className="text-white text-sm">
                    <span className="text-brand-gold-light font-medium">Available 24/7</span><br />
                    Monday through Sunday<br />
                    <span className="text-gray-300">All plumbing services</span>
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