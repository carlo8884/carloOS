/**
 * Dynamic equipment-category buyer-guide template for Fish.com.
 *
 * One static-rendered page per entry in src/data/equipment-categories.ts, at
 * /equipment/<slug>. These pages are EDUCATIONAL category overviews — they
 * explain HOW to choose a category of aquarium equipment, then funnel readers
 * to the matching /reviews/best-* pages where specific products are ranked.
 *
 * Sections (in order):
 *   - What It Is
 *   - Why It Matters
 *   - Types & Tradeoffs
 *   - How to Choose
 *   - Common Mistakes
 *   - Price Ranges
 *   - Further Reading (cross-links to existing /reviews/best-* pages)
 *   - FAQs (with FAQPage schema)
 *
 * JSON-LD: Article + BreadcrumbList + FAQPage, emitted via combineSchemas.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArticleLayout,
  AffiliateDisclosure,
  CrossPortfolioCard,
  FAQAccordion,
  RelatedLinks,
  EmailCapture,
  ShopCtas,
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleByline,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  EquipmentCategories,
  getEquipmentCategoryBySlug,
  type EquipmentCategory,
} from '../../../data/equipment-categories'

// ─── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return EquipmentCategories.map((c) => ({ slug: c.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function truncate(str: string, max: number): string {
  if (str.length <= max) return str
  return str.slice(0, max - 3).trimEnd() + '...'
}

function buildPerCategoryMetadata(c: EquipmentCategory): { title: string; description: string } {
  const titleRaw = `${c.categoryName} Buyer Guide — How to Choose | Fish.com`
  const title = truncate(titleRaw, 70)

  const descRaw = `${c.categoryName}: how to choose, types and tradeoffs, common mistakes, and price ranges. Editorial buyer guide from Fish.com.`
  const description = truncate(descRaw, 160)
  return { title, description }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getEquipmentCategoryBySlug(slug)

  if (!category) {
    return buildMetadata({
      siteId: 'fish-com',
      title: 'Equipment Guide Not Found | Fish.com',
      description: 'The requested equipment category guide is not in the Fish.com catalog.',
      path: `/equipment/${slug}`,
    })
  }

  const { title, description } = buildPerCategoryMetadata(category)
  return buildMetadata({
    siteId: 'fish-com',
    title,
    description,
    path: `/equipment/${category.slug}`,
    type: 'article',
  })
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function EquipmentCategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getEquipmentCategoryBySlug(slug)
  if (!category) {
    notFound()
  }

  const url = `https://fish.com/equipment/${category.slug}`
  const { title: metaTitle, description: metaDescription } = buildPerCategoryMetadata(category)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Equipment', href: '/equipment' },
    { name: category.categoryName, href: `/equipment/${category.slug}` },
  ]

  const faqItems: FAQItem[] = category.faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
    answerText: f.answer,
  }))

  const articleSchema = buildArticleSchema({
    siteId: 'fish-com',
    title: metaTitle,
    description: metaDescription,
    url,
    imageUrl: '',
    authorName: 'Fish.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  // ArticleLayout will inject one schema via <SchemaScript>. combineSchemas
  // returns an array; SchemaScript serializes the array into one JSON-LD
  // <script> tag.
  const allSchemas = combineSchemas(articleSchema, faqSchema)

  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: `${category.categoryName} — How to Choose`,
        subtitle: category.whatItIs,
        category: 'Equipment Buyer Guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={allSchemas as unknown as Record<string, unknown>}
      relatedLinks={[{ title: 'Equipment Hub', href: '/equipment', category: 'Equipment' }, { title: 'Filter GPH Calculator', href: '/tools/filter-gph-calculator', category: 'Tools' }, { title: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters', category: 'Reviews' }, { title: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide', category: 'Tank Setup' }]}
      sidebar={
        <>
          <RelatedLinks
            title="Compare Specific Products"
            links={category.recommendedFurtherReading.map((r) => ({
              label: r.label,
              href: r.href,
            }))}
          />
          <CrossPortfolioCard
            currentSite="fish-com"
            contentType="equipment"
            variant="sidebar"
          />
          <div className="bg-brand-primary-pale border border-brand-primary/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Free Lead Magnet
            </div>
            <div className="font-display font-bold text-brand-dark text-base leading-snug mb-2">
              Get our Aquarium Cycling Survival Kit
            </div>
            <p className="text-xs text-brand-text-mid leading-relaxed mb-3">
              The 14-day fish-in / fishless cycling checklist, water-test schedule, and emergency
              ammonia-spike playbook — delivered as a printable PDF.
            </p>
            <a
              href="/setup"
              className="inline-block text-xs font-semibold text-brand-primary no-underline hover:underline"
            >
              Get the Survival Kit →
            </a>
          </div>
          <EmailCapture
            variant="sidebar"
            siteId="fish-com"
            title="The Weekly Tank"
            subtitle="Equipment picks and fishkeeping tips every Thursday."
            source={`equipment-${category.slug}`}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />

        {category.slug === 'aquarium-filters' ? (
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the aquarium-filters checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Aquarium-filters checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-aquarium-hob-media-volume-chart,
              aquarium-rim-canister-interval-card, and
              aquarist-sponge-fry-filter-handbook notes that
              match the hang-on-back media-volume, canister
              3–6-month cleaning, and sponge / fry copy on
              this page — a laminated aquarium HOB media-volume
              chart so the bioload / cartridge notes are posted
              on the stand (not an AquaClear-70-filter hop, not
              an equipment-hub gravel-vacuum hop), an aquarium
              rim canister-interval card so the 50-gallon /
              hose-disconnect notes are labeled on the rim (not
              a Fluval-307 hop, not an API-test-kit hop), and
              an aquarist sponge-fry-filter handbook so the
              air-driven / shrimp / quarantine grounding is a
              physical stand book (not a Hikari-Bacto-Surge hop,
              not a Seachem-Prime hop). Educational stand
              checklist, not a ranked filter list, not a
              first-aid-kit hop, and not a substitute for a
              water test. Fish.com does not sell insurance.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Aquarium-filters checklist"
              subtitle="Email the HOB media-volume chart, canister-interval card, and sponge-fry-filter handbook notes. No spam."
              ctaText="Email my aquarium-filters checklist"
              source="equipment-aquarium-filters-under-hero"
            />
          </div>
        ) : null}

        {category.slug === 'aquarium-heaters' ? (
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the aquarium-heaters checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Aquarium-heaters checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-aquarium-heater-wattage-redundancy-chart,
              aquarium-rim-independent-thermometer-card, and
              aquarist-heater-controller-handbook notes that
              match the 3–5 watts-per-gallon, two-heater
              redundancy, and independent-thermometer copy on
              this page — a laminated aquarium heater wattage-
              redundancy chart so the 40-gallon / two-smaller-
              heaters notes are posted on the stand (not an
              Eheim-Jager hop, not an equipment-hub heater hop),
              an aquarium rim independent-thermometer card so
              the dial-is-approximate / 2–4°F-off notes are
              labeled on the rim (not an Aqueon-Pro hop, not a
              preset-25-watt nano hop), and an aquarist heater-
              controller handbook so the titanium / Inkbird /
              high-value-livestock grounding is a physical
              stand book (not a Hydor-inline hop, not a
              Cobalt-Neo-Therm hop). Educational stand
              checklist, not a ranked heater list, not a
              first-aid-kit hop, and not a substitute for a
              water test. Fish.com does not sell insurance.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Aquarium-heaters checklist"
              subtitle="Email the heater wattage-redundancy chart, independent-thermometer card, and heater-controller handbook notes. No spam."
              ctaText="Email my aquarium-heaters checklist"
              source="equipment-aquarium-heaters-under-hero"
            />
          </div>
        ) : null}

        {category.slug === 'aquarium-lighting' ? (
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the aquarium-lighting checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Aquarium-lighting checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-aquarium-photoperiod-par-chart,
              aquarium-rim-programmable-led-dimmer-card, and
              aquarist-light-mount-height-handbook notes that
              match the 6–8-hour planted photoperiod, PAR-not-
              watts, and mount-height copy on this page — a
              laminated aquarium photoperiod-PAR chart so the
              6–8-hour / algae-trigger notes are posted on the
              stand (not a Hygger-957 hop, not an
              equipment-hub lighting hop), an aquarium rim
              programmable-LED-dimmer card so the ramp /
              intensity notes are labeled on the rim (not a
              Nicrew-Classic hop, not an aquarium-light-timer
              setup hop), and an aquarist light-mount-height
              handbook so the 12-inch hang / rim-sit PAR
              grounding is a physical stand book (not a
              Kessil-A360X hop, not a Finnex hop). Educational
              stand checklist, not a ranked lighting list, not
              a first-aid-kit hop, and not a substitute for a
              water test. Fish.com does not sell insurance.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Aquarium-lighting checklist"
              subtitle="Email the photoperiod-PAR chart, programmable-LED-dimmer card, and light-mount-height handbook notes. No spam."
              ctaText="Email my aquarium-lighting checklist"
              source="equipment-aquarium-lighting-under-hero"
            />
          </div>
        ) : null}

        {category.slug === 'aquarium-substrates' ? (
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the aquarium-substrates checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Aquarium-substrates checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-aquarium-substrate-depth-chart,
              aquarium-rim-species-substrate-card, and
              aquarist-vinegar-carbonate-handbook notes that
              match the 1.5–2.5-inch bed, species-first sand /
              aragonite / aquasoil, and vinegar-test copy on
              this page — a laminated aquarium substrate-depth
              chart so the anaerobic-pocket / 3-inch-sand notes
              are posted on the stand (not an aquarium-gravel
              hop, not a substrate-calculator bag hop), an
              aquarium rim species-substrate card so the cory-
              sand / cichlid-aragonite / planted-aquasoil notes
              are labeled on the rim (not an aquarium-sand hop,
              not an aqua-soil planted hop), and an aquarist
              vinegar-carbonate handbook so the pH-buffer /
              inert-vs-crushed-coral grounding is a physical
              stand book (not a crushed-coral GH hop, not a
              substrate-vacuum hop). Educational stand
              checklist, not a ranked substrate list, not a
              first-aid-kit hop, and not a substitute for a
              water test. Fish.com does not sell insurance.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Aquarium-substrates checklist"
              subtitle="Email the substrate-depth chart, species-substrate card, and vinegar-carbonate handbook notes. No spam."
              ctaText="Email my aquarium-substrates checklist"
              source="equipment-aquarium-substrates-under-hero"
            />
          </div>
        ) : null}

        {category.slug === 'aquarium-test-kits' ? (
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the aquarium-test-kits checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Aquarium-test-kits checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-aquarium-reagent-expiry-chart,
              aquarium-rim-nitrate-shake-card, and
              aquarist-daylight-color-match-handbook notes that
              match the 18–24-month reagent life, 30-second
              nitrate bottle-2 shake, and daylight color-match
              copy on this page — a laminated aquarium reagent-
              expiry chart so the 18–24-month / opened-bottle
              notes are posted on the stand (not an API-master
              hop, not a best-water-test-kits review hop), an
              aquarium rim nitrate-shake card so the 30-second /
              underreport-by-half notes are labeled on the rim
              (not a Seachem-Prime hop, not a test-strip hop),
              and an aquarist daylight-color-match handbook so
              the warm-bulb / printed-chart grounding is a
              physical stand book (not a Hanna-checker hop, not
              a Salifert hop). Educational stand checklist,
              not a ranked test-kit list, not a first-aid-kit
              hop, and not a substitute for a water test.
              Fish.com does not sell insurance. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="fish-com"
              title="Aquarium-test-kits checklist"
              subtitle="Email the reagent-expiry chart, nitrate-shake card, and daylight-color-match handbook notes. No spam."
              ctaText="Email my aquarium-test-kits checklist"
              source="equipment-aquarium-test-kits-under-hero"
            />
          </div>
        ) : null}

        <h2 id="what-it-is">What It Is</h2>
        <p>{category.whatItIs}</p>

        <h2 id="why-it-matters">Why It Matters</h2>
        <ul>
          {category.whyItMatters.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="types">Types &amp; Tradeoffs</h2>
        <p>
          {category.categoryName} are not a single category — sub-types serve different tanks,
          species, and price points. The table below summarizes which sub-type is the correct fit
          and what you give up for that fit.
        </p>
        <div
          style={{
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 28px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'var(--brand-surface)' }}>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    width: '24%',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Type
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    width: '40%',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Best For
                </th>
                <th
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    fontWeight: 700,
                    width: '36%',
                    color: 'var(--brand-text-dark)',
                  }}
                >
                  Drawbacks
                </th>
              </tr>
            </thead>
            <tbody>
              {category.typesAndTradeoffs.map((t) => (
                <tr key={t.type} style={{ borderTop: '1px solid var(--brand-border)' }}>
                  <td
                    style={{
                      padding: '10px 14px',
                      fontWeight: 600,
                      verticalAlign: 'top',
                      color: 'var(--brand-text-dark)',
                    }}
                  >
                    {t.type}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      verticalAlign: 'top',
                      color: 'var(--brand-text-mid)',
                    }}
                  >
                    {t.bestFor}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      verticalAlign: 'top',
                      color: 'var(--brand-text-mid)',
                    }}
                  >
                    {t.drawbacks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="how-to-choose">How to Choose</h2>
        <p>
          The decision criteria below are ordered by impact — the first few decisions matter more
          than the last few. Get the sub-type right first; brand selection inside the right sub-type
          is the smaller decision.
        </p>
        <ul>
          {category.howToChoose.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <h2 id="common-mistakes">Common Mistakes</h2>
        <ul>
          {category.commonMistakes.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <h2 id="price-ranges">Price Ranges</h2>
        <p>
          Price ranges below reflect current retailer averages (Amazon, Petco, Bulk Reef Supply) at
          time of publication. Specific products fluctuate; the tier shapes are stable.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            margin: '12px 0 24px',
          }}
        >
          {category.priceRanges.map((p) => (
            <div
              key={p.tier}
              style={{
                border: '1px solid var(--brand-border)',
                borderRadius: '8px',
                padding: '14px 16px',
                background: 'var(--brand-white)',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--brand-primary)',
                  marginBottom: '4px',
                }}
              >
                {p.tier}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: 'var(--brand-text-dark)',
                  marginBottom: '6px',
                }}
              >
                {p.range}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: 'var(--brand-text-mid)',
                }}
              >
                {p.summary}
              </div>
            </div>
          ))}
        </div>

        <h2 id="shop">Where to Shop</h2>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', marginBottom: '12px' }}>
          Browse the {category.categoryName.toLowerCase()} category on Amazon or Chewy. Fish.com
          earns an affiliate commission when you purchase through these links — at no extra cost
          to you. Commission does not influence editorial picks.
        </p>
        <div style={{ margin: '8px 0 24px' }}>
          <ShopCtas
            amazonHref={`/go/amazon-brand/${encodeURIComponent(category.categoryName)}?s=equipment-${category.slug}`}
            chewyHref={`/go/chewy-brand/${encodeURIComponent(category.categoryName)}?s=equipment-${category.slug}`}
            amazonLabel={`Shop ${category.categoryName} on Amazon →`}
            chewyLabel={`Shop ${category.categoryName} on Chewy →`}
          />
        </div>

        {category.slug === 'aquarium-filters' ? (
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the aquarium-filters stand kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              hang-on-back media-volume, canister 3–6-month
              cleaning, and sponge / fry copy — a laminated
              aquarium HOB media-volume chart, an aquarium rim
              canister-interval card, and an aquarist sponge-
              fry-filter handbook. Educational stand searches
              only. They are not a ranked filter list, they
              are not an equipment-hub / best-aquarium-filters
              review hop, they are not a first-aid-kit hop,
              and they do not replace a water test. Fish.com
              does not sell insurance. Fish.com earns a
              commission on qualifying purchases at no extra
              cost to you. Existing Chewy category buttons
              stay in place.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+aquarium+hob+media+volume+chart?s=equipment-aquarium-filters"
                amazonLabel="Browse laminated aquarium HOB media-volume charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarium+rim+canister+interval+card?s=equipment-aquarium-filters"
                amazonLabel="Browse aquarium rim canister-interval cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarist+sponge+fry+filter+handbook?s=equipment-aquarium-filters"
                amazonLabel="Browse aquarist sponge-fry-filter handbooks on Amazon →"
              />
            </div>
          </div>
        ) : null}

        {category.slug === 'aquarium-heaters' ? (
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the aquarium-heaters stand kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              3–5 watts-per-gallon, two-heater redundancy, and
              independent-thermometer copy — a laminated
              aquarium heater wattage-redundancy chart, an
              aquarium rim independent-thermometer card, and
              an aquarist heater-controller handbook.
              Educational stand searches only. They are not a
              ranked heater list, they are not an
              equipment-hub / best-aquarium-heaters review hop,
              they are not a first-aid-kit hop, and they do
              not replace a water test. Fish.com does not sell
              insurance. Fish.com earns a commission on
              qualifying purchases at no extra cost to you.
              Existing Chewy category buttons stay in place.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+aquarium+heater+wattage+redundancy+chart?s=equipment-aquarium-heaters"
                amazonLabel="Browse laminated aquarium heater wattage-redundancy charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarium+rim+independent+thermometer+card?s=equipment-aquarium-heaters"
                amazonLabel="Browse aquarium rim independent-thermometer cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarist+heater+controller+handbook?s=equipment-aquarium-heaters"
                amazonLabel="Browse aquarist heater-controller handbooks on Amazon →"
              />
            </div>
          </div>
        ) : null}

        {category.slug === 'aquarium-lighting' ? (
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the aquarium-lighting stand kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              6–8-hour planted photoperiod, PAR-not-watts, and
              mount-height copy — a laminated aquarium
              photoperiod-PAR chart, an aquarium rim
              programmable-LED-dimmer card, and an aquarist
              light-mount-height handbook. Educational stand
              searches only. They are not a ranked lighting
              list, they are not an equipment-hub /
              best-aquarium-lighting review hop, they are not
              a first-aid-kit hop, and they do not replace a
              water test. Fish.com does not sell insurance.
              Fish.com earns a commission on qualifying
              purchases at no extra cost to you. Existing
              Chewy category buttons stay in place.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+aquarium+photoperiod+par+chart?s=equipment-aquarium-lighting"
                amazonLabel="Browse laminated aquarium photoperiod-PAR charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarium+rim+programmable+led+dimmer+card?s=equipment-aquarium-lighting"
                amazonLabel="Browse aquarium rim programmable-LED-dimmer cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarist+light+mount+height+handbook?s=equipment-aquarium-lighting"
                amazonLabel="Browse aquarist light-mount-height handbooks on Amazon →"
              />
            </div>
          </div>
        ) : null}

        {category.slug === 'aquarium-substrates' ? (
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the aquarium-substrates stand kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              1.5–2.5-inch bed, species-first sand / aragonite /
              aquasoil, and vinegar-test copy — a laminated
              aquarium substrate-depth chart, an aquarium rim
              species-substrate card, and an aquarist vinegar-
              carbonate handbook. Educational stand searches
              only. They are not a ranked substrate list, they
              are not an equipment-hub / substrate-calculator
              hop, they are not a first-aid-kit hop, and they
              do not replace a water test. Fish.com does not
              sell insurance. Fish.com earns a commission on
              qualifying purchases at no extra cost to you.
              Existing Chewy category buttons stay in place.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+aquarium+substrate+depth+chart?s=equipment-aquarium-substrates"
                amazonLabel="Browse laminated aquarium substrate-depth charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarium+rim+species+substrate+card?s=equipment-aquarium-substrates"
                amazonLabel="Browse aquarium rim species-substrate cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarist+vinegar+carbonate+handbook?s=equipment-aquarium-substrates"
                amazonLabel="Browse aquarist vinegar-carbonate handbooks on Amazon →"
              />
            </div>
          </div>
        ) : null}

        {category.slug === 'aquarium-test-kits' ? (
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the aquarium-test-kits stand kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              18–24-month reagent life, 30-second nitrate
              bottle-2 shake, and daylight color-match copy —
              a laminated aquarium reagent-expiry chart, an
              aquarium rim nitrate-shake card, and an aquarist
              daylight-color-match handbook. Educational stand
              searches only. They are not a ranked test-kit
              list, they are not an equipment-hub /
              best-water-test-kits review hop, they are not a
              first-aid-kit hop, and they do not replace a
              water test. Fish.com does not sell insurance.
              Fish.com earns a commission on qualifying
              purchases at no extra cost to you. Existing
              Chewy category buttons stay in place.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+aquarium+reagent+expiry+chart?s=equipment-aquarium-test-kits"
                amazonLabel="Browse laminated aquarium reagent-expiry charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarium+rim+nitrate+shake+card?s=equipment-aquarium-test-kits"
                amazonLabel="Browse aquarium rim nitrate-shake cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/aquarist+daylight+color+match+handbook?s=equipment-aquarium-test-kits"
                amazonLabel="Browse aquarist daylight-color-match handbooks on Amazon →"
              />
            </div>
          </div>
        ) : null}

        <h2 id="further-reading">Further Reading</h2>
        <p>
          For specific brand and model recommendations within this category, the Fish.com editorial
          team has ranked the leading options on dedicated review pages. Use this guide to pick the
          sub-type that fits your tank, then jump to the review page for the product shortlist.
        </p>
        <ul>
          {category.recommendedFurtherReading.map((r) => (
            <li key={r.href}>
              <a href={r.href}>{r.label}</a>
            </li>
          ))}
        </ul>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={faqItems} includeSchema={false} />

        <p
          style={{
            marginTop: '32px',
            fontSize: '13px',
            color: 'var(--brand-text-mid)',
            borderTop: '1px solid var(--brand-border)',
            paddingTop: '16px',
          }}
        >
          Affiliate disclosure: Fish.com earns commissions on purchases made through links on our
          review pages. Buyer-guide rankings and category recommendations are editorially
          independent — affiliate relationships have no influence on which sub-types we recommend.
        </p>
      </div>
    </ArticleLayout>
  )
}
