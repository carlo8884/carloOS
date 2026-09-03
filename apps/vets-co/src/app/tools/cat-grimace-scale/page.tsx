import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  buildFAQSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import CatGrimaceScale from '../../../components/tools/CatGrimaceScale'

const URL = 'https://vets.co/tools/cat-grimace-scale'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Cat Grimace Scale — Is My Cat in Pain? | Vets.co',
  description:
    'Is your cat in pain? Score five facial signs — ears, eyes, muzzle, whiskers, head — with this owner guide to the validated Feline Grimace Scale.',
  path: '/tools/cat-grimace-scale',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Cat Grimace Scale — Is My Cat in Pain?',
  description:
    'A guided owner self-assessment adapted from the validated Feline Grimace Scale: score five facial action units to gauge whether a cat may be in pain, with safe next steps.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-06-15T00:00:00Z',
  modifiedAt: '2026-06-15T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Tools', url: 'https://vets.co/tools' },
    { name: 'Cat Grimace Scale', url: URL },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cat Grimace Scale Pain Assessor',
  description:
    'Free guided self-assessment adapted from the validated Feline Grimace Scale. Owners score five facial action units — ear position, orbital tightening, muzzle tension, whisker position, and head position — for an estimated grimace total out of 10, with interpretation and safe next steps.',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Scores five facial action units (0–2 each) from the Feline Grimace Scale',
    'Estimated grimace total out of 10 with the ≈4/10 analgesia threshold',
    'Calibrated interpretation: minimal signs, some signs, or signs consistent with pain',
    'Safety guidance: never give human painkillers to cats; defer to a veterinarian',
  ],
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const howToSchema = buildHowToSchema({
  name: 'How to use the Cat Grimace Scale at home',
  description:
    'Score five facial action units on a calm, unprovoked cat to estimate whether it may be in pain, using the validated Feline Grimace Scale framework.',
  url: URL,
  steps: [
    { name: 'Observe calmly', text: 'Watch your cat when it is resting and unprovoked — not while being handled, which changes the face.' },
    { name: 'Score ear position', text: 'Forward and upright scores 0; slightly pulled apart scores 1; flattened and rotated outward scores 2.' },
    { name: 'Score eye opening', text: 'Eyes fully open score 0; partially open score 1; squinted or closed score 2.' },
    { name: 'Score muzzle, whiskers, and head', text: 'Rate muzzle tension, whisker position, and head height each from 0 (relaxed/high) to 2 (tense/forward/low).' },
    { name: 'Total and act', text: 'Add the five scores (0–10). A total around 4 or higher is the validated threshold suggesting pain — contact your veterinarian and never give human painkillers.' },
  ],
})

