import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

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
  modifiedAt: '2026-06-01T00:00:00Z',
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
const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function HoofPickingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
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
          <h2 id="why">Why Pick Out the Feet</h2>
          <p>Horses pack mud, manure, bedding, and stones into the foot constantly. Left there, debris traps moisture and bacteria that cause thrush, hides a lodged stone that bruises the sole, and conceals early cracks or punctures. Picking out is both cleaning and inspection: it is the single best routine for catching foot problems while they are still small.</p>

          <h2 id="tools">What You Need</h2>
          <p>A simple hoof pick, ideally one with a stiff brush on the back to sweep the cleaned sole. That is all -- the value is in doing it consistently and thoroughly, not in fancy equipment. A safe, level place to work and a horse that has been taught to lift its feet make the job quick and safe.</p>

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
