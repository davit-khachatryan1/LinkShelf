import { motion } from 'framer-motion';
import { SiteCard } from './SiteCard';
import { Site } from '../../shared/types';
import { staggerContainer, staggerItem } from '../../shared/lib/motion';

interface SiteListProps {
  sites: Site[];
}

export const SiteList = ({ sites }: SiteListProps) => {
  if (sites.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">No sites found.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {sites.map((site) => (
        <motion.div key={site.id} variants={staggerItem} className="h-full">
          <SiteCard site={site} />
        </motion.div>
      ))}
    </motion.div>
  );
};
