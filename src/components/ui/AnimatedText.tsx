'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  as: Tag = 'h1',
}: AnimatedTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn('flex flex-wrap', className)}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block me-[0.3em]">
          {Tag === 'h1' || Tag === 'h2' || Tag === 'h3' ? (
            <Tag className="inline">{word}</Tag>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </motion.div>
  );
}
