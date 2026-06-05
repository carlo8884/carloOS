/**
 * Dog.com — Breed-specific feeding & nutrition deep-dive template.
 *
 * One template, 8 per-breed pages. Pulls structured data from
 * src/data/breed-feeding.ts and renders a consistent, breed-specific
 * nutrition guide at /breeds/[slug]/feeding.
 *
 * QC §1 trust-integrity rules enforced here:
 *   - No fake DVM byline (author is "Dog.com Editorial")
 *   - No specific gram/cup quantities — ranges only
 *   - No "we tested" / "we calibrated" / "in our lab" claims
 *   - WSAVA, AAFCO, AAHA cited where applicable
 *   - A vet-consultation CalloutBox is always rendered
 *
 * Cross-linking: each page links to /reviews/best-dry-dog-food,
 * /nutrition/wsava-explained, and the matching /breeds/[slug] hub page.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  ArticleLayout,
  ArticleByline,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildMetadata,
  CalloutBox,
  combineSchemas,
  CrossPortfolioCard,
  EmailCapture,
  FAQAccordion,
  RelatedLinks,
  SchemaScript,
} from '@carloOS/ui'
import {
  BREED_FEEDING_PROFILES,
  getBreedFeedingBySlug,
} from '../../../../data/breed-feeding'

// Static rendering — every slug is known at build time.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BREED_FEEDING_PROFILES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const profile = getBreedFeedingBySlug(slug)
  if (!profile) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed Feeding Guide Not Found',
      description: 'This breed feeding guide does not exist.',
      path: `/breeds/${slug}/feeding`,
    })
  }

  // Title target ≤ 70 chars including " | Dog.com" (10 chars).
  const title = `${profile.breedName} Feeding Guide — Nutrition & Calories | Dog.com`
  const description =
    `Evidence-based ${profile.breedName} feeding guide: calorie ranges, ` +
    `macronutrients, common health considerations, and what to avoid. ` +
    `Cites WSAVA and AAFCO.`

  return buildMetadata({
    siteId: 'dog-com',
    title: title.length > 70 ? title.slice(0, 67) + '...' : title,
    description:
      description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/breeds/${profile.slug}/feeding`,
    type: 'article',
    category: 'Breed Feeding Guide',
  })
}

function range(r: [number, number], unit: string): string {
  if (r[0] === r[1]) return `${r[0]} ${unit}`
  return `${r[0]}–${r[1]} ${unit}`
}

export default async function BreedFeedingPage({ params }: PageProps) {
  const { slug } = await params
  const profile = getBreedFeedingBySlug(slug)
  if (!profile) notFound()

  const pageUrl = `https://dog.com/breeds/${profile.slug}/feeding`

  // Schemas — Article + Breadcrumb + FAQPage combined.
  const articleSchema = buildArticleSchema({
    siteId: 'dog-com',
    title: `${profile.breedName} Feeding & Nutrition Guide`,
    description:
      `Comprehensive ${profile.breedName} feeding guide: calorie ranges by life stage, ` +
      `macronutrient profile, common health considerations, and ingredients to avoid. ` +
      `Sources include WSAVA, AAFCO, and AAHA guidance.`,
    url: pageUrl,
    imageUrl: '',
    authorName: 'Dog.com Editorial',
    publishedAt: '2026-05-28T00:00:00Z',
    modifiedAt: '2026-05-28T00:00:00Z',
  })
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Breeds', url: 'https://dog.com/breeds' },
      {
        name: profile.breedName,
        url: `https://dog.com/breeds/${profile.slug}`,
      },
      { name: 'Feeding', url: pageUrl },
    ],
  })
  const faqSchema = buildFAQSchema({ questions: profile.faqs })
  const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

  const adultCalRange = range(
    profile.caloricNeeds.adultRangeKcalPerDay,
    'kcal/day',
  )
  const adultWeightRange = range(profile.caloricNeeds.weightRangeLb, 'lb')

  return (
    <>
      <SchemaScript schema={combined} />
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: `${profile.breedName} Feeding & Nutrition Guide`,
        subtitle: profile.tagline,
        category: 'Breed Feeding Guide',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Breeds', href: '/breeds' },
        { name: profile.breedName, href: `/breeds/${profile.slug}` },
        {
          name: 'Feeding',
          href: `/breeds/${profile.slug}/feeding`,
        },
      ]}
      sidebar={
        <>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
              At a Glance
            </div>
            {[
              ['Size category', profile.sizeCategory],
              ['Typical adult weight', adultWeightRange],
              ['Adult maintenance', adultCalRange],
              ['Adult meals/day', profile.feedingFrequency.adult.split(';')[0]],
              ['Recommended protein (DM)', '22–28% (typical adult)'],
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

          <RelatedLinks
            title="Related Guides"
            links={[
              {
                label: 'Best Dry Dog Food',
                href: '/reviews/best-dry-dog-food',
              },
              {
                label: 'WSAVA Guidelines Explained',
                href: '/nutrition/wsava-explained',
              },
              {
                label: `${profile.breedName} Breed Guide`,
                href: `/breeds/${profile.slug}`,
              },
            ]}
          />

          <CrossPortfolioCard
            currentSite="dog-com"
            contentType="nutrition"
            variant="sidebar"
          />

          <EmailCapture
            variant="sidebar"
            siteId="dog-com"
            title="Free Dog Health Tips"
            subtitle="Practical guidance weekly."
            source={`breed-feeding-${profile.slug}`}
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-05-28T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />
        {/* MANDATORY: Veterinary consultation callout */}
        <CalloutBox
          variant="warning"
          title="Always discuss your dog's specific nutritional needs with your veterinarian"
        >
          The calorie ranges and recommendations on this page reflect typical
          values for healthy adult {profile.breedName}s synthesized from
          AAFCO, WSAVA, and AAHA guidance. Individual needs vary substantially
          with metabolism, neuter status, activity level, body condition, life
          stage, and disease state. Your veterinarian can confirm the right
          target for your dog based on a physical exam and body condition score.
        </CalloutBox>

        {/* OVERVIEW */}
        <h2>Overview</h2>
        <p>
          The {profile.breedName} has breed-specific feeding considerations
          that responsible owners should understand. {profile.tagline} This
          guide synthesizes published guidance from the{' '}
          <strong>
            World Small Animal Veterinary Association (WSAVA) Global Nutrition
            Committee
          </strong>
          , the <strong>Association of American Feed Control Officials
          (AAFCO)</strong>, and the{' '}
          <strong>American Animal Hospital Association (AAHA) Nutritional
          Assessment Guidelines</strong>, applied to what is documented for
          this breed in the AKC standard, breed-club guidance, and the
          peer-reviewed veterinary literature.
        </p>

        {/* CALORIC NEEDS BY LIFE STAGE */}
        <h2>Caloric Needs by Life Stage</h2>
        <p>
          Daily energy requirements are estimated using the standard{' '}
          <strong>Resting Energy Requirement (RER)</strong> formula
          (RER = 70 × BW<sub>kg</sub><sup>0.75</sup>), multiplied by a life-stage
          and activity factor to estimate{' '}
          <strong>Maintenance Energy Requirement (MER)</strong>. AAHA recommends
          a body-condition-score-based approach in addition to formula-based
          targets — body condition is more reliable than calculation alone.
        </p>

        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse border border-brand-border text-sm">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="text-left px-4 py-2 text-2xs font-bold tracking-eyebrow uppercase">
                  Life Stage
                </th>
                <th className="text-left px-4 py-2 text-2xs font-bold tracking-eyebrow uppercase">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-brand-border">
                <td className="px-4 py-3 font-semibold text-brand-dark align-top w-[28%]">
                  Puppy
                </td>
                <td className="px-4 py-3 text-brand-text-mid">
                  {profile.lifeStageNotes.puppy}
                </td>
              </tr>
              <tr className="border-t border-brand-border bg-brand-surface">
                <td className="px-4 py-3 font-semibold text-brand-dark align-top">
                  Adult
                </td>
                <td className="px-4 py-3 text-brand-text-mid">
                  {profile.lifeStageNotes.adult}
                </td>
              </tr>
              <tr className="border-t border-brand-border">
                <td className="px-4 py-3 font-semibold text-brand-dark align-top">
                  Senior
                </td>
                <td className="px-4 py-3 text-brand-text-mid">
                  {profile.lifeStageNotes.senior}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Adult maintenance range:</strong> A typical neutered adult{' '}
          {profile.breedName} in the {adultWeightRange} range usually needs
          roughly <strong>{adultCalRange}</strong> for maintenance. Active or
          working dogs sit at the higher end; sedentary household dogs sit at
          the lower end. <em>{profile.caloricNeeds.puppyEnergyNote}</em>{' '}
          Senior energy guidance: <em>{profile.caloricNeeds.seniorEnergyNote}</em>
        </p>

        {/* COMMON HEALTH CONCERNS THAT AFFECT DIET */}
        <h2>Common Health Concerns That Affect Diet</h2>
        <p>
          The following breed-specific health considerations have direct
          implications for feeding strategy. None of the items below is a
          substitute for a veterinary diagnosis or prescription — they are
          context for the dietary decisions you and your veterinarian make
          together.
        </p>
        <ul>
          {profile.commonHealthConcerns.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p>
          <strong>Practical dietary considerations</strong> drawn from those
          health risks:
        </p>
        <ul>
          {profile.dietaryConsiderations.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        {/* RECOMMENDED MACRONUTRIENT PROFILE */}
        <h2>Recommended Macronutrient Profile</h2>
        <p>
          AAFCO Dog Food Nutrient Profiles set the minimum macronutrient
          requirements for complete-and-balanced diets sold in the United
          States. Manufacturers may exceed these minimums; the values below
          reflect the typical range we see in well-formulated diets for this
          breed.
        </p>
        <h3>Protein</h3>
        <p>{profile.proteinRecommendation}</p>
        <h3>Fat</h3>
        <p>{profile.fatRecommendation}</p>
        <h3>Allergy considerations</h3>
        <ul>
          {profile.commonAllergies.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <CalloutBox variant="info" title="WSAVA-aligned manufacturer selection">
          The WSAVA Global Nutrition Committee publishes a set of selection
          criteria for evaluating pet food manufacturers — including whether
          they employ a full-time qualified nutritionist (PhD or board-certified
          veterinary nutritionist), conduct AAFCO feeding trials, publish
          research, and own their manufacturing plants. Choosing a
          manufacturer that meets these criteria is one of the highest-impact
          decisions you can make for your dog&apos;s long-term nutrition.
        </CalloutBox>

        {/* FOODS / INGREDIENTS TO AVOID */}
        <h2>Foods and Ingredients to Avoid</h2>
        <p>
          The following list combines breed-specific cautions with the
          universal canine toxins documented by the ASPCA Animal Poison Control
          Center and the AVMA:
        </p>
        <ul>
          {profile.avoidIngredients.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        {/* FEEDING SCHEDULE */}
        <h2>Feeding Schedule</h2>
        <p>
          Meal frequency affects digestion, satiety, blood sugar stability, and
          (in deep-chested breeds) gastric dilatation-volvulus risk. The
          following schedule reflects typical guidance for this breed; your
          veterinarian may recommend adjustments based on individual factors.
        </p>
        <div className="not-prose overflow-x-auto my-6">
          <table className="w-full border-collapse border border-brand-border text-sm">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="text-left px-4 py-2 text-2xs font-bold tracking-eyebrow uppercase">
                  Life Stage
                </th>
                <th className="text-left px-4 py-2 text-2xs font-bold tracking-eyebrow uppercase">
                  Meal Frequency
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-brand-border">
                <td className="px-4 py-3 font-semibold text-brand-dark align-top w-[28%]">
                  Puppy
                </td>
                <td className="px-4 py-3 text-brand-text-mid">
                  {profile.feedingFrequency.puppy}
                </td>
              </tr>
              <tr className="border-t border-brand-border bg-brand-surface">
                <td className="px-4 py-3 font-semibold text-brand-dark align-top">
                  Adult
                </td>
                <td className="px-4 py-3 text-brand-text-mid">
                  {profile.feedingFrequency.adult}
                </td>
              </tr>
              <tr className="border-t border-brand-border">
                <td className="px-4 py-3 font-semibold text-brand-dark align-top">
                  Senior
                </td>
                <td className="px-4 py-3 text-brand-text-mid">
                  {profile.feedingFrequency.senior}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Recommended food types:</strong>
        </p>
        <ul>
          {profile.recommendedFoodTypes.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* WEIGHT MANAGEMENT */}
        <h2>Weight Management</h2>
        <p>{profile.weightManagementNotes}</p>
        <p>
          The <strong>WSAVA 9-point Body Condition Score (BCS)</strong> system
          is the standard tool for assessing body condition. Ideal is{' '}
          <strong>BCS 4–5/9</strong>: ribs easily palpable with a thin fat
          cover, a visible waist when viewed from above, and a clear abdominal
          tuck when viewed from the side. AAHA recommends a nutritional
          assessment — including body condition score — at every veterinary
          visit. Body condition is a more reliable target than scale weight or
          the feeding chart printed on a food bag.
        </p>

        {/* FAQs */}
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={profile.faqs.map((f) => ({
            question: f.question,
            answer: f.answer,
          }))}
          includeSchema={false}
        />

        {/* Sources */}
        <h2>Sources</h2>
        <ul>
          <li>
            WSAVA Global Nutrition Committee. <em>Recommendations on Selecting Pet Foods</em> and <em>Nutritional Assessment Guidelines</em>.
            wsava.org/global-guidelines/global-nutrition-guidelines.
          </li>
          <li>
            AAFCO. <em>Dog Food Nutrient Profiles</em>. Association of American Feed Control Officials Official Publication (current edition).
          </li>
          <li>
            AAHA. <em>Nutritional Assessment Guidelines for Dogs and Cats</em>. American Animal Hospital Association.
          </li>
          <li>
            FDA Center for Veterinary Medicine. <em>Investigation into Potential Link between Certain Diets and Canine Dilated Cardiomyopathy</em> (ongoing since 2018).
          </li>
          <li>
            ASPCA Animal Poison Control Center. <em>People Foods to Avoid Feeding Your Pets</em>.
          </li>
        </ul>
      </div>
    </ArticleLayout>
    </>
  )
}
