import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, StockImage } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Glossary — Hob, Jill, Kit, Dooking & More | Ferret.com',
  description:
    'The vocabulary of ferret keeping defined: hob, jill, kit, gib, sprite, business, dooking, the war dance, and the husbandry and health terms owners meet.',
  path: '/ownership/ferret-glossary',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Glossary',
  description:
    'A glossary of ferret-keeping terminology, from the names for ferrets by sex and age to behavior, husbandry, and health vocabulary.',
  url: 'https://ferret.com/ownership/ferret-glossary',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function FerretGlossaryPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Glossary',
          subtitle:
            'Ferret keeping comes with its own vocabulary, and a new owner can feel lost in a forum thread full of jills, gibs, dooking, and war dances. This glossary collects the terms in one place — the words for ferrets by sex and age, the names for their behaviors, and the husbandry and health terms you will meet at the vet and in the community.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '8 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Ferret Glossary', href: '/ownership/ferret-glossary' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Ferrets by Sex & Age', href: '#sex-age' },
                { label: 'Groups & Collective Terms', href: '#groups' },
                { label: 'Behavior Vocabulary', href: '#behavior' },
                { label: 'Body & Appearance', href: '#body' },
                { label: 'Husbandry Terms', href: '#husbandry' },
                { label: 'Health Terms', href: '#health' },
                { label: 'Where to Go Next', href: '#next' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Ferret Names', href: '/ownership/ferret-names' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-ferret-glossary"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Ownership Hub', href: '/ownership' },
          { title: 'Ferret Vocabulary for Beginners', href: '/ownership/ferret-vocabulary-for-beginners' },
          { title: 'Is a Ferret Right for You?', href: '/ownership/is-a-ferret-right-for-you' },
          { title: 'Dooking & Vocalizations', href: '/behavior/dooking-and-vocalizations' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:glossary-hero"
            aspect="16:9"
            variant="inline"
            caption="An alert ferret — the animal whose vocabulary this glossary defines."
          />
          <h2 id="sex-age">Ferrets by Sex & Age</h2>
          <ul>
            <li><strong>Hob</strong> — an intact (un-neutered) male ferret.</li>
            <li><strong>Gib</strong> — a neutered male ferret.</li>
            <li><strong>Jill</strong> — an intact (un-spayed) female ferret.</li>
            <li><strong>Sprite</strong> — a spayed female ferret.</li>
            <li><strong>Kit</strong> — a baby ferret, from birth through the early months.</li>
            <li><strong>Hoblet</strong> — a male ferret that has been vasectomized but not fully neutered (a less common term).</li>
          </ul>
          <p>
            The hob/jill terminology is shared with several other mustelids and with rabbits, which can cause confusion in mixed-pet communities — context usually makes the meaning clear.
          </p>

          <h2 id="groups">Groups & Collective Terms</h2>
          <ul>
            <li><strong>Business</strong> — the traditional collective noun for a group of ferrets (a "business of ferrets"). Sometimes rendered as "busyness."</li>
            <li><strong>Fuzzy / fuzzball</strong> — affectionate community slang for a ferret.</li>
            <li><strong>Carpet shark</strong> — playful slang reflecting a ferret's low, weaving movement across the floor.</li>
          </ul>

          <h2 id="behavior">Behavior Vocabulary</h2>
          <ul>
            <li><strong>Dooking</strong> — the soft, clucking, chuckling vocalization a happy, excited ferret makes, especially during play.</li>
            <li><strong>War dance / weasel war dance</strong> — the frenzied, sideways-hopping, back-arching dance of an excited ferret, often accompanied by dooking. It looks alarming but signals pure joy.</li>
            <li><strong>Sploot</strong> — lying flat on the belly with legs splayed out, a relaxed resting posture shared with several other animals.</li>
            <li><strong>Bottlebrush tail</strong> — a puffed-up, bristled tail, a sign of high arousal that can mean excitement or fear depending on context.</li>
            <li><strong>Nipping / mouthing</strong> — exploratory or attention-seeking use of the mouth, usually trainable out (see <a href="/behavior/training-and-bonding">training and bonding</a>).</li>
            <li><strong>Stash / stashing</strong> — the ferret habit of hoarding small objects (and sometimes food) in hidden caches.</li>
          </ul>

          <h2 id="body">Body & Appearance</h2>
          <ul>
            <li><strong>Mask</strong> — the darker fur markings across the face of many ferret color patterns.</li>
            <li><strong>Sable</strong> — the most common ferret coloration, a warm brown with darker points.</li>
            <li><strong>Albino</strong> — a white-coated, pink-eyed ferret lacking pigment.</li>
            <li><strong>Roan</strong> — a coat mixing white and colored guard hairs.</li>
            <li><strong>Mitts / mittens</strong> — white markings on the feet, a pattern feature in some color descriptions.</li>
          </ul>

          <h2 id="husbandry">Husbandry Terms</h2>
          <ul>
            <li><strong>Descenting</strong> — surgical removal of the anal scent glands; reduces musk during stress but does not remove a ferret's natural body odor (see <a href="/ownership/adoption-vs-buying">adoption vs buying</a>).</li>
            <li><strong>Altering</strong> — spaying or neutering; important for pet ferrets, partly because intact unbred jills risk estrogen toxicity.</li>
            <li><strong>Free-feeding</strong> — leaving food available at all times, the standard approach for adult ferrets, which graze many small meals a day.</li>
            <li><strong>Food fixation / imprinting</strong> — the tendency of ferrets to fixate on foods learned in their first months (see <a href="/diet/kit-vs-adult-feeding">kit vs adult feeding</a>).</li>
            <li><strong>Hammock</strong> — a hanging fabric sleeping sling, a near-universal feature of ferret cages.</li>
          </ul>

          <h2 id="health">Health Terms</h2>
          <ul>
            <li><strong>Insulinoma</strong> — a functional tumor of the pancreatic beta cells, the most common neoplasm in middle-aged and older ferrets (see <a href="/health/insulinoma">insulinoma</a>).</li>
            <li><strong>Adrenal disease</strong> — a common endocrine disease of older ferrets involving the adrenal glands (see <a href="/health/adrenal-disease">adrenal disease</a>).</li>
            <li><strong>ECE</strong> — epizootic catarrhal enteritis, a contagious gastrointestinal disease colloquially called "green slime disease."</li>
            <li><strong>Estrogen toxicity</strong> — a life-threatening anemia that can develop in an intact jill left in prolonged heat without breeding, and the reason spaying is a health measure.</li>
            <li><strong>Exotic-mammal vet</strong> — a veterinarian experienced with ferrets and other exotic mammals; the appropriate provider for ferret care (see <a href="/health/vet-visit-prep">vet visit prep</a>).</li>
          </ul>

          <h2 id="next">Where to Go Next</h2>
          <p>
            With the vocabulary in hand, the rest of the site reads more easily. For choosing a name that fits your new fuzzy, see <a href="/ownership/ferret-names">ferret names</a>; for getting started, the <a href="/ownership/first-week-checklist">first-week checklist</a>; and for the clinical detail behind the health terms above, the <a href="/health">Health</a> hub.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
