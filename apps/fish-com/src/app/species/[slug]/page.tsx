/**
 * Fish.com — Dynamic species landing page.
 *
 * Architect S19 (AI Species Engine) renders one of 40 programmatic species
 * profiles defined in `src/data/species-v2.ts`. Architect S1 (Universal
 * Comparison Engine) supplies the affiliate routing through the
 * `<AffiliateLink>` CTAs in the recommended products grid.
 *
 * Routing precedence:
 *   - If a hand-written /species/<slug>/page.tsx folder exists, Next.js
 *     serves that page and this dynamic route is bypassed. Existing
 *     pages (betta-fish, neon-tetra, clownfish, ...) keep working
 *     unchanged.
 *   - For all other slugs we look up the profile in SPECIES_V2_BY_SLUG.
 *     Slugs that have no profile fall through to notFound().
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  AffiliateDisclosure,
  AffiliateLink,
  ArticleLayout,
  EmailCapture,
  FAQAccordion,
  RelatedLinks,
  SchemaScript,
  buildArticleSchema,
  buildFAQSchema,
  buildMetadata,
  getVendorLabel,
} from '@carloOS/ui'

import {
  getSpeciesV2,
  RESERVED_SPECIES_SLUGS,
  SPECIES_V2,
  type SpeciesProfile,
} from '../../../data/species-v2'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  // Only emit dynamic params for species that do NOT have a hand-written
  // folder page (those are static routes already and Next.js serves them
  // before the dynamic [slug] route).
  return SPECIES_V2.filter((sp) => !RESERVED_SPECIES_SLUGS.has(sp.slug)).map((sp) => ({
    slug: sp.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const species = getSpeciesV2(params.slug)
  if (!species) {
    return buildMetadata({
      siteId: 'fish-com',
      title: 'Species Not Found',
      description: 'This aquarium species page is no longer available.',
      path: `/species/${params.slug}`,
      noIndex: true,
    })
  }

  return buildMetadata({
    siteId: 'fish-com',
    title: `${species.commonName} Care Guide — Tank Size, Water Parameters, Diet`,
    description: `${species.commonName} (${species.scientificName}) care guide: ${species.tank_size_min_gallons}+ gallon tank, ${species.temperature_f[0]}–${species.temperature_f[1]}°F, pH ${species.ph[0]}–${species.ph[1]}. ${species.summary}`,
    path: `/species/${species.slug}`,
    type: 'article',
    category: 'Species Care Guide',
  })
}

const CARE_LEVEL_BADGE: Record<SpeciesProfile['care_level'], { label: string; cls: string }> = {
  beginner: { label: 'Beginner Friendly', cls: 'bg-green-50 text-green-700 border-green-200' },
  intermediate: { label: 'Intermediate', cls: 'bg-amber-50 text-amber-700 border-amber-200' },
  advanced: { label: 'Advanced', cls: 'bg-red-50 text-red-700 border-red-200' },
}

const TEMPERAMENT_LABEL: Record<SpeciesProfile['temperament'], string> = {
  peaceful: 'Peaceful',
  'semi-aggressive': 'Semi-Aggressive',
  aggressive: 'Aggressive',
}

const DIET_LABEL: Record<SpeciesProfile['diet'], string> = {
  herbivore: 'Herbivore',
  omnivore: 'Omnivore',
  carnivore: 'Carnivore',
  detritivore: 'Detritivore / Scavenger',
}

const CATEGORY_LABEL: Record<SpeciesProfile['category'], string> = {
  'freshwater-fish': 'Freshwater Fish',
  'saltwater-fish': 'Saltwater Fish',
  'freshwater-invert': 'Freshwater Invertebrate',
  'saltwater-invert': 'Saltwater Invertebrate',
}

// ─── Sub-components ────────────────────────────────────────────────────────

function QuickFactsGrid({ species }: { species: SpeciesProfile }) {
  const facts: Array<{ label: string; value: string }> = [
    { label: 'Tank Size', value: `${species.tank_size_min_gallons}+ gallons` },
    { label: 'Temperature', value: `${species.temperature_f[0]}–${species.temperature_f[1]} °F` },
    { label: 'pH', value: `${species.ph[0]}–${species.ph[1]}` },
    {
      label: 'Lifespan',
      value:
        species.lifespan_years[0] === species.lifespan_years[1]
          ? `${species.lifespan_years[0]} years`
          : `${species.lifespan_years[0]}–${species.lifespan_years[1]} years`,
    },
    { label: 'Max Size', value: `${species.max_size_inches}"` },
    { label: 'Temperament', value: TEMPERAMENT_LABEL[species.temperament] },
    { label: 'Diet', value: DIET_LABEL[species.diet] },
    {
      label: 'Schooling',
      value: species.schooling
        ? `Yes — keep ${species.schooling_min ?? 6}+`
        : 'No',
    },
  ]
  if (species.water_hardness_dgh) {
    facts.push({
      label: 'Hardness',
      value: `${species.water_hardness_dgh[0]}–${species.water_hardness_dgh[1]} dGH`,
    })
  }
  if (species.salinity_sg) {
    facts.push({
      label: 'Salinity',
      value: `${species.salinity_sg[0]}–${species.salinity_sg[1]} SG`,
    })
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 not-prose">
      {facts.map((f) => (
        <div
          key={f.label}
          className="bg-brand-surface border border-brand-border rounded-lg p-3"
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-1">
            {f.label}
          </div>
          <div className="text-sm font-semibold text-brand-dark">{f.value}</div>
        </div>
      ))}
    </div>
  )
}

function ProductRecommendations({ species }: { species: SpeciesProfile }) {
  return (
    <div className="not-prose">
      <AffiliateDisclosure variant="inline" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {species.recommended_products.map((p, i) => (
          <div
            key={`${p.vendor}-${p.sku}-${i}`}
            className="bg-brand-white border border-brand-border rounded-lg p-4 flex flex-col gap-2"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">
                  {p.category.replace(/-/g, ' ')}
                </div>
                <div className="text-sm font-semibold text-brand-dark mt-0.5">
                  {p.label}
                </div>
              </div>
              <span className="text-2xs font-bold text-brand-text-light whitespace-nowrap">
                via {getVendorLabel(p.vendor)}
              </span>
            </div>
            <div className="mt-auto pt-2">
              <AffiliateLink
                vendor={p.vendor}
                sku={p.sku}
                subId={`species-${species.slug}`}
              >
                Shop {getVendorLabel(p.vendor)} →
              </AffiliateLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TankmatesSection({ species }: { species: SpeciesProfile }) {
  const tankmateLinks = species.tankmate_slugs
    .map((slug) => {
      const sp = getSpeciesV2(slug)
      return sp ? { slug, commonName: sp.commonName } : null
    })
    .filter((x): x is { slug: string; commonName: string } => x !== null)

  return (
    <div className="not-prose">
      <p className="text-sm text-brand-text-mid mb-3">
        Compatible with: {species.tankmate_compatibility.join(', ')}.
      </p>
      {tankmateLinks.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tankmateLinks.map((t) => (
            <Link
              key={t.slug}
              href={`/species/${t.slug}`}
              className="text-xs font-semibold px-3 py-1.5 bg-brand-primary-pale border border-brand-primary/20 rounded-pill no-underline text-brand-primary hover:bg-brand-primary hover:text-brand-white transition-colors"
            >
              {t.commonName} →
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function SpeciesPage({ params }: PageProps) {
  const species = getSpeciesV2(params.slug)
  if (!species) {
    notFound()
  }

  const badge = CARE_LEVEL_BADGE[species.care_level]
  const isSaltwater =
    species.category === 'saltwater-fish' || species.category === 'saltwater-invert'

  const articleSchema = buildArticleSchema({
    siteId: 'fish-com',
    title: `${species.commonName} Care Guide`,
    description: species.summary,
    url: `https://fish.com/species/${species.slug}`,
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-01T00:00:00Z',
    modifiedAt: '2026-05-01T00:00:00Z',
  })
  const faqSchema = buildFAQSchema({
    questions: species.faqs.map((q) => ({ question: q.question, answer: q.answer })),
  })

  return (
    <>
      <SchemaScript schema={faqSchema} />
      <AffiliateDisclosure variant="banner" />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: `${species.commonName} Care Guide`,
          subtitle: `${species.scientificName} — ${species.summary}`,
          category: CATEGORY_LABEL[species.category],
          categoryHref: '/species',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐠',
          publishedAt: 'May 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: species.commonName, href: `/species/${species.slug}` },
        ]}
        schema={articleSchema}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                At a Glance
              </div>
              <div
                className={`inline-block text-2xs font-bold px-2 py-0.5 rounded-pill border ${badge.cls} mb-3`}
              >
                {badge.label}
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-brand-text-light">Tank: </span>
                  <span className="font-semibold text-brand-dark">
                    {species.tank_size_min_gallons}+ gal
                  </span>
                </div>
                <div>
                  <span className="text-brand-text-light">Temp: </span>
                  <span className="font-semibold text-brand-dark">
                    {species.temperature_f[0]}–{species.temperature_f[1]} °F
                  </span>
                </div>
                <div>
                  <span className="text-brand-text-light">pH: </span>
                  <span className="font-semibold text-brand-dark">
                    {species.ph[0]}–{species.ph[1]}
                  </span>
                </div>
                {species.salinity_sg && (
                  <div>
                    <span className="text-brand-text-light">Salinity: </span>
                    <span className="font-semibold text-brand-dark">
                      {species.salinity_sg[0]}–{species.salinity_sg[1]} SG
                    </span>
                  </div>
                )}
              </div>
            </div>
            <RelatedLinks
              title="Tankmate Picks"
              links={species.tankmate_slugs
                .map((slug) => {
                  const sp = getSpeciesV2(slug)
                  return sp ? { label: sp.commonName, href: `/species/${slug}` } : null
                })
                .filter((x): x is { label: string; href: string } => x !== null)}
            />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="Free Cycling Guide"
              subtitle="The 6-step nitrogen cycle walkthrough — start your tank right."
              source={`fish-com:cycling-guide:species:${species.slug}`}
              ctaText="Send Me The Guide"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2>Quick Facts</h2>
          <QuickFactsGrid species={species} />

          <h2>Tank Setup</h2>
          <p>
            {species.commonName} ({species.scientificName}) needs at minimum a{' '}
            <strong>{species.tank_size_min_gallons}-gallon tank</strong>{' '}
            {species.schooling
              ? `for a group of ${species.schooling_min ?? 6}+ individuals, since they are a schooling species and stress when kept in small numbers.`
              : 'for a single specimen or bonded pair.'}
            {' '}They reach a maximum size of {species.max_size_inches} inches, so plan tank
            footprint accordingly — adult swimming room matters more than vertical
            height for most species.
          </p>

          <h2>Water Parameters</h2>
          <ul>
            <li>
              <strong>Temperature:</strong> {species.temperature_f[0]}–{species.temperature_f[1]}°F.
              Stable temperature within this range matters more than hitting a specific
              number — fluctuations trigger ich and immune suppression.
            </li>
            <li>
              <strong>pH:</strong> {species.ph[0]}–{species.ph[1]}.
              {isSaltwater
                ? ' Saltwater systems are buffered by carbonate alkalinity; aim for 8.1–8.4 and monitor weekly.'
                : species.ph[1] <= 7.0
                  ? ' This species needs soft, acidic water — most municipal tap water is harder than this and requires RO/DI dilution or peat / Indian almond leaves.'
                  : ' Most municipal tap water falls in this range — verify with a test kit before stocking.'}
            </li>
            {species.water_hardness_dgh && (
              <li>
                <strong>Hardness:</strong> {species.water_hardness_dgh[0]}–{species.water_hardness_dgh[1]} dGH.
              </li>
            )}
            {species.salinity_sg && (
              <li>
                <strong>Salinity:</strong> {species.salinity_sg[0]}–{species.salinity_sg[1]} SG
                (measure with a calibrated refractometer, not a swing-arm hydrometer).
              </li>
            )}
          </ul>

          <h2>Diet</h2>
          <p>
            {species.commonName} are{' '}
            <strong>{DIET_LABEL[species.diet].toLowerCase()}</strong>. The
            recommended products section below lists the specific foods we recommend for
            this species, sourced from vendors with reliable inventory.
          </p>

          <h2>Tankmates &amp; Compatibility</h2>
          <TankmatesSection species={species} />

          <h2>Common Diseases</h2>
          <p>
            Species-specific disease risks for {species.commonName}:
          </p>
          <ul>
            {species.common_diseases.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p>
            For treatment protocols, see our{' '}
            <Link href="/health/fish-disease-guide">complete fish disease guide</Link>{' '}
            and the{' '}
            <Link href="/health/nitrogen-cycle-explained">
              nitrogen cycle explainer
            </Link>{' '}
            — most chronic disease in home aquariums traces to water quality, not
            pathogens.
          </p>

          <h2>Care Tips</h2>
          <ul>
            {species.care_tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>

          <h2>Common Mistakes</h2>
          <p>
            High-cost mistakes specific to {species.commonName}:
          </p>
          <ul>
            {species.common_mistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>

          <h2>Recommended Products</h2>
          <ProductRecommendations species={species} />

          <h2>Frequently Asked Questions</h2>
          <div className="not-prose">
            <FAQAccordion items={species.faqs} includeSchema={false} />
          </div>

          <AffiliateDisclosure variant="footnote" />
        </div>
      </ArticleLayout>
    </>
  )
}
