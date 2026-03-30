'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={switchLocale}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-coral/50 transition-colors text-sm font-semibold cursor-pointer"
    >
      <span className={locale === 'en' ? 'text-coral' : 'text-muted'}>EN</span>
      <span className="text-border-light">/</span>
      <span className={locale === 'ar' ? 'text-coral' : 'text-muted'}>عر</span>
    </motion.button>
  );
}
