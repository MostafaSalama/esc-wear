'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Truck, RotateCcw, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/products';
import type { Locale } from '@/i18n/config';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const locale = useLocale() as Locale;
  const tc = useTranslations('common');
  const tp = useTranslations('product');
  const th = useTranslations('home');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('description');
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);
  const toggleWishlist = useStore((s) => s.toggleWishlist);
  const wishlist = useStore((s) => s.wishlist);
  const isWished = wishlist.includes(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({
      productId: product.id,
      name: product.name[locale],
      price: product.salePrice || product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setCartOpen(true);
    }, 1000);
  };

  const accordions = [
    {
      id: 'description',
      title: tp('description'),
      content: product.description[locale],
    },
    {
      id: 'features',
      title: tp('features'),
      content: product.features[locale].map((f) => `• ${f}`).join('\n'),
    },
    {
      id: 'fabric',
      title: tp('fabricCare'),
      content: product.fabric[locale],
    },
  ];

  return (
    <div className="lg:sticky lg:top-28">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star
              key={j}
              size={16}
              className={j < Math.floor(product.rating) ? 'fill-coral text-coral' : 'text-muted'}
            />
          ))}
        </div>
        <span className="text-sm text-muted">
          {product.rating} ({tp('reviewsCount', { count: product.reviewCount })})
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
        {product.name[locale]}
      </h1>

      <div className="flex items-center gap-3 mb-6">
        {product.salePrice ? (
          <>
            <span className="text-3xl font-bold text-coral">{formatPrice(product.salePrice)}</span>
            <span className="text-xl text-muted line-through">{formatPrice(product.price)}</span>
            <span className="px-2 py-0.5 bg-coral/10 text-coral text-sm font-bold rounded-md">
              -{Math.round((1 - product.salePrice / product.price) * 100)}%
            </span>
          </>
        ) : (
          <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
        )}
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold mb-3">{tp('selectColor')}</p>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.hex}
              onClick={() => setSelectedColor(color.name)}
              className={`w-10 h-10 rounded-full border-2 transition-all cursor-pointer ${
                selectedColor === color.name
                  ? 'border-coral scale-110 ring-2 ring-coral/30'
                  : 'border-border hover:scale-105'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold">{tp('selectSize')}</p>
          <button className="text-xs text-coral hover:underline cursor-pointer">{tp('sizeGuide')}</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                selectedSize === size
                  ? 'border-coral bg-coral/10 text-coral'
                  : 'border-border hover:border-coral/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <Button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          size="lg"
          magnetic
          className="flex-1"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={added ? 'added' : 'add'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {added ? tc('addedToCart') : tc('addToCart')}
            </motion.span>
          </AnimatePresence>
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => toggleWishlist(product.id)}
          className={isWished ? 'border-coral text-coral' : ''}
        >
          <Heart size={20} fill={isWished ? 'currentColor' : 'none'} />
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-surface-light text-center">
          <Truck size={18} className="text-teal" />
          <span className="text-xs text-muted">{tc('freeShipping')}</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-surface-light text-center">
          <RotateCcw size={18} className="text-teal" />
          <span className="text-xs text-muted">{th('featureReturns')}</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-surface-light text-center">
          <Shield size={18} className="text-teal" />
          <span className="text-xs text-muted">{th('featureCoverage')}</span>
        </div>
      </div>

      <div className="border-t border-border">
        {accordions.map((acc) => (
          <div key={acc.id} className="border-b border-border">
            <button
              onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
              className="flex items-center justify-between w-full py-4 text-sm font-semibold cursor-pointer"
            >
              {acc.title}
              <ChevronDown
                size={16}
                className={`transition-transform ${openAccordion === acc.id ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openAccordion === acc.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted pb-4 whitespace-pre-line">{acc.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
