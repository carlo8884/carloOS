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
import { HORSE_FOODS, getHorseFood, getRelatedFoods, foodFaqs, VERDICT_META, type FoodEntry } from '../../../../data/foods'

interface PageProps {
  params: Promise<{ food: string }>
}

export function generateStaticParams() {
  return HORSE_FOODS.map((f) => ({ food: f.slug }))
}

function clamp(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { food } = await params
  const entry = getHorseFood(food)
  if (!entry) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Can Horses Eat… | Horses.com',
      description: 'Equine food-safety reference.',
      path: '/nutrition/can-horses-eat',
    })
  }
  return buildMetadata({
    siteId: 'horses-com',
    title: clamp(`Can Horses Eat ${entry.name}? | Horses.com`, 70),
    description: clamp(entry.shortAnswer, 160),
    path: `/nutrition/can-horses-eat/${entry.slug}`,
    type: 'article',
  })
}

function verdictAnswerLine(entry: FoodEntry): string {
  return entry.shortAnswer
}

export default async function CanHorsesEatFoodPage({ params }: PageProps) {
  const { food } = await params
  const entry = getHorseFood(food)
  if (!entry) notFound()

  const meta = VERDICT_META[entry.verdict]
  const related = getRelatedFoods(entry)
  const url = `https://horses.com/nutrition/can-horses-eat/${entry.slug}`
  const isToxic = entry.verdict === 'toxic'

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: `Can Horses Eat ${entry.name}?`,
    description: clamp(entry.shortAnswer, 200),
    url,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-06-15T00:00:00Z',
    modifiedAt: '2026-06-15T00:00:00Z',
  })
  const faqs = foodFaqs(entry)
  const schema = combineSchemas(articleSchema, buildFAQSchema({ questions: faqs }))

  return (
    <ArticleLayout
      siteId="horses-com"
      contentType="nutrition"
      hero={{
        title: `Can Horses Eat ${entry.name}?`,
        subtitle: verdictAnswerLine(entry),
        category: 'Can Horses Eat…',
        categoryHref: '/nutrition/can-horses-eat',
        authorName: 'Horses.com Editorial',
        authorAvatar: '🐴',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Can Horses Eat…', href: '/nutrition/can-horses-eat' },
        { name: entry.name, href: `/nutrition/can-horses-eat/${entry.slug}` },
      ]}
      relatedLinks={[
        { title: 'Can Horses Eat…? (full list)', href: '/nutrition/can-horses-eat', category: 'Hub' },
        { title: 'Toxic Plants for Horses', href: '/nutrition/toxic-plants', category: 'Safety' },
        { title: 'Equine Colic', href: '/health/colic', category: 'Health' },
        { title: 'Laminitis', href: '/health/laminitis', category: 'Health' },
      ]}
      schema={schema}
      sidebar={
        <>
          {isToxic && (
            <div className="rounded-lg border-2 p-4 mb-4" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
              <div className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: '#b91c1c' }}>If your horse ate {entry.name.toLowerCase()}</div>
              <div className="font-display font-black text-xl mt-1" style={{ color: '#b91c1c' }}>Call your vet now</div>
              <div className="text-xs text-brand-text-light mt-1">Poison control: ASPCA 888-426-4435 · 24/7 · fee applies. Horses cannot vomit — do not wait.</div>
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
              ...related.map((r) => ({ label: `Can horses eat ${r.name.toLowerCase()}?`, href: `/nutrition/can-horses-eat/${r.slug}` })),
              { label: 'See the full list', href: '/nutrition/can-horses-eat' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="horses-com" title="Practical Horse Reference" subtitle="Citation-anchored equine reference, weekly." source="can-horses-eat" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Horses.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

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
            {entry.quantity ? <p><strong>How much:</strong> {entry.quantity} Treats stay small alongside a forage-first diet — see <Link href="/nutrition/forage-basics">forage basics</Link> and, for sugar-sensitive horses, <Link href="/health/laminitis">laminitis</Link>.</p> : null}
          </>
        ) : null}

        {entry.symptoms?.length ? (
          <>
            <h2 id="symptoms">Signs of trouble to watch for</h2>
            <ul>{entry.symptoms.map((s) => <li key={s}>{s}</li>)}</ul>
            {entry.whatToDo ? (
              <div className="rounded-lg border p-4 my-3" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
                <strong style={{ color: '#b91c1c' }}>If your horse ate {entry.name.toLowerCase()}:</strong> {entry.whatToDo}
              </div>
            ) : null}
          </>
        ) : null}

        <h2 id="answer">The bottom line</h2>
        <p>
          {entry.verdict === 'safe' && `${entry.name} is generally safe for horses as an occasional treat, served correctly and in moderation on top of a forage-first diet. Cut treats to a safe size to prevent choke, introduce them gradually, and limit sugary treats for laminitis-prone, insulin-resistant, or Cushing’s horses. Check with your veterinarian if your horse has a health condition.`}
          {entry.verdict === 'caution' && `${entry.name} carries real risks for horses — read the cautions above, and when in doubt, leave it out in favor of a clearly horse-safe treat. Because horses cannot vomit and are prone to colic, choke, and laminitis, call your veterinarian if your horse has eaten a worrying amount.`}
          {entry.verdict === 'toxic' && `${entry.name} is not safe for horses. Keep it well out of reach, and if your horse eats any, call your veterinarian right away — and the ASPCA Animal Poison Control Center (888-426-4435) for a suspected poisoning. Horses cannot vomit, so do not wait for symptoms.`}
        </p>

        <p className="text-sm text-gray-500 mt-2">
          See also: <Link href="/nutrition/toxic-plants">toxic plants for horses</Link>, <Link href="/health/colic">equine colic</Link>, <Link href="/health/laminitis">laminitis</Link>, and the full <Link href="/nutrition/can-horses-eat">can-horses-eat list</Link>.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={faqs} />

        <p className="text-xs text-gray-500 mt-6">
          <em>General educational information from the Horses.com editorial team, based on established equine veterinary and nutrition references (ASPCA Animal Poison Control, Merck Veterinary Manual, the Equine Endocrinology Group, and equine clinical-nutrition literature). Not a substitute for veterinary advice — individual horses vary. Horses cannot vomit, and colic, choke, and laminitis are emergencies. For a suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or your veterinarian.</em>
        </p>
      </div>
    </ArticleLayout>
  )
}
