import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { FERRET_FOODS, FERRET_FOOD_CATEGORIES, VERDICT_META } from '../../../data/foods'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Can Ferrets Eat…? Food Safety Checker (A–Z) | Ferret.com',
  description: 'Can ferrets eat it? Obligate-carnivore safe/caution/toxic verdicts for 25 foods — chocolate, onion, fruit, grains, chicken, egg, and more.',
  path: '/diet/can-ferrets-eat',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Diet', url: 'https://ferret.com/diet' },
    { name: 'Can Ferrets Eat…', url: 'https://ferret.com/diet/can-ferrets-eat' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Can Ferrets Eat… — food safety reference',
  numberOfItems: FERRET_FOODS.length,
  itemListElement: FERRET_FOODS.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Can ferrets eat ${f.name}?`,
    url: `https://ferret.com/diet/can-ferrets-eat/${f.slug}`,
  })),
}

const FAQS = [
  { question: 'How do I quickly check if a food is safe for my ferret?', answer: 'Use the list on this page — each food is marked safe (green), not recommended (amber), or toxic (red), and links to a full explanation. Ferrets are strict obligate carnivores, so the safe column is essentially plain meat, egg, and meat-based treats. For anything marked toxic, or if your ferret has already eaten a worrying amount, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or a veterinarian familiar with ferrets.' },
  { question: 'What can ferrets safely eat?', answer: 'Plain meat — chicken, turkey, beef, lamb — plus egg, organ meats, single-ingredient meat treats, and a high-quality meat-first ferret or kitten kibble. Ferrets need roughly 32–40% protein and high fat with minimal carbohydrate. If a treat is not meat, it is almost certainly the wrong treat.' },
  { question: 'Why can’t ferrets eat fruit, vegetables, or grains?', answer: 'Ferrets are obligate carnivores with a short gut; they cannot digest plant fiber, so fruit, vegetables, and grains offer no usable nutrition, can cause GI upset or blockage, and add sugar and carbohydrate that is linked to insulinoma, a common ferret cancer. These foods are inappropriate even though some ferrets beg for them.' },
  { question: 'What foods are toxic to ferrets?', answer: 'Chocolate, onion and garlic, xylitol, grapes and raisins, caffeine, alcohol, and macadamia/other nuts are the core toxic list — the standard small-mammal toxin set, made more dangerous by a ferret’s tiny body size. If a ferret ingests any, call ASPCA Animal Poison Control (888-426-4435) or a veterinarian immediately — do not wait for symptoms.' },
]

const schema = combineSchemas(breadcrumbSchema, itemListSchema, buildFAQSchema({ questions: FAQS }))

const VERDICT_ORDER = ['toxic', 'caution', 'safe'] as const

export default function CanFerretsEatHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-amber" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-amber">Food Safety</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Can Ferrets Eat…?
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          A plain-English safety check for the foods ferret owners ask about most. Ferrets are <strong className="text-white/80">strict obligate carnivores</strong>, so each food is rated <strong className="text-white/80">safe</strong>, <strong className="text-white/80">not recommended</strong>, or <strong className="text-white/80">toxic</strong> — tap any for the full reason, serving guidance, and what to do. The safe column is meat, egg, and meat-based treats; sugar, grain, and plant matter are not.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/diet" className="hover:text-brand-primary no-underline">Diet</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Can Ferrets Eat…</span>
      </nav>

      <div className="px-container-sm sm:px-container py-6 bg-brand-surface border-b border-brand-border">
        <div className="rounded-lg border-2 p-4 max-w-content-wide" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
          <span className="text-sm font-bold" style={{ color: '#b91c1c' }}>Emergency:</span>{' '}
          <span className="text-sm text-brand-text-mid">If your ferret has eaten something toxic, call <strong>ASPCA Animal Poison Control: 888-426-4435</strong> (24/7, fee applies) or a veterinarian familiar with ferrets now — do not wait for symptoms.</span>
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        {FERRET_FOOD_CATEGORIES.map((cat) => {
          const items = FERRET_FOODS.filter((f) => f.category === cat)
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
                      <Link href={`/diet/can-ferrets-eat/${f.slug}`} className="flex items-center gap-3 py-3 px-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition">
                        <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: m.color }} aria-hidden />
                        <span className="font-medium text-brand-dark">{f.name}</span>
                        <span className="ml-auto text-2xs font-bold uppercase tracking-eyebrow" style={{ color: m.color }}>
                          {f.verdict === 'safe' ? 'Safe' : f.verdict === 'caution' ? 'Avoid' : 'Toxic'}
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
            More depth: <Link href="/diet/safe-treats" className="amber-link" style={{ fontWeight: 600 }}>safe treats for ferrets</Link> ·{' '}
            <Link href="/care/toxic-foods" className="amber-link" style={{ fontWeight: 600 }}>foods toxic to ferrets</Link> ·{' '}
            <Link href="/diet/protein-and-fat-requirements" className="amber-link" style={{ fontWeight: 600 }}>protein &amp; fat requirements</Link> ·{' '}
            <Link href="/diet" className="amber-link" style={{ fontWeight: 600 }}>diet &amp; nutrition hub</Link>
          </p>
          <p className="text-xs text-brand-text-light mt-4">
            Verdicts reflect obligate-carnivore physiology and established veterinary toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and the ferret clinical literature). They are general guidance, not a substitute for veterinary advice. Ferrets are strict carnivores; plant foods and sugar are inappropriate, not just suboptimal. Individual ferrets vary.
          </p>
        </div>
      </div>

      <section className="px-container-sm sm:px-container py-12" style={{ background: 'var(--brand-primary-pale)' }}>
        <div className="max-w-content-wide">
          <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="inline" />
          <div className="mt-6">
            <EmailCapture variant="section" siteId="ferret-com" title="The Ferret.com Nutrition Reference" subtitle="Evidence-based ferret diet and feeding. Cited. No product pushes." source="can-ferrets-eat-hub" />
          </div>
        </div>
      </section>
    </>
  )
}
