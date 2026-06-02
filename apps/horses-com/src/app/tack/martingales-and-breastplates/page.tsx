import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Martingales and Breastplates — What They Do and When to Use Them",
  description:
    "Reference guide to martingales and breastplates: standing and running martingales, breastplates and breastgirths, their purposes, correct fit, and misuse.",
  path: '/tack/martingales-and-breastplates',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Martingales and Breastplates — What They Do and When to Use Them",
  description:
    "Reference guide to martingales and breastplates: standing and running martingales, breastplates and breastgirths, their purposes, correct fit, and misuse.",
  url: 'https://horses.com/tack/martingales-and-breastplates',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is the difference between a standing and a running martingale?",
    answer:
      "A standing martingale runs from the girth to the noseband and sets a fixed upper limit on head height regardless of the reins. A running martingale runs from the girth and divides into two rings the reins pass through, applying downward rein pressure only when the horse raises its head too high. One fixes a limit; the other acts through the reins.",
    answerText:
      "A standing martingale attaches to the noseband and fixes a head-height limit; a running martingale has rings the reins pass through and acts through the reins only when the head goes too high.",
  },
  {
    question: "What is a breastplate for?",
    answer:
      "A breastplate (or breastgirth) attaches to the saddle and passes around the chest to stop the saddle sliding backward, which matters on steep terrain, when jumping, and on horses whose conformation lets the saddle slip. It is a security and safety aid that keeps the saddle in place, not a training device, and some types also offer a martingale attachment.",
    answerText:
      "It attaches to the saddle and goes around the chest to stop the saddle slipping back, useful on hills, when jumping, or with slippery conformation. It is a security aid, not a training device.",
  },
  {
    question: "Will a martingale fix a horse that throws its head up?",
    answer:
      "Not really -- a martingale sets a safety limit on head height but does not teach correct head carriage, which is the job of training. Head-tossing usually stems from training gaps, pain, poor tack fit, or the rider's hands, and a too-tight martingale used to force the head down causes tension and can be dangerous. Address the root cause instead.",
    answerText:
      "No -- it sets a safety limit but does not teach head carriage. Head-tossing usually stems from training, pain, fit, or hands, and a too-tight martingale causes tension. Fix the root cause.",
  },
]

export default function MartingalesBreastplatesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Martingales and Breastplates",
          subtitle:
            "Martingales and breastplates are auxiliary tack often seen but frequently misunderstood. A martingale influences how high a horse can carry its head; a breastplate stops the saddle slipping back. Neither is a training shortcut, and a martingale fitted wrongly can do harm. Knowing what each does, and what it does not do, helps owners use them correctly or recognize when they are being used to mask a deeper problem. This is reference material to inform use alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Martingales and Breastplates", href: '/tack/martingales-and-breastplates' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Martingales", href: "#martingales" },
            { label: "Standing vs Running", href: "#standing-running" },
            { label: "Breastplates and Breastgirths", href: "#breastplates" },
            { label: "Fit", href: "#fit" },
            { label: "Use and Misuse", href: "#misuse" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Bits Explained", href: "/tack/bits-guide" },
              { label: "Bridle Types", href: "/tack/bridle-types" },
              { label: "Show Jumping", href: "/disciplines/show-jumping" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-martingales"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="martingales">Martingales</h2>
          <p>A martingale is a strap arrangement that runs from the girth, between the front legs, to the bit (via rings) or the noseband, limiting how high the horse can raise its head. Its legitimate purpose is to prevent a horse flinging its head dangerously high -- high enough to hit the rider or to evade the bit by getting its head above the angle of control. A martingale does not teach a horse to carry its head correctly; that is the job of training.</p>

          <h2 id="standing-running">Standing vs Running</h2>
          <p>The two main types act differently. A standing martingale runs from the girth to the noseband and sets a fixed upper limit on head height regardless of the reins; it is common in hunting and some jumping. A running martingale runs from the girth and divides into two straps ending in rings through which the reins pass, applying downward pressure on the reins only when the horse raises its head beyond a certain point -- it acts through the reins rather than fixing the head. Each must be fitted to the correct length for its type.</p>

          <h2 id="breastplates">Breastplates and Breastgirths</h2>
          <p>A breastplate (or breastgirth) attaches to the saddle and passes around the front of the chest to stop the saddle sliding backward, which matters on steep terrain, when jumping, and on horses whose conformation lets a saddle slip. Breastgirths are a simpler strap across the chest; hunting and jumping breastplates are more elaborate, sometimes with attachment points for a martingale. They are a security and safety aid, keeping the saddle in place, not a training device.</p>

          <h2 id="fit">Fit</h2>
          <ul>
            <li><strong>Standing martingale length</strong> -- commonly set so it reaches up into the gullet of the throat when adjusted; not so short that it restricts normal head carriage.</li>
            <li><strong>Running martingale length</strong> -- the rings should reach to about the withers, so they only engage the reins when the head goes too high.</li>
            <li><strong>Rein stops</strong> -- always used with a running martingale so the rings cannot slide forward and catch on the bit or rein fittings.</li>
            <li><strong>Breastplate fit</strong> -- snug enough to stop the saddle slipping but not so tight it restricts the shoulders or presses the windpipe.</li>
          </ul>

          <h2 id="misuse">Use and Misuse</h2>
          <p>Martingales are sometimes reached for to force a horse&apos;s head down or to mask resistance, which is misuse -- a too-tight or wrongly fitted martingale restricts the horse, causes discomfort and tension, and can be dangerous if it limits the head when the horse needs to balance (for example over a fence or on landing). Head-carriage problems usually stem from training, pain, fit, or the rider&apos;s hands, and addressing those is the real fix. Used correctly and at the right length, a martingale is a safety limit, and a breastplate a security aid -- not substitutes for schooling.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (auxiliary tack and fitting).</li>
            <li>USEF and FEI rulebooks, current editions (permitted martingales by discipline).</li>
            <li>Research on auxiliary rein and martingale effects, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
