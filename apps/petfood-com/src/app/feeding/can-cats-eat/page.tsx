import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { CAT_FOODS, CAT_FOOD_CATEGORIES, VERDICT_META } from '../../../data/cat-foods'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Can Cats Eat…? Food Safety Checker (A–Z) | PetFood.com',
  description: 'Can cats eat it? Vet-referenced safe/caution/toxic verdicts for 30 common human foods — onions, chocolate, tuna, milk, chicken, and more.',
  path: '/feeding/can-cats-eat',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Feeding', url: 'https://petfood.com/feeding' },
    { name: 'Can Cats Eat…', url: 'https://petfood.com/feeding/can-cats-eat' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Can Cats Eat… — food safety reference',
  numberOfItems: CAT_FOODS.length,
  itemListElement: CAT_FOODS.map((f, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `Can cats eat ${f.name}?`,
    url: `https://petfood.com/feeding/can-cats-eat/${f.slug}`,
  })),
}

const FAQS = [
  { question: 'How do I quickly check if a food is safe for my cat?', answer: 'Use the list on this page — each food is marked safe (green), caution (amber), or toxic (red), and links to a full explanation. For anything marked toxic, or if your cat has already eaten a worrying amount, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or your veterinarian.' },
  { question: 'What are the most dangerous human foods for cats?', answer: 'The most important to keep away from cats are onions and garlic (cats are more sensitive than dogs and can develop anemia), chocolate, caffeine, alcohol, and grapes and raisins. Cats are obligate carnivores, so most plant foods are at best occasional novelties, and human food should never replace a complete, balanced cat food.' },
  { question: 'Why is tuna a "caution" and not "safe" for cats?', answer: 'A little plain tuna is fine as an occasional treat, but human tuna is not a balanced diet: fed regularly it can displace proper nutrition, contribute to mercury exposure, and lead some cats to refuse balanced food. Keep tuna and fish as occasional extras, not staples.' },
  { question: 'My cat ate something on the toxic list — what should I do?', answer: 'Do not wait for symptoms. Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian immediately with the food, the amount, and your cat’s weight. Do not induce vomiting unless a professional tells you to.' },
]

const schema = combineSchemas(breadcrumbSchema, itemListSchema, buildFAQSchema({ questions: FAQS }))

const VERDICT_ORDER = ['toxic', 'caution', 'safe'] as const

export default function CanCatsEatHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Food Safety</span>
        </div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Can Cats Eat…?
        </h1>
        <p className="text-lg font-light text-white/60 max-w-2xl leading-relaxed">
          A vet-referenced, plain-English safety check for the human foods cats reach for most. Cats are obligate carnivores, so each food is rated <strong className="text-white/80">safe</strong>, <strong className="text-white/80">caution</strong>, or <strong className="text-white/80">toxic</strong> — tap any for the full reason, serving guidance, and what to do.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <Link href="/feeding" className="hover:text-brand-primary no-underline">Feeding</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Can Cats Eat…</span>
      </nav>

      <div className="px-container-sm sm:px-container py-6 bg-brand-surface border-b border-brand-border">
        <div className="rounded-lg border-2 p-4 max-w-content-wide" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
          <span className="text-sm font-bold" style={{ color: '#b91c1c' }}>Emergency:</span>{' '}
          <span className="text-sm text-brand-text-mid">If your cat has eaten something toxic, call <strong>ASPCA Animal Poison Control: 888-426-4435</strong> (24/7, fee applies) or your veterinarian now — do not wait for symptoms.</span>
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        {CAT_FOOD_CATEGORIES.map((cat) => {
          const items = CAT_FOODS.filter((f) => f.category === cat)
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
                      <Link href={`/feeding/can-cats-eat/${f.slug}`} className="flex items-center gap-3 py-3 px-4 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition">
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
            More depth: <Link href="/feeding/how-much-to-feed-a-cat" className="text-brand-primary hover:underline">how much to feed a cat</Link> ·{' '}
            <Link href="/diets/weight-management-diets" className="text-brand-primary hover:underline">weight-management diets</Link> ·{' '}
            <Link href="/feeding" className="text-brand-primary hover:underline">feeding guides hub</Link> ·{' '}
            <a href="https://dog.com/nutrition/can-dogs-eat" className="text-brand-primary hover:underline">Can Dogs Eat…? (Dog.com)</a>
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Verdicts reflect established veterinary toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and veterinary literature) and are general guidance, not a substitute for veterinary advice. Cats are obligate carnivores; human foods are occasional extras, never a replacement for a complete, balanced diet. Individual cats vary.
          </p>
        </div>
      </div>

      <section className="px-container-sm sm:px-container py-12" style={{ background: 'var(--brand-primary-pale)' }}>
        <div className="max-w-content-wide">
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="inline" />
          <div className="mt-6">
            <EmailCapture variant="section" siteId="petfood-com" title="Free Label Decoder" subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them." source="can-cats-eat-hub" />
          </div>
        </div>
      </section>
    </>
  )
}
