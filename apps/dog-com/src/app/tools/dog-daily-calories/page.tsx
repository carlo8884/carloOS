/**
 * Dog Daily Calorie & Feeding Amount Calculator — /tools/dog-daily-calories
 *
 * Server-rendered hero + intro + methodology context; client-rendered
 * <CalorieCalculator/> child holds the live state and the math.
 *
 * High-intent SEO landing for "how much should I feed my dog" / "dog
 * calorie calculator" queries. Routes existing into the broader
 * nutrition surface (/nutrition/how-much-to-feed, /nutrition/weight-
 * management, /guides/dog-body-condition-score).
 *
 * Trust posture (QC §1, §1.4, §3.3):
 *   - Educational guidance only; the methodology block on the calculator
 *     names that explicitly + routes to a vet conversation for
 *     non-healthy-adult cases.
 *   - Formula and life-stage multipliers cited inline to WSAVA + AAHA.
 *   - No fake "tested by N vets" / no AI vet bylines / no "the only
 *     calculator vets recommend" puffery.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'
import { CalorieCalculator } from './_components/CalorieCalculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Daily Calorie & Feeding Calculator',
  description:
    'Daily calorie target and cup count for your dog by weight, life stage, and activity — using the WSAVA / AAHA RER formula. Educational guidance.',
  path: '/tools/dog-daily-calories',
  type: 'website',
  category: 'Nutrition',
})

export default function Page() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 15% 50%, rgba(232,98,42,0.10) 0%, transparent 55%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-2xs font-semibold tracking-eyebrow uppercase text-white/50 mb-6 flex gap-2 flex-wrap"
          >
            <Link href="/" className="no-underline text-white/50 hover:text-white transition-colors">
              Dog.com
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/tools" className="no-underline text-white/50 hover:text-white transition-colors">
              Tools
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-brand-primary">Calorie calculator</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Nutrition tools · Calorie calculator
              </span>
            </div>
            <h1
              className="font-display font-black text-white tracking-tight leading-[1.02] mb-5"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
            >
              How much should you feed your dog?
            </h1>
            <p className="text-base lg:text-lg font-light text-white/70 leading-relaxed max-w-2xl">
              Daily calorie target by body weight, life stage, and activity
              level — calculated from the same Resting Energy Requirement
              formula the WSAVA Global Nutrition Committee uses. Pair the
              calorie target with the kcal/cup number from your dog&apos;s
              food bag to get a daily cup count.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ────────────────────────────────────────────────── */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <CalorieCalculator />
        </div>
      </section>

      {/* ── CONTEXT + INTERNAL LINKS ──────────────────────────────────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section border-y border-brand-border">
        <div className="mx-auto max-w-content">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              How to read the result
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-text-dark text-3xl tracking-tight mb-5">
            The number is a starting point, not a verdict.
          </h2>
          <div className="prose prose-base max-w-none text-brand-text-mid leading-relaxed space-y-4">
            <p>
              The RER × life-stage × activity equation produces a mean
              estimate. Real-world variation between individual dogs of the
              same weight, breed, and life stage can run ±20% — metabolic
              rate, neuter status timing, hormonal state, microbiome, and
              activity composition all move the actual requirement.
            </p>
            <p>
              The correct way to use the number: feed at the calculated
              calorie target for two to four weeks, then re-score your
              dog&apos;s{' '}
              <Link
                href="/guides/dog-body-condition-score"
                className="text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary"
              >
                body condition
              </Link>{' '}
              (1–9 scale). If condition is steady at 4–5/9, you&apos;re on
              maintenance. If gaining, drop ~10%. If losing, raise ~10%.
              Recheck. Adult dogs hold their weight at fewer calories than
              you&apos;d expect, which is one of the most common reasons
              owner-fed dogs become overweight.
            </p>
            <p>
              <strong className="text-brand-text-dark">Treats and chews count.</strong>{' '}
              Keep treats below 10% of the daily calorie total. The
              remaining 90% is your meal plan. If you train with food,
              consider deducting kibble from meals at the same rate to keep
              the total honest.
            </p>
            <p>
              <strong className="text-brand-text-dark">Puppy guidance is approximate.</strong>{' '}
              Growth rates vary widely by breed and bloodline. Large-breed
              puppies in particular benefit from controlled growth (not
              maximum). For breed-specific feeding guidance, see our{' '}
              <Link
                href="/breeds"
                className="text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary"
              >
                breed risk center
              </Link>
              .
            </p>
            <p>
              <strong className="text-brand-text-dark">When to skip the calculator.</strong>{' '}
              Pregnancy, lactation, illness, post-surgical recovery, severe
              over- or under-condition (BCS &lt; 3 or &gt; 7), and any
              prescription-diet program belong with your veterinarian,
              not with a calorie equation.
            </p>
          </div>

          <div className="mt-10 p-6 bg-brand-white border border-brand-border rounded-md">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
              Related guides
            </div>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[
                { href: '/nutrition/how-much-to-feed',     label: 'How much to feed your dog (deeper-context guide)' },
                { href: '/nutrition/weight-management',    label: 'Weight management — losing or gaining safely' },
                { href: '/guides/dog-body-condition-score', label: 'Dog body condition score (1–9) — visual + hands-on check' },
                { href: '/nutrition/wsava-explained',      label: 'What the WSAVA nutritional guidelines actually say' },
                { href: '/reviews/best-dry-dog-food',      label: 'Best dry dog food — brands compared on manufacturing rigor' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-text-dark no-underline font-semibold hover:text-brand-primary transition-colors inline-flex items-center"
                  >
                    {link.label}
                    <span aria-hidden="true" className="ml-1.5 text-brand-primary">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
