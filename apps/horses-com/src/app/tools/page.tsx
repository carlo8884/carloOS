import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Calculators & Tools — Body Condition Score | Horses.com',
  description: 'Free horse-keeping calculators: Henneke body condition score (BCS) with feeding guidance per score, plus husbandry references for owners.',
  path: '/tools',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
  ],
})

const TOOLS = [
  {
    href: '/tools/body-condition-score',
    title: 'Body Condition Score (Henneke)',
    desc: 'Score six body areas (neck, withers, shoulder, ribs, loin, tailhead) to compute the standard 1-9 Henneke BCS. Returns condition narrative and feeding guidance per score range.',
    tag: 'Husbandry',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horses.com Tools & Calculators',
  numberOfItems: TOOLS.length,
  itemListElement: TOOLS.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.title, url: `https://horses.com${x.href}` })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function ToolsHub() {
  return (
    <>
      <SchemaScript schema={schema} />
      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(60, 100, 70, 0.5) 0%, transparent 60%)' }}
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
            Horse husbandry math, <span className="italic font-normal">at the rail.</span>
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Free, source-cited horse-keeping calculators. Body condition scoring on the standard Henneke scale, with feeding guidance and underlying-condition flags for owners.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pt-section">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-brand-text-dark mb-4">Why a horse owner needs the math, not the eyeball</h2>
          <p className="text-base leading-relaxed text-brand-text-mid mb-4">
            Most horse-keeping decisions that go wrong start with a guess. Is this gelding genuinely overweight, or just heavy-coated for winter? Is the easy keeper drifting toward laminitis risk, or comfortably maintaining? Eyeballing a horse over the stall door is the least reliable way to answer those questions, because a familiar animal looks &ldquo;normal&rdquo; to the person who sees it every day. The calculators in this hub exist to replace that drift with a repeatable number you can track across seasons, hand to your veterinarian, and check against published reference standards.
          </p>
          <p className="text-base leading-relaxed text-brand-text-mid mb-4">
            The cornerstone here is the <Link href="/tools/body-condition-score" className="text-brand-primary underline">Henneke body condition score</Link>, the 1&ndash;9 scale equine veterinarians and researchers have used since 1983 to standardize how fat cover is assessed. Rather than a single glance, it asks you to palpate and score six discrete regions &mdash; neck, withers, shoulder, ribs, loin, and tailhead &mdash; so that a long winter coat or a deceptive topline cannot skew the result. The tool returns the composite score with a plain-language condition narrative and feeding direction calibrated to where the horse sits on the scale.
          </p>
          <p className="text-base leading-relaxed text-brand-text-mid">
            Treat these tools as the measurement layer beneath the rest of the site, not a standalone novelty. A condition score earns its keep when it feeds a decision: a ration adjustment worked through the <Link href="/nutrition" className="text-brand-primary underline">nutrition reference</Link>, or a conversation about metabolic risk grounded in the <Link href="/health" className="text-brand-primary underline">health library</Link>. Every calculator here is source-cited, free, and built for owners and barn managers who would rather track a trend than trust a feeling.
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
            siteId="horses-com"
            variant="inline"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates. No spam."
            source="tools-hub"
          />
        </div>
      </section>
    </>
  )
}
