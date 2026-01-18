import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const Partners = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: 'John Abbott College',
      category: t('Academic', 'Académique'),
      logo: 'JA'
    },
    {
      name: 'Cégep Gérald-Godin',
      category: t('Academic', 'Académique'),
      logo: 'GG'
    },
    {
      name: 'Health Canada',
      category: t('Government', 'Gouvernement'),
      logo: 'HC'
    },
    {
      name: 'Quebec Bio',
      category: t('Industry', 'Industrie'),
      logo: 'QB'
    },
    {
      name: 'CQIB',
      category: t('Research', 'Recherche'),
      logo: 'CQ'
    },
    {
      name: 'MSSS',
      category: t('Government', 'Gouvernement'),
      logo: 'MS'
    },
  ];

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {t('Partnerships', 'Partenariats')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            {t(
              'Trusted by Industry Leaders',
              'La confiance des leaders de l\'industrie'
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'We collaborate with academic institutions, industry associations, and government bodies.',
              'Nous collaborons avec des institutions académiques, des associations industrielles et des organismes gouvernementaux.'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group relative bg-muted/50 rounded-xl p-6 text-center hover:bg-muted transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <span className="text-xl font-bold text-primary">{partner.logo}</span>
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">{partner.name}</h3>
              <span className="text-xs text-muted-foreground">{partner.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
