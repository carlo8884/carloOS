/**
 * Fish.com Homepage — / (Aquarist's Tank Control Center)
 *
 * Image-led, mobile-first rebuild (v3, 2026-06-05) applying the APPROVED
 * Dog.com premium homepage pattern (reference merged to main, PR #487) to
 * Fish.com using Fish's brand (aquarium-magazine voice, deep teal #0E5F7E on a
 * near-black masthead, Cormorant Garamond italic display + Inter body) and
 * Fish's REAL synced photography.
 *
 * What changed from v2 (the problem-first dark masthead):
 *   - A REAL aquarium photo (fish-com:hero) is now the FIRST + dominant thing
 *     after the nav on every breakpoint: a full-bleed hero (~60vh mobile) with
 *     the H1 + one primary CTA overlaid on a dark teal gradient scrim. Imagery
 *     is above the fold on mobile, not below it.
 *   - The problem-triage cards (the product the page has always led with) stay
 *     directly below the hero in the dark band — same six SVG-icon cards, now
 *     in a dedicated "Start where you are" section.
 *   - Image-rich sections throughout use Fish's REAL synced category keys for
 *     prominent imagery (tank planning, water safety, species, equipment,
 *     reviews).
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded URLs (trust-guard blocks hardcoded stock-CDN URLs).
 *   - Prime visual areas (hero + image-backed tiles) pass `subtleCredit` so
 *     attribution stays present + clickable but unobtrusive.
 *   - Every text-over-image surface has a gradient scrim so copy stays legible.
 *   - REAL keys used for prominent imagery (confirmed in image-manifest.json):
 *       fish-com:hero                (planted freshwater aquarium)
 *       fish-com:category-setup      (planted aquascape)
 *       fish-com:cornerstone-cycling (water test kit)
 *       fish-com:category-species    (betta in a planted tank)
 *       fish-com:category-equipment  (filtration/heating gear)
 *       fish-com:category-reviews    (display aquarium)
 *   - The per-species THUMBNAIL keys (fish-com:species-thumb-betta /
 *     -neon-tetra / -clownfish / -goldfish / -angelfish / -discus / -guppy /
 *     -oscar / -corydoras) and tools-hero / water-parameters-hero /
 *     glossary-hero FAILED to sync and are NEVER passed to a rendered
 *     <StockImage>. The featured-species section is presented as premium TEXT
 *     cards (no image slot) so the page ships zero placeholder image slots and
 *     no failed thumb is featured in a photo grid.
 *
 * Reused routes (all verified to exist on origin/main):
 *   /water (water chemistry hub)
 *   /setup, /setup/aquarium-cycling-guide, /setup/water-chemistry-guide,
 *     /setup/planted-tank-setup, /setup/saltwater-tank-setup,
 *     /setup/quarantine-tank-guide, /setup/pond-guide
 *   /species, /species/[slug] (37+ species pages)
 *   /health, /health/fish-disease-guide, /health/ich-treatment,
 *     /health/fin-rot, /health/new-tank-syndrome, /health/dropsy-treatment,
 *     /health/columnaris, /health/gill-flukes, /health/nitrogen-cycle-explained
 *   /equipment, /equipment/[slug] (6 equipment category guides)
 *   /tools (calculators hub), /tools/aquarium-volume-calculator,
 *     /tools/co2-calculator, /tools/heater-wattage-calculator,
 *     /tools/stocking-calculator, /tools/water-change-calculator,
 *     /tools/equipment-recommender
 *   /reviews, /reviews/best-aquarium-heaters, /reviews/best-aquarium-filters,
 *     /reviews/best-aquarium-lighting, /reviews/best-canister-filters,
 *     /reviews/best-water-test-kits, /reviews/best-nano-tanks,
 *     /reviews/best-planted-tank-fertilizers
 *   /glossary, /disclosure, /editorial-standards
 *
 * Trust posture (QC §1):
 *   - No fake authority. "Source-grounded" and "research-based" only
 *   - No "Expert"-style review claims; "Practical Aquarium Guides" framing
 *   - No fake aquarists, fake biologists, fake testing/hands-on claims
 *   - Editorial byline: "Fish.com Editorial"
 *   - FTC affiliate disclosure preserved in footer (Footer component) + every
 *     review page (already-shipped AffiliateDisclosure component). The top
 *     inline disclosure banner is NOT present in layout.tsx.
 */

import type { Metadata } from 'next'
import type React from 'react'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
// Live, interactive volume calculator embedded on the homepage so the first
// tool section is a tool you use, not a list of links to tools (premium gate 3).
import VolumeCalculator from './tools/aquarium-volume-calculator/Calculator'
import { SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'fish-com', name: 'Fish.com', url: 'https://fish.com' }),
  buildWebSiteSchema({ siteId: 'fish-com', name: 'Fish.com', url: 'https://fish.com' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fish.com — Tank Control Center for Aquarium Keepers',
  description:
    'Cloudy water, fish gasping, ammonia spikes, cycling, stocking, equipment — start where you are and get routed to the right guide or calculator.',
  path: '/',
  type: 'website',
})
