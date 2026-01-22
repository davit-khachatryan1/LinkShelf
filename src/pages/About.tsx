import { SEO } from '../shared/components/SEO';

export const About = () => {
  return (
    <>
      <SEO
        title="About LinkShelf"
        description="Learn about LinkShelf, a curated directory of websites organized by category. Discover how we help you find the best resources across technology domains."
        keywords="about linkshelf, website directory, curated websites, tech resources, about us"
        url="/about"
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
        About LinkShelf
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-4 text-lg text-gray-700 dark:text-gray-400">
          LinkShelf is a curated directory of websites organized by category. 
          Our mission is to help you discover the best resources across various 
          technology domains, from AI and Web3 to IoT and cybersecurity.
        </p>
        
        <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
          How It Works
        </h2>
        
        <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-400">
          <li>Browse websites by category to find resources in your area of interest</li>
          <li>Use the search function to find specific websites by title, description, or tags</li>
          <li>View featured websites for hand-picked recommendations</li>
          <li>Sort sites by popularity, date added, or alphabetically</li>
        </ul>
        
        <h2 className="mb-4 mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
          Contributing
        </h2>
        
        <p className="text-gray-700 dark:text-gray-400">
          LinkShelf is maintained as a curated collection. To add new categories or sites, 
          edit the data file <code className="rounded bg-gray-100 px-2 py-1 text-sm text-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:border dark:border-gray-800">src/data/links.ts</code> 
          following the existing structure.
        </p>
      </div>
    </div>
    </>
  );
};
