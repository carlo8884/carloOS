/**
 * CarloOS SidebarCard — container for sidebar widgets.
 * Used inside ArticleLayout's sidebar slot.
 */

import type { ReactNode } from 'react'
import Link from 'next/link'

interface SidebarCardProps {
  title: string
  children: ReactNode
  dark?: boolean
}

export function SidebarCard({ title, children, dark = false }: SidebarCardProps) {
  return (
    <div className={[
      'rounded-lg p-5',
      dark
        ? 'bg-brand-dark border border-white/8'
        : 'bg-brand-surface border border-brand-border',
    ].join(' ')}>
      <h4 className={[
        'text-2xs font-bold tracking-eyebrow uppercase mb-3.5',
        dark ? 'text-white/40' : 'text-brand-text-light',
      ].join(' ')}>
        {title}
      </h4>
      {children}
    </div>
  )
}

// ── Table of Contents ─────────────────────────────────────────────────────────

interface TOCItem {
  label: string
  href: string
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <SidebarCard title="In This Guide">
      <nav aria-label="Table of contents">
        <ul className="list-none m-0 p-0 flex flex-col gap-1.5" role="list">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs text-brand-text-mid no-underline block px-2 py-1.5 rounded hover:bg-brand-white hover:text-brand-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </SidebarCard>
  )
}

// ── Rankings List (review pages) ──────────────────────────────────────────────

interface RankingItem {
  rank: number
  name: string
  score: number
  href: string
}

interface RankingsListProps {
  items: RankingItem[]
  title?: string
}

export function RankingsList({ items, title = 'All Rankings' }: RankingsListProps) {
  return (
    <SidebarCard title={title}>
      <ul className="list-none m-0 p-0 flex flex-col gap-2" role="list">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex items-center gap-2.5 p-2 rounded-md no-underline hover:bg-brand-white transition-colors duration-200"
            >
              <span className="w-6 h-6 rounded-full bg-brand-white border border-brand-border flex items-center justify-center text-2xs font-bold text-brand-primary flex-shrink-0">
                {item.rank}
              </span>
              <span className="text-xs font-semibold text-brand-dark flex-1 leading-tight">
                {item.name}
              </span>
              <span className="text-xs font-bold text-brand-primary flex-shrink-0">
                {item.score.toFixed(1)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </SidebarCard>
  )
}

// ── Related Links ──────────────────────────────────────────────────────────────

interface RelatedLinksProps {
  links: Array<{ label: string; href: string }>
  title?: string
}

export function RelatedLinks({ links, title = 'Related Guides' }: RelatedLinksProps) {
  return (
    <SidebarCard title={title}>
      <ul className="list-none m-0 p-0 flex flex-col gap-1.5" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-xs text-brand-text-mid no-underline px-3 py-2 rounded bg-brand-white border border-brand-border hover:border-brand-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </SidebarCard>
  )
}
