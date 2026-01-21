import { motion } from 'framer-motion';
import { CategoryCard } from './CategoryCard';
import { Category } from '../../shared/types';
import { staggerContainer, staggerItem } from '../../shared/lib/motion';

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid = ({ categories }: CategoryGridProps) => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {categories.map((category) => (
        <motion.div key={category.id} variants={staggerItem} className="h-full">
          <CategoryCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
};
