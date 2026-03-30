import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/products';
import { ImageGallery } from '@/components/product/ImageGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ReviewSection } from '@/components/product/ReviewSection';
import { RelatedProducts } from '@/components/product/RelatedProducts';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug, locale } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <ImageGallery images={product.images} alt={product.name[locale as 'en' | 'ar']} />
        <ProductInfo product={product} />
      </div>

      <ReviewSection rating={product.rating} reviewCount={product.reviewCount} />
      <RelatedProducts currentProduct={product} />
    </div>
  );
}
