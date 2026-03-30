'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';

export function MobileNav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const isOpen = useStore((s) => s.isMobileMenuOpen);
  const setOpen = useStore((s) => s.setMobileMenuOpen);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/shop`, label: t('shop') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          <nav className="relative flex flex-col items-center justify-center h-full gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-extrabold tracking-tight hover:text-coral transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
