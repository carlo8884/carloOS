import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  RelatedLinks,
  EmailCapture,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  TableOfContents,
  AffiliateDisclosure,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import {
  ACCESSORY_CATEGORIES,
  getAccessoryBySlug,
  getAllAccessorySlugs,
} from '@/data/accessories'

interface AccessoryPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllAccessorySlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: AccessoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const accessory = getAccessoryBySlug(slug)
  if (!accessory) {
    return buildMetadata({
      siteId: 'saddle-com',
      title: 'Accessory Guide Not Found | Saddle.com',
      description: 'The saddle accessory buyer guide you requested could not be found.',
      path: `/accessories/${slug}`,
    })
  }

  const titleCandidates = [
    `${accessory.categoryName} Buyer Guide 2026 | Saddle.com`,
    `${accessory.categoryName} Buyer Guide | Saddle.com`,
  ]
  const title = titleCandidates.find((t) => t.length <= 70) ?? titleCandidates[1]

  const cat = accessory.categoryName.toLowerCase()
  const descCandidates = [
    `${accessory.categoryName} buyer guide — types, how to choose, price tiers, top brands, common mistakes, and FAQs for ${cat}.`,
    `Buyer guide to ${cat} — what they are, how to choose, price ranges, top brands, and common mistakes.`,
  ]
  const description = descCandidates.find((d) => d.length <= 160) ?? descCandidates[1]

  return buildMetadata({
    siteId: 'saddle-com',
    title,
    description,
    path: `/accessories/${slug}`,
    type: 'article',
  })
}

