import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedLogo from './AnimatedLogo';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Microscope, Shield } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', en: 'Years of Expertise', fr: 'Années d\'expertise' },
    { value: '200+', en: 'Projects Completed', fr: 'Projets complétés' },
    { value: '50+', en: 'Industry Partners', fr: 'Partenaires industriels' },
  ];

  return (
    <section className="min-h-screen pt-12 pb-16 flex items-center bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Animated Logo */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedLogo />
            
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {t(
                'Centre for Expertise',
                'Centre d\'Expertise'
              )}
              <span className="text-primary block mt-2">
                {t('& Applied Research in Pharmaceutical Sciences', '& de Recherche Appliquée en Sciences Pharmaceutiques')}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t(
                'We partner with life sciences innovators — from initial concept and formulation to pre-commercial production and regulatory strategy — supporting SMEs and startups with practical, high-impact expertise.',
                'Nous collaborons avec les innovateurs des sciences de la vie — de l\'idée à la production pré-commerciale et à la stratégie réglementaire — soutenant les PME et startups avec une expertise concrète et performante.'
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                {t('Explore Our Expertise', 'Explorer nos expertises')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                {t('Contact Us', 'Nous contacter')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{t(stat.en, stat.fr)}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
