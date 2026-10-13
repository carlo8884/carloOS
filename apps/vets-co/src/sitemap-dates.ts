import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { MetadataRoute } from 'next'

/**
 * Sitemap <lastmod> from each page's own stamped date, read from its source
 * at build time: the visible <LastUpdated date>, else the Article schema
 * modifiedAt, else a byline updatedAt, else a ComparisonFoot date. CI keeps
 * those stamps equal to the page's last content commit. Pages with no stamp
 * (hubs, dynamic templates) get no <lastmod> rather than the build time,
 * which search engines learn to ignore when every URL says "today".
 */
const PATTERNS = [
  /<LastUpdated\b[^>]*\bdate="(\d{4}-\d{2}-\d{2})"/,
  /modifiedAt:\s*['"](\d{4}-\d{2}-\d{2})/,
  /updatedAt="(\d{4}-\d{2}-\d{2})"/,
  /<ComparisonFoot\b[^>]*\bupdated="(\d{4}-\d{2}-\d{2})"/,
]

function appDir(): string | null {
  for (const dir of [join(process.cwd(), 'src/app'), join(process.cwd(), 'apps/vets-co/src/app')]) {
    if (existsSync(dir)) return dir
  }
  return null
}

export function stampedDate(pathname: string): Date | undefined {
  const dir = appDir()
  if (!dir) return undefined
  const file = join(dir, pathname.replace(/^\/+/, ''), 'page.tsx')
  if (!existsSync(file)) return undefined
  const src = readFileSync(file, 'utf8')
  for (const re of PATTERNS) {
    const m = src.match(re)
    if (m) return new Date(`${m[1]}T00:00:00Z`)
  }
  return undefined
}

export function withStampedDates(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  return entries.map((entry) => {
    const { lastModified: _buildTime, ...rest } = entry
    const date = stampedDate(new URL(entry.url).pathname)
    return date ? { ...rest, lastModified: date } : rest
  })
}
