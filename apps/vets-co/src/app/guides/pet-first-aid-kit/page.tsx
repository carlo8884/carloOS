import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, ShopCtas, ArticleByline, CalloutBox, ArticleSourcesList, LastUpdated } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

const PAGE_URL = 'https://vets.co/guides/pet-first-aid-kit'
const SOURCE = 'guides-pet-first-aid-kit'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pet First-Aid Kit Checklist: What to Pack | Vets.co',
  description: 'What a dog or cat first-aid kit should hold, from the AVMA and Merck Veterinary Manual checklists, and which items need a call to your vet first.',
  path: '/guides/pet-first-aid-kit',
  type: 'article',
})

const SOURCES = [
  { label: 'First aid tips for pet owners (first aid kit for pets)', url: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners', publisher: 'American Veterinary Medical Association' },
  { label: 'First Aid Kit for a Pet (full review Dec 2025)', url: 'https://www.merckvetmanual.com/special-pet-topics/emergencies/first-aid-kit-for-a-pet', publisher: 'Merck Veterinary Manual' },
  { label: 'Pet First Aid client brochure', url: 'https://ebusiness.avma.org/files/ProductDownloads/mcm-client-brochures-pet-first-aid-2025.pdf', publisher: 'American Veterinary Medical Association' },
]

const KIT: { item: string; why: string; caution?: string }[] = [
  { item: 'Important phone numbers', why: 'Your veterinarian, the nearest emergency hospital, and poison control.' },
  { item: 'Copy of the medical record', why: 'Including every medication your pet takes.' },
  { item: 'Digital thermometer', why: 'To take your pet’s temperature.' },
  { item: 'Muzzle', why: 'Prevents bites from a pet in pain.', caution: 'Do not muzzle a pet that is vomiting.' },
  { item: 'Spare leash and collar', why: 'Keeps an injured pet under control.' },
  { item: 'Gauze roll', why: 'Wraps wounds, or makes a muzzle in a pinch.' },
  { item: 'Clean towels', why: 'Restrain a cat, clean up, or pad an injury.' },
  { item: 'Nonstick bandages and self-adhering tape', why: 'Control bleeding and protect a wound; adhesive tape secures the dressing.' },
  { item: 'Blunt-ended scissors', why: 'Cut bandage material safely.' },
  { item: 'Disposable gloves', why: 'Protect your hands.' },
  { item: 'Small flashlight', why: 'Look at eyes and wounds.' },
  { item: 'Tweezers', why: 'Remove small foreign objects.' },
  { item: 'Eye dropper or needle-free syringe', why: 'Give oral treatments or flush a wound.' },
  { item: 'Sterile lubricating jelly', why: 'Protects wounds and eyes.' },
  { item: 'Saline solution', why: 'Cleans wounds and flushes eyes. Contact-lens saline works for most purposes.' },
  { item: '3% hydrogen peroxide', why: 'Used to induce vomiting.', caution: 'Only after your vet or poison control says so, one dose unless told otherwise, and never on wounds.' },
  { item: 'Activated charcoal', why: 'Absorbs some poisons.', caution: 'Only if your vet or a poison control center tells you to.' },
]

const FAQS = [
  { question: 'Should I buy a ready-made pet first-aid kit or build one?', answer: 'Either works. The Merck Veterinary Manual says you can buy a kit or assemble one yourself, kept in a container with a secure lid where you can reach it quickly. Many items in a family first-aid kit can be used for pets too, according to the AVMA. A ready-made kit is a starting point: check it against the checklist on this page and add what is missing, such as the phone numbers and a copy of the medical record.' },
  { question: 'Can I use hydrogen peroxide to make my dog vomit?', answer: 'Only when your veterinarian or a poison control center tells you to. The AVMA says to always contact them before inducing vomiting, not to give more than one dose unless instructed, and never to use hydrogen peroxide on wounds. Some swallowed substances do more damage coming back up. ASPCA Animal Poison Control is 888-426-4435 (24/7, a fee applies).' },
  { question: 'How often should I check the kit?', answer: 'The Merck Veterinary Manual says to check expiration dates on medications at least once a year and replace items as needed. Restock anything you use straight away, and update the phone numbers and medical record copy whenever they change.' },
]

const schema = combineSchemas(
  buildArticleSchema({ siteId: 'vets-co', title: 'Pet First-Aid Kit Checklist', description: 'What a dog or cat first-aid kit should hold, from the AVMA and Merck Veterinary Manual checklists.', url: PAGE_URL, imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-10-12T00:00:00Z', modifiedAt: '2026-10-14T00:00:00Z', citation: SOURCES }),
  buildFAQSchema({ questions: FAQS }),
)

const SHOP = [
  { q: 'pet+first+aid+kit', label: 'Browse pet first-aid kits on Amazon →' },
  { q: 'digital+pet+thermometer', label: 'Browse digital pet thermometers on Amazon →' },
  { q: 'wound+care+gauze', label: 'Browse wound-care gauze on Amazon →' },
]

export default function PetFirstAidKitPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Pet First-Aid Kit Checklist', subtitle: 'What a dog or cat first-aid kit should hold, taken from the AVMA and Merck Veterinary Manual checklists, with the items that need a call to your vet or poison control before you use them.', category: 'Owner Guide', authorName: 'Vets.co Editorial', publishedAt: 'October 2026', readTime: '6 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides' }, { name: 'Pet First-Aid Kit', href: '/guides/pet-first-aid-kit' }]}
        sidebar={<RelatedLinks title="Related Guides" links={[{ label: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }, { label: 'ER vs. Urgent Care vs. Regular Vet', href: '/guides/er-vs-urgent-care' }, { label: 'Emergency Vet Costs', href: '/guides/emergency-vet-costs' }, { label: 'Can I Give My Dog…?', href: '/medications/can-i-give-my-dog' }]} />}
      >
        <div className="carloOS-article">
          <div data-top-shop className="not-prose my-5 rounded-xl border border-brand-border bg-brand-surface px-4 py-3">
            <HopDisclosure siteId="vets-co" href={`/go/amazon-brand/${SHOP[0].q}?s=${SOURCE}`} />
            <ShopCtas amazonHref={`/go/amazon-brand/${SHOP[0].q}?s=${SOURCE}`} amazonLabel={SHOP[0].label} />
            
          </div>
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-10-12T00:00:00Z" updatedAt="2026-10-14T00:00:00Z" reviewedBy="Editorial team" />
          <LastUpdated date="2026-10-14" />

          <CalloutBox variant="warning" title="A kit buys time. It does not replace the vet">
            The AVMA says any first aid you give should be followed by immediate veterinary care. If your pet is struggling to breathe, bleeding heavily, collapsed, or has swallowed something toxic, call your vet or an emergency hospital on the way.
          </CalloutBox>


          <h2 id="buy-or-build">Buy one or build one</h2>
          <p>The Merck Veterinary Manual says you can buy a pet first-aid kit or assemble one yourself. Either way, keep it in a container with a secure lid, somewhere you can reach quickly, and learn how to use everything in it. Many items in a family first-aid kit work for pets too, according to the AVMA. A ready-made kit is a fast start; check it against the list below and add what it lacks, especially the phone numbers and the medical record copy.</p>

          <h2 id="checklist">The checklist</h2>
          <p>These items come from the AVMA’s pet first-aid kit list. Your veterinarian may suggest more for your pet’s own conditions.</p>
          <div className="overflow-x-auto not-prose my-6">
            <table id="kit-table" className="w-full text-sm border border-brand-border">
              <thead className="bg-brand-surface"><tr><th className="p-3 text-left">Item</th><th className="p-3 text-left">What it is for</th><th className="p-3 text-left">Before you use it</th></tr></thead>
              <tbody>
                {KIT.map((k) => (
                  <tr key={k.item} className="border-t border-brand-border">
                    <td className="p-3 font-bold text-brand-dark">{k.item}</td>
                    <td className="p-3 text-brand-text-mid">{k.why}</td>
                    <td className="p-3 text-brand-text-mid">{k.caution ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>The Merck Veterinary Manual list adds a few items: sterile pads and a stretch bandage, splinting materials, cotton balls or swabs, antibiotic ointment, a bulb syringe, and a small supply of any medicine your pet takes daily. Ask your veterinarian before giving even a regular medicine during an emergency.</p>

          <h2 id="poison">The two items that need a phone call first</h2>
          <p>Hydrogen peroxide and activated charcoal are in the kit for poisonings, but the AVMA says to use them only when your vet or a poison control center tells you to. Do not give more than one dose of peroxide unless instructed, and never put it on a wound. ASPCA Animal Poison Control is 888-426-4435 (24/7, a fee applies). Our <a href="/medications/can-i-give-my-dog">human medication safety list</a> covers the medicines owners most often reach for.</p>

          <h2 id="upkeep">Keep it current</h2>
          <p>The Merck Veterinary Manual says to check expiration dates on medications at least once a year and replace items as needed. Restock anything you use straight away, and update the phone numbers and the medical record copy when they change. Many vet clinics, community colleges, and the Red Cross run animal first-aid and CPR classes.</p>

          <h2 id="shop">Shop the kit</h2>
          <p>These Amazon searches cover a ready-made kit to start from, a digital thermometer, and gauze for restocking. They are searches, not a ranked product list, and none of them replaces veterinary care.</p>
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
