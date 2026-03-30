'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.span
        className="text-4xl sm:text-5xl font-extrabold gradient-text block"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {isInView ? `${target.toLocaleString()}+` : '0'}
      </motion.span>
      <span className="text-sm text-muted mt-2 block">{label}</span>
    </div>
  );
}

export function BrandStory() {
  const t = useTranslations('home');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop)',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              {t('brandStoryTitle')}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {t('brandStoryText')}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-3 gap-8">
              <AnimatedCounter target={5000} label={t('statsAthletes')} />
              <AnimatedCounter target={100} label={t('statsCoverage')} />
              <AnimatedCounter target={30} label={t('statsReturns')} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
