'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/products';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Locale } from '@/i18n/config';

interface ReviewSectionProps {
  rating: number;
  reviewCount: number;
}

export function ReviewSection({ rating, reviewCount }: ReviewSectionProps) {
  const locale = useLocale() as Locale;
  const tp = useTranslations('product');

  return (
    <section className="py-12 border-t border-border">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">{tp('reviews')}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className={j < Math.floor(rating) ? 'fill-coral text-coral' : 'text-muted'}
                  />
                ))}
              </div>
              <span className="text-sm text-muted">
                {rating} ({tp('reviewsCount', { count: reviewCount })})
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-6">
        {reviews.slice(0, 4).map((review, i) => (
          <ScrollReveal key={review.id} delay={i * 0.1}>
            <div className="bg-surface-light rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
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
                <span className="ms-auto text-xs text-muted">{review.date}</span>
              </div>
              <p className="text-sm text-muted">{review.comment[locale]}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
