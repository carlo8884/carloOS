import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Holiday Scraps and a Locking Trash Can | Dog.com',
  description: 'Thanksgiving and Christmas scraps are the pancreatitis trigger already described on the health page. The hop is the locking trash can on that page.',
  path: '/reviews/holiday-scraps-trash-can-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Holiday scraps and a locking trash can',
  description: 'The holiday-meal pancreatitis trigger, and the locking trash can already named on that page.',
  url: 'https://dog.com/reviews/holiday-scraps-trash-can-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which holiday foods does the pancreatitis page name?',
    answer: 'Turkey skin, ham fat, or another high-fat holiday scrap. The page calls that the most common presentation of acute pancreatitis: a previously healthy dog vomiting 12 to 24 hours after a high-fat meal, with abdominal pain and lethargy.',
  },
  {
    question: 'Does a small piece still count?',
    answer: 'The same page says the critical variable is fat content, not quantity alone. A small piece of very fatty meat, bacon fat or turkey skin, can trigger pancreatitis in a susceptible dog. A dog that has had pancreatitis once is at significantly higher risk from any dietary indiscretion.',
  },
  {
    question: 'Does the locking can replace the no-scraps rule?',
    answer: 'No. The page names a locking kitchen trash can and a walk-through pet gate, then says neither replaces the rule. The can keeps leftovers from becoming the garbage-ingestion trigger. It does not choose a low-fat diet, and the gate does not treat a dog that is already vomiting.',
  },
  {
    question: 'When should the shop link wait?',
    answer: 'If the dog is vomiting, painful, or unable to keep water down, the pancreatitis page hospitalization criteria are the next read, not a shopping link. Repeated vomiting, belly pain, lethargy, refusing food, and a rectal temperature above 102.5°F are signs that page already lists as reasons to go in.',
  },
]

export default function HolidayScrapsTrashCanGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={schema}
      hero={{
        title: 'Holiday scraps and a locking trash can',
        subtitle: 'The pancreatitis page already names turkey skin and ham fat as the holiday trigger, and a locking trash can as the supply that keeps those leftovers out of the dog. This guide does not add a diet or a treatment.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Holiday scraps', href: '/reviews/holiday-scraps-trash-can-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Pancreatitis', href: '/health/pancreatitis' },
            { label: 'Chocolate calculator', href: '/tools/dog-chocolate-toxicity-calculator' },
            { label: 'Holiday chocolate guide', href: '/reviews/holiday-chocolate-calculator-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>October through December is when the <Link href="/health/pancreatitis">pancreatitis page</Link> says emergency rooms see a predictable spike. The dogs in that description had been eating ordinary commercial kibble and then received turkey skin, ham fat, or another high-fat holiday scrap. The page calls that the most common presentation of acute pancreatitis: a previously healthy dog vomiting 12 to 24 hours after a high-fat meal, with abdominal pain and lethargy.</p>
        <h2>Fat, not the size of the plate</h2>
        <p>The same page says the critical variable is fat content, not quantity alone. A small piece of very fatty meat, bacon fat or turkey skin, can trigger pancreatitis in a susceptible dog. A dog that has had pancreatitis once is at significantly higher risk of recurrence from any dietary indiscretion, and for that dog the page says table scraps of any kind are permanently off the table. This guide does not publish a new fat percentage. The long-term diet section on the pancreatitis page is where the under-10-percent and under-8-percent dry-matter figures, and the named prescription diets, already live.</p>
        <h2>What the locking can is for</h2>
        <p>The page names two household tools and then says neither replaces the rule. A locking kitchen trash can keeps leftovers from becoming the garbage-ingestion trigger. A walk-through pet gate keeps the dog out of the kitchen while scraps sit on the counter. The can does not choose a low-fat diet, and the gate does not treat a dog that is already vomiting. If the dog is vomiting, painful, or unable to keep water down, the pancreatitis page&apos;s hospitalization criteria are the next read, not a shopping link.</p>
        <h2>Signs the page already lists</h2>
        <p>Classic acute signs on that page are repeated vomiting, abdominal pain (including the prayer position, a hunched posture, or yelping when the belly is touched), lethargy, refusing food, and sometimes diarrhea. Fever is described as a rectal temperature above 102.5°F in many cases. Severe disease adds pale gums, a rapid weak pulse, jaundice, and collapse. Those are reasons to go in. They are not a checklist this guide is adding.</p>
        <AffiliateDisclosure variant="inline" siteId="dog-com" />
        <p>The hop is the locking trash can search already on the pancreatitis page. The gate and the food-storage container stay on that page.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/locking+kitchen+trash+can?s=reviews-holiday-scraps-trash-can-guide">Browse locking kitchen trash cans on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Holiday scraps update list"
          subtitle="Leave an address to be on the list for changes to the locking-trash-can note on this page."
          ctaText="Save my address"
          source="reviews-holiday-scraps-trash-can-guide"
        />
      </div>
    </ArticleLayout>
  )
}
