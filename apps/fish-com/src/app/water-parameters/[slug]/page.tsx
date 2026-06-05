/**
 * Dynamic deep-dive route for /water-parameters/[slug] on Fish.com.
 *
 * One statically generated page per entry in src/data/water-parameters.ts.
 *
 * Each page renders:
 *   - Breadcrumb + H1 + at-a-glance row
 *   - What it measures / why it matters
 *   - Ideal ranges per setup
 *   - How to test (linked to test-kit comparison)
 *   - How to raise / how to lower (HowTo schema-eligible)
 *   - Species sensitivity / common mistakes
 *   - Related problems and related parameters
 *   - FAQ accordion
 *   - Sources
 *
 * Schema emitted: Article + FAQPage + BreadcrumbList + HowTo (raise / lower).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  FAQAccordion,
  CalloutBox,
  EmailCapture,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  PARAMETERS,
  getParameterBySlug,
  getRelatedParameters,
  type WaterParameter,
} from '../../../data/water-parameters'

// ─── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return PARAMETERS.map((p) => ({ slug: p.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerParamMetadata(p: WaterParameter): { title: string; description: string } {
  const title = truncate(`${p.name} in Aquariums — Target Range, Testing, Fixes | Fish.com`, 70)
  const fw = p.ranges.find((r) => r.setup === 'Community freshwater')?.target ?? ''
  const reef = p.ranges.find((r) => r.setup === 'Reef / marine')?.target ?? ''
  const desc = truncate(
    `${p.name} (${p.symbol}) for aquarium fish: freshwater target ${fw}, reef target ${reef}. ` +
      `What it measures, how to test, and how to correct out-of-range readings — sourced from cited references.`,
    160,
  )
  return { title, description: desc }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const param = getParameterBySlug(slug)

  if (!param) {
    return buildMetadata({
      siteId: 'fish-com',
      title: 'Water Parameter Not Found | Fish.com',
      description: 'The requested water-parameter page is not in the Fish.com reference catalog.',
      path: `/water-parameters/${slug}`,
    })
  }

  const { title, description } = buildPerParamMetadata(param)
  return buildMetadata({
    siteId: 'fish-com',
    title,
    description,
    path: `/water-parameters/${param.slug}`,
    type: 'article',
  })
}

// ─── FAQ builder ───────────────────────────────────────────────────────────

function buildFaqForParameter(p: WaterParameter): FAQItem[] {
  const fw = p.ranges.find((r) => r.setup === 'Community freshwater')?.target ?? ''
  const planted = p.ranges.find((r) => r.setup === 'Planted / soft-water freshwater')?.target ?? ''
  const reef = p.ranges.find((r) => r.setup === 'Reef / marine')?.target ?? ''

  const rangeAnswer =
    `Community freshwater: ${fw}. Planted / soft-water freshwater: ${planted}. ` +
    `Reef / marine: ${reef}. These are hobby-literature bands drawn from published references; ` +
    'individual species edge cases are listed in the species-sensitivity section above.'

  const testAnswer =
    p.howToTest.length > 0
      ? p.howToTest.map((t) => `${t.method}: ${t.note}`).join(' ')
      : 'See the testing section above for the methods used in hobby and aquaculture references.'

  const fixAnswer =
    p.howToLower.length > 0
      ? `If ${p.name.toLowerCase()} is too high, the published responses are: ${p.howToLower.join(' ')}`
      : 'See the correction section above.'

  const raiseAnswer =
    p.howToRaise.length > 0
      ? `If ${p.name.toLowerCase()} is too low, the published responses are: ${p.howToRaise.join(' ')}`
      : 'See the correction section above.'

  const mistakesAnswer =
    p.commonMistakes.length > 0
      ? p.commonMistakes.join(' ')
      : 'See the common-mistakes section above.'

  return [
    {
      question: `What is the ideal ${p.name.toLowerCase()} range for an aquarium?`,
      answer: rangeAnswer,
      answerText: rangeAnswer,
    },
    {
      question: `How do I test ${p.name.toLowerCase()} in my aquarium?`,
      answer: testAnswer,
      answerText: testAnswer,
    },
    {
      question: `How do I lower ${p.name.toLowerCase()} when it's too high?`,
      answer: fixAnswer,
      answerText: fixAnswer,
    },
    {
      question: `How do I raise ${p.name.toLowerCase()} when it's too low?`,
      answer: raiseAnswer,
      answerText: raiseAnswer,
    },
    {
      question: `What are the most common mistakes people make with ${p.name.toLowerCase()}?`,
      answer: mistakesAnswer,
      answerText: mistakesAnswer,
    },
  ]
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function ParameterPage({ params }: PageProps) {
  const { slug } = await params
  const param = getParameterBySlug(slug)
  if (!param) {
    notFound()
  }

  const url = `https://fish.com/water-parameters/${param.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerParamMetadata(param)
  const related = getRelatedParameters(param.slug, 3)
  const faqItems = buildFaqForParameter(param)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Water Parameters', href: '/water-parameters' },
    { name: param.name, href: `/water-parameters/${param.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'fish-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({ name: b.name, url: `https://fish.com${b.href}` })),
  })

  // HowTo schema: emit only if the parameter has meaningful "lower" steps.
  const lowerSteps = param.howToLower.filter((s) => !s.toLowerCase().includes('not applicable'))
  const howToLowerSchema =
    lowerSteps.length >= 2
      ? buildHowToSchema({
          name: `How to lower ${param.name.toLowerCase()} in an aquarium`,
          description: `Published hobbyist and aquaculture techniques for lowering ${param.name.toLowerCase()} (${param.symbol}) in a freshwater or marine aquarium.`,
          url: `${url}#fix-lower`,
          steps: lowerSteps.map((s, i) => ({
            name: `Step ${i + 1}`,
            text: s,
          })),
        })
      : null

  const raiseSteps = param.howToRaise.filter((s) => !s.toLowerCase().includes('not applicable'))
  const howToRaiseSchema =
    raiseSteps.length >= 2
      ? buildHowToSchema({
          name: `How to raise ${param.name.toLowerCase()} in an aquarium`,
          description: `Published hobbyist and aquaculture techniques for raising ${param.name.toLowerCase()} (${param.symbol}) in a freshwater or marine aquarium.`,
          url: `${url}#fix-raise`,
          steps: raiseSteps.map((s, i) => ({
            name: `Step ${i + 1}`,
            text: s,
          })),
        })
      : null

  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: `${param.name} in Aquariums`,
        subtitle: `${param.whatItMeasures}`,
        category: 'Water Parameters',
        categoryHref: '/water-parameters',
        authorName: 'Fish.com Editorial',
        authorAvatar: '🧪',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={articleSchema}
      relatedLinks={[{ title: 'Water Parameters Hub', href: '/water-parameters', category: 'Water Chemistry' }, { title: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained', category: 'Fish Health' }, { title: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide', category: 'Tank Setup' }, { title: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide', category: 'Tank Setup' }]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'At a Glance', href: '#at-a-glance' },
              { label: 'What It Measures', href: '#measures' },
              { label: 'Why It Matters', href: '#why' },
              { label: 'Ideal Ranges', href: '#ranges' },
              { label: 'What Affects It', href: '#affected-by' },
              { label: 'How to Test', href: '#test' },
              { label: 'How to Raise', href: '#fix-raise' },
              { label: 'How to Lower', href: '#fix-lower' },
              { label: 'Species Sensitivity', href: '#sensitivity' },
              { label: 'Common Mistakes', href: '#mistakes' },
              { label: 'Related Problems', href: '#problems' },
              ...(related.length > 0 ? [{ label: 'Related Parameters', href: '#related' }] : []),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion guides"
            links={[
              { label: 'Water Parameters Hub', href: '/water-parameters' },
              { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
              { label: 'Aquarium Water Chemistry', href: '/setup/water-chemistry-guide' },
              { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Fishkeeping references every Thursday."
            source={`water-parameters-${param.slug}`}
          />
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToLowerSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLowerSchema) }}
        />
      )}
      {howToRaiseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToRaiseSchema) }}
        />
      )}

      <div className="carloOS-article">
        <p>
          <em>By Fish.com Editorial — sourced from cited references. Published May 2026.</em>
        </p>

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
              <Row label="Parameter" value={param.name} />
              <Row label="Symbol / formula" value={param.symbol} />
              <Row label="Category" value={param.category} />
              <Row label="Unit" value={param.unit} />
              <Row label="Common problem" value={param.commonProblem} />
            </tbody>
          </table>
        </div>

        <h2 id="measures">What {param.name} measures</h2>
        <p>{param.whatItMeasures}</p>

        <h2 id="why">Why it matters</h2>
        <p>{param.whyItMatters}</p>

        <h2 id="ranges">Ideal ranges by setup</h2>
        <p>
          Target ranges below are hobby-literature bands drawn from the references at the bottom of
          this page. Individual species and breeding contexts can require values outside these
          bands — the species-sensitivity section below lists the common edge cases.
        </p>
        <div style={{ overflowX: 'auto', margin: '14px 0 24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13.5px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-surface)' }}>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderBottom: '1px solid var(--brand-border)',
                  }}
                >
                  Setup
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderBottom: '1px solid var(--brand-border)',
                  }}
                >
                  Target {param.name}
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderBottom: '1px solid var(--brand-border)',
                  }}
                >
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {param.ranges.map((r) => (
                <tr key={r.setup} style={{ borderBottom: '1px solid var(--brand-border)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 600 }}>{r.setup}</td>
                  <td style={{ padding: '10px 12px' }}>{r.target}</td>
                  <td style={{ padding: '10px 12px', color: 'var(--brand-text-mid)' }}>
                    {r.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="affected-by">What affects {param.name.toLowerCase()}</h2>
        <ul>
          {param.affectedBy.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <h2 id="test">How to test {param.name.toLowerCase()}</h2>
        <p>
          The following methods appear in hobby aquatic-vet and aquaculture-extension references.
          A test-kit comparison and method-by-method tradeoffs are covered in the companion{' '}
          <Link href="/setup/water-chemistry-guide">water-chemistry guide</Link>.
        </p>
        <ul>
          {param.howToTest.map((t) => (
            <li key={t.method}>
              <strong>{t.method}.</strong> {t.note}
            </li>
          ))}
        </ul>

        <h2 id="fix-raise">How to raise {param.name.toLowerCase()}</h2>
        {raiseSteps.length > 0 ? (
          <ol>
            {param.howToRaise.map((s) => (
              <li key={s} style={{ marginBottom: '6px' }}>
                {s}
              </li>
            ))}
          </ol>
        ) : (
          <p>{param.howToRaise[0] ?? 'See the references section below.'}</p>
        )}

        <h2 id="fix-lower">How to lower {param.name.toLowerCase()}</h2>
        {lowerSteps.length > 0 ? (
          <ol>
            {param.howToLower.map((s) => (
              <li key={s} style={{ marginBottom: '6px' }}>
                {s}
              </li>
            ))}
          </ol>
        ) : (
          <p>{param.howToLower[0] ?? 'See the references section below.'}</p>
        )}

        <CalloutBox variant="info" title="This is reference content, not a prescription">
          <p style={{ margin: 0 }}>
            Reagent doses, supplement schedules, and product choices vary by jurisdiction, water
            source, and livestock. The steps above are a hobby-literature framework. Confirm
            specific dosing against a current aquatic-vet reference or a published aquaculture
            protocol before treating a tank.
          </p>
        </CalloutBox>

        <h2 id="sensitivity">Species sensitivity</h2>
        <ul>
          {param.speciesSensitivity.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 id="mistakes">Common mistakes</h2>
        <ul>
          {param.commonMistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="problems">Related problems on Fish.com</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '10px',
            margin: '12px 0 24px',
          }}
        >
          {param.relatedProblems.map((rp) => (
            <Link
              key={rp.href}
              href={rp.href}
              style={{
                display: 'block',
                padding: '10px 14px',
                border: '1px solid var(--brand-border)',
                borderRadius: '6px',
                background: 'var(--brand-white)',
                color: 'var(--brand-text-dark)',
                textDecoration: 'none',
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              {rp.label}
            </Link>
          ))}
        </div>

        {related.length > 0 && (
          <>
            <h2 id="related">Related parameters</h2>
            <p>
              Other parameters in the same category that often move together with{' '}
              {param.name.toLowerCase()}:
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
                  href={`/water-parameters/${r.slug}`}
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
                    {r.category} · {r.unit}
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
          {param.citations.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
          This page is editorial reference content and is not a substitute for veterinary
          diagnosis or treatment. For valuable specimens, breeding stock, or active disease,
          consult an aquatic veterinarian.
        </p>

        <p style={{ marginTop: '32px' }}>
          <Link href="/water-parameters">← Back to the Water Parameters hub</Link>
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
