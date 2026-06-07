import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  CrossPortfolioCard,
  ArticleSourcesList,
} from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret parasitology, ectoparasites, and heartworm chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Parasitic Diseases of Ferrets: flea control, ear mites, heartworm prevention, and antiparasitic safety",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/parasitic-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — ferret parasite-control guidance and ectoparasitology continuing-education materials",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical reports on ferret flea infestation, heartworm, and antiparasitic treatment protocols",
    url: "https://www.sciencedirect.com/journal/journal-of-exotic-pet-medicine",
    publisher: "Journal of Exotic Pet Medicine",
  },
]
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Fleas & Parasites — Internal and External | Ferret.com',
  description:
    'Fleas, mites, heartworm, and intestinal parasites in ferrets. Why ferret size makes parasite control a precision, vet-guided job, and the signs of each.',
  path: '/health/fleas-and-parasites',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Fleas and Parasites',
  description:
    'External and internal parasites of domestic ferrets — fleas, ear mites, heartworm, and intestinal parasites — including signs, diagnosis, and veterinarian-guided control.',
  url: 'https://ferret.com/health/fleas-and-parasites',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Fleas and Parasites',
  description:
    'Clinical reference on external and internal parasites in domestic ferrets, including fleas, mites, heartworm, and intestinal parasites.',
  url: 'https://ferret.com/health/fleas-and-parasites',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health' },
    { name: 'Fleas & Parasites', url: 'https://ferret.com/health/fleas-and-parasites' },
  ],
})

