import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Horse & Saddle Guides — Fit, Riding, Tack Care | Saddle.com',
  description:
    '70+ guides on saddle fit and construction, tack, rider gear, leather care, buying, brands, and riding disciplines — SMS and FEI criteria throughout.',
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

const SADDLE_TYPES: GuideEntry[] = [
  { slug: 'saddle-tree-types', title: 'Saddle Tree Types', desc: 'Wood-spring, laminate, synthetic, adjustable, and treeless trees — the skeleton that decides fit.' },
  { slug: 'saddle-flocking-guide', title: 'Saddle Flocking Guide', desc: 'Wool, foam, and air panels compared — feel, maintenance, and reflock intervals.' },
  { slug: 'saddle-panel-types', title: 'Saddle Panel Types', desc: 'Full, short, K, trapezius, and gusseted panels — shaping the bearing surface.' },
  { slug: 'monoflap-vs-double-flap-saddles', title: 'Monoflap vs Double-Flap', desc: 'Single-flap closeness against conventional billet flexibility — by discipline.' },
  { slug: 'close-contact-vs-all-purpose', title: 'Close Contact vs All-Purpose', desc: 'English saddle styles — flap angle, seat depth, and which discipline each suits.' },
  { slug: 'half-tree-treeless-saddles', title: 'Treeless & Flex-Tree Saddles', desc: 'Treeless, half-tree, and flex-tree designs — load distribution and the honest trade-offs.' },
  { slug: 'gullet-plate-guide', title: 'Gullet Plate Guide', desc: 'Adjustable gullet plates — how they change width and what they cannot fix.' },
  { slug: 'saddle-anatomy-glossary', title: 'Saddle Anatomy Glossary', desc: 'Pommel to billets, gullet to tree points — the vocabulary of the saddle.' },
]

const TACK_FIT: GuideEntry[] = [
  { slug: 'bridle-fit-guide', title: 'Bridle Fit Guide', desc: 'Crown, browband, noseband, and bit height — a fitting framework for every head shape.' },
  { slug: 'horse-bridle-guide', title: 'Horse Bridle Guide', desc: 'Snaffle, double, and bitless bridle types — structure, use, and fitting.' },
  { slug: 'bit-selection-guide', title: 'Bit Selection Guide', desc: 'Snaffle, pelham, kimberwicke — how bit mechanics translate to rein aids.' },
  { slug: 'bit-materials-guide', title: 'Bit Materials Guide', desc: 'Stainless, copper, sweet iron, and synthetics — how metal affects acceptance.' },
  { slug: 'double-bridle-guide', title: 'Double Bridle Guide', desc: 'Bradoon and Weymouth, the curb chain, and four reins — for upper-level dressage.' },
  { slug: 'hackamore-bitless-guide', title: 'Hackamore & Bitless Guide', desc: 'Sidepull, cross-under, bosal, and mechanical hackamore — pressure points and action.' },
  { slug: 'stirrup-iron-guide', title: 'Stirrup Iron Guide', desc: 'Safety stirrups, fillis irons, flex stirrups — sizing and safety criteria.' },
  { slug: 'stirrup-leathers-guide', title: 'Stirrup Leathers Guide', desc: 'Standard, nylon-lined, and webbers — stretch, sizing, and safety inspection.' },
  { slug: 'girth-types-guide', title: 'Girth Types Guide', desc: 'Anatomic, stud-guard, dressage, and western cinches — materials and shapes.' },
  { slug: 'girth-fit-guide', title: 'Girth Fit Guide', desc: 'Length, billet placement, elbow clearance, and preventing girth galls.' },
  { slug: 'saddle-pad-materials', title: 'Saddle Pad Materials', desc: 'Cotton, wool felt, sheepskin, foam, and gel — and what a pad cannot fix.' },
  { slug: 'half-pad-guide', title: 'Half Pad Guide', desc: 'Sheepskin, riser, and shimmable pads — legitimate uses and the over-correction risk.' },
  { slug: 'breastplate-martingale-guide', title: 'Breastplate & Martingale Guide', desc: 'Running, standing, bib, and Irish martingales plus breastplate types and fit.' },
  { slug: 'reins-types-guide', title: 'Reins Types Guide', desc: 'Plain, laced, rubber, web, and western split and mecate reins — grip and feel.' },
  { slug: 'horse-boot-types', title: 'Horse Boot Types', desc: 'Brushing, tendon, bell, polo, and fetlock boots — when each type is appropriate.' },
]

