import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  AffiliateDisclosure,
  ShopCtas,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import CatBodyConditionScore from '../../../components/tools/CatBodyConditionScore'

const URL = 'https://vets.co/tools/cat-body-condition-score'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Cat Body Condition Score — Is My Cat Overweight? | Vets.co',
  description:
    'Is your cat overweight? Answer three hands-on checks to estimate your cat’s body condition score on the 1–9 WSAVA scale, with safe next steps.',
  path: '/tools/cat-body-condition-score',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Cat Body Condition Score — Is My Cat Overweight?',
  description:
    'A guided self-assessment that estimates a cat’s body condition score on the WSAVA 9-point scale from rib feel, waist, and the abdominal fat pad.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-06-14T00:00:00Z',
  modifiedAt: '2026-09-03T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Tools', url: 'https://vets.co/tools' },
    { name: 'Cat Body Condition Score', url: URL },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cat Body Condition Score Calculator',
  description:
    'Free guided self-assessment that estimates a cat’s body condition score (1–9 WSAVA scale) from three checks: rib palpation, top-down waist, and the side-view abdominal fat pad.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Estimates feline body condition score on the WSAVA 1–9 scale',
    'Three guided checks: rib palpation, waist from above, abdominal fat pad',
    'Primordial-pouch caveat (a normal belly flap mistaken for fat)',
    'Interpretation: underweight, ideal, overweight, obese, with safe next steps',
    'Shoppable weight-management kit via Amazon category searches (digital pet scale, measuring tape, weight-management cat food, puzzle feeder, interactive cat toy)',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const howToSchema = buildHowToSchema({
  name: 'How to assess your cat’s body condition score',
  description:
    'Estimate a cat’s body condition score on the 9-point scale using three checks: feeling the ribs, looking at the waist from above, and judging the abdominal fat pad from the side.',
  url: URL,
  steps: [
    { name: 'Feel the ribs', text: 'Run both hands gently along the chest. At ideal condition you feel the ribs easily under a thin layer of fat.' },
    { name: 'Look from above', text: 'With the cat standing, look down. At ideal condition there is a visible waist behind the ribs.' },
    { name: 'Judge the belly from the side', text: 'Assess the firm abdominal fat pad — not the normal primordial pouch (a loose skin flap). At ideal there is only a minimal fat pad and a slight tuck.' },
    { name: 'Combine into a score', text: 'Average the three checks to an estimated BCS of 1–9 (4–5 is ideal), then follow the interpretation and confirm with your veterinarian. This is a planning / wellness reference, not a diagnosis.' },
  ],
})

const FAQS = [
  {
    question: 'What is a healthy body condition score for a cat?',
    answer:
      'A BCS of 4 to 5 out of 9 is ideal for most cats. At that score you can easily feel the ribs under a thin layer of fat, see a waist when you look down from above, and there is only a minimal abdominal fat pad. The 9-point WSAVA scale runs from 1 (emaciated) to 9 (grossly obese).',
  },
  {
    question: 'How do I know if my cat is overweight?',
    answer:
      'Three checks: you should be able to feel the ribs with light pressure, see a waist behind the ribs from above, and find only a small abdominal fat pad. If the ribs are hard to feel, the waist has disappeared and the back looks oval, and the belly carries a firm fat pad, your cat is likely overweight. As a rule of thumb, each BCS point above 5 is roughly 10% over ideal body weight.',
  },
  {
    question: 'My cat has a hanging belly — is that fat?',
    answer:
      'Not necessarily. Many cats have a primordial pouch — a normal, loose flap of skin and a little fat that runs along the lower belly and swings as the cat walks. It is especially noticeable after neutering and is not a sign of obesity on its own. Judge body condition mainly by the rib feel and the waist; the pouch is loose skin, whereas an obese cat’s abdomen is firm and rounded.',
  },
  {
    question: 'How do I help my cat lose weight safely?',
    answer:
      'Slowly, and with your veterinarian. Cats must lose weight gradually because rapid weight loss or fasting in an overweight cat can trigger hepatic lipidosis (fatty liver), a serious and sometimes fatal condition. Your vet will set a target weight and a measured daily calorie amount, often with a therapeutic diet, and monitor progress. Never crash-diet a cat.',
  },
  {
    question: 'Is body condition score better than weighing my cat?',
    answer:
      'They work together, but BCS is the better single measure because it judges the cat against its own frame rather than a breed average. Find your cat’s ideal weight at a BCS of 4–5, then track the scale against that target. A half-kilogram change is large for a cat, so regular weighing plus body condition scoring catches problems early.',
  },
  {
    question: 'Is this body-condition score a diagnosis?',
    answer:
      'No. It is a planning and wellness reference only. The WSAVA 1–9 scale helps you talk with your veterinarian about weight and a safe feeding plan; it does not diagnose a disease, set a calorie target, or replace an exam. Unexplained weight loss or gain in a cat belongs with a veterinarian — or start with telehealth when the cat is stable and this is not an emergency.',
  },
]

