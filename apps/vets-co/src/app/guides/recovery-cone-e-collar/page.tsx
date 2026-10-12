import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, ShopCtas, ArticleByline, CalloutBox, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

const PAGE_URL = 'https://vets.co/guides/recovery-cone-e-collar'
const SOURCE = 'guides-recovery-cone-e-collar'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Recovery Cone and E-Collar Guide After Surgery | Vets.co',
  description: 'How to use a cone or e-collar after your dog or cat has surgery: when it stays on, eating with it, fabric and inflatable options, and when to call your vet.',
  path: '/guides/recovery-cone-e-collar',
  type: 'article',
})

const SOURCES = [
  { label: 'Post-Operative Instructions in Dogs', url: 'https://vcahospitals.com/veterinary-care/primary/know-your-pet/post-operative-instructions-in-dogs', publisher: 'VCA Animal Hospitals' },
  { label: 'Post-Operative Care for Pets', url: 'https://veterinarypartner.vin.com/default.aspx?pid=19239&id=5467568', publisher: 'Veterinary Partner (VIN)' },
  { label: 'After Surgery Instructions', url: 'https://www.aspca.org/aspca-spay-neuter-alliance/after-surgery-instructions', publisher: 'ASPCA Spay/Neuter Alliance' },
]

const TYPES: { type: string; good: string; watch: string }[] = [
  { type: 'Rigid plastic cone', good: 'The standard Elizabethan collar most clinics send home.', watch: 'Veterinary Partner notes plastic cones can make eating and drinking hard.' },
  { type: 'Fabric (soft) cone', good: 'An alternative some owners prefer.', watch: 'Works only if your pet still cannot reach the incision.' },
  { type: 'Inflatable collar', good: 'A donut-style ring around the neck.', watch: 'Depends on where the incision is; ask your vet before switching.' },
  { type: 'Recovery suit', good: 'VCA lists it as an alternative that covers the body, like a child’s onesie.', watch: 'Covers the body only; ask your vet whether it protects the incision site.' },
]

const FAQS = [
  { question: 'Can I take the cone off at night or while my dog eats?', answer: 'VCA says it is better to keep the collar on constantly rather than take it on and off, because a few seconds of chewing can remove stitches. If your pet truly cannot eat with it on, Veterinary Partner says you can take it off for meals but must not let your pet out of your sight, and the ASPCA Spay/Neuter Alliance says to put it back on immediately after eating.' },
  { question: 'My pet can still lick the incision with the cone on. What now?', answer: 'The cone is too small or the wrong type. The ASPCA Spay/Neuter Alliance says to choose a larger collar, and Veterinary Partner says there is no point using a device if your pet can still reach the incision. Call your veterinary team for a better fit.' },
  { question: 'Can I swap the clinic cone for a soft cone or an inflatable collar?', answer: 'Ask your vet first. Fabric and inflatable collars may or may not work depending on where the incision is, according to Veterinary Partner.' },
]

const schema = combineSchemas(
  buildArticleSchema({ siteId: 'vets-co', title: 'Recovery Cone and E-Collar Guide', description: 'How to use a cone or e-collar after your dog or cat has surgery.', url: PAGE_URL, imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-10-12T00:00:00Z', modifiedAt: '2026-10-12T00:00:00Z', citation: SOURCES }),
  buildFAQSchema({ questions: FAQS }),
)

const SHOP = [
  { q: 'pet+recovery+cone', label: 'Browse pet recovery cones on Amazon →' },
  { q: 'soft+dog+cone+after+surgery', label: 'Browse soft cones on Amazon →' },
  { q: 'dog+recovery+suit', label: 'Browse recovery suits on Amazon →' },
]

export default function RecoveryConePage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Recovery Cones and E-Collars', subtitle: 'How to use a cone after your dog or cat has surgery: when it stays on, how to manage meals, which alternatives exist, and when to call your veterinary team.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'October 2026', readTime: '5 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Recovery Cones', href: '/guides/recovery-cone-e-collar' }]}
        sidebar={<RelatedLinks title="Related Guides" links={[{ label: 'Pet First-Aid Kit Checklist', href: '/guides/pet-first-aid-kit' }, { label: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }, { label: 'Spay and Neuter Benefits', href: '/health/spay-neuter-benefits' }]} />}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-10-12T00:00:00Z" updatedAt="2026-10-12T00:00:00Z" reviewedBy="Editorial team" />
          <LastUpdated date="2026-10-12" />

          <CalloutBox variant="warning" title="Follow your own vet’s discharge instructions">
            Your veterinary team decides how long the cone stays on and which type suits the incision. If stitches come out, the incision opens, or it bleeds or discharges, call the clinic.
          </CalloutBox>

          <h2 id="why">Why the cone matters</h2>
          <p>Cones, also called Elizabethan collars or e-collars, stop a pet from licking or chewing the incision. Veterinary Partner says that prevents irritation, infection, and pulled stitches or staples. VCA warns it only takes a few seconds of chewing for a dog to remove stitches, and the ASPCA Spay/Neuter Alliance notes that licking can open or infect an incision, which usually means more visits and cost.</p>

          <h2 id="keep-on">Keep it on</h2>
          <p>Many dogs find the collar strange at first and try to remove it, but VCA says most settle down after a short time, and that it is better to keep it on constantly than to take it on and off. If your pet was not sent home with one and starts licking the incision, VCA says to contact the hospital and ask for one.</p>

          <h2 id="meals">Meals and water</h2>
          <p>Veterinary Partner notes plastic cones can make eating and drinking hard. If your pet cannot manage, you can remove the cone for meals, but do not let your pet out of your sight while it is off. The ASPCA Spay/Neuter Alliance says to put it back on immediately after eating.</p>

          <h2 id="types">Cone types compared</h2>
          <div className="overflow-x-auto not-prose my-6">
            <table id="cone-table" className="w-full text-sm border border-brand-border">
              <thead className="bg-brand-surface"><tr><th className="p-3 text-left">Type</th><th className="p-3 text-left">What it is</th><th className="p-3 text-left">Watch for</th></tr></thead>
              <tbody>
                {TYPES.map((t) => (
                  <tr key={t.type} className="border-t border-brand-border">
                    <td className="p-3 font-bold text-brand-dark">{t.type}</td>
                    <td className="p-3 text-brand-text-mid">{t.good}</td>
                    <td className="p-3 text-brand-text-mid">{t.watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Whatever the type, Veterinary Partner says there is no point in using one your pet can get around. If your pet can still reach the site, the ASPCA Spay/Neuter Alliance says to choose a larger collar.</p>

          <h2 id="shop">Shop recovery collars</h2>
          <p>These Amazon searches cover rigid cones, soft cones and recovery suits, for when you need a replacement or a better fit your vet has approved. They are searches, not a ranked product list, and they do not replace your vet’s advice.</p>
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
