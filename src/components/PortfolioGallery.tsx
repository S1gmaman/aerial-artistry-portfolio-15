
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import LazyImage from './LazyImage';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

// Demo portfolio items - would be replaced with actual content
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Stadslandskap',
    category: 'Stadsfotografering',
    imageUrl: 'https://images.unsplash.com/photo-1486542945481-9c4e7f8e8f26?q=80&w=1000&auto=format&fit=crop',
    description: 'Panoramafotografering över Stockholm med vyer av Gamla Stan och vattnet.'
  },
  {
    id: 2,
    title: 'Kustutsikt',
    category: 'Naturfotografering',
    imageUrl: 'https://images.unsplash.com/photo-1489931291198-3dc0057c5909?q=80&w=1000&auto=format&fit=crop',
    description: 'Dramatiska vyer från Stockholms skärgård med solnedgång.'
  },
  {
    id: 3,
    title: 'Fastighetsöversikt',
    category: 'Fastighetsfotografering',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    description: 'Lyxvilla fotograferad från ovan, visar hela tomten och omgivningarna.'
  },
  {
    id: 4,
    title: 'Evenemangsfotografering',
    category: 'Evenemang',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop',
    description: 'Flygfotografering av utomhusfestival med folkmassa.'
  },
  {
    id: 5,
    title: 'Industriell inspektion',
    category: 'Industri',
    imageUrl: 'https://images.unsplash.com/photo-1547652577-b4fe2f34d7ee?q=80&w=1000&auto=format&fit=crop',
    description: 'Flygfotografering av industriområde för inspektion och dokumentation.'
  },
  {
    id: 6,
    title: 'Naturreservat',
    category: 'Naturfotografering',
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1000&auto=format&fit=crop',
    description: 'Vacker naturlandskap från ovan som visar skogar och vattendrag.'
  }
];

interface PortfolioGalleryProps {
  className?: string;
}

const PortfolioGallery = ({ className }: PortfolioGalleryProps) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <div className={cn('w-full', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative overflow-hidden bg-white rounded-lg h-[300px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedItem(item)}
          >
            <LazyImage
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-xs font-medium text-white/80">{item.category}</span>
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected item */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={20} />
            </button>
            <div className="h-[50vh] sm:h-[60vh] w-full bg-gray-100">
              <LazyImage
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm font-medium text-muted-foreground">{selectedItem.category}</span>
              <h3 className="text-2xl font-medium mt-1">{selectedItem.title}</h3>
              <p className="mt-2 text-muted-foreground">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;
