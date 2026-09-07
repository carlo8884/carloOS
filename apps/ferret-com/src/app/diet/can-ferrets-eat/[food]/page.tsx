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
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { FERRET_FOODS, getFerretFood, getRelatedFoods, foodFaqs, VERDICT_META, type FoodEntry } from '../../../../data/foods'

interface PageProps {
  params: Promise<{ food: string }>
}

export function generateStaticParams() {
  return FERRET_FOODS.map((f) => ({ food: f.slug }))
}

function clamp(s: string, n: number) {
  return s.length <= n ? s : s.slice(0, n - 1).trimEnd() + '…'
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { food } = await params
  const entry = getFerretFood(food)
  if (!entry) {
    return buildMetadata({
      siteId: 'ferret-com',
      title: 'Can Ferrets Eat…? | Ferret.com',
      description: 'Ferret food-safety reference for obligate carnivores.',
      path: '/diet/can-ferrets-eat',
    })
  }
  return buildMetadata({
    siteId: 'ferret-com',
    title: clamp(`Can Ferrets Eat ${entry.name}? | Ferret.com`, 70),
    description: clamp(entry.shortAnswer, 160),
    path: `/diet/can-ferrets-eat/${entry.slug}`,
    type: 'article',
  })
}

export default async function CanFerretsEatFoodPage({ params }: PageProps) {
  const { food } = await params
  const entry = getFerretFood(food)
  if (!entry) notFound()

  const meta = VERDICT_META[entry.verdict]
  const related = getRelatedFoods(entry)
  const url = `https://ferret.com/diet/can-ferrets-eat/${entry.slug}`
  const isToxic = entry.verdict === 'toxic'

  const articleSchema = buildArticleSchema({
    siteId: 'ferret-com',
    title: `Can Ferrets Eat ${entry.name}?`,
    description: clamp(entry.shortAnswer, 200),
    url,
    imageUrl: '',
    authorName: 'Ferret.com Editorial',
    publishedAt: '2026-06-15T00:00:00Z',
    modifiedAt: '2026-06-15T00:00:00Z',
  })
  const faqs = foodFaqs(entry)
  const schema = combineSchemas(articleSchema, buildFAQSchema({ questions: faqs }))

  return (
    <ArticleLayout
      siteId="ferret-com"
      hero={{
        title: `Can Ferrets Eat ${entry.name}?`,
        subtitle: entry.shortAnswer,
        category: 'Can Ferrets Eat…',
        categoryHref: '/diet/can-ferrets-eat',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'June 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diet', href: '/diet' },
        { name: 'Can Ferrets Eat…', href: '/diet/can-ferrets-eat' },
        { name: entry.name, href: `/diet/can-ferrets-eat/${entry.slug}` },
      ]}
      relatedLinks={[
        { title: 'Can Ferrets Eat…? (full list)', href: '/diet/can-ferrets-eat' },
        { title: 'Safe Treats for Ferrets', href: '/diet/safe-treats' },
        { title: 'Toxic Foods', href: '/care/toxic-foods' },
        { title: 'Diet & Nutrition Hub', href: '/diet' },
      ]}
      sidebar={
        <>
          {isToxic && (
            <div className="rounded-lg border-2 p-4 mb-4" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
              <div className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: '#b91c1c' }}>If your ferret ate {entry.name.toLowerCase()}</div>
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
              ...related.map((r) => ({ label: `Can ferrets eat ${r.name.toLowerCase()}?`, href: `/diet/can-ferrets-eat/${r.slug}` })),
              { label: 'See the full list', href: '/diet/can-ferrets-eat' },
            ]}
          />
          <CrossPortfolioCard currentSite="ferret-com" contentType="diet" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="ferret-com" title="Ferret Nutrition Notes" subtitle="Evidence-based ferret feeding, monthly." source="can-ferrets-eat" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Ferret.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the ferret-food-spoke checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret-food-spoke checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-ferret-food-spoke-verdict-chart,
            fridge-food-spoke-risk-card, and
            mustelid-food-spoke-handbook notes that
            match this remaining {entry.name} verdict
            (safe / caution / toxic), the obligate-carnivore
            / insulinoma / GI-blockage framing, and the
            ASPCA 888-426-4435 grounding — a laminated
            ferret food-spoke verdict chart so this
            remaining-food map is posted on the fridge
            (not a hub meat-egg chart, not a dog
            food-spoke verdict chart), a fridge
            food-spoke risk card so the plant / sugar /
            fiber notes are labeled in the kitchen (not
            a hub plant-sugar card, not a dog
            food-spoke risk card), and a food-spoke
            handbook so the ASPCA / Pet-Poison-Helpline
            row is a physical kitchen book (not a hub
            food-safety handbook, not a canine
            food-spoke handbook). Educational kitchen
            checklist, not a ranked product list, not a
            substitute for a veterinarian familiar with
            ferrets. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret-food-spoke checklist"
            subtitle="Email the verdict chart, risk card, and food-spoke handbook notes. No spam."
            ctaText="Email my ferret-food-spoke checklist"
            source={`can-ferrets-eat-${entry.slug}-under-hero`}
          />
        </div>

        <div className="rounded-lg border p-5 my-4" style={{ borderColor: meta.color, background: meta.tone === 'good' ? '#f0fdf4' : meta.tone === 'warn' ? '#fffbeb' : '#fef2f2' }}>
          <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-text-light">Verdict</span>
          <div className="font-display font-black text-2xl mt-1" style={{ color: meta.color }}>{meta.label}</div>
          <p className="mt-2 mb-0 text-brand-text-mid">{entry.shortAnswer}</p>
        </div>

        <p>
          Ferrets are <strong>strict obligate carnivores</strong> with a short gut and a roughly three-hour transit time. They thrive on a high-protein, high-fat, very-low-carbohydrate diet of meat, and they cannot digest plant fiber. Dietary sugar and carbohydrate are associated with elevated <Link href="/health/insulinoma" className="amber-link">insulinoma</Link> risk, and fibrous plant matter can cause a dangerous <Link href="/health/gastrointestinal-blockage" className="amber-link">gastrointestinal blockage</Link> — so the right framing for any food is whether it fits a meat-only carnivore.
        </p>

        <h2 id="why">Why</h2>
        <p>{entry.detail}</p>

        {entry.risks?.length ? (
          <>
            <h3>The {entry.verdict === 'safe' ? 'cautions' : 'risks'}</h3>
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
            <h2 id="serve">{entry.verdict === 'safe' ? 'How to serve it safely' : 'What to do instead'}</h2>
            <p>{entry.safePrep}</p>
            {entry.quantity ? (
              <p><strong>How much:</strong> {entry.quantity} For the appropriate options, see <Link href="/diet/safe-treats" className="amber-link">safe treats for ferrets</Link>.</p>
            ) : null}
          </>
        ) : null}

        {entry.symptoms?.length ? (
          <>
            <h2 id="symptoms">Signs of trouble to watch for</h2>
            <ul>{entry.symptoms.map((s) => <li key={s}>{s}</li>)}</ul>
            {entry.whatToDo ? (
              <div className="rounded-lg border p-4 my-3" style={{ borderColor: '#b91c1c', background: '#fef2f2' }}>
                <strong style={{ color: '#b91c1c' }}>If your ferret ate {entry.name.toLowerCase()}:</strong> {entry.whatToDo}
              </div>
            ) : null}
          </>
        ) : null}

        <h2 id="answer">The bottom line</h2>
        <p>
          {entry.verdict === 'safe' && `${entry.name} fits a ferret’s obligate-carnivore diet when served plainly and appropriately. Introduce any new food gradually, and ask a veterinarian familiar with ferrets if your ferret has insulinoma or another condition that shapes the diet.`}
          {entry.verdict === 'caution' && `${entry.name} is not an appropriate ferret food — it is plant matter or sugar an obligate carnivore cannot use, and it works against ferret health. Reach for plain meat, egg, or a single-ingredient meat treat instead.`}
          {entry.verdict === 'toxic' && `${entry.name} is not safe for ferrets. Keep it well out of reach, and if your ferret eats any, contact your veterinarian or ASPCA Animal Poison Control (888-426-4435) right away — do not wait for symptoms.`}
        </p>

        <p className="text-sm text-brand-text-light mt-2">
          See also: <Link href="/diet/safe-treats" className="amber-link">safe treats for ferrets</Link>, <Link href="/care/toxic-foods" className="amber-link">foods toxic to ferrets</Link>, <Link href="/diet/protein-and-fat-requirements" className="amber-link">protein &amp; fat requirements</Link>, and the full <Link href="/diet/can-ferrets-eat" className="amber-link">can-ferrets-eat list</Link>.
        </p>

        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the ferret-food-spoke kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page safe / caution / toxic verdict,
            obligate-carnivore / insulinoma /
            GI-blockage framing, and ASPCA 888-426-4435
            grounding — a laminated ferret food-spoke
            verdict chart, a fridge food-spoke risk
            card, and a mustelid food-spoke handbook.
            Educational kitchen searches only. They are
            not a ranked product list, they are not a
            can-ferrets-eat hub hop, they are not a
            dog food-spoke hop, they are not a flea /
            heartworm / vaccine hop, and they do not
            replace a veterinarian familiar with
            ferrets. Ferret.com earns a commission on
            qualifying purchases at no extra cost to
            you.
          </p>
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="flex flex-col gap-3 mt-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+ferret+food+spoke+verdict+chart?s=can-ferrets-eat-food"
              amazonLabel="Browse laminated ferret food-spoke verdict charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ferret+fridge+food+spoke+risk+card?s=can-ferrets-eat-food"
              amazonLabel="Browse fridge ferret food-spoke risk cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/mustelid+food+spoke+handbook?s=can-ferrets-eat-food"
              amazonLabel="Browse mustelid food-spoke handbooks on Amazon →"
            />
          </div>
        </div>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={faqs} includeSchema={false} />

        <p className="text-xs text-brand-text-light mt-6">
          <em>General educational information from the Ferret.com editorial team, based on obligate-carnivore physiology and established veterinary toxicology references (ASPCA Animal Poison Control, Pet Poison Helpline, and the ferret clinical literature). Not a substitute for veterinary advice — individual ferrets vary. For a suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or a veterinarian familiar with ferrets.</em>
        </p>
      </div>
    </ArticleLayout>
  )
}