const FAQS = [
  {
    question: 'What is the Feline Grimace Scale?',
    answer:
      'The Feline Grimace Scale (FGS) is a validated tool that gauges pain in cats from facial expression. Developed and validated by researchers at the Université de Montréal (Evangelista et al., Scientific Reports, 2019), it scores five facial action units — ear position, orbital (eye) tightening, muzzle tension, whisker position, and head position — from 0 to 2 each. It was designed for use by trained observers and veterinary teams; this page adapts it as an owner education aid.',
  },
  {
    question: 'What grimace score means my cat is in pain?',
    answer:
      'In the validated scale, a total of roughly 4 out of 10 or higher (technically a ratio above 0.39 of the maximum) is the cut-off suggesting an animal likely needs pain relief. At or above that level, contact your veterinarian. Below it, pain is less likely on facial signs alone — but not ruled out, because cats hide pain well.',
  },
  {
    question: 'Can a low score mean my cat is definitely not in pain?',
    answer:
      'No. A low facial-pain score is reassuring but not conclusive. Cats instinctively mask pain, and some pain — nausea, internal, or slow chronic conditions like arthritis — may not show clearly in the face. If your cat is hiding, eating less, grooming poorly, avoiding jumps, or simply seems off, talk to your veterinarian regardless of the grimace total.',
  },
  {
    question: 'What should I do if I think my cat is in pain?',
    answer:
      'Contact your veterinarian and describe what you see — the facial signs, plus appetite, hiding, mobility, and litter-box changes. Do not give human or over-the-counter painkillers: many, including acetaminophen (Tylenol) and ibuprofen, are toxic to cats and can be fatal even in small doses. Pain control for cats must be prescribed and dosed by a veterinarian.',
  },
  {
    question: 'When is the grimace scale most useful?',
    answer:
      'It is most reliable for acute pain — after surgery, injury, or a dental problem — assessed on a calm, unprovoked cat, since handling and stress change the face. It is less suited to slow chronic pain. Use it as one input alongside behavior and your own knowledge of your cat, not as a standalone diagnosis.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

export default function CatGrimaceScalePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Cat Grimace Scale',
        subtitle:
          'Is your cat in pain? Cats hide it well — but their faces leak it. Score five facial action units (ears, eyes, muzzle, whiskers, head) using the framework of the validated Feline Grimace Scale to gauge whether your cat may be hurting, and learn the safe next steps.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Cat Grimace Scale' },
      ]}
      schema={[articleSchema, breadcrumbSchema, faqSchema]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The assessor', href: '#assessor' },
              { label: 'How the scale works', href: '#how' },
              { label: 'What a high score means', href: '#high' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Cat health"
            links={[
              { label: 'Cat Age Calculator', href: '/tools/cat-age-calculator' },
              { label: 'Cat Body Condition Score', href: '/tools/cat-body-condition-score' },
              { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
              { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
              { label: 'Find a Vet', href: '/find-a-vet' },
            ]}
          />
          <CrossPortfolioCard currentSite="vets-co" contentType="tool" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="vets-co"
            title="Vets.co reference letter"
            subtitle="Veterinary references for pet owners."
            source="cat-grimace-scale"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

        <h2 id="assessor">The assessor</h2>
        <p>
          Cats evolved to conceal pain, which is why owners so often miss it until a problem is
          advanced. Their faces, however, change in measurable ways when they hurt. Score the five
          facial action units below on a calm, unprovoked cat and the tool totals them on the
          0–10 scale used by the validated Feline Grimace Scale. For life-stage
          context — including senior screening — use the{' '}
          <Link href="/tools/cat-age-calculator">cat age calculator</Link>. For
          weight, the{' '}
          <Link href="/tools/cat-body-condition-score">cat body condition score</Link>{' '}
          is a wellness reference, not a diagnosis.
        </p>
        <CatGrimaceScale />

        <h2 id="how">How the scale works</h2>
        <p>
          The Feline Grimace Scale rests on five facial <em>action units</em>: ear position, orbital
          tightening (how squinted the eyes are), muzzle tension, whisker position, and head
          position. Each is scored 0 (absent), 1 (moderate or uncertain), or 2 (obvious), for a total
          between 0 and 10. Researchers validated it against a gold-standard pain assessment and
          found it reliably separates comfortable cats from painful ones, with good agreement between
          observers.
        </p>
        <p>
          It works best for <strong>acute</strong> pain — after surgery, injury, or dental disease —
          and on a cat that is resting rather than being handled, because stress and restraint change
          the face. It is one input, read alongside behavior and your own sense of your cat.
        </p>

        <h2 id="high">What a high score means</h2>
        <p>
          In the validated scale, a total around <strong>4 out of 10 or higher</strong> (a ratio above
          0.39 of the maximum) is the threshold at which a cat likely needs pain relief. At or above
          that level, the right step is a call to your veterinarian — not a wait-and-see, and never a
          human painkiller. Many common over-the-counter drugs, including
          <strong> acetaminophen (Tylenol)</strong> and <strong>ibuprofen</strong>, are toxic to cats
          and can be fatal in small amounts. Feline pain relief must be prescribed and dosed by a
          veterinarian.
        </p>
        <p>
          A low score is reassuring but not a clearance: because cats mask pain, and some pain is not
          facial, trust changes in appetite, hiding, grooming, mobility, and litter-box habits too.
        </p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Evangelista MC, et al. “Facial expressions of pain in cats: the development and validation of a Feline Grimace Scale.” <em>Scientific Reports</em>, 2019.</li>
          <li>Feline Grimace Scale — Université de Montréal (felinegrimacescale.com), training materials and action-unit definitions.</li>
          <li>American Veterinary Medical Association — coverage of facial pain scoring in cats.</li>
        </ul>

        <h2 id="faq">Frequently asked questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
