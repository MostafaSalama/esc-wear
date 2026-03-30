import { cn } from '@/lib/utils';

type BadgeVariant = 'new' | 'sale' | 'bestseller';

const variantStyles: Record<BadgeVariant, string> = {
  new: 'bg-teal text-black',
  sale: 'bg-coral text-white',
  bestseller: 'bg-white text-black',
};

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
