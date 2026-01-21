import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CategoryGrid } from '../features/categories/CategoryGrid';
import { SiteList } from '../features/sites/SiteList';
import { HomeFilters } from '../features/sites/HomeFilters';
import { SearchBar } from '../features/search/SearchBar';
import { categories, sites } from '../data/links';
import { useSearch } from '../contexts/SearchContext';
import { sortSites } from '../shared/lib/utils';

export const Home = () => {
  const { searchResults, isSearching, setSearchResults, setIsSearching } = useSearch();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categories.map((c) => c.id) // Start with all categories selected
  );

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        // If unchecking, remove it
        const newSelection = prev.filter((id) => id !== categoryId);
        // If all unchecked, select all
        return newSelection.length === 0 ? categories.map((c) => c.id) : newSelection;
      } else {
        // If checking, add it
        return [...prev, categoryId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedCategories.length === categories.length) {
      // If all selected, deselect all (but keep at least one)
      setSelectedCategories([categories[0].id]);
    } else {
      // Select all
      setSelectedCategories(categories.map((c) => c.id));
    }
  };

  const handleSearch = (results: typeof sites) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  const featuredSites = useMemo(() => {
    let featured = sites.filter((site) => site.isFeatured);
    
    // Filter by selected categories
    if (selectedCategories.length < categories.length) {
      featured = featured.filter((site) => selectedCategories.includes(site.categoryId));
    }
    
    // Default sort by popular
    return sortSites(featured, 'popular').slice(0, 6);
  }, [selectedCategories]);

  const latestSites = useMemo(() => {
    let filtered = [...sites];
    
    // Filter by selected categories
    if (selectedCategories.length < categories.length) {
      filtered = filtered.filter((site) => selectedCategories.includes(site.categoryId));
    }
    
    // Default sort by new
    const sorted = sortSites(filtered, 'new');
    return sorted.slice(0, 6);
  }, [selectedCategories]);

  const selectedCategoryNames = useMemo(() => {
    return categories
      .filter((c) => selectedCategories.includes(c.id))
      .map((c) => c.name)
      .join(', ');
  }, [selectedCategories]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-5xl font-extrabold sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            LinkShelf
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          Curated websites organized by category. Discover the best resources across AI, Web3, IoT, and more.
        </motion.p>
        
        {/* Category Filter */}
        <HomeFilters
          selectedCategories={selectedCategories}
          categories={categories}
          onCategoryToggle={handleCategoryToggle}
          onSelectAll={handleSelectAll}
        />

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 mx-auto w-full"
        >
          <SearchBar onSearch={handleSearch} allSites={sites} />
        </motion.div>
      </div>

      {/* Search Results */}
      {isSearching && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Search Results
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              ({searchResults.length})
            </span>
          </h2>
          <SiteList sites={searchResults} />
        </motion.div>
      )}

      {/* Featured Section */}
      {!isSearching && featuredSites.length > 0 && (
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            ⭐ Featured Websites
            {selectedCategories.length < categories.length && (
              <span className="ml-2 text-lg font-normal text-gray-600 dark:text-gray-400">
                ({selectedCategoryNames})
              </span>
            )}
          </h2>
          <SiteList sites={featuredSites} />
        </div>
      )}

      {/* Categories */}
      {!isSearching && (
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Browse by Category
          </h2>
          <CategoryGrid categories={categories} />
        </div>
      )}

      {/* Latest Added */}
      {!isSearching && latestSites.length > 0 && (
        <div>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Latest Added
            {selectedCategories.length < categories.length && (
              <span className="ml-2 text-lg font-normal text-gray-600 dark:text-gray-400">
                ({selectedCategoryNames})
              </span>
            )}
          </h2>
          <SiteList sites={latestSites} />
        </div>
      )}
    </div>
  );
};
