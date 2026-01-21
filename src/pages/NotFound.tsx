import { Link } from 'react-router-dom';
import { Button } from '../shared/ui/Button';

export const NotFound = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="mb-4 text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
        404
      </h1>
      <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Go Home
        </Button>
      </Link>
    </div>
  );
};
