import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
  ArticleByline,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Affiliate Disclosure',
  description:
    'How Dog.com makes money: affiliate programs (Amazon, Chewy, pet insurance), what we never do (paid reviews), and editorial-integrity policy.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Dog.com, including the programs we participate in and our editorial-integrity contract.',
  url: 'https://dog.com/disclosure',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Dog.com makes money, which affiliate programs we participate in, and the editorial-integrity contract that controls how affiliate relationships interact with our recommendations.',
        category: 'Legal & Transparency',
        authorName: 'Dog.com Editorial — last updated 2026-05-29',
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
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
        <AffiliateDisclosure variant="page" siteId="dog-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Dog.com. It is
          intentionally longer than the FTC&apos;s minimum requirements. The
          short version: some links on this site are affiliate links; if you
          click one and buy something, we may earn a commission at no cost to
          you; that commission does not change our editorial recommendations;
          we never accept payment in exchange for favorable reviews.
        </p>
        <p>
          The longer version is below. It exists so that any reader, advertiser,
          regulator, or competitor can audit exactly what we do and do not do
          on this site. If anything here is unclear or appears to contradict
          something you see on a Dog.com page, please email{' '}
          <a href="mailto:editorial@dog.com">editorial@dog.com</a> and we will
          fix it.
        </p>
        <p>
          This disclosure is published in compliance with the U.S. Federal Trade
          Commission&apos;s <em>Guides Concerning the Use of Endorsements and
          Testimonials in Advertising</em> (16 CFR Part 255). It applies to all
          pages on dog.com, including all subdomains.
        </p>

        <h2>What an Affiliate Link Is</h2>
        <p>
          An affiliate link is a hyperlink that, when clicked, passes a
          tracking identifier to the destination retailer. If you complete a
          purchase within that retailer&apos;s attribution window — usually
          24 hours for Amazon and longer for most other retailers — the
          retailer pays Dog.com a commission. The price you pay is exactly the
          same as if you had navigated to the retailer directly. There is no
          markup, no surcharge, and no premium for using our link.
        </p>
        <p>
          On Dog.com, every page that contains affiliate links carries a
          disclosure either at the top of the page (above the first affiliate
          link) or in the page footer, in addition to the site-wide footer
          disclosure. Clicking an affiliate link on Dog.com routes through our
          internal redirect (<code>/go/[vendor]/[sku]</code>) before landing
          on the retailer. The redirect lets us count clicks for editorial
          analytics; it does not change what you see on the retailer&apos;s
          page or what they charge.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          Dog.com is a participant in or actively pursuing membership in the
          following affiliate programs:
        </p>
        <ul>
          <li>
            <strong>Amazon Associates.</strong> The world&apos;s largest retail
            affiliate program. Commission rates vary by category and are
            published in the Amazon Associates operating agreement. Most pet
            categories on Amazon pay between 1% and 4% commission.
          </li>
          <li>
            <strong>Chewy Affiliate Program.</strong> Chewy is the largest
            pure-play pet retailer in the United States. Their affiliate
            program is administered through Impact Radius. Commission rates
            are higher for new customers than for repeat customers, but our
            editorial does not differentiate based on which type of customer
            you are.
          </li>
          <li>
            <strong>Pet insurance affiliate networks</strong> — including
            Impact Radius and Awin, which administer affiliate relationships
            for Trupanion, Healthy Paws, Embrace, Lemonade Pet, and others.
            Pet insurance commissions are typically structured as cost-per-
            acquisition (CPA) flat payments rather than percentage-of-sale,
            because insurance is a subscription product.
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted, and remove
          programs if we exit them. Adding or removing a program never
          retroactively changes our existing rankings. If we drop a program,
          we do not go back and delete the recommendations that mentioned
          products from that retailer.
        </p>

        <h2>How We Make Money</h2>
        <p>
          Dog.com&apos;s revenue today comes from three sources, in
          approximate order of size:
        </p>
        <ol>
          <li>
            Affiliate commissions from the programs listed above, generated
            when readers click through to a retailer and complete a purchase.
          </li>
          <li>
            Newsletter sponsorships. When we accept a sponsor for the Dog.com
            newsletter, the sponsorship is labeled clearly as a sponsorship
            inside the newsletter, and the sponsor has no input on the
            surrounding editorial content. We do not accept sponsors for
            on-site editorial pages.
          </li>
          <li>
            Display advertising via a third-party ad network. Ads are served
            programmatically; we do not have direct relationships with the
            individual brands shown. Editorial team members do not see ad
            performance data when making editorial decisions.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <p>The following list is the load-bearing part of this page.</p>
        <ul>
          <li>
            <strong>We never accept payment for favorable reviews.</strong>{' '}
            No brand has ever paid Dog.com — in money, in product, in services,
            or in any other form of consideration — for a more positive review,
            a higher ranking, or any other editorial outcome. We will not begin
            accepting such payments.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            Our editorial team builds rankings first, then the publishing team
            adds affiliate links to whichever products survived the editorial
            review. Commission rates are not visible to the editorial team
            during the ranking process.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong> If you are
            reading editorial content on Dog.com, no brand paid for that
            placement. Sponsored content lives in our newsletter and is
            labeled.
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on Dog.com
            are bylined &quot;Dog.com Editorial&quot; — the working editorial
            team — and not under fabricated DVM or specialist credentials. When
            we cite a veterinary professional, we cite the actual professional
            and the actual source.
          </li>
          <li>
            <strong>We do not use undisclosed affiliate links.</strong> Every
            page with affiliate links has a disclosure. Every affiliate link
            routes through <code>/go/[vendor]/[sku]</code> so it is auditable.
          </li>
        </ul>

        <h2>Editorial Independence Policy</h2>
        <p>
          Affiliate commissions do not influence which products we rank or
          recommend. Specifically:
        </p>
        <ul>
          <li>
            Rankings are made first, affiliate links added second. We decide
            what to include and how to rank it based on the editorial criteria
            in our Editorial Standards. Affiliate links are added afterward to
            whichever products pass that filter.
          </li>
          <li>
            Commission rates do not affect recommendations. Where two products
            are comparable, we recommend the one that better fits the use case
            described, regardless of payout.
          </li>
          <li>
            We include products that pay no commission. When the best product
            for a given use case has no affiliate program, we still include
            and recommend it.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific product or
          brand, please email{' '}
          <a href="mailto:editorial@dog.com">editorial@dog.com</a>. Press,
          partnership, and advertiser inquiries:{' '}
          <a href="mailto:partnerships@dog.com">partnerships@dog.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
