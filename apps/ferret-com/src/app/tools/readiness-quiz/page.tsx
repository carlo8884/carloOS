import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  CrossPortfolioCard,
} from '@carloOS/ui'
import Quiz from './Quiz'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Is a Ferret Right for Me? Readiness Quiz | Ferret.com',
  description:
    'Ten honest questions on legality, time, budget, housing, and commitment. Get a calibrated score and plain-English next steps for prospective ferret owners.',
  path: '/tools/readiness-quiz',
})

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ferret.com', url: 'https://ferret.com/' },
  { name: 'Tools', url: 'https://ferret.com/tools' },
  { name: 'Readiness Quiz', url: 'https://ferret.com/tools/readiness-quiz' },
])

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ferret Ownership Readiness Quiz',
  description:
    'A scored self-assessment quiz covering legality, time, budget, housing, other pets, odor tolerance, vet access, and long-term commitment for prospective ferret owners.',
  url: 'https://ferret.com/tools/readiness-quiz',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

const combinedSchema = combineSchemas(breadcrumbSchema, appSchema)

export default function ReadinessQuizPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />

      <section className="bg-brand-dark px-container-sm sm:px-container py-section relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(110, 80, 50, 0.5) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Calculators &amp; Tools</span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-none mb-5"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            Is a ferret the right animal for you?
          </h1>
          <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
            Ten honest questions about legality, daily time, budget, housing, and long-term commitment.
            The quiz scores your answers and returns a plain-English readiness assessment with relevant
            next steps.
          </p>
        </div>
      </section>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Ferret.com</Link>
        <span>&#8250;</span>
        <Link href="/tools" className="hover:text-brand-primary no-underline">Tools</Link>
        <span>&#8250;</span>
        <span className="text-brand-text-mid font-medium">Readiness Quiz</span>
      </nav>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl mb-8">
          <p className="text-base leading-relaxed text-brand-text-mid">
            Ferret ownership suits a specific kind of household: one with daily time for supervised
            out-of-cage play, a housing situation that allows the animal, access to an exotic-animal
            veterinarian, and a realistic picture of what the first serious illness will cost. This
            quiz surfaces those factors honestly. All ten questions apply equally whether you are
            considering your first ferret or your fifth.
          </p>
        </div>

        <div className="max-w-2xl">
          <Quiz />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <div className="rounded-lg border border-brand-border bg-brand-primary-pale/30 p-6 sm:p-7">
            <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Scored a strong fit?</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-brand-text-dark">
              Get the day-one essentials ready
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">
              If your result points toward bringing a ferret home, the next practical step is having the
              core setup in place before arrival. The ferret starter essentials list covers what a new
              ferret genuinely needs on day one — cage, bedding, litter, food and water, and a carrier.
              Still on the fence? The{' '}
              <Link href="/ownership/cost-of-owning-a-ferret" className="text-brand-primary underline-offset-2 hover:underline">
                cost guide
              </Link>{' '}
              and{' '}
              <Link href="/ownership/adoption-vs-buying" className="text-brand-primary underline-offset-2 hover:underline">
                adoption vs. buying
              </Link>{' '}
              are the better next reads.
            </p>
            <p className="mt-3 text-2xs leading-relaxed text-brand-text-light">
              The essentials page includes affiliate links; we may earn a commission at no extra cost to
              you, and we never accept payment for favorable placement.{' '}
              <Link href="/disclosure" className="font-medium text-brand-primary underline-offset-2 hover:underline">
                Disclosure
              </Link>.
            </p>
            <Link
              href="/ferret-starter-kit"
              className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-brand-primary-dark"
            >
              See the ferret starter essentials
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <div className="max-w-2xl">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-text-dark">What the quiz covers</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The ten questions address the factors that most commonly determine whether ferret ownership
            goes well or poorly: legal status in your location, the daily time commitment (ferrets
            need at least 3-4 hours of out-of-cage time per day), compatibility with existing pets,
            setup and ongoing costs, ability to fund a veterinary emergency, odor and scent
            tolerance, housing stability, proximity to an exotics-experienced vet, and commitment
            horizon. Each is weighted by how frequently it drives rehoming or animal welfare problems.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            Legality is a hard constraint worth checking first. Ferrets are illegal to keep in
            California and Hawaii, banned in New York City, and restricted or banned in a number of
            other cities and counties in the US and abroad. See the{' '}
            <Link href="/ownership/ferret-legality-by-state" className="text-brand-primary underline-offset-2 hover:underline">
              ferret legality by state
            </Link>{' '}
            reference before anything else.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The financial picture is the other factor most people underestimate. The up-front cost
            is real but manageable. The harder part is the emergency fund: adrenal disease,
            insulinoma, and gastrointestinal blockages are common in pet ferrets, and treatment
            is not optional once they appear. The{' '}
            <Link href="/ownership/cost-of-owning-a-ferret" className="text-brand-primary underline-offset-2 hover:underline">
              cost of owning a ferret
            </Link>{' '}
            guide and the{' '}
            <Link href="/tools/cost-calculator" className="text-brand-primary underline-offset-2 hover:underline">
              cost calculator
            </Link>{' '}
            give you a concrete number to plan against.
          </p>

          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-brand-text-dark">How to use your result</h2>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            The quiz returns one of four readiness tiers: <strong>Strong fit</strong>, <strong>Fit
            with preparation</strong>, <strong>Not quite yet</strong>, or <strong>Significant barriers
            present</strong>. Each tier comes with a brief explanation and targeted next steps. The
            result is a starting point for honest self-assessment, not a verdict. Circumstances change
            and the quiz can be retaken as they do.
          </p>
          <p className="mb-4 text-base leading-relaxed text-brand-text-mid">
            If you are deciding between adopting and buying, the{' '}
            <Link href="/ownership/adoption-vs-buying" className="text-brand-primary underline-offset-2 hover:underline">
              adoption vs. buying
            </Link>{' '}
            guide walks through both paths. Shelter ferrets are often older animals surrendered by
            keepers whose circumstances changed; they arrive with personality and history, and adoption
            fees are almost always lower than breeder prices.
          </p>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="max-w-2xl">
          <EmailCapture
            siteId="ferret-com"
            variant="inline"
            title="Ferret.com keeper letter"
            subtitle="Ferret care references and tool updates. No spam."
            source="tools-readiness-quiz"
          />
        </div>
      </section>

      <CrossPortfolioCard currentSite="ferret-com" contentType="tool" variant="footer" />
    </>
  )
}
