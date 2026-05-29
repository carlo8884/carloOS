import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  RelatedLinks,
  CrossPortfolioCard,
  EmailCapture,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  TableOfContents,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import {
  DISCIPLINE_FITS,
  getDisciplineFitBySlug,
  getAllDisciplineFitSlugs,
} from '@/data/fit-by-discipline'

interface FitPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllDisciplineFitSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: FitPageProps): Promise<Metadata> {
  const { slug } = await params
  const fit = getDisciplineFitBySlug(slug)
  if (!fit) {
    return buildMetadata({
      siteId: 'saddle-com',
      title: 'Saddle Fit Guide Not Found | Saddle.com',
      description: 'The saddle-fit discipline guide you requested could not be found.',
      path: `/fit/${slug}`,
    })
  }

  const titleCandidates = [
    `${fit.disciplineName} Saddle Fit Guide 2026 | Saddle.com`,
    `${fit.disciplineName} Saddle Fit Guide | Saddle.com`,
  ]
  const title = titleCandidates.find((t) => t.length <= 70) ?? titleCandidates[1]

  const descCandidates = [
    `${fit.disciplineName} saddle fit — key checkpoints, common fit problems, when to refit, and brands known for good ${fit.disciplineName.toLowerCase()} fit.`,
    `How a ${fit.disciplineName.toLowerCase()} saddle should fit horse and rider — checkpoints, fit problems, refit timing, and brand shortlist.`,
  ]
  const description = descCandidates.find((d) => d.length <= 160) ?? descCandidates[1]

  return buildMetadata({
    siteId: 'saddle-com',
    title,
    description,
    path: `/fit/${slug}`,
    type: 'article',
  })
}

