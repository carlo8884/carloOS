import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleByline,
  FAQAccordion,
  CrossPortfolioCard,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { LifeStages } from '../../data/life-stages'
import { ArticleMasthead } from '../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Life Stages — AAFCO Profiles for Dog & Cat Food | PetFood.com',
  description:
    'Reference hub for AAFCO life-stage profiles: puppy, kitten, adult dog, adult cat, senior dog, senior cat, and large-breed puppy growth.',
  path: '/life-stage',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pet Food Life Stages — AAFCO Reference Hub',
  description:
    'Independent hub page indexing seven life-stage references (puppy, kitten, adult dog, adult cat, senior dog, senior cat, large-breed puppy) against AAFCO 2025 Chapter 6 nutrient profiles.',
  url: 'https://petfood.com/life-stage',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Life Stages', url: 'https://petfood.com/life-stage' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Food by Life Stage',
  numberOfItems: LifeStages.length,
  itemListElement: LifeStages.map((s, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: s.name,
    url: `https://petfood.com/life-stage/${s.slug}`,
  })),
}

const lifeStagesFAQItems: FAQItem[] = [
  {
    question: "What is the difference between a puppy food labeled for all life stages versus one specifically for growth?",
    answer: "Both labels are nutritionally adequate for puppies, but they reflect different substantiation methods. A food labeled for all life stages has been formulated to meet both the growth-and-reproduction profile and the adult maintenance profile simultaneously — meaning it exceeds the adult minimums and meets the growth minimums. A food specifically labeled for growth may be more precisely calibrated to the growth profile and may not be appropriate for long-term adult feeding if the protein and fat levels are significantly higher than maintenance requirements. For large-breed puppies, the all-life-stages label requires an additional qualifier confirming it is appropriate for large-breed growth; without that qualifier, an all-life-stages food may have calcium levels that exceed the tighter large-breed growth ceiling.",
    answerText: "Both labels are nutritionally adequate for puppies, but they reflect different substantiation methods. A food labeled for all life stages has been formulated to meet both the growth-and-reproduction profile and the adult maintenance profile simultaneously — meaning it exceeds the adult minimums and meets the growth minimums. A food specifically labeled for growth may be more precisely calibrated to the growth profile and may not be appropriate for long-term adult feeding if the protein and fat levels are significantly higher than maintenance requirements. For large-breed puppies, the all-life-stages label requires an additional qualifier confirming it is appropriate for large-breed growth; without that qualifier, an all-life-stages food may have calcium levels that exceed the tighter large-breed growth ceiling.",
  },
  {
    question: "Is senior pet food better for an older dog or cat?",
    answer: "Senior is a marketing classification, not an AAFCO regulatory category. There is no AAFCO nutrient profile specifically for senior dogs or cats, and the AAFCO model regulations do not define the term senior. A bag labeled senior carries one of the same two AAFCO profiles as any other dog or cat food — growth-and-reproduction or adult maintenance — plus the manufacturer's additional senior positioning. Senior formulations typically adjust protein, fat, fiber, or functional ingredients based on the manufacturer's interpretation of aging-pet needs, which varies significantly between brands. Whether a senior-labeled food is appropriate for an individual older pet depends on that pet's body condition, health status, and any diagnosed conditions — the AAFCO statement, not the senior label, is the regulated nutritional claim.",
    answerText: "Senior is a marketing classification, not an AAFCO regulatory category. There is no AAFCO nutrient profile specifically for senior dogs or cats, and the AAFCO model regulations do not define the term senior. A bag labeled senior carries one of the same two AAFCO profiles as any other dog or cat food — growth-and-reproduction or adult maintenance — plus the manufacturer's additional senior positioning. Senior formulations typically adjust protein, fat, fiber, or functional ingredients based on the manufacturer's interpretation of aging-pet needs, which varies significantly between brands. Whether a senior-labeled food is appropriate for an individual older pet depends on that pet's body condition, health status, and any diagnosed conditions — the AAFCO statement, not the senior label, is the regulated nutritional claim.",
  },
  {
    question: "Why do large-breed puppy foods have lower calcium than regular puppy foods?",
    answer: "AAFCO 2025 Chapter 6 includes a specific large-breed growth qualifier that sets a tighter calcium maximum for dogs expected to reach 70 pounds or more as adults. This restriction exists because large and giant breed puppies are more sensitive to dietary calcium excess during skeletal development than small-breed puppies — excess calcium in a rapidly growing large-breed puppy interferes with normal endochondral ossification, can contribute to developmental orthopedic diseases such as osteochondrosis dissecans and hypertrophic osteodystrophy, and is not self-regulated by intestinal absorption as effectively in puppies as in adult dogs. Large-breed puppy formulas calibrate calcium to meet the growth minimum while staying within the large-breed ceiling. Regular puppy formulas and some all-life-stages formulas may exceed this ceiling and should carry a statement specifying they are not appropriate for large-breed puppy growth.",
    answerText: "AAFCO 2025 Chapter 6 includes a specific large-breed growth qualifier that sets a tighter calcium maximum for dogs expected to reach 70 pounds or more as adults. This restriction exists because large and giant breed puppies are more sensitive to dietary calcium excess during skeletal development than small-breed puppies — excess calcium in a rapidly growing large-breed puppy interferes with normal endochondral ossification, can contribute to developmental orthopedic diseases such as osteochondrosis dissecans and hypertrophic osteodystrophy, and is not self-regulated by intestinal absorption as effectively in puppies as in adult dogs. Large-breed puppy formulas calibrate calcium to meet the growth minimum while staying within the large-breed ceiling. Regular puppy formulas and some all-life-stages formulas may exceed this ceiling and should carry a statement specifying they are not appropriate for large-breed puppy growth.",
  },
]

