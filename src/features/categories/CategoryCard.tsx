import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '../../shared/ui/Card';
import { Category } from '../../shared/types';
import { cardHover, cardTap } from '../../shared/lib/motion';

interface CategoryCardProps {
  category: Category;
}

const categoryVariants: Record<string, 'blue' | 'purple' | 'green' | 'pink' | 'orange'> = {
  'ai-news': 'blue',
  'web3-news': 'purple',
  'iot-news': 'green',
  'cybersecurity': 'pink',
  'product-hunt': 'orange',
  'design-inspiration': 'pink',
  'developer-tools': 'blue',
  'business-finance': 'green',
  'tech-learning': 'purple',
  'open-source': 'orange',
};

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const variant = categoryVariants[category.id] || 'blue';

  return (
    <motion.div
      whileHover={cardHover}
      whileTap={cardTap}
    >
      <Link
        to={`/category/${category.slug}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded-2xl"
      >
        <Card variant={variant} className="group h-full p-6 hover:shadow-2xl transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="mb-4 text-6xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {category.icon}
            </motion.div>
            <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
              {category.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {category.description}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
