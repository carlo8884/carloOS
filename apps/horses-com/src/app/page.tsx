/**
 * Horses.com Homepage — /
 * Server component. Shared CarloOS components for all UI.
 * Visual pass: refined-equestrian palette, Playfair Display + Source Sans 3,
 * hero photography + featured-cornerstone photo cards (Unsplash CDN, IDs
 * verified across the CarloOS network or via Unsplash search). Per the
 * COO photo-sourcing playbook: Unsplash heavy for equestrian lifestyle,
 * Wikimedia Commons reserved for breed pages where taxonomic accuracy
 * matters.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage , SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
// Live body-condition-score tool embedded on the homepage so the first
// screens are something you DO, not a link to a tool (premium gate 3).
import { BodyConditionScoreCalculator } from '../components/visual/BodyConditionScoreCalculator'
import { HomeHero } from '../components/HomeHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners: breed guides, equine health, gear reviews, supplement evaluations, and the 90-day first-horse roadmap.',
  path: '/',
  type: 'website',
})
