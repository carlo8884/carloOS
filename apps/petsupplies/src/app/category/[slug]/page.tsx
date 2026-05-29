/**
 * PetSupplies.com — programmatic category page.
 * Architect S1 / Directive 6.
 *
 * Renders the "Best <category> for <pet> (2026)" page with intro, ReviewCard
 * list, buyer's guide, who-shouldn't-buy, FAQ accordion, schema markup, and
 * cross-links to the relevant CarloOS content properties.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ReviewCard,
  FAQAccordion,
  CalloutBox,
  buildMetadata,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildProductSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { CATEGORIES, CATEGORY_BY_SLUG } from '@/data/categories'
import { getProductsByCategory, type Product } from '@/lib/products'
import { affiliateHrefFor } from '@/lib/affiliate'

// ─── Static params ────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }))
}

interface PageParams {
  params: { slug: string }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export function generateMetadata({ params }: PageParams): Metadata {
  const category = CATEGORY_BY_SLUG[params.slug]
  if (!category) return { title: 'Not found' }
  const petLabel = labelFor(category.petType)
  return buildMetadata({
    siteId: 'petsupplies',
    title: `Best ${category.h1Name} for ${petLabel} (2026)`,
    description: category.intro.slice(0, 200) + '...',
    path: `/category/${category.slug}`,
    type: 'article',
    category: category.shortName,
  })
}

function labelFor(petType: string): string {
  switch (petType) {
    case 'dog': return 'Dogs'
    case 'cat': return 'Cats'
    case 'small-animal': return 'Small Animals'
    case 'fish': return 'Aquariums'
    case 'reptile': return 'Reptiles'
    case 'bird': return 'Birds'
    default: return 'Pets'
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function CategoryPage({ params }: PageParams) {
  const category = CATEGORY_BY_SLUG[params.slug]
  if (!category) notFound()

  const products = await getProductsByCategory(params.slug)
  const petLabel = labelFor(category.petType)
  const pageUrl = `https://petsupplies.com/category/${category.slug}`

  // ── Schema markup ──────────────────────────────────────────────────────────
  const breadcrumb = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://petsupplies.com' },
      { name: petLabel, url: 'https://petsupplies.com#' + petLabel.toLowerCase() },
      { name: category.h1Name, url: pageUrl },
    ],
  })
  const faqSchema = buildFAQSchema({
    questions: category.faqs.map((f) => ({ question: f.q, answer: f.a })),
  })
  const productSchemas = products.map((p) =>
    buildProductSchema({
      name: p.name,
      description: (p.pros[0] ?? '') + ' ' + (p.cons[0] ?? ''),
      imageUrl: '',
      url: pageUrl + '#' + p.slug,
      ratingValue: p.expert_score,
      reviewCount: 1,
      priceRange: p.price_range ?? undefined,
    }),
  )
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Best ${category.h1Name} for ${petLabel}`,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: pageUrl + '#' + p.slug,
    })),
  }
  const allSchemas = combineSchemas(breadcrumb, faqSchema, itemList, ...productSchemas)

  return (
    <>
      <SchemaScript schema={allSchemas} />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-16 relative">
        <div className="max-w-content mx-auto">
          <nav className="text-xs text-white/55 flex gap-2 mb-6">
            <Link href="/" className="hover:text-white no-underline">Home</Link>
            <span>›</span>
            <span>{petLabel}</span>
            <span>›</span>
            <span className="text-white">{category.shortName}</span>
          </nav>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary-light" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
              Independent Comparison · {new Date().getFullYear()}
            </span>
          </div>
          <h1
            className="font-display font-black text-white tracking-tighter leading-none mb-6 max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Best {category.h1Name} for {petLabel} (2026)
          </h1>
          <p className="text-base lg:text-lg font-light text-white/70 leading-relaxed max-w-3xl">
            Rankings are editorial — never paid placement. See{' '}
            <Link href="/editorial-standards" className="underline text-white/90 hover:text-white">
              how we review
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FTC DISCLOSURE BANNER ────────────────────────────────────────── */}
      <div className="px-container sm:px-container-sm pt-8">
        <div className="max-w-content mx-auto">
          <CalloutBox variant="info" title="FTC Affiliate Disclosure">
            <p>
              PetSupplies.com participates in affiliate programs including Amazon Associates and
              Chewy. If you purchase through a link on this page we may earn a commission at no
              extra cost to you. Our editorial rankings are decided before affiliate links are
              added — commission rates do not influence which products are recommended. See our{' '}
              <Link href="/editorial-standards" className="text-brand-primary underline hover:no-underline">
                Editorial Standards
              </Link>{' '}
              for the full methodology.
            </p>
          </CalloutBox>
        </div>
      </div>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-10">
        <div className="max-w-content mx-auto carloOS-article">
          <h2>What to look for in {category.shortName.toLowerCase()}</h2>
          <p>{category.intro}</p>

          {category.subcategories.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {category.subcategories.map((sub) => (
                <span
                  key={sub}
                  className="text-xs font-semibold text-brand-text-mid bg-brand-surface border border-brand-border rounded-pill px-3 py-1.5"
                >
                  {sub}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── PRODUCT LIST ─────────────────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-6 bg-brand-surface">
        <div className="max-w-content mx-auto">
          {products.length === 0 ? (
            <CalloutBox variant="note" title="Reviews coming soon">
              <p>
                The PetSupplies.com editorial team is still researching this category. We aim to
                publish 5-10 ranked picks per category. Check back in the next update, or{' '}
                <Link href="/" className="text-brand-primary underline hover:no-underline">
                  browse other categories
                </Link>
                .
              </p>
            </CalloutBox>
          ) : (
            <>
              <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
                <h2 className="font-display font-bold text-brand-dark text-3xl tracking-tight">
                  Our Top {products.length} Picks
                </h2>
                <span className="text-xs text-brand-text-light">
                  Ranked by editorial score · Updated {new Date().getFullYear()}
                </span>
              </div>
              {products.map((p, i) => (
                <ReviewCard
                  key={p.slug}
                  id={p.slug}
                  badge={p.badge ?? `#${i + 1} Pick`}
                  badgeEmoji={badgeEmojiFor(p.badge)}
                  name={p.name}
                  subtitle={subtitleFor(p)}
                  score={p.expert_score}
                  winner={i === 0}
                  description={<p>{compositeDescription(p)}</p>}
                  specs={specGridFor(p)}
                  pros={p.pros}
                  cons={p.cons}
                  price={p.price_range ?? undefined}
                  priceLabel="Price Range"
                  ctaText={`Check Price on ${vendorLabel(p.vendor)} →`}
                  ctaHref={affiliateHrefFor(p)}
                  ctaAffiliateProgram={p.vendor}
                  ctaAffiliateProduct={p.slug}
                />
              ))}
            </>
          )}
        </div>
      </section>

      {/* ── BUYER'S GUIDE ────────────────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-14">
        <div className="max-w-content mx-auto carloOS-article">
          <h2>Buyer&apos;s Guide</h2>
          {category.buyersGuide.split('\n\n').map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: renderBoldedMarkdown(para) }} />
          ))}
        </div>
      </section>

      {/* ── WHO SHOULDN'T BUY ────────────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm pb-14">
        <div className="max-w-content mx-auto">
          <CalloutBox variant="warning" title="Who shouldn't buy any of these">
            <p>{category.whoShouldntBuy}</p>
          </CalloutBox>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-14">
        <div className="max-w-content mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-2xl tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion
            items={category.faqs.map((f) => ({ question: f.q, answer: f.a }))}
            includeSchema={false}
          />
        </div>
      </section>

      {/* ── CROSS-LINKS ──────────────────────────────────────────────────── */}
      {category.crossLinks.length > 0 && (
        <section className="px-container sm:px-container-sm py-12">
          <div className="max-w-content mx-auto">
            <h2 className="font-display font-bold text-brand-dark text-xl tracking-tight mb-4">
              Related reading from the CarloOS network
            </h2>
            <ul className="list-none p-0 m-0 grid sm:grid-cols-2 gap-3">
              {category.crossLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
                  >
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                      {link.site}
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{link.label} →</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── COMPARISON CTA ───────────────────────────────────────────────── */}
      {products.length >= 2 && (
        <section className="bg-brand-primary-pale px-container sm:px-container-sm py-12">
          <div className="max-w-content mx-auto text-center">
            <h2 className="font-display font-bold text-brand-dark text-2xl tracking-tight mb-3">
              Compare side-by-side
            </h2>
            <p className="text-base text-brand-text-mid mb-6 max-w-xl mx-auto">
              See the top {Math.min(3, products.length)} picks in our spec-by-spec comparison tool.
            </p>
            <Link
              href={`/compare?products=${products
                .slice(0, 3)
                .map((p) => p.slug)
                .join(',')}`}
              className="inline-flex items-center bg-brand-primary text-brand-white font-semibold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors"
            >
              Compare top picks →
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function badgeEmojiFor(badge?: string): string | undefined {
  if (!badge) return undefined
  if (/overall/i.test(badge)) return '🏆'
  if (/value/i.test(badge)) return '💰'
  if (/premium/i.test(badge)) return '⭐'
  if (/budget/i.test(badge)) return '💵'
  if (/heated|heat/i.test(badge)) return '🔥'
  return '✓'
}

function vendorLabel(vendor: string): string {
  switch (vendor) {
    case 'chewy': return 'Chewy'
    case 'amazon': return 'Amazon'
    case 'sharesale': return 'Retailer'
    default: return vendor.charAt(0).toUpperCase() + vendor.slice(1)
  }
}

function subtitleFor(p: Product): string | undefined {
  if (!p.brand) return undefined
  return `${p.brand} · ${(p.best_for ?? []).slice(0, 2).join(' · ')}`
}

function compositeDescription(p: Product): string {
  // Keep editorial third-person framing — no "I tested" claims.
  const lead = p.pros[0] ?? ''
  const counter = p.cons[0] ?? ''
  if (lead && counter) {
    return `${lead}. Compared to alternatives, ${counter.toLowerCase()}.`
  }
  return lead || 'See specs and pros/cons below.'
}

function specGridFor(p: Product): Array<{ label: string; value: string }> {
  const out: Array<{ label: string; value: string }> = []
  const skipKeys = new Set(['_badge', '_best_for'])
  for (const [k, v] of Object.entries(p.specs)) {
    if (skipKeys.has(k)) continue
    if (typeof v === 'string') {
      out.push({ label: humanize(k), value: v })
    } else if (typeof v === 'number' || typeof v === 'boolean') {
      out.push({ label: humanize(k), value: String(v) })
    }
    if (out.length >= 6) break
  }
  return out
}

function humanize(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

/** Render bold markdown (**text**) inline. Used for buyer's guide paragraphs. */
function renderBoldedMarkdown(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}
