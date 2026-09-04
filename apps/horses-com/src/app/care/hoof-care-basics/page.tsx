import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, StockImage, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Hoof Care Basics — Anatomy, Daily Care, Healthy Hooves",
  description:
    "Reference guide to equine hoof care: hoof anatomy, the no-foot-no-horse principle, daily picking, trim and shoeing cycles, and what a healthy hoof looks like.",
  path: '/care/hoof-care-basics',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Hoof Care Basics — Anatomy, Daily Care, Healthy Hooves",
  description:
    "Reference guide to equine hoof care: hoof anatomy, the no-foot-no-horse principle, daily picking, trim and shoeing cycles, and what a healthy hoof looks like.",
  url: 'https://horses.com/care/hoof-care-basics',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',
})

const FAQS = [
  {
    question: "How often should a horse's hooves be trimmed?",
    answer:
      "Most horses are trimmed or shod every 6 to 8 weeks, because the hoof wall grows continuously and the foot loses balance if left too long. Growth is faster in summer and in young horses, so individual schedules vary -- your farrier sets the interval that keeps the foot balanced.",
    answerText:
      "Most horses are trimmed or shod every 6 to 8 weeks since the wall grows continuously. Growth varies with season and age, so your farrier sets the right interval.",
  },
  {
    question: "Does every horse need shoes?",
    answer:
      "No. Many horses stay sound barefoot, especially those in light work on forgiving footing with good hoof quality. Shoes or hoof boots help horses in hard or fast work, on abrasive ground, or with specific hoof problems. The decision is best made with your farrier based on the horse's job and feet.",
    answerText:
      "No -- many horses do well barefoot. Shoes or boots help horses in hard work, on abrasive ground, or with hoof issues. Decide with your farrier.",
  },
  {
    question: "How fast does a horse's hoof grow?",
    answer:
      "The hoof wall grows roughly 6 to 10 millimeters a month from the coronary band, meaning it takes the better part of a year for new horn to grow all the way to the ground. This slow growth is why hoof problems and corrective work take many months to fully resolve.",
    answerText:
      "The wall grows about 6 to 10 mm a month, taking most of a year to reach the ground. This slow growth means hoof corrections take many months.",
  },
]

