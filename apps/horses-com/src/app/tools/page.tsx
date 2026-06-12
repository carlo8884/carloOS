import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Calculators & Tools | Horses.com',
  description: 'Free horse-keeping calculators: estimate weight from girth and length, plan daily hay and feed, and score body condition on the Henneke scale.',
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
    href: '/tools/horse-weight-calculator',
    title: 'Horse Weight Calculator',
    desc: 'Estimate bodyweight from heart girth and body length using the standard weight-tape formula. Instant lbs and kg, with pony, draft, and foal adjustments.',
    tag: 'Calculator',
  },
  {
    href: '/tools/horse-feed-calculator',
    title: 'Horse Feed & Hay Calculator',
    desc: 'Estimate daily hay and feed from bodyweight, workload, and keeper type. Forage-first, using published NRC intake ranges, with a dry-matter vs. as-fed conversion.',
    tag: 'Calculator',
  },
  {
    href: '/tools/body-condition-score',
    title: 'Body Condition Score (Henneke)',
    desc: 'Score six body areas (neck, withers, shoulder, ribs, loin, tailhead) to compute the standard 1-9 Henneke BCS. Returns condition narrative and feeding guidance per score range.',
    tag: 'Husbandry',
  },
  {
    href: '/tools/horse-gestation-calculator',
    title: 'Horse Gestation & Foaling Date Calculator',
    desc: 'Estimate a mare’s foaling date from her breeding date using the ~340-day average gestation, with the early/late 320–362 day foaling window and an optional custom gestation length.',
    tag: 'Breeding',
  },
  {
    href: '/tools/horse-height-converter',
    title: 'Horse Height Converter (Hands, Inches, cm)',
    desc: 'Convert horse height between hands, inches, and centimetres. Handles the hands.inches notation correctly (15.2hh = 62 in = 157.5 cm) and flags the 14.2hh pony cutoff.',
    tag: 'Converter',
  },
  {
    href: '/tools/horse-cost-calculator',
    title: 'Horse Cost of Ownership Calculator',
    desc: 'Estimate the true monthly and annual cost of keeping a horse — board, feed, farrier, vet, dental, vaccines, insurance, and one-time startup — with an editable per-category breakdown using 2026 US ranges.',
    tag: 'Budgeting',
  },
  {
    href: '/tools/horse-size-for-rider',
    title: 'Horse Size for Rider Calculator',
    desc: 'What size horse should you ride? Suggests a horse weight range and approximate height band from rider weight, height, and discipline, using the 15–20% carrying guideline. Guidance, not a rule.',
    tag: 'Fit',
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
            Free, source-cited horse-keeping calculators. Estimate bodyweight from a tape measure, plan daily hay and feed forage-first, and score body condition on the standard Henneke scale.
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
            The three calculators chain together. Start with the <Link href="/tools/horse-weight-calculator" className="text-brand-primary underline">horse weight calculator</Link>, which turns two tape measurements &mdash; heart girth and body length &mdash; into a bodyweight estimate using the published weight-tape formula. Carry that weight into the <Link href="/tools/horse-feed-calculator" className="text-brand-primary underline">feed &amp; hay calculator</Link> to set a daily forage target, then track whether the ration is working with the <Link href="/tools/body-condition-score" className="text-brand-primary underline">Henneke body condition score</Link>, the 1&ndash;9 scale equine veterinarians have used since 1983 to standardize how fat cover is assessed across six body regions.
          </p>
          <p className="text-base leading-relaxed text-brand-text-mid">
            Treat these tools as the measurement layer beneath the rest of the site, not a standalone novelty. A condition score earns its keep when it feeds a decision: a ration adjustment worked through the <Link href="/nutrition" className="text-brand-primary underline">nutrition reference</Link>, or a conversation about metabolic risk grounded in the <Link href="/health" className="text-brand-primary underline">health library</Link>. Two more tools round out the set for buyers and breeders: the <Link href="/tools/horse-height-converter" className="text-brand-primary underline">height converter</Link> turns hands into inches and centimetres without the usual hands.inches confusion, and the <Link href="/tools/horse-gestation-calculator" className="text-brand-primary underline">gestation calculator</Link> projects a mare&rsquo;s foaling date from her breeding date. Two more answer the questions every prospective owner asks first: the <Link href="/tools/horse-cost-calculator" className="text-brand-primary underline">cost-of-ownership calculator</Link> builds a realistic monthly and annual budget from board, feed, farrier, and vet care, and the <Link href="/tools/horse-size-for-rider" className="text-brand-primary underline">horse-size-for-rider calculator</Link> suggests a suitable horse weight and height band from your own size using the 15&ndash;20% carrying guideline. Every calculator here is source-cited, free, and built for owners and barn managers who would rather track a trend than trust a feeling.
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
