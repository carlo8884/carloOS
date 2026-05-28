import { MetadataRoute } from 'next'

/**
 * Sitemap — only routes that actually render.
 *
 * Per QC-STANDARDS.md §2.6, every sitemap entry must resolve. The 50-state
 * placeholders under /find-a-vet/[state] and /directory/rescues/[state] are
 * navigation-only (404 today by design) and intentionally excluded from the
 * sitemap until per-state pages ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://ferrets.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://ferrets.com/care', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: 'https://ferrets.com/find-a-vet', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: 'https://ferrets.com/directory/rescues', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
  ]
}
