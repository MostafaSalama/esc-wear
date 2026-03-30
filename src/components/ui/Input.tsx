'use client';

import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="relative w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'absolute transition-all duration-300 pointer-events-none text-muted',
              focused || props.value
                ? 'top-1 text-xs text-coral start-4'
                : 'top-1/2 -translate-y-1/2 text-base start-4'
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-surface-light border border-border rounded-xl px-4 text-foreground placeholder:text-muted transition-all duration-300 outline-none',
            label ? 'pt-6 pb-2' : 'py-3',
            focused && 'border-coral ring-1 ring-coral/30',
            error && 'border-coral',
            className
          )}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-coral">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
