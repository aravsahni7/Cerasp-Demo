import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Pill, 
  Dna, 
  Leaf, 
  Sparkles, 
  Dog,
  Smartphone
} from 'lucide-react';

const Sectors = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Pill,
      titleEn: 'Pharmaceuticals',
      titleFr: 'Pharmaceutique',
      descEn: 'Drug development, formulation, and regulatory support for pharmaceutical companies.',
      descFr: 'Développement de médicaments, formulation et soutien réglementaire pour les entreprises pharmaceutiques.'
    },
    {
      icon: Dna,
      titleEn: 'Biotechnology',
      titleFr: 'Biotechnologie',
      descEn: 'Advanced biopharmaceutical research and biologics development services.',
      descFr: 'Recherche biopharmaceutique avancée et services de développement de produits biologiques.'
    },
    {
      icon: Leaf,
      titleEn: 'Natural Health Products',
      titleFr: 'Produits de santé naturelle',
      descEn: 'NHP formulation, testing, and Health Canada NPN licensing support.',
      descFr: 'Formulation PSN, tests et soutien à l\'obtention de NPN de Santé Canada.'
    },
    {
      icon: Sparkles,
      titleEn: 'Cosmetics',
      titleFr: 'Cosmétiques',
      descEn: 'Cosmetic formulation, stability testing, and safety assessment.',
      descFr: 'Formulation cosmétique, tests de stabilité et évaluation de la sécurité.'
    },
    {
      icon: Dog,
      titleEn: 'Animal Health',
      titleFr: 'Santé animale',
      descEn: 'Veterinary pharmaceutical development and regulatory guidance.',
      descFr: 'Développement de produits pharmaceutiques vétérinaires et orientation réglementaire.'
    },
    {
      icon: Smartphone,
      titleEn: 'Digital Health',
      titleFr: 'Santé numérique',
      descEn: 'Digital therapeutics and connected health solutions development.',
      descFr: 'Développement de thérapies numériques et de solutions de santé connectée.'
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {t('Sectors & Impact', 'Domaines et Impact')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            {t(
              'Empowering Innovation Across Industries',
              'Favoriser l\'innovation dans tous les secteurs'
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'We serve diverse life sciences sectors with specialized expertise and tailored solutions.',
              'Nous servons divers secteurs des sciences de la vie avec une expertise spécialisée et des solutions sur mesure.'
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 text-center">
                <motion.div
                  className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <sector.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {t(sector.titleEn, sector.titleFr)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(sector.descEn, sector.descFr)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Statement */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t(
              'Empowering SMEs with Research & Regulatory Success',
              'Renforcer les PME avec la recherche et le succès réglementaire'
            )}
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            {t(
              'From initial concept to market launch, we provide the expertise and support that transforms innovative ideas into successful products.',
              'Du concept initial au lancement sur le marché, nous fournissons l\'expertise et le soutien qui transforment les idées innovantes en produits réussis.'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