export default function CatBodyConditionScorePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Cat Body Condition Score',
        subtitle:
          'Is your cat overweight? Answer three hands-on checks — rib feel, waist from above, and the abdominal fat pad — to estimate your cat’s body condition score on the 1–9 scale, with the primordial-pouch caveat and safe next steps.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Cat Body Condition Score' },
      ]}
      schema={[articleSchema, breadcrumbSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The assessor', href: '#assessor' },
              { label: 'Weight-management kit', href: '#cat-bcs-kit' },
              { label: 'How it works', href: '#how' },
              { label: 'Safe weight loss in cats', href: '#safe' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Weight & wellness"
            links={[
              { label: 'Is This a Cat Emergency?', href: '/tools/is-this-a-cat-emergency' },
              { label: 'Cat Age Calculator', href: '/tools/cat-age-calculator' },
              { label: 'Cat Grimace Scale', href: '/tools/cat-grimace-scale' },
              { label: 'Weight Management', href: '/health/weight-management' },
              { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
              { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
              { label: 'Insurance Coverage Finder', href: '/tools/insurance-finder' },
              { label: 'Talk to a vet (telehealth)', href: '/telehealth' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the BCS chart
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Cat BCS chart &amp; weight-management recap
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the 1–9 WSAVA BCS chart (rib feel, waist, abdominal fat pad)
            and the weight-management recap so you can re-score next month
            without re-reading the descriptors. Planning / wellness reference
            only — not a diagnosis. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="vets-co"
            title="Cat BCS chart & weight-management recap"
            subtitle="Email the 1–9 WSAVA BCS chart and weight-management recap. No spam."
            ctaText="Email my BCS chart"
            source="tools-cat-body-condition-score-under-hero"
          />
        </div>

        <h2 id="assessor">The assessor</h2>
        <p>
          Body condition scoring is how veterinarians judge whether a cat carries a healthy amount of
          fat, independent of breed or scale weight. Answer the three checks below — feel the ribs,
          look down at the waist, and judge the belly from the side — and the tool estimates a body
          condition score from 1 to 9, where 4–5 is ideal. This is a planning / wellness reference,
          not a diagnosis. Pair it with the{' '}
          <Link href="/tools/cat-age-calculator">cat age calculator</Link> to match
          weight checks to AAFP/AAHA life stage, and the{' '}
          <Link href="/tools/cat-grimace-scale">cat grimace scale</Link> if you are
          also watching for pain (observation kit, not a diagnosis). For a feline
          sign-list urgency read, use{' '}
          <Link href="/tools/is-this-a-cat-emergency">Is this a cat emergency?</Link>
          {' '}— a triage aid, not a diagnosis.
        </p>
        <CatBodyConditionScore />

        {/* Money path — live amazon-brand search hops (weight-management kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list, not a diagnosis. */}
        <div id="cat-bcs-kit" className="mt-8 mb-8">
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a weight-management kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              These Amazon category searches are husbandry items that make a
              body-condition score repeatable — a digital pet scale, a measuring
              tape, weight-management cat food, a puzzle feeder, and an
              interactive cat toy. They are not a ranked product list, not
              invented inventory, and they do not diagnose a weight problem or
              set a calorie target. Ask your veterinarian for a target weight
              and a safe rate of change before cutting or adding calories.
              Vets.co earns a commission on qualifying purchases at no extra
              cost to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+scale?s=tools-cat-body-condition-score"
                amazonLabel="Browse digital pet scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/measuring+tape?s=tools-cat-body-condition-score"
                amazonLabel="Browse measuring tapes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/weight+management+cat+food?s=tools-cat-body-condition-score"
                amazonLabel="Browse weight-management cat food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puzzle+feeder?s=tools-cat-body-condition-score"
                amazonLabel="Browse puzzle feeders on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/interactive+cat+toy?s=tools-cat-body-condition-score"
                amazonLabel="Browse interactive cat toys on Amazon →"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
          <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Planning ahead
          </div>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Weight-related disease (diabetes, arthritis, urinary disease) is
            one of the cost drivers pet insurance is built for. Comparing
            published coverage while a cat is young and healthy matters because
            pre-existing conditions are excluded. For a non-emergency question
            about weight or feeding, talk to a licensed vet on a screen rather
            than waiting for a gap to become an ER visit.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/tools/insurance-finder"
              className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
            >
              Filter insurance coverage →
            </Link>
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-block bg-brand-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-dark/90"
            >
              Compare pet insurance →
            </Link>
            <Link
              href="/telehealth"
              className="inline-block border border-brand-border bg-brand-white text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
            >
              Talk to a vet (telehealth) →
            </Link>
          </div>
        </div>

        <h2 id="how">How it works</h2>
        <p>
          The WSAVA 9-point feline scale rests on three observations. At an ideal score of 4–5 the ribs
          are easily felt under a thin layer of fat, a waist is visible from above, and only a minimal
          abdominal fat pad is present. As fat is gained, the ribs become harder to feel, the waist
          disappears, and the abdomen rounds and firms. Each point above 5 represents roughly 10% over
          ideal body weight, so a score of 7 is about 20% overweight and a 9 is roughly 40%+.
        </p>
        <p>
          One feline-specific caution is built into the tool: the <strong>primordial pouch</strong>, a
          normal loose flap of skin along the lower belly that hangs and swings as a cat walks and is
          especially obvious after neutering. It is not fat, and it is the single most common reason
          owners over- or under-estimate condition. Judge mainly by the rib feel and the waist.
        </p>

        <h2 id="safe">Safe weight loss in cats</h2>
        <p>
          If your cat scores above ideal, the plan matters as much as the goal. Cats must lose weight
          slowly under veterinary supervision: rapid weight loss or fasting in an overweight cat can
          trigger <strong>hepatic lipidosis</strong> (fatty liver), a serious and sometimes fatal
          condition unique in its severity to cats. Your veterinarian will set a target weight and a
          measured daily calorie amount — often with a therapeutic diet — and re-check regularly. This
          tool is a planning / wellness reference, not a diagnosis or a diet plan. For a stable,
          non-emergency question, start at <Link href="/telehealth">telehealth</Link>.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>WSAVA Global Nutrition Committee — Body Condition Score (cat) chart, 9-point scale.</li>
          <li>AAHA — Weight Management Guidelines for Dogs and Cats.</li>
          <li>WSAVA Global Nutrition Committee — Muscle Condition Score guidance (companion assessment).</li>
        </ul>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
