/**
 * Dynamic condition-specific diet template for PetFood.com.
 *
 * One static-rendered page per entry in src/data/condition-diets.ts at
 * /conditions/<slug>. These are veterinary-reference pages that funnel into
 * Rx-diet retail purchase intent (Chewy) and pet-insurance conversion
 * (Trupanion / Healthy Paws / Lemonade) for the long-tail cost of chronic
 * therapeutic-diet management.
 *
 * Trust posture (QC §1):
 *   - Byline reads "PetFood.com Editorial — sourced from cited references".
 *   - No fake DVM credential, no fake review process.
 *   - Mandatory vet-consult callout at the top of the page.
 *   - No per-kilogram nutrient dosing — qualitative ranges only.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
  CalloutBox,
  EmailCapture,
  ArticleByline,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  ConditionDiets,
  getConditionDietBySlug,
  getRelatedConditionDiets,
  type ConditionDiet,
} from '../../../data/condition-diets'

// ─── Static generation ─────────────────────────────────────────────────────

export function generateStaticParams() {
  return ConditionDiets.map((c) => ({ slug: c.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata helpers ──────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerConditionMetadata(c: ConditionDiet): {
  title: string
  description: string
} {
  const PER: Record<string, { title: string; description: string }> = {
    'food-allergies-and-intolerances': {
      title: 'Food Allergy Diets — Hydrolyzed & Novel Protein | PetFood.com',
      description:
        'When hydrolyzed-protein and novel-protein veterinary diets are indicated for suspected food allergy, what to look for, brand examples, and cost.',
    },
    'kidney-disease-renal-diets': {
      title: 'Kidney Disease Diets — CKD Renal Nutrition | PetFood.com',
      description:
        'How therapeutic renal diets restrict phosphorus, moderate protein, and reduce sodium for chronic kidney disease in dogs and cats. Rx vs OTC, cost, FAQs.',
    },
    'weight-management': {
      title: 'Weight Management Diets — Satiety & Calorie Control | PetFood.com',
      description:
        'Therapeutic weight-loss diets, satiety formulas, and when veterinary weight-management formulations are indicated for overweight dogs and cats.',
    },
    diabetes: {
      title: 'Diabetes Diets — Low-Carb & High-Fiber | PetFood.com',
      description:
        'How feline low-carbohydrate and canine complex-carbohydrate therapeutic diabetic diets support glycemic control alongside insulin therapy.',
    },
    'urinary-stones': {
      title: 'Urinary Stone Diets — Struvite & Calcium Oxalate | PetFood.com',
      description:
        'Therapeutic urinary diets for struvite dissolution, calcium oxalate prevention, and feline lower urinary tract disease (FLUTD) management.',
    },
    'gastrointestinal-sensitivity': {
      title: 'Gastrointestinal Diets — Pancreatitis, IBD, Colitis | PetFood.com',
      description:
        'Low-fat, high-fiber, hydrolyzed, and probiotic therapeutic GI diets for chronic enteropathy, pancreatitis, and gastrointestinal sensitivity.',
    },
  }
  const entry = PER[c.slug]
  if (entry) return entry
  return {
    title: truncate(`${c.conditionName} — Therapeutic Diets | PetFood.com`, 70),
    description: truncate(c.summary, 160),
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const condition = getConditionDietBySlug(slug)
  if (!condition) {
    return buildMetadata({
      siteId: 'petfood-com',
      title: 'Condition Not Found | PetFood.com',
      description: 'The requested condition-specific diet reference page is not in the PetFood.com catalog.',
      path: `/conditions/${slug}`,
    })
  }

  const { title, description } = buildPerConditionMetadata(condition)

  return buildMetadata({
    siteId: 'petfood-com',
    title,
    description,
    path: `/conditions/${condition.slug}`,
    type: 'article',
  })
}

// ─── FAQ builder ───────────────────────────────────────────────────────────

function buildFaqItems(c: ConditionDiet): FAQItem[] {
  return c.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
    answerText: f.answer,
  }))
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function ConditionDietPage({ params }: PageProps) {
  const { slug } = await params
  const condition = getConditionDietBySlug(slug)
  if (!condition) notFound()

  const url = `https://petfood.com/conditions/${condition.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerConditionMetadata(condition)
  const related = getRelatedConditionDiets(condition.slug, 3)
  const faqItems = buildFaqItems(condition)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Conditions', href: '/conditions' },
    { name: condition.conditionName, href: `/conditions/${condition.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'petfood-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({
      name: b.name,
      url: `https://petfood.com${b.href}`,
    })),
  })

  const medicalSchema = buildMedicalWebPageSchema({
    name: metaTitle,
    description: metaDescription,
    url,
    authorName: 'PetFood.com Editorial',
    lastReviewed: '2026-05-29',
    medicalAudience: 'Caregiver',
  })

  const combined = combineSchemas(
    articleSchema,
    medicalSchema,
    faqSchema,
    breadcrumbSchema,
  )

  // Cross-link target on the dog.com or vets.co specialty side. Both are
  // sibling carloOS sites; the deep-link is a content recommendation, not a
  // tracked affiliate redirect.
  const specialtyCrossLink = condition.slug === 'kidney-disease-renal-diets'
    ? { label: 'Vets.co — Chronic Kidney Disease in Dogs', href: 'https://vets.co/conditions/chronic-kidney-disease' }
    : condition.slug === 'diabetes'
      ? { label: 'Vets.co — Diabetes Mellitus in Dogs & Cats', href: 'https://vets.co/conditions/diabetes-mellitus' }
      : condition.slug === 'food-allergies-and-intolerances'
        ? { label: 'Dog.com — Food Allergies in Dogs', href: 'https://dog.com/health/food-allergies' }
        : condition.slug === 'weight-management'
          ? { label: 'Dog.com — Overweight Dog Care', href: 'https://dog.com/health/weight-management' }
          : condition.slug === 'urinary-stones'
            ? { label: 'Vets.co — Urolithiasis & FLUTD', href: 'https://vets.co/conditions/urolithiasis' }
            : { label: 'Vets.co — Chronic Enteropathy', href: 'https://vets.co/conditions/chronic-enteropathy' }

  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: `${condition.conditionName}: Therapeutic Diet Reference`,
        subtitle: condition.summary,
        category: 'Condition Diet Reference',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={combined}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What This Diet Does', href: '#what-it-does' },
              { label: 'Nutrient Targets', href: '#nutrient-targets' },
              { label: "When It's Needed", href: '#when' },
              { label: 'Rx vs OTC', href: '#rx-vs-otc' },
              { label: 'Brand Examples', href: '#brands' },
              { label: 'How to Transition', href: '#transition' },
              { label: 'What to Avoid', href: '#avoid' },
              { label: 'Typical Cost', href: '#cost' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Cornerstone References"
            links={[
              { label: 'All Life Stages', href: '/life-stage' },
              { label: 'AAFCO Completeness Explained', href: '/guides/aafco-completeness-explained' },
              { label: 'Reading a Pet Food Label', href: '/guides/reading-pet-food-labels' },
              { label: 'Methodology', href: '/guides/methodology' },
            ]}
          />
          <RelatedLinks
            title="Companion Specialty Page"
            links={[specialtyCrossLink]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Therapeutic-Diet Briefings"
            subtitle="Condition-specific diet summaries for subscribers."
            source={`conditions-${condition.slug}`}
            ctaText="Subscribe Free"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="PetFood.com Editorial — sourced from cited references"
          publishedAt="2026-05-29T00:00:00Z"
          updatedAt="2026-05-29T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <CalloutBox variant="warning" title="Therapeutic diets require veterinary guidance">
          <p style={{ margin: 0 }}>
            Therapeutic diets require veterinary guidance. Discuss your pet&rsquo;s specific
            situation with your DVM before switching to or away from these formulas.
          </p>
        </CalloutBox>

        <h2 id="what-it-does">What This Diet Does</h2>
        <ul>
          {condition.whatTheDietDoes.map((line, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {line}
            </li>
          ))}
        </ul>

        <h2 id="nutrient-targets">Nutrient Targets</h2>
        <p>
          Therapeutic-diet nutrient targets are described qualitatively below. PetFood.com does
          not publish per-kilogram-of-body-weight dosing figures — the appropriate inclusion for an
          individual patient is set by the treating veterinarian on the therapeutic product line
          they select. The sources for the qualitative ranges are AAFCO 2025 Chapter 6, NRC 2006,
          and the relevant ACVIM / WSAVA / AAHA consensus references cited at the bottom of the
          page.
        </p>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13.5px',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 24px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--brand-surface)' }}>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                    width: '24%',
                  }}
                >
                  Nutrient
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                    width: '28%',
                  }}
                >
                  Target Range
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Why
                </th>
              </tr>
            </thead>
            <tbody>
              {condition.nutrientTargets.map((n) => (
                <tr key={n.nutrient} style={{ borderTop: '1px solid var(--brand-border)' }}>
                  <td
                    style={{
                      padding: '10px 14px',
                      fontWeight: 700,
                      color: 'var(--brand-text-dark)',
                      verticalAlign: 'top',
                    }}
                  >
                    {n.nutrient}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      color: 'var(--brand-text-mid)',
                      verticalAlign: 'top',
                    }}
                  >
                    {n.range}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      color: 'var(--brand-text-mid)',
                      verticalAlign: 'top',
                    }}
                  >
                    {n.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="when">When It&rsquo;s Needed</h2>
        <ul>
          {condition.whenItsNeeded.map((line, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {line}
            </li>
          ))}
        </ul>

        <CalloutBox variant="info" title="Long-term cost of chronic conditions">
          <p style={{ margin: 0 }}>
            Conditions like CKD can cost $300-800/month long-term once diagnostics, fluids, and
            medications are added to the therapeutic diet cost.{' '}
            <a
              href="https://dog.com/insurance/pet-insurance-comparison"
              style={{ color: 'var(--brand-primary)', fontWeight: 600 }}
            >
              Pet insurance comparison &rarr;
            </a>
          </p>
        </CalloutBox>

        <h2 id="rx-vs-otc">Rx vs OTC</h2>
        <p>{condition.rxVsOtcDifference}</p>

        <h2 id="brands">Brand Examples</h2>
        <p>
          The product lines below are real veterinary therapeutic or retail formulations that the
          manufacturer publicly labels against this indication. The role tag describes the role each
          product line plays in the published veterinary literature — &ldquo;gold-standard&rdquo;
          refers to long-running clinical evidence, WSAVA-aligned manufacturer status, and
          AAFCO-substantiated labelling, not a PetFood.com ranking. The treating veterinarian
          selects the specific product line for an individual patient.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px',
            margin: '12px 0 24px',
          }}
        >
          {condition.brandExamplesByCondition.map((b) => (
            <div
              key={b.brand + b.productLine}
              style={{
                padding: '12px 14px',
                border: '1px solid var(--brand-border)',
                borderRadius: '6px',
                background: 'var(--brand-white)',
                color: 'var(--brand-text-dark)',
                lineHeight: 1.5,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14px',
                    fontWeight: 700,
                  }}
                >
                  {b.brand}
                </div>
                <div
                  style={{
                    fontSize: '11.5px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    color:
                      b.role === 'gold-standard'
                        ? 'var(--brand-primary)'
                        : 'var(--brand-text-light)',
                  }}
                >
                  {b.role === 'gold-standard' ? 'Gold standard' : 'Reasonable alternative'}
                </div>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginTop: '4px' }}>
                {b.productLine}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', margin: '0 0 24px' }}>
          Brand inclusion in this catalog is descriptive of label disclosure and published clinical
          use, not a ranking of formulation quality. Per-SKU AAFCO statements vary within a brand
          portfolio and must be verified on the specific product label.
        </p>

        <h2 id="transition">How to Transition</h2>
        <ul>
          {condition.how_to_transition.map((line, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {line}
            </li>
          ))}
        </ul>

        <h2 id="avoid">What to Avoid</h2>
        <ul>
          {condition.whatToAvoid.map((line, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {line}
            </li>
          ))}
        </ul>

        <h2 id="cost">Typical Cost</h2>
        <p>
          <strong>Per month: </strong>
          {condition.typicalCost.perMonth}
        </p>
        <p>
          <strong>Versus standard adult-maintenance food: </strong>
          {condition.typicalCost.vsRegularFood}
        </p>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)' }}>
          Cost figures are descriptive of the US therapeutic-diet retail market and are presented
          as ranges, not quotes. Local clinic and online-retailer pricing vary. Pet insurance with
          a prescription-diet endorsement can offset a meaningful share of the long-term cost for
          chronic conditions; see the comparison page linked above.
        </p>

        {related.length > 0 && (
          <>
            <h2 id="related">Related Conditions</h2>
            <p>
              Other entries in the condition-diet catalog that share regulatory or nutritional
              context:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '10px',
                margin: '12px 0 24px',
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/conditions/${r.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '6px',
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
                      marginBottom: '2px',
                    }}
                  >
                    {r.conditionName}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {r.summary.slice(0, 110)}
                    {r.summary.length > 110 ? '...' : ''}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} includeSchema={false} />

        <h2 id="sources">Sources</h2>
        <ul>
          {condition.citedSources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualised veterinary advice.
          Diet selection for pets with diagnosed conditions should be discussed with the treating
          veterinarian; complex cases may benefit from referral to a board-certified veterinary
          nutritionist (a diplomate of the American College of Veterinary Internal Medicine —
          Nutrition).
        </p>
      </div>
    </ArticleLayout>
  )
}
