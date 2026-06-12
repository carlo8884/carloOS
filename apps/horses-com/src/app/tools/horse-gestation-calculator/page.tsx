import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  ArticleByline,
  ArticleSourcesList,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import Calculator from './Calculator'

const URL = 'https://horses.com/tools/horse-gestation-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Gestation & Foaling Date Calculator | Horses.com',
  description:
    'Estimate a mare’s foaling date from her breeding date. Free calculator using the ~340-day average gestation, with the early/late 320–362 day foaling window.',
  path: '/tools/horse-gestation-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate a mare’s foaling date from the breeding date',
  description:
    'Add the average equine gestation of about 340 days to the mare’s breeding (last-cover) date to estimate a foaling date, then allow for a normal foaling window of roughly 320 to 362 days.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Record the breeding (last-cover) date',
      text: 'Note the date the mare was bred by live cover or insemination. If she was covered over several days, use the last cover date as the starting point.',
    },
    {
      name: 'Add the average gestation length',
      text: 'Add about 340 days to the breeding date. For example, a mare bred on April 1 is due around March 7 of the following year.',
    },
    {
      name: 'Mark the early and late foaling window',
      text: 'Add 320 days for the earliest typical foaling date and 362 days for the latest. A healthy foal can arrive anywhere across that window; the 340-day figure is only an average.',
    },
    {
      name: 'Confirm with your veterinarian',
      text: 'The calendar estimate does not confirm pregnancy or stage. Have your veterinarian confirm and date the pregnancy by ultrasound and plan foaling management with you.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Gestation & Foaling Date Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineBreedingCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free mare foaling-date estimator. Input: breeding (last-cover) date, with an optional custom gestation length. Outputs: estimated foaling date at ~340 days plus the early/late foaling window (320–362 days).',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Average equine gestation of ~340 days (default)',
    'Early/late foaling window of 320–362 days',
    'Optional custom gestation length per mare or breed',
    'Estimate framed against ultrasound confirmation',
    'Defers foaling management to a veterinarian',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'How long are horses pregnant?',
    answer:
      'A mare’s gestation averages about 340 days — roughly 11 months — but the normal range is wide, from about 320 to 362 days. A foal born any time across that window is generally considered to be at full term. The exact length varies with the individual mare, the breed, and the season: spring-conceived foals tend to gestate slightly longer than autumn-conceived ones. Because of that spread, the calculated due date is a planning estimate, not a fixed deadline.',
  },
  {
    question: 'How do you calculate a mare’s foaling date?',
    answer:
      'Add the average gestation length of about 340 days to the date the mare was bred (the last-cover date). For example, a mare bred on April 1 is due around March 7 of the following year. To mark the realistic window, add 320 days for the earliest typical foaling date and 362 days for the latest. The calculator on this page does this for you and lets you substitute a custom gestation length if your mare or breed runs longer or shorter than average.',
  },
  {
    question: 'Is 320 days too early for a foal?',
    answer:
      'A foal born at 320 days is at the early end of the normal range and is usually viable, though foals born before about 320 days are considered premature and need closer monitoring. Signs of dysmaturity — a small frame, weak suckle, soft fetlocks, or a silky coat — matter more than the calendar date alone. If your mare looks like she is preparing to foal well before her estimated date, or if a foal arrives early, contact your veterinarian. The early/late window in this calculator is a guide to when to be on foal watch, not a substitute for veterinary assessment.',
  },
  {
    question: 'Why is my mare overdue?',
    answer:
      'Mares routinely carry past the 340-day average without any problem; gestation up to about 362 days is still within the normal range, and some mares consistently go to 350+ days. Season is the biggest single factor — mares bred early in the year, foaling in late winter or early spring, tend to gestate longer. A genuinely prolonged pregnancy (well beyond 365 days) can occasionally signal an issue such as fescue toxicosis or a developmental problem, so if your mare is significantly past 362 days, ask your veterinarian to evaluate her. Otherwise, an apparently “overdue” mare is most often just a normal long gestation.',
  },
  {
    question: 'Can this calculator confirm that my mare is pregnant?',
    answer:
      'No. This is a calendar tool: it projects a foaling date from a breeding date, but it cannot confirm pregnancy, twins, or stage of gestation. Only a veterinarian can confirm and accurately date a pregnancy — typically by transrectal ultrasound from around 14 days after breeding, which also screens for twins. Use this estimate to plan and budget your foal-watch period, then have your veterinarian confirm the pregnancy and set up foaling management.',
  },
]

