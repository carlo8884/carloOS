import { MetadataRoute } from 'next'

/**
 * Skeleton sitemap — only the homepage exists today.
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content
 * lands (care/, find-a-vet/, directory/rescues, directory/breeders, etc).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://ferrets.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
  ]
}
