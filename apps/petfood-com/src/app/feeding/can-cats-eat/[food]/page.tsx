import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  ArticleByline,
} from '@carloOS/ui'
import { CAT_FOODS, getCatFood, getRelatedCatFoods, catFoodFaqs, VERDICT_META, type FoodEntry } from '../../../../data/cat-foods'

interface PageProps {
  params: Promise<{ food: string }>
}

export function generateStaticParams() {
  return CAT_FOODS.map((f) => ({ food: f.slug }))
}

function clamp(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { food } = await params
  const entry = getCatFood(food)
  if (!entry) return buildMetadata({ siteId: 'petfood-com', title: 'Can Cats Eat… | PetFood.com', description: 'Cat food safety reference.', path: '/feeding/can-cats-eat' })
  return buildMetadata({
    siteId: 'petfood-com',
    title: clamp(`Can Cats Eat ${entry.name}? | PetFood.com`, 70),
    description: clamp(entry.shortAnswer, 160),
    path: `/feeding/can-cats-eat/${entry.slug}`,
    type: 'article',
  })
}

function verdictAnswerLine(entry: FoodEntry): string {
  return entry.shortAnswer
}

export default async function CanCatsEatFoodPage({ params }: PageProps) {
  const { food } = await params
  const entry = getCatFood(food)
  if (!entry) notFound()

  const meta = VERDICT_META[entry.verdict]
  const related = getRelatedCatFoods(entry)
  const url = `https://petfood.com/feeding/can-cats-eat/${entry.slug}`
  const isToxic = entry.verdict === 'toxic'

  const articleSchema = buildArticleSchema({
    siteId: 'petfood-com',
    title: `Can Cats Eat ${entry.name}?`,
    description: clamp(entry.shortAnswer, 200),
    url,
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-15T00:00:00Z',
    modifiedAt: '2026-06-15T00:00:00Z',
  })
  const faqs = catFoodFaqs(entry)
  const schema = combineSchemas(articleSchema, buildFAQSchema({ questions: faqs }))

  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: `Can Cats Eat ${entry.name}?`,
        subtitle: verdictAnswerLine(entry),
        category: 'Can Cats Eat…',
        categoryHref: '/feeding/can-cats-eat',
        authorName: 'PetFood.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'Can Cats Eat…', href: '/feeding/can-cats-eat' },
        { name: entry.name, href: `/feeding/can-cats-eat/${entry.slug}` },
      ]}
      relatedLinks={[
        { title: 'Can Cats Eat…? (full list)', href: '/feeding/can-cats-eat', category: 'Hub' },
        { title: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat', category: 'Feeding' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets', category: 'Diets' },
        { title: 'Feeding Guides Hub', href: '/feeding', category: 'Hub' },
      ]}
      schema={schema}
      sidebar={
        <>
          {isToxic && (
            <div className="rounded-lg border-2 p-4 mb-4" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
              <div className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: '#b91c1c' }}>If your cat ate {entry.name.toLowerCase()}</div>
              <div className="font-display font-black text-xl mt-1" style={{ color: '#b91c1c' }}>888-426-4435</div>
              <div className="text-xs text-brand-text-light mt-1">ASPCA Animal Poison Control · 24/7 · fee applies</div>
            </div>
          )}
          <TableOfContents
            items={[
              { label: 'The short answer', href: '#answer' },
              { label: 'Why', href: '#why' },
              ...(entry.benefits?.length ? [{ label: 'Benefits', href: '#benefits' }] : []),
              ...(entry.safePrep ? [{ label: 'How to serve it', href: '#serve' }] : []),
              ...(entry.symptoms?.length ? [{ label: 'Signs of trouble', href: '#symptoms' }] : []),
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="More foods"
            links={[
              ...related.map((r) => ({ label: `Can cats eat ${r.name.toLowerCase()}?`, href: `/feeding/can-cats-eat/${r.slug}` })),
              { label: 'See the full list', href: '/feeding/can-cats-eat' },
            ]}
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="petfood-com" title="Free Label Decoder" subtitle="A one-page printable label decoder." source="can-cats-eat" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <div className="rounded-lg border p-5 my-4" style={{ borderColor: meta.color, background: meta.tone === 'good' ? '#f0fdf4' : meta.tone === 'warn' ? '#fffbeb' : '#fef2f2' }}>
          <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Verdict</span>
          <div className="font-display font-black text-2xl mt-1" style={{ color: meta.color }}>{meta.label}</div>
          <p className="mt-2 mb-0 text-brand-text-mid">{entry.shortAnswer}</p>
        </div>

        <h2 id="why">Why</h2>
        <p>{entry.detail}</p>

        {entry.risks?.length ? (
          <>
            <h3>The risks</h3>
            <ul>{entry.risks.map((r) => <li key={r}>{r}</li>)}</ul>
          </>
        ) : null}

        {entry.benefits?.length ? (
          <>
            <h2 id="benefits">Benefits</h2>
            <ul>{entry.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
          </>
        ) : null}

        {entry.safePrep ? (
          <>
            <h2 id="serve">How to serve it safely</h2>
            <p>{entry.safePrep}</p>
            {entry.quantity ? <p><strong>How much:</strong> {entry.quantity} Treats should stay within about 10% of your cat’s daily calories — see <Link href="/feeding/how-much-to-feed-a-cat">how much to feed a cat</Link>.</p> : null}
          </>
        ) : null}

        {entry.symptoms?.length ? (
          <>
            <h2 id="symptoms">Signs of trouble to watch for</h2>
            <ul>{entry.symptoms.map((s) => <li key={s}>{s}</li>)}</ul>
            {entry.whatToDo ? (
              <div className="rounded-lg border p-4 my-3" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
                <strong style={{ color: '#b91c1c' }}>If your cat ate {entry.name.toLowerCase()}:</strong> {entry.whatToDo}
              </div>
            ) : null}
          </>
        ) : null}

        <h2 id="answer">The bottom line</h2>
        <p>
          {entry.verdict === 'safe' && `${entry.name} is generally safe for cats as an occasional treat, served plainly and in moderation. Cats are obligate carnivores, so a complete, balanced cat food should always be the foundation — treats and extras stay within about 10% of daily calories. Introduce anything new gradually and check with your veterinarian if your cat has a health condition.`}
          {entry.verdict === 'caution' && `${entry.name} carries real risks for cats — read the cautions above, and when in doubt, leave it out in favor of a clearly cat-safe option. A complete, balanced cat food should remain the foundation of the diet. Check with your veterinarian if your cat has eaten a worrying amount.`}
          {entry.verdict === 'toxic' && `${entry.name} is not safe for cats. Keep it well out of reach, and if your cat eats any, contact ASPCA Animal Poison Control (888-426-4435) or your veterinarian right away — do not wait for symptoms.`}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          See also: <Link href="/feeding/how-much-to-feed-a-cat">how much to feed a cat</Link>, <Link href="/diets/weight-management-diets">weight-management diets</Link>, and the full <Link href="/feeding/can-cats-eat">can-cats-eat list</Link>. For dogs, see <a href="https://dog.com/nutrition/can-dogs-eat">Can Dogs Eat…? on Dog.com</a>.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={faqs} />

        <p className="text-xs text-gray-500 mt-6">
          <em>General educational information from the PetFood.com editorial team, based on established veterinary toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and veterinary literature). Not a substitute for veterinary advice — individual cats vary. For a suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or your veterinarian.</em>
        </p>
      </div>
    </ArticleLayout>
  )
}
