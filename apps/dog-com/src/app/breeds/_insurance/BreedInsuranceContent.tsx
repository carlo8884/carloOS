/**
 * Dog.com — Breed × pet-insurance editorial spoke (shared renderer).
 *
 * One renderer, many breed pages. Each output is substantive and DISTINCT
 * because it is anchored in that breed's real hereditary cost drivers
 * (breed.insuranceProfile). No two breeds share a risk profile, so no two
 * pages read alike — this is the anti-thin-content discipline (CLAUDE.md §6,
 * QC §1).
 *
 * Rendered by:
 *   - apps/dog-com/src/app/breeds/<static-breed>/insurance/page.tsx (13 breeds)
 *   - apps/dog-com/src/app/breeds/[slug]/insurance/page.tsx (template breeds)
 *
 * Trust (QC §1): "Dog.com Editorial"; conditions framed as PREDISPOSITIONS,
 * not certainties; risk framing sourced to breed-health literature; no
 * scaremongering, no "guaranteed", no superlatives. AffiliateDisclosure sits
 * ABOVE the commercial CTAs.
 *
 * Sections: extractable top answer · top-conditions table · why-timing-matters
 * · what-to-check-on-a-quote · FAQ (FAQAccordion → FAQPage schema) · CTAs ·
 * CrossPortfolioCard. Article + Breadcrumb schema emitted here; FAQPage schema
 * emitted by FAQAccordion.
 */

import Link from 'next/link'
import {
  Breadcrumb,
  FAQAccordion,
  AffiliateDisclosure,
  CrossPortfolioCard,
  RelatedLinks,
  SchemaScript,
  buildArticleSchema,
  combineSchemas,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  getBreedBySlug,
  getBreedInsuranceProfile,
  type Breed,
  type BreedInsuranceProfile,
  type InsuranceRiskTier,
} from '../../../data/breeds'

const SITE_URL = 'https://dog.com'
const REVIEW_CTA = '/reviews/best-pet-insurance'
const FUNNEL_CTA = '/pet-insurance'

/** Plain-English label for the honest risk tier. */
function riskTierLabel(tier: InsuranceRiskTier): string {
  switch (tier) {
    case 'higher':
      return 'higher-than-average insurance interest'
    case 'lower':
      return 'lower-than-average insurance interest'
    default:
      return 'average insurance interest'
  }
}

/** One calibrated, extractable opening paragraph keyed to the breed. */
function topAnswer(breed: Breed, profile: BreedInsuranceProfile): string {
  const lead = profile.topConditions[0]
  const second = profile.topConditions[1]
  const tierPhrase =
    profile.riskTier === 'higher'
      ? `The ${breed.name} is among the breeds where pet insurance tends to matter most`
      : profile.riskTier === 'lower'
        ? `The ${breed.name} is a comparatively lower-risk breed to insure`
        : `The ${breed.name} sits around average for breed-driven insurance interest`
  const drivers =
    lead && second
      ? `${lead.name.toLowerCase()} and ${second.name.toLowerCase()}`
      : lead
        ? lead.name.toLowerCase()
        : 'a handful of hereditary conditions'
  return (
    `${tierPhrase}, because its best-documented hereditary cost drivers — ` +
    `${drivers} — can be common and expensive to treat. These are ` +
    `predispositions, not certainties: not every ${breed.name} develops them. ` +
    `But if you own or are getting a ${breed.name}, enrolling early — before any ` +
    `related sign is on the veterinary record — is the single biggest factor in ` +
    `whether coverage actually helps you, because a pre-existing condition is ` +
    `typically excluded for life.`
  )
}

