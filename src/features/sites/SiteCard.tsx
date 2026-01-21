import { motion } from 'framer-motion';
import { Card } from '../../shared/ui/Card';
import { Badge } from '../../shared/ui/Badge';
import { Button } from '../../shared/ui/Button';
import { Site } from '../../shared/types';
import { getDomain } from '../../shared/lib/utils';
import { cardHover, cardTap } from '../../shared/lib/motion';

interface SiteCardProps {
  site: Site;
}

const cardVariants = ['blue', 'purple', 'green', 'pink', 'orange'] as const;

export const SiteCard = ({ site }: SiteCardProps) => {
  const domain = getDomain(site.url);
  // Cycle through variants based on site ID
  const variantIndex = site.id.charCodeAt(0) % cardVariants.length;
  const variant = cardVariants[variantIndex] as 'blue' | 'purple' | 'green' | 'pink' | 'orange';

  return (
    <motion.div
      whileHover={cardHover}
      whileTap={cardTap}
      className="h-full"
    >
      <Card variant={variant} className="group p-6 hover:shadow-2xl transition-all duration-300">
        <div className="flex h-full flex-col">
          <div className="mb-3 flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="mb-1 text-lg font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {site.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {domain}
              </p>
            </div>
            {site.isFeatured && (
              <Badge className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black shadow-md shrink-0 font-bold dark:from-yellow-500 dark:to-orange-500">
                ⭐ Featured
              </Badge>
            )}
          </div>
          
          <p className="mb-4 flex-1 text-sm text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed min-h-[4.5rem]">
            {site.description}
          </p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {site.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                className="bg-gray-200 text-gray-700 text-xs font-medium border border-gray-300 dark:bg-gray-800/80 dark:text-gray-300 dark:border-gray-700/50"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded-xl mt-auto"
          >
            <Button variant="primary" size="sm" className="w-full">
              Visit Site →
            </Button>
          </a>
        </div>
      </Card>
    </motion.div>
  );
};
