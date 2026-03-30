'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function CartDrawer() {
  const t = useTranslations('cart');
  const tc = useTranslations('common');
  const locale = useLocale();
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, total, count } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setCartOpen(false)}
          />
          <motion.div
            initial={{ x: locale === 'ar' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: locale === 'ar' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 end-0 h-full w-full max-w-md bg-surface border-s border-border z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold">{t('title')} ({count})</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 rounded-full hover:bg-surface-light transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
                <ShoppingBag size={48} className="text-muted" />
                <p className="text-lg font-semibold">{t('empty')}</p>
                <p className="text-sm text-muted">{t('emptyDescription')}</p>
                <Button onClick={() => setCartOpen(false)} variant="outline">
                  {t('continueShopping')}
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <AnimatePresence mode="popLayout">
                    {cart.map((item) => (
                      <motion.div
                        key={`${item.productId}-${item.size}-${item.color}`}
                        layout
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50, height: 0 }}
                        className="flex gap-4 bg-surface-light rounded-xl p-3"
                      >
                        <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold truncate">{item.name}</h3>
                          <p className="text-xs text-muted mt-0.5">
                            {item.size} / {item.color}
                          </p>
                          <p className="text-sm font-bold text-coral mt-1">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.size, item.color, item.quantity - 1)
                              }
                              className="p-1 rounded-md hover:bg-surface-lighter transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.size, item.color, item.quantity + 1)
                              }
                              className="p-1 rounded-md hover:bg-surface-lighter transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.productId, item.size, item.color)}
                          className="self-start p-1 text-muted hover:text-coral transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>{tc('total')}</span>
                    <span className="gradient-text">{formatPrice(total)}</span>
                  </div>
                  <Link href={`/${locale}/checkout`} onClick={() => setCartOpen(false)}>
                    <Button className="w-full" size="lg" magnetic>
                      {t('checkoutCta')}
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
