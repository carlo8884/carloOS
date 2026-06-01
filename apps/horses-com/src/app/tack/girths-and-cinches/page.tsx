import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Girths and Cinches — Types, Fit, and Preventing Girth Galls",
  description:
    "Reference guide to girths and cinches: what they do, English girth and western cinch types, materials, fit, and preventing girth galls and girthiness.",
  path: '/tack/girths-and-cinches',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Girths and Cinches — Types, Fit, and Preventing Girth Galls",
  description:
    "Reference guide to girths and cinches: what they do, English girth and western cinch types, materials, fit, and preventing girth galls and girthiness.",
  url: 'https://horses.com/tack/girths-and-cinches',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "How tight should a girth be?",
    answer:
      "Tight enough that the saddle stays stable and cannot slip, but no tighter. Tighten gradually -- snug at the mounting block, then check and adjust after walking on and warming up -- rather than yanking it tight all at once, and always smooth out skin wrinkles underneath. An over-tight girth restricts movement and causes resentment.",
    answerText:
      "Tight enough that the saddle cannot slip, no more. Tighten gradually and recheck after warming up, smoothing skin wrinkles underneath. Over-tight girths restrict movement and cause resentment.",
  },
  {
    question: "What causes girth galls?",
    answer:
      "Girth galls are friction sores in the girth area caused by a dirty girth or coat, a poorly fitting or wrong-shaped girth, skin pinched in wrinkles, or sudden hard tightening. They are prevented with a clean girth and coat, correct fit, gradual tightening, smoothing the skin underneath, and a girth shape that suits the horse.",
    answerText:
      "Friction from a dirty or ill-fitting girth, pinched skin wrinkles, or hard tightening. Prevented with cleanliness, correct fit, gradual tightening, and smoothing the skin underneath.",
  },
  {
    question: "Why does my horse get grumpy when I tack up the girth?",
    answer:
      "Girthiness -- pinning ears, biting, or tensing at girthing -- can be learned discomfort from past galls or rough girthing, but it can also signal real pain such as gastric ulcers. Persistent girthiness warrants checking the girth fit and tightening technique and, if it continues, a veterinary investigation rather than treating it as bad behavior.",
    answerText:
      "Girthiness can be learned discomfort from past galls or rough girthing, but can also signal pain like gastric ulcers. Check fit and technique, and if it persists, involve a vet.",
  },
]

export default function GirthsCinchesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Girths and Cinches",
          subtitle:
            "The girth (English) or cinch (western) is the strap that holds the saddle on the horse, and despite its simplicity it has an outsized effect on comfort and behavior. A poorly fitting or roughly tightened girth causes painful galls, restricts movement, and creates the resentful behavior owners call girthiness. Choosing and fitting it well is a small detail that pays off every ride. This is reference material to inform choices alongside a saddle fitter or instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Girths and Cinches", href: '/tack/girths-and-cinches' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What the Girth Does", href: "#what" },
            { label: "English Girths", href: "#english" },
            { label: "Western Cinches", href: "#western" },
            { label: "Fit and Tightening", href: "#fit" },
            { label: "Girth Galls and Girthiness", href: "#galls" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
              { label: "Saddle Pads", href: "/tack/saddle-pads" },
              { label: "Grooming the Horse", href: "/care/grooming" },
              { label: "Equine Gastric Ulcers", href: "/health/equine-ulcers" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-girths"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What the Girth Does</h2>
          <p>The girth passes under the barrel just behind the elbows and fastens to the saddle on both sides, holding it securely in place against the forces of riding. Because it sits in the sensitive girth groove and moves against the skin with every stride, its material, shape, and fit directly affect the horse&apos;s comfort and freedom of movement. It must be secure enough that the saddle cannot slip, without being so tight or ill-shaped that it pinches or rubs.</p>

          <h2 id="english">English Girths</h2>
          <ul>
            <li><strong>Straight girths</strong> of leather, synthetic, or padded materials -- the basic form.</li>
            <li><strong>Anatomical or shaped girths</strong> curved to free the elbow and reduce pressure behind it, easing girthiness.</li>
            <li><strong>Stud-guard and short dressage girths</strong> for jumping (protecting the belly) and dressage (used with long billets and a monoflap saddle).</li>
            <li><strong>Materials</strong> -- leather, neoprene, fleece-lined, string, and breathable synthetics, varying in grip, comfort, and ease of cleaning.</li>
          </ul>

          <h2 id="western">Western Cinches</h2>
          <p>The western cinch attaches to the saddle by long latigo straps and a cinch ring. Cinches are commonly made of woven mohair, felt, fleece, or neoprene, with mohair prized for breathability and comfort. A western saddle may use a single front cinch or, for harder stopping and roping work, an additional rear cinch (the back cinch must be snugged so a hind foot cannot get caught, and connected to the front cinch). Material and width are chosen for the horse&apos;s comfort over long miles.</p>

          <h2 id="fit">Fit and Tightening</h2>
          <p>A girth should be the right length so the buckles or rings sit clear of the elbow and skin, of a width and shape that suits the horse, and positioned in the natural girth groove rather than dragged forward against the elbow. Tighten gradually -- snug enough at the mounting block to keep the saddle stable, then check and adjust after walking on and warming up, rather than yanking it tight all at once. Always smooth the skin under the girth (or pull the forelegs forward) to remove wrinkles that cause rubs.</p>

          <h2 id="galls">Girth Galls and Girthiness</h2>
          <p>Girth galls are painful sores or rubs in the girth area, caused by friction, dirt, a poorly fitting girth, or skin pinched in wrinkles. Prevent them with a clean girth and coat, correct fit, gradual tightening, and a girth shape suited to the horse. Girthiness -- the horse pinning its ears, biting, or tensing when girthed -- can be learned discomfort from past galls or rough girthing, but can also signal pain such as gastric ulcers, so persistent girthiness warrants checking fit and, if it continues, a veterinary look rather than just discipline.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (tack and saddling).</li>
            <li>Society of Master Saddlers. Girthing and saddle-fit guidance. mastersaddlers.co.uk.</li>
            <li>Research on girth pressure and equine comfort, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
