import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArticleLayout,
  ArticleSourcesList,
  FAQAccordion,
  LastUpdated,
  RelatedLinks,
  TableOfContents,
  buildArticleSchema,
  buildHowToSchema,
  buildMetadata,
} from '@carloOS/ui'
import { ClaimHelper } from '../../../components/tools/ClaimHelper'
import { DENIED_REASONS, INSURER_CLAIMS } from '../../../data/claim-helper'

const URL = 'https://vets.co/tools/claim-helper'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet Insurance Claim Helper | Vets.co',
  description:
    'Enter the visit, invoice lines, and insurer to get that insurer’s claim checklist and deadline, a printable claim summary, and a cover email draft.',
  path: '/tools/claim-helper',
})

const howToSchema = buildHowToSchema({
  name: 'How to prepare a pet insurance claim',
  description:
    'Gather the visit details and the itemized invoice, check the insurer’s documents and filing deadline, then send the claim with a short summary and cover note.',
  url: URL,
  totalTime: 'PT10M',
  steps: [
    {
      name: 'Enter the pet and visit',
      text: 'Add the pet’s name, species, and age, the visit date, the clinic, and the diagnosis or reason for the visit.',
    },
    {
      name: 'Enter the invoice line items',
      text: 'Copy each charge from the paid, itemized invoice. The helper adds the total.',
    },
    {
      name: 'Pick the insurer',
      text: 'The helper shows the documents and filing deadline that insurer’s own claims page lists, or a general checklist when that page could not be read.',
    },
    {
      name: 'Check the deadline',
      text: 'When the insurer states a day count, the helper counts it from the visit date you entered.',
    },
    {
      name: 'Copy or print the summary and cover email',
      text: 'Attach the invoice and any records, then file through the insurer’s app, online account, email, fax, or mail.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pet Insurance Claim Helper',
  url: URL,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'A free form that turns a vet visit and invoice into an insurer claim checklist, a filing-deadline date, a printable claim summary, and a cover email draft. It does not file the claim.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Invoice line items with a running total',
    'Insurer claim checklist from that insurer’s own claims page',
    'Filing deadline counted from the visit date when the insurer states a day count',
    'Copyable and printable claim summary',
    'Copyable cover email draft',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Pet Insurance Claim Helper',
  description:
    'Turn a vet visit and its invoice into an insurer claim checklist, a filing deadline, a claim summary, and a cover email draft.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
})

const FAQS = [
  {
    question: 'Does this tool file my claim?',
    answer:
      'No. It prepares a summary and a cover email. You file through your insurer’s app, online account, email, fax, or mail. We are not your insurer.',
  },
  {
    question: 'Is anything I type saved or sent?',
    answer:
      'No. Everything stays in your browser; nothing is stored or sent. Closing or reloading the page clears the form.',
  },
  {
    question: 'Where do the insurer checklists come from?',
    answer:
      'Each one was read on that insurer’s own claims or FAQ page, listed under Sources. When a page could not be opened, the helper shows a general checklist and says so instead of guessing.',
  },
  {
    question: 'How is the deadline date worked out?',
    answer:
      'When the insurer’s page states a day count, such as 90 or 270 days, the helper adds it to the visit date you enter. Some insurers count from the invoice date instead, so use the later date if they differ. Your policy documents are the final word.',
  },
  {
    question: 'Why are claims denied?',
    answer:
      'Common reasons include a pre-existing condition, treatment during a waiting period, missing records, an estimate or unpaid invoice, an excluded service, an exam fee the policy does not cover, and filing late. This is not legal or veterinary advice.',
  },
]

const SOURCES = (() => {
  const seen = new Set<string>()
  const out: { label: string; url: string; publisher: string }[] = []
  for (const claim of Object.values(INSURER_CLAIMS)) {
    if (!claim.verified || seen.has(claim.sourceUrl)) continue
    seen.add(claim.sourceUrl)
    out.push({ label: claim.sourceLabel, url: claim.sourceUrl, publisher: claim.name })
  }
  for (const reason of DENIED_REASONS) {
    if (seen.has(reason.sourceUrl)) continue
    seen.add(reason.sourceUrl)
    out.push({ label: reason.sourceLabel, url: reason.sourceUrl, publisher: reason.sourceLabel.split(':')[0] })
  }
  return out
})()

export default function ClaimHelperPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Pet Insurance Claim Helper',
        subtitle:
          'Enter the visit and the invoice, pick your insurer, and get its checklist, a claim summary, and a cover email.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Pet Insurance Claim Helper' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Claim helper', href: '#helper' },
              { label: 'Denial reasons', href: '#denials' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Insurance references"
            links={[
              { label: 'How the claims process works', href: '/insurance/questions/how-does-the-claims-process-work' },
              { label: 'How pet insurance works', href: '/insurance/how-pet-insurance-works' },
              { label: 'Pre-existing conditions', href: '/insurance/pre-existing-conditions' },
              { label: 'Reading the fine print', href: '/insurance/reading-the-fine-print' },
              { label: 'Reimbursement estimator', href: '/tools/insurance-reimbursement-estimator' },
              { label: 'Insurance hub', href: '/insurance' },
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
        <LastUpdated date="2026-10-10" />

        <p>
          A claim moves faster when the insurer gets the paid, itemized invoice and any records it asks for the first
          time. This helper puts the visit details and invoice lines in one place, shows the documents and filing
          deadline your insurer’s own claims page lists, and drafts a summary and a cover email you can copy or print.
          For how reimbursement is worked out after you file, see{' '}
          <Link href="/insurance/questions/how-does-the-claims-process-work" className="text-brand-primary">
            how the claims process works
          </Link>
          .
        </p>

        <div className="not-prose my-6 rounded-lg border border-brand-border bg-brand-surface p-4 text-sm text-brand-text-mid">
          <ul className="m-0 list-disc space-y-1 pl-5">
            <li>
              <strong className="text-brand-dark">Everything stays in your browser; nothing is stored or sent.</strong>
            </li>
            <li>Not legal or veterinary advice.</li>
            <li>We are not your insurer. Your policy documents set the rules for your claim.</li>
          </ul>
        </div>

        <h2 id="helper">Claim helper</h2>
        <ClaimHelper />

        <h2 id="denials">Common denial reasons</h2>
        <p>
          These come up on insurer and regulator pages. Checking them before you file can save a resubmission.
        </p>
        <ul>
          {DENIED_REASONS.map((item) => (
            <li key={item.id}>
              <strong>{item.reason}.</strong> {item.tip} <span className="text-brand-text-light">({item.sourceLabel})</span>
            </li>
          ))}
        </ul>
        <p>
          If a claim is denied, ask the insurer which policy section it relied on. The{' '}
          <Link href="/insurance/reading-the-fine-print" className="text-brand-primary">fine-print guide</Link> and the{' '}
          <Link href="/insurance/pre-existing-conditions" className="text-brand-primary">pre-existing conditions guide</Link>{' '}
          explain the terms that most often decide it.
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
