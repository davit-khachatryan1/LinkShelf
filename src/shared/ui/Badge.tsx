import { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {}

export const Badge = ({ className, children, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        'bg-gray-100 text-gray-800 border border-gray-200 shadow-sm',
        'dark:bg-gray-900/80 dark:text-gray-300 dark:border-gray-700/50 dark:backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
