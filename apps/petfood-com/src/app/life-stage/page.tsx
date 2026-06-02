import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'
import { LifeStages } from '../../data/life-stages'

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
        { name: 'Life Stages', href: '/life-stage' },
      ]}
      schema={articleSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'About AAFCO Life Stages', href: '#about' },
              { label: 'Dog Life Stages', href: '#dog' },
              { label: 'Cat Life Stages', href: '#cat' },
              { label: 'Cornerstones', href: '#cornerstones' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <div className="carloOS-article">
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

        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. The life-stage pages summarise the AAFCO regulatory
          framework and surface what label readers should look for; they are not a substitute for
          individualised veterinary nutrition advice. Diet selection for pets with diagnosed
          conditions should be discussed with the treating veterinarian.
        </p>
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
        {category} ·{' '}
        {formal ? 'Formal AAFCO profile' : 'No formal AAFCO profile (marketing classification)'}
      </div>
    </Link>
  )
}
