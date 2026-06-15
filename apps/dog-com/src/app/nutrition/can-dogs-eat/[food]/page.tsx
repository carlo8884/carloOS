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
import { DOG_FOODS, getDogFood, getRelatedFoods, foodFaqs, VERDICT_META, type FoodEntry } from '../../../../data/foods'

interface PageProps {
  params: Promise<{ food: string }>
}

export function generateStaticParams() {
  return DOG_FOODS.map((f) => ({ food: f.slug }))
}

function clamp(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { food } = await params
  const entry = getDogFood(food)
  if (!entry) return buildMetadata({ siteId: 'dog-com', title: 'Can Dogs Eat… | Dog.com', description: 'Dog food safety reference.', path: '/nutrition/can-dogs-eat' })
  return buildMetadata({
    siteId: 'dog-com',
    title: clamp(`Can Dogs Eat ${entry.name}? | Dog.com`, 70),
    description: clamp(entry.shortAnswer, 160),
    path: `/nutrition/can-dogs-eat/${entry.slug}`,
    type: 'article',
  })
}

function verdictAnswerLine(entry: FoodEntry): string {
  return entry.shortAnswer
}

export default async function CanDogsEatFoodPage({ params }: PageProps) {
  const { food } = await params
  const entry = getDogFood(food)
  if (!entry) notFound()

  const meta = VERDICT_META[entry.verdict]
  const related = getRelatedFoods(entry)
  const url = `https://dog.com/nutrition/can-dogs-eat/${entry.slug}`
  const isToxic = entry.verdict === 'toxic'

  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `Can Dogs Eat ${entry.name}?`,
    description: clamp(entry.shortAnswer, 200),
    url,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-06-15T00:00:00Z',
    modifiedAt: '2026-06-15T00:00:00Z',
  })
  const faqs = foodFaqs(entry)
  const schema = combineSchemas(articleSchema, buildFAQSchema({ questions: faqs }))

  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="nutrition"
      hero={{
        title: `Can Dogs Eat ${entry.name}?`,
        subtitle: verdictAnswerLine(entry),
        category: 'Can Dogs Eat…',
        categoryHref: '/nutrition/can-dogs-eat',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Can Dogs Eat…', href: '/nutrition/can-dogs-eat' },
        { name: entry.name, href: `/nutrition/can-dogs-eat/${entry.slug}` },
      ]}
      relatedLinks={[
        { title: 'Can Dogs Eat…? (full list)', href: '/nutrition/can-dogs-eat', category: 'Hub' },
        { title: 'Foods Toxic to Dogs', href: '/nutrition/toxic-foods', category: 'Safety' },
        { title: 'Safe Human Foods for Dogs', href: '/nutrition/safe-human-foods', category: 'Nutrition' },
        { title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' },
      ]}
      schema={schema}
      sidebar={
        <>
          {isToxic && (
            <div className="rounded-lg border-2 p-4 mb-4" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
              <div className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: '#b91c1c' }}>If your dog ate {entry.name.toLowerCase()}</div>
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
              ...related.map((r) => ({ label: `Can dogs eat ${r.name.toLowerCase()}?`, href: `/nutrition/can-dogs-eat/${r.slug}` })),
              { label: 'See the full list', href: '/nutrition/can-dogs-eat' },
            ]}
          />
          <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="can-dogs-eat" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

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
            {entry.quantity ? <p><strong>How much:</strong> {entry.quantity} Treats should stay within about 10% of your dog’s daily calories — see <Link href="/nutrition/how-much-to-feed">how much to feed your dog</Link>.</p> : null}
          </>
        ) : null}

        {entry.symptoms?.length ? (
          <>
            <h2 id="symptoms">Signs of trouble to watch for</h2>
            <ul>{entry.symptoms.map((s) => <li key={s}>{s}</li>)}</ul>
            {entry.whatToDo ? (
              <div className="rounded-lg border p-4 my-3" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
                <strong style={{ color: '#b91c1c' }}>If your dog ate {entry.name.toLowerCase()}:</strong> {entry.whatToDo}
              </div>
            ) : null}
          </>
        ) : null}

        <h2 id="answer">The bottom line</h2>
        <p>
          {entry.verdict === 'safe' && `${entry.name} is generally safe for dogs as an occasional treat, served plainly and in moderation. As with any new food, introduce it gradually and check with your veterinarian if your dog has a health condition.`}
          {entry.verdict === 'caution' && `${entry.name} carries real risks for dogs — read the cautions above, and when in doubt, leave it out in favor of a clearly dog-safe treat. Check with your veterinarian if your dog has eaten a worrying amount.`}
          {entry.verdict === 'toxic' && `${entry.name} is not safe for dogs. Keep it well out of reach, and if your dog eats any, contact ASPCA Animal Poison Control (888-426-4435) or your veterinarian right away — do not wait for symptoms.`}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          See also: <Link href="/nutrition/toxic-foods">foods toxic to dogs</Link>, <Link href="/nutrition/safe-human-foods">safe human foods for dogs</Link>, and the full <Link href="/nutrition/can-dogs-eat">can-dogs-eat list</Link>.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={faqs} />

        <p className="text-xs text-gray-500 mt-6">
          <em>General educational information from the Dog.com editorial team, based on established veterinary toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and veterinary literature). Not a substitute for veterinary advice — individual dogs vary. For a suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or your veterinarian.</em>
        </p>
      </div>
    </ArticleLayout>
  )
}
