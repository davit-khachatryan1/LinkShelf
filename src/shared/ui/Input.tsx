import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'flex w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 shadow-sm hover:shadow-md focus:shadow-lg',
          'dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500/30',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
