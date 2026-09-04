import type { Metadata } from 'next'
import Link from 'next/link'
import { getSiteConfig } from '@carloOS/config'
import {
  ArticleLayout,
  ArticleByline,
  AffiliateDisclosure,
  EmailCapture,
  FAQAccordion,
  SchemaScript,
  ShopCtas,
  buildFAQSchema,
  buildMetadata,
  combineSchemas,
} from '@carloOS/ui'
import { WhichPetWizard } from './wizard-client'
import { QUESTIONS } from './wizard-logic'

// ─── Metadata ───────────────────────────────────────────────────────────────
// Title 33 chars (under 70); description 129 chars (under 160).

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Which Pet Should I Get? Free Quiz',
  description:
    'Answer 10 lifestyle questions and get personalized pet recommendations. Quiz is ungated — optional first-week starter-list email.',
  path: '/which-pet',
  type: 'website',
  category: 'Decision Wizard',
})

// ─── Schema (WebApplication + Quiz + FAQ + Breadcrumb) ──────────────────────

const PAGE_URL = 'https://dog.com/which-pet'

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Which Pet Should I Get? Quiz',
  url: PAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any (web browser)',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'A 10-question decision wizard that recommends pet species based on living space, schedule, allergies, budget, climate, and experience.',
  author: { '@type': 'Organization', name: 'Dog.com Editorial' },
  publisher: { '@type': 'Organization', name: 'Dog.com', url: 'https://dog.com' },
  isAccessibleForFree: true,
}

// Quiz schema — describes the quiz as an educational resource.
const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Which Pet Should I Get?',
  url: PAGE_URL,
  about: {
    '@type': 'Thing',
    name: 'Pet species selection',
  },
  educationalLevel: 'Beginner',
  learningResourceType: 'Interactive quiz',
  numberOfQuestions: QUESTIONS.length,
  author: { '@type': 'Organization', name: 'Dog.com Editorial' },
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'AVMA Animal Welfare Division — Species Care Guidelines',
      url: 'https://www.avma.org/resources-tools/animal-health-welfare',
      publisher: { '@type': 'Organization', name: 'American Veterinary Medical Association' },
    },
    {
      '@type': 'CreativeWork',
      name: 'ASPCA Pet Care — Species-by-Species Guides',
      url: 'https://www.aspca.org/pet-care',
      publisher: { '@type': 'Organization', name: 'American Society for the Prevention of Cruelty to Animals' },
    },
  ],
}

