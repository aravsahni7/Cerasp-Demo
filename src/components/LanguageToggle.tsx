import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === 'fr'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        FR
      </motion.button>
    </div>
  );
};

export default LanguageToggle;
