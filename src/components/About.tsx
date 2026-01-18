import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Target,
      titleEn: 'Mission-Driven',
      titleFr: 'Axé sur la mission',
      descEn: 'Supporting pharmaceutical innovation from concept to commercialization',
      descFr: 'Soutenir l\'innovation pharmaceutique du concept à la commercialisation'
    },
    {
      icon: Users,
      titleEn: 'Collaborative',
      titleFr: 'Collaboratif',
      descEn: 'Partnering with academic institutions and industry leaders',
      descFr: 'Partenariat avec les institutions académiques et les leaders de l\'industrie'
    },
    {
      icon: Award,
      titleEn: 'Excellence',
      titleFr: 'Excellence',
      descEn: 'Committed to the highest standards of research and quality',
      descFr: 'Engagé aux plus hautes normes de recherche et de qualité'
    },
  ];

  const values = [
    { en: 'Applied pharmaceutical research', fr: 'Recherche pharmaceutique appliquée' },
    { en: 'Small batch formulation & production', fr: 'Formulation et production en petits lots' },
    { en: 'Technology transfer expertise', fr: 'Expertise en transfert de technologie' },
    { en: 'Regulatory affairs guidance', fr: 'Accompagnement en affaires réglementaires' },
    { en: 'Quality systems development', fr: 'Développement de systèmes de qualité' },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              {t('About CERASP', 'À propos de CERASP')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {t(
                'Your Partner in Pharmaceutical Innovation',
                'Votre partenaire en innovation pharmaceutique'
              )}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t(
                'The Centre d\'expertise et de recherche appliquée en sciences pharmaceutiques (CERASP) is a leading research and technology transfer centre supporting biotech companies, pharmaceutical SMEs, and startups across Quebec and beyond.',
                'Le Centre d\'expertise et de recherche appliquée en sciences pharmaceutiques (CERASP) est un centre de recherche et de transfert technologique de premier plan soutenant les entreprises de biotechnologie, les PME pharmaceutiques et les startups au Québec et au-delà.'
              )}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t(
                'In partnership with John Abbott College and Cégep Gérald-Godin, we provide practical, high-impact expertise to help innovators navigate the complex journey from initial concept to market-ready products.',
                'En partenariat avec le Collège John Abbott et le Cégep Gérald-Godin, nous offrons une expertise pratique et à fort impact pour aider les innovateurs à naviguer le parcours complexe du concept initial aux produits prêts pour le marché.'
              )}
            </p>

            {/* Values List */}
            <ul className="space-y-3">
              {values.map((value, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{t(value.en, value.fr)}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-5 p-6 bg-muted/50 rounded-2xl hover:bg-muted transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {t(item.titleEn, item.titleFr)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(item.descEn, item.descFr)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Academic Partners Badge */}
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-sm text-muted-foreground mb-3">
                {t('In partnership with', 'En partenariat avec')}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-background rounded-lg text-sm font-medium text-foreground">
                  John Abbott College
                </span>
                <span className="px-4 py-2 bg-background rounded-lg text-sm font-medium text-foreground">
                  Cégep Gérald-Godin
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
