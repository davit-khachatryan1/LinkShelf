import { motion } from 'framer-motion';
import { Category } from '../../shared/types';
import { cn } from '../../shared/lib/utils';

interface HomeFiltersProps {
  selectedCategories: string[];
  categories: Category[];
  onCategoryToggle: (categoryId: string) => void;
  onSelectAll: () => void;
}

export const HomeFilters = ({
  selectedCategories,
  categories,
  onCategoryToggle,
  onSelectAll,
}: HomeFiltersProps) => {
  const allSelected = selectedCategories.length === categories.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-8 w-full"
    >
      <div className="mb-4 flex items-center justify-center">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filter by Category:
        </label>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onSelectAll}
            className={cn(
              'h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-all',
              'dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-blue-500'
            )}
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            All Categories
          </span>
        </label>

        {categories.map((category) => {
          const isChecked = selectedCategories.includes(category.id);
          return (
            <label
              key={category.id}
              className="flex items-center gap-2 cursor-pointer group px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onCategoryToggle(category.id)}
                className={cn(
                  'h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-all',
                  'dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-blue-500'
                )}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                <span>{category.icon}</span>
                {category.name}
              </span>
            </label>
          );
        })}
      </div>
    </motion.div>
  );
};
