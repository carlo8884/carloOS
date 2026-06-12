/**
 * SEOHead — CarloOS shared SEO component
 * Handles title, meta, canonical, OpenGraph, Twitter Card, and JSON-LD schema.
 * Used in Next.js app directory via generateMetadata() — see usage below.
 *
 * USAGE (Next.js App Router):
 *
 * import { buildMetadata, buildArticleSchema } from '@carloOS/ui'
 *
 * export const metadata = buildMetadata({
 *   siteId: 'dog-com',
 *   title: 'Golden Retriever Breed Guide',
 *   description: '...',
 *   path: '/breeds/golden-retriever',
 *   ogImage: 'https://...',
 *   type: 'article',
 * })
 */

import type { Metadata } from 'next'
import type { SiteId } from '@carloOS/config'
import { getSiteConfig } from '@carloOS/config'

// ─────────────────────────────────────────────
// METADATA BUILDER
// ─────────────────────────────────────────────

interface BuildMetadataParams {
  siteId: SiteId
  title: string
  description: string
  path: string
  ogImage?: string
  /** Content category label for OG image generation (e.g. "Breed Health Guide") */
  category?: string
  type?: 'website' | 'article'
  noIndex?: boolean
  publishedAt?: string
  modifiedAt?: string
  authorName?: string
}

