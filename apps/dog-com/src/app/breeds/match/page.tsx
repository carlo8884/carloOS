import type { Metadata } from 'next'
import {
  ArticleLayout,
  ArticleByline,
  FAQAccordion,
  SchemaScript,
  buildFAQSchema,
  buildMetadata,
  combineSchemas,
} from '@carloOS/ui'
import Link from 'next/link'
import { BreedMatchWizard } from './wizard-client'
import { QUESTIONS, MATCHABLE_BREED_COUNT } from './wizard-logic'

// ─── Metadata ───────────────────────────────────────────────────────────────
// Title 39 chars + suffix (under 70); description under 160.

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Breed Match — Which Breed Fits You?',
  description:
    'Answer 7 quick questions about your home and lifestyle, get your top 3 dog breed matches with honest trade-offs. No email required.',
  path: '/breeds/match',
  type: 'website',
  category: 'Decision Wizard',
})

// ─── Schema (WebApplication + Quiz + FAQ + Breadcrumb) ──────────────────────

const PAGE_URL = 'https://dog.com/breeds/match'

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dog Breed Match Quiz',
  url: PAGE_URL,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any (web browser)',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'A 7-question decision wizard that recommends dog breeds based on home type, daily time, experience, activity level, household, grooming tolerance, and noise tolerance.',
  author: { '@type': 'Organization', name: 'Dog.com Editorial' },
  publisher: { '@type': 'Organization', name: 'Dog.com', url: 'https://dog.com' },
  isAccessibleForFree: true,
}

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'Quiz',
  name: 'Which Dog Breed Fits You?',
  url: PAGE_URL,
  about: { '@type': 'Thing', name: 'Dog breed selection' },
  educationalLevel: 'Beginner',
  learningResourceType: 'Interactive quiz',
  numberOfQuestions: QUESTIONS.length,
  author: { '@type': 'Organization', name: 'Dog.com Editorial' },
  citation: [
    {
      '@type': 'CreativeWork',
      name: 'American Kennel Club — Breed Standards and Breed Selector',
      url: 'https://www.akc.org/dog-breeds/',
      publisher: { '@type': 'Organization', name: 'American Kennel Club' },
    },
    {
      '@type': 'CreativeWork',
      name: 'ASPCA — Choosing and Caring for a Dog',
      url: 'https://www.aspca.org/pet-care/dog-care',
      publisher: { '@type': 'Organization', name: 'American Society for the Prevention of Cruelty to Animals' },
    },
  ],
}