const faqSchema = buildFAQSchema({
  questions: lifeStagesFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const combined = combineSchemas(articleSchema, breadcrumbSchema, itemListSchema, faqSchema)

export default function LifeStageHubPage() {
  // Group rows by species for the hub layout.
  const dog = LifeStages.filter((s) => s.species === 'Dog')
  const cat = LifeStages.filter((s) => s.species === 'Cat')

  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: 'Pet Food by Life Stage',
        subtitle:
          'AAFCO defines life-stage nutrient profiles for dogs and cats: growth-and-reproduction and adult maintenance. Senior is a marketing classification, not an AAFCO category. Large-breed growth is a distinct AAFCO qualifier within growth. Seven reference pages below cover each category.',
        category: 'Reference Hub',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Guides', href: '/guides' },
        { name: 'Life Stages', href: '/life-stage' },
      ]}
      relatedLinks={[
        { title: 'Life Stages Hub', href: '/life-stage' },
        { title: 'Puppy and Kitten Growth Diets', href: '/diets/puppy-and-kitten-growth-diets' },
        { title: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
        { title: 'Feeding Frequency and Schedules', href: '/feeding/feeding-frequency-and-schedules' },
      ]}
      schema={combined}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'About AAFCO Life Stages', href: '#about' },
              { label: 'Dog Life Stages', href: '#dog' },
              { label: 'Cat Life Stages', href: '#cat' },
              { label: 'Cornerstones', href: '#cornerstones' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Cornerstone References"
            links={[
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Methodology', href: '/guides/methodology' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="life-stage-hub"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:category-life-stage"
          fallbackKey="petfood-com:nutrition-hero"
          alt="Pet food bowls representing different life-stage formulations"
          eyebrow="Life-Stage Reference"
          priority
        />
        <h2 id="about">About AAFCO Life Stages</h2>
        <p>
          The Association of American Feed Control Officials (AAFCO) defines the regulatory
          framework for complete-and-balanced pet food labelling in the United States. AAFCO 2025
          Official Publication, Chapter 6 (Model Pet Food and Specialty Pet Food Regulations) sets
          out two formal nutrient profiles for each of dog and cat: growth-and-reproduction, and
          adult maintenance. The growth-and-reproduction profile carries an additional qualifier
          for large-breed dogs (70 lb or more as adults) with a tighter calcium ceiling.
        </p>
        <p>
          Senior, mature, aging, indoor, weight-management, and breed-specific labels are
          manufacturer categories that sit on top of one of the formal AAFCO profiles. The bag
          carries the underlying AAFCO statement (maintenance, growth, or all-life-stages) plus
          the manufacturer&apos;s additional positioning — the regulatory claim is the AAFCO statement,
          not the marketing front.
        </p>
        <p>
          The seven reference pages in this cluster cover each AAFCO-recognised life-stage category
          with separate entries for dogs and cats. Each page explains the nutrient profile
          differences from the adjacent life stage, the key ingredients and formulation
          considerations, the practical transition timing, and how to read the AAFCO adequacy
          statement for that stage. Key decision factors: verify the AAFCO statement lists the
          correct life stage; for large-breed puppies, confirm the large-breed growth qualifier is
          explicitly on the label; and use the dry-matter basis comparison when evaluating
          across formats.
        </p>

        <h2 id="dog">Dog Life Stages</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '12px',
            margin: '12px 0 28px',
          }}
        >
          {dog.map((s) => (
            <HubCard key={s.slug} slug={s.slug} name={s.name} category={s.category} formal={s.formalAafcoProfile} />
          ))}
        </div>

        <h2 id="cat">Cat Life Stages</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '12px',
            margin: '12px 0 28px',
          }}
        >
          {cat.map((s) => (
            <HubCard key={s.slug} slug={s.slug} name={s.name} category={s.category} formal={s.formalAafcoProfile} />
          ))}
        </div>

        <h2 id="cornerstones">Cornerstones</h2>
        <p>
          The life-stage pages link back into the PetFood.com cornerstone references for AAFCO
          substantiation and label-reading:
        </p>
        <ul>
          <li>
            <Link href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</Link>{' '}
            — formulated-to-meet versus animal-feeding-tests substantiation.
          </li>
          <li>
            <Link href="/guides/reading-pet-food-labels">Reading a Pet Food Label</Link> — the five
            label panels and what each one is silent about.
          </li>
          <li>
            <Link href="/guides/methodology">Methodology</Link> — the five PetFood.com scoring
            dimensions.
          </li>
          <li>
            <Link href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM</Link> — relevant
            context for adult dogs and large-breed-growth diet selection.
          </li>
          <li>
            <Link href="/tools/food-cost-calculator">Food Cost Calculator</Link> — compare $/day
            across SKUs at a given feeding rate to make life-stage diet choices on cost-comparable
            footing.
          </li>
        </ul>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={lifeStagesFAQItems} includeSchema={false} />

        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. The life-stage pages summarise the AAFCO regulatory
          framework and surface what label readers should look for; they are not a substitute for
          individualised veterinary nutrition advice. Diet selection for pets with diagnosed
          conditions should be discussed with the treating veterinarian.
        </p>
        <CrossPortfolioCard currentSite="petfood-com" contentType="guide" variant="footer" />
      </div>
    </ArticleLayout>
  )
}

function HubCard({
  slug,
  name,
  category,
  formal,
}: {
  slug: string
  name: string
  category: string
  formal: boolean
}) {
  return (
    <Link
      href={`/life-stage/${slug}`}
      style={{
        display: 'block',
        padding: '14px 16px',
        border: '1px solid var(--brand-border)',
        borderRadius: '8px',
        background: 'var(--brand-white)',
        color: 'var(--brand-text-dark)',
        textDecoration: 'none',
        lineHeight: 1.4,
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 700,
          marginBottom: '4px',
        }}
      >
        {name}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
        {category} &middot;{' '}
        {formal ? 'Formal AAFCO profile' : 'No formal AAFCO profile (marketing classification)'}
      </div>
    </Link>
  )
}
