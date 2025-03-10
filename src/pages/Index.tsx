
import React from 'react';
import { 
  Camera, 
  Building2, 
  Home, 
  Map, 
  Users, 
  Factory, 
  Landmark, 
  Calendar, 
  Inspect 
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import PortfolioGallery from '@/components/PortfolioGallery';
import UseCaseCard from '@/components/UseCaseCard';
import PricingCard from '@/components/PricingCard';
import FaqAccordion from '@/components/FaqAccordion';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';

// Demo hero background image - would be replaced with actual uploaded content
const heroBackgroundUrl = 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2000&auto=format&fit=crop';

const Index = () => {
  // Use case data
  const useCases = [
    {
      title: 'Fastighetsfotografering',
      description: 'Förbättra din fastighetsmarknadsföring med vackra flygbilder som visar hela fastigheten och dess omgivning från ovan.',
      icon: <Building2 size={24} />,
      imageSrc: 'https://images.unsplash.com/photo-1542889601-399c4f3a8402?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Evenemangsdokumentation',
      description: 'Fånga unika bilder från evenemang, bröllop och festivaler med spektakulära vyer som traditionell fotografering inte kan erbjuda.',
      icon: <Calendar size={24} />,
      imageSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Arkitektur & Byggnationer',
      description: 'Dokumentera byggprojekt från start till slut med regelbunden flygfotografering som visar projektets utveckling.',
      icon: <Home size={24} />,
      imageSrc: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Landskapsfotografering',
      description: 'Fånga naturens skönhet från ett unikt perspektiv med vackra flygfoton av landskap, naturområden och vattendrag.',
      icon: <Map size={24} />,
      imageSrc: 'https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Industriella inspektioner',
      description: 'Utför säkra inspektioner av svåråtkomliga områden som tak, master och industrianläggningar utan behov av ställningar.',
      icon: <Factory size={24} />,
      imageSrc: 'https://images.unsplash.com/photo-1518623001779-0c754034fe25?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Kommunal planering',
      description: 'Stöd stadsplanering och kommunala projekt med detaljerade flygfoton för analys och visualisering.',
      icon: <Landmark size={24} />,
      imageSrc: 'https://images.unsplash.com/photo-1475552113915-6fcb52652ba2?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  // Pricing data
  const pricingPlans = [
    {
      title: 'Grundpaket',
      price: '2 500',
      description: 'Perfekt för enkla fotograferingsuppdrag med grundläggande redigering.',
      features: [
        { text: 'Upp till 45 minuters flygning', included: true },
        { text: '20 redigerade högupplösta bilder', included: true },
        { text: 'Grundläggande redigering', included: true },
        { text: 'Leverans inom 5 arbetsdagar', included: true },
        { text: 'Videoinspelning', included: false },
        { text: 'Tidsförloppsbilder', included: false },
        { text: 'Expressleverans', included: false }
      ]
    },
    {
      title: 'Premiumpaket',
      price: '4 500',
      description: 'För professionella behov med omfattande fotografering och avancerad redigering.',
      highlighted: true,
      features: [
        { text: 'Upp till 1 timmes flygning', included: true },
        { text: '40 redigerade högupplösta bilder', included: true },
        { text: 'Avancerad redigering', included: true },
        { text: 'Leverans inom 3 arbetsdagar', included: true },
        { text: '4K videoinspelning (5 min)', included: true },
        { text: 'Tidsförloppsbilder', included: true },
        { text: 'Expressleverans', included: false }
      ]
    },
    {
      title: 'Företagspaket',
      price: '6 500',
      description: 'Skräddarsytt för företag med omfattande behov och högsta kvalitet.',
      features: [
        { text: 'Upp till 1 timme 30 minuters flygning', included: true },
        { text: '60+ redigerade högupplösta bilder', included: true },
        { text: 'Premiumredigering', included: true },
        { text: 'Leverans inom 2 arbetsdagar', included: true },
        { text: '4K videoinspelning (10 min)', included: true },
        { text: 'Tidsförloppsbilder', included: true },
        { text: 'Expressleverans', included: true }
      ]
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: 'Vilka områden täcker ni för drönarfotografering?',
      answer: 'Vi erbjuder våra tjänster inom hela Stockholms län, inklusive kranskommuner. För uppdrag utanför dessa områden, vänligen kontakta oss för en anpassad offert.'
    },
    {
      question: 'Vilka tillstånd behövs för drönarfotografering?',
      answer: 'Vi följer Transportstyrelsens regler för drönare och har alla nödvändiga tillstånd för kommersiell flygning. Vi flyger inte i flygförbudszoner utan specialtillstånd och respekterar alltid privatlivet genom att inte fotografera in i privata trädgårdar eller bostäder.'
    },
    {
      question: 'Vilken utrustning använder ni?',
      answer: 'Vi använder professionella DJI-drönare av senaste modell med 4K-kameror som kan ta högupplösta bilder och filmer. Vår utrustning inkluderar även extra batterier för längre flygningar och olika filter för optimala bilder under olika ljusförhållanden.'
    },
    {
      question: 'Hur lång tid tar det att få bilderna efter fotografering?',
      answer: 'Leveranstiden beror på vilket paket du väljer. Grundpaketet levereras inom 5 arbetsdagar, Premiumpaketet inom 3 arbetsdagar, och Företagspaketet inom 2 arbetsdagar. Expressleverans finns tillgängligt mot extra kostnad.'
    },
    {
      question: 'Kan ni fotografera i dåligt väder?',
      answer: 'Av säkerhetsskäl och för att säkerställa bästa möjliga bildkvalitet flyger vi inte i regn, snö, dimma eller vid starka vindar. Om vädret inte tillåter flygning på den bokade dagen, kommer vi att omplanera utan extra kostnad.'
    },
    {
      question: 'Är det möjligt att få både bilder och video?',
      answer: 'Ja, vi erbjuder både fotografi och videoinspelning. Premium- och Företagspaketen inkluderar videoinspelning, och detta kan även läggas till Grundpaketet mot en extra kostnad.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src={heroBackgroundUrl}
            alt="Aerial drone photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="container mx-auto relative z-10 px-6 py-24 md:py-32">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-white/10 backdrop-blur-sm rounded-full">
              Professionell Drönarfotografering
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Fånga världen från ett nytt perspektiv
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Vi erbjuder högkvalitativ drönarfotografering för fastigheter, evenemang, landskap och företag i Stockholmsområdet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
                <a href="#contact">Kontakta oss</a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <a href="#portfolio">Se vårt arbete</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <Section id="portfolio">
        <SectionHeading 
          title="Vårt Portfolio" 
          subtitle="Utforska våra senaste drönarfotograferingar från olika projekt och uppdrag."
        />
        <PortfolioGallery />
      </Section>
      
      {/* Use Cases Section */}
      <Section id="use-cases" className="bg-secondary">
        <SectionHeading 
          title="Användningsområden" 
          subtitle="Upptäck hur vår drönarfotografering kan hjälpa dig och ditt företag."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
              imageSrc={useCase.imageSrc}
            />
          ))}
        </div>
      </Section>
      
      {/* About Us Section */}
      <Section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">
              Om oss
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
              Passion för drönarfotografering
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Vi är två gymnasieungdomar som båda har ett starkt intresse för drönarfotografi. Melvin har fem års erfarenhet av amatörfotografering med sin drönare och har utvecklat både teknisk skicklighet och ett konstnärligt öga för det perfekta flygfotot.
              </p>
              <p>
                Vårt mål är att varje kund alltid ska känna sig nöjd. Oavsett vilket paket du väljer, säkerställer vi att du blir helt tillfredsställd med resultatet. Vi erbjuder upp till 1 timme och 30 minuters flygning vid varje tillfälle, och om ingen bild möter dina förväntningar, kommer vi ut till dig igen utan extra kostnad.
              </p>
              <p>
                Vi tror på att bygga långsiktiga relationer med våra kunder genom att leverera exceptionell kvalitet och service. Varje projekt är unikt, och vi anpassar vårt tillvägagångssätt för att möta dina specifika behov och förväntningar.
              </p>
            </div>
            <Button className="mt-8" asChild>
              <a href="#contact">Kontakta oss</a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <LazyImage
              src="https://images.unsplash.com/photo-1465598044847-972de495aaf8?q=80&w=1000&auto=format&fit=crop"
              alt="Drone photography team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Pricing Section */}
      <Section id="pricing" className="bg-secondary">
        <SectionHeading 
          title="Våra Priser" 
          subtitle="Välj det paket som passar dina behov bäst. Alla priser är inklusive moms."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-10">
          Behöver du ett anpassat paket? <a href="#contact" className="text-primary underline">Kontakta oss</a> för en personlig offert.
        </p>
      </Section>
      
      {/* FAQ Section */}
      <Section id="faq">
        <SectionHeading 
          title="Vanliga Frågor" 
          subtitle="Hitta svar på de vanligaste frågorna om våra drönarfotograferingstjänster."
        />
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full">
              Kontakta oss
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6 tracking-tight">
              Redo att lyfta ditt projekt?
            </h2>
            <p className="text-muted-foreground mb-8">
              Fyll i formuläret så återkommer vi till dig inom 24 timmar. Du kan också nå oss direkt via telefon eller e-post.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone size={20} className="mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-muted-foreground">070 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="mr-3 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">E-post</h3>
                  <p className="text-muted-foreground">info@aerialvision.se</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-6 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Index;
