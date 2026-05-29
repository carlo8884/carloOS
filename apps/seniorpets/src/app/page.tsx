/**
 * SeniorPetPharmacy Homepage — /
 *
 * Default framing: seniorpetpharmacy.com — the senior pet pharmacy +
 * care library. Sister domains (seniorpetmeds.com, seniorpetproducts.com,
 * seniorpetplace.com, seniorcats.com) all route to this app and are
 * surfaced in the footer.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'
import { AffiliateDisclosure } from '../components'
import { CONDITIONS } from '../data/conditions'
import { MEDICATIONS } from '../data/medications'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Compassionate care for aging pets',
  description:
    'Vet-reviewed guides for senior dogs and cats, trusted medication references, and the pet-insurance options that still cover seniors. SeniorPetPharmacy is the back-half-of-life library for pet owners.',
  path: '/',
  type: 'website',
})

const FEATURED_CONDITIONS = CONDITIONS.slice(0, 6)
const FEATURED_MEDICATIONS = MEDICATIONS.slice(0, 6)

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand-surface px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto text-center">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              The Senior Pet Care Library
            </span>
            <span className="w-6 h-0.5 bg-brand-primary" />
          </div>

          <h1
            className="font-display font-semibold text-brand-dark tracking-tight leading-tight mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
          >
            Compassionate care for{' '}
            <em className="text-brand-primary not-italic">aging pets</em>
          </h1>

          <p className="text-lg text-brand-text-mid leading-relaxed max-w-2xl mx-auto mb-10">
            Vet-reviewed guides and trusted product recommendations for senior
            dogs and cats. Condition overviews you can show your veterinarian,
            medication references in plain English, and the pet-insurance
            options that still cover senior pets.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/conditions"
              className="inline-flex items-center bg-brand-primary text-brand-white font-bold text-sm px-7 py-3.5 rounded-md no-underline hover:bg-brand-primary-light transition-colors"
            >
              Browse Senior Conditions →
            </Link>
            <Link
              href="/medications"
              className="inline-flex items-center border border-brand-border bg-brand-white text-brand-text-dark font-semibold text-sm px-7 py-3.5 rounded-md no-underline hover:border-brand-primary transition-colors"
            >
              Medication Reference
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR §1 (carries over from QC standards) ────────── */}
      <div className="bg-brand-primary-pale border-y border-brand-border px-container sm:px-container-sm py-3.5 flex flex-wrap gap-x-6 gap-y-2 items-center justify-center">
        {[
          '✓ Editorially independent',
          '✓ Vet-reviewed sources cited',
          '✓ Senior-pet specific framing',
          '✓ FTC affiliate disclosures',
        ].map((item) => (
          <span key={item} className="text-xs font-semibold text-brand-primary-dark">
            {item}
          </span>
        ))}
      </div>

      {/* ── AFFILIATE DISCLOSURE (FTC) ───────────────────────────── */}
      <section className="px-container sm:px-container-sm pt-8">
        <div className="max-w-content mx-auto">
          <AffiliateDisclosure variant="banner" />
        </div>
      </section>

      {/* ── THREE COLUMN OVERVIEW ────────────────────────────────── */}
      <section className="px-container sm:px-container-sm pb-section">
        <div className="max-w-content mx-auto grid md:grid-cols-3 gap-5">
          {/* Common conditions */}
          <Link
            href="/conditions"
            className="block bg-brand-white border border-brand-border rounded-lg p-7 no-underline hover:border-brand-primary hover:shadow-card transition-all"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              By condition
            </div>
            <h2 className="font-display font-semibold text-brand-dark text-xl mb-2 leading-snug">
              Common senior conditions
            </h2>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
              Arthritis, kidney disease, cognitive decline, heart disease — the
              30 most common diagnoses for senior dogs and cats, each with
              owner-friendly overviews and recommended products.
            </p>
            <span className="text-sm font-semibold text-brand-primary">
              Browse all conditions →
            </span>
          </Link>

          {/* Recommended medications */}
          <Link
            href="/medications"
            className="block bg-brand-white border border-brand-border rounded-lg p-7 no-underline hover:border-brand-primary hover:shadow-card transition-all"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              By medication
            </div>
            <h2 className="font-display font-semibold text-brand-dark text-xl mb-2 leading-snug">
              Recommended medications
            </h2>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
              Adequan, Galliprant, Vetmedin, methimazole, insulin glargine, and
              the 20 medications most senior pet owners eventually meet. Each
              page links to Chewy Pharmacy for refills.
            </p>
            <span className="text-sm font-semibold text-brand-primary">
              Browse medications →
            </span>
          </Link>

          {/* Find a vet */}
          <Link
            href="/find-a-vet"
            className="block bg-brand-white border border-brand-border rounded-lg p-7 no-underline hover:border-brand-primary hover:shadow-card transition-all"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Geriatric care
            </div>
            <h2 className="font-display font-semibold text-brand-dark text-xl mb-2 leading-snug">
              Find a vet specializing in seniors
            </h2>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
              Senior pets benefit from veterinarians comfortable with
              multi-condition management, palliative care, and quality-of-life
              conversations. Here&apos;s how to find one.
            </p>
            <span className="text-sm font-semibold text-brand-primary">
              How to find a senior-pet vet →
            </span>
          </Link>
        </div>
      </section>

      {/* ── FEATURED CONDITIONS ──────────────────────────────────── */}
      <section className="bg-brand-white border-y border-brand-border px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                  Senior Conditions
                </span>
              </div>
              <h2 className="font-display font-semibold text-brand-dark text-3xl tracking-tight">
                The diagnoses you&apos;re most likely to hear
              </h2>
            </div>
            <Link
              href="/conditions"
              className="text-sm font-bold text-brand-primary no-underline hover:underline"
            >
              All 30 conditions →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_CONDITIONS.map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="block bg-brand-surface border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:-translate-y-0.5 transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
                  {c.species === 'dog' ? 'Senior Dogs' : 'Senior Cats'}
                </div>
                <h3 className="font-display font-semibold text-brand-dark text-lg leading-snug mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-brand-text-light leading-relaxed line-clamp-2">
                  {c.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MEDICATIONS ─────────────────────────────────── */}
      <section className="px-container sm:px-container-sm py-section">
        <div className="max-w-content mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-brand-primary" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                  Medication Reference
                </span>
              </div>
              <h2 className="font-display font-semibold text-brand-dark text-3xl tracking-tight">
                Senior pet medications, explained
              </h2>
            </div>
            <Link
              href="/medications"
              className="text-sm font-bold text-brand-primary no-underline hover:underline"
            >
              All 20 medications →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURED_MEDICATIONS.map((m) => (
              <Link
                key={m.slug}
                href={`/medications/${m.slug}`}
                className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:-translate-y-0.5 transition-all"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
                  {m.drugClass}
                </div>
                <h3 className="font-display font-semibold text-brand-dark text-lg leading-tight mb-2">
                  {m.name}
                </h3>
                <p className="text-sm text-brand-text-light leading-relaxed line-clamp-2">
                  {m.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ─────────────────────────────────────────── */}
      <section className="bg-brand-primary-pale px-container sm:px-container-sm py-section">
        <EmailCapture
          variant="section"
          siteId="seniorpets"
          title="Senior Pet Care Monthly"
          subtitle="One short letter every month — what changed in geriatric vet medicine, a featured condition deep dive, and the senior-pet products our editorial team is watching. Free; unsubscribe anytime."
          ctaText="Subscribe Free"
          source="homepage-section"
          perks={['📨 Once a month', '🧪 Vet-reviewed sources', '🐾 Senior dogs & cats', '🔒 No spam']}
        />
      </section>

      {/* ── DOMAIN FAMILY FOOTER NOTE ────────────────────────────── */}
      <section className="bg-brand-dark px-container sm:px-container-sm py-12">
        <div className="max-w-content mx-auto text-center">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Our domain family
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-2xl mx-auto mb-4">
            The senior pet care library lives across five sister domains. Every
            domain in this family routes to the same vet-reviewed content
            library you&apos;re reading now.
          </p>
          <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap text-sm text-white/80">
            <span>seniorpetpharmacy.com</span>
            <span className="text-white/30">·</span>
            <span>seniorpetmeds.com</span>
            <span className="text-white/30">·</span>
            <span>seniorpetproducts.com</span>
            <span className="text-white/30">·</span>
            <span>seniorpetplace.com</span>
            <span className="text-white/30">·</span>
            <span>seniorcats.com</span>
          </div>
        </div>
      </section>
    </>
  )
}
