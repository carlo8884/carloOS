/**
 * Dynamic species-class vivarium-build template for Lizard.com.
 *
 * One static-rendered page per entry in src/data/vivarium-builds.ts at
 * /builds/<slug>. Step-by-step setup guides with category-level equipment
 * recommendations and Amazon affiliate routing via /go/amazon/<ASIN>.
 *
 * Trust posture (QC §1):
 *   - No fake DVM byline. Byline reads "Lizard.com Editorial — sourced from
 *     cited references".
 *   - No in-house testing or measurement claims.
 *   - Equipment is described by category with example products only; no
 *     "best" promises and no guaranteed outcomes.
 *   - No specific drug dosing.
 *
 * JSON-LD: Article + HowTo + FAQPage + BreadcrumbList combined via
 * combineSchemas.
 */

import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
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
  VivariumBuilds,
  getVivariumBuildBySlug,
  getRelatedVivariumBuilds,
  difficultyLabel,
  speciesSlugFor,
  type VivariumBuild,
} from '../../../data/vivarium-builds'

// ─── Static generation ─────────────────────────────────────────────────────

export function generateStaticParams() {
  return VivariumBuilds.map((b) => ({ slug: b.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerBuildMetadata(b: VivariumBuild): { title: string; description: string } {
  const titleRaw = `${b.speciesName} Vivarium Build Guide | Lizard.com`
  const title = truncate(titleRaw, 70)
  const desc = `Step-by-step ${b.speciesName} vivarium build: enclosure size, temperature gradient, lighting, substrate, hides, and equipment by category. Cited from Mader's RAMS and ARAV.`
  return { title, description: truncate(desc, 160) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const build = getVivariumBuildBySlug(slug)

  if (!build) {
    return buildMetadata({
      siteId: 'lizard-com',
      title: 'Vivarium Build Not Found | Lizard.com',
      description:
        'The requested species-class vivarium build is not in the Lizard.com catalog.',
      path: `/builds/${slug}`,
    })
  }

  const { title, description } = buildPerBuildMetadata(build)
  return buildMetadata({
    siteId: 'lizard-com',
    title,
    description,
    path: `/builds/${build.slug}`,
    type: 'article',
  })
}

// ─── FAQ builder ───────────────────────────────────────────────────────────

function buildFaqItems(b: VivariumBuild): FAQItem[] {
  return b.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
    answerText: f.answer,
  }))
}

// ─── Affiliate link helper ─────────────────────────────────────────────────

function productHref(asin?: string): string | undefined {
  if (!asin) return undefined
  return `/go/amazon/${asin}`
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function VivariumBuildPage({ params }: PageProps) {
  const { slug } = await params
  const build = getVivariumBuildBySlug(slug)
  if (!build) notFound()

  const url = `https://lizard.com/builds/${build.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerBuildMetadata(build)
  const related = getRelatedVivariumBuilds(build.slug, 3)
  const faqItems = buildFaqItems(build)
  const speciesSlug = speciesSlugFor(build)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Builds', href: '/builds' },
    { name: `${build.speciesName} Build`, href: `/builds/${build.slug}` },
  ]

  // ─── JSON-LD ───────────────────────────────────────────────────────────
  const articleSchema = buildArticleSchema({
    siteId: 'lizard-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Lizard.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const howToSchema = buildHowToSchema({
    name: `How to Build a ${build.speciesName} Vivarium`,
    description: build.shortDescription,
    url,
    steps: build.buildSteps.map((s) => ({
      name: s.title,
      text: s.description,
    })),
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

  const combined = combineSchemas(articleSchema, howToSchema, faqSchema, breadcrumbSchema)

  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: `${build.speciesName} Vivarium Build`,
        subtitle: build.shortDescription,
        category: build.buildName,
        authorName: 'Lizard.com Editorial',
        authorAvatar: 'LZ',
        publishedAt: 'May 2026',
        readTime: '14 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={combined}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Overview', href: '#overview' },
              { label: 'Enclosure Size', href: '#enclosure-size' },
              { label: 'Temperature Gradient', href: '#temperature' },
              { label: 'Humidity Range', href: '#humidity' },
              { label: 'Lighting', href: '#lighting' },
              { label: 'Substrate', href: '#substrate' },
              { label: 'Hides', href: '#hides' },
              { label: 'Water Features', href: '#water' },
              { label: 'Decorations', href: '#decor' },
              { label: 'Heating Method', href: '#heating' },
              { label: 'Required Equipment', href: '#equipment' },
              { label: 'Build Steps', href: '#steps' },
              { label: 'Common Mistakes', href: '#mistakes' },
              { label: 'Maintenance Schedule', href: '#maintenance' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Companion Guides"
            links={[
              {
                label: `${build.speciesName} Care`,
                href: `/species/${speciesSlug}`,
              },
              { label: 'Husbandry Deep-Dives', href: '/husbandry' },
              { label: 'UVB Lighting Guide', href: '/husbandry/uvb-lighting' },
              {
                label: 'Vivarium Sizing Guide',
                href: '/husbandry/vivarium-sizing',
              },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Free Care Sheets"
            subtitle="Species build guides for subscribers."
            source={`build-${build.slug}`}
            ctaText="Download Free"
          />
          <CalloutBox variant="info" title="Find an ARAV-certified vet">
            <p style={{ margin: 0, fontSize: '13.5px' }}>
              The Association of Reptilian and Amphibian Veterinarians (ARAV) maintains a public
              directory of veterinarians with reptile-specific training. For any significant
              reptile illness — or to set up a baseline new-pet exam — an ARAV-member clinic is the
              preferred referral.
            </p>
          </CalloutBox>
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline
          siteName="Lizard.com Editorial — sourced from cited references"
          publishedAt="2026-05-29T00:00:00Z"
          updatedAt="2026-05-29T00:00:00Z"
          reviewedBy="Editorial team"
        />

        <CalloutBox variant="evidence" title="Sourced from keeper-literature references">
          This build guide synthesizes content from Mader&rsquo;s Reptile and Amphibian Medicine
          and Surgery (RAMS), the Journal of Herpetological Medicine and Surgery, ARAV
          continuing-education materials, and AAV reference texts where reptile content overlaps.
          Equipment is described by category with example products; we do not promise a
          &ldquo;best&rdquo; product or a guaranteed outcome.
        </CalloutBox>

        <div
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--brand-primary)',
            background: 'rgba(122,181,42,0.12)',
            border: '1px solid rgba(122,181,42,0.25)',
            padding: '4px 10px',
            borderRadius: '4px',
            margin: '8px 0 16px',
          }}
        >
          {difficultyLabel(build.suitableFor)} · {build.scientificName}
        </div>

        <h2 id="overview">Overview</h2>
        <p>{build.overview}</p>

        <h2 id="enclosure-size">Enclosure Size</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            margin: '12px 0 24px',
          }}
        >
          <div
            style={{
              padding: '14px 16px',
              border: '1px solid var(--brand-border)',
              borderRadius: '8px',
              background: 'var(--brand-white)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              Minimum
            </div>
            <div style={{ fontSize: '14.5px', lineHeight: 1.55 }}>{build.enclosureSize.min}</div>
          </div>
          <div
            style={{
              padding: '14px 16px',
              border: '1px solid var(--brand-border)',
              borderRadius: '8px',
              background: 'var(--brand-white)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              Recommended
            </div>
            <div style={{ fontSize: '14.5px', lineHeight: 1.55 }}>
              {build.enclosureSize.recommended}
            </div>
          </div>
          <div
            style={{
              padding: '14px 16px',
              border: '1px solid var(--brand-border)',
              borderRadius: '8px',
              background: 'var(--brand-white)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              Ideal
            </div>
            <div style={{ fontSize: '14.5px', lineHeight: 1.55 }}>{build.enclosureSize.ideal}</div>
          </div>
        </div>

        <h2 id="temperature">Temperature Gradient</h2>
        <ul>
          <li>
            <strong>Basking:</strong> {build.temperatureGradient.basking}
          </li>
          <li>
            <strong>Ambient:</strong> {build.temperatureGradient.ambient}
          </li>
          <li>
            <strong>Cool side:</strong> {build.temperatureGradient.cool}
          </li>
          <li>
            <strong>Night drop:</strong> {build.temperatureGradient.nightDrop}
          </li>
        </ul>

        <h2 id="humidity">Humidity Range</h2>
        <ul>
          <li>
            <strong>Day:</strong> {build.humidityRange.day}
          </li>
          <li>
            <strong>Night:</strong> {build.humidityRange.night}
          </li>
          {build.humidityRange.breeding && (
            <li>
              <strong>Breeding / shed:</strong> {build.humidityRange.breeding}
            </li>
          )}
        </ul>

        <h2 id="lighting">Lighting</h2>
        {build.lighting.uvb && (
          <p>
            <strong>UVB:</strong> {build.lighting.uvb}
          </p>
        )}
        <p>
          <strong>Basking light:</strong> {build.lighting.basking}
        </p>
        <p>
          <strong>Photoperiod:</strong> {build.lighting.photoperiod}
        </p>

        <h2 id="substrate">Substrate</h2>
        <ul>
          {build.substrate.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <h2 id="hides">Hides</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '12px',
            margin: '12px 0 24px',
          }}
        >
          {build.hides.map((h) => (
            <div
              key={h.type}
              style={{
                padding: '14px 16px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                background: 'var(--brand-white)',
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '14.5px',
                  color: 'var(--brand-text-dark)',
                  marginBottom: '6px',
                }}
              >
                {h.type}
              </div>
              <div
                style={{
                  fontSize: '13.5px',
                  color: 'var(--brand-text-mid)',
                  lineHeight: 1.45,
                }}
              >
                {h.placement}
              </div>
            </div>
          ))}
        </div>

        <h2 id="water">Water Features</h2>
        <p>{build.waterFeatures}</p>

        <h2 id="decor">Decorations</h2>
        <ul>
          {build.decorations.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <h2 id="heating">Heating Method</h2>
        <p>{build.heatingMethod}</p>

        <h2 id="equipment">Required Equipment</h2>
        <p>
          Categories below are described by what they do, not by a brand promise. Where we have an
          Amazon ASIN registered, the &ldquo;Find&rdquo; link routes through Lizard.com&rsquo;s
          tracked redirect; otherwise the example is a category-level reference. See our{' '}
          <Link href="/disclosure" style={{ color: 'var(--brand-primary)' }}>
            affiliate disclosure
          </Link>{' '}
          for how these links work.
        </p>
        {build.requiredEquipment.map((cat) => (
          <div key={cat.category} style={{ margin: '16px 0 8px' }}>
            <h3 style={{ margin: '8px 0 6px' }}>{cat.category}</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px',
              }}
            >
              {cat.examples.map((p) => {
                const href = productHref(p.asin)
                return (
                  <div
                    key={p.name}
                    style={{
                      padding: '14px 16px',
                      border: '1px solid var(--brand-border)',
                      borderRadius: '8px',
                      background: 'var(--brand-white)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '14.5px',
                        color: 'var(--brand-text-dark)',
                        lineHeight: 1.35,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--brand-text-mid)',
                      }}
                    >
                      Typical price: {p.priceRange}
                    </div>
                    {href && (
                      <Link
                        href={href}
                        rel="sponsored nofollow"
                        style={{
                          marginTop: '4px',
                          fontSize: '13px',
                          fontWeight: 700,
                          color: 'var(--brand-primary)',
                          textDecoration: 'none',
                        }}
                      >
                        Find on Amazon &rarr;
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        <h2 id="steps">Build Steps</h2>
        <ol style={{ paddingLeft: 0, listStyle: 'none', margin: '12px 0 24px' }}>
          {build.buildSteps.map((s) => (
            <li
              key={s.step}
              style={{
                padding: '14px 16px',
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                background: 'var(--brand-white)',
                marginBottom: '10px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  background: 'rgba(122,181,42,0.12)',
                  border: '1px solid rgba(122,181,42,0.25)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  flexShrink: 0,
                }}
              >
                Step {s.step}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: 700,
                    color: 'var(--brand-text-dark)',
                    fontSize: '15.5px',
                    marginBottom: '4px',
                  }}
                >
                  {s.title}
                </div>
                <div style={{ fontSize: '14.5px', lineHeight: 1.55, color: 'var(--brand-text-dark)' }}>
                  {s.description}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <h2 id="mistakes">Common Mistakes</h2>
        <ul>
          {build.commonMistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="maintenance">Maintenance Schedule</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '12px',
            margin: '12px 0 24px',
          }}
        >
          {build.maintenanceSchedule.map((m, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  padding: '14px 16px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '8px',
                  background: 'var(--brand-white)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  Daily
                </div>
                <div style={{ fontSize: '14px', lineHeight: 1.5 }}>{m.daily}</div>
              </div>
              <div
                style={{
                  padding: '14px 16px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '8px',
                  background: 'var(--brand-white)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  Weekly
                </div>
                <div style={{ fontSize: '14px', lineHeight: 1.5 }}>{m.weekly}</div>
              </div>
              <div
                style={{
                  padding: '14px 16px',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '8px',
                  background: 'var(--brand-white)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  Monthly
                </div>
                <div style={{ fontSize: '14px', lineHeight: 1.5 }}>{m.monthly}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {related.length > 0 && (
          <>
            <h2 id="related">Other Species Builds</h2>
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
                  href={`/builds/${r.slug}`}
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
                    {r.speciesName} Build
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {difficultyLabel(r.suitableFor)}
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
          {build.citedSources.map((c) => (
            <li key={c.url}>
              <a href={c.url} target="_blank" rel="nofollow noreferrer">
                {c.name}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
          This page is editorial reference content compiled from the cited herpetological-medicine
          and keeper-literature sources. It is not a substitute for veterinary diagnosis or
          treatment. For any significant reptile health concern, consult an ARAV-member or
          board-certified exotic-animal veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
