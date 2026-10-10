/**
 * CarloOS ReviewCard — product/service review card component.
 * Used on comparison pages (best pet insurance, best dog food, saddle reviews, etc.)
 *
 * Supports: score badge, spec grid, pros/cons, affiliate CTA, winner highlight.
 */

import type { ReactNode } from 'react'
import { hopCommissionReady, isChewyHop, liveAnchorHref, partnerLinkQuiet, partnerQuoteHeld, partnerTagReady, shopCtaLabel, tableShopLink, visitNextStep } from '@carloOS/config/affiliate-hop'
import { HeldQuoteNext } from './HeldQuoteNext'

const EARNING_PICK_SITES = new Set(['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com'])

/** Names the product and the retailer the pick hop actually opens. */
function QuickPickShopLink({ href, name, shopLabel, quietUntilTag = false }: { href?: string; name: string; shopLabel?: string; quietUntilTag?: boolean }) {
  if (!href || !name.trim()) return null
  if (!EARNING_PICK_SITES.has(process.env.NEXT_PUBLIC_SITE_ID ?? '')) return null
  const hop = liveAnchorHref(href)
  if (!hop) {
    if (!href?.startsWith('/go/')) return null
    return (
      <span className="relative z-10 ml-2 text-2xs font-semibold normal-case tracking-normal text-brand-text-light">
        partner ID needed
      </span>
    )
  }
  void quietUntilTag
  const built = tableShopLink(href, name.trim())
  if (!built) return null
  return (
    <a
      href={hop}
      data-shop-placement="quick-pick"
      rel="sponsored noopener"
      className="relative z-10 ml-2 text-2xs font-semibold normal-case tracking-normal text-brand-dark underline underline-offset-2"
    >
      {shopLabel || `Check price of ${built.label}`}
    </a>
  )
}

/** Small method link beside a Best Overall label. Same line as the badge so the shop row does not move down. */
function HowWePickLink({ label }: { label?: string }) {
  if (label !== 'Best Overall') return null
  if (!EARNING_PICK_SITES.has(process.env.NEXT_PUBLIC_SITE_ID ?? '')) return null
  return (
    <a
      href="/how-we-pick"
      className="relative z-10 ml-2 text-2xs font-semibold normal-case tracking-normal text-brand-text-light underline underline-offset-2 whitespace-nowrap"
    >
      How we pick
    </a>
  )
}

interface Spec {
  label: string
  value: string
  highlight?: 'good' | 'warn' | 'bad'
}

interface ReviewCardProps {
  /** "Best Overall", "Best Value", etc. */
  badge?: string
  badgeEmoji?: string
  name: string
  subtitle?: string

  /** Score out of 10. Omit when the page does not publish a score. */
  score?: number

  description: ReactNode

  specs?: Spec[]
  pros?: string[]
  cons?: string[]

  priceLabel?: string
  price?: string
  priceNote?: string

  ctaText?: string
  ctaHref?: string
  /** Keep a Trupanion, Healthy Paws, or Embrace quote visible but disabled until its tag is set. */
  holdWithoutPartnerId?: boolean
  /** Held product partners stay on the card as a note until their own tag is set. */
  quietUntilTag?: boolean
  ctaAffiliateProgram?: string
  ctaAffiliateProduct?: string

  /** Editorial/non-commercial CTA (e.g. clinical product → /find-a-vet). Suppresses the
   *  affiliate commission note, sponsored rel, and affiliate data-attrs. Use for QC §1.5.b
   *  clinical/medicated products that must NOT present as monetized buy-boxes. */
  editorial?: boolean

  /** Highlights the card with primary color top border */
  winner?: boolean

  /** Anchor ID for jump links */
  id?: string
}

