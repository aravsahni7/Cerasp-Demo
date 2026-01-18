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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FlaskConical,
      titleEn: 'Applied Research',
      titleFr: 'Recherche appliquée',
      descEn: 'Cutting-edge pharmaceutical research tailored to your innovation needs, from discovery to development.',
      descFr: 'Recherche pharmaceutique de pointe adaptée à vos besoins d\'innovation, de la découverte au développement.',
      features: ['Drug discovery', 'Method development', 'Analytical testing']
    },
    {
      icon: Beaker,
      titleEn: 'Formulation & Production',
      titleFr: 'Formulation & Production',
      descEn: 'Small batch formulation and production capabilities for early-stage pharmaceutical development.',
      descFr: 'Capacités de formulation et production en petits lots pour le développement pharmaceutique précoce.',
      features: ['Tablet formulation', 'Liquid forms', 'Topical products']
    },
    {
      icon: ArrowLeftRight,
      titleEn: 'Technology Transfer',
      titleFr: 'Transfert de technologie',
      descEn: 'Seamless transfer of processes and knowledge from R&D to commercial manufacturing.',
      descFr: 'Transfert fluide des processus et connaissances de la R&D à la fabrication commerciale.',
      features: ['Scale-up support', 'Process optimization', 'Documentation']
    },
    {
      icon: FileCheck,
      titleEn: 'Regulatory Affairs',
      titleFr: 'Affaires réglementaires',
      descEn: 'Expert guidance through Health Canada and international regulatory requirements.',
      descFr: 'Accompagnement expert à travers les exigences réglementaires de Santé Canada et internationales.',
      features: ['DIN applications', 'NHP submissions', 'Quality systems']
    },
    {
      icon: GraduationCap,
      titleEn: 'Training & Workshops',
      titleFr: 'Formation & Ateliers',
      descEn: 'Professional development programs for industry professionals and students.',
      descFr: 'Programmes de développement professionnel pour les professionnels de l\'industrie et les étudiants.',
      features: ['GMP training', 'Lab techniques', 'Regulatory courses']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            {t('Our Services', 'Nos Services')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            {t(
              'Comprehensive Pharmaceutical Expertise',
              'Expertise pharmaceutique complète'
            )}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              'From concept to commercialization, we provide the scientific and regulatory support your innovation needs.',
              'Du concept à la commercialisation, nous fournissons le soutien scientifique et réglementaire dont votre innovation a besoin.'
            )}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {t(service.titleEn, service.titleFr)}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {t(service.descEn, service.descFr)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    {t('Learn more', 'En savoir plus')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
