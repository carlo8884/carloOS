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
} from '@carloOS/ui'
import { Symptoms, SymptomsBySlug, type Symptom, type UrgencyTier } from '../../../data/symptoms'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return Symptoms.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const s = SymptomsBySlug[params.slug]
  if (!s) {
    return buildMetadata({
      siteId: 'vets-co',
      title: 'Pet Symptom Triage | Vets.co',
      description:
        'Symptom triage guides for dogs and cats — when to ER, when to call the vet, and when to monitor at home. Sourced from AVMA, AAHA, and ACVIM.',
      path: '/symptoms',
      type: 'website',
    })
  }
  const titleTail =
    s.urgencyTriage === 'ER NOW' ? 'Emergency Triage' : 'When to Call the Vet'
  return buildMetadata({
    siteId: 'vets-co',
    title: `${s.name} — ${titleTail} | Vets.co`,
    description: `${s.name}: urgency triage, red flags, common causes, and when to call the vet. Sourced from AVMA, AAHA, and ACVIM guidance.`,
    path: `/symptoms/${s.slug}`,
    type: 'article',
  })
}

// ─── triage banner palette (color-coded by tier) ──────────────────────────
interface TierStyle {
  bg: string
  border: string
  text: string
  badgeBg: string
  badgeText: string
  cta: string
}
const TIER_STYLE: Record<UrgencyTier, TierStyle> = {
  'ER NOW': {
    bg: 'bg-brand-danger/8',
    border: 'border-brand-danger/40',
    text: 'text-brand-danger',
    badgeBg: 'bg-brand-danger',
    badgeText: 'text-white',
    cta: 'Drive to the nearest 24-hour ER. Call ahead if you can.',
  },
  'Same-day vet': {
    bg: 'bg-[#FFF8EC]',
    border: 'border-[#C8952A]/40',
    text: 'text-[#7A5A18]',
    badgeBg: 'bg-[#C8952A]',
    badgeText: 'text-white',
    cta: 'Call your primary vet today. Urgent-care or telehealth is reasonable if they cannot fit you in.',
  },
  'Schedule vet visit': {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/30',
    text: 'text-brand-primary',
    badgeBg: 'bg-brand-primary',
    badgeText: 'text-white',
    cta: 'Book a routine vet appointment within the next few days.',
  },
  'Monitor at home': {
    bg: 'bg-[#E9F4EC]',
    border: 'border-[#2A6A3A]/40',
    text: 'text-[#1E4A28]',
    badgeBg: 'bg-[#2A6A3A]',
    badgeText: 'text-white',
    cta: 'Note time, symptom, and trigger. Re-check at 4-6 h and at 12 h. Escalate if it worsens.',
  },
}

