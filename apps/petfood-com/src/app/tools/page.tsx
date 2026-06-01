import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

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
]

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
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

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark mb-4">Why this calculator exists</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Pet food bags advertise weight and price. They don&apos;t advertise feeding cost — the only number that actually matters when you&apos;re choosing what to feed long-term. A &ldquo;$60 bag&rdquo; can be cheaper per day than a &ldquo;$40 bag&rdquo; depending on calorie density, kibble size, and how much your specific pet eats per day. The PetFood.com cost calculator does the conversion in the browser so you can compare two foods on the same metric the manufacturer doesn&apos;t print.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            No sign-up, no data collection, no &ldquo;estimated savings&rdquo; from carrier-marketing math. The inputs are bag size, bag price, and cups per day. The output is cost-per-day, cost-per-month, cost-per-year, and cost-per-cup. Side-by-side mode runs the same arithmetic against a second food so you can decide which one is actually cheaper for your pet.
          </p>
        </div>

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

      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark mb-4">What the calculator does and doesn&apos;t do</h2>
          <div className="space-y-5 text-base text-brand-text-mid leading-relaxed">
            <p>
              <strong>It does:</strong> arithmetic on the four numbers a feeding decision actually depends on — bag weight, bag price, cups per day fed, and (for the side-by-side mode) the same set for a second food. The output is presented at four time horizons (per cup, per day, per month, per year) because each is the right unit for different questions. Per-cup matters when comparing two foods of different calorie density. Per-day matters when negotiating a monthly grocery budget. Per-month matters for cash flow. Per-year matters for the budgeting conversation about whether to switch.
            </p>
            <p>
              <strong>It doesn&apos;t do:</strong> recommend a food, score a food, infer calorie density from the bag label (the manufacturer often does not publish kcal/cup), or make any nutritional claim. For the nutrition-quality side of the choice — AAFCO substantiation, ingredient transparency, manufacturer recall history — see the brand evaluations under <Link href="/brands" className="text-brand-primary no-underline hover:underline">/brands</Link> and the ingredient references under <Link href="/ingredients" className="text-brand-primary no-underline hover:underline">/ingredients</Link>. A &ldquo;cheaper&rdquo; food that fails on substantiation is not actually cheaper once you account for the downstream cost.
            </p>
            <p>
              <strong>How to use it well:</strong> measure cups per day with the same scoop you actually use, not the manufacturer&apos;s feeding-guide cup. Most owners over- or under-feed by a meaningful percentage; the calculator only gets the answer right if the cups-per-day input matches reality. Weigh out a cup of kibble once with a kitchen scale — that calibration step is worth more than any cost calculation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-brand-text-dark mb-4">More tools coming</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            The PetFood.com toolkit is intentionally short. Each new tool has to clear a real-use-case bar: a question owners actually ask, an answer the published evidence supports, and a math step that materially helps the decision. Tools that don&apos;t clear the bar — &ldquo;food quality scores,&rdquo; AI-generated meal plans, breed-specific symptom checkers — are intentionally absent. They imply a precision the underlying data does not support.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            On the roadmap: an AAFCO statement decoder that takes a label photo (or transcription) and walks you through what the statement legally implies, an ingredient cross-reference that flags the synonyms manufacturers use for the same ingredient, and a recall lookup tied to the FDA CVM feed. We&apos;ll ship them when the source data is reliable enough that the tool would actually be more useful than the FDA database itself.
          </p>
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
