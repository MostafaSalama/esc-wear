'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { categories, type Category } from '@/lib/products';

interface FilterSidebarProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  isOpen: boolean;
  onClose: () => void;
}

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  isOpen,
  onClose,
}: FilterSidebarProps) {
  const t = useTranslations('shop');
  const tc = useTranslations('shop.categories');

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-28">
          <h3 className="font-bold text-lg mb-6">{t('filterBy')}</h3>

          <div className="mb-8">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">
              {t('category')}
            </h4>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`block w-full text-start px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-coral/10 text-coral font-semibold'
                      : 'text-muted hover:text-foreground hover:bg-surface-light'
                  }`}
                >
                  {tc(cat as any)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">
              {t('size')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className="px-3 py-1.5 rounded-lg border border-border text-sm hover:border-coral hover:text-coral transition-colors cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-0 start-0 h-full w-80 bg-surface border-e border-border p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg">{t('filterBy')}</h3>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-light">
                  <X size={20} />
                </button>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">
                  {t('category')}
                </h4>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        onCategoryChange(cat);
                        onClose();
                      }}
                      className={`block w-full text-start px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-coral/10 text-coral font-semibold'
                          : 'text-muted hover:text-foreground hover:bg-surface-light'
                      }`}
                    >
                      {tc(cat as any)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted mb-3">
                  {t('size')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1.5 rounded-lg border border-border text-sm hover:border-coral hover:text-coral transition-colors cursor-pointer"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
