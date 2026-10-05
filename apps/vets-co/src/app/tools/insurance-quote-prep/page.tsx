import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArticleLayout,
  ArticleSourcesList,
  FAQAccordion,
  RelatedLinks,
  TableOfContents,
  buildArticleSchema,
  buildHowToSchema,
  buildMetadata,
} from '@carloOS/ui'
import { QuotePrepChecklist } from '../../../components/tools/QuotePrepChecklist'

const URL = 'https://vets.co/tools/insurance-quote-prep'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Insurance Quote Prep Checklist | Vets.co',
  description:
    'Checklist of pet age, breed, records, deductible, and reimbursement choices, plus questions to ask before a pet insurance quote.',
  path: '/tools/insurance-quote-prep',
})

const GROUPS = [
  {
    id: 'ready',
    title: 'Have this ready',
    items: [
      {
        id: 'age',
        label: 'Pet age',
        detail:
          'The reimbursement estimator already says a quote is run for a specific pet: age, breed, and ZIP. Have the age the carrier form will ask for.',
      },
      {
        id: 'breed',
        label: 'Breed',
        detail:
          'Breed is the second field that estimator step names. Mixed-breed pets still need the description the quote form uses.',
      },
      {
        id: 'zip',
        label: 'ZIP code',
        detail:
          'The same estimator step includes ZIP. Premiums are quoted for a location, so the checklist treats ZIP as part of what to have ready.',
      },
      {
        id: 'records',
        label: 'Veterinary records, including noted symptoms',
        detail:
          'The pre-existing-conditions page says a pre-existing condition is an illness or injury that showed signs, was diagnosed, or was treated before the policy or during the waiting period. A noted symptom can count without a formal diagnosis.',
      },
      {
        id: 'deductible',
        label: 'Deductible structure you want to compare',
        detail:
          'An annual deductible is paid once per policy year. A per-condition deductible is paid once for a new condition, then that condition is not charged the deductible again. The deductibles page says the per-condition form can favor a chronic illness.',
      },
      {
        id: 'reimbursement',
        label: 'Reimbursement percentage',
        detail:
          'After the deductible, the insurer reimburses a fixed percentage of covered costs. The deductibles and how-it-works pages say the common choices are 70%, 80%, or 90%. A higher percentage raises the premium and lowers your share of a covered bill.',
      },
      {
        id: 'limit',
        label: 'Annual limit',
        detail:
          'The annual limit caps reimbursement in a policy year. Those pages say a low limit can be used up by one major illness, and they treat a high or unlimited limit as the catastrophe protection people buy insurance for.',
      },
    ],
  },
  {
    id: 'ask',
    title: 'Ask each carrier',
    items: [
      {
        id: 'pay',
        label: 'Direct pay at checkout, or pay-then-claim?',
        detail:
          'Most policies reimburse you after you pay the clinic. The carrier comparison says Trupanion is the only one of the 11 major carriers that pays the practice directly at checkout. Confirm that on the quote rather than assuming it.',
      },
      {
        id: 'deductible-ask',
        label: 'Is this deductible annual or per condition?',
        detail:
          'The comparison records Trupanion as per-condition, Healthy Paws as annual, and Embrace as a diminishing annual deductible. Ask which structure is on the quote you are looking at.',
      },
      {
        id: 'percent-limit',
        label: 'What reimbursement percentage and annual limit are on this quote?',
        detail:
          'The comparison records Trupanion at 90% with unlimited payouts, Healthy Paws at 80–90% with unlimited payouts, and Embrace at 70–90%. Read the percentage and the limit on the quote itself.',
      },
      {
        id: 'preexisting',
        label: 'How does this policy define a pre-existing condition?',
        detail:
          'Ask whether a symptom noted before enrollment counts, and whether a condition that starts during a waiting period counts. The pre-existing page says both can be excluded, even without a formal diagnosis.',
      },
      {
        id: 'curable',
        label: 'Can a curable condition become eligible later?',
        detail:
          'Incurable or chronic conditions such as diabetes, allergies, heart disease, and cancer are usually excluded for the life of the policy. A curable condition, such as one ear infection that fully resolved, may become eligible after a symptom-free and treatment-free period, often six to eighteen months. Not every insurer offers that path. Ask this carrier.',
      },
      {
        id: 'bilateral',
        label: 'Does one side exclude the other?',
        detail:
          'The pre-existing page uses a cruciate ligament as the example: a problem on one side can make the other side pre-existing too. Ask how this policy treats bilateral conditions.',
      },
      {
        id: 'waiting',
        label: 'What are the waiting periods?',
        detail:
          'Waiting periods are short for accidents, longer for illness, and often longest for orthopedic conditions. Anything that arises during a waiting period is treated as pre-existing. The comparison records a 6-month orthopedic waiting period on Embrace. Ask for the accident, illness, and orthopedic periods on each quote.',
      },
    ],
  },
]

