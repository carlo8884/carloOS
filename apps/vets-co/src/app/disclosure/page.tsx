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
    'How Vets.co makes money: Amazon Associates, pet insurance referrals, and veterinary telehealth. We do not accept payment for favorable reviews.',
  path: '/disclosure',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Affiliate Disclosure',
  description:
    'Affiliate disclosure for Vets.co: Amazon Associates, pet insurance referrals, and veterinary telehealth.',
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
          'How Vets.co makes money. We earn from Amazon Associates, pet insurance referrals, and veterinary telehealth. We do not accept payment for a favorable review.',
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

        <h2>Affiliate disclosure</h2>
        <p>
          Vets.co earns a commission when a reader buys through some of the
          links on this site. As an Amazon Associate we earn from qualifying
          purchases. We also earn referral fees from pet insurance carriers
          and from veterinary telehealth services. The price you pay is the
          same as if you went to that company directly. We do not accept
          payment for a favorable review or a higher ranking.
        </p>
        <p>
          If something on this page disagrees with a link on the site, email{' '}
          <a href="mailto:editorial@vets.co">editorial@vets.co</a>.
        </p>
        <p>
          This disclosure is published in compliance with the U.S. Federal
          Trade Commission&apos;s <em>Guides Concerning the Use of
          Endorsements and Testimonials in Advertising</em> (16 CFR Part 255).
        </p>

        <h2>What an Affiliate Link Is</h2>
        <p>
          An affiliate link tells the other site that the click came from
          Vets.co. Those links go to Amazon, to pet insurance carriers, and
          to veterinary telehealth services. If you buy a product, a policy,
          or a consult through one of them, that company may pay Vets.co a
          fee. You pay the same price you would have paid by going there
          yourself.
        </p>

        <h2>Programs We Participate In</h2>
        <p>
          Vets.co participates in three kinds of programs. First, Amazon
          Associates. As an Amazon Associate we earn from qualifying
          purchases. Second, pet insurance carriers, including Trupanion,
          Healthy Paws, Embrace, Lemonade Pet, and other carriers. Third,
          veterinary telehealth services that connect pet owners with a
          licensed veterinarian: Vetster, AskVet, and Chewy&apos;s Connect
          with a Vet. We may add or remove partners as those relationships
          change. Adding a partner does not change coverage we have already
          published.
        </p>

        <h2>What We Explicitly Do NOT Do</h2>
        <p>
          Vets.co is a reference site for pet owners and a directory of
          veterinary care. These limits stay in place around the affiliate
          links above.
        </p>
        <ul>
          <li>
            <strong>Amazon links are disclosed.</strong> Product links that
            go through Amazon are affiliate links. As an Amazon Associate we
            earn from qualifying purchases. We do not accept payment from a
            brand to rank its product higher.
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
            Amazon Associates commissions on qualifying purchases.
          </li>
          <li>
            Pet insurance referral fees from the carriers listed above.
          </li>
          <li>
            Veterinary telehealth referral fees from Vetster, AskVet, and
            Chewy&apos;s Connect with a Vet when a reader starts a consult. As
            with insurance, these are referral fees and never change our
            editorial guidance about when and why to see a vet.
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
