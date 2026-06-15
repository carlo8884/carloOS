import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  EmailCapture,
  StockImage,
  buildBreadcrumbSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
  Breadcrumb,
  FAQAccordion,
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Western Saddles by Discipline — Barrel, Roping, Trail | Saddle.com', description: 'Browse Western saddles by discipline — barrel racing, roping, trail, reining, and ranch. Discipline differences, top brands, and price ranges explained.', path: '/western' })

const DISCIPLINES = [
  { title: 'Barrel Racing Saddles', desc: 'High rise forks, free swing stirrups, lightweight construction — what actually matters', href: '/reviews/best-western-saddles#barrel-racing', badge: 'Performance' },
  { title: 'Roping Saddles', desc: 'Horn strength, seat depth, tree construction for heading and heeling', href: '/reviews/best-western-saddles#roping', badge: 'Working' },
  { title: 'Trail Saddles', desc: 'All-day comfort, weight distribution, storage options', href: '/reviews/best-western-saddles#trail', badge: 'Leisure' },
  { title: 'Reining Saddles', desc: 'Slick seat, free motion, correct balance for spins and slides', href: '/reviews/best-western-saddles#reining', badge: 'Performance' },
  { title: 'General Purpose / Ranch', desc: 'Versatile working saddles for ranch and casual riding', href: '/reviews/best-western-saddles#ranch', badge: 'Versatile' },
]

// Comparison table — distinctions are drawn from established western saddle design,
// not measured by us. Weight figures are typical published ranges, not exact specs.
const DISCIPLINE_TABLE = [
  { discipline: 'Barrel Racing', seat: 'Deep, secure', horn: 'Tall, thin', weight: 'Light (~25–30 lb)', skirt: 'Round / short', priority: 'Speed, grip, lightness' },
  { discipline: 'Roping', seat: 'Moderate depth', horn: 'Thick, reinforced', weight: 'Heavy (~35–45 lb)', skirt: 'Full / square', priority: 'Horn & tree strength' },
  { discipline: 'Trail', seat: 'Padded, comfortable', horn: 'Standard', weight: 'Moderate (~28–35 lb)', skirt: 'Full', priority: 'All-day comfort, storage' },
  { discipline: 'Reining', seat: 'Slick, close-contact', horn: 'Low', weight: 'Light–moderate', skirt: 'Round', priority: 'Free motion, balance' },
  { discipline: 'Ranch / GP', seat: 'Moderate', horn: 'Standard–reinforced', weight: 'Moderate–heavy', skirt: 'Full / square', priority: 'Versatility, durability' },
]

const TOP_BRANDS = [
  { name: 'Circle Y', specialty: 'Trail & pleasure', priceRange: '$600–2,500' },
  { name: 'Martin Saddlery', specialty: 'Barrel racing', priceRange: '$1,200–4,000' },
  { name: 'Big Horn', specialty: 'Budget trail', priceRange: '$300–800' },
  { name: 'Cactus Saddlery', specialty: 'Roping & ranch', priceRange: '$800–2,500' },
  { name: 'Billy Cook', specialty: 'General western', priceRange: '$700–2,000' },
]

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How is a Western saddle different from an English saddle?',
    answer:
      'A Western saddle distributes the rider’s weight over a larger skirt and bar surface, has a prominent horn at the front, and uses a single attached fender-and-stirrup-leather rather than the separate adjustable stirrup leathers of an English saddle. Western saddles are generally heavier and built for long hours and working tasks such as roping and ranch work. English saddles are lighter and cut closer to the horse for jumping, dressage, and other competitive disciplines.',
    answerText:
      'A Western saddle spreads weight over a larger surface, has a horn, uses an attached fender-and-stirrup, and is heavier and built for working and trail use. English saddles are lighter and cut closer for jumping and dressage.',
  },
  {
    question: 'Which Western saddle discipline is right for me?',
    answer:
      'Match the saddle to the riding you actually do. Barrel racing saddles favour a deep, secure seat and light weight; roping saddles favour a thick, reinforced horn and strong tree to take the strain of a roped animal; trail saddles favour all-day comfort and storage; reining saddles favour a slick, close-contact seat for free motion; and ranch or general-purpose saddles favour versatility and durability. The comparison table above summarises the main differences.',
    answerText:
      'Choose by your riding: barrel (deep seat, light), roping (reinforced horn and tree), trail (comfort and storage), reining (slick close-contact seat), ranch/GP (versatile and durable).',
  },
  {
    question: 'How much does a Western saddle cost?',
    answer:
      'Prices on this page span roughly $300 for budget trail saddles to about $4,000 for competition barrel and roping saddles, based on the brand ranges listed below. Entry-level options such as Big Horn start near $300–$800; mid-range general and roping brands such as Billy Cook and Cactus Saddlery fall around $700–$2,500; and specialist barrel brands such as Martin Saddlery reach $1,200–$4,000. Custom and high-end working saddles can cost more.',
    answerText:
      'On this page, Western saddles range from about $300 for budget trail saddles to roughly $4,000 for competition barrel and roping saddles, depending on brand and discipline.',
  },
  {
    question: 'Why is the horn different between roping and barrel racing saddles?',
    answer:
      'The horn carries very different loads in each discipline. A roping saddle horn is thick and reinforced because it anchors the rope and takes the strain of a roped animal, so horn strength and tree construction are the priority. A barrel racing horn is tall and thin so the rider can grip it through tight turns without it interfering, and the priority shifts to a deep secure seat and light overall weight.',
    answerText:
      'Roping horns are thick and reinforced to anchor a rope under load; barrel racing horns are tall and thin for grip through turns, with the saddle prioritising a deep seat and light weight.',
  },
]

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://saddle.com/' },
    { name: 'Western Saddles', url: 'https://saddle.com/western' },
  ],
})

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answerText || (typeof f.answer === 'string' ? f.answer : '') })),
})

