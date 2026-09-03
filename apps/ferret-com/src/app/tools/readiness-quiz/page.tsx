import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  AffiliateDisclosure,
  CrossPortfolioCard,
  ShopCtas,
} from '@carloOS/ui'
import Quiz from './Quiz'
import ReadinessKit from './ReadinessKit'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Readiness Quiz & New-Owner Kit | Ferret.com',
  description:
    'Ten honest questions on legality, time, budget, and housing — then a day-one kit checklist with Amazon hops for cage, litter, food, and carrier.',
  path: '/tools/readiness-quiz',
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ferret.com', url: 'https://ferret.com/' },
  { name: 'Tools', url: 'https://ferret.com/tools' },
  { name: 'Readiness Quiz', url: 'https://ferret.com/tools/readiness-quiz' },
])

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Ownership Readiness Quiz',
  description:
    'A scored self-assessment plus a packable new-owner kit covering legality, time, budget, housing, and day-one supplies (cage, litter, food, hammock, dig box, carrier).',
  url: 'https://ferret.com/tools/readiness-quiz',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Ten scored questions on legality, time, budget, housing, and commitment',
    'Four readiness tiers with plain-English next steps',
    'Interactive new-owner kit checklist with Amazon shop hops',
    'Day-one list: cage, litter, food, hammock, dig box, carrier',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to assess your readiness to own a ferret',
  description:
    'Answer ten scored questions about legality, daily time, budget, housing, and long-term commitment, then pack a day-one kit before a ferret comes home.',
  url: 'https://ferret.com/tools/readiness-quiz',
  steps: [
    {
      name: 'Check ferret legality in your location',
      text: 'Before the quiz, verify that ferrets are legal where you live. They are prohibited in California and Hawaii, banned in New York City, and restricted in a number of other jurisdictions.',
    },
    {
      name: 'Answer all ten questions honestly',
      text: 'Work through the ten questions covering legality, daily out-of-cage time (ferrets need at least 3–4 hours per day), housing situation, existing pets, budget for setup and emergencies, odor tolerance, vet access, and long-term commitment horizon.',
    },
    {
      name: 'Read your readiness tier and next steps',
      text: 'The quiz returns one of four tiers: Strong fit, Fit with preparation, Not quite yet, or Significant barriers present. Each tier includes a plain-English explanation and targeted next steps toward responsible ownership.',
    },
    {
      name: 'Pack the new-owner kit',
      text: 'If the result points toward bringing a ferret home, gather a multi-level cage, corner pans and pellet litter, a high-protein food, a hammock or sleep sack, a dig box, and a hard-sided carrier before arrival day.',
    },
  ],
})

const combinedSchema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

// FAQ content is drawn entirely from facts already stated on this page
// (legality, daily-time, emergency conditions, the four tiers, the kit).
const FAQS = [
  {
    question: 'Where are ferrets illegal to own?',
    answer:
      'Ferrets are illegal to keep in California and Hawaii, banned in New York City, and restricted or banned in a number of other US and international cities and counties. Legality is a hard constraint, so check it before anything else — see the ferret legality by state reference.',
  },
  {
    question: 'How much daily time does a ferret need?',
    answer:
      'Ferrets need at least 3–4 hours of supervised out-of-cage time per day. The daily time commitment is one of the most common factors that determines whether ferret ownership goes well, so the quiz weights it accordingly.',
  },
  {
    question: 'What does the readiness quiz score?',
    answer:
      'Ten questions cover legality, daily out-of-cage time, housing situation, existing pets, setup and emergency budget, odor tolerance, vet access, and long-term commitment horizon. Each is weighted by how frequently it drives rehoming or welfare problems, and the quiz returns one of four tiers: Strong fit, Fit with preparation, Not quite yet, or Significant barriers present.',
  },
  {
    question: 'What should be in a new ferret owner kit?',
    answer:
      'A typical day-one list is a multi-level cage, high-back corner pans and paper or wood-pellet litter (never clumping clay), a high-protein named-meat food, a fleece hammock or sleep sack, a dig box, and a hard-sided carrier for the ride home and vet trips. The interactive checklist on this page is a husbandry starting point — not a ranked product list.',
  },
  {
    question: 'Why should I budget for a veterinary emergency?',
    answer:
      'Adrenal disease, insulinoma, and gastrointestinal blockages are common in pet ferrets, and treatment is not optional once they appear. The up-front setup cost is manageable; the harder part is having an emergency fund in place. The cost of owning a ferret guide and the cost calculator give you a concrete number to plan against.',
  },
  {
    question: 'Can I retake the quiz?',
    answer:
      'Yes. The result is a starting point for honest self-assessment, not a verdict. Circumstances change — housing, budget, time, and vet access can all shift — and the quiz can be retaken as they do.',
  },
]

