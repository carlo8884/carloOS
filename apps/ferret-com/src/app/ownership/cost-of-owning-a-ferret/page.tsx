import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Cost of Owning a Ferret — Startup & Recurring Budget | Ferret.com',
  description:
    'A realistic ferret budget: startup costs for the animal, cage, and supplies, recurring food and litter, vaccinations and routine vet care, and the surgery line item owners underestimate.',
  path: '/ownership/cost-of-owning-a-ferret',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Cost of Owning a Ferret',
  description:
    'A breakdown of the startup and recurring costs of ferret ownership, including the under-budgeted veterinary and surgical line items.',
  url: 'https://ferret.com/ownership/cost-of-owning-a-ferret',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Cost of Owning a Ferret',
  description:
    'Reference on the financial cost of owning a domestic ferret across its lifespan.',
  url: 'https://ferret.com/ownership/cost-of-owning-a-ferret',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function CostOfOwningAFerretPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'The Cost of Owning a Ferret',
          subtitle:
            'Ferrets are inexpensive to acquire and deceptively expensive to keep well. The animal itself is the smallest line on the budget; the cage, the food, and above all the veterinary care over a 6–10 year life are what add up. This page lays out startup and recurring costs honestly, including the surgery line item that catches most owners by surprise.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'How to Read These Numbers', href: '#numbers' },
                { label: 'Startup Costs', href: '#startup' },
                { label: 'Recurring Monthly Costs', href: '#recurring' },
                { label: 'Routine Veterinary Care', href: '#vet' },
                { label: 'The Big One: Disease & Surgery', href: '#surgery' },
                { label: 'Legality Before You Spend', href: '#legality' },
                { label: 'Lifetime Total', href: '#lifetime' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Legality by State', href: '/ownership/ferret-legality-by-state' },
                { label: 'Adoption vs Buying', href: '/ownership/adoption-vs-buying' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-cost-of-owning-a-ferret"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="numbers">How to Read These Numbers</h2>
          <p>
            All figures here are general ranges to plan around, not quotes — actual prices vary by region, by retailer, and by veterinarian, and exotic-mammal veterinary care in particular runs higher than care for cats and dogs because fewer practices offer it. Treat the ranges as a planning framework: the goal is to make sure no major category surprises you, especially the veterinary ones. The single most important point on this page is that you should budget for ferret <em>illness</em>, not just ferret <em>upkeep</em>.
          </p>

          <h2 id="startup">Startup Costs</h2>
          <p>
            The one-time costs of getting set up dwarf the price of the ferret itself:
          </p>
          <ul>
            <li><strong>The ferret</strong> — typically the smallest line. Pet-store and farm-bred ferrets cost less; breeder and rescue/adoption fees vary (see <a href="/ownership/adoption-vs-buying">adoption vs buying</a>).</li>
            <li><strong>Cage</strong> — a multi-level wire cage appropriate for a ferret is one of the larger startup costs. Bigger and better-built is worth it; ferrets need vertical space and good ventilation.</li>
            <li><strong>Initial supplies</strong> — bedding and hammocks, litter boxes, food and water dishes, a carrier, litter, starter food, and enrichment/toys. Individually small, collectively meaningful.</li>
          </ul>
          <p>
            A complete first-week setup, including the animal, generally represents a several-hundred-dollar commitment before any vet visit. The <a href="/ownership/first-week-checklist">first-week checklist</a> covers what actually needs buying up front versus what can wait.
          </p>

          <h2 id="recurring">Recurring Monthly Costs</h2>
          <p>
            Month to month, ferrets are relatively modest eaters, so consumables are not the budget's center of gravity:
          </p>
          <ul>
            <li><strong>Food</strong> — premium low-carb kibble costs more per pound than mid-tier, but a single ferret eats a limited amount; raw feeding cost varies with sourcing (see <a href="/diet/whole-prey-vs-kibble">whole-prey vs kibble</a>).</li>
            <li><strong>Litter</strong> — ongoing, modest. Use a ferret-safe litter rather than clumping clay.</li>
            <li><strong>Replacements</strong> — bedding, hammocks, and toys wear out and get destroyed; budget a small amount for ongoing replacement.</li>
          </ul>

          <h2 id="vet">Routine Veterinary Care</h2>
          <p>
            Routine care is the predictable part of the veterinary budget. It includes an annual wellness exam with an exotic-mammal veterinarian, the canine-distemper vaccination series and boosters, and rabies vaccination per local requirements (see <a href="/health/vaccinations">the vaccination schedule</a>). Because relatively few clinics treat ferrets, exam and vaccine pricing tends to be higher than for common pets, and you may need to travel to reach a qualified vet. Build an annual veterinary line into the budget from day one.
          </p>

          <h2 id="surgery">The Big One: Disease & Surgery</h2>
          <p>
            This is the line item that turns ferret ownership from inexpensive to genuinely costly, and the one new owners most often overlook. Middle-aged and older ferrets have a high incidence of conditions that require diagnostics, ongoing medication, or surgery — insulinoma and adrenal disease above all, plus lymphoma and dental disease (see the <a href="/health">Health</a> hub). Diagnostic workups, hormone implants, surgical procedures, and long-term medical management can each run into hundreds or thousands of dollars. Many experienced owners treat a dedicated veterinary savings fund — or exotic-pet insurance where available — as a non-optional part of ferret ownership. Planning for this is the difference between a hard situation and an impossible one.
          </p>

          <h2 id="legality">Legality Before You Spend</h2>
          <p>
            Before committing any of this budget, confirm that ferrets are legal where you live. They are banned in California and Hawaii and restricted in some cities and counties — buying a cage and a ferret only to discover you cannot legally keep it is an expensive and heartbreaking mistake. Check first; the details are on <a href="/ownership/ferret-legality-by-state">legality by state</a>, which also points to where current, jurisdiction-specific rules can be verified.
          </p>

          <h2 id="lifetime">Lifetime Total</h2>
          <p>
            Over a 6–10 year lifespan, the recurring food and litter costs are real but modest; the veterinary costs are what dominate the lifetime total, and they are heavily back-loaded into the senior years when chronic disease becomes likely. A useful mental model: the cheapest year of ferret ownership is usually the first healthy adult year, and the most expensive years are the last ones. Budget so that a senior ferret's medical needs are a planning question, not a crisis.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Disease incidence in middle-aged and older ferrets — insulinoma, adrenal disease, lymphoma, dental disease — is documented in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier). Vaccination and routine-care expectations follow standard exotic-mammal veterinary practice. Cost figures are general planning ranges, not quotes, and vary by region and provider. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general budgeting information, not a quote or financial advice. Veterinary costs in particular vary widely; consult a local exotic-mammal veterinarian for accurate pricing in your area.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
