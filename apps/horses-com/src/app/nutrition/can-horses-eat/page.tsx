import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { HORSE_FOODS, HORSE_FOOD_CATEGORIES, VERDICT_META } from '../../../data/foods'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Can Horses Eat…? Food Safety Checker (A–Z) | Horses.com',
  description: 'Can horses eat it? Reference-backed safe/caution/toxic verdicts for common treats and hazards — apples, carrots, chocolate, avocado, grass clippings, and more.',
  path: '/nutrition/can-horses-eat',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Nutrition', url: 'https://horses.com/nutrition' },
    { name: 'Can Horses Eat…', url: 'https://horses.com/nutrition/can-horses-eat' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Can Horses Eat… — equine food safety reference',
  numberOfItems: HORSE_FOODS.length,
  itemListElement: HORSE_FOODS.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Can horses eat ${f.name}?`,
    url: `https://horses.com/nutrition/can-horses-eat/${f.slug}`,
  })),
}

const FAQS = [
  { question: 'How do I quickly check if a food is safe for my horse?', answer: 'Use the list on this page — each food is marked safe (green), caution (amber), or toxic (red), and links to a full explanation. Remember the horse-specific risks: colic, laminitis, and choke. For anything marked toxic, or if your horse has already eaten a worrying amount, call your veterinarian, and for a suspected poisoning the ASPCA Animal Poison Control Center at 888-426-4435 (24/7, fee applies). Horses cannot vomit, so do not wait.' },
  { question: 'What foods are most dangerous for horses?', answer: 'Keep horses away from chocolate and caffeine, avocado, onions and garlic, tomato and potato plants (nightshades), rhubarb leaves, acorns and oak, fresh lawn or grass clippings, moldy or spoiled feed, cattle feed containing ionophores (monensin), and dairy or meat. Several of these cause colic, laminitis, or organ damage, and a few are rapidly fatal.' },
  { question: 'Why are lawn clippings so dangerous for horses?', answer: 'Fresh grass clippings ferment fast and are gulped in clumps without chewing, which causes choke, gas colic, and laminitis. Grazing standing pasture is fine, but never feed or allow access to mowed grass clippings.' },
  { question: 'My horse ate something on the toxic list — what should I do?', answer: 'Call your veterinarian immediately with the food and the amount eaten. For a suspected poisoning, also call the ASPCA Animal Poison Control Center at 888-426-4435. Because horses cannot vomit and colic, choke, and laminitis are emergencies, prompt veterinary care matters — do not wait for symptoms to develop.' },
]

const schema = combineSchemas(breadcrumbSchema, itemListSchema, buildFAQSchema({ questions: FAQS }))

const VERDICT_ORDER = ['toxic', 'caution', 'safe'] as const

export default function CanHorsesEatHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Food Safety</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Can Horses Eat…?
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          A reference-backed, plain-English safety check for the treats and foods horses encounter. Each is rated <strong className="text-white/80">safe</strong>, <strong className="text-white/80">caution</strong>, or <strong className="text-white/80">toxic</strong> — framed around the equine risks that matter: <strong className="text-white/80">colic, laminitis, and choke</strong>. Forage (hay and pasture) is always the staple; treats are extras on top.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/nutrition" className="hover:text-brand-primary no-underline">Nutrition</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Can Horses Eat…</span>
      </nav>

      <div className="px-container-sm sm:px-container py-6 bg-brand-surface border-b border-brand-border">
        <div className="rounded-lg border-2 p-4 max-w-content-wide" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
          <span className="text-sm font-bold" style={{ color: '#b91c1c' }}>Emergency:</span>{' '}
          <span className="text-sm text-brand-text-mid">If your horse has eaten something toxic — or shows signs of colic, choke, or laminitis — call your veterinarian now. For a suspected poisoning, call <strong>ASPCA Animal Poison Control: 888-426-4435</strong> (24/7, fee applies). Horses cannot vomit, so do not wait for symptoms.</span>
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        {HORSE_FOOD_CATEGORIES.map((cat) => {
          const items = HORSE_FOODS.filter((f) => f.category === cat)
          if (!items.length) return null
          const sorted = [...items].sort((a, b) => VERDICT_ORDER.indexOf(a.verdict) - VERDICT_ORDER.indexOf(b.verdict))
          return (
            <section key={cat} className="mb-10 max-w-content-wide">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-4">{cat}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 list-none p-0">
                {sorted.map((f) => {
                  const m = VERDICT_META[f.verdict]
                  return (
                    <li key={f.slug}>
                      <Link href={`/nutrition/can-horses-eat/${f.slug}`} className="flex items-center gap-3 py-3 px-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition">
                        <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: m.color }} aria-hidden />
                        <span className="font-medium text-brand-dark">{f.name}</span>
                        <span className="ml-auto text-2xs font-bold uppercase tracking-eyebrow" style={{ color: m.color }}>
                          {f.verdict === 'safe' ? 'Safe' : f.verdict === 'caution' ? 'Caution' : 'Toxic'}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        <div className="max-w-content-wide mt-8 text-sm text-brand-text-mid">
          <p>
            More depth: <Link href="/nutrition/toxic-plants" className="text-brand-primary hover:underline">toxic plants for horses</Link> ·{' '}
            <Link href="/health/colic" className="text-brand-primary hover:underline">equine colic</Link> ·{' '}
            <Link href="/health/laminitis" className="text-brand-primary hover:underline">laminitis</Link> ·{' '}
            <Link href="/health/choke" className="text-brand-primary hover:underline">choke</Link> ·{' '}
            <Link href="/nutrition" className="text-brand-primary hover:underline">nutrition hub</Link>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Verdicts reflect established equine veterinary and nutrition references (ASPCA Animal Poison Control, Merck Veterinary Manual, the Equine Endocrinology Group, and equine clinical-nutrition literature) and are general guidance, not a substitute for veterinary advice. Individual horses vary, and sugary treats should be limited for laminitis-prone, insulin-resistant, or Cushing’s horses.
          </p>
        </div>
      </div>

      <section className="px-container-sm sm:px-container py-12" style={{ background: 'var(--brand-primary-pale)' }}>
        <div className="max-w-content-wide">
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="inline" />
          <div className="mt-6">
            <EmailCapture variant="section" siteId="horses-com" title="The Horses.com Reference" subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored." source="can-horses-eat-hub" />
          </div>
        </div>
      </section>
    </>
  )
}
