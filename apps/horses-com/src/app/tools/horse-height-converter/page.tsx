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

const URL = 'https://horses.com/tools/horse-height-converter'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Height Converter: Hands, Inches & cm | Horses.com',
  description:
    'Convert horse height between hands, inches, and centimetres. Handles the hands.inches notation correctly (15.2hh = 62 in = 157.5 cm), with a reference table.',
  path: '/tools/horse-height-converter',
})

const howToSchema = buildHowToSchema({
  name: 'How to convert horse height between hands, inches, and centimetres',
  description:
    'A hand equals 4 inches, and height in hands is written hands.inches (the digit after the point is whole inches, 0–3). Multiply hands by 4 and add the extra inches to get total inches, then multiply by 2.54 to get centimetres.',
  url: URL,
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Read the hands.inches notation correctly',
      text: 'Height in hands is written hands.inches. In 15.2hh, the 2 is whole inches (0–3), not a decimal. So 15.2hh means 15 hands and 2 inches.',
    },
    {
      name: 'Convert hands to inches',
      text: 'Multiply the whole hands by 4 and add the extra inches. 15.2hh = 15 × 4 + 2 = 62 inches.',
    },
    {
      name: 'Convert inches to centimetres',
      text: 'Multiply total inches by 2.54. 62 inches × 2.54 = 157.5 cm.',
    },
    {
      name: 'Convert back to hands',
      text: 'Divide total inches by 4 for whole hands; the whole-inch remainder is the digit after the point. 66 inches ÷ 4 = 16 hands, remainder 2 inches = 16.2hh.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Height Converter (Hands, Inches, cm)',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineMeasurementConverter',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free horse height converter between hands, inches, and centimetres. Correctly handles the hands.inches notation (1 hand = 4 inches; 15.2hh = 62 in = 157.5 cm) and flags the pony cutoff at 14.2hh.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    '1 hand = 4 inches; 1 inch = 2.54 cm',
    'Correct hands.inches notation (digit after the point is inches 0–3, not a decimal)',
    'Convert from hands, inches, or centimetres',
    'Pony vs. horse classification (≤14.2hh = pony)',
    'Reference table of common heights',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const REFERENCE = [
  { hands: '14.2hh', inches: 58, cm: 147.3, note: 'Pony cutoff — 14.2hh and under is a pony' },
  { hands: '15.0hh', inches: 60, cm: 152.4, note: 'Small horse' },
  { hands: '15.2hh', inches: 62, cm: 157.5, note: 'Common riding-horse height' },
  { hands: '16.0hh', inches: 64, cm: 162.6, note: 'Mid-size horse' },
  { hands: '16.2hh', inches: 66, cm: 167.6, note: 'Larger riding horse' },
  { hands: '17.0hh', inches: 68, cm: 172.7, note: 'Tall horse' },
]

const FAQS = [
  {
    question: 'How many inches is 15.2 hands?',
    answer:
      '15.2 hands is 62 inches. One hand equals 4 inches, and in the hands.inches notation the digit after the point is whole inches (0–3), not a decimal fraction. So 15.2hh means 15 hands and 2 inches: 15 × 4 + 2 = 62 inches, which is 157.5 cm. A common mistake is to read 15.2 as 15.2 decimal hands (which would be 60.8 inches) — that is wrong. The number after the point can only be 0, 1, 2, or 3, because 4 inches rolls over into the next whole hand (so 15 hands and 4 inches is written 16.0hh, not 15.4hh).',
  },
  {
    question: 'How tall is a horse in cm vs hands?',
    answer:
      'Convert hands to inches first (hands × 4 + extra inches), then multiply inches by 2.54 to get centimetres. For example: 15hh = 60 in = 152.4 cm; 15.2hh = 62 in = 157.5 cm; 16hh = 64 in = 162.6 cm; 16.2hh = 66 in = 167.6 cm; 17hh = 68 in = 172.7 cm. Hands and inches are the customary units in the US and UK, while centimetres are standard in much of Europe and for many international (FEI) contexts.',
  },
  {
    question: 'What is the difference between a pony and a horse?',
    answer:
      'The standard dividing line is height: an equine measuring 14.2 hands (58 inches / 147.3 cm) or under at the withers is a pony, and anything over 14.2hh is a horse. The distinction is by height, not age — a small adult equine is a pony, while a young horse that will mature over 14.2hh is still a horse. Some breed registries and competition rules set their own cutoffs or measurement conditions, and a few breeds (such as some small Arabians or Icelandics) are called horses by tradition regardless of height, so always check the specific rulebook for showing.',
  },
  {
    question: 'Why can’t the number after the point in hands be 4 or higher?',
    answer:
      'Because a hand is exactly 4 inches, the inches portion of a hands measurement only runs from 0 to 3. Once you reach 4 inches, that is a whole additional hand, so it rolls over: 15 hands and 4 inches is written 16.0hh, not 15.4hh. This is exactly why hands.inches is a notation, not a decimal — a value like 15.4hh or 15.7hh is not valid. The converter on this page enforces the 0–3 range so you can’t enter an impossible height.',
  },
  {
    question: 'How is a horse officially measured?',
    answer:
      'Height is measured from the ground to the highest point of the withers, with the horse standing square on a hard, level surface. For competition measurement the horse is usually unshod (or a fixed allowance is deducted for shoes), and an official measuring stick with a level is used. Everyday barn measurements with a tape or stick are close enough for buying and selling, but a small difference in footing or head position can shift a horse across a show-class cutoff, which is why formal measurement is standardized.',
  },
]

export default function HorseHeightConverterPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Horse Gestation Calculator', href: '/tools/horse-gestation-calculator', category: 'Tools' },
        { title: 'Horse Feed & Hay Calculator', href: '/tools/horse-feed-calculator', category: 'Tools' },
        { title: 'Body Condition Score (Henneke)', href: '/tools/body-condition-score', category: 'Tools' },
      ]}
      hero={{
        title: 'Horse Height Converter',
        subtitle:
          'Convert horse height between hands, inches, and centimetres — with the hands.inches notation handled correctly (15.2hh = 62 in = 157.5 cm).',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Height Converter' },
      ]}
      schema={howToSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The converter', href: '#calculator' },
              { label: 'How the notation works', href: '#formula' },
              { label: 'Reference table', href: '#reference' },
              { label: 'Pony vs. horse', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Horse tools"
            links={[
              { label: 'Weight Calculator', href: '/tools/horse-weight-calculator' },
              { label: 'Gestation Calculator', href: '/tools/horse-gestation-calculator' },
              { label: 'Feed & Hay Calculator', href: '/tools/horse-feed-calculator' },
              { label: 'Body Condition Score', href: '/tools/body-condition-score' },
              { label: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Horses.com owner letter"
            subtitle="Horse-care references and tool updates."
            source="height-converter"
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
          <strong>The quick answer:</strong> one hand equals <strong>4 inches</strong>,
          and horse height is written in <strong>hands.inches</strong> notation &mdash;
          the digit after the point is whole inches (0&ndash;3), not a decimal. So{' '}
          <strong>16.2 hands = 66 inches = 167.6 cm</strong>, and{' '}
          <strong>15.2hh = 62 inches = 157.5 cm</strong>. To convert, multiply hands by
          4 and add the extra inches, then multiply inches by 2.54 for centimetres. An
          equine measuring <strong>14.2hh or under is a pony</strong>; over 14.2hh is a
          horse.
        </p>

        <h2 id="calculator">The converter</h2>
        <p>
          Choose whether you&rsquo;re starting from hands, inches, or centimetres, enter
          the value, and the converter returns the other two units. In hands mode the
          inches field accepts only 0&ndash;3, because 4 inches is a whole hand.
        </p>
        <Calculator />

        <h2 id="formula">How the notation works</h2>
        <p>
          Hands.inches is a <strong>notation, not a decimal</strong>. This is the single
          most common conversion mistake, so it&rsquo;s worth being explicit:
        </p>
        <ul>
          <li>
            <strong>1 hand = 4 inches.</strong> The number after the point is whole
            inches and can only be 0, 1, 2, or 3.
          </li>
          <li>
            <strong>Hands → inches:</strong> (whole hands &times; 4) + extra inches.
          </li>
          <li>
            <strong>Inches → cm:</strong> inches &times; 2.54.
          </li>
          <li>
            <strong>Inches → hands:</strong> divide by 4 for whole hands; the whole-inch
            remainder is the digit after the point.
          </li>
        </ul>
        <p>
          <strong>Worked example.</strong> A 15.2hh horse is{' '}
          <strong>15 &times; 4 + 2 = 62 inches</strong>, and 62 &times; 2.54 ={' '}
          <strong>157.5 cm</strong>. A 16.2hh horse is 16 &times; 4 + 2 ={' '}
          <strong>66 inches = 167.6 cm</strong>. Note that 15.2hh is{' '}
          <strong>not</strong> 15.2 decimal hands (which would be 60.8 inches) &mdash;
          reading the notation as a decimal is the error this converter is built to
          prevent.
        </p>

        <h2 id="reference">Reference table of common heights</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-brand-border text-left">
                <th className="py-2 pr-4 font-semibold text-brand-text-dark">Hands</th>
                <th className="py-2 pr-4 font-semibold text-brand-text-dark">Inches</th>
                <th className="py-2 pr-4 font-semibold text-brand-text-dark">cm</th>
                <th className="py-2 font-semibold text-brand-text-dark">Notes</th>
              </tr>
            </thead>
            <tbody>
              {REFERENCE.map((r) => (
                <tr key={r.hands} className="border-b border-brand-border/60">
                  <td className="py-2 pr-4 font-medium text-brand-text-dark">{r.hands}</td>
                  <td className="py-2 pr-4 text-brand-text-mid">{r.inches} in</td>
                  <td className="py-2 pr-4 text-brand-text-mid">{r.cm} cm</td>
                  <td className="py-2 text-brand-text-mid">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-brand-text-mid">
          Centimetre values are rounded to one decimal place.
        </p>

        <h2 id="methodology">Pony vs. horse</h2>
        <p>
          The standard distinction between a pony and a horse is <strong>height, not
          age</strong>. An equine measuring <strong>14.2 hands (58 inches / 147.3 cm) or
          under</strong> at the withers is a pony; anything over 14.2hh is a horse. A
          small adult equine is a pony even when fully grown, while a yearling that will
          mature above 14.2hh is a horse despite being short now.
        </p>
        <p>
          Breed registries and competition bodies may apply their own cutoffs or
          measurement conditions, and a handful of small breeds are called horses by
          tradition regardless of height. For showing, always check the specific
          rulebook &mdash; a fraction of an inch can move a horse across a class
          boundary, which is why official measurement is standardized at the withers on
          hard, level ground. When you&rsquo;re buying, pair the height with the{' '}
          <Link href="/tools/horse-weight-calculator">weight calculator</Link> and a{' '}
          <Link href="/tools/body-condition-score">body condition score</Link> to judge
          whether the horse suits the rider and the job.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'United States Equestrian Federation (USEF) — measurement rules for ponies and horses (height at the withers, hard level surface).',
              url: 'https://www.usef.org/',
              publisher: 'USEF',
            },
            {
              label:
                'Fédération Equestre Internationale (FEI) — height definitions and pony measurement in centimetres.',
              url: 'https://www.fei.org/',
              publisher: 'FEI',
            },
            {
              label:
                'British Horse Society / National Pony Society — pony height definition (≤14.2hh).',
              publisher: 'British Horse Society',
            },
            {
              label:
                'Standard unit definitions: 1 hand = 4 inches; 1 inch = 2.54 centimetres (NIST).',
              url: 'https://www.nist.gov/pml/owm',
              publisher: 'NIST',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the basis for the hand/inch/centimetre
          definitions and the 14.2hh pony cutoff. The converter applies exact unit
          conversions; show-eligibility cutoffs vary by governing body.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Next: estimate the horse&rsquo;s weight with the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link>, plan a
          foaling date with the{' '}
          <Link href="/tools/horse-gestation-calculator">gestation calculator</Link>, and set a
          forage target with the{' '}
          <Link href="/tools/horse-feed-calculator">feed &amp; hay calculator</Link>.
        </p>
      </div>
    </ArticleLayout>
  )
}
