import { MetadataRoute } from 'next'
import { States } from '@/data/states'

const SITE_URL = 'https://ferrets.com'

/**
 * Sitemap — only routes that actually render.
 *
 * Per QC-STANDARDS.md §2.6, every sitemap entry must resolve. The
 * 50-state placeholders under /directory/rescues/[state] remain
 * navigation-only (404 today by design) and are intentionally excluded
 * from the sitemap until per-state rescue pages ship.
 *
 * The /find-a-vet/[state] pages are LIVE — generated at build time from
 * apps/ferrets-com/src/data/states.ts. All 51 (50 states + DC) are
 * appended below.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const baseEntries: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/care`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/find-a-vet`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/directory/rescues`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const stateEntries: MetadataRoute.Sitemap = States.map((state) => ({
    url: `${SITE_URL}/find-a-vet/${state.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...baseEntries, ...stateEntries]
}
