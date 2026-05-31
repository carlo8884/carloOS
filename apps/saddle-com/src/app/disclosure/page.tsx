import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Affiliate Disclosure',
  description:
    'How Saddle.com makes money: equestrian affiliate programs (SmartPak, Dover, Riding Warehouse, Amazon) and our editorial-integrity policy.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Saddle.com, including the equestrian retailer programs we participate in and our editorial-integrity contract.',
  url: 'https://saddle.com/disclosure',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Saddle.com makes money, which equestrian retailer affiliate programs we participate in, and the editorial-integrity contract that controls how affiliate relationships interact with our reviews.',
        category: 'Legal & Transparency',
        authorName: 'Saddle.com Editorial — last updated 2026-05-29',
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
        <AffiliateDisclosure variant="page" siteId="saddle-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Saddle.com.
          The short version: some links on this site are affiliate links; if
          you click one and buy something, we may earn a commission at no cost
          to you; that commission does not change our editorial
          recommendations; we never accept payment in exchange for favorable
          reviews.
        </p>
        <p>
          The longer version is below. It exists so any reader, advertiser,
          regulator, or competitor can audit exactly what we do and do not do.
          If anything here is unclear or appears to contradict a Saddle.com
          page, email{' '}
          <a href="mailto:editorial@saddle.com">editorial@saddle.com</a>.
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
          retailer&apos;s attribution window, the retailer pays Saddle.com a
          commission. The price you pay is exactly the same as if you had
          navigated to the retailer directly.
        </p>
        <p>
          Every page on Saddle.com that contains affiliate links carries a
          disclosure either at the top of the page (above the first affiliate
          link) or in the page footer, in addition to the site-wide footer
          disclosure. Affiliate clicks route through our internal redirect
          (<code>/go/[vendor]/[sku]</code>) for auditability.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          Saddle.com&apos;s programs are equestrian-specialty retailers rather
          than general marketplaces, because most quality tack and saddlery is
          not stocked by general retailers.
        </p>
        <ul>
          <li>
            <strong>SmartPak.</strong> SmartPak is the largest U.S. equestrian
            retailer and our most commonly-used affiliate partner. They carry
            mainstream English and Western saddlery and supplements.
          </li>
          <li>
            <strong>Dover Saddlery.</strong> Dover stocks a strong selection
            of English saddles, bridlework, and show clothing. Their affiliate
            program is administered through ShareASale.
          </li>
          <li>
            <strong>Riding Warehouse.</strong> Riding Warehouse is the West
            Coast specialty retailer with the deepest Western and trail
            selection. Their affiliate program pays a percentage of completed
            sales.
          </li>
          <li>
            <strong>Amazon Associates.</strong> Amazon stocks a moderate
            volume of equestrian supplies, mostly accessory items —
            grooming, fly spray, basic tack repair parts. Commission rates on
            Amazon equestrian categories are low (typically 1% to 3%).
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
            Affiliate commissions from the programs above. Equestrian
            commission rates are higher than most other pet verticals because
            saddlery is a high-ticket category — a single saddle sale
            generates more commission than dozens of low-ticket pet supply
            sales.
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
            saddle manufacturer, bridle maker, or supplement company has ever
            paid Saddle.com — in money, in product, in services, or in any
            other form of consideration — for a more positive review or a
            higher ranking. We will not begin accepting such payments.
            Saddle.com does not run &quot;press-trip&quot; reviews where a
            manufacturer covers travel and lodging.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            Where two saddles or two bridles are comparable, we recommend the
            one that better fits the discipline and the horse described,
            regardless of which retailer carries it.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong>
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on
            Saddle.com are bylined &quot;Saddle.com Editorial&quot; — not
            fabricated industry-certification or &quot;master saddler&quot;
            credentials. When we cite a saddle fitter or equine professional,
            we cite them by name and qualification.
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
            highly-regarded saddle and bridle makers are small workshops with
            no affiliate program; we still cover and recommend them when they
            are the right fit.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific product or
          brand, please email{' '}
          <a href="mailto:editorial@saddle.com">editorial@saddle.com</a>.
          Partnership and advertiser inquiries:{' '}
          <a href="mailto:partnerships@saddle.com">partnerships@saddle.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