const RIDER_GEAR: GuideEntry[] = [
  { slug: 'riding-helmet-safety-standards', title: 'Helmet Safety Standards', desc: 'ASTM/SEI, PAS 015, VG1, Snell, and MIPS — what each certification covers.' },
  { slug: 'helmet-fit-guide', title: 'Helmet Fit Guide', desc: 'Sizing, head shape, harness, and the shake test that confirms a helmet stays on.' },
  { slug: 'tall-boots-vs-paddock-boots', title: 'Tall Boots vs Paddock Boots', desc: 'Field, dress, paddock, and western boots — when each is correct and how they fit.' },
  { slug: 'breeches-fabric-guide', title: 'Breeches Fabric Guide', desc: 'Full-seat vs knee-patch, silicone grip, and four-way-stretch fabrics by discipline.' },
  { slug: 'riding-gloves-guide', title: 'Riding Gloves Guide', desc: 'Leather, synthetic, mesh, and winter gloves — grip and feel through the rein.' },
  { slug: 'body-protector-guide', title: 'Body Protector & Air Vest Guide', desc: 'BETA levels, foam protectors, and air vests — torso protection for jumping and eventing.' },
  { slug: 'spurs-guide', title: 'Spurs Guide', desc: 'Neck length, end types, and competition rules — refinement, not force.' },
  { slug: 'show-attire-guide', title: 'Show Attire Guide', desc: 'Dressage, hunter, jumper, and western turnout — the current rules by discipline.' },
]

const DISCIPLINE_TACK: GuideEntry[] = [
  { slug: 'dressage-tack-guide', title: 'Dressage Tack Guide', desc: 'Dressage saddle, snaffle and double bridles, legal bits, and FEI-aligned equipment.' },
  { slug: 'show-jumping-tack-guide', title: 'Show Jumping Tack Guide', desc: 'Close-contact saddles, bits, breastplates, studs, and protective boots.' },
  { slug: 'western-tack-guide', title: 'Western Tack Guide', desc: 'Western saddle, headstalls and bosals, curb bits, rigging, and cinches.' },
  { slug: 'eventing-tack-guide', title: 'Eventing Tack Guide', desc: 'Three phases, three setups — dressage, cross-country, and show jumping, with safety gear.' },
  { slug: 'trail-riding-gear', title: 'Trail Riding Gear', desc: 'Comfortable saddles, secure tack, hoof protection, saddlebags, and the safety kit.' },
  { slug: 'endurance-tack-guide', title: 'Endurance Tack Guide', desc: 'Lightweight saddles, anatomic girths, hydration, and obsessive rub-free fit.' },
]

const RIDING: GuideEntry[] = [
  { slug: 'english-riding-guide', title: 'English Riding Guide', desc: 'Hunt seat, dressage, and jumping position fundamentals; equipment overview.' },
  { slug: 'western-riding-guide', title: 'Western Riding Guide', desc: 'Western pleasure, reining, and trail — position, aids, and gear.' },
  { slug: 'dressage-basics-guide', title: 'Dressage Basics Guide', desc: 'The training scale (rhythm through collection), test levels, and judge criteria.' },
  { slug: 'lunging-basics', title: 'Lunging Basics', desc: 'Equipment, circle mechanics, common mistakes, and when lunging helps (and when it does not).' },
]

