import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const EquipmentContent = () => {
  const { t } = useLanguage();

  const equipment = [
    {
      titleEn: 'HPLC Systems',
      titleFr: 'Systèmes HPLC',
      descEn: 'High-performance liquid chromatography systems for analytical testing and method development.',
      descFr: 'Systèmes de chromatographie liquide haute performance pour tests analytiques et développement de méthodes.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop',
      specsEn: ['Multiple detection systems', 'Method validation capabilities', 'Stability testing'],
      specsFr: ['Systèmes de détection multiples', 'Capacités de validation de méthodes', 'Tests de stabilité']
    },
    {
      titleEn: 'Tablet Press Equipment',
      titleFr: 'Équipement de presse à comprimés',
      descEn: 'Small-scale tablet manufacturing equipment for formulation development and pilot batches.',
      descFr: 'Équipement de fabrication de comprimés à petite échelle pour le développement de formulations et lots pilotes.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
      specsEn: ['Single and rotary presses', 'Tooling for various tablet sizes', 'Coating capabilities'],
      specsFr: ['Presses simples et rotatives', 'Outillage pour diverses tailles de comprimés', 'Capacités d\'enrobage']
    },
    {
      titleEn: 'Dissolution Testing',
      titleFr: 'Tests de dissolution',
      descEn: 'USP dissolution apparatus for drug release studies and quality control testing.',
      descFr: 'Appareil de dissolution USP pour études de libération de médicaments et tests de contrôle qualité.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop',
      specsEn: ['USP I and II apparatus', 'Automated sampling', 'Temperature control'],
      specsFr: ['Appareils USP I et II', 'Échantillonnage automatisé', 'Contrôle de température']
    },
    {
      titleEn: 'Stability Chambers',
      titleFr: 'Chambres de stabilité',
      descEn: 'Climate-controlled storage for ICH-compliant stability testing programs.',
      descFr: 'Stockage climatisé pour programmes de tests de stabilité conformes aux normes ICH.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop',
      specsEn: ['ICH conditions (25°C/60%RH, 40°C/75%RH)', 'Continuous monitoring', 'Validated systems'],
      specsFr: ['Conditions ICH (25°C/60%HR, 40°C/75%HR)', 'Surveillance continue', 'Systèmes validés']
    },
    {
      titleEn: 'Spectrophotometry',
      titleFr: 'Spectrophotométrie',
      descEn: 'UV-Vis spectrophotometers for quantitative analysis and identification testing.',
      descFr: 'Spectrophotomètres UV-Vis pour analyse quantitative et tests d\'identification.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop',
      specsEn: ['UV-Vis range', 'Method development', 'Quality control testing'],
      specsFr: ['Gamme UV-Vis', 'Développement de méthodes', 'Tests de contrôle qualité']
    },
    {
      titleEn: 'Clean Room Facility',
      titleFr: 'Installation de salle blanche',
      descEn: 'ISO-classified clean room for aseptic processing and sterile product development.',
      descFr: 'Salle blanche classée ISO pour traitement aseptique et développement de produits stériles.',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&h=400&fit=crop',
      specsEn: ['ISO 7 classification', 'Environmental monitoring', 'Gowning facilities'],
      specsFr: ['Classification ISO 7', 'Surveillance environnementale', 'Installations d\'habillage']
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section with Parallax Banner */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4E22AQHsNZwuK3vtTQ/feedshare-shrink_2048_1536/B4EZl7uSAHIUAw-/0/1758717354817?e=1770249600&v=beta&t=NW9FyDQcyLWQSpkayLze9q3yHLIiPFQ_XDPn5ccXqEs)',
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
              {t('Equipment & Facilities', 'Équipements & Installations')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t(
                'State-of-the-Art Laboratory',
                'Laboratoire à la fine pointe'
              )}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {t(
                'Our facilities feature modern pharmaceutical development and analytical testing equipment to support your innovation needs.',
                'Nos installations disposent d\'équipements modernes de développement pharmaceutique et de tests analytiques pour soutenir vos besoins d\'innovation.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.titleEn, item.titleFr)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(item.titleEn, item.titleFr)}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {t(item.descEn, item.descFr)}
                  </p>
                  <div className="border-t border-border pt-4 mt-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {t('Capabilities:', 'Capacités:')}
                    </h4>
                    <ul className="space-y-1">
                      {(t(item.specsEn.join('|||'), item.specsFr.join('|||'))).split('|||').map((spec, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t('Our Facility', 'Notre installation')}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t(
                'Located on the campus of John Abbott College in Sainte-Anne-de-Bellevue, our laboratory is equipped with modern instruments and facilities designed to support pharmaceutical research and development at every stage.',
                'Situé sur le campus du Collège John Abbott à Sainte-Anne-de-Bellevue, notre laboratoire est équipé d\'instruments modernes et d\'installations conçues pour soutenir la recherche et le développement pharmaceutique à chaque étape.'
              )}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">{t('Square feet of lab space', 'Pieds carrés d\'espace laboratoire')}</div>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">ISO 7</div>
                <div className="text-muted-foreground">{t('Clean room classification', 'Classification salle blanche')}</div>
              </div>
              <div className="bg-card p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">{t('Environmental monitoring', 'Surveillance environnementale')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Equipment = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <EquipmentContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Equipment;