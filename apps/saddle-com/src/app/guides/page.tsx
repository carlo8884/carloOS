import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Horse & Saddle Guides — Fit, Riding, Tack Care | Saddle.com',
  description:
    '24 guides on saddle fit, bridle and bit selection, riding disciplines, tack care, and horse ownership — SMS and FEI criteria throughout.',
  path: '/guides',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://saddle.com/' },
    { name: 'Guides', url: 'https://saddle.com/guides' },
  ],
})

interface GuideEntry {
  slug: string
  title: string
  desc: string
}

const SADDLE_FIT: GuideEntry[] = [
  { slug: 'saddle-fit-guide', title: 'Saddle Fit Guide', desc: 'How to check fit for both horse and rider — tree width, panel contact, balance.' },
  { slug: 'seat-size-guide', title: 'Seat Size Guide', desc: 'Find your correct seat size across English and western saddle brands.' },
  { slug: 'used-saddle-buying-guide', title: 'Buying a Used Saddle', desc: 'Complete inspection checklist — tree integrity, panel condition, billets, stitching.' },
  { slug: 'western-saddle-guide', title: 'Western Saddle Guide', desc: 'Tree fit, gullet width, skirt types, and discipline-specific western saddle selection.' },
]

const TACK_FIT: GuideEntry[] = [
  { slug: 'bridle-fit-guide', title: 'Bridle Fit Guide', desc: 'Crown, browband, noseband, and bit height — a fitting framework for every head shape.' },
  { slug: 'horse-bridle-guide', title: 'Horse Bridle Guide', desc: 'Snaffle, double, and bitless bridle types — structure, use, and fitting.' },
  { slug: 'bit-selection-guide', title: 'Bit Selection Guide', desc: 'Snaffle, pelham, kimberwicke — how bit mechanics translate to rein aids.' },
  { slug: 'stirrup-iron-guide', title: 'Stirrup Iron Guide', desc: 'Safety stirrups, fillis irons, flex stirrups — sizing and safety criteria.' },
  { slug: 'horse-boot-types', title: 'Horse Boot Types', desc: 'Brushing, tendon, bell, polo, and fetlock boots — when each type is appropriate.' },
]

const RIDING: GuideEntry[] = [
  { slug: 'english-riding-guide', title: 'English Riding Guide', desc: 'Hunt seat, dressage, and jumping position fundamentals; equipment overview.' },
  { slug: 'western-riding-guide', title: 'Western Riding Guide', desc: 'Western pleasure, reining, and trail — position, aids, and gear.' },
  { slug: 'dressage-basics-guide', title: 'Dressage Basics Guide', desc: 'The training scale (rhythm through collection), test levels, and judge criteria.' },
  { slug: 'lunging-basics', title: 'Lunging Basics', desc: 'Equipment, circle mechanics, common mistakes, and when lunging helps (and when it does not).' },
]

const TACK_CARE: GuideEntry[] = [
  { slug: 'leather-care-guide', title: 'Leather Care Guide', desc: 'Cleaning, conditioning, and storage — how to extend the life of a quality saddle.' },
  { slug: 'tack-cleaning-schedule', title: 'Tack Cleaning Schedule', desc: 'Weekly, monthly, and seasonal tack maintenance broken into a practical routine.' },
  { slug: 'tack-room-organization', title: 'Tack Room Organization', desc: 'Storage, humidity control, saddle racks, and bridle hooks — the functional tack room.' },
]

const HORSE_CARE: GuideEntry[] = [
  { slug: 'horse-nutrition-guide', title: 'Horse Nutrition Guide', desc: 'Hay quality, concentrates, supplements, and the roughage-first feeding principle.' },
  { slug: 'horse-grooming-guide', title: 'Horse Grooming Guide', desc: 'Tools, sequence, and the seasonal grooming considerations for different coat types.' },
  { slug: 'horse-dentistry-guide', title: 'Horse Dentistry Guide', desc: 'Floating, wolf teeth, EOTRH, and the annual dental exam timeline.' },
  { slug: 'horse-first-aid-guide', title: 'Horse First Aid Guide', desc: 'Colic, wounds, and lameness — when to call the vet and what to do while you wait.' },
  { slug: 'horse-body-condition-scoring', title: 'Body Condition Scoring', desc: 'The Henneke 1–9 scale: where to palpate, what each score means, and target BCS.' },
  { slug: 'horse-trailer-guide', title: 'Horse Trailer Guide', desc: 'Buying a trailer, types (straight-load, slant-load), and safe loading basics.' },
  { slug: 'trailer-loading-guide', title: 'Trailer Loading Guide', desc: 'Positive-reinforcement loading protocol for anxious or reluctant horses.' },
  { slug: 'buying-first-horse', title: 'Buying Your First Horse', desc: 'Pre-purchase exam, realistic budget (including board and vet), and what to look for.' },
]

const SECTIONS = [
  { heading: 'Saddle Fit & Selection', entries: SADDLE_FIT },
  { heading: 'Tack Fitting', entries: TACK_FIT },
  { heading: 'Riding Disciplines', entries: RIDING },
  { heading: 'Tack Care', entries: TACK_CARE },
  { heading: 'Horse Care', entries: HORSE_CARE },
]

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
          }}
        />
        <div className="relative z-10 max-w-content-wide mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-px w-8 bg-brand-accent" aria-hidden="true" />
            <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-accent">
              Reference Guides
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Horse &amp; Saddle Guides
          </h1>
          <p className="text-base lg:text-lg font-light text-white/60 max-w-2xl leading-relaxed">
            24 reference guides on saddle fit, bridle and bit selection, riding disciplines,
            tack care, and horse ownership — written to Society of Master Saddlers and FEI
            criteria.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8 max-w-content-wide mx-auto">
        <StockImage manifestKey="saddle-com:hub-guides" aspect="16:9" variant="wide" priority />
      </div>

      {/* Guide sections */}
      <div className="px-container-sm sm:px-container py-12 max-w-content-wide mx-auto space-y-14">
        {SECTIONS.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
              {section.heading}
              <span className="text-sm font-normal text-brand-text-light ml-3">
                {section.entries.length} {section.entries.length === 1 ? 'guide' : 'guides'}
              </span>
            </h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
              {section.entries.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
                  >
                    <div className="font-display font-bold text-brand-dark text-sm mb-1.5">
                      {g.title}
                    </div>
                    <div className="text-xs text-brand-text-light leading-relaxed">{g.desc}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Email Capture */}
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture
          variant="section"
          siteId="saddle-com"
          title="Free Saddle Buyer's Guide"
          subtitle="Fit, brand comparisons, and market intelligence — every other week."
          ctaText="Get Free Guide"
          source="guides-hub"
          perks={[
            'SMS-criteria fit checks',
            'Market pricing context',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </div>
    </>
  )
}