export default async function DisciplineFitPage({ params }: FitPageProps) {
  const { slug } = await params
  const fit = getDisciplineFitBySlug(slug)
  if (!fit) notFound()

  const url = `https://saddle.com/fit/${fit.slug}`

  const articleSchema = buildArticleSchema({
    siteId: 'saddle-com',
    title: `${fit.disciplineName} Saddle Fit Guide`,
    description: fit.tagline,
    url,
    imageUrl: '',
    authorName: 'Saddle.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://saddle.com/' },
      { name: 'Saddle Fit', url: 'https://saddle.com/fit' },
      { name: `${fit.disciplineName} Saddle Fit`, url },
    ],
  })

  const faqSchema = buildFAQSchema({ questions: fit.faqs })

  const combinedSchema = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  // Other discipline guides for the "related fit guides" section.
  const relatedFitGuides = DISCIPLINE_FITS.filter((d) => d.slug !== fit.slug).slice(0, 5)

  // Pick the discipline-appropriate "best of" review link to feed the funnel.
  const bestReviewHref =
    fit.group === 'Western' ? '/reviews/best-western-saddles' : '/reviews/best-english-saddles'
  const bestReviewLabel =
    fit.group === 'Western' ? 'Best Western Saddles 2025' : 'Best English Saddles 2025'

  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="saddle-com"
        hero={{
          title: `${fit.disciplineName} Saddle Fit — A Reference Guide`,
          subtitle: fit.tagline,
          category: `${fit.group} Saddle Fit`,
          authorName: 'Saddle.com Editorial',
          authorAvatar: '🐴',
          publishedAt: 'May 2026',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Saddle Fit', href: '/fit' },
          { name: fit.disciplineName, href: `/fit/${fit.slug}` },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Overview', href: '#overview' },
                { label: 'Key Fit Points', href: '#key-fit' },
                { label: 'Horse Conformation', href: '#horse' },
                { label: 'Rider Position', href: '#rider' },
                { label: 'Common Fit Problems', href: '#problems' },
                { label: 'When to Refit', href: '#when' },
                { label: 'Professional Fitter', href: '#fitter' },
                { label: 'Brands for Good Fit', href: '#brands' },
                { label: 'Price Range', href: '#price' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'All Saddle Brands', href: '/brands' },
                { label: bestReviewLabel, href: bestReviewHref },
                { label: 'Saddle Fit Guide (General)', href: '/guides/saddle-fit-guide' },
                { label: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide' },
              ]}
            />
            <CrossPortfolioCard
              currentSite="saddle-com"
              contentType="review"
              variant="sidebar"
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
              source={`fit-${fit.slug}`}
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

          <CalloutBox variant="info" title={`${fit.disciplineName} fit — at a glance`}>
            <p className="m-0">
              <strong>Saddle type:</strong> {fit.saddleType}.{' '}
              <strong>Price range for a correctly-fitted saddle:</strong> {fit.priceRangeForGoodFit.split('.')[0]}.{' '}
              <strong>Refit interval:</strong> at least annually, plus after any major change in the horse&apos;s condition.
            </p>
          </CalloutBox>

          <CalloutBox variant="warning" title="Saddle.com does not fit saddles">
            <p className="m-0">
              This is a reference guide — sourced from cited references and the brand-direct fit notes on our{' '}
              <Link href="/brands" className="text-brand-primary underline">brands</Link> pages. Actual fitting must be
              done by a qualified professional saddler on your horse. Look for a Society of Master Saddlers Qualified
              Saddle Fitter (UK) or a Master Saddlers Association Certified Fitter (US). We do not guarantee specific
              fit or performance outcomes from following this guide.
            </p>
          </CalloutBox>

          <h2 id="overview">Overview</h2>
          <p>{fit.overview}</p>

          <h2 id="key-fit">Key Fit Points</h2>
          <p>
            The fit checkpoints below are the published fundamentals — adapted from the Society of Master Saddlers
            4-point check and the Master Saddlers Association equivalent — applied specifically to {fit.disciplineName.toLowerCase()} work.
          </p>
          <ul>
            {fit.keyFitPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="horse">Horse Conformation Considerations</h2>
          <p>
            Saddle fit is conformation-specific. The same {fit.disciplineName.toLowerCase()} saddle that fits one horse
            beautifully may pinch or bridge on another. The conformation factors that change the fit picture for{' '}
            {fit.disciplineName.toLowerCase()} work specifically:
          </p>
          <ul>
            {fit.horseConformationConsiderations.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="rider">Rider Position Requirements</h2>
          <p>
            A {fit.disciplineName.toLowerCase()} saddle must allow the rider&apos;s position to be correct — too small,
            too large, or wrong-shaped for the rider, the saddle works against the horse even when the horse-side fit
            is good.
          </p>
          <ul>
            {fit.riderPositionRequirements.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="problems">Common Fit Problems</h2>
          <p>
            The fit problems below appear repeatedly in {fit.disciplineName.toLowerCase()} fitting work. Each entry
            lists the signs to look for and the solution a qualified saddler would typically apply.
          </p>
          <div className="space-y-5 my-6">
            {fit.commonFitProblems.map((p, i) => (
              <div
                key={i}
                className="bg-brand-surface border border-brand-border rounded-xl p-5"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  Problem #{i + 1}
                </div>
                <div className="font-display font-bold text-brand-dark text-base mb-3">{p.problem}</div>
                <div className="text-sm text-brand-text-mid mb-3">
                  <strong>Signs:</strong>
                  <ul className="mt-1 mb-0">
                    {p.signs.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-brand-text-mid">
                  <strong>Solution:</strong> {p.solution}
                </div>
              </div>
            ))}
          </div>

          <h2 id="when">When to Have a Saddle Refitted</h2>
          <p>
            Both the Society of Master Saddlers and the Master Saddlers Association recommend an annual fit check as a
            baseline. For {fit.disciplineName.toLowerCase()} work specifically, refit at the following points:
          </p>
          <ul>
            {fit.whenToFit.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h2 id="fitter">Professional Fitter Recommendation</h2>
          <p>{fit.professionalFitterRecommendation}</p>
          <CalloutBox variant="tip" title="How to find a qualified fitter">
            <ul className="mb-0 mt-0">
              <li>
                <strong>UK / EU:</strong> Society of Master Saddlers (SMS) Qualified Saddle Fitter directory —{' '}
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
                <strong>US:</strong> Master Saddlers Association (MSA) Certified Saddle Fitter directory —{' '}
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
                Independent qualified fitters are generally preferable to brand-employed fitters for an unbiased
                assessment — though brand fitters often have deep product knowledge.
              </li>
            </ul>
          </CalloutBox>

          <h2 id="brands">Brands Known for Good {fit.disciplineName} Fit</h2>
          <p>
            The brands below have established reputations for {fit.disciplineName.toLowerCase()} fit specifically —
            drawn from the brand-direct fit notes on our{' '}
            <Link href="/brands" className="text-brand-primary underline">brands hub</Link>. This is a shortlist, not
            a guarantee — the right brand for your horse depends on the horse&apos;s conformation and your fitter&apos;s
            assessment.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 my-5">
            {fit.brandsKnownForGoodFit.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  Brand reference
                </div>
                <div className="font-display font-bold text-brand-dark text-base mb-1.5">{b.name}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{b.knownFor}</div>
                <div className="text-2xs text-brand-primary font-bold mt-3">Read brand notes →</div>
              </Link>
            ))}
          </div>

          <h2 id="price">Price Range for Good Fit</h2>
          <p>{fit.priceRangeForGoodFit}</p>
          <p className="text-xs text-brand-text-light">
            Price is necessary but not sufficient — a $5,000 saddle on the wrong horse is a $5,000 fit problem. Budget
            for the saddle and the qualified fitter; the fitter is the cheaper of the two and the higher-leverage
            spend.
          </p>

          <h2 id="related-fits">Other Discipline Fit Guides</h2>
          <div className="grid sm:grid-cols-2 gap-3 my-4">
            {relatedFitGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/fit/${g.slug}`}
                className="block bg-brand-surface border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors"
              >
                <div className="text-sm font-bold text-brand-dark">{g.disciplineName} Saddle Fit</div>
                <div className="text-xs text-brand-text-light mt-1">{g.saddleType.split('—')[0].trim()}</div>
              </Link>
            ))}
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion
            items={fit.faqs.map((f) => ({
              question: f.question,
              answer: f.answer,
              answerText: f.answer,
            }))}
            includeSchema={false}
          />

          <h2 id="sources">Sources &amp; References</h2>
          <ul className="text-xs text-brand-text-light">
            <li>
              Society of Master Saddlers (UK) — qualified saddler directory and 4-point fit guidance:{' '}
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
              Master Saddlers Association (US) — certified fitter directory and fit guidance:{' '}
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
              Saddle.com brand-direct fit notes:{' '}
              <Link href="/brands" className="text-brand-primary underline">
                /brands
              </Link>{' '}
              (per-brand fit profile drawn from manufacturer disclosures).
            </li>
            <li>
              Saddle.com general saddle-fit reference:{' '}
              <Link href="/guides/saddle-fit-guide" className="text-brand-primary underline">
                /guides/saddle-fit-guide
              </Link>{' '}
              (the cross-discipline 4-point check).
            </li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
