import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Riding Gloves Guide — Leather, Synthetic, Grip, Fit | Saddle.com",
  description: "Riding gloves explained: leather, synthetic, mesh, and winter gloves — grip, feel through the rein, fit, and which gloves suit which discipline and season.",
  path: "/guides/riding-gloves-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Riding Gloves Guide",
  description: "Leather, synthetic, mesh, and winter riding gloves compared for grip, rein feel, durability, and seasonal use.",
  url: "https://saddle.com/guides/riding-gloves-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function RidingGlovesGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Riding Gloves — Grip and Feel Through the Rein", subtitle: "Gloves protect the hands and improve grip on the reins, but the best riding gloves do it without dulling the feel of the contact. Material and fit decide the balance.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Riding Gloves Guide", href: "/guides/riding-gloves-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What Gloves Do", href: "#what" },
          { label: "Leather Gloves", href: "#leather" },
          { label: "Synthetic & Mesh", href: "#synthetic" },
          { label: "Winter Gloves", href: "#winter" },
          { label: "Grip & Reinforcement", href: "#grip" },
          { label: "Fit", href: "#fit" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Best Riding Gloves", href: "/reviews/best-riding-gloves" },
          { label: "Reins Types Guide", href: "/guides/reins-types-guide" },
          { label: "Show Attire Guide", href: "/guides/show-attire-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-riding-gloves-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Riding gloves sit between the hand and the rein, so they have to do two things at once: improve grip and protect the skin, without numbing the subtle feel of the contact that good riding depends on. Too thick and they kill feel; too thin or slippery and they fail at grip. Material and fit are the whole story.</DropCap>

        <CalloutBox variant="tip" title="Feel and grip pull in opposite directions">
          The thinner and more sensitive a glove, the better the feel of the contact but the less protection and warmth; the thicker and grippier, the more security but the less feel. Choose toward feel for refined flatwork and toward grip and protection for jumping, fast work, and cold weather.
        </CalloutBox>

        <h2 id="what">What Gloves Do</h2>
        <p>Gloves improve rein grip (especially with the slippery plain leather reins in the <a href="/guides/reins-types-guide">reins guide</a> or in wet conditions), protect the hands from rein friction and rope burn, keep hands warm, and complete formal turnout. The challenge is doing this without dulling the feel of the contact — the rider&apos;s communication with the mouth passes through the hands.</p>

        <h2 id="leather">Leather Gloves</h2>
        <p>Leather riding gloves give excellent grip and a refined, direct feel, molding to the hand over time and conveying the rein contact well. Quality leather gloves are durable and are the traditional choice for showing and formal work. The trade-offs are price, the need to keep them supple, and that they can stiffen if soaked and dried hard. Many have reinforced palms and fingers at wear points.</p>

        <h2 id="synthetic">Synthetic &amp; Mesh Gloves</h2>
        <p>Synthetic gloves (often a stretch synthetic with grip palms) are washable, breathable, and inexpensive, and they keep good feel — the everyday schooling standard. Mesh and summer gloves add ventilation panels for hot weather, keeping the hands cool and dry. They wear out faster than leather but cost a fraction, making them the practical daily choice and easy to replace.</p>

        <h2 id="winter">Winter Gloves</h2>
        <p>Winter riding gloves add insulation and often a windproof or water-resistant outer, trading feel for warmth — cold, stiff hands ride badly and grip poorly. Good winter gloves keep enough dexterity to manage the reins and buckles; very heavily insulated gloves protect against cold but dull feel significantly. Thin liner gloves under a shell are an alternative that preserves more dexterity.</p>

        <h2 id="grip">Grip &amp; Reinforcement</h2>
        <p>Grip comes from the palm material — leather, synthetic suede, or silicone/printed grip patterns on synthetic gloves. Reinforcement at the rein-contact points (between thumb and forefinger, and across the fingers) extends glove life, since that is where reins wear gloves through. Touchscreen-compatible fingertips are a common modern convenience. Look for grip that holds in the wet for jumping and fast work.</p>

        <h2 id="fit">Fit</h2>
        <ul>
          <li>Snug, not tight — a close fit preserves feel; loose gloves bunch and dull the contact.</li>
          <li>Fingers reach the ends without excess material at the tips.</li>
          <li>The glove allows full finger flexion to close the hand on the rein.</li>
          <li>Leather gloves are bought to fit snug, as they stretch slightly with wear.</li>
        </ul>
        <p>Choose leather for feel and formal turnout, synthetic or mesh for everyday and hot weather, and insulated gloves for winter — accepting the feel-versus-warmth trade-off. For showing, gloves are part of the turnout in the <a href="/guides/show-attire-guide">show attire guide</a>. Compare specific pairs in the <a href="/reviews/best-riding-gloves">riding glove reviews</a>.</p>

        <CalloutBox variant="note" title="Sources">
          Manufacturer riding-glove material documentation. USEF and FEI turnout rules. British Horse Society (BHS) rider-equipment references.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
