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
import HorseAgeCalculator from './Calculator'

const URL = 'https://horses.com/tools/horse-age-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Age Calculator — Human Years & Life Stage | Horses.com',
  description:
    'Convert horse years to a human-year estimate and a foal / young / adult / senior label. A planning reference, not a diagnosis.',
  path: '/tools/horse-age-calculator',
})

const FAQS = [
  {
    question: 'How old is my horse in human years?',
    answer:
      'This calculator uses a planning approximation, not a published horse clock and not the multiply-by-seven shortcut. Year one counts as about 12 human years because foals wean and grow very fast. Age five — around skeletal maturity — reaches about 32. After that, each horse year adds about 2.5 human years, so a 15-year-old is about 57, a 20-year-old about 70, and a 25-year-old about 82. Treat the number as a conversational comparison — aging varies by breed, management, and individual health.',
    answerText:
      'Planning approximation only: year 1 ≈ 12, age 5 ≈ 32, then about +2.5 per year. A 15-year-old is about 57; a 25-year-old about 82. Not multiply-by-seven, not a diagnosis.',
  },
  {
    question: 'When is a horse considered a senior?',
    answer:
      'There is no single hard cutoff. Horses.com senior-care copy says many horses are considered geriatric from the late teens into the twenties, but a well-kept horse may work soundly at twenty-five while another shows its age at fifteen. The real cue is age-related change — dental wear, stiffness, or weight change — not a birthday. This calculator uses 15+ as the start of senior planning. The label is a husbandry prompt, not a diagnosis.',
    answerText:
      'No fixed birthday. Horses.com frames geriatric care from the late teens into the twenties; some age at 15, some work at 25. This tool uses 15+ as the start of senior planning. Watch the horse, not the calendar.',
  },
  {
    question: 'Why not multiply a horse’s age by seven?',
    answer:
      'Multiply-by-seven assumes a linear relationship that does not match how horses develop. They mature very fast in the first years — far more than “age × 7” implies for a foal — and then live a comparatively long 25–30+ year life (Horses.com: late twenties and thirties are now routine). A linear ×7 both mis-states a young horse and turns a 25-year-old into an implausible 175. The banded model here is still only a planning aid.',
    answerText:
      'Multiply-by-seven is linear and wrong for horses: they mature very fast early and then live into the late twenties and thirties. Use the banded planning model, not ×7.',
  },
  {
    question: 'How long do horses live?',
    answer:
      'Horses.com senior-care copy says horses now routinely live into their late twenties and thirties, and many stay active well into old age. Breed and management matter — some working lifespans are shorter. Plan around the typical range and the individual horse rather than counting on an unusually long life.',
    answerText:
      'Horses.com: routinely late twenties and thirties, many staying active. Breed and management vary. Plan around the typical range.',
  },
  {
    question: 'Is this calculator a diagnosis?',
    answer:
      'No. It is a planning and life-stage reference only. The human-year number and the foal / young / adult / senior label help you talk with an equine veterinarian about screening and husbandry; they do not diagnose a disease, set a treatment plan, or replace an exam. If your horse is rolling, choking, non-weight-bearing, or down and cannot rise, use the horse emergency sign-list and call your equine veterinarian — do not wait on this page.',
    answerText:
      'No. Planning reference only — not a diagnosis. For urgent signs, use the horse emergency sign-list and seek equine care.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Horses.com', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
    { name: 'Horse Age Calculator', url: URL },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Age & Life-Stage Calculator',
  description:
    'Free horse age calculator. Converts horse years to a human-equivalent estimate (year 1 ≈ 12, age 5 ≈ 32, then +2.5 per year) and reports a foal / young / adult / senior life-stage label grounded in Horses.com senior-care copy. A planning reference, not a diagnosis.',
  url: URL,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Horse years to human years using a banded planning model (not multiply-by-seven)',
    'Life stage: foal, young, adult, senior',
    'Stage-appropriate husbandry notes grounded in Horses.com senior-care and feeding copy',
    'Shoppable life-stage kit via Amazon category searches (horse feed, senior horse feed, weight tape, fly mask, hoof pick)',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate a horse’s age in human years',
  description:
    'Convert a horse’s age to a human-equivalent estimate using a banded planning model and read the matching life stage.',
  url: URL,
  steps: [
    {
      name: 'Enter your horse’s age in years',
      text: 'Type the horse’s age in calendar years. Use a decimal for foals (for example 0.5 for six months).',
    },
    {
      name: 'Read the human-year estimate',
      text: 'The calculator returns a conversational human-year equivalent: year one ≈ 12, age five ≈ 32, then about 2.5 human years per horse year. It does not multiply by seven.',
    },
    {
      name: 'Match the life stage',
      text: 'Foal under 1, young 1–5, adult 5–15, senior 15+ — aligned with Horses.com senior-care copy. There is no fixed birthday; 15+ is the start of senior planning. This is a planning reference, not a diagnosis.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function HorseAgeCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 100, 70, 0.5) 0%, transparent 60%)' }}
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
            Horse Age Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How old is your horse in human years — and which life stage is it in? Enter
            age for a human-year estimate and a foal / young / adult / senior label.
            A planning reference, not a diagnosis, and not the multiply-by-seven rule.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">Horses.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Horse Age Calculator</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the stage notes
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse life-stage notes
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the foal / young / adult / senior recap and the shoppable
            husbandry kit (horse feed, senior horse feed, weight tape, fly mask,
            hoof pick) so you can come back to the right stage without
            re-running the estimate. Planning reference only — not a diagnosis.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse life-stage notes"
            subtitle="Email the horse life-stage recap and husbandry kit. No spam."
            ctaText="Email my horse life-stage notes"
            source="tools-horse-age-calculator-under-hero"
          />
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <HorseAgeCalculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (life-stage kit).
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
          Category searches only — not a ranked list, not a diagnosis. */}
      <section id="horse-age-kit" className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a life-stage kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that match the
              life-stage label above — horse feed, senior horse feed, a weight
              tape, a fly mask, and a hoof pick. They are not a ranked
              product list, not invented inventory, and they do not diagnose a
              health problem or set a care plan. Ask your equine
              veterinarian which stage-appropriate products fit your horse.
              Horses.com earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+feed?s=tools-horse-age-calculator"
                amazonLabel="Browse horse feed on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/senior+horse+feed?s=tools-horse-age-calculator"
                amazonLabel="Browse senior horse feed on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+weight+tape?s=tools-horse-age-calculator"
                amazonLabel="Browse horse weight tapes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+fly+mask?s=tools-horse-age-calculator"
                amazonLabel="Browse horse fly masks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+pick?s=tools-horse-age-calculator"
                amazonLabel="Browse horse hoof picks on Amazon →"
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
              Vet, dental, and farrier costs tend to climb once a horse is senior —
              worn teeth, stiffness, and metabolic change are common in later
              years and are not in a tidy monthly board number. Pet insurance is
              least expensive while a horse is young and healthy; pre-existing
              conditions are excluded. This is an educational comparison link,
              not a ranking of carriers. For a stable, non-emergency question,
              talk to a licensed vet on a screen rather than waiting for a gap
              to become an ER haul.
            </p>
            <AffiliateDisclosure variant="inline" siteId="horses-com" className="mb-3 text-2xs" />
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
            How horse years work
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Horses mature fast and then live a comparatively long life. A foal weans
            and grows very quickly in year one — which is why this calculator treats
            the first year as about 12 human years, not seven. Growth continues toward
            skeletal maturity around four to five, so age five maps to about 32.
            After that, each horse year is worth about 2.5 human years, so a
            25-year-old maps near 82. That is a conversational comparison to a
            typical human span, chosen because Horses.com frames life as routinely
            reaching the late twenties and thirties. It is far more useful than
            multiply-by-seven, and it is still only an estimate.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">
            Care by life stage
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The{' '}
            <Link href="/ownership/senior-horse-care" className="text-brand-primary underline-offset-2 hover:underline">
              senior horse care
            </Link>{' '}
            guide is explicit: there is no fixed birthday. Many horses are treated as
            geriatric from the late teens into the twenties; some show age at fifteen;
            well-kept horses may work at twenty-five. This page uses foal (under 1),
            young (1–5), adult (5–15), and senior (15+) as planning bands. The value
            of knowing the stage is husbandry cadence, not a diagnosis: first-year
            vaccines and ascarid-aware parasite control for foals; growth-appropriate
            work and dental checks for young horses; weight-tape and body-condition
            habits for adults; and the dental, condition, and comfort adjustments
            covered in{' '}
            <Link href="/nutrition/feeding-senior-horses" className="text-brand-primary underline-offset-2 hover:underline">
              feeding senior horses
            </Link>{' '}
            once a horse is senior. Pair the label with the{' '}
            <Link href="/tools/horse-weight-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              horse weight calculator
            </Link>
            , the{' '}
            <Link href="/tools/body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              body condition score
            </Link>
            , and the{' '}
            <Link href="/tools/horse-cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>
            . For a stable, non-emergency question, start at{' '}
            <Link href="https://vets.co/telehealth" className="text-brand-primary underline-offset-2 hover:underline">
              telehealth
            </Link>
            . If a sign is in front of you right now, the{' '}
            <Link href="/tools/is-this-a-horse-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              horse emergency sign-list
            </Link>{' '}
            is a conservative urgency read — not a diagnosis. For a facial pain-watch, the{' '}
            <Link href="/tools/horse-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">
              horse grimace scale
            </Link>{' '}
            is a planning reference, not a diagnosis. Breeders projecting a
            foal&apos;s arrival can use the{' '}
            <Link href="/tools/horse-gestation-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              gestation calculator
            </Link>
            .
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
              { label: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', note: 'Girth × length weight-tape estimate' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score', note: 'Henneke 1–9 condition score' },
              { label: 'Horse Cost Calculator', href: '/tools/horse-cost-calculator', note: 'Monthly and annual keeping cost' },
              { label: 'Horse Gestation Calculator', href: '/tools/horse-gestation-calculator', note: 'Foaling date from breeding date' },
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency', note: 'Conservative sign-list urgency read, not a diagnosis' },
              { label: 'Horse Grimace Scale', href: '/tools/horse-grimace-scale', note: 'Facial pain-watch for seniors and sore horses — not a diagnosis' },
              { label: 'Senior Horse Care', href: '/ownership/senior-horse-care', note: 'No fixed birthday — watch teeth, weight, joints' },
              { label: 'Feeding Senior Horses', href: '/nutrition/feeding-senior-horses', note: 'Dental decline, senior feeds, PPID feeding' },
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

      <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="footer" />
    </>
  )
}
