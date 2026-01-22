import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const defaultTitle = 'LinkShelf - Curated Websites by Category | Discover Best Resources';
const defaultDescription = 'A modern, curated directory of websites organized by category. Browse and discover the best resources across AI, Web3, IoT, Cybersecurity, Product Hunt, Design Inspiration, and more.';
const defaultKeywords = 'curated websites, website directory, AI resources, Web3 resources, IoT news, cybersecurity tools, product hunt, design inspiration, developer tools, tech resources, website discovery';
const defaultImage = 'https://linkshelf.com/og-image.png';
const siteUrl = 'https://linkshelf.com';

export const SEO = ({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = defaultImage,
  url,
  type = 'website',
  noindex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | LinkShelf` : defaultTitle;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="LinkShelf" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};
