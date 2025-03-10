
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  noContainer?: boolean;
}

const Section = ({ id, className, children, noContainer = false }: SectionProps) => {
  return (
    <section id={id} className={cn('section-padding w-full', className)}>
      {noContainer ? (
        children
      ) : (
        <div className="container mx-auto">{children}</div>
      )}
    </section>
  );
};

export default Section;
