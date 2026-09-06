import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  buildMetadata,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  EmailCapture,
  FAQAccordion,
  SchemaScript,
  ShopCtas,
  StockImage,
} from '@carloOS/ui'
import { Diagnostics, type Diagnostic, type DiagnosticCategory } from '../../data/diagnostics'

// Hub-level FAQs — grounded ONLY in facts already stated on this page and in
// the per-test data (typical cost ranges, turnaround, insurance coverage
// pattern). Calibrated language; result interpretation always defers to the
// veterinarian. See QC-STANDARDS.md §1.
const HUB_FAQS = [
  {
    question: 'How much does a full pet diagnostic workup cost?',
    answer:
      'A complete workup — bloodwork plus urinalysis plus imaging plus cytology — commonly runs $300-2,000 in the United States, and complex referral workups can exceed that. Individual tests vary widely: an in-house urinalysis often starts near $40, while a board-certified echocardiogram or an advanced biopsy workup can reach $1,500 or more. The reference table on this page lists typical starting cost ranges per test. All figures are typical US ranges and are not guaranteed; your hospital, region, and case complexity determine the final cost.',
  },
  {
    question: 'Does pet insurance cover diagnostic tests?',
    answer:
      'Most accident-and-illness pet insurance plans cover diagnostic tests ordered to investigate a new symptom or monitor an active illness, once the policy is active and the waiting periods have cleared. Routine wellness screening is typically covered only under a separate wellness add-on, and pre-existing conditions are excluded. Because exclusions apply from day one, enrolling before a chronic illness is diagnosed is what makes coverage useful when a workup is later needed.',
  },
  {
    question: 'Which diagnostic test does my pet need first?',
    answer:
      'That is your veterinarian’s decision, based on the physical exam and history. As a general pattern, a sick or senior pet is usually screened first with first-line laboratory tests — a complete blood count, a chemistry panel, and a urinalysis — before moving to imaging (radiographs or ultrasound) or tissue sampling (cytology or biopsy) if those results or the exam point that way. Each test page explains when a veterinarian typically orders it.',
  },
  {
    question: 'Can I interpret my pet’s test results myself?',
    answer:
      'No. The reference ranges, urgency tiers, and plain-language interpretations on these pages are educational only. A result means something only in the context of your pet’s history, physical exam, and any concurrent diagnostics — and your veterinarian’s interpretation supersedes any general guidance here. Use these pages to understand what a test measures and to ask better questions, not to self-diagnose.',
  },
]

// Shortest typical starting cost figure per test, parsed from the first cost
// band's label (e.g. "$50-100 ..." -> "$50-100"). Used for the reference table.
function startingCost(d: Diagnostic): string {
  const first = d.typicalCost[0]?.range ?? ''
  const match = first.match(/\$[\d,]+(?:-[\d,]+)?/)
  return match ? match[0] : '—'
}

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Diagnostic Tests — Cost & Results | Vets.co',
  description:
    'Plain-language deep dives on 8 common veterinary diagnostic tests: what they measure, why vets order them, what results mean, and typical US cost ranges.',
  path: '/diagnostics',
  type: 'website',
})

// Grouping by diagnostic category for the hub layout.
interface CategoryGroup {
  id: string
  label: string
  blurb: string
  categories: DiagnosticCategory[]
}

const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'blood-and-urine',
    label: 'Blood and urine tests',
    blurb:
      'The first-line laboratory screen for any sick or senior pet — bloodwork and urinalysis screen organ function, hydration, infection, and metabolic disease.',
    categories: ['blood', 'urine'],
  },
  {
    id: 'imaging',
    label: 'Imaging studies',
    blurb:
      'Structural and functional imaging — radiographs for bone, gas, and gross anatomy; ultrasound for soft-tissue detail and real-time motion; echocardiography for the heart.',
    categories: ['imaging', 'cardiac'],
  },
  {
    id: 'biopsy',
    label: 'Tissue sampling and biopsy',
    blurb:
      'Cytology and histopathology — the gold standard for identifying masses, grading tumors, and confirming infection or inflammation.',
    categories: ['biopsy'],
  },
]

function categoryLabel(c: DiagnosticCategory): string {
  switch (c) {
    case 'blood':
      return 'Blood'
    case 'urine':
      return 'Urine'
    case 'imaging':
      return 'Imaging'
    case 'cardiac':
      return 'Cardiac'
    case 'biopsy':
      return 'Biopsy'
  }
}

