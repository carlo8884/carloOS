import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  AffiliateDisclosure,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Affiliate Disclosure',
  description:
    'How Vets.co makes money: pet insurance referrals only — no product affiliate links, no sponsored editorial, no paid reviews.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Affiliate Disclosure',
  description:
    'Full FTC-compliant affiliate disclosure for Vets.co — editorial-only on products, with pet insurance referrals as the sole affiliate revenue channel.',
  url: 'https://vets.co/disclosure',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

export default function DisclosurePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Affiliate Disclosure',
        subtitle:
          'How Vets.co makes money. Editorially, this is the most restrictive disclosure across the network — Vets.co carries no product affiliate links, only pet insurance referrals.',
        category: 'Legal & Transparency',
        authorName: 'Vets.co Editorial — last updated 2026-05-29',
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
        <AffiliateDisclosure variant="page" siteId="vets-co" />

        <h2>FTC Affiliate Disclosure (Full Version)</h2>
        <p>
          This is the full, unabridged affiliate disclosure for Vets.co. The
          short version: Vets.co is editorial-only on products. We do not
          carry product affiliate links of any kind — no Amazon, no Chewy, no
          pet supply retailers, no supplement brands. The only affiliate
          relationship that exists on this site is with pet insurance
          networks, and even there we never accept payment in exchange for
          favorable coverage.
        </p>
        <p>
          The longer version below exists so any reader, advertiser,
          regulator, or competitor can audit exactly what we do and do not do
          on this site. If anything here is unclear or appears to contradict
          a Vets.co page, please email{' '}
          <a href="mailto:editorial@vets.co">editorial@vets.co</a> and we will
          fix it.
        </p>
        <p>
          This disclosure is published in compliance with the U.S. Federal
          Trade Commission&apos;s <em>Guides Concerning the Use of
          Endorsements and Testimonials in Advertising</em> (16 CFR Part 255).
        </p>

        <h2>What an Affiliate Link Is</h2>
        <p>
          An affiliate link passes a tracking identifier to the destination
          when clicked. On Vets.co, the only affiliate links are to pet
          insurance carriers. If a reader clicks one of those links and
          purchases a policy, the carrier pays Vets.co a referral fee. The
          premium the reader pays is the same as if they had navigated to the
          carrier directly. There is no markup.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          Vets.co&apos;s affiliate participation is limited to pet insurance
          carriers, including: Trupanion, Healthy Paws, Embrace, Lemonade Pet,
          and other carriers administered through Impact Radius. We may add or
          remove carriers as those relationships evolve. Adding a new carrier
          never retroactively changes our existing coverage of other carriers.
        </p>

        <h2>What We Explicitly Do NOT Do</h2>
        <p>
          The list below is the load-bearing part of this page. Vets.co exists
          as a clinical-reference site for pet owners and as a directory of
          veterinary care. The editorial integrity of those two functions
          requires hard limits on affiliate behavior.
        </p>
        <ul>
          <li>
            <strong>We carry NO product affiliate links.</strong> Vets.co does
            not participate in Amazon Associates, Chewy&apos;s affiliate
            program, or any pet supplement, food, or supply affiliate program.
            Where we link to a product or supplement, the link is a plain
            informational link — no tracking, no commission.
          </li>
          <li>
            <strong>We never accept payment for favorable reviews.</strong> No
            insurance carrier, telehealth platform, or veterinary product
            company has ever paid Vets.co for a more positive review, a higher
            ranking, or any other editorial outcome. We will not begin
            accepting such payments.
          </li>
          <li>
            <strong>We never let commission rates change rankings.</strong>{' '}
            When we compare pet insurance carriers, the comparison is
            structured around policy terms (waiting periods, exclusions,
            reimbursement rate, deductible structure, claims processing time),
            not around which carrier pays the highest referral fee.
          </li>
          <li>
            <strong>We do not run sponsored editorial.</strong> If you are
            reading editorial content on Vets.co, no carrier and no product
            company paid for that placement.
          </li>
          <li>
            <strong>We do not invent credentials.</strong> Articles on Vets.co
            are bylined &quot;Vets.co Editorial&quot; — the working editorial
            team — and not under fabricated DVM, DACVIM, or other specialist
            credentials. When we cite a veterinarian or a veterinary
            professional organization, we cite the actual professional or
            organization and the actual source (AAHA, AVMA, WSAVA, etc.).
          </li>
          <li>
            <strong>We do not influence treatment decisions for commission.</strong>{' '}
            Nothing on Vets.co should ever push a reader toward a more expensive
            workup, procedure, or medication on the basis of a referral
            relationship. There is no clinical decision support on Vets.co
            that is gated behind a paid pathway.
          </li>
        </ul>

        <h2>How We Make Money</h2>
        <ol>
          <li>
            Pet insurance referral fees from the carriers listed above. These
            are typically structured as cost-per-acquisition (CPA) flat
            payments rather than percentage-of-sale.
          </li>
          <li>
            Newsletter sponsorships. Sponsorships are clearly labeled inside
            the newsletter; sponsors have no input on editorial content.
            Vets.co does not accept on-site editorial sponsorship.
          </li>
          <li>
            Display advertising via a third-party ad network. Ads are served
            programmatically and the editorial team has no involvement.
          </li>
        </ol>

        <h2>Editorial Independence Policy</h2>
        <ul>
          <li>
            Insurance carrier rankings are made first, referral links added
            second.
          </li>
          <li>
            Referral fee rates do not affect rankings.
          </li>
          <li>
            We include carriers that pay no referral. When the best fit for a
            given pet, condition, or state is a carrier with no referral
            agreement, we still cover and recommend it.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you spot a missing disclosure, an outdated link, or anything that
          looks like editorial bias toward a specific insurance carrier or
          provider, please email{' '}
          <a href="mailto:editorial@vets.co">editorial@vets.co</a>. Partnership
          and carrier inquiries:{' '}
          <a href="mailto:partnerships@vets.co">partnerships@vets.co</a>.
        </p>
      </div>
    </ArticleLayout>
  )
}
