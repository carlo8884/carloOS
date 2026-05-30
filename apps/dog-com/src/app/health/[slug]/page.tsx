/**
 * Dog.com — Programmatic health/condition page template.
 *
 * One template, ~50+ disease/condition pages. Pulls structured data from
 * src/data/diseases.ts and renders a consistent, condition-specific page
 * (~700–900 words; not thin/templated junk).
 *
 * generateStaticParams EXCLUDES any slug that already has a hand-written
 * static folder under /app/health/ via EXISTING_STATIC_HEALTH_SLUGS — Next.js
 * static routes take precedence and we filter proactively to avoid duplicate
 * segment build errors.
 *
 * Renders:
 *   - Breadcrumb (Home → Health → {disease.name})
 *   - H1 + TL;DR card
 *   - Monospace Quick Reference card (urgency / category / prevalence / age /
 *     prevention possible / ER trigger summary)
 *   - Cardinal symptoms
 *   - Breed predispositions (when listed)
 *   - Diagnostic approach
 *   - Treatment tiers
 *   - When to ER vs primary care (explicit red-flag list)
 *   - Prognosis + prevention
 *   - Related Dog.com pages (auto-linked from commonHealthCrossLinks)
 *   - Citations footer
 *   - FAQ (3–4 disease-specific Qs) with FAQPage schema
 *   - MedicalWebPage + BreadcrumbList + FAQPage JSON-LD
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
} from '@carloOS/ui'
import {
  Diseases,
  EXISTING_STATIC_HEALTH_SLUGS,
  getDiseaseBySlug,
  type Disease,
} from '../../../data/diseases'

// All slugs are known at build time — force static.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Diseases.filter(
    (d) => !d.existingHandWrittenSlug && !EXISTING_STATIC_HEALTH_SLUGS.has(d.slug),
  ).map((d) => ({ slug: d.slug }))
}

/**
 * Per-disease description generator — keeps each metadata description
 * unique and ≤ 160 chars (metadata-policy.mjs enforces). We build from
 * specific symptoms + urgency + category to avoid duplicate strings.
 */
function buildDiseaseDescription(d: Disease): string {
  const sigSymptoms = d.symptoms
    .slice(0, 3)
    .map((s) => s.toLowerCase().split('(')[0].split('—')[0].trim())
    .filter((s) => s.length > 0)
    .join(', ')

  const urgencyShort =
    d.urgency === 'Emergency — ER now'
      ? 'Emergency'
      : d.urgency === 'Same-day vet'
        ? 'Same-day vet'
        : d.urgency === 'Schedule vet visit'
          ? 'Vet visit'
          : 'Monitor'

  const base = `${d.name} in dogs: ${sigSymptoms}. ${urgencyShort}. Diagnosis, treatment & prognosis.`

  if (base.length <= 160) return base

  // Trim symptoms aggressively if too long.
  const shortSymptoms = d.symptoms[0].toLowerCase().split('(')[0].split('—')[0].trim()
  const shorter = `${d.name} in dogs: ${shortSymptoms}. ${urgencyShort}. Diagnosis, treatment, prognosis.`
  if (shorter.length <= 160) return shorter

  // Last resort — truncate.
  return shorter.slice(0, 157) + '...'
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const disease = getDiseaseBySlug(slug)
  if (!disease) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Condition Not Found',
      description: 'This dog health condition page does not exist.',
      path: `/health/${slug}`,
    })
  }

  // Title ≤ 70 chars including " | Dog.com" suffix (10 chars). Aim ≤ 60 chars core.
  // Pattern: "{Name} in Dogs — Symptoms & Treatment | Dog.com"
  // Some names are long — shorten the trailing phrase when needed.
  const candidates = [
    `${disease.name} in Dogs — Symptoms, Diagnosis & Treatment | Dog.com`,
    `${disease.name} in Dogs — Symptoms & Treatment | Dog.com`,
    `${disease.name} in Dogs — Treatment Guide | Dog.com`,
    `${disease.name} in Dogs | Dog.com`,
  ]
  const title = candidates.find((c) => c.length <= 70) ?? candidates[candidates.length - 1]

  return buildMetadata({
    siteId: 'dog-com',
    title,
    description: buildDiseaseDescription(disease),
    path: `/health/${disease.slug}`,
    type: 'article',
  })
}

function urgencyClass(u: Disease['urgency']): string {
  switch (u) {
    case 'Emergency — ER now':
      return 'bg-red-100 text-red-800 border-red-300'
    case 'Same-day vet':
      return 'bg-orange-100 text-orange-800 border-orange-300'
    case 'Schedule vet visit':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    case 'Monitor at home':
      return 'bg-green-100 text-green-800 border-green-300'
  }
}

