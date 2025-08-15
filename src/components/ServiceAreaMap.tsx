'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

// Dynamically import ALL Leaflet-related components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Polygon = dynamic(() => import('react-leaflet').then(mod => mod.Polygon), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface ServiceArea {
  name: string;
  center: [number, number];
  bounds: [number, number][];
  color: string;
  description: string;
}

const serviceAreas: ServiceArea[] = [
  {
    name: 'San Leandro',
    center: [37.7249, -122.1561],
    bounds: [
      [37.7049, -122.1761],
      [37.7449, -122.1761], 
      [37.7449, -122.1361],
      [37.7049, -122.1361]
    ],
    color: '#B88E3B',
    description: 'Our home base - Same day service'
  },
  {
    name: 'Oakland',
    center: [37.8044, -122.2711],
    bounds: [
      [37.7544, -122.3211],
      [37.8544, -122.3211],
      [37.8544, -122.2211],
      [37.7544, -122.2211]
    ],
    color: '#1F75A6',
    description: 'All neighborhoods covered'
  },
  {
    name: 'Alameda',
    center: [37.7652, -122.2416],
    bounds: [
      [37.7452, -122.2616],
      [37.7852, -122.2616],
      [37.7852, -122.2216],
      [37.7452, -122.2216]
    ],
    color: '#0B1D41',
    description: 'Island community specialists'
  },
  {
    name: 'Berkeley',
    center: [37.8715, -122.2730],
    bounds: [
      [37.8515, -122.2930],
      [37.8915, -122.2930],
      [37.8915, -122.2530],
      [37.8515, -122.2530]
    ],
    color: '#B31E1E',
    description: 'UC Berkeley area & residential'
  },
  {
    name: 'Hayward',
    center: [37.6688, -122.0808],
    bounds: [
      [37.6288, -122.1208],
      [37.7088, -122.1208],
      [37.7088, -122.0408],
      [37.6288, -122.0408]
    ],
    color: '#B88E3B',
    description: 'Family & business solutions'
  },
  {
    name: 'Castro Valley',
    center: [37.6941, -122.0863],
    bounds: [
      [37.6741, -122.1063],
      [37.7141, -122.1063],
      [37.7141, -122.0663],
      [37.6741, -122.0663]
    ],
    color: '#1F75A6',
    description: 'Neighborhood focused service'
  },
  {
    name: 'Sacramento',
    center: [38.5816, -121.4944],
    bounds: [
      [38.4816, -121.5944],
      [38.6816, -121.5944],
      [38.6816, -121.3944],
      [38.4816, -121.3944]
    ],
    color: '#0B1D41',
    description: 'Capital city expansion'
  },
  {
    name: 'Stockton',
    center: [37.9577, -121.2908],
    bounds: [
      [37.8577, -121.3908],
      [38.0577, -121.3908],
      [38.0577, -121.1908],
      [37.8577, -121.1908]
    ],
    color: '#B31E1E',
    description: 'Central Valley coverage'
  }
];

export default function ServiceAreaMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Only import and configure Leaflet on the client side
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        // Fix for broken marker icons - use simple colored markers
        delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 6.9 12.5 28.5 12.5 28.5S25 19.4 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#B88E3B"/>
              <circle cx="12.5" cy="12.5" r="5" fill="white"/>
            </svg>
          `),
          iconUrl: 'data:image/svg+xml;base64,' + btoa(`
            <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 6.9 12.5 28.5 12.5 28.5S25 19.4 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#B88E3B"/>
              <circle cx="12.5" cy="12.5" r="5" fill="white"/>
            </svg>
          `),
          shadowUrl: '',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        });
      });
    }
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
          center={[37.8, -122.0]}
          zoom={8}
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
          
          {/* Service Area Polygons */}
          {serviceAreas.map((area, index) => (
            <Polygon
              key={index}
              positions={area.bounds}
              pathOptions={{
                fillColor: area.color,
                fillOpacity: 0.2,
                color: area.color,
                weight: 2,
                opacity: 0.9,
                dashArray: '5, 5'
              }}
            >
              <Popup>
                <div className="text-center p-2">
                  <h4 className="font-bold text-brand-navy mb-1">{area.name}</h4>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </div>
              </Popup>
            </Polygon>
          ))}
          
          {/* City Markers */}
          {serviceAreas.map((area, index) => (
            <Marker
              key={`marker-${index}`}
              position={area.center}
            >
              <Popup>
                <div className="text-center p-2">
                  <h4 className="font-bold text-brand-navy mb-1">{area.name}</h4>
                  <p className="text-sm text-gray-600">{area.description}</p>
                  <div className="mt-2">
                    <a 
                      href="tel:(510) 926-7272"
                      className="text-brand-blue hover:text-brand-navy font-semibold text-sm"
                    >
                      Call (510) 926-7272
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
      {/* Legend */}
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <h4 className="font-semibold text-brand-navy mb-3 text-sm">Service Areas Legend</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {serviceAreas.slice(0, 4).map((area, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: area.color }}
              ></div>
              <span className="text-xs text-gray-600 truncate">{area.name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {serviceAreas.slice(4).map((area, index) => (
            <div key={index + 4} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                style={{ backgroundColor: area.color }}
              ></div>
              <span className="text-xs text-gray-600 truncate">{area.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}