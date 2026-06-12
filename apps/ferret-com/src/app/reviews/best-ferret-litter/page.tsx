import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, ReviewCard, QuickPicks, ScoreMethodology, ArticleSourcesList, CrossPortfolioCard, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildItemListSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Best Ferret Litter 2026: Dust-Safe, No-Clump Picks | Ferret.com',
  description:
    'The best ferret litter in 2026: paper-pellet vs other types ranked on dust and respiratory safety, why clumping cat litter is dangerous, plus odor notes.',
  path: '/reviews/best-ferret-litter',
  type: 'article',
})

const PAGE_URL = 'https://ferret.com/reviews/best-ferret-litter'

const SOURCES = [
  { label: 'Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery (husbandry & respiratory disease)', publisher: 'Quesenberry & Carpenter, Saunders/Elsevier' },
  { label: 'Softwood bedding phenols and small-mammal respiratory irritation (review of the literature)', publisher: 'Laboratory-animal husbandry references' },
  { label: 'Ferret litter and bedding guidance', publisher: 'American Ferret Association' },
  { label: 'Clumping-litter ingestion hazard in small mammals', publisher: 'Exotic-mammal veterinary clinical references' },
]
const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Best Ferret Litter: Dust Safety and the No-Clump Rule',
  description:
    'A criteria-led buyer guide to ferret litter — paper-pellet vs alternatives ranked on dust and respiratory load, the clumping-litter hazard, odor control, and tracking.',
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
    { name: 'Best Ferret Litter', url: PAGE_URL },
  ],
})

const itemList = buildItemListSchema({
  name: 'Ferret Litters That Meet the Criteria',
  items: [
    { name: 'Recycled Paper Pellet Litter', url: `${PAGE_URL}#paper-pellet` },
    { name: 'Compressed Wood (Heat-Treated) Pellet Litter', url: `${PAGE_URL}#wood-pellet` },
    { name: 'Pelleted Grass / Plant-Fiber Litter', url: `${PAGE_URL}#grass-pellet` },
  ],
})

const products = [
  buildProductSchema({
    name: 'Recycled Paper Pellet Litter',
    description: 'Low-dust, non-clumping, soft on feet — the default ferret litter',
    url: `${PAGE_URL}#paper-pellet`,
    ratingValue: 9.2,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'The default recommendation. Recycled-paper pellets are low-dust, non-clumping, absorbent, and soft enough on the feet that ferrets accept them readily. They carry no clumping agents to swallow and no fine respiratory dust. The trade-off is moderate odor control versus heavily perfumed cat litters and the need to change rather than scoop-and-top-up — both acceptable given the safety profile.',
  }),
  buildProductSchema({
    name: 'Compressed Wood (Heat-Treated) Pellet Litter',
    description: 'Kiln-dried softwood pellets, good odor control — use phenol-free types only',
    url: `${PAGE_URL}#wood-pellet`,
    ratingValue: 8.0,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'Kiln-dried, compressed softwood pellets offer strong natural odor control and low dust once the fines are sifted out. The important caveat is wood type: aromatic raw cedar and pine shavings release phenols implicated in respiratory irritation, so use only heat-treated, low-phenol compressed pellets, never loose aromatic shavings. A solid pick where odor is the priority and the product is the kiln-dried pelleted form.',
  }),
  buildProductSchema({
    name: 'Pelleted Grass / Plant-Fiber Litter',
    description: 'Soft plant-fiber pellets, low dust, lighter tracking',
    url: `${PAGE_URL}#grass-pellet`,
    ratingValue: 7.8,
    reviewAuthorName: 'Ferret.com Editorial',
    reviewBody: 'Pelleted grass and other plant-fiber litters are low-dust, non-clumping, and softer underfoot than wood, which some ferrets prefer. Odor control is moderate and the pellets can break down faster when wet, so they may need changing more often. A reasonable paper-pellet alternative for a ferret that dislikes the texture of paper or wood.',
  }),
]

