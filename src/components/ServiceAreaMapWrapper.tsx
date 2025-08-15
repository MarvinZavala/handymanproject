'use client';

import dynamic from 'next/dynamic';


// Dynamically import the map component to avoid SSR issues
const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), { 
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center h-96">
      <div className="text-center">
        <div className="w-8 h-8 text-brand-blue mx-auto mb-2">
          <svg className="animate-spin" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
            <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="text-gray-600">Loading service area map...</p>
      </div>
    </div>
  )
});

export default function ServiceAreaMapWrapper() {
  return <ServiceAreaMap />;
}