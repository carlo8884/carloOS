/**
 * CarloOS ArticleLayout — shared layout for all long-form editorial content.
 * Handles: hero, breadcrumb, article body + sticky sidebar, internal linking.
 *
 * USAGE:
 * <ArticleLayout
 *   siteId="dog-com"
 *   hero={{ title, subtitle, category, author, readTime, publishedAt }}
 *   breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }]}
 *   sidebar={<aside content />}
 *   schema={buildArticleSchema({...})}
 * >
 *   <article body content />
 * </ArticleLayout>
 */

import type { ReactNode } from 'react'
import type { SiteId, ContentType } from '@carloOS/config'
import { Breadcrumb } from './Breadcrumb'
import { CrossPortfolioCard } from './CrossPortfolioCard'
import { SchemaScript } from './SEOHead'

interface ArticleHero {
  title: string
  subtitle?: string
  category?: string
  categoryHref?: string
  authorName?: string
  authorCredentials?: string
  authorAvatar?: string     // emoji or image URL
  publishedAt?: string
  readTime?: string
  image?: string
  imageAlt?: string
}

interface ArticleLayoutProps {
  siteId: SiteId
  hero: ArticleHero
  breadcrumbs?: Array<{ name: string; href?: string }>
  children: ReactNode       // article body
  sidebar?: ReactNode       // right sidebar content
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
  /** Footer internal link suggestions */
  relatedLinks?: Array<{ title: string; href: string; category?: string }>
  /**
   * If set, renders a CrossPortfolioCard footer pulling 0–3 curated sibling
   * recommendations from `getCrossPortfolioRecommendations(siteId, contentType)`.
   * Opt-in — leaves the page unchanged when omitted, so pages that already
   * place the card inline do not get a duplicate.
   */
  contentType?: ContentType
}

export function ArticleLayout({
  siteId,
  hero,
  breadcrumbs,
  children,
  sidebar,
  schema,
  relatedLinks,
  contentType,
}: ArticleLayoutProps) {
  // SINGLE SOURCE OF TRUTH for BreadcrumbList JSON-LD = the inner <Breadcrumb>
  // (rendered below), which emits exactly one BreadcrumbList from the same
  // `breadcrumbs` prop that draws the visual trail. To guarantee exactly ONE
  // BreadcrumbList per page, strip any BreadcrumbList node a page may have
  // hand-built into the `schema` prop — otherwise it would double-emit
  // alongside the inner <Breadcrumb>. We do NOT auto-derive a breadcrumb here;
  // emission is owned solely by <Breadcrumb>. Non-breadcrumb schema (Article,
  // FAQPage, MedicalWebPage, etc.) passes through untouched.
  const pageSchema = (() => {
    if (!schema) return schema
    // Only strip the page's own BreadcrumbList when the inner <Breadcrumb> will
    // render (breadcrumbs prop present) to emit the canonical one. With no
    // breadcrumbs prop there is no inner Breadcrumb, so keep the page's own
    // BreadcrumbList — otherwise the page would lose breadcrumb schema entirely.
    if (!breadcrumbs || breadcrumbs.length === 0) return schema
    const isBreadcrumb = (s: unknown) =>
      (s as { '@type'?: string } | null)?.['@type'] === 'BreadcrumbList'
    if (Array.isArray(schema)) {
      const filtered = schema.filter((s) => !isBreadcrumb(s))
      return filtered.length > 0 ? filtered : undefined
    }
    return isBreadcrumb(schema) ? undefined : schema
  })()

  return (
    <>
      {/* JSON-LD Schema (BreadcrumbList stripped — owned by <Breadcrumb> below) */}
      {pageSchema && <SchemaScript schema={pageSchema} />}

      {/* Breadcrumb */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} />
      )}

      {/* Hero */}
      <div className="bg-brand-dark pt-14 pb-0 relative overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-container sm:px-container-sm pb-0">
          {/* Category */}
          <div className="flex items-center gap-3 mb-5">
            {hero.category && (
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                {hero.category}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-white leading-tight tracking-tighter mb-4 max-w-3xl"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            {hero.title}
          </h1>

          {/* Subtitle */}
          {hero.subtitle && (
            <p className="text-lg font-light text-white/60 leading-relaxed max-w-2xl mb-8">
              {hero.subtitle}
            </p>
          )}

          {/* Byline */}
          {(hero.authorName || hero.publishedAt || hero.readTime) && (
            <div className="flex items-center gap-5 py-4 border-t border-white/10 flex-wrap">
              {hero.authorAvatar && (
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl flex-shrink-0">
                  {hero.authorAvatar.startsWith('http') ? (
                    <img src={hero.authorAvatar} alt={hero.authorName} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    hero.authorAvatar
                  )}
                </div>
              )}
              <div>
                {hero.authorName && (
                  <div className="text-sm font-semibold text-white">{hero.authorName}</div>
                )}
                {hero.authorCredentials && (
                  <div className="text-xs text-white/40">{hero.authorCredentials}</div>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs text-white/35 ml-auto">
                {hero.publishedAt && <span>Updated {hero.publishedAt}</span>}
                {hero.readTime && <span>{hero.readTime} read</span>}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero image (optional, below dark hero) */}
      {hero.image && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={hero.image}
            alt={hero.imageAlt ?? hero.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content area */}
      <div className="px-container sm:px-container-sm py-14">
        <div className={[
          'grid gap-14',
          sidebar ? 'lg:grid-cols-[1fr_300px]' : 'max-w-content mx-auto',
        ].join(' ')}>

          {/* Article body */}
          <article className="carloOS-article min-w-0">
            {children}
          </article>

          {/* Sidebar */}
          {sidebar && (
            <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
              {sidebar}
            </aside>
          )}
        </div>
      </div>

      {/* Related links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <div className="px-container sm:px-container-sm py-12 border-t border-brand-border bg-brand-surface">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block p-4 bg-brand-white border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-200"
              >
                {link.category && (
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                    {link.category}
                  </div>
                )}
                <div className="text-sm font-semibold text-brand-dark leading-snug">
                  {link.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Cross-portfolio sister-site recommendations (opt-in via contentType) */}
      {contentType && (
        <CrossPortfolioCard
          currentSite={siteId}
          contentType={contentType}
          variant="footer"
        />
      )}
    </>
  )
}

// ─── Article body typography styles ──────────────────────────────────────────
// Applied as a global CSS class via globals.css
// Tailwind @layer base — see packages/ui/src/styles/article.css
