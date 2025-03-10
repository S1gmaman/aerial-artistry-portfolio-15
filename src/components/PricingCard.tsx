
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  className?: string;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false,
  className 
}: PricingCardProps) => {
  return (
    <div className={cn(
      'rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300',
      highlighted ? 'ring-2 ring-primary' : 'border border-border',
      highlighted && 'relative',
      className
    )}>
      {highlighted && (
        <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
      )}
      
      <div className="p-6 md:p-8 flex-1">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-semibold">{price}</span>
          <span className="text-muted-foreground"> kr</span>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className={cn(
                'mt-0.5 mr-2 rounded-full p-0.5',
                feature.included ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
              )}>
                <Check size={16} strokeWidth={3} />
              </span>
              <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 md:p-8 pt-0">
        <Button className={cn(
          'w-full',
          highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-secondary text-primary hover:bg-secondary/80'
        )}>
          Välj paket
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
