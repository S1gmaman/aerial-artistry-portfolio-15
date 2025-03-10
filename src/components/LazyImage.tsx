
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src]);
  
  return (
    <img
      src={currentSrc || '/placeholder.svg'}
      alt={alt}
      className={cn(
        'lazy-image',
        isLoaded ? 'lazy-image-loaded' : 'lazy-image-loading',
        className
      )}
      {...props}
    />
  );
};

export default LazyImage;