function speciesPhrase(s: Symptom): string {
  switch (s.species) {
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

function tldr(s: Symptom): string {
  const erSentence =
    s.urgencyTriage === 'ER NOW'
      ? 'Go to the nearest 24-hour veterinary ER now.'
      : `Go to the ER if you see: ${s.redFlagsImmediate[0].toLowerCase()}.`
  return `${s.name} ${speciesPhrase(s)} is most often a ${s.urgencyTriage.toLowerCase()} situation. ${erSentence} ${s.whenToVet}`
}

function faqsFor(s: Symptom) {
  const sp = s.species === 'Cat' ? 'cat' : 'dog'
  return [
    {
      question: `Is ${s.name.toLowerCase()} an emergency?`,
      answer:
        s.urgencyTriage === 'ER NOW'
          ? `Yes — ${s.name.toLowerCase()} ${speciesPhrase(s)} is typically a true emergency. Drive to the nearest 24-hour veterinary ER. ${s.whenToVet}`
          : `Usually no, but it can be. Go to the ER if you see any of the red flags listed above. Otherwise: ${s.whenToVet}`,
    },
    {
      question: `What causes ${s.name.toLowerCase()} ${speciesPhrase(s)}?`,
      answer: `Common causes include ${s.commonCauses.slice(0, 4).join('; ')}. A veterinarian narrows the list with a history, exam, and targeted diagnostics.`,
    },
    {
      question: `Can I treat ${s.name.toLowerCase()} at home?`,
      answer:
        s.urgencyTriage === 'ER NOW'
          ? `No — there is no safe home treatment. ${s.whenToVet}`
          : `Sometimes, briefly, if your ${sp} is otherwise alert and acting normal. Try the safe self-care steps above and re-check in a few hours. ${s.whenToVet}`,
    },
    {
      question: `When should I call the vet about ${s.name.toLowerCase()}?`,
      answer: s.whenToVet,
    },
    {
      question: `Does pet insurance cover vet visits for ${s.name.toLowerCase()}?`,
      answer:
        'Most accident-and-illness pet insurance plans cover diagnostics and treatment for new symptoms once the policy is active and any waiting periods have passed. Pre-existing conditions are not covered, which is why enrolling before symptoms appear matters. Reimbursement happens after you pay the vet, and most plans work with any licensed veterinarian in the U.S.',
    },
  ]
}

export default function SymptomPage({ params }: PageProps) {
  const s = SymptomsBySlug[params.slug]
  if (!s) notFound()

  const url = `https://vets.co/symptoms/${s.slug}`
  const tier = TIER_STYLE[s.urgencyTriage]
  const isER = s.urgencyTriage === 'ER NOW'
  const faqs = faqsFor(s)

  const articleSchema = buildArticleSchema({
    siteId: 'vets-co',
    title: `${s.name} — ${speciesPhrase(s)}`,
    description: `${s.name}: urgency triage, red flags, common causes, and when to call the vet.`,
    url,
    imageUrl: '',
    authorName: 'Vets.co Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })
  const medSchema = buildMedicalWebPageSchema({
    name: s.name,
    description: `Veterinary symptom triage for ${s.name.toLowerCase()} ${speciesPhrase(s)}.`,
    url,
    authorName: 'Vets.co Editorial',
    lastReviewed: '2026-05-28',
  })
  const faqSchema = buildFAQSchema({ questions: faqs })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Symptoms', url: 'https://vets.co/symptoms' },
      { name: s.name, url },
    ],
  })
  const combined = combineSchemas(articleSchema, medSchema, faqSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/symptoms" className="hover:text-brand-primary no-underline">
          Symptoms
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">{s.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Symptom Triage · {s.species}
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          {s.name} {speciesPhrase(s)}
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          Urgency triage, red flags, common causes, and when to call the vet —
          sourced from AVMA, AAHA, and ACVIM guidance.
        </p>
      </div>

      <article className="px-container-sm sm:px-container py-12 max-w-4xl carloOS-article">
        {/* TL;DR */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-8 not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            TL;DR
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0">{tldr(s)}</p>
        </section>

        {/* URGENCY-TRIAGE BANNER (color-coded by tier) */}
        <section
          className={`not-prose border-2 ${tier.border} ${tier.bg} rounded-xl p-6 mb-8`}
          role={isER ? 'alert' : 'note'}
          aria-label={`Urgency: ${s.urgencyTriage}`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`flex-shrink-0 ${tier.badgeBg} ${tier.badgeText} font-display font-black text-base px-3 py-2 rounded-md tracking-tight whitespace-nowrap`}
            >
              {s.urgencyTriage.toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className={`text-2xs font-bold tracking-eyebrow uppercase mb-2 ${tier.text}`}>
                Urgency Tier
              </div>
              <p className="text-brand-text-mid leading-relaxed text-sm m-0">{tier.cta}</p>
            </div>
          </div>
        </section>

        {/* RED-FLAG CALLOUT — variant=warning when ER NOW */}
        <section
          className={`not-prose my-8 rounded-r-lg p-5 ${
            isER
              ? 'bg-brand-danger/8 border-l-4 border-brand-danger'
              : 'bg-[#FFF8EC] border-l-4 border-[#C8952A]'
          }`}
          role="alert"
          aria-label="Red flags — go to ER"
        >
          <div
            className={`text-2xs font-bold tracking-eyebrow uppercase mb-3 ${
              isER ? 'text-brand-danger' : 'text-[#7A5A18]'
            }`}
          >
            {isER ? 'Emergency — Go Now' : 'Red Flags — Go to ER Immediately If You See These'}
          </div>
          <ul className="space-y-2 text-sm text-brand-text-mid m-0 list-none p-0">
            {s.redFlagsImmediate.map((rf) => (
              <li key={rf} className="flex gap-2 leading-relaxed">
                <span className={isER ? 'text-brand-danger font-bold' : 'text-[#C8952A] font-bold'}>
                  →
                </span>
                <span>{rf}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Common causes */}
        <h2>Common causes of {s.name.toLowerCase()} {speciesPhrase(s)}</h2>
        <p>
          {s.name} {speciesPhrase(s)} has a wide differential — from benign causes like a one-off
          dietary upset to true emergencies. Pattern, frequency, and accompanying signs matter more
          than the symptom alone. The most common causes a veterinarian considers include:
        </p>
        <ul>
          {s.commonCauses.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        {/* Diagnostic ladder */}
        <h2>How a vet works it up</h2>
        <p>
          A good workup is a ladder — start with the cheapest, highest-yield tests, escalate only as
          findings require. For {s.name.toLowerCase()}, the typical diagnostic approach is:
        </p>
        <ol>
          {s.diagnosticApproach.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ol>
        <p>
          You can help by arriving with a written timeline: when the symptom started, how often it
          occurs, what your {s.species === 'Cat' ? 'cat' : 'dog'} ate or got into recently, recent
          medications and supplements, vaccination status, and any other changes you have noticed.
        </p>

        {/* Self-care */}
        <h2>When home care is safe — and when it is not</h2>
        {isER ? (
          <p>
            <strong>There is no safe home care for {s.name.toLowerCase()} when it presents as a
            true emergency.</strong> {s.whenToVet} If your pet is alert and the symptom is mild,
            you may still want to follow the supportive steps below while you arrange a vet visit —
            but do not delay professional care to try home remedies.
          </p>
        ) : (
          <p>
            If your pet is otherwise alert, eating, and behaving normally, supportive home care for
            24-48 hours can be reasonable. Re-check every few hours and escalate if anything
            worsens.
          </p>
        )}
        <ul>
          {s.selfCareWhenSafe.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        {/* When to vet */}
        <h2>When to call the vet</h2>
        <p>{s.whenToVet}</p>
        <p>
          If you are unsure, err on the side of calling. Vet receptionists and credentialed
          veterinary technicians can usually triage over the phone and tell you whether to come in
          now, today, or later in the week. For after-hours questions when your primary vet is
          closed, a telehealth consult is a reasonable bridge for non-emergency concerns.
        </p>

        {/* Related conditions cross-links */}
        <h2>Related conditions on Vets.co</h2>
        <ul>
          {s.relatedConditions.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
            </li>
          ))}
        </ul>

        {/* HIGH-LTV CONVERSION: find-a-vet + pet insurance callouts */}
        <section className="not-prose grid sm:grid-cols-2 gap-4 my-10">
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
          <Link
            href="/reviews/best-pet-insurance"
            className="bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Plan Ahead
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Compare Pet Insurance 2026
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Most plans work with any licensed vet in the U.S. Enroll before symptoms appear — pre-existing
              conditions are not covered. Side-by-side comparison of accident-and-illness plans.
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
            {s.citations.map((c) => (
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
            Vets.co content is educational. It does not replace evaluation by a licensed
            veterinarian. In an emergency, go to the nearest 24-hour veterinary hospital.
          </p>
        </section>

        {/* Back to symptoms */}
        <div className="mt-10 pt-8 border-t border-brand-border not-prose">
          <Link
            href="/symptoms"
            className="text-brand-primary text-sm font-bold no-underline hover:underline"
          >
            ← Back to all symptoms
          </Link>
        </div>
      </article>
    </>
  )
}
