import fs from 'fs';
import path from 'path';

const data = JSON.parse(fs.readFileSync('scripts/fetched-products.json', 'utf8'));

const categoryMap = {
  22: 'tops',     // Long Sleeve Compression T-shirt
  23: 'bottoms',  // Performance High-Rise Flare Pants
  24: 'hijabs',   // Performance Vented Sports Hijab
  25: 'accessories', // Performance Hip-Cover Wrap
  26: 'bottoms',  // Pro-Performance Compression Leggings
  27: 'tops',     // Modest Tracksuit Top
  28: 'abayas',   // Elite Performance Abaya Hoodie
  29: 'bottoms',  // Relaxed Performance Pants
  32: 'tops',     // Signature Long-Sleeve T-shirt
  33: 'bottoms',  // Modest Tracksuit Pants
};

const bestsellers = ['28', '22', '26', '24', '27'];
const newArrivals = ['33', '23', '32', '25'];

function cleanDesc(d) {
  return d.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

function extractFeatures(desc) {
  const lines = desc.split(/[\r\n]+/).filter(l => l.trim().startsWith('-') || l.trim().startsWith('•'));
  return lines.slice(0, 5).map(l => l.replace(/^[\s\-•]+/, '').trim()).filter(Boolean);
}

let ts = `export interface Product {
  id: string;
  slug: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: number;
  salePrice?: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  category: string;
  rating: number;
  reviewCount: number;
  isBestseller: boolean;
  isNew: boolean;
  features: { en: string[]; ar: string[] };
  fabric: { en: string; ar: string };
  stockQuantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: { en: string; ar: string };
  avatar: string;
}

export const categories = [
  'all', 'tops', 'bottoms', 'abayas', 'hijabs', 'accessories',
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [\n`;

for (const p of data) {
  const cat = categoryMap[Number(p.id)] || 'tops';
  const isBs = bestsellers.includes(p.id);
  const isNew = newArrivals.includes(p.id);
  const enFeats = extractFeatures(p.description);
  const arFeats = extractFeatures(p.description_ar);
  const rating = 4.5 + Math.random() * 0.5;
  const reviews = 40 + Math.floor(Math.random() * 160);

  // Fix slug with spaces/special chars
  const slug = p.slug.replace(/\s+/g, '-').replace(/[‑]/g, '-').toLowerCase();

  ts += `  {
    id: '${p.id}',
    slug: '${slug}',
    name: { en: ${JSON.stringify(p.name.replace(/[‑]/g, '-'))}, ar: ${JSON.stringify(p.name_ar.trim())} },
    description: {
      en: ${JSON.stringify(cleanDesc(p.description))},
      ar: ${JSON.stringify(cleanDesc(p.description_ar))},
    },
    price: ${parseFloat(p.price)},${p.sale_price ? `\n    salePrice: ${parseFloat(p.sale_price)},` : ''}
    images: ${JSON.stringify(p.all_images)},
    sizes: ${JSON.stringify(p.sizes.map(s => s.trim()))},
    colors: ${JSON.stringify(p.colors.map(c => ({ name: c.value.trim(), hex: c.hex })))},
    category: '${cat}',
    rating: ${rating.toFixed(1)},
    reviewCount: ${reviews},
    isBestseller: ${isBs},
    isNew: ${isNew},
    features: {
      en: ${JSON.stringify(enFeats)},
      ar: ${JSON.stringify(arFeats)},
    },
    fabric: { en: 'Performance Knit — technical blend', ar: 'قماش Performance Knit تقني' },
    stockQuantity: ${p.stock_quantity},
  },\n`;
}

ts += `];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    date: '2026-03-15',
    comment: {
      en: 'Finally sportswear that actually stays in place during my workouts! The hijab is a game-changer.',
      ar: 'أخيراً ملابس رياضية تبقى في مكانها أثناء تمريناتي! الحجاب غيّر كل شيء.',
    },
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Fatima K.',
    rating: 5,
    date: '2026-03-10',
    comment: {
      en: 'The quality is unmatched. I own the full tracksuit set and the compression tee — the coverage is perfect.',
      ar: 'الجودة لا مثيل لها. أملك طقم التراكسوت الكامل وتيشيرت الضغط — التغطية مثالية.',
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Noor A.',
    rating: 4,
    date: '2026-02-28',
    comment: {
      en: 'Love the compression leggings — completely squat-proof! The abaya hoodie is such a unique piece.',
      ar: 'أحب ليغينغ الضغط — مقاوم تماماً للشفافية! عباية الهودي قطعة فريدة.',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  },
  {
    id: '4',
    name: 'Aisha R.',
    rating: 5,
    date: '2026-02-20',
    comment: {
      en: 'The tracksuit set is EVERYTHING. Looks amazing and feels so comfortable. Best purchase this year!',
      ar: 'طقم التراكسوت رائع! يبدو مذهلاً ومريح جداً. أفضل شراء هذا العام!',
    },
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop',
  },
  {
    id: '5',
    name: 'Mariam H.',
    rating: 5,
    date: '2026-02-15',
    comment: {
      en: 'I train 5 days a week and these hold up perfectly. The fabric quality is outstanding.',
      ar: 'أتدرب 5 أيام في الأسبوع وهذه الملابس تصمد بشكل مثالي. جودة القماش ممتازة.',
    },
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isBestseller);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}
`;

fs.writeFileSync('src/lib/products.ts', ts);
console.log('Generated src/lib/products.ts with local images!');