function buildTldr(d: Disease): string {
  const sigSymptoms = d.symptoms.slice(0, 2).map((s) => s.toLowerCase().split('(')[0].trim()).join(', ')
  const prevention = d.preventionPossible
    ? d.preventionNote
      ? `Prevention is possible (${d.preventionNote.split('.')[0].toLowerCase()}).`
      : 'Prevention is possible.'
    : 'No specific prevention available.'

  return (
    `${d.name} is a ${d.prevalence.toLowerCase()} ${d.category.toLowerCase()} condition in dogs ` +
    `with typical onset in the ${d.ageOnset.toLowerCase()} group. ` +
    `Most-recognizable signs include ${sigSymptoms}. ` +
    `Urgency: ${d.urgency.toLowerCase()}. ` +
    prevention
  )
}

function buildFAQs(d: Disease): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [
    {
      question: `What are the first signs of ${d.name} in dogs?`,
      answer:
        `The earliest signs of ${d.name} in dogs typically include: ` +
        d.symptoms.slice(0, 3).join('; ') +
        '. Recognising these early and seeking veterinary care promptly improves outcomes — particularly given the urgency profile for this condition.',
    },
    {
      question: `Is ${d.name} an emergency?`,
      answer:
        d.urgency === 'Emergency — ER now'
          ? `Yes. ${d.name} is a true emergency in dogs — go to an emergency veterinary hospital immediately, especially if you observe: ${d.whenToER.slice(0, 2).join(' or ')}.`
          : d.urgency === 'Same-day vet'
            ? `${d.name} is not always a same-night ER trip but does require same-day veterinary attention. Escalate to ER if you see: ${d.whenToER.slice(0, 2).join(' or ')}.`
            : `${d.name} is typically not an emergency at first presentation — schedule a routine veterinary appointment. Escalate immediately, however, if you see: ${d.whenToER.slice(0, 2).join(' or ')}.`,
    },
    {
      question: `How is ${d.name} diagnosed?`,
      answer:
        `Standard diagnostic workup for ${d.name} includes: ` +
        d.diagnosticApproach.slice(0, 3).join('; ') +
        '. The specific tests your veterinarian recommends will depend on your dog\'s presentation and history.',
    },
    {
      question: d.preventionPossible
        ? `Can ${d.name} be prevented?`
        : `What is the prognosis for ${d.name} in dogs?`,
      answer: d.preventionPossible
        ? d.preventionNote
          ? `Yes — prevention is possible. ${d.preventionNote}`
          : `Yes — prevention is possible. Discuss specific strategies with your veterinarian based on your dog's breed, age, and lifestyle.`
        : `${d.prognosisNote}`,
    },
  ]

  return faqs
}

