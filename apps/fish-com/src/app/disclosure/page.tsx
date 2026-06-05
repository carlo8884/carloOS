import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
  ArticleByline,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Affiliate Disclosure',
  description:
    'How Fish.com makes money: affiliate programs (Amazon, Chewy, aquarium retailers), what we never do (paid reviews), and editorial-integrity policy.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Fish.com, including the programs we participate in and our editorial-integrity contract.',
  url: 'https://fish.com/disclosure',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Fish.com makes money, which affiliate programs we participate in, and the editorial-integrity contract that controls how affiliate relationships interact with our recommendations.',
        category: 'Legal & Transparency',
        authorName: 'Fish.com Editorial — last updated 2026-05-29',
        publishedAt: 'May 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Disclosure', href: '/disclosure' },
      ]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }]}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
        <AffiliateDisclosure variant="page" siteId="fish-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Fish.com. The
          short version: some links on this site are affiliate links; if you
          click one and buy something, we may earn a commission at no cost to
          you; that commission does not change our editorial recommendations;
          we never accept payment in exchange for favorable reviews.
        </p>
        <p>
          The longer version is below. It exists so that any reader,
          advertiser, regulator, or competitor can audit exactly what we do
          and do not do on this site. If anything here is unclear or appears
          to contradict something you see on a Fish.com page, please email{' '}
          <a href="mailto:editorial@fish.com">editorial@fish.com</a> and we
          will fix it.
        </p>
        <p>
          This disclosure is published in compliance with the U.S. Federal
          Trade Commission&apos;s <em>Guides Concerning the Use of
          Endorsements and Testimonials in Advertising</em> (16 CFR Part 255).
          It applies to all pages on fish.com.
        </p>

        <h2>What an Affiliate Link Is</h2>
        <p>
          An affiliate link passes a tracking identifier to the destination
          retailer when clicked. If you complete a purchase within the
          retailer&apos;s attribution window — usually 24 hours for Amazon,
          longer for aquarium specialty retailers — the retailer pays Fish.com
          a commission. The price you pay is the same as if you had navigated
          to the retailer directly.
        </p>
        <p>
          On Fish.com, every page that contains affiliate links carries a
          disclosure either at the top of the page (above the first affiliate
          link) or in the page footer, in addition to the site-wide footer
          disclosure. Clicking an affiliate link on Fish.com routes through
          our internal redirect (<code>/go/[vendor]/[sku]</code>) before
          landing on the retailer.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          Fish.com is a participant in or actively pursuing membership in the
          following affiliate programs:
        </p>
        <ul>
          <li>
            <strong>Amazon Associates.</strong> Amazon is the dominant retailer
            for entry-level aquarium equipment — test kits, heaters,
            thermometers, dechlorinators, and many tank and filter brands.
            Most aquarium categories on Amazon pay a small commission
            (typically 1% to 4%).
          </li>
          <li>
            <strong>Chewy Affiliate Program.</strong> Chewy carries a large
            selection of aquarium supplies and fish food. Their program is
            administered through Impact Radius.
          </li>
          <li>
            <strong>Aquarium specialty retailers.</strong> When we recommend a
            piece of equipment — a specific canister filter, a CO2 regulator,
            a livestock vendor — that is not stocked by Amazon or Chewy, we
            link to specialty pet stores and aquarium retailers directly. Some
            of those retailers operate affiliate programs; some do not. We
            link to the best vendor for the product either way.
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted, and remove
          programs if we exit them. Adding or removing a program never
          retroactively changes our existing rankings.
        </p>

        <h2>How We Make Money</h2>
        <p>
          Fish.com&apos;s revenue today comes from three sources, in
          approximate order of size:
        </p>
        <ol>
          <li>
            Affiliate commissions from the programs listed above, generated
            when readers click through to a retailer and complete a purchase.
          </li>
          <li>
            Newsletter sponsorships. Sponsorships are clearly labeled inside
            the newsletter; the sponsor has no input on the surrounding
            editorial content. We do not accept sponsors for on-site
            editorial pages.
          </li>
          <li>
            Display advertising via a third-party ad network. Ads are served
            programmatically; we have no direct relationship with the
            individual brands shown.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <p>The following list is the load-bearing part of this page.</p>
        <ul>
          <li>
            <strong>We never accept payment for favorable reviews.</strong> No
            brand — including no aquarium equipment manufacturer, no livestock
            vendor, and no fish food maker — has ever paid Fish.com for a more
            positive review, a higher ranking, or any other editorial outcome.
            We will not begin accepting such payments.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            Our editorial team builds rankings first; the publishing team adds
            affiliate links afterward. Commission rates are not visible during
            the ranking process.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong> If you are
            reading editorial content on Fish.com, no brand paid for that
            placement.
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on Fish.com
            are bylined &quot;Fish.com Editorial&quot; — the working editorial
            team — not fabricated specialist credentials.
          </li>
          <li>
            <strong>We do not use undisclosed affiliate links.</strong> Every
            page with affiliate links has a disclosure. Every affiliate link
            routes through <code>/go/[vendor]/[sku]</code>.
          </li>
        </ul>

        <h2>Editorial Independence Policy</h2>
        <ul>
          <li>
            Rankings are made first, affiliate links added second.
          </li>
          <li>
            Commission rates do not affect recommendations. Where two products
            are comparable, we recommend the one that better fits the use case
            described, regardless of payout.
          </li>
          <li>
            We include products that pay no commission. When the best canister
            filter, the best test kit, or the best fish food brand for a given
            use case has no affiliate program, we still include and recommend
            it.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific product or
          brand, please email{' '}
          <a href="mailto:editorial@fish.com">editorial@fish.com</a>. Press,
          partnership, and advertiser inquiries:{' '}
          <a href="mailto:partnerships@fish.com">partnerships@fish.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
