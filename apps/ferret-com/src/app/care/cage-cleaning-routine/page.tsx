import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  CrossPortfolioCard,
  ArticleSourcesList,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Cage Cleaning Routine — Daily & Weekly Schedule | Ferret.com',
  description:
    'A realistic ferret cage-cleaning schedule: daily litter and food tasks, weekly bedding, the monthly deep clean, and ferret-safe disinfectants.',
  path: '/care/cage-cleaning-routine',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Cage Cleaning Routine',
  description:
    "A practical daily, weekly, and deep-clean routine for ferret habitats — litter and food hygiene, bedding laundry, safe disinfectants, and the balance between cleanliness and preserving litter-training scent cues.",
  url: 'https://ferret.com/care/cage-cleaning-routine',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Care', url: 'https://ferret.com/care' },
    { name: 'Cage Cleaning Routine', url: 'https://ferret.com/care/cage-cleaning-routine' },
  ],
})

const FAQS = [
  {
    question: 'How often should I clean a ferret cage?',
    answer:
      "Litter boxes need spot-cleaning at least once or twice a day, and food and water should be refreshed daily. Bedding — hammocks, sleep sacks, fleece liners — is typically laundered every few days to once a week. A full deep clean of the cage frame, trays, and accessories is usually done every two to four weeks. Heavily-soiled spots are cleaned as they happen.",
  },
  {
    question: 'What disinfectant is safe for a ferret cage?',
    answer:
      "Diluted white vinegar is a popular, ferret-safe everyday option for litter pans and trays, and it cuts the mineral and urine residue that holds odor. For periodic disinfection, an animal-safe accelerated-hydrogen-peroxide cleaner or a thoroughly-rinsed dilute bleach solution can be used, but everything must be rinsed and fully dried before the ferret returns. Avoid phenol-based cleaners (many pine-scented products) — phenols are toxic to ferrets.",
  },
  {
    question: 'Can I over-clean a ferret cage?',
    answer:
      "In a sense, yes. Stripping every trace of the ferret's scent from the cage at once can unsettle litter habits, because ferrets rely partly on scent cues to know where the box is. Cleaning everything at the same time on the same day also removes all familiar smell at once. Stagger laundry and tray cleaning, and on a deep-clean day leave one lightly-used item unwashed so a familiar scent remains.",
  },
  {
    question: 'Why does my cage smell even after cleaning?',
    answer:
      "Most lingering cage odor comes from urine residue soaked into porous surfaces and from unwashed bedding, not from the ferret's body. Litter pans that are not fully wiped down, fabric that needs laundering more often, and a diet high in cheap plant ingredients all add to smell. Bathing the ferret is not the fix and often makes odor worse. See our odor and scent control guide for the full breakdown.",
  },
  {
    question: 'Do I need to wash food and water dishes every day?',
    answer:
      "Yes. Water bowls and bottles grow a biofilm that harbors bacteria within a day or two, and food dishes accumulate residue. Wash water vessels daily and refill with fresh water; wash food dishes daily as well. A scrub with hot soapy water and a thorough rinse is enough — these do not need disinfectant every day.",
  },
  {
    question: 'How do I clean a cage when I have more than one ferret?',
    answer:
      "Multi-ferret households need more litter boxes — at least one per cage level plus extras in free-roam rooms — and more frequent spot-cleaning, because the soiling load rises with each animal. The bedding-laundry and deep-clean cadence stays similar but the daily litter tasks scale up. Keeping enough boxes is the single biggest factor in keeping a multi-ferret cage manageable.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — husbandry, environmental hygiene, and toxicology chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Veterinary Clinics of North America: Exotic Animal Practice — articles on ferret husbandry and environmental management",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — cage-care and cleaning guidance for ferret owners",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
]

export default function FerretCageCleaningRoutinePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Cage Cleaning Routine',
          subtitle:
            "A clean cage is the single biggest lever on a ferret household's odor and on litter-training reliability — and it takes less effort with a routine than with sporadic blitzes. The trick is layering small daily tasks, a weekly reset, and a monthly deep clean, while leaving just enough familiar scent to keep litter habits intact.",
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Cage Cleaning Routine', href: '/care/cage-cleaning-routine' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why a Routine Beats a Blitz', href: '#routine' },
                { label: 'Daily Tasks', href: '#daily' },
                { label: 'Weekly Tasks', href: '#weekly' },
                { label: 'The Monthly Deep Clean', href: '#deep' },
                { label: 'Safe Cleaners & Disinfectants', href: '#cleaners' },
                { label: "Don't Over-Clean", href: '#balance' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
                { label: 'Litter Training', href: '/care/litter-training' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-cage-cleaning-routine"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
          { title: 'Odor & Scent Control', href: '/care/odor-and-scent-control' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Ferrets are clean animals living in close quarters, and the cage is
            where the household&apos;s odor and most of its hygiene problems
            either stay manageable or get out of hand. The owners who struggle
            with smell and with litter-box accidents are almost always the ones
            cleaning in sporadic, all-at-once blitzes. A layered routine — a
            few small daily tasks, a weekly reset, and a monthly deep clean —
            is both less work and more effective.
          </DropCap>

          <h2 id="routine">Why a Routine Beats a Blitz</h2>
          <p>
            Two facts about ferrets shape the whole approach. First, ferret
            urine and the residue it leaves are the main source of cage odor,
            and that residue builds up fast on litter pans and trays. Second,
            ferrets use scent to navigate, including to find the litter box;
            stripping every trace of familiar smell at once can briefly
            destabilize litter habits. A steady routine keeps urine residue
            from ever accumulating while preserving enough scent continuity to
            keep the ferret&apos;s habits stable.
          </p>

          <h2 id="daily">Daily Tasks</h2>
          <p>
            These take only a few minutes and are the highest-leverage cleaning
            you do.
          </p>
          <ul>
            <li>
              <strong>Spot-clean litter boxes once or twice a day.</strong>{' '}
              Scoop or change soiled paper-pellet litter. A ferret will abandon
              a fouled box and eliminate beside it, so this is the task that
              most directly protects litter training.
            </li>
            <li>
              <strong>Refresh food and water.</strong> Wash water bowls or
              bottles and refill with fresh water — biofilm forms within a day.
              Wash food dishes and top up.
            </li>
            <li>
              <strong>Wipe up any accidents promptly</strong> with an enzymatic
              cleaner, which breaks down the odor compounds rather than masking
              them. Masking sprays leave the scent cue that invites a repeat
              accident in the same spot.
            </li>
          </ul>

          <h2 id="weekly">Weekly Tasks</h2>
          <ul>
            <li>
              <strong>Launder bedding.</strong> Hammocks, sleep sacks, and
              fleece liners are washed every few days to once a week depending
              on how soiled they get. Use a fragrance-free detergent and skip
              fabric softener, which can irritate skin and coats the fabric.
            </li>
            <li>
              <strong>Empty and scrub litter pans.</strong> A full wash of each
              litter pan — not just a scoop — removes the urine-mineral crust
              that holds odor. Diluted white vinegar cuts this residue well.
            </li>
            <li>
              <strong>Wipe down high-traffic surfaces.</strong> Ramps, shelves,
              and the corners the ferret favors collect residue. A damp cloth
              with a ferret-safe cleaner keeps them from becoming odor sources.
            </li>
          </ul>

          <CalloutBox variant="tip" title="Rotate, don't replace, the whole bedding set at once">
            <p>
              Keep two or three sets of hammocks and liners in rotation. Wash
              half on any given laundry day so the cage always retains some
              familiar-smelling fabric. This keeps the ferret settled and
              avoids the disoriented, re-marking behavior that a totally
              scent-stripped cage can trigger.
            </p>
          </CalloutBox>

          <h2 id="deep">The Monthly Deep Clean</h2>
          <p>
            Every two to four weeks, do a full reset:
          </p>
          <ul>
            <li>
              <strong>Remove the ferret to a safe, ferret-proofed space</strong>{' '}
              while you work.
            </li>
            <li>
              <strong>Strip the cage</strong> — all bedding, liners, dishes,
              toys, and litter pans out.
            </li>
            <li>
              <strong>Clean the frame and trays.</strong> Wash bars, shelves,
              ramps, and the bottom tray with a ferret-safe cleaner, paying
              attention to corners and the underside of trays where residue
              hides. Rinse thoroughly.
            </li>
            <li>
              <strong>Disinfect periodically, then rinse and dry fully.</strong>{' '}
              A deep clean is the time to use a stronger animal-safe disinfectant
              if you choose to — but everything must be rinsed and completely
              dry before the ferret returns.
            </li>
            <li>
              <strong>Reassemble with mostly-fresh items but one familiar
              piece.</strong> Returning a single unwashed, lightly-used hammock
              gives the ferret an immediate scent anchor in the clean cage.
            </li>
          </ul>

          <h2 id="cleaners">Safe Cleaners and Disinfectants</h2>
          <p>
            What you clean with matters because ferrets sleep face-down in their
            cage for most of the day and lick surfaces.
          </p>
          <ul>
            <li>
              <strong>Diluted white vinegar</strong> — a safe, cheap everyday
              choice for trays and litter pans; excellent at cutting urine-
              mineral residue.
            </li>
            <li>
              <strong>Enzymatic pet cleaners</strong> — the right tool for
              accidents and for breaking down odor compounds rather than masking
              them.
            </li>
            <li>
              <strong>Animal-safe disinfectants</strong> (accelerated hydrogen
              peroxide products, or thoroughly-rinsed dilute bleach) — for
              periodic deep-clean disinfection, always followed by a full rinse
              and complete drying.
            </li>
          </ul>
          <CalloutBox variant="warning" title="Avoid phenols and heavy fragrance">
            <p>
              Phenol-based cleaners — including many pine-scented products — are
              toxic to ferrets and must not be used on a ferret cage or its
              accessories. Heavily fragranced cleaners, ammonia (which compounds
              with urine), and undiluted bleach are also inappropriate. When in
              doubt, choose a product explicitly labeled safe for small
              mammals, rinse, and dry.
            </p>
          </CalloutBox>

          <h2 id="balance">Don&apos;t Over-Clean</h2>
          <p>
            It is genuinely possible to clean too aggressively. Sterilizing the
            entire cage — every hammock, every pan, every surface — on the same
            day removes all of the ferret&apos;s scent cues at once. Some ferrets
            respond by re-marking the cage to re-establish their scent, which is
            counterproductive, and litter habits can wobble for a day or two.
            The fix is to stagger tasks and leave one familiar item in place on
            deep-clean day. The goal is a low-odor, hygienic cage that still
            smells, faintly, like home to the ferret. Note also that no amount
            of cage cleaning eliminates the ferret&apos;s own musky body scent,
            which comes from skin glands — that topic is covered in our{' '}
            <a href="/care/odor-and-scent-control">odor and scent control guide</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general husbandry guidance. Cleaning-product choices
            should always favor products labeled safe for small mammals, and any
            health concern — persistent odor change, skin irritation, or
            respiratory signs — should be evaluated by a veterinarian
            experienced with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
