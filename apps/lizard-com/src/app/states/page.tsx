/**
 * State reptile-law hub page — Lizard.com.
 *
 * Index of all 50 state pages at /states/<slug>. Includes:
 *   - Color-coded SVG U.S. map (green permissive / yellow moderate /
 *     red restrictive)
 *   - Alphabetical state list
 *   - "Most permissive" and "Most restrictive" rankings
 *   - "Permit always required" callouts (venomous + large constrictors)
 *
 * JSON-LD: Article + ItemList + BreadcrumbList.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  EmailCapture,
  CalloutBox,
  ArticleByline,
} from '@carloOS/ui'
import {
  StateReptileLaws,
  statesByPosture,
  postureLabel,
  postureColor,
  stateCount,
  fullyCoveredStates,
} from '../../data/state-reptile-laws'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'State-by-state reptile laws (50 states) | Lizard.com',
  description:
    'Reptile laws by US state: banned species, restricted species, permit categories, and enforcing wildlife agencies. Sourced from cited state references.',
  path: '/states',
  type: 'article',
})

// ─── Color-coded map (SVG) ─────────────────────────────────────────────────
//
// Simple grid-style cartogram. Each cell is one state, sized identically,
// laid out in a roughly-geographic 11-column grid. This avoids the cost
// (and maintenance overhead) of shipping a high-fidelity SVG of the
// United States while still rendering a visually scannable
// permissive/moderate/restrictive map.

const MAP_GRID: Array<Array<string | null>> = [
  [null, null, null, null, null, null, null, null, null, null, 'ME'],
  ['AK', null, null, null, null, null, null, null, 'VT', 'NH', null],
  [null, 'WA', 'ID', 'MT', 'ND', 'MN', 'IL', 'WI', 'MI', 'NY', 'MA'],
  [null, 'OR', 'UT', 'WY', 'SD', 'IA', 'IN', 'OH', 'PA', 'NJ', 'CT'],
  ['HI', 'CA', 'NV', 'CO', 'NE', 'MO', 'KY', 'WV', 'VA', 'MD', 'RI'],
  [null, null, 'AZ', 'NM', 'KS', 'AR', 'TN', 'NC', 'SC', 'DE', null],
  [null, null, null, 'TX', 'OK', 'LA', 'MS', 'AL', 'GA', null, null],
  [null, null, null, null, null, null, null, null, 'FL', null, null],
]

function StateMap() {
  const cellSize = 44
  const gap = 4

  return (
    <div
      style={{
        display: 'inline-block',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        padding: '20px',
      }}
    >
      <svg
        role="img"
        aria-label="US map showing reptile-law regulatory posture by state — green permissive, yellow moderate, red restrictive"
        width={11 * (cellSize + gap)}
        height={MAP_GRID.length * (cellSize + gap)}
        viewBox={`0 0 ${11 * (cellSize + gap)} ${MAP_GRID.length * (cellSize + gap)}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {MAP_GRID.map((row, rowIdx) =>
          row.map((code, colIdx) => {
            if (!code) return null
            const law = StateReptileLaws.find((s) => s.stateCode === code)
            if (!law) return null
            const c = postureColor(law.generalPosture)
            const x = colIdx * (cellSize + gap)
            const y = rowIdx * (cellSize + gap)
            return (
              <g key={code}>
                <a
                  href={`/states/${law.slug}`}
                  aria-label={`${law.stateName} — ${postureLabel(law.generalPosture).toLowerCase()} reptile-law posture`}
                >
                  <rect
                    x={x}
                    y={y}
                    width={cellSize}
                    height={cellSize}
                    rx={4}
                    fill={c.bg}
                    stroke={c.border}
                    strokeWidth={1}
                  />
                  <text
                    x={x + cellSize / 2}
                    y={y + cellSize / 2 + 4}
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="13"
                    fontWeight="700"
                    fill={c.text}
                  >
                    {code}
                  </text>
                </a>
              </g>
            )
          }),
        )}
      </svg>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '14px',
          flexWrap: 'wrap',
          fontSize: '12px',
        }}
      >
        {(['permissive', 'moderate', 'restrictive'] as const).map((p) => {
          const c = postureColor(p)
          const count = statesByPosture(p).length
          return (
            <div
              key={p}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderRadius: '2px',
                }}
              />
              <span style={{ color: 'rgba(238,240,228,0.7)' }}>
                {postureLabel(p)} ({count})
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function StatesHubPage() {
  const counts = stateCount()
  const fullStates = fullyCoveredStates()
  const permissive = statesByPosture('permissive')
  const moderate = statesByPosture('moderate')
  const restrictive = statesByPosture('restrictive')

  const sortedAlpha = [...StateReptileLaws].sort((a, b) =>
    a.stateName.localeCompare(b.stateName),
  )

  // ─── JSON-LD ─────────────────────────────────────────────────────────
  const articleSchema = buildArticleSchema({
    siteId: 'lizard-com',
    title: 'State-by-state reptile laws (50 states)',
    description:
      'Reptile laws by US state: banned species, restricted species, permit categories, and enforcing wildlife agencies. Sourced from cited state references.',
    url: 'https://lizard.com/states',
    imageUrl: '',
    authorName: 'Lizard.com Editorial',
    publishedAt: '2026-05-30T00:00:00Z',
    modifiedAt: '2026-05-30T00:00:00Z',
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://lizard.com/' },
      { name: 'State Laws', url: 'https://lizard.com/states' },
    ],
  })

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'State-by-state reptile laws',
    description:
      'Per-state reptile-law summaries for all 50 US states, with enforcing wildlife agency and posture classification.',
    numberOfItems: sortedAlpha.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: sortedAlpha.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://lizard.com/states/${s.slug}`,
      name: `Reptile laws in ${s.stateName}`,
    })),
  }

  const combined = combineSchemas(
    articleSchema,
    breadcrumbSchema,
    itemListSchema,
  )

  return (
    <>
      <SchemaScript schema={combined} />

      {/* ─── Hero ───────────────────────────────────────────────────── */}
      <div
        className="relative z-10 px-container sm:px-container-sm py-16"
        style={{ background: 'linear-gradient(135deg, #0D1A0D, #080C08)' }}
      >
        <nav
          aria-label="Breadcrumb"
          className="text-sm mb-4"
          style={{ color: 'rgba(238,240,228,0.5)' }}
        >
          <Link
            href="/"
            style={{ color: 'rgba(238,240,228,0.6)' }}
            className="hover:text-brand-primary"
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--brand-primary)' }}>State Laws</span>
        </nav>
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            State-by-state reptile laws
          </span>
        </div>
        <h1
          className="font-display font-bold text-brand-white tracking-tight leading-tight mb-4"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
        >
          Reptile laws in all 50 US states
        </h1>
        <p
          className="text-lg font-light leading-relaxed max-w-2xl"
          style={{ color: 'rgba(238,240,228,0.6)' }}
        >
          What&rsquo;s legal, what&rsquo;s restricted, and what requires a
          permit &mdash; sourced from cited state-agency references. {counts.full}{' '}
          states currently have full coverage including banned-species lists
          and permit categories; the remaining {counts.framework} states have
          a regulatory-posture overview and a link to the enforcing agency
          while coverage is in progress.
        </p>
      </div>

      {/* ─── Editorial byline (top of hub) ──────────────────────────── */}
      <div
        className="relative z-10 px-container sm:px-container-sm pt-8"
        style={{ background: '#0D1A0D' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ArticleByline
            siteName="Lizard.com Editorial — sourced from cited state agency references"
            publishedAt="2026-05-30T00:00:00Z"
            updatedAt="2026-05-30T00:00:00Z"
            reviewedBy="Editorial team"
          />
        </div>
      </div>

      {/* ─── SVG Map ────────────────────────────────────────────────── */}
      <section
        className="relative z-10 px-container sm:px-container-sm py-12"
        style={{ background: '#0D1A0D' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="font-display font-bold text-brand-white text-2xl mb-3"
            id="map"
          >
            Map: regulatory posture by state
          </h2>
          <p
            className="text-sm mb-5"
            style={{ color: 'rgba(238,240,228,0.55)' }}
          >
            Click a state to read its dedicated page. Color reflects general
            regulatory posture as classified by Lizard.com&rsquo;s editorial
            review of each state&rsquo;s reptile statutes. Posture is a
            shorthand &mdash; every state still has specific banned and
            restricted species; visit the state page for detail.
          </p>
          <StateMap />
        </div>
      </section>

      {/* ─── Permit-always callouts ─────────────────────────────────── */}
      <section
        className="relative z-10 px-container sm:px-container-sm py-10"
        style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="font-display font-bold text-brand-white text-2xl mb-3"
            id="universal-rules"
          >
            What&rsquo;s regulated almost everywhere
          </h2>
          <p
            className="text-sm mb-5"
            style={{ color: 'rgba(238,240,228,0.55)' }}
          >
            A handful of categories are regulated in nearly every US state.
            Even in the most permissive states, the following almost always
            require a permit, a license, or are outright prohibited.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '14px',
            }}
          >
            <div
              style={{
                background: 'rgba(229,80,80,0.06)',
                border: '1px solid rgba(229,80,80,0.25)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#E55050',
                  marginBottom: '6px',
                }}
              >
                Permit always required
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--brand-white)',
                  marginBottom: '6px',
                }}
              >
                Venomous reptiles
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(238,240,228,0.65)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                All US states regulate venomous reptiles. Most prohibit
                private possession entirely; the few that allow it (e.g.,
                Texas under §43.851) require a permit, documented experience,
                and containment standards.
              </p>
            </div>
            <div
              style={{
                background: 'rgba(229,80,80,0.06)',
                border: '1px solid rgba(229,80,80,0.25)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#E55050',
                  marginBottom: '6px',
                }}
              >
                Permit always required
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--brand-white)',
                  marginBottom: '6px',
                }}
              >
                Large constrictors (&gt; 12 ft)
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(238,240,228,0.65)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Burmese pythons, reticulated pythons, anacondas, and African
                rock pythons are restricted or prohibited in most states &mdash;
                and are federally regulated as injurious wildlife under the
                Lacey Act for interstate transport.
              </p>
            </div>
            <div
              style={{
                background: 'rgba(229,80,80,0.06)',
                border: '1px solid rgba(229,80,80,0.25)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#E55050',
                  marginBottom: '6px',
                }}
              >
                Permit always required
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--brand-white)',
                  marginBottom: '6px',
                }}
              >
                Crocodilians
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(238,240,228,0.65)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Alligators, crocodiles, and caimans are universally
                restricted. Even in Florida (which has a native alligator
                population) private possession requires a Class I/II
                Captive Wildlife license.
              </p>
            </div>
            <div
              style={{
                background: 'rgba(245,178,42,0.06)',
                border: '1px solid rgba(245,178,42,0.25)',
                borderRadius: '8px',
                padding: '16px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#E0A025',
                  marginBottom: '6px',
                }}
              >
                Typically regulated
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--brand-white)',
                  marginBottom: '6px',
                }}
              >
                Native wildlife
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: 'rgba(238,240,228,0.65)',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Every state regulates collection of its own native
                reptiles. Permits range from a basic fishing-license
                equivalent to a fully closed season; some species (e.g.,
                bog turtle, eastern massasauga) are federally listed and
                cannot be possessed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Rankings ───────────────────────────────────────────────── */}
      <section
        className="relative z-10 px-container sm:px-container-sm py-12"
        style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="font-display font-bold text-brand-white text-2xl mb-5"
            id="rankings"
          >
            Posture rankings
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {(['permissive', 'moderate', 'restrictive'] as const).map((p) => {
              const c = postureColor(p)
              const list =
                p === 'permissive'
                  ? permissive
                  : p === 'moderate'
                    ? moderate
                    : restrictive
              const heading =
                p === 'permissive'
                  ? 'Most permissive'
                  : p === 'moderate'
                    ? 'Moderate'
                    : 'Most restrictive'
              return (
                <div
                  key={p}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '8px',
                    padding: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      color: c.text,
                      marginBottom: '12px',
                    }}
                  >
                    {heading} ({list.length})
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {[...list]
                      .sort((a, b) => a.stateName.localeCompare(b.stateName))
                      .map((s) => (
                        <li
                          key={s.slug}
                          style={{
                            padding: '6px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                          }}
                        >
                          <Link
                            href={`/states/${s.slug}`}
                            style={{
                              color: 'rgba(238,240,228,0.85)',
                              textDecoration: 'none',
                              fontSize: '14px',
                            }}
                          >
                            {s.stateName}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Alphabetical list ──────────────────────────────────────── */}
      <section
        className="border-t border-brand-border bg-brand-surface px-container sm:px-container-sm py-12"
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="font-display font-bold text-brand-dark text-2xl mb-2"
            id="all-states"
          >
            All 50 states
          </h2>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--brand-text-mid)',
              marginBottom: '18px',
            }}
          >
            {counts.full} of {counts.total} states have full coverage with
            banned-species detail and citations. The remaining{' '}
            {counts.framework} are tagged &ldquo;coverage in progress&rdquo;
            and currently expose only general posture and the enforcing
            agency &mdash; per Lizard.com&rsquo;s editorial policy we do not
            fabricate banned-species lists.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '6px 18px',
            }}
          >
            {sortedAlpha.map((s) => {
              const c = postureColor(s.generalPosture)
              const isFull = s.coverage === 'full'
              return (
                <Link
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: c.text,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ fontSize: '14px', flex: 1 }}>
                    {s.stateName}
                  </span>
                  {isFull ? (
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--brand-primary)',
                      }}
                    >
                      Full
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--brand-text-light)',
                      }}
                    >
                      WIP
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Fully-covered shortlist ──────────────────────────────── */}
      <section
        className="border-t border-brand-border bg-brand-surface px-container sm:px-container-sm py-10"
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            className="font-display font-bold text-brand-dark text-xl mb-3"
            id="fully-covered"
          >
            Fully-covered state pages
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>
            These {fullStates.length} states have completed editorial
            research with banned-species lists, restricted-species
            categories, permit references, and {fullStates.length > 0 ? 5 : 0}{' '}
            primary-source citations each.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px 10px',
              marginTop: '10px',
            }}
          >
            {fullStates
              .sort((a, b) => a.stateName.localeCompare(b.stateName))
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/states/${s.slug}`}
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '999px',
                    fontSize: '13px',
                    color: 'var(--brand-text-dark)',
                    textDecoration: 'none',
                  }}
                >
                  {s.stateName}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ─────────────────────────────────────────────── */}
      <section
        className="px-container sm:px-container-sm py-10"
        style={{ background: 'var(--brand-surface)' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <CalloutBox variant="warning" title="Not legal advice">
            Laws change. The state pages on Lizard.com summarize publicly
            available information from each state&rsquo;s wildlife agency
            and cited statute; they are not legal advice. Always verify the
            current text of the regulation with the enforcing agency before
            acquiring a reptile.
          </CalloutBox>
        </div>
      </section>

      {/* ─── Email capture ─────────────────────────────────────────── */}
      <div
        className="relative z-10 px-container sm:px-container-sm py-12"
        style={{ background: '#0D1A0D', borderTop: '1px solid rgba(122,181,42,0.1)' }}
      >
        <EmailCapture
          variant="inline"
          siteId="lizard-com"
          ctaText="Subscribe Free"
          source="states-hub"
        />
      </div>
    </>
  )
}