const howToSchema = buildHowToSchema({
  name: 'How to prepare for a pet insurance quote',
  description:
    'Gather the pet facts a quote form asks for, then ask each carrier about deductible structure, reimbursement, pre-existing conditions, and waiting periods before you compare quotes.',
  url: URL,
  totalTime: 'PT10M',
  steps: [
    {
      name: 'Gather age, breed, and ZIP',
      text: 'A quote is for a specific pet. Have the age, breed, and ZIP the form will ask for, the same three fields named on the reimbursement estimator.',
    },
    {
      name: 'Pull veterinary records',
      text: 'Include diagnoses and noted symptoms. A documented symptom can count as pre-existing without a formal diagnosis.',
    },
    {
      name: 'Choose deductible and reimbursement settings to compare',
      text: 'Compare an annual deductible with a per-condition deductible, and compare the common reimbursement choices of 70%, 80%, and 90%, plus a high or unlimited annual limit.',
    },
    {
      name: 'Ask the carrier questions before you enroll',
      text: 'Ask whether the clinic is paid directly, how the deductible works, how pre-existing and bilateral conditions are defined, and what the accident, illness, and orthopedic waiting periods are.',
    },
    {
      name: 'Compare quotes on the carrier comparison',
      text: 'Direct pay, deductibles, reimbursement, and waiting periods are written out on the carrier comparison. This checklist does not open a carrier enrollment.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Insurance Quote Prep Checklist',
  url: URL,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'A free checklist of what to have ready for a pet insurance quote and what to ask each carrier. It does not produce a premium.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Insurance Quote Prep Checklist',
  description:
    'What to have ready before a pet insurance quote, and the questions to ask each carrier about deductibles, reimbursement, pre-existing conditions, and waiting periods.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
})

const FAQS = [
  {
    question: 'What should I have ready before I request a pet insurance quote?',
    answer:
      'Age, breed, and ZIP, plus veterinary records that include diagnoses and noted symptoms. Also decide which deductible structure you want to compare — annual, once per policy year, or per condition, once per new condition — and which reimbursement percentage, commonly 70%, 80%, or 90%, and whether you want a high or unlimited annual limit.',
  },
  {
    question: 'What questions should I ask each carrier?',
    answer:
      'Ask whether the clinic is paid at checkout or you pay and then claim. Ask whether the deductible is annual or per condition, and what reimbursement percentage and annual limit are on the quote. Ask how a pre-existing condition is defined, including symptoms and the waiting period, whether a curable condition can return after a symptom-free period, how bilateral conditions are treated, and the waiting periods for accidents, illness, and orthopedic conditions.',
  },
  {
    question: 'Does this checklist produce a premium?',
    answer:
      'No. It prepares the facts and the questions. Premiums depend on the pet and the quote. Compare quotes on the carrier comparison when you want direct pay, deductibles, and waiting periods in one place.',
  },
  {
    question: 'Where do these facts come from?',
    answer:
      'From the Vets.co pages on deductibles, pre-existing conditions, and the 11-carrier comparison, plus the NAIC consumer guide on pet insurance and the public quote pages named in the sources. Waiting-period lengths are the ones that comparison records.',
  },
]

const SOURCES = [
  {
    label: 'Deductibles and reimbursement — annual versus per-condition deductibles, 70/80/90% reimbursement, and annual limits',
    url: 'https://vets.co/insurance/deductibles-reimbursement',
    publisher: 'Vets.co Editorial',
  },
  {
    label: 'Pre-existing conditions — symptoms, curable versus incurable, bilateral conditions, and waiting periods',
    url: 'https://vets.co/insurance/pre-existing-conditions',
    publisher: 'Vets.co Editorial',
  },
  {
    label: 'Best pet insurance comparison — direct pay, deductible structure, reimbursement, and the Embrace orthopedic waiting period',
    url: 'https://vets.co/reviews/best-pet-insurance',
    publisher: 'Vets.co Editorial',
  },
  {
    label: 'A Consumer’s Guide to Pet Insurance',
    url: 'https://content.naic.org/cipr-topics/pet-insurance',
    publisher: 'NAIC',
  },
  {
    label: 'Trupanion public quote page',
    url: 'https://www.trupanion.com/enrollments/get-a-quote',
    publisher: 'Trupanion',
  },
  {
    label: 'Healthy Paws public quote page',
    url: 'https://www.healthypawspetinsurance.com/quote',
    publisher: 'Healthy Paws',
  },
  {
    label: 'Embrace public quote page',
    url: 'https://quote.embracepetinsurance.com/',
    publisher: 'Embrace',
  },
]

export default function InsuranceQuotePrepPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Insurance Quote Prep Checklist',
        subtitle:
          'What to have ready, and what to ask, before you compare pet insurance quotes.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Insurance Quote Prep Checklist' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Checklist', href: '#checklist' },
              { label: 'Quotes', href: '#quotes' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Insurance references"
            links={[
              { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
              { label: 'Deductibles and reimbursement', href: '/insurance/deductibles-reimbursement' },
              { label: 'Pre-existing conditions', href: '/insurance/pre-existing-conditions' },
              { label: 'How pet insurance works', href: '/insurance/how-pet-insurance-works' },
              { label: 'Reimbursement estimator', href: '/tools/insurance-reimbursement-estimator' },
              { label: 'How we pick', href: '/how-we-pick' },
            ]}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <p>
          A pet insurance quote is only as useful as the facts you bring to it and the questions you ask before you enroll.
          This checklist is built from the reimbursement estimator, the deductibles guide, the pre-existing-conditions guide,
          and the 11-carrier comparison on Vets.co. Premiums, scores, and waiting periods stay the ones those
          pages already state. Picks on the comparison follow the published method on{' '}
          <Link href="/how-we-pick" className="text-brand-primary">How we pick</Link>.
        </p>

        <h2 id="checklist">Checklist</h2>
        <p>
          Check an item when you have it, or when you have asked it. Nothing here is stored. The comparison link stays on the
          page whether or not every box is checked. Routine wellness is usually outside a standard accident-and-illness
          policy unless the quote includes a separate wellness add-on, which the comparison records as available on Embrace
          and not included on Trupanion or Healthy Paws.
        </p>
        <QuotePrepChecklist groups={GROUPS} />

        <h2 id="quotes">Compare quotes</h2>
        <p>
          Direct pay, deductibles, reimbursement, and waiting periods are written out on the carrier comparison.
          This checklist does not open a carrier enrollment.
        </p>
        <p>
          <Link href="/reviews/best-pet-insurance" className="font-semibold text-brand-primary">
            Compare quotes on the carrier comparison →
          </Link>
        </p>
        <p>
          After a quote, the{' '}
          <Link href="/tools/insurance-reimbursement-estimator" className="text-brand-primary">reimbursement estimator</Link>{' '}
          applies the deductible, the reimbursement percentage, and the annual cap to an expected claim. The{' '}
          <Link href="/reviews/best-pet-insurance" className="text-brand-primary">carrier comparison</Link>{' '}
          is where the direct-pay, deductible, and waiting-period notes above are written out.
        </p>

        <div id="sources">
          <ArticleSourcesList sources={SOURCES} />
        </div>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
