'use client';

import { useTranslations } from 'next-intl';
import { products, type Product } from '@/lib/products';
import { ProductCard } from '@/components/shop/ProductCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface RelatedProductsProps {
  currentProduct: Product;
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const tp = useTranslations('product');

  const related = products
    .filter((p) => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, 4);

  const filler = related.length < 4
    ? products.filter((p) => p.id !== currentProduct.id && !related.includes(p)).slice(0, 4 - related.length)
    : [];

  const all = [...related, ...filler];

  if (all.length === 0) return null;

  return (
    <section className="py-16">
      <ScrollReveal>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">
          {tp('relatedProducts')}
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {all.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
