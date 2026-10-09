import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, InlinePartnerQuote, RelatedLinks, buildArticleSchema, buildMetadata, PrimaryHop, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env. An unset AFF_SPOT_TAG keeps the quote as a note.
// A set tag switches this control back to /go.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Spot vs ManyPets Pet Insurance | Vets.co',
  description: 'Which sample policy to read: Spot for adjustable limits, or ManyPets for one comprehensive plan. Both prices are quote-based.',
  path: '/reviews/spot-vs-manypets-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Spot or ManyPets',
  description: 'The fine-print page already scores Spot for adjustable limits and ManyPets for a single comprehensive plan.',
  url: 'https://vets.co/reviews/spot-vs-manypets-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which policy does the fine-print page mark as the winner?',
    answer: 'Spot, marked Customizable. The review lists adjustable limits, exam fees often covered, and an optional preventive add-on. The price line is quote-based. The preventive add-on is not insurance.',
  },
  {
    question: 'When does that page point to ManyPets?',
    answer: 'When you want one comprehensive plan instead of several structures. ManyPets. The review lists a single plan, pay-then-claim, and relatively clear fine print. Availability varies by state. The price line is also quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both reviews say quote-based. Nothing here adds a premium, a reimbursement percent, or a waiting period the review does not print.',
  },
]

export default function SpotVsManyPetsGuidePage() {
  const spotHref = '/go/spot/home?s=reviews-spot-vs-manypets-guide'
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Spot or ManyPets',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Spot is the top pick when you want adjustable limits on one policy instead of a single comprehensive plan.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/spot/home?s=reviews-spot-vs-manypets-guide" label="Get a Spot quote" />
          <HopDisclosure tone="on-dark" siteId="vets-co" href="/go/spot/home?s=reviews-spot-vs-manypets-guide" />
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Spot vs ManyPets', href: '/reviews/spot-vs-manypets-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Reading the fine print', href: '/insurance/reading-the-fine-print' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-08" />
        <p>The <Link href="/insurance/reading-the-fine-print">fine-print page</Link> already puts Spot and ManyPets side by side as two sample policies to read, and it points to the <Link href="/reviews/best-pet-insurance">insurance review</Link> for the wider comparison. Neither product prints a monthly premium.</p>
        <h2>What the review says about Spot</h2>
        <p>Spot is Customizable and the winner on that page. Limits are adjustable. Exam fees are often covered. Preventive care is an optional add-on, and the review says that add-on is not insurance. The price line is quote-based. The cons say to read the waiting-period terms. Nothing here fills in a waiting-period length the review left unread.</p>
        <h2>What the review says about ManyPets</h2>
        <p>ManyPets is Straightforward Terms. The plan is a single comprehensive policy rather than a tier maze. The model is pay-then-claim. The review calls the fine print relatively clear and says availability varies by state. The price line is quote-based. Fewer structures to mix and match is the tradeoff in the review.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Spot sample when you want several limit and deductible combinations on one carrier, and treat the preventive add-on as separate from the insurance. Open the ManyPets sample when one comprehensive plan is easier to read, and confirm the state actually offers it. On both, read waiting periods, exclusions, exam-fee language, and the annual limit in the sample policy. Do not treat either quote-based line as a price from this page.</p>
        <p>The link below opens the Spot quote from the fine-print page. The price you see there is the carrier&apos;s quote, not a figure from this page.</p>
        <HopDisclosure siteId="vets-co" href={spotHref} />
        <p><InlinePartnerQuote href={spotHref} label="Get a Spot quote" /></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "ManyPets", url: "https://manypets.com/", publisher: "ManyPets" },
            { label: "Spot", url: "https://www.spotpet.com/", publisher: "Spot" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
