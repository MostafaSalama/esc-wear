'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Zap, Users, Award } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const values = [
  { key: 'Modesty', icon: Heart, color: 'text-coral' },
  { key: 'Movement', icon: Zap, color: 'text-teal' },
  { key: 'Community', icon: Users, color: 'text-coral' },
  { key: 'Quality', icon: Award, color: 'text-teal' },
] as const;

export default function AboutPage() {
  const t = useTranslations('about');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-4"
          >
            {t('heroTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-muted"
          >
            {t('heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">{t('missionTitle')}</h2>
          <p className="text-lg text-muted leading-relaxed">{t('missionText')}</p>
        </ScrollReveal>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-16">
            {t('valuesTitle')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <ScrollReveal key={val.key} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-surface border border-border rounded-2xl p-8 text-center group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-surface-light mb-4 ${val.color}`}>
                  <val.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(`value${val.key}` as any)}</h3>
                <p className="text-sm text-muted">{t(`value${val.key}Desc` as any)}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-surface border border-border rounded-3xl p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">{t('storyTitle')}</h2>
            <p className="text-lg text-muted leading-relaxed">{t('storyText')}</p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
