import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
  CrossPortfolioCard,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { States, type StateEntry } from '@/data/states'

// ─── Static params (51 state pages, prerendered at build) ─────────────────────

export function generateStaticParams() {
  return States.map((s) => ({ state: s.slug }))
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function findState(slug: string): StateEntry | undefined {
  return States.find((s) => s.slug === slug)
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text
  // Cut at last space before the limit to avoid mid-word truncation.
  const cut = text.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…'
}

// ─── Metadata (per-state SEO) ─────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>
}): Promise<Metadata> {
  const { state: slug } = await params
  const state = findState(slug)
  if (!state) {
    return buildMetadata({
      siteId: 'ferrets-com',
      title: 'State Not Found',
      description: 'The requested state directory page does not exist.',
      path: `/find-a-vet/${slug}`,
      noIndex: true,
    })
  }

  // Per-state description, hard-capped at 160 chars.
  const baseDesc =
    state.ferretLegalNote != null
      ? `Find an exotic-pet vet for your ferret in ${state.name}. Legal-status notes, major-metro coverage, and AEMV/ABVP-ECM search guidance.`
      : `Find an exotic-pet vet for your ferret in ${state.name}. Major-metro coverage, AEMV/ABVP-ECM search guidance, and vetting questions.`
  const description = truncate(baseDesc, 160)

  return buildMetadata({
    siteId: 'ferrets-com',
    title: `Ferret Vets in ${state.name} — Find an Exotic-Pet Vet`,
    description,
    path: `/find-a-vet/${state.slug}`,
    type: 'article',
    category: 'Vet Directory',
  })
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function StateVetDirectoryPage({
  params,
}: {
  params: Promise<{ state: string }>
}) {
  const { state: slug } = await params
  const state = findState(slug)
  if (!state) notFound()

  const pageUrl = `https://ferrets.com/find-a-vet/${state.slug}`

  // ─── FAQ block (state-relevant) ────────────────────────────────────────────
  const faqs: FAQItem[] = [
    {
      question: `Are ferrets legal in ${state.name}?`,
      answer:
        state.ferretLegalNote ??
        `Yes — ${state.name} permits ferrets as pets under standard companion-animal rules. Rabies vaccination is typically required, and local ordinances may layer on registration or licensing requirements. Confirm with your municipality before adopting.`,
    },
    {
      question: `How do I find an exotic-pet vet in ${state.name}?`,
      answer: `Start with the Association of Exotic Mammal Veterinarians (AEMV) find-a-vet directory at aemv.org and filter by ${state.name}. Cross-check against the American Board of Veterinary Practitioners (ABVP) Exotic Companion Mammal specialist list. Then call the clinic and run the seven vetting questions on the Ferrets.com find-a-vet landing page — the goal is a clinic that sees ferrets in volume, not occasionally.`,
    },
    {
      question: `What is the difference between a general-practice vet and an exotic-pet vet?`,
      answer:
        'A general-practice vet is licensed to treat all species but typically trains and practices on cats and dogs. An exotic-pet vet (also called an exotic-mammal or exotic-companion-mammal vet) has additional training and clinical volume in ferrets, rabbits, rodents, reptiles, and birds. For routine ferret vaccinations a general practice can be appropriate; for adrenal disease, insulinoma, anesthesia, or surgery, an exotic-pet vet is the clinically appropriate choice.',
    },
    {
      question: `What should I bring to my ferret's first vet visit in ${state.name}?`,
      answer:
        'A small soft-sided carrier with a familiar blanket, your ferret\'s prior medical records (if any), a list of current medications and supplements, a stool sample if requested, and a written list of symptoms or behavioral changes you have observed. Ferrets are sensitive to temperature and stress in transit — keep the carrier shaded, do not leave it in a hot vehicle, and minimize total travel time where possible.',
    },
  ]

  // ─── Schema ───────────────────────────────────────────────────────────────
  const now = new Date().toISOString()
  const articleSchema = buildArticleSchema({
    siteId: 'ferrets-com',
    title: `Ferret Vets in ${state.name} — Find an Exotic-Pet Vet`,
    description:
      state.ferretLegalNote != null
        ? `How to find an exotic-pet vet for your ferret in ${state.name}, including ${state.name}-specific legal-status notes and major-metro guidance.`
        : `How to find an exotic-pet vet for your ferret in ${state.name}, including major-metro guidance and vetting questions.`,
    url: pageUrl,
    imageUrl: `https://ferrets.com/api/og?title=${encodeURIComponent(
      `Ferret Vets in ${state.name}`,
    )}&site=ferrets-com&category=${encodeURIComponent('Vet Directory')}`,
    authorName: 'Ferrets.com Editorial',
    publishedAt: now,
    modifiedAt: now,
  })

  const faqSchema = buildFAQSchema({
    questions: faqs.map((f) => ({
      question: f.question,
      answer: typeof f.answer === 'string' ? f.answer : (f.answerText ?? ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://ferrets.com' },
      { name: 'Find a Vet', url: 'https://ferrets.com/find-a-vet' },
      { name: state.name, url: pageUrl },
    ],
  })

  const schema = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

  return (
    <>
      <SchemaScript schema={schema} />

      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Find a Vet', href: '/find-a-vet' },
          { name: state.name, href: `/find-a-vet/${state.slug}` },
        ]}
      />

      <div className="px-container-sm sm:px-container py-12 max-w-4xl mx-auto">
        {/* ─── Header ─────────────────────────────────────────────────── */}
        <header className="mb-10">
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            {state.region} · {state.abbr}
          </p>
          <h1
            className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Find an Exotic-Pet Vet for Your Ferret in {state.name}
          </h1>
          <p className="text-lg text-brand-text-mid leading-relaxed">
            Ferret medicine is technically distinct from cat or dog medicine —
            drug dosing, anesthesia tolerance, and the prevalence of adrenal
            and pancreatic disease are all different. This page is a guide for
            owners in {state.name} on how to identify a clinic that genuinely
            treats ferrets, what to ask before the first visit, and which
            national resources to lean on. It is not a list of specific clinic
            recommendations — those are not made on Ferrets.com.
          </p>
        </header>

        {/* ─── TL;DR ──────────────────────────────────────────────────── */}
        <aside
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
          aria-label="TL;DR"
        >
          <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
            TL;DR
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            {state.ferretLegalNote != null
              ? `${state.name} has documented legal restrictions or special circumstances around ferret ownership — read the legal note below before searching. For care, start with the AEMV find-a-vet directory filtered to ${state.name}, cross-check against ABVP-ECM specialists, and call the clinic to confirm ferret volume. ${state.majorCities.length} major metros are covered on this page.`
              : `${state.name} permits ferrets as pets under standard companion-animal rules. Start with the AEMV find-a-vet directory filtered to ${state.name}, cross-check against ABVP-ECM specialists, and call the clinic to confirm ferret volume. The ${state.majorCities.length} major metros below are the most likely places to find a clinic that sees ferrets in clinical volume.`}
          </p>
        </aside>

        {/* ─── Legal note (only if applicable) ────────────────────────── */}
        {state.ferretLegalNote != null && (
          <section
            aria-labelledby="legal"
            className="mb-12 p-6 rounded-xl border-2 border-amber-400/40 bg-amber-50/50"
          >
            <h2
              id="legal"
              className="font-display font-bold text-brand-text-dark mb-3"
              style={{ fontSize: '1.5rem' }}
            >
              Legal status of ferret ownership in {state.name}
            </h2>
            <p className="text-base text-brand-text-mid leading-relaxed m-0">
              {state.ferretLegalNote}
            </p>
          </section>
        )}

        {/* ─── Major metros ───────────────────────────────────────────── */}
        <section aria-labelledby="metros" className="mb-12">
          <h2
            id="metros"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            Major metros in {state.name}
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-6">
            Exotic-pet practices cluster in metro areas — the major metros
            below are the most likely places to find a clinic that sees
            ferrets in clinical volume. Metro-level clinic listings are in
            development; the AEMV directory is the recommended search starting
            point in the meantime.
          </p>
          <ul className="list-none p-0 m-0 grid gap-3" style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          }}>
            {state.majorCities.map((city) => (
              <li
                key={city}
                className="p-4 rounded-md border border-brand-border bg-brand-surface"
              >
                <h3 className="text-base font-bold text-brand-text-dark m-0 mb-1">
                  {city}
                </h3>
                <p className="text-sm text-brand-text-light m-0">
                  Metro-level vet directory in development. Use AEMV
                  find-a-vet filtered to {state.abbr} in the meantime.
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── How to find an exotic-pet vet ──────────────────────────── */}
        <section aria-labelledby="how" className="mb-12">
          <h2
            id="how"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            How to find an exotic-pet vet in {state.name}
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            {state.exoticVetSearchHint}
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            The basic search workflow is the same in every state. Start with
            the{' '}
            <a
              href="https://www.aemv.org/find-a-vet"
              rel="noopener"
              className="text-brand-primary font-medium hover:underline"
            >
              AEMV find-a-vet directory
            </a>{' '}
            and filter by {state.name}. AEMV membership is voluntary, so the
            directory does not include every qualified clinic, but every
            member has self-identified as an exotic-mammal practitioner.
            Cross-check candidates against the American Board of Veterinary
            Practitioners (ABVP) directory of Exotic Companion Mammal
            specialists.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Then call the clinic. Ask how many ferrets they see in an average
            year, whether they have a boarded specialist on staff, what their
            anesthesia protocol is for ferrets, whether they image adrenals
            in-house, and which 24-hour emergency hospital they recommend for
            after-hours ferret care. A clinic that genuinely treats ferrets
            will answer these without hesitation; a clinic that does not will
            either decline to engage or give vague, general-practice answers.
            The full seven-question checklist is on the{' '}
            <Link
              href="/find-a-vet"
              className="text-brand-primary font-medium hover:underline"
            >
              Ferrets.com find-a-vet landing page
            </Link>
            .
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            If you live outside a major metro, plan for a longer drive to a
            specialist. The trade-off — an hour of travel for a vet who has
            seen hundreds of ferrets versus fifteen minutes for one who has
            seen a dozen — is one that experienced ferret owners almost
            always make in favor of distance.
          </p>
        </section>

        {/* ─── National resources ─────────────────────────────────────── */}
        <section aria-labelledby="national" className="mb-12">
          <h2
            id="national"
            className="font-display font-bold text-brand-text-dark mb-4"
            style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}
          >
            National resources
          </h2>
          <ul className="list-disc pl-5 space-y-3 m-0 text-base text-brand-text-mid leading-relaxed">
            <li>
              <a
                href="https://www.aemv.org/find-a-vet"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                Association of Exotic Mammal Veterinarians (AEMV) find-a-vet
              </a>{' '}
              — the primary directory for locating exotic-mammal practitioners
              by location.
            </li>
            <li>
              <a
                href="https://abvp.com/"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                American Board of Veterinary Practitioners (ABVP)
              </a>{' '}
              — directory of board-certified specialists, including the
              Exotic Companion Mammal (ECM) certification track, the highest
              formal credential for ferret medicine.
            </li>
            <li>
              <a
                href="https://www.ferret.org/"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                American Ferret Association (AFA)
              </a>{' '}
              — national owner-and-shelter network with vet contact lists and
              regional rescue referrals.
            </li>
          </ul>
        </section>

        {/* ─── Cross-portfolio funnel to Ferret.com ──────────────────────── */}
        <div className="mb-12">
          <CrossPortfolioCard
            currentSite="ferrets-com"
            contentType="directory"
            variant="sidebar"
          />
        </div>

        {/* ─── Related Ferrets.com hubs ──────────────────────────────────── */}
        <section
          aria-labelledby="related-hubs-vet"
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
        >
          <h2
            id="related-hubs-vet"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.25rem' }}
          >
            Other Ferrets.com directories
          </h2>
          <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm text-brand-text-mid">
            <li>
              <Link
                href="/find-a-vet"
                className="text-brand-primary font-medium hover:underline"
              >
                Vet directory hub &mdash; all states &rarr;
              </Link>
            </li>
            <li>
              <Link
                href={`/states/${state.slug}`}
                className="text-brand-primary font-medium hover:underline"
              >
                Ferret laws in {state.name} &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/adopt"
                className="text-brand-primary font-medium hover:underline"
              >
                Adopting a ferret &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/directory/rescues"
                className="text-brand-primary font-medium hover:underline"
              >
                Ferret rescue directory &rarr;
              </Link>
            </li>
          </ul>
        </section>

        {/* ─── Cross-link to Ferret.com cornerstones ──────────────────── */}
        <section
          aria-labelledby="cornerstones"
          className="mb-12 p-6 rounded-xl border border-brand-border bg-brand-surface"
        >
          <h2
            id="cornerstones"
            className="font-display font-bold text-brand-text-dark mb-3"
            style={{ fontSize: '1.25rem' }}
          >
            Care references on Ferret.com
          </h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Once you have identified a candidate clinic in {state.name}, the
            following Ferret.com cornerstones are useful preparation reading:
          </p>
          <ul className="list-disc pl-5 space-y-2 m-0 text-base text-brand-text-mid leading-relaxed">
            <li>
              <a
                href="https://ferret.com/care/diet-basics"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                Ferret diet basics
              </a>{' '}
              — what to feed, what to avoid, and why ferret nutrition is one
              of the most common topics at a first vet visit.
            </li>
            <li>
              <a
                href="https://ferret.com/health/insulinoma"
                rel="noopener"
                className="text-brand-primary font-medium hover:underline"
              >
                Insulinoma in ferrets
              </a>{' '}
              — clinical reference for the single most common middle-age
              ferret diagnosis, including hypoglycemia first-aid and the
              questions to ask about surgical versus medical management.
            </li>
          </ul>
        </section>

        {/* ─── FAQ ────────────────────────────────────────────────────── */}
        <section aria-labelledby="faq" className="mb-12">
          <h2
            id="faq"
            className="font-display font-bold text-brand-text-dark mb-5"
            style={{ fontSize: '1.5rem' }}
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} includeSchema={false} />
        </section>

        {/* ─── Closing note ───────────────────────────────────────────── */}
        <footer className="text-sm text-brand-text-light leading-relaxed border-t border-brand-border pt-6">
          This page is general information about finding veterinary care for
          ferrets in {state.name}. It is not a referral, an endorsement of any
          specific clinic, or a substitute for individualized advice. Return
          to the{' '}
          <Link
            href="/find-a-vet"
            className="text-brand-primary hover:underline"
          >
            Ferrets.com find-a-vet landing
          </Link>{' '}
          for the full seven-question vetting checklist.
        </footer>
      </div>
    </>
  )
}
