import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Adopting vs Buying a Ferret — Rescue, Breeder, Pet Store | Ferret.com',
  description:
    'Where to get a ferret compared: shelters and rescues, breeders, and farm-bred pet-store ferrets, on health, altering, descenting, and temperament.',
  path: '/ownership/adoption-vs-buying',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Adopting vs Buying a Ferret',
  description:
    'A comparison of ferret sources — rescue, breeder, and pet store — on health, altering, descenting, temperament, and cost.',
  url: 'https://ferret.com/ownership/adoption-vs-buying',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Adopting vs Buying a Ferret',
  description:
    'Reference comparing sources for acquiring a domestic ferret.',
  url: 'https://ferret.com/ownership/adoption-vs-buying',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function AdoptionVsBuyingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Adopting vs Buying a Ferret',
          subtitle:
            'A ferret can come from a rescue, a breeder, or a pet store, and the choice shapes more than price — it affects health history, whether the ferret arrives already altered and descented, temperament, and what you can know about its background. This page compares the three honestly so you can decide what fits your situation.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Adoption vs Buying', href: '/ownership/adoption-vs-buying' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Three Sources', href: '#sources-overview' },
                { label: 'Shelters & Rescues', href: '#rescue' },
                { label: 'Breeders', href: '#breeder' },
                { label: 'Pet Stores & Farm-Bred', href: '#pet-store' },
                { label: 'Altering & Descenting', href: '#altering' },
                { label: 'Health Questions to Ask', href: '#health' },
                { label: 'Making the Choice', href: '#choice' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
                { label: 'Legality by State', href: '/ownership/ferret-legality-by-state' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-adoption-vs-buying"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Ownership Hub', href: '/ownership' },
          { title: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
          { title: 'Is a Ferret Right for You?', href: '/ownership/is-a-ferret-right-for-you' },
          { title: 'Ferret Supplies Checklist', href: '/ownership/ferret-supplies-checklist' },
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
              Keep the ferret source-choice checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret source-choice checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-source-compare-chart,
              fridge-rescue-vs-store-card, and
              mustelid-source-choice-handbook notes
              that match the three-source-compare-map,
              altering-descenting-log, and
              quesenberry-afa-source-grounding copy on this
              page — a laminated ferret source-compare chart
              so the rescue / breeder / pet-store map is
              posted on the fridge (not an ownership-hub
              section map, not a first-week-map chart, not a
              startup-budget chart), a ferret fridge
              rescue-vs-store card so adult-vs-kit /
              history / early-alter notes are labeled on
              the fridge (not an adoption-red-flag card,
              not a monthly-cost card, not an arrival-day
              card), and a mustelid source-choice handbook
              so the Quesenberry / AFA altering and
              estrogen-toxicity grounding is a physical
              kitchen book (not a cost-planning handbook,
              not a first-week handbook, not an
              ownership-reference handbook). Educational
              kitchen checklist, not a ranked breeder list,
              not a sleep-sack hop, and not a substitute
              for an exotic-mammal veterinarian. Ferret.com
              does not sell insurance. Aging pages stay
              held. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret source-choice checklist"
              subtitle="Email the source-compare-chart, fridge rescue-vs-store card, and source-choice-handbook notes. No spam."
              ctaText="Email my ferret source-choice checklist"
              source="ownership-adoption-vs-buying-under-hero"
            />
          </div>

          <h2 id="sources-overview">The Three Sources</h2>
          <p>
            Most people acquire a ferret from one of three places: a <strong>shelter or breed-specific rescue</strong>, a <strong>private breeder</strong>, or a <strong>pet store</strong> (which in much of North America means a large-scale commercially bred ferret). Each has a characteristic profile. None is automatically right — the best choice depends on whether you want a kit or are open to an adult, how much background information you need, and your stance on supporting rescue versus breeding. Before any of this, confirm ferrets are legal where you live (see <a href="/ownership/ferret-legality-by-state">legality by state</a>).
          </p>

          <h2 id="rescue">Shelters & Rescues</h2>
          <p>
            Ferret rescues and shelters rehome surrendered, found, or rescued ferrets. The strengths are substantial: you are giving a home to an animal that needs one, the ferrets are usually already altered and descented, adoption fees tend to be reasonable, and good rescues assess temperament and disclose known health issues honestly. The trade-offs are that most rescue ferrets are adults rather than kits, some carry unknown histories or age-related health risks, and reputable rescues often screen adopters and may require a suitable setup before placing an animal. For someone open to an adult ferret, rescue is frequently the most ethical and well-supported route.
          </p>

          <h2 id="breeder">Breeders</h2>
          <p>
            A small private breeder can offer what the other routes often cannot: a kit of known parentage, raised in a home environment, with the breeder available for guidance. Good breeders socialize their kits, keep health records, and care where their animals go. The challenges are that genuinely good ferret breeders are relatively uncommon, may have waiting lists, and that "breeder" is not a guarantee of quality — you must evaluate the individual. Ask about the parents' health, how kits are raised and socialized, and whether the breeder will take an animal back if things go wrong.
          </p>

          <h2 id="pet-store">Pet Stores & Farm-Bred Ferrets</h2>
          <p>
            Many pet-store ferrets in North America come from large-scale commercial breeding operations and typically arrive already altered and descented at a very young age (more on that below). The advantages are availability and convenience — these ferrets are easy to find and usually the least expensive to acquire. The drawbacks are limited individual history, the welfare concerns associated with high-volume breeding, and the consequences of very early altering. A pet-store ferret can absolutely become a wonderful pet, but you have the least visibility into its background and early care.
          </p>

          <h2 id="altering">Altering & Descenting</h2>
          <p>
            Two procedures shape the North American ferret market. <strong>Altering</strong> (spay/neuter) is important for pet ferrets: intact females that are not bred can develop life-threatening estrogen toxicity, so spaying is a genuine health measure, and neutering reduces odor and hormone-driven behavior. <strong>Descenting</strong> (removal of the anal scent glands) reduces musk during stress but does not eliminate the ferret's natural body odor, which comes mainly from skin glands and is managed by diet and hygiene, not surgery. Large commercial operations alter and descent very early; rescue and breeder ferrets are often altered too but the timing differs. There is ongoing discussion in the veterinary and welfare community about whether very early altering is associated with later adrenal disease — a reason some keepers prefer ferrets altered at a more typical age. The clinical picture of adrenal disease is on the <a href="/health/adrenal-disease">adrenal disease</a> page.
          </p>

          <h2 id="health">Health Questions to Ask</h2>
          <p>
            Whatever the source, ask the same core questions: Is the ferret already altered and descented, and at what age? What is known about its health history and that of its parents? Has it been seen by a veterinarian, and is it current on vaccinations (see <a href="/health/vaccinations">the vaccination schedule</a>)? Will the seller or rescue take the animal back if a serious problem emerges? A source that answers these openly is a good sign; one that dodges them is a warning.
          </p>

          <h2 id="choice">Making the Choice</h2>
          <p>
            A reasonable default: if you are open to an adult and want to support ferret welfare, start with a rescue. If you specifically want a kit with known parentage and are willing to vet a breeder carefully, a reputable breeder is a strong choice. A pet store is the most convenient and often the cheapest entry point, with the least background information. Across all three, plan for the real cost of the years ahead — the veterinary line item dominates the lifetime total (see <a href="/ownership/cost-of-owning-a-ferret">cost of owning a ferret</a>).
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret source-compare chart /
              ferret fridge rescue-vs-store card /
              mustelid source-choice handbook).
              No existing product hop to keep.
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs ownership-hub /
              first-week / cost / supplies kitchen kits.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret source-choice kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page three-source-compare-map,
              altering-descenting-log, and
              quesenberry-afa-source-grounding copy — a
              laminated ferret source-compare chart, a
              ferret fridge rescue-vs-store card, and a
              mustelid source-choice handbook.
              Educational kitchen searches only. They are
              not a ranked breeder list, they are not an
              ownership-hub / first-week / cost hop, they
              are not a child toothbrush hop, and they do
              not replace an exotic-mammal veterinarian.
              Ferret.com does not sell insurance. Ferret.com
              earns a commission on qualifying purchases at
              no extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+source+compare+chart?s=adoption-vs-buying"
                amazonLabel="Browse laminated ferret source-compare charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+rescue+vs+store+card?s=adoption-vs-buying"
                amazonLabel="Browse ferret fridge rescue-vs-store cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+source+choice+handbook?s=adoption-vs-buying"
                amazonLabel="Browse mustelid source-choice handbooks on Amazon →"
              />
            </div>
          </div>

          <h2 id="sources">Sources</h2>
          <p>
            Estrogen-toxicity risk in intact unbred jills, the role of altering, and discussion of early-altering and adrenal-disease associations are covered in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier). Descenting and odor management reflect standard ferret-husbandry references and American Ferret Association guidance. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized advice. Health and altering questions for a specific ferret should be discussed with a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
