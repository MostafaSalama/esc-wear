'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const features = [
    t('featureMovement'),
    t('featureCoverage'),
    t('featureReturns'),
  ];

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-coral font-semibold tracking-widest uppercase text-sm mb-6"
        >
          {t('heroSubtitle')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8"
        >
          {t('heroTitle').split(' ').map((word, i) => (
            <span key={i}>
              {i === 1 || i === 3 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-8"
        >
          {t('heroDescription')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {features.map((feat, i) => (
            <span key={i} className="flex items-center gap-2 text-sm text-muted">
              <Check size={16} className="text-teal" />
              {feat}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link href={`/${locale}/shop`}>
            <Button size="lg" magnetic>
              {t('heroCta')}
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
