import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { Medications, MedicationsBySlug, type Medication } from '../../../data/medications'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return Medications.map((m) => ({ slug: m.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const m = MedicationsBySlug[params.slug]
  if (!m) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Pet Medication Library | Vets.co',
      description:
        'Plain-language overviews of common dog and cat medications: uses, side effects, monitoring, and when to call the vet. Sourced from FDA CVM labels and Plumb\'s.',
      path: '/medications',
      type: 'website',
    })
  }
  return buildMetadata({
    siteId: 'vets-co',
    title: `${m.name} — Uses & Side Effects | Vets.co`,
    description: `${m.name}: what it treats, common and serious side effects, monitoring, drug interactions, and when to call the vet. Sourced from FDA CVM and Plumb's Veterinary Drug Handbook.`,
    path: `/medications/${m.slug}`,
    type: 'article',
  })
}

function speciesPhrase(m: Medication): string {
  switch (m.species) {
    case 'Dog':
      return 'in dogs'
    case 'Cat':
      return 'in cats'
    case 'Both':
      return 'in dogs and cats'
    case 'Multi':
      return 'in pets'
  }
}

function tldr(m: Medication): string {
  const firstUse = m.primaryUses[0].toLowerCase()
  return `${m.name} is a ${m.drugClass.toLowerCase()} that veterinarians prescribe ${speciesPhrase(m)} for ${firstUse}. Dosing depends on weight, bloodwork, and concurrent medications — always follow your veterinarian's prescription rather than a general guideline. Watch for the side effects listed below and call your vet for any of the serious reactions.`
}

function faqsFor(m: Medication) {
  return [
    {
      question: `What is ${m.name} prescribed for ${speciesPhrase(m)}?`,
      answer: `${m.name} is most commonly prescribed for ${m.primaryUses.slice(0, 2).join(' and ').toLowerCase()}. A veterinarian confirms the diagnosis first and then matches the medication to the specific condition, the pet's weight, and any other medications they are on.`,
    },
    {
      question: `What are the side effects of ${m.name}?`,
      answer: `The most common side effects are ${m.commonSideEffects.slice(0, 3).join(', ').toLowerCase()}. Serious but rarer reactions can include ${m.seriousSideEffects[0].toLowerCase()} — see the full list above. Stop the medication and call your vet for anything beyond mild GI upset.`,
    },
    {
      question: `How long does ${m.name} take to work?`,
      answer: `Time to clinical effect depends on the indication and the individual pet. Acute indications such as pain or pulmonary edema typically respond within hours, while chronic conditions like atopic dermatitis or anxiety can take weeks. Your veterinarian will set a recheck interval so the response can be measured objectively.`,
    },
    {
      question: `What dose of ${m.name} should I give my pet?`,
      answer: `Vets.co does not publish dosing because it is unsafe to generalize — the correct dose depends on body weight, kidney and liver function, other medications, the indication, and (for some drugs) bloodwork. Always follow the dose your prescribing veterinarian writes on the label. Never use a leftover prescription, a friend's pet's prescription, or a human medication without explicit vet direction.`,
    },
    {
      question: `Can I give ${m.name} to my pet without a prescription?`,
      answer: `No. ${m.name} is a prescription medication in the United States, which means a veterinarian must establish a valid Veterinarian-Client-Patient Relationship (VCPR), confirm the diagnosis, and write the prescription. Using prescription medications without a VCPR can be dangerous and is illegal in most states.`,
    },
    {
      question: `Does pet insurance cover ${m.name}?`,
      answer: `Most accident-and-illness pet insurance plans reimburse for veterinarian-prescribed medications once your policy is active and any waiting periods have passed. Plans pay you back after you submit the receipt, and most work with any licensed veterinarian in the U.S. Pre-existing conditions are excluded, so enrolling before a chronic medication is prescribed matters most.`,
    },
  ]
}

