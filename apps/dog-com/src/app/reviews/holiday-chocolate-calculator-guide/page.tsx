import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Holiday Chocolate and the Toxicity Calculator | Dog.com',
  description: 'Holiday baking often includes chocolate. Use the existing calculator. The first-aid kit link does not treat poisoning.',
  path: '/reviews/holiday-chocolate-calculator-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Holiday chocolate and the toxicity calculator',
  description: 'Use the existing chocolate calculator. The first-aid kit link does not treat poisoning.',
  url: 'https://dog.com/reviews/holiday-chocolate-calculator-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Is there a safe amount of holiday chocolate?',
    answer: 'No. The calculator FAQ says there is no truly safe amount. Any ingestion warrants a call to a veterinarian or a poison-control hotline, with the product and the amount. Do not treat a round number on this guide as a clearance to wait.',
  },
  {
    question: 'Why does the type of chocolate matter?',
    answer: 'The calculator FAQ says theobromine signs are commonly reported from about 20 mg per kilogram of body weight, cardiac signs are possible around 40 to 60 mg/kg, and severe signs including seizures sit above roughly 60 mg/kg. A small amount of baking chocolate or cocoa powder can be far more dangerous than a larger amount of milk chocolate.',
  },
  {
    question: 'What else is often in holiday baking?',
    answer: 'The nutmeg entry says baked goods that contain nutmeg often also contain raisins, chocolate, or xylitol. Chocolate goes to the calculator. Xylitol, on its own foods entry, is described as an emergency measured in minutes. This guide does not merge those into one product.',
  },
  {
    question: 'Does the first-aid kit treat poisoning?',
    answer: 'No. The calculator page says activated charcoal and 3 percent hydrogen peroxide are vet-directed, and the Amazon searches are general supplies. They do not reverse chocolate poisoning. Call a veterinarian or poison control for an actual ingestion before you shop.',
  },
]

export default function HolidayChocolateCalculatorGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={schema}
      hero={{
        title: 'Holiday chocolate and the toxicity calculator',
        subtitle: 'The foods list already says holiday baking often pairs nutmeg with chocolate or xylitol. The amount question belongs on the calculator. There is no safe amount of chocolate for a dog.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Holiday chocolate', href: '/reviews/holiday-chocolate-calculator-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Chocolate calculator', href: '/tools/dog-chocolate-toxicity-calculator' },
            { label: 'Can dogs eat nutmeg', href: '/nutrition/can-dogs-eat/nutmeg' },
            { label: 'Holiday scraps guide', href: '/reviews/holiday-scraps-trash-can-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/nutrition/can-dogs-eat/nutmeg">nutmeg entry</Link> is the holiday sentence already on the site: baked goods that contain nutmeg often also contain raisins, chocolate, or xylitol. A plate of fudge, a cocoa-dusted dessert, or a sugar-free holiday candy is therefore two different calls. Chocolate goes to the <Link href="/tools/dog-chocolate-toxicity-calculator">chocolate toxicity calculator</Link>. Xylitol, on its own foods entry, is described as an emergency measured in minutes. This guide does not merge those into one product.</p>
        <h2>What the calculator page already says about dose</h2>
        <p>The calculator FAQ says there is no truly safe amount. It describes theobromine signs as commonly reported from about 20 mg per kilogram of body weight, cardiac signs as possible around 40 to 60 mg/kg, and severe signs including seizures above roughly 60 mg/kg. It also says concentration differs by type, so a small amount of baking chocolate or cocoa powder can be far more dangerous than a larger amount of milk chocolate. Real products vary by cocoa percentage, and caffeine adds to the load. Any ingestion warrants a call to a veterinarian or a poison-control hotline, with the product and the amount. Enter type, amount, and body weight in the calculator. Do not treat a round number on this guide as a clearance to wait.</p>
        <h2>What a first-aid kit does not do</h2>
        <p>The calculator page sells a safety kit in words only: activated charcoal and 3 percent hydrogen peroxide are labeled vet-directed, and the page says the Amazon searches are general supplies. They are not a ranked list and they do not replace veterinary care. They do not reverse chocolate poisoning. The link on this page is the pet first-aid kit search from the calculator page. Charcoal, peroxide, the toxin kit, and the recovery crate stay on the calculator.</p>
        <HopDisclosure siteId="dog-com" href="/go/amazon-brand/pet+first+aid+kit+dog?s=reviews-holiday-chocolate-calculator-guide" />
        <p>Shop these supplies</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/pet+first+aid+kit+dog?s=reviews-holiday-chocolate-calculator-guide">Browse pet first-aid kits on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-holiday-chocolate-calculator-guide"
          checklist={[
            'Any ingestion warrants a call to a veterinarian or a poison-control hotline, with the product and the amount.',
            'Enter type, amount, and body weight in the calculator.',
            'Do not treat a round number on this guide as a clearance to wait.',
            'They do not reverse chocolate poisoning.',
            'Shop these supplies',
            'Browse pet first-aid kits on Amazon',
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
