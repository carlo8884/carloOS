import { MetadataRoute } from 'next'

/**
 * Skeleton sitemap — only the homepage exists today.
 * Add per-SKU, per-brand, per-ingredient, per-life-stage entries here
 * (or via scripts/regenerate-sitemaps.mjs) as the catalog lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://petfoods.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
  ]
}