export default function HoofCareBasicsPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="care"
        relatedLinks={[
          { title: 'Horse Care Hub', href: '/care', category: 'Horse Care' },
          { title: 'Farrier Schedule', href: '/care/farrier-schedule' },
          { title: 'Picking Out the Hooves', href: '/care/hoof-picking' },
          { title: 'Thrush', href: '/health/thrush' },
        ]}
        hero={{
          title: "Hoof Care Basics",
          subtitle:
            "The old horseman's saying -- no foot, no horse -- is the most quoted line in the stable for good reason. The hoof is a marvel of biomechanics that carries half a ton of horse at speed over hard ground, and most lameness traces back to it. Understanding hoof anatomy, keeping up daily care, and maintaining a regular farrier cycle are the foundations of soundness. This is reference material to complement, not replace, your farrier and veterinarian.",
          category: "Horse Care",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "11 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Care", href: "/care" },
          { name: "Hoof Care Basics", href: '/care/hoof-care-basics' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Why the Foot Matters", href: "#why" },
            { label: "Hoof Anatomy", href: "#anatomy" },
            { label: "Daily Care", href: "#daily" },
            { label: "Trimming and Shoeing", href: "#trim" },
            { label: "Daily Hoof-Care Kit", href: "#kit" },
            { label: "Signs of a Healthy Hoof", href: "#healthy" },
            { label: "Warning Signs", href: "#warning" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "The Farrier Schedule", href: "/care/farrier-schedule" },
              { label: "Picking Out the Hooves", href: "/care/hoof-picking" },
              { label: "Thrush", href: "/health/thrush" },
              { label: "Hoof Abscess", href: "/health/abscess" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="care-hoof-basics"
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
              Keep the daily hoof-care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Horse hoof-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the everyday kit — a simple hoof pick, ideally one with
              a stiff brush to clear packed debris, plus hoof boots when the
              farrier conversation lands on boots instead of shoes — so you
              are not hunting tools mid-pick. Educational checklist, not a
              diagnosis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="horses-com"
              title="Horse hoof-care checklist"
              subtitle="Email the hoof-pick, stiff-brush, and hoof-boot order. No spam."
              ctaText="Email my hoof-care checklist"
              source="care-hoof-care-basics-under-hero"
            />
          </div>

          <h2 id="why">Why the Foot Matters</h2>
          <p>The hoof bears and dissipates enormous loads, helps pump blood back up the leg, and provides traction and feel. A neglected foot is the root of an outsized share of lameness, from abscesses and thrush to long-term imbalance that strains joints and tendons higher up the limb. Good hoof care is cheap insurance against expensive lameness.</p>

          <StockImage manifestKey="horses-com:care-hoof" aspect="16:9" />

          <h2 id="anatomy">Hoof Anatomy</h2>
          <p>The outer hoof wall is a tough, nerveless horn that grows continuously downward from the coronary band at roughly 6 to 10 millimeters a month, taking the better part of a year to grow from top to ground. The sole forms the bottom, the frog is the V-shaped rubbery cushion that aids traction and circulation, and the white line marks the junction of wall and sole. Inside sit the coffin bone, the navicular bone, the digital cushion, and the sensitive laminae that suspend the coffin bone from the wall.</p>

          <h2 id="daily">Daily Care</h2>
          <ul>
            <li><strong>Pick out the feet daily</strong> and before and after riding, clearing packed debris and checking for stones, punctures, and cracks.</li>
            <li><strong>Look and smell</strong> for the foul odor and black discharge of thrush each time you pick.</li>
            <li><strong>Feel for heat and the digital pulse</strong> so that an abnormal warm foot or bounding pulse is caught early.</li>
            <li><strong>Keep footing reasonably clean and dry</strong> to protect horn quality and prevent thrush.</li>
          </ul>

          <h2 id="trim">Trimming and Shoeing</h2>
          <p>Because the wall grows constantly, horses need regular trimming to keep the foot balanced; left too long, the hoof flares, the angles change, and the limb is loaded abnormally. Most horses are trimmed or shod every 6 to 8 weeks, adjusted for growth rate and season. Whether a horse needs shoes depends on its work, footing, and hoof quality -- many do well barefoot, while horses in hard or fast work, or with specific hoof issues, benefit from shoes or hoof boots. The choice is best made with your farrier.</p>

          <h2 id="kit">Daily Hoof-Care Kit</h2>
          <p>Everyday physical supplies that match the daily-care and shoeing copy above — a simple hoof pick, ideally one with a stiff brush to sweep packed debris from the sole, and hoof boots when the farrier conversation lands on boots instead of shoes for hard or abrasive work. These are not treatments for thrush, abscess, or laminitis; heat, a foul smell, a bounding digital pulse, or sudden lameness belongs with your veterinarian or farrier, not a pick or a boot. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops (daily hoof-care kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page daily-care / shoeing copy, not thrush / abscess / laminitis treatments. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the daily hoof-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page daily-care and
              shoeing copy — a simple hoof pick, a hoof pick with a stiff
              brush to clear packed debris, and hoof boots when boots rather
              than shoes are the farrier call for hard or abrasive work.
              Everyday physical supplies only. They are not a ranked product
              list, they are not treatments for thrush, abscess, laminitis,
              or any medical condition, and they do not replace a veterinarian
              or farrier. Horses.com earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+pick?s=care-hoof-care-basics"
                amazonLabel="Browse horse hoof picks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+pick+brush?s=care-hoof-care-basics"
                amazonLabel="Browse horse hoof picks with brush on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/horse+hoof+boots?s=care-hoof-care-basics"
                amazonLabel="Browse horse hoof boots on Amazon →"
              />
            </div>
          </div>

          <h2 id="healthy">Signs of a Healthy Hoof</h2>
          <ul>
            <li>Smooth, crack-free walls with consistent angles that match the pastern.</li>
            <li>A concave, firm sole and a well-developed, springy frog.</li>
            <li>A tight white line without wide separation or chalky breakdown.</li>
            <li>Even, balanced wear or wall length on both sides.</li>
            <li>No heat, no bounding digital pulse, and no foul odor.</li>
          </ul>

          <h2 id="warning">Warning Signs</h2>
          <ul>
            <li>Cracks that extend, widen, or reach the coronary band.</li>
            <li>Persistent heat or a bounding digital pulse, which can signal abscess or laminitis.</li>
            <li>Flaring, long toes, collapsed or contracted heels, or sudden angle changes.</li>
            <li>Foul smell and black discharge in the frog grooves (thrush).</li>
            <li>Any lameness -- the foot is the first place to look.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>O&apos;Grady SE. “Guidelines for Trimming the Equine Foot.” AAEP Proceedings, 2009.</li>
            <li>Baxter GM (ed). Adams and Stashak&apos;s Lameness in Horses, 7th ed., Wiley-Blackwell, 2020.</li>
            <li>American Association of Equine Practitioners. “Hoof Care” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
