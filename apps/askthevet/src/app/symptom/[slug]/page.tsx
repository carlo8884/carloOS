/**
 * /symptom/[slug] — programmatic SEO landing page.
 * Pre-seeds the homepage TriageForm with the slug's question.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata, AffiliateDisclosure } from '@carloOS/ui'
import { TriageForm } from '@/app/TriageForm'
import { SYMPTOM_PAGES } from '@/data/symptoms'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return SYMPTOM_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = SYMPTOM_PAGES.find((p) => p.slug === params.slug)
  if (!page) return {}
  return buildMetadata({
    siteId: 'askthevet',
    title: page.title,
    description: page.intro,
    path: `/symptom/${page.slug}`,
    type: 'article',
    category: 'Symptom Triage',
  })
}

export default function SymptomPage({ params }: PageProps) {
  const page = SYMPTOM_PAGES.find((p) => p.slug === params.slug)
  if (!page) notFound()

  return (
    <>
      <AffiliateDisclosure variant="banner" />

      <section className="bg-brand-primary-pale border-b border-brand-border">
        <div className="max-w-3xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary mb-3">
            {page.species} · Symptom Triage
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-text-dark mb-3 leading-tight">
            {page.title}
          </h1>
          <p className="text-base text-brand-text-mid mb-8 max-w-2xl">{page.intro}</p>

          <TriageForm defaultQuestion={page.question} defaultSpecies={page.species} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-xl font-semibold text-brand-text-dark mb-3">
          About this symptom
        </h2>
        <p className="text-base text-brand-text-mid leading-relaxed mb-3">
          {page.intro} Symptom checkers like AskTheVet exist to help owners answer the most important question first: <em>is this something I can wait on, or do I need a vet now?</em>
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          The triage form above generates a tailored assessment using the symptom you describe plus the species. It is not a diagnosis — only a triage read. Always consult a licensed veterinarian before treating.
        </p>
      </section>
    </>
  )
}
