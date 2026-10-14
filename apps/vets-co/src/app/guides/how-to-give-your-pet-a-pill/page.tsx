import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, ShopCtas, ArticleByline, CalloutBox, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

const PAGE_URL = 'https://vets.co/guides/how-to-give-your-pet-a-pill'
const SOURCE = 'guides-how-to-give-your-pet-a-pill'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'How to Give Your Dog or Cat a Pill: Pill Pockets and More | Vets.co',
  description: 'Pill pockets, the three-treat routine, pill guns and gelatin capsules: vet-school advice on getting a dog or cat to take its medication.',
  path: '/guides/how-to-give-your-pet-a-pill',
  type: 'article',
})

const SOURCES = [
  { label: 'How to medicate your dog', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/how-medicate-your-dog', publisher: 'Cornell University College of Veterinary Medicine, Riney Canine Health Center' },
  { label: 'Conditioning Your Pet to Take Medication', url: 'https://vmc.vet.osu.edu/sites/default/files/documents/pet-medication-conditioning-2024.pdf', publisher: 'The Ohio State University Veterinary Medical Center' },
]

const METHODS: { method: string; how: string; source: string }[] = [
  { method: 'Pill pocket or soft treat', how: 'Cornell suggests malleable foods that break into small pieces, and names commercial soft, moldable treats such as Pill Pockets.', source: 'Cornell' },
  { method: 'Three-portion routine', how: 'Feed three small portions in quick succession and put the medication in the middle one, so your pet expects three treats in a row.', source: 'Ohio State' },
  { method: 'Gelatin capsule', how: 'For bitter tablets, Ohio State suggests enclosing the tablet in an empty gelatin capsule before coating it with food.', source: 'Ohio State' },
  { method: 'Pill gun (pill popper)', how: 'Cornell describes a rubber-tipped plunger that places the pill near the back of the throat without your fingers in the mouth.', source: 'Cornell' },
  { method: 'By hand', how: 'Cornell describes holding the muzzle behind the canine teeth, opening the lower jaw and placing the pill at the back of the mouth.', source: 'Cornell' },
  { method: 'Ask for another form', how: 'Both schools say your vet may be able to supply a compounded or flavored chewable form.', source: 'Cornell, Ohio State' },
]

const FAQS = [
  { question: 'Are pill pockets safe for every pet?', answer: 'They are a treat, so check with your vet if your pet is on a prescription or allergy diet. Ohio State suggests using canned prescription diet or foods your veterinarian approves for hiding pills, so ask what fits your pet’s diet.' },
  { question: 'Can I crush the pill into food instead?', answer: 'Ask your vet or pharmacist first. Ohio State also notes dogs and cats may refuse familiar foods when the taste and texture change with a tablet, capsule or powder added.' },
  { question: 'What if my pet keeps spitting the pill out?', answer: 'Cornell says to check in with your veterinarian, who may have alternatives such as a different formulation, or a compounded version made more palatable with flavorings. A pill gun can also place the pill farther back so it is swallowed.' },
]

const schema = combineSchemas(
  buildArticleSchema({ siteId: 'vets-co', title: 'How to Give Your Dog or Cat a Pill', description: 'Vet-school advice on getting a dog or cat to take its medication.', url: PAGE_URL, imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-10-12T00:00:00Z', modifiedAt: '2026-10-13T00:00:00Z', citation: SOURCES }),
  buildFAQSchema({ questions: FAQS }),
)

const SHOP = [
  { q: 'pill+pockets+for+dogs', label: 'Browse pill pockets for dogs on Amazon →' },
  { q: 'pill+pockets+for+cats', label: 'Browse pill pockets for cats on Amazon →' },
  { q: 'pet+pill+gun', label: 'Browse pet pill guns on Amazon →' },
]

export default function GivePillPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'How to Give Your Dog or Cat a Pill', subtitle: 'Pill pockets, a three-treat routine, gelatin capsules and pill guns, from Cornell and Ohio State veterinary advice, plus when to ask your vet for a different form.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'October 2026', readTime: '5 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Giving a Pill', href: '/guides/how-to-give-your-pet-a-pill' }]}
        sidebar={<RelatedLinks title="Related Guides" links={[{ label: 'Questions to Ask Your Vet', href: '/guides/questions-to-ask-your-vet' }, { label: 'Veterinary Medication Library', href: '/medications' }, { label: 'Recovery Cones and E-Collars', href: '/guides/recovery-cone-e-collar' }]} />}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-10-12T00:00:00Z" updatedAt="2026-10-13T00:00:00Z" reviewedBy="Editorial team" />
          <LastUpdated date="2026-10-13" />

          <CalloutBox variant="info" title="Give it exactly as prescribed">
            Cornell stresses giving a prescribed medication as prescribed. Ask your vet or pharmacist before crushing, splitting, or mixing a medicine into food, and never give a human medicine without asking.
          </CalloutBox>

          <div data-top-shop className="not-prose my-5 rounded-xl border border-brand-border bg-brand-surface px-4 py-3">
            <HopDisclosure siteId="vets-co" href={`/go/amazon-brand/${SHOP[0].q}?s=${SOURCE}`} />
            <ShopCtas amazonHref={`/go/amazon-brand/${SHOP[0].q}?s=${SOURCE}`} amazonLabel={SHOP[0].label} />
            
          </div>

          <h2 id="start-early">Start before you need it</h2>
          <p>Ohio State’s veterinary medical center says it is easiest to condition a pet to take medication while healthy, before illness or injury dulls the appetite. Start at mealtime, when your pet is already hungry, and use portions of the daily meal for practice.</p>

          <h2 id="methods">Methods that work</h2>
          <div className="overflow-x-auto not-prose my-6">
            <table id="pill-table" className="w-full text-sm border border-brand-border">
              <thead className="bg-brand-surface"><tr><th className="p-3 text-left">Method</th><th className="p-3 text-left">How it works</th><th className="p-3 text-left">Source</th></tr></thead>
              <tbody>
                {METHODS.map((m) => (
                  <tr key={m.method} className="border-t border-brand-border">
                    <td className="p-3 font-bold text-brand-dark">{m.method}</td>
                    <td className="p-3 text-brand-text-mid">{m.how}</td>
                    <td className="p-3 text-brand-text-mid">{m.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="pill-pockets">Using pill pockets well</h2>
          <p>Cornell says medication goes down much easier when your dog thinks it is getting a special treat, and that soft, moldable treats like Pill Pockets work for this. Ohio State’s three-portion routine pairs well with them: give a plain treat, then the one with the pill, then another plain one, so your pet never learns which bite holds the medicine. A spoken cue before the first portion helps your pet expect the treats.</p>

          <h2 id="by-hand">When treats are not an option</h2>
          <p>If your pet has food aversions or keeps spitting the pill out, Cornell describes giving it directly or with a pill gun, which keeps your fingers out of the mouth and places the pill farther back so it is swallowed. Ohio State notes some medications need a syringe of water to wash them down; your veterinarian will tell you if yours does.</p>

          <h2 id="shop">Shop pill helpers</h2>
          <p>These Amazon searches cover pill pockets for dogs and for cats, and pill guns. They are searches, not a ranked product list, and they do not replace your vet’s instructions.</p>
          <HopDisclosure siteId="vets-co" href={SHOP.map((s) => `/go/amazon-brand/${s.q}?s=${SOURCE}`)} />
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">Shop these supplies</div>
            <div className="flex flex-col gap-3">
              {SHOP.map((s) => (
                <ShopCtas key={s.q} amazonHref={`/go/amazon-brand/${s.q}?s=${SOURCE}`} amazonLabel={s.label} />
              ))}
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList title="Sources" sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
