'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/products';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Locale } from '@/i18n/config';

export function Testimonials() {
  const t = useTranslations('home');
  const locale = useLocale() as Locale;

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-16">
            {t('testimonialsTitle')}
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6 w-max"
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="w-[350px] flex-shrink-0 bg-surface border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className={j < review.rating ? 'fill-coral text-coral' : 'text-muted'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed">{review.comment[locale]}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
