import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, RelatedLinks, TableOfContents, ShopCtas, ComparisonFoot, LastUpdated, TableShopLink, CalloutBox, FAQAccordion } from '@carloOS/ui'
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
  modifiedAt: '2026-10-14T00:00:00Z',
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

const FAQS = [
  {
    question: 'How big should a ferret cage be?',
    answer:
      'Lafeber recommends a minimum of 24 × 24 × 18 inches for one to two ferrets, with bar spacing no wider than 1 inch (0.5 inch preferred) and securely latched doors. The Merck Veterinary Manual says a wire cage at least 3 feet wide by 3 feet deep by 2 feet high is sufficient.',
  },
  {
    question: 'What litter is safe for ferrets?',
    answer:
      'Merck says a cat litter box cut down to size and cat litter may be used, but to avoid clumping cat litter because it may cause respiratory problems in ferrets.',
  },
  {
    question: 'What bedding and toys should I avoid?',
    answer:
      'Merck warns that cedar releases oil that may be toxic to ferrets and that fabric bedding should not unravel or be eaten. Lafeber advises against latex rubber or foam toys, which are likely to be swallowed.',
  },
]

export default function FerretSuppliesChecklistPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Supplies Checklist',
          subtitle:
            'Everything a new ferret genuinely needs, organized by category, with a clear line between the must-haves you buy before homecoming and the nice-to-haves that can wait. It also flags the supplies marketed for ferrets that you should skip or actively avoid. Category links go to the existing buyer guides — not made-up products.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
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
                { label: 'Compare gear', href: '#compare' },
                { label: 'FAQ', href: '#faq' },
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
          <div data-top-shop className="not-prose my-5 rounded-xl border border-brand-border bg-brand-surface px-4 py-3">
            <HopDisclosure siteId="ferret-com" above href="/go/amazon-brand/ferret+litter?s=ferret-supplies-checklist" />
            <ShopCtas amazonHref="/go/amazon-brand/ferret+litter?s=ferret-supplies-checklist" amazonLabel="Browse ferret litter on Amazon →" />
          </div>
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-10-14"
            reviewedBy="Editorial team"
          />
          <LastUpdated date="2026-10-14" />
          <CalloutBox variant="info" title="Short answer">
            <p>
              Before day one: a secure cage (at least 24 × 24 × 18 inches for one to two ferrets, bars no wider than 1 inch, per <a href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf">Lafeber</a>), washable bedding or hammocks, a litter pan with non-clumping litter, sturdy food and water containers, food, and a carrier. Skip clumping litter, cedar, and latex or foam toys (<a href="https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret">Merck Veterinary Manual</a>; Lafeber).
            </p>
          </CalloutBox>

          <h2 id="priority">Buy First vs Later</h2>
          <p>
            Not everything has to be ready on day one, but the essentials do. <strong>Before the ferret comes home</strong> you need: a proper cage, bedding, a litter pan and litter, food and water dishes, an appropriate food, and a carrier. <strong>In the first week or two</strong> you can add: grooming tools, a fuller toy rotation, and tunnels and enrichment. Buying the core well is more important than buying a lot — a single good cage matters more than a pile of accessories. Use this alongside the day-by-day <a href="/ownership/first-week-checklist">first-week checklist</a>, and budget with <a href="/ownership/cost-of-owning-a-ferret">cost of owning a ferret</a>.
          </p>
          <div className="my-6 max-w-full min-w-0">
            <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
              <caption className="text-left font-semibold text-brand-dark p-3">At a glance</caption>
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th scope="col" className="p-3 font-bold text-brand-dark">When</th>
                  <th scope="col" className="p-3 font-bold text-brand-dark">What to have</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Before the ferret comes home</th>
                  <td className="p-3">A proper cage, bedding, a litter pan and litter, food and water dishes, an appropriate food, and a carrier</td>
                </tr>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">The first week or two</th>
                  <td className="p-3">Grooming tools, a fuller toy rotation, and tunnels and enrichment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ComparisonFoot updated="2026-10-14" />
          <h2>Who should buy which first</h2>
          <p>Buy the cage, bedding, litter, dishes, food, and carrier before the ferret comes home. Add grooming tools, toys, and tunnels in the first week or two. A single good cage matters more than a pile of accessories.</p>

          <h2 id="housing">Housing</h2>
          <ul>
            <li><strong>Cage</strong> — a large, multi-level wire cage with solid (not wire) flooring or covered shelves to protect the feet. Bar spacing must be narrow enough that a ferret cannot squeeze through, and latches must be escape-proof; ferrets are determined and dexterous. Detailed setup is in <a href="/care/cage-setup">cage setup</a> and <a href="/care/multi-level-housing">multi-level housing</a>.</li>
            <li><strong>Secure latches or clips</strong> — many ferrets learn to open simple cage doors, so add clips if needed.</li>
            <li><strong>A ferret-proofed play area</strong> — not a purchase exactly, but plan the space (see <a href="/care/ferret-proofing-your-home">ferret-proofing your home</a>).</li>
          </ul>
          <p>
            Cage criteria and retailer links live on the{' '}
            <a href="/reviews/best-ferret-cage">best ferret cage</a> buyer guide — bar spacing, floor space, and ramp safety, not a made-up product list.
          </p>

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
          <p>
            Dust, clumping risk, and retailer links: <a href="/reviews/best-ferret-litter">best ferret litter</a>.
          </p>

          <h2 id="food">Food & Water</h2>
          <ul>
            <li><strong>An appropriate diet</strong> — a high-protein, high-fat, low-carbohydrate ferret or premium kitten food, or a properly managed whole-prey/raw diet (see <a href="/care/diet-basics">diet basics</a>). Buy what the ferret was already eating to start, then transition gradually if you plan to change it.</li>
            <li><strong>Heavy, tip-proof food dish</strong> — ferrets dig and overturn light bowls.</li>
            <li><strong>Water bowl and/or bottle</strong> — many keepers offer both; a heavy bowl encourages better hydration, a bottle stays cleaner.</li>
          </ul>
          <p>
            Macronutrient window and retailer links: <a href="/diet/best-ferret-kibble">best ferret food</a>.
          </p>

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
          <p>
            Escape-proof fit and retailer links: <a href="/reviews/best-ferret-harness">best ferret harness</a>.
          </p>

          <h2 id="avoid">What to Avoid</h2>
          <ul>
            <li><strong>Soft rubber, latex, and foam toys</strong> — ferrets chew and swallow pieces, a leading cause of intestinal blockage (see <a href="/health/gastrointestinal-blockage">gastrointestinal blockage</a>).</li>
            <li><strong>Clumping clay litter and pine/cedar shavings</strong> — respiratory and ingestion hazards.</li>
            <li><strong>Wire-floor-only cages</strong> — hard on ferret feet; cover or choose solid flooring.</li>
            <li><strong>Human toothpaste and human medications</strong> — never; toothpaste should be enzymatic pet paste only.</li>
            <li><strong>Sugary "ferret treats"</strong> — many marketed treats are high in sugar or carbohydrate and unsuitable for an obligate carnivore.</li>
          </ul>

          <h2 id="compare">Compare the gear that already has a buyer guide</h2>
          <p>
            The table below has one Amazon link for each core item on this checklist. The four buyer guides compare the options in more depth:
          </p>
          <ul>
            <li><a href="/reviews/best-ferret-cage">Best ferret cage</a></li>
            <li><a href="/reviews/best-ferret-litter">Best ferret litter</a></li>
            <li><a href="/reviews/best-ferret-harness">Best ferret harness</a></li>
            <li><a href="/diet/best-ferret-kibble">Best ferret food</a></li>
          </ul>

          <HopDisclosure siteId="ferret-com" href={["/go/amazon/B001NJ0DAY?s=ferret-supplies-checklist", "/go/amazon-brand/ferret+hammock?s=ferret-supplies-checklist", "/go/amazon-brand/ferret+fleece+liner?s=ferret-supplies-checklist", "/go/amazon-brand/ferret+corner+litter+pan?s=ferret-supplies-checklist", "/go/amazon-brand/recycled+paper+pellet+litter?s=ferret-supplies-checklist", "/go/amazon-brand/high+protein+ferret+food+kibble?s=ferret-supplies-checklist", "/go/amazon-brand/ferret+litter?s=ferret-supplies-checklist"]} />

          <div id="shop-checklist" className="my-6 max-w-full min-w-0">
            <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
              <caption className="text-left font-semibold text-brand-dark p-3">Shop the core items</caption>
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th scope="col" className="p-3 font-bold text-brand-dark">Item</th>
                  <th scope="col" className="p-3 font-bold text-brand-dark">On Amazon</th>
                  <th scope="col" className="p-3 font-bold text-brand-dark">When</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Cage</th>
                  <td className="p-3">Critter Nation double unit<TableShopLink href="/go/amazon/B001NJ0DAY?s=ferret-supplies-checklist" product="Critter Nation double unit" /></td>
                  <td className="p-3">Before homecoming</td>
                </tr>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Hammock</th>
                  <td className="p-3">Ferret hammock<TableShopLink href="/go/amazon-brand/ferret+hammock?s=ferret-supplies-checklist" product="Ferret hammock" /></td>
                  <td className="p-3">Before homecoming</td>
                </tr>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Fleece bedding</th>
                  <td className="p-3">Ferret fleece cage liner<TableShopLink href="/go/amazon-brand/ferret+fleece+liner?s=ferret-supplies-checklist" product="Ferret fleece cage liner" /></td>
                  <td className="p-3">Before homecoming</td>
                </tr>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Litter pan</th>
                  <td className="p-3">Ferret corner litter pan<TableShopLink href="/go/amazon-brand/ferret+corner+litter+pan?s=ferret-supplies-checklist" product="Ferret corner litter pan" /></td>
                  <td className="p-3">Before homecoming</td>
                </tr>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Litter</th>
                  <td className="p-3">Recycled paper pellet litter<TableShopLink href="/go/amazon-brand/recycled+paper+pellet+litter?s=ferret-supplies-checklist" product="Recycled paper pellet litter" /></td>
                  <td className="p-3">Before homecoming</td>
                </tr>
                <tr className="border-b border-brand-border align-top">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Food</th>
                  <td className="p-3">High-protein ferret kibble<TableShopLink href="/go/amazon-brand/high+protein+ferret+food+kibble?s=ferret-supplies-checklist" product="High-protein ferret kibble" /></td>
                  <td className="p-3">Before homecoming</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-brand-text-mid">The Critter Nation link opens that cage&apos;s Amazon page. The other links open an Amazon search for the item type, not a single ranked product. The <a href="/care/cage-setup">cage setup</a> page explains why that cage is named. Check bar spacing on the <a href="/reviews/best-ferret-cage">cage guide</a> before you order.</p>

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links open a search for a product this page discusses. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+litter?s=ferret-supplies-checklist"
                amazonLabel="Browse ferret litter on Amazon →"
              />
          </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <h2 id="sources">Sources</h2>
          <ul>
            <li><a href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf">Lafeber Company: Care of the Ferret (2020)</a></li>
            <li><a href="https://www.merckvetmanual.com/all-other-pets/ferrets/providing-a-home-for-a-ferret">Merck Veterinary Manual: Providing a Home for a Ferret</a></li>
          </ul>
          <p>
            Caging, bedding, litter safety, diet, and blockage-risk guidance reflect standard ferret-husbandry references and American Ferret Association recommendations, with clinical context from Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier). This is an editorial checklist; it recommends categories and features. The shop table links one Amazon search per category, plus the one cage the cage setup page names. Locate primary sources by title. We have not checked this general reference against the claims on this page.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, and it does not sell anything itself. Choices about diet and any health-related supply should be confirmed with a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
