import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  EmailCapture,
  SchemaScript,
  FAQAccordion,
  ShopCtas,
} from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'
import { Symptoms, type Symptom, type UrgencyTier } from '../../data/symptoms'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Symptom Triage — Dogs & Cats | Vets.co',
  description:
    'When a pet symptom is ER, same-day vet, or monitor at home. 30 symptoms in dogs and cats, sourced from AVMA, AAHA, and ACVIM guidance.',
  path: '/symptoms',
  type: 'website',
})

const TIER_ORDER: UrgencyTier[] = [
  'ER NOW',
  'Same-day vet',
  'Schedule vet visit',
  'Monitor at home',
]

interface TierMeta {
  bg: string
  border: string
  text: string
  badgeBg: string
  badgeText: string
  blurb: string
}
const TIER_META: Record<UrgencyTier, TierMeta> = {
  'ER NOW': {
    bg: 'bg-brand-danger/8',
    border: 'border-brand-danger/40',
    text: 'text-brand-danger',
    badgeBg: 'bg-brand-danger',
    badgeText: 'text-white',
    blurb:
      'Drive to the nearest 24-hour ER. Call ahead if you can. Do not wait for a primary-vet callback.',
  },
  'Same-day vet': {
    bg: 'bg-[#FFF8EC]',
    border: 'border-[#C8952A]/40',
    text: 'text-[#7A5A18]',
    badgeBg: 'bg-[#C8952A]',
    badgeText: 'text-white',
    blurb:
      'Call your primary vet today. Urgent-care or telehealth is reasonable if they cannot fit you in.',
  },
  'Schedule vet visit': {
    bg: 'bg-brand-primary/5',
    border: 'border-brand-primary/30',
    text: 'text-brand-primary',
    badgeBg: 'bg-brand-primary',
    badgeText: 'text-white',
    blurb: 'Book a routine vet appointment within the next few days.',
  },
  'Monitor at home': {
    bg: 'bg-[#E9F4EC]',
    border: 'border-[#2A6A3A]/40',
    text: 'text-[#1E4A28]',
    badgeBg: 'bg-[#2A6A3A]',
    badgeText: 'text-white',
    blurb:
      'Note time, symptom, and trigger. Re-check at 4-6 h and at 12 h. Escalate if it worsens.',
  },
}

// Urgency-tier reference table. Maps each of the four triage tiers used across
// this library to what it means, how fast to act, and representative signs
// drawn directly from the symptom entries below (e.g. swollen belly, pale gums,
// straining to urinate, fast breathing are ER NOW entries in the data). Phrased
// as "seek care," never as diagnosis or dosing. Extractable as a comparison
// table for AI Overviews / Perplexity / ChatGPT citation (GEO).
const TIER_REFERENCE: Array<{
  tier: UrgencyTier
  meaning: string
  signs: string
}> = [
  {
    tier: 'ER NOW',
    meaning: 'Drive to the nearest open emergency hospital immediately; call ahead if you can.',
    signs:
      'A swollen, hard belly with unproductive retching (possible bloat/GDV), pale or white gums, a cat straining in the litter box and producing little or no urine, fast or labored breathing in a cat, head pressing, collapse, a seizure that will not stop, or known toxin ingestion.',
  },
  {
    tier: 'Same-day vet',
    meaning: 'Call your primary veterinarian today; urgent-care or telehealth is reasonable if they cannot fit you in.',
    signs:
      'Repeated vomiting or diarrhea, refusing food for more than a day, limping that still bears some weight, a painful or rapidly swelling eye, or sudden lethargy in an otherwise sick-appearing pet.',
  },
  {
    tier: 'Schedule vet visit',
    meaning: 'Book a routine appointment within the next few days.',
    signs:
      'A persistent but non-acute change — gradual weight loss, recurring mild itching, a small lump that is not growing quickly, bad breath, or a cough that is not affecting breathing.',
  },
  {
    tier: 'Monitor at home',
    meaning: 'Note the time, symptom, and trigger; re-check at 4–6 hours and again at 12 hours, and escalate if it worsens.',
    signs:
      'A single mild episode in a pet that is otherwise bright, eating, drinking, and behaving normally, with no red-flag signs from the tiers above.',
  },
]