const TACK_CARE: GuideEntry[] = [
  { slug: 'leather-care-guide', title: 'Leather Care Guide', desc: 'Cleaning, conditioning, and storage — how to extend the life of a quality saddle.' },
  { slug: 'leather-conditioner-guide', title: 'Leather Conditioner Guide', desc: 'Neatsfoot oil, balms, and glycerine — and the over-oiling mistake to avoid.' },
  { slug: 'leather-restoration-guide', title: 'Leather Restoration Guide', desc: 'Reviving dry, stiff, neglected tack — and recognizing leather that is beyond saving.' },
  { slug: 'mold-removal-tack', title: 'Removing Mold from Tack', desc: 'A safe method to remove mold from leather, and the storage that prevents it.' },
  { slug: 'saddle-storage-guide', title: 'Saddle Storage Guide', desc: 'Racks, humidity, covers, and long-term storage that protects tree and leather.' },
  { slug: 'billet-care-guide', title: 'Billet Care Guide', desc: 'Inspecting, caring for, and replacing the safety-critical strap that holds the saddle on.' },
  { slug: 'tack-cleaning-schedule', title: 'Tack Cleaning Schedule', desc: 'Weekly, monthly, and seasonal tack maintenance broken into a practical routine.' },
  { slug: 'tack-room-organization', title: 'Tack Room Organization', desc: 'Storage, humidity control, saddle racks, and bridle hooks — the functional tack room.' },
]

const BUYING: GuideEntry[] = [
  { slug: 'saddle-budget-guide', title: 'Saddle Budget Guide', desc: 'Price tiers, where money matters, hidden costs, and when used beats new.' },
  { slug: 'where-to-buy-saddles', title: 'Where to Buy a Saddle', desc: 'Fitters, dealers, tack shops, online, and used — trade-offs and trial periods.' },
  { slug: 'new-vs-used-saddle', title: 'New vs Used Saddle', desc: 'The case for used premium over new budget — value, risk, and fitting either way.' },
  { slug: 'saddle-resale-value', title: 'Saddle Resale Value', desc: 'What holds value and why — brands, materials, rebuildability, and protecting resale.' },
  { slug: 'saddle-brands-by-price', title: 'Saddle Brands by Price', desc: 'Entry, mid-range, and premium tiers, and which brands sit where.' },
]

const BRANDS: GuideEntry[] = [
  { slug: 'english-saddle-makers', title: 'English Saddle Makers', desc: 'Stübben, County, Bates, Wintec, Custom, and Pessoa — origins and house styles.' },
  { slug: 'french-saddle-makers', title: 'French Saddle Makers', desc: 'Antares, Devoucoux, CWD, Delgrange, and Childeric — the bespoke close-contact tradition.' },
  { slug: 'western-saddle-makers', title: 'Western Saddle Makers', desc: 'Circle Y, Billy Cook, Reinsman, Tucker, and custom tree-builders.' },
  { slug: 'antares-saddle-overview', title: 'Antares Saddle Overview', desc: 'The bespoke French jumping saddle — models, leather, and resale.' },
  { slug: 'devoucoux-saddle-overview', title: 'Devoucoux Saddle Overview', desc: 'French bespoke fitting plus back-mapping technology — models and feel.' },
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
  { heading: 'Saddle Types & Construction', entries: SADDLE_TYPES },
  { heading: 'Tack: Bridles, Bits, Girths & Pads', entries: TACK_FIT },
  { heading: 'Rider Gear & Apparel', entries: RIDER_GEAR },
  { heading: 'Discipline-Specific Tack', entries: DISCIPLINE_TACK },
  { heading: 'Riding Disciplines', entries: RIDING },
  { heading: 'Leather Care & Tack Maintenance', entries: TACK_CARE },
  { heading: 'Buying Guides', entries: BUYING },
  { heading: 'Brands & Makers', entries: BRANDS },
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
            70+ reference guides on saddle fit and construction, tack, rider gear, leather
            care, buying, brands, riding disciplines, and horse ownership — written to Society
            of Master Saddlers and FEI criteria.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

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
