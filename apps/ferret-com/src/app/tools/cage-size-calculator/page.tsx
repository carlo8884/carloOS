import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildArticleSchema,
  buildMetadata,
  buildBreadcrumbSchema,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  FAQAccordion,
  CrossPortfolioCard,
  JourneyNext,
} from '@carloOS/ui'
import CageSizeCalculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Cage Size Calculator | Ferret.com',
  description:
    'How big should a ferret cage be? Enter ferret count, levels, and playtime for a minimum L×W×H footprint. Husbandry estimate — not a clinical spec.',
  path: '/tools/cage-size-calculator',
})

const FAQS = [
  {
    question: 'What size cage does a ferret need?',
    answer:
      'The American Ferret Association owner-education materials cited on this site recommend a minimum floor of roughly 24 × 24 inches and at least 18 inches of height per ferret, with a strong preference for multi-level cages. For two ferrets — the practical default, because ferrets are social — most keepers settle on a 36 × 24-inch or larger footprint with three levels. The calculator turns those planning constants into an L × W × H for your headcount. The cage is the bedroom, not the house: every ferret still needs several hours of supervised out-of-cage time daily.',
    answerText:
      'AFA-cited planning floor is 24 × 24 in and 18 in of height per ferret. Two ferrets usually want 36 × 24 in with three levels. The cage is for sleep and litter — not full-time living.',
  },
  {
    question: 'Does a multi-level cage replace floor space?',
    answer:
      'It multiplies usable habitat without growing the room footprint. A 36 × 24-inch base with three levels offers far more functional territory than a single 36 × 24-inch floor. The calculator divides the needed floor by the level count, then never drops below 24 inches of length for one ferret or 36 inches for two or more. Levels do not replace out-of-cage play, and no level should sit more than about two feet above the one below — ferrets are poor judges of height.',
    answerText:
      'Levels multiply usable habitat on the same footprint. The tool never drops below 24 in length for one ferret or 36 in for a pair. Levels do not replace daily playtime.',
  },
  {
    question: 'How much out-of-cage time does a ferret need?',
    answer:
      'The working minimum across exotic-pet veterinary literature and AFA owner-education materials is four hours of supervised time per day in a fully ferret-proofed space, with six to eight hours closer to ideal. The time does not have to be one block. If you enter under four hours, this tool adds one ferret-equivalent of floor — they are using the cage as a house — and still tells you to add playtime rather than buy a bigger box.',
    answerText:
      'Four hours a day is the working minimum; six to eight is closer to ideal. Under four hours, the calculator adds floor and still asks for more playtime.',
  },
  {
    question: 'What bar spacing is safe for a ferret cage?',
    answer:
      'One inch (2.5 cm) or less for adult ferrets; half an inch or less for kits. A ferret can fit through any opening its skull will pass through. Rabbit and guinea-pig cages typically have bars too wide. Confirm the spacing on the exact model. This calculator sizes the footprint; it does not check the bars on a specific cage.',
    answerText:
      'One inch or less for adults, half an inch or less for kits. Size the footprint here; confirm bar spacing on the exact model.',
  },
  {
    question: 'Are wire-floor cages bad for ferrets?',
    answer:
      'Yes. Ferret feet are not designed for grid flooring — bumblefoot and chronic foot abrasion are documented in ferrets housed on wire. Use a solid plastic floor or cover every wire shelf and ramp with fleece, linoleum, or coroplast. The calculator assumes a walkable floor; it does not recommend a wire grid.',
    answerText:
      'Wire floors cause foot abrasion. Use solid plastic or cover wire shelves and ramps. The calculator assumes a walkable floor.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Cage Size Calculator', url: 'https://ferret.com/tools/cage-size-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Cage Size Calculator',
  description:
    'Free planner that turns ferret count, cage levels, and daily out-of-cage time into a minimum L×W×H footprint using AFA-cited 24×24 in floor and 18 in height per ferret.',
  url: 'https://ferret.com/tools/cage-size-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '24 × 24 in floor per ferret (AFA-cited planning minimum)',
    '18 in height per level',
    '36 × 24 in preferred pair footprint',
    'Multi-level usable-habitat multiplier',
    'Under-4-hour playtime adds one ferret-equivalent of floor',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to size a ferret cage',
  description:
    'Count the ferrets, pick how many levels the cage has, and enter daily out-of-cage time. The calculator returns a minimum L × W × H footprint from AFA-cited 24 × 24 in floor and 18 in height per ferret.',
  url: 'https://ferret.com/tools/cage-size-calculator',
  steps: [
    {
      name: 'Count the ferrets',
      text: 'Enter how many ferrets will share the cage. Floor area scales with headcount. Two is a common pair.',
    },
    {
      name: 'Pick the level count',
      text: 'Choose one, two, or three levels. Stacking multiplies usable habitat without growing the room footprint. Three levels is the usual pair setup.',
    },
    {
      name: 'Enter daily out-of-cage time',
      text: 'Four hours is the working minimum. Under four hours, the tool adds one ferret-equivalent of floor because the cage is being used as a house.',
    },
    {
      name: 'Read the L × W × H and shop the setup',
      text: 'Use the footprint as a shopping estimate, then confirm bar spacing (one inch or less for adults) and cover any wire floors. Pair the cage with hammocks, corner pans, and fleece — not loose shavings.',
    },
  ],
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Cage Size Calculator',
  description: 'How big should the cage be? Enter ferret count, levels, and daily playtime. A planning L × W × H — not a clinical spec.',
  url: 'https://ferret.com/tools/cage-size-calculator',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
})
const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema, articleSchema)