const FAQS = [
  {
    question: 'Can I use my dog or cat flea product on my ferret?',
    answer:
      "Not without veterinary guidance. Many flea products are not labeled for ferrets, and ferrets are small enough that a dose meant for a larger pet can be toxic. Some active ingredients used safely in dogs are dangerous in ferrets. Always have your veterinarian select and dose a flea product specifically for your ferret rather than reaching for the dog's tube.",
  },
  {
    question: 'How do I know if my ferret has fleas?',
    answer:
      "Look for scratching, restlessness, and 'flea dirt' — small black specks in the coat that turn reddish-brown on a damp paper towel, which is digested blood. You may see live fleas, especially around the neck and rump. Because ferrets are small, a heavy flea burden can cause meaningful blood loss and anemia, particularly in kits, so fleas are not a trivial nuisance in this species.",
  },
  {
    question: 'Do ferrets get heartworm?',
    answer:
      "Yes, and it is serious. Because the ferret heart is small, even one or two adult heartworms can be life-threatening, and treatment of established infection is risky. In heartworm-endemic regions, veterinarians often recommend a vet-prescribed monthly preventive. Prevention is dramatically safer than treatment in ferrets.",
  },
  {
    question: 'What about intestinal worms?',
    answer:
      "Ferrets can carry intestinal parasites such as coccidia, Giardia, and various worms, more often in young kits or animals from crowded backgrounds. Signs include diarrhea, poor growth, and weight loss. Diagnosis is by a fecal examination, and treatment is a veterinarian-prescribed dewormer or antiprotozoal chosen for the specific parasite. A fecal check is a reasonable part of a new-ferret vet visit.",
  },
  {
    question: 'Should every ferret be on a parasite preventive?',
    answer:
      "It depends on lifestyle and region. A strictly indoor ferret in a low-risk area may need less than one that goes outdoors or lives where heartworm and fleas are common. Rather than a blanket rule, the right plan is set with your veterinarian based on exposure risk — which products, how often, and which parasites to target.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretFleasParasitesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Fleas & Parasites',
          subtitle:
            'Fleas, mites, heartworm, and intestinal parasites all affect ferrets — and the ferret’s small size turns parasite control into a precision job where the wrong dog product can do real harm. Here is the landscape, and why every preventive is a veterinary decision.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Fleas & Parasites', href: '/health/fleas-and-parasites' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Why Size Changes Everything', href: '#size' },
                { label: 'Fleas', href: '#fleas' },
                { label: 'Mites', href: '#mites' },
                { label: 'Heartworm', href: '#heartworm' },
                { label: 'Intestinal Parasites', href: '#internal' },
                { label: 'Building a Plan', href: '#plan' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Ear Mites', href: '/health/ear-mites' },
                { label: 'Heart Disease', href: '/health/heart-disease' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-fleas-parasites"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Ear Mites', href: '/health/ear-mites' },
          { title: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
          { title: 'Signs of Pain', href: '/health/signs-of-pain' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Parasite control in a ferret is not just dog-or-cat parasite control
            scaled down. A ferret weighs a fraction of a small dog, which means
            a flea burden that merely annoys a terrier can leave a kit anemic,
            a single heartworm can be catastrophic, and a product dose that is
            routine for a cat can be an overdose. The parasites are familiar;
            the margins are not.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Ferrets are affected by fleas, mites (especially{' '}
            <a href="/health/ear-mites">ear mites</a>), heartworm, and intestinal
            parasites. Their small size raises the stakes: fleas can cause
            anemia, even a single heartworm can be life-threatening, and
            improper dosing of dog or cat products can be toxic. Every flea
            product, heartworm preventive, and dewormer should be selected and
            dosed by a veterinarian who treats ferrets. Prevention is far safer
            than treating an established infection.
          </p>

          <h2 id="size">Why Size Changes Everything</h2>
          <p>
            The single most important concept in ferret parasite control is that
            ferrets are small and sensitive to insecticide and antiparasitic
            overdose. Active ingredients that are safe in dogs are not all safe
            in ferrets, and a dose calibrated for a larger animal can be
            dangerous. The exotic-mammal references (Quesenberry &amp;
            Carpenter, <em>Ferrets, Rabbits, and Rodents</em>) repeatedly stress
            veterinary selection and dosing of antiparasitics in this species.
            This is why this page names categories and parasites but leaves the
            specific product and dose to your veterinarian.
          </p>

          <h2 id="fleas">Fleas</h2>
          <p>
            Ferrets pick up the same fleas as dogs and cats, often from other
            household pets. Signs include scratching, restlessness, and{' '}
            <em>flea dirt</em> — black specks in the coat that smear reddish-brown
            on a damp tissue because they are digested blood. Live fleas are
            easiest to spot around the neck and rump.
          </p>
          <CalloutBox variant="warning" title="Fleas can cause anemia in ferrets">
            <p>
              Because a ferret is so small, a heavy flea infestation can remove
              enough blood to cause anemia, which is especially dangerous in
              kits. Pale gums, weakness, and lethargy in a flea-infested ferret
              are a reason for a prompt vet visit, not just a flea bath.
            </p>
          </CalloutBox>
          <p>
            Flea control combines treating the ferret with a veterinarian-chosen
            product, treating every other pet in the home, and addressing the
            environment, since most of a flea population lives in the
            surroundings rather than on the animal.
          </p>

          <h2 id="mites">Mites</h2>
          <p>
            The most common mite in ferrets is <em>Otodectes cynotis</em>, the
            ear mite — covered in depth in our dedicated{' '}
            <a href="/health/ear-mites">ear mites</a> reference. Ferrets can also
            develop sarcoptic mange, which causes intense itching and skin
            crusting, sometimes concentrated on the feet. Both are diagnosed by
            a vet examining skin scrapings or ear swabs and treated with
            veterinarian-prescribed acaricides at vet-determined intervals.
          </p>

          <h2 id="heartworm">Heartworm</h2>
          <p>
            Heartworm deserves special emphasis because of the mismatch between
            the parasite and the host: heartworms are sized for dogs, and the
            ferret heart is tiny. As a result, even one or two adult worms can
            cause severe disease, and treatment of established heartworm in
            ferrets is risky and not always successful. The whole strategy is
            therefore prevention. In heartworm-endemic regions, a
            vet-prescribed monthly preventive is commonly recommended; whether
            your ferret needs one depends on regional mosquito exposure. This is
            closely tied to ferret cardiac health more broadly — see{' '}
            <a href="/health/heart-disease">heart disease</a>.
          </p>

          <h2 id="internal">Intestinal Parasites</h2>
          <p>
            Ferrets — particularly young kits and those from crowded origins —
            can carry intestinal parasites including coccidia, <em>Giardia</em>,
            and various worms. Signs include diarrhea, poor weight gain, and
            weight loss. Diagnosis is by fecal examination, and treatment is a
            veterinarian-prescribed dewormer or antiprotozoal matched to the
            specific parasite. A fecal check is a sensible part of a new-ferret
            wellness visit, especially for recently acquired kits.
          </p>

          <h2 id="plan">Building a Parasite Plan</h2>
          <p>
            There is no universal protocol, because the right plan depends on
            where you live and how your ferret lives:
          </p>
          <ul>
            <li>
              <strong>Lifestyle.</strong> Indoor-only ferrets with no other pets
              face lower external-parasite pressure than those who go outdoors
              or share a home with dogs and cats.
            </li>
            <li>
              <strong>Region.</strong> Heartworm and flea pressure vary widely by
              climate and geography.
            </li>
            <li>
              <strong>Age and origin.</strong> Kits and newly acquired ferrets
              warrant a baseline fecal check and a careful look for fleas and
              mites.
            </li>
          </ul>
          <p>
            Bring these details to your veterinarian and build the plan together.
            The full ferret health library, including the dedicated ear-mite and
            heart-disease references, is organized at the{' '}
            <a href="/health">health hub</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret parasites. It
            is not individualized veterinary advice. Antiparasitic selection and
            dosing are veterinary decisions and require a clinician familiar with
            ferrets — ideally an AEMV member or an ABVP diplomate in Exotic
            Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
