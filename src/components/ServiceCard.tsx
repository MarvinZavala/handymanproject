import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/services';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically get the icon component
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center">
            {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
          </div>
        </div>
        
        <div className="flex-grow space-y-3">
          <div>
            <h3 className="text-xl font-bold text-brand-navy mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.short}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                service.category === 'featured' 
                  ? 'bg-brand-gold-light text-brand-gold-dark' 
                  : service.category === 'installation'
                  ? 'bg-brand-blue-light text-brand-blue'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {service.category === 'featured' ? 'Featured' : 
                 service.category === 'installation' ? 'Installation' : 'Repair'}
              </span>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-brand-blue hover:text-brand-navy hover:bg-brand-blue-light hover:bg-opacity-20 p-2"
              asChild
            >
              <Link href={`/services/${service.slug}`}>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}