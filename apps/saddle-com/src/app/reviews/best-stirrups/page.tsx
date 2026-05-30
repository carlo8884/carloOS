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
  title: 'Best Stirrups 2026 — Safety, Composite & Traditional | Saddle.com',
  description:
    'Best stirrups by category — Fillis iron, composite (Acavallo), safety (FreeJump, Tech, Peacock). USEF Rule HJ-117, weight + tread tradeoffs.',
  path: '/reviews/best-stirrups',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'saddle-com',
  title: 'Best Stirrups 2026',
  description:
    'Traditional iron, composite, safety, and western stirrups compared. USEF Rule HJ-117 safety stirrup guidance, weight and tread tradeoffs explained.',
  url: 'https://saddle.com/reviews/best-stirrups',
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-05-29T00:00:00Z',
  modifiedAt: '2026-05-29T00:00:00Z',
})

const freejumpSchema = buildProductSchema({
  name: 'FreeJump Soft Up Pro Safety Stirrup',
  description: 'French-made composite safety stirrup with single flexible-arm release mechanism and angled tread.',
  url: 'https://freejump.com',
  imageUrl: '',
  ratingValue: 9.5,
  reviewCount: 1,
})
const techSchema = buildProductSchema({
  name: 'Tech Stirrups Venice Safety',
  description: 'Italian-made safety stirrup with magnetic release outside branch — top-level show jumping use.',
  url: 'https://techstirrups.com',
  imageUrl: '',
  ratingValue: 9.3,
  reviewCount: 1,
})
const acavalloSchema = buildProductSchema({
  name: 'Acavallo Arena Aluminum Stirrup',
  description: 'Lightweight aluminum stirrup with wide angled tread for everyday use.',
  url: 'https://acavallo.com',
  imageUrl: '',
  ratingValue: 9.0,
  reviewCount: 1,
})
const peacockSchema = buildProductSchema({
  name: 'Korsteel Peacock Safety Stirrup',
  description: 'Traditional rubber-band-release safety stirrup — the classic affordable child safety option.',
  url: 'https://korsteel.com',
  imageUrl: '',
  ratingValue: 8.5,
  reviewCount: 1,
})
const fillisSchema = buildProductSchema({
  name: 'Centaur Fillis Stainless Steel Iron',
  description: 'Traditional Fillis-pattern stainless steel stirrup iron with rubber tread.',
  url: 'https://centaur.com',
  imageUrl: '',
  ratingValue: 8.6,
  reviewCount: 1,
})

