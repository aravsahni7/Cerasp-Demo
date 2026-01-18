import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Landmark, FlaskConical, Globe, Handshake } from 'lucide-react';

const PartnersContent = () => {
  const { t } = useLanguage();

  const academicPartners = [
    {
      name: 'John Abbott College',
      descEn: 'Our primary academic partner and host institution, providing facilities and academic expertise.',
      descFr: 'Notre principal partenaire académique et institution hôte, fournissant installations et expertise académique.',
      location: 'Sainte-Anne-de-Bellevue, QC'
    },
    {
      name: 'Cégep Gérald-Godin',
      descEn: 'Collaborative partner in pharmaceutical sciences education and research.',
      descFr: 'Partenaire collaboratif dans l\'éducation et la recherche en sciences pharmaceutiques.',
      location: 'Sainte-Geneviève, QC'
    },
  ];

  const partnerCategories = [
    {
      icon: Landmark,
      titleEn: 'Government',
      titleFr: 'Gouvernement',
      partners: ['Health Canada', 'MSSS', 'MEIE', 'NRC-IRAP']
    },
    {
      icon: FlaskConical,
      titleEn: 'Research Networks',
      titleFr: 'Réseaux de recherche',
      partners: ['Consortium de recherche', 'CQIB', 'BioQuébec']
    },
    {
      icon: Building2,
      titleEn: 'Industry Associations',
      titleFr: 'Associations industrielles',
      partners: ['Quebec Bio', 'Pharmascience', 'Industry Leaders']
    },
    {
      icon: Globe,
      titleEn: 'International',
      titleFr: 'International',
      partners: ['Global pharma partners', 'International research networks']
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section with Banner (Matching Services Styling) */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D4E22AQE3wg7ySDxS6A/feedshare-shrink_1280/B4EZvD0hUzIIAc-/0/1768516884018?e=1770249600&v=beta&t=2jyz8dn8N9xcHF77CIWTs2pZa21INvT6EenWJgwa6Cw)',
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
              {t('Partnerships', 'Partenariats')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t(
                'Trusted by Industry Leaders',
                'La confiance des leaders de l\'industrie'
              )}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {t(
                'We collaborate with academic institutions, industry associations, and government bodies to advance pharmaceutical innovation.',
                'Nous collaborons avec des institutions académiques, des associations industrielles et des organismes gouvernementaux pour faire avancer l\'innovation pharmaceutique.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-20 bg-background">
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
                'Our foundation is built on strong partnerships with leading educational institutions.',
                'Notre fondation repose sur de solides partenariats avec des institutions éducatives de premier plan.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {academicPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-2">{partner.name}</h3>
                <p className="text-sm text-accent mb-4">{partner.location}</p>
                <p className="text-muted-foreground">
                  {t(partner.descEn, partner.descFr)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('Our Network', 'Notre réseau')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                'We work with a diverse range of partners across government, research, and industry.',
                'Nous travaillons avec une gamme diversifiée de partenaires dans les secteurs gouvernemental, de la recherche et de l\'industrie.'
              )}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">
                  {t(category.titleEn, category.titleFr)}
                </h3>
                <ul className="space-y-2">
                  {category.partners.map((partner, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {partner}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Handshake className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('Become a Partner', 'Devenez partenaire')}
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {t(
                'Join our network of innovators, researchers, and industry leaders working together to advance pharmaceutical sciences.',
                'Rejoignez notre réseau d\'innovateurs, de chercheurs et de leaders de l\'industrie travaillant ensemble pour faire avancer les sciences pharmaceutiques.'
              )}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Partners = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <PartnersContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Partners;