function buildInsuranceFAQs(
  breed: Breed,
  profile: BreedInsuranceProfile,
): FAQItem[] {
  const signature = profile.topConditions[0]
  const faqs: FAQItem[] = [
    {
      question: `Does pet insurance cover ${signature.name.split('(')[0].trim().toLowerCase()} in ${breed.name}s?`,
      answer:
        `Most comprehensive accident-and-illness policies cover ${signature.name
          .split('(')[0]
          .trim()
          .toLowerCase()} — provided it is not pre-existing. ` +
        `If a ${breed.name} already has the condition (or documented signs of it) before the policy's waiting period ends, ` +
        `it is usually excluded. That is why timing of enrollment matters so much for this breed. Always read the specific policy's ` +
        `hereditary and congenital condition language before buying.`,
      answerText: '',
    },
    {
      question: `How much is pet insurance for a ${breed.name}?`,
      answer:
        `Premiums vary widely by age, location, deductible, reimbursement level, and annual limit, so any single number would be misleading. ` +
        `As a general pattern, breeds with ${riskTierLabel(profile.riskTier)} like the ${breed.name} can carry higher premiums than a low-risk mixed-breed dog, ` +
        `and premiums rise as a dog ages. The most reliable approach is to compare two or three real quotes for your specific ${breed.name}. ` +
        `Our comparison of carriers walks through the trade-offs.`,
      answerText: '',
    },
    {
      question: `Is a ${breed.name} expensive to insure?`,
      answer:
        `Relative to the average dog, the ${breed.name} reflects ${riskTierLabel(profile.riskTier)} — driven by the conditions listed on this page. ` +
        `Whether that translates into a higher premium depends on the insurer's breed rating, your dog's age at enrollment, and the coverage level you choose. ` +
        `The cost that matters most, though, is not the monthly premium but whether a five-figure treatment is covered when you need it — which comes back to enrolling before any sign is on record.`,
      answerText: '',
    },
    {
      question: `When should I insure a ${breed.name}?`,
      answer:
        `As early as the policy allows, ideally as a puppy or immediately after adoption. ${profile.enrollmentNote} ` +
        `Pet insurance never covers pre-existing conditions, so every month before the first relevant veterinary note is a month where more of the breed's risk categories can still be covered.`,
      answerText: '',
    },
  ]
  return faqs
}

