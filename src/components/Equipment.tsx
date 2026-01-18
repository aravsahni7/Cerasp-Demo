import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Equipment = () => {
  const { t } = useLanguage();

  const equipment = [
    {
      titleEn: 'HPLC Systems',
      titleFr: 'Systèmes HPLC',
      descEn: 'High-performance liquid chromatography for analytical testing',
      descFr: 'Chromatographie liquide haute performance pour tests analytiques',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop'
    },
    {
      titleEn: 'Tablet Press',
      titleFr: 'Presse à comprimés',
      descEn: 'Small-scale tablet manufacturing equipment',
      descFr: 'Équipement de fabrication de comprimés à petite échelle',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop'
    },
    {
      titleEn: 'Dissolution Testing',
      titleFr: 'Tests de dissolution',
      descEn: 'USP dissolution apparatus for drug release studies',
      descFr: 'Appareil de dissolution USP pour études de libération',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop'
    },
    {
      titleEn: 'Stability Chambers',
      titleFr: 'Chambres de stabilité',
      descEn: 'Climate-controlled storage for stability testing',
      descFr: 'Stockage climatisé pour tests de stabilité',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop'
    },
    {
      titleEn: 'Spectrophotometry',
      titleFr: 'Spectrophotométrie',
      descEn: 'UV-Vis spectrophotometers for quantitative analysis',
      descFr: 'Spectrophotomètres UV-Vis pour analyse quantitative',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop'
    },
    {
      titleEn: 'Clean Room',
      titleFr: 'Salle blanche',
      descEn: 'ISO-classified clean room for sterile processing',
      descFr: 'Salle blanche classée ISO pour traitement stérile',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=400&h=300&fit=crop'
    },
  ];

  return (
    <section id="equipment" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {t('Equipment & Facilities', 'Équipements & Installations')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            {t(
              'State-of-the-Art Laboratory',
              'Laboratoire à la fine pointe'
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'Our facilities feature modern pharmaceutical development and analytical testing equipment.',
              'Nos installations disposent d\'équipements modernes de développement pharmaceutique et de tests analytiques.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={t(item.titleEn, item.titleFr)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                  {t(item.titleEn, item.titleFr)}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {t(item.descEn, item.descFr)}
                </p>
              </div>
              {/* Default state label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-foreground">
                  {t(item.titleEn, item.titleFr)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
