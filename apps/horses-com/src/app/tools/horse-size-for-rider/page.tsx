import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  buildBreadcrumbSchema,
  combineSchemas,
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

const URL = 'https://horses.com/tools/horse-size-for-rider'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horse Size for Rider Calculator | Horses.com',
  description:
    'What size horse should you ride? Estimate a suitable horse weight range and height in hands from your weight, height, and discipline using the 15–20% guideline.',
  path: '/tools/horse-size-for-rider',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate what size horse a rider should ride',
  description:
    'Add the rider weight to the weight of the saddle and tack, then divide by the welfare guideline that rider plus tack should be roughly 15 to 20 percent of the horse’s bodyweight to find a suitable horse weight range, and read across to an approximate height band in hands.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Enter rider weight',
      text: 'Enter the rider’s weight in pounds or kilograms. This is the main input, because the guideline is based on the load the horse carries.',
    },
    {
      name: 'Add tack by discipline',
      text: 'Choose the discipline so the calculator adds a typical tack weight: roughly 25 lb for English/general riding, about 45 lb for a western setup, or none for bareback.',
    },
    {
      name: 'Set experience and height',
      text: 'Pick an experience level, which anchors where in the 15–20% band the recommendation sits (beginners steer toward a larger, more forgiving horse). Enter rider height as a leg-length consideration.',
    },
    {
      name: 'Read the suggested range',
      text: 'The calculator divides rider-plus-tack by the 15–20% guideline to suggest a horse bodyweight range and an approximate height band in hands. Treat it as guidance, not a rule.',
    },
    {
      name: 'Confirm with an instructor and the individual horse',
      text: 'Bodyweight is only one factor — conformation, fitness, back strength, age, and saddle fit all matter. Work with a riding instructor and assess the specific horse before deciding what it can carry.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Horse Size for Rider Calculator',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'EquineRiderFitCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free horse-size-for-rider estimator. Inputs: rider weight, rider height, discipline/tack (English ~25 lb, western ~45 lb, or bareback), and experience level. Outputs: a suggested horse bodyweight range and an approximate height band in hands, derived from the welfare guideline that rider plus tack should be roughly 15–20% of the horse’s bodyweight.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Rider weight + discipline tack weight + experience anchor',
    'Suggested horse bodyweight range from the 15–20% carrying guideline',
    'Approximate height band in hands for the suggested weight',
    'Leg-length consideration flag for taller riders',
    'Framed as educational guidance that defers to an instructor and the individual horse',
  ],
  publisher: { '@type': 'Organization', name: 'Horses.com Editorial', url: 'https://horses.com' },
}

const FAQS = [
  {
    question: 'What size horse can carry my weight?',
    answer:
      'A widely cited equine welfare guideline is that the combined weight of the rider plus their saddle and tack should be roughly 15 to 20 percent of the horse’s bodyweight. To estimate a suitable horse, add your weight to your tack (about 25 lb for English, 45 lb for western), then divide by 0.15 for a conservative target and 0.20 for the upper end. For example, a 160 lb rider in English tack carries about 185 lb, which suggests a horse of roughly 925 lb (20% end) up to about 1,230 lb (15% end) — a mid-size to larger horse. The percentage is guidance, not a hard cutoff: a fit, well-built, sound horse may carry comfortably toward the top of the range, while an unfit or poorly-conformed horse may struggle below it.',
  },
  {
    question: 'Is the 20% rule for horse riding accurate?',
    answer:
      'The 15–20% figure is a reasonable welfare guideline rather than an exact law of physics. Research into the effects of rider weight on horses has reported increased signs of strain as the rider-to-horse weight ratio climbs, which is why many organizations suggest keeping rider plus tack at or below about 20% of bodyweight, and nearer 15% for less balanced riders or harder work. But the threshold a given horse tolerates depends heavily on its conformation, back strength, fitness, age, and the fit of the saddle, plus how balanced the rider is. Use the percentage as a starting point and confirm suitability with a knowledgeable instructor and, where appropriate, your veterinarian.',
  },
  {
    question: 'Does rider height matter for choosing a horse, or just weight?',
    answer:
      'Weight drives the carrying-capacity math; height affects fit and appearance. A taller rider with long legs often looks and functions better on a horse toward the upper end of the suggested height band, where the horse’s barrel fills the leg and the rider’s heel does not drop below the horse’s belly. A very short rider may find a large horse harder to mount and aid effectively. Height does not change how much weight a horse can carry, but it does influence which horse within a suitable weight range will be a comfortable, balanced match — which is why this tool treats height as a leg-length consideration alongside the weight estimate.',
  },
  {
    question: 'How many hands should my horse be for my size?',
    answer:
      'There is no fixed hands-per-inch formula, because horse height and bodyweight vary with build. As a rough guide, the suggested-weight range from this calculator maps onto familiar height bands: under about 1,000 lb tends to fall around 14.2–15.2 hands, 1,000–1,200 lb around 15.0–16.0 hands, and heavier horses 16 hands and up. Treat the height band as approximate. The better question is whether a specific horse of the right weight is well-conformed, sound, and a balanced fit for your leg — which is best judged in person with a riding instructor.',
  },
  {
    question: 'Is this a medical or veterinary recommendation?',
    answer:
      'No. This calculator is educational guidance for choosing a riding horse, not medical or veterinary advice and not a soundness assessment. It does not evaluate any individual horse’s health, back, or fitness to carry a particular rider. Whether a horse can comfortably and safely carry someone depends on the individual animal and is a judgment best made with a qualified riding instructor and, where there is any doubt, a veterinarian who can examine the horse.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Tools', url: 'https://horses.com/tools' },
    { name: 'Horse Size for Rider Calculator', url: URL },
  ],
})

