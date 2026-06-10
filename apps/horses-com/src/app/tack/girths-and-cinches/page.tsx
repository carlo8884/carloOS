import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
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
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Saddle Pads and Numnahs', href: '/tack/saddle-pads' },
          { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
          { title: 'Boots and Wraps', href: '/tack/boots-and-wraps' },
        ]}
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
            { label: "Girth Picks", href: "#picks" },
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
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
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
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

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

          <h2 id="picks">Girth Picks</h2>
          <p>A few widely-stocked girth and cinch types covering the common English and Western needs. A clean girth in the correct shape and size, tightened gradually, prevents most girth galls — the product matters less than fit and hygiene. This is a documented-spec comparison drawing on standard US equestrian retail; this page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          <ScoreMethodology />

          <ReviewCard
            id="anatomic-english-girth"
            badge="English Everyday"
            name="Anatomic / Shaped English Girth"
            subtitle="Contoured shape to relieve the elbow and reduce galls"
            score={8.6}
            winner
            description={<>
              <p>A shaped or anatomic English girth is cut back behind the elbow to reduce pinching and rubbing in the girth groove — a common upgrade for horses prone to galls or girthiness from a straight girth. Synthetic and leather versions both work; the key is a clean surface, the right size, and gradual tightening.</p>
              <p>Reasonable choice for: any English-saddle horse, and especially one showing girth-area rubs or sensitivity under a straight girth.</p>
            </>}
            specs={[
              { label: 'Shape', value: 'Anatomic / elbow-relief cut', highlight: 'good' },
              { label: 'Material', value: 'Leather or synthetic' },
              { label: 'Best use case', value: 'English schooling and showing' },
            ]}
            pros={['Relieves elbow-area pinching', 'Reduces girth-gall risk', 'Available in leather and synthetic']}
            cons={['Anatomic leather versions are pricier', 'Still needs correct size and clean surface']}
            price="$45–140"
            ctaText="Compare at Dover Saddlery →"
            ctaHref="/go/dover/anatomic-english-girth?s=tack-girths-and-cinches"
            ctaAffiliateProgram="dover"
            ctaAffiliateProduct="anatomic-english-girth"
          />

          <ReviewCard
            id="mohair-cinch"
            badge="Western"
            name="Mohair / Roper Western Cinch"
            subtitle="Breathable natural-fiber cinch for long rides"
            score={8.5}
            description={<>
              <p>A mohair (or mohair-blend) roper cinch is a traditional Western choice valued for breathability and the way natural fibers wick moisture and resist galling on long working rides. Straight or roper cuts suit most working horses; correct width and gradual tightening matter as much as material.</p>
              <p>Most relevant for trail, ranch, and Western performance riders who want a breathable natural-fiber cinch for extended time in the saddle.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Mohair or mohair blend', highlight: 'good' },
              { label: 'Cut', value: 'Straight or roper' },
              { label: 'Best use case', value: 'Western, long working rides' },
            ]}
            pros={['Breathable and moisture-wicking', 'Natural fiber resists galling', 'Traditional, durable construction']}
            cons={['Natural fiber needs cleaning to last', 'Pure mohair costs more than synthetic', 'Width must match the horse']}
            price="$40–120"
            ctaText="Compare at Schneiders →"
            ctaHref="/go/schneider/mohair-roper-cinch?s=tack-girths-and-cinches"
            ctaAffiliateProgram="schneider"
            ctaAffiliateProduct="mohair-roper-cinch"
          />

          <ReviewCard
            id="fleece-girth-cover"
            badge="Gall Prevention"
            name="Sheepskin / Fleece Girth Cover"
            subtitle="Cushioning sleeve to reduce friction on sensitive horses"
            score={8.1}
            description={<>
              <p>A sheepskin or fleece girth cover slips over an existing girth to add a soft, friction-reducing layer for horses with thin skin or a history of galls. It is a supportive measure, not a fix for a wrong-size or dirty girth — keep both the cover and the coat clean, since trapped dirt under fleece can itself cause rubs.</p>
              <p>Most relevant for gall-prone or thin-skinned horses already in a correctly sized girth that still shows minor friction.</p>
            </>}
            specs={[
              { label: 'Material', value: 'Sheepskin or synthetic fleece' },
              { label: 'Use', value: 'Slips over an existing girth' },
              { label: 'Best use case', value: 'Gall-prone, thin-skinned horses' },
            ]}
            pros={['Adds friction-reducing cushioning', 'Fits over most existing girths', 'Inexpensive insurance for sensitive horses']}
            cons={['Not a fix for a wrong-size girth', 'Traps dirt if not cleaned', 'Adds bulk that can affect fit']}
            price="$18–45"
            ctaText="Compare at SmartPak →"
            ctaHref="/go/smartpak/fleece-girth-cover?s=tack-girths-and-cinches"
            ctaAffiliateProgram="smartpak"
            ctaAffiliateProduct="fleece-girth-cover"
          />

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
