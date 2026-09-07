import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Traveling With a Ferret — Car, Air & Overnight Planning | Ferret.com',
  description:
    'How to travel safely with a ferret: secure carriers, temperature limits, car-trip basics, the realities of air travel, and when to leave them home.',
  path: '/ownership/traveling-with-a-ferret',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Traveling With a Ferret',
  description:
    'A practical guide to traveling with a ferret by car and air, covering carriers, temperature, hydration, destination legality, and when not to travel.',
  url: 'https://ferret.com/ownership/traveling-with-a-ferret',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Traveling With a Ferret',
  description:
    'Reference on safe travel with a domestic ferret, including temperature, carriers, and legality considerations.',
  url: 'https://ferret.com/ownership/traveling-with-a-ferret',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function TravelingWithAFerretPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Traveling With a Ferret',
          subtitle:
            "Ferrets travel better than most exotic pets — they sleep deeply, settle in a carrier, and adapt to routine — but they are also exquisitely sensitive to heat and bound by a patchwork of legality that does not stop at your home state. This is how to move a ferret safely by car or air, what to pack, and the cases where the kindest choice is to leave them behind with a sitter.",
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Traveling With a Ferret', href: '/ownership/traveling-with-a-ferret' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Before You Decide to Travel', href: '#decide' },
                { label: 'The Carrier', href: '#carrier' },
                { label: 'Heat Is the Real Danger', href: '#heat' },
                { label: 'Car Travel', href: '#car' },
                { label: 'Air Travel & Legality', href: '#air' },
                { label: 'When to Leave Them Home', href: '#home' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Legality by State', href: '/ownership/ferret-legality-by-state' },
                { label: 'Supplies Checklist', href: '/ownership/ferret-supplies-checklist' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-traveling-with-a-ferret"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Ownership Hub', href: '/ownership' },
          { title: 'Travel & Carriers', href: '/care/travel-and-carriers' },
          { title: 'Ferret Legality by State', href: '/ownership/ferret-legality-by-state' },
          { title: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret travel-planning checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret travel-planning checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-trip-decide-chart,
              fridge-heat-limit-card, and
              mustelid-trip-plan-handbook notes
              that match the trip-decide-map,
              heat-limit-log, and
              quesenberry-afa-travel-grounding copy on this
              page — a laminated ferret trip-decide chart
              so the heat / legality / leave-them-home map
              is posted on the fridge (not a prey-compat
              chart, not a kid-handle chart, not an
              ownership-hub section map), a ferret fridge
              heat-limit card so never-parked-car / cool-
              cabin / water-stops notes are labeled on the
              fridge (not an intro-barrier card, not a
              supervise-rule card, not a time-money-odor
              card), and a mustelid trip-plan handbook so
              the Quesenberry / AFA thermoregulation and
              stress grounding is a physical kitchen book
              (not a cross-species handbook, not a
              family-fit handbook, not an
              ownership-reference handbook). Educational
              kitchen checklist, not a ranked carrier
              list, not a sleep-sack hop, and not a
              substitute for an exotic-mammal veterinarian.
              Ferret.com does not sell insurance. Aging
              pages stay held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret travel-planning checklist"
              subtitle="Email the trip-decide-chart, fridge heat-limit card, and trip-plan-handbook notes. No spam."
              ctaText="Email my ferret travel-planning checklist"
              source="ownership-traveling-with-a-ferret-under-hero"
            />
          </div>

          <h2 id="decide">Before You Decide to Travel</h2>
          <p>
            Start with the question of whether the trip is for the ferret&apos;s
            benefit or only your convenience. Short, well-planned trips with a
            calm ferret are usually fine; long, hot, or chaotic journeys are
            stressful and sometimes dangerous. Two things must be settled before
            anything else: the temperature the ferret will face, and the legality
            of where you are going. Ferrets are banned outright in California and
            Hawaii and restricted in some cities and counties, so a destination
            check is not optional — confirm it on{' '}
            <a href="/ownership/ferret-legality-by-state">legality by state</a>{' '}
            before you plan a route.
          </p>

          <h2 id="carrier">The Carrier</h2>
          <p>
            A ferret travels in a secure, hard-sided or sturdy soft-sided carrier
            — never loose in a vehicle. The essentials:
          </p>
          <ul>
            <li><strong>Escape-proof:</strong> ferrets are master escape artists and will exploit any gap or zipper. Test the closure.</li>
            <li><strong>Ventilated:</strong> good airflow on multiple sides.</li>
            <li><strong>Bedding:</strong> a familiar hammock or blanket from home for scent comfort.</li>
            <li><strong>Litter for longer trips:</strong> a small low-sided tray or pad for journeys beyond an hour or two.</li>
            <li><strong>Secured in the vehicle:</strong> belted in, not free to slide.</li>
          </ul>
          <p>
            The carrier itself belongs on every new owner&apos;s shopping list —
            see the <a href="/ownership/ferret-supplies-checklist">supplies
            checklist</a>.
          </p>

          <h2 id="heat">Heat Is the Real Danger</h2>
          <CalloutBox variant="warning" title="Ferrets overheat easily and fatally">
            <p>
              Ferrets tolerate cold far better than heat and are prone to
              dangerous, sometimes fatal heat stress at temperatures people find
              merely warm. Never leave a ferret in a parked car, even briefly,
              even with windows cracked — interior temperatures climb fast. Keep
              travel within a comfortable, climate-controlled range, offer water
              regularly, and watch for heat distress: lethargy, panting, or a
              limp, unresponsive ferret is an emergency. Cool the animal and get
              to a veterinarian immediately.
            </p>
          </CalloutBox>

          <h2 id="car">Car Travel</h2>
          <p>
            Car travel is the most manageable way to move a ferret. Keep the
            cabin cool, secure the carrier, and on longer drives stop periodically
            to offer water and check on the animal. Many ferrets simply sleep
            through a car ride. Bring more water than you think you need, a few
            familiar items, and any medication on its normal schedule. Avoid
            feeding heavily right before departure if your ferret is prone to
            travel-related stomach upset, and keep the routine — meal times, sleep
            cues — as close to home as possible.
          </p>

          <h2 id="air">Air Travel & Legality</h2>
          <p>
            Air travel is harder and far more variable. Airline policies on
            ferrets differ widely and change often — many carriers do not accept
            them in the cabin or hold at all — so any flight requires confirming
            the specific airline&apos;s current rules well in advance. Beyond the
            airline, the destination&apos;s legality governs whether the ferret
            can even arrive: a state or city ban applies regardless of how you
            travel. International travel adds import rules, vaccination
            documentation, and sometimes quarantine. None of this is insurmountable,
            but it is research-heavy, and it should begin with two confirmations —
            the airline&apos;s policy and the destination&apos;s legal status (start
            with <a href="/ownership/ferret-legality-by-state">legality by
            state</a>).
          </p>

          <h2 id="home">When to Leave Them Home</h2>
          <p>
            Sometimes the right answer is a sitter. A ferret that is elderly, ill,
            recovering from surgery, or simply intolerant of the carrier is better
            off at home with someone competent to feed, water, and provide
            out-of-cage time on schedule. A destination that is hot, legally
            off-limits, or logistically punishing also argues for leaving the
            ferret behind. Travel should clear a simple bar: the ferret will be at
            least as safe and comfortable as it would be at home. If it will not,
            do not go with it.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret trip-decide chart /
              ferret fridge heat-limit card /
              mustelid trip-plan handbook).
              No existing product hop to keep.
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs ownership-hub /
              other-pets / kids / travel-and-carriers
              product hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret travel-planning kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page trip-decide-map,
              heat-limit-log, and
              quesenberry-afa-travel-grounding copy — a
              laminated ferret trip-decide chart, a
              ferret fridge heat-limit card, and a
              mustelid trip-plan handbook.
              Educational kitchen searches only. They are
              not a ranked carrier list, they are not
              an ownership-hub / other-pets / kids hop,
              they are not a travel-and-carriers product
              hop, they are not a child toothbrush hop,
              and they do not replace an exotic-mammal
              veterinarian. Ferret.com does not sell
              insurance. Ferret.com earns a commission on
              qualifying purchases at no extra cost to
              you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+trip+decide+chart?s=traveling-with-a-ferret"
                amazonLabel="Browse laminated ferret trip-decide charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+heat+limit+card?s=traveling-with-a-ferret"
                amazonLabel="Browse ferret fridge heat-limit cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+trip+plan+handbook?s=traveling-with-a-ferret"
                amazonLabel="Browse mustelid trip-plan handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="sources">Sources</h2>
          <p>
            Ferret heat sensitivity and thermoregulation, along with general
            husbandry and stress considerations, are documented in Quesenberry KE
            and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical
            Medicine and Surgery</em> (Saunders/Elsevier). Legality varies by
            jurisdiction and changes over time; verify current rules with state
            and local authorities and, for air travel, directly with the airline.
            Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            General travel-planning information, not individualized veterinary
            advice. Suspected heat stress or any travel-related illness is an
            emergency; consult an exotic-mammal veterinarian.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
