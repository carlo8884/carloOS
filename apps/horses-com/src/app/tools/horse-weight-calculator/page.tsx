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

const URL = 'https://horses.com/tools/horse-weight-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Weight Calculator (Girth + Length) | Horses.com',
  description:
    'Estimate a horse’s weight from heart girth and body length using the standard weight-tape formula. Free, instant lbs + kg, pony / draft / foal adjustments.',
  path: '/tools/horse-weight-calculator',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate a horse’s weight from girth and body length',
  description:
    'Measure heart girth and body length with a soft tape, then apply the Carroll & Huntington weight formula: weight in pounds equals heart girth squared times body length, divided by 330 for an adult riding horse.',
  url: URL,
  totalTime: 'PT5M',
  steps: [
    {
      name: 'Stand the horse square on level ground',
      text: 'Position the horse square and relaxed on flat, level footing so the barrel and topline are not distorted. Measure when the horse is calm, not mid-stride.',
    },
    {
      name: 'Measure the heart girth',
      text: 'Pass a soft tape around the barrel just behind the withers and the elbows, where a girth would sit. Take the reading snug at the end of a normal exhale.',
    },
    {
      name: 'Measure the body length',
      text: 'Measure in a straight line from the point of shoulder to the point of buttock (the pin bone) along the side of the horse.',
    },
    {
      name: 'Apply the formula',
      text: 'Weight (lb) = (heart girth in inches squared × body length in inches) ÷ 330 for an adult riding horse. Use ÷ 299 for a pony and ÷ 301 for a draft / heavy horse. In metric: weight (kg) = (girth in cm squared × length in cm) ÷ 11,900.',
    },
    {
      name: 'Treat the result as an estimate',
      text: 'A girth-tape figure is typically within about 5–10% of true scale weight for a mature light horse. Verify on a livestock scale for medication dosing or sale weight, and consult your veterinarian for special cases.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Horse Weight Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineHusbandryCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free horse weight estimator. Inputs: heart-girth circumference, body length, unit (in/cm), and horse type (pony / adult riding horse / draft / foal). Outputs: estimated bodyweight in pounds and kilograms using the Carroll & Huntington weight-tape formula with type-specific divisors.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Carroll & Huntington (1988) heart-girth + body-length weight formula',
    'Type-specific divisors: pony (~299), adult riding horse (330), draft (~301)',
    'Imperial and metric input with results in both lb and kg',
    'Estimate framed against livestock-scale verification',
    'Result links to the feed/hay calculator and body condition score tool',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'How do you calculate a horse’s weight without a scale?',
    answer:
      'Measure the heart girth (the circumference around the barrel just behind the withers and elbows) and the body length (point of shoulder to point of buttock), both in inches. Then apply the standard weight-tape formula: weight in pounds equals heart girth squared, multiplied by body length, divided by 330 for an adult riding horse. For example, a horse with a 72-inch girth and a 64-inch length is estimated at (72 × 72 × 64) ÷ 330 ≈ 1,005 lb. This is an estimate, usually within about 5–10% of true scale weight for a mature light horse.',
  },
  {
    question: 'Why is the divisor different for ponies and draft horses?',
    answer:
      'The single-divisor formula was fitted to a population of light riding horses, where 330 (imperial) gives the best average fit. Ponies are proportionally rounder for their length, so a smaller divisor (~299) returns a more accurate, slightly higher estimate. Draft and heavy types are denser, and the published heavy-horse divisor is around 301. Carroll & Huntington (1988) reported separate constants for these body types, which is why the calculator swaps the divisor when you change the horse type.',
  },
  {
    question: 'How accurate is a weight-tape estimate?',
    answer:
      'For a mature, normally-conformed light horse, a girth-and-length estimate is generally within roughly 5–10% of scale weight — close enough for tracking trends and rough ration planning. Accuracy drops for ponies, drafts, heavily pregnant mares, very fat or very thin horses, and growing youngstock. Commercial weight tapes that read girth alone are less accurate than the girth-plus-length formula because they ignore body length. For anything that needs a true number — medication dosing, sale weight, or a feeding plan for a sick horse — weigh the horse on a livestock scale.',
  },
  {
    question: 'Can I use this calculator for a foal?',
    answer:
      'Not reliably. Foals and growing youngstock follow a different girth-to-weight relationship than mature horses, so the adult formula tends to misestimate them. The calculator includes a foal / young-stock option, but it should be treated as a rough placeholder only. For growing horses, a livestock scale is strongly preferred, and your veterinarian can advise on age-appropriate weight ranges.',
  },
  {
    question: 'Where do I measure the heart girth and body length exactly?',
    answer:
      'Heart girth is the circumference of the barrel measured just behind the withers and the elbows — the same place a girth or cinch sits — taken snug at the end of an exhale. Body length is measured in a straight line from the point of shoulder (the front of the chest) to the point of buttock (the pin bone at the rear), along the side of the horse. Using a flexible cloth or weight tape and measuring on level ground with the horse standing square gives the most consistent readings.',
  },
]

