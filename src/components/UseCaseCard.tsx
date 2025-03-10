
import React from 'react';
import { cn } from '@/lib/utils';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UseCaseCard = ({ title, description, icon }: UseCaseCardProps) => {
  return (
    <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border hover:bg-secondary/50 transition-colors">
      <div className="text-primary">{icon}</div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default UseCaseCard;
