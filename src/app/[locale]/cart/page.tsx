'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function CartPage() {
  const t = useTranslations('cart');
  const tc = useTranslations('common');
  const locale = useLocale();
  const { cart, removeFromCart, updateQuantity, total, count } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-28 pb-16 px-4 min-h-screen flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-4"
        >
          <ShoppingBag size={64} className="text-muted mx-auto" />
          <h1 className="text-3xl font-extrabold">{t('empty')}</h1>
          <p className="text-muted">{t('emptyDescription')}</p>
          <Link href={`/${locale}/shop`}>
            <Button magnetic>{t('continueShopping')}</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollReveal>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">{t('title')}</h1>
        <p className="text-muted mb-8">{t('itemCount', { count })}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <motion.div
                key={`${item.productId}-${item.size}-${item.color}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -200 }}
                className="flex gap-4 sm:gap-6 bg-surface border border-border rounded-2xl p-4"
              >
                <div className="relative w-24 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="128px" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-sm text-muted mt-0.5">{item.size} / {item.color}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId, item.size, item.color)}
                      className="p-1 text-muted hover:text-coral transition-colors self-start"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-surface-light rounded-xl px-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                        className="p-2 hover:text-coral transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-semibold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                        className="p-2 hover:text-coral transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-lg font-bold text-coral">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-surface border border-border rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-bold">{t('orderSummary')}</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">{tc('subtotal')}</span>
                <span className="font-semibold">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">{tc('shipping')}</span>
                <span className="text-teal font-semibold">{tc('freeShipping')}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-lg">
                <span className="font-bold">{tc('total')}</span>
                <span className="font-extrabold gradient-text">{formatPrice(total)}</span>
              </div>
            </div>
            <Link href={`/${locale}/checkout`}>
              <Button size="lg" magnetic className="w-full mt-4">
                {t('checkoutCta')} <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
