/**
 * /symptom — index of programmatic SEO landing pages.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'
import { SYMPTOM_PAGES } from '@/data/symptoms'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'Pet Symptoms — Common Conditions, Triage & Care',
  description:
    'Browse the most common pet symptoms across dogs, cats, birds, reptiles, ferrets, fish, and horses. Each page has a triage-first read on what to do next.',
  path: '/symptom',
  type: 'website',
})

export default function SymptomIndexPage() {
  return (
    <>
      <AffiliateDisclosure variant="banner" />
      <article className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-brand-text-dark mb-3">Pet symptoms</h1>
        <p className="text-base text-brand-text-mid mb-8">
          Common symptoms with a triage-first read. Tap any topic to see the assessment and next steps.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SYMPTOM_PAGES.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/symptom/${page.slug}`}
                className="block p-4 rounded-md border border-brand-border bg-brand-white hover:border-brand-primary hover:bg-brand-primary-pale transition-colors no-underline"
              >
                <span className="block text-xs font-medium uppercase tracking-wide text-brand-primary mb-1">
                  {page.species}
                </span>
                <span className="block text-sm font-semibold text-brand-text-dark">
                  {page.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
