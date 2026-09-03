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
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import Calculator from './Calculator'
import FoalingKit from './FoalingKit'

const URL = 'https://horses.com/tools/horse-gestation-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Gestation & Foaling Date Calculator | Horses.com',
  description:
    'How long are horses pregnant? Enter a breeding date for the ~340-day due date, then pack a foaling-kit checklist.',
  path: '/tools/horse-gestation-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate a mare’s foaling date from the breeding date',
  description:
    'Add the average equine gestation of about 340 days to the mare’s breeding (last-cover) date to estimate a foaling date, then allow for a normal foaling window of roughly 320 to 362 days and pack a foaling kit before the early window.',
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
      name: 'Pack the foaling kit before the early window',
      text: 'Gather a digital thermometer, a navel dip your veterinarian specifies, clean towels, a headlamp, exam gloves, and a foaling alarm or stall camera before day 320. Confirm extras with your veterinarian.',
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
    'Free mare foaling-date estimator plus a packable foaling-kit checklist. Input: breeding (last-cover) date, with an optional custom gestation length. Outputs: estimated foaling date at ~340 days plus the early/late foaling window (320–362 days).',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Average equine gestation of ~340 days (default)',
    'Early/late foaling window of 320–362 days',
    'Optional custom gestation length per mare or breed',
    'Interactive foaling-kit checklist with Amazon shop hops',
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
  {
    question: 'What should be in a horse foaling kit?',
    answer:
      'A typical owner kit is a digital thermometer, a navel dip your veterinarian specifies (usually dilute iodine or chlorhexidine), a stack of clean towels, a flashlight or headlamp, disposable exam gloves, and a foaling alarm or stall camera so you can watch from day 320. Pack it before the early window. This is a husbandry packing list, not a veterinary supply order — ask your veterinarian what else your mare needs, especially for a maiden mare or a mare with a history of dystocia.',
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
        { title: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency', category: 'Tools' },
        { title: 'Horse Age Calculator', href: '/tools/horse-age-calculator', category: 'Tools' },
        { title: 'Horse Grimace Scale', href: '/tools/horse-grimace-scale', category: 'Tools' },
      ]}
      hero={{
        title: 'Horse Gestation & Foaling Date Calculator',
        subtitle:
          'Estimate a mare’s foaling date from her breeding date using the ~340-day average gestation, then pack the foaling-kit checklist before the early 320-day window.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'September 2026',
        readTime: '5 min',
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
              { label: 'Foaling kit', href: '#foaling-kit' },
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
              { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
              { label: 'Horse Age Calculator', href: '/tools/horse-age-calculator' },
              { label: 'Horse Grimace Scale', href: '/tools/horse-grimace-scale' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Horses.com Editorial"
          publishedAt="2026-06-11"
          updatedAt="2026-09-03"
          reviewedBy="Editorial team"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the checklist
          </p>
          <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Foaling kit packing list
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the foaling-kit list — thermometer, navel dip, towels, headlamp, gloves, and a
            foaling alarm — so you can pack before the early window without re-opening the
            calendar. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Foaling kit packing list"
            subtitle="Email the foaling-kit list — thermometer, navel dip, towels, headlamp, gloves, alarm. No spam."
            ctaText="Email the foaling kit checklist"
            source="tools-horse-gestation-calculator-under-hero"
          />
        </div>

        <p>
          <strong>The quick answer:</strong> a mare&rsquo;s pregnancy lasts about{' '}
          <strong>340 days</strong> (roughly 11 months), so add 340 days to the
          breeding date to estimate the foaling date. A mare bred on{' '}
          <strong>April 1 is due around March 7 the next year</strong>. Because the
          normal range is wide &mdash; about <strong>320 to 362 days</strong> &mdash;
          treat the date as a planning window, not a deadline, pack the foaling kit
          before day 320, and confirm the pregnancy with your veterinarian by ultrasound.
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

        <h2 id="foaling-kit">Foaling kit checklist</h2>
        <p>
          Once you have a window, pack before the early date. The six-item list
          below is a husbandry starting point — thermometer, navel dip, towels,
          headlamp, gloves, and a foaling alarm or stall camera — not a ranked
          product list and not a substitute for the kit your veterinarian
          recommends for your mare.
        </p>
        <FoalingKit />

        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop the kit
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            The six-item list above is a husbandry starting point — thermometer, navel dip,
            towels, headlamp, gloves, alarm — not a ranked product list. Same Amazon search
            hops as the checklist rows. Horses.com earns a commission on qualifying purchases
            at no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/digital+equine+thermometer?s=tools-horse-gestation-calculator"
              amazonLabel="Browse equine thermometers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/iodine+navel+dip+foal?s=tools-horse-gestation-calculator"
              amazonLabel="Browse foal navel dip on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/foaling+alarm?s=tools-horse-gestation-calculator"
              amazonLabel="Browse foaling alarms on Amazon →"
            />
          </div>
        </div>

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
          <li>Rank foaling-kit products or tell you which brand to buy</li>
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
          After the foal arrives, the{' '}
          <Link href="/tools/horse-age-calculator">horse age calculator</Link> gives a foal /
          young / adult / senior planning label — not a diagnosis. If a foaling-night sign
          looks urgent, the{' '}
          <Link href="/tools/is-this-a-horse-emergency">horse emergency sign-list</Link> is a
          conservative triage aid — not a diagnosis. For a facial pain-watch, the{' '}
          <Link href="/tools/horse-grimace-scale">horse grimace scale</Link> is a planning
          reference, not a diagnosis.
        </p>
      </div>
    </ArticleLayout>
  )
}