const allSchemas = combineSchemas(breadcrumbSchema, faqSchema)

export default function WesternSaddlesPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <Breadcrumb siteId="saddle-com" items={[{ name: 'Home', href: '/' }, { name: 'Western Saddles', href: '/western' }]} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Western Saddles</span></div>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>Western Saddles by Discipline</h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">The right western saddle depends entirely on what you do with it. This hub organizes western saddles by discipline — barrel racing, roping, trail, reining, and ranch — so you can browse what fits the riding you actually do.</p>
          <p className="mt-5 text-sm text-white/70">Looking for our ranked picks? <Link href="/reviews/best-western-saddles" className="font-bold text-brand-primary underline underline-offset-2">See Best Western Saddles →</Link></p>
        </div>
      </div>
      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="saddle-com:hub-western" aspect="16:9" variant="wide" priority />
      </div>

      {/* Direct-answer / TL;DR block */}
      <div className="px-container-sm sm:px-container pt-10">
        <div className="bg-brand-surface border border-brand-border rounded-xl p-6 max-w-3xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">The Short Answer</div>
          <p className="text-base text-brand-text-mid leading-relaxed mb-3">
            Western saddles are built around the discipline they serve. <strong>Barrel racing</strong> saddles favour a deep, secure seat and light weight; <strong>roping</strong> saddles favour a thick, reinforced horn and strong tree; <strong>trail</strong> saddles favour all-day comfort and storage; <strong>reining</strong> saddles favour a slick, close-contact seat for free motion; and <strong>ranch / general-purpose</strong> saddles favour versatility and durability.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            Across the brands listed on this page, prices run from roughly <strong>$300</strong> for budget trail saddles to about <strong>$4,000</strong> for competition barrel and roping saddles. Choose by the riding you actually do — the comparison table below summarises the differences.
          </p>
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {DISCIPLINES.map(d => (
            <Link key={d.href} href={d.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{d.badge}</div>
              <div className="font-display font-bold text-brand-dark text-lg mb-2">{d.title}</div>
              <div className="text-sm text-brand-text-light leading-relaxed">{d.desc}</div>
            </Link>
          ))}
        </div>

        {/* Discipline comparison table */}
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-6 pb-3 border-b border-brand-border">Western Saddle Discipline Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-brand-border mb-12">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-brand-dark text-white">
                {['Discipline', 'Seat', 'Horn', 'Typical Weight', 'Skirt', 'Design Priority'].map(h => (
                  <th key={h} className="text-left px-4 py-3 font-bold text-2xs tracking-wider uppercase">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DISCIPLINE_TABLE.map((row, i) => (
                <tr key={row.discipline} className={i % 2 === 0 ? 'bg-brand-white' : 'bg-brand-surface'}>
                  <td className="px-4 py-3 font-display font-bold text-brand-dark border-b border-brand-border">{row.discipline}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{row.seat}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{row.horn}</td>
                  <td className="px-4 py-3 text-brand-text-light border-b border-brand-border">{row.weight}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{row.skirt}</td>
                  <td className="px-4 py-3 font-semibold text-brand-primary text-xs border-b border-brand-border">{row.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-brand-text-light -mt-8 mb-12 max-w-2xl">Weight figures are typical published ranges and vary by maker, tree, and rigging; treat them as guidance rather than exact specifications.</p>

        <h2 className="font-display text-2xl font-bold text-brand-dark mb-5 pb-3 border-b border-brand-border">Top Western Saddle Brands</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {TOP_BRANDS.map(b => (
            <div key={b.name} className="bg-brand-surface border border-brand-border rounded-lg p-4">
              <div className="font-display font-bold text-brand-dark text-base mb-1">{b.name}</div>
              <div className="text-xs text-brand-text-light mb-1">{b.specialty}</div>
              <div className="text-xs font-bold text-brand-primary">{b.priceRange}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="faq" className="font-display text-2xl font-bold text-brand-dark mb-5 pb-3 border-b border-brand-border">Frequently Asked Questions</h2>
        <div className="mb-12">
          <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Best Western Saddles', href: '/reviews/best-western-saddles', desc: 'Ranked picks by discipline' },
            { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', desc: 'Check fit for horse and rider' },
            { title: 'Buying Used', href: '/guides/used-saddle-buying-guide', desc: 'Inspection checklist before purchase' },
            { title: 'English Saddles', href: '/english', desc: 'Compare English disciplines' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{l.title}</div>
              <div className="text-xs text-brand-text-light">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-12">
        <EmailCapture variant="section" siteId="saddle-com" title="Free Western Saddle Buying Guide" subtitle="Brand reviews and market intelligence." source="western-hub" ctaText="Get Free Guide" perks={['🏇 Discipline-specific advice', '💰 Market pricing', '🚫 No spam']} />
      </div>
    </>
  )
}
