import { useState, useCallback } from 'react';
import { Input } from '../../shared/ui/Input';
import { debounce } from '../../shared/lib/utils';
import { Site } from '../../shared/types';

interface SearchBarProps {
  onSearch: (results: Site[]) => void;
  allSites: Site[];
}

export const SearchBar = ({ onSearch, allSites }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      if (!searchQuery.trim()) {
        onSearch([]);
        return;
      }
      
      const lowerQuery = searchQuery.toLowerCase();
      const results = allSites.filter(
        (site) =>
          site.title.toLowerCase().includes(lowerQuery) ||
          site.description.toLowerCase().includes(lowerQuery) ||
          site.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
      onSearch(results);
    }, 250),
    [allSites, onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <Input
        type="text"
        placeholder="Search websites by title, description, or tags..."
        value={query}
        onChange={handleChange}
        className="w-full pl-12 pr-4 py-3 text-base"
        aria-label="Search websites"
      />
    </div>
  );
};
