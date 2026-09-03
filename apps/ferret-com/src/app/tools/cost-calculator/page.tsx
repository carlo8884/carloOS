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
import CostCalculator from './Calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Cost Calculator — Monthly & First-Year | Ferret.com',
  description:
    'Estimate monthly and first-year ferret costs from count, housing, and food style. Editable setup, food, litter, and vet — a planning range, not a quote.',
  path: '/tools/cost-calculator',
})

const FAQS = [
  {
    question: 'How much does a ferret cost per month?',
    answer:
      'After setup, routine ownership commonly runs a few dozen to a couple of hundred dollars per month per ferret, depending on food style, litter, and whether you carry exotic-pet insurance. High-protein kibble plus paper or wood-pellet litter is the lower starting point; whole-prey or raw feeding costs more. The calculator fills a starting monthly figure from the food-style preset — edit it to match your bag prices. Illness care is not in the monthly number.',
    answerText:
      'Routine monthly cost is food, litter, supplies, and a twelfth of annual vet — typically tens to low hundreds of dollars per ferret. Illness is budgeted separately.',
  },
  {
    question: 'How much does a ferret cost in the first year?',
    answer:
      'First year is one-time setup (cage, acquisition, initial vet) plus twelve months of food, litter, supplies, and routine vet. A multi-level cage is the largest shared gear line. Two ferrets share the cage but double food, litter, and vet. The calculator adds those lines; it is a planning range, not a clinic or retailer quote.',
    answerText:
      'First year = shared cage/setup + per-ferret acquisition and initial vet + twelve months of food, litter, supplies, and routine vet. Edit every line.',
  },
  {
    question: 'Does housing change the monthly number or only setup?',
    answer:
      'Housing mainly changes the one-time cage-and-setup line. A starter cage, a Critter Nation–class multi-level, and a room/playpen setup have different day-one prices; food and litter do not. Recurring costs scale with ferret count and food style, not with cage brand.',
    answerText:
      'Housing presets fill the one-time cage line. Monthly food and litter come from the food-style preset and ferret count.',
  },
  {
    question: 'Why should I budget extra for ferret health?',
    answer:
      'Ferrets are prone to several conditions whose treatment is not optional once they appear. Adrenal disease, insulinoma, and gastrointestinal foreign-body blockages are among the most common, and diagnosis plus treatment (hormone panels, surgery, ongoing medication) frequently runs into the thousands of dollars. Because these are common rather than rare, most exotic-pet veterinarians recommend keeping a dedicated emergency fund or carrying exotic-pet insurance rather than treating these as unlikely events.',
    answerText:
      'Adrenal disease, insulinoma, and blockages are common in ferrets and treatment is not optional — often thousands of dollars. Keep an emergency fund or carry exotic-pet insurance.',
  },
  {
    question: 'Is it cheaper to own more than one ferret?',
    answer:
      'Some one-time costs are shared — a single large multi-level cage can house a small group — but most recurring costs (food, litter, routine vet care, and any insurance) scale with the number of ferrets. The calculator reflects this by treating the cage and initial setup as a shared household cost while scaling per-ferret acquisition, initial vet, and all recurring costs by the number of ferrets you enter.',
    answerText:
      'The cage and setup are largely shared, but food, litter, vet care, and insurance scale per ferret. The calculator treats setup as shared and scales recurring costs by ferret count.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Ferret.com', url: 'https://ferret.com/' },
    { name: 'Tools', url: 'https://ferret.com/tools' },
    { name: 'Cost Calculator', url: 'https://ferret.com/tools/cost-calculator' },
  ],
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ferret Cost Calculator',
  description:
    'Free planner that estimates monthly and first-year ferret costs from ferret count, housing style, and food style, with editable setup and recurring lines.',
  url: 'https://ferret.com/tools/cost-calculator',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Housing presets (starter / multi-level / room-playpen)',
    'Food-style presets (kibble / kibble+topper / whole-prey)',
    'Monthly recurring and first-year totals',
    'Illness care called out separately from routine cost',
  ],
  publisher: { '@type': 'Organization', name: 'Ferret.com Editorial', url: 'https://ferret.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate monthly and first-year ferret costs',
  description:
    'Pick ferret count, housing, and food style, then read the monthly and first-year totals. Edit any line to match local prices.',
  url: 'https://ferret.com/tools/cost-calculator',
  steps: [
    {
      name: 'Enter the number of ferrets',
      text: 'Enter how many ferrets you plan to keep. The cage and initial setup costs are shared across the group; per-ferret costs (acquisition, initial vet care, food, litter, routine vet) scale by this number.',
    },
    {
      name: 'Pick housing and food style',
      text: 'Choose a starter cage, a multi-level cage, or a room/playpen setup to fill the one-time cage line. Choose high-protein kibble, kibble plus toppers, or whole-prey/raw to fill the monthly food-and-litter line. Both are starting points you can edit.',
    },
    {
      name: 'Review and adjust the line items',
      text: 'Swap in your actual local prices for acquisition, initial vet, supplies, annual vet, and optional insurance.',
    },
    {
      name: 'Read monthly and first-year totals',
      text: 'Monthly is twelve-month recurring averaged (food, litter, supplies, routine vet, insurance). First year is one-time setup plus those twelve months. Add a separate emergency reserve for adrenal disease, insulinoma, or blockage treatment.',
    },
  ],
})

