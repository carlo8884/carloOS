import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Riding Boots 2025 — Tall, Paddock, Western | Saddle.com', description: 'Best riding boots by category — tall field and dress boots, paddock boots, western boots, and half-chaps. Ariat, Mountain Horse, Tucci, Konig, Justin, Lucchese.', path: '/reviews/best-riding-boots', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Best Riding Boots 2025', description: 'Tall boots, paddock boots, western boots, and half chaps ranked by discipline and use case.', url: 'https://saddle.com/reviews/best-riding-boots', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const ariatSchema = buildProductSchema({ name: 'Ariat Heritage Contour II Field Zip Boot', description: 'All-day comfort tall riding boot with ATS technology and full-length zip.', url: 'https://ariat.com', imageUrl: '', ratingValue: 9.3, reviewCount: 1 })
const mountainHorseSchema = buildProductSchema({ name: 'Mountain Horse Sovereign Field Boot', description: 'Full-grain leather tall field boot with reinforced shank and waterproof construction.', url: 'https://mountainhorseusa.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const tucciSchema = buildProductSchema({ name: 'Tucci Marilyn Dress Boot', description: 'Italian-made dress boot with full-calf leather and a stiff shaft for dressage.', url: 'https://tucci.it', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })

const FAQ_ITEMS = [
  {
    question: 'What is the difference between field boots and dress boots?',
    answer: 'Field boots have laces at the ankle (originally for ankle flex when jumping) and are the standard for hunters, jumpers, and eventers. Dress boots have a smooth, unbroken shaft from top to ankle, with no laces, and are the convention for dressage and formal show classes. Both are tall boots; the distinction is the ankle treatment, the shaft stiffness, and the show-ring convention they signal.',
    answerText: 'Field boots have ankle laces and are for jumping disciplines (hunter, jumper, eventer). Dress boots have a smooth unbroken shaft and are for dressage. Same height; the differences are ankle treatment and stiffness.',
  },
  {
    question: 'Do schooling boots and show boots have to be different?',
    answer: 'Not strictly, but most serious competitors own both. A schooling tall boot (often the same brand and last as the show pair) is used for daily riding and absorbs wear, scuffs, mud, and ring marks. A show pair is kept polished and reserved for the show ring. Higher-end dress boots (Konig, Tucci, custom Vogel) often live in a boot bag and only see the show; their stiffness and leather quality is built around appearance and competition use, not daily abuse.',
    answerText: 'No, but most serious riders own both. Schooling boots take daily wear; show boots stay polished for the ring. Higher-end Konig and Tucci dress boots are typically reserved for shows.',
  },
  {
    question: 'How long should a tall boot last?',
    answer: 'A well-built full-grain leather tall boot (Ariat Heritage, Mountain Horse Sovereign, Konig, Tucci) ridden in regularly should give 5–10 years before the shaft starts to soften past the point where a cobbler can rebuild it. Daily-school riders on the bottom end; weekend-rider show pairs on the top end. Synthetic-shafted tall boots typically last 2–4 years. The zipper and the inner heel counter usually fail before the upper leather does — keep zippers waxed and have a cobbler reinforce the heel counter when it starts to break down.',
    answerText: 'Full-grain leather tall boots typically last 5-10 years with regular use. Synthetic shafted boots: 2-4 years. Zippers and heel counters typically fail before the leather; both are cobbler-repairable.',
  },
  {
    question: 'What is the break-in period for a new tall boot?',
    answer: 'Plan on 30–60 hours of wear for a stiff full-grain leather tall boot to soften into the leg. Some riders accelerate this with leather conditioner on the inside calf, walking around the house in the boots, or using boot trees that hold the desired shape. A well-fit boot should sit a half inch to one inch above the back of the knee crease when new; it will drop as the leather softens (this is normal and expected — the boot is designed for it). If the boot is painful to wear after 60 hours, the fit is wrong rather than the break-in incomplete.',
    answerText: 'Plan on 30-60 hours of wear to break in a full-grain leather tall boot. The boot should sit 1/2-1 inch above the back of the knee when new and drop as the leather softens.',
  },
  {
    question: 'Why do calf widths matter more than foot size?',
    answer: 'For tall boots the calf fit is the make-or-break dimension. A boot a half size too tight at the foot can usually be stretched by a cobbler; a boot that does not zip over the calf cannot be made to. Reputable tall-boot brands (Ariat, Mountain Horse, Tucci, Konig) all publish calf-width options. Measure the widest point of your calf in a thin riding sock and compare to the brand chart before ordering.',
    answerText: 'Calf width is the make-or-break tall-boot dimension. A small foot fit issue can be stretched; a too-narrow calf cannot. Measure the widest point of your calf and match to brand sizing charts.',
  },
  {
    question: 'Are western boots safe for English riding (and vice versa)?',
    answer: 'Both have a 1–1.5 inch heel for the same safety reason: the heel prevents the foot from sliding through the stirrup, the leading cause of serious riding fall injuries. So functionally yes, either category will keep your foot in the stirrup safely. The mismatches are aesthetic (western boots in an English show ring are out of dress code and vice versa) and structural (English boots have a smooth calf for stirrup leather contact; western boots have a higher heel and stitched shaft built for stock work).',
    answerText: 'Both English and western boots have a 1-1.5 inch heel that prevents the foot from sliding through the stirrup. They are functionally interchangeable for safety; the mismatch is aesthetic show-ring dress code and structural fit to discipline.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answerText || (typeof f.answer === 'string' ? f.answer : '') })) })
const allSchemas = combineSchemas(schema, ariatSchema, mountainHorseSchema, tucciSchema, faqSchema)

const PICKS = [
  { label: 'Best Tall Boot', emoji: '🏆', name: 'Ariat Heritage Contour II', subtitle: 'Full-zip · ATS comfort · All-day wear', href: '#ariat' },
  { label: 'Best Dress Boot', emoji: '🎯', name: 'Tucci Marilyn', subtitle: 'Italian leather · Dressage stiffness', href: '#tucci' },
  { label: 'Best Country Boot', emoji: '🌿', name: 'Mountain Horse Sovereign', subtitle: 'Waterproof · Full-grain · Yard-ready', href: '#mountain-horse' },
  { label: 'Best Value System', emoji: '💰', name: 'Paddock Boot + Half Chap', subtitle: 'Flexible · Affordable · More versatile', href: '#half-chap' },
]

export default function BestRidingBootsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer&apos;s Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Riding Boots 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">The right riding boot depends on discipline, budget, and how much time you spend in the saddle vs on the ground. Tall boots for competition and serious riding; paddock boots + half chaps for everyday versatility; western boots for stock work and trail.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Riding Boots</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">How To Choose</div>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">Riding boots fall into four categories: tall boots (field for jumping, dress for dressage), paddock boots (ankle-height for general riding, usually paired with half-chaps), western boots (stock work, trail, ranch), and half-chaps (worn over paddock boots to give the leg coverage of a tall boot at a fraction of the cost). Identify your discipline first, then your budget; the right category usually falls out of those two answers.</p>
            </div>

            <ScoreMethodology />

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-6 mb-4">Tall Boots — Field and Dress</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">A tall boot covers the leg from foot to just below the knee. The two subcategories are <strong>field boots</strong> (ankle laces, jumping disciplines) and <strong>dress boots</strong> (smooth unbroken shaft, dressage). Both are required equipment for most rated English shows from the lower levels up. Full-grain leather is standard above the entry-level price tier; the stiffness of the shaft, the cut of the top (Spanish-cut for dressage, plain or laced for field), and the calf width are the buying decisions that matter.</p>

            <ReviewCard id="ariat" badge="Best All-Around Tall Boot" badgeEmoji="🏆" name="Ariat Heritage Contour II Field Zip" subtitle="Full-length zip · ATS technology · Wide and regular calf options" score={9.3} winner
              description={<div>
                <p>Ariat&apos;s Heritage Contour II is the standard all-day tall boot for serious amateur riders — the ATS (Advanced Torque Stability) footbed technology makes it significantly more comfortable for extended wear than traditional tall boots. The full-length inner zip means easy on and off without boot pulls or a boot jack. Available in multiple calf widths (regular, wide, extra wide), which is the critical fit issue for tall boots — calf fit matters more than foot size.</p>
                <p>The Heritage line has been Ariat&apos;s best-seller for good reason: it performs in the ring and is comfortable enough for a full day at a show. Owner-reported lifespan in the 5–8 year range with regular use; the zipper is the most-replaced wear part and is cobbler-serviceable.</p>
              </div>}
              specs={[{ label: 'Closure', value: 'Full inner zip', highlight: 'good' }, { label: 'Calf widths', value: 'Regular, wide, extra wide', highlight: 'good' }, { label: 'Technology', value: 'ATS footbed', highlight: 'good' }, { label: 'Leather', value: 'Full-grain' }, { label: 'Best for', value: 'Hunter, jumper, eventer, schooling' }]}
              pros={['ATS technology — all-day comfort', 'Full zip — easy on and off', 'Multiple calf widths', 'Strong resale value', 'Competition and everyday appropriate', 'Cobbler-serviceable zipper']}
              cons={['$250–350 price point', 'Not custom fitted — calf fit can be tricky', 'Regular sole — not ideal for heavy yard work']}
              price="$250–$350"
              ctaText="Shop Ariat Heritage II →"
              ctaHref="https://www.amazon.com/s?k=ariat+heritage+contour+II+zip"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ariat-heritage-contour-ii"
            />

            <ReviewCard id="tucci" badge="Best Dress Boot" badgeEmoji="🎯" name="Tucci Marilyn Dress Boot" subtitle="Italian leather · Stiff dressage shaft · Spanish-cut top · Custom calf options" score={9.4}
              description={<div>
                <p>Tucci is one of the Italian boot makers (alongside Petrie, Konig, and DeNiro) that dominates the upper-level dressage ring. The Marilyn is a stock model that approximates the made-to-measure experience: full-grain Italian leather, a stiff shaft that holds the dressage rider&apos;s leg position cleanly through the lateral work, and the Spanish-cut top that elongates the leg visually. Tucci publishes a sizing chart with foot length, calf width, and shaft height — the brand strongly recommends measuring in a thin riding sock before ordering.</p>
                <p>This is a competition boot rather than a schooling boot. Owners typically pair it with a separate schooling tall boot (often an Ariat or DeNiro) and reserve the Tucci for shows.</p>
              </div>}
              specs={[{ label: 'Leather', value: 'Full-grain Italian', highlight: 'good' }, { label: 'Shaft', value: 'Stiff dressage cut', highlight: 'good' }, { label: 'Top', value: 'Spanish-cut' }, { label: 'Sizing', value: 'Foot + calf + shaft height', highlight: 'good' }, { label: 'Best for', value: 'Dressage competition' }]}
              pros={['Premium Italian leather', 'Stiff shaft holds leg position', 'Three-axis sizing (foot, calf, height)', 'Spanish-cut top — show-ring appropriate', 'Reliable construction']}
              cons={['$900–1,400 price point', 'Long break-in (40–60+ hours)', 'Not ideal as a schooling boot — too stiff for daily wear']}
              price="$900–$1,400"
              ctaText="Find a Tucci Dealer →"
              ctaHref="https://tucci.it"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="tucci-marilyn"
            />

            <ReviewCard id="konig" badge="Premium Custom Tall Boot" badgeEmoji="✨" name="Konig Favorit (and Made-to-Measure)" subtitle="German leather · Stock or fully measured · 8–14 week build for custom" score={9.5}
              description={<div>
                <p>Konig (often spelled König) is among the most respected German boot makers. Their stock Favorit model is built to the same shop standards as the made-to-measure line — full-grain calfskin uppers, hand-stitched seams, oak-bark-tanned soles — but in stock foot, calf, and shaft sizes. The made-to-measure line takes a fitter&apos;s tracing of foot, calf, and ankle and builds the boot specifically to that leg. Lead times for custom run 8–14 weeks; the boot is built once and is expected to outlive the rider&apos;s competition career.</p>
                <p>Konigs are a fixture in upper-level dressage and showjumping. They are also the boot owners are most likely to send back to the factory for a full rebuild after 8–10 years rather than replace — that&apos;s the build philosophy in one sentence.</p>
              </div>}
              specs={[{ label: 'Leather', value: 'Full-grain German calf', highlight: 'good' }, { label: 'Construction', value: 'Hand-stitched, oak-bark soles', highlight: 'good' }, { label: 'Sizing', value: 'Stock + made-to-measure', highlight: 'good' }, { label: 'Build time', value: '8–14 weeks for custom', highlight: 'warn' }, { label: 'Best for', value: 'Upper-level dressage and jumping' }]}
              pros={['Among the highest build quality in production', 'Made-to-measure available', 'Designed to be rebuilt rather than replaced', 'Excellent resale value in the secondhand custom market']}
              cons={['$1,200–2,500+ depending on stock vs custom', 'Long lead time for custom', 'Requires a dealer fitter for the measure']}
              price="$1,200–$2,500+"
              ctaText="Find a Konig Dealer →"
              ctaHref="https://konig.de"
              ctaAffiliateProgram="sharesale"
              ctaAffiliateProduct="konig-favorit"
            />

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Country and Yard Boots</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">A category between the tall boot and the paddock boot: boots designed for owners who spend hours on the yard, in the field, and occasionally in the saddle. They have a 1–1.5 inch heel for stirrup safety, but heavier construction than a competition tall boot, often with waterproof linings and a more rugged sole. Mountain Horse and Dubarry are the names most associated with this category.</p>

            <ReviewCard id="mountain-horse" badge="Best Yard Tall Boot" badgeEmoji="🌿" name="Mountain Horse Sovereign Field Boot" subtitle="Full-grain leather · Waterproof construction · Reinforced shank · Cold-weather rated" score={9.1}
              description={<div>
                <p>Mountain Horse, the Swedish brand, occupies the middle ground between an Ariat Heritage and a Dubarry Galway: full-grain leather, waterproof membrane construction, and a reinforced shank that holds shape under the wear of farm work. The Sovereign is the brand&apos;s flagship field boot — show-ring acceptable in field-boot disciplines, but with cold-weather and waterproof construction that makes it the choice for owners in wet or cold climates.</p>
                <p>The brand also makes excellent insulated winter paddock and yard boots (the Rimfrost is the well-known model) — a winter boot, not a competition boot, but worth knowing about for anyone with horses in a four-season climate.</p>
              </div>}
              specs={[{ label: 'Leather', value: 'Full-grain', highlight: 'good' }, { label: 'Lining', value: 'Waterproof membrane', highlight: 'good' }, { label: 'Insulation', value: 'Cold-weather rated', highlight: 'good' }, { label: 'Shank', value: 'Reinforced steel' }, { label: 'Best for', value: 'Field boot + yard work + cold/wet climate' }]}
              pros={['Waterproof construction', 'Cold-weather suitable', 'Field-boot styling', 'Reinforced shank holds shape', 'Full-grain leather build']}
              cons={['Heavier than competition-only tall boots', 'Higher price than entry-level field boots ($400–600)', 'Break-in required']}
              price="$400–$600"
              ctaText="Shop Mountain Horse Sovereign →"
              ctaHref="https://www.amazon.com/s?k=mountain+horse+sovereign"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="mountain-horse-sovereign"
            />

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Paddock Boots and Half-Chap Systems</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">A paddock boot is an ankle-height boot, traditionally with laces or a side zip, designed for general barn and riding wear. Paired with a half-chap (a leather or suede sleeve that covers the lower leg), the combination gives the leg-coverage benefits of a tall boot at roughly a third of the cost, with the bonus that the components can be replaced separately as they wear out. Most lesson programs, recreational riders, and growing children/youth ride in paddock-and-chap systems before they commit to tall boots.</p>

            <div id="half-chap" className="bg-brand-surface border border-brand-border rounded-xl p-6 mb-6">
              <h3 className="font-display font-bold text-brand-dark text-xl m-0 mb-3">Paddock Boot + Half Chap — The Practical System</h3>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3">For riders who spend as much time on the ground as in the saddle, a paddock boot (ankle-height) paired with a half chap (covering the lower leg) provides tall-boot leg contact with better walkability and lower cost. You can replace each component separately as they wear out. The combination works for recreational riding, trail work, and schooling — less appropriate for competition where tall boots are expected.</p>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-3"><strong>Recommended combinations:</strong></p>
              <ul className="text-sm text-brand-text-mid leading-relaxed list-disc pl-5 mb-3">
                <li><strong>Entry value ($150–200 combined):</strong> Ariat Bromont paddock boot + Ariat Challenger or Ovation half-chap. Standard for lesson programs and first-horse owners.</li>
                <li><strong>Mid-tier ($250–350):</strong> Ariat Devon Pro paddock boot + Tredstep Deluxe half-chap, or a Mountain Horse paddock boot + Ariat Concord chap. More leg coverage, better leather quality, longer lifespan.</li>
                <li><strong>Premium ($400–600):</strong> Petrie paddock boot + Tredstep Medici II chap, or a custom-fit half-chap on a Mountain Horse boot. At this price the system is approaching a low-end tall boot — many riders at this tier just buy the tall boot.</li>
              </ul>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-0"><strong>Fit note:</strong> the half-chap must match the paddock-boot height for a smooth, gap-free leg line. The two should be tried on together. A chap that&apos;s too tall bunches at the knee; a chap that&apos;s too short leaves a gap of exposed pant leg above the boot.</p>
            </div>

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Western Boots — Stock, Trail, and Ranch</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Western boots prioritize a different set of requirements than English boots: a higher (1.5–2 inch) underslung heel that hooks the stirrup during stock work, a pointed or rounded toe that finds the stirrup quickly, and a stiff shank that supports the foot in extended hours afoot as well as mounted. Full-grain leather is the standard above the entry tier; ostrich, lizard, and other exotic leathers are appearance choices rather than function.</p>

            <ReviewCard id="justin" badge="Best Working Western Boot" badgeEmoji="🤠" name="Justin Roper / Original Justin Work Boot" subtitle="Full-grain leather · Roper heel · Stockman-tested · American made" score={9.0}
              description={<div>
                <p>Justin is one of the foundational American western-boot makers — production has been in Fort Worth since the late 1800s. The Roper line is the working ranch boot: a lower (roper) heel that walks better than a traditional cowboy heel while still safely engaging the stirrup, full-grain leather, and a Goodyear-welted sole that a cobbler can resole rather than the boot being thrown out. For owners whose riding is ranch work, trail, and recreational western — not show — this is the standard pick.</p>
                <p>For the higher show-ring tier within western disciplines, Justin&apos;s dressier lines and brands like Lucchese take over.</p>
              </div>}
              specs={[{ label: 'Made In', value: 'USA (Fort Worth, TX)', highlight: 'good' }, { label: 'Leather', value: 'Full-grain', highlight: 'good' }, { label: 'Heel', value: 'Roper (lower walking heel)' }, { label: 'Sole', value: 'Goodyear-welted, resoleable', highlight: 'good' }, { label: 'Best for', value: 'Ranch, trail, recreational western' }]}
              pros={['American-made full-grain leather', 'Resoleable Goodyear welt', 'Walking-friendly roper heel', 'Strong value at $200–350', 'Heritage brand with long parts/service availability']}
              cons={['Not show-ring premium', 'Standard cuts; not made-to-measure', 'Pointed-toe styles cause fit issues for wider feet — try before buying']}
              price="$200–$350"
              ctaText="Shop Justin Boots →"
              ctaHref="https://www.amazon.com/s?k=justin+roper+boot"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="justin-roper"
            />

            <ReviewCard id="lucchese" badge="Best Show Western Boot" badgeEmoji="🏅" name="Lucchese Classics (Bench-Made)" subtitle="Bench-made full-grain leather · Premium show-ring boot · Custom available" score={9.4}
              description={<div>
                <p>Lucchese, based in El Paso, is the show-ring premium of American western boots — bench-made (a single bootmaker builds the pair), full-grain leather as the floor and exotic leathers as the ceiling, and a fit that approaches custom even in stock sizes. The Classics line is the well-known stock range; the Custom Made line is true made-to-measure. For owners showing in any western discipline at a serious level, a Lucchese is the show pair, often paired with a Justin or similar workhorse as the schooling pair.</p>
              </div>}
              specs={[{ label: 'Made In', value: 'USA (El Paso, TX)', highlight: 'good' }, { label: 'Construction', value: 'Bench-made', highlight: 'good' }, { label: 'Leather', value: 'Full-grain + exotic options' }, { label: 'Sizing', value: 'Stock + made-to-measure' }, { label: 'Best for', value: 'Show ring (western pleasure, reining, halter)' }]}
              pros={['Bench-made build quality', 'Premium leather options', 'Show-ring appropriate aesthetics', 'Made-to-measure available', 'Strong resale and resoleability']}
              cons={['$500–1,200 stock; $1,500–4,000+ custom or exotic', 'Long lead times for custom', 'Show-ring boot — not the daily-wear pick']}
              price="$500–$4,000+"
              ctaText="Shop Lucchese →"
              ctaHref="https://www.amazon.com/s?k=lucchese+classics"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="lucchese-classics"
            />

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Leather Grades and Sole Construction</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Full-grain leather</strong> is the top layer of the hide with the natural grain intact. It is the most durable, develops the best patina, and is the standard for any boot above the entry tier. Most premium tall boots, Mountain Horse Sovereigns, Lucchese Classics, and bench-made Justins are full-grain.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Top-grain leather</strong> has the natural grain sanded off and a uniform finish applied. It is lighter and more consistent in appearance than full-grain but less durable over decades. Many mid-tier English paddock boots and entry tall boots are top-grain.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Genuine leather and bonded leather</strong> are the budget tier. Genuine leather is a split (lower) layer of the hide; bonded leather is leather fiber held in a polyurethane matrix. Both look like leather initially and both fail meaningfully faster than full or top-grain. They have their place — first-pony pads, growing-rider paddock boots — but they are not what most owners should be buying for themselves.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Sole construction</strong> matters as much as upper leather. A <strong>Goodyear welted</strong> sole (used in most quality western boots and some country tall boots) can be resoled by any cobbler, extending the boot&apos;s life dramatically. A <strong>cement-bonded</strong> sole (used in most production tall boots, including the Ariat Heritage and many Mountain Horses) is lighter and cheaper to manufacture but typically cannot be resoled — when the sole wears through, the boot is at end of life. A <strong>stitched-down</strong> sole (used in some bench-made western boots) is between the two in resoleability.</p>

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Fit — Calf Width and Ankle Flexion</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3">For tall boots, the single most important measurement is <strong>calf circumference at the widest point</strong>. A tall boot with a too-narrow calf cannot be made to fit (zippers can be replaced and lengthened, but the leather panels themselves don&apos;t stretch enough to accommodate a meaningfully larger calf). A tall boot with a too-wide calf will gap at the back, fold under the knee, and ride down the leg as it breaks in. Every reputable brand — Ariat, Mountain Horse, Tucci, Konig — publishes a calf-width chart. Measure in a thin riding sock, at the widest point, and add no fudge factor; the chart already includes the appropriate ease.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Shaft height</strong> is the second axis. A tall boot should sit a half inch to one inch above the back of the knee crease when new and drop to just at the crease as the leather softens. Boots that arrive at the correct final height will be too short within 30 hours of wear.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Ankle flexion</strong> is the reason field boots have laces. The lace panel at the ankle was originally a flex point for jumping; modern field boots often have the same panel non-functional (decorative laces over a sewn shaft), but the higher-quality models retain the function. Dress boots forgo ankle flex entirely in favor of a stiff shaft that holds the dressage rider&apos;s leg in a steady contact.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Foot fit</strong> matters but is the most forgiving dimension — a cobbler can stretch a tight foot a half size, can add an insole to take up a loose fit, and can replace a worn footbed entirely. For paddock and western boots, foot fit and the heel cup are more critical than for tall boots, since these styles have no calf to compensate for foot fit issues.</p>

            <h2 className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Schooling Boots vs Show Boots</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Most serious competitors maintain two pairs of tall boots. The <strong>schooling pair</strong> takes the daily wear: scuffs, ring marks, mud, hose-downs, the inevitable stirrup-iron mark on the inside of the calf. It is often a year or two older than the show pair, of the same brand and last so the leg position is consistent. The <strong>show pair</strong> stays in a boot bag, gets polished and tree&apos;d, and only comes out for shows. Higher-end dress boots (Konig, Tucci, custom Vogel) are typically only ever show pairs — they are too stiff and too expensive to use daily, and the riders who own them generally also own a less-precious schooling boot (often an Ariat Heritage or DeNiro) for daily work.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">For amateur riders just entering the showing tier, the budget-honest path is a single full-grain leather tall boot from Ariat or Mountain Horse used for both school and show, polished to show standard on show day, and replaced as a single unit every 5–8 years. The two-pair system is worth the cost when the show pair would otherwise have been ruined inside a year by schooling wear.</p>

            <h2 id="faq" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[['Hunter / Jumper show', 'Ariat Heritage II (field)'], ['Dressage show', 'Tucci Marilyn or Konig'], ['Schooling tall boot', 'Ariat Heritage II'], ['Country / yard work', 'Mountain Horse Sovereign'], ['Everyday schooling', 'Paddock + half chap'], ['Ranch / trail western', 'Justin Roper'], ['Western show ring', 'Lucchese Classics'], ['Budget first boot', 'Paddock + half chap ($150–200)']].map(([u, r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{u}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Price Tiers</div>
              {[['Entry paddock + chap', '$150–$200'], ['Mid paddock + chap', '$250–$350'], ['Entry tall boot', '$200–$350'], ['Mid tall / country', '$400–$600'], ['Premium dress boot', '$900–$1,400'], ['Custom Konig', '$1,500–$2,500+'], ['Western working', '$200–$350'], ['Western show', '$500–$4,000+']].map(([cat, price]) => (
                <div key={cat} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{cat}</div>
                  <div className="text-xs font-bold text-brand-dark">{price}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Saddle Pads', href: '/reviews/best-saddle-pads' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }, { label: 'Leather Care Guide', href: '/guides/leather-care-guide' }, { label: 'Tack Cleaning Schedule', href: '/guides/tack-cleaning-schedule' }]} />
            <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Reviews and fitting guides." source="review-riding-boots" />
          </aside>
        </div>
      </div>
    </>
  )
}
