import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saddle.com'
  const now = new Date()

  const hubs: Array<{ path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/english', priority: 0.9, freq: 'weekly' },
    { path: '/western', priority: 0.9, freq: 'weekly' },
    { path: '/reviews', priority: 0.85, freq: 'weekly' },
  ]

  const guides = ['bit-selection-guide','buying-first-horse','dressage-basics-guide',
    'english-riding-guide','horse-body-condition-scoring','horse-bridle-guide',
    'horse-dentistry-guide','horse-first-aid-guide','horse-grooming-guide',
    'horse-nutrition-guide','horse-trailer-guide','leather-care-guide','saddle-fit-guide',
    'seat-size-guide','stirrup-iron-guide','tack-cleaning-schedule','tack-room-organization',
    'trailer-loading-guide','used-saddle-buying-guide','western-riding-guide',
    'western-saddle-guide']

  const reviews = ['best-english-saddles','best-horse-blankets','best-riding-boots',
    'best-riding-gloves','best-riding-helmets','best-saddle-pads','best-stirrup-irons',
    'best-western-saddles','collegiate-saddle-review','pessoa-saddle-review',
    'stubben-saddle-review']

  const detail = (prefix: string, slugs: string[], priority: number): MetadataRoute.Sitemap =>
    slugs.map((slug) => ({
      url: `${baseUrl}${prefix}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    }))

  return [
    ...hubs.map((h) => ({
      url: `${baseUrl}${h.path === '/' ? '' : h.path}`,
      lastModified: now,
      changeFrequency: h.freq,
      priority: h.priority,
    })),
    ...detail('/guides', guides, 0.8),
    ...detail('/reviews', reviews, 0.8),
  ]
}
