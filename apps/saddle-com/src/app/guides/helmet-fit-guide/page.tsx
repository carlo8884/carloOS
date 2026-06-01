import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Riding Helmet Fit Guide — Sizing, Shape, Harness | Saddle.com",
  description: "How a riding helmet should fit: measuring head circumference, oval vs round shapes, harness adjustment, the shake test, and signs of a poor fit.",
  path: "/guides/helmet-fit-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Riding Helmet Fit Guide",
  description: "Measuring head size, head-shape matching, harness adjustment, and the fit tests that confirm a riding helmet will stay on in a fall.",
  url: "https://saddle.com/guides/helmet-fit-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HelmetFitGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Riding Helmet Fit — Getting It Right on Your Head", subtitle: "A certified helmet only protects if it fits. Size, head shape, and harness adjustment decide whether a helmet stays put when it matters most.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "8 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Helmet Fit Guide", href: "/guides/helmet-fit-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Fit Is the Other Half", href: "#why" },
          { label: "Measuring Your Head", href: "#measure" },
          { label: "Head Shape", href: "#shape" },
          { label: "Harness & Retention", href: "#harness" },
          { label: "The Fit Tests", href: "#tests" },
          { label: "Signs of Poor Fit", href: "#signs" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Helmet Safety Standards", href: "/guides/riding-helmet-safety-standards" },
          { label: "Best Riding Helmets", href: "/reviews/best-riding-helmets" },
          { label: "Show Attire Guide", href: "/guides/show-attire-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-helmet-fit-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A helmet that passes every crash test is useless if it shifts, lifts, or comes off in a fall. Fit is what keeps the protective shell over the skull at the moment of impact — and fit depends on three things: the right size, the right head shape, and a correctly adjusted harness. The standards are covered separately in the <a href="/guides/riding-helmet-safety-standards">safety standards guide</a>.</DropCap>

        <CalloutBox variant="tip" title="It should fit before you tighten the strap">
          A correctly sized helmet sits snug and level on your head and stays put when you shake your head with the chin strap undone. The harness is a retention backup, not the thing holding the helmet on. If you need the strap cranked tight to keep the helmet from moving, the shell is too big.
        </CalloutBox>

        <h2 id="why">Why Fit Is the Other Half</h2>
        <p>Certification (see the <a href="/guides/riding-helmet-safety-standards">standards guide</a>) proves the helmet can absorb an impact. Fit proves it will be in the right place when the impact happens. The two are equally necessary — a top-certified helmet fitted loosely can rotate off in a fall, and a perfectly fitted helmet with no certification has nothing tested behind it. This guide handles fit.</p>

        <h2 id="measure">Measuring Your Head</h2>
        <p>Measure the head circumference with a soft tape about a finger&apos;s width above the eyebrows and ears, around the widest part of the skull. That measurement maps to a helmet size, but sizing varies between brands, so the number is a starting point, not a guarantee. Always try the helmet on; never buy on the number alone.</p>

        <h2 id="shape">Head Shape</h2>
        <p>Heads are not all the same shape — broadly, more round or more oval (long front-to-back). Helmet models are built to different internal shapes, and a helmet matching your head shape sits evenly with no pressure points and no gaps. A round helmet on an oval head pinches front-and-back and gaps at the sides; the reverse pinches the sides. Trying multiple models is how you find the shape that suits you, which is why the <a href="/reviews/best-riding-helmets">helmet reviews</a> note model shape.</p>

        <h2 id="harness">Harness &amp; Retention</h2>
        <p>The harness (chin strap and rear cradle) is the retention system that keeps a correctly sized helmet secured. Adjust it so the chin strap is snug — about one finger between strap and chin — and the rear cradle, if adjustable, cups the back of the head. The harness does not make a too-big helmet fit; it secures a helmet that already fits the shell to your head.</p>

        <h2 id="tests">The Fit Tests</h2>
        <ul>
          <li><strong>Level seat:</strong> the helmet sits level, the front edge about a finger&apos;s width above the eyebrows — not tilted back exposing the forehead.</li>
          <li><strong>Shake test (strap undone):</strong> shake and nod your head; a correctly fitted helmet stays put with no strap.</li>
          <li><strong>Skin movement:</strong> with the helmet on, gently move it — your scalp should move with it, not the helmet sliding over your skin.</li>
          <li><strong>Roll-off test (strap done up):</strong> the helmet should not be able to be rolled forward off the head or back off the forehead.</li>
          <li><strong>Pressure check:</strong> snug and even all around, no hot spots or gaps after a few minutes wearing it.</li>
        </ul>

        <h2 id="signs">Signs of Poor Fit</h2>
        <p>A helmet that rocks side to side or front to back, leaves red pressure marks in spots, sits tilted, or only stays on with a very tight strap does not fit — try a different size or shape. Hair styling changes (a ponytail up versus down) can change fit, so fit the helmet as you will wear it riding. Replace a helmet after any impact and at the manufacturer&apos;s interval, as the <a href="/guides/riding-helmet-safety-standards">standards guide</a> details. A well-fitted, certified helmet is the single best protective investment a rider makes — and for showing, it must also meet the turnout expectations in the <a href="/guides/show-attire-guide">show attire guide</a>.</p>

        <CalloutBox variant="note" title="Sources">
          British Horse Society (BHS) helmet-fitting guidance. ASTM/SEI and PAS 015 helmet documentation. Manufacturer fitting instructions. Riding-safety organization guidance on helmet retention and the shake test.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
