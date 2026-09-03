import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Tools — Food Evaluator | Ferret.com',
  description: 'Free ferret-keeping calculators: paste the guaranteed analysis from any kibble and the evaluator scores it against published ferret nutrient targets.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/is-this-a-ferret-emergency',
    title: 'Is This a Ferret Emergency?',
    desc: 'Check ferret signs — labored breathing, pale gums, collapse, seizures, toxin (chocolate/xylitol/ibuprofen), trauma, a hard belly, inability to urinate, protracted vomiting with lethargy, sudden hind weakness — for a conservative go-now / same-day / monitor read, then shop a ferret emergency-prep kit (first-aid, thermometer, soft carrier, styptic powder, wound-care gauze). A sign-list triage aid, not a diagnosis.',
    tag: 'Triage',
  },
  {
    href: '/tools/ferret-grimace-scale',
    title: 'Ferret Grimace Scale',
    desc: 'Is your ferret in pain? Score five facial signs — ears, eyes, nose, cheeks, whiskers — on this owner Ferret Grimace checklist, then shop an observation / comfort kit (ferret first-aid kit, digital pet thermometer, vet wrap, low-setting heating pad, ferret electrolytes / recovery food). Planning / observation reference, not a diagnosis. High-pain faces go to emergency triage first, not a shopping list.',
    tag: 'Health',
  },
  {
    href: '/tools/ferret-age-calculator',
    title: 'Ferret Age Calculator',
    desc: 'Convert ferret years to a human-year estimate and a kit / young adult / mature / senior label. A planning reference grounded in Ferret.com lifespan copy — not multiply-by-seven, not a diagnosis.',
    tag: 'Life Stage',
  },
  {
    href: '/tools/ferret-body-condition-score',
    title: 'Ferret Body Condition Score',
    desc: 'Estimate a ferret’s body condition (1–9) from rib and spine feel, waist from above, and belly from the side. Planning reference grounded in Ferret.com weight-management copy — not a diagnosis.',
    tag: 'Wellness',
  },
  {
    href: '/tools/food-evaluator',
    title: 'Ferret Food Evaluator',
    desc: 'Score any kibble against published ferret nutrient targets (protein, fat, fiber, ash, first ingredient). Returns "appropriate / marginal / avoid" verdict with per-nutrient notes, then shop high-protein ferret kibble, freeze-dried raw treats, and salmon oil via Amazon category searches.',
    tag: 'Nutrition',
  },
  {
    href: '/tools/cost-calculator',
    title: 'Ferret Cost Calculator',
    desc: 'Estimate monthly and first-year ferret costs from ferret count, housing, and food style — plus a separate prompt to budget for adrenal, insulinoma, and blockage care.',
    tag: 'Budgeting',
  },
  {
    href: '/tools/readiness-quiz',
    title: 'Ferret Ownership Readiness Quiz',
    desc: 'Ten honest questions covering legality, daily time, budget, housing, other pets, odor tolerance, vet access, and long-term commitment — then a day-one kit checklist (cage, litter, food, hammock, dig box, carrier) with Amazon shop hops.',
    tag: 'Decision Tool',
  },
  {
    href: '/tools/litter-planner',
    title: 'Ferret Litter Planner',
    desc: 'How many pans and how many 30 lb bags? Enter ferret count for the one-per-ferret-plus-one pan rule and a monthly bag estimate. Paper pellet default — never clumping clay.',
    tag: 'Husbandry',
  },
  {
    href: '/tools/cage-size-calculator',
    title: 'Ferret Cage Size Calculator',
    desc: 'Minimum L×W×H from ferret count, levels, and out-of-cage playtime. AFA-cited 24×24 in floor per ferret — a planning estimate, not a clinical spec.',
    tag: 'Husbandry',
  },
]