export default async function AccessoryPage({ params }: AccessoryPageProps) {
  const { slug } = await params
  const accessory = getAccessoryBySlug(slug)
  if (!accessory) notFound()

  const url = `https://saddle.com/accessories/${accessory.slug}`

  const articleSchema = buildArticleSchema({
    siteId: 'saddle-com',
    title: `${accessory.categoryName} Buyer Guide`,
    description: accessory.tagline,
    url,
    imageUrl: '',
    authorName: 'Saddle.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://saddle.com/' },
      { name: 'Accessories', url: 'https://saddle.com/accessories' },
      { name: accessory.categoryName, url },
    ],
  })

  const faqSchema = buildFAQSchema({ questions: accessory.faqs })

  const combinedSchema = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  // Other accessory categories for the "related guides" section.
  const relatedAccessories = ACCESSORY_CATEGORIES.filter((a) => a.slug !== accessory.slug).slice(0, 5)

  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="saddle-com"
        hero={{
          title: `${accessory.categoryName} — Buyer Guide`,
          subtitle: accessory.tagline,
          category: 'Saddle Accessory Reference',
          authorName: 'Saddle.com Editorial',
          authorAvatar: '🐴',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Accessories', href: '/accessories' },
          { name: accessory.categoryName, href: `/accessories/${accessory.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What It Is', href: '#what' },
                { label: 'Why It Matters', href: '#why' },
                { label: 'Types & Use Cases', href: '#types' },
                { label: 'How to Choose', href: '#choose' },
                { label: 'Common Mistakes', href: '#mistakes' },
                { label: 'Price Ranges', href: '#price' },
                { label: 'Top Brands', href: '#brands' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'All Saddle Brands', href: '/brands' },
                { label: 'Saddle Fit by Discipline', href: '/fit' },
                { label: 'Saddle Reviews', href: '/reviews' },
                { label: 'Saddle Fit Guide (General)', href: '/guides/saddle-fit-guide' },
              ]}
            />
            <div className="bg-brand-primary-pale border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                Free Lead Magnet
              </div>
              <div className="font-display font-bold text-brand-dark text-base mb-2">
                12-Point Saddle Fit Checklist
              </div>
              <p className="text-xs text-brand-text-mid mb-3">
                A printable 12-point checklist for try-on appointments and routine fit checks — covers wither
                clearance, panel contact, gullet clearance, balance, and the rider-side checks too.
              </p>
              <Link
                href="/saddle-fit-checklist"
                className="inline-block text-xs font-bold text-brand-primary no-underline hover:underline"
              >
                Get the free checklist →
              </Link>
            </div>
            <EmailCapture
              variant="sidebar"
              siteId="saddle-com"
              title="Free Saddle Buyer's Guide"
              subtitle="Brand-by-brand reviews and market intelligence."
              source={`accessories-${accessory.slug}`}
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Saddle.com Editorial"
            publishedAt="2026-05-29T00:00:00Z"
            updatedAt="2026-05-29T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="info" title={`${accessory.categoryName} — at a glance`}>
            <p className="m-0">{accessory.tagline}</p>
          </CalloutBox>

          <CalloutBox variant="warning" title="Saddle.com is a reference site, not a fitter">
            <p className="m-0">
              This is a buyer guide — sourced from cited references, manufacturer disclosures, and the brand-direct
              notes on our{' '}
              <Link href="/brands" className="text-brand-primary underline">brands</Link> pages. Final selection and
              fit checks for accessories that touch the horse must be confirmed by a qualified professional. Look for
              a Society of Master Saddlers Qualified Saddle Fitter (UK) or a Master Saddlers Association Certified
              Fitter (US). We do not guarantee specific fit or performance outcomes from following this guide.
            </p>
          </CalloutBox>

          <h2 id="what">What It Is</h2>
          <p>{accessory.whatItIs}</p>

          <h2 id="why">Why It Matters</h2>
          <ul>
            {accessory.whyItMatters.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="types">Types &amp; Use Cases</h2>
          <p>
            The table below lists the most common patterns for {accessory.categoryName.toLowerCase()} and the
            riders/horses each one suits — plus the trade-offs that the brochures tend to leave out.
          </p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-brand-border rounded-xl overflow-hidden">
              <thead className="bg-brand-surface">
                <tr>
                  <th className="text-left p-3 font-display font-bold text-brand-dark border-b border-brand-border">
                    Type
                  </th>
                  <th className="text-left p-3 font-display font-bold text-brand-dark border-b border-brand-border">
                    Best For
                  </th>
                  <th className="text-left p-3 font-display font-bold text-brand-dark border-b border-brand-border">
                    Drawbacks
                  </th>
                </tr>
              </thead>
              <tbody>
                {accessory.typesAndUseCases.map((t, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}
                  >
                    <td className="p-3 align-top text-brand-dark font-semibold border-b border-brand-border">
                      {t.type}
                    </td>
                    <td className="p-3 align-top text-brand-text-mid border-b border-brand-border">
                      {t.bestFor}
                    </td>
                    <td className="p-3 align-top text-brand-text-mid border-b border-brand-border">
                      {t.drawbacks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="choose">How to Choose</h2>
          <p>
            The checkpoints below are the rider-side checks that matter most for {accessory.categoryName.toLowerCase()}
            {' '}— adapted from Society of Master Saddlers and Master Saddlers Association tack guidance.
          </p>
          <ul>
            {accessory.howToChoose.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="mistakes">Common Mistakes</h2>
          <p>
            These are the errors that show up most often in saddler casework when {accessory.categoryName.toLowerCase()}{' '}
            are the presenting issue — every one of them is avoidable with the checklist above.
          </p>
          <ul>
            {accessory.commonMistakes.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="price">Price Ranges</h2>
          <p>
            New-retail USD ranges across the {accessory.categoryName.toLowerCase()} category. Used markets exist for
            most tiers; quality used items can be excellent value when condition is verified.
          </p>
          <div className="space-y-4 my-6">
            {accessory.priceRanges.map((p, i) => (
              <div
                key={i}
                className="bg-brand-surface border border-brand-border rounded-xl p-5"
              >
                <div className="flex items-baseline justify-between mb-2 gap-3 flex-wrap">
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                    {p.tier} tier
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base">{p.range}</div>
                </div>
                <p className="text-sm text-brand-text-mid m-0">{p.summary}</p>
              </div>
            ))}
          </div>

          <h2 id="brands">Top Brands</h2>
          <p>
            The shortlist below covers the brands established saddlers reach for when sourcing{' '}
            {accessory.categoryName.toLowerCase()}. Brand links go to our{' '}
            <Link href="/brands" className="text-brand-primary underline">brand reference pages</Link> where we maintain
            a /brands/[slug] entry; accessory-only brands are listed as text references.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-5">
            {accessory.topBrands.map((b, i) => {
              const card = (
                <>
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                    {b.slug ? 'Brand reference' : 'Accessory specialist'}
                  </div>
                  <div className="font-display font-bold text-brand-dark text-base mb-1.5">{b.name}</div>
                  <div className="text-xs text-brand-text-mid leading-relaxed">{b.knownFor}</div>
                  {b.slug ? (
                    <div className="text-2xs text-brand-primary font-bold mt-3">Read brand notes →</div>
                  ) : null}
                </>
              )
              return b.slug ? (
                <Link
                  key={i}
                  href={`/brands/${b.slug}`}
                  className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
                >
                  {card}
                </Link>
              ) : (
                <div
                  key={i}
                  className="block bg-brand-white border border-brand-border rounded-xl p-5"
                >
                  {card}
                </div>
              )
            })}
          </div>

          <AffiliateDisclosure variant="inline" siteId="saddle-com" />
          <CalloutBox variant="tip" title="Buying online">
            <p className="m-0">
              {accessory.affiliateAngle} Shop the named models through your preferred retailer — Amazon and{' '}
              <a
                href="/go/smartpak/home?s=accessories"
                rel="sponsored noopener"
                className="text-brand-primary underline"
              >
                SmartPak
              </a>{' '}
              both carry most of the brands listed above.
            </p>
          </CalloutBox>

          <h2 id="related">Other Accessory Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3 my-4">
            {relatedAccessories.map((a) => (
              <Link
                key={a.slug}
                href={`/accessories/${a.slug}`}
                className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
              >
                <div className="text-sm font-bold text-brand-dark">
                  <span className="mr-1.5" aria-hidden="true">{a.icon}</span>
                  {a.categoryName} Buyer Guide
                </div>
                <div className="text-xs text-brand-text-light mt-1">{a.tagline.split(' — ')[0]}</div>
              </Link>
            ))}
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion
            items={accessory.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
              answerText: f.answer,
            }))}
            includeSchema={false}
          />

          <h2 id="sources">Sources &amp; References</h2>
          <ul className="text-xs text-brand-text-light">
            <li>
              Society of Master Saddlers (UK) — qualified saddler directory and tack guidance:{' '}
              <a
                href="https://www.mastersaddlers.co.uk"
                rel="nofollow noopener"
                target="_blank"
                className="text-brand-primary underline"
              >
                mastersaddlers.co.uk
              </a>
            </li>
            <li>
              Master Saddlers Association (US) — certified fitter directory and tack-fit guidance:{' '}
              <a
                href="https://www.mastersaddlersassociation.org"
                rel="nofollow noopener"
                target="_blank"
                className="text-brand-primary underline"
              >
                mastersaddlersassociation.org
              </a>
            </li>
            <li>
              USEF Rule Book — equipment and tack rules by discipline:{' '}
              <a
                href="https://www.usef.org/forms-pubs/iWAjEf81LKQ/rules--rule-book"
                rel="nofollow noopener"
                target="_blank"
                className="text-brand-primary underline"
              >
                usef.org/rule-book
              </a>
            </li>
            <li>
              FEI Rules and Welfare Guidelines — noseband tightness and equipment standards:{' '}
              <a
                href="https://www.fei.org/fei/regulations"
                rel="nofollow noopener"
                target="_blank"
                className="text-brand-primary underline"
              >
                fei.org/regulations
              </a>
            </li>
            <li>
              Saddle.com brand-direct notes:{' '}
              <Link href="/brands" className="text-brand-primary underline">
                /brands
              </Link>{' '}
              (per-brand reference drawn from manufacturer disclosures).
            </li>
            <li>
              Saddle.com discipline-fit reference:{' '}
              <Link href="/fit" className="text-brand-primary underline">
                /fit
              </Link>{' '}
              (the six-discipline saddle-fit guide series).
            </li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
