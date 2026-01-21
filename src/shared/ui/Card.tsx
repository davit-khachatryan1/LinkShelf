import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue' | 'purple' | 'green' | 'pink' | 'orange';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900/80 dark:hover:border-gray-700 dark:hover:bg-gray-900',
      blue: 'border-blue-200 bg-blue-50/50 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-500/40 dark:bg-gray-900/90 dark:hover:border-blue-500/60 dark:hover:bg-gray-900 dark:hover:shadow-blue-500/20',
      purple: 'border-purple-200 bg-purple-50/50 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-500/40 dark:bg-gray-900/90 dark:hover:border-purple-500/60 dark:hover:bg-gray-900 dark:hover:shadow-purple-500/20',
      green: 'border-green-200 bg-green-50/50 hover:border-green-300 hover:bg-green-50 dark:border-green-500/40 dark:bg-gray-900/90 dark:hover:border-green-500/60 dark:hover:bg-gray-900 dark:hover:shadow-green-500/20',
      pink: 'border-pink-200 bg-pink-50/50 hover:border-pink-300 hover:bg-pink-50 dark:border-pink-500/40 dark:bg-gray-900/90 dark:hover:border-pink-500/60 dark:hover:bg-gray-900 dark:hover:shadow-pink-500/20',
      orange: 'border-orange-200 bg-orange-50/50 hover:border-orange-300 hover:bg-orange-50 dark:border-orange-500/40 dark:bg-gray-900/90 dark:hover:border-orange-500/60 dark:hover:bg-gray-900 dark:hover:shadow-orange-500/20',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border backdrop-blur-sm shadow-xl transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