const FAQS = [
  {
    question: 'How accurate is this "which pet should I get" quiz?',
    answer:
      'The quiz uses ten lifestyle inputs (living space, hours away from home, activity, family composition, allergies, budget, time horizon, climate, experience, and motivation) to score ten candidate species against AVMA Animal Welfare Division and ASPCA species-suitability guidance. It is a starting point, not a substitute for talking to a veterinarian or visiting an animal shelter. Match percentages compare each species against the best-fit species for your specific answers.',
  },
  {
    question: 'What is the best pet for an apartment?',
    answer:
      'For apartments, the highest-scoring species in this wizard are usually freshwater fish, cats, small mammals (rabbits or guinea pigs), and properly-housed lizards or snakes. Dogs can work in apartments but require breed-appropriate exercise. ASPCA apartment-pet guidance recommends prioritizing species whose space and noise needs match the building.',
  },
  {
    question: 'What is the best pet for a family with young kids?',
    answer:
      'For families with kids under five, the wizard favors dogs, cats, freshwater fish, and small mammals (with supervised handling). It scores down reptiles, ferrets, and birds for very young households, in line with ASPCA and CDC guidance on zoonosis and bite risk in households with toddlers.',
  },
  {
    question: 'What is the best pet for people with allergies?',
    answer:
      'For households with confirmed mammalian fur, dander, or feather allergies, the wizard surfaces fish (freshwater and saltwater) and reptiles (lizards and snakes), which produce no mammalian dander or feathers. Allergists generally recommend ruling out dogs, cats, ferrets, small mammals, and birds when respiratory allergies are present.',
  },
  {
    question: 'Does the quiz collect my email or personal information?',
    answer:
      'No. The quiz runs entirely in your browser. No answers are sent to a server, no email is required to see your recommendations, and no personal data is collected by Dog.com to generate those results. The optional first-week starter-list capture on the page is separate from the wizard and is not required to run it.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const allSchemas = combineSchemas(webAppSchema, quizSchema, faqSchema)

// ─── Sister-site canonical URLs (sourced from siteConfigs) ──────────────────

const dogSiteUrl = getSiteConfig('dog-com').theme.siteUrl
const fishSiteUrl = getSiteConfig('fish-com').theme.siteUrl
const lizardSiteUrl = getSiteConfig('lizard-com').theme.siteUrl
const ferretSiteUrl = getSiteConfig('ferret-com').theme.siteUrl
const horsesSiteUrl = getSiteConfig('horses-com').theme.siteUrl

// ─── Static results table — indexed without JS by Google + AI crawlers ──────

const STATIC_PROFILES: Array<{
  persona: string
  topMatches: string
  rationale: string
}> = [
  {
    persona: 'Apartment dweller, full-time office job, no allergies',
    topMatches: 'Cat · Freshwater fish · Small mammal',
    rationale:
      'Low daily handling overhead, contained footprint, and no requirement for outdoor space. ASPCA + AVMA apartment-pet guidance favors these species.',
  },
  {
    persona: 'Family with kids 5–12, suburban house with yard',
    topMatches: 'Dog · Freshwater fish · Small mammal',
    rationale:
      'Dogs and fish are the canonical first-family-pet pairing — fish provide a low-risk introduction and a family dog matches school-age children\'s social capacity.',
  },
  {
    persona: 'Household with confirmed mammalian-dander allergies',
    topMatches: 'Freshwater fish · Reptile (lizard or snake) · Saltwater fish',
    rationale:
      'These species produce no mammalian dander. Reptiles also avoid feather allergens. Allergists generally rule out dogs, cats, ferrets, small mammals, and birds in dander-sensitive households.',
  },
  {
    persona: 'Single adult, work-from-home, very active',
    topMatches: 'Dog · Ferret · Horse',
    rationale:
      'Active species that benefit from the owner being present. Dog leads for most household configurations; ferret suits those who can supervise out-of-cage time; horse only if acreage and experience match.',
  },
  {
    persona: 'Experienced hobbyist, hot/humid climate, $300+/mo budget',
    topMatches: 'Saltwater fish · Reptile (lizard) · Reptile (snake)',
    rationale:
      'Hobby-grade species rewarding to experienced keepers; tropical/desert climates suit many reptile species with minimal climate-control overhead.',
  },
  {
    persona: 'Acreage owner, experienced, $1,000+/mo budget',
    topMatches: 'Horse · Dog · Reptile (lizard)',
    rationale:
      'Acreage unlocks horse keeping; high-energy working dog breeds also thrive here. Reptile suits the same household as a low-overhead companion species.',
  },
  {
    persona: 'First-time owner, kids under 5, modest budget',
    topMatches: 'Freshwater fish · Small mammal · Cat',
    rationale:
      'Low-risk first-pet options that match a learning household. Fish for young children, small mammals for supervised handling, and cats as a low-overhead family-pet starting point.',
  },
  {
    persona: 'Frequently traveling adult, 12+ hours away',
    topMatches: 'Freshwater fish · Reptile (snake) · Reptile (lizard)',
    rationale:
      'Species that tolerate long owner absences with stable environments. Dogs, ferrets, and birds score very low in this scenario.',
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function WhichPetPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      <ArticleLayout
        siteId="dog-com"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Which Pet Should I Get?' },
        ]}
        hero={{
          title: 'Which Pet Should I Get?',
          subtitle:
            'A free 10-question decision wizard. Answer once, get three species ranked against your real lifestyle. The quiz is ungated — optional email for a first-week starter list.',
          category: 'Decision Wizard',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 30, 2026',
          readTime: '3 min',
        }}
      >
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-05-30T00:00:00Z" updatedAt="2026-09-04T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the starter list
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            First-week starter list
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the first-week starter list — crate, food, harness, ID tag, carrier, and
            first-aid — so you can kit a dog-leaning result without re-running the wizard.
            The quiz itself stays ungated. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="First-week starter list"
            subtitle="Email the first-week starter list — crate, food, harness, ID tag, carrier, first-aid. No spam."
            ctaText="Email my first-week starter list"
            source="which-pet-under-hero"
          />
        </div>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-brand-text-mid mb-3">
          Picking the right species — not just the right breed — is the single biggest predictor of whether a pet relationship works. Roughly 6.3 million companion animals enter U.S. shelters each year (ASPCA, 2024 figures); the most common reason cited at intake is a mismatch between owner expectations and species reality.
        </p>
        <p className="text-base leading-relaxed text-brand-text-mid mb-3">
          This wizard asks ten questions about your living space, schedule, allergies, budget, and experience, then surfaces three species ranked against AVMA Animal Welfare Division and ASPCA species-suitability references. The quiz itself is ungated. Your answers never leave your browser.
        </p>
        <p className="text-sm leading-relaxed text-brand-text-light mb-8">
          Built by Dog.com Editorial. Citations: <a href="https://www.avma.org/resources-tools/animal-health-welfare" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">AVMA Animal Welfare Division</a> and <a href="https://www.aspca.org/pet-care" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ASPCA Pet Care guides</a>. No paid placement of any species.
        </p>

        {/* The wizard */}
        <div className="mb-12 not-prose">
          <WhichPetWizard />
        </div>

        {/* Result next-step — for a dog-leaning result, the natural next step is
            narrowing to a breed, then a first-week starter kit. */}
        <section className="mb-12 not-prose">
          <div className="rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Leaning toward a dog?
            </div>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
              If your top match is a dog, the next decision is which breed fits your home
              and schedule. Take the breed-match wizard, then read the full care guide for
              any breed you are considering before you commit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/breeds/match"
                className="inline-block bg-brand-primary text-white font-semibold text-sm px-4 py-2 rounded-md no-underline hover:bg-brand-primary-dark"
              >
                Find your breed match →
              </Link>
              <Link
                href="/breeds"
                className="inline-block border border-brand-border text-brand-dark font-semibold text-sm px-4 py-2 rounded-md no-underline hover:border-brand-primary"
              >
                Browse breed care guides →
              </Link>
            </div>
          </div>
        </section>

        {/* Money path — live amazon-brand search hops (first-week starter kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list, not a species ranking. */}
        <section id="first-week-kit" className="mb-12 not-prose">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
          <div className="mt-4 rounded-xl border border-brand-border bg-brand-white p-5">
            <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Shop a first-week starter kit
            </div>
            <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
              If the wizard leans dog, these Amazon category searches are day-one
              husbandry items — a wire crate with a divider, puppy food, a harness,
              an ID tag / collar, a soft carrier, and a pet first-aid kit. Same hops
              used on the{' '}
              <Link
                href="/tools/new-puppy-checklist"
                className="text-brand-primary no-underline hover:underline"
              >
                new-puppy checklist
              </Link>{' '}
              and the{' '}
              <Link
                href="/tools/is-this-a-dog-emergency"
                className="text-brand-primary no-underline hover:underline"
              >
                emergency-prep tool
              </Link>
              . They are not a ranked product list, not invented inventory, and they
              do not replace meeting a shelter, breeder, or veterinarian. Size the
              crate and harness before you order. Dog.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/wire+dog+crate+with+divider+panel?s=which-pet"
                amazonLabel="Browse crates on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/puppy+food?s=which-pet"
                amazonLabel="Browse puppy food on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/julius+k9+idc+powerharness?s=which-pet"
                amazonLabel="Browse harnesses on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+id+tag+collar?s=which-pet"
                amazonLabel="Browse dog ID tags and collars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+dog+carrier?s=which-pet"
                amazonLabel="Browse soft dog carriers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+first+aid+kit?s=which-pet"
                amazonLabel="Browse pet first-aid kits on Amazon →"
              />
            </div>
          </div>
        </section>

        {/* Static results — SEO + AI crawl visibility */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-2">
            Common Quiz Results by Persona
          </h2>
          <p className="text-sm text-brand-text-light mb-5 leading-relaxed">
            The interactive wizard above scores your specific combination of answers. The table below is the static index — common persona buckets and the species that typically rise to the top for each. Useful when you already know one or two constraints.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-border">
                  <th className="text-left font-semibold text-brand-dark py-3 pr-4 align-bottom">
                    Persona
                  </th>
                  <th className="text-left font-semibold text-brand-dark py-3 pr-4 align-bottom">
                    Top 3 species
                  </th>
                  <th className="text-left font-semibold text-brand-dark py-3 align-bottom">
                    Why
                  </th>
                </tr>
              </thead>
              <tbody>
                {STATIC_PROFILES.map((row) => (
                  <tr key={row.persona} className="border-b border-brand-border">
                    <td className="py-3 pr-4 font-medium text-brand-dark align-top">
                      {row.persona}
                    </td>
                    <td className="py-3 pr-4 text-brand-text-mid align-top">{row.topMatches}</td>
                    <td className="py-3 text-brand-text-mid align-top leading-relaxed">
                      {row.rationale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Where to read more (species-specific portals) */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">
            Where to Read More by Species
          </h2>
          <p className="text-sm text-brand-text-light mb-5 leading-relaxed">
            CarloOS publishes species-specific reference sites. If your top match below has a dedicated site, that is the next-best place to read.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 list-none m-0 p-0">
            <li>
              <a
                href={dogSiteUrl}
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">Dog.com</div>
                <div className="text-xs text-brand-text-light">Breed-by-breed reference for dog owners</div>
              </a>
            </li>
            <li>
              <a
                href={fishSiteUrl}
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">Fish.com</div>
                <div className="text-xs text-brand-text-light">Freshwater + saltwater aquarium reference</div>
              </a>
            </li>
            <li>
              <a
                href={lizardSiteUrl}
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">Lizard.com</div>
                <div className="text-xs text-brand-text-light">Reptile husbandry — lizards and snakes</div>
              </a>
            </li>
            <li>
              <a
                href={ferretSiteUrl}
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">Ferret.com</div>
                <div className="text-xs text-brand-text-light">Care guides for ferret owners</div>
              </a>
            </li>
            <li>
              <a
                href={horsesSiteUrl}
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">Horses.com</div>
                <div className="text-xs text-brand-text-light">Reference for horse owners</div>
              </a>
            </li>
            <li>
              <a
                href="https://www.aspca.org/pet-care"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">
                  ASPCA Pet Care
                </div>
                <div className="text-xs text-brand-text-light">
                  External primary source — cats, small mammals, birds
                </div>
              </a>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">
            Frequently Asked
          </h2>
          <FAQAccordion
            items={FAQS.map((q) => ({ question: q.question, answer: q.answer }))}
            includeSchema={false}
          />
        </section>

        {/* Sources */}
        <section className="mt-12 pt-6 border-t border-brand-border">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-text-mid mb-3">
            Sources
          </h3>
          <ul className="text-xs text-brand-text-light leading-relaxed space-y-2 list-none m-0 p-0">
            <li>
              American Veterinary Medical Association — Animal Welfare Division.{' '}
              <a
                href="https://www.avma.org/resources-tools/animal-health-welfare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Species-care policy and guidance.
              </a>
            </li>
            <li>
              ASPCA — Pet Care.{' '}
              <a
                href="https://www.aspca.org/pet-care"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Species-by-species adoption and care guides.
              </a>
            </li>
            <li>
              ASPCA — Pet Statistics (intake and rehoming data).{' '}
              <a
                href="https://www.aspca.org/helping-people-pets/shelter-intake-and-surrender/pet-statistics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:underline"
              >
                Shelter intake and surrender data.
              </a>
            </li>
          </ul>
        </section>
      </ArticleLayout>
    </>
  )
}
