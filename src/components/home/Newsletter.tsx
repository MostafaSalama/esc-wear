'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Newsletter() {
  const t = useTranslations('home');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative gradient-coral-teal rounded-3xl p-12 sm:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 end-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 start-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                {t('newsletterTitle')}
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                {t('newsletterSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t('newsletterPlaceholder')}
                  className="flex-1 px-5 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-coral-dark font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/90 transition-colors cursor-pointer"
                >
                  {t('newsletterCta')}
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
