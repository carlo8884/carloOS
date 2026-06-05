import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  ArticleByline,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Affiliate Disclosure',
  description:
    'How Ferrets.com makes money: Adopt-a-Pet adoption referrals and ferret-specialty retailers. No paid placements from brands or rescues.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferrets-com',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Ferrets.com — directory-first, with adoption and ferret-specialty retailer affiliate relationships.',
  url: 'https://ferrets.com/disclosure',
  imageUrl: '',
  authorName: 'Ferrets.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="ferrets-com"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Ferrets.com makes money. We are directory-first: an Adopt-a-Pet adoption-funnel affiliate plus ferret-specialty retailer relationships make up the entirety of our affiliate exposure.',
        category: 'Legal & Transparency',
        authorName: 'Ferrets.com Editorial — last updated 2026-05-29',
        publishedAt: 'May 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Disclosure', href: '/disclosure' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'State-by-State Legality Directory', href: '/states', category: 'Directory' },
        { title: 'Ferret Legality Topics', href: '/legality', category: 'Legality' },
        { title: 'Adopting a Ferret', href: '/adopt', category: 'Adoption' },
        { title: 'Find an Exotic-Pet Vet', href: '/find-a-vet', category: 'Directory' },
      ]}
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Ferrets.com Editorial"
          publishedAt="2026-05-29T00:00:00Z"
          updatedAt="2026-05-29T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <AffiliateDisclosure variant="page" siteId="ferrets-com" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Ferrets.com.
          The short version: some links on this site are affiliate links;
          most are adoption referrals rather than product purchases; if you
          click an affiliate link and complete the linked action (adoption
          inquiry, purchase) we may earn a referral fee at no cost to you;
          that referral does not change our editorial recommendations; we
          never accept payment in exchange for favorable reviews or rescue
          rankings.
        </p>
        <p>
          The longer version is below. If anything here is unclear or appears
          to contradict a Ferrets.com page, email{' '}
          <a href="mailto:editorial@ferrets.com">editorial@ferrets.com</a>.
        </p>
        <p>
          This disclosure is published in compliance with the U.S. Federal
          Trade Commission&apos;s <em>Guides Concerning the Use of
          Endorsements and Testimonials in Advertising</em> (16 CFR Part 255).
        </p>

        <h2>What an Affiliate Link Is</h2>
        <p>
          An affiliate link passes a tracking identifier to the destination
          when clicked. For Ferrets.com, the most common affiliate link is an
          adoption referral — when a reader uses our adoption pathway to
          contact a shelter or rescue listed on Adopt-a-Pet, we may earn a
          small referral fee from Adopt-a-Pet&apos;s partner program. The
          shelter pays nothing and the adopter pays nothing.
        </p>
        <p>
          Affiliate clicks route through our internal redirect
          (<code>/go/[vendor]/[sku]</code>) for auditability.
        </p>

        <h2>Programs We Participate In</h2>
        <ul>
          <li>
            <strong>Adopt-a-Pet affiliate program.</strong> Adopt-a-Pet is the
            largest North American adoption directory, partnered with most
            U.S. shelters and many rescues. Our adoption-funnel links go
            through their affiliate program where supported.
          </li>
          <li>
            <strong>Ferret-specialty retailers.</strong> When we link to a
            specific piece of husbandry gear or food, it is most often a
            ferret-specialty retailer (Marshall Pet Products, Wysong, and a
            small number of independent operators). Some operate affiliate
            programs; some do not. We link to them either way.
          </li>
        </ul>
        <p>
          We will add programs to this list as we are accepted. Ferrets.com
          does not currently participate in general-purpose pet retailer
          affiliate programs (no Amazon, no Chewy on this site), because the
          ferret market is small enough that the editorial value of those
          links does not justify the complexity.
        </p>

        <h2>How We Make Money</h2>
        <ol>
          <li>
            Adopt-a-Pet referral fees from completed adoption-pathway
            referrals.
          </li>
          <li>
            Affiliate commissions from ferret-specialty retailers when readers
            click through and complete a purchase.
          </li>
          <li>
            Display advertising via a third-party ad network.
          </li>
        </ol>

        <h2>What We Do Not Do</h2>
        <ul>
          <li>
            <strong>We never accept payment for favorable reviews.</strong> No
            rescue, no shelter, no breeder, no food brand, and no equipment
            maker has ever paid Ferrets.com — in money, in product, in
            services, or in any other form of consideration — for a more
            positive review, a higher position in any directory, or any other
            editorial outcome. We will not begin accepting such payments.
          </li>
          <li>
            <strong>We do not accept paid placements for rescues or
            shelters.</strong> Directory listings and rescue rankings are
            editorial. A rescue cannot pay to appear, pay to appear higher,
            or pay to remove a critical note.
          </li>
          <li>
            <strong>We never let referral fees change rankings.</strong>
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong>
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on
            Ferrets.com are bylined &quot;Ferrets.com Editorial&quot; — not
            fabricated specialist credentials.
          </li>
          <li>
            <strong>We do not use undisclosed affiliate links.</strong>
          </li>
        </ul>

        <h2>Editorial Independence Policy</h2>
        <ul>
          <li>
            Directory and ranking decisions are made first; affiliate links
            are added second.
          </li>
          <li>
            Referral fee rates do not affect rankings.
          </li>
          <li>
            We include rescues, shelters, and products that pay no referral.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated affiliate link, or
          anything that looks like editorial bias toward a specific rescue,
          retailer, or brand, please email{' '}
          <a href="mailto:editorial@ferrets.com">editorial@ferrets.com</a>.
          Partnership and advertiser inquiries:{' '}
          <a href="mailto:partnerships@ferrets.com">partnerships@ferrets.com</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
