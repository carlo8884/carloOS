/**
 * Horses.com — /disciplines/[slug]/equipment programmatic template.
 *
 * One template, six discipline equipment buyer-guide pages — siblings to the
 * existing /disciplines/[slug] overview pages. Pulls structured data from
 * src/data/discipline-equipment.ts.
 *
 * Sections (consistent across all six pages):
 *   1. Overview
 *   2. Saddle
 *   3. Bridle & Bit
 *   4. Required Apparel
 *   5. Optional Apparel
 *   6. Common Accessories
 *   7. Beginner Budget Kit (three price tiers)
 *   8. Brands to Know
 *   9. Buying Tips
 *   10. What to Avoid Starting Out
 *   11. Where to Buy
 *   12. Rulebook Reference
 *
 * Trust-bar (QC-STANDARDS §1):
 *   - Byline reads "Horses.com Editorial — sourced from cited references."
 *     No fake DVM/DACV credentials, no hands-on-tested claims.
 *   - Brand lists are reference shopping starting points, not endorsements.
 *   - All rulebook references cite public USEF / USDF / USEA / NRHA / AQHA /
 *     APHA / ApHC / AERC / NATRC sources.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  ArticleLayout,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  ArticleByline,
  CalloutBox,
} from '@carloOS/ui'
import {
  DisciplineEquipmentData,
  DISCIPLINE_EQUIPMENT_SLUGS,
  getDisciplineEquipmentBySlug,
} from '../../../../data/discipline-equipment'

// Force static rendering — every equipment slug is known at build time.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return DISCIPLINE_EQUIPMENT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getDisciplineEquipmentBySlug(slug)
  if (!data) {
    return buildMetadata({
      siteId: 'horses-com',
      title: 'Equipment Guide Not Found',
      description: 'This discipline equipment guide does not exist.',
      path: `/disciplines/${slug}/equipment`,
    })
  }

  // Title ≤ 70 chars including " | Horses.com" suffix (~13 chars).
  // Core title kept ≤ 57 chars.
  const titleCore = `${data.disciplineName} Equipment — Buyer's Guide`
  const title =
    titleCore.length > 57
      ? `${data.disciplineName} Equipment Guide`
      : titleCore

  // Description ≤ 160 chars.
  const description =
    `${data.disciplineName} tack and equipment buyer's guide: saddle, bridle, ` +
    `bit, apparel, accessories, brands, budget kits, and rulebook references.`

  return buildMetadata({
    siteId: 'horses-com',
    title,
    description: description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/disciplines/${data.slug}/equipment`,
    type: 'article',
  })
}

export default async function DisciplineEquipmentPage({ params }: PageProps) {
  const { slug } = await params
  const data = getDisciplineEquipmentBySlug(slug)
  if (!data) notFound()

  const url = `https://horses.com/disciplines/${data.slug}/equipment`

  const articleSchema = buildArticleSchema({
    siteId: 'horses-com',
    title: `${data.disciplineName} Equipment — Buyer's Guide`,
    description:
      `Buyer's guide to ${data.disciplineName.toLowerCase()} equipment — saddle, bridle, ` +
      `bit, apparel, accessories, brands, budget kits, and governing-body rulebook references.`,
    url,
    imageUrl: '',
    authorName: 'Horses.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://horses.com/' },
      { name: 'Disciplines', url: 'https://horses.com/disciplines' },
      {
        name: data.disciplineName,
        url: `https://horses.com/disciplines/${data.slug}`,
      },
      { name: 'Equipment', url },
    ],
  })

  const combined = combineSchemas(articleSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        hero={{
          title: `${data.disciplineName} Equipment`,
          subtitle: `Buyer's guide to ${data.disciplineName.toLowerCase()} tack and apparel — what you need at the starter level, what you can add later, brands, budget tiers, and the governing-body rulebook the rules come from.`,
          category: 'Equipment Buyer Guide',
          authorName: 'Horses.com Editorial',
          authorAvatar: 'H',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disciplines', href: '/disciplines' },
          { name: data.disciplineName, href: `/disciplines/${data.slug}` },
          { name: 'Equipment', href: `/disciplines/${data.slug}/equipment` },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Overview', href: '#overview' },
                { label: 'Saddle', href: '#saddle' },
                { label: 'Bridle &amp; Bit', href: '#bridle-bit' },
                { label: 'Required Apparel', href: '#required-apparel' },
                { label: 'Optional Apparel', href: '#optional-apparel' },
                { label: 'Common Accessories', href: '#accessories' },
                { label: 'Beginner Budget Kit', href: '#budget' },
                { label: 'Brands to Know', href: '#brands' },
                { label: 'Buying Tips', href: '#tips' },
                { label: 'What to Avoid', href: '#avoid' },
                { label: 'Where to Buy', href: '#where' },
                { label: 'Rulebook Reference', href: '#rules' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                {
                  label: `${data.disciplineName} Overview`,
                  href: `/disciplines/${data.slug}`,
                },
                {
                  label: 'Saddle Fit Basics',
                  href: '/guides/saddle-fit-basics',
                },
                {
                  label: 'All Disciplines',
                  href: '/disciplines',
                },
                {
                  label: 'Saddle.com — Tack Selection',
                  href: 'https://saddle.com',
                },
              ]}
            />
            <CrossPortfolioCard
              currentSite="horses-com"
              contentType="equipment"
              variant="sidebar"
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Practical Horse Reference"
              subtitle="Evidence-led equine reference articles."
              source={`discipline-equipment-${data.slug}`}
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial — sourced from cited references"
            publishedAt="2026-05-29"
            updatedAt="2026-05-29"
          />

          {/* ─── 1. Overview ──────────────────────────────────────── */}
          <h2 id="overview">Overview</h2>
          <p dangerouslySetInnerHTML={{ __html: data.overview }} />

          <CalloutBox variant="info" title="How to read this guide">
            <p>
              The lists below describe what equipment {data.disciplineName.toLowerCase()} typically uses
              and what the governing-body rulebook permits or requires. They are
              shopping starting points, not endorsements — Horses.com Editorial
              has not tested specific products hands-on, and brand mentions are
              reference points based on which makers consistently appear in
              saddler, tack-shop, and competition vendor lists. Always confirm
              current rule language against the rulebook cited at the bottom of
              the page before competing.
            </p>
          </CalloutBox>

          {/* ─── 2. Saddle ───────────────────────────────────────── */}
          <h2 id="saddle">Saddle</h2>
          <p>
            <strong>Saddle type:</strong> {data.saddleType}
          </p>
          <p dangerouslySetInnerHTML={{ __html: data.saddleNotes }} />
          <p>
            See the Horses.com{' '}
            <Link href="/guides/saddle-fit-basics">saddle fit basics</Link>{' '}
            guide for the underlying fit standards that apply across English and
            western saddle styles.
          </p>

          {/* ─── 3. Bridle & Bit ─────────────────────────────────── */}
          <h2 id="bridle-bit">Bridle &amp; Bit</h2>
          <h3>Bridle</h3>
          <p dangerouslySetInnerHTML={{ __html: data.bridleType }} />
          <h3>Bit guidance</h3>
          <p dangerouslySetInnerHTML={{ __html: data.bitGuidance }} />

          {/* ─── 4. Required Apparel ─────────────────────────────── */}
          <h2 id="required-apparel">Required Apparel</h2>
          <p>
            Items in this list are required at recognized competition under the
            governing-body rules cited at the bottom of this guide. Recreational
            riders should still treat the safety items (helmet, body protector
            where applicable) as required.
          </p>
          <ul>
            {data.requiredApparel.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          {/* ─── 5. Optional Apparel ─────────────────────────────── */}
          <h2 id="optional-apparel">Optional Apparel</h2>
          <p>
            Items in this list are optional at the starter and intermediate
            level. Some become required at advanced (FEI or championship)
            levels — check the cited rulebook for level-specific requirements.
          </p>
          <ul>
            {data.optionalApparel.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          {/* ─── 6. Common Accessories ───────────────────────────── */}
          <h2 id="accessories">Common Accessories</h2>
          <p>
            Items typical of a {data.disciplineName.toLowerCase()} schooling and
            competition kit, with the practical purpose each one serves:
          </p>
          <div className="overflow-x-auto my-6 not-prose">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-border bg-brand-surface">
                  <th className="text-left py-2 px-3 font-bold text-brand-dark">
                    Item
                  </th>
                  <th className="text-left py-2 px-3 font-bold text-brand-dark">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.commonAccessories.map((a) => (
                  <tr
                    key={a.item}
                    className="border-b border-brand-border align-top"
                  >
                    <td
                      className="py-2 px-3 font-semibold text-brand-text-dark whitespace-nowrap"
                      dangerouslySetInnerHTML={{ __html: a.item }}
                    />
                    <td
                      className="py-2 px-3 text-brand-text-mid"
                      dangerouslySetInnerHTML={{ __html: a.purpose }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ─── 7. Beginner Budget Kit ──────────────────────────── */}
          <h2 id="budget">Beginner Budget Kit (USD)</h2>
          <p>
            Off-the-shelf market observations for the 2025-2026 season. Custom
            saddles, custom tall boots, and FEI-spec competition wardrobes sit
            well outside these bands.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 my-6 not-prose">
            <div className="border border-brand-border rounded-lg p-4 bg-brand-surface">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Starter
              </div>
              <div className="text-sm text-brand-text-mid">
                {data.priceRangeBeginnerKit}
              </div>
            </div>
            <div className="border border-brand-border rounded-lg p-4 bg-brand-surface">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Intermediate
              </div>
              <div className="text-sm text-brand-text-mid">
                {data.priceRangeIntermediate}
              </div>
            </div>
            <div className="border border-brand-border rounded-lg p-4 bg-brand-surface">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Advanced
              </div>
              <div className="text-sm text-brand-text-mid">
                {data.priceRangeAdvanced}
              </div>
            </div>
          </div>

          {/* ─── 8. Brands to Know ───────────────────────────────── */}
          <h2 id="brands">Brands to Know</h2>
          <p>
            Reference list of makers and brands that consistently appear in{' '}
            {data.disciplineName.toLowerCase()} tack-shop, saddler, and
            competition-vendor lists. This is not an endorsement and does not
            reflect hands-on testing — use it as a starting point for your own
            research and on-farm fitting.
          </p>
          <ul>
            {data.brandsToConsider.map((b) => (
              <li key={b.name}>
                <strong dangerouslySetInnerHTML={{ __html: b.name }} /> —{' '}
                <span dangerouslySetInnerHTML={{ __html: b.knownFor }} />
              </li>
            ))}
          </ul>

          {/* ─── 9. Buying Tips ──────────────────────────────────── */}
          <h2 id="tips">Buying Tips</h2>
          <ul>
            {data.buyingTips.map((tip) => (
              <li key={tip} dangerouslySetInnerHTML={{ __html: tip }} />
            ))}
          </ul>

          {/* ─── 10. What to Avoid Starting Out ──────────────────── */}
          <h2 id="avoid">What to Avoid Starting Out</h2>
          <ul>
            {data.avoidWhenStartingOut.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          {/* ─── 11. Where to Buy ────────────────────────────────── */}
          <h2 id="where">Where to Buy</h2>
          <ul>
            {data.whereToBuy.map((item) => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <p>
            For cross-discipline tack selection and saddle reviews across the
            broader portfolio, see{' '}
            <a
              href="https://saddle.com"
              rel="noopener"
              target="_blank"
            >
              Saddle.com
            </a>
            , the CarloOS family&apos;s dedicated saddle and tack reference.
          </p>

          {/* ─── 12. Rulebook Reference ──────────────────────────── */}
          <h2 id="rules">Rulebook Reference</h2>
          <CalloutBox variant="info" title="Always check the current rulebook">
            <p>
              Rulebooks are updated annually. Bit lists, helmet requirements,
              attire rules, and equipment minima can change between seasons.
              Confirm against the published current edition before competing or
              before buying gear specifically to satisfy a rule.
            </p>
          </CalloutBox>
          <p dangerouslySetInnerHTML={{ __html: data.rulebookReference }} />

          {/* ─── Editorial scope footer ──────────────────────────── */}
          <h2 id="scope">Editorial Scope</h2>
          <p className="text-sm text-brand-text-mid">
            This guide is a buyer&apos;s reference, not a hands-on review.
            Horses.com Editorial has not tested specific products in this article
            and the brand list above is drawn from saddler, tack-shop, and
            competition-vendor sources. Cited rulebooks are the public USEF,
            USDF, USEA, NRHA, AQHA, APHA, ApHC, AERC, and NATRC publications.
            Verify the current edition against the relevant governing body before
            competing.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