export default function HorseWeightCalculatorPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Feed & Hay Calculator', href: '/tools/horse-feed-calculator', category: 'Tools' },
        { title: 'Body Condition Score (Henneke)', href: '/tools/body-condition-score', category: 'Tools' },
        { title: 'Horse Gestation Calculator', href: '/tools/horse-gestation-calculator', category: 'Tools' },
        { title: 'Horse Height Converter', href: '/tools/horse-height-converter', category: 'Tools' },
      ]}
      hero={{
        title: 'Horse Weight Calculator',
        subtitle:
          'Estimate a horse’s bodyweight from heart girth and body length using the standard weight-tape formula. Instant lbs and kg, with pony, draft, and foal adjustments.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Weight Calculator' },
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
              { label: 'Feed & Hay Calculator', href: '/tools/horse-feed-calculator' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score' },
              { label: 'Forage Basics', href: '/nutrition/forage-basics' },
              { label: 'Feeding Senior Horses', href: '/nutrition/feeding-senior-horses' },
              { label: 'Equine Health Hub', href: '/health' },
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

        <p>
          <strong>The quick answer:</strong> estimate a horse&rsquo;s weight from two tape
          measurements. Weight in pounds equals the heart girth (in inches) squared,
          multiplied by the body length (in inches), divided by 330 for an adult riding
          horse. In metric, weight in kilograms equals girth (cm) squared times length (cm)
          divided by 11,900. A horse with a <strong>72-inch girth and a 64-inch length</strong>{' '}
          is estimated at <strong>(72&nbsp;&times;&nbsp;72&nbsp;&times;&nbsp;64)&nbsp;&divide;&nbsp;330&nbsp;&asymp;&nbsp;1,005&nbsp;lb</strong>{' '}
          (about 456&nbsp;kg). Use a divisor of 299 for a pony and 301 for a draft horse.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter the heart-girth circumference and the body length, choose your unit and horse
          type, and the calculator returns an estimated bodyweight in both pounds and
          kilograms. Switching the horse type swaps the published divisor.
        </p>
        <Calculator />

        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop weight tapes
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            A dedicated equine weight tape (girth + length marks) is more repeatable than a
            carpenter&rsquo;s tape. A soft measuring tape is the backup for body length. A livestock
            barn scale is the check when the estimate has to be a true number — medication, sale
            weight, or a clinical ration. Horses.com earns a commission on qualifying purchases at
            no extra cost to you.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+weight+tape?s=tools-horse-weight-calculator"
              amazonLabel="Shop horse weight tapes on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+measuring+tape?s=tools-horse-weight-calculator"
              amazonLabel="Shop horse measuring tapes on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/livestock+barn+scale?s=tools-horse-weight-calculator"
              amazonLabel="Shop livestock barn scales on Amazon →"
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the tape size
          </p>
          <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Weight-tape size chart
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the tape size — girth, length, and the estimate — so the next weigh-in matches
            the same marks. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Weight-tape size chart"
            subtitle="Email the tape size — girth, length, and the estimate so you can re-measure next month. No spam."
            ctaText="Email the tape size"
            source="tools-horse-weight-calculator-under-hero"
          />
        </div>

        <h2 id="formula">The formula</h2
        <p>The girth-and-length weight estimate (Carroll &amp; Huntington, 1988):</p>
        <ul>
          <li>
            <strong>Imperial:</strong> Weight (lb) = (heart girth in inches)<sup>2</sup> &times;
            body length in inches &divide; <strong>330</strong> (adult riding horse)
          </li>
          <li>
            <strong>Metric:</strong> Weight (kg) = (heart girth in cm)<sup>2</sup> &times;
            body length in cm &divide; <strong>11,900</strong> (adult riding horse)
          </li>
          <li>
            <strong>Type adjustment:</strong> use a divisor of ~<strong>299</strong> for ponies
            and ~<strong>301</strong> for draft / heavy horses. Foals and growing youngstock
            follow a different relationship, so girth-tape estimates are unreliable for them.
          </li>
        </ul>
        <p>
          <strong>Worked example.</strong> A 16-hand riding horse measures 72 inches at the
          heart girth and 64 inches in body length. Squaring the girth gives 5,184; multiplied
          by the length (64) that is 331,776; divided by 330 the estimate is{' '}
          <strong>about 1,005 lb</strong>, or roughly 456&nbsp;kg. Re-measure on a different day
          and average two readings to reduce tape error.
        </p>

        <h2 id="methodology">How it works &amp; limits</h2>
        <p>
          Heart girth correlates strongly with a horse&rsquo;s mass because it captures the depth
          and width of the chest and barrel, where most of the body&rsquo;s weight sits. Adding body
          length corrects for frame size, which is why a girth-plus-length formula beats a
          girth-only weight tape. The constant divisor is what converts the geometric product
          into pounds or kilograms; it was fitted to measured horses and differs by body type.
        </p>
        <p>The estimate does <strong>not</strong>:</p>
        <ul>
          <li>Replace a livestock scale for medication dosing, sale weight, or a clinical feeding plan</li>
          <li>Hold its accuracy for foals, very fat or very thin horses, or heavily pregnant mares</li>
          <li>Account for gut fill, which can swing readings by tens of pounds across a day</li>
          <li>Diagnose under- or over-weight on its own — pair it with a body condition score</li>
        </ul>
        <p>
          Use it the way a barn manager uses a weight tape: as a fast, repeatable trend tracker.
          Carry the number into the{' '}
          <Link href="/tools/horse-feed-calculator">feed &amp; hay calculator</Link> to set a daily
          forage target, and score condition with the{' '}
          <Link href="/tools/body-condition-score">body condition score tool</Link> to judge whether
          that weight is appropriate for the horse&rsquo;s frame.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'Carroll, C. L., & Huntington, P. J. (1988). Body condition scoring and weight estimation of horses. Equine Veterinary Journal, 20(1), 41–45.',
              publisher: 'Equine Veterinary Journal',
            },
            {
              label:
                'Ellis, J. M., & Hollands, T. (1998). Accuracy of different methods of estimating the weight of horses. Veterinary Record, 143(12), 335–336.',
              publisher: 'Veterinary Record',
            },
            {
              label:
                'National Research Council (2007). Nutrient Requirements of Horses, Sixth Revised Edition. National Academies Press.',
              publisher: 'NRC',
            },
            {
              label:
                'University of Minnesota Extension — How much does my horse weigh? (estimating bodyweight from girth and length).',
              url: 'https://extension.umn.edu/horse-care-and-management/how-much-does-my-horse-weigh',
              publisher: 'UMN Extension',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the published basis for the girth-and-length
          weight formula and its type-specific divisors. The calculator output is a husbandry
          estimate; no veterinary diagnosis is implied.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Next: set a forage target with the{' '}
          <Link href="/tools/horse-feed-calculator">horse feed &amp; hay calculator</Link>, and
          track condition over time with the{' '}
          <Link href="/tools/body-condition-score">body condition score calculator</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
