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
import Calculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Litter Planner',
  description:
    'How much ferret litter do you need? Enter ferret count for corner-pan count and 30 lb bags per month. Paper pellet default — never clumping clay.',
  path: '/tools/litter-planner',
})

const FAQS = [
  {
    question: 'How much litter does a ferret use?',
    answer:
      'A 30 lb bag of recycled paper pellets typically lasts one ferret about 6–8 weeks with regular pan changes. This planner uses the 7-week midpoint, so two ferrets plan on roughly 1.2 bags a month. Extra play-area pans and sloppy kits use more.',
  },
  {
    question: 'How many litter boxes does a ferret need?',
    answer:
      'Put a high-back corner pan in every sleeping level plus one extra in the play area — one per ferret plus one extra is the planning rule this tool uses. Ferrets back into corners; a flat-walled cat box is easier to miss.',
  },
  {
    question: 'Is clumping cat litter safe for ferrets?',
    answer:
      'No. Clumping clay can be inhaled as dust and can obstruct the gut if swallowed. Use non-clumping paper, heat-treated wood, or grass pellets. That is the same rule as the litter review — this planner will not recommend clay.',
  },
  {
    question: 'Paper, wood, or grass pellets?',
    answer:
      'Recycled paper pellet is the default: low dust, non-clumping, soft on feet. Heat-treated compressed wood pellets control odor better if you sift fines and avoid aromatic shavings. Grass pellets are a softer alternative some ferrets prefer. See the litter review for the criteria, not a brand ranking by commission.',
  },
  {
    question: 'How often should I change ferret litter?',
    answer:
      'Full change daily is the cleanest default; every other day works if you scoop wet spots every day. If the ferret starts using a nearby corner, go back to daily. Odor and skipped pans are usually a cleanliness problem before they are a training problem.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Litter Planner', url: 'https://ferret.com/tools/litter-planner' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ferret Litter Planner',
  description:
    'Free planner that turns ferret count into recommended corner pans and 30 lb pellet-litter bags per month, using a 7-week-per-bag midpoint.',
  url: 'https://ferret.com/tools/litter-planner',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'One-per-ferret plus one extra pan rule',
    '30 lb bags per month from a 7-week midpoint',
    'Daily vs every-2-day change guidance',
    'Never recommends clumping clay',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to plan ferret litter and pans',
  description:
    'Count ferrets, place one high-back corner pan per ferret plus one extra, and budget a 30 lb paper-pellet bag about every seven weeks per ferret.',
  url: 'https://ferret.com/tools/litter-planner',
  steps: [
    {
      name: 'Count the ferrets',
      text: 'Litter and pans scale with headcount. Two ferrets is a common pair.',
    },
    {
      name: 'Place pans',
      text: 'One high-back corner pan per ferret plus one extra in the play area. Ferrets back into corners.',
    },
    {
      name: 'Budget the bags',
      text: 'Plan about one 30 lb paper-pellet bag every 6–8 weeks per ferret (this tool uses 7 weeks).',
    },
    {
      name: 'Skip clumping clay',
      text: 'Use paper, heat-treated wood, or grass pellets. Clumping clay is a dust and blockage hazard.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function LitterPlannerPage() {
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
            Ferret Litter Planner
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            How many pans and how many 30 lb bags? Enter ferret count. Paper pellet is the default —
            never clumping clay.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Ferret.com
        </Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">
          Tools
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Litter Planner</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Litter and pan plan
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the one-per-ferret-plus-one pan rule and the 30 lb bag cadence
            so you can shop paper, wood, or grass pellets without re-running the
            math. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Litter and pan plan"
            subtitle="Email the one-per-ferret-plus-one pan rule and the 30 lb bag cadence. No spam."
            ctaText="Email my litter & pan plan"
            source="tools-litter-planner-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-5xl">
          <Calculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (wood / grass pellet / corner pan).
          Wood + grass reuse the litter-review queries already on this page.
          Corner pan reuses the cage-size calculator hop. ShopCtas hides empty
          Chewy; never href="#" or PLACEHOLDER. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop the litter and pans
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              Same Amazon hops as the{' '}
              <Link href="/reviews/best-ferret-litter" className="text-brand-primary underline-offset-2 hover:underline">
                ferret litter review
              </Link>
              — heat-treated wood pellets or grass pellets — plus the high-back
              corner pan hop already used on the{' '}
              <Link href="/tools/cage-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
                cage size calculator
              </Link>
              . Paper-pellet (Yesterday&apos;s News class) is the default type;
              shop the review for the criteria. These are category searches, not
              a ranked product list. Ferret.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/compressed+wood+pellet+litter+heat+treated+non+clumping?s=tools-litter-planner"
                amazonLabel="Browse wood pellet litter on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/small+animal+grass+pellet+litter+non+clumping?s=tools-litter-planner"
                amazonLabel="Browse grass pellet litter on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+corner+litter+pan?s=tools-litter-planner"
                amazonLabel="Browse high-back corner pans on Amazon →"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We may earn a commission if you buy through an Amazon link — at no extra cost to you, and we never
            rank by commission. Empty Chewy buttons stay hidden.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            Why the pan count is not “one box”
          </h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Ferrets back into corners and will skip a dirty pan. The{' '}
            <Link href="/care/litter-training" className="text-brand-primary underline-offset-2 hover:underline">
              litter-training guide
            </Link>{' '}
            and             the{' '}
            <Link href="/care/bedding-and-litter-types" className="text-brand-primary underline-offset-2 hover:underline">
              bedding and litter types
            </Link>{' '}
            page cover placement and materials. This planner only does the count and the bag math.
            Size the cage those pans sit in with the{' '}
            <Link href="/tools/cage-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cage size calculator
            </Link>
            . Still deciding whether a ferret fits? The{' '}
            <Link href="/tools/readiness-quiz" className="text-brand-primary underline-offset-2 hover:underline">
              readiness quiz
            </Link>{' '}
            scores household fit and packs the day-one kit. If a sign looks urgent, the{' '}
            <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">
              ferret emergency sign-list
            </Link>{' '}
            is a conservative go-now / same-day / monitor read — a triage aid, not a diagnosis.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-dark">
            Frequently asked questions
          </h2>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="ferret-com"
            variant="inline"
            title="Litter and pan plan"
            subtitle="Email the one-per-ferret-plus-one pan rule and the 30 lb bag cadence. No spam."
            ctaText="Email my litter & pan plan"
            source="tools-litter-planner"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}
