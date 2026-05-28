/**
 * CarloOS CrossPortfolioCard — sister-site recommendations.
 *
 * Portfolio-wide infrastructure. Each site refers readers to relevant sibling
 * domains (e.g. a Dog.com health article points at Vets.co for finding a vet
 * and PetFood.com for diet comparison). Drives internal-network authority,
 * pages-per-session, and acquirer optionality.
 *
 * Editorial styling — looks like a curated recommendation, not an ad.
 * NO schema markup: this is navigation, not content.
 */

import Link from 'next/link'
import type { SiteId, ContentType, CrossPortfolioRecommendation } from '@carloOS/config'
import { getCrossPortfolioRecommendations } from '@carloOS/config'

export type CrossPortfolioVariant = 'footer' | 'sidebar' | 'inline'

export interface CrossPortfolioCardProps {
  /** Site the reader is currently on. */
  currentSite: SiteId
  /** Editorial context of the page (drives which siblings get recommended). */
  contentType: ContentType
  /** Visual treatment. Defaults to 'footer'. */
  variant?: CrossPortfolioVariant
}

/** Detect external (cross-domain) hrefs so we can open them in a new tab. */
function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href)
}

export function CrossPortfolioCard({
  currentSite,
  contentType,
  variant = 'footer',
}: CrossPortfolioCardProps) {
  const recommendations = getCrossPortfolioRecommendations(currentSite, contentType)
  if (recommendations.length === 0) return null

  if (variant === 'sidebar') return <SidebarVariant recs={recommendations} />
  if (variant === 'inline') return <InlineVariant recs={recommendations} />
  return <FooterVariant recs={recommendations} />
}

// ─── Shared microcopy ──────────────────────────────────────────────────────────

const EYEBROW = 'Family of sites'
const SUBLINE =
  'Curated recommendations from the broader CarloOS pet-reference family.'

// ─── Footer variant — full-width band, 2-column ────────────────────────────────

function FooterVariant({ recs }: { recs: CrossPortfolioRecommendation[] }) {
  return (
    <section
      aria-label="Related sister sites"
      className="border-t border-brand-border bg-brand-surface"
    >
      <div className="px-container sm:px-container-sm py-12">
        <div className="mb-6">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            {EYEBROW}
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed max-w-2xl m-0">
            {SUBLINE}
          </p>
        </div>

        <div
          className={[
            'grid gap-5',
            recs.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:max-w-xl',
          ].join(' ')}
        >
          {recs.map((rec) => (
            <RecCard key={rec.siteId} rec={rec} size="md" />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Sidebar variant — vertical stack, narrower ────────────────────────────────

function SidebarVariant({ recs }: { recs: CrossPortfolioRecommendation[] }) {
  return (
    <aside
      aria-label="Related sister sites"
      className="rounded-lg border border-brand-border bg-brand-surface p-5"
    >
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
        {EYEBROW}
      </div>
      <p className="text-xs text-brand-text-light leading-relaxed mb-4 m-0">
        Curated sibling references.
      </p>
      <div className="flex flex-col gap-3">
        {recs.map((rec) => (
          <RecCard key={rec.siteId} rec={rec} size="sm" />
        ))}
      </div>
    </aside>
  )
}

// ─── Inline variant — between-content treatment ────────────────────────────────

function InlineVariant({ recs }: { recs: CrossPortfolioRecommendation[] }) {
  return (
    <section
      aria-label="Related sister sites"
      className="my-10 rounded-xl border border-brand-border bg-brand-surface p-6"
    >
      <div className="flex items-baseline justify-between gap-4 mb-4 flex-wrap">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
          {EYEBROW}
        </div>
        <span className="text-xs text-brand-text-light">{SUBLINE}</span>
      </div>
      <div
        className={[
          'grid gap-4',
          recs.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1',
        ].join(' ')}
      >
        {recs.map((rec) => (
          <RecCard key={rec.siteId} rec={rec} size="md" />
        ))}
      </div>
    </section>
  )
}

// ─── Inner card ────────────────────────────────────────────────────────────────

function RecCard({
  rec,
  size,
}: {
  rec: CrossPortfolioRecommendation
  size: 'sm' | 'md'
}) {
  const external = isExternal(rec.href)
  const linkProps = external
    ? { href: rec.href, rel: 'noopener', target: '_blank' as const }
    : { href: rec.href }

  const headlineSize = size === 'sm' ? 'text-sm' : 'text-base'
  const blurbSize = size === 'sm' ? 'text-xs' : 'text-sm'
  const padding = size === 'sm' ? 'p-3' : 'p-5'

  const inner = (
    <>
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1.5">
        {rec.siteName}
      </div>
      <h3
        className={[
          'font-display font-bold text-brand-dark mb-2 leading-tight m-0',
          headlineSize,
        ].join(' ')}
      >
        {rec.headline}
      </h3>
      <p
        className={[
          'text-brand-text-mid leading-relaxed mb-3 m-0',
          blurbSize,
        ].join(' ')}
      >
        {rec.blurb}
      </p>
      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary group-hover:text-brand-primary-dark transition-colors">
        {rec.cta}
        <span aria-hidden="true">→</span>
      </span>
    </>
  )

  // External links go through <a>; internal use Next <Link>.
  const className = [
    'group block no-underline rounded-lg bg-brand-white border border-brand-border',
    padding,
    'hover:border-brand-primary transition-colors duration-200',
  ].join(' ')

  if (external) {
    return (
      <a {...linkProps} className={className}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={rec.href} className={className}>
      {inner}
    </Link>
  )
}
