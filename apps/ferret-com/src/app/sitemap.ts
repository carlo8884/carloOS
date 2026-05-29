import { MetadataRoute } from 'next'

/**
 * Sitemap. Update here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 * Every entry must resolve to an existing route — see QC-STANDARDS.md §2.6.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://ferret.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://ferret.com/care/diet-basics', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/health/insulinoma', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/care/cage-setup', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/health/adrenal-disease', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/health/dental-disease', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/health/aging-ferret-care', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/behavior/training-and-bonding', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/care/exercise-and-enrichment', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://ferret.com/first-year-schedule', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ]
}
