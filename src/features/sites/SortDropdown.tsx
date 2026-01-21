import { SelectHTMLAttributes } from 'react';
import { SortOption } from '../../shared/lib/utils';
import { cn } from '../../shared/lib/utils';

interface SortDropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortDropdown = ({ value, onChange, className, ...props }: SortDropdownProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
      className={cn(
        'rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 shadow-sm hover:shadow-md focus:shadow-lg',
        'dark:border-gray-800 dark:bg-gray-900/50 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500/30',
        className
      )}
      aria-label="Sort sites"
      {...props}
    >
      <option value="popular" className="bg-white dark:bg-gray-900">Popular</option>
      <option value="new" className="bg-white dark:bg-gray-900">New</option>
      <option value="a-z" className="bg-white dark:bg-gray-900">A-Z</option>
    </select>
  );
};
