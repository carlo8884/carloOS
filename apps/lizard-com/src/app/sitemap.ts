import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lizard.com'
  const now = new Date()

  const hubs: Array<{ path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/species', priority: 0.9, freq: 'weekly' },
    { path: '/setup', priority: 0.85, freq: 'weekly' },
    { path: '/reviews', priority: 0.8, freq: 'weekly' },
  ]

  const species = ['ball-python','ball-python-morphs','bearded-dragon','blue-tongued-skink',
    'boa-constrictor','corn-snake','crested-gecko','day-gecko','frilled-dragon','leopard-gecko',
    'panther-chameleon','russian-tortoise','sulcata-tortoise','tokay-gecko','uromastyx',
    'veiled-chameleon']

  const setup = ['bioactive-setup','humidity-guide','lighting-guide','substrate-guide',
    'temperature-guide','uvb-lighting-guide']

  const health = ['dehydration-reptiles','dysecdysis','egg-binding','hypocalcemia',
    'metabolic-bone-disease','parasites','parasites-guide','reptile-feeding-guide',
    'respiratory-infection','salmonella-prevention','sick-reptile-signs','stomatitis',
    'thermal-burns','vitamin-a-deficiency']

  const reviews = ['best-bioactive-substrates','best-reptile-terrariums',
    'best-thermometers-hygrometers','best-thermostats','best-uvb-bulbs']

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
    ...detail('/species', species, 0.8),
    ...detail('/setup', setup, 0.8),
    ...detail('/health', health, 0.8),
    ...detail('/reviews', reviews, 0.75),
  ]
}