// Breadcrumb + ItemList so the tools hub is a citable product surface for AI
// answer engines (Perplexity/AI Overviews), not just a link list.
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ferret.com', url: 'https://ferret.com/' },
  { name: 'Tools', url: 'https://ferret.com/tools' },
])
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ferret.com keeper tools',
  itemListElement: TOOLS.map((tool, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'WebApplication',
      name: tool.title,
      description: tool.desc,
      url: `https://ferret.com${tool.href}`,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  })),
}
const combinedSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ToolsHub() {
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
            style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
          >
            Ferret husbandry math, <span className="italic font-normal">at the bag.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free, source-cited ferret-keeping tools. Paste the guaranteed analysis from any food into the evaluator and get a clear verdict on whether it meets published ferret nutrient targets.
          </p>
        </div>
      </section>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="ferret-com:tools-hero" aspect="16:9" variant="wide" priority />
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pt-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">Why a ferret food tool exists at all</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Ferrets are obligate carnivores with a punishingly short digestive tract, which makes them far less forgiving of the wrong diet than a dog or cat. The marketing on a bag rarely tells you what matters. What matters is the guaranteed analysis &mdash; the small panel of protein, fat, fiber, and ash percentages every label is required to print &mdash; and the first few ingredients. The trouble is that reading those numbers against published ferret nutrient targets is fiddly, and most owners have nothing to check them against in the pet-store aisle. That gap is exactly what this hub is built to close.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The <Link href="/tools/is-this-a-ferret-emergency" className="text-brand-primary underline-offset-2 hover:underline">ferret emergency sign-list</Link> answers how urgently to seek care — go now, same-day, or monitor — from ferret-specific signs. It is a triage aid, not a diagnosis. The <Link href="/tools/ferret-grimace-scale" className="text-brand-primary underline-offset-2 hover:underline">ferret grimace scale</Link> is a facial pain-watch — five mustelid action units on a 0–10 planning checklist, not a diagnosis. The <Link href="/tools/ferret-age-calculator" className="text-brand-primary underline-offset-2 hover:underline">ferret age calculator</Link> converts calendar age to a human-year estimate and a kit / young adult / mature / senior label — a planning reference, not a diagnosis. The <Link href="/tools/ferret-body-condition-score" className="text-brand-primary underline-offset-2 hover:underline">ferret body condition score</Link> walks rib feel, waist, and belly into a 1–9 planning score, including the seasonal weight swing — also a planning reference, not a diagnosis. The <Link href="/tools/food-evaluator" className="text-brand-primary underline-offset-2 hover:underline">Ferret Food Evaluator</Link> takes the guaranteed analysis off any kibble bag, scores it against the protein, fat, fiber, and ash ranges cited in our references, checks whether the first ingredient is a named animal protein, and returns a plain &ldquo;appropriate / marginal / avoid&rdquo; verdict with per-nutrient notes. It is meant to be used standing in the store with a bag in hand, not as a substitute for reading the longer write-ups. The <Link href="/tools/cage-size-calculator" className="text-brand-primary underline-offset-2 hover:underline">cage size calculator</Link> turns ferret count, levels, and playtime into a minimum L × W × H before you buy the habitat. The <Link href="/tools/readiness-quiz" className="text-brand-primary underline-offset-2 hover:underline">readiness quiz</Link> scores whether a ferret fits your household, then packs a day-one kit.
          </p>
          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">Where it fits with the rest of the site</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            A verdict is only as useful as the reasoning behind it. If the evaluator flags a food, the next question is usually why those numbers matter, and that is covered in depth in our <Link href="/diet" className="text-brand-primary underline-offset-2 hover:underline">ferret diet</Link> reference. If a food scores poorly because of a chronic condition you are managing, the <Link href="/health" className="text-brand-primary underline-offset-2 hover:underline">ferret health</Link> section explains how diet intersects with the issues ferrets are prone to. The tool is the fast answer; the editorial sections are the explanation. Everything here is source-cited and written by the Ferret.com editorial team from published references, with more keeper calculators planned as the reference set grows.
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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-5xl">
          <div className="mb-4 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Once the tools point you toward a ferret</div>
          <Link
            href="/ferret-starter-kit"
            className="group block rounded-lg border border-brand-border bg-brand-primary-pale/30 p-6 transition hover:border-brand-primary"
          >
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Starter Essentials</div>
            <h2 className="mb-2 font-display text-2xl font-semibold text-brand-text-dark group-hover:text-brand-primary">Ferret Starter Essentials</h2>
            <p className="text-sm leading-relaxed text-brand-text-mid">
              The day-one setup list a new ferret needs: cage, bedding, litter, food and water bowls, and a
              carrier. The natural next step after the readiness quiz scores a fit, the cost calculator gives
              you a number, or the food evaluator settles which kibble to buy.
            </p>
          </Link>
        </div>
      </section>

    </>
  )
}
