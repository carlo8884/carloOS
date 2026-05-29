/**
 * PetSupplies.com — /compare?products=<slug1>,<slug2>,<slug3>
 * Architect S1 / Directive 6.
 *
 * Side-by-side spec comparison for 2-3 products. Each card terminates in an
 * affiliate CTA routed through @carloOS/config/affiliate.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, CalloutBox } from '@carloOS/ui'
import { getProductsBySlugs, type Product } from '@/lib/products'
import { affiliateHrefFor } from '@/lib/affiliate'

interface PageProps {
  searchParams: { products?: string }
}

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Compare Pet Products Side-by-Side',
  description:
    'Compare 2-3 pet products side by side. Specs, pros, cons, prices, and editorial scores from PetSupplies.com.',
  path: '/compare',
  type: 'website',
})

export default async function ComparePage({ searchParams }: PageProps) {
  const slugs = (searchParams.products ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 3)

  const products = slugs.length > 0 ? await getProductsBySlugs(slugs) : []

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="max-w-content mx-auto">
          <nav className="text-xs text-white/55 flex gap-2 mb-5">
            <Link href="/" className="hover:text-white no-underline">Home</Link>
            <span>›</span>
            <span className="text-white">Compare</span>
          </nav>
          <h1
            className="font-display font-black text-white tracking-tighter leading-tight mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {products.length > 0 ? 'Side-by-Side Comparison' : 'Compare Pet Products'}
          </h1>
          <p className="text-base text-white/65 max-w-2xl">
            Pick 2-3 products from any category page to see them compared spec-by-spec. Editorial
            scoring is independent — see{' '}
            <Link href="/editorial-standards" className="underline hover:text-white">
              how we review
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FTC BANNER ────────────────────────────────────────────────── */}
      <div className="px-container sm:px-container-sm pt-8">
        <div className="max-w-content mx-auto">
          <CalloutBox variant="info" title="FTC Affiliate Disclosure">
            <p>
              This page contains affiliate links. If you purchase through a link we may earn a
              commission at no extra cost to you. Editorial rankings on every category page are
              decided before affiliate links are added. See our{' '}
              <Link href="/editorial-standards" className="text-brand-primary underline hover:no-underline">
                Editorial Standards
              </Link>
              .
            </p>
          </CalloutBox>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-12">
        <div className="max-w-content mx-auto">
          {products.length === 0 ? (
            <EmptyState />
          ) : (
            <ComparisonGrid products={products} />
          )}
        </div>
      </section>
    </>
  )
}

// ─── Empty state ─────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg p-10 text-center">
      <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">
        No products selected
      </h2>
      <p className="text-base text-brand-text-mid mb-6 max-w-lg mx-auto">
        Browse a category and click the &quot;Compare top picks&quot; button at the bottom of any
        category page to load 2-3 products into the comparison view.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors"
      >
        Browse categories →
      </Link>
    </div>
  )
}

// ─── Side-by-side grid ───────────────────────────────────────────────────────
function ComparisonGrid({ products }: { products: Product[] }) {
  // Build a union of all spec keys across the selected products so the rows
  // line up. Skip the meta keys we tuck into specs for transport.
  const skip = new Set(['_badge', '_best_for'])
  const allKeys: string[] = []
  for (const p of products) {
    for (const k of Object.keys(p.specs)) {
      if (skip.has(k)) continue
      if (!allKeys.includes(k)) allKeys.push(k)
    }
  }

  return (
    <>
      {/* Header row: product names + score */}
      <div className="grid gap-4 mb-6" style={{ gridTemplateColumns: `180px repeat(${products.length}, minmax(0, 1fr))` }}>
        <div />
        {products.map((p) => (
          <div key={p.slug} className="text-center">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
              {p.badge ?? 'Editor Pick'}
            </div>
            <div className="font-display font-bold text-brand-dark text-base leading-tight">
              {p.name}
            </div>
            <div className="mt-3 inline-flex items-baseline gap-1 bg-brand-surface rounded-md px-3 py-1.5">
              <span className="font-display text-xl font-bold text-brand-primary leading-none">
                {p.expert_score.toFixed(1)}
              </span>
              <span className="text-2xs text-brand-text-light">/ 10</span>
            </div>
          </div>
        ))}
      </div>

      {/* Spec rows */}
      <div className="rounded-xl overflow-hidden border border-brand-border bg-brand-border" role="table">
        {/* Price row */}
        <ComparisonRow
          label="Price"
          values={products.map((p) => p.price_range ?? '—')}
          columnCount={products.length}
        />
        <ComparisonRow
          label="Vendor"
          values={products.map((p) => vendorLabel(p.vendor))}
          columnCount={products.length}
        />
        {allKeys.map((key) => (
          <ComparisonRow
            key={key}
            label={humanize(key)}
            values={products.map((p) => {
              const v = p.specs[key]
              if (v === undefined || v === null) return '—'
              return String(v)
            })}
            columnCount={products.length}
          />
        ))}
        <ComparisonRow
          label="Strengths"
          values={products.map((p) => p.pros.join(' · '))}
          columnCount={products.length}
        />
        <ComparisonRow
          label="Weaknesses"
          values={products.map((p) => p.cons.join(' · '))}
          columnCount={products.length}
        />
      </div>

      {/* CTA row */}
      <div
        className="grid gap-4 mt-8"
        style={{ gridTemplateColumns: `180px repeat(${products.length}, minmax(0, 1fr))` }}
      >
        <div className="text-xs font-semibold text-brand-text-light self-center">
          Where to buy
        </div>
        {products.map((p) => (
          <a
            key={p.slug}
            href={affiliateHrefFor(p)}
            rel="nofollow sponsored noopener"
            target="_blank"
            className="block bg-brand-primary text-white text-sm font-semibold text-center px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors"
            data-program={p.vendor}
            data-product={p.slug}
          >
            Check on {vendorLabel(p.vendor)} →
          </a>
        ))}
      </div>

      <p className="text-2xs text-brand-text-light text-center mt-3">
        We earn a commission if you purchase — no extra cost to you.
      </p>
    </>
  )
}

function ComparisonRow({
  label,
  values,
  columnCount,
}: {
  label: string
  values: string[]
  columnCount: number
}) {
  return (
    <div
      className="grid gap-px"
      style={{ gridTemplateColumns: `180px repeat(${columnCount}, minmax(0, 1fr))` }}
      role="row"
    >
      <div className="bg-brand-surface px-4 py-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
        {label}
      </div>
      {values.map((v, i) => (
        <div key={i} className="bg-brand-white px-4 py-3 text-sm text-brand-text-mid">
          {v}
        </div>
      ))}
    </div>
  )
}

function humanize(key: string): string {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

function vendorLabel(vendor: string): string {
  switch (vendor) {
    case 'chewy': return 'Chewy'
    case 'amazon': return 'Amazon'
    case 'sharesale': return 'Retailer'
    default: return vendor.charAt(0).toUpperCase() + vendor.slice(1)
  }
}
