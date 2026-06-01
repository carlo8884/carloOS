import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Show Attire Guide — Dressage, Hunter, Jumper, Western | Saddle.com",
  description: "Competition turnout by discipline: dressage coats and top hats, hunter and equitation attire, jumper dress, and western show clothing — the current rules.",
  path: "/guides/show-attire-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Show Attire Guide",
  description: "Competition turnout by discipline — dressage, hunter, equitation, jumper, and western show attire and the current rules.",
  url: "https://saddle.com/guides/show-attire-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function ShowAttireGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Show Attire by Discipline", subtitle: "Correct turnout signals respect for the sport and keeps you in the ribbons rather than out on a technicality. Each discipline has its own expectations, and the rules evolve.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Show Attire Guide", href: "/guides/show-attire-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Turnout as a Rulebook Matter", href: "#why" },
          { label: "Dressage", href: "#dressage" },
          { label: "Hunter & Equitation", href: "#hunter" },
          { label: "Show Jumping", href: "#jumper" },
          { label: "Western", href: "#western" },
          { label: "Safety First", href: "#safety" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Tall Boots vs Paddock Boots", href: "/guides/tall-boots-vs-paddock-boots" },
          { label: "Breeches Fabric Guide", href: "/guides/breeches-fabric-guide" },
          { label: "Helmet Safety Standards", href: "/guides/riding-helmet-safety-standards" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-show-attire-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Show attire is not only tradition — it is written into the rulebook of every discipline, and incorrect turnout can cost marks or even elimination. The conventions differ sharply between the formal coat-and-boots of dressage, the conservative hunter ring, and the silver-and-color of western classes, and the safety rules underlying them increasingly override the old traditions.</DropCap>

        <CalloutBox variant="tip" title="Check the current rulebook every season">
          Turnout rules change — top hats have given way to helmets in dressage, tailcoats and stock requirements shift, and heat rules relax coat requirements. What was correct a few seasons ago may not be now. Confirm the current year&apos;s rule for your discipline and level before you spend on show clothing.
        </CalloutBox>

        <h2 id="why">Turnout as a Rulebook Matter</h2>
        <p>Every competitive discipline specifies acceptable attire, and stewards enforce it. The garments below build on the everyday kit covered in the <a href="/guides/breeches-fabric-guide">breeches guide</a> and the <a href="/guides/tall-boots-vs-paddock-boots">boots guide</a>, formalized for the ring. The single most important and most rapidly evolving rule concerns helmets — see the <a href="/guides/riding-helmet-safety-standards">helmet standards guide</a>.</p>

        <h2 id="dressage">Dressage</h2>
        <p>Traditional dressage turnout is a dark show coat (or tailcoat at upper levels), white or pale breeches, tall dress boots, gloves, and a stock tie or shirt-and-tie. The major modern change is the helmet: certified protective helmets have replaced top hats in most jurisdictions, and many bodies now require a helmet at all levels. Spurs and whip rules apply per the <a href="/guides/spurs-guide">spurs guide</a>. Heat rules may permit competing without a coat.</p>

        <h2 id="hunter">Hunter &amp; Equitation</h2>
        <p>The hunter and equitation rings prize conservative, understated turnout: a dark or subdued hunt coat, tan or light breeches, tall field boots, a ratcatcher shirt with a choker or collar, gloves, and a certified helmet. The aesthetic is traditional and quiet — nothing flashy, everything correct and well-fitted. Hair is neatly contained. The emphasis is on a classic, polished look that does not distract from horse and rider.</p>

        <h2 id="jumper">Show Jumping</h2>
        <p>Show jumping turnout is somewhat less formal and more practical than the hunter ring: a show coat (color rules have relaxed in many venues), breeches, tall boots, gloves, and a certified helmet, with a body protector common and required for juniors and recommended generally — see the <a href="/guides/body-protector-guide">body protector guide</a>. The jumper ring tolerates more color and individuality than the hunter ring while keeping the core formal pieces.</p>

        <h2 id="western">Western</h2>
        <p>Western show attire varies by class. Pleasure and horsemanship classes favor a fitted western shirt or jacket (often with detail and color), western hat or certified helmet (helmets increasingly accepted and required for some youth classes), western pants or chaps, and western boots. Roping and ranch classes are more workmanlike. Silver on tack and bridle is part of the turnout in some classes, reflecting the western tack tradition covered in the <a href="/guides/western-tack-guide">western tack guide</a>.</p>

        <h2 id="safety">Safety First</h2>
        <ul>
          <li>A certified helmet is now required or strongly expected in most disciplines — the old top hat and western-hat-only conventions are giving way to safety.</li>
          <li>Body protectors are required in eventing cross-country and many jumping contexts.</li>
          <li>Footwear must have a proper heel regardless of formality, per the <a href="/guides/tall-boots-vs-paddock-boots">boots guide</a>.</li>
        </ul>
        <p>Match your turnout to the current rulebook for your discipline and level, prioritize the safety equipment that the rules increasingly mandate, and keep everything clean and well-fitted. Correct turnout is the price of admission; safe turnout is non-negotiable.</p>

        <CalloutBox variant="note" title="Sources">
          USEF and FEI dress and turnout rules by discipline (dressage, hunter, jumper, western). British Dressage and British Showjumping rulebooks. AQHA and western breed-association show rules. BETA body-protector and helmet-rule references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
