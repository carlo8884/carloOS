/**
 * @carloOS/ui — shared component library
 * All 5 sites import from here.
 */

// SEO & Schema
export {
  SchemaScript,
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildProductSchema,
} from './components/SEOHead'

// Layout
export { Nav } from './components/Nav'
export { Footer } from './components/Footer'
export { ArticleLayout } from './components/ArticleLayout'
export { Breadcrumb } from './components/Breadcrumb'

// Content components
export { ReviewCard, QuickPicks } from './components/ReviewCard'
export { ScoreMethodology } from './components/ScoreMethodology'
export { FAQAccordion } from './components/FAQAccordion'
export type { FAQItem } from './components/FAQAccordion'

// Sidebar
export {
  SidebarCard,
  TableOfContents,
  RankingsList,
  RelatedLinks,
} from './components/SidebarCard'

// Forms
export { EmailCapture } from './components/EmailCapture'

// Health condition cards
export { BreedHealthCard, SpeciesHealthCard } from './components/BreedHealthCard'

// Analytics
export { AnalyticsDashboard } from './components/AnalyticsDashboard'

// Search
export { SearchBar } from './components/SearchBar'
export { buildHowToSchema, buildMedicalWebPageSchema, combineSchemas } from './components/SEOHead'

// Editorial component library
export { PullQuote } from './components/PullQuote'
export type { PullQuoteProps } from './components/PullQuote'
export { DropCap } from './components/DropCap'
export type { DropCapProps } from './components/DropCap'
export { ImageCard } from './components/ImageCard'
export type { ImageCardProps } from './components/ImageCard'
export { StockImage } from './components/StockImage'
export type { StockImageProps } from './components/StockImage'
export { CalloutBox } from './components/CalloutBox'
export type { CalloutBoxProps, CalloutVariant } from './components/CalloutBox'
export { SourceCitation } from './components/SourceCitation'
export type { SourceCitationProps } from './components/SourceCitation'
export { ArticleByline } from './components/ArticleByline'
export type { ArticleBylineProps } from './components/ArticleByline'
export { AffiliateDisclosure } from './components/AffiliateDisclosure'
export type {
  AffiliateDisclosureProps,
  AffiliateDisclosureVariant,
} from './components/AffiliateDisclosure'

// Cross-portfolio sister-site recommendations (restoring export shipped in PR #72,
// lost in a later merge — re-export only; CrossPortfolioCard.tsx itself untouched).
export { CrossPortfolioCard } from './components/CrossPortfolioCard'
export type {
  CrossPortfolioCardProps,
  CrossPortfolioVariant,
} from './components/CrossPortfolioCard'

// Open Graph image template — consumed by each app's /api/og/route.tsx
// via `new ImageResponse(<OgTemplate ... />, ...)` from edge runtime.
// Carries the per-site palette + wordmark so route handlers stay
// 12-line minimal.
export { OgTemplate } from './og/OgTemplate'
export type { OgTemplateProps, OgSiteId } from './og/OgTemplate'

// Apple touch icon template — consumed by each app's apple-icon.tsx
// (App Router special filename). 180×180; iOS / iPadOS use this when
// users pin the site to the home screen.
export { AppleIconTemplate } from './og/AppleIconTemplate'
export type { AppleIconTemplateProps, AppleIconSiteId } from './og/AppleIconTemplate'