const FAQS = [
  {
    question: 'What is the best litter for a ferret?',
    answer:
      'Recycled paper-pellet litter is the most widely recommended choice. It is low-dust, non-clumping, absorbent, and soft on the feet, with no clumping agents to swallow and no fine respiratory dust. Heat-treated compressed wood pellets and pelleted plant-fiber litters are good alternatives. The unifying rule is: a pelleted, low-dust, non-clumping litter — not a clay or fine-grain cat litter.',
  },
  {
    question: 'Why is clumping cat litter dangerous for ferrets?',
    answer:
      'Clumping clay litters form a solid mass when wet, which is the hazard. Ferrets dig, nose into the litter, and groom — and ingested or inhaled clumping agent can swell in the airway or digestive tract. The fine clay dust is also a respiratory irritant, and ferrets are prone to respiratory issues. For these reasons clumping cat litter is widely advised against for ferrets; use a pelleted, non-clumping litter instead.',
  },
  {
    question: 'Are pine and cedar shavings safe for ferret litter?',
    answer:
      'Loose aromatic cedar and pine shavings are best avoided. The aromatic oils (phenols) they release have long been associated in small-mammal husbandry references with respiratory irritation. Heat-treated, kiln-dried compressed wood pellets are different — the high-temperature processing drives off most of the volatile phenols — and those pelleted forms are commonly used. The distinction is loose aromatic shavings (avoid) versus heat-treated compressed pellets (acceptable).',
  },
  {
    question: 'How does litter dust affect a ferret’s health?',
    answer:
      'Ferrets have sensitive airways and are prone to respiratory problems, so a dusty litter is a genuine concern. Fine clay or sawdust dust can irritate the airway with daily exposure in an enclosed cage. Choosing a low-dust pelleted litter — and sifting out the fines from wood-pellet products — reduces that exposure. Persistent sneezing, nasal discharge, or labored breathing warrants a visit to an exotic-animal veterinarian rather than a litter change alone.',
  },
  {
    question: 'How do I get my ferret to use the litter box?',
    answer:
      'Ferrets naturally back into a corner to toilet, so corner litter boxes placed in the corners the ferret already chooses work best, with several boxes across a multi-level cage and play area. Switching to an appropriate pelleted litter is only part of it — placement and training matter more. Our litter-training guide covers the full routine, including how to reset a ferret that has picked the wrong corner.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, breadcrumbSchema, itemList, faqSchema, ...products)

const QUICK_PICKS = [
  { label: 'Best Overall', name: 'Recycled Paper Pellet', subtitle: 'Low-dust · Non-clumping · Soft', href: '#paper-pellet' },
  { label: 'Best for Odor', name: 'Heat-Treated Wood Pellet', subtitle: 'Phenol-free · Strong odor control', href: '#wood-pellet' },
  { label: 'Soft Alternative', name: 'Grass / Plant-Fiber Pellet', subtitle: 'Low-dust · Lighter tracking', href: '#grass-pellet' },
]


export default function BestFerretLitterPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Best Ferret Litter: Dust Safety and the No-Clump Rule',
          subtitle:
            'Ferret litter is chosen on two safety criteria before any of the convenience ones: how much respiratory dust it produces, and whether it clumps. Ferrets have sensitive airways and a habit of nosing and grooming in the box, which rules out the clay clumping litters most people reach for. This guide ranks the safe options.',
          category: 'Buyer Guides',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Reviews', href: '/reviews' },
          { name: 'Best Ferret Litter', href: '/reviews/best-ferret-litter' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Two Safety Criteria', href: '#criteria' },
                { label: 'Why No Clumping Litter', href: '#no-clump' },
                { label: 'Dust & the Respiratory Tract', href: '#dust' },
                { label: 'Pine & Cedar — The Phenol Problem', href: '#phenols' },
                { label: 'Odor Control & Tracking', href: '#odor' },
                { label: 'Litters That Meet the Criteria', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
                { label: 'Litter Training', href: '/care/litter-training' },
                { label: 'Odor & Scent Control', href: '/care/odor-and-scent-control' },
                { label: 'Cage Cleaning Routine', href: '/care/cage-cleaning-routine' },
                { label: 'Reviews Hub', href: '/reviews' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Gear Notes"
              subtitle="Criteria-based ferret buyer guides, monthly."
              source="reviews-best-ferret-litter"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
          </>
        }
        relatedLinks={[
          { title: 'Reviews Hub', href: '/reviews' },
          { title: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
          { title: 'Litter Training', href: '/care/litter-training' },
          { title: 'Odor & Scent Control', href: '/care/odor-and-scent-control' },
          { title: 'Best Ferret Cage', href: '/reviews/best-ferret-cage' },
          { title: 'Litter Box Troubleshooting', href: '/behavior/litter-box-troubleshooting' },
        ]}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-11"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />

          <QuickPicks items={QUICK_PICKS} />

          <p>
            Choosing ferret litter is one of the few pet-store decisions where the obvious default is the wrong answer.
            The aisle is dominated by clumping clay cat litter, and that is precisely the category to avoid for a ferret.
            Litter for a ferret is judged on two safety criteria first — dust load and whether it clumps — and only then
            on odor control, tracking, and cost. This guide explains those criteria and ranks the litter types that
            clear them. It pairs with our husbandry write-ups on{' '}
            <a href="/care/bedding-and-litter-types">bedding and litter types</a> and{' '}
            <a href="/care/litter-training">litter training</a>, which cover placement and routine in depth.
          </p>

          <h2 id="criteria">The Two Safety Criteria</h2>
          <p>
            Before convenience, a ferret litter has to clear two safety tests. First, <strong>it must be low-dust</strong>:
            ferrets have sensitive airways and are prone to respiratory problems, and a dusty litter means daily airway
            exposure in an enclosed cage. Second, <strong>it must not clump</strong>: ferrets dig, nose into, and groom
            around the box, and clumping agents that swell when wet are a hazard if inhaled or swallowed. Every litter
            type below is pelleted, low-dust, and non-clumping. The convenience criteria — odor control, tracking, and
            how often it needs changing — only decide between options that already pass the safety bar.
          </p>

          <h2 id="no-clump">Why No Clumping Cat Litter</h2>
          <p>
            Clumping clay litter is engineered to form a solid mass on contact with moisture. In a cat box that is a
            feature; around a ferret it is a hazard. Ferrets investigate with their noses and mouths and groom litter
            off their fur, so clumping agent can be ingested, where it may swell, or inhaled as fine dust. The clay dust
            itself is a respiratory irritant. For these combined reasons, clumping clay cat litter is widely advised
            against for ferrets across exotic-mammal husbandry references. The safe substitute is always a pelleted,
            non-clumping litter — the categories ranked below.
          </p>

          <h2 id="dust">Dust & the Respiratory Tract</h2>
          <p>
            Ferrets are unusually susceptible to respiratory disease — they catch human influenza, and conditions
            affecting the airway are common enough that any chronic irritant is worth removing. A high-dust litter in a
            closed cage is exactly that kind of avoidable irritant. Low-dust pelleted litters keep airborne particulate
            down; with wood-pellet products it is worth sifting out the fine sawdust that settles at the bottom of the
            bag before use. Persistent sneezing, nasal discharge, or labored breathing is not a litter problem to
            troubleshoot at home — it warrants an exotic-animal veterinarian, as noted in our{' '}
            <a href="/health/emergency-warning-signs">emergency warning signs</a> guide.
          </p>

          <h2 id="phenols">Pine & Cedar — The Phenol Problem</h2>
          <p>
            Loose aromatic cedar and pine shavings deserve a specific warning. The aromatic oils they release —
            phenols — have a long association in small-mammal husbandry literature with respiratory irritation, which is
            why loose aromatic shavings are discouraged as ferret litter. The nuance that confuses people is that
            heat-treated, kiln-dried <em>compressed wood pellets</em> are different: the high-temperature processing
            drives off most of the volatile phenols, and those pelleted forms are commonly and acceptably used. The line
            to remember is loose aromatic shavings (avoid) versus heat-treated compressed pellets (fine).
          </p>

          <h2 id="odor">Odor Control & Tracking</h2>
          <p>
            Once a litter passes the safety bar, odor control and tracking decide the day-to-day experience. Ferret
            waste is pungent, and litter alone will never fully control it — that is a job for diet, frequent cleaning,
            and the techniques in our <a href="/care/odor-and-scent-control">odor and scent control</a> guide. Among the
            safe pelleted litters, heat-treated wood pellets tend to control odor best, paper pellets are middling, and
            grass pellets are similar to paper. Pellets track far less than fine litters but can still scatter; a
            high-backed corner box and a litter mat help. Avoid the temptation to switch to a perfumed clumping litter
            for odor — that trades a real safety margin for a cosmetic one.
          </p>

          <h2 id="picks">Litters That Meet the Criteria</h2>
          <p>
            Three litter categories whose published characteristics clear the low-dust, non-clumping safety bar. This is
            a criteria comparison of litter types and the products that represent them, not a hands-on test. Within each
            category, choose a reputable pelleted product and confirm it is non-clumping and free of added clumping
            agents.
          </p>
          <ScoreMethodology />
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <ReviewCard
            id="paper-pellet"
            badge="Best Overall"
            name="Recycled Paper Pellet Litter"
            subtitle="Low-dust, non-clumping, soft on feet — the default ferret litter"
            score={9.2}
            winner
            description={
              <p>The default recommendation for ferrets. Recycled-paper pellets are low-dust, non-clumping, absorbent, and soft enough on the feet that ferrets accept them readily. There are no clumping agents to swallow and no fine respiratory dust. The trade-offs are moderate odor control versus heavily perfumed cat litters and the need to change rather than scoop-and-top-up — both easily acceptable given the safety profile. If you buy one litter without overthinking it, buy this.</p>
            }
            specs={[
              { label: 'Dust', value: 'Very low', highlight: 'good' },
              { label: 'Clumping', value: 'None', highlight: 'good' },
              { label: 'On the feet', value: 'Soft', highlight: 'good' },
              { label: 'Odor control', value: 'Moderate', highlight: 'warn' },
              { label: 'Best for', value: 'Most ferrets' },
            ]}
            pros={['Very low dust', 'Fully non-clumping', 'Soft and well accepted', 'No ingestion or inhalation hazard', 'Widely available']}
            cons={['Moderate odor control', 'Change rather than scoop', 'Lighter pellets can scatter']}
            price="$$"
            ctaText="Find Paper Pellet Litter on Chewy"
            ctaHref="/go/chewy-brand/yesterdays+news+recycled+paper+pellet+litter+non+clumping?s=reviews-best-ferret-litter"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="paper-pellet-litter"
          />

          <ReviewCard
            id="wood-pellet"
            badge="Best for Odor"
            name="Compressed Wood (Heat-Treated) Pellet Litter"
            subtitle="Kiln-dried softwood pellets, strong odor control — use phenol-free types only"
            score={8.0}
            description={
              <p>Kiln-dried, compressed softwood pellets offer the strongest natural odor control of the safe options and low dust once the fines are sifted out. The important caveat is the wood form: aromatic raw cedar and pine shavings release phenols implicated in respiratory irritation, so use only heat-treated, low-phenol compressed pellets — never loose aromatic shavings. With that caveat respected, it is a strong pick when odor is the priority.</p>
            }
            specs={[
              { label: 'Dust', value: 'Low (sift fines)', highlight: 'good' },
              { label: 'Clumping', value: 'None', highlight: 'good' },
              { label: 'Odor control', value: 'Strong', highlight: 'good' },
              { label: 'Caveat', value: 'Heat-treated only', highlight: 'warn' },
              { label: 'Best for', value: 'Odor-priority setups' },
            ]}
            pros={['Best natural odor control of the safe options', 'Low dust once fines are removed', 'Economical', 'Non-clumping']}
            cons={['Must be heat-treated / low-phenol', 'Never use loose aromatic shavings', 'Harder underfoot than paper']}
            price="$"
            ctaText="Find Wood Pellet Litter on Amazon"
            ctaHref="/go/amazon-brand/compressed+wood+pellet+litter+heat+treated+non+clumping?s=reviews-best-ferret-litter"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="compressed-wood-pellet-litter"
          />

          <ReviewCard
            id="grass-pellet"
            badge="Soft Alternative"
            name="Pelleted Grass / Plant-Fiber Litter"
            subtitle="Soft plant-fiber pellets, low dust, lighter tracking"
            score={7.8}
            description={
              <p>Pelleted grass and other plant-fiber litters are low-dust, non-clumping, and softer underfoot than wood, which some ferrets clearly prefer. Odor control is moderate and the pellets can break down faster when wet, so they may need changing more often than wood. A reasonable paper-pellet alternative — useful mainly for a ferret that dislikes the texture of paper or wood pellets.</p>
            }
            specs={[
              { label: 'Dust', value: 'Low', highlight: 'good' },
              { label: 'Clumping', value: 'None', highlight: 'good' },
              { label: 'On the feet', value: 'Soft', highlight: 'good' },
              { label: 'Odor control', value: 'Moderate', highlight: 'warn' },
              { label: 'Best for', value: 'Texture-fussy ferrets' },
            ]}
            pros={['Low dust', 'Non-clumping', 'Soft texture some ferrets prefer', 'Lighter tracking']}
            cons={['Moderate odor control', 'Breaks down faster when wet', 'May need more frequent changes']}
            price="$$"
            ctaText="Find Grass Pellet Litter on Amazon"
            ctaHref="/go/amazon-brand/small+animal+grass+pellet+litter+non+clumping?s=reviews-best-ferret-litter"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="grass-pellet-litter"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />

          <p className="text-sm text-brand-text-light">
            This guide describes how to choose a litter type against published safety criteria; it is not individualized
            advice. A ferret with ongoing respiratory signs, or any litter-box change that coincides with illness,
            should be evaluated by an exotic-animal veterinarian rather than managed with a litter swap alone.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