export function buildMetadata(params: BuildMetadataParams): Metadata {
  const {
    siteId,
    title,
    description,
    path,
    type = 'website',
    noIndex = false,
    publishedAt,
    modifiedAt,
    authorName,
  } = params

  const config = getSiteConfig(siteId)
  // Auto-generate OG image via /api/og if no static image is provided
  const generatedOgImage = `${config.theme.siteUrl}/api/og?title=${encodeURIComponent(title)}&site=${siteId}${params.category ? `&category=${encodeURIComponent(params.category)}` : ''}`
  const ogImage = params.ogImage ?? generatedOgImage
  const canonicalUrl = `${config.theme.siteUrl}${path}`

  // Title handling: pages may pass a title that already ends with the site
  // name (e.g. "Privacy Policy | Dog.com"). Detect any common separator+brand
  // suffix and skip the append so we don't render duplicates like
  // "Privacy Policy | Dog.com | Dog.com".
  const siteName = config.theme.siteName
  const alreadySuffixed = [' | ', ' — ', ' - '].some((sep) =>
    title.endsWith(`${sep}${siteName}`),
  )
  const fullTitle = alreadySuffixed ? title : `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(config.theme.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: config.theme.siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === 'article' && publishedAt ? { publishedTime: publishedAt } : {}),
      ...(type === 'article' && modifiedAt ? { modifiedTime: modifiedAt } : {}),
      ...(type === 'article' && authorName
        ? { authors: [authorName] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      ...(config.twitterHandle ? { site: config.twitterHandle } : {}),
    },
  }
}

// ─────────────────────────────────────────────
// SCHEMA BUILDERS (JSON-LD)
// Return objects — rendered via <SchemaScript> component
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// SPEAKABLE SPECIFICATION
// Add a SpeakableSpecification onto Article / FAQPage / WebPage schema to
// signal to voice assistants and AI answer surfaces which content region
// contains the extractable answer. The stable `.carloOS-article` selector
// wraps every article body rendered via ArticleLayout. Use only on pages
// that carry a genuine concise answer or FAQ — not on listing/nav pages.
//
// Usage:
//   // Option A — flag on buildArticleSchema / buildFAQSchema:
//   buildArticleSchema({ ..., speakable: true })
//
//   // Option B — spread onto any existing schema object:
//   const schema = { ...buildArticleSchema({...}), ...buildSpeakableSpec() }
// ─────────────────────────────────────────────

/**
 * Returns a partial schema fragment `{ speakable: [SpeakableSpecification] }`
 * targeting the stable `.carloOS-article` CSS selector (the <article> body
 * emitted by ArticleLayout). Optionally pass custom selectors to override.
 *
 * Spread this onto an existing Article/FAQPage/WebPage schema object, or pass
 * `speakable: true` to the individual schema builders that accept that flag.
 */
export function buildSpeakableSpec(cssSelectors?: string[]) {
  const selectors = cssSelectors ?? ['.carloOS-article']
  return {
    speakable: [
      {
        '@type': 'SpeakableSpecification',
        cssSelector: selectors,
      },
    ],
  }
}

interface ArticleSchemaParams {
  siteId: SiteId
  title: string
  description: string
  url: string
  imageUrl: string
  authorName: string
  publishedAt: string
  modifiedAt: string
  /**
   * When true, adds a SpeakableSpecification targeting `.carloOS-article`.
   * Use on Q&A spokes and FAQ-bearing guides where the article body
   * opens with a concise extractable answer (e.g. a CalloutBox "short answer").
   */
  speakable?: boolean
}

export function buildArticleSchema(params: ArticleSchemaParams) {
  const config = getSiteConfig(params.siteId)
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.imageUrl,
    datePublished: params.publishedAt,
    dateModified: params.modifiedAt,
    author: {
      '@type': 'Person',
      name: params.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: config.theme.siteName,
      url: config.theme.siteUrl,
    },
    mainEntityOfPage: params.url,
    ...(params.speakable ? buildSpeakableSpec() : {}),
  }
}

interface FAQSchemaParams {
  questions: Array<{ question: string; answer: string }>
  /**
   * When true, adds a SpeakableSpecification targeting `.carloOS-article`.
   * Use on standalone FAQ hub pages where the FAQAccordion is the primary
   * content and sits inside the `.carloOS-article` wrapper.
   */
  speakable?: boolean
}

export function buildFAQSchema(params: FAQSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: params.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
    ...(params.speakable ? buildSpeakableSpec() : {}),
  }
}

interface BreadcrumbSchemaParams {
  items: Array<{ name: string; url: string }>
}

type BreadcrumbSchemaInput =
  | BreadcrumbSchemaParams
  | Array<{ name: string; url: string }>

export function buildBreadcrumbSchema(input: BreadcrumbSchemaInput) {
  const items = Array.isArray(input) ? input : input.items
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

interface ProductSchemaParams {
  name: string
  description: string
  imageUrl?: string
  /**
   * The page's single disclosed editorial score, mapped to `review.reviewRating`
   * on a 0–`bestRating` scale. OMIT entirely when the page does not display a
   * real disclosed editorial score — never fabricate one (QC §1.4). When omitted,
   * the Product carries an editorial `Review` with no numeric rating.
   */
  ratingValue?: number
  /** Max of the editorial score scale actually shown on the page. Default 10. */
  bestRating?: number
  /** Retained for caller compatibility; intentionally unused (no AggregateRating). */
  reviewCount?: number
  /** Editorial verdict text drawn from the page's own ReviewCard content. */
  reviewBody?: string
  /** Review author org name, e.g. "Lizard.com Editorial". Default "Editorial team". */
  reviewAuthorName?: string
  priceRange?: string
  url?: string
}

export function buildProductSchema(params: ProductSchemaParams) {
  // The score is our single editorial assessment — represent it as a `Review`
  // (authored by the editorial team), NOT an `AggregateRating`. An aggregate
  // rating implies multiple user reviews; emitting one would misrepresent an
  // editorial score as a user-review base (QC §1.4). `reviewRating` is included
  // ONLY when the caller passes a real, page-displayed editorial score; if
  // `ratingValue` is omitted the Review carries no numeric rating at all.
  const review: Record<string, unknown> = {
    '@type': 'Review',
    author: { '@type': 'Organization', name: params.reviewAuthorName ?? 'Editorial team' },
    ...(params.reviewBody ? { reviewBody: params.reviewBody } : {}),
    ...(params.ratingValue != null
      ? {
          reviewRating: {
            '@type': 'Rating',
            ratingValue: params.ratingValue,
            bestRating: params.bestRating ?? 10,
          },
        }
      : {}),
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    ...(params.imageUrl ? { image: params.imageUrl } : {}),
    ...(params.url ? { url: params.url } : {}),
    review,
    ...(params.priceRange ? { offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', offerCount: 1, price: params.priceRange } } : {}),
  }
}

// ─────────────────────────────────────────────
// ITEMLIST SCHEMA (JSON-LD)
// For ranked listicles — emits an ordered ItemList of the ranked picks so AI
// answer surfaces can extract the ranking. Each entry is a ListItem with a
// position and name; an optional url anchors it to the on-page section.
// ─────────────────────────────────────────────

interface ItemListSchemaParams {
  /** Ranked picks in display order. Position is assigned by array order (1-based). */
  items: Array<{ name: string; url?: string }>
  name?: string
}

export function buildItemListSchema(params: ItemListSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(params.name ? { name: params.name } : {}),
    itemListElement: params.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
    })),
  }
}

// ─────────────────────────────────────────────
// HOW-TO SCHEMA
// For step-by-step training and care guides
// ─────────────────────────────────────────────

interface HowToStep {
  name: string
  text: string
  url?: string
}

interface HowToSchemaParams {
  name: string
  description: string
  url: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration e.g. "PT30M"
  estimatedCost?: string
}

export function buildHowToSchema(params: HowToSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    url: params.url,
    ...(params.totalTime ? { totalTime: params.totalTime } : {}),
    ...(params.estimatedCost ? { estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: params.estimatedCost } } : {}),
    step: params.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  }
}

// ─────────────────────────────────────────────
// MEDICAL WEB PAGE SCHEMA
// For consumer-facing pet health reference content
// ─────────────────────────────────────────────

interface MedicalWebPageSchemaParams {
  name: string
  description: string
  url: string
  authorName: string
  lastReviewed: string // ISO date
  medicalAudience?: 'Patient' | 'Caregiver' | 'Clinician'
}

export function buildMedicalWebPageSchema(params: MedicalWebPageSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: params.name,
    description: params.description,
    url: params.url,
    lastReviewed: params.lastReviewed,
    author: { '@type': 'Organization', name: params.authorName },
    audience: {
      '@type': 'MedicalAudience',
      audienceType: params.medicalAudience ?? 'Caregiver',
    },
    mainContentOfPage: { '@type': 'WebPageElement', cssSelector: '.carloOS-article' },
  }
}

// ─────────────────────────────────────────────
// ORGANIZATION SCHEMA
// Site-level publisher identity — drop on each homepage
// ─────────────────────────────────────────────

interface OrganizationSchemaParams {
  siteId: SiteId
  name: string
  url: string
  logoUrl?: string
}

export function buildOrganizationSchema(params: OrganizationSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${params.url}#organization`,
    name: params.name,
    url: params.url,
    ...(params.logoUrl ? { logo: params.logoUrl } : {}),
  }
}

// ─────────────────────────────────────────────
// WEBSITE SCHEMA
// Site-level WebSite entity — drop on each homepage.
// SearchAction is omitted unless the site exposes a user-facing
// search results route (none currently do).
// ─────────────────────────────────────────────

interface WebSiteSchemaParams {
  siteId: SiteId
  name: string
  url: string
}

export function buildWebSiteSchema(params: WebSiteSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${params.url}#website`,
    name: params.name,
    url: params.url,
    publisher: { '@id': `${params.url}#organization` },
  }
}

// ─────────────────────────────────────────────
// MULTI-SCHEMA HELPER
// Combine multiple schemas into an array for one SchemaScript call
// ─────────────────────────────────────────────

export function combineSchemas(...schemas: Array<Record<string, unknown>>) {
  return schemas.filter(Boolean)
}

// ─────────────────────────────────────────────
// SCHEMA SCRIPT COMPONENT
// Renders JSON-LD into <script> tag in <head>
// ─────────────────────────────────────────────

interface SchemaScriptProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>
}

export function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
