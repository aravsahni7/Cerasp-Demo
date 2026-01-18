import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Award, Building, GraduationCap } from 'lucide-react';

const AboutContent = () => {
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
    <div className="pt-24">
      {/* Hero Section with Parallax Banner */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4E22AQH_GGYua4s1Mg/feedshare-shrink_800/B4EZvD0hWYGcAg-/0/1768516884150?e=1770249600&v=beta&t=76AD1EV-eqR_oYA5FXTuT7j3b8Vw5ET1zAuUAQBNM4g)',
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
              {t('About Us', 'À propos')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t(
                'Your Partner in Pharmaceutical Innovation',
                'Votre partenaire en innovation pharmaceutique'
              )}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {t(
                'The Centre d\'expertise et de recherche appliquée en sciences pharmaceutiques (CERASP) is a leading research and technology transfer centre.',
                'Le Centre d\'expertise et de recherche appliquée en sciences pharmaceutiques (CERASP) est un centre de recherche et de transfert technologique de premier plan.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t('Our Mission', 'Notre mission')}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {t(
                  'We support biotech companies, pharmaceutical SMEs, and startups across Quebec and beyond with practical, high-impact expertise to help innovators navigate the complex journey from initial concept to market-ready products.',
                  'Nous soutenons les entreprises de biotechnologie, les PME pharmaceutiques et les startups au Québec et au-delà avec une expertise pratique et à fort impact pour aider les innovateurs à naviguer le parcours complexe du concept initial aux produits prêts pour le marché.'
                )}
              </p>
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

            <motion.div
              className="grid gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-6 bg-muted/50 rounded-2xl"
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
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('Academic Partners', 'Partenaires académiques')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                'In partnership with leading educational institutions in Quebec.',
                'En partenariat avec les principales institutions d\'enseignement au Québec.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-card p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">John Abbott College</h3>
              <p className="text-muted-foreground text-sm">Sainte-Anne-de-Bellevue, Quebec</p>
            </motion.div>

            <motion.div
              className="bg-card p-8 rounded-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">Cégep Gérald-Godin</h3>
              <p className="text-muted-foreground text-sm">Sainte-Geneviève, Quebec</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <AboutContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default About;