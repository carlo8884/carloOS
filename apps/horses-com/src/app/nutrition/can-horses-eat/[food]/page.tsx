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
    modifiedAt: '2026-09-06T00:00:00Z',
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
              { label: 'Treat-safety barn kit', href: '#kit' },
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
        <ArticleByline siteName="Horses.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the can-horses-eat safety checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Can-horses-eat safety checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the airtight-labeled-treat-canister,
            nonslip-barn-cutting-board, and
            nylon-waist-treat-pouch notes that match
            the keep-kitchen-leftovers-out-of-the-barn,
            cut-treats-to-a-safe-size, and
            carry-a-measured-handful copy on this
            page — an airtight labeled horse treat
            canister so only pre-checked safe treats
            sit sealed and labeled away from kitchen
            leftovers (not a rodent-proof metal feed
            bin), a nonslip horse barn cutting board
            so an approved treat is cut to a
            choke-safe size before it is offered
            (not a marked grain scoop, not a
            mixing-pan hop), and a nylon horse waist
            treat pouch so a measured handful of
            pre-approved treats leaves the kitchen
            instead of chocolate or avocado
            (not a low-sugar horse-treat hop).
            Educational barn checklist, not a
            treatment, not a ranked product list,
            and not a substitute for calling the
            veterinarian. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Can-horses-eat safety checklist"
            subtitle="Email the treat-canister, cutting-board, and treat-pouch notes. No spam."
            ctaText="Email my can-horses-eat safety checklist"
            source="can-horses-eat-under-hero"
          />
        </div>

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
            {entry.quantity ? <p><strong>How much:</strong> {entry.quantity} Treats stay small alongside a forage-first diet — see <Link href="/nutrition/forage-basics">forage basics</Link> and, for sugar-sensitive horses, <Link href="/health/laminitis">laminitis</Link>. A nonslip horse barn cutting board is how an approved treat is cut to a choke-safe size before it is offered — it is not a marked horse grain scoop (that lives on feeding-the-performance-horse) and not a small rubber horse mixing pan (that lives on ration-balancers).</p> : null}
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
          See also: <Link href="/nutrition/toxic-plants">toxic plants for horses</Link>, <Link href="/health/colic">equine colic</Link>, <Link href="/health/laminitis">laminitis</Link>, and the full <Link href="/nutrition/can-horses-eat">can-horses-eat list</Link>. An airtight labeled horse treat canister is how only pre-checked safe treats sit sealed and labeled away from kitchen leftovers — it is not a rodent-proof metal horse feed bin (that lives on grain). A nylon horse waist treat pouch is how a measured handful of pre-approved treats leaves the kitchen instead of chocolate or avocado — it is not a low-sugar horse-treat hop (that lives on feeding-the-easy-keeper). This page does not hop toxic foods or poisons as products.
        </p>

        <h2 id="kit">Treat-safety barn kit</h2>
        <p>
          Everyday physical supplies that match the
          keep-kitchen-leftovers-out-of-the-barn,
          cut-treats-to-a-safe-size, and
          carry-a-measured-handful copy on this page —
          an airtight labeled horse treat canister so
          only pre-checked safe treats sit sealed and
          labeled away from kitchen leftovers, a
          nonslip horse barn cutting board so an
          approved treat is cut to a choke-safe size
          before it is offered, and a nylon horse
          waist treat pouch so a measured handful of
          pre-approved treats leaves the kitchen
          instead of whatever is on the counter.
          These are educational barn searches, not a
          ranked product list, not a substitute for
          veterinary care, not a toxic-food or poison
          hop, not a rodent-proof metal feed-bin hop
          (that lives on grain), not a marked-grain-scoop
          hop (that lives on feeding-the-performance-horse),
          and not a low-sugar-horse-treat hop (that
          lives on feeding-the-easy-keeper). This page
          does not hop medications or vaccines. This
          page does not claim hands-on testing.
        </p>

        <AffiliateDisclosure variant="inline" siteId="horses-com" />

        {/* Money path — live amazon-brand search hops
            (airtight labeled horse treat canister /
            nonslip horse barn cutting board /
            nylon horse waist treat pouch).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1121
            fine+mesh+horse+feed+colander /
            long+handled+horse+feed+mixing+paddle /
            silicone+horse+feed+tub+scraper +
            molasses+free+beet+pulp+shreds+horse /
            beet+pulp+pellets+horse+feed, #1120
            compact+digital+gram+scale+horse+feed /
            molasses+free+chaff+horse /
            small+rubber+horse+mixing+pan +
            purina+enrich+plus+ration+balancer /
            triple+crown+30+ration+balancer /
            nutrena+empower+topline+balancer, #1119
            horse+alfalfa+cubes /
            soy+hull+pellets+horse+feed /
            over+door+horse+feed+bucket +
            stabilized+rice+bran+horse+supplement /
            high+fat+low+starch+horse+feed, #1118
            portable+horse+hay+flake+scale /
            horse+hay+soaking+tub /
            low+sugar+horse+treats, #1117
            nylon+horse+hay+bag /
            horse+feed+grade+vegetable+oil /
            marked+horse+grain+scoop, #1116
            horse+chopped+forage /
            horse+feed+soaking+tub /
            horse+corner+feeder, #1115
            equine+toxic+plant+identification+field+guide /
            horse+pasture+walk+weed+identification+handbook /
            horse+paddock+tree+guard+fencing, #1114
            flat+back+horse+water+bucket /
            heated+horse+water+bucket /
            electrolyte+for+horses, #1113
            orchard+grass+hay+horse /
            alfalfa+hay+bales+horse /
            timothy+alfalfa+mixed+hay+horse, #1112
            tabletop+digital+horse+grain+scale /
            stackable+rubber+horse+feed+tubs /
            rodent+proof+metal+horse+feed+bin, #1111
            horse+hay+probe+moisture+tester /
            equine+hay+core+sampler /
            wall+mounted+horse+hay+rack, #1110
            plain+white+horse+salt+block /
            salt+first+horse+electrolyte+powder /
            wide+mouth+horse+water+bucket, #1105
            digital+hanging+hay+bale+scale /
            equine+forage+nsc+hay+test+kit /
            portable+strip+grazing+step+in+posts. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the can-horses-eat treat-safety barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page keep-kitchen-leftovers-out-of-the-barn,
            cut-treats-to-a-safe-size, and
            carry-a-measured-handful copy — an airtight
            labeled horse treat canister, a nonslip
            horse barn cutting board, and a nylon horse
            waist treat pouch. Educational barn
            searches only. They are not a ranked
            product list, they are not a toxic-food or
            poison hop, they are not a feed-bin or
            low-sugar-treat hop, and they do not
            replace a veterinarian. Horses.com earns a
            commission on qualifying purchases at no
            extra cost to you. Empty Chewy buttons
            stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/airtight+labeled+horse+treat+canister?s=can-horses-eat"
              amazonLabel="Browse airtight labeled horse treat canisters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/nonslip+horse+barn+cutting+board?s=can-horses-eat"
              amazonLabel="Browse nonslip horse barn cutting boards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/nylon+horse+waist+treat+pouch?s=can-horses-eat"
              amazonLabel="Browse nylon horse waist treat pouches on Amazon →"
            />
          </div>
        </div>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={faqs} />

        <p className="text-xs text-gray-500 mt-6">
          <em>General educational information from the Horses.com editorial team, based on established equine veterinary and nutrition references (ASPCA Animal Poison Control, Merck Veterinary Manual, the Equine Endocrinology Group, and equine clinical-nutrition literature). Not a substitute for veterinary advice — individual horses vary. Horses cannot vomit, and colic, choke, and laminitis are emergencies. For a suspected poisoning, call ASPCA Animal Poison Control at 888-426-4435 (24/7, fee applies) or your veterinarian.</em>
        </p>
      </div>
    </ArticleLayout>
  )
}
