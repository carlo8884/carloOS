import { MetadataRoute } from 'next'
import { allRaces } from '../data/racing/meetings'

/**
 * Sitemap — homepage + cornerstone content pages.
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const racecardEntries: MetadataRoute.Sitemap = allRaces().map(({ race }) => ({
    url: `https://horses.com/racing/racecards/${race.id}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 0.70,
  }))

  return [
    { url: 'https://horses.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://horses.com/racing', lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    ...racecardEntries,
    { url: 'https://horses.com/first-horse-roadmap', lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: 'https://horses.com/breeds/quarter-horse', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://horses.com/health/equine-ulcers', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://horses.com/health/colic', lastModified: now, changeFrequency: 'monthly', priority: 0.92 },
    { url: 'https://horses.com/guides/saddle-fit-basics', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/guides/equine-vaccination-schedule', lastModified: now, changeFrequency: 'monthly', priority: 0.88 },
    { url: 'https://horses.com/guides/equine-dental-care', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/guides/horse-blanket-fit-guide', lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://horses.com/supplements/joint-supplements', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/reviews/best-winter-horse-blankets', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/reviews/best-equine-supplements', lastModified: now, changeFrequency: 'monthly', priority: 0.88 },

    // Discipline reference — overview hub + 6 disciplines
    { url: 'https://horses.com/disciplines', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://horses.com/disciplines/dressage', lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://horses.com/disciplines/show-jumping', lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://horses.com/disciplines/eventing', lastModified: now, changeFrequency: 'monthly', priority: 0.82 },
    { url: 'https://horses.com/disciplines/western-pleasure', lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: 'https://horses.com/disciplines/reining', lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: 'https://horses.com/disciplines/trail-riding', lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
  ]
}
