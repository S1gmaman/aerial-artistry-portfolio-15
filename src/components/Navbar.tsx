
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Hem', href: '#hero' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Användningsområden', href: '#use-cases' },
  { name: 'Priser', href: '#pricing' },
  { name: 'Om oss', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakta oss', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
      scrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200/50' : 'py-5'
    )}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-display font-semibold">
            AerialVision
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm">Kontakta oss</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-panel animate-fade-in py-5">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium py-2 text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="mt-2">Kontakta oss</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
