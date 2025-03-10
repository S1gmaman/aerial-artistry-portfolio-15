
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconColor?: string;
}

const UseCaseCard = ({ 
  title, 
  description, 
  icon, 
  className,
  iconColor = "text-primary" 
}: UseCaseCardProps) => {
  return (
    <div className={cn(
      'group px-6 py-8 rounded-lg transition-all duration-300 bg-white border border-border hover:bg-secondary/50',
      className
    )}>
      <div className={cn("w-12 h-12 flex items-center justify-center rounded-full mb-5", iconColor)}>
        {icon}
      </div>
      
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default UseCaseCard;
