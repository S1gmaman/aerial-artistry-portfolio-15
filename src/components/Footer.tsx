
import React from 'react';
import { cn } from '@/lib/utils';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">AerialVision</h3>
            <p className="text-muted-foreground mb-6">
              Högkvalitativ drönarfotografering i Stockholmsområdet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@aerialvision.se" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-muted-foreground hover:text-foreground transition-colors">
                  Användningsområden
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Priser
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-muted-foreground" />
                <span>070 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-muted-foreground" />
                <span>info@aerialvision.se</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} AerialVision. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
