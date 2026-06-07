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

interface ArticleSchemaParams {
  siteId: SiteId
  title: string
  description: string
  url: string
  imageUrl: string
  authorName: string
  publishedAt: string
  modifiedAt: string
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
  }
}

interface FAQSchemaParams {
  questions: Array<{ question: string; answer: string }>
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
  imageUrl: string
  ratingValue: number
  reviewCount: number
  priceRange?: string
  url: string
}

export function buildProductSchema(params: ProductSchemaParams) {
  // The score is our single editorial assessment — represent it as a `Review`
  // (authored by the editorial team), NOT an `AggregateRating`. An aggregate
  // rating implies multiple user reviews; emitting one with reviewCount:1 would
  // misrepresent an editorial score as a user-review base (QC §1.4). `reviewCount`
  // is retained in the params for caller compatibility but intentionally unused.
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: params.name,
    description: params.description,
    ...(params.imageUrl ? { image: params.imageUrl } : {}),
    url: params.url,
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: params.ratingValue,
        bestRating: 10,
      },
      author: { '@type': 'Organization', name: 'Editorial team' },
    },
    ...(params.priceRange ? { offers: { '@type': 'AggregateOffer', priceCurrency: 'USD', offerCount: 1, price: params.priceRange } } : {}),
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
