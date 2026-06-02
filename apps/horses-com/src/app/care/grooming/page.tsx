import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Grooming a Horse — Tools, Routine, and Why It Matters",
  description:
    "Reference guide to grooming a horse: the grooming kit, a step-by-step routine, skin and coat health, bonding, and pre-ride safety checks.",
  path: '/care/grooming',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Grooming a Horse — Tools, Routine, and Why It Matters",
  description:
    "Reference guide to grooming a horse: the grooming kit, a step-by-step routine, skin and coat health, bonding, and pre-ride safety checks.",
  url: 'https://horses.com/care/grooming',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "How often should I groom my horse?",
    answer:
      "Ideally daily, and always before and after riding. Daily grooming keeps the skin and coat healthy, prevents tack sores, and gives a regular head-to-toe inspection. Even on non-riding days a quick groom maintains the habit, the bond, and the routine health check.",
    answerText:
      "Ideally daily, and always before and after riding. It keeps skin and coat healthy, prevents tack sores, and provides a daily health check.",
  },
  {
    question: "What order should I groom a horse in?",
    answer:
      "A common order is: pick out the feet, curry the body to lift dirt, dandy brush to flick it away, body brush to finish and to do the face, detangle the mane and tail, and sponge the eyes, nostrils, and dock. Always groom both sides and finish with a hands-on check for heat, swelling, or injury.",
    answerText:
      "Pick out feet, curry, dandy brush, body brush (including face), detangle mane and tail, sponge eyes and dock. Groom both sides and finish with a hands-on check.",
  },
  {
    question: "Can over-grooming damage a horse's coat?",
    answer:
      "Excessive or harsh brushing, frequent shampooing, and stripping the coat can remove the natural oils that weatherproof it, leaving the coat dry and the skin irritated. Regular, gentle grooming is beneficial; aggressive scrubbing and over-bathing are not. Use soft brushes on sensitive areas and limit shampooing.",
    answerText:
      "Yes -- harsh brushing and frequent shampooing strip protective oils and irritate skin. Gentle regular grooming helps; aggressive scrubbing and over-bathing do not.",
  },
]

export default function GroomingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        hero={{
          title: "Grooming a Horse",
          subtitle:
            "Grooming is far more than making a horse look tidy. It cleans the coat and skin, stimulates circulation, distributes natural oils, lets you check every inch of the horse for injuries and problems, and builds the relationship between horse and handler. A good grooming routine is daily preventive care disguised as a pleasant ritual. This is reference material to complement hands-on instruction.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Grooming the Horse", href: '/care/grooming' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why Groom", href: "#why" },
            { label: "The Grooming Kit", href: "#kit" },
            { label: "The Routine", href: "#routine" },
            { label: "Skin and Coat Health", href: "#skin" },
            { label: "Grooming as a Safety Check", href: "#check" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
              { label: "Body Clipping", href: "/care/body-clipping" },
              { label: "Rain Rot", href: "/health/rain-rot" },
              { label: "Sweet Itch", href: "/health/sweet-itch" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-grooming"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="why">Why Groom</h2>
          <p>Grooming removes mud, sweat, and dead hair; massages the skin and stimulates blood flow; spreads the protective oils that keep the coat weatherproof; and prevents girth galls and saddle sores by ensuring no dirt or debris sits under the tack. It is also one of the most reliable ways to handle a horse calmly every day, reinforcing trust and good manners. And it doubles as a daily head-to-toe inspection.</p>

          <h2 id="kit">The Grooming Kit</h2>
          <ul>
            <li><strong>Curry comb</strong> -- a rubber or plastic comb used in circular motions to lift dirt and loose hair from the body.</li>
            <li><strong>Dandy brush</strong> -- a stiff-bristled brush to flick away the lifted dirt, used on the body but not the sensitive face.</li>
            <li><strong>Body brush</strong> -- a soft brush that removes fine dust and lays the coat, safe for the face and bony areas.</li>
            <li><strong>Mane and tail comb or brush</strong> used gently to avoid pulling out hair.</li>
            <li><strong>Hoof pick</strong> for cleaning out the feet.</li>
            <li><strong>Sponges and towels</strong> for the eyes, nostrils, and dock, kept separate for clean and dirty areas.</li>
          </ul>

          <h2 id="routine">The Routine</h2>
          <p>A typical order: pick out the feet first; curry the body in circular motions to bring dirt to the surface, avoiding bony areas; follow with the dandy brush to flick the dirt away; use the body brush for a finishing layer and on the head; gently detangle the mane and tail; sponge the eyes, nostrils, and dock; and finish by checking the whole horse over. Always groom on both sides and work calmly, watching the horse&apos;s responses.</p>

          <h2 id="skin">Skin and Coat Health</h2>
          <p>Regular grooming keeps skin conditions at bay and surfaces them early. While grooming you can spot rain rot scabs, sweet-itch rubbing, ticks and bites, fungal patches, girth-area soreness, and the first signs of injury. A glossy, even coat is a good general indicator of health and nutrition, while a dull, staring coat can prompt a closer look at diet, parasites, or illness.</p>

          <h2 id="check">Grooming as a Safety Check</h2>
          <p>Run your hands as well as the brushes over the horse. Feel for heat, swelling, cuts, lumps, and reactions to pressure; check the legs and feet carefully; and note anything new. Catching a small wound, a filling leg, or a developing girth gall during grooming turns a potential problem into a quick fix. The pre-ride groom is also the moment to confirm the horse is sound and comfortable before tacking up.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Pony Club and 4-H horsemanship manuals, current editions (grooming and turnout).</li>
            <li>Scott DW, Miller WH. Equine Dermatology, 2nd ed., Elsevier, 2011 (skin and coat health).</li>
            <li>American Association of Equine Practitioners. “Grooming and Daily Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
