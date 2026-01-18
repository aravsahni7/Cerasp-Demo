import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactContent = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('Message Sent!', 'Message envoyé!'),
        description: t('We will get back to you soon.', 'Nous vous répondrons bientôt.'),
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleEn: 'Address',
      titleFr: 'Adresse',
      content: '21 275, chemin Lakeshore\nSainte-Anne-de-Bellevue, QC H9X 3L9'
    },
    {
      icon: Phone,
      titleEn: 'Phone',
      titleFr: 'Téléphone',
      content: '(514) 457-6610'
    },
    {
      icon: Mail,
      titleEn: 'Email',
      titleFr: 'Courriel',
      content: 'info@cerasp.ca'
    },
    {
      icon: Clock,
      titleEn: 'Hours',
      titleFr: 'Heures',
      contentEn: 'Monday - Friday: 8:30 AM - 4:30 PM',
      contentFr: 'Lundi - Vendredi: 8h30 - 16h30'
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              {t('Contact Us', 'Nous contacter')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t(
                'Get in Touch',
                'Prenez contact'
              )}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t(
                'Have a question or want to discuss a project? We\'d love to hear from you.',
                'Vous avez une question ou souhaitez discuter d\'un projet? Nous aimerions avoir de vos nouvelles.'
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('Send us a message', 'Envoyez-nous un message')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('First Name', 'Prénom')} *
                    </label>
                    <Input placeholder={t('John', 'Jean')} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t('Last Name', 'Nom')} *
                    </label>
                    <Input placeholder={t('Doe', 'Dupont')} required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('Email', 'Courriel')} *
                  </label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('Organization', 'Organisation')}
                  </label>
                  <Input placeholder={t('Your company name', 'Nom de votre entreprise')} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('Subject', 'Sujet')} *
                  </label>
                  <Input placeholder={t('How can we help?', 'Comment pouvons-nous vous aider?')} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    {t('Message', 'Message')} *
                  </label>
                  <Textarea 
                    placeholder={t('Tell us about your project...', 'Parlez-nous de votre projet...')} 
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t('Sending...', 'Envoi...')
                  ) : (
                    <>
                      {t('Send Message', 'Envoyer le message')}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('Contact Information', 'Coordonnées')}
              </h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        {t(item.titleEn, item.titleFr)}
                      </h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.contentEn ? t(item.contentEn, item.contentFr!) : item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.7138861193!2d-73.94636492346068!3d45.40647897107456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93d1d8e4d3e0d%3A0x7a5d3e0c0c0c0c0c!2sJohn%20Abbott%20College!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CERASP Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <ContactContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Contact;
