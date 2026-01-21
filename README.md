# LinkShelf

A modern, curated directory of websites organized by category. Browse and discover the best resources across AI, Web3, IoT, Cybersecurity, and more.

## Features

- 🗂️ **Browse by Category** - Explore websites organized into 10+ categories
- 🔍 **Search** - Search across all websites by title, description, or tags
- ⭐ **Featured Sites** - Discover hand-picked featured websites
- 🎨 **Modern UI** - Beautiful, responsive design with dark mode support
- ✨ **Smooth Animations** - Powered by Framer Motion for delightful interactions
- 📱 **Mobile-First** - Fully responsive design that works on all devices
- ♿ **Accessible** - Keyboard navigation and proper semantic HTML

## Tech Stack

- **React 18+** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LinkShelf
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Adding New Categories

Edit `src/data/links.ts` and add a new category object to the `categories` array:

```typescript
{
  id: 'your-category-id',
  slug: 'your-category-slug',
  name: 'Your Category Name',
  description: 'Description of your category',
  icon: '🎯', // Emoji icon
}
```

## Adding New Sites

Edit `src/data/links.ts` and add a new site object to the `sites` array:

```typescript
{
  id: 'unique-site-id',
  categoryId: 'category-id', // Must match a category id
  title: 'Site Title',
  url: 'https://example.com',
  description: 'Brief description of the site',
  tags: ['tag1', 'tag2', 'tag3'],
  isFeatured: false, // Optional: set to true for featured sites
  addedAt: '2024-01-01T00:00:00Z', // ISO date string
  popularity: 85, // Optional: number between 0-100
}
```

## Project Structure

```
src/
├── app/              # App setup and router
├── data/             # Static data (links.ts)
├── features/         # Feature-specific components
│   ├── categories/   # Category components
│   ├── sites/        # Site components
│   └── search/       # Search components
├── shared/           # Shared components and utilities
│   ├── layout/       # Layout components (Navbar, Footer)
│   ├── ui/           # Reusable UI components
│   ├── lib/          # Utility functions
│   └── types/        # TypeScript type definitions
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

### Netlify

1. Push your code to GitHub
2. In Netlify, create a new site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## Development Notes

- All data is stored in `src/data/links.ts` - no hardcoded data in JSX
- Dark mode preference is stored in localStorage
- Search is debounced by 250ms for performance
- All external links use `rel="noopener noreferrer"` for security
- Components are memoized where appropriate for performance

## License

MIT