export function ReviewCard({
  badge,
  badgeEmoji,
  name,
  subtitle,
  score,
  description,
  specs,
  pros,
  cons,
  priceLabel = 'Price Range',
  price,
  priceNote,
  ctaText = 'Check Price →',
  ctaHref,
  holdWithoutPartnerId = false,
  quietUntilTag = false,
  ctaAffiliateProgram,
  ctaAffiliateProduct,
  editorial,
  winner = false,
  id,
}: ReviewCardProps) {
  const rawHref = ctaHref && ctaHref !== '#' ? ctaHref : undefined
  const href = liveAnchorHref(rawHref)
  const quiet = Boolean(
    rawHref?.startsWith('/go/') && !href && (quietUntilTag || partnerLinkQuiet(rawHref)),
  )
  const visit = !href ? visitNextStep(rawHref) : null
  const held = Boolean(
    rawHref &&
      !href &&
      !quiet &&
      !visit &&
      (partnerQuoteHeld(rawHref) ||
        (holdWithoutPartnerId && !partnerTagReady(rawHref)) ||
        rawHref.startsWith('/go/')),
  )
  const chewyCta = isChewyHop(href ?? '')
  const program = chewyCta
    ? ctaAffiliateProgram
    : href?.includes('/go/amazon')
      ? 'amazon'
      : ctaAffiliateProgram
  const label = shopCtaLabel(rawHref, ctaText)
  return (
    <div
      id={id}
      data-review-card={winner ? 'winner' : 'standard'}
      className={[
        'bg-brand-white border border-brand-border rounded-lg p-8 mb-6',
        'transition-shadow duration-200 hover:shadow-card-hover',
        winner ? 'border-t-[3px] border-t-brand-primary' : '',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-5 mb-5">
        <div className="flex-1 min-w-0">
          {badge && (
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2 break-words">
              {badgeEmoji} {badge}
              <HowWePickLink label={badge} />
            </div>
          )}
          <h2 className="font-display text-2xl font-black text-brand-dark tracking-tight mb-1 break-words">
            {name}
          </h2>
          {subtitle && (
            <p className="text-xs text-brand-text-light mt-1">{subtitle}</p>
          )}
        </div>

        {score != null && (
          <div className="text-center bg-brand-surface rounded-lg px-4 py-3 flex-shrink-0">
            <span className="font-display text-4xl font-bold text-brand-primary leading-none block">
              {score.toFixed(1)}
            </span>
            <span className="text-2xs text-brand-text-light mt-1 block">Editor Score</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="text-base text-brand-text-mid leading-relaxed mb-5">
        {description}
      </div>

      {/* Specs grid */}
      {specs && specs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
          {specs.map((spec, i) => (
            <div key={i} className="bg-brand-surface rounded px-3 py-2.5">
              <div className="text-2xs font-bold tracking-wider uppercase text-brand-text-light mb-1">
                {spec.label}
              </div>
              <div className={[
                'text-xs font-bold',
                spec.highlight === 'good' ? 'text-brand-success' : '',
                spec.highlight === 'warn' ? 'text-brand-warning' : '',
                spec.highlight === 'bad' ? 'text-brand-danger' : '',
                !spec.highlight ? 'text-brand-dark' : '',
              ].join(' ')}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pros / Cons */}
      {(pros || cons) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {pros && pros.length > 0 && (
            <div>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-success mb-2">
                Strengths
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                {pros.map((p, i) => (
                  <li key={i} className="text-xs text-brand-text-mid flex gap-2">
                    <span className="text-brand-success font-bold flex-shrink-0">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {cons && cons.length > 0 && (
            <div>
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">
                Weaknesses
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
                {cons.map((c, i) => (
                  <li key={i} className="text-xs text-brand-text-mid flex gap-2">
                    <span className="text-brand-danger font-bold flex-shrink-0">−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Footer: price + CTA */}
      {(price || href || held || quiet || visit) && (
        <div className="pt-5 border-t border-brand-border mt-2 min-w-0">
          {href && !editorial && href.startsWith('/go/') && hopCommissionReady(href) ? (
            <p className="text-2xs text-brand-text-light mb-2" data-affiliate-disclosure="hop">
              {/\/go\/amazon/.test(href)
                ? 'As an Amazon Associate we earn from qualifying purchases.'
                : 'We earn a commission if you purchase — no extra cost to you.'}
            </p>
          ) : null}
          <div className="flex flex-col items-stretch sm:flex-row sm:items-end sm:justify-between gap-4 min-w-0">
            {price && (
              <div>
                <div className="text-2xs uppercase tracking-wide text-brand-text-light mb-1">
                  {priceLabel}
                </div>
                <div className="font-display text-xl font-bold text-brand-dark">{price}</div>
                {priceNote && (
                  <div className="text-2xs text-brand-text-light mt-1">{priceNote}</div>
                )}
              </div>
            )}

            {quiet ? (
              <span className="text-sm leading-relaxed text-brand-text-light">
                {ctaText.replace(/\s*→\s*$/, '').trim()} — partner ID needed
              </span>
            ) : visit ? (
              <a
                href={visit.href}
                className="inline-flex items-center justify-center text-sm font-bold text-brand-primary underline underline-offset-2 max-w-full text-left whitespace-normal"
              >
                {visit.label}
              </a>
            ) : held ? (
              <HeldQuoteNext />
            ) : href ? (
              <a
                href={href}
                data-shop-placement={!editorial && (href.startsWith('/go/') || href.startsWith('http')) ? 'card' : undefined}
                className="inline-flex items-center justify-center bg-brand-primary text-brand-white text-sm font-bold px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200 max-w-full text-center whitespace-normal"
                data-program={editorial ? undefined : program}
                data-product={editorial ? undefined : ctaAffiliateProduct}
                rel={editorial ? undefined : 'nofollow sponsored'}
                target={editorial ? undefined : '_blank'}
              >
                {label}
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Review Page Quick Picks ──────────────────────────────────────────────────

interface QuickPickItem {
  label: string
  emoji?: string
  name: string
  subtitle?: string
  href: string
  /** Existing product hop for the Best Overall card. Other labels ignore it. */
  pickHop?: string
  /** Visible quick-pick wording when the hop is a search, not a product page. */
  pickShopLabel?: string
}

interface QuickPicksProps {
  items: QuickPickItem[]
  title?: string
  /** Held product pick hops stay as a note until their own tag is set. */
  quietUntilTag?: boolean
}

export function QuickPicks({ items, title = 'Jump to Your Pick', embedded = false, quietUntilTag = false }: QuickPicksProps & { embedded?: boolean }) {
  return (
    <div className={embedded
      ? 'bg-brand-surface border border-brand-border rounded-lg py-5 px-4 mb-6'
      : 'bg-brand-surface border-b border-brand-border px-container-sm sm:px-container py-5'}>
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
        {title}
      </div>
      <div className={embedded ? 'grid grid-cols-1 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'}>
        {items.map((item) => (
          <div
            key={item.href}
            className="relative block bg-brand-white border border-brand-border rounded-lg p-3.5 hover:border-brand-primary transition-colors duration-200"
          >
            <a href={item.href} aria-label={`${item.label}: ${item.name}`} className="absolute inset-0 rounded-lg" />
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5 break-words">
              {item.emoji} {item.label}
              <HowWePickLink label={item.label} />
              <QuickPickShopLink href={item.pickHop} name={item.name} shopLabel={item.pickShopLabel} quietUntilTag={quietUntilTag} />
            </div>
            <div className="pointer-events-none">
              <div className="text-sm font-bold text-brand-dark mb-0.5">{item.name}</div>
              {item.subtitle && (
                <div className="text-xs text-brand-text-light">{item.subtitle}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
