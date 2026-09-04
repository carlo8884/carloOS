import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "How to Pick Out a Horse’s Hooves — Step by Step",
  description:
    "Reference guide to picking out a horse’s hooves: why it matters, how to do it safely step by step, what to look for, and how often.",
  path: '/care/hoof-picking',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "How to Pick Out a Horse’s Hooves — Step by Step",
  description:
    "Reference guide to picking out a horse’s hooves: why it matters, how to do it safely step by step, what to look for, and how often.",
  url: 'https://horses.com/care/hoof-picking',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',
})

const FAQS = [
  {
    question: "Which way do I pick out a hoof?",
    answer:
      "Always work from the heel toward the toe. Pushing the pick in that direction clears debris out of the foot without driving it into the soft, sensitive tissues at the back of the frog and heel. Pay particular attention to the grooves on either side of the frog.",
    answerText:
      "Work from heel toward toe so you clear debris out rather than driving it into the sensitive heel. Focus on the frog grooves.",
  },
  {
    question: "How often should I pick out my horse's feet?",
    answer:
      "At least once a day, plus before and after every ride. Horses in wet or muddy footing or with a history of thrush or abscesses benefit from more frequent checks. Daily picking is the simplest way to catch stones, thrush, and early hoof problems before they cause lameness.",
    answerText:
      "At least daily, plus before and after riding. More often in wet conditions or with a history of foot problems. It catches issues before they cause lameness.",
  },
  {
    question: "What if my horse won't pick up its feet?",
    answer:
      "A horse that resists lifting its feet needs patient, consistent training -- running a hand down the leg, applying gentle pressure at the fetlock, and rewarding the lift. Persistent resistance can also signal pain. If a horse suddenly refuses or seems sore, involve a trainer or veterinarian rather than forcing it.",
    answerText:
      "Train it patiently by running a hand down the leg and rewarding the lift. Sudden refusal or soreness can signal pain -- involve a trainer or vet.",
  },
]

export default function HoofPickingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Hoof Care Basics', href: '/care/hoof-care-basics' },
          { title: 'Farrier Schedule', href: '/care/farrier-schedule' },
          { title: 'Abscess', href: '/health/abscess' },
        ]}
        hero={{
          title: "Picking Out a Horse's Hooves",
          subtitle:
            "Picking out the feet is the most basic, most frequent, and arguably most important hands-on task in daily horse care. It clears the debris that hides stones and packs the frog grooves, and it gives you a daily look at each foot to catch problems early. Done well it takes a minute per foot and becomes second nature. This is reference material to complement hands-on instruction.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "7 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Picking Out the Hooves", href: '/care/hoof-picking' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Pick Out the Feet", href: "#why" },
            { label: "What You Need", href: "#tools" },
            { label: "Hoof-Picking Kit", href: "#kit" },
            { label: "Step by Step", href: "#steps" },
            { label: "What to Look For", href: "#look" },
            { label: "How Often", href: "#often" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Hoof Care Basics", href: "/care/hoof-care-basics" },
              { label: "Thrush", href: "/health/thrush" },
              { label: "Hoof Abscess", href: "/health/abscess" },
              { label: "Grooming the Horse", href: "/care/grooming" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-hoof-picking"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-04"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the hoof-picking checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse hoof-picking checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the everyday kit — a simple hoof pick, ideally one with
              a stiff brush on the back to sweep the cleaned sole — so you
              are not hunting tools mid-pick. Educational checklist, not a
              diagnosis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse hoof-picking checklist"
              subtitle="Email the hoof-pick and stiff-brush order. No spam."
              ctaText="Email my hoof-picking checklist"
              source="care-hoof-picking-under-hero"
            />
          </div>

          <h2 id="why">Why Pick Out the Feet</h2>
          <p>Horses pack mud, manure, bedding, and stones into the foot constantly. Left there, debris traps moisture and bacteria that cause thrush, hides a lodged stone that bruises the sole, and conceals early cracks or punctures. Picking out is both cleaning and inspection: it is the single best routine for catching foot problems while they are still small.</p>

          <h2 id="tools">What You Need</h2>
          <p>A simple hoof pick, ideally one with a stiff brush on the back to sweep the cleaned sole. That is all -- the value is in doing it consistently and thoroughly, not in fancy equipment. A safe, level place to work and a horse that has been taught to lift its feet make the job quick and safe.</p>

          <h2 id="kit">Hoof-Picking Kit</h2>
          <p>Everyday physical supplies that match the tools described above — a simple hoof pick, and a pick with a stiff brush on the back. These are not treatments for thrush, abscess, or any medical condition; heat, a foul smell, a lodged puncture, or sudden refusal to pick up a foot belongs with your veterinarian or farrier, not a pick. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (hoof-picking kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page tools copy, not thrush / abscess treatments. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the hoof-picking kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page tools copy — a
              simple hoof pick, and a hoof pick with a stiff brush to sweep
              the cleaned sole. Everyday physical supplies only. They are
              not a ranked product list, they are not treatments for thrush,
              abscess, or any medical condition, and they do not replace a
              veterinarian or farrier. Horses.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+pick?s=care-hoof-picking"
                amazonLabel="Browse horse hoof picks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+pick+brush?s=care-hoof-picking"
                amazonLabel="Browse horse hoof picks with brush on Amazon →"
              />
            </div>
          </div>

          <h2 id="steps">Step by Step</h2>
          <ul>
            <li>Stand at the shoulder or hip facing the rear, run your hand down the back of the leg, and ask the horse to lift the foot.</li>
            <li>Support the foot in one hand and work from heel toward toe so you never drive debris into the soft heel.</li>
            <li>Clean out the frog grooves (the sulci) on either side and in the center, where debris and thrush accumulate.</li>
            <li>Clear the sole and the edges along the wall and shoe, then brush the foot clean to inspect it.</li>
            <li>Set the foot down gently rather than dropping it, and repeat on all four.</li>
          </ul>

          <h2 id="look">What to Look For</h2>
          <ul>
            <li>Lodged stones, nails, or other punctures.</li>
            <li>A foul smell or black discharge in the frog grooves (thrush).</li>
            <li>Cracks, chips, or flares in the wall.</li>
            <li>Loose shoes, risen clenches, or sprung shoes if shod.</li>
            <li>Heat, sensitivity, or a bounding digital pulse felt while handling the foot.</li>
          </ul>

          <h2 id="often">How Often</h2>
          <p>Pick out the feet at least once daily, and always before and after riding. Horses in wet or muddy conditions, or with a history of thrush or abscess, benefit from extra checks. The daily habit is what turns hoof problems from emergencies into early, easily managed findings.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Pony Club and 4-H horsemanship manuals, current editions (foot handling and daily care).</li>
            <li>American Association of Equine Practitioners. “Daily Hoof Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
