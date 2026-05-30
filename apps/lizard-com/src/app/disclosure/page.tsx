import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Affiliate Disclosure',
  description:
    'How Lizard.com makes money: affiliate programs (Amazon, Chewy, reptile-specialty retailers), what we never do (paid reviews), and editorial-integrity policy.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Lizard.com, including the programs we participate in and our editorial-integrity contract.',
  url: 'https://lizard.com/disclosure',
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Lizard.com makes money, which affiliate programs we participate in, and the editorial-integrity contract that controls how affiliate relationships interact with our husbandry recommendations.',
        category: 'Legal & Transparency',
        authorName: 'Lizard.com Editorial — last updated 2026-05-29',
        publishedAt: 'May 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Disclosure', href: '/disclosure' },
      ]}
      schema={schema}
    >
      <div className="carloOS-article">
        <AffiliateDisclosure variant="page" siteId="lizard-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Lizard.com.
          The short version: some links on this site are affiliate links; if
          you click one and buy something, we may earn a commission at no cost
          to you; that commission does not change our editorial
          recommendations; we never accept payment in exchange for favorable
          reviews.
        </p>
        <p>
          The longer version below exists so any reader, advertiser, regulator,
          or competitor can audit exactly what we do and do not do. If anything
          here is unclear or appears to contradict a Lizard.com page, email{' '}
          <a href="mailto:editorial@lizard.com">editorial@lizard.com</a>.
        </p>
        <p>
          This disclosure is published in compliance with the U.S. Federal
          Trade Commission&apos;s <em>Guides Concerning the Use of
          Endorsements and Testimonials in Advertising</em> (16 CFR Part 255).
        </p>

        <h2>What an Affiliate Link Is</h2>
        <p>
          An affiliate link passes a tracking identifier to the destination
          retailer when clicked. If you complete a purchase within the
          retailer&apos;s attribution window, the retailer pays Lizard.com a
          commission. The price you pay is the same as if you had navigated
          to the retailer directly. There is no markup, no surcharge.
        </p>
        <p>
          Every page on Lizard.com that contains affiliate links carries a
          disclosure either at the top of the page or in the page footer, in
          addition to the site-wide footer disclosure. Affiliate clicks route
          through our internal redirect (<code>/go/[vendor]/[sku]</code>) for
          auditability.
        </p>

        <h2>Programs We Participate In</h2>
        <ul>
          <li>
            <strong>Amazon Associates.</strong> Amazon stocks the bulk of the
            entry-level reptile husbandry market — heat lamps, UVB bulbs,
            thermostats, hides, water dishes, scales. Commission rates on
            Amazon are low (typically 1% to 4%) but volume is significant.
          </li>
          <li>
            <strong>Chewy Affiliate Program.</strong> Chewy carries a moderate
            range of reptile food and supplies and is often a better fit for
            insects and frozen feeders.
          </li>
          <li>
            <strong>Reptile-specialty retailers.</strong> Much of the gear
            actually worth recommending in this hobby — high-output UVB
            fixtures, radiant heat panels, proper thermostats — is stocked
            primarily by specialty herp retailers (Josh&apos;s Frogs, Big
            Apple Herpetological, Reptile Supply Co, and similar). When we
            recommend gear that is only available from a specialty retailer,
            we link to that retailer whether they offer an affiliate program
            or not.
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted, and remove
          programs if we exit them. Adding or removing a program never
          retroactively changes our existing rankings.
        </p>

        <h2>How We Make Money</h2>
        <ol>
          <li>
            Affiliate commissions from the programs above, generated when
            readers click through to a retailer and complete a purchase.
          </li>
          <li>
            Newsletter sponsorships. Sponsorships are clearly labeled inside
            the newsletter and the sponsor has no input on editorial content.
            We do not accept sponsors for on-site editorial pages.
          </li>
          <li>
            Display advertising via a third-party ad network. Ads are served
            programmatically.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <ul>
          <li>
            <strong>We never accept payment for favorable reviews.</strong> No
            manufacturer of any UVB fixture, thermostat, heat panel, or
            enclosure has ever paid Lizard.com — in money, in product, in
            services, or in any other form of consideration — for a more
            positive review or a higher ranking. We will not begin accepting
            such payments.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            This is especially important in the reptile hobby because the
            highest-commission products are often the lowest-quality ones
            (coil-style UVB bulbs and incorrect-wattage heat lamps, for
            example). Our editorial team builds rankings first; affiliate
            links are added afterward.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong>
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on
            Lizard.com are bylined &quot;Lizard.com Editorial&quot; — not
            fabricated DACVZM credentials.
          </li>
          <li>
            <strong>We do not use undisclosed affiliate links.</strong>
          </li>
        </ul>

        <h2>Editorial Independence Policy</h2>
        <ul>
          <li>
            Rankings are made first, affiliate links added second.
          </li>
          <li>
            Commission rates do not affect recommendations. Where two pieces
            of equipment are comparable, we recommend the one that better fits
            the species and the enclosure described, regardless of payout.
          </li>
          <li>
            We include products that pay no commission. Several
            best-in-category reptile products (notably some European-made UVB
            fixtures and thermostats) have no U.S. affiliate program; we
            still recommend them.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific product or
          brand, please email{' '}
          <a href="mailto:editorial@lizard.com">editorial@lizard.com</a>.
          Partnership and advertiser inquiries:{' '}
          <a href="mailto:partnerships@lizard.com">partnerships@lizard.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
