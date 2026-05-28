import { MetadataRoute } from 'next'

/**
 * Skeleton sitemap — only the homepage exists today.
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://ferret.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
  ]
}