export default function HorseGestationCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Height Converter', href: '/tools/horse-height-converter', category: 'Tools' },
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Horse Feed & Hay Calculator', href: '/tools/horse-feed-calculator', category: 'Tools' },
        { title: 'Body Condition Score (Henneke)', href: '/tools/body-condition-score', category: 'Tools' },
      ]}
      hero={{
        title: 'Horse Gestation & Foaling Date Calculator',
        subtitle:
          'Estimate a mare’s foaling date from her breeding date using the ~340-day average gestation, with the realistic 320–362 day early/late window.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Gestation Calculator' },
      ]}
      schema={howToSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'The formula', href: '#formula' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Horse tools"
            links={[
              { label: 'Height Converter', href: '/tools/horse-height-converter' },
              { label: 'Weight Calculator', href: '/tools/horse-weight-calculator' },
              { label: 'Feed & Hay Calculator', href: '/tools/horse-feed-calculator' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score' },
              { label: 'Choosing a Vet', href: '/ownership/choosing-a-vet' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates."
            source="gestation-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Horses.com Editorial"
          publishedAt="2026-06-11"
          updatedAt="2026-06-11"
          reviewedBy="Editorial team"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <p>
          <strong>The quick answer:</strong> a mare&rsquo;s pregnancy lasts about{' '}
          <strong>340 days</strong> (roughly 11 months), so add 340 days to the
          breeding date to estimate the foaling date. A mare bred on{' '}
          <strong>April 1 is due around March 7 the next year</strong>. Because the
          normal range is wide &mdash; about <strong>320 to 362 days</strong> &mdash;
          treat the date as a planning window, not a deadline, and confirm the
          pregnancy with your veterinarian by ultrasound.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter the mare&rsquo;s breeding (last-cover) date. The calculator returns
          an estimated foaling date at the ~340-day average, plus the earliest
          (~320 days) and latest (~362 days) dates of the normal foaling window.
          You can override the gestation length if your mare or breed tends to
          run longer or shorter.
        </p>
        <Calculator />

        <h2 id="formula">The formula</h2>
        <ul>
          <li>
            <strong>Estimated foaling date</strong> = breeding date +{' '}
            <strong>340 days</strong> (average)
          </li>
          <li>
            <strong>Earliest typical</strong> = breeding date + <strong>320 days</strong>
          </li>
          <li>
            <strong>Latest typical</strong> = breeding date + <strong>362 days</strong>
          </li>
        </ul>
        <p>
          <strong>Worked example.</strong> A mare bred on <strong>April 1, 2026</strong>{' '}
          is estimated to foal around <strong>March 7, 2027</strong> (340 days
          later). Her early/late window runs from roughly <strong>February 15, 2027</strong>{' '}
          (320 days) to <strong>March 29, 2027</strong> (362 days). A foal arriving
          anywhere in that window is normally considered full term.
        </p>

        <h2 id="methodology">How it works &amp; limits</h2>
        <p>
          The estimate is a simple calendar projection from the published average
          equine gestation. Average length is reported at roughly 340 days across
          breeds, but the figure shifts with several factors:
        </p>
        <ul>
          <li>
            <strong>Individual mare:</strong> many mares foal at a consistent
            personal length year to year, which may sit above or below 340 days.
          </li>
          <li>
            <strong>Season:</strong> mares conceiving early in the year (foaling in
            late winter/early spring) tend to carry longer than those conceiving in
            late summer.
          </li>
          <li>
            <strong>Breed:</strong> ponies and some breeds average slightly different
            lengths, so a known breed tendency is worth entering as a custom value.
          </li>
        </ul>
        <p>The estimate does <strong>not</strong>:</p>
        <ul>
          <li>Confirm that the mare is pregnant, or detect twins</li>
          <li>Establish the true stage of gestation</li>
          <li>Replace veterinary foaling management or an ultrasound-dated due date</li>
        </ul>
        <p>
          Use it to plan and budget your foal-watch period, then{' '}
          <Link href="/ownership/choosing-a-vet">work with your veterinarian</Link> to
          confirm and date the pregnancy and prepare for foaling. To plan the mare&rsquo;s
          ration through pregnancy and lactation, the{' '}
          <Link href="/tools/horse-feed-calculator">feed &amp; hay calculator</Link> and{' '}
          <Link href="/nutrition/feeding-the-performance-horse">nutrition reference</Link>{' '}
          set forage targets from her bodyweight.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'National Research Council (2007). Nutrient Requirements of Horses, Sixth Revised Edition — reproduction and gestation chapter. National Academies Press.',
              publisher: 'NRC',
            },
            {
              label:
                'American Association of Equine Practitioners (AAEP) — Broodmare care and foaling guidelines.',
              url: 'https://aaep.org/horsehealth/',
              publisher: 'AAEP',
            },
            {
              label:
                'University of Kentucky / UK Ag Equine Programs — Mare gestation length and foaling management.',
              publisher: 'UK Ag Equine Programs',
            },
            {
              label:
                'Penn State Extension — Breeding the mare: gestation and foaling.',
              url: 'https://extension.psu.edu/horses',
              publisher: 'Penn State Extension',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the published basis for the ~340-day
          average gestation and the 320&ndash;362 day foaling window. The calculator
          output is a breeding-management estimate; no veterinary diagnosis is implied,
          and foaling management should be planned with your veterinarian.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Next: convert a young horse&rsquo;s height with the{' '}
          <Link href="/tools/horse-height-converter">horse height converter</Link>, estimate
          weight with the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link>, and set a
          forage target with the{' '}
          <Link href="/tools/horse-feed-calculator">feed &amp; hay calculator</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
