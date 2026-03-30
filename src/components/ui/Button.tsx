'use client';

import { forwardRef, useRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'gradient-coral-teal text-white hover:shadow-[0_0_30px_rgba(255,77,77,0.4)] active:scale-[0.97]',
  secondary:
    'bg-surface-light text-foreground hover:bg-surface-lighter border border-border active:scale-[0.97]',
  outline:
    'bg-transparent border-2 border-coral text-coral hover:bg-coral hover:text-white active:scale-[0.97]',
  ghost:
    'bg-transparent text-foreground hover:bg-surface-light active:scale-[0.97]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', magnetic = false, className, children, ...props }, ref) => {
    const btnRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!magnetic || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.3);
      y.set((e.clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={btnRef}
        style={magnetic ? { x: springX, y: springY } : undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn('inline-block', className)}
      >
        <button
          ref={ref}
          className={cn(
            'relative w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none',
            variantStyles[variant],
            sizeStyles[size],
          )}
          {...props}
        >
          {children}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';
