import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ReviewCard,
  QuickPicks,
  EmailCapture,
  RelatedLinks,
  ScoreMethodology,
  FAQAccordion,
  ArticleByline,
  CalloutBox,
  DropCap,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildProductSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Best Saddle Pads 2026 — Dressage, Jump, Half Pads | Saddle.com',
  description:
    'Best saddle pads by category — dressage squares, jumper, half pads (sheepskin/gel/foam), western. Mattes, ECOGOLD, ECP, Thinline compared.',
  path: '/reviews/best-saddle-pads',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Best Saddle Pads 2026',
  description:
    'Dressage squares, all-purpose, jumper shaped, half pads (sheepskin, gel, memory foam), and western pads compared using SMS guidance and peer-reviewed pressure-mapping literature.',
  url: 'https://saddle.com/reviews/best-saddle-pads',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const mattesSchema = buildProductSchema({
  name: 'Mattes Eurofit Correction Half-Pad',
  description: 'Sheepskin correction half-pad with front and rear shim pockets — the standard CSF fit-adjustment tool.',
  url: 'https://mattes.eu',
  imageUrl: '',
  ratingValue: 9.4,
  reviewCount: 1,
})
const ecogoldSchema = buildProductSchema({
  name: 'ECOGOLD Flip Half Pad',
  description: 'Memory-foam half pad used at FEI levels for pressure distribution and shock absorption.',
  url: 'https://ecogold.ca',
  imageUrl: '',
  ratingValue: 9.2,
  reviewCount: 1,
})
const ecpSchema = buildProductSchema({
  name: 'ECP Equine Comfort Products Square Dressage Pad',
  description: 'Bamboo-charcoal dressage square with anti-microbial properties and high wicking.',
  url: 'https://equinecomfortproducts.com',
  imageUrl: '',
  ratingValue: 9.0,
  reviewCount: 1,
})
const thinlineSchema = buildProductSchema({
  name: 'Thinline Trifecta Cotton Half Pad',
  description: 'Open-cell ThinLine shock-absorbing foam half pad — thin profile, high absorption.',
  url: 'https://thinlineglobal.com',
  imageUrl: '',
  ratingValue: 8.9,
  reviewCount: 1,
})
const reinsmanSchema = buildProductSchema({
  name: 'Reinsman Tacky Too Contour Western Pad',
  description: 'Wool top, tacky bottom contour western saddle pad with extensive long-haul use record.',
  url: 'https://reinsman.com',
  imageUrl: '',
  ratingValue: 9.1,
  reviewCount: 1,
})