// FAQ answers are grounded strictly in facts already on this page (the tier
// definitions, the ER triggers in the symptom data, and the sourcing note). No
// new numbers, doses, or study claims are introduced. FAQAccordion emits the
// FAQPage JSON-LD itself.
const FAQS = [
  {
    question: 'How do I know if a pet symptom is an emergency?',
    answer:
      'Use the urgency tiers above. A swollen, hard belly with unproductive retching (possible bloat), pale or white gums, a cat that cannot urinate, fast or labored breathing, head pressing, collapse, a non-stop seizure, or known toxin ingestion are ER-now signs — go to the nearest open hospital and do not wait for a callback. Repeated vomiting, refusing food for more than a day, or limping are usually same-day concerns. Gradual or mild changes can wait for a routine appointment. When you are unsure, call a veterinarian rather than waiting.',
  },
  {
    question: 'Is this symptom library a substitute for seeing a veterinarian?',
    answer:
      'No. These pages are educational. They explain what a symptom can mean, the red flags that make it urgent, the common causes, and the diagnostic steps a veterinarian typically follows — they do not diagnose your specific pet or provide dosing. Any diagnosis, prescription, or dose must come from a veterinarian who has examined your pet. Use these pages to decide how quickly to seek care and to prepare for the visit.',
  },
  {
    question: 'What should I do if I think my pet swallowed something toxic?',
    answer:
      'Treat a suspected poisoning as an emergency. Contact the ASPCA Animal Poison Control Center at 888-426-4435, or your veterinarian or nearest emergency hospital, immediately. Do not wait for symptoms to appear, and do not induce vomiting unless a veterinarian or poison-control specialist tells you to. Poison-control hotlines may charge a consultation fee.',
  },
  {
    question: 'How is the triage guidance in this library sourced?',
    answer:
      'The urgency tiers and red-flag thresholds draw on current guidance from veterinary bodies including the AVMA, AAHA, and ACVIM, with per-symptom citations on each page. Content is maintained by the Vets.co editorial team and written in calibrated, non-diagnostic language. We do not publish first-person clinical claims or fabricated credentials.',
  },
]

function groupByTierAndSpecies(items: Symptom[]) {
  const byTier: Record<UrgencyTier, Symptom[]> = {
    'ER NOW': [],
    'Same-day vet': [],
    'Schedule vet visit': [],
    'Monitor at home': [],
  }
  for (const s of items) byTier[s.urgencyTriage].push(s)
  return byTier
}

function speciesLabel(s: Symptom): string {
  return s.species
}

