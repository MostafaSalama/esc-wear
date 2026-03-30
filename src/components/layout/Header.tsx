'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '@/lib/store';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const cartCount = useStore((s) => s.cartCount);
  const toggleCart = useStore((s) => s.toggleCart);
  const isMobileMenuOpen = useStore((s) => s.isMobileMenuOpen);
  const setMobileMenuOpen = useStore((s) => s.setMobileMenuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/shop`, label: t('shop') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}`}
              className="text-2xl font-extrabold tracking-tighter"
            >
              <span className="gradient-text">ESC</span>
              <span className="text-foreground"> WEAR</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-muted hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 start-0 w-0 h-0.5 gradient-coral-teal transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <button
                onClick={() => toggleCart()}
                className="relative p-2 rounded-full hover:bg-surface-light transition-colors"
              >
                <ShoppingBag size={20} />
                <AnimatePresence>
                  {cartCount() > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -end-1 w-5 h-5 gradient-coral-teal rounded-full text-[10px] font-bold flex items-center justify-center text-white"
                    >
                      {cartCount()}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                className="md:hidden p-2 rounded-full hover:bg-surface-light transition-colors"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav />
    </>
  );
}
