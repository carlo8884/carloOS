import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Affiliate Disclosure',
  description:
    'How PetFood.com makes money: Chewy and Amazon retail affiliates plus pet insurance for prescription diets. No paid brand placements.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for PetFood.com. Retailer-only affiliates; no brand placements; WSAVA-anchored editorial position.',
  url: 'https://petfood.com/disclosure',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How PetFood.com makes money. Retailer-only affiliate links, no brand placements, and a WSAVA-anchored editorial position that controls how affiliate relationships interact with our brand evaluations.',
        category: 'Legal & Transparency',
        authorName: 'PetFood.com Editorial — last updated 2026-05-29',
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
        <AffiliateDisclosure variant="page" siteId="petfood-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for PetFood.com.
          The short version: some links on this site are retailer affiliate
          links; if you click one and buy something, we may earn a commission
          at no cost to you; we do not accept paid placements from pet food
          brands; we never accept payment in exchange for favorable reviews.
        </p>
        <p>
          The longer version below exists so any reader, advertiser,
          regulator, or competitor can audit exactly what we do and do not do.
          If anything here is unclear or appears to contradict a PetFood.com
          page, email{' '}
          <a href="mailto:editorial@petfood.com">editorial@petfood.com</a>.
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
          retailer&apos;s attribution window, the retailer pays PetFood.com a
          commission. The price you pay is the same as if you had navigated
          to the retailer directly.
        </p>
        <p>
          Every page on PetFood.com that contains affiliate links carries a
          disclosure either at the top of the page or in the page footer, in
          addition to the site-wide footer disclosure. Affiliate clicks route
          through our internal redirect (<code>/go/[vendor]/[sku]</code>) for
          auditability.
        </p>

        <h2>Programs We Participate In</h2>
        <ul>
          <li>
            <strong>Chewy Affiliate Program.</strong> Chewy is the largest
            pure-play pet retailer in the United States and stocks the vast
            majority of brands we evaluate, including therapeutic
            (&quot;prescription&quot;) diets.
          </li>
          <li>
            <strong>Amazon Associates.</strong> Amazon stocks a substantial
            subset of the pet food market, including many of the brands we
            evaluate.
          </li>
          <li>
            <strong>Pet insurance — therapeutic-diet pathway only.</strong>{' '}
            Some pet insurance plans cover prescription-diet costs as part of
            chronic-condition management. When we discuss the cost of
            prescription diets we may link to insurance carriers (Trupanion,
            Healthy Paws, and others) that cover those costs. The link is to
            the insurance product, not to a specific diet.
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted, and remove
          programs if we exit them. Adding or removing a program never
          retroactively changes our brand evaluations.
        </p>

        <h2>How We Make Money</h2>
        <ol>
          <li>
            Affiliate commissions from the retailers above when readers click
            through and complete a purchase.
          </li>
          <li>
            Newsletter sponsorships. Sponsorships are clearly labeled inside
            the newsletter; sponsors have no input on the surrounding
            editorial content.
          </li>
          <li>
            Display advertising via a third-party ad network.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <p>
          The list below is the load-bearing part of this page. PetFood.com is
          anchored to the WSAVA (World Small Animal Veterinary Association)
          framework for evaluating pet food manufacturers — formulator
          qualifications, in-house feeding trials, manufacturing controls,
          quality assurance. That framework only stays meaningful if the
          following limits hold.
        </p>
        <ul>
          <li>
            <strong>We do not accept paid placements from brands.</strong> No
            pet food brand has ever paid PetFood.com — in money, in product,
            in services, or in any other form of consideration — for inclusion
            in a list, for a more favorable evaluation, or for a higher
            position in any ranking. Brand evaluations are not for sale.
          </li>
          <li>
            <strong>We never accept payment for favorable reviews.</strong>{' '}
            This applies to brands, distributors, and any third party.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            Brand rankings are produced first, then retailer affiliate links
            are attached to the products that survive. Where two brands score
            similarly, the better fit for the use case wins, regardless of
            which retailer pays a higher commission for that brand.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong>
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on
            PetFood.com are bylined &quot;PetFood.com Editorial&quot; — not
            under fabricated &quot;veterinary nutritionist&quot; or DACVN
            credentials. When we cite the work of a board-certified veterinary
            nutritionist, we cite the actual professional and the actual
            source.
          </li>
          <li>
            <strong>We do not use undisclosed affiliate links.</strong>
          </li>
        </ul>

        <h2>Editorial Independence Policy</h2>
        <ul>
          <li>
            Brand rankings are made first using the WSAVA framework; retailer
            affiliate links are added second.
          </li>
          <li>
            Commission rates do not affect rankings.
          </li>
          <li>
            We include brands that pay no commission. When a brand the
            framework says belongs in a list has no presence on Chewy or
            Amazon, we still include it.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific brand,
          please email{' '}
          <a href="mailto:editorial@petfood.com">editorial@petfood.com</a>.
          Partnership and advertiser inquiries:{' '}
          <a href="mailto:partnerships@petfood.com">partnerships@petfood.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
