import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  ArticleByline,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Affiliate Disclosure',
  description:
    'How Ferret.com makes money: Amazon, Chewy, and ferret-specialty retailers (Marshall, Wysong). Editorial-integrity policy and contact info.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Ferret.com, including the programs we participate in and our editorial-integrity contract.',
  url: 'https://ferret.com/disclosure',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Ferret.com makes money, which affiliate programs we participate in, and the editorial-integrity contract that controls how affiliate relationships interact with our husbandry and health recommendations.',
        category: 'Legal & Transparency',
        authorName: 'Ferret.com Editorial — last updated 2026-05-29',
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
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-29"
            updatedAt="2026-05-29"
            reviewedBy="Editorial team"
          />

        <AffiliateDisclosure variant="page" siteId="ferret-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Ferret.com.
          The short version: some links on this site are affiliate links; if
          you click one and buy something, we may earn a commission at no cost
          to you; that commission does not change our editorial
          recommendations; we never accept payment in exchange for favorable
          reviews.
        </p>
        <p>
          The longer version is below. It exists so any reader, advertiser,
          regulator, or competitor can audit exactly what we do and do not do.
          If anything here is unclear or appears to contradict a Ferret.com
          page, email{' '}
          <a href="mailto:editorial@ferret.com">editorial@ferret.com</a>.
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
          retailer&apos;s attribution window, the retailer pays Ferret.com a
          commission. The price you pay is the same as if you had navigated
          to the retailer directly.
        </p>
        <p>
          Every page on Ferret.com that contains affiliate links carries a
          disclosure either at the top of the page (above the first affiliate
          link) or in the page footer, in addition to the site-wide footer
          disclosure. Affiliate clicks route through our internal redirect
          (<code>/go/[vendor]/[sku]</code>) for auditability.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          The ferret market is small. Mainstream pet retailers do not stock
          much of the gear that actually serves ferret owners well, so our
          affiliate mix is a combination of general and ferret-specialty
          channels.
        </p>
        <ul>
          <li>
            <strong>Amazon Associates.</strong> Amazon stocks the bulk of the
            broad pet-supply market — cages, litter, litter boxes, hammocks,
            harnesses, carriers, basic toys. Commission rates are low but the
            inventory overlap with ferret needs is high.
          </li>
          <li>
            <strong>Chewy Affiliate Program.</strong> Chewy carries a moderate
            range of ferret-relevant items, mostly small-animal cages,
            bedding, and a limited selection of ferret foods.
          </li>
          <li>
            <strong>Ferret-specialty retailers.</strong> Some of the most
            important products for ferret husbandry — high-meat-protein
            kibble formulations, ferret-safe vaccines (referrals to vets,
            not direct sales), and ferret-specific harnesses — come from
            ferret-specialty channels. Marshall Pet Products and Wysong are
            the two long-standing ferret-specialty operators we link to most
            often. Some of these retailers operate affiliate programs; some
            do not. We link to them either way when they are the right fit.
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted, and remove
          programs if we exit them. Adding or removing a program never
          retroactively changes our existing recommendations.
        </p>

        <h2>How We Make Money</h2>
        <ol>
          <li>
            Affiliate commissions from the programs above when readers click
            through and complete a purchase.
          </li>
          <li>
            Newsletter sponsorships. Sponsorships are clearly labeled inside
            the newsletter; sponsors have no input on editorial content.
          </li>
          <li>
            Display advertising via a third-party ad network.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <ul>
          <li>
            <strong>We never accept payment for favorable reviews.</strong> No
            ferret food brand, no cage manufacturer, no supplement maker, and
            no specialty retailer has ever paid Ferret.com — in money, in
            product, in services, or in any other form of consideration — for
            a more positive review or a higher ranking. We will not begin
            accepting such payments.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            This matters a great deal in the ferret market because the
            highest-volume products (mass-market &quot;ferret&quot; foods that
            do not meet ferret nutritional requirements) are typically the
            highest-commission options.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong>
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on
            Ferret.com are bylined &quot;Ferret.com Editorial&quot; — not
            fabricated specialist credentials. When we cite ferret-specific
            clinical sources (Quesenberry &amp; Carpenter, the
            <em>Journal of Exotic Pet Medicine</em>, AEMV materials), we cite
            them by name.
          </li>
          <li>
            <strong>We do not use undisclosed affiliate links.</strong>
          </li>
        </ul>

        <h2>Editorial Independence Policy</h2>
        <ul>
          <li>
            Rankings are made first using the ferret-specific nutrition and
            husbandry criteria described elsewhere on the site, then
            affiliate links are added.
          </li>
          <li>
            Commission rates do not affect recommendations.
          </li>
          <li>
            We include products that pay no commission. Several of the
            best-fit ferret kibbles and several quality cages have no
            affiliate program; we still recommend them.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific product or
          brand, please email{' '}
          <a href="mailto:editorial@ferret.com">editorial@ferret.com</a>.
          Partnership and advertiser inquiries:{' '}
          <a href="mailto:partnerships@ferret.com">partnerships@ferret.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
