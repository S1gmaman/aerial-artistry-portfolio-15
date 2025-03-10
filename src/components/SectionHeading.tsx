
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = true, 
  className 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12 space-y-2', 
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