export default function ReadinessQuizPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Calculators &amp; Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Is a ferret the right animal for you?
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Ten honest questions about legality, daily time, budget, housing, and long-term commitment.
            Then pack a day-one kit — cage, litter, food, hammock, dig box, carrier — before a ferret
            comes home.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Readiness Quiz</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret readiness checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the day-one kit — cage, litter, food, hammock, dig box, and carrier —
            so you can shop the setup without re-running the quiz. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret readiness checklist"
            subtitle="Email the day-one kit — cage, litter, food, hammock, dig box, carrier. No spam."
            ctaText="Email my ferret readiness checklist"
            source="tools-readiness-quiz-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl mb-8">
          <p className="text-base leading-relaxed text-brand-text-mid">
            Ferret ownership suits a specific kind of household: one with daily time for supervised
            out-of-cage play, a housing situation that allows the animal, access to an exotic-animal
            veterinarian, and a realistic picture of what the first serious illness will cost. This
            quiz surfaces those factors honestly. All ten questions apply equally whether you are
            considering your first ferret or your fifth.
          </p>
        </div>

        <div className="max-w-2xl">
          <Quiz />
        </div>
      </section>

      <section id="readiness-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            New-owner readiness kit
          </h2>
          <p className="mb-6 text-base leading-relaxed text-brand-text-mid">
            If the result points toward bringing a ferret home, have the core setup in place before
            arrival. The six-item list below is a husbandry starting point — cage, litter, food,
            hammock, dig box, carrier — not a ranked product list. Size the cage with the{' '}
            <Link href="/tools/cage-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cage size calculator
            </Link>
            , pans with the{' '}
            <Link href="/tools/litter-planner" className="text-brand-primary underline-offset-2 hover:underline">
              litter planner
            </Link>
            , and a bag with the{' '}
            <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">
              food evaluator
            </Link>
            .
          </p>
          <ReadinessKit />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (cage / litter / food / carrier).
          Reuses queries already shipped on ferret reviews + cage-size + cost calculator.
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop the kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              The six-item list above is a husbandry starting point — cage, litter, food, hammock,
              dig box, carrier — not a ranked product list. Same Amazon hops used on the{' '}
              <Link href="/reviews/best-ferret-cage" className="text-brand-primary underline-offset-2 hover:underline">
                cage review
              </Link>
              , the{' '}
              <Link href="/reviews/best-ferret-litter" className="text-brand-primary underline-offset-2 hover:underline">
                litter review
              </Link>
              , and the{' '}
              <Link href="/diet/best-ferret-kibble" className="text-brand-primary underline-offset-2 hover:underline">
                kibble guide
              </Link>
              . Paper or wood pellet — never clumping clay. Ferret.com earns a commission on
              qualifying purchases at no extra cost to you.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=tools-readiness-quiz"
                amazonLabel="Browse multi-level cages on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/high+protein+ferret+food+kibble?s=tools-readiness-quiz"
                amazonLabel="Browse ferret food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/compressed+wood+pellet+litter+heat+treated+non+clumping?s=tools-readiness-quiz"
                amazonLabel="Browse wood pellet litter on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+carrier+hard+sided?s=tools-readiness-quiz"
                amazonLabel="Browse ferret carriers on Amazon →"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We may earn a commission if you buy through an Amazon link — at no extra cost to you, and we never
            rank by commission. Empty Chewy buttons stay hidden.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Fold the kit into year-one cost with the{' '}
            <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>
            . The narrative decision guide is{' '}
            <Link href="/ownership/is-a-ferret-right-for-you" className="text-brand-primary underline-offset-2 hover:underline">
              is a ferret right for you
            </Link>
            . Day-by-day arrival steps live on the{' '}
            <Link href="/ownership/first-week-checklist" className="text-brand-primary underline-offset-2 hover:underline">
              first-week checklist
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">What the quiz covers</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The ten questions address the factors that most commonly determine whether ferret ownership
            goes well or poorly: legal status in your location, the daily time commitment (ferrets
            need at least 3-4 hours of out-of-cage time per day), compatibility with existing pets,
            setup and ongoing costs, ability to fund a veterinary emergency, odor and scent
            tolerance, housing stability, proximity to an exotics-experienced vet, and commitment
            horizon. Each is weighted by how frequently it drives rehoming or animal welfare problems.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Legality is a hard constraint worth checking first. Ferrets are illegal to keep in
            California and Hawaii, banned in New York City, and restricted or banned in a number of
            other cities and counties in the US and abroad. See the{' '}
            <Link href="/ownership/ferret-legality-by-state" className="text-brand-primary underline-offset-2 hover:underline">
              ferret legality by state
            </Link>{' '}
            reference before anything else.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The financial picture is the other factor most people underestimate. The up-front cost
            is real but manageable. The harder part is the emergency fund: adrenal disease,
            insulinoma, and gastrointestinal blockages are common in pet ferrets, and treatment
            is not optional once they appear. When a sign appears, the{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              ferret emergency sign-list
            </Link>{' '}
            is a conservative go-now / same-day / monitor read — a triage aid, not a diagnosis. The{' '}
            <Link href="/ownership/cost-of-owning-a-ferret" className="text-brand-primary underline-offset-2 hover:underline">
              cost of owning a ferret
            </Link>{' '}
            guide and the{' '}
            <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>{' '}
            give you a concrete number to plan against.             The{' '}
            <Link href="/tools/ferret-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              ferret age calculator
            </Link>{' '}
            maps the 6–10 year commitment onto a life-stage label. The{' '}
            <Link href="/tools/ferret-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              ferret body condition score
            </Link>{' '}
            is the 1–9 planning read you will use after a ferret arrives.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">How to use your result</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The quiz returns one of four readiness tiers: <strong>Strong fit</strong>, <strong>Fit
            with preparation</strong>, <strong>Not quite yet</strong>, or <strong>Significant barriers
            present</strong>. Each tier comes with a brief explanation and targeted next steps. The
            result is a starting point for honest self-assessment, not a verdict. Circumstances change
            and the quiz can be retaken as they do.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            If you are deciding between adopting and buying, the{' '}
            <Link href="/ownership/adoption-vs-buying" className="text-brand-primary underline-offset-2 hover:underline">
              adoption vs. buying
            </Link>{' '}
            guide walks through both paths. Shelter ferrets are often older animals surrendered by
            keepers whose circumstances changed; they arrive with personality and history, and adoption
            fees are almost always lower than breeder prices.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">Frequently asked questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Is This a Ferret Emergency?', href: '/tools/is-this-a-ferret-emergency', note: 'Conservative sign-list urgency read, not a diagnosis' },
              { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator', note: 'Human-year estimate and kit / young adult / mature / senior label' },
              { label: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score', note: '1–9 planning score from rib feel, waist, and belly — not a diagnosis' },
              { label: 'Cage Size Calculator', href: '/tools/cage-size-calculator', note: 'Minimum L×W×H from ferret count and levels' },
              { label: 'Cost Calculator', href: '/tools/cost-calculator', note: 'Monthly and first-year setup cost' },
              { label: 'Litter Planner', href: '/tools/litter-planner', note: 'Pans and 30 lb bags from ferret count' },
              { label: 'Food Evaluator', href: '/tools/food-evaluator', note: 'Score a bag against nutrient targets' },
              { label: 'Is a Ferret Right for You?', href: '/ownership/is-a-ferret-right-for-you', note: 'Narrative decision guide behind the quiz' },
              { label: 'First-Week Checklist', href: '/ownership/first-week-checklist', note: 'Day-by-day arrival steps after the kit' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
              >
                <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                <div className="text-xs text-brand-text-light">{item.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}
