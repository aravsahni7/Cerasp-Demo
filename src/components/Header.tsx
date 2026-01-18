import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const navItems = [
    { 
      en: 'About', fr: 'À propos', href: '/about',
      sections: [
        { id: 'overview', en: 'Overview', fr: "Vue d'ensemble" },
        { id: 'facilities', en: 'Facilities', fr: 'Installations' },
        { id: 'equipment', en: 'Equipment', fr: 'Équipements' },
        { id: 'team', en: 'Our Team', fr: 'Notre équipe' },
        { id: 'board', en: 'Our Board', fr: "Conseil d'administration" },
      ]
    },
    { 
      en: 'Services', fr: 'Services', href: '/services',
      sections: [
        { id: 'applied-research', en: 'Applied Research', fr: 'Recherche appliquée' },
        { id: 'formulation', en: 'Formulation & Production', fr: 'Formulation & Production' },
        { id: 'tech-transfer', en: 'Technology Transfer', fr: 'Transfert technologique' },
        { id: 'regulatory', en: 'Regulatory Affairs', fr: 'Affaires réglementaires' },
        { id: 'training', en: 'Training & Workshops', fr: 'Formation & Ateliers' },
      ]
    },
    { 
      en: 'Sectors', fr: 'Domaines', href: '/sectors',
      sections: [
        { id: 'pharma', en: 'Pharmaceuticals', fr: 'Pharmaceutique' },
        { id: 'animal-health', en: 'Animal Health', fr: 'Santé animale' },
        { id: 'natural-health', en: 'Natural Health Products', fr: 'Produits de santé naturels' },
        { id: 'dermo', en: 'Dermo/Cosmeceuticals', fr: 'Dermo/Cosméceutique' },
        { id: 'medical-devices', en: 'Medical Devices', fr: 'Dispositifs médicaux' },
      ]
    },
    { 
      en: 'Equipment', fr: 'Équipements', href: '/equipment',
      sections: [
        { id: 'hplc', en: 'HPLC Systems', fr: 'Systèmes HPLC' },
        { id: 'tablet-press', en: 'Tablet Press Equipment', fr: 'Presses à comprimés' },
        { id: 'dissolution', en: 'Dissolution Testing', fr: 'Tests de dissolution' },
        { id: 'stability', en: 'Stability Chambers', fr: 'Chambres de stabilité' },
        { id: 'spectro', en: 'Spectrophotometry', fr: 'Spectrophotométrie' },
        { id: 'clean-room', en: 'Clean Room Facility', fr: 'Salles blanches' },
      ]
    },
    { en: 'Partners', fr: 'Partenaires', href: '/partners' },
    { en: 'Contact', fr: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  const closeMenu = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredNav(null);
  };

  const handleLinkClick = () => {
    closeMenu();
    setIsLocked(true);
  };

  const handleMouseEnter = (href: string) => {
    if (isLocked) return;

    // IF the sidebar is already open, switch categories instantly
    if (hoveredNav !== null) {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      setHoveredNav(href);
      return;
    }

    // IF the sidebar is closed, apply the 1-second delay
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(href);
    }, 600); // Set to 1000ms (1 second)
  };

  const handleHeaderMouseLeave = () => {
    closeMenu();
    setIsLocked(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onMouseLeave={handleHeaderMouseLeave}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 relative z-50" onClick={handleLinkClick}>
            <img 
              src="https://www.cgodin.qc.ca/wp-content/uploads/2023/02/logo_cerasp.png" 
              alt="CERASP Logo"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 h-16">
            {navItems.map((item) => (
              <div 
                key={item.href} 
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter(item.href)}
              >
                <Link
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium transition-colors h-full flex items-center border-b-2 border-transparent hover:text-primary ${
                    isActive(item.href) || hoveredNav === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {t(item.en, item.fr)}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4 relative z-50">
            <LanguageToggle />
            <Button variant="hero" className="hidden md:inline-flex" asChild onClick={handleLinkClick}>
              <Link to="/contact">{t('Get Started', 'Commencer')}</Link>
            </Button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {hoveredNav && !isLocked && navItems.find(n => n.href === hoveredNav)?.sections && (
          <div className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] hidden md:block z-40">
            <div 
              className="absolute inset-0 bg-black/5" 
              onMouseEnter={closeMenu}
            />

            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              className="relative w-1/2 h-full bg-background border-r border-border shadow-2xl p-12 overflow-y-auto"
              onMouseEnter={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-2 max-w-xl mx-auto lg:mr-12">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-6 font-bold opacity-50">
                  {t('Explore Sections', 'Explorer les sections')}
                </p>
                {navItems.find(n => n.href === hoveredNav)?.sections?.map((section) => (
                  <Link
                    key={section.id}
                    to={`${hoveredNav}#${section.id}`}
                    className="group flex items-center justify-between py-4 border-b border-border/40 hover:border-primary transition-all"
                    onClick={handleLinkClick}
                  >
                    <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {t(section.en, section.fr)}
                    </span>
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all text-primary group-hover:translate-x-2" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;