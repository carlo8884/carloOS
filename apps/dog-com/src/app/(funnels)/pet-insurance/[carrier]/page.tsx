import type { Metadata } from 'next'
import Link from 'next/link'
import {
  notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  AffiliateDisclosure,
  EmailCapture,
  FAQAccordion
} from '@carloOS/ui'
import {
  CARRIERS,
  getCarrierBySlug,
  carrierSlugs,
  type CarrierProfile,
} from '../../../../data/insurance-carriers'

export async function generateStaticParams() {
  return carrierSlugs().map((carrier) => ({ carrier }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ carrier: string }>
}): Promise<Metadata> {
  const { carrier } = await params
  const c = getCarrierBySlug(carrier)
  if (!c) return {}
  return buildMetadata({
    siteId: 'dog-com',
    title: `${c.name} Review 2026 — Pros, Cons, and Who It's For`,
    description: `${c.tagline} Premiums, deductibles, waiting periods, and ${c.name} vs other carriers.`,
    path: `/pet-insurance/${c.slug}`,
    type: 'article',
  })
}

function ChecklistRow({ ok, label }: { ok: boolean | string; label: string }) {
  const icon =
    ok === true ? '✓' : ok === false ? '—' : typeof ok === 'string' ? ok : '—'
  const color =
    ok === true
      ? 'text-emerald-600'
      : ok === false
        ? 'text-stone-400'
        : 'text-amber-600'
  return (
    <div className="flex items-center gap-3 py-2 border-b border-brand-border/30">
      <span className={`font-bold ${color} w-10`}>{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  )
}

export default async function CarrierPage({
  params,
}: {
  params: Promise<{ carrier: string }>
}) {
  const { carrier } = await params
  const c = getCarrierBySlug(carrier)
  if (!c) notFound()

  const others = CARRIERS.filter((x) => x.slug !== c.slug).slice(0, 3)

  const schema = combineSchemas(
    buildArticleSchema({
      siteId: 'dog-com',
      title: `${c.name} Review 2026`,
      description: c.tagline,
      url: `https://dog.com/pet-insurance/${c.slug}`,
      imageUrl: '',
      authorName: 'Dog.com Editorial',
      publishedAt: '2026-05-29T00:00:00Z',
      modifiedAt: '2026-05-29T00:00:00Z',
    }),
    buildBreadcrumbSchema({ items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Pet Insurance', url: 'https://dog.com/pet-insurance' },
      { name: c.name, url: `https://dog.com/pet-insurance/${c.slug}` },
    ] }),
  )

  const faqItems = [
    {
      question: `Does ${c.name} cover pre-existing conditions?`,
      answer:
        c.slug === 'manypets'
          ? 'ManyPets is one carrier that may cover curable pre-existing conditions after 18 symptom-free months. Chronic pre-existing conditions are not covered.'
          : `No major pet insurance carrier covers pre-existing conditions present before the policy start date. ${c.name} treats "curable" conditions as eligible after a cure-confirmation period (typically the condition must be symptom-free and untreated for a defined window).`,
    },
    {
      question: `What is the waiting period for ${c.name}?`,
      answer: `${c.name}'s waiting periods are: ${c.waitingPeriods.accident} for accidents, ${c.waitingPeriods.illness} for illness, and ${c.waitingPeriods.orthopedic} for orthopedic conditions. Orthopedic is typically the longest wait — relevant for breeds prone to cruciate tears or hip dysplasia.`,
    },
    {
      question: `How much does ${c.name} cost per month?`,
      answer: `For our reference profile (4-year-old mixed-breed medium dog, $5,000 annual limit, $500 deductible, 80% reimbursement), ${c.name} runs $${c.samplePremiumMonthly.low}–$${c.samplePremiumMonthly.high} per month. Your actual premium will vary by breed, age, ZIP, and the deductible/reimbursement combination you choose.`,
    },
    {
      question: `Is ${c.name} good for senior pets?`,
      answer: c.ageLimits.max.includes('no upper')
        ? `${c.name} has no upper age limit at enrollment, making it one of the few carriers that will write new policies for senior pets.`
        : `${c.name} caps new enrollment at ${c.ageLimits.max}. If you're insuring a senior pet, prioritize carriers without an upper age limit like Pumpkin, ManyPets, Spot, and Figo.`,
    },
  ]

  return (
    <>
      <AffiliateDisclosure variant="inline" siteId="dog-com" />
      <SchemaScript schema={schema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">
          🛡️ Pet Insurance Review · May 2026
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}
        >
          {c.name} Review 2026
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          {c.tagline}
        </p>
        <div className="mt-7 flex gap-4 flex-wrap items-center">
          <a
              href={`/go/${c.vendor}/home?s=pet-insurance-carrier-${c.slug}`}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Get a {c.name} quote →
            </a>
          <Link
            href="/pet-insurance"
            className="text-white/70 underline no-underline hover:text-white"
          >
            See all carriers
          </Link>
        </div>
      </div>

      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <Link href="/pet-insurance" className="hover:text-brand-primary no-underline">
          Pet Insurance
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">{c.name}</span>
      </nav>

      <div className="px-container sm:px-container-sm py-14 max-w-5xl mx-auto">
        {/* TL;DR */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Editorial Score: {c.editorialScore}/10
          </div>
          <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
            <strong>{c.editorialNote}</strong>
          </p>
        </div>

        {/* Quick facts box */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <h2 className="font-display text-lg font-bold mb-3">Quick facts</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Sample monthly premium</span>
                <span className="font-semibold">
                  ${c.samplePremiumMonthly.low}–${c.samplePremiumMonthly.high}
                </span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Reimbursement</span>
                <span className="font-semibold">
                  {c.reimbursementOptions.map((r) => `${r}%`).join(', ')}
                </span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Annual limit options</span>
                <span className="font-semibold text-right text-xs">
                  {c.annualLimitOptions
                    .map((o) => (o === 'unlimited' ? 'Unlimited' : `$${o.toLocaleString()}`))
                    .join(', ')}
                </span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Founded</span>
                <span className="font-semibold">{c.yearFounded ?? '—'}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">A.M. Best Rating</span>
                <span className="font-semibold">{c.amBestRating ?? '—'}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">BBB Rating</span>
                <span className="font-semibold">{c.bbbRating ?? '—'}</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-2">
                <span className="text-brand-text-mid">Age limits (enrollment)</span>
                <span className="font-semibold text-right text-xs">
                  {c.ageLimits.min} – {c.ageLimits.max}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-text-mid">States licensed</span>
                <span className="font-semibold">
                  {c.states === 'all-50'
                    ? 'All 50 states'
                    : c.states === 'most'
                      ? 'Most U.S. states'
                      : 'Limited availability'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
            <h2 className="font-display text-lg font-bold mb-3">Coverage checklist</h2>
            <div>
              <ChecklistRow ok={c.coversAccident} label="Accidents" />
              <ChecklistRow ok={c.coversIllness} label="Illnesses" />
              <ChecklistRow ok={c.coversHereditary} label="Hereditary conditions" />
              <ChecklistRow ok={c.coversChronic} label="Chronic conditions" />
              <ChecklistRow ok={c.coversAlternative} label="Alternative therapies" />
              <ChecklistRow ok={c.coversBehavioral} label="Behavioral therapy" />
              <ChecklistRow
                ok={c.coversDental === 'full' ? true : c.coversDental === 'illness-only' ? 'Illness only' : false}
                label="Dental disease"
              />
              <ChecklistRow
                ok={
                  c.coversWellness === 'included'
                    ? true
                    : c.coversWellness === 'standalone-addon'
                      ? 'Add-on'
                      : false
                }
                label="Wellness / preventive"
              />
              <ChecklistRow ok={c.coversRxFood} label="Prescription food" />
              <ChecklistRow
                ok={c.coversExamFees === true ? true : c.coversExamFees === 'addon' ? 'Add-on' : false}
                label="Exam fees"
              />
              <ChecklistRow ok={c.hasTelehealthIncluded} label="Telehealth included" />
              <ChecklistRow ok={c.hasApp} label="Mobile app" />
            </div>
          </div>
        </div>

        {/* Waiting periods */}
        <h2 className="font-display text-2xl font-bold mb-4">Waiting periods</h2>
        <div className="grid grid-cols-3 gap-4 mb-12">
          {(['accident', 'illness', 'orthopedic'] as const).map((k) => (
            <div
              key={k}
              className="bg-brand-surface border border-brand-border rounded-xl p-5 text-center"
            >
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
                {k}
              </div>
              <div className="font-display text-xl font-bold">{c.waitingPeriods[k]}</div>
            </div>
          ))}
        </div>

        {/* Pros / Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-emerald-700">Pros</h3>
            <ul className="space-y-2">
              {c.pros.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-emerald-600 font-bold">+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-3 text-stone-700">Cons</h3>
            <ul className="space-y-2">
              {c.cons.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-stone-500 font-bold">−</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Best for */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="font-display text-lg font-bold mb-3 text-emerald-900">
              Best for
            </h3>
            <ul className="space-y-2 text-sm">
              {c.bestFor.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="text-emerald-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h3 className="font-display text-lg font-bold mb-3 text-amber-900">
              Not ideal for
            </h3>
            <ul className="space-y-2 text-sm">
              {c.notIdealFor.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-700 font-bold">!</span>
                  <span className="text-amber-900">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-6 mb-12">
          <h3 className="font-display text-xl font-bold mb-3">
            Ready to get a quote?
          </h3>
          <p className="text-sm text-brand-text-mid mb-4">
            Quotes are free and don't require a credit check. Most carriers
            return a price in under a minute.
          </p>
          <a
              href={`/go/${c.vendor}/home?s=pet-insurance-carrier-${c.slug}`}
              rel="sponsored nofollow noopener" target="_blank" className="inline-block bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold no-underline hover:opacity-90"
            >
              Get a {c.name} quote →
            </a>
        </div>

        {/* FAQ */}
        <h2 className="font-display text-2xl font-bold mb-6">Frequently asked</h2>
        <FAQAccordion items={faqItems} />

        {/* See other carriers */}
        <h2 className="font-display text-2xl font-bold mb-6 mt-12">
          Compare with other top-rated carriers
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/pet-insurance/${o.slug}`}
              className="border border-brand-border rounded-xl p-5 hover:border-brand-primary transition no-underline"
            >
              <div className="font-display text-lg font-bold mb-1">{o.name}</div>
              <div className="text-sm text-brand-text-mid mb-2">{o.tagline}</div>
              <div className="text-xs text-brand-primary font-semibold">
                Score: {o.editorialScore}/10 →
              </div>
            </Link>
          ))}
        </div>

        {/* Email capture */}
        <EmailCapture
          variant="section"
          siteId="dog-com"
          source="dog-com:insurance-comparison"
          title="See all 9 carriers side-by-side"
          subtitle="Download the comparison spreadsheet — free."
          ctaText="Send the spreadsheet"
        />
      </div>
    </>
  )
}
