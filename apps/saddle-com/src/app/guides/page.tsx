import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

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

const ALL_SADDLE_GUIDE_ITEMS = SECTIONS.flatMap((s) => s.entries)
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse and Saddle Guides',
  numberOfItems: ALL_SADDLE_GUIDE_ITEMS.length,
  itemListElement: ALL_SADDLE_GUIDE_ITEMS.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://saddle.com/guides/${g.slug}`,
  })),
}

const saddleGuidesSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={saddleGuidesSchema} />

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
            criteria. New to the terminology?{' '}
            <Link href="/glossary" className="underline text-white/80 hover:text-white">
              Browse the tack glossary
            </Link>
            .
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

      {/* Tools & Reviews */}
      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide mx-auto">
        <h2 className="font-display font-bold text-brand-dark text-xl mb-2 border-b border-brand-border pb-2">
          Tools &amp; Reviews
        </h2>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
          {[
            { href: "/tools/tree-size-estimator", title: "Tree Size Estimator", desc: "Starting English / Western tree-size estimate from horse type, withers profile, and back length." },
            { href: "/reviews/best-english-saddles", title: "Best English Saddles", desc: "Stubben, Pessoa, Bates, and Collegiate compared by discipline." },
            { href: "/reviews/best-western-saddles", title: "Best Western Saddles", desc: "Circle Y, Billy Cook, and Martin ranked for reining, cutting, barrel, and trail." },
            { href: "/reviews/stubben-saddle-review", title: "Stubben Saddle Review", desc: "Deep dive on the German dressage benchmark — Quick-Change tree and panel construction." },
            { href: "/reviews/pessoa-saddle-review", title: "Pessoa Saddle Review", desc: "Close-contact showjumping geometry from Nelson and Rodrigo Pessoa." },
            { href: "/reviews/collegiate-saddle-review", title: "Collegiate Saddle Review", desc: "The practical entry-level English saddle — adjustable gullet at an accessible price." },
            { href: "/reviews/best-stirrup-irons", title: "Best Stirrup Irons", desc: "Safety stirrups, ergonomic designs, and classic INOX options ranked." },
            { href: "/reviews/best-saddle-pads", title: "Best Saddle Pads", desc: "Shaped, correction, and all-purpose saddle pads compared." },
            { href: "/reviews/best-riding-helmets", title: "Best Riding Helmets", desc: "ASTM/SEI and BETA-certified helmets for English and western disciplines." },
            { href: "/reviews/best-riding-boots", title: "Best Riding Boots", desc: "Tall boots, paddock boots, and half-chaps ranked by discipline and budget." },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary hover:shadow-card-hover transition-all"
              >
                <div className="font-display font-bold text-brand-dark text-sm mb-1.5">{item.title}</div>
                <div className="text-xs text-brand-text-light leading-relaxed">{item.desc}</div>
              </Link>
            </li>
          ))}
        </ul>
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
