import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';

const BASE = 'https://escwear.com';
const IDS = [22, 23, 24, 25, 26, 27, 28, 29, 32, 33];
const OUT_DIR = path.resolve('public/products');

async function downloadImage(url, destPath) {
  const dir = path.dirname(destPath);
  fs.mkdirSync(dir, { recursive: true });

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);

  const contentType = res.headers.get('content-type') || '';
  let ext = '.jpg';
  if (contentType.includes('png')) ext = '.png';
  else if (contentType.includes('webp')) ext = '.webp';

  const finalPath = destPath.endsWith('.') ? destPath.slice(0, -1) + ext : destPath + ext;

  const fileStream = fs.createWriteStream(finalPath);
  await pipeline(Readable.fromWeb(res.body), fileStream);

  console.log(`  Downloaded: ${path.basename(finalPath)} (${contentType})`);
  return '/' + path.relative('public', finalPath).replace(/\\/g, '/');
}

async function fetchProduct(id) {
  const res = await fetch(`${BASE}/api/products/${id}`);
  const json = await res.json();
  if (!json.success) throw new Error(`API error for product ${id}`);
  return json.data;
}

async function main() {
  console.log('Fetching all products and downloading images...\n');

  const allProducts = [];

  for (const id of IDS) {
    console.log(`--- Product ${id} ---`);
    const data = await fetchProduct(id);
    console.log(`  Name: ${data.name}`);

    const productDir = path.join(OUT_DIR, String(id));
    fs.mkdirSync(productDir, { recursive: true });

    // Download main image
    const mainImageUrl = BASE + data.main_image;
    const mainFileName = path.basename(data.main_image);
    const mainLocalPath = await downloadImage(mainImageUrl, path.join(productDir, 'main_' + mainFileName));

    // Download additional images
    const additionalPaths = [];
    if (data.images && data.images.length > 0) {
      for (let i = 0; i < data.images.length; i++) {
        const img = data.images[i];
        const imgUrl = BASE + img.image_url;
        const imgFileName = path.basename(img.image_url);
        try {
          const localPath = await downloadImage(imgUrl, path.join(productDir, `img${i}_${imgFileName}`));
          additionalPaths.push(localPath);
        } catch (e) {
          console.log(`  SKIP: ${imgFileName} - ${e.message}`);
        }
      }
    }

    // Extract sizes and colors from variants
    const sizes = data.variants?.size?.map(s => s.size_value) || [];
    const colors = data.variants?.color?.map(c => ({
      value: c.color_value,
      hex: c.hex,
    })) || [];

    allProducts.push({
      id: String(data.id),
      slug: data.slug,
      name: data.name,
      name_ar: data.name_ar,
      description: data.description,
      description_ar: data.description_ar,
      price: data.price,
      sale_price: data.sale_price,
      category_id: data.category_id,
      category_slug: data.category?.slug || null,
      main_image_local: mainLocalPath,
      additional_images_local: additionalPaths,
      all_images: [mainLocalPath, ...additionalPaths],
      sizes,
      colors,
      stock_quantity: data.stock_quantity,
      is_featured: data.is_featured,
      views_count: data.views_count,
    });

    console.log(`  Images: 1 main + ${additionalPaths.length} additional\n`);
  }

  // Write the fetched data as JSON for reference
  const outFile = path.resolve('scripts/fetched-products.json');
  fs.writeFileSync(outFile, JSON.stringify(allProducts, null, 2));
  console.log(`\nDone! Wrote fetched data to ${outFile}`);
  console.log(`Images saved to ${OUT_DIR}/`);
}

main().catch(console.error);