const schema = combineSchemas(breadcrumbSchema, appSchema, howToSchema)

export default function CostCalculatorPage() {
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
            Ferret Cost Calculator
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            What does a ferret cost per month and in year one? Pick ferret count, housing, and
            food style, then edit the lines. A planning range — not a quote.
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
        <span className="text-brand-text-mid font-medium">Cost Calculator</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-2xl">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the number
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            First-year ferret budget worksheet
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the monthly and first-year estimate — setup, food, litter, and vet — so you can
            shop the cage and the staple bags without re-running the math. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="First-year ferret budget worksheet"
            subtitle="Email the monthly and first-year estimate — setup, food, litter, and vet — so you can shop the setup list. No spam."
            ctaText="Email the budget"
            source="tools-cost-calculator-under-hero"
          />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-10 sm:py-12">
        <div className="max-w-5xl">
          <CostCalculator />
        </div>
      </section>

      {/* Money path — live amazon-brand search hops (food / litter / cage / accessories).
          Reuses queries already shipped on ferret reviews + care + behavior.
          ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop the setup
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              The first-year number is mostly cage, food, and litter. Same Amazon hops used on the{' '}
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
                amazonHref="/go/amazon-brand/high+protein+ferret+food+kibble?s=tools-cost-calculator"
                amazonLabel="Browse ferret food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/compressed+wood+pellet+litter+heat+treated+non+clumping?s=tools-cost-calculator"
                amazonLabel="Browse wood pellet litter on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=tools-cost-calculator"
                amazonLabel="Browse multi-level cages on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+sleep+sack+fleece?s=tools-cost-calculator"
                amazonLabel="Browse cage accessories on Amazon →"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-brand-text-light">
            We may earn a commission if you buy through an Amazon link — at no extra cost to you, and we never
            rank by commission. Empty Chewy buttons stay hidden.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-mid">
            Size pans with the{' '}
            <Link href="/tools/litter-planner" className="text-brand-primary underline-offset-2 hover:underline">
              litter planner
            </Link>
            . Size the cage with the{' '}
            <Link href="/tools/cage-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cage size calculator
            </Link>
            . Check a bag against published nutrient targets with the{' '}
            <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">
              food evaluator
            </Link>
            . The narrative ranges live on{' '}
            <Link
              href="/ownership/cost-of-owning-a-ferret"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              cost of owning a ferret
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">How to use this</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The calculator separates the three things people conflate when they ask what a ferret costs: the
            money you spend once to get set up, the money you spend every month to keep a ferret well, and the
            money you should set aside for the conditions ferrets are prone to. Housing fills the shared cage
            line. Food style fills the per-ferret food-and-litter line. First year is setup plus twelve months
            of recurring. Illness is called out separately rather than folded into a tidy monthly figure.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            For the narrative version of these numbers — what each line item typically covers and why — see the
            in-depth{' '}
            <Link
              href="/ownership/cost-of-owning-a-ferret"
              className="text-brand-primary underline-offset-2 hover:underline"
            >
              cost of owning a ferret
            </Link>{' '}
            guide.             If the cage line is the unknown, the{' '}
            <Link href="/tools/cage-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cage size calculator
            </Link>{' '}
            turns ferret count and levels into a minimum L × W × H. If litter is driving the recurring number, the{' '}
            <Link href="/tools/litter-planner" className="text-brand-primary underline-offset-2 hover:underline">
              litter planner
            </Link>{' '}
            sizes pans and 30 lb bags. If a food cost is driving your recurring number, the{' '}
            <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">
              Ferret Food Evaluator
            </Link>{' '}
            helps you confirm you are paying for a food that actually meets ferret nutrient targets. For the
            health costs called out above, the{' '}
            <Link href="/health" className="text-brand-primary underline-offset-2 hover:underline">
              health
            </Link>{' '}
            section covers the common conditions and what their management involves.
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
              { label: 'Litter Planner', href: '/tools/litter-planner', note: 'Pans and 30 lb bags from ferret count' },
              { label: 'Cage Size Calculator', href: '/tools/cage-size-calculator', note: 'Minimum L×W×H from ferret count and levels' },
              { label: 'Ferret Food Evaluator', href: '/tools/food-evaluator', note: 'Score a bag against nutrient targets' },
              { label: 'Best Ferret Cage', href: '/reviews/best-ferret-cage', note: 'Multi-level cage criteria' },
              { label: 'Best Ferret Litter', href: '/reviews/best-ferret-litter', note: 'Paper, wood, or grass — never clay' },
              { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret', note: 'Narrative ranges behind the lines' },
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
