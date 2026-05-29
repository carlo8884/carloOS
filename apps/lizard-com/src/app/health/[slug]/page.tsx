/**
 * Dynamic condition-page template for Lizard.com.
 *
 * One static-rendered page per entry in src/data/conditions.ts, at
 * /health/<slug>. Slugs in the data file are chosen to NOT collide
 * with existing hand-written health guides under /health/.
 *
 * Each page renders:
 *   - Breadcrumb + H1 + urgency TL;DR
 *   - At-a-glance quick-reference table (species, mortality, contagious)
 *   - Symptoms (early + late)
 *   - Causes
 *   - Diagnostic ladder
 *   - Treatment ladder (husbandry -> medical -> surgical)
 *   - Prevention via husbandry
 *   - When to see an ARAV vet
 *   - Related conditions + FAQ
 *   - JSON-LD: Article + MedicalWebPage + FAQPage + BreadcrumbList
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
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
  CalloutBox,
  EmailCapture,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  Conditions,
  getConditionBySlug,
  getRelatedConditions,
  RESERVED_HEALTH_SLUGS,
  type Condition,
} from '../../../data/conditions'

// ─── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return Conditions.filter((c) => !RESERVED_HEALTH_SLUGS.has(c.slug)).map((c) => ({
    slug: c.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerConditionMetadata(c: Condition): { title: string; description: string } {
  const short = c.shortName ?? c.name
  const titleRaw = `${short} in Reptiles — Symptoms, Diagnosis, Treatment | Lizard.com`
  const title = truncate(titleRaw, 70)

  const urgencyDesc =
    c.urgency === 'Emergency'
      ? 'Emergency reptile condition'
      : c.urgency === 'Urgent'
      ? 'Urgent reptile condition'
      : c.urgency === 'Sub-acute'
      ? 'Sub-acute reptile condition'
      : 'Reference reptile condition'

  const desc = `${urgencyDesc}: ${short.toLowerCase()}. Symptoms, diagnostic ladder, treatment tiers, husbandry prevention, and when to see an ARAV-member reptile veterinarian.`
  return { title, description: truncate(desc, 160) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const condition = getConditionBySlug(slug)

  if (!condition || RESERVED_HEALTH_SLUGS.has(slug)) {
    return buildMetadata({
      siteId: 'lizard-com',
      title: 'Condition Not Found | Lizard.com',
      description: 'The requested reptile health condition page is not in the Lizard.com catalog.',
      path: `/health/${slug}`,
    })
  }

  const { title, description } = buildPerConditionMetadata(condition)
  return buildMetadata({
    siteId: 'lizard-com',
    title,
    description,
    path: `/health/${condition.slug}`,
    type: 'article',
  })
}

// ─── Display helpers ───────────────────────────────────────────────────────

function urgencyBadge(u: Condition['urgency']): { label: string; color: string } {
  switch (u) {
    case 'Routine':
      return { label: 'Routine — track and address at the next husbandry review', color: '#2d7a3e' }
    case 'Sub-acute':
      return { label: 'Sub-acute — schedule veterinary review within days to weeks', color: '#a26a14' }
    case 'Urgent':
      return { label: 'Urgent — schedule veterinary care within 24-48 hours', color: '#a23b14' }
    case 'Emergency':
      return { label: 'Emergency — contact a reptile veterinarian today', color: '#7a1414' }
  }
}

function buildTldr(c: Condition): string {
  const short = c.shortName ?? c.name
  const cardinal = c.earlySymptoms[0] ?? 'See the symptoms list below.'
  const speciesLead =
    c.affectedSpecies.length > 0
      ? `Most commonly seen in ${c.affectedSpecies[0].toLowerCase()}`
      : 'Seen across reptile species'
  const contagion = c.contagious
    ? 'Contagious between conspecifics — isolate affected animals and disinfect shared equipment.'
    : 'Not directly contagious between animals but often a marker of an underlying husbandry or systemic problem.'
  return `${short} is a ${c.category.toLowerCase()} reptile condition. ${speciesLead}. ${contagion} Cardinal early sign: ${cardinal.toLowerCase()}`
}

function buildFaqForCondition(c: Condition): FAQItem[] {
  const short = c.shortName ?? c.name

  const contagionAnswer = c.contagious
    ? `Yes. ${short} is transmissible between susceptible animals in the same room or collection. Isolate affected animals, use dedicated tools, and disinfect any equipment moved between enclosures. See the prevention section for full quarantine guidance.`
    : `Not directly between animals. ${short} is most often a marker of an underlying husbandry, nutritional, or systemic problem. Cagemates may show signs because they share the same environment, not because the condition itself is contagious.`

  const treatmentAnswer =
    c.treatmentTiers.length > 0
      ? `Treatment is tiered. ${c.treatmentTiers[0]} If response is incomplete: ${c.treatmentTiers
          .slice(1)
          .join(' ')}`
      : 'See the full treatment-ladder section on this page.'

  const preventionAnswer = c.preventionNote

  const diagnosticAnswer =
    c.diagnosticLadder.length > 0
      ? c.diagnosticLadder.join(' ') +
        ' Definitive diagnosis generally requires a reptile or exotic-animal veterinarian.'
      : 'See the full diagnostic ladder section on this page.'

  const baseFaq: FAQItem[] = [
    {
      question: `Is ${short.toLowerCase()} contagious to other reptiles?`,
      answer: contagionAnswer,
      answerText: contagionAnswer,
    },
    {
      question: `How is ${short.toLowerCase()} treated in a captive reptile?`,
      answer: treatmentAnswer,
      answerText: treatmentAnswer,
    },
    {
      question: `How can ${short.toLowerCase()} be prevented?`,
      answer: preventionAnswer,
      answerText: preventionAnswer,
    },
    {
      question: `How is ${short.toLowerCase()} diagnosed?`,
      answer: diagnosticAnswer,
      answerText: diagnosticAnswer,
    },
    {
      question: 'When should I see an ARAV-member reptile veterinarian?',
      answer: c.whenToVet,
      answerText: c.whenToVet,
    },
  ]

  if (c.faq && c.faq.length > 0) {
    for (const item of c.faq) {
      baseFaq.push({
        question: item.question,
        answer: item.answer,
        answerText: item.answer,
      })
    }
  }

  return baseFaq
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params

  if (RESERVED_HEALTH_SLUGS.has(slug)) {
    notFound()
  }

  const condition = getConditionBySlug(slug)
  if (!condition) {
    notFound()
  }

  const url = `https://lizard.com/health/${condition.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerConditionMetadata(condition)
  const urgency = urgencyBadge(condition.urgency)
  const related = getRelatedConditions(condition.slug, 3)
  const faqItems = buildFaqForCondition(condition)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Reptile Health', href: '/health' },
    { name: condition.shortName ?? condition.name, href: `/health/${condition.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'lizard-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Lizard.com Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })

  const medicalSchema = buildMedicalWebPageSchema({
    name: condition.name,
    description: metaDescription,
    url,
    authorName: 'Lizard.com Editorial',
    lastReviewed: '2026-05-28',
    medicalAudience: 'Caregiver',
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
      url: `https://lizard.com${b.href}`,
    })),
  })

  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: condition.shortName ?? condition.name,
        subtitle: `${condition.category} reptile condition — symptoms, diagnostic ladder, treatment tiers, and prevention via husbandry.`,
        category: 'Reptile Health',
        authorName: 'Lizard.com Editorial',
        authorAvatar: '🦎',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={articleSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'At a Glance', href: '#at-a-glance' },
              { label: 'Symptoms', href: '#symptoms' },
              { label: 'Causes', href: '#causes' },
              { label: 'Diagnostic Ladder', href: '#diagnosis' },
              { label: 'Treatment Tiers', href: '#treatment' },
              { label: 'Prevention via Husbandry', href: '#prevention' },
              { label: 'When to See an ARAV Vet', href: '#vet' },
              ...(related.length > 0 ? [{ label: 'Related Conditions', href: '#related' }] : []),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion Guides"
            links={[
              { label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' },
              { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' },
              { label: 'Salmonella Prevention', href: '/health/salmonella-prevention' },
              { label: 'Lighting & UVB Guide', href: '/setup/uvb-lighting-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Free Care Sheets"
            subtitle="Species guides for subscribers."
            source={`health-${condition.slug}`}
            ctaText="Download Free"
          />
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="carloOS-article">
        <p id="tldr">
          <strong style={{ color: urgency.color }}>TL;DR — {urgency.label}.</strong>{' '}
          {buildTldr(condition)}
        </p>

        {(condition.urgency === 'Emergency' || condition.mortality === 'Severe') && (
          <CalloutBox variant="warning" title="High-mortality reptile condition — act now">
            <p style={{ margin: 0 }}>
              {condition.shortName ?? condition.name} can decompensate quickly once clinical signs
              are visible. Optimize husbandry while you arrange transport, and contact a reptile or
              ARAV-member exotic-animal veterinarian today. The tiers below assume keeper-level
              first aid; severe or rapidly progressive cases warrant immediate veterinary
              escalation.
            </p>
          </CalloutBox>
        )}

        <h2 id="at-a-glance">At a Glance</h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13.5px',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 28px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <Row label="Condition" value={condition.name} />
              <Row label="Category" value={condition.category} />
              <Row label="Urgency" value={condition.urgency} />
              <Row label="Typical mortality if untreated" value={condition.mortality} />
              <Row
                label="Contagious between reptiles"
                value={condition.contagious ? 'Yes' : 'No (or indirect)'}
              />
              <Row
                label="Most commonly affected species"
                value={condition.affectedSpecies.slice(0, 3).join('; ')}
              />
            </tbody>
          </table>
        </div>

        <h3>Affected species</h3>
        <ul>
          {condition.affectedSpecies.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 id="symptoms">Symptoms</h2>
        <p>
          Clinical presentation of {(condition.shortName ?? condition.name).toLowerCase()} is
          described below in two stages — early signs that often catch the condition in time to
          correct, and late signs that indicate decompensation. One or two early signs are enough
          to begin a workup; full presentation is not required.
        </p>

        <h3>Early signs</h3>
        <ul>
          {condition.earlySymptoms.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h3>Late signs (decompensation)</h3>
        <ul>
          {condition.lateSymptoms.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 id="causes">Causes</h2>
        <p>
          {condition.shortName ?? condition.name} is associated with the following etiology and
          trigger conditions. In most captive presentations the underlying cause is a husbandry or
          nutritional issue — addressing that trigger is part of the treatment, not separate from
          it.
        </p>
        <ul>
          {condition.causes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <h2 id="diagnosis">Diagnostic Ladder</h2>
        <p>
          The following workup applies in a typical reptile-veterinary setting. Definitive
          diagnosis generally requires a reptile-experienced or board-certified exotic-animal
          veterinarian.
        </p>
        <ol>
          {condition.diagnosticLadder.map((d) => (
            <li key={d} style={{ marginBottom: '6px' }}>
              {d}
            </li>
          ))}
        </ol>

        <h2 id="treatment">Treatment Tiers</h2>
        <p>
          Treatment for {(condition.shortName ?? condition.name).toLowerCase()} is presented as
          escalating tiers rather than a single protocol. Begin at Tier 1 — husbandry correction
          and supportive care often resolve early presentations and are the foundation of every
          higher tier. Medical and surgical tiers belong to a reptile veterinarian.
        </p>
        <ol>
          {condition.treatmentTiers.map((t) => (
            <li key={t} style={{ marginBottom: '6px' }}>
              {t}
            </li>
          ))}
        </ol>
        <CalloutBox variant="info" title="This is reference content, not a prescription">
          <p style={{ margin: 0 }}>
            Drug names, doses, and treatment durations vary by species, individual, and husbandry
            context. The tiers above are a keeper-literature framework drawn from
            Mader&rsquo;s Reptile and Amphibian Medicine and Surgery, the Journal of
            Herpetological Medicine and Surgery, and ARAV continuing-education materials.
            Confirm any drug or dose with a reptile veterinarian before treating — wrong drug
            at the wrong dose can be fatal in reptiles (notable example: ivermectin in
            chelonians).
          </p>
        </CalloutBox>

        <h2 id="prevention">Prevention via Husbandry</h2>
        <p>{condition.preventionNote}</p>

        <h2 id="vet">When to See an ARAV-Member Reptile Veterinarian</h2>
        <p>{condition.whenToVet}</p>
        <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)' }}>
          The Association of Reptilian and Amphibian Veterinarians (ARAV) maintains a member
          directory of veterinarians with reptile-specific training. Board certification in
          reptile and amphibian practice is available through the American Board of Veterinary
          Practitioners (ABVP) and the European College of Zoological Medicine (ECZM); a
          board-certified or experienced ARAV-member clinician is the preferred referral for
          significant reptile cases.
        </p>

        {related.length > 0 && (
          <>
            <h2 id="related">Related Conditions</h2>
            <p>
              Other conditions in the Lizard.com health catalog that share clinical presentation,
              etiology, or husbandry context with{' '}
              {(condition.shortName ?? condition.name).toLowerCase()}:
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '10px',
                margin: '12px 0 24px',
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/health/${r.slug}`}
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
                    {r.shortName ?? r.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {r.category} · {r.urgency} · {r.mortality} mortality
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
          {condition.citations.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
          This page is editorial reference content compiled from the herpetological-medicine
          literature and is not a substitute for veterinary diagnosis or treatment. For any
          significant reptile illness, consult an ARAV-member or board-certified exotic-animal
          veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr style={{ borderTop: '1px solid var(--brand-border)' }}>
      <th
        scope="row"
        style={{
          textAlign: 'left',
          padding: '10px 14px',
          background: 'var(--brand-surface)',
          fontWeight: 700,
          width: '34%',
          color: 'var(--brand-text-dark)',
          verticalAlign: 'top',
        }}
      >
        {label}
      </th>
      <td style={{ padding: '10px 14px', color: 'var(--brand-text-mid)' }}>{value}</td>
    </tr>
  )
}
