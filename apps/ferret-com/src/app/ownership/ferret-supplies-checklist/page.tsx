import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Supplies Checklist — What You Actually Need | Ferret.com',
  description:
    'A complete ferret supplies checklist: cage, bedding, litter, food and water, grooming, carrier, and enrichment — what you need now versus what can wait.',
  path: '/ownership/ferret-supplies-checklist',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Supplies Checklist',
  description:
    'A categorized checklist of the supplies a new ferret needs, including what to buy first and what to avoid.',
  url: 'https://ferret.com/ownership/ferret-supplies-checklist',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Supplies Checklist',
  description:
    'Reference checklist of essential and optional supplies for a domestic ferret.',
  url: 'https://ferret.com/ownership/ferret-supplies-checklist',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function FerretSuppliesChecklistPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Supplies Checklist',
          subtitle:
            'Everything a new ferret genuinely needs, organized by category, with a clear line between the must-haves you buy before homecoming and the nice-to-haves that can wait. It also flags the supplies marketed for ferrets that you should skip or actively avoid. Editorial reference only — no products, no links, just what to look for.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Supplies Checklist', href: '/ownership/ferret-supplies-checklist' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Buy First vs Later', href: '#priority' },
                { label: 'Housing', href: '#housing' },
                { label: 'Bedding & Sleep', href: '#bedding' },
                { label: 'Litter', href: '#litter' },
                { label: 'Food & Water', href: '#food' },
                { label: 'Grooming', href: '#grooming' },
                { label: 'Travel & Enrichment', href: '#travel' },
                { label: 'What to Avoid', href: '#avoid' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-ferret-supplies-checklist"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Ownership Hub', href: '/ownership' },
          { title: 'First Week Checklist', href: '/ownership/first-week-checklist' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
        ]}
>
        <div className="carloOS-article">
          <h2 id="priority">Buy First vs Later</h2>
          <p>
            Not everything has to be ready on day one, but the essentials do. <strong>Before the ferret comes home</strong> you need: a proper cage, bedding, a litter pan and litter, food and water dishes, an appropriate food, and a carrier. <strong>In the first week or two</strong> you can add: grooming tools, a fuller toy rotation, and tunnels and enrichment. Buying the core well is more important than buying a lot — a single good cage matters more than a pile of accessories. Use this alongside the day-by-day <a href="/ownership/first-week-checklist">first-week checklist</a>, and budget with <a href="/ownership/cost-of-owning-a-ferret">cost of owning a ferret</a>.
          </p>

          <h2 id="housing">Housing</h2>
          <ul>
            <li><strong>Cage</strong> — a large, multi-level wire cage with solid (not wire) flooring or covered shelves to protect the feet. Bar spacing must be narrow enough that a ferret cannot squeeze through, and latches must be escape-proof; ferrets are determined and dexterous. Detailed setup is in <a href="/care/cage-setup">cage setup</a> and <a href="/care/multi-level-housing">multi-level housing</a>.</li>
            <li><strong>Secure latches or clips</strong> — many ferrets learn to open simple cage doors, so add clips if needed.</li>
            <li><strong>A ferret-proofed play area</strong> — not a purchase exactly, but plan the space (see <a href="/care/ferret-proofing-your-home">ferret-proofing your home</a>).</li>
          </ul>

          <h2 id="bedding">Bedding & Sleep</h2>
          <ul>
            <li><strong>Hammocks and sleep sacks</strong> — ferrets love enclosed, hanging sleeping spots; have a couple so one is always clean.</li>
            <li><strong>Soft, washable fabric bedding</strong> — fleece is a common choice. Avoid loose-thread or loop fabrics a claw can catch in.</li>
            <li><strong>Spares</strong> — bedding needs frequent laundering, so a rotation keeps the cage clean without leaving it bare.</li>
          </ul>

          <h2 id="litter">Litter</h2>
          <ul>
            <li><strong>Litter pan</strong> — a high-backed corner pan suits a ferret&apos;s back-into-a-corner toileting habit.</li>
            <li><strong>Ferret-safe litter</strong> — paper-pellet or recycled-paper litter. <em>Avoid</em> clumping clay litters and pine/cedar shavings, which pose respiratory and ingestion risks (see <a href="/care/bedding-and-litter-types">bedding and litter types</a>).</li>
          </ul>

          <h2 id="food">Food & Water</h2>
          <ul>
            <li><strong>An appropriate diet</strong> — a high-protein, high-fat, low-carbohydrate ferret or premium kitten food, or a properly managed whole-prey/raw diet (see <a href="/care/diet-basics">diet basics</a>). Buy what the ferret was already eating to start, then transition gradually if you plan to change it.</li>
            <li><strong>Heavy, tip-proof food dish</strong> — ferrets dig and overturn light bowls.</li>
            <li><strong>Water bowl and/or bottle</strong> — many keepers offer both; a heavy bowl encourages better hydration, a bottle stays cleaner.</li>
          </ul>

          <h2 id="grooming">Grooming</h2>
          <ul>
            <li><strong>Nail clippers</strong> — small clippers for regular trims (see <a href="/care/nail-trimming">nail trimming</a>).</li>
            <li><strong>Ferret or kitten ear cleaner</strong> — for periodic ear care (see <a href="/care/ear-cleaning">ear cleaning</a>).</li>
            <li><strong>Enzymatic pet toothpaste and a soft brush</strong> — for dental care (see <a href="/health/dental-disease">dental disease</a>). Never use human toothpaste.</li>
            <li><strong>A gentle, ferret-safe shampoo</strong> — for the rare bath only; over-bathing worsens odor (see <a href="/care/bathing-and-grooming">bathing and grooming</a>).</li>
          </ul>

          <h2 id="travel">Travel & Enrichment</h2>
          <ul>
            <li><strong>A secure carrier</strong> — needed from day one for the ride home and vet visits (see <a href="/care/travel-and-carriers">travel and carriers</a>).</li>
            <li><strong>Tunnels and tubes</strong> — ferrets love to run through them; a core enrichment item.</li>
            <li><strong>Durable, solid toys</strong> — without small parts or soft foam/rubber that can be chewed off and swallowed (a serious blockage risk).</li>
            <li><strong>Dig boxes and puzzle enrichment</strong> — satisfy digging and foraging instincts (see <a href="/care/exercise-and-enrichment">exercise and enrichment</a>).</li>
          </ul>

          <h2 id="avoid">What to Avoid</h2>
          <ul>
            <li><strong>Soft rubber, latex, and foam toys</strong> — ferrets chew and swallow pieces, a leading cause of intestinal blockage (see <a href="/health/gastrointestinal-blockage">gastrointestinal blockage</a>).</li>
            <li><strong>Clumping clay litter and pine/cedar shavings</strong> — respiratory and ingestion hazards.</li>
            <li><strong>Wire-floor-only cages</strong> — hard on ferret feet; cover or choose solid flooring.</li>
            <li><strong>Human toothpaste and human medications</strong> — never; toothpaste should be enzymatic pet paste only.</li>
            <li><strong>Sugary "ferret treats"</strong> — many marketed treats are high in sugar or carbohydrate and unsuitable for an obligate carnivore.</li>
          </ul>

          <h2 id="sources">Sources</h2>
          <p>
            Caging, bedding, litter safety, diet, and blockage-risk guidance reflect standard ferret-husbandry references and American Ferret Association recommendations, with clinical context from Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier). This is an editorial checklist; it recommends categories and features, not specific products or retailers. Locate primary sources by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general, non-commercial information. It does not endorse or sell any product. Choices about diet and any health-related supply should be confirmed with a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
