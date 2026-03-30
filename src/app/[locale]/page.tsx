import { Hero } from '@/components/home/Hero';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { ShopTheLook } from '@/components/home/ShopTheLook';
import { BrandStory } from '@/components/home/BrandStory';
import { Testimonials } from '@/components/home/Testimonials';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ShopTheLook />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