const FAQ_ITEMS = [
  {
    question: 'Why do safety stirrups matter?',
    answer:
      'A foot trapped in a stirrup after a fall causes a horse-dragging accident, one of the highest-mortality classes of riding injury. Multiple research and registry sources document drag-related fatalities in horse sport; safety stirrups are designed to release the foot if the rider falls. The USEF Hunter/Jumper Rule HJ-117 explicitly recommends safety stirrups for junior riders and is increasingly applied across age groups in the show ring. Pony Club and many lesson programs require them. The cost of a quality safety stirrup ($150-300) is trivial against the injury cost of a dragging incident.',
    answerText:
      'A foot trapped in a stirrup after a fall causes drag-related fatalities. USEF Rule HJ-117 recommends safety stirrups for juniors; Pony Club and lesson programs commonly require them.',
  },
  {
    question: 'How much should a stirrup weigh?',
    answer:
      'Composite stirrups (FreeJump, Tech, Acavallo, Compositi) weigh roughly 150-250 g each; stainless steel Fillis irons weigh 350-450 g each. The weight matters because heavier stirrups swing harder when the rider drops them and require more effort to recover. Most upper-level show jumpers ride in composite stirrups for that reason. Lighter is not universally better — heavier traditional irons feel more stable to some riders and are required in some traditional show classes. Choose by feel, not by weight alone.',
    answerText:
      'Composite stirrups: 150-250 g. Steel Fillis irons: 350-450 g. Lighter stirrups recover faster but heavier irons feel more stable to some riders. Choose by feel, not weight.',
  },
  {
    question: 'What is the difference between sandblasted, rubber, and knurled treads?',
    answer:
      'The tread is the part of the stirrup that contacts the boot sole. Plain rubber treads (the default on most traditional irons) are inexpensive, grippy when new, but wear smooth and slick within a year of regular use; rubber tread inserts are cheap and replaceable. Sandblasted metal treads (Acavallo, Compositi) have a permanently rough surface that does not wear down. Knurled tooth treads (FreeJump Pro Grip, Tech Aluminum Grip) have small upright teeth for maximum grip in mud or wet weather and are the standard on show-jumping and cross-country stirrups.',
    answerText:
      'Rubber: grippy when new, wears smooth in a year, cheap to replace. Sandblasted metal: permanently rough, no wear. Knurled tooth: maximum grip for jumping and cross-country, the show jumping standard.',
  },
  {
    question: 'What is USEF Rule HJ-117 on safety stirrups?',
    answer:
      'USEF Rule HJ-117 (Junior Hunter and Equitation) addresses safety equipment for junior competitors and includes recommendations on safety-release stirrups. The text is updated periodically; check the current USEF rulebook at usef.org for the version in force. The principle has been consistent for years: USEF recommends safety stirrups for junior riders and encourages adoption across other age groups, while Pony Club, lesson programs, and many junior riding camps make safety stirrups a hard requirement. Riders should treat the recommendation as a baseline minimum for any rider under 18 and a strong preference for adult amateurs as well.',
    answerText:
      'USEF Rule HJ-117 recommends safety stirrups for junior hunter and equitation classes. Pony Club and lesson programs commonly require them. Treat as a baseline for any rider under 18.',
  },
  {
    question: 'Do composite stirrups break in a fall?',
    answer:
      'High-end composite stirrups (FreeJump, Tech) are designed and tested to flex and release the foot rather than break. Lower-cost composite stirrups (Compositi, generic plastic copies) are reliable in normal use but the impact and abrasion resistance varies by brand. The most important safety mechanism is not the body of the stirrup but the release path — FreeJump uses a single flexible outside arm, Tech uses an outside magnetic catch, Equipe and Korsteel Peacock use a rubber band or elastic release. Whatever the mechanism, replace any safety stirrup that has been in a fall, has visible cracks, or is past the manufacturer-recommended service life.',
    answerText:
      'High-end composite stirrups (FreeJump, Tech) are designed to flex and release. Replace any safety stirrup after a fall, after visible cracking, or past manufacturer service life.',
  },
  {
    question: 'Western stirrups — what is different?',
    answer:
      'Western stirrups are built into the western saddle (the fender + stirrup leather is a single piece of leather rather than separate adjustable stirrup leathers as on an English saddle), and the stirrup itself is typically wider, deeper, and made of wood or aluminum with leather or rawhide wrap. The wider, deeper tread suits the cowboy boot heel and the longer leg position of western riding. Roping and ranch stirrups are reinforced for heavy work; oxbow stirrups (narrow, deep) are traditional in bronc riding and some cutting events; tap (tapadero)-covered stirrups protect the foot in brush country. Width and depth are matched to the rider boot and discipline.',
    answerText:
      'Western stirrups are built into the saddle, are wider and deeper than English stirrups, and are matched to the cowboy boot and discipline (roping, oxbow, tapadero).',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answerText || (typeof f.answer === 'string' ? f.answer : '') })),
})

const allSchemas = combineSchemas(articleSchema, freejumpSchema, techSchema, acavalloSchema, peacockSchema, fillisSchema, faqSchema)

const PICKS = [
  { label: 'Best Safety Stirrup', emoji: '🏆', name: 'FreeJump Soft Up Pro', subtitle: 'Flexible arm release · French-made · FEI top-level', href: '#freejump' },
  { label: 'Best Show Jumping', emoji: '⭐', name: 'Tech Venice Safety', subtitle: 'Magnetic release · Italian · Olympic-level use', href: '#tech' },
  { label: 'Best Composite Everyday', emoji: '🎯', name: 'Acavallo Arena', subtitle: 'Lightweight aluminum · Wide tread', href: '#acavallo' },
  { label: 'Best Budget Safety', emoji: '💰', name: 'Korsteel Peacock', subtitle: 'Classic rubber-band release · Junior standard', href: '#peacock' },
  { label: 'Best Traditional', emoji: '🐴', name: 'Centaur Fillis Iron', subtitle: 'Stainless steel · Classic show appearance', href: '#fillis' },
]

