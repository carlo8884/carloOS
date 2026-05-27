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
