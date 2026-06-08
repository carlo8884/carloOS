/**
 * /states — ferret-legality state directory hub.
 *
 * Grid of all 50 states + DC, color-coded by legal status. Top-of-page
 * explainer covering the four common status categories (legal, requires-
 * permit, restricted, illegal) and the editorial trust contract for the
 * directory. Sidebar surfaces the highest-search-volume top-15 states for
 * quick navigation.
 *
 * Server component. Prerendered at build time (no runtime dependencies).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
  EmailCapture,
  CalloutBox,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { PageMasthead } from '@/components/PageMasthead'
import {
  States,
  TOP_STATE_SLUGS,
  effectiveLegalStatus,
  type StateEntry,
  type LegalStatus,
  type Region,
} from '@/data/states'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Are Ferrets Legal? State-by-State Ferret Laws & Adoption Directory',
  description:
    'A color-coded directory of US ferret laws for all 50 states and DC, with state-code citations, permit requirements, and AFA-affiliated adoption pointers.',
  path: '/states',
  type: 'website',
  category: 'State Directory',
})

// ─── Status presentation (matches /states/[slug]) ────────────────────────────

interface StatusPresentation {
  label: string
  badgeBg: string
  badgeText: string
  borderColor: string
  sortRank: number
}

const STATUS_PRESENTATION: Record<LegalStatus, StatusPresentation> = {
  legal: {
    label: 'Legal',
    badgeBg: '#E2F1E5',
    badgeText: '#1E4A28',
    borderColor: '#2A6A3A',
    sortRank: 0,
  },
  'requires-permit': {
    label: 'Permit',
    badgeBg: '#E7EEFC',
    badgeText: '#1A3A7A',
    borderColor: '#1A3A7A',
    sortRank: 1,
  },
  restricted: {
    label: 'Restricted',
    badgeBg: '#FEF3D8',
    badgeText: '#7A5A18',
    borderColor: '#C8952A',
    sortRank: 2,
  },
  illegal: {
    label: 'Illegal',
    badgeBg: '#FCE7E7',
    badgeText: '#7A1818',
    borderColor: '#A02A2A',
    sortRank: 3,
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function StatesHubPage() {
  // Group states by region for the US-map-style grid.
  const regions: Region[] = ['Northeast', 'Midwest', 'South', 'West']
  const stateByRegion: Record<Region, StateEntry[]> = {
    Northeast: [],
    Midwest: [],
    South: [],
    West: [],
  }
  for (const s of States) {
    stateByRegion[s.region].push(s)
  }
  for (const r of regions) {
    stateByRegion[r].sort((a, b) => a.name.localeCompare(b.name))
  }

  // Status tallies for the explainer.
  const counts: Record<LegalStatus, number> = {
    legal: 0,
    'requires-permit': 0,
    restricted: 0,
    illegal: 0,
  }
  for (const s of States) {
    counts[effectiveLegalStatus(s)]++
  }

  // ─── FAQ ───────────────────────────────────────────────────────────────────
  const faqs: FAQItem[] = [
    {
      question: 'Where are ferrets illegal in the United States?',
      answer:
        'Ferrets are illegal to own as pets in California (Cal. Fish & Game Code §2118) and Hawaii (HAR §4-71-6.5). Ferret ownership is also prohibited within the five boroughs of New York City under NYC Health Code §161.01, though they are legal in the rest of New York State.',
    },
    {
      question: 'Which US states require a permit for ferrets?',
      answer:
        'Florida (Class III wildlife permit under FWC Rule 68A-6.0022) and Pennsylvania (Exotic Wildlife Possession Permit under Title 34 §147) require a state-issued permit for ferret ownership. Other states may impose municipal licensing or rabies-vaccination requirements; check the per-state page for your state.',
    },
    {
      question: 'Are ferrets legal in my city?',
      answer:
        'In most US states, the answer is yes if the state itself permits ferrets — but a small number of cities and counties layer on a local ban (most notably New York City). Confirm with your municipality\'s animal-control office before acquiring a ferret. The per-state pages flag the most common city-level restrictions.',
    },
    {
      question: 'Where can I find a legitimate ferret rescue?',
      answer:
        'The American Ferret Association maintains an accredited-shelter directory at ferret.org. Petfinder aggregates listings from partner shelters. The Ferrets.com rescue-adoption guide covers green and red flags for vetting a specific rescue before adopting.',
    },
    {
      question: 'How current is this information?',
      answer:
        'Citations are reviewed against the public-record state code at the time the page is last updated. Ferret laws change — Hawaii and California in particular see periodic reform proposals — so always verify with your state Fish & Wildlife department before acquiring a ferret. Laws change.',
    },
  ]

  // ─── Schema ────────────────────────────────────────────────────────────────
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'States', url: 'https://ferrets.com/states' },
    ],
  })
  const faqSchema = buildFAQSchema({
    questions: faqs.map((f) => ({
      question: f.question,
      answer:
        typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
    })),
  })
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'US State Ferret Laws Directory',
    numberOfItems: States.length,
    itemListElement: States.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `https://ferrets.com/states/${s.slug}`,
    })),
  }
  const schema = combineSchemas(breadcrumbSchema, faqSchema, itemListSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'States', href: '/states' },
        ]}
      />

      <div className="px-container-sm sm:px-container py-14 max-w-5xl mx-auto">
        {/* ─── Image-first masthead ───────────────────────────────────── */}
        <PageMasthead
          eyebrow="State Directory"
          heading="Are ferrets legal in your state?"
          dek="A color-coded reference for ferret-ownership laws across all 50 states and the District of Columbia. Each state page cites the governing statute or administrative rule, links to the official state department, and surfaces AFA-affiliated adoption resources."
          manifestKey="ferrets-com:states-masthead"
          fallbackKey="ferrets-com:category-directory"
          alt="Ferret looking up — state-by-state legality directory"
        />

        {/* ─── Mandatory disclaimer callout ──────────────────────────── */}
        <CalloutBox variant="warning" title="Verify before you adopt">
          <p>
            This is general legal information, not legal advice. Laws change.
            Verify the current status with your state Fish &amp; Wildlife
            department, state Department of Agriculture, and your municipality
            before acquiring a ferret. The per-state pages link to the official
            regulatory department for each jurisdiction.
          </p>
        </CalloutBox>

        {/* ─── Legend ────────────────────────────────────────────────── */}
        <section
          aria-labelledby="legend"
          className="mb-10 p-6 rounded-xl border border-brand-border bg-brand-surface"
        >
          <h2
            id="legend"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: '1.25rem' }}
          >
            How to read the grid
          </h2>
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            {(Object.keys(STATUS_PRESENTATION) as LegalStatus[]).map((k) => {
              const pres = STATUS_PRESENTATION[k]
              return (
                <div
                  key={k}
                  className="p-3 rounded-md bg-brand-white border"
                  style={{ borderColor: pres.borderColor + '40' }}
                >
                  <span
                    className="inline-block text-2xs font-bold tracking-eyebrow uppercase px-2 py-0.5 rounded-full mb-2"
                    style={{
                      backgroundColor: pres.badgeBg,
                      color: pres.badgeText,
                    }}
                  >
                    {pres.label}
                  </span>
                  <p className="text-xs text-brand-text-mid leading-snug m-0">
                    {k === 'legal' &&
                      `Ownership permitted under standard companion-animal rules (${counts.legal} jurisdictions).`}
                    {k === 'requires-permit' &&
                      `Ownership permitted only with a state-issued permit (${counts['requires-permit']} jurisdictions).`}
                    {k === 'restricted' &&
                      `Legal at the state level but with a city or county-level ban (${counts.restricted} jurisdictions).`}
                    {k === 'illegal' &&
                      `Possession prohibited under state law (${counts.illegal} jurisdictions).`}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ─── Top 15 quick links ────────────────────────────────────── */}
        <section aria-labelledby="top15" className="mb-10">
          <h2
            id="top15"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Top 15 states by search volume
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-5">
            The highest-search-volume states are prioritised with full adoption
            and vet-resource directories. Other states currently include
            cited-law and AFA-pointer guidance and will be expanded over time.
          </p>
          <ul
            className="list-none p-0 m-0 grid gap-2"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            }}
          >
            {TOP_STATE_SLUGS.map((slug) => {
              const s = States.find((x) => x.slug === slug)
              if (!s) return null
              const pres = STATUS_PRESENTATION[effectiveLegalStatus(s)]
              return (
                <li key={s.slug}>
                  <Link
                    href={`/states/${s.slug}`}
                    className="block px-3 py-2.5 rounded-md border border-brand-border bg-brand-white hover:border-brand-primary transition-colors no-underline"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-brand-text-dark">
                        {s.name}
                      </span>
                      <span
                        className="text-2xs font-bold tracking-eyebrow uppercase px-1.5 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: pres.badgeBg,
                          color: pres.badgeText,
                        }}
                      >
                        {pres.label}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        {/* ─── Full grid by region ───────────────────────────────────── */}
        <section aria-labelledby="all-states" className="mb-12">
          <h2
            id="all-states"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            All states by region
          </h2>
          {regions.map((region) => (
            <div key={region} className="mb-8">
              <h3 className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                {region}
              </h3>
              <ul
                className="list-none p-0 m-0 grid gap-2"
                style={{
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                }}
              >
                {stateByRegion[region].map((s) => {
                  const status = effectiveLegalStatus(s)
                  const pres = STATUS_PRESENTATION[status]
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/states/${s.slug}`}
                        className="block px-3 py-2 rounded-md border bg-brand-white hover:border-brand-primary transition-colors no-underline"
                        style={{ borderColor: pres.borderColor + '33' }}
                        aria-label={`${s.name} ferret laws — ${pres.label}`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-brand-text-dark">
                            {s.name}
                          </span>
                          <span
                            className="text-2xs font-bold uppercase px-1.5 py-0.5 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: pres.badgeBg,
                              color: pres.badgeText,
                            }}
                          >
                            {pres.label}
                          </span>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </section>

        {/* ─── National resources ────────────────────────────────────── */}
        <section
          aria-labelledby="national"
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
        >
          <h2
            id="national"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.25rem' }}
          >
            National resources used on every page
          </h2>
          <ul className="list-disc pl-5 space-y-2 m-0 text-base text-brand-text-mid leading-relaxed">
            <li>
              <a
                href="https://www.ferret.org"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                American Ferret Association (AFA)
              </a>{' '}
              — national shelter accreditation, regional chapter index, and
              owner position statements.
            </li>
            <li>
              <a
                href="https://www.petfinder.com/search/ferrets-for-adoption/"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                Petfinder &mdash; ferret search
              </a>{' '}
              — aggregator of adoptable ferrets from partner shelters, filterable
              by state.
            </li>
            <li>
              <a
                href="https://www.aemv.org/find-a-vet"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                Association of Exotic Mammal Veterinarians (AEMV)
              </a>{' '}
              — find-a-vet directory used as the per-state veterinary starting
              point.
            </li>
          </ul>
        </section>

        {/* ─── Related clusters ──────────────────────────────────────── */}
        <section aria-labelledby="related" className="mb-12">
          <h2
            id="related"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Beyond your state page
          </h2>
          <ul
            className="list-none p-0 m-0 grid gap-4"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            }}
          >
            <li className="p-5 rounded-xl border border-brand-border bg-brand-surface">
              <h3 className="font-display font-bold text-brand-text-dark mb-1 text-lg">
                <Link href="/legality" className="text-brand-text-dark hover:text-brand-primary no-underline">
                  Legality topics
                </Link>
              </h3>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Why bans exist, city-vs-state law, rabies and travel rules,
                renting, and how the rules change.
              </p>
            </li>
            <li className="p-5 rounded-xl border border-brand-border bg-brand-surface">
              <h3 className="font-display font-bold text-brand-text-dark mb-1 text-lg">
                <Link href="/adopt" className="text-brand-text-dark hover:text-brand-primary no-underline">
                  Adopting a ferret
                </Link>
              </h3>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Regional adoption guides, rescue vs. breeder, the application
                process, costs, and the first 30 days.
              </p>
            </li>
            <li className="p-5 rounded-xl border border-brand-border bg-brand-surface">
              <h3 className="font-display font-bold text-brand-text-dark mb-1 text-lg">
                <Link href="/acquiring" className="text-brand-text-dark hover:text-brand-primary no-underline">
                  Acquiring a ferret
                </Link>
              </h3>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                The checklist, permits and licensing, vaccination and records,
                transport, and setup.
              </p>
            </li>
            <li className="p-5 rounded-xl border border-brand-border bg-brand-surface">
              <h3 className="font-display font-bold text-brand-text-dark mb-1 text-lg">
                <Link href="/moving" className="text-brand-text-dark hover:text-brand-primary no-underline">
                  Moving with a ferret
                </Link>
              </h3>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                Relocating to a ban or permit state, cross-country and
                international moves, and re-establishing vet care.
              </p>
            </li>
          </ul>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────────── */}
        <section aria-labelledby="faq" className="mb-12">
          <h2
            id="faq"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: '1.5rem' }}
          >
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqs} includeSchema={false} />
        </section>

        {/* ─── Email capture ─────────────────────────────────────────── */}
        <section aria-labelledby="newsletter" className="mb-12">
          <h2
            id="newsletter"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.5rem' }}
          >
            Get notified when your state guide updates
          </h2>
          <EmailCapture
            siteId="ferrets-com"
            variant="section"
            title="State law watch"
            subtitle="One email when a state ferret-legality page is updated."
            source="states-hub"
          />
        </section>

        {/* ─── Closing note ──────────────────────────────────────────── */}
        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          By Ferrets.com Editorial &mdash; sourced from state codes. This page
          is general legal information. Laws change. Verify with your state
          Fish &amp; Wildlife department and your municipality before
          acquiring a ferret.
        </footer>
      </div>
    </>
  )
}
