import { createContext, useContext, useState, ReactNode } from 'react';
import { Site } from '../shared/types';

interface SearchContextType {
  searchResults: Site[];
  isSearching: boolean;
  setSearchResults: (results: Site[]) => void;
  setIsSearching: (isSearching: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<Site[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        isSearching,
        setSearchResults,
        setIsSearching,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
