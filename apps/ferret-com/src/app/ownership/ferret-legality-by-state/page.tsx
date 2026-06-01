import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Legality by State — Where Ferrets Are Banned | Ferret.com',
  description:
    'Where ferrets are legal in the US: the California and Hawaii bans, city and county restrictions, and how to verify current legality before you bring one home.',
  path: '/ownership/ferret-legality-by-state',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Legality by State',
  description:
    'An overview of where domestic ferrets are legal, banned, or restricted in the United States, and how to verify current local rules.',
  url: 'https://ferret.com/ownership/ferret-legality-by-state',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Legality by State',
  description:
    'Reference on the legal status of domestic ferrets across US states and localities.',
  url: 'https://ferret.com/ownership/ferret-legality-by-state',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function FerretLegalityByStatePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Legality by State',
          subtitle:
            'In most of the United States, keeping a ferret is perfectly legal — but not everywhere, and the exceptions matter enough to check before you buy. Two states ban ferrets outright, and a number of cities and counties impose their own restrictions or permit requirements regardless of state law. This page explains the landscape and, more importantly, how to verify the rules where you actually live.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Legality by State', href: '/ownership/ferret-legality-by-state' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Short Version', href: '#short' },
                { label: 'The Statewide Bans', href: '#bans' },
                { label: 'City & County Restrictions', href: '#local' },
                { label: 'Permits & Licensing', href: '#permits' },
                { label: 'Why the Bans Exist', href: '#why' },
                { label: 'How to Verify Your Rules', href: '#verify' },
                { label: 'Moving With a Ferret', href: '#moving' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
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
              source="ownership-ferret-legality-by-state"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="short">The Short Version</h2>
          <p>
            Domestic ferrets are legal to own in the large majority of US states. The headline exceptions are <strong>California</strong> and <strong>Hawaii</strong>, where keeping a pet ferret is prohibited statewide. Beyond those two, the complication is that <em>local</em> law can be stricter than state law: some cities and counties — historically including places such as New York City and Washington, D.C. — have had their own bans or restrictions even where the surrounding state permits ferrets. Legality is therefore a two-layer question: your state, and then your specific city or county.
          </p>

          <h2 id="bans">The Statewide Bans</h2>
          <p>
            <strong>California</strong> and <strong>Hawaii</strong> are the two states that prohibit pet ferrets outright. In California the ban has been long-standing and is enforced under fish-and-wildlife regulation; periodic efforts to legalize have not changed the statewide prohibition. <strong>Hawaii</strong> bans ferrets primarily out of rabies-vector and invasive-species concern, consistent with the state's strict stance on animals that could threaten its isolated ecosystem. In both states, ownership is not a matter of getting a permit — it is simply not allowed.
          </p>

          <h2 id="local">City & County Restrictions</h2>
          <p>
            Even in ferret-legal states, individual municipalities can and sometimes do restrict ferrets. Large cities are the most common place to encounter a local ban or a special requirement, and these rules change over time as ordinances are amended. The practical implication is that "ferrets are legal in my state" is necessary but not sufficient — you also need to confirm your city and county allow them. Do not assume; ordinances are not always well publicized.
          </p>

          <h2 id="permits">Permits & Licensing</h2>
          <p>
            Some jurisdictions that allow ferrets attach conditions — a permit, a license, or a proof-of-rabies-vaccination requirement. Where rabies vaccination is mandated for ferrets, it is both a legal and a public-health matter (see <a href="/health/vaccinations">the vaccination schedule</a>). Check whether your locality requires any registration or vaccination documentation, and keep that paperwork current.
          </p>

          <h2 id="why">Why the Bans Exist</h2>
          <p>
            The bans rest mainly on two arguments. The first is <strong>rabies and public health</strong>: regulators in some jurisdictions historically cited uncertainty about ferret rabies and quarantine protocols, though licensed rabies vaccines for ferrets now exist. The second is <strong>invasive-species and wildlife risk</strong>: the concern that escaped or released ferrets could establish feral populations or prey on native wildlife — a concern especially acute in an isolated ecosystem like Hawaii's. Ferret-advocacy organizations dispute the strength of these arguments for a domesticated, often-altered pet, but the regulations remain in force where they exist.
          </p>

          <h2 id="verify">How to Verify Your Rules</h2>
          <p>
            Because state, county, and city rules can each differ and all can change, verify current legality before acquiring a ferret rather than relying on any single summary. Reliable approaches: contact your state's fish-and-wildlife or agriculture department, check your city or county animal-control ordinances directly, and ask a local exotic-mammal veterinarian, who will know the practical legal landscape in their service area. Ferret-specific directories and advocacy organizations also track legality and local rescues, which can be a useful starting point — but always confirm against the actual governing authority, since a directory can lag a recent ordinance change.
          </p>

          <h2 id="moving">Moving With a Ferret</h2>
          <p>
            Legality matters not just at acquisition but when you relocate. A ferret that is perfectly legal in your current home may be banned in your destination state or city, and moving an animal into a jurisdiction where it is prohibited creates a serious problem for both you and the ferret. If a move to California, Hawaii, or a restrictive municipality is on your horizon, factor your ferret into that decision in advance.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            The California and Hawaii statewide prohibitions are matters of state fish-and-wildlife and agriculture regulation; local bans derive from municipal and county ordinances. Rabies-vaccine availability and public-health considerations reflect standard veterinary and public-health references. Because statutes and ordinances are amended over time, this page describes the general landscape rather than a definitive current list — verify with the governing authority for your jurisdiction. Locate primary sources through state and local government and recognized ferret-advocacy organizations.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not legal advice, and laws change. Confirm current legality with your state and local government before acquiring or relocating a ferret.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
