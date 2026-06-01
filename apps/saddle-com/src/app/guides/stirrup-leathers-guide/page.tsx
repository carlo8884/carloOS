import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Stirrup Leathers Guide — Types, Sizing, Safety | Saddle.com",
  description: "Stirrup leathers explained: standard, nylon-lined, calf-lined, and webbers — stretch, sizing, the right-hole problem, and safety checks before they fail.",
  path: "/guides/stirrup-leathers-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Stirrup Leathers Guide",
  description: "Standard, nylon-lined, calf-lined leathers and webbers — stretch, sizing, hole wear, and safety inspection.",
  url: "https://saddle.com/guides/stirrup-leathers-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function StirrupLeathersGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Stirrup Leathers — The Strap That Carries You", subtitle: "Stirrup leathers take the rider&apos;s full weight at every stride and every jump. They stretch unevenly, wear at the holes, and fail without warning if neglected.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Stirrup Leathers Guide", href: "/guides/stirrup-leathers-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "A Safety-Critical Strap", href: "#safety" },
          { label: "Standard Leathers", href: "#standard" },
          { label: "Nylon & Calf-Lined", href: "#lined" },
          { label: "Webbers & Monoflap Leathers", href: "#webbers" },
          { label: "The Stretch Problem", href: "#stretch" },
          { label: "Inspection", href: "#inspection" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Stirrup Iron Guide", href: "/guides/stirrup-iron-guide" },
          { label: "Best Stirrups", href: "/reviews/best-stirrups" },
          { label: "Leather Care Guide", href: "/guides/leather-care-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-stirrup-leathers-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Stirrup leathers carry the rider&apos;s weight through the stirrup iron, taking repeated shock at every rising trot stride and every landing. They are simple straps, but they are safety-critical: a leather that stretches unevenly throws the rider crooked, and one that cracks through at a worn hole can fail at the worst possible moment.</DropCap>

        <CalloutBox variant="tip" title="Swap your leathers left and right regularly">
          Riders mount from the left and post unevenly, so the near-side (left) leather stretches faster. Swap your leathers left-to-right every few weeks so they stretch evenly and you stay square in the saddle. Uneven leathers are a common, fixable cause of a crooked seat.
        </CalloutBox>

        <h2 id="safety">A Safety-Critical Strap</h2>
        <p>The stirrup leather connects the iron (see the <a href="/guides/stirrup-iron-guide">stirrup iron guide</a>) to the stirrup bar on the tree. It bears the rider&apos;s weight and absorbs shock continuously, so its material, stretch behavior, and condition matter for both performance and safety. Like billets, leathers are a part where failure has direct consequences, so inspection is not optional.</p>

        <h2 id="standard">Standard Leathers</h2>
        <p>Standard stirrup leathers are solid leather, doubled and stitched at the buckle. Quality varies enormously with the hide: good English leather is strong and long-lived; cheap leather stretches quickly and wears at the holes. They need regular conditioning to stay supple and resist cracking, per the <a href="/guides/leather-care-guide">leather care guide</a>. Their main drawback is stretch, addressed below.</p>

        <h2 id="lined">Nylon-Lined &amp; Calf-Lined Leathers</h2>
        <p><strong>Nylon-lined (or webbing-cored) leathers</strong> have a nylon strip bonded inside the leather to resist stretch dramatically — they hold their length, keeping the rider even, and are a popular upgrade for exactly that reason. <strong>Calf-lined leathers</strong> wrap a softer calf layer over a stronger core for a refined look and feel with good strength. Both aim to combine the appearance of leather with reduced stretch.</p>

        <h2 id="webbers">Webbers &amp; Monoflap Leathers</h2>
        <p><strong>Webbers</strong> are leathers with a folded or webbing construction designed to lie flat under the leg, reducing bulk — favored for close contact and jumping. <strong>Monoflap leathers</strong> are thin, low-bulk leathers made for monoflap saddles (see the <a href="/guides/monoflap-vs-double-flap-saddles">monoflap guide</a>) where minimal material under the leg is the whole point. Both prioritize reducing bulk against the horse and the rider&apos;s leg.</p>

        <h2 id="stretch">The Stretch Problem</h2>
        <p>Solid leather stretches with use, and because riders load the near side more (mounting and uneven posting), the left leather stretches faster — leaving the rider sitting crooked with one stirrup longer. The fixes are to buy non-stretch (nylon-lined) leathers, or to swap leathers side-to-side regularly so they stretch evenly. New leathers should be ridden in and re-checked for length, and the holes will set over the first weeks of use.</p>

        <h2 id="inspection">Inspection</h2>
        <ul>
          <li>Check the fold at the buckle and the area around the holes — these are where leathers crack and tear.</li>
          <li>Flex the leather: cracking on the surface or stiffness means it is drying out and needs conditioning or retiring.</li>
          <li>Inspect the stitching at the buckle end; restitch or replace if it is going.</li>
          <li>Confirm the leathers are even in length and the holes are not stretched into slots.</li>
          <li>Retire leathers that are cracked through, badly stretched, or stitched-failing — they are not worth the risk.</li>
        </ul>
        <p>Keep leathers conditioned, swap them to stretch evenly, and inspect the holes and buckle fold every time you clean tack. A sound pair of leathers is invisible; a neglected pair is a fall waiting to happen. Pair them with the right iron from the <a href="/reviews/best-stirrups">stirrup reviews</a>.</p>

        <CalloutBox variant="note" title="Sources">
          British Horse Society (BHS) tack-safety references. Society of Master Saddlers (SMS) materials, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Manufacturer stirrup-leather specifications. Riding-safety guidance on tack inspection.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
