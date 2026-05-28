import { MetadataRoute } from 'next'

/**
<<<<<<< HEAD
 * Skeleton sitemap — only the homepage exists today.
=======
 * Sitemap — homepage + cornerstone content pages.
>>>>>>> origin/main
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://horses.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
<<<<<<< HEAD
=======
    { url: 'https://horses.com/first-horse-roadmap', lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://horses.com/breeds/quarter-horse', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://horses.com/health/equine-ulcers', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://horses.com/guides/saddle-fit-basics', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/supplements/joint-supplements', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/reviews/best-winter-horse-blankets', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
>>>>>>> origin/main
  ]
}