export default function BestStirrupsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer&apos;s Guide</span>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Stirrups 2026 &mdash; Safety, Composite, Traditional &amp; Western</h1>
          <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
            A trapped foot is the leading cause of horse-dragging fatalities. Safety stirrups (FreeJump, Tech, Equipe, Korsteel Peacock) compared against traditional Fillis irons and lightweight composite options. USEF Rule HJ-117 safety guidance throughout.
          </p>
        </div>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Stirrups</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />

            <DropCap>
              Stirrup choice splits into four categories: traditional iron (Fillis pattern, the classic stainless steel show iron), composite (Acavallo, Compositi &mdash; lightweight aluminum or polymer for everyday use), safety stirrups (FreeJump, Tech, Equipe, Korsteel Peacock &mdash; designed to release the foot in a fall), and western. The most important call is whether safety stirrups are in scope. The USEF Hunter/Jumper Rule HJ-117 explicitly recommends them for junior riders and Pony Club requires them &mdash; foot-trap fatalities in falls are well documented and avoidable.
            </DropCap>

            <CalloutBox variant="warning" title="Why safety stirrups matter">
              A rider whose foot stays in the stirrup after a fall is dragged by the horse &mdash; one of the highest-mortality classes of riding injury on record. USEF Rule HJ-117 recommends safety stirrups for junior hunter and equitation competitors. Pony Club and the majority of US lesson programs require them. For any rider under 18, treat safety stirrups as a baseline minimum.
            </CalloutBox>

            <ScoreMethodology />

            <h2 id="categories" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">The Four Stirrup Categories</h2>
            <ul className="text-base text-brand-text-mid leading-relaxed mb-6 list-disc pl-6">
              <li><strong>Traditional iron (Fillis):</strong> stainless steel, ~400 g, classic appearance, accepted in all show rings. No safety release.</li>
              <li><strong>Composite:</strong> aluminum or polymer, ~150&ndash;250 g, lightweight everyday use. Some composite stirrups also incorporate safety mechanisms.</li>
              <li><strong>Safety stirrups:</strong> designed to release the foot in a fall. Multiple mechanisms (flexible arm, magnetic release, rubber-band release, articulated branch). Required in some programs, recommended in many.</li>
              <li><strong>Western:</strong> built into the saddle&apos;s fender system, wider and deeper than English stirrups, matched to cowboy boot and discipline.</li>
            </ul>

            <h2 id="safety" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Safety Stirrups &mdash; FreeJump, Tech, Equipe, Peacock</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Modern safety stirrups use one of four release mechanisms: a <strong>flexible outside arm</strong> (FreeJump &mdash; the arm bends outward under sideways load, releasing the foot), a <strong>magnetic outside catch</strong> (Tech &mdash; the outside branch releases when a magnetic catch is loaded laterally), an <strong>articulated outside branch</strong> (Equipe Phoenix &mdash; the outside branch hinges open under load), or a <strong>rubber-band release</strong> (Korsteel Peacock &mdash; the outside is a rubber band that snaps if the rider falls). All four work; cost, durability, weight, and aesthetics differ.</p>

            <ReviewCard
              id="freejump"
              badge="Best Safety Stirrup"
              badgeEmoji="🏆"
              name="FreeJump Soft Up Pro"
              subtitle="Flexible outside arm release · French-made · FEI top-level show jumping use"
              score={9.5}
              winner
              description={
                <p>
                  The FreeJump Soft Up Pro is the safety stirrup widely seen at FEI show jumping levels. The outside branch is replaced by a single flexible arm that bends outward under sideways load, releasing the foot if the rider falls. The angled tread positions the foot in a slightly toe-in, heel-down position that some riders find improves leg stability. Replaceable rubber inserts on the tread are sold separately and last 12&ndash;24 months in regular use. The mechanism does not require active engagement &mdash; the safety release works whether or not the rider remembers it.
                </p>
              }
              specs={[
                { label: 'Release mechanism', value: 'Flexible outside arm', highlight: 'good' },
                { label: 'Weight', value: '~ 230 g each', highlight: 'good' },
                { label: 'Tread', value: 'Angled, replaceable rubber' },
                { label: 'Pro adoption', value: 'FEI show jumping standard' },
              ]}
              pros={['Passive release &mdash; works without active engagement', 'FEI top-level reference product', 'Angled tread improves leg position for many riders', 'Replaceable tread inserts']}
              cons={['$300&ndash;380 &mdash; premium price', 'Distinctive look that some traditionalists dislike', 'Branch arm requires periodic inspection for fatigue']}
              price="$300&ndash;380"
              ctaText="Shop FreeJump Soft Up Pro →"
              ctaHref="/go/amazon-brand/freejump+soft+up+pro+stirrup?s=reviews-best-stirrups"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="freejump-soft-up-pro"
            />

            <ReviewCard
              id="tech"
              badge="Best Show Jumping Safety"
              badgeEmoji="⭐"
              name="Tech Stirrups Venice Safety"
              subtitle="Magnetic outside release · Italian craftsmanship · Olympic-level use"
              score={9.3}
              description={
                <p>
                  Tech Stirrups (Italy) build a range of safety stirrups with an outside-branch magnetic catch that releases under lateral load. The Venice is the show-jumping standard in the Tech line &mdash; light aluminum body, magnetic release, knurled tooth tread for grip in mud and water. Multiple Olympic show jumpers compete in Tech stirrups; the brand has built a comparable reputation to FreeJump at a similar price point. The magnetic catch is easy to recouple after a release.
                </p>
              }
              specs={[
                { label: 'Release mechanism', value: 'Magnetic outside catch', highlight: 'good' },
                { label: 'Weight', value: '~ 250 g each' },
                { label: 'Tread', value: 'Knurled tooth grip', highlight: 'good' },
                { label: 'Pro adoption', value: 'Olympic-level show jumping' },
              ]}
              pros={['Knurled tread is the show-jumping standard', 'Magnetic release is intuitive and easily reset', 'Wide range of color and finish options', 'Italian build quality']}
              cons={['$280&ndash;360', 'Magnetic catch can rust if not maintained', 'Heavier than the lightest composite alternatives']}
              price="$280&ndash;360"
              ctaText="Shop Tech Venice →"
              ctaHref="/go/amazon-brand/tech+stirrups+venice?s=reviews-best-stirrups"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="tech-venice-safety"
            />

            <ReviewCard
              id="peacock"
              badge="Best Budget Safety"
              badgeEmoji="💰"
              name="Korsteel Peacock Safety Stirrup"
              subtitle="Rubber-band outside release · The classic affordable junior safety stirrup"
              score={8.5}
              description={
                <p>
                  The Korsteel Peacock is the traditional safety stirrup &mdash; a stainless steel iron with the outside branch replaced by a rubber band that snaps under load, releasing the foot. It is the most affordable safety stirrup on the market and remains the standard junior safety stirrup in many lesson programs and Pony Club barns. The downside is asymmetric weight (the metal inside branch is heavier than the rubber outside), which can cause the stirrup to hang twisted at rest. Replacement rubber bands are sold by the pair for a few dollars.
                </p>
              }
              specs={[
                { label: 'Release mechanism', value: 'Rubber band breaks under load', highlight: 'good' },
                { label: 'Weight', value: '~ 400 g each (asymmetric)', highlight: 'warn' },
                { label: 'Tread', value: 'Replaceable rubber pad' },
                { label: 'Use case', value: 'Junior, lesson, Pony Club' },
              ]}
              pros={['By far the cheapest safety option ($40&ndash;70 pair)', 'Replacement rubber bands are trivial cost', 'Long-established Pony Club standard', 'Familiar appearance &mdash; not visually distinctive']}
              cons={['Asymmetric weight &mdash; hangs twisted at rest', 'Rubber bands degrade in UV and must be checked seasonally', 'Less stable than modern composite safety stirrups']}
              price="$40&ndash;70"
              ctaText="Shop Korsteel Peacock →"
              ctaHref="/go/amazon-brand/korsteel+peacock+safety+stirrup?s=reviews-best-stirrups"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="korsteel-peacock"
            />

            <h2 id="composite" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Composite &mdash; Acavallo, Compositi</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">Composite stirrups (lightweight aluminum or fiber-reinforced polymer) are the everyday choice for adult amateurs and recreational riders who do not need a safety release mechanism but want the weight advantage. <strong>Acavallo</strong> (Italy) and <strong>Compositi</strong> (Italy) are the two reference brands. A typical composite stirrup weighs 150&ndash;200 g per side versus 400 g for a stainless steel Fillis iron &mdash; the weight difference is noticeable in stirrup recovery if you drop one mid-ride.</p>

            <ReviewCard
              id="acavallo"
              badge="Best Composite Everyday"
              badgeEmoji="🎯"
              name="Acavallo Arena Aluminum Stirrup"
              subtitle="Lightweight aluminum · Wide angled tread · Everyday English use"
              score={9.0}
              description={
                <p>
                  The Acavallo Arena is the reference everyday composite stirrup &mdash; aluminum body, wide sandblasted tread that does not wear smooth, and a 10-degree angled foot bed that supports a heels-down position. Light enough (around 220 g per side) to feel like a noticeable improvement over a steel Fillis iron, but without a safety release mechanism. The right choice for an adult amateur or recreational rider who wants light weight and reliable grip without the safety-stirrup price.
                </p>
              }
              specs={[
                { label: 'Material', value: 'Aluminum body', highlight: 'good' },
                { label: 'Weight', value: '~ 220 g each', highlight: 'good' },
                { label: 'Tread', value: 'Sandblasted, angled 10&deg;', highlight: 'good' },
                { label: 'Safety release', value: 'None', highlight: 'warn' },
              ]}
              pros={['Half the weight of stainless steel', 'Sandblasted tread does not wear smooth', 'Wide foot bed', 'Solid value at $90&ndash;130']}
              cons={['No safety release mechanism', 'Aluminum can dent if dropped on concrete', 'Not accepted in some traditional show classes']}
              price="$90&ndash;130"
              ctaText="Shop Acavallo Arena →"
              ctaHref="/go/amazon-brand/acavallo+arena+stirrup?s=reviews-best-stirrups"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="acavallo-arena"
            />

            <h2 id="traditional" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Traditional &mdash; Fillis Pattern Iron</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-5">The Fillis pattern stainless steel iron (named after the 19th-century French rider James Fillis) is the classic English show iron &mdash; stainless steel, weighted-side branches, rubber tread insert. Required look in some traditional hunter classes; widely accepted everywhere else. The weight (about 400 g per side) is the price; the stability and longevity are the benefit. A Fillis iron lasts decades.</p>

            <ReviewCard
              id="fillis"
              badge="Best Traditional Iron"
              badgeEmoji="🐴"
              name="Centaur Fillis Stainless Steel Iron"
              subtitle="Stainless steel · Rubber tread · Classic show appearance"
              score={8.6}
              description={
                <p>
                  Centaur&apos;s Fillis iron is the entry into the traditional stainless-steel iron category &mdash; correct Fillis profile (slightly weighted bottom for orientation, eye at the top for stirrup leather), 4&frac34;-inch standard size (sized to the boot), replaceable rubber tread. Heavier than composite alternatives (around 400 g per side) but the weight is what makes the iron hang correctly when the rider drops it. Accepted in every English show class. Drawback: no safety release mechanism.
                </p>
              }
              specs={[
                { label: 'Material', value: 'Stainless steel', highlight: 'good' },
                { label: 'Weight', value: '~ 400 g each' },
                { label: 'Tread', value: 'Rubber pad, replaceable' },
                { label: 'Safety release', value: 'None', highlight: 'warn' },
              ]}
              pros={['Universally accepted show appearance', 'Hangs correctly due to weighted profile', 'Will outlast the saddle', 'Affordable ($40&ndash;70 pair)']}
              cons={['No safety release', '4x the weight of composite alternatives', 'Rubber tread wears smooth in 12&ndash;18 months']}
              price="$40&ndash;70"
              ctaText="Shop Centaur Fillis Iron →"
              ctaHref="/go/amazon-brand/centaur+fillis+stirrup+iron?s=reviews-best-stirrups"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="centaur-fillis-iron"
            />

            <h2 id="weight-tread" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Weight, Tread, and Sizing</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Weight.</strong> Composite stirrups (150&ndash;250 g per side) are lighter than steel Fillis irons (350&ndash;450 g per side). The trade-off: heavier stirrups feel more stable to many riders and recover faster from being lost (they swing down rather than hang sideways). Lighter stirrups are easier on the saddle leather and reduce inertia in the rider&apos;s leg. There is no universal best; pick the weight class that matches your discipline and feel.</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-3"><strong>Tread.</strong> Three options: <strong>rubber</strong> (cheap, replaceable, smooths out in a year), <strong>sandblasted metal</strong> (rough surface that does not wear down, the everyday standard for composite stirrups), and <strong>knurled tooth</strong> (small upright teeth, maximum grip in mud or wet weather, the show-jumping and cross-country standard).</p>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6"><strong>Sizing.</strong> Stirrup size (the inside width of the tread) is matched to the rider&apos;s boot. A standard adult English stirrup is 4&frac34; inches (12 cm); 4&frac12; inches for narrower boots, 5 inches for wider. The boot ball of the foot should rest centered in the tread with about 1 cm clearance on each side &mdash; tighter than that risks the foot wedging in the stirrup; looser, the foot slides too freely.</p>

            <CalloutBox variant="evidence" title="USEF Rule HJ-117 and Pony Club guidance">
              USEF Hunter/Jumper Rule HJ-117 addresses safety equipment for junior competitors and includes recommendations on safety-release stirrups. The text is updated periodically &mdash; check the current USEF rulebook at <a href="https://www.usef.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">usef.org</a> for the version in force. The United States Pony Clubs (USPC) and the British Horse Society have required safety-release stirrups in their organized programs for many years. The principle is universal: any rider under 18 should be in safety stirrups by default.
            </CalloutBox>

            <h2 id="faq" className="font-display font-bold text-brand-dark text-2xl mt-10 mb-4">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQ_ITEMS} includeSchema={false} allowMultiple />

            <CalloutBox variant="note" title="Sources">
              USEF Hunter/Jumper Rule HJ-117 (current edition) &mdash; <a href="https://www.usef.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">usef.org</a>. United States Pony Clubs (USPC) safety equipment standards &mdash; <a href="https://www.ponyclub.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">ponyclub.org</a>. British Horse Society safety equipment guidance. Brand specifications drawn from manufacturer technical sheets (FreeJump, Tech Stirrups, Acavallo, Korsteel, Centaur).
            </CalloutBox>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[
                ['Junior / Pony Club', 'FreeJump or Peacock'],
                ['Show jumping (FEI / A-level)', 'FreeJump or Tech'],
                ['Adult dressage', 'Acavallo or Fillis'],
                ['Eventing', 'FreeJump (jumping), Acavallo (flatwork)'],
                ['Trail / recreational', 'Acavallo composite'],
                ['Traditional hunter show', 'Fillis iron'],
              ].map(([u, r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{u}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Stirrup Iron Guide', href: '/guides/stirrup-iron-guide' },
                { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' },
                { label: 'Best Riding Helmets', href: '/reviews/best-riding-helmets' },
                { label: 'Best Riding Boots', href: '/reviews/best-riding-boots' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="saddle-com"
              title="Free Equipment Guides"
              subtitle="Reviews and safety gear references."
              source="review-stirrups"
            />
          </aside>
        </div>
      </div>
    </>
  )
}