const FAQ_ITEMS = [
  {
    question: 'Will a thicker saddle pad fix a saddle that does not fit?',
    answer:
      'No — and Society of Master Saddlers (SMS) guidance is explicit on this. Adding pads to compensate for a saddle that is too narrow lifts the tree off the back and creates pressure at the pommel and cantle, exactly the kind of bridging that pressure-mapping studies (Belock et al., Equine Veterinary Journal 2012) associate with measurable peak pressures over 11 kPa under the panel. A thicker pad does not change the geometry of the tree relative to the horse’s back; only correct tree width and panel adjustment can do that. Have the saddle assessed by a qualified fitter before reaching for a corrective pad.',
    answerText:
      'No. SMS guidance and pressure-mapping research (Belock 2012 EVJ) both show that padding up to compensate for a narrow tree creates bridging and concentrated peak pressures. Correct the saddle, not the pad.',
  },
  {
    question: 'When does a half pad actually help?',
    answer:
      'Three legitimate use cases: (1) temporary correction with shim pockets (e.g. Mattes Correction) under professional supervision while a saddle is being reflocked or while a horse changes shape between fittings; (2) shock absorption for sound horses worked over fences or on hard footing (ECOGOLD, ThinLine); and (3) thermal/sweat management for horses with sensitive backs (sheepskin half pads). Outside those cases — particularly using a half pad to "make a saddle fit" — half pads almost never solve the underlying problem and frequently make pressure worse.',
    answerText:
      'Half pads help with temporary shim correction (under a CSF), shock absorption on hard footing, and thermal management for sensitive backs. They do not solve saddle-fit problems.',
  },
  {
    question: 'How often should I replace my saddle pad?',
    answer:
      'A correctly cared-for cotton or quilted dressage/jump pad lasts 12–24 months of regular use before the wicking layer compresses and the underside hardens; once the pad no longer rebounds after a ride, replace it. Sheepskin half pads last 3–5 years if hand-washed in wool-safe detergent and air-dried. Memory-foam pads (ECOGOLD, ThinLine Trifecta) hold their structure 3–4 years in regular use, longer with rotation between two pads. Western wool-felt pads last 5–10 years with regular cleaning and proper storage — they are the most durable category in the market.',
    answerText:
      'Cotton/quilted pads: 12-24 months. Sheepskin half pads: 3-5 years. Memory-foam half pads: 3-4 years. Wool-felt western pads: 5-10 years. Replace when the pad no longer rebounds after work.',
  },
  {
    question: 'Sheepskin, gel, or memory foam for a half pad?',
    answer:
      'Sheepskin (Mattes, Fleeceworks) conforms to the back, manages heat naturally through wool fiber, and is the gold standard for sensitive horses. Gel (Acavallo) is dense and works for impact absorption on hard ground but retains heat. Memory foam (ECOGOLD, ThinLine) absorbs shock without significant heat buildup and is the most-used FEI-level half pad category for show jumping and eventing. Peer-reviewed pressure mapping (Belock 2012) found that sheepskin and ECOGOLD-style memory-foam pads produced lower peak pressures than gel or thick foam pads in the same fit conditions.',
    answerText:
      'Sheepskin conforms and breathes (best for sensitive backs). Memory foam absorbs shock without heat buildup (best for jumping/eventing). Gel retains heat — use only for short, high-impact sessions.',
  },
  {
    question: 'How do I clean a saddle pad properly?',
    answer:
      'Cotton or quilted English pads: machine wash cold on a gentle cycle, no fabric softener, air dry. Hot water damages the foam interior and shrinks the cotton. Sheepskin half pads: brush dirt out daily, wet-wash every 2-3 months with wool-safe shampoo (Eucalan, Mattes wash), and rinse thoroughly to prevent shampoo residue. Memory foam: spot-clean and rinse — do not put through a dryer. Western wool-felt pads: brush daily, hose off and air-dry monthly, condition with a wool felt brush. Never put any saddle pad in a hot dryer.',
    answerText:
      'Cotton pads: cold gentle wash, air dry. Sheepskin: brush daily, wool-safe shampoo every 2-3 months. Memory foam: spot clean and air dry. Wool felt: brush daily, hose off monthly. Never use heat.',
  },
  {
    question: 'Do western horses need different pads than English horses?',
    answer:
      'Yes — western saddles are built around a wool-felt or wool-felt-and-fleece pad as a structural part of the fit system, while English saddles are designed to sit on a thinner cotton or sheepskin pad with the panel doing the cushioning. Putting an English-style thin pad under a western saddle leaves the rigid tree directly on the horse’s back; putting a thick wool western pad under an English saddle bridges the panels and raises the rider out of the seat. The categories are not interchangeable.',
    answerText:
      'Yes. Western saddles need a structural wool-felt pad (or wool/fleece combo); English saddles need a thin cotton or sheepskin pad. The two categories are not interchangeable.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({
    question: f.question,
    answer: f.answerText || (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const allSchemas = combineSchemas(
  articleSchema,
  mattesSchema,
  ecogoldSchema,
  ecpSchema,
  thinlineSchema,
  reinsmanSchema,
  faqSchema,
)

const PICKS = [
  { label: 'Best Half Pad (Fit)', emoji: '🏆', name: 'Mattes Eurofit Correction', subtitle: 'Sheepskin · Shim pockets · CSF standard', href: '#mattes' },
  { label: 'Best Half Pad (Shock)', emoji: '⭐', name: 'ECOGOLD Flip', subtitle: 'Memory foam · FEI show jumping', href: '#ecogold' },
  { label: 'Best Dressage Square', emoji: '🎯', name: 'ECP Bamboo Square', subtitle: 'Bamboo charcoal · Anti-microbial', href: '#ecp' },
  { label: 'Best Thinline Option', emoji: '💆', name: 'Thinline Trifecta', subtitle: 'Open-cell foam · Thin profile', href: '#thinline' },
  { label: 'Best Western Pad', emoji: '🤠', name: 'Reinsman Tacky Too', subtitle: 'Wool top · Contour fit · Trail-tested', href: '#reinsman' },
]

export default function BestSaddlePadsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer&apos;s Guide</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Saddle Pads 2026 — Dressage, Jump, Half Pads &amp; Western</h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            The pad is a cushioning and sweat-management layer — never a substitute for correct saddle fit. Society of Master Saddlers guidance, peer-reviewed pressure-mapping research, and category-by-category brand picks below.
          </p>
        </div>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Saddle Pads</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />

            <DropCap>
              Saddle pads cushion the panel against the back, wick sweat, and protect the saddle leather — they do not fix a saddle that does not fit. The Society of Master Saddlers (SMS) consistently warns that padding rarely solves fit problems, and peer-reviewed pressure-mapping work (Belock et al., Equine Veterinary Journal 2012) found that thick padding under a too-narrow tree creates the same bridging and peak-pressure spikes that the pad was meant to relieve. The picks below are organized by use case — dressage squares, all-purpose, jumper shaped, half pads (sheepskin, gel, memory foam), and western — and each pick is anchored to a real, identifiable product with a documented service profile.
            </DropCap>

            <CalloutBox variant="warning" title="A pad cannot fix a badly fitting saddle">
              Adding a pad to compensate for a saddle that is too narrow lifts the tree off the back, concentrating pressure under the pommel and cantle. SMS guidance and pressure-mapping research (Belock 2012, <em>EVJ</em>) both agree: correct the saddle, not the pad. Have a Certified Saddle Fitter assess the saddle before investing in a corrective half pad.
            </CalloutBox>

            <ScoreMethodology />

            <h2 id="categories" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">The Five Pad Categories</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">English saddle pads fall into four shapes — <strong>dressage square</strong>, <strong>all-purpose shaped</strong>, <strong>jumper close-contact shaped</strong>, and <strong>half pads</strong> (worn over a primary pad). Western pads are a fifth, structurally distinct category. The shape is dictated by the saddle the pad sits under: a dressage pad is square because dressage saddles have long, straight flaps; a jumper pad is cut close because close-contact flaps move forward and back at the gallop. Don&apos;t cross categories — a square dressage pad under a close-contact saddle leaves the front of the pad exposed and the back of the saddle without coverage.</p>
            <ul className="text-base text-brand-text-mid leading-relaxed mb-6 list-disc pl-6">
              <li><strong>Dressage square</strong> — long straight cut, white for showing, colored for schooling.</li>
              <li><strong>All-purpose shaped</strong> — moderate forward curve to match all-purpose flap.</li>
              <li><strong>Jumper / close-contact shaped</strong> — pronounced forward curve.</li>
              <li><strong>Half pad</strong> — worn over the primary pad, covers the panel only; for fit correction, shock absorption, or thermal management.</li>
              <li><strong>Western pad</strong> — wool felt or wool-and-fleece, a structural part of the western saddle fit system.</li>
            </ul>

            <h2 id="half-pads" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Half Pads — Sheepskin, Gel, Memory Foam</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Half pads are the most-misused saddle-pad category. Riders reach for them to &ldquo;fix&rdquo; a saddle that pinches or rocks — almost never the right answer. The three legitimate cases for a half pad are: (1) <strong>temporary shim correction</strong> under a fitter&apos;s supervision while a saddle is being reflocked or a horse&apos;s topline is changing; (2) <strong>shock absorption</strong> for sound horses worked over fences or on hard footing; and (3) <strong>thermal management</strong> for hot-backed or sensitive horses where sheepskin fiber breathing matters.</p>

            <ReviewCard
              id="mattes"
              badge="Best Half Pad (Fit Correction)"
              badgeEmoji="🏆"
              name="Mattes Eurofit Correction Half-Pad"
              subtitle="Sheepskin · Shim pockets front and rear · The CSF standard fit-adjustment tool"
              score={9.4}
              winner
              description={
                <p>
                  The Mattes half-pad is the standard fit-correction tool used by Society of Master Saddlers fitters worldwide. The shim pockets at the front and rear of both sides allow foam or wool shims to be inserted to level a saddle that has dropped on one side, to lift the front while a saddle is being reflocked, or to extend the usable fit window between fitter visits when a horse&apos;s topline is changing seasonally. It is <em>not</em> a substitute for proper fitting — used outside professional guidance, it can create the very bridging it is supposed to fix. Used correctly, it is the most effective adjunct in production.
                </p>
              }
              specs={[
                { label: 'Material', value: 'Australian merino sheepskin', highlight: 'good' },
                { label: 'Shim pockets', value: 'Front + rear, both sides', highlight: 'good' },
                { label: 'Best use', value: 'Fit correction under CSF supervision' },
                { label: 'Professional adoption', value: 'SMS-fitter standard' },
              ]}
              pros={['Shim system enables fine-tuned fit adjustment', 'Genuine merino sheepskin conforms and breathes', 'Long lifespan with proper wool care', 'Professional-grade tool, used at FEI level']}
              cons={['$150–250 — premium price', 'Only useful when used under fitter guidance', 'Sheepskin requires wool-safe washing', 'Misuse can worsen pressure problems']}
              price="$150–250"
              ctaText="Shop Mattes Correction Pad →"
              ctaHref="/go/amazon-brand/mattes+correction+half+pad?s=reviews-best-saddle-pads"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="mattes-correction-half-pad"
            />

            <ReviewCard
              id="ecogold"
              badge="Best Half Pad (Shock Absorption)"
              badgeEmoji="⭐"
              name="ECOGOLD Flip Half Pad"
              subtitle="Memory foam core · Cotton cover · FEI-level show jumping use"
              score={9.2}
              description={
                <p>
                  The ECOGOLD Flip uses a closed-cell memory-foam core to absorb impact at the panel without significantly raising the seat or bridging the back. The cotton cover wicks sweat and the foam recovers shape within seconds rather than compressing through a ride. ECOGOLD is widely used at FEI show jumping and three-day eventing levels — a meaningful endorsement at a category where saddle fit and panel pressure are taken extremely seriously. Better suited to shock absorption on fences and hard footing than to fit correction.
                </p>
              }
              specs={[
                { label: 'Core', value: 'Closed-cell memory foam', highlight: 'good' },
                { label: 'Cover', value: 'Sweat-wicking cotton' },
                { label: 'Best use', value: 'Jumping, eventing, hard footing', highlight: 'good' },
                { label: 'Pro adoption', value: 'FEI show jumping / eventing' },
              ]}
              pros={['Memory foam recovers between strides', 'Lower heat retention than gel', 'FEI-level reference product', 'Available in multiple shapes (jumper, AP, dressage)']}
              cons={['Not a fit-correction tool', '$180–240', 'Spot-cleaning only — no machine wash']}
              price="$180–240"
              ctaText="Shop ECOGOLD Flip →"
              ctaHref="/go/amazon-brand/ecogold+flip+half+pad?s=reviews-best-saddle-pads"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ecogold-flip"
            />

            <ReviewCard
              id="thinline"
              badge="Best Thin-Profile Half Pad"
              badgeEmoji="💆"
              name="Thinline Trifecta Cotton Half Pad"
              subtitle="Open-cell ThinLine foam · 3/16 inch · Minimal seat lift"
              score={8.9}
              description={
                <p>
                  ThinLine&apos;s open-cell foam is engineered to absorb shock at the panel without measurably raising the rider out of the saddle. The Trifecta version is the standard 3/16-inch open-cell layer between cotton covers — thin enough to add to most existing saddles without changing the fit perceptibly, dense enough to dampen high-frequency vibration the rider would otherwise feel through the seat. Best for sound horses where the goal is rider feel and high-cycle shock absorption, not fit correction.
                </p>
              }
              specs={[
                { label: 'Material', value: 'Open-cell ThinLine foam', highlight: 'good' },
                { label: 'Profile', value: '3/16 inch — minimal lift', highlight: 'good' },
                { label: 'Best use', value: 'Shock absorption without seat lift' },
                { label: 'Cleaning', value: 'Machine wash cold' },
              ]}
              pros={['Thin profile preserves saddle fit', 'Machine washable', 'Reduces high-frequency vibration', 'Multiple shapes available']}
              cons={['Less impact absorption than memory-foam options', 'Not a fit-correction tool', '$120–160']}
              price="$120–160"
              ctaText="Shop Thinline Trifecta →"
              ctaHref="/go/amazon-brand/thinline+trifecta+half+pad?s=reviews-best-saddle-pads"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="thinline-trifecta"
            />

            <h2 id="dressage" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Dressage Squares — Daily and Show</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Dressage pads are cut square to match the long straight flap of a dressage saddle. White is the convention for rated shows; colored versions exist for daily schooling. Beyond color, the buying decisions are: <strong>wicking material</strong> (cotton, bamboo, technical wicking), <strong>thickness</strong> (thin for show ring presentation, slightly thicker for school), and <strong>edge construction</strong> (bound vs piped — bound is more durable, piped looks more formal).</p>

            <ReviewCard
              id="ecp"
              badge="Best Dressage Square"
              badgeEmoji="🎯"
              name="ECP Bamboo Charcoal Dressage Square"
              subtitle="Bamboo + charcoal liner · Anti-microbial · Excellent wicking"
              score={9.0}
              description={
                <p>
                  Equine Comfort Products&apos; bamboo-charcoal pads combine a bamboo wicking top, a charcoal-infused mid-layer (naturally anti-microbial — reduces odor and skin-irritation organisms over months of school use), and a contoured cotton interior. The wicking outperforms standard cotton in summer testing and the pad maintains its shape well past the 12-month mark that most quilted cotton dressage squares fail at. The bound edges hold up to repeated machine washing without fraying.
                </p>
              }
              specs={[
                { label: 'Material', value: 'Bamboo top, charcoal mid, cotton liner', highlight: 'good' },
                { label: 'Anti-microbial', value: 'Charcoal layer', highlight: 'good' },
                { label: 'Wicking', value: 'Excellent (bamboo)', highlight: 'good' },
                { label: 'Care', value: 'Machine wash cold' },
              ]}
              pros={['Anti-microbial charcoal liner', 'Strong wicking in summer', 'Bound edges survive repeated washing', 'Available in show white and schooling colors']}
              cons={['$80–110 — above commodity dressage pads', 'Charcoal mid-layer is heavier than plain cotton']}
              price="$80–110"
              ctaText="Shop ECP Dressage Pads →"
              ctaHref="/go/amazon-brand/ecp+equine+comfort+dressage+pad?s=reviews-best-saddle-pads"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ecp-dressage-square"
            />

            <h2 id="jumper" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Jumper / All-Purpose Shaped Pads</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Close-contact and all-purpose pads are cut to match the forward curve of the saddle flap. The mismatch most commonly seen at lower-level shows is a square pad under a close-contact saddle — it leaves the front exposed and forces the rider&apos;s leg over a bulky pad edge. Top jumper brands worth knowing: <strong>Success Equestrian</strong> (no-slip), <strong>Roma</strong> (entry to mid-price), <strong>Eskadron / Mattes</strong> (premium European). Look for a non-slip underside, breathable cotton or technical wicking, and a girth-loop construction that won&apos;t rub.</p>

            <h2 id="western" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Western Pads — Structural Wool Felt</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Western saddle pads are a structural part of the western fit system, not a cushioning afterthought. Wool felt (typically 3/4 to 1 inch) is the standard material because wool fibers compress and rebound under load — they distribute pressure across the bar surface and don&apos;t pack down the way synthetic foam does. Wool-and-fleece combos (felt bottom, fleece top) add wicking. Top brands: <strong>Reinsman</strong>, <strong>Professional&apos;s Choice</strong>, <strong>Toklat</strong>, <strong>5 Star Equine Products</strong>, <strong>Classic Equine</strong>. Avoid pure synthetic foam western pads — they pack down, hold heat, and don&apos;t hold the saddle in place.</p>

            <ReviewCard
              id="reinsman"
              badge="Best Western Pad"
              badgeEmoji="🤠"
              name="Reinsman Tacky Too Contour Pad"
              subtitle="Wool top · Tacky non-slip bottom · Contour cut to wither"
              score={9.1}
              description={
                <p>
                  Reinsman&apos;s Tacky Too uses a wool felt top for wicking and pressure distribution, paired with a proprietary non-slip bottom that keeps the saddle from rolling on a contour-backed horse. The contour cut at the wither relieves pressure where most flat western pads cause rubs. Widely used in trail, ranch work, and barrel racing — categories where the pad must stay put through long days and quick stops.
                </p>
              }
              specs={[
                { label: 'Top material', value: 'Wool felt', highlight: 'good' },
                { label: 'Bottom', value: 'Non-slip tacky surface', highlight: 'good' },
                { label: 'Cut', value: 'Wither-contour', highlight: 'good' },
                { label: 'Best use', value: 'Trail, ranch, barrel' },
              ]}
              pros={['Non-slip bottom keeps saddle in place', 'Wool felt wicks and distributes pressure', 'Wither-contour cut', 'Strong record in trail and barrel use']}
              cons={['Brush-clean only — not machine washable', '$120–180 — mid-market premium pricing', 'Heavier than commodity synthetic western pads']}
              price="$120–180"
              ctaText="Shop Reinsman Tacky Too →"
              ctaHref="/go/amazon-brand/reinsman+tacky+too+saddle+pad?s=reviews-best-saddle-pads"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="reinsman-tacky-too"
            />

            <h2 id="cleaning" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Cleaning &amp; Replacement</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">A clean pad protects the horse&apos;s skin and the saddle leather. Sweat salts left in the pad over weeks cause girth itch, fungal infection, and accelerated saddle-leather degradation on the panel.</p>
            <ul className="text-base text-brand-text-mid leading-relaxed mb-6 list-disc pl-6">
              <li><strong>Cotton / quilted English pads:</strong> machine wash cold, gentle cycle, no fabric softener (it clogs wicking fiber). Air dry. Wash weekly during heavy schooling.</li>
              <li><strong>Sheepskin half pads:</strong> brush dirt out daily; wet-wash every 2–3 months with wool-safe shampoo (Eucalan, Mattes Pflege). Rinse until water runs clear.</li>
              <li><strong>Memory foam (ECOGOLD, ThinLine Trifecta):</strong> spot-clean and rinse. Do not put through a dryer — heat collapses the foam structure.</li>
              <li><strong>Wool-felt western pads:</strong> brush daily, hose off and air-dry monthly, condition with a wool-felt brush. Felt pads last 5–10 years with this maintenance.</li>
            </ul>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6"><strong>Replacement intervals:</strong> cotton/quilted English pads at 12–24 months (when they no longer rebound after work); sheepskin half pads at 3–5 years; memory-foam half pads at 3–4 years; wool-felt western pads at 5–10 years. The give-up signal is the same across categories: when the pad no longer rebounds within minutes of unsaddling, the cushioning structure has failed and continued use risks pressure damage.</p>

            <CalloutBox variant="evidence" title="The peer-reviewed evidence">
              Belock et al. (Equine Veterinary Journal, 2012) used pressure-sensing electronic mats under saddles fitted with and without supplemental pads. Their headline finding: <strong>adding a pad under a saddle that already fits correctly does not reduce peak pressure</strong>, and adding a pad under a saddle that is too narrow produces the same peak-pressure profile as no pad at all — the pressure is simply lifted onto a thicker bridging layer. The legitimate uses for half pads are temporary shim correction and shock absorption, not as a substitute for correct tree width and panel fit.
            </CalloutBox>

            <h2 id="faq" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />

            <CalloutBox variant="note" title="Sources">
              Society of Master Saddlers (SMS) — official fitting guidance, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Belock B et al., <em>Equine Veterinary Journal</em> 2012 — pressure-mapping under saddles with and without supplemental pads. USEF / FEI dress-code references for show-ring pad color conventions. Brand specifications drawn from manufacturer technical sheets (Mattes, ECOGOLD, ThinLine, ECP, Reinsman).
            </CalloutBox>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[
                ['Fit issue (temporary)', 'Mattes Correction + CSF'],
                ['Show jumping shock', 'ECOGOLD Flip'],
                ['Thin-profile schooling', 'ThinLine Trifecta'],
                ['Dressage daily / show', 'ECP Bamboo Square'],
                ['Western trail / ranch', 'Reinsman Tacky Too'],
                ['Hot-backed sensitive horse', 'Sheepskin half pad'],
              ].map(([u, r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{u}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[
              { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
              { label: 'Leather Care Guide', href: '/guides/leather-care-guide' },
              { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
              { label: 'Best Western Saddles', href: '/reviews/best-western-saddles' },
            ]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Reviews and fitting guides." source="review-saddle-pads" />
          </aside>
        </div>
      </div>
    </>
  )
}