const FAQS = [
  {
    question: 'How does the dog breed match quiz work?',
    answer:
      'The quiz asks seven questions about your home type, how much time you have each day, your dog experience, your activity level, who shares your home, your grooming tolerance, and your noise tolerance. It then scores every breed in the Dog.com database against your answers using documented breed attributes (size, energy, shedding, grooming, kid- and dog-friendliness, and first-time-owner suitability) plus AKC and ASPCA owner-suitability guidance. Match percentages are relative to the best-fit breed for your specific answers, not an absolute score.',
  },
  {
    question: 'What is the best dog breed for a first-time owner in an apartment?',
    answer:
      'For first-time owners in apartments, the quiz tends to surface smaller, lower-energy, lower-shedding breeds that are documented as first-time-owner friendly. The exact top three depend on your other answers, especially how much daily time you have and your noise tolerance. The results page spells out the trade-offs for each breed so you can decide with full information.',
  },
  {
    question: 'Does the quiz require my email or store my answers?',
    answer:
      'No. The quiz runs entirely in your browser. No answers are sent to a server, no email is required, and no personal data is collected by Dog.com to generate your breed matches.',
  },
  {
    question: 'Is this quiz a substitute for meeting a breeder or rescue?',
    answer:
      'No. It is a research starting point. Every dog is an individual, and temperament varies within a breed. Always meet the specific dog, ask about health testing and parentage, and talk to a reputable breeder, rescue, or shelter before committing.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const allSchemas = combineSchemas(webAppSchema, quizSchema, faqSchema)

// ─── Static persona index — indexed without JS by Google + AI crawlers ──────

const STATIC_PROFILES: Array<{ persona: string; whatToLookFor: string }> = [
  {
    persona: 'First-time owner, apartment, limited daily time',
    whatToLookFor:
      'Smaller, lower-energy, lower-shedding breeds flagged as first-time-owner friendly. Prioritize calm temperament and modest exercise needs over size or working drive.',
  },
  {
    persona: 'Active household, house with a yard, kids',
    whatToLookFor:
      'Medium-to-large breeds documented as good with children, with moderate-to-high energy that matches an active family routine and tolerates daily play.',
  },
  {
    persona: 'Experienced owner, rural property, lots of time',
    whatToLookFor:
      'Higher-energy working and sporting breeds that need space, exercise, and a confident handler — breeds that are rewarding but less forgiving of beginner mistakes.',
  },
  {
    persona: 'Quiet home, shared walls, low grooming tolerance',
    whatToLookFor:
      'Lower-shedding, lower-grooming breeds that are not among the most vocal groups. Avoid heavy shedders and notably alert or watchful breeds.',
  },
  {
    persona: 'Multi-dog household adding a second dog',
    whatToLookFor:
      'Breeds documented as good with other dogs to ease introductions, weighted against your space, time, and activity level for the day-to-day fit.',
  },
]

// ─── Page ───────────────────────────────────────────────────────────────────

export default function BreedMatchPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />

      <ArticleLayout
        siteId="dog-com"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breeds', href: '/breeds' },
          { name: 'Breed Match' },
        ]}
        hero={{
          title: 'Which Dog Breed Fits You?',
          subtitle:
            'A free 7-question wizard. Answer once and get three dog breeds ranked against your real home, schedule, and experience — with the trade-offs spelled out. No email, no signup.',
          category: 'Decision Wizard',
          authorName: 'Dog.com Editorial',
          publishedAt: 'June 7, 2026',
          readTime: '3 min',
        }}
      >
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2026-06-07T00:00:00Z" updatedAt="2026-06-07T00:00:00Z" reviewedBy="Editorial team" />

        {/* Intro */}
        <p className="text-lg leading-relaxed text-brand-text-mid mb-3">
          The single biggest predictor of a happy dog relationship is choosing a breed whose needs match your real life — not the breed you saw in a movie. Energy level, size, grooming, and tolerance for noise are where most mismatches happen.
        </p>
        <p className="text-base leading-relaxed text-brand-text-mid mb-3">
          This wizard scores {MATCHABLE_BREED_COUNT} breeds in the Dog.com database against seven questions about your home, time, experience, activity, household, grooming tolerance, and noise tolerance. Each result links straight to that breed&apos;s full profile so you can dig deeper. There is no email gate, and your answers never leave your browser.
        </p>
        <p className="text-sm leading-relaxed text-brand-text-light mb-8">
          Built by Dog.com Editorial. Suitability framing follows{' '}
          <a href="https://www.akc.org/dog-breeds/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">AKC breed standards</a>{' '}and{' '}
          <a href="https://www.aspca.org/pet-care/dog-care" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">ASPCA dog-care guidance</a>. No paid placement of any breed.
        </p>

        {/* The wizard */}
        <div className="mb-12 not-prose">
          <BreedMatchWizard />
        </div>

        {/* Static persona index — SEO + AI crawl visibility */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-2">
            What to Look For by Situation
          </h2>
          <p className="text-sm text-brand-text-light mb-5 leading-relaxed">
            The interactive wizard above scores your exact combination of answers. The table below is the static guide — common owner situations and the breed traits that usually rise to the top for each.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-border">
                  <th className="text-left font-semibold text-brand-dark py-3 pr-4 align-bottom">
                    Your situation
                  </th>
                  <th className="text-left font-semibold text-brand-dark py-3 align-bottom">
                    What to look for
                  </th>
                </tr>
              </thead>
              <tbody>
                {STATIC_PROFILES.map((row) => (
                  <tr key={row.persona} className="border-b border-brand-border">
                    <td className="py-3 pr-4 font-medium text-brand-dark align-top">
                      {row.persona}
                    </td>
                    <td className="py-3 text-brand-text-mid align-top leading-relaxed">
                      {row.whatToLookFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cross-links to related tools + hub */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-3">
            Keep Exploring
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 list-none m-0 p-0">
            <li>
              <Link
                href="/breeds"
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">All Dog Breeds</div>
                <div className="text-xs text-brand-text-light">Browse the full breed library by group, size, and energy</div>
              </Link>
            </li>
            <li>
              <Link
                href="/which-pet"
                className="block p-4 bg-brand-surface border border-brand-border rounded-lg no-underline hover:border-brand-primary transition-colors duration-150"
              >
                <div className="font-semibold text-brand-dark text-base mb-1">Which Pet Should I Get?</div>
                <div className="text-xs text-brand-text-light">Not sure a dog is right? Compare across species first</div>
              </Link>
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
              American Kennel Club — Breed Standards.{' '}
              <a href="https://www.akc.org/dog-breeds/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                Breed-by-breed standards and selector guidance.
              </a>
            </li>
            <li>
              ASPCA — Dog Care.{' '}
              <a href="https://www.aspca.org/pet-care/dog-care" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                Choosing and caring for a dog.
              </a>
            </li>
          </ul>
        </section>
      </ArticleLayout>
    </>
  )
}
