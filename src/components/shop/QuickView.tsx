'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Star } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/lib/products';
import type { Locale } from '@/i18n/config';

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickView({ product, onClose }: QuickViewProps) {
  const locale = useLocale() as Locale;
  const tc = useTranslations('common');
  const tp = useTranslations('product');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const addToCart = useStore((s) => s.addToCart);
  const setCartOpen = useStore((s) => s.setCartOpen);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart({
      productId: product.id,
      name: product.name[locale],
      price: product.salePrice || product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
    });
    onClose();
    setCartOpen(true);
  };

  return (
    <Modal isOpen={!!product} onClose={onClose} className="max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        <div className="relative aspect-[3/4]">
          <Image
            src={product.images[0]}
            alt={product.name[locale]}
            fill
            className="object-cover sm:rounded-s-2xl"
            sizes="300px"
          />
        </div>
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-1">{product.name[locale]}</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className={j < Math.floor(product.rating) ? 'fill-coral text-coral' : 'text-muted'}
                />
              ))}
            </div>
            <span className="text-xs text-muted">({product.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            {product.salePrice ? (
              <>
                <span className="text-xl font-bold text-coral">{formatPrice(product.salePrice)}</span>
                <span className="text-muted line-through">{formatPrice(product.price)}</span>
              </>
            ) : (
              <span className="text-xl font-bold">{formatPrice(product.price)}</span>
            )}
          </div>

          <p className="text-sm text-muted mb-4 line-clamp-3">{product.description[locale]}</p>

          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">{tp('selectSize')}</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 rounded-lg border text-sm transition-colors cursor-pointer ${
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

          <div className="mb-6">
            <p className="text-sm font-semibold mb-2">{tp('selectColor')}</p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer ${
                    selectedColor === color.name ? 'border-coral scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto flex gap-3">
            <Button
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
              className="flex-1"
            >
              {tc('addToCart')}
            </Button>
            <Link href={`/${locale}/shop/${product.slug}`} onClick={onClose}>
              <Button variant="outline">{tp('details')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