export default function CageSizeCalculatorPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-10 sm:py-14 relative overflow-hidden">
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
            Ferret Cage Size Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How big should the cage be? Enter ferret count, levels, and daily playtime.
            A planning L × W × H — not a clinical spec.
          </p>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2"
      >
        <Link href="/" className="hover:text-brand-primary no-underline">
          Ferret.com
        </Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">
          Tools
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Cage Size Calculator</span>
      </nav>
      <section className="bg-brand-surface px-container-sm sm:px-container py-10 sm:py-12">
        <div className="max-w-5xl">
          <CageSizeCalculator />
        </div>
        <JourneyNext
          siteId="ferret-com"
          nextHref="/reviews/best-ferret-cage"
          nextLabel="Compare the cages that meet this footprint"
          nextBlurb="The calculator is the L×W×H footprint. The cage review ranks Ferret Nation, Prevue, and Kaytee against bar spacing and floor space. One search below is the double-unit Ferret Nation this page already uses as the multi-level example."
          resourceHref="/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=tools-cage-size-calculator"
          resourceLabel="Browse Ferret Nation / Critter Nation double units on Amazon →"
        />
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">How to use this</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The calculator separates footprint from playtime. Floor starts at 24 × 24 inches per
            ferret — the American Ferret Association planning minimum cited on the cage-setup page —
            and never drops a pair below 36 × 24 inches. Each level is 18 inches high. Extra levels
            divide the needed floor across shelves, which is why a three-level 36 × 24-inch cage is
            the usual two-ferret answer. Under four hours of daily out-of-cage time adds one
            ferret-equivalent of floor; it does not excuse skipping play.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For bar spacing, ramp covers, and why hammocks beat loose shavings, see{' '}
            <Link href="/care/cage-setup" className="text-brand-primary underline-offset-2 hover:underline">
              cage setup
            </Link>
            . For how to zone food, litter, and sleep across levels, see{' '}
            <Link href="/care/multi-level-housing" className="text-brand-primary underline-offset-2 hover:underline">
              multi-level housing
            </Link>
            . Criteria for a specific multi-level cage are on the{' '}
            <Link href="/reviews/best-ferret-cage" className="text-brand-primary underline-offset-2 hover:underline">
              ferret cage review
            </Link>
            . Pan count is a different tool — the{' '}
            <Link href="/tools/litter-planner" className="text-brand-primary underline-offset-2 hover:underline">
              litter planner
            </Link>
            .             Match calendar age to a life-stage label with the{' '}
            <Link href="/tools/ferret-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              ferret age calculator
            </Link>
            . Score fat cover against the ferret&apos;s own frame with the{' '}
            <Link href="/tools/ferret-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">
              ferret body condition score
            </Link>
            .
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">Common questions</h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-lg font-bold text-brand-dark mb-4">Related Tools &amp; Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Cage Setup', href: '/care/cage-setup', note: 'Bar spacing, hammocks, and the four-hour rule' },
              { label: 'Multi-Level Housing', href: '/care/multi-level-housing', note: 'Ramps, zoning, and fall risk' },
              { label: 'Best Ferret Cage', href: '/reviews/best-ferret-cage', note: 'Multi-level cage criteria' },
              { label: 'Is This a Ferret Emergency?', href: '/tools/is-this-a-ferret-emergency', note: 'Conservative sign-list urgency read, not a diagnosis' },
              { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator', note: 'Human-year estimate and kit / young adult / mature / senior label' },
              { label: 'Ferret Body Condition Score', href: '/tools/ferret-body-condition-score', note: '1–9 planning score from rib feel, waist, and belly — not a diagnosis' },
              { label: 'Litter Planner', href: '/tools/litter-planner', note: 'Pans and 30 lb bags from ferret count' },
              { label: 'Cost Calculator', href: '/tools/cost-calculator', note: 'Monthly and first-year setup cost' },
              { label: 'Readiness Quiz', href: '/tools/readiness-quiz', note: 'Score household fit, then pack the day-one kit' },
              { label: 'Ferret Starter Essentials', href: '/ferret-starter-kit', note: 'Day-one cage, litter, food, carrier' },
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
