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
  modifiedAt: '2026-06-14T00:00:00Z',
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
    { name: 'Combine into a score', text: 'Average the three checks to an estimated BCS of 1–9 (4–5 is ideal), then follow the interpretation and confirm with your veterinarian.' },
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
              { label: 'How it works', href: '#how' },
              { label: 'Safe weight loss in cats', href: '#safe' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Weight & wellness"
            links={[
              { label: 'Cat Age Calculator', href: '/tools/cat-age-calculator' },
              { label: 'Weight Management', href: '/health/weight-management' },
              { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
              { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
              { label: 'Find a Vet', href: '/tools/insurance-finder' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners."
            source="cat-body-condition-score"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

        <h2 id="assessor">The assessor</h2>
        <p>
          Body condition scoring is how veterinarians judge whether a cat carries a healthy amount of
          fat, independent of breed or scale weight. Answer the three checks below — feel the ribs,
          look down at the waist, and judge the belly from the side — and the tool estimates a body
          condition score from 1 to 9, where 4–5 is ideal. Pair it with the{' '}
          <Link href="/tools/cat-age-calculator">cat age calculator</Link> to match
          weight checks to AAFP/AAHA life stage.
        </p>
        <CatBodyConditionScore />

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
          tool is a starting point to look and feel the right way, not a diagnosis or a diet plan.
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
