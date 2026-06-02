/**
 * Conditions hub page for PetFood.com.
 *
 * Lists the six condition-specific therapeutic-diet reference pages.
 * Each card carries a severity icon (chronic / urgent / manage-with-vet)
 * to set owner expectation before they click in.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  CalloutBox,
  EmailCapture,
} from '@carloOS/ui'
import { ConditionDiets } from '../../data/condition-diets'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Condition-Specific Therapeutic Diets | PetFood.com',
  description:
    'Reference hub for six therapeutic diets: food allergies, kidney disease, weight management, diabetes, urinary stones, and GI sensitivity.',
  path: '/conditions',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Condition-Specific Therapeutic Diets — Reference Hub',
  description:
    'Independent hub page indexing six condition-specific therapeutic-diet references against AAFCO 2025 Chapter 6, NRC 2006, WSAVA, ACVIM, AAHA, and FDA-CVM.',
  url: 'https://petfood.com/conditions',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Conditions', url: 'https://petfood.com/conditions' },
  ],
})

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Condition-Specific Pet Diets',
  numberOfItems: ConditionDiets.length,
  itemListElement: ConditionDiets.map((c, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: c.name,
    url: `https://petfood.com/conditions/${c.slug}`,
  })),
}

const combined = combineSchemas(articleSchema, breadcrumbSchema, itemListSchema)

// ─── Severity icon helper ───────────────────────────────────────────────────
// Inline SVGs — no emoji, matches the rest of the petfood-com style.

function SeverityIcon({
  severity,
}: {
  severity: 'chronic' | 'urgent' | 'manage-with-vet'
}) {
  if (severity === 'urgent') {
    // Outline triangle alert.
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C8501E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    )
  }
  if (severity === 'chronic') {
    // Heart-pulse / chronic monitor outline.
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B6BB6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
  // 'manage-with-vet' — stethoscope-ish outline circle/dot.
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2F8F6F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  )
}

function severityLabel(s: 'chronic' | 'urgent' | 'manage-with-vet'): string {
  if (s === 'urgent') return 'Urgent — see a vet promptly'
  if (s === 'chronic') return 'Chronic — long-term management'
  return 'Manage with veterinary input'
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function ConditionsHubPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: 'Condition-Specific Therapeutic Diets',
        subtitle:
          'Six veterinary-reference pages on therapeutic and prescription pet-food formulations: food allergies, kidney disease, weight management, diabetes, urinary stones, and gastrointestinal sensitivity. Each page summarises what the diet does, when it is indicated, brand examples, and the Rx-versus-OTC distinction.',
        category: 'Reference Hub',
        publishedAt: 'May 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Conditions', href: '/conditions' },
      ]}
      schema={combined}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'About Therapeutic Diets', href: '#about' },
              { label: 'Six Conditions', href: '#conditions' },
              { label: 'Cornerstones', href: '#cornerstones' },
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
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="conditions-hub"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <CalloutBox variant="warning" title="Therapeutic diets require veterinary guidance">
          <p style={{ margin: 0 }}>
            Therapeutic diets require veterinary guidance. Discuss your pet&rsquo;s specific
            situation with your DVM before switching to or away from these formulas. The pages
            below are reference material, not a substitute for individualised veterinary advice.
          </p>
        </CalloutBox>

        <h2 id="about">About Therapeutic Diets</h2>
        <p>
          Veterinary therapeutic diets — sometimes called prescription diets — are formulated to
          specifications that intentionally sit outside the AAFCO 2025 Chapter 6 nutrient profile
          for one or more nutrients (most commonly phosphorus for renal disease, fat for
          pancreatitis, magnesium for struvite, or protein structure for hydrolyzed diets). That
          intentional departure is what makes them effective for the diagnosed condition; it is
          also what makes them inappropriate as a sole diet for a pet without that condition.
        </p>
        <p>
          The six pages indexed below summarise the diagnostic context, what the diet does, the
          qualitative nutrient targets, the brand examples in the published veterinary literature,
          and the practical owner-side transition guidance. They reference AAFCO 2025 Chapter 6,
          NRC 2006 Nutrient Requirements of Dogs and Cats, the WSAVA Global Nutrition Committee
          guidance, the relevant ACVIM Internal Medicine Consensus Statements, AAHA nutrition
          guidelines, and FDA Center for Veterinary Medicine references throughout.
        </p>

        <h2 id="conditions">Six Conditions</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '14px',
            margin: '12px 0 28px',
          }}
        >
          {ConditionDiets.map((c) => (
            <Link
              key={c.slug}
              href={`/conditions/${c.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '14px 16px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                background: 'var(--brand-white)',
                color: 'var(--brand-text-dark)',
                textDecoration: 'none',
                lineHeight: 1.45,
                gap: '8px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <SeverityIcon severity={c.severity} />
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '14.5px',
                    fontWeight: 700,
                  }}
                >
                  {c.conditionName}
                </div>
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--brand-text-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontWeight: 700,
                }}
              >
                {severityLabel(c.severity)}
              </div>
              <div
                style={{
                  fontSize: '13.5px',
                  color: 'var(--brand-text-mid)',
                }}
              >
                {c.summary}
              </div>
            </Link>
          ))}
        </div>

        <h2 id="cornerstones">Cornerstones</h2>
        <p>
          The condition pages cross-link back into the PetFood.com cornerstone references for AAFCO
          substantiation, label reading, and life-stage profiles:
        </p>
        <ul>
          <li>
            <Link href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</Link> —
            the substantiation tier (formulated-to-meet vs animal-feeding-tests) that sits underneath
            every therapeutic diet.
          </li>
          <li>
            <Link href="/guides/reading-pet-food-labels">Reading a Pet Food Label</Link> — the five
            label panels and what each one is silent about, including for veterinary therapeutic
            formulations.
          </li>
          <li>
            <Link href="/life-stage">Life Stages</Link> — the AAFCO life-stage baseline that the
            therapeutic-diet adjustments sit on top of.
          </li>
          <li>
            <Link href="/guides/methodology">Methodology</Link> — the PetFood.com transparency
            rubric.
          </li>
        </ul>

        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualised veterinary advice.
          Therapeutic diets are not over-the-counter substitutes; the treating veterinarian sets the
          diet for a pet with a diagnosed condition. Complex cases may benefit from referral to a
          board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
