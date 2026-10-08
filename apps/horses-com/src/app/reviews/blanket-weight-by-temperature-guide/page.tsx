import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, QuietPartnerLink, RelatedLinks, buildArticleSchema, buildMetadata, PrimaryHop } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Blanket Weight by Temperature | Horses.com',
  description: 'The fill-weight bands already on the winter blanket review, from a sheet to heavyweight, and the Rambo link for the medium band that review already sells.',
  path: '/reviews/blanket-weight-by-temperature-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Horse blanket weight by temperature',
  description: 'Fill weight by temperature from the winter blanket review, and the Rambo Original link.',
  url: 'https://horses.com/reviews/blanket-weight-by-temperature-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'What fill is the medium band?',
    answer: 'Medium-weight is 180 to 250 grams. The review calls that the workhorse of most US and UK climates, with an effective range of about −5 to +10°C (25 to 50°F) on most clipped horses. A later sentence names about 200 grams for most clipped horses in most US climates in that same range.',
  },
  {
    question: 'When is heavyweight the wrong amount of fill?',
    answer: 'Heavyweight is 300 to 400 grams and up, for sustained sub-zero temperatures and clipped horses in cold climates. The review says that much fill is often unnecessary in the mid-Atlantic and the southern United States, and standard in the Northeast, the Midwest, Canada, and northern Europe.',
  },
  {
    question: 'Where does the Rambo sit on that map?',
    answer: 'The comparison table lists the Horseware Rambo Original at 0, 100, 200, and 400 gram fills. The 200 gram option is the medium band. The link is that Rambo search. A clipped horse in a northern sub-zero winter is the Schneiders StormShield job, not this one.',
  },
  {
    question: 'Can a full winter coat skip a blanket?',
    answer: 'The review says a healthy adult with a full winter coat, dry shelter, and enough forage tolerates about −15°C (5°F) without a blanket, citing Cymbaluk and Christison in the Canadian Veterinary Journal, 1989. Blanketing a horse that does not need one can suppress the winter coat.',
  },
]

export default function BlanketWeightByTemperatureGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Horse blanket weight by temperature',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '8 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">A 200-gram fill is the medium blanket for cool weather, and the Horseware Rambo Original is the turnout listed with that fill.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/amazon-brand/horse+turnout+blanket?s=reviews-blanket-weight-by-temperature-guide" label="Browse horse turnout blankets on Amazon" />
          <HopDisclosure siteId="horses-com" href="/go/amazon-brand/horse+turnout+blanket?s=reviews-blanket-weight-by-temperature-guide" />
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Blanket weight', href: '/reviews/blanket-weight-by-temperature-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best winter blankets', href: '/reviews/best-winter-horse-blankets' },
            { label: 'Clipped-horse blanket', href: '/reviews/best-blanket-for-clipped-horse-guide' },
            { label: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>Fill weight is not, by itself, a temperature rating. The <Link href="/reviews/best-winter-horse-blankets">winter blanket review</Link> says what matters is fill plus coat (full, body-clipped, or trace-clipped), shelter, and the individual horse. It still publishes bands, and those are the only bands this guide uses.</p>
        <h2>The bands on the review</h2>
        <p>A sheet is 0 grams of fill: a waterproof shell for rain, or a layer over a fleece, on a horse that does not need warmth. Lightweight is 50 to 150 grams, for cool autumn temperatures of 5 to 15°C (40 to 60°F), light wind, and light rain. Medium-weight is 180 to 250 grams, which the review calls the workhorse of most US and UK climates, with an effective range of about −5 to +10°C (25 to 50°F) on most clipped horses. Heavyweight is 300 to 400 grams and up, for deep winter, sustained sub-zero temperatures, and clipped horses in cold climates. The review says that much fill is often unnecessary in the mid-Atlantic and the southern United States, and standard in the Northeast, the Midwest, Canada, and northern Europe. A later sentence names medium-weight, about 200 grams, as the right answer for most clipped horses in most US climates between about −5 and +10°C.</p>
        <h2>Where the Rambo sits on that map</h2>
        <p>The comparison table lists the Horseware Rambo Original at 0, 100, 200, and 400 gram fills, in a 1000-denier ballistic shell. The 200 gram option is the medium band. The 400 gram option is the heavy band. The 0 and 100 gram options are the sheet and the light band. The review calls the Rambo the premium reference in the category, not the only blanket that makes those fills. A clipped horse in a northern sub-zero winter is the job the review gives the Schneiders StormShield, which is the <Link href="/reviews/best-blanket-for-clipped-horse-guide">clipped-horse guide</Link>, not this one. Size is still the <Link href="/tools/horse-blanket-size-calculator">blanket size calculator</Link>. A heavy fill in the wrong length is a rub.</p>
        <p>The review also says a healthy adult with a full winter coat, dry shelter, and enough forage tolerates about −15°C (5°F) without a blanket, citing Cymbaluk and Christison in the Canadian Veterinary Journal, 1989. Blanketing a horse that does not need one can suppress the winter coat. That decision stays on the review.</p>
        <HopDisclosure siteId="horses-com" href="/go/amazon-brand/horse+turnout+blanket?s=reviews-blanket-weight-by-temperature-guide" />
        <p>The link below is the turnout-blanket search from the blanket review, the same class as the Rambo Original listed at 200 grams.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/horse+turnout+blanket?s=reviews-blanket-weight-by-temperature-guide">Browse horse turnout blankets on Amazon →</a></p>
        <QuietPartnerLink href="/go/smartpak/rambo-original-turnout?s=reviews-blanket-weight-by-temperature-guide" label="Check price of the Horseware Rambo Original on SmartPak →" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-blanket-weight-by-temperature-guide"
          checklist={[
            'Lightweight is 50 to 150 grams, for cool autumn temperatures of 5 to 15°C (40 to 60°F), light wind, and light rain.',
            'Medium-weight is 180 to 250 grams, which the review calls the workhorse of most US and UK climates, with an effective range of about −5 to +10°C (25 to 50°F) on most clipped horses.',
            'Heavyweight is 300 to 400 grams and up, for deep winter, sustained sub-zero temperatures, and clipped horses in cold climates.',
            'A heavy fill in the wrong length is a rub.',
            'Blanketing a horse that does not need one can suppress the winter coat.',
            'Check price of the Horseware Rambo Original on SmartPak',
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