const schema = combineSchemas(howToSchema, breadcrumbSchema)

export default function HorseSizeForRiderPage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      relatedLinks={[
        { title: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator', category: 'Tools' },
        { title: 'Horse Height Converter', href: '/tools/horse-height-converter', category: 'Tools' },
        { title: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse', category: 'Ownership' },
        { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics', category: 'Guides' },
      ]}
      hero={{
        title: 'Horse Size for Rider Calculator',
        subtitle:
          'What size horse should you ride? Estimate a suitable horse weight range and height band from your weight, height, and discipline — using the 15–20% carrying guideline.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Horse Size for Rider Calculator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'The guideline', href: '#guideline' },
              { label: 'How it works', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Sizing & fit"
            links={[
              { label: 'Horse Weight Calculator', href: '/tools/horse-weight-calculator' },
              { label: 'Horse Height Converter', href: '/tools/horse-height-converter' },
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              { label: 'Buying Your First Horse', href: '/ownership/buying-your-first-horse' },
              { label: 'First Horse Roadmap', href: '/first-horse-roadmap' },
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
            Keep the worksheet
          </p>
          <h3 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Rider-fit checklist
          </h3>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the rider-fit checklist — suggested horse weight range, height band, and
            the shoppable tack set (saddle, pad, girth, stirrups, ASTM/SEI helmet, weight
            tape) — so you can shop without re-running the math. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Rider-fit checklist"
            subtitle="Email the rider-fit checklist — suggested horse weight and height band plus the tack set. No spam."
            ctaText="Email my rider-fit checklist"
            source="tools-horse-size-for-rider-under-hero"
          />
        </div>

        <p>
          <strong>The quick answer:</strong> a widely cited welfare guideline is that the rider plus their
          saddle and tack should weigh roughly <strong>15&ndash;20% of the horse&rsquo;s bodyweight</strong>.
          To find a suitable horse, add your weight to your tack (about 25&nbsp;lb English, 45&nbsp;lb
          western) and divide by the guideline. A <strong>160&nbsp;lb rider in English tack</strong> carries
          about 185&nbsp;lb, which points to a horse of roughly{' '}
          <strong>925&nbsp;lb (20% end) up to ~1,230&nbsp;lb (15% end)</strong> &mdash; a mid-size to larger
          horse, very roughly 15.0&ndash;16.0&nbsp;hands. Treat it as guidance, not a rule: conformation,
          fitness, and the individual horse matter as much as the percentage.
        </p>

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter your weight and height, choose your discipline (which sets the tack weight) and experience
          level, and the calculator suggests a horse bodyweight range and an approximate height band. The
          experience setting anchors where in the 15&ndash;20% band the recommendation sits.
        </p>
        <Calculator />

        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Shop rider-fit tack
          </div>
          <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
            Once you have a horse weight and height band, the next fit questions are
            saddle, pad, girth or cinch, stirrups, and an ASTM/SEI riding helmet. A
            weight tape is how you confirm the horse you are looking at actually sits
            in that range. These are Amazon category searches — not a ranked product
            list, not invented inventory, and not a substitute for a saddle fitter or
            a riding instructor. Horses.com earns a commission on qualifying purchases
            at no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/english+horse+saddle?s=tools-horse-size-for-rider"
              amazonLabel="Browse English saddles on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/western+horse+saddle?s=tools-horse-size-for-rider"
              amazonLabel="Browse Western saddles on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+saddle+pad?s=tools-horse-size-for-rider"
              amazonLabel="Browse horse saddle pads on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+girth+cinch?s=tools-horse-size-for-rider"
              amazonLabel="Browse girths and cinches on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stirrups?s=tools-horse-size-for-rider"
              amazonLabel="Browse horse stirrups on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ASTM+SEI+horse+riding+helmet?s=tools-horse-size-for-rider"
              amazonLabel="Browse ASTM/SEI riding helmets on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+weight+tape?s=tools-horse-size-for-rider"
              amazonLabel="Browse horse weight tapes on Amazon →"
            />
          </div>
        </div>

        <h2 id="guideline">The 15&ndash;20% carrying guideline</h2>
        <p>
          The guideline behind this tool is straightforward: the combined weight of the rider <em>and</em>
          their tack should be no more than about 15 to 20 percent of the horse&rsquo;s bodyweight. Studies
          of rider weight on horses have reported more signs of physical strain &mdash; temporary back
          soreness, changes in gait &mdash; as the rider-to-horse ratio rises, which is why many welfare
          organizations and instructors converge on roughly 20% as an upper bound, and nearer 15% for less
          balanced riders, heavier work, or horses that are young, old, unfit, or lightly built.
        </p>
        <p>
          It is a <strong>guideline, not a hard rule</strong>. A fit, sound, well-conformed horse with a
          strong back may carry comfortably toward the upper end; an unfit or poorly-built horse may
          struggle below it. The percentage is a useful filter for choosing a horse to look at &mdash; it is
          not a soundness verdict on any individual animal.
        </p>

        <h2 id="methodology">How it works &amp; limits</h2>
        <p>
          The calculator adds a typical tack weight to your rider weight, then divides that combined load by
          the guideline percentages to back out a horse bodyweight: combined weight divided by 0.20 gives
          the lighter (upper-percentage) end, and combined weight divided by 0.15 gives the more
          conservative, larger-horse end. The experience setting picks where inside that band the headline
          recommendation anchors. The height band is a rough lookup from the suggested weight to a familiar
          range in hands, because weight-to-height varies with build. Use the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link> to estimate a real
          horse&rsquo;s bodyweight, and the{' '}
          <Link href="/tools/horse-height-converter">height converter</Link> to translate hands to inches and
          centimetres.
        </p>
        <p>This guidance does <strong>not</strong>:</p>
        <ul>
          <li>Assess any individual horse&rsquo;s health, back strength, soundness, or fitness</li>
          <li>Replace a riding instructor&rsquo;s judgment or a saddle-fit assessment</li>
          <li>Give medical or veterinary advice about whether a horse can carry a person</li>
          <li>Account for rider balance and skill, which change how a load is felt by the horse</li>
        </ul>
        <p>
          Bodyweight is one factor among several. <strong>Work with a riding instructor and assess the
          individual horse</strong> &mdash; its conformation, back, fitness, and saddle fit &mdash; before
          deciding what it can comfortably carry. New buyers should read{' '}
          <Link href="/ownership/buying-your-first-horse">buying your first horse</Link> and{' '}
          <Link href="/guides/saddle-fit-basics">saddle-fit basics</Link> alongside this tool.
        </p>

        <h2 id="sources">Sources</h2>
        <ArticleSourcesList
          sources={[
            {
              label:
                'Powell, D. M., et al. (2008). Evaluation of indicators of weight-carrying ability of light riding horses. Journal of Equine Veterinary Science (rider-to-horse weight ratio and signs of strain).',
              publisher: 'J. Equine Veterinary Science',
            },
            {
              label:
                'Dyson, S., et al. (2020). The influence of rider:horse bodyweight ratio on equine welfare and performance — preliminary findings. Equine veterinary research on rider weight.',
              publisher: 'Equine Veterinary research',
            },
            {
              label:
                'British Horse Society (BHS) — Rider weight guidance: balancing rider, tack, and horse for welfare.',
              url: 'https://www.bhs.org.uk/horse-care-and-welfare/',
              publisher: 'British Horse Society',
            },
            {
              label:
                'University of Minnesota Extension — Horse care and management (bodyweight estimation and rider/horse suitability context).',
              url: 'https://extension.umn.edu/horse-care-and-management',
              publisher: 'UMN Extension',
            },
          ]}
        />
        <p className="text-sm text-brand-text-mid">
          Horses.com Editorial cites these as the published basis for the rider-to-horse weight guideline.
          The output is educational guidance only; it is not a soundness assessment and implies no
          veterinary advice. Confirm any individual horse&rsquo;s suitability with a riding instructor and,
          where appropriate, a veterinarian.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Next: estimate a real horse&rsquo;s weight with the{' '}
          <Link href="/tools/horse-weight-calculator">horse weight calculator</Link>, and convert hands with
          the <Link href="/tools/horse-height-converter">height converter</Link>.
        </p>

        <CrossPortfolioCard currentSite="horses-com" contentType="tool" />
      </div>
    </ArticleLayout>
  )
}
