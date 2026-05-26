#!/usr/bin/env tsx
/**
 * Generates sitemap.ts and robots.ts for vets-co, fish-com, saddle-com, lizard-com
 * by templating from dog-com's versions.
 * Run: npx tsx scripts/generate-site-files.ts
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const SITES = [
  { id: 'vets-co', domain: 'vets.co', staticRoutes: [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/find-a-vet', priority: 0.95, freq: 'weekly' },
    { path: '/specialists', priority: 0.9, freq: 'weekly' },
    { path: '/breeds', priority: 0.85, freq: 'weekly' },
    { path: '/health', priority: 0.85, freq: 'weekly' },
    { path: '/reviews/best-pet-insurance', priority: 0.85, freq: 'monthly' },
    { path: '/reviews/best-pet-telehealth', priority: 0.8, freq: 'monthly' },
  ]},
  { id: 'fish-com', domain: 'fish.com', staticRoutes: [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/species', priority: 0.9, freq: 'weekly' },
    { path: '/setup', priority: 0.85, freq: 'weekly' },
    { path: '/water', priority: 0.85, freq: 'weekly' },
    { path: '/health', priority: 0.8, freq: 'weekly' },
    { path: '/reviews', priority: 0.8, freq: 'weekly' },
  ]},
  { id: 'saddle-com', domain: 'saddle.com', staticRoutes: [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/english', priority: 0.9, freq: 'weekly' },
    { path: '/western', priority: 0.9, freq: 'weekly' },
    { path: '/reviews/best-english-saddles', priority: 0.9, freq: 'monthly' },
    { path: '/guides/saddle-fit-guide', priority: 0.85, freq: 'monthly' },
    { path: '/guides/leather-care-guide', priority: 0.8, freq: 'monthly' },
    { path: '/guides/used-saddle-buying-guide', priority: 0.8, freq: 'monthly' },
  ]},
  { id: 'lizard-com', domain: 'lizard.com', staticRoutes: [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/species', priority: 0.9, freq: 'weekly' },
    { path: '/health/uvb-lighting-guide', priority: 0.9, freq: 'monthly' },
    { path: '/health/reptile-feeding-guide', priority: 0.85, freq: 'monthly' },
    { path: '/reviews/best-uvb-bulbs', priority: 0.85, freq: 'monthly' },
    { path: '/reviews/best-reptile-terrariums', priority: 0.8, freq: 'monthly' },
  ]},
]

for (const site of SITES) {
  const appDir = join('/home/claude/carloOS/apps', site.id, 'src/app')
  mkdirSync(appDir, { recursive: true })

  // sitemap.ts
  const sitemapContent = `import { MetadataRoute } from 'next'
import { getPosts } from '@carloOS/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://${site.domain}'

  const staticRoutes: MetadataRoute.Sitemap = [
${site.staticRoutes.map(r => `    { url: \`\${baseUrl}${r.path}\`, lastModified: new Date(), changeFrequency: '${r.freq}' as const, priority: ${r.priority} },`).join('\n')}
  ]

  let dynamicRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts('${site.id}', undefined, 200)
    dynamicRoutes = posts.map(p => ({
      url: \`\${baseUrl}\${p.path}\`,
      lastModified: p.published_at ? new Date(p.published_at) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }))
  } catch { /* DB not connected */ }

  return [...staticRoutes, ...dynamicRoutes]
}
`
  writeFileSync(join(appDir, 'sitemap.ts'), sitemapContent)

  // robots.ts
  const robotsContent = `import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: 'https://${site.domain}/sitemap.xml',
    host: 'https://${site.domain}',
  }
}
`
  writeFileSync(join(appDir, 'robots.ts'), robotsContent)
  console.log(`✅ ${site.id}: sitemap.ts + robots.ts`)
}

console.log('\n✨ Done — sitemap and robots generated for all 4 remaining sites')
