'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

// Dynamically import ALL Leaflet-related components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Circle = dynamic(() => import('react-leaflet').then(mod => mod.Circle), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface ServiceArea {
  name: string;
  center: [number, number];
  radius: number; // radius in meters
  color: string;
  description: string;
  cities: string[];
}

const serviceAreas: ServiceArea[] = [
  {
    name: 'San Francisco Bay Area',
    center: [37.7749, -122.4194], // San Francisco center
    radius: 80000, // 80km radius
    color: '#1F75A6',
    description: 'Complete Bay Area coverage including all major cities',
    cities: ['San Francisco', 'Oakland', 'San Jose', 'Fremont', 'Hayward', 'Berkeley', 'Alameda', 'San Leandro', 'Castro Valley', 'Daly City', 'Richmond', 'San Mateo']
  },
  {
    name: 'Silicon Valley',
    center: [37.3382, -121.8863], // San Jose/Silicon Valley center
    radius: 45000, // 45km radius
    color: '#B88E3B',
    description: 'Silicon Valley tech corridor and surrounding areas',
    cities: ['San Jose', 'Palo Alto', 'Mountain View', 'Cupertino', 'Sunnyvale', 'Santa Clara', 'Milpitas', 'Campbell', 'Los Gatos', 'Saratoga']
  },
  {
    name: 'Sacramento Greater Area',
    center: [38.5816, -121.4944], // Sacramento center
    radius: 60000, // 60km radius
    color: '#B31E1E',
    description: 'Sacramento metropolitan area and surrounding regions',
    cities: ['Sacramento', 'Roseville', 'Elk Grove', 'Folsom', 'Davis', 'Woodland', 'West Sacramento', 'Rancho Cordova', 'Citrus Heights', 'Fairfield']
  }
];

export default function ServiceAreaMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-96">
        <div className="text-center">
          <MapPin className="w-8 h-8 text-brand-blue mx-auto mb-2" />
          <p className="text-gray-600">Loading service area map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-brand-navy mb-2">Our Service Coverage Areas</h3>
        <p className="text-gray-600 text-sm">
          Interactive map showing our primary service zones throughout Northern California
        </p>
      </div>
      
      <div className="h-96 relative overflow-hidden">
        <MapContainer
          center={[37.9, -121.9]}
          zoom={6}
          style={{ height: '100%', width: '100%' }}
          className="z-0 rounded-none"
          zoomControl={true}
        >
          {/* Using CartoDB Voyager for Google Maps-like appearance */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            maxZoom={19}
          />
          
          {/* Service Area Circles */}
          {serviceAreas.map((area, index) => (
            <Circle
              key={index}
              center={area.center}
              radius={area.radius}
              pathOptions={{
                fillColor: area.color,
                fillOpacity: 0.15,
                color: area.color,
                weight: 3,
                opacity: 0.8,
              }}
            >
              <Popup maxWidth={300}>
                <div className="p-3">
                  <h4 className="font-bold text-brand-navy mb-2 text-lg">{area.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                  
                  <div className="mb-3">
                    <h5 className="font-semibold text-brand-navy text-sm mb-2">Cities Covered:</h5>
                    <div className="flex flex-wrap gap-1">
                      {area.cities.slice(0, 6).map((city, cityIndex) => (
                        <span key={cityIndex} className="bg-brand-blue/10 text-brand-blue px-2 py-1 rounded text-xs">
                          {city}
                        </span>
                      ))}
                      {area.cities.length > 6 && (
                        <span className="text-gray-500 text-xs">+{area.cities.length - 6} more</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-center pt-2 border-t border-gray-200">
                    <a 
                      href="tel:(510) 926-7272"
                      className="inline-flex items-center bg-brand-blue text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-navy transition-colors"
                    >
                      📞 Call (510) 926-7272
                    </a>
                  </div>
                </div>
              </Popup>
            </Circle>
          ))}
        </MapContainer>
      </div>
      
      {/* Legend */}
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <h4 className="font-semibold text-brand-navy mb-3 text-sm">Service Coverage Areas</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div 
                className="w-4 h-4 rounded-full mt-0.5 flex-shrink-0 border-2"
                style={{ backgroundColor: area.color, borderColor: area.color }}
              ></div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-brand-navy text-sm">{area.name}</div>
                <div className="text-xs text-gray-500 mt-1">{area.description}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {area.cities.slice(0, 3).join(', ')}
                  {area.cities.length > 3 && ` +${area.cities.length - 3} more`}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500 mb-2">
            24/7 Emergency Service • Licensed • Bonded • Insured
          </p>
          <a 
            href="tel:(510) 926-7272"
            className="inline-flex items-center bg-brand-blue text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-navy transition-colors"
          >
            📞 Call (510) 926-7272 for Service
          </a>
        </div>
      </div>
    </div>
  );
}