import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fish.com'
  const now = new Date()

  const hubs: Array<{ path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/species', priority: 0.9, freq: 'weekly' },
    { path: '/setup', priority: 0.85, freq: 'weekly' },
    { path: '/health', priority: 0.85, freq: 'weekly' },
    { path: '/reviews', priority: 0.8, freq: 'weekly' },
    { path: '/water', priority: 0.75, freq: 'monthly' },
  ]

  const species = ['african-cichlid','amano-shrimp','angelfish','axolotl','betta-fish',
    'betta-fish-tank-mates','blue-ram','boesemani-rainbowfish','cardinal-tetra',
    'celestial-pearl-danio','cherry-barb','cherry-shrimp','clownfish','corydoras','discus',
    'discus-guide','dwarf-gourami','ember-tetra','goldfish','guppy','harlequin-rasbora',
    'hillstream-loach','koi','kuhli-loach','kuhli-loach-guide','molly-fish','mystery-snail',
    'neon-tetra','oscar','otocinclus','otocinclus-guide','platy-fish','pleco','puffer-fish',
    'rainbow-fish','swordtail-fish','white-cloud-mountain-minnow']

  const setup = ['aquarium-cycling-guide','planted-tank-setup','pond-guide',
    'quarantine-tank-guide','saltwater-tank-setup','water-chemistry-guide']

  const health = ['columnaris','dropsy-treatment','fin-rot','fish-disease-guide',
    'fish-lice-anchor-worm','gill-flukes','ich-treatment','new-tank-syndrome',
    'nitrogen-cycle-explained','pop-eye','swim-bladder-disease','velvet-disease']

  const reviews = ['best-aquarium-filters','best-aquarium-heaters','best-aquarium-lighting',
    'best-canister-filters','best-nano-tanks','best-planted-tank-fertilizers',
    'best-water-test-kits']

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
    ...detail('/setup', setup, 0.75),
    ...detail('/health', health, 0.8),
    ...detail('/reviews', reviews, 0.75),
  ]
}
