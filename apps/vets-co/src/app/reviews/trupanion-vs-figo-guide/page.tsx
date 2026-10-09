import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Trupanion vs Figo Pet Insurance | Vets.co',
  description: 'Trupanion for unlimited payouts, or Figo for high-limit tiers. Both prices are quote-based.',
  path: '/reviews/trupanion-vs-figo-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Trupanion or Figo',
  description: 'Trupanion for unlimited payouts, or Figo for high-limit plan tiers.',
  url: 'https://vets.co/reviews/trupanion-vs-figo-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the breed-risk page mark as the winner?',
    answer: 'Trupanion, marked Unlimited Payouts. The review lists an unlimited annual limit, hereditary and congenital coverage per policy terms, a per-condition lifetime deductible, and a direct-to-vet payment option. There is no wellness add-on. The price line is quote-based.',
  },
  {
    question: 'When does that page point to Figo?',
    answer: 'When you want high or unlimited annual-limit tiers and app-based claims. Figo. The review lists a pay-then-claim model and an optional wellness add-on. It says to check orthopedic and bilateral terms on the quote. The price line is quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both cards say quote-based. A premium and a waiting period come from the carrier quote, using the terms the breed-risk page already names.',
  },
]

const RANKED = ['Trupanion', 'Figo']
const itemList = buildItemListSchema({
  name: 'Trupanion or Figo',
  items: RANKED.map((name) => ({ name, url: ({ 'Trupanion': 'https://vets.co/go/trupanion/home?s=reviews-trupanion-vs-figo-guide' }[name] ?? 'https://vets.co/reviews/trupanion-vs-figo-guide') })),
})

export default function TrupanionVsFigoGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Trupanion or Figo',
        subtitle: 'Unlimited payouts, or high-limit tiers with app claims. The notes below are the ones on the breed-risk page. Neither price line is a premium.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/trupanion/home?s=reviews-trupanion-vs-figo-guide" label="Get a Trupanion quote" holdWithoutPartnerId />}
      heroExtra={<HopDisclosure siteId="vets-co" href="/go/trupanion/home?s=reviews-trupanion-vs-figo-guide" noteClassName="mt-3 mb-0 text-xs leading-relaxed text-white/80" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Trupanion vs Figo', href: '/reviews/trupanion-vs-figo-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Breed-specific risk', href: '/insurance/breed-specific-risk' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-09" />
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-trupanion-vs-figo-guide"
          checklist={[
            "The review lists an unlimited annual limit, hereditary and congenital coverage per policy terms, a per-condition lifetime deductible, and a direct-to-vet payment option.",
            "When you want high or unlimited annual-limit tiers and app-based claims.",
            "The review lists a pay-then-claim model and an optional wellness add-on.",
            "It says to check orthopedic and bilateral terms on the quote.",
            "A premium and a waiting period come from the carrier quote, using the terms the breed-risk page already names.",
            "That page names Trupanion and Figo as two carriers to quote when a breed has predictable expensive needs.",
          ]}
        />
        <p>The notes below are the ones on the <Link href="/insurance/breed-specific-risk">breed-specific risk page</Link>. That page names Trupanion and Figo as two carriers to quote when a breed has predictable expensive needs. Other guides compare Trupanion with Healthy Paws or Embrace. Neither card prints a monthly premium.</p>
        <h2>What the page says about Trupanion</h2>
        <p>Trupanion is Unlimited Payouts and the winner on that page. The annual limit is unlimited, which the review ties to a major orthopedic or chronic-disease course that would exhaust a capped plan. Hereditary and congenital conditions are covered per policy terms. The deductible is a per-condition lifetime deductible. A direct-to-vet payment option is listed. Cons say premiums can run higher and there is no wellness add-on. The price line is quote-based. The page says to enroll as a puppy so breed-typical conditions are not later excluded as pre-existing. Our notes list no annual or lifetime payout caps and a per-condition lifetime deductible.</p>
        <h2>What the page says about Figo</h2>
        <p>Figo is High-Limit Plans. The card says the carrier offers high and unlimited annual-limit tiers and app-based claims. The model is pay-then-claim. An optional wellness add-on is listed. Cons say to check orthopedic and bilateral terms, and that premiums scale with breed risk. The price line is quote-based. Waiting-period length stays whatever the breed-risk page and the sample policy say.</p>
        <p>The wider ranking of carriers that are not on this pair is the <Link href="/reviews/best-pet-insurance">insurance review</Link>. Early enrollment is the lever that page repeats. A quote still needs the pet’s age, breed, and medical history.</p>
        <h2>Who should quote which carrier</h2>
        <p>Start the Trupanion quote when an unlimited annual payout and direct-to-vet payment are the features you are comparing, and wellness coverage is not required. Start the Figo quote when you want high-limit tiers and an app claim flow, and you will read the orthopedic and bilateral language before you enroll. On both, confirm hereditary coverage in the sample policy rather than in a marketing line. Do not treat either quote-based line as a price from this page.</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Trupanion</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Figo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Unlimited Payouts, and the winner</td>
                <td className="p-3">High-Limit Plans</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Annual limit</th>
                <td className="p-3">Unlimited</td>
                <td className="p-3">High and unlimited annual-limit tiers</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">How a bill is paid</th>
                <td className="p-3">Direct-to-vet payment option</td>
                <td className="p-3">Pay, then claim. App-based claims</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Wellness</th>
                <td className="p-3">No wellness add-on</td>
                <td className="p-3">Optional wellness add-on</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Also on the page</th>
                <td className="p-3">Hereditary and congenital coverage per policy terms. Per-condition lifetime deductible. Premiums can run higher</td>
                <td className="p-3">Check orthopedic and bilateral terms. Premiums scale with breed risk</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Price line</th>
                <td className="p-3">Quote-based</td>
                <td className="p-3">Quote-based</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "Trupanion", url: "https://www.trupanion.com/", publisher: "Trupanion" },
            { label: "Figo", url: "https://figopetinsurance.com/", publisher: "Figo" },
            { label: "Healthy Paws", url: "https://www.healthypawspetinsurance.com/", publisher: "Healthy Paws" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
