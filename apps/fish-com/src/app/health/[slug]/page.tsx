/**
 * Dynamic disease-page template for Fish.com.
 *
 * One static-rendered page per entry in src/data/diseases.ts, at
 * /health/<slug>. Slugs in the data file are chosen to NOT collide
 * with existing hand-written disease guides under /health/.
 *
 * Each page renders:
 *   - Breadcrumb + H1 + TL;DR (urgency summary)
 *   - At-a-glance quick-reference table
 *   - Symptoms / Causes / Diagnostic Approach / Treatment Ladder / Prevention
 *   - Related diseases (internal cross-link)
 *   - FAQ accordion
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
  Diseases,
  getDiseaseBySlug,
  getRelatedDiseases,
  RESERVED_HEALTH_SLUGS,
  type Disease,
} from '../../../data/diseases'

// ─── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return Diseases.filter((d) => !RESERVED_HEALTH_SLUGS.has(d.slug)).map((d) => ({
    slug: d.slug,
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

function buildPerDiseaseMetadata(d: Disease): { title: string; description: string } {
  // Goal: ≤70 char title, ≤160 char description, distinct per-disease.
  const titleRaw = `${d.name} — Treatment, Symptoms & Prevention | Fish.com`
  const title = truncate(titleRaw, 70)

  const sci = d.scientificName ? `${d.scientificName}. ` : ''
  const lead = `${d.name}: ${d.category.toLowerCase()} ${d.waterType.toLowerCase()} fish disease.`
  const desc = `${lead} ${sci}Symptoms, diagnostic approach, treatment ladder, and prevention from aquatic-vet literature.`
  return { title, description: truncate(desc, 160) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const disease = getDiseaseBySlug(slug)

  if (!disease || RESERVED_HEALTH_SLUGS.has(slug)) {
    return buildMetadata({
      siteId: 'fish-com',
      title: 'Disease Not Found | Fish.com',
      description: 'The requested fish disease page is not in the Fish.com catalog.',
      path: `/health/${slug}`,
    })
  }

  const { title, description } = buildPerDiseaseMetadata(disease)
  return buildMetadata({
    siteId: 'fish-com',
    title,
    description,
    path: `/health/${disease.slug}`,
    type: 'article',
  })
}

// ─── Display helpers ───────────────────────────────────────────────────────

function urgencyLabel(m: Disease['mortality']): { label: string; color: string } {
  switch (m) {
    case 'Low':
      return { label: 'Low urgency', color: '#2d7a3e' }
    case 'Moderate':
      return { label: 'Moderate urgency', color: '#a26a14' }
    case 'High':
      return { label: 'High urgency — act within hours', color: '#a23b14' }
    case 'Severe':
      return { label: 'Severe urgency — act immediately', color: '#7a1414' }
  }
}

function buildTldr(d: Disease): string {
  const contagion = d.contagious
    ? 'Contagious — quarantine affected fish and treat the whole system.'
    : 'Not directly contagious between fish but often a marker of tankwide stress.'
  const cardinal = d.symptoms[0] ?? 'See symptoms list.'
  const water = d.waterType === 'Both' ? 'freshwater and saltwater' : d.waterType.toLowerCase()
  return `${d.name} is a ${d.category.toLowerCase()} disease affecting ${water} fish. ${contagion} Cardinal sign: ${cardinal.toLowerCase()}`
}

function buildFaqForDisease(d: Disease): FAQItem[] {
  const sci = d.scientificName ? ` (${d.scientificName})` : ''
  const contagionAnswer = d.contagious
    ? `Yes. ${d.name}${sci} is transmissible between fish in the same system. Isolate affected fish to a quarantine tank where possible, treat the display tank to clear environmental stages, and disinfect any equipment moved between tanks.`
    : `Not directly between fish. ${d.name}${sci} is most often a marker of an underlying stressor — water quality, diet, or husbandry. Tankmates may show signs because they share the same environment, not because the disease itself is contagious.`

  const treatmentAnswer =
    d.treatmentTiers.length > 0
      ? `Treatment is tiered. ${d.treatmentTiers[0]} If response is incomplete: ${d.treatmentTiers
          .slice(1)
          .join(' ')} Always confirm dose and duration against a current aquatic-vet reference or your veterinarian.`
      : 'Refer to the full treatment-ladder section on this page.'

  const preventionAnswer = d.preventionNote

  const diagnosticAnswer =
    d.diagnosticApproach.length > 0
      ? d.diagnosticApproach.join(' ') +
        ' Definitive diagnosis for valuable specimens generally requires an aquatic veterinarian or aquaculture diagnostic laboratory.'
      : 'Refer to the full diagnostic approach section on this page.'

  const veterinaryAnswer = `Consult an aquatic veterinarian when: signs progress despite first-tier intervention; a valuable or breeding fish is affected; mortality affects multiple tankmates; or the disease is notifiable in your jurisdiction (KHV, VHS, and certain other viruses are reportable in many regions per WOAH guidance).`

  return [
    {
      question: `Is ${d.name} contagious to other fish?`,
      answer: contagionAnswer,
      answerText: contagionAnswer,
    },
    {
      question: `How is ${d.name} treated in an aquarium?`,
      answer: treatmentAnswer,
      answerText: treatmentAnswer,
    },
    {
      question: `How can I prevent ${d.name} in my tank?`,
      answer: preventionAnswer,
      answerText: preventionAnswer,
    },
    {
      question: `How is ${d.name} diagnosed?`,
      answer: diagnosticAnswer,
      answerText: diagnosticAnswer,
    },
    {
      question: 'When should I call a veterinarian?',
      answer: veterinaryAnswer,
      answerText: veterinaryAnswer,
    },
  ]
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function DiseasePage({ params }: PageProps) {
  const { slug } = await params

  if (RESERVED_HEALTH_SLUGS.has(slug)) {
    notFound()
  }

  const disease = getDiseaseBySlug(slug)
  if (!disease) {
    notFound()
  }

  const url = `https://fish.com/health/${disease.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerDiseaseMetadata(disease)
  const urgency = urgencyLabel(disease.mortality)
  const related = getRelatedDiseases(disease.slug, 3)
  const faqItems = buildFaqForDisease(disease)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Aquarium Health', href: '/health' },
    { name: disease.name, href: `/health/${disease.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'fish-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })

  const medicalSchema = buildMedicalWebPageSchema({
    name: `${disease.name} in Aquarium Fish`,
    description: metaDescription,
    url,
    authorName: 'Fish.com Editorial',
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
      url: `https://fish.com${b.href}`,
    })),
  })

  // ArticleLayout injects one schema via SchemaScript; emit the FAQ +
  // Breadcrumb + MedicalWebPage schemas inline below as additional <script>
  // tags (same pattern as the petfoods ingredient template).

  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: disease.name,
        subtitle: `${disease.category} disease in ${disease.waterType.toLowerCase()} aquarium fish — symptoms, treatment, and prevention.`,
        category: 'Fish Health',
        authorName: 'Fish.com Editorial',
        authorAvatar: '🐠',
        publishedAt: 'May 2026',
        readTime: '7 min',
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
              { label: 'Diagnostic Approach', href: '#diagnosis' },
              { label: 'Treatment Ladder', href: '#treatment' },
              { label: 'Prevention', href: '#prevention' },
              ...(related.length > 0 ? [{ label: 'Related Diseases', href: '#related' }] : []),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion Guides"
            links={[
              { label: 'Fish Disease Guide (overview)', href: '/health/fish-disease-guide' },
              { label: 'Quarantine Tank Setup', href: '/setup/quarantine-tank-guide' },
              { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
              { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Fishkeeping tips every Thursday."
            source={`health-${disease.slug}`}
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
          <strong style={{ color: urgency.color }}>TL;DR — {urgency.label}.</strong> {buildTldr(disease)}
        </p>

        {disease.mortality === 'Severe' && (
          <CalloutBox variant="warning" title="High-mortality disease — act now">
            <p style={{ margin: 0 }}>
              {disease.name} can kill within hours to days once clinical signs are visible. Begin
              first-tier intervention immediately and contact an aquatic veterinarian if you have
              access to one. The treatment ladder below assumes hobbyist-level resources; valuable
              specimens warrant earlier veterinary escalation.
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
              <Row label="Common name" value={disease.name} />
              {disease.scientificName && (
                <Row label="Scientific / causative agent" value={disease.scientificName} />
              )}
              <Row label="Category" value={disease.category} />
              <Row label="Water type" value={disease.waterType} />
              <Row label="Contagious between fish" value={disease.contagious ? 'Yes' : 'No (or indirect)'} />
              <Row label="Typical mortality" value={disease.mortality} />
            </tbody>
          </table>
        </div>

        <h2 id="symptoms">Symptoms</h2>
        <p>
          {disease.name} typically presents with the following clinical signs. The order roughly
          tracks how early the sign appears; one or two signs alone is enough to begin diagnostic
          work, full presentation is not required.
        </p>
        <ul>
          {disease.symptoms.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 id="causes">Causes</h2>
        <p>
          {disease.name} is associated with the following etiology and trigger conditions. In most
          home-aquarium presentations the disease is opportunistic on an underlying environmental
          or husbandry stressor — addressing the trigger is part of the treatment, not separate
          from it.
        </p>
        <ul>
          {disease.causes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <h2 id="diagnosis">Diagnostic Approach</h2>
        <p>
          The following workup applies to a hobbyist or aquaculture setting. Definitive diagnosis
          for valuable specimens, regulated diseases, or refractory cases generally requires an
          aquatic veterinarian or accredited fish-health diagnostic laboratory.
        </p>
        <ul>
          {disease.diagnosticApproach.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <h2 id="treatment">Treatment Ladder</h2>
        <p>
          Treatment for {disease.name.toLowerCase()} is presented as escalating tiers rather than a
          single protocol. Begin at Tier 1 — environmental and supportive measures often resolve
          early presentations and are the foundation of every higher tier. Move to chemotherapeutic
          treatment only when warranted; antimicrobial use without indication promotes resistance
          and harms the biofilter.
        </p>
        <ol>
          {disease.treatmentTiers.map((t) => (
            <li key={t} style={{ marginBottom: '6px' }}>
              {t}
            </li>
          ))}
        </ol>
        <CalloutBox variant="info" title="This is reference content, not a prescription">
          <p style={{ margin: 0 }}>
            Drug names, doses, and treatment durations vary by jurisdiction, fish species, and
            water-chemistry context. The tiers above are a hobbyist-literature framework. Confirm
            current dose, contraindications, and legality with your veterinarian or a referenced
            aquaculture extension protocol (UF/IFAS, Yanong et al; WAVMA reference) before
            treating.
          </p>
        </CalloutBox>

        <h2 id="prevention">Prevention</h2>
        <p>{disease.preventionNote}</p>

        {related.length > 0 && (
          <>
            <h2 id="related">Related Diseases</h2>
            <p>
              Other conditions in the Fish.com health catalog that share clinical presentation,
              etiology, or treatment context with {disease.name.toLowerCase()}:
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
                    {r.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {r.category} · {r.waterType} · {r.mortality} mortality
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} />

        <h2 id="sources">Sources</h2>
        <ul>
          {disease.citations.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
          This page is editorial reference content and is not a substitute for veterinary diagnosis
          or treatment. For valuable specimens, regulated diseases, or refractory cases, consult an
          aquatic veterinarian.
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
