import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'MidWest iCrate vs Impact Dog Crate | Dog.com',
  description: 'The crate review scores the MidWest iCrate 9.3 and the Impact crate 9.4. Divider wire, or aluminum when wire has already failed.',
  path: '/reviews/icrate-vs-impact-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'MidWest iCrate or Impact',
  description: 'The crate review already scores the MidWest iCrate for house training and the Impact crate for escape artists.',
  url: 'https://dog.com/reviews/icrate-vs-impact-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which crate does the review pick for house training?',
    answer: 'The MidWest Homes iCrate, scored 9.3 and marked Best Wire Crate. The review lists a divider, fold-flat storage, front and side doors, sizes from 18 inches to 54 inches, and a price under $60 for most sizes. The printed band is $40–80 by size. Escape resistance is listed as standard, not for escape artists.',
  },
  {
    question: 'When does the review point to the Impact crate?',
    answer: 'When the dog has severe separation anxiety or has already destroyed wire, plastic, and standard heavy-duty crates. Impact scores 9.4. The review lists aircraft-grade aluminum, a lifetime warranty, a heavy weight of 30–70+ lb, and a price of $300–500. It calls the crate overkill for a calm dog.',
  },
  {
    question: 'How do I pick the iCrate length?',
    answer: 'The crate review says the dog should be able to stand, turn, and lie down, with no extra floor a puppy can use as a bathroom. The crate-size calculator applies that rule to the lengths the review already lists, 18 inches through 54 inches.',
  },
]

export default function IcrateVsImpactGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={schema}
      hero={{
        title: 'MidWest iCrate or Impact',
        subtitle: 'A divider wire crate for house training, or aluminum when wire has already failed. Scores and prices below are the ones on the crate review.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/midwest+icrate+dog+crate?s=reviews-icrate-vs-impact-guide" label="Check price of the MidWest iCrate on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'iCrate vs Impact', href: '/reviews/icrate-vs-impact-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best dog crates', href: '/reviews/best-dog-crates' },
            { label: 'Crate size calculator', href: '/tools/dog-crate-size-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-dog-crates">crate review</Link> already scores the MidWest Homes iCrate for house training and the Impact High Anxiety crate for dogs that defeat wire. Those scores are editorial scores, not shopper star ratings.</p>
        <h2>What the review says about the iCrate</h2>
        <p>The iCrate is Best Wire Crate, score 9.3, and the winner. It ships with a divider panel, folds flat, has a front door and a side door, and comes in sizes from 18 inches to 54 inches. The printed price is under $60 for most sizes, with a band of $40–80 by size. Escape resistance is listed as standard. The review says it is not the crate for a determined dog, and it can look industrial in a living room.</p>
        <p>Size the crate to the adult dog and close the divider while a puppy is small. The <Link href="/tools/dog-crate-size-calculator">crate-size calculator</Link> uses the stand, turn, and lie-down rule from that review.</p>
        <h2>What the review says about Impact</h2>
        <p>Impact is Best Heavy Duty for escape artists, score 9.4. The review lists aircraft-grade aluminum, welded joints, reinforced latches, and a lifetime warranty. The weight is heavy, 30–70+ lb, so it is not a travel crate. The printed price is $300–500. The review calls that price significant and the crate overkill for a calm dog. It also says professional trainers, law-enforcement K9 units, and sport competitors use this style of crate.</p>
        <h2>Who should buy which crate</h2>
        <p>Buy the iCrate when you are house-training or crating a dog that has not already destroyed wire. Buy Impact when wire, plastic, and standard heavy-duty crates have already failed. The airline crate on the same review is the Petmate Sky Kennel, and it is a different job.</p>
        <p>The button above searches Amazon for the MidWest iCrate, the same search as on the crate review. Choose the length there. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
