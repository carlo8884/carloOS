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
  buildItemListSchema,
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
export { EmailUnderHero, isEmailUnderHeroPath } from './components/EmailUnderHero'
export { DirectoryHub, DirectoryDetail, DirectoryPlacesCta } from './components/DirectoryHub'
export {
  directoryIndexMetadata,
  directoryDetailMetadata,
  directoryStateMetadata,
  directoryCityMetadata,
  directorySlugMetadata,
  renderDirectoryIndex,
  renderDirectoryDetail,
  renderDirectorySlug,
  renderDirectoryCity,
  DIRECTORY_NOUN,
} from './components/directory-page'
export { InquireForm } from './components/InquireForm'
export { InquireOfferScreen } from './components/InquireOfferScreen'

// Monetization primitives (Architect P2, S4, S5 — see MONETIZATION-ARCHITECT.md)
// Note: AffiliateDisclosure is exported below in the editorial component
// library block (the canonical location post-2026-05-31 merge); it is not
// re-exported here to avoid a duplicate-export build error.
export { AffiliateLink, AffiliateDisclosureContext } from './components/AffiliateLink'
export type { Vendor } from './components/AffiliateLink'
export { SkimlinksLoader } from './components/SkimlinksLoader'
export { AdSenseLoader, AdSlot } from './components/AdSense'
export { DisplayAds } from './components/DisplayAds'
export type { DisplayAdConfig } from './components/DisplayAds'
export { VENDORS, resolveVendorUrl } from './components/affiliate-vendors'

// Health condition cards
export { BreedHealthCard, SpeciesHealthCard } from './components/BreedHealthCard'

// Analytics
export { AnalyticsDashboard } from './components/AnalyticsDashboard'

// Search
export { SearchBar } from './components/SearchBar'
export { buildHowToSchema, buildMedicalWebPageSchema, buildOrganizationSchema, buildWebSiteSchema, combineSchemas, buildSpeakableSpec, buildCitationArray } from './components/SEOHead'
export type { ArticleSourceForCitation } from './components/SEOHead'

// Editorial component library
export { PullQuote } from './components/PullQuote'
export type { PullQuoteProps } from './components/PullQuote'
export { DropCap } from './components/DropCap'
export type { DropCapProps } from './components/DropCap'
export { ImageCard } from './components/ImageCard'
export type { ImageCardProps } from './components/ImageCard'
export { StockImage } from './components/StockImage'
export type { StockImageProps } from './components/StockImage'
export { Logo } from './components/Logo'
export type { LogoProps, LogoSize } from './components/Logo'
export { CalloutBox } from './components/CalloutBox'
export type { CalloutBoxProps, CalloutVariant } from './components/CalloutBox'
export { SourceCitation } from './components/SourceCitation'
export type { SourceCitationProps } from './components/SourceCitation'
export { ArticleSourcesList } from './components/ArticleSourcesList'
export type { ArticleSourcesListProps, ArticleSource } from './components/ArticleSourcesList'
export { ArticleByline } from './components/ArticleByline'
export type { ArticleBylineProps } from './components/ArticleByline'
export { EditorialStandardsSignal } from './components/EditorialStandardsSignal'
export type { EditorialStandardsSignalProps } from './components/EditorialStandardsSignal'
export { AffiliateDisclosure } from './components/AffiliateDisclosure'
export type {
  AffiliateDisclosureProps,
  AffiliateDisclosureVariant,
} from './components/AffiliateDisclosure'

export { CrossPortfolioCard } from './components/CrossPortfolioCard'
export type {
  CrossPortfolioCardProps,
  CrossPortfolioVariant,
} from './components/CrossPortfolioCard'

export { OgTemplate } from './og/OgTemplate'
export type { OgTemplateProps, OgSiteId } from './og/OgTemplate'

export { BuyBox } from './components/visual/BuyBox'
export type {
  BuyBoxProps,
  BuyBoxBrand,
  BuyBoxVendor,
  BuyBoxVendorLink,
} from './components/visual/BuyBox'

export { AppleIconTemplate } from './og/AppleIconTemplate'
export type { AppleIconTemplateProps, AppleIconSiteId } from './og/AppleIconTemplate'
