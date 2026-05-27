/**
 * CarloOS Breadcrumb — renders breadcrumb navigation with BreadcrumbList schema.
 */

import Link from 'next/link'
import { buildBreadcrumbSchema, SchemaScript } from './SEOHead'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  siteId?: SiteId
}

export function Breadcrumb({ items, siteId }: BreadcrumbProps) {
  const config = siteId ? getSiteConfig(siteId) : null

  // BreadcrumbList schema only includes items that have a URL.
  const schemaItems = items
    .filter((item) => item.href)
    .map((item) => ({
      name: item.name,
      url: config ? `${config.theme.siteUrl}${item.href}` : (item.href as string),
    }))

  return (
    <>
      <SchemaScript schema={buildBreadcrumbSchema({ items: schemaItems })} />

      <nav
        aria-label="Breadcrumb"
        className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border"
      >
        <ol className="flex items-center gap-2 flex-wrap list-none m-0 p-0" role="list">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={`${item.name}-${i}`} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-brand-border" aria-hidden="true">›</span>
                )}
                {isLast || !item.href ? (
                  <span className={isLast ? 'text-brand-text-mid font-medium' : 'text-brand-text-light'} aria-current={isLast ? 'page' : undefined}>
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-brand-text-light no-underline hover:text-brand-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
