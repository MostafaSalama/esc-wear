'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">{t('title')}</h1>
          <p className="text-lg text-muted">{t('subtitle')}</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        <ScrollReveal direction="left" className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input label={t('name')} required />
            <Input label={t('email')} type="email" required />
            <Input label={t('subject')} required />
            <div className="relative w-full">
              <textarea
                rows={5}
                placeholder={t('message')}
                required
                className="w-full bg-surface-light border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted transition-all duration-300 outline-none focus:border-coral focus:ring-1 focus:ring-coral/30 resize-none"
              />
            </div>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-teal font-semibold"
                >
                  <CheckCircle size={20} />
                  {t('sent')} — {t('sentDescription')}
                </motion.div>
              ) : (
                <motion.div key="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Button type="submit" size="lg" magnetic>{t('send')}</Button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </ScrollReveal>

        <ScrollReveal direction="right" className="lg:col-span-2">
          <div className="bg-surface border border-border rounded-2xl p-8 space-y-6">
            <h3 className="text-lg font-bold">{t('info')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted">
                <Mail size={18} className="text-coral flex-shrink-0" />
                <span>hello@escwear.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <Phone size={18} className="text-coral flex-shrink-0" />
                <span>+20 102 212 3004</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={18} className="text-coral flex-shrink-0" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">{t('followUs')}</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/esc.wear_" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface-light hover:bg-coral hover:text-white transition-colors">
                  <InstagramIcon size={18} />
                </a>
                <a href="https://www.tiktok.com/@esc.wear_" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface-light hover:bg-coral hover:text-white transition-colors">
                  <TikTokIcon size={18} />
                </a>
                <a href="https://www.facebook.com/share/1G7ZvnUBzP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface-light hover:bg-coral hover:text-white transition-colors">
                  <FacebookIcon size={18} />
                </a>
                <a href="https://wa.me/201022123004" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface-light hover:bg-coral hover:text-white transition-colors">
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
