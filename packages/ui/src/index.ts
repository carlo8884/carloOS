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

// Affiliate / monetization (Architect S1: Universal Comparison Engine)
export { AffiliateLink, resolveAffiliateUrl, getVendorLabel } from './components/AffiliateLink'
export type { AffiliateVendor } from './components/AffiliateLink'
export { AffiliateDisclosure } from './components/AffiliateDisclosure'

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
