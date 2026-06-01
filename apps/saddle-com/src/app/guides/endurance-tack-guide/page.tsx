import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Endurance Tack Guide — Saddles, Girths, Lightweight Gear | Saddle.com",
  description: "Endurance riding tack: lightweight saddles, anatomic girths, hydration carrying, hoof protection, and the focus on rub-free fit over distance.",
  path: "/guides/endurance-tack-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Endurance Tack Guide",
  description: "Lightweight endurance saddles, anatomic girths, hydration carrying, and rub-free fit for distance riding.",
  url: "https://saddle.com/guides/endurance-tack-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function EnduranceTackGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Endurance Tack — Engineered Against Distance", subtitle: "Endurance multiplies every small tack flaw by the mile. A rub that is nothing at an hour ends a ride at fifty. Endurance tack is an exercise in obsessive, lightweight, rub-free fit.", category: "Discipline Tack", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Endurance Tack Guide", href: "/guides/endurance-tack-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Distance Changes Everything", href: "#distance" },
          { label: "Endurance Saddles", href: "#saddle" },
          { label: "Girths & Rub Prevention", href: "#girth" },
          { label: "Hydration & Carrying", href: "#hydration" },
          { label: "Hoof Protection", href: "#hoof" },
          { label: "Weight & Vetting", href: "#weight" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Trail Riding Gear", href: "/guides/trail-riding-gear" },
          { label: "Treeless & Flex-Tree Saddles", href: "/guides/half-tree-treeless-saddles" },
          { label: "Saddle Fit Guide", href: "/guides/saddle-fit-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-endurance-tack-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Endurance rides of twenty-five to a hundred miles expose every flaw in fit and every potential rub point, multiplied by hours in the saddle. Tack that is &quot;good enough&quot; for an arena session is a liability over distance. Endurance gear is built around three obsessions: low weight, even pressure distribution, and the total elimination of rubs.</DropCap>

        <CalloutBox variant="tip" title="Vet checks judge your tack as much as your training">
          Endurance rides include veterinary checks where the horse is assessed for soundness, metabolic state, and — crucially — saddle and girth-area soreness or rubs. Tack that causes back soreness or girth galls can fail your horse at a vet gate. Rub-free fit is not just comfort; it is whether you finish.
        </CalloutBox>

        <h2 id="distance">Distance Changes Everything</h2>
        <p>The defining feature of endurance is duration. A pressure point that is imperceptible in a short ride becomes a sore back over fifty miles; a girth edge that is fine for an hour becomes a gall. Endurance tack is therefore engineered for even pressure and zero rubbing over long periods — the fit principles of the <a href="/guides/saddle-fit-guide">saddle fit guide</a> taken to their strictest application. It overlaps with trail gear, covered in the <a href="/guides/trail-riding-gear">trail riding gear guide</a>, but with far less tolerance for error.</p>

        <h2 id="saddle">Endurance Saddles</h2>
        <p>Endurance saddles prioritize lightness, a wide and even bearing surface to spread pressure over distance, a comfortable seat for hours of riding, and abundant attachment points for gear and hydration. Both treed endurance saddles and treeless designs are used; treeless offers adaptable fit but, as the <a href="/guides/half-tree-treeless-saddles">treeless saddles guide</a> notes, distance and rider weight raise the stakes on pressure distribution, so a quality pad system is essential. Even, rub-free contact over many miles is the absolute priority.</p>

        <h2 id="girth">Girths &amp; Rub Prevention</h2>
        <p>Anatomic, breathable girths (mohair string and shaped designs) that clear the elbow and dissipate heat are the endurance standard — the rub-prevention measures in the <a href="/guides/girth-fit-guide">girth fit guide</a> are not optional here. Riders watch the girth area, back, and any point of tack contact obsessively, choosing soft, breathable materials and keeping everything scrupulously clean, because a single rub can end a ride and fail a vet check.</p>

        <h2 id="hydration">Hydration &amp; Carrying</h2>
        <p>Endurance tack carries water, electrolytes, sponges (to cool the horse at water crossings), and essentials, balanced evenly so the saddle stays level over distance. Pommel and cantle bags, water-bottle holders, and sponge leashes are standard. Carrying is engineered for balance and security — an off-balance load or a flapping bag causes rubs and fatigue over miles.</p>

        <h2 id="hoof">Hoof Protection</h2>
        <p>Distance over varied terrain demands sound hoof protection — shoes (sometimes with pads) or hoof boots fitted to stay on for many miles over rock, sand, and water. Hoof boots have become popular in endurance; fit and security over distance are critical, as a lost or rubbing boot causes lameness. Hoof care and protection are central to finishing sound.</p>

        <h2 id="weight">Weight &amp; Vetting</h2>
        <ul>
          <li>Low tack weight reduces the load the horse carries over distance — every pound counts over fifty miles.</li>
          <li>Some rides have weight divisions, so rider-plus-tack weight matters competitively.</li>
          <li>Vet checks assess for back and girth-area soreness — tack-caused rubs or soreness can eliminate a horse.</li>
          <li>The horse&apos;s metabolic recovery and soundness, not speed alone, determine success.</li>
        </ul>
        <p>Endurance tack is the discipline&apos;s fit philosophy distilled: light, even, rub-free, and obsessively maintained. Get it right and the horse finishes sound through every vet gate; get it wrong and distance finds the flaw. It is the most demanding test of saddle and girth fit in the sport.</p>

        <CalloutBox variant="note" title="Sources">
          Endurance riding organization (AERC and FEI Endurance) rules and vetting guidance. Society of Master Saddlers fitting references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Equine back-pressure-mapping literature. Manufacturer endurance-tack and hoof-boot documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