export default function MedicationPage({ params }: PageProps) {
  const m = MedicationsBySlug[params.slug]
  if (!m) notFound()

  const url = `https://vets.co/medications/${m.slug}`
  const faqs = faqsFor(m)

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title: `${m.name} — Uses, Side Effects, and Monitoring`,
    description: `Plain-language overview of ${m.name} ${speciesPhrase(m)}: uses, side effects, monitoring, and when to call the vet.`,
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })
  const medSchema = buildMedicalWebPageSchema({
    name: m.name,
    description: `Veterinary medication overview for ${m.name} ${speciesPhrase(m)}. Educational reference only — does not include specific dosing.`,
    url,
    authorName: 'Vets.co Editorial',
    lastReviewed: '2026-05-28',
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Medications', url: 'https://vets.co/medications' },
      { name: m.name, url },
    ],
  })
  const combined = combineSchemas(articleSchema, medSchema, faqSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/medications" className="hover:text-brand-primary no-underline">
          Medications
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">{m.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Medication Overview · {m.species}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          {m.name} {speciesPhrase(m)}
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          What it treats, common and serious side effects, monitoring, drug interactions, and when
          to call the vet — sourced from FDA CVM labels and Plumb's Veterinary Drug Handbook.
        </p>
      </div>

      <article className="px-container-sm sm:px-container py-12 max-w-4xl carloOS-article">
        {/* TL;DR */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-8 not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            TL;DR
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0">{tldr(m)}</p>
        </section>

        {/* Drug fact-card */}
        <section className="not-prose bg-brand-surface border border-brand-border rounded-xl p-6 mb-8 grid sm:grid-cols-2 gap-4">
          <div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Generic name
            </div>
            <div className="text-sm text-brand-text-mid">{m.genericName}</div>
          </div>
          <div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Drug class
            </div>
            <div className="text-sm text-brand-text-mid">{m.drugClass}</div>
          </div>
          <div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Species
            </div>
            <div className="text-sm text-brand-text-mid">{m.species}</div>
          </div>
          <div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
              Prescription status
            </div>
            <div className="text-sm text-brand-text-mid">Prescription only (Rx) in the U.S.</div>
          </div>
        </section>

        {/* What it is */}
        <h2>What is {m.name}?</h2>
        <p>
          {m.name} is a veterinary prescription medication in the {m.drugClass.toLowerCase()} class.
          Its generic name is {m.genericName}. Veterinarians prescribe it {speciesPhrase(m)} for
          several conditions where the underlying mechanism — described below — makes it the right
          fit. Because every patient is different, the specific dose, frequency, and duration are
          chosen by your prescribing veterinarian based on weight, age, comorbidities, and the
          medications your pet is already on.
        </p>

        {/* How it works */}
        <h2>How {m.name} works</h2>
        <p>{m.howItWorks}</p>

        {/* What it is prescribed for */}
        <h2>What {m.name} is prescribed for</h2>
        <p>
          The FDA-approved label and standard veterinary references list the following common
          indications {speciesPhrase(m)}:
        </p>
        <ul>
          {m.primaryUses.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
        <p>
          A diagnosis comes first — {m.name} is not the right choice for every itchy, painful, or
          symptomatic pet. Your veterinarian will confirm the underlying condition with a physical
          exam, history, and (when appropriate) bloodwork or imaging before prescribing.
        </p>

        {/* Common side effects */}
        <h2>Common side effects of {m.name}</h2>
        <p>
          Most pets tolerate {m.name} well, but the following side effects are reported often enough
          to be worth watching for in the first few weeks of treatment:
        </p>
        <ul>
          {m.commonSideEffects.map((se) => (
            <li key={se}>{se}</li>
          ))}
        </ul>
        <p>
          Mild GI signs (a single soft stool, one episode of vomiting, mild lethargy on the first
          day) often resolve as your pet adjusts. Persistent or worsening signs deserve a call to
          your vet.
        </p>

        {/* SERIOUS SIDE EFFECTS — warning callout */}
        <section
          className="not-prose my-8 rounded-r-lg p-5 bg-brand-danger/8 border-l-4 border-brand-danger"
          role="alert"
          aria-label="Serious side effects — call the vet"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-3">
            Serious side effects — call the vet immediately
          </div>
          <ul className="space-y-2 text-sm text-brand-text-mid m-0 list-none p-0">
            {m.seriousSideEffects.map((se) => (
              <li key={se} className="flex gap-2 leading-relaxed">
                <span className="text-brand-danger font-bold">→</span>
                <span>{se}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Monitoring */}
        <h2>Monitoring while your pet is on {m.name}</h2>
        <p>{m.monitoringRequired}</p>

        {/* DRUG INTERACTIONS — warning callout */}
        <section
          className="not-prose my-8 rounded-r-lg p-5 bg-[#FFF8EC] border-l-4 border-[#C8952A]"
          role="alert"
          aria-label="Drug interactions"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-[#7A5A18] mb-3">
            Drug interactions — tell the vet every medication and supplement
          </div>
          <ul className="space-y-2 text-sm text-brand-text-mid m-0 list-none p-0">
            {m.drugInteractions.map((di) => (
              <li key={di} className="flex gap-2 leading-relaxed">
                <span className="text-[#C8952A] font-bold">→</span>
                <span>{di}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-brand-text-light italic mt-3 mb-0">
            Always bring a complete, written list of every prescription medication, over-the-counter
            product, and supplement your pet takes — including flea, tick, and heartworm
            preventives — to every veterinary visit.
          </p>
        </section>

        {/* Special precautions */}
        <h2>Special precautions for {m.name}</h2>
        <p>{m.specialPrecautions}</p>

        {/* ALWAYS DISCUSS WITH VET — required callout */}
        <section
          className="not-prose my-10 rounded-xl p-6 bg-brand-primary/5 border-2 border-brand-primary/40"
          role="note"
          aria-label="Always discuss with your veterinarian"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Always discuss with your veterinarian
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed m-0">
            This page is an educational overview, not medical advice for an individual pet. The
            decision to start, stop, or change a dose of {m.name} should always be made by the
            licensed veterinarian who has examined your pet and reviewed their bloodwork. Vets.co
            deliberately does not publish specific milligram-per-kilogram doses because the right
            dose depends on too many factors a website cannot see — weight, kidney and liver
            function, the indication, and every other medication and supplement your pet is on. If
            you have questions about a prescription you have been given, the safest source is the
            veterinarian who wrote it.
          </p>
        </section>

        {/* HIGH-LTV CONVERSION: pet insurance affordability callout */}
        <section className="not-prose grid sm:grid-cols-2 gap-4 my-10">
          <Link
            href="/reviews/best-pet-insurance"
            className="bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Pet Insurance & Medication Costs
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Compare Pet Insurance 2026
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Chronic medications like {m.name} can cost hundreds or thousands of dollars a year out
              of pocket. Most accident-and-illness plans reimburse veterinarian-prescribed
              medications once any waiting period has passed — but pre-existing conditions are
              excluded, so the time to enroll is before a chronic prescription is written.
            </p>
          </Link>
          <Link
            href="/find-a-vet"
            className="bg-brand-surface border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Find Care
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Find a Vet Near You
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              General practice, 24-hour emergency hospitals, and board-certified specialists by
              state — plus how to verify licenses and credentials.
            </p>
          </Link>
        </section>

        {/* FAQ */}
        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-4">
          {faqs.map((q) => (
            <details
              key={q.question}
              className="bg-brand-surface border border-brand-border rounded-xl p-5 group"
            >
              <summary className="font-bold text-brand-dark text-sm cursor-pointer list-none flex justify-between items-center gap-3">
                <span>{q.question}</span>
                <span className="text-brand-primary text-lg flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-sm text-brand-text-mid leading-relaxed mt-3 mb-0">{q.answer}</p>
            </details>
          ))}
        </div>

        {/* Citations */}
        <section className="not-prose mt-12 pt-8 border-t border-brand-border">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
            Sources
          </div>
          <ul className="space-y-2 text-sm text-brand-text-mid list-none p-0">
            {m.citations.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-brand-text-light italic mt-4 mb-0">
            Vets.co content is educational. It does not replace evaluation, prescription, or
            monitoring by a licensed veterinarian. Specific dosing is intentionally not published —
            always follow the prescription written by the veterinarian who has examined your pet.
          </p>
        </section>

        {/* Cross-portfolio recommendations */}
        <div className="not-prose mt-10">
          <CrossPortfolioCard currentSite="vets-co" contentType="medication" variant="footer" />
        </div>

        {/* Back to medications */}
        <div className="mt-10 pt-8 border-t border-brand-border not-prose">
          <Link
            href="/medications"
            className="text-brand-primary text-sm font-bold no-underline hover:underline"
          >
            ← Back to all medications
          </Link>
        </div>
      </article>
    </>
  )
}
