
import React from 'react';
import { cn } from '@/lib/utils';
import LazyImage from './LazyImage';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc?: string;
  className?: string;
}

const UseCaseCard = ({ 
  title, 
  description, 
  icon, 
  imageSrc, 
  className 
}: UseCaseCardProps) => {
  return (
    <div className={cn(
      'group rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col',
      className
    )}>
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <LazyImage 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]" 
          />
        </div>
      )}
      
      <div className="p-6 flex-1 bg-secondary border border-border">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-primary">
            {icon}
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default UseCaseCard;
