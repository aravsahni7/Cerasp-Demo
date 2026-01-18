import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Beaker, 
  ArrowLeftRight, 
  FileCheck, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesContent = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FlaskConical,
      titleEn: 'Applied Research',
      titleFr: 'Recherche appliquée',
      descEn: 'Cutting-edge pharmaceutical research tailored to your innovation needs, from discovery to development.',
      descFr: 'Recherche pharmaceutique de pointe adaptée à vos besoins d\'innovation, de la découverte au développement.',
      detailsEn: [
        'Drug discovery and lead optimization',
        'Analytical method development and validation',
        'Stability studies and shelf-life determination',
        'Bioequivalence and bioavailability studies',
        'Quality control testing'
      ],
      detailsFr: [
        'Découverte de médicaments et optimisation des candidats',
        'Développement et validation de méthodes analytiques',
        'Études de stabilité et détermination de la durée de conservation',
        'Études de bioéquivalence et de biodisponibilité',
        'Tests de contrôle qualité'
      ]
    },
    {
      icon: Beaker,
      titleEn: 'Formulation & Production',
      titleFr: 'Formulation & Production',
      descEn: 'Small batch formulation and production capabilities for early-stage pharmaceutical development.',
      descFr: 'Capacités de formulation et production en petits lots pour le développement pharmaceutique précoce.',
      detailsEn: [
        'Tablet and capsule formulation',
        'Liquid and suspension development',
        'Topical and transdermal products',
        'Modified release systems',
        'Prototype and pilot batch production'
      ],
      detailsFr: [
        'Formulation de comprimés et gélules',
        'Développement de liquides et suspensions',
        'Produits topiques et transdermiques',
        'Systèmes à libération modifiée',
        'Production de prototypes et lots pilotes'
      ]
    },
    {
      icon: ArrowLeftRight,
      titleEn: 'Technology Transfer',
      titleFr: 'Transfert de technologie',
      descEn: 'Seamless transfer of processes and knowledge from R&D to commercial manufacturing.',
      descFr: 'Transfert fluide des processus et connaissances de la R&D à la fabrication commerciale.',
      detailsEn: [
        'Process scale-up and optimization',
        'Manufacturing site transfer support',
        'Technical documentation preparation',
        'Equipment qualification assistance',
        'Process validation protocols'
      ],
      detailsFr: [
        'Mise à l\'échelle et optimisation des procédés',
        'Soutien au transfert de site de fabrication',
        'Préparation de la documentation technique',
        'Assistance à la qualification des équipements',
        'Protocoles de validation des procédés'
      ]
    },
    {
      icon: FileCheck,
      titleEn: 'Regulatory Affairs',
      titleFr: 'Affaires réglementaires',
      descEn: 'Expert guidance through Health Canada and international regulatory requirements.',
      descFr: 'Accompagnement expert à travers les exigences réglementaires de Santé Canada et internationales.',
      detailsEn: [
        'Drug Identification Number (DIN) applications',
        'Natural Product Number (NPN) submissions',
        'Quality management system development',
        'GMP compliance consulting',
        'Regulatory strategy planning'
      ],
      detailsFr: [
        'Demandes de numéro d\'identification de médicament (DIN)',
        'Soumissions de numéro de produit naturel (NPN)',
        'Développement de systèmes de gestion de la qualité',
        'Consultation en conformité BPF',
        'Planification de stratégie réglementaire'
      ]
    },
    {
      icon: GraduationCap,
      titleEn: 'Training & Workshops',
      titleFr: 'Formation & Ateliers',
      descEn: 'Professional development programs for industry professionals and students.',
      descFr: 'Programmes de développement professionnel pour les professionnels de l\'industrie et les étudiants.',
      detailsEn: [
        'GMP fundamentals and advanced training',
        'Laboratory techniques workshops',
        'Regulatory affairs courses',
        'Quality assurance programs',
        'Customized corporate training'
      ],
      detailsFr: [
        'Formation BPF fondamentale et avancée',
        'Ateliers de techniques de laboratoire',
        'Cours d\'affaires réglementaires',
        'Programmes d\'assurance qualité',
        'Formation corporative personnalisée'
      ]
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section with Banner */}
      <section className="relative py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1351797773/photo/flask-and-beaker-in-medical-health-science-of-blue-technology-banner-background.jpg?s=612x612&w=0&k=20&c=v8ZrgK2o8k251RPLZbJYxuPFl4FTSNPtpAOcIwniaWw=)',
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
              {t('Our Services', 'Nos Services')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              {t(
                'Comprehensive Pharmaceutical Expertise',
                'Expertise pharmaceutique complète'
              )}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              {t(
                'From concept to commercialization, we provide the scientific and regulatory support your innovation needs.',
                'Du concept à la commercialisation, nous fournissons le soutien scientifique et réglementaire dont votre innovation a besoin.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t(service.titleEn, service.titleFr)}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {t(service.descEn, service.descFr)}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {(t(service.detailsEn.join('|||'), service.detailsFr.join('|||'))).split('|||').map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero">
                    {t('Learn More', 'En savoir plus')}
                  </Button>
                </div>
                <div className={`bg-muted/50 rounded-3xl p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {t('Ready to Start Your Project?', 'Prêt à démarrer votre projet?')}
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {t(
                'Contact us to discuss how we can support your pharmaceutical innovation journey.',
                'Contactez-nous pour discuter de la façon dont nous pouvons soutenir votre parcours d\'innovation pharmaceutique.'
              )}
            </p>
            <Button variant="secondary" size="lg">
              {t('Contact Us', 'Nous contacter')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Services = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ServicesContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Services;
