export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-black/95 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} LinkShelf. Curated websites by category.</p>
        </div>
      </div>
    </footer>
  );
};
