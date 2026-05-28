import { MetadataRoute } from 'next'
<<<<<<< HEAD

/**
 * Skeleton sitemap — only the homepage exists today.
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://horses.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
  ]
=======
import { Breeds, EXISTING_STATIC_BREED_SLUGS } from '../data/breeds'

/**
 * Sitemap — programmatic.
 *
 * Includes:
 *   - Homepage (/)
 *   - Breeds index (/breeds)
 *   - All breed-template-rendered pages (/breeds/[slug] for the 49 slugs
 *     not in EXISTING_STATIC_BREED_SLUGS)
 *   - The canonical hand-written Quarter Horse page (/breeds/quarter-horse),
 *     which is statically rendered at that path.
 *
 * Update EXISTING_STATIC_BREED_SLUGS in src/data/breeds.ts as new
 * hand-written breed pages are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const ORIGIN = 'https://horses.com'

  const entries: MetadataRoute.Sitemap = [
    { url: `${ORIGIN}`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${ORIGIN}/breeds`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  for (const breed of Breeds) {
    const isCanonical = EXISTING_STATIC_BREED_SLUGS.has(breed.slug)
    entries.push({
      url: `${ORIGIN}/breeds/${breed.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: isCanonical ? 0.85 : 0.75,
    })
  }

  return entries
>>>>>>> origin/main
}
