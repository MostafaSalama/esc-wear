'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/products';
import type { Locale } from '@/i18n/config';

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, index = 0, onQuickView }: ProductCardProps) {
  const locale = useLocale() as Locale;
  const tc = useTranslations('common');
  const ts = useTranslations('shop');
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const wishlist = useStore((s) => s.wishlist);
  const isWished = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group"
    >
      <Link href={`/${locale}/shop/${product.slug}`}>
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface mb-3">
          <Image
            src={product.images[0]}
            alt={product.name[locale]}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          <div className="absolute top-3 start-3 flex flex-col gap-2">
            {product.isNew && <Badge variant="new">{tc('new')}</Badge>}
            {product.salePrice && <Badge variant="sale">{tc('sale')}</Badge>}
            {product.isBestseller && <Badge variant="bestseller">{tc('bestseller')}</Badge>}
          </div>

          <div className="absolute top-3 end-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
              className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                isWished ? 'bg-coral text-white' : 'bg-white/20 text-white hover:bg-white/40'
              }`}
            >
              <Heart size={16} fill={isWished ? 'currentColor' : 'none'} />
            </motion.button>
            {onQuickView && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  onQuickView(product);
                }}
                className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
              >
                <Eye size={16} />
              </motion.button>
            )}
          </div>

          <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView?.(product);
              }}
              className="w-full py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-coral hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} />
              {ts('quickView')}
            </button>
          </div>
        </div>
      </Link>

      <div className="px-1">
        <h3 className="font-semibold text-sm truncate">{product.name[locale]}</h3>
        <div className="flex items-center gap-2 mt-1">
          {product.salePrice ? (
            <>
              <span className="text-coral font-bold">{formatPrice(product.salePrice)}</span>
              <span className="text-muted text-sm line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="font-bold">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
