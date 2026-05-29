import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Affiliate Disclosure',
  description:
    'How Horses.com makes money: equestrian affiliates (SmartPak, Dover, Schneiders, Riding Warehouse, Greenhawk, Amazon) and editorial policy.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Horses.com, including the equestrian retailer programs we participate in and our editorial-integrity contract.',
  url: 'https://horses.com/disclosure',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Horses.com makes money, which equestrian retailer affiliate programs we participate in, and the editorial-integrity contract that controls how affiliate relationships interact with our reviews.',
        category: 'Legal & Transparency',
        authorName: 'Horses.com Editorial — last updated 2026-05-29',
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
        <AffiliateDisclosure variant="page" siteId="horses-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Horses.com.
          The short version: some links on this site are affiliate links; if
          you click one and buy something, we may earn a commission at no cost
          to you; that commission does not change our editorial
          recommendations; we never accept payment in exchange for favorable
          reviews.
        </p>
        <p>
          The longer version is below. It exists so any reader, advertiser,
          regulator, or competitor can audit exactly what we do and do not do.
          If anything here is unclear or appears to contradict a Horses.com
          page, email{' '}
          <a href="mailto:editorial@horses.com">editorial@horses.com</a>.
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
          retailer&apos;s attribution window, the retailer pays Horses.com a
          commission. The price you pay is the same as if you had navigated
          to the retailer directly.
        </p>
        <p>
          Every page on Horses.com that contains affiliate links carries a
          disclosure either at the top of the page (above the first affiliate
          link) or in the page footer, in addition to the site-wide footer
          disclosure. Affiliate clicks route through our internal redirect
          (<code>/go/[vendor]/[sku]</code>) for auditability.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          Horses.com&apos;s affiliate programs are equestrian-specialty
          retailers. Most quality tack, supplements, and barn supplies are not
          stocked by general retailers, so we work primarily with the
          specialty channel.
        </p>
        <ul>
          <li>
            <strong>SmartPak.</strong> The largest U.S. equestrian retailer
            and the most commonly-used affiliate partner. Strong English and
            Western inventory plus the SmartPak supplement system.
          </li>
          <li>
            <strong>Dover Saddlery.</strong> Strong English-discipline tack,
            show clothing, and bridlework selection. Affiliate program is
            administered through ShareASale.
          </li>
          <li>
            <strong>Schneiders Saddlery.</strong> Mid-Atlantic specialty
            retailer with deep barn-supply, blanket, and stable-equipment
            ranges.
          </li>
          <li>
            <strong>Riding Warehouse.</strong> West Coast specialty retailer
            with the strongest Western and trail-discipline selection.
          </li>
          <li>
            <strong>Greenhawk.</strong> Canadian equestrian retailer carried
            for readers north of the border.
          </li>
          <li>
            <strong>Amazon Associates.</strong> Limited overlap — primarily
            accessory items (grooming brushes, fly spray, hoof picks).
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted, and remove
          programs if we exit them. Adding or removing a program never
          retroactively changes existing rankings.
        </p>

        <h2>How We Make Money</h2>
        <ol>
          <li>
            Affiliate commissions from the programs above. Equestrian is a
            high-ticket vertical (saddles, blankets, supplements), so per-sale
            commissions are higher than the typical pet-supply baseline.
          </li>
          <li>
            Newsletter sponsorships. Sponsorships are clearly labeled inside
            the newsletter; sponsors have no input on editorial.
          </li>
          <li>
            Display advertising via a third-party ad network.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <ul>
          <li>
            <strong>We never accept payment for favorable reviews.</strong> No
            saddlery maker, supplement brand, blanket manufacturer, or trailer
            company has ever paid Horses.com — in money, in product, in
            services, or in any other form of consideration — for a more
            positive review or a higher ranking. We will not begin accepting
            such payments. Horses.com does not run press-trip reviews.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            Where two saddles, supplements, or blankets are comparable, we
            recommend the one that better fits the horse and discipline
            described, regardless of which retailer carries it.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong>
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on
            Horses.com are bylined &quot;Horses.com Editorial&quot; — not
            under fabricated industry-certification credentials. When we cite
            a trainer, judge, or veterinary professional, we cite them by name
            and qualification.
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
            Commission rates do not affect recommendations.
          </li>
          <li>
            We include products that pay no commission. Many of the most
            highly-regarded saddlery makers and supplement formulators are
            small operations with no affiliate program; we still cover them
            when they are the right fit.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific product or
          brand, please email{' '}
          <a href="mailto:editorial@horses.com">editorial@horses.com</a>.
          Partnership and advertiser inquiries:{' '}
          <a href="mailto:partnerships@horses.com">partnerships@horses.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
