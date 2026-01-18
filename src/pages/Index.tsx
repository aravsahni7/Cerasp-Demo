import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Sectors from '@/components/Sectors';
import Equipment from '@/components/Equipment';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Sectors />
          <Equipment />
          <Partners />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
