import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Barrel Racing — The Cloverleaf Pattern, Horses, and Gear",
  description:
    "Reference overview of barrel racing: the cloverleaf pattern and timing, the ideal barrel horse, breeds, tack and safety, and the governing bodies.",
  path: '/disciplines/barrel-racing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Barrel Racing — The Cloverleaf Pattern, Horses, and Gear",
  description:
    "Reference overview of barrel racing: the cloverleaf pattern and timing, the ideal barrel horse, breeds, tack and safety, and the governing bodies.",
  url: 'https://horses.com/disciplines/barrel-racing',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the barrel racing pattern?",
    answer:
      "Barrel racing is run on a cloverleaf pattern of three barrels set in a triangle. The rider runs to the first barrel (right or left), then the second, then the farthest third barrel, turning tightly around each without knocking it over, and sprints back across the timer. Knocking a barrel down adds a time penalty, usually five seconds.",
    answerText:
      "A cloverleaf of three barrels in a triangle -- run to the first, then second, then farthest third, turning tightly around each, then sprint home. Knocking a barrel adds a time penalty.",
  },
  {
    question: "What breed makes the best barrel horse?",
    answer:
      "The American Quarter Horse dominates barrel racing, prized for explosive acceleration and the cow-bred agility to rate into and out of tight turns. Thoroughbred and Quarter-Thoroughbred crosses are also competitive for added speed. Beyond breeding, the best barrel horses are bold, careful around the barrels, and mentally tough under the adrenaline of a run.",
    answerText:
      "The American Quarter Horse dominates for acceleration and agility, with Thoroughbred crosses competitive for speed. Boldness, care around barrels, and mental toughness matter beyond breed.",
  },
  {
    question: "Is barrel racing hard on horses?",
    answer:
      "The high speed combined with tight, sharp turning places real demands on a barrel horse's legs and body, making conditioning, soundness, correct shoeing, and protective boots important. Responsible barrel racers prioritize fitness and veterinary and farrier care, and good arena footing is critical to reduce the risk of injury at speed.",
    answerText:
      "Yes -- high speed plus tight turns stress the legs and body, so conditioning, soundness, shoeing, protective boots, and good footing are all important to compete responsibly.",
  },
]

export default function BarrelRacingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Reining', href: '/disciplines/reining' },
          { title: 'Ranch Riding', href: '/disciplines/ranch-riding' },
          { title: 'Western Pleasure', href: '/disciplines/western-pleasure' },
        ]}
        hero={{
          title: "Barrel Racing",
          subtitle:
            "Barrel racing is the fast, electric rodeo speed event in which horse and rider sprint a cloverleaf pattern around three barrels against the clock, with thousandths of a second separating winners. It rewards raw speed, athletic agility, and a tight partnership between a brave rider and a hot, handy horse. This overview covers the pattern, the horses, the gear, and where the sport is governed. It describes how the discipline is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Barrel Racing", href: '/disciplines/barrel-racing' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Barrel Racing Is", href: "#what" },
            { label: "The Cloverleaf Pattern", href: "#pattern" },
            { label: "The Barrel Horse", href: "#horse" },
            { label: "Tack and Safety", href: "#tack" },
            { label: "Getting Started", href: "#start" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "American Quarter Horse", href: "/breeds/quarter-horse" },
              { label: "Reining", href: "/disciplines/reining" },
              { label: "Western Pleasure", href: "/disciplines/western-pleasure" },
              { label: "Feeding the Performance Horse", href: "/nutrition/feeding-the-performance-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-barrel-racing"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Barrel Racing Is</h2>
          <p>Barrel racing is a timed speed event most associated with rodeo and traditionally a women&apos;s event at the professional level. The horse and rider enter the arena at a gallop, run a set pattern around three barrels, and sprint back across the timer line, with the fastest clean run winning. It is one of the most popular grassroots horse sports in North America, with classes from local jackpots to professional rodeo finals, and an electronic timer to hundredths or thousandths of a second.</p>

          <h2 id="pattern">The Cloverleaf Pattern</h2>
          <p>The standard course is a cloverleaf: three barrels set in a triangle. The rider may take the right or left barrel first, then runs to the second barrel, then the farthest third barrel, and sprints home, turning tightly around each barrel without knocking it over. Knocking a barrel down incurs a time penalty (commonly five seconds) that usually ends any hope of placing, and going off pattern means a no-time. The skill is in carrying speed while turning as tight and balanced as possible around each barrel.</p>

          <h2 id="horse">The Barrel Horse</h2>
          <p>The ideal barrel horse combines explosive speed with the agility to rate (collect and set up) into a tight turn and rocket out of it. The American Quarter Horse dominates the sport, prized for its acceleration and cow-bred athleticism, with Thoroughbred and Quarter-Thoroughbred crosses also competitive for added speed. Beyond breeding, the best barrel horses are bold, careful around the barrels, and mentally tough enough to handle the adrenaline of a run.</p>

          <h2 id="tack">Tack and Safety</h2>
          <p>Barrel racers ride in western saddles, often lightweight barrel-specific saddles with a high horn and secure seat, with the horse typically in a curb bit or a gag bit chosen for the individual, plus protective leg boots and bell boots given the speed and tight turns. Good footing is critical at speed, and helmets, though not universal in western tradition, are increasingly worn for safety. The combination of high speed and sharp turning makes sound legs, correct shoeing, and protective boots especially important.</p>

          <h2 id="start">Getting Started</h2>
          <p>Newcomers usually begin at local jackpots and 4-H or saddle-club events, learning the pattern at slower speeds before adding pace, ideally with coaching and on an experienced, sensible horse. Because the sport asks so much of the horse&apos;s body, conditioning, soundness, and feeding are part of the game -- see the performance feeding guide. The sport is governed in professional rodeo and through associations such as the WPRA (Women&apos;s Professional Rodeo Association) and the NBHA (National Barrel Horse Association); find a local club to learn the rules and ride in events.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Women&apos;s Professional Rodeo Association (WPRA). Barrel racing rules and resources. wpra.com.</li>
            <li>National Barrel Horse Association (NBHA). Pattern and competition rules. nbha.com.</li>
            <li>American Quarter Horse Association. Speed-event and barrel resources. aqha.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
