'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { SlidersHorizontal } from 'lucide-react';
import { getProductsByCategory, type Category } from '@/lib/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { FilterSidebar } from '@/components/shop/FilterSidebar';
import { SortDropdown, type SortOption } from '@/components/shop/SortDropdown';
import { QuickView } from '@/components/shop/QuickView';
import type { Product } from '@/lib/products';

export default function ShopPage() {
  const t = useTranslations('shop');
  const [category, setCategory] = useState<Category>('all');
  const [sort, setSort] = useState<SortOption>('newest');
  const [filterOpen, setFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let items = getProductsByCategory(category);
    switch (sort) {
      case 'price-low':
        items = [...items].sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        items = [...items].sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'bestselling':
        items = [...items].sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        items = [...items].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return items;
  }, [category, sort]);

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{t('title')}</h1>
        <p className="text-muted mt-2">{t('resultsCount', { count: filtered.length })}</p>
      </div>

      <div className="flex items-center justify-between mb-6 lg:hidden">
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm cursor-pointer"
        >
          <SlidersHorizontal size={16} />
          {t('showFilters')}
        </button>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="flex gap-8">
        <FilterSidebar
          selectedCategory={category}
          onCategoryChange={setCategory}
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
        />

        <div className="flex-1">
          <div className="hidden lg:flex justify-end mb-6">
            <SortDropdown value={sort} onChange={setSort} />
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl font-semibold text-muted">{t('noProducts')}</p>
              <button
                onClick={() => setCategory('all')}
                className="mt-4 text-coral font-semibold hover:underline cursor-pointer"
              >
                {t('clearFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
