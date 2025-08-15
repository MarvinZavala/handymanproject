import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/services';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Dynamically get the icon component with fallback
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  const FallbackIcon = Icons.Wrench as React.ComponentType<{ className?: string }>;

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-4 sm:p-6 border border-gray-100 mx-2 sm:mx-0">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue rounded-lg flex items-center justify-center">
            {IconComponent ? <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> : <FallbackIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          </div>
        </div>
        
        <div className="flex-grow space-y-2 sm:space-y-3 min-w-0">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-1 sm:mb-2 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.short}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1 sm:pt-2">
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
              className="text-brand-blue hover:text-brand-navy hover:bg-brand-blue-light hover:bg-opacity-20 p-1.5 sm:p-2 flex-shrink-0"
              asChild
            >
              <a href="tel:(510) 926-7272">
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}