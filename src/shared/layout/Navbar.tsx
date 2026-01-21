import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SearchBar } from '../../features/search/SearchBar';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useSearch } from '../../contexts/SearchContext';
import { sites } from '../../data/links';

export const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleDarkMode } = useDarkMode();
  const { setSearchResults, setIsSearching } = useSearch();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ];

  const handleSearch = (results: typeof sites) => {
    setSearchResults(results);
    setIsSearching(results.length > 0);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm dark:border-gray-800 dark:bg-black/95 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and nav */}
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent dark:from-blue-400 dark:to-purple-400"
              whileHover={{ scale: 1.05 }}
            >
              LinkShelf
            </motion.span>
          </Link>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="text-xl"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>

        {/* Bottom section with search */}
        <div className="border-t border-gray-200 py-4 dark:border-gray-800">
          <SearchBar onSearch={handleSearch} allSites={sites} />
        </div>
      </div>
    </nav>
  );
};