export default function DiagnosticsHubPage() {
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://vets.co' },
      { name: 'Diagnostics', url: 'https://vets.co/diagnostics' },
    ],
  })
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Veterinary Diagnostic Tests',
    numberOfItems: Diagnostics.length,
    itemListElement: Diagnostics.map((d, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: d.testName,
      url: `https://vets.co/diagnostics/${d.slug}`,
    })),
  }
  const faqSchema = buildFAQSchema({
    questions: HUB_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  })
  const schema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid">Diagnostics</span>
      </nav>

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-3">
          Pet Diagnostic Tests
        </span>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl"
          style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}
        >
          Pet Diagnostic Tests
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          What {Diagnostics.length} common veterinary diagnostic tests measure, why a vet orders
          them, what results mean in plain language, and typical US cost ranges — sourced from{' '}
          <a
            href="https://www.acvim.org/Animal-Owners"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            ACVIM
          </a>
          ,{' '}
          <a
            href="https://www.aaha.org/your-pet/pet-owner-education/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            AAHA
          </a>
          , and the{' '}
          <a
            href="https://www.merckvetmanual.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            Merck Veterinary Manual
          </a>
          .
        </p>
      </div>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="vets-co:diagnostics-hero" aspect="16:9" variant="wide" priority />
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the vets diagnostics-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Vets diagnostics-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-pet-diagnostics-test-map-chart,
            fridge-diagnostics-library-card, and
            veterinary-diagnostics-reference-handbook notes that
            match the test-category-map, cost-turnaround-log,
            and acvim-aaha-merck-grounding copy on this hub —
            a laminated pet diagnostics test-map chart so the
            blood / urine / imaging / cardiac / biopsy map is
            posted on the fridge (not a tools-hub calculator
            chart, not an insurance policy-map chart, not a
            reviews buyer-guide chart, not a health triage
            chart, not a guides section-map chart, not a
            breeds screening chart), a pet fridge diagnostics
            library card so each test-category spoke is labeled
            on the fridge (not a cat measurement card, not an
            insurance levers card, not a reviews comparison
            card, not a health library card, not a guides prep
            card, not a breeds library card), and a veterinary
            diagnostics reference handbook so the ACVIM / AAHA
            / Merck grounding is a physical kitchen book (not
            a feline calculator handbook, not an insurance
            handbook, not a reviews handbook, not a health
            handbook, not a guides handbook, not a breeds
            handbook). Educational kitchen checklist, not a
            ranked test list, not a child specimen-cup hop,
            and not a substitute for a veterinarian. Vets.co
            does not sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Vets diagnostics-hub checklist"
            subtitle="Email the diagnostics-test-map-chart, fridge library-card, and diagnostics-handbook notes. No spam."
            ctaText="Email my vets diagnostics-hub checklist"
            source="diagnostics-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-12 max-w-6xl">
        {/* Extractable direct-answer summary (TL;DR) for SERP + AI citation */}
        <section className="bg-brand-dark rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            The short answer
          </div>
          <p className="text-white/90 leading-relaxed m-0 text-base max-w-3xl">
            Veterinary diagnostic tests fall into four groups: <strong>blood and urine
            tests</strong> (the first-line screen for a sick or senior pet), <strong>imaging</strong>{' '}
            (radiographs and ultrasound for structure and soft tissue), <strong>cardiac
            imaging</strong> (echocardiography for the heart), and <strong>tissue sampling</strong>{' '}
            (cytology and biopsy, the gold standard for diagnosing masses). A typical individual
            test ranges from about $40 for an in-house urinalysis to $1,500+ for a specialist
            echocardiogram or advanced biopsy workup, and a complete workup commonly runs
            $300-2,000. Most accident-and-illness pet insurance plans reimburse diagnostics ordered
            to investigate a symptom once the policy is active and waiting periods clear — but
            pre-existing conditions are excluded. Result interpretation always belongs to your
            veterinarian. All cost figures are typical US ranges and are not guaranteed.
          </p>
        </section>

        {/* Why we built this library */}
        <section className="bg-brand-primary/5 border-2 border-brand-primary/30 rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            How to read these pages
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            Each diagnostic test page is organized the same way: what the test measures, when a
            veterinarian orders it, how it is performed, what preparation it requires, how long it
            takes, typical US cost ranges, what results mean in plain language, what comes next,
            and how pet insurance typically covers the workup. Cost ranges are{' '}
            <strong>typical US figures</strong> and are not guaranteed. Result interpretation
            always depends on your pet&apos;s clinical picture — your veterinarian&apos;s
            interpretation supersedes any general guidance here.
          </p>
        </section>

        {/* Diagnostic workup costs callout */}
        <section className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            Why diagnostic costs matter
          </div>
          <p className="text-brand-text-mid leading-relaxed m-0 text-sm">
            A complete diagnostic workup — bloodwork plus urinalysis plus imaging plus
            cytology — commonly runs $300-2,000 in the United States, and complex referral
            workups can exceed that. Most accident-and-illness pet insurance plans cover
            diagnostic costs once your policy is active and waiting periods are cleared.
            Pre-existing conditions are excluded, which is why enrollment timing matters.
          </p>
        </section>

        {/* At-a-glance comparison table — grounded in per-test data */}
        <section className="mb-12">
          <h2
            className="font-display font-black text-brand-dark mb-2"
            style={{ fontSize: 'clamp(18px, 2.4vw, 26px)' }}
          >
            Diagnostic tests at a glance
          </h2>
          <p className="text-sm text-brand-text-mid mb-5 max-w-3xl leading-relaxed">
            Typical starting cost and turnaround for each test. Starting figures reflect the
            lowest-cost in-house option; reference-lab review, sedation, and bundled panels cost
            more. All figures are typical US ranges and are not guaranteed.
          </p>
          <div className="overflow-x-auto border border-brand-border rounded-xl">
            <table className="w-full text-sm border-collapse">
              <caption className="sr-only">
                Veterinary diagnostic tests with category, typical starting cost, and turnaround
                time
              </caption>
              <thead>
                <tr className="bg-brand-surface text-left">
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">
                    Test
                  </th>
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">
                    Category
                  </th>
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border whitespace-nowrap">
                    Typical starting cost
                  </th>
                  <th scope="col" className="font-display font-bold text-brand-dark p-3 border-b border-brand-border">
                    Turnaround
                  </th>
                </tr>
              </thead>
              <tbody>
                {Diagnostics.map((d) => (
                  <tr key={d.slug} className="border-b border-brand-border last:border-0 hover:bg-brand-surface/50">
                    <th scope="row" className="p-3 font-medium text-left align-top">
                      <Link href={`/diagnostics/${d.slug}`} className="text-brand-primary hover:underline no-underline">
                        {d.testName}
                      </Link>
                    </th>
                    <td className="p-3 align-top text-brand-text-mid">{categoryLabel(d.category)}</td>
                    <td className="p-3 align-top text-brand-text-mid whitespace-nowrap">{startingCost(d)}</td>
                    <td className="p-3 align-top text-brand-text-light">{d.duration.split('.')[0]}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Grouped by category */}
        {CATEGORY_GROUPS.map((group) => {
          const items = Diagnostics.filter((d) => group.categories.includes(d.category))
          if (items.length === 0) return null
          return (
            <section key={group.id} className="mb-12">
              <div className="border-2 border-brand-border bg-brand-surface rounded-xl p-6 mb-5">
                <h2
                  className="font-display font-black text-brand-dark m-0 mb-2"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
                >
                  {group.label} ({items.length})
                </h2>
                <p className="text-sm text-brand-text-mid m-0 leading-relaxed">{group.blurb}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {items.map((d: Diagnostic) => (
                  <Link
                    key={d.slug}
                    href={`/diagnostics/${d.slug}`}
                    className="bg-brand-surface border border-brand-border rounded-xl p-4 no-underline hover:border-brand-primary transition-colors block"
                  >
                    <div className="text-2xs font-bold tracking-eyebrow uppercase mb-1 text-brand-primary">
                      {categoryLabel(d.category)} · {d.alsoKnownAs[0]}
                    </div>
                    <div className="font-display font-bold text-brand-dark text-sm mb-1">
                      {d.testName}
                    </div>
                    <div className="text-xs text-brand-text-light leading-relaxed">
                      {d.whenVetsOrder[0]}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* Result interpretation always defers to the vet */}
        <section className="bg-brand-primary/5 border-2 border-brand-primary/40 rounded-xl p-6 mt-10 mb-10">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Always discuss results with your veterinarian
          </div>
          <p className="text-sm text-brand-text-mid leading-relaxed m-0">
            Reference ranges, urgency tiers, and general interpretations on these pages are
            educational. Your veterinarian interprets results in the context of your pet&apos;s
            history, physical exam, and any concurrent diagnostics — and that interpretation
            supersedes any general guidance here.
          </p>
        </section>

        {/* Hub FAQ — schema lives in the combined SchemaScript above */}
        <section className="mt-12">
          <h2
            className="font-display font-black text-brand-dark mb-5"
            style={{ fontSize: 'clamp(18px, 2.4vw, 26px)' }}
          >
            Common questions about pet diagnostics
          </h2>
          <FAQAccordion items={HUB_FAQS} includeSchema={false} />
          <p className="text-xs text-brand-text-light mt-4 leading-relaxed max-w-3xl">
            For deeper coverage, see how diagnostic costs factor into{' '}
            <Link href="/insurance/what-pet-insurance-covers" className="text-brand-primary hover:underline">
              what pet insurance covers
            </Link>{' '}
            and{' '}
            <Link href="/insurance/pre-existing-conditions" className="text-brand-primary hover:underline">
              how pre-existing conditions are treated
            </Link>
            . To put a number on whether coverage pays off, try the{' '}
            <Link href="/tools/pet-insurance-worth-it-calculator" className="text-brand-primary hover:underline">
              “is pet insurance worth it?” calculator
            </Link>
            .
          </p>
        </section>

        {/* Cross-portfolio callouts */}
        <section className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link
            href="/reviews/best-pet-insurance"
            className="bg-brand-primary/5 border border-brand-primary/30 rounded-xl p-6 no-underline hover:border-brand-primary block"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Pet Insurance & Diagnostic Costs
            </div>
            <div className="font-display font-bold text-brand-dark text-base mb-2">
              Compare Pet Insurance 2026
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Diagnostic workups commonly run $300-2,000. Most accident-and-illness plans cover
              diagnostics after waiting periods clear — pre-existing conditions are excluded, so
              the time to enroll is before a chronic illness is diagnosed.
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
              Find a Vet in Your State
            </div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              General practice, 24-hour emergency hospitals, and board-certified specialists by
              state.
            </p>
          </Link>
        </section>
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Diagnostics-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          test-category-map, cost-turnaround-log, and
          acvim-aaha-merck-grounding copy on this hub — a
          laminated pet diagnostics test-map chart so the
          blood / urine / imaging / cardiac / biopsy map is
          posted on the fridge, a pet fridge diagnostics
          library card so each test-category spoke is labeled
          on the fridge, and a veterinary diagnostics
          reference handbook so the ACVIM / AAHA / Merck
          grounding is a physical kitchen book. These are
          educational kitchen searches, not a ranked test
          list, not a substitute for a veterinarian, not a
          tools-hub / insurance-hub / reviews-hub /
          health-hub / guides-hub / breeds-hub hop, and not
          a child specimen-cup hop (those live on senior
          bloodwork). This page does not hop medications or
          vaccines. This page does not sell insurance. This
          page does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated pet diagnostics test-map chart /
            pet fridge diagnostics library card /
            veterinary diagnostics reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / insurance /
            reviews / health / guides / breeds kitchen
            kits and child sterile+urine+specimen+cup hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the diagnostics-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page test-category-map, cost-turnaround-log,
            and acvim-aaha-merck-grounding copy — a laminated
            pet diagnostics test-map chart, a pet fridge
            diagnostics library card, and a veterinary
            diagnostics reference handbook. Educational
            kitchen searches only. They are not a ranked
            test list, they are not a tools-hub /
            insurance-hub / reviews-hub / health-hub /
            guides-hub / breeds-hub hop, they are not a
            child specimen-cup hop, and they do not replace
            a veterinarian. Vets.co does not sell insurance.
            Vets.co earns a commission on qualifying
            purchases at no extra cost to you. Empty Chewy
            buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+pet+diagnostics+test+map+chart?s=diagnostics-hub"
              amazonLabel="Browse laminated pet diagnostics test-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/pet+fridge+diagnostics+library+card?s=diagnostics-hub"
              amazonLabel="Browse pet fridge diagnostics library cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/veterinary+diagnostics+reference+handbook?s=diagnostics-hub"
              amazonLabel="Browse veterinary diagnostics reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>
    </>
  )
}
