import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { en: 'About Us', fr: 'À propos', href: '/about' },
    { en: 'Services', fr: 'Services', href: '/services' },
    { en: 'Sectors', fr: 'Domaines', href: '/sectors' },
    { en: 'Equipment', fr: 'Équipements', href: '/equipment' },
    { en: 'Partners', fr: 'Partenaires', href: '/partners' },
  ];

  const services = [
    { en: 'Applied Research', fr: 'Recherche appliquée' },
    { en: 'Formulation', fr: 'Formulation' },
    { en: 'Technology Transfer', fr: 'Transfert technologique' },
    { en: 'Regulatory Affairs', fr: 'Affaires réglementaires' },
    { en: 'Training', fr: 'Formation' },
  ];

  return (
    // Changed background to a clean white/off-white to make the official logo pop
    <footer className="bg-white text-slate-900 border-t border-slate-100 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              {/* Official Logo Implementation */}
              <img 
                src="https://www.cgodin.qc.ca/wp-content/uploads/2023/02/logo_cerasp.png" 
                alt="CERASP Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t(
                'Centre d\'expertise et de recherche appliquée en sciences pharmaceutiques — Accelerating pharmaceutical innovation.',
                'Centre d\'expertise et de recherche appliquée en sciences pharmaceutiques — Accélérer l\'innovation pharmaceutique.'
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-6">{t('Quick Links', 'Liens rapides')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {t(link.en, link.fr)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-primary mb-6">{t('Services', 'Services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-600 text-sm">
                    {t(service.en, service.fr)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-primary mb-6">{t('Contact', 'Contact')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">
                    21 275, chemin Lakeshore<br />
                    Sainte-Anne-de-Bellevue, QC H9X 3L9
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-600 text-sm">(514) 457-6610</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-slate-600 text-sm">info@cerasp.ca</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-4">{t('Newsletter', 'Infolettre')}</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('Your email', 'Votre courriel')}
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary focus:border-primary"
                />
                <Button className="bg-gradient-hero hover:opacity-90 shadow-md" size="icon">
                  <Mail className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            © 2024 CERASP. {t('All rights reserved.', 'Tous droits réservés.')}
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">
              {t('Privacy Policy', 'Politique de confidentialité')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('Terms of Service', 'Conditions d\'utilisation')}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;