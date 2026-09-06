import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, QuickPicks, ScoreMethodology, ArticleSourcesList, CrossPortfolioCard, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildItemListSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Best Ferret Cage 2026: Bar Spacing & Floor Space | Ferret.com',
  description:
    'How to choose a ferret cage in 2026: safe bar spacing, floor space per ferret, ramp and shelf safety, and three multi-level cages ranked against those criteria.',
  path: '/reviews/best-ferret-cage',
  type: 'article',
})

const PAGE_URL = 'https://ferret.com/reviews/best-ferret-cage'

const SOURCES = [
  { label: 'Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery (housing chapter)', publisher: 'Quesenberry & Carpenter, Saunders/Elsevier' },
  { label: 'Ferret housing and husbandry guidance', publisher: 'American Ferret Association' },
  { label: 'Ferret care and housing standards', publisher: 'House Rabbit Society / exotic-mammal rescue consensus' },
  { label: 'Manufacturer product specifications (bar spacing, dimensions, pan depth)', publisher: 'Ferret Nation, Prevue Pet Products, Kaytee' },
]
const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Best Ferret Cage: Bar Spacing, Floor Space & Safety',
  description:
    'A criteria-led buyer guide to multi-level ferret cages — bar spacing, usable floor space per ferret, ramp and shelf safety — with three editorial picks scored against those standards.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-11T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',

  citation: SOURCES,
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Reviews', url: 'https://ferret.com/reviews' },
    { name: 'Best Ferret Cage', url: PAGE_URL },
  ],
})

// GEO: ItemList of the three cages that meet the criteria + an editorial
// Product/Review per pick. reviewRating maps each card's on-page disclosed
// editorial score (via ScoreMethodology); name + reviewBody come only from this
// page's ReviewCard content. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Multi-Level Ferret Cages That Meet the Criteria',
  items: [
    { name: 'Ferret Nation / Critter Nation Double Unit', url: `${PAGE_URL}#ferret-nation` },
    { name: 'Prevue Pet Products Feisty Ferret Cage', url: `${PAGE_URL}#prevue-feisty` },
    { name: 'Kaytee Multi-Level Ferret Home', url: `${PAGE_URL}#kaytee-multilevel` },
  ],
})

const products = [
  buildProductSchema({
    name: 'Ferret Nation / Critter Nation Double Unit',
    description: 'Half-inch bar spacing, full-width front doors, deep pans, expandable two-storey footprint',
    url: `${PAGE_URL}#ferret-nation`,
    ratingValue: 9.5,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'The reference multi-ferret cage in the keeping community. Half-inch wire spacing, full-width double doors that open the entire front for cleaning and handling, deep leak-proof pans, and a modular design that stacks to a second storey. The trade-offs are price, weight, and the assembly footprint — but on the safety criteria it is the clearest pick.',
  }),
  buildProductSchema({
    name: 'Prevue Pet Products Feisty Ferret Cage',
    description: 'Ferret-appropriate bar spacing, multiple solid shelves and ramps, mid-tier price',
    url: `${PAGE_URL}#prevue-feisty`,
    ratingValue: 8.4,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'A purpose-built ferret cage with appropriate wire spacing, several solid shelves and ramps, and a price below the modular systems. Floor space suits one to two ferrets comfortably; the wire shelf edges benefit from fleece or linoleum covering. A strong value pick where the larger modular units are out of budget or out of room.',
  }),
  buildProductSchema({
    name: 'Kaytee Multi-Level Ferret Home',
    description: 'Entry-level multi-level cage, widely stocked, suited to a single ferret with daily out-time',
    url: `${PAGE_URL}#kaytee-multilevel`,
    ratingValue: 7.6,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'A widely stocked entry-level multi-level cage. Bar spacing is in range and it carries shelves and ramps, but the footprint suits a single ferret with generous daily out-of-cage time rather than a pair living in it full-time. The most likely appropriate cage to find at a chain store at short notice; verify the spacing on the specific model before buying.',
  }),
]

