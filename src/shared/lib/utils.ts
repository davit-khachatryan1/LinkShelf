export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function getDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

export function searchSites(sites: import('../types').Site[], query: string): import('../types').Site[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => 
    site.title.toLowerCase().includes(lowerQuery) ||
    site.description.toLowerCase().includes(lowerQuery) ||
    site.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export type SortOption = 'popular' | 'new' | 'a-z';

export function sortSites(sites: import('../types').Site[], sortBy: SortOption): import('../types').Site[] {
  const sorted = [...sites];
  
  switch (sortBy) {
    case 'popular':
      return sorted.sort((a, b) => {
        const aPop = a.popularity ?? 0;
        const bPop = b.popularity ?? 0;
        if (bPop !== aPop) return bPop - aPop;
        return a.title.localeCompare(b.title);
      });
    case 'new':
      return sorted.sort((a, b) => {
        const dateA = new Date(a.addedAt).getTime();
        const dateB = new Date(b.addedAt).getTime();
        if (dateB !== dateA) return dateB - dateA;
        return a.title.localeCompare(b.title);
      });
    case 'a-z':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
