'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:max-h-[600px]">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              selected === i ? 'border-coral' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>

      <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden bg-surface group cursor-crosshair">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[selected]}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-125"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
