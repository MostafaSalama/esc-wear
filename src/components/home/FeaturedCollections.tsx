'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { products } from '@/lib/products';

const collections = [
  {
    key: 'abayas',
    productIndex: 6,
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    key: 'tops',
    productIndex: 0,
    span: '',
  },
  {
    key: 'bottoms',
    productIndex: 1,
    span: '',
  },
  {
    key: 'hijabs',
    productIndex: 2,
    span: '',
  },
  {
    key: 'accessories',
    productIndex: 3,
    span: '',
  },
];

export function FeaturedCollections() {
  const t = useTranslations('home');
  const ts = useTranslations('shop.categories');
  const locale = useLocale();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {t('featuredTitle')}
          </h2>
          <p className="text-muted text-lg">{t('featuredSubtitle')}</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {collections.map((col, i) => {
          const product = products[col.productIndex];
          const image = product?.images[0] || '';

          return (
            <ScrollReveal key={col.key} delay={i * 0.1} className={col.span}>
              <Link href={`/${locale}/shop?category=${col.key}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto md:h-full min-h-[250px] cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={ts(col.key as any)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 start-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{ts(col.key as any)}</h3>
                    <span className="text-sm text-white/70 group-hover:text-coral transition-colors">
                      {t('featuredSubtitle')} →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
