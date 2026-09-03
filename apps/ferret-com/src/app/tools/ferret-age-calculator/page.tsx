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
import FerretAgeCalculator from './Calculator'

const URL = 'https://ferret.com/tools/ferret-age-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Age Calculator — Human Years & Life Stage | Ferret.com',
  description:
    'Convert ferret years to a human-year estimate and a kit / young adult / mature / senior label. A planning reference, not a diagnosis.',
  path: '/tools/ferret-age-calculator',
})

const FAQS = [
  {
    question: 'How old is my ferret in human years?',
    answer:
      'This calculator uses a planning approximation, not a published ferret clock and not the multiply-by-seven shortcut. Year one counts as about 15 human years because ferrets reach young-adult size and sexual maturity in months. Year two reaches about 25. After that, each ferret year adds about eight human years, so a 3-year-old is about 33, a 5-year-old about 49, and an 8-year-old about 73. Treat the number as a conversational comparison — aging varies by genetics, husbandry, and disease burden.',
    answerText:
      'Planning approximation only: year 1 ≈ 15, year 2 ≈ 25, then about +8 per year. A 5-year-old is about 49; an 8-year-old about 73. Not multiply-by-seven, not a diagnosis.',
  },
  {
    question: 'When is a ferret considered a senior?',
    answer:
      'There is no single hard cutoff. Ferret.com’s lifespan reference labels kit (0–1), young adult (1–3), middle age / mature (3–5), and senior (5+). Aging-ferret care notes that most exotic-pet veterinarians begin treating ferrets as senior around 4–5, with formal senior protocols by age 5. Typical captive life is commonly 5–8 years, with some reaching 9–10. This calculator uses the 5+ senior band and treats 4–5 as the start of senior planning. The label reflects rising insulinoma, adrenal disease, and dental-disease incidence — not a birthday diagnosis.',
    answerText:
      'Senior is typically 4–5+ in exotic-mammal practice; this tool uses the Ferret.com 5+ senior band and treats 4–5 as the start of senior planning. Typical life is commonly 5–8 years.',
  },
  {
    question: 'Why not multiply a ferret’s age by seven?',
    answer:
      'Multiply-by-seven assumes a linear relationship that does not match how ferrets develop. They mature very fast in the first year — far more than “age × 7” implies for a kit — and then live a comparatively short 6–10 year life (commonly 5–8 on Ferret.com). A linear ×7 both mis-states a young ferret and fails to map an 8-year-old onto a late-life human comparison. The banded model here is still only a planning aid.',
    answerText:
      'Multiply-by-seven is linear and wrong for ferrets: they mature very fast in year one and live a short 6–10 year life. Use the banded planning model, not ×7.',
  },
  {
    question: 'How long do ferrets live?',
    answer:
      'Pet ferrets commonly live around 5 to 8 years, with some reaching the upper end or 9–10 with good care and luck. Ferret.com ownership copy also frames a 6–10 year commitment. Lifespan varies with genetics, diet, ferret-proofing, and the age-related diseases ferrets are prone to — insulinoma, adrenal disease, and lymphoma among them. Plan around the typical range rather than counting on an unusually long life.',
    answerText:
      'Commonly 5–8 years, some 9–10; ownership copy also uses 6–10 as the commitment. Plan around the typical range.',
  },
  {
    question: 'Is this calculator a diagnosis?',
    answer:
      'No. It is a planning and life-stage reference only. The human-year number and the kit / young adult / mature / senior label help you talk with an exotic-mammal veterinarian about screening and husbandry; they do not diagnose a disease, set a treatment plan, or replace an exam. If your ferret is collapsing, struggling to breathe, or you suspect a blockage or toxin, use the ferret emergency sign-list and go to a ferret-capable clinic — do not wait on this page.',
    answerText:
      'No. Planning reference only — not a diagnosis. For urgent signs, use the ferret emergency sign-list and seek ferret-capable care.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Ferret Age Calculator', url: URL },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Age & Life-Stage Calculator',
  description:
    'Free ferret age calculator. Converts ferret years to a human-equivalent estimate (year 1 ≈ 15, year 2 ≈ 25, then +8 per year) and reports a kit / young adult / mature / senior life-stage label grounded in Ferret.com lifespan copy. A planning reference, not a diagnosis.',
  url: URL,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Ferret years to human years using a banded planning model (not multiply-by-seven)',
    'Life stage: kit, young adult, mature, senior',
    'Stage-appropriate husbandry notes grounded in Ferret.com lifespan and aging-care copy',
    'Shoppable life-stage kit via Amazon category searches (ferret food, senior ferret food, digital pet scale, ferret hammock, carrier)',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate a ferret’s age in human years',
  description:
    'Convert a ferret’s age to a human-equivalent estimate using a banded planning model and read the matching life stage.',
  url: URL,
  steps: [
    {
      name: 'Enter your ferret’s age in years',
      text: 'Type the ferret’s age in calendar years. Use a decimal for kits (for example 0.5 for six months).',
    },
    {
      name: 'Read the human-year estimate',
      text: 'The calculator returns a conversational human-year equivalent: year one ≈ 15, year two ≈ 25, then about eight human years per ferret year. It does not multiply by seven.',
    },
    {
      name: 'Match the life stage',
      text: 'Kit under 1, young adult 1–3, mature 3–5, senior 5+ — aligned with Ferret.com lifespan stages. Many exotic-mammal vets begin senior planning around 4–5. This is a planning reference, not a diagnosis.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function FerretAgeCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Calculators &amp; Tools
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            Ferret Age Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How old is your ferret in human years — and which life stage is it in? Enter
            age for a human-year estimate and a kit / young adult / mature / senior label.
            A planning reference, not a diagnosis, and not the multiply-by-seven rule.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Ferret Age Calculator</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the stage notes
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret life-stage notes
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the kit / young adult / mature / senior recap and the shoppable
            husbandry kit (ferret food, senior ferret food, digital pet scale,
            hammock, carrier) so you can come back to the right stage without
            re-running the estimate. Planning reference only — not a diagnosis.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret life-stage notes"
            subtitle="Email the ferret life-stage recap and husbandry kit. No spam."
            ctaText="Email my ferret life-stage notes"
            source="tools-ferret-age-calculator-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <FerretAgeCalculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (life-stage kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="ferret-age-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a life-stage kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that match the
              life-stage label above — ferret food, senior ferret food, a digital
              pet scale, a ferret hammock, and a carrier. They are not a ranked
              product list, not invented inventory, and they do not diagnose a
              health problem or set a care plan. Ask your exotic-mammal
              veterinarian which stage-appropriate products fit your ferret.
              Ferret.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+food?s=tools-ferret-age-calculator"
                amazonLabel="Browse ferret food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/senior+ferret+food?s=tools-ferret-age-calculator"
                amazonLabel="Browse senior ferret food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+scale?s=tools-ferret-age-calculator"
                amazonLabel="Browse digital pet scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+hammock?s=tools-ferret-age-calculator"
                amazonLabel="Browse ferret hammocks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+carrier?s=tools-ferret-age-calculator"
                amazonLabel="Browse ferret carriers on Amazon →"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planning ahead — insurance (educational) + non-ER telehealth. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Planning ahead
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              Vet costs tend to climb once a ferret is mature or senior —
              insulinoma, adrenal disease, and dental work are common in later
              years and are not in a tidy monthly food number. Pet insurance is
              least expensive while a ferret is young and healthy; pre-existing
              conditions are excluded. This is an educational comparison link,
              not a ranking of carriers. For a stable, non-emergency question,
              talk to a licensed vet on a screen rather than waiting for a gap
              to become an ER visit.
            </p>
            <AffiliateDisclosure variant="inline" siteId="ferret-com" className="mb-3 text-2xs" />
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <Link
                href="https://vets.co/reviews/best-pet-insurance"
                className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
              >
                Compare pet insurance →
              </Link>
              <Link
                href="https://vets.co/telehealth"
                className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Talk to a vet (telehealth) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">
            How ferret years work
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Ferrets mature fast and then live a comparatively short life. A kit reaches
            young-adult size and sexual maturity in months — which is why this calculator
            treats the first year as about 15 human years, the same first-year convention
            used for cats, not a ferret-specific published clock. Year two adds about ten
            more (reaching 25). After that, each ferret year is worth about eight human
            years, so an 8-year-old maps near 73. That is a conversational comparison to
            a typical human span, chosen because Ferret.com frames life as commonly 5–8
            years (some 9–10) and ownership as a 6–10 year commitment. It is far more
            useful than multiply-by-seven, and it is still only an estimate.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Care by life stage
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The{' '}
            <Link href="/colors/ferret-lifespan" className="text-brand-primary underline-offset-2 hover:underline">
              ferret lifespan
            </Link>{' '}
            reference splits life into kit (0–1), young adult (1–3), middle age (3–5), and
            senior (5+). This page uses those bands and labels 3–5 as mature. The value of
            knowing the stage is husbandry and screening cadence, not a diagnosis: food
            imprinting and vaccines for kits; play, proofing, and an annual exam for young
            adults; closer checks once insulinoma and adrenal disease enter the picture
            for mature ferrets; and the monitoring, dental, and diet adjustments covered
            in{' '}
            <Link href="/health/aging-ferret-care" className="text-brand-primary underline-offset-2 hover:underline">
              aging ferret care
            </Link>{' '}
            and{' '}
            <Link href="/diet/senior-ferret-nutrition" className="text-brand-primary underline-offset-2 hover:underline">
              senior ferret nutrition
            </Link>{' '}
            once a ferret is senior.             Pair the label with the{' '}
            <Link href="/tools/ferret-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              ferret body condition score
            </Link>
            , the{' '}
            <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">
              food evaluator
            </Link>
            , and the{' '}
            <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>
            . For a stable, non-emergency question, start at{' '}
            <Link href="https://vets.co/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            . If a sign is in front of you right now, the{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              ferret emergency sign-list
            </Link>{' '}
            is a conservative urgency read — not a diagnosis.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Common questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* Related tools */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score', note: '1–9 planning score from rib feel, waist, and belly — not a diagnosis' },
              { label: 'Ferret Cost Calculator', href: '/tools/cost-calculator', note: 'Monthly and first-year setup cost' },
              { label: 'Cage Size Calculator', href: '/tools/cage-size-calculator', note: 'Minimum L×W×H from ferret count and levels' },
              { label: 'Ferret Food Evaluator', href: '/tools/food-evaluator', note: 'Score a bag against nutrient targets' },
              { label: 'Readiness Quiz', href: '/tools/readiness-quiz', note: 'Score household fit, then pack the day-one kit' },
              { label: 'Is This a Ferret Emergency?', href: '/tools/is-this-a-ferret-emergency', note: 'Conservative sign-list urgency read, not a diagnosis' },
              { label: 'Ferret Lifespan', href: '/colors/ferret-lifespan', note: 'Typical 5–8 year life and the stage bands' },
              { label: 'Aging Ferret Care', href: '/health/aging-ferret-care', note: 'Senior monitoring from around 4–5+' },
              { label: 'Senior Ferret Nutrition', href: '/diet/senior-ferret-nutrition', note: 'Protein stays high; eating gets harder' },
              { label: 'Talk to a vet (telehealth)', href: 'https://vets.co/telehealth', note: 'Stable, non-emergency questions' },
            ].map((item) => (
              item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-brand-dark mb-0.5">{item.label}</div>
                  <div className="text-xs text-brand-text-light">{item.note}</div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}