function humanizePath(href: string): string {
  return href
    .replace('/health/', '')
    .replace('/nutrition/', '')
    .replace('/training/', '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default async function DiseaseTemplatePage({ params }: PageProps) {
  const { slug } = await params
  const disease = getDiseaseBySlug(slug)
  if (!disease) notFound()

  // Defense in depth — never render a slug that already has a static folder.
  if (EXISTING_STATIC_HEALTH_SLUGS.has(disease.slug)) notFound()

  const faqs = buildFAQs(disease)

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Conditions', url: 'https://dog.com/conditions' },
      { name: 'Health', url: 'https://dog.com/health' },
      { name: disease.name, url: `https://dog.com/health/${disease.slug}` },
    ],
  })

  const medSchema = buildMedicalWebPageSchema({
    name: `${disease.name} in Dogs`,
    description: buildTldr(disease),
    url: `https://dog.com/health/${disease.slug}`,
    authorName: 'Dog.com Editorial',
    lastReviewed: '2026-05-29',
  })

  const faqSchema = buildFAQSchema({ questions: faqs })
  const combined = combineSchemas(medSchema, breadcrumbSchema, faqSchema)

  const tldr = buildTldr(disease)
  const erTriggerSummary = disease.whenToER[0]

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/conditions" className="hover:text-brand-primary no-underline">Conditions</Link>
        <span>›</span>
        <Link href="/health" className="hover:text-brand-primary no-underline">Health</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">{disease.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/15 text-brand-primary">
            {disease.category}
          </span>
          <span className={`text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill border ${urgencyClass(disease.urgency)}`}>
            {disease.urgency}
          </span>
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
            {disease.prevalence}
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-none mb-3"
          style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
        >
          {disease.name} in Dogs
        </h1>
        <p className="text-base font-light text-white/65 leading-relaxed max-w-3xl">
          Symptoms, diagnostic approach, treatment tiers, and prognosis — sourced from
          ACVIM consensus statements, AAHA guidelines, OFA prevalence data, and the
          peer-reviewed veterinary literature.
        </p>
      </div>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            {/* TL;DR */}
            <section className="bg-brand-surface border-l-4 border-brand-primary rounded-r-lg p-5 mb-8 not-prose">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">TL;DR</div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">{tldr}</p>
            </section>

            {/* Quick reference card — monospace */}
            <section className="not-prose mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Reference</div>
              <div className="font-mono text-xs bg-brand-dark text-white/85 rounded-lg p-5 leading-relaxed overflow-x-auto">
                <div><span className="text-brand-primary">urgency</span>      · {disease.urgency}</div>
                <div><span className="text-brand-primary">category</span>     · {disease.category}</div>
                <div><span className="text-brand-primary">prevalence</span>   · {disease.prevalence}</div>
                <div><span className="text-brand-primary">age onset</span>    · {disease.ageOnset}</div>
                <div><span className="text-brand-primary">prevention</span>   · {disease.preventionPossible ? 'Yes — see prevention section' : 'No specific prevention'}</div>
                <div><span className="text-brand-primary">ER trigger</span>   · {erTriggerSummary}</div>
              </div>
            </section>

            {/* Cardinal symptoms */}
            <h2>Cardinal Symptoms</h2>
            <p>
              The hallmark clinical signs of {disease.name} in dogs vary by stage and individual,
              but the following list captures the most commonly reported and clinically
              significant presentations. Any combination of these in your dog warrants a
              veterinary evaluation:
            </p>
            <ul>
              {disease.symptoms.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            {/* Breed predispositions */}
            {disease.breedPredispositions && disease.breedPredispositions.length > 0 && (
              <>
                <h2>Breed Predispositions</h2>
                <p>
                  The following breeds are documented to have an elevated risk for {disease.name}
                  based on OFA prevalence data, breed-club CHIC panels, Morris Animal Foundation
                  cohort studies, and the peer-reviewed veterinary literature. Higher breed risk
                  does not guarantee disease, and dogs outside these breeds remain susceptible:
                </p>
                <ul>
                  {disease.breedPredispositions.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Diagnostic approach */}
            <h2>Diagnostic Approach</h2>
            <p>
              The standard diagnostic workup for suspected {disease.name} follows a stepwise
              ladder — your veterinarian will not order every test for every dog, but each of
              the following plays a role in differentiating this condition from other
              presentations on the differential list:
            </p>
            <ol>
              {disease.diagnosticApproach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            {/* Treatment tiers */}
            <h2>Treatment Approach</h2>
            <p>
              Treatment for {disease.name} progresses through tiers — from least-invasive
              supportive measures to definitive medical or surgical therapy. The right tier for
              your dog depends on disease severity, comorbidities, and prognosis. Discuss
              options thoroughly with your veterinarian before committing to any pathway:
            </p>
            <ul>
              {disease.treatmentTiers.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            {/* When to ER */}
            <h2>When to Go to the ER vs. Primary Care</h2>
            <p>
              The general urgency profile for {disease.name} is{' '}
              <strong>{disease.urgency.toLowerCase()}</strong>. However, even when initial
              presentation is mild, the condition can decompensate rapidly — go to a 24-hour
              emergency veterinary hospital immediately if you observe any of the following:
            </p>
            <ul>
              {disease.whenToER.map((er) => (
                <li key={er}><strong>{er}</strong></li>
              ))}
            </ul>

            {/* Prognosis + prevention */}
            <h2>Prognosis and Prevention</h2>
            <p>{disease.prognosisNote}</p>
            {disease.preventionPossible && disease.preventionNote && (
              <p>
                <strong>Prevention — </strong>
                {disease.preventionNote}
              </p>
            )}
            {!disease.preventionPossible && (
              <p>
                <strong>Prevention — </strong>
                There is no specific prevention strategy for {disease.name}. Early detection
                through routine veterinary care and prompt evaluation of new symptoms remains
                the best approach.
              </p>
            )}

            {/* Related Dog.com pages */}
            {disease.commonHealthCrossLinks.length > 0 && (
              <>
                <h2>Related Dog.com Guides</h2>
                <ul>
                  {disease.commonHealthCrossLinks.map((href) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-brand-primary font-semibold no-underline hover:underline"
                      >
                        {humanizePath(href)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>
            <div className="not-prose space-y-4 mb-8">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="border border-brand-border rounded-lg p-5"
                >
                  <h3 className="font-display font-bold text-brand-dark text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Citations */}
            <section className="not-prose border-t border-brand-border pt-6 mt-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Sources & Citations</div>
              <ul className="text-xs text-brand-text-mid leading-relaxed space-y-1.5 list-disc pl-5">
                {disease.citations.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="text-xs text-brand-text-light italic mt-4">
                This page is editorial reference content and is not a substitute for
                individualized veterinary advice. Always consult a licensed veterinarian for
                diagnosis and treatment decisions for your specific dog. Last reviewed: May 2026.
              </p>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 self-start">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Facts
              </div>
              {[
                ['Urgency', disease.urgency],
                ['Category', disease.category],
                ['Prevalence', disease.prevalence],
                ['Age onset', disease.ageOnset],
                ['Preventable', disease.preventionPossible ? 'Yes' : 'No'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[60%]">{v}</span>
                </div>
              ))}
            </div>

            {/* Find a vet — cross-portfolio CTA */}
            <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Need a Vet?
              </div>
              <p className="text-xs text-brand-text-mid leading-relaxed mb-3">
                Search board-certified specialists and 24-hour ER clinics on our partner
                directory.
              </p>
              <a
                href="https://vets.co/find-a-vet"
                className="inline-block bg-brand-primary text-white font-semibold text-xs px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find a vet on Vets.co →
              </a>
            </div>

            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Practical guidance weekly."
              source={`health-${disease.slug}`}
            />
          </aside>
        </div>
      </div>
    </>
  )
}
