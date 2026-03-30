'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'bestselling';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const t = useTranslations('shop');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options: { value: SortOption; label: string }[] = [
    { value: 'newest', label: t('sortNewest') },
    { value: 'price-low', label: t('sortPriceLow') },
    { value: 'price-high', label: t('sortPriceHigh') },
    { value: 'bestselling', label: t('sortBestselling') },
  ];

  const selectedLabel = options.find((o) => o.value === value)?.label;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border hover:border-coral/50 transition-colors text-sm cursor-pointer"
      >
        {t('sortBy')}: <span className="font-semibold">{selectedLabel}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full end-0 mt-2 w-48 bg-surface border border-border rounded-xl overflow-hidden shadow-xl z-20"
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`block w-full text-start px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                  value === opt.value
                    ? 'bg-coral/10 text-coral font-semibold'
                    : 'hover:bg-surface-light'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
