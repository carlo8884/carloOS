import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Ranch Riding — The Working Horse Pattern Class",
  description:
    "Reference overview of ranch riding: the pattern class celebrating the working ranch horse, gaits and maneuvers, the natural way of going, and governing bodies.",
  path: '/disciplines/ranch-riding',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Ranch Riding — The Working Horse Pattern Class",
  description:
    "Reference overview of ranch riding: the pattern class celebrating the working ranch horse, gaits and maneuvers, the natural way of going, and governing bodies.",
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
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Reining', href: '/disciplines/reining' },
          { title: 'Western Pleasure', href: '/disciplines/western-pleasure' },
          { title: 'Cutting', href: '/disciplines/cutting' },
        ]}
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
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
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
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ranch-riding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ranch-riding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-horse-ranch-riding-pattern-chart,
              stall-door-aqha-vrh-card, and
              equine-extended-lope-handbook notes
              that match the walk-trot-lope-pattern,
              aqha-versatility-ranch-horse, and
              natural-head / extended-lope copy on this
              page — a laminated horse ranch-riding pattern
              chart so the extended-trot / both-ways /
              log-obstacle notes are posted on the stall
              door (not a hunter under-saddle gait chart,
              not an equitation position chart), a horse
              stall-door AQHA VRH card so the AQHA /
              Versatility Ranch Horse / APHA notes are
              labeled at the barn (not a USHJA hunter card,
              not a USEF medal card), and an equine
              extended-lope handbook so the forward /
              natural-head / peanut-rolling contrast is a
              physical barn book (not a hunter-bascule
              handbook, not a hunter-seat handbook).
              Educational barn checklist, not a ranked
              clinic list, not a first-aid-kit hop, and
              not a substitute for a veterinarian.
              Horses.com does not sell insurance. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Ranch-riding checklist"
              subtitle="Email the ranch-riding pattern chart, AQHA VRH card, and extended-lope handbook notes. No spam."
              ctaText="Email my ranch-riding checklist"
              source="disciplines-ranch-riding-under-hero"
            />
          </div>

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

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (laminated horse ranch-riding pattern chart /
              horse stall-door AQHA VRH card /
              equine extended-lope handbook).
              No existing product hop to keep.
              Educational barn searches only; no Rx /
              vaccine / flea / heartworm / nsaid hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs hunter-under-saddle /
              equitation hops.
              Directory import left untouched.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ranch-riding barn kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page walk-trot-lope-pattern,
              aqha-versatility-ranch-horse, and
              natural-head / extended-lope copy — a
              laminated horse ranch-riding pattern chart, a
              horse stall-door AQHA VRH card, and an
              equine extended-lope handbook. Educational
              barn searches only. They are not a ranked
              clinic list, they are not a
              hunter-under-saddle / equitation hop, they
              are not a first-aid-kit hop, they are not a
              child toothbrush hop, and they do not
              replace a veterinarian. Horses.com does not
              sell insurance. Horses.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+horse+ranch+riding+pattern+chart?s=discipline-ranch-riding"
                amazonLabel="Browse laminated horse ranch-riding pattern charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+stall+door+aqha+vrh+card?s=discipline-ranch-riding"
                amazonLabel="Browse horse stall-door AQHA VRH cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/equine+extended+lope+handbook?s=discipline-ranch-riding"
                amazonLabel="Browse equine extended-lope handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
