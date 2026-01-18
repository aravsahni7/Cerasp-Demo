import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Pill, 
  Dna, 
  Leaf, 
  Sparkles, 
  Dog,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SectorsContent = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Pill,
      titleEn: 'Pharmaceuticals',
      titleFr: 'Pharmaceutique',
      descEn: 'Drug development, formulation, and regulatory support for pharmaceutical companies of all sizes.',
      descFr: 'Développement de médicaments, formulation et soutien réglementaire pour les entreprises pharmaceutiques de toutes tailles.',
      detailsEn: 'From generic drug development to innovative therapies, we support pharmaceutical companies through every stage of product development.',
      detailsFr: 'Du développement de médicaments génériques aux thérapies innovantes, nous soutenons les entreprises pharmaceutiques à chaque étape du développement de produits.'
    },
    {
      icon: Dna,
      titleEn: 'Biotechnology',
      titleFr: 'Biotechnologie',
      descEn: 'Advanced biopharmaceutical research and biologics development services.',
      descFr: 'Recherche biopharmaceutique avancée et services de développement de produits biologiques.',
      detailsEn: 'We provide specialized support for biotech startups and established companies working on biologics, biosimilars, and advanced therapies.',
      detailsFr: 'Nous offrons un soutien spécialisé aux startups biotechnologiques et aux entreprises établies travaillant sur les produits biologiques, biosimilaires et thérapies avancées.'
    },
    {
      icon: Leaf,
      titleEn: 'Natural Health Products',
      titleFr: 'Produits de santé naturelle',
      descEn: 'NHP formulation, testing, and Health Canada NPN licensing support.',
      descFr: 'Formulation PSN, tests et soutien à l\'obtention de NPN de Santé Canada.',
      detailsEn: 'Navigate the complex NHP regulatory landscape with our expertise in formulation, testing, and Natural Product Number applications.',
      detailsFr: 'Naviguez dans le paysage réglementaire complexe des PSN avec notre expertise en formulation, tests et demandes de numéro de produit naturel.'
    },
    {
      icon: Sparkles,
      titleEn: 'Cosmetics',
      titleFr: 'Cosmétiques',
      descEn: 'Cosmetic formulation, stability testing, and safety assessment.',
      descFr: 'Formulation cosmétique, tests de stabilité et évaluation de la sécurité.',
      detailsEn: 'Develop safe and effective cosmetic products with our formulation expertise, stability testing, and regulatory guidance.',
      detailsFr: 'Développez des produits cosmétiques sûrs et efficaces avec notre expertise en formulation, tests de stabilité et orientation réglementaire.'
    },
    {
      icon: Dog,
      titleEn: 'Animal Health',
      titleFr: 'Santé animale',
      descEn: 'Veterinary pharmaceutical development and regulatory guidance.',
      descFr: 'Développement de produits pharmaceutiques vétérinaires et orientation réglementaire.',
      detailsEn: 'We support the development of veterinary medicines and animal health products with specialized formulation and regulatory services.',
      detailsFr: 'Nous soutenons le développement de médicaments vétérinaires et de produits de santé animale avec des services spécialisés de formulation et réglementaires.'
    },
    {
      icon: Smartphone,
      titleEn: 'Digital Health',
      titleFr: 'Santé numérique',
      descEn: 'Digital therapeutics and connected health solutions development.',
      descFr: 'Développement de thérapies numériques et de solutions de santé connectée.',
      detailsEn: 'Bridge the gap between digital innovation and healthcare with our expertise in digital therapeutics and connected health solutions.',
      detailsFr: 'Comblez l\'écart entre l\'innovation numérique et les soins de santé avec notre expertise en thérapies numériques et solutions de santé connectée.'
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section with Parallax Banner */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4E22AQHP5lAI76gdLQ/feedshare-shrink_800/B4EZmbR6ugHcAg-/0/1759246790229?e=1770249600&v=beta&t=R6dULajM0GanSH4_b6nNGOEIJCHVQz13H5re3ECmX2Y)',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              {t('Sectors & Impact', 'Domaines et Impact')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t(
                'Empowering Innovation Across Industries',
                'Favoriser l\'innovation dans tous les secteurs'
              )}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {t(
                'We serve diverse life sciences sectors with specialized expertise and tailored solutions.',
                'Nous servons divers secteurs des sciences de la vie avec une expertise spécialisée et des solutions sur mesure.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <sector.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(sector.titleEn, sector.titleFr)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(sector.descEn, sector.descFr)}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  {t(sector.detailsEn, sector.detailsFr)}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  {t('Learn more', 'En savoir plus')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t(
                'Empowering SMEs with Research & Regulatory Success',
                'Renforcer les PME avec la recherche et le succès réglementaire'
              )}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {t(
                'From initial concept to market launch, we provide the expertise and support that transforms innovative ideas into successful products.',
                'Du concept initial au lancement sur le marché, nous fournissons l\'expertise et le soutien qui transforment les idées innovantes en produits réussis.'
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">15+</div>
                <div className="text-primary-foreground/70">{t('Years of Expertise', 'Années d\'expertise')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">200+</div>
                <div className="text-primary-foreground/70">{t('Projects Completed', 'Projets complétés')}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-foreground mb-2">50+</div>
                <div className="text-primary-foreground/70">{t('Industry Partners', 'Partenaires industriels')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Sectors = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <SectorsContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Sectors;