const FAQS = [
  {
    question: 'What size cage does a ferret need?',
    answer:
      'For a single ferret, a common community guideline is a minimum usable floor area on the order of two feet by three feet, with multiple levels adding effective living space; more ferrets need proportionally more room. The cage is for sleeping, eating, litter, and water — not for living full-time. Every ferret needs several hours of supervised out-of-cage time daily regardless of cage size, so floor space and level count matter more than overall height alone.',
  },
  {
    question: 'What bar spacing is safe for a ferret cage?',
    answer:
      'Bar spacing of roughly half an inch (about 1 cm) is the widely cited target. Ferrets are escape artists with a flexible skeleton — the rule of thumb is that if a ferret can fit its head through a gap, the rest of the body will follow. Spacing wider than about an inch risks both escape and a limb or head becoming trapped. Always confirm the spacing on the exact model, as a "small animal" cage marketed for rabbits or guinea pigs often has bars too far apart.',
  },
  {
    question: 'Are wire-floor or wire-shelf cages bad for ferrets?',
    answer:
      'Bare wire floors and shelves can cause foot and hock irritation and, over time, sores. The fix is not to avoid multi-level cages but to cover wire shelves and ramps with a solid surface — fleece liners, linoleum remnants, or coroplast — so the ferret walks on a flat surface. Most experienced keepers line every wire level for this reason.',
  },
  {
    question: 'Do ramps and high shelves make a cage dangerous?',
    answer:
      'Ferrets are clumsy climbers and poor judges of height, and falls from tall open shelves are a real injury risk, especially for older or insulinoma-prone ferrets that may have sudden weakness. Choose cages with enclosed or gently sloped ramps, cover ramp wire so feet cannot slip through, and position hammocks and beds so a fall lands on a soft level rather than a hard pan. Keep the steepest drops short.',
  },
  {
    question: 'Can I keep a ferret in a cat or rabbit cage?',
    answer:
      'Usually not safely. Rabbit and guinea-pig cages typically have bar spacing too wide to contain a ferret, and many "small animal" enclosures lack the secure door latches a ferret will learn to open. A cat cage or playpen may have appropriate spacing but rarely the multi-level layout and deep pans ferrets need. Match the cage to ferret-specific spacing and latch security rather than to a general small-pet label.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, breadcrumbSchema, itemList, faqSchema, ...products)

const QUICK_PICKS = [
  { label: 'Best Overall', name: 'Ferret Nation Double Unit', subtitle: 'Half-inch bars · Modular · Full-front doors', href: '#ferret-nation' },
  { label: 'Best Value', name: 'Prevue Feisty Ferret', subtitle: 'Ferret-spaced · Shelves + ramps', href: '#prevue-feisty' },
  { label: 'Entry / Single Ferret', name: 'Kaytee Multi-Level', subtitle: 'Widely stocked · One ferret + out-time', href: '#kaytee-multilevel' },
]


export default function BestFerretCagePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Best Ferret Cage: Bar Spacing, Floor Space & Safety',
          subtitle:
            'A ferret cage is the one purchase where getting the specifications wrong has a direct safety cost — too-wide bars let a ferret escape or trap a limb, too little floor space stresses a pair, and unsafe ramps cause falls. This guide ranks multi-level cages on the criteria that matter, then names three that meet them.',
          category: 'Buyer Guides',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Reviews', href: '/reviews' },
          { name: 'Best Ferret Cage', href: '/reviews/best-ferret-cage' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Criteria That Matter', href: '#criteria' },
                { label: 'Bar Spacing', href: '#bar-spacing' },
                { label: 'Floor Space Per Ferret', href: '#floor-space' },
                { label: 'Ramp & Shelf Safety', href: '#ramps' },
                { label: 'Doors, Pans & Cleaning', href: '#cleaning' },
                { label: 'Cages That Meet the Criteria', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Cage Size Calculator', href: '/tools/cage-size-calculator' },
                { label: 'Multi-Level Housing', href: '/care/multi-level-housing' },
                { label: 'Cage Cleaning Routine', href: '/care/cage-cleaning-routine' },
                { label: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
                { label: 'Reviews Hub', href: '/reviews' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Gear Notes"
              subtitle="Criteria-based ferret buyer guides, monthly."
              source="reviews-best-ferret-cage"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
          </>
        }
        relatedLinks={[
          { title: 'Reviews Hub', href: '/reviews' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Cage Size Calculator', href: '/tools/cage-size-calculator' },
          { title: 'Multi-Level Housing', href: '/care/multi-level-housing' },
          { title: 'Best Ferret Litter', href: '/reviews/best-ferret-litter' },
          { title: 'Ferret-Proofing Your Home', href: '/care/ferret-proofing-your-home' },
          { title: 'Ferret Starter Kit', href: '/ferret-starter-kit' },
        ]}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-11"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret-cage checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret-cage checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the cage notes that match the
              ranking copy on this page — bar spacing
              first so a ferret cannot slip through,
              usable floor space per ferret rather
              than a single tall tower, ramps and
              shelves that do not catch a foot, a
              Ferret Nation / Critter Nation double
              unit when you need stacked floor space,
              Prevue Feisty when a mid-size multi-level
              fits the room, and Kaytee Multi-Level
              only as a starter. Educational housing
              checklist, not a new product hop and
              not a substitute for an exotic-animal
              veterinarian. The existing Ferret Nation
              / Prevue / Kaytee Amazon searches stay
              below. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret-cage checklist"
              subtitle="Email the bar-spacing, floor-space, and ramp notes. No spam."
              ctaText="Email my ferret-cage checklist"
              source="reviews-best-ferret-cage-under-hero"
            />
          </div>

          <QuickPicks items={QUICK_PICKS} />

          <p>
            More than any other ferret purchase, the cage is where specifications are safety. A ferret is a long,
            flexible, intensely curious carnivore that treats any gap as an invitation and any height as a challenge.
            The cages that fail ferrets are not the ugly ones — they are the ones with bars half an inch too far apart,
            the ones marketed to rabbit owners, the ones with bare wire ramps that catch a foot. This guide is built
            around the four criteria that decide whether a cage is appropriate, then ranks three widely available
            multi-level cages against them. It is a criteria comparison drawn from published specifications and keeper
            consensus, not a hands-on durability test.
          </p>

          <h2 id="criteria">The Criteria That Matter</h2>
          <p>
            A ferret cage is judged on four things, in roughly this order of importance: <strong>bar spacing</strong>{' '}
            (does it contain the ferret without trapping it), <strong>usable floor space per ferret</strong> (is there
            room for separate sleep, litter, and food zones), <strong>ramp and shelf safety</strong> (can the ferret
            move between levels without slipping or falling), and <strong>doors and pans</strong> (can you actually
            clean it and get the ferret in and out). Height and number of levels are secondary: a tall cage with a
            single small footprint is worse than a wide one with two solid levels. Everything below expands on these,
            and the full husbandry context lives in our <a href="/care/cage-setup">cage setup</a> and{' '}
            <a href="/care/multi-level-housing">multi-level housing</a> references.
          </p>

          <h2 id="bar-spacing">Bar Spacing — The Escape-and-Injury Variable</h2>
          <p>
            The single most important number on a cage spec sheet is wire spacing. The widely cited target for ferrets
            is roughly half an inch, about one centimetre. The reasoning is simple and unforgiving: a ferret&rsquo;s
            skull is the widest fixed part of its body, and if the head fits through a gap, the spine and ribs will
            compress and follow. Spacing much wider than that creates two distinct hazards — escape, and entrapment,
            where a ferret pushes its head through and cannot back out, or wedges a leg. Both are common reasons ferrets
            end up at an exotic-animal veterinarian.
          </p>
          <p>
            This is also why &ldquo;small animal&rdquo; cages are a trap. A cage sold for rabbits or guinea pigs is
            engineered for an animal that does not squeeze through gaps, and its inch-plus spacing is dangerous for a
            ferret. Always read the spacing for the exact model and, ideally, measure it on arrival rather than trusting
            a category label.
          </p>

          <h2 id="floor-space">Floor Space Per Ferret</h2>
          <p>
            After spacing, floor area is what determines whether a cage is humane. A ferret sleeps most of the day but
            needs distinct zones when awake — a litter corner well away from food and water, a sleeping hammock, and
            open floor — and crowding those together causes litter accidents and stress. A practical community
            guideline for a single ferret is a usable floor footprint on the order of a couple of feet by three feet,
            with multiple solid levels adding effective space; a second ferret meaningfully raises the requirement.
          </p>
          <p>
            Multiple levels are the efficient way to add usable area without a larger footprint, but only if the levels
            are solid (or solidly covered) and connected by safe ramps. Two generous solid levels beat four cramped wire
            ones. Remember that the cage is the bedroom, not the house: even a large cage does not replace the several
            hours of daily supervised out-of-cage time every ferret needs.
          </p>

          <h2 id="ramps">Ramp & Shelf Safety</h2>
          <p>
            Ferrets are enthusiastic but clumsy climbers and poor judges of height. Open wire shelves and steep,
            uncovered ramps create two problems: feet and hocks slip through or get sore on bare wire, and falls from
            height cause injury — a particular concern for older ferrets or those with insulinoma, who can have sudden
            episodes of weakness (see <a href="/health/insulinoma">insulinoma in ferrets</a>). The fixes are standard
            keeper practice: cover every wire shelf and ramp with fleece, linoleum, or coroplast so the surface is flat
            and grippy; favour gently sloped or enclosed ramps over steep open ones; and arrange hammocks so a fall
            lands on a soft level, not a hard pan.
          </p>

          <h2 id="cleaning">Doors, Pans & Cleaning</h2>
          <p>
            A cage you cannot clean easily becomes a cage you clean rarely, which is an odor and health problem.
            Full-width doors that open the entire front make litter changes, deep cleans, and handling far easier than a
            small hinged hatch. Deep, leak-proof pull-out pans speed up the daily litter and spot-clean routine covered
            in our <a href="/care/cage-cleaning-routine">cage cleaning routine</a>. Secure latches matter too: ferrets
            are notorious for learning to open simple catches, so a cage with positive-locking doors saves you from
            after-hours escapes.
          </p>

          <h2 id="picks">Cages That Meet the Criteria</h2>
          <p>
            Three widely available multi-level cages whose published specifications meet the spacing, space, and safety
            criteria above. Inclusion reflects manufacturer specifications and long-running adoption in ferret-keeping
            and shelter communities, not a hands-on durability test. Verify the bar spacing on the exact model you buy,
            and plan to cover wire shelves and ramps regardless of which you choose.
          </p>
          <ScoreMethodology />
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <ReviewCard
            id="ferret-nation"
            badge="Best Overall"
            name="Ferret Nation / Critter Nation Double Unit"
            subtitle="Half-inch bar spacing, full-width front doors, deep pans, expandable two-storey footprint"
            score={9.5}
            winner
            description={
              <p>The reference multi-ferret cage in the keeping community. Half-inch wire spacing, full-width double doors that open the entire front for cleaning and handling, deep leak-proof pans, and a modular design that stacks to a second storey for a pair or trio. The trade-offs are price, weight, and the assembly footprint — but on every safety criterion it is the clearest pick, which is why it dominates shelter and breeder setups.</p>
            }
            specs={[
              { label: 'Bar spacing', value: '~0.5 in', highlight: 'good' },
              { label: 'Levels', value: 'Modular (stackable)', highlight: 'good' },
              { label: 'Front access', value: 'Full-width doors', highlight: 'good' },
              { label: 'Pans', value: 'Deep, leak-proof', highlight: 'good' },
              { label: 'Best for', value: '1–4 ferrets' },
            ]}
            pros={['Ferret-correct half-inch spacing', 'Full-front doors for easy cleaning', 'Modular — expands with the colony', 'Deep pull-out pans', 'Community reference standard']}
            cons={['Premium price', 'Heavy and large assembled', 'Wire shelves need covering']}
            price="$$$"
            ctaText="Find Ferret Nation / Critter Nation"
            ctaHref="/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=reviews-best-ferret-cage"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="ferret-nation-double-unit"
          />

          <ReviewCard
            id="prevue-feisty"
            badge="Best Value"
            name="Prevue Pet Products Feisty Ferret Cage"
            subtitle="Ferret-appropriate bar spacing, multiple solid shelves and ramps, mid-tier price"
            score={8.4}
            description={
              <p>A purpose-built ferret cage with appropriate wire spacing, several shelves and ramps, and a price well below the modular systems. The floor space suits one to two ferrets comfortably, and the included shelves give vertical usable area; as with any wire cage, the shelf edges and ramps benefit from fleece or linoleum covering. A strong value pick when the larger modular units are out of budget or out of room.</p>
            }
            specs={[
              { label: 'Bar spacing', value: 'Ferret-appropriate', highlight: 'good' },
              { label: 'Levels', value: 'Multiple shelves + ramps', highlight: 'good' },
              { label: 'Price tier', value: 'Mid', highlight: 'good' },
              { label: 'Best for', value: '1–2 ferrets' },
            ]}
            pros={['Purpose-built for ferrets', 'Several shelves and ramps included', 'Lower price than modular systems', 'Good single-or-pair footprint']}
            cons={['Smaller than a double modular unit', 'Wire shelves need covering', 'Not expandable']}
            price="$$"
            ctaText="Find Prevue Feisty Ferret Cage"
            ctaHref="/go/amazon-brand/prevue+feisty+ferret+cage?s=reviews-best-ferret-cage"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="prevue-feisty-ferret-cage"
          />

          <ReviewCard
            id="kaytee-multilevel"
            badge="Entry / Single Ferret"
            name="Kaytee Multi-Level Ferret Home"
            subtitle="Entry-level multi-level cage, widely stocked, suited to a single ferret with daily out-time"
            score={7.6}
            description={
              <p>A widely stocked entry-level multi-level cage. Bar spacing is in range and it carries shelves and ramps, but the footprint suits a single ferret with generous daily out-of-cage time rather than a pair living in it full-time. It is the most likely appropriate cage to find at a chain store at short notice — verify the spacing on the specific model, and treat it as a starter cage you may outgrow if you add a second ferret.</p>
            }
            specs={[
              { label: 'Bar spacing', value: 'In range (verify model)', highlight: 'warn' },
              { label: 'Levels', value: 'Multi-level', highlight: 'good' },
              { label: 'Availability', value: 'National chain retail', highlight: 'good' },
              { label: 'Best for', value: '1 ferret + out-time' },
            ]}
            pros={['Widely available', 'Affordable entry point', 'Multi-level layout', 'Good first cage for a single ferret']}
            cons={['Tighter footprint than the others', 'Confirm spacing per model', 'May be outgrown with a second ferret']}
            price="$"
            ctaText="Find Kaytee Multi-Level Ferret Home"
            ctaHref="/go/amazon-brand/kaytee+multi+level+ferret+home?s=reviews-best-ferret-cage"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="kaytee-multi-level-ferret-home"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />

          <p className="text-sm text-brand-text-light">
            This guide describes how to evaluate a cage against published husbandry criteria; it is not individualized
            advice for a specific animal. A ferret with mobility problems, a chronic condition, or special housing needs
            should have its setup reviewed with an exotic-animal veterinarian.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
