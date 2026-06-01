import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Care and Husbandry — Hooves, Pasture, Seasons, and Daily Routine",
  description:
    "Practical horse care and husbandry references: hoof care and the farrier schedule, grooming, blanketing, pasture and fencing, deworming, seasonal care, and transport.",
  path: '/care',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: "Care", url: 'https://horses.com/care' },
  ],
})

const ENTRIES = [
  {
    slug: "hoof-care-basics",
    eyebrow: "Hooves",
    title: "Hoof Care Basics",
    description:
      "Hoof anatomy, the no-foot-no-horse principle, daily care, and what a healthy hoof looks like.",
  },
  {
    slug: "farrier-schedule",
    eyebrow: "Hooves",
    title: "The Farrier Schedule",
    description:
      "Trim and shoeing intervals, seasonal growth, barefoot vs shod, and working with your farrier.",
  },
  {
    slug: "hoof-picking",
    eyebrow: "Hooves",
    title: "Picking Out the Hooves",
    description:
      "How to pick out a horse&apos;s feet safely, what to look for, and how often.",
  },
  {
    slug: "grooming",
    eyebrow: "Daily care",
    title: "Grooming the Horse",
    description:
      "The grooming kit, a step-by-step routine, skin and coat health, and the daily safety check.",
  },
  {
    slug: "blanketing",
    eyebrow: "Seasonal",
    title: "Blanketing Guide",
    description:
      "When a horse needs a rug, choosing a weight, fit and safety, and the case for leaving them bare.",
  },
  {
    slug: "body-clipping",
    eyebrow: "Seasonal",
    title: "Body Clipping",
    description:
      "Why and when to clip, the main clip patterns, technique basics, and post-clip care.",
  },
  {
    slug: "winter-care",
    eyebrow: "Seasonal",
    title: "Winter Care",
    description:
      "Keeping water unfrozen, feeding for warmth, shelter and blanketing, and managing ice and mud.",
  },
  {
    slug: "summer-heat-care",
    eyebrow: "Seasonal",
    title: "Summer Heat Care",
    description:
      "Hydration and electrolytes, recognizing heat stress and anhidrosis, cooling, and adjusting work.",
  },
  {
    slug: "fly-control",
    eyebrow: "Seasonal",
    title: "Fly Control",
    description:
      "Physical barriers, repellents, environmental management, and the diseases flies carry.",
  },
  {
    slug: "pasture-management",
    eyebrow: "Land",
    title: "Pasture Management",
    description:
      "Grazing behavior, rotational grazing, weeds and poisonous plants, soil, and overgrazing.",
  },
  {
    slug: "fencing-safety",
    eyebrow: "Land",
    title: "Fencing and Safety",
    description:
      "Safe fence types, heights and spacing, hazards to avoid, gates, and routine checks.",
  },
  {
    slug: "turnout-vs-stabling",
    eyebrow: "Management",
    title: "Turnout vs Stabling",
    description:
      "The welfare case for movement and forage, when stabling is justified, and finding a balance.",
  },
  {
    slug: "deworming-program",
    eyebrow: "Health routine",
    title: "Deworming Program",
    description:
      "The shift from calendar dosing to fecal-egg-count-guided targeted treatment, and resistance.",
  },
  {
    slug: "trailering",
    eyebrow: "Transport",
    title: "Trailering and Transport",
    description:
      "Trailer safety, loading, travel stress, the head-down principle, and long-haul care.",
  },
]

export default function CareHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Horse Care
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Horse Care &amp; Husbandry
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Practical, evidence-led references on the daily and seasonal care of horses, from hooves and grooming to pasture, parasites, and transport.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&rsaquo;</span>
        <span className="text-brand-text-mid font-medium">Care</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Husbandry references covering the routines that keep a horse healthy and safe. Each guide cites AAEP guidance, extension resources, and the equine veterinary literature.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/care/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored."
          ctaText="Subscribe"
          source="care-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
