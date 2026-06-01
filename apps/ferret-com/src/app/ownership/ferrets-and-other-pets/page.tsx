import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferrets & Other Pets — Dogs, Cats & Prey Animals | Ferret.com',
  description:
    'How ferrets get along with dogs and cats, and the prey species — rabbits, rodents, birds, reptiles, fish — that should never share unsupervised space with a hunting carnivore.',
  path: '/ownership/ferrets-and-other-pets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferrets & Other Pets',
  description:
    'A reference on housing ferrets alongside other animals, covering dogs, cats, and the prey species that are incompatible with a predatory carnivore.',
  url: 'https://ferret.com/ownership/ferrets-and-other-pets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferrets & Other Pets',
  description:
    'Reference on the compatibility of domestic ferrets with other household animals.',
  url: 'https://ferret.com/ownership/ferrets-and-other-pets',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function FerretsAndOtherPetsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferrets & Other Pets',
          subtitle:
            'A ferret is a predator with a strong prey drive, and that single fact governs everything about how it shares a home with other animals. With dogs and cats, ferrets can do well under supervision and depending on temperament. With small prey species — rabbits, rodents, birds, reptiles — the answer is usually a flat no. This page walks through both.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Ferrets & Other Pets', href: '/ownership/ferrets-and-other-pets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Prey Drive First', href: '#prey-drive' },
                { label: 'Ferrets & Dogs', href: '#dogs' },
                { label: 'Ferrets & Cats', href: '#cats' },
                { label: 'Prey Species: Avoid', href: '#prey-species' },
                { label: 'Ferrets With Other Ferrets', href: '#multi-ferret' },
                { label: 'Introductions Done Safely', href: '#introductions' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Ferrets With Kids', href: '/ownership/ferrets-with-kids' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-ferrets-and-other-pets"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="prey-drive">Prey Drive First</h2>
          <p>
            Ferrets descend from the European polecat and retain a strong, hardwired prey drive. They are obligate carnivores built to hunt small animals, and no amount of domestication removes that instinct. This is the lens through which every cross-species question should be viewed: the issue is rarely whether the ferret will be hurt by a calm dog or cat, but whether the ferret will treat a smaller animal as prey, or whether a larger animal will treat the ferret as one. Everything below follows from that.
          </p>

          <h2 id="dogs">Ferrets & Dogs</h2>
          <p>
            Many ferrets and dogs coexist happily, but it depends heavily on the dog's individual temperament and breed tendencies. Dogs bred with a high prey drive — many terriers, sighthounds, and some hunting breeds — can pose a serious danger to a ferret, because a ferret's quick, darting movement triggers exactly the instinct those breeds were selected for. Calm, sociable dogs with low prey drive often do fine. Regardless of breed, early interactions must be closely supervised, the ferret must have a safe retreat the dog cannot reach, and no ferret and dog should be left together unsupervised until you are thoroughly confident in the relationship — and arguably not even then.
          </p>

          <h2 id="cats">Ferrets & Cats</h2>
          <p>
            Cats and ferrets are roughly size-matched and frequently get along well, sometimes even playing together. A cat is less likely than a high-prey-drive dog to seriously injure a ferret, and the two often reach a comfortable mutual understanding. Still, supervise introductions, watch for a cat that swats with claws or a ferret that nips too hard, and ensure each animal has its own space. Keep litter, food, and resting areas separate enough to avoid conflict, and never assume the relationship is safe before it has proven itself over time.
          </p>

          <h2 id="prey-species">Prey Species: Avoid</h2>
          <p>
            This is the firm part. Rabbits, guinea pigs, hamsters, gerbils, mice, rats, birds, reptiles, amphibians, and fish are all animals a ferret may instinctively regard as prey. A ferret can kill a small mammal or bird very quickly, and even an enclosure is not a guarantee of safety — a determined ferret may stress, frighten, or reach an animal through cage bars. The responsible default is that ferrets and prey species do not share unsupervised space, and ideally are kept entirely separate. Do not rely on a "they seem fine together" impression; prey drive can switch on without warning.
          </p>

          <h2 id="multi-ferret">Ferrets With Other Ferrets</h2>
          <p>
            Ferrets are social animals and many thrive in pairs or small groups — a "business" of ferrets. Most introductions between ferrets go well with patience, since they speak the same body language. The cautions are practical: introduce new ferrets gradually rather than dropping them together, quarantine a newly acquired ferret from resident ferrets initially to protect against transmissible illness, and watch that rough play does not tip into genuine aggression. Same-species company is generally a benefit, not a risk, when managed sensibly.
          </p>

          <h2 id="introductions">Introductions Done Safely</h2>
          <p>
            Whatever the other animal, the principles are the same. Start with scent and barrier introductions before any direct contact, keep the first face-to-face meetings short and closely supervised, ensure the ferret has a safe space to retreat to, and never force interaction. Progress only as fast as both animals stay calm, and accept that some pairings simply will not work — a high-prey-drive dog or a prey animal may never be safe with a ferret, and recognizing that early is part of responsible ownership.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Ferret prey-drive behavior, social housing, and quarantine practice are covered in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and in American Ferret Association husbandry guidance. Cross-species compatibility reflects standard companion-animal behavioral references. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized advice. Cross-species introductions carry real risk; supervise closely and consult a veterinarian or qualified behavior professional if you are uncertain.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
