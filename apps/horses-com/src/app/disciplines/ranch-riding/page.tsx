import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Ranch Riding — The Working Horse Pattern Class",
  description:
    "Reference overview of ranch riding: the pattern class celebrating the working ranch horse, gaits and maneuvers, the forward natural way of going, and governing bodies.",
  path: '/disciplines/ranch-riding',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Ranch Riding — The Working Horse Pattern Class",
  description:
    "Reference overview of ranch riding: the pattern class celebrating the working ranch horse, gaits and maneuvers, the forward natural way of going, and governing bodies.",
  url: 'https://horses.com/disciplines/ranch-riding',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "How is ranch riding different from western pleasure?",
    answer:
      "Ranch riding rewards a forward, natural, ground-covering way of going with the head carried naturally, while traditional western pleasure rewarded a very slow, low-headed, collected style that grew increasingly artificial. Ranch riding penalizes excessive slowness and an artificially low head, asking instead for a horse that looks like a genuine working partner.",
    answerText:
      "Ranch riding rewards forward, natural, ground-covering movement with a natural head carriage, whereas western pleasure favored a very slow, low-headed style. Ranch riding penalizes artificial slowness.",
  },
  {
    question: "What maneuvers are in a ranch riding pattern?",
    answer:
      "A ranch riding pattern includes walk, trot, and lope in both directions, an extended trot and extended lope showing real forward movement, stops, backing, and changes of direction and lead, sometimes with a log or obstacle to ride over. The horse is judged on correctness, smoothness, willingness, and the natural quality of its movement.",
    answerText:
      "Walk, trot, and lope both ways, plus extended trot and lope, stops, backing, lead changes, and sometimes an obstacle -- judged on correctness, smoothness, willingness, and natural movement.",
  },
  {
    question: "What horses are used in ranch riding?",
    answer:
      "Stock breeds dominate ranch riding -- the American Quarter Horse above all, with Paint and Appaloosa horses common -- reflecting its western ranch-work roots. The ideal is a broke, sensible, naturally moving horse with a willing attitude and the substance to look like it works for a living, which suits a wide range of honest using horses.",
    answerText:
      "Stock breeds, mainly the American Quarter Horse plus Paints and Appaloosas. The ideal is a broke, naturally moving, willing horse that looks like it works for a living.",
  },
]

export default function RanchRidingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        hero={{
          title: "Ranch Riding",
          subtitle:
            "Ranch riding is the fast-growing western pattern class that celebrates the all-around working ranch horse -- a forward, free-moving, willing horse that looks like it could put in an honest day's work on the ranch. Conceived partly as an antidote to the artificially slow, low-headed western pleasure style, ranch riding rewards a natural, ground-covering way of going. This overview describes how ranch riding is competed and is not a training manual.",
          category: "Discipline Guide",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Disciplines", href: "/disciplines" },
          { name: "Ranch Riding", href: '/disciplines/ranch-riding' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Ranch Riding Is", href: "#what" },
            { label: "Gaits and Maneuvers", href: "#maneuvers" },
            { label: "The Way of Going", href: "#wayofgoing" },
            { label: "The Ranch Horse", href: "#horse" },
            { label: "The Wider Ranch Family", href: "#family" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Western Pleasure", href: "/disciplines/western-pleasure" },
              { label: "Reining", href: "/disciplines/reining" },
              { label: "Cutting", href: "/disciplines/cutting" },
              { label: "American Quarter Horse", href: "/breeds/quarter-horse" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="discipline-ranch-riding"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Ranch Riding Is</h2>
          <p>Ranch riding is a judged pattern class in which horse and rider perform a set sequence of gaits and maneuvers that reflect the work of a versatile ranch horse. It emerged and grew rapidly in the 2010s, championed by the AQHA and other stock-horse associations, as part of a broader ranch-horse movement reacting against the increasingly artificial western pleasure style. The class prizes a horse that is forward, soft, willing, and looks like a genuine working partner.</p>

          <h2 id="maneuvers">Gaits and Maneuvers</h2>
          <p>A ranch riding pattern is built from required elements performed in a designated order: walk, trot, and lope in both directions, plus an extended trot and extended lope that ask for real forward ground-covering movement, stops, backing, and changes of direction and lead. Patterns may also include practical touches such as riding over a log or obstacle. The horse is judged on how correctly, smoothly, and willingly it performs each maneuver and on the quality and naturalness of its movement.</p>

          <h2 id="wayofgoing">The Way of Going</h2>
          <p>The defining contrast with traditional western pleasure is the way of going. Ranch riding rewards a horse that travels forward with a natural head and neck carriage (not artificially low), reaches with a free, ground-covering stride, and clearly distinguishes between an ordinary lope and a genuine extension. Excessive slowness, a peanut-rolling low head, and a stilted, four-beat lope are penalized. The aim is a horse that looks efficient, sound, and able to cover country all day.</p>

          <h2 id="horse">The Ranch Horse</h2>
          <p>Stock breeds -- the American Quarter Horse above all, plus Paint and Appaloosa horses -- fill ranch riding classes, reflecting the discipline&apos;s roots in western ranch work. The ideal ranch horse is a broke, sensible, naturally moving athlete with a willing attitude and the substance to look like it works for a living. Because the class values correct, forward, natural movement over manufactured style, it suits a wide range of honest using horses.</p>

          <h2 id="family">The Wider Ranch Family</h2>
          <p>Ranch riding sits within a family of ranch-horse classes that together test the versatile working horse: ranch trail (obstacles), ranch reining (a reining pattern), ranch rail (rail work), and ranch conformation, with all-around ranch-horse competitions and the AQHA Versatility Ranch Horse program combining several. Many horses cross between ranch riding and related western disciplines such as reining and cutting. The discipline is governed within stock-breed associations such as the AQHA, APHA, and ApHC; a local stock-horse show is the place to learn the patterns and rules.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Quarter Horse Association. Ranch riding and Versatility Ranch Horse rules. aqha.com.</li>
            <li>American Paint Horse Association and Appaloosa Horse Club. Ranch-class rules.</li>
            <li>National Reined Cow Horse and ranch-horse association resources.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
