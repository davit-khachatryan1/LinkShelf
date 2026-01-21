import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories, sites } from '../data/links';
import { SiteList } from '../features/sites/SiteList';
import { SortDropdown } from '../features/sites/SortDropdown';
import { SortOption, sortSites } from '../shared/lib/utils';

export const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('popular');

  const category = useMemo(
    () => categories.find((cat) => cat.slug === slug),
    [slug]
  );

  const categorySites = useMemo(() => {
    if (!category) return [];
    return sites.filter((site) => site.categoryId === category.id);
  }, [category]);

  const sortedSites = useMemo(
    () => sortSites(categorySites, sortBy),
    [categorySites, sortBy]
  );

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Category Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          The category you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Category Header */}
      <div className="mb-10">
        <div className="mb-6 flex items-center space-x-4">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-6xl"
          >
            {category.icon}
          </motion.span>
          <div>
            <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {category.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-base text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-gray-900 dark:text-white">
            {sortedSites.length}
          </span>{' '}
          {sortedSites.length === 1 ? 'site' : 'sites'} found
        </p>
        <div className="flex items-center space-x-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-400">
            Sort by:
          </label>
          <SortDropdown value={sortBy} onChange={setSortBy} id="sort" />
        </div>
      </div>

      {/* Site List */}
      <SiteList sites={sortedSites} />
    </div>
  );
};
