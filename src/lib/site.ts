export const SITE_URL = 'https://www.twinhandymanplumbing.com';

export const BUSINESS = {
  name: 'Twin Handyman & Plumbing',
  phone: '(510) 926-7272',
  phoneE164: '+15109267272',
  email: 'info@twinhandyman.com',
  city: 'San Leandro',
  region: 'CA',
  country: 'US',
  geo: { latitude: 37.7249, longitude: -122.1561 },
  logo: '/handymanlogo.png',
  sameAs: [
    'https://www.instagram.com/twinhandyman_plumbing',
    'https://www.yelp.com/biz/twin-handyman-and-plumbing-san-leandro',
  ],
};

export interface City {
  slug: string;
  name: string;
  county: string;
  intro: string;
  nearby: string[];
}

export const cities: City[] = [
  {
    slug: 'san-leandro',
    name: 'San Leandro',
    county: 'Alameda County',
    intro:
      'San Leandro is our home base, so we can usually get a licensed plumber to your door faster than anyone else in town. From Washington Manor to Estudillo Estates, we repair leaks, clear drains and install water heaters in homes and businesses across the city.',
    nearby: ['san-lorenzo', 'castro-valley', 'oakland', 'hayward', 'alameda'],
  },
  {
    slug: 'oakland',
    name: 'Oakland',
    county: 'Alameda County',
    intro:
      "Many Oakland homes were built before 1950 and still run on aging galvanized or cast-iron pipes. We handle repiping, sewer lateral replacement, drain cleaning and emergency repairs in every Oakland neighborhood, from the flats to the hills.",
    nearby: ['san-leandro', 'alameda', 'berkeley', 'castro-valley'],
  },
  {
    slug: 'hayward',
    name: 'Hayward',
    county: 'Alameda County',
    intro:
      'Hayward homeowners and businesses call us for water heater installs, leak detection and drain service. We are minutes away in San Leandro, which means quick response times for both scheduled work and plumbing emergencies.',
    nearby: ['san-lorenzo', 'castro-valley', 'san-leandro', 'fremont'],
  },
  {
    slug: 'castro-valley',
    name: 'Castro Valley',
    county: 'Alameda County',
    intro:
      'Castro Valley is right next door to our shop. We install tankless water heaters, replace sewer laterals and fix leaks, clogged drains and running toilets for Castro Valley families every week.',
    nearby: ['san-leandro', 'hayward', 'san-lorenzo', 'oakland'],
  },
  {
    slug: 'san-lorenzo',
    name: 'San Lorenzo',
    county: 'Alameda County',
    intro:
      "San Lorenzo's mid-century homes often need updated water lines, new fixtures and sewer work. Our licensed team is close by and ready for everything from a dripping faucet to a full repipe.",
    nearby: ['san-leandro', 'hayward', 'castro-valley'],
  },
  {
    slug: 'alameda',
    name: 'Alameda',
    county: 'Alameda County',
    intro:
      "Alameda's Victorian and craftsman homes deserve careful plumbing work. We repair and replace old supply lines, unclog drains, install fixtures and handle sewer laterals across the island.",
    nearby: ['oakland', 'san-leandro', 'berkeley'],
  },
  {
    slug: 'berkeley',
    name: 'Berkeley',
    county: 'Alameda County',
    intro:
      'From older homes near campus to hillside properties, Berkeley plumbing often means working with aging pipes. We provide repiping, drain cleaning, water heater service and emergency repairs throughout Berkeley.',
    nearby: ['oakland', 'alameda', 'san-leandro'],
  },
  {
    slug: 'fremont',
    name: 'Fremont',
    county: 'Alameda County',
    intro:
      'Fremont homeowners and businesses rely on us for water heater installation, tankless upgrades, leak detection and drain service, with licensed plumbers available 24/7 for emergencies.',
    nearby: ['hayward', 'san-jose', 'castro-valley'],
  },
  {
    slug: 'san-francisco',
    name: 'San Francisco',
    county: 'San Francisco County',
    intro:
      'We serve homes, apartments and commercial properties across San Francisco, including repiping, commercial water heaters, hydro-jet drain cleaning and emergency plumbing repairs.',
    nearby: ['oakland', 'alameda', 'berkeley'],
  },
  {
    slug: 'san-jose',
    name: 'San Jose',
    county: 'Santa Clara County',
    intro:
      'Our team covers San Jose and the wider Silicon Valley area for water heater and tankless installs, leak repair, drain cleaning and commercial plumbing projects.',
    nearby: ['fremont', 'hayward'],
  },
  {
    slug: 'sacramento',
    name: 'Sacramento',
    county: 'Sacramento County',
    intro:
      'We also serve the Greater Sacramento area, handling larger projects like sewer lateral installation, waterline repiping and commercial plumbing alongside everyday repairs.',
    nearby: ['san-francisco'],
  },
];

export function getCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
