'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import type { Locale } from '@/i18n/config';

export function ShopTheLook() {
  const t = useTranslations('home');
  const locale = useLocale() as Locale;
  // Abaya Hoodie + Compression Leggings + Sports Hijab = a complete outfit
  const lookItems = [products[6], products[4], products[2]];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {t('shopTheLookTitle')}
          </h2>
          <p className="text-muted text-lg">{t('shopTheLookSubtitle')}</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <ScrollReveal direction="left">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src={products[6].images[0]}
              alt="Shop the look"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-4">
            {lookItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ x: locale === 'ar' ? -8 : 8 }}
                className="flex items-center gap-4 bg-surface border border-border rounded-xl p-4 group"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.images[0]}
                    alt={item.name[locale]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name[locale]}</h3>
                  <p className="text-coral font-bold">
                    {item.salePrice ? (
                      <>
                        <span>{formatPrice(item.salePrice)}</span>
                        <span className="text-muted line-through ms-2 text-sm">
                          {formatPrice(item.price)}
                        </span>
                      </>
                    ) : (
                      formatPrice(item.price)
                    )}
                  </p>
                </div>
                <Link
                  href={`/${locale}/shop/${item.slug}`}
                  className="p-3 rounded-full gradient-coral-teal text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ShoppingBag size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
