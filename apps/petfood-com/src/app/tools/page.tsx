import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Calculators & Tools — Daily Cost Calculator | PetFood.com',
  description: 'Free pet food calculators: daily / monthly / annual cost per bag with side-by-side brand comparison. Compare any two pet foods apples-to-apples.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Tools', url: 'https://petfood.com/tools' },
  ],
})

const TOOLS = [
  {
    href: '/tools/food-cost-calculator',
    title: 'Pet Food Cost Calculator',
    desc: 'Enter your pet\'s cups-per-day, bag size, and bag price. Returns cost per day, per month, per year, and per cup. Side-by-side mode compares two foods apples-to-apples.',
    tag: 'Finance',
  },
  {
    href: '/tools/portion-calculator',
    title: 'Portion & Calorie Calculator',
    desc: 'Calculate daily caloric needs for dogs and cats using the standard RER/MER equations (WSAVA/AAHA-style). Enter weight and life stage; get kcal/day and optional cups/day from the food label.',
    tag: 'Nutrition',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'PetFood.com Calculators & Tools',
  url: 'https://petfood.com/tools',
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: tool.title,
    url: 'https://petfood.com' + tool.href,
  })),
}

const hubSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={hubSchema} />
      <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(80, 110, 70, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Calculators &amp; Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Pet food math, <span className="italic font-normal">apples-to-apples.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free pet food calculators. Convert any pet food bag to cost-per-day, cost-per-month, cost-per-year, and cost-per-cup — and compare two foods side-by-side without spreadsheet math.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pt-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">Turning a price tag into a real cost</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A bag price tells you almost nothing about what a food actually costs to feed. A premium kibble fed in small portions can be cheaper per day than a budget food fed in large ones, and a smaller bag that looks inexpensive on the shelf can quietly cost more per cup. The number that matters for a household budget is cost per day &mdash; and then per month and per year &mdash; because that is what you actually pay over the life of a pet. These tools exist to do that arithmetic so you do not have to keep a spreadsheet open in the pet-food aisle.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The <Link href="/tools/food-cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">Pet Food Cost Calculator</Link> takes three numbers off the bag &mdash; your pet&apos;s cups per day, the bag size, and the price &mdash; and returns cost per day, per month, per year, and per cup. Its side-by-side mode puts two foods next to each other on the same terms, so a comparison that usually relies on guesswork becomes a clean apples-to-apples figure. It is the fastest way to settle whether the food you are eyeing is genuinely more expensive or just packaged to look that way.
          </p>
          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">Cost is one input, not the whole decision</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Price per cup only means something once you know the foods are comparable in quality, so this hub is designed to sit alongside the rest of PetFood.com&apos;s reference material. Once the calculator narrows your shortlist, our <Link href="/compare" className="text-brand-primary underline-offset-2 hover:underline">food comparison</Link> pages and <Link href="/nutrition" className="text-brand-primary underline-offset-2 hover:underline">nutrition</Link> references explain what separates the options on the things money cannot measure, and the <Link href="/feeding" className="text-brand-primary underline-offset-2 hover:underline">feeding guides</Link> help you confirm the cups-per-day figure you typed in is right for your pet&apos;s size and life stage. The tools give you the math; the editorial sections give you the judgment. Everything here is built and maintained by the PetFood.com editorial team and sourced from cited references, with additional calculators planned as the reference set expands.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {TOOLS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block rounded-lg border border-brand-border bg-brand-surface p-6 transition hover:border-brand-primary"
            >
              <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">{tool.tag}</div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text-dark group-hover:text-brand-primary">{tool.title}</h2>
              <p className="text-sm leading-relaxed text-brand-text-mid">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="petfood-com"
            variant="inline"
            title="PetFood.com nutrition letter"
            subtitle="Pet nutrition references and tool updates. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  </>
  )
}
