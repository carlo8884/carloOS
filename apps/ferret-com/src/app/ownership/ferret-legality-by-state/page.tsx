import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, RelatedLinks, TableOfContents, CalloutBox, FAQAccordion } from '@carloOS/ui'
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
  modifiedAt: '2026-10-13T00:00:00Z',
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

const FAQS = [
  {
    question: 'Which US states ban pet ferrets?',
    answer:
      'California and Hawaii. The California Department of Fish and Wildlife says ferrets are prohibited as pets and restricted-species permits are not issued for pet purposes. The Hawaii Department of Agriculture lists ferrets as prohibited from entry or possession by private individuals.',
  },
  {
    question: 'Can I get a permit to keep a ferret in California?',
    answer:
      'Not as a pet. The California Department of Fish and Wildlife issues restricted-species permits only to qualified individuals or institutions for limited purposes such as research, exhibition, education, or shelter.',
  },
  {
    question: 'Are ferrets legal everywhere else?',
    answer:
      'Not automatically. Lafeber notes that some states, counties, and cities restrict ferret ownership or require permits, so check your state wildlife or agriculture department and your city or county ordinances.',
  },
]

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
                { label: 'FAQ', href: '#faq' },
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

          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Ownership Hub', href: '/ownership' },
          { title: 'Traveling With a Ferret', href: '/ownership/traveling-with-a-ferret' },
          { title: 'Adoption vs. Buying', href: '/ownership/adoption-vs-buying' },
          { title: 'Is a Ferret Right for You?', href: '/ownership/is-a-ferret-right-for-you' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-10-13"
            reviewedBy="Editorial team"
          />
          <CalloutBox variant="info" title="Short answer">
            <p>
              Pet ferrets are prohibited statewide in California (<a href="https://wildlife.ca.gov/Living-with-Wildlife/Restricted-Species">California Department of Fish and Wildlife</a>) and Hawaii (<a href="https://dab.hawaii.gov/pi/pq/import-program/animal-guidelines/">Hawaii Department of Agriculture</a>). Elsewhere, some states, counties, and cities restrict ownership or require permits (<a href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf">Lafeber</a>), so check local rules too.
            </p>
          </CalloutBox>

          <h2 id="short">The Short Version</h2>
          <p>
            Domestic ferrets are legal to own in the large majority of US states. The headline exceptions are <strong>California</strong> and <strong>Hawaii</strong>, where keeping a pet ferret is prohibited statewide. Beyond those two, the complication is that <em>local</em> law can be stricter than state law: some cities and counties have their own bans or restrictions even where the surrounding state permits ferrets. Legality is therefore a two-layer question: your state, and then your specific city or county.
          </p>

          <h2 id="bans">The Statewide Bans</h2>
          <p>
            <strong>California</strong> and <strong>Hawaii</strong> are the two states that prohibit pet ferrets outright. In California, the <a href="https://wildlife.ca.gov/Living-with-Wildlife/Restricted-Species">Department of Fish and Wildlife</a> says ferrets are prohibited because they pose a threat to native fish and wildlife, agriculture, public health or safety (Fish &amp; Game Code § 2118), and restricted-species permits are not issued for pet purposes. The <a href="https://dab.hawaii.gov/pi/pq/import-program/animal-guidelines/">Hawaii Department of Agriculture</a> lists <strong>ferrets</strong> among animals prohibited from entry or possession by private individuals in the state. In both states, ownership is not a matter of getting a permit — it is simply not allowed.
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
            California's Department of Fish and Wildlife gives its reasons directly: non-native animals such as ferrets pose a threat to native fish and wildlife, agriculture, and public health or safety, with concerns about competition with native species, predation, and potential disease transmission if they reach the wild. Hawaii's agriculture department lists ferrets as prohibited without explaining the reason on that page. On rabies, a vaccine is now approved for ferrets in the United States (Merck Veterinary Manual). Ferret-advocacy organizations dispute these arguments for a domesticated, often-altered pet, but the regulations remain in force where they exist.
          </p>

          <h2 id="verify">How to Verify Your Rules</h2>
          <p>
            Because state, county, and city rules can each differ and all can change, verify current legality before acquiring a ferret rather than relying on any single summary. Reliable approaches: contact your state's fish-and-wildlife or agriculture department, check your city or county animal-control ordinances directly, and ask a local exotic-mammal veterinarian, who will know the practical legal landscape in their service area. Ferret-specific directories and advocacy organizations also track legality and local rescues, which can be a useful starting point — but always confirm against the actual governing authority, since a directory can lag a recent ordinance change.
          </p>

          <h2 id="moving">Moving With a Ferret</h2>
          <p>
            Legality matters not just at acquisition but when you relocate. A ferret that is perfectly legal in your current home may be banned in your destination state or city, and moving an animal into a jurisdiction where it is prohibited creates a serious problem for both you and the ferret. If a move to California, Hawaii, or a restrictive municipality is on your horizon, factor your ferret into that decision in advance.
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <h2 id="sources">Sources</h2>
          <ul>
            <li><a href="https://wildlife.ca.gov/Living-with-Wildlife/Restricted-Species">California Department of Fish and Wildlife: Restricted Species</a></li>
            <li><a href="https://dab.hawaii.gov/pi/pq/import-program/animal-guidelines/">Hawaii Department of Agriculture: Animal Guidelines</a></li>
            <li><a href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf">Lafeber Company: Care of the Ferret (2020)</a></li>
            <li><a href="https://www.merckvetmanual.com/all-other-pets/ferrets/routine-health-care-for-ferrets">Merck Veterinary Manual: Routine Health Care for Ferrets</a></li>
          </ul>
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
