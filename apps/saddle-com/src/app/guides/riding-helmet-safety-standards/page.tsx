import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Riding Helmet Safety Standards — ASTM, SEI, VG1, MIPS | Saddle.com",
  description: "Equestrian helmet certifications explained: ASTM/SEI, PAS 015, VG1, Snell, and MIPS — what each test covers, replacement intervals, and how to read labels.",
  path: "/guides/riding-helmet-safety-standards",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Riding Helmet Safety Standards",
  description: "ASTM/SEI, PAS 015, VG1, Snell, and MIPS equestrian helmet standards explained, plus replacement intervals and label reading.",
  url: "https://saddle.com/guides/riding-helmet-safety-standards",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function RidingHelmetSafetyStandardsPage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Riding Helmet Safety Standards", subtitle: "A helmet is the one piece of equipment that exists solely to protect your skull. The certification on the label tells you which crash tests it actually passed.", category: "Rider Gear", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Helmet Safety Standards", href: "/guides/riding-helmet-safety-standards" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "Why Certification Matters", href: "#why" },
          { label: "ASTM / SEI", href: "#astm" },
          { label: "PAS 015 & VG1", href: "#pas" },
          { label: "Snell", href: "#snell" },
          { label: "MIPS & Rotational Force", href: "#mips" },
          { label: "Replacement Intervals", href: "#replace" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Helmet Fit Guide", href: "/guides/helmet-fit-guide" },
          { label: "Best Riding Helmets", href: "/reviews/best-riding-helmets" },
          { label: "Body Protector Guide", href: "/guides/body-protector-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-riding-helmet-safety-standards" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Equestrian helmet labels carry an alphabet soup of standards — ASTM, SEI, PAS 015, VG1, Snell — and a marketing layer of technologies like MIPS on top. The certifications are not interchangeable, and a helmet sold without a recognized equestrian certification has not passed the relevant crash testing. Reading the label is the first safety decision a rider makes.</DropCap>

        <CalloutBox variant="tip" title="A certified helmet that fits beats an expensive one that does not">
          Certification proves a helmet passed crash tests; fit determines whether it stays on and works in a real fall. The most expensive helmet, fitted wrong, protects worse than a budget certified helmet fitted correctly. Use this guide for the standards, then the <a href="/guides/helmet-fit-guide">helmet fit guide</a> for fit.
        </CalloutBox>

        <h2 id="why">Why Certification Matters</h2>
        <p>A riding fall can deliver a head impact at speed onto hard ground — the injury mechanism helmets are designed against. Certification means a helmet has passed standardized impact and retention tests by an independent body. An uncertified helmet, however expensive or attractive, has no such guarantee. Certification is the floor; fit, covered in the <a href="/guides/helmet-fit-guide">helmet fit guide</a>, builds on it.</p>

        <h2 id="astm">ASTM / SEI (United States)</h2>
        <p>In the US, the relevant standard is ASTM F1163 (the equestrian helmet standard), and SEI (Safety Equipment Institute) certification means an independent lab verified the helmet meets it and audits production. The combined &quot;ASTM/SEI certified&quot; mark is the one US riders should look for; many competition bodies require it. A helmet meeting ASTM F1163 and carrying the SEI mark has passed equestrian-specific impact and retention testing.</p>

        <h2 id="pas">PAS 015 &amp; VG1 (Europe / UK)</h2>
        <p>In Europe and the UK, the key standards are <strong>PAS 015</strong> (a British standard widely regarded as a robust equestrian test, often with a Kitemark) and <strong>VG1</strong> (an interim European standard that replaced the older EN 1384 after it was found insufficient). Many top competition rulebooks now specify PAS 015 and/or VG1. The older EN 1384 alone is no longer considered adequate by many bodies. Check the current rule for your discipline, as accepted standards are periodically updated.</p>

        <h2 id="snell">Snell</h2>
        <p>The Snell Memorial Foundation publishes the <strong>Snell E2001/E2016</strong> equestrian standard, an additional voluntary certification some helmets carry on top of ASTM/SEI. Snell testing is rigorous and independent. A helmet carrying both ASTM/SEI and Snell has met two demanding sets of tests; Snell is a bonus rather than a substitute for the regionally required standard.</p>

        <h2 id="mips">MIPS &amp; Rotational Force</h2>
        <p><strong>MIPS</strong> (Multi-directional Impact Protection System) is a technology, not a certification — a low-friction layer inside the helmet designed to reduce rotational forces transferred to the brain in an angled impact. Rotational force is increasingly recognized in brain-injury research, and MIPS and similar systems address it. A MIPS helmet still needs the underlying ASTM/SEI, PAS 015, or VG1 certification; MIPS adds a rotational-protection layer on top of a properly certified shell.</p>

        <h2 id="replace">Replacement Intervals</h2>
        <ul>
          <li><strong>After any fall or impact</strong> in which the helmet hit the ground or took a blow — even with no visible damage, the foam may be crushed and compromised. Replace it.</li>
          <li><strong>Every roughly five years</strong> of normal use, per common manufacturer guidance, as materials degrade with sweat, UV, and time.</li>
          <li><strong>If dropped hard</strong> onto a solid surface, or if the harness or shell shows damage.</li>
          <li>Never buy a used helmet — you cannot verify its impact history.</li>
        </ul>
        <p>Choose a helmet carrying the certification your region and discipline require (ASTM/SEI in the US; PAS 015 or VG1 in the UK and Europe), consider MIPS for rotational protection, replace it after any impact or at the recommended interval, and then make it fit. Compare current models in the <a href="/reviews/best-riding-helmets">riding helmet reviews</a>.</p>

        <CalloutBox variant="note" title="Sources">
          ASTM International F1163 standard and SEI certification documentation. British Standards PAS 015 and the VG1 European standard. Snell Memorial Foundation E2001/E2016. MIPS published rotational-force research. USEF and FEI helmet rules; British Horse Society (BHS) helmet guidance.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
