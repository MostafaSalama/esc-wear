'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShoppingBag, PartyPopper } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

type Step = 'shipping' | 'payment' | 'success';

export default function CheckoutPage() {
  const t = useTranslations('checkout');
  const tc = useTranslations('common');
  const locale = useLocale();
  const { cart, total, clearCart } = useCart();
  const [step, setStep] = useState<Step>('shipping');

  const steps: { id: Step; label: string }[] = [
    { id: 'shipping', label: t('shipping') },
    { id: 'payment', label: t('payment') },
  ];

  const handlePlaceOrder = () => {
    setStep('success');
    clearCart();
  };

  if (step === 'success') {
    return (
      <div className="pt-28 pb-16 px-4 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="text-center max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', damping: 15 }}
            className="w-20 h-20 gradient-coral-teal rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <PartyPopper size={36} className="text-white" />
          </motion.div>
          <h1 className="text-3xl font-extrabold mb-2">{t('successTitle')}</h1>
          <p className="text-muted mb-2">{t('successMessage')}</p>
          <p className="text-sm text-muted mb-8">
            {t('orderNumber')}: <span className="font-bold text-foreground">#ESC-{Date.now().toString().slice(-6)}</span>
          </p>
          <Link href={`/${locale}/shop`}>
            <Button magnetic>{tc('continueShopping')}</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-28 pb-16 px-4 min-h-screen flex flex-col items-center justify-center text-center">
        <ShoppingBag size={64} className="text-muted mb-4" />
        <h1 className="text-2xl font-bold mb-2">No items to checkout</h1>
        <Link href={`/${locale}/shop`}>
          <Button>{tc('continueShopping')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">{t('title')}</h1>

      {/* Progress bar */}
      <div className="flex items-center gap-4 mb-12">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-3 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step === s.id
                  ? 'gradient-coral-teal text-white'
                  : steps.indexOf(steps.find((st) => st.id === step)!) > i
                    ? 'bg-teal text-white'
                    : 'bg-surface-light text-muted'
              }`}
            >
              {steps.indexOf(steps.find((st) => st.id === step)!) > i ? <Check size={14} /> : i + 1}
            </div>
            <span className={`text-sm font-semibold ${step === s.id ? 'text-foreground' : 'text-muted'}`}>
              {s.label}
            </span>
            {i < steps.length - 1 && <div className="flex-1 h-px bg-border" />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {step === 'shipping' && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Input label={t('firstName')} />
                  <Input label={t('lastName')} />
                </div>
                <Input label={t('email')} type="email" />
                <Input label={t('phone')} type="tel" />
                <Input label={t('address')} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label={t('city')} />
                  <Input label={t('zipCode')} />
                </div>
                <Input label={t('country')} />
                <Button onClick={() => setStep('payment')} size="lg" className="w-full mt-4" magnetic>
                  {t('payment')}
                </Button>
              </motion.div>
            )}

            {step === 'payment' && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="bg-surface-light border border-border rounded-2xl p-6">
                  <p className="text-sm text-muted mb-4">Payment simulation (demo mode)</p>
                  <Input label="Card Number" placeholder="4242 4242 4242 4242" />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Input label="Expiry" placeholder="MM/YY" />
                    <Input label="CVC" placeholder="123" />
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep('shipping')} size="lg">
                    {t('shipping')}
                  </Button>
                  <Button onClick={handlePlaceOrder} size="lg" className="flex-1" magnetic>
                    {t('placeOrder')}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-28 bg-surface border border-border rounded-2xl p-6">
            <h2 className="font-bold mb-4">{t('review')}</h2>
            <div className="space-y-3 mb-4">
              {cart.map((item) => (
                <div key={`${item.productId}-${item.size}`} className="flex gap-3">
                  <div className="relative w-14 h-18 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{item.name}</p>
                    <p className="text-xs text-muted">{item.size} / {item.color} x{item.quantity}</p>
                  </div>
                  <span className="text-sm font-bold">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">{tc('subtotal')}</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">{tc('shipping')}</span>
                <span className="text-teal">{tc('freeShipping')}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span>{tc('total')}</span>
                <span className="gradient-text">{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