export function BreedInsuranceContent({ slug }: { slug: string }) {
  const breed = getBreedBySlug(slug)
  const profile = breed ? getBreedInsuranceProfile(slug) : undefined
  // Callers guard with notFound(); this is defense in depth.
  if (!breed || !profile) return null

  const faqs = buildInsuranceFAQs(breed, profile)
  const pageUrl = `${SITE_URL}/breeds/${breed.slug}/insurance`

  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `Is Pet Insurance Worth It for a ${breed.name}?`,
    description:
      `${breed.name} pet insurance guide: the breed's top hereditary cost drivers, ` +
      `why enrollment timing matters, and what to check on a quote.`,
    url: pageUrl,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-06-11T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  })

  // Dataset schema — this page renders a genuine structured data table of the
  // breed's top hereditary cost drivers, each row containing the condition name,
  // a realistic US treatment cost range, and a coverage-context note. The data
  // is sourced from OFA/CHIC prevalence data, AKC parent-club panels, and the
  // published veterinary literature — original compilation for this breed.
  // Conditions are framed as predispositions, not certainties (QC §1).
  // No DOIs, invented dates, or fabricated credentials.
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: `${breed.name} Hereditary Health Cost Drivers — Pet Insurance Reference`,
    description:
      `Structured reference table of the top hereditary cost drivers for the ${breed.name} breed, ` +
      `compiled from OFA/CHIC prevalence data, AKC parent-club guidance, and published veterinary literature. ` +
      `Each record lists the condition name, a realistic US treatment cost range, and a coverage-context note ` +
      `relevant to pet insurance enrollment. Conditions are predispositions, not certainties.`,
    url: pageUrl,
    creator: {
      '@type': 'Organization',
      name: 'Dog.com Editorial',
      url: 'https://dog.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dog.com',
      url: 'https://dog.com',
    },
    isAccessibleForFree: true,
    variableMeasured: [
      'Hereditary condition name',
      'Typical US treatment cost range (general practice and specialty)',
      'Pet insurance coverage context (pre-existing exclusion risk, chronicity, bilateral)',
    ],
    about: {
      '@type': 'Thing',
      name: `${breed.name} breed hereditary health conditions`,
    },
  }

  const relatedLinks = [
    { label: `${breed.name} Breed Guide`, href: `/breeds/${breed.slug}` },
    { label: 'Best Pet Insurance Compared', href: REVIEW_CTA },
    { label: 'Breed Insurance Hub', href: '/breeds/insurance' },
  ]

  return (
    <>
      <SchemaScript schema={combineSchemas(articleSchema, datasetSchema)} />

      <Breadcrumb
        siteId="dog-com"
        items={[
          { name: 'Home', href: '/' },
          { name: 'Breeds', href: '/breeds' },
          { name: breed.name, href: `/breeds/${breed.slug}` },
          { name: 'Insurance' },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-dark px-container-sm sm:px-container pt-12 pb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-brand-primary/20 text-brand-primary">
            Pet Insurance
          </span>
          <span className="text-2xs font-bold tracking-eyebrow uppercase px-3 py-1 rounded-pill bg-white/10 text-white/70">
            {breed.name}
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-none mb-3"
          style={{ fontSize: 'clamp(30px, 4.5vw, 50px)' }}
        >
          Is Pet Insurance Worth It for a {breed.name}?
        </h1>
        <p className="text-base font-light text-white/70 leading-relaxed max-w-2xl">
          A breed-specific look at the {breed.name}&apos;s documented hereditary
          cost drivers, why enrollment timing matters, and what to check before
          you buy a policy.
        </p>
      </section>

      <div className="px-container-sm sm:px-container py-12">
        <div className="grid lg:grid-cols-[1fr_290px] gap-12">
          <article className="carloOS-article min-w-0">
            {/* Extractable top answer */}
            <section className="bg-brand-surface border-l-4 border-brand-primary rounded-r-lg p-5 mb-8 not-prose">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                The short answer
              </div>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0">
                {topAnswer(breed, profile)}
              </p>
            </section>

            {/* Top hereditary cost drivers — the substantive, distinct core */}
            <h2>The {breed.name}&apos;s Top Hereditary Cost Drivers</h2>
            <p>
              The conditions below are the best-documented breed-specific cost
              drivers for the {breed.name}, drawn from OFA/CHIC prevalence data,
              AKC parent-club priority panels, and the published veterinary
              literature. They are <strong>predispositions</strong> — risks the
              breed carries more often than the average dog — not a prediction
              that any individual {breed.name} will develop them. Treatment cost
              bands are realistic US general-practice and specialty ranges and
              vary by region and severity.
            </p>
            <div className="not-prose overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-brand-border text-sm">
                <thead>
                  <tr className="bg-brand-surface">
                    <th className="text-left font-semibold text-brand-dark px-4 py-2 border-b border-brand-border">
                      Condition
                    </th>
                    <th className="text-left font-semibold text-brand-dark px-4 py-2 border-b border-brand-border">
                      Typical treatment cost
                    </th>
                    <th className="text-left font-semibold text-brand-dark px-4 py-2 border-b border-brand-border">
                      What it means for coverage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profile.topConditions.map((c) => (
                    <tr key={c.name} className="border-b border-brand-border align-top">
                      <td className="px-4 py-3 text-brand-dark font-medium">
                        {c.name}
                      </td>
                      <td className="px-4 py-3 text-brand-dark whitespace-nowrap">
                        {c.typicalCostRange}
                      </td>
                      <td className="px-4 py-3 text-brand-text-mid">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-brand-text-light italic">
              Cost ranges are general US estimates for context, not quotes. Your
              veterinarian and a current insurance quote are the authoritative
              sources for your dog.
            </p>

            {/* Why timing matters — breed-specific */}
            <h2>Why Enrollment Timing Matters for the {breed.name}</h2>
            <p>{profile.enrollmentNote}</p>
            <p>
              The mechanism is the same for every insurer: pet insurance does not
              cover <strong>pre-existing conditions</strong>. If a sign of one of
              the conditions above is recorded in your {breed.name}&apos;s medical
              history before the policy&apos;s waiting period ends, that condition
              — and often related ones — is typically excluded for the life of the
              policy. Enrolling before the first relevant veterinary note is what
              keeps the breed&apos;s biggest cost categories inside coverage.
            </p>

            {/* What to check on a quote — breed-specific */}
            <h2>What to Check on a {breed.name} Insurance Quote</h2>
            <p>
              Premium is only one variable, and rarely the most important one.
              For a {breed.name} specifically, read the policy for:
            </p>
            <ul>
              <li>
                <strong>Hereditary &amp; congenital coverage.</strong> Confirm the
                conditions listed above are covered rather than carved out — some
                budget policies exclude exactly the breed-typical risks you are
                insuring against.
              </li>
              <li>
                <strong>Bilateral &amp; related-condition language.</strong> For
                orthopedic and recurrent conditions, check whether the policy
                treats the second knee, the second site, or a recurrence as a new
                claim or as part of an excluded pre-existing condition.
              </li>
              <li>
                <strong>Annual limit vs. likely cost.</strong> Match the annual or
                per-condition limit to the upper end of the cost ranges above —
                a low cap can be exhausted by a single major claim.
              </li>
              <li>
                <strong>Waiting periods.</strong> Illness, orthopedic, and
                cruciate waiting periods differ by insurer; a sign that appears
                during a waiting period can become pre-existing.
              </li>
              <li>
                <strong>Reimbursement &amp; deductible structure.</strong> Annual
                vs. per-incident deductibles and the reimbursement percentage
                change your real out-of-pocket more than the headline premium.
              </li>
            </ul>

            {/* Affiliate disclosure ABOVE the commercial CTAs (QC §1) */}
            <div className="not-prose my-8">
              <AffiliateDisclosure variant="inline" siteId="dog-com" />
            </div>

            {/* CTAs */}
            <section className="not-prose my-8 border border-brand-border rounded-xl p-6 bg-brand-surface">
              <h2 className="font-display font-black text-brand-dark tracking-tight text-2xl mt-0 mb-2">
                Compare {breed.name} Coverage
              </h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-5">
                The next step is to compare a few real quotes against the
                coverage points above. Our editorial comparison breaks down the
                carriers by how they handle hereditary conditions, limits, and
                waiting periods.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={REVIEW_CTA}
                  className="inline-block bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
                >
                  Compare the best pet insurance →
                </Link>
                <Link
                  href={FUNNEL_CTA}
                  className="inline-block border border-brand-border text-brand-dark text-sm font-semibold px-5 py-2.5 rounded-md no-underline hover:border-brand-primary"
                >
                  See breed coverage guidance →
                </Link>
              </div>
            </section>

            {/* FAQ — FAQAccordion emits FAQPage schema */}
            <h2>Frequently Asked Questions</h2>
            <div className="not-prose">
              <FAQAccordion
                items={faqs.map((f) => ({
                  question: f.question,
                  answer: f.answer,
                  answerText:
                    typeof f.answer === 'string' ? f.answer : f.answerText,
                }))}
                allowMultiple
              />
            </div>

            <p className="text-sm text-brand-text-light mt-8">
              Editorial guidance from <strong>Dog.com Editorial</strong>, drawn
              from cited breed-health references. This is general information, not
              veterinary or financial advice — confirm any condition&apos;s
              relevance with your veterinarian and any coverage detail with the
              insurer.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6 self-start">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                At a Glance
              </div>
              {[
                ['Breed', breed.name],
                ['Size', breed.sizeCategory],
                ['Lifespan', `${breed.lifespanYears[0]}–${breed.lifespanYears[1]} yr`],
                ['Insurance interest', riskTierLabel(profile.riskTier)],
                ['Top cost drivers', String(profile.topConditions.length)],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between gap-3 py-2 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[60%]">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <RelatedLinks title="Related" links={relatedLinks} />

            <CrossPortfolioCard
              currentSite="dog-com"
              contentType="breed"
              variant="sidebar"
            />
          </aside>
        </div>
      </div>
    </>
  )
}
