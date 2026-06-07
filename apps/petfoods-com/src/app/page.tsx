/**
 * PetFoods.com — homepage.
 *
 * The catalog hub. Four working sections (brands, ingredients, life-stage,
 * recalls) feed the editorial sister site PetFood.com. This page positions
 * the two-domain split and links into each catalog hub.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfoods-com',
  title: 'PetFoods.com — The Pet Food Catalog',
  description:
    'Independent catalog of every commercial dog and cat food: brands, ingredients, life stages, recalls. Companion to PetFood.com editorial scoring.',
  path: '/',
  type: 'website',
})

interface Section {
  title: string
  href: string
  blurb: string
  status: string
}

const sections: Section[] = [
  {
    title: 'Brands',
    href: '/brands',
    blurb:
      'Alphabetical index of major commercial pet food brands sold in the US, each mapped to corporate parent and manufacturing country. Cross-linked to PetFood.com brand comparisons as they publish.',
    status: 'Brand index + 10 WSAVA-scored reviews',
  },
  {
    title: 'Ingredients',
    href: '/ingredients',
    blurb:
      'A–Z reference of common dog and cat food ingredients, grouped by AAFCO functional category — proteins, carbs, fats, fibers, preservatives, supplements, and disclosure patterns worth scrutiny.',
    status: 'Category-grouped index + ingredient deep dives',
  },
  {
    title: 'Life Stage',
    href: '/life-stage',
    blurb:
      'AAFCO life-stage classifications — Growth, Adult Maintenance, All Life Stages, plus the marketing-only “Senior” category — with the nutrient-profile differences explained.',
    status: 'AAFCO profiles + brand-selection guidance',
  },
  {
    title: 'Recalls',
    href: '/recalls',
    blurb:
      'Year-by-year structured catalog of US commercial pet food recalls reported to the FDA Center for Veterinary Medicine since 2018, with Class I/II/III explanations and recall-alert signup.',
    status: 'Year-by-year index · 2018–present',
  },
  {
    title: 'Label Glossary',
    href: '/glossary',
    blurb:
      'What the regulated and marketing terms on a pet food label actually mean — the AAFCO 95%/25%/with/flavor naming rules, complete & balanced, human-grade, natural, organic, and the marketing-only terms with no enforceable definition.',
    status: 'Live · cross-linked to the ingredient catalog',
  },
]

export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '96px 24px 64px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3rem',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          color: 'var(--brand-text-dark)',
          marginBottom: '20px',
        }}
      >
        PetFoods.com
      </h1>
      <p
        style={{
          fontSize: '1.125rem',
          lineHeight: 1.6,
          color: 'var(--brand-text-mid)',
          maxWidth: '720px',
          marginBottom: '20px',
        }}
      >
        The catalog. An independent reference index of every commercial dog and cat food sold in
        the United States — organized by brand, by ingredient, by life stage, and by recall.
        Built to be referenced, not browsed.
      </p>
      <p
        style={{
          fontSize: '1rem',
          lineHeight: 1.65,
          color: 'var(--brand-text-mid)',
          maxWidth: '720px',
          marginBottom: '48px',
        }}
      >
        <strong>PetFoods.com is the catalog. </strong>
        <Link href="https://petfood.com" style={{ color: 'var(--brand-primary)' }}>
          PetFood.com
        </Link>{' '}
        (sister site, singular) is the editorial scoring and brand comparison — methodology,
        ingredient explainers, brand-vs-brand reviews. Same standards, two surfaces: this site is
        the structured database, the other is the published editorial.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
          marginBottom: '56px',
        }}
      >
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            style={{
              display: 'block',
              padding: '22px 24px',
              border: '1px solid var(--brand-border)',
              borderRadius: '6px',
              background: 'var(--brand-white)',
              color: 'var(--brand-text-dark)',
              textDecoration: 'none',
              transition: 'border-color 120ms ease',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.05rem',
                fontWeight: 700,
                letterSpacing: '-0.005em',
                color: 'var(--brand-text-dark)',
                marginBottom: '8px',
              }}
            >
              {section.title}
            </div>
            <p
              style={{
                fontSize: '0.92rem',
                lineHeight: 1.55,
                color: 'var(--brand-text-mid)',
                margin: '0 0 12px',
              }}
            >
              {section.blurb}
            </p>
            <div
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--brand-primary)',
                fontWeight: 600,
              }}
            >
              {section.status}
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          padding: '20px 22px',
          borderLeft: '4px solid var(--brand-primary)',
          background: 'var(--brand-primary-pale)',
          fontSize: '0.95rem',
          color: 'var(--brand-text-mid)',
          lineHeight: 1.6,
          marginBottom: '56px',
          maxWidth: '720px',
        }}
      >
        The catalog cites primary sources — AAFCO Official Publication 2025 for ingredient
        definitions and nutrient profiles, FDA CVM Recalls &amp; Withdrawals for recall history,
        and the WSAVA Global Nutrition Committee’s guidance for manufacturer-evaluation criteria.
        No marketing claims are repeated without underlying citation. No brand pays for placement.
      </div>

      <footer
        style={{
          fontSize: '0.875rem',
          color: 'var(--brand-text-light)',
        }}
      >
        © {year} PetFoods.com — sister catalog to PetFood.com.
      </footer>
    </div>
  )
}
