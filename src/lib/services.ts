export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  faq: { question: string; answer: string }[];
  category: 'installation' | 'repair' | 'featured';
  icon: string;
}

export const services: Service[] = [
  // Installations
  {
    slug: 'bathtub-installation',
    title: 'Bathtub Installation',
    short: 'Professional bathtub installation services for your bathroom renovation.',
    description: 'Transform your bathroom with expert bathtub installation. Our skilled technicians handle everything from alcove tubs to luxury freestanding models, ensuring proper plumbing connections and perfect fit.',
    benefits: [
      'Professional installation with warranty',
      'Expert plumbing connections',
      'Proper waterproofing and sealing',
      'Clean, debris-free completion'
    ],
    faq: [
      {
        question: 'How long does bathtub installation take?',
        answer: 'Most bathtub installations take 4-6 hours, depending on the complexity and type of tub.'
      },
      {
        question: 'Do you remove old bathtubs?',
        answer: 'Yes, we provide complete removal of your old bathtub and proper disposal.'
      }
    ],
    category: 'installation',
    icon: 'Bath'
  },
  {
    slug: 'drain-installation',
    title: 'Drain Installation',
    short: 'Expert drain installation for sinks, showers, and floor drains.',
    description: 'Professional drain installation services for residential and commercial properties. We install all types of drains including floor drains, shower drains, and sink drains with proper slope and connections.',
    benefits: [
      'Proper drainage and flow',
      'Code-compliant installation',
      'Quality materials and fittings',
      'Prevention of future clogs'
    ],
    faq: [
      {
        question: 'What types of drains do you install?',
        answer: 'We install floor drains, shower drains, sink drains, and specialty drainage systems.'
      },
      {
        question: 'How do you ensure proper drainage?',
        answer: 'We calculate proper slope, use quality materials, and test all connections before completion.'
      }
    ],
    category: 'installation',
    icon: 'Droplets'
  },
  {
    slug: 'faucet-installation',
    title: 'Faucet Installation',
    short: 'Kitchen and bathroom faucet installation by licensed professionals.',
    description: 'Upgrade your kitchen or bathroom with new faucet installation. From single-handle to touchless models, we ensure proper connections and optimal water pressure.',
    benefits: [
      'Perfect water pressure adjustment',
      'Leak-free connections',
      'Modern fixture upgrades',
      'Water efficiency improvements'
    ],
    faq: [
      {
        question: 'Can you install any brand of faucet?',
        answer: 'Yes, we install all major faucet brands including Kohler, Moen, Delta, and more.'
      },
      {
        question: 'Do I need to provide the faucet?',
        answer: 'You can provide your own faucet, or we can help you select and source the perfect one.'
      }
    ],
    category: 'installation',
    icon: 'Droplet'
  },
  {
    slug: 'garbage-disposal-installation',
    title: 'Garbage Disposal Installation',
    short: 'Professional garbage disposal installation and setup.',
    description: 'Expert installation of garbage disposals for convenient kitchen waste management. We handle electrical connections, plumbing integration, and proper mounting.',
    benefits: [
      'Electrical safety compliance',
      'Proper motor sizing',
      'Leak-proof installation',
      'Full operational testing'
    ],
    faq: [
      {
        question: 'What size garbage disposal do I need?',
        answer: 'We recommend based on your household size and usage patterns, typically 1/2 HP to 1 HP.'
      },
      {
        question: 'Is electrical work included?',
        answer: 'Yes, we handle all necessary electrical connections safely and to code.'
      }
    ],
    category: 'installation',
    icon: 'Trash2'
  },
  {
    slug: 'gas-line-installation',
    title: 'Gas Line Installation',
    short: 'Safe and code-compliant gas line installation services.',
    description: 'Professional gas line installation for appliances, water heaters, and heating systems. Our certified technicians ensure safety, compliance, and proper pressure testing.',
    benefits: [
      'Certified gas technicians',
      'Safety testing and inspection',
      'Code compliance guarantee',
      'Proper pressure regulation'
    ],
    faq: [
      {
        question: 'Are you licensed for gas work?',
        answer: 'Yes, our technicians are fully licensed and certified for gas line installation.'
      },
      {
        question: 'Do you handle permits?',
        answer: 'We assist with permit applications and ensure all work meets local codes.'
      }
    ],
    category: 'installation',
    icon: 'Flame'
  },
  {
    slug: 'plumbing-inspection',
    title: 'Plumbing Inspection',
    short: 'Comprehensive plumbing system inspection and assessment.',
    description: 'Thorough plumbing inspections for home buyers, sellers, or maintenance. We identify potential issues, code violations, and provide detailed reports with recommendations.',
    benefits: [
      'Detailed written reports',
      'Problem identification',
      'Cost-saving recommendations',
      'Peace of mind assurance'
    ],
    faq: [
      {
        question: 'What does a plumbing inspection include?',
        answer: 'We inspect all visible plumbing, fixtures, water pressure, drainage, and check for leaks or code violations.'
      },
      {
        question: 'How long does an inspection take?',
        answer: 'Most residential inspections take 1-2 hours depending on home size and complexity.'
      }
    ],
    category: 'installation',
    icon: 'Search'
  },
  {
    slug: 'plumbing-installation-replacement',
    title: 'Plumbing Installation & Replacement',
    short: 'Complete plumbing system installation and replacement services.',
    description: 'Full-service plumbing installation and replacement for new construction or major renovations. We handle complete system design, installation, and testing.',
    benefits: [
      'Complete system design',
      'Quality pipe materials',
      'Efficient water flow',
      'Long-term reliability'
    ],
    faq: [
      {
        question: 'What pipe materials do you use?',
        answer: 'We use PEX, copper, and PVC based on application requirements and local codes.'
      },
      {
        question: 'Do you provide warranties?',
        answer: 'Yes, we provide comprehensive warranties on materials and workmanship.'
      }
    ],
    category: 'installation',
    icon: 'Wrench'
  },
  {
    slug: 'sewer-installation',
    title: 'Sewer Installation',
    short: 'Professional sewer line installation and connection services.',
    description: 'Expert sewer line installation for new connections or complete replacements. We handle excavation, proper grading, and connection to municipal systems.',
    benefits: [
      'Proper slope and grading',
      'Durable pipe materials',
      'Municipal connection',
      'Excavation and restoration'
    ],
    faq: [
      {
        question: 'Do you handle excavation?',
        answer: 'Yes, we provide complete excavation services and landscape restoration.'
      },
      {
        question: 'What about permits?',
        answer: 'We handle all necessary permits and coordinate with local authorities.'
      }
    ],
    category: 'installation',
    icon: 'Layers'
  },
  {
    slug: 'shower-installation',
    title: 'Shower Installation',
    short: 'Custom shower installation for bathroom renovations.',
    description: 'Professional shower installation including shower pans, doors, fixtures, and plumbing. From simple replacements to luxury custom showers.',
    benefits: [
      'Waterproof installation',
      'Custom design options',
      'Quality fixture mounting',
      'Perfect water pressure'
    ],
    faq: [
      {
        question: 'Can you install walk-in showers?',
        answer: 'Yes, we specialize in all types including walk-in, corner, and luxury rain showers.'
      },
      {
        question: 'Do you handle tiling?',
        answer: 'We focus on plumbing installation but work with trusted tile contractors when needed.'
      }
    ],
    category: 'installation',
    icon: 'Shower'
  },
  {
    slug: 'sink-installation',
    title: 'Sink Installation',
    short: 'Kitchen and bathroom sink installation services.',
    description: 'Expert sink installation for kitchens, bathrooms, and utility rooms. We handle undermount, drop-in, and vessel sinks with proper support and connections.',
    benefits: [
      'Proper mounting and support',
      'Leak-free connections',
      'Faucet integration',
      'Drain alignment'
    ],
    faq: [
      {
        question: 'What sink types do you install?',
        answer: 'We install all types: undermount, drop-in, vessel, farmhouse, and utility sinks.'
      },
      {
        question: 'Is countertop modification included?',
        answer: 'We handle basic modifications, but major countertop work may require specialists.'
      }
    ],
    category: 'installation',
    icon: 'Utensils'
  },
  {
    slug: 'toilet-installation',
    title: 'Toilet Installation',
    short: 'Professional toilet installation and replacement services.',
    description: 'Expert toilet installation with proper sealing, level mounting, and water connection. We handle standard and comfort-height models with efficiency upgrades.',
    benefits: [
      'Perfect level installation',
      'Proper wax ring sealing',
      'Water efficiency optimization',
      'Clean, professional finish'
    ],
    faq: [
      {
        question: 'Do you remove old toilets?',
        answer: 'Yes, we handle complete removal and disposal of your old toilet.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Most toilet installations take 1-2 hours including cleanup.'
      }
    ],
    category: 'installation',
    icon: 'Home'
  },
  {
    slug: 'water-heater-installation',
    title: 'Water Heater Installation',
    short: 'Tank and tankless water heater installation services.',
    description: 'Professional water heater installation for both traditional tank and modern tankless systems. We handle gas, electric, and hybrid models with proper venting and connections.',
    benefits: [
      'Energy efficiency optimization',
      'Proper venting and safety',
      'Code compliance',
      'Performance testing'
    ],
    faq: [
      {
        question: 'Tank or tankless - which is better?',
        answer: 'We help you choose based on your usage patterns, space, and budget requirements.'
      },
      {
        question: 'Do you handle gas connections?',
        answer: 'Yes, our certified technicians handle all gas connections safely and to code.'
      }
    ],
    category: 'installation',
    icon: 'Thermometer'
  },
  {
    slug: 'water-pipe-installation',
    title: 'Water Pipe Installation',
    short: 'Complete water pipe installation and replacement services.',
    description: 'Professional water pipe installation using modern materials and techniques. We handle everything from small repairs to complete home repiping projects.',
    benefits: [
      'Modern pipe materials',
      'Efficient water flow',
      'Minimal disruption',
      'Long-term reliability'
    ],
    faq: [
      {
        question: 'What pipe materials do you recommend?',
        answer: 'We typically recommend PEX for its durability, flexibility, and resistance to freezing.'
      },
      {
        question: 'How do you minimize damage during installation?',
        answer: 'We use advanced techniques to minimize wall and floor damage during installation.'
      }
    ],
    category: 'installation',
    icon: 'Pipette'
  },

  // Repairs
  {
    slug: 'bathtub-repair',
    title: 'Bathtub Repair',
    short: 'Professional bathtub repair for leaks, cracks, and damage.',
    description: 'Expert bathtub repair services including crack repair, caulking, drain fixes, and faucet problems. We restore your bathtub to perfect working condition.',
    benefits: [
      'Cost-effective solutions',
      'Quick turnaround',
      'Prevent water damage',
      'Extend tub lifespan'
    ],
    faq: [
      {
        question: 'Can you repair fiberglass tub cracks?',
        answer: 'Yes, we specialize in fiberglass repair and can restore most cracks and chips.'
      },
      {
        question: 'When should I replace vs repair?',
        answer: 'We provide honest assessments and recommend the most cost-effective solution.'
      }
    ],
    category: 'repair',
    icon: 'Wrench'
  },
  {
    slug: 'drain-repair',
    title: 'Drain Repair',
    short: 'Fast drain repair for clogs, leaks, and drainage issues.',
    description: 'Professional drain repair services for all types of drainage problems. From simple clogs to complex pipe repairs, we get your drains flowing properly.',
    benefits: [
      'Fast problem resolution',
      'Prevent overflow damage',
      'Improved drainage flow',
      'Odor elimination'
    ],
    faq: [
      {
        question: 'What causes most drain problems?',
        answer: 'Common causes include hair buildup, grease accumulation, and foreign objects.'
      },
      {
        question: 'Do you offer emergency drain service?',
        answer: 'Yes, we provide 24/7 emergency drain repair services.'
      }
    ],
    category: 'repair',
    icon: 'RotateCcw'
  },
  {
    slug: 'faucet-repair',
    title: 'Faucet Repair',
    short: 'Quick faucet repair for leaks, drips, and low pressure.',
    description: 'Expert faucet repair for all makes and models. We fix leaks, restore water pressure, replace cartridges, and handle any faucet malfunction.',
    benefits: [
      'Stop water waste',
      'Restore proper pressure',
      'Eliminate annoying drips',
      'Extend faucet life'
    ],
    faq: [
      {
        question: 'Why is my faucet dripping?',
        answer: 'Usually caused by worn cartridges, O-rings, or valve seats that we can easily replace.'
      },
      {
        question: 'Can you fix low water pressure?',
        answer: 'Yes, we diagnose and fix pressure issues from aerator clogs to internal problems.'
      }
    ],
    category: 'repair',
    icon: 'Settings'
  },
  {
    slug: 'garbage-disposal-repair',
    title: 'Garbage Disposal Repair',
    short: 'Garbage disposal repair and troubleshooting services.',
    description: 'Professional garbage disposal repair for jams, leaks, and electrical issues. We restore proper operation and prevent kitchen flooding.',
    benefits: [
      'Restore kitchen functionality',
      'Prevent water damage',
      'Fix grinding issues',
      'Electrical safety'
    ],
    faq: [
      {
        question: 'Why did my disposal stop working?',
        answer: 'Common causes include jams, electrical issues, or worn internal components.'
      },
      {
        question: 'Can you fix disposal leaks?',
        answer: 'Yes, we repair leaks at connections, housing, and internal seals.'
      }
    ],
    category: 'repair',
    icon: 'AlertTriangle'
  },
  {
    slug: 'gas-line-repair',
    title: 'Gas Line Repair',
    short: 'Emergency gas line repair and leak detection services.',
    description: 'Immediate gas line repair services for safety and code compliance. Our certified technicians handle leaks, damaged lines, and pressure issues.',
    benefits: [
      'Emergency response',
      'Safety compliance',
      'Leak detection',
      'Pressure restoration'
    ],
    faq: [
      {
        question: 'What should I do if I smell gas?',
        answer: 'Leave the area immediately, avoid electrical switches, and call us for emergency service.'
      },
      {
        question: 'How do you detect gas leaks?',
        answer: 'We use professional gas detection equipment to locate and assess all leaks.'
      }
    ],
    category: 'repair',
    icon: 'Shield'
  },
  {
    slug: 'plumbing-repair',
    title: 'Plumbing Repair',
    short: 'General plumbing repair services for all your needs.',
    description: 'Comprehensive plumbing repair services for residential and commercial properties. From minor leaks to major pipe problems, we fix it right.',
    benefits: [
      'Fast problem solving',
      'Quality workmanship',
      'Prevent water damage',
      'Cost-effective solutions'
    ],
    faq: [
      {
        question: 'Do you provide emergency repairs?',
        answer: 'Yes, we offer 24/7 emergency plumbing repair services.'
      },
      {
        question: 'What plumbing problems do you fix?',
        answer: 'We handle all plumbing issues from leaks and clogs to pipe replacements.'
      }
    ],
    category: 'repair',
    icon: 'Wrench'
  },
  {
    slug: 'sewer-repair',
    title: 'Sewer Repair',
    short: 'Professional sewer line repair and maintenance services.',
    description: 'Expert sewer repair services including line cleaning, root removal, and pipe replacement. We solve sewer problems quickly and effectively.',
    benefits: [
      'Prevent sewage backup',
      'Root removal',
      'Line restoration',
      'Minimal excavation'
    ],
    faq: [
      {
        question: 'What causes sewer line problems?',
        answer: 'Common causes include tree roots, pipe deterioration, and blockages.'
      },
      {
        question: 'Do you offer trenchless repair?',
        answer: 'Yes, we use modern trenchless methods when possible to minimize disruption.'
      }
    ],
    category: 'repair',
    icon: 'Zap'
  },
  {
    slug: 'shower-repair',
    title: 'Shower Repair',
    short: 'Shower repair for leaks, pressure issues, and fixtures.',
    description: 'Professional shower repair services for all types of shower problems. We fix leaks, restore pressure, repair doors, and replace fixtures.',
    benefits: [
      'Stop water leaks',
      'Restore water pressure',
      'Fix door problems',
      'Prevent tile damage'
    ],
    faq: [
      {
        question: 'Why is my shower pressure low?',
        answer: 'Usually caused by mineral buildup, valve issues, or supply line problems.'
      },
      {
        question: 'Can you fix shower door leaks?',
        answer: 'Yes, we repair door seals, adjust alignment, and replace worn components.'
      }
    ],
    category: 'repair',
    icon: 'Droplets'
  },
  {
    slug: 'sink-repair',
    title: 'Sink Repair',
    short: 'Kitchen and bathroom sink repair services.',
    description: 'Expert sink repair for leaks, clogs, and fixture problems. We repair all types of sinks and restore proper drainage and function.',
    benefits: [
      'Stop annoying leaks',
      'Clear stubborn clogs',
      'Fix mounting issues',
      'Restore proper drainage'
    ],
    faq: [
      {
        question: 'Why is water pooling under my sink?',
        answer: 'Usually caused by loose connections, worn seals, or pipe damage we can quickly fix.'
      },
      {
        question: 'Can you fix garbage disposal connections?',
        answer: 'Yes, we repair all sink connections including garbage disposal hookups.'
      }
    ],
    category: 'repair',
    icon: 'CircleDot'
  },
  {
    slug: 'toilet-repair',
    title: 'Toilet Repair',
    short: 'Fast toilet repair for running, clogging, and leak issues.',
    description: 'Professional toilet repair services for all common problems. From running toilets to major clogs, we get your toilet working perfectly.',
    benefits: [
      'Stop water waste',
      'Fix persistent clogs',
      'Eliminate running sounds',
      'Prevent floor damage'
    ],
    faq: [
      {
        question: 'Why does my toilet keep running?',
        answer: 'Usually caused by a faulty flapper, chain, or fill valve that we can quickly replace.'
      },
      {
        question: 'Can you fix toilet leaks at the base?',
        answer: 'Yes, we replace wax rings and reseat toilets to eliminate base leaks.'
      }
    ],
    category: 'repair',
    icon: 'RefreshCw'
  },
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    short: 'Water heater repair for all types and brands.',
    description: 'Expert water heater repair for gas, electric, and tankless systems. We diagnose problems quickly and restore hot water to your home.',
    benefits: [
      'Restore hot water',
      'Improve efficiency',
      'Extend unit life',
      'Safety compliance'
    ],
    faq: [
      {
        question: 'Why is my water not getting hot?',
        answer: 'Could be heating elements, gas pilot, or thermostat issues we can diagnose and fix.'
      },
      {
        question: 'How long do water heaters last?',
        answer: 'Tank units last 8-12 years, tankless units 15-20 years with proper maintenance.'
      }
    ],
    category: 'repair',
    icon: 'Thermometer'
  },
  {
    slug: 'water-pipe-repair',
    title: 'Water Pipe Repair',
    short: 'Emergency water pipe repair and leak detection.',
    description: 'Professional water pipe repair services for burst pipes, leaks, and pressure issues. We provide fast emergency response to prevent water damage.',
    benefits: [
      'Emergency response',
      'Prevent water damage',
      'Restore water pressure',
      'Minimal disruption'
    ],
    faq: [
      {
        question: 'What should I do if a pipe bursts?',
        answer: 'Shut off the main water valve immediately and call us for emergency repair service.'
      },
      {
        question: 'Can you detect hidden leaks?',
        answer: 'Yes, we use professional leak detection equipment to find hidden water leaks.'
      }
    ],
    category: 'repair',
    icon: 'AlertCircle'
  },

  // Featured Services
  {
    slug: 'sewer-lateral-installation',
    title: 'Sewer Lateral Installation',
    short: 'Complete sewer lateral installation and replacement.',
    description: 'Professional sewer lateral installation connecting your property to the municipal sewer system. We handle permits, excavation, and proper connections.',
    benefits: [
      'Municipal compliance',
      'Proper slope and grade',
      'Permit handling',
      'Complete excavation service'
    ],
    faq: [
      {
        question: 'What is a sewer lateral?',
        answer: 'The pipe connecting your property to the main sewer line, typically your responsibility to maintain.'
      },
      {
        question: 'Do you handle city inspections?',
        answer: 'Yes, we coordinate all necessary inspections and ensure compliance.'
      }
    ],
    category: 'featured',
    icon: 'ArrowRight'
  },
  {
    slug: 'tankless-water-heater-installation',
    title: 'Gas/Tankless Water Heater Installation',
    short: 'Energy-efficient tankless water heater installation.',
    description: 'Professional tankless water heater installation for unlimited hot water and energy savings. We handle gas connections, venting, and electrical requirements.',
    benefits: [
      'Unlimited hot water',
      'Energy efficiency',
      'Space saving design',
      'Longer lifespan'
    ],
    faq: [
      {
        question: 'What are the benefits of tankless?',
        answer: 'Endless hot water, energy savings, space efficiency, and 15-20 year lifespan.'
      },
      {
        question: 'Do I need gas line upgrades?',
        answer: 'Sometimes. We assess your current gas supply and upgrade if necessary.'
      }
    ],
    category: 'featured',
    icon: 'Zap'
  },
  {
    slug: 'waterline-repiping',
    title: 'Waterline Re-piping',
    short: 'Complete home waterline re-piping services.',
    description: 'Comprehensive waterline re-piping for older homes with outdated plumbing. We replace old pipes with modern materials for better flow and reliability.',
    benefits: [
      'Improved water pressure',
      'Better water quality',
      'Increased home value',
      'Reduced maintenance'
    ],
    faq: [
      {
        question: 'When should I consider re-piping?',
        answer: 'If your home has galvanized pipes, frequent leaks, or poor water pressure.'
      },
      {
        question: 'How long does re-piping take?',
        answer: 'Most homes take 2-5 days depending on size and complexity.'
      }
    ],
    category: 'featured',
    icon: 'Home'
  },
  {
    slug: 'drain-snake-service',
    title: 'Drain Snake Service',
    short: 'Professional drain cleaning with power snake equipment.',
    description: 'Professional drain snake service to clear tough clogs and blockages. Our power equipment handles everything from simple clogs to major root intrusions.',
    benefits: [
      'Clear tough blockages',
      'Restore full flow',
      'Prevent future problems',
      'Safe for all pipes'
    ],
    faq: [
      {
        question: 'When do I need drain snaking?',
        answer: 'When plungers and chemicals fail, or for recurring drain problems.'
      },
      {
        question: 'Will snaking damage my pipes?',
        answer: 'No, our professional equipment is safe for all pipe types when properly used.'
      }
    ],
    category: 'featured',
    icon: 'RotateCcw'
  },
  {
    slug: 'water-heater-flush-maintenance',
    title: 'Water Heater Flush Maintenance',
    short: 'Regular water heater maintenance and flushing service.',
    description: 'Professional water heater maintenance including flushing, inspection, and tune-up. Regular maintenance extends life and improves efficiency.',
    benefits: [
      'Extend unit lifespan',
      'Improve efficiency',
      'Prevent breakdowns',
      'Maintain warranty'
    ],
    faq: [
      {
        question: 'How often should I flush my water heater?',
        answer: 'We recommend annual flushing for most water heaters to remove sediment buildup.'
      },
      {
        question: 'What does maintenance include?',
        answer: 'Flushing, anode rod inspection, temperature check, and safety testing.'
      }
    ],
    category: 'featured',
    icon: 'Waves'
  },
  {
    slug: 'leak-inspection',
    title: 'Leak Inspection',
    short: 'Professional leak detection and inspection services.',
    description: 'Comprehensive leak inspection using advanced detection equipment. We find hidden leaks before they cause expensive water damage.',
    benefits: [
      'Prevent water damage',
      'Save on water bills',
      'Early problem detection',
      'Peace of mind'
    ],
    faq: [
      {
        question: 'How do you detect hidden leaks?',
        answer: 'We use acoustic equipment, thermal imaging, and pressure testing to locate hidden leaks.'
      },
      {
        question: 'What signs indicate I might have a leak?',
        answer: 'High water bills, water stains, musty odors, or sound of running water when everything is off.'
      }
    ],
    category: 'featured',
    icon: 'Search'
  },
  
  // Commercial Services - Featured
  {
    slug: 'commercial-floor-drain-maintenance',
    title: 'Commercial Floor Drain Maintenance',
    short: 'Professional maintenance and cleaning of commercial floor drains for optimal performance.',
    description: 'Comprehensive commercial floor drain maintenance services to prevent backups, eliminate odors, and ensure proper drainage in restaurants, kitchens, warehouses, and industrial facilities. Regular maintenance prevents costly emergencies and health code violations.',
    benefits: [
      'Prevents costly drain backups and emergencies',
      'Eliminates foul odors and bacterial buildup',
      'Ensures health code compliance',
      'Extends drain system lifespan',
      'Scheduled maintenance programs available',
      'Emergency commercial service available'
    ],
    faq: [
      {
        question: 'How often should commercial floor drains be maintained?',
        answer: 'Commercial floor drains should be professionally maintained every 3-6 months, or more frequently for high-usage facilities like restaurants and food processing plants.'
      },
      {
        question: 'What does commercial drain maintenance include?',
        answer: 'Our service includes drain inspection, high-pressure cleaning, grease and debris removal, trap cleaning, and preventive treatment to reduce future buildup.'
      },
      {
        question: 'Do you offer maintenance contracts for businesses?',
        answer: 'Yes, we provide scheduled maintenance contracts tailored to your business needs, ensuring regular service and priority emergency response.'
      }
    ],
    category: 'featured',
    icon: 'Building2'
  },
  
  {
    slug: 'commercial-water-heaters-100-gallon',
    title: '100 Gallon Commercial Water Heaters',
    short: 'Installation, repair, and maintenance of 100-gallon commercial water heating systems.',
    description: 'Professional commercial water heater services for 100-gallon units. We handle installation, repairs, maintenance, and replacement for restaurants, hotels, healthcare facilities, and other commercial properties requiring high-capacity hot water systems.',
    benefits: [
      'High-capacity hot water for commercial needs',
      'Energy-efficient operation and cost savings',
      'Professional installation and setup',
      'Emergency repair and replacement service',
      'Preventive maintenance programs',
      'Code-compliant installations'
    ],
    faq: [
      {
        question: 'How long does a 100-gallon commercial water heater last?',
        answer: 'With proper maintenance, commercial water heaters typically last 8-12 years. Regular maintenance can extend their lifespan significantly.'
      },
      {
        question: 'What maintenance is required for commercial water heaters?',
        answer: 'Annual inspections, tank flushing, anode rod replacement, temperature and pressure valve testing, and burner cleaning are essential for optimal performance.'
      },
      {
        question: 'Can you handle emergency commercial water heater repairs?',
        answer: 'Yes, we provide 24/7 emergency service for commercial water heater failures to minimize business downtime.'
      }
    ],
    category: 'featured',
    icon: 'Flame'
  },
  
  {
    slug: 'drain-hydro-jet-cleaning-4-6-inch',
    title: '4-6 inch Drain Hydro Jet Cleaning',
    short: 'High-pressure hydro jet cleaning for 4-6 inch commercial and residential drain lines.',
    description: 'Professional hydro jet drain cleaning service for 4-6 inch pipes. Our high-pressure water jetting effectively removes grease, debris, tree roots, and tough blockages from main lines, commercial drains, and large residential pipes.',
    benefits: [
      'Removes stubborn blockages and buildup',
      'Clears grease, roots, and scale deposits',
      'Restores full pipe capacity and flow',
      'Environmentally friendly cleaning method',
      'Prevents future clogs and backups',
      'Video inspection available'
    ],
    faq: [
      {
        question: 'What size pipes can hydro jetting clean?',
        answer: 'Our hydro jet equipment is specifically designed for 4-6 inch drain lines, perfect for main sewer lines and commercial drainage systems.'
      },
      {
        question: 'Is hydro jetting safe for older pipes?',
        answer: 'We perform a video inspection first to assess pipe condition. Hydro jetting is safe for most pipes when performed by trained professionals.'
      },
      {
        question: 'How effective is hydro jetting compared to snaking?',
        answer: 'Hydro jetting is much more thorough than snaking, removing all buildup and debris rather than just creating a hole through the blockage.'
      }
    ],
    category: 'featured',
    icon: 'Zap'
  },
  
  {
    slug: 'commercial-rough-plumbing',
    title: 'Commercial Rough Plumbing',
    short: 'Complete commercial rough plumbing installation for new construction and renovations.',
    description: 'Professional commercial rough plumbing services for new construction, tenant improvements, and major renovations. We handle complete pipe installation, fixture placement, and code-compliant systems for offices, restaurants, retail spaces, and industrial facilities.',
    benefits: [
      'Complete commercial plumbing systems',
      'Code-compliant installations',
      'Coordination with general contractors',
      'Licensed and insured commercial work',
      'Timely project completion',
      'Quality materials and workmanship'
    ],
    faq: [
      {
        question: 'What does commercial rough plumbing include?',
        answer: 'Rough plumbing includes water supply lines, drain and waste systems, vent piping, fixture placement, and all necessary connections before walls are closed.'
      },
      {
        question: 'Do you work with general contractors?',
        answer: 'Yes, we coordinate closely with general contractors and project managers to ensure timely completion and proper integration with other trades.'
      },
      {
        question: 'Are you licensed for commercial plumbing work?',
        answer: 'Yes, we are fully licensed, bonded, and insured for commercial plumbing projects of all sizes throughout the Bay Area.'
      }
    ],
    category: 'featured',
    icon: 'Wrench'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return getServicesByCategory('featured');
};

export const getAllInstallations = (): Service[] => {
  return getServicesByCategory('installation');
};

export const getAllRepairs = (): Service[] => {
  return getServicesByCategory('repair');
};