export default function SymptomsHubPage() {
  const byTier = groupByTierAndSpecies(Symptoms)
  const dogCount = Symptoms.filter((s) => s.species === 'Dog').length
  const catCount = Symptoms.filter((s) => s.species === 'Cat').length

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Symptoms', url: 'https://vets.co/symptoms' },
    ],
  })
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Pet Symptom Triage Library',
    numberOfItems: Symptoms.length,
    itemListElement: Symptoms.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `https://vets.co/symptoms/${s.slug}`,
    })),
  }
  // FAQPage JSON-LD is emitted by <FAQAccordion> itself (see render below), so
  // it is intentionally not combined here to avoid a duplicate FAQPage node.
  const schema = combineSchemas(breadcrumbSchema, itemListSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Symptoms</span>
      </nav>

      {/* Hero */}
      <HubMasthead
        eyebrow="Symptom Triage Library"
        title="Pet Symptom Triage"
        intro={`When a pet symptom is ER now, when it is same-day vet, and when it is safe to monitor at home — ${dogCount} dog symptoms and ${catCount} cat symptoms, triaged by urgency.`}
        manifestKey="vets-co:symptoms-hero"
        fallbackKey="vets-co:hero"
        imageAlt="A veterinarian examining a pet during a check-up"
        primaryCta={{ href: '/find-a-vet', label: 'Find a vet' }}
        secondaryCta={{ href: '/health/emergency-signs', label: 'Emergency signs' }}
      />
      <div className="px-container-sm sm:px-container pt-6 pb-2 bg-brand-surface border-b border-brand-border">
        <p className="text-xs text-brand-text-light max-w-3xl leading-relaxed">
          Triage guidance drawn from current{' '}
          <a href="https://avma.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AVMA</a>,{' '}
          <a href="https://aaha.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AAHA</a>, and{' '}
          <a href="https://acvim.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">ACVIM</a> guidance.
        </p>
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the vets symptoms-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Vets symptoms-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-pet-symptoms-triage-chart,
            fridge-symptoms-library-card, and
            veterinary-symptoms-reference-handbook notes that
            match the urgency-tier-map, presenting-sign-log,
            and avma-aaha-acvim-grounding copy on this hub —
            a laminated pet symptoms triage chart so the ER
            NOW / same-day / schedule / monitor map is posted
            on the fridge (not a tools-hub calculator chart,
            not an insurance policy-map chart, not a reviews
            buyer-guide chart, not a health triage chart, not
            a guides section-map chart, not a breeds
            screening chart, not a diagnostics test-map
            chart), a pet fridge symptoms library card so
            each presenting-sign spoke is labeled on the
            fridge (not a cat measurement card, not an
            insurance levers card, not a reviews comparison
            card, not a health library card, not a guides
            prep card, not a breeds library card, not a
            diagnostics library card), and a veterinary
            symptoms reference handbook so the AVMA / AAHA /
            ACVIM grounding is a physical kitchen book (not
            a feline calculator handbook, not an insurance
            handbook, not a reviews handbook, not a health
            handbook, not a guides handbook, not a breeds
            handbook, not a diagnostics handbook).
            Educational kitchen checklist, not a ranked
            medication list, not a child first-aid-kit hop,
            and not a substitute for a veterinarian. Vets.co
            does not sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Vets symptoms-hub checklist"
            subtitle="Email the symptoms-triage-chart, fridge library-card, and symptoms-handbook notes. No spam."
            ctaText="Email my vets symptoms-hub checklist"
            source="symptoms-hub-under-hero"
          />
        </div>
      </section>

      {/* Direct-answer / TL;DR block — extractable summary for AI Overviews,
          Perplexity, and ChatGPT citation (GEO). Routes the reader straight to
          the right depth of care, then into the cluster. */}
      <section aria-labelledby="symptoms-tldr" className="px-container-sm sm:px-container py-8 bg-brand-primary-pale border-b border-brand-border">
        <div className="max-w-3xl">
          <h2 id="symptoms-tldr" className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">The short version</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            This library sorts {Symptoms.length} dog and cat symptoms into four urgency tiers so you can decide <strong className="text-brand-dark">how fast to act</strong>. The fastest read: <strong className="text-brand-dark">a swollen hard belly with unproductive retching, pale or white gums, a cat that cannot urinate, fast or labored breathing, head pressing, collapse, a non-stop seizure, or known toxin ingestion are ER-now signs</strong> — go to the nearest open hospital immediately. Repeated vomiting, refusing food for over a day, or limping usually warrant <strong className="text-brand-dark">same-day</strong> care. Gradual or mild changes can wait for a <strong className="text-brand-dark">routine</strong> appointment.
          </p>
          <p className="text-sm text-brand-text-light leading-relaxed">
            These pages are educational and not a diagnosis. For suspected poisoning, call <a href="tel:8884264435" className="text-brand-primary hover:underline font-semibold">ASPCA Poison Control at 888-426-4435</a> or your veterinarian immediately. Review the <Link href="/health/emergency-signs" className="text-brand-primary hover:underline">emergency warning signs</Link>, run the interactive <Link href="/tools/er-vs-clinic" className="text-brand-primary hover:underline">ER vs clinic vs telehealth</Link> tool, keep a printable <Link href="/emergency-triage-card" className="text-brand-primary hover:underline">emergency triage card</Link> handy, or <Link href="/find-a-vet" className="text-brand-primary hover:underline">find a vet</Link>.
          </p>
        </div>
      </section>

      {/* Urgency-tier reference table — the four triage tiers, what each means,
          and representative signs. Extractable comparison table (GEO). */}
      <section aria-labelledby="symptoms-tiers" className="px-container-sm sm:px-container py-10 border-b border-brand-border">
        <h2 id="symptoms-tiers" className="font-display text-xl font-bold text-brand-dark mb-2">The Four Urgency Tiers, at a Glance</h2>
        <p className="text-sm text-brand-text-light max-w-3xl mb-5 leading-relaxed">Every symptom in this library is assigned one of four tiers. This table maps each tier to what it means and the kind of signs that fall under it. It is a guide, not a diagnosis — when in doubt, call a veterinarian.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-border text-left">
                <th scope="col" className="px-4 py-3 font-display font-bold text-brand-dark whitespace-nowrap">Tier</th>
                <th scope="col" className="px-4 py-3 font-display font-bold text-brand-dark">What it means</th>
                <th scope="col" className="px-4 py-3 font-display font-bold text-brand-dark">Representative signs</th>
              </tr>
            </thead>
            <tbody>
              {TIER_REFERENCE.map((row) => (
                <tr key={row.tier} className="border-b border-brand-border align-top">
                  <th scope="row" className="px-4 py-3 font-bold text-brand-dark whitespace-nowrap">{row.tier}</th>
                  <td className="px-4 py-3 text-brand-text-mid leading-relaxed">{row.meaning}</td>
                  <td className="px-4 py-3 text-brand-text-mid leading-relaxed">{row.signs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-brand-text-light mt-4 max-w-3xl leading-relaxed">Related: <Link href="/health" className="text-brand-primary hover:underline">pet health library</Link> · <Link href="/diagnostics" className="text-brand-primary hover:underline">diagnostic tests explained</Link> · <Link href="/specialists" className="text-brand-primary hover:underline">when to see a specialist</Link>.</p>
      </section>

      <div className="px-container-sm sm:px-container py-12 max-w-6xl">
        {/* Intro */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            How to use this library
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            Each symptom page lists the red flags that flip it into an ER visit, the most common
            causes, the diagnostic ladder a vet will follow, and when home care is safe. Use the
            urgency badges below to skim — and call the vet whenever you are unsure.
          </p>
        </section>

        {/* Grouped by urgency tier */}
        {TIER_ORDER.map((tier) => {
          const items = byTier[tier]
          if (items.length === 0) return null
          const meta = TIER_META[tier]
          const dogs = items.filter((s) => s.species === 'Dog')
          const cats = items.filter((s) => s.species === 'Cat')
          const others = items.filter((s) => s.species !== 'Dog' && s.species !== 'Cat')

          return (
            <section key={tier} className="mb-12">
              <div className={`border-2 ${meta.border} ${meta.bg} rounded-xl p-6 mb-5`}>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`${meta.badgeBg} ${meta.badgeText} font-display font-black text-sm px-3 py-1.5 rounded-md tracking-tight`}
                  >
                    {tier.toUpperCase()}
                  </span>
                  <h2
                    className={`font-display font-black m-0 ${meta.text}`}
                    style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                  >
                    {tier} symptoms ({items.length})
                  </h2>
                </div>
                <p className="text-sm text-brand-text-mid m-0 leading-relaxed">{meta.blurb}</p>
              </div>

              {dogs.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3 pb-2 border-b border-brand-border">
                    Dogs ({dogs.length})
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {dogs.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                      >
                        <div
                          className={`text-2xs font-bold tracking-eyebrow uppercase mb-1 ${meta.text}`}
                        >
                          {speciesLabel(s)}
                        </div>
                        <div className="font-display font-bold text-brand-dark text-sm">
                          {s.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {cats.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3 pb-2 border-b border-brand-border">
                    Cats ({cats.length})
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cats.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                      >
                        <div
                          className={`text-2xs font-bold tracking-eyebrow uppercase mb-1 ${meta.text}`}
                        >
                          {speciesLabel(s)}
                        </div>
                        <div className="font-display font-bold text-brand-dark text-sm">
                          {s.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {others.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-brand-dark text-base mb-3 pb-2 border-b border-brand-border">
                    Other species ({others.length})
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {others.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                      >
                        <div
                          className={`text-2xs font-bold tracking-eyebrow uppercase mb-1 ${meta.text}`}
                        >
                          {speciesLabel(s)}
                        </div>
                        <div className="font-display font-bold text-brand-dark text-sm">
                          {s.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )
        })}

        {/* FAQ — answers grounded only in on-page facts. FAQAccordion emits
            the FAQPage JSON-LD. */}
        <section aria-labelledby="symptoms-faq" className="mt-12 border-t border-brand-border pt-10">
          <h2 id="symptoms-faq" className="font-display text-xl font-bold text-brand-dark mb-5">Frequently Asked Questions</h2>
          <div className="max-w-3xl">
            <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
          </div>
        </section>

        {/* Cross-portfolio callouts */}
        <section className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link
            href="/find-a-vet"
            className="bg-brand-surface border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Find Care
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Find a Vet in Your State
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              General practice, 24-hour emergency hospitals, and board-certified specialists by
              state.
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
              Enroll before symptoms appear — pre-existing conditions are not covered. Side-by-side
              accident-and-illness comparisons.
            </p>
          </Link>
        </section>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Symptoms-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          urgency-tier-map, presenting-sign-log, and
          avma-aaha-acvim-grounding copy on this hub — a
          laminated pet symptoms triage chart so the ER NOW
          / same-day / schedule / monitor map is posted on
          the fridge, a pet fridge symptoms library card so
          each presenting-sign spoke is labeled on the
          fridge, and a veterinary symptoms reference
          handbook so the AVMA / AAHA / ACVIM grounding is
          a physical kitchen book. These are educational
          kitchen searches, not a ranked medication list,
          not a substitute for a veterinarian, not a
          tools-hub / insurance-hub / reviews-hub /
          health-hub / guides-hub / breeds-hub /
          diagnostics-hub hop, and not a child first-aid-kit
          hop (those live on the emergency triage card).
          This page does not hop medications or vaccines.
          This page does not sell insurance. This page does
          not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated pet symptoms triage chart /
            pet fridge symptoms library card /
            veterinary symptoms reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / insurance /
            reviews / health / guides / breeds /
            diagnostics kitchen kits and child
            pet+first+aid+kit hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the symptoms-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page urgency-tier-map, presenting-sign-log,
            and avma-aaha-acvim-grounding copy — a laminated
            pet symptoms triage chart, a pet fridge symptoms
            library card, and a veterinary symptoms
            reference handbook. Educational kitchen
            searches only. They are not a ranked medication
            list, they are not a tools-hub / insurance-hub
            / reviews-hub / health-hub / guides-hub /
            breeds-hub / diagnostics-hub hop, they are not
            a child first-aid-kit hop, and they do not
            replace a veterinarian. Vets.co does not sell
            insurance. Vets.co earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+pet+symptoms+triage+chart?s=symptoms-hub"
              amazonLabel="Browse laminated pet symptoms triage charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pet+fridge+symptoms+library+card?s=symptoms-hub"
              amazonLabel="Browse pet fridge symptoms library cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/veterinary+symptoms+reference+handbook?s=symptoms-hub"
              amazonLabel="Browse veterinary symptoms reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>
    </>
  )
}
