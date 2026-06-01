import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Vocabulary for Beginners — Key Terms | Ferret.com',
  description:
    'A starter glossary of ferret terms: hob, jill, kit, gib, sprite, dook, the war dance, a business of ferrets, descenting, and altering.',
  path: '/ownership/ferret-vocabulary-for-beginners',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Vocabulary for Beginners',
  description:
    'A beginner-friendly introduction to the most common ferret-keeping terms a new owner will hear, from hob and jill to dooking and the war dance.',
  url: 'https://ferret.com/ownership/ferret-vocabulary-for-beginners',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Vocabulary for Beginners',
  description:
    'Reference glossary of common ferret-keeping vocabulary for new owners.',
  url: 'https://ferret.com/ownership/ferret-vocabulary-for-beginners',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function FerretVocabularyForBeginnersPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Vocabulary for Beginners',
          subtitle:
            "Walk into a ferret forum, a shelter, or a vet's exotics ward and you will hear a private language: hobs and jills, kits and gibs, dooking and war dances, a whole business of ferrets. None of it is hard once it is laid out. This is the starter vocabulary — the handful of words that turn a confusing first week into a navigable one.",
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'Ferret Vocabulary for Beginners', href: '/ownership/ferret-vocabulary-for-beginners' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Words for the Animal', href: '#animals' },
                { label: 'Words for the Behavior', href: '#behavior' },
                { label: 'Words for the Care', href: '#care' },
                { label: 'Words You Will See in Listings', href: '#listings' },
                { label: 'Where to Go Deeper', href: '#deeper' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Ferret Glossary', href: '/ownership/ferret-glossary' },
                { label: 'Is a Ferret Right for You?', href: '/ownership/is-a-ferret-right-for-you' },
                { label: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-ferret-vocabulary-for-beginners"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="animals">Words for the Animal</h2>
          <p>
            Ferret keeping borrows much of its vocabulary from old polecat and
            mustelid terminology. The first cluster of words simply names the
            animals by sex and age:
          </p>
          <ul>
            <li><strong>Hob</strong> — an intact (unneutered) male ferret. Hobs are typically the larger sex.</li>
            <li><strong>Jill</strong> — an intact (unspayed) female ferret, usually smaller than a hob.</li>
            <li><strong>Gib</strong> — a neutered male.</li>
            <li><strong>Sprite</strong> — a spayed female.</li>
            <li><strong>Kit</strong> — a baby ferret, the equivalent of a kitten or puppy.</li>
            <li><strong>Business</strong> — the collective noun for a group of ferrets (a &quot;business of ferrets&quot;).</li>
          </ul>
          <p>
            Whether your ferret is a hob or a jill has real care implications —
            size, and especially the health reasons jills are almost always
            spayed. The differences are covered in{' '}
            <a href="/colors/male-vs-female-ferrets">male vs. female ferrets</a>.
          </p>

          <h2 id="behavior">Words for the Behavior</h2>
          <p>
            The next set describes the things ferrets <em>do</em> — and they do
            some memorable things:
          </p>
          <ul>
            <li><strong>Dooking</strong> — the soft, clucking, chuckling sound a happy, excited ferret makes. A dooking ferret is having a good time.</li>
            <li><strong>War dance</strong> — the frantic, sideways, bouncing hop of an excited ferret, often accompanied by dooking. It looks alarming and means the opposite of alarm.</li>
            <li><strong>Sploot</strong> — lying flat and splayed out, legs stretched behind, a relaxed resting pose.</li>
            <li><strong>Nip</strong> — a bite, usually from a kit that has not yet learned bite inhibition; nip training is part of early ownership.</li>
          </ul>
          <p>
            Learning to read these is the start of understanding ferret body
            language; the wider picture lives in the{' '}
            <a href="/behavior">behavior hub</a>.
          </p>

          <h2 id="care">Words for the Care</h2>
          <p>
            A third cluster comes up the moment you talk to a breeder, shelter,
            or vet about a specific animal:
          </p>
          <ul>
            <li><strong>Altering</strong> — spaying or neutering. Many pet-store ferrets are altered very young before sale; this is a major topic in <a href="/ownership/adoption-vs-buying">adoption vs buying</a>.</li>
            <li><strong>Descenting</strong> — surgical removal of the anal scent glands, also commonly done before sale in some markets. It reduces the strongest scent-marking but does not remove a ferret&apos;s natural musky odor.</li>
            <li><strong>Carpet shark</strong> — affectionate slang for a ferret, after the low, fast way they move along the floor.</li>
          </ul>

          <h2 id="listings">Words You Will See in Listings</h2>
          <p>
            When you read adoption posts or breeder pages, color and pattern
            words appear constantly — sable, albino, dark-eyed white, panda,
            blaze. These are descriptive labels, not breeds (the domestic ferret
            is a single species). Two sellers may use the same word differently.
            For the full vocabulary of coats, start with the{' '}
            <a href="/colors/ferret-colors-and-patterns">colors and patterns
            overview</a>. You will also see <strong>mitt</strong> (white feet),{' '}
            <strong>bib</strong> (white throat), and references to a ferret being{' '}
            <strong>early-altered</strong> or <strong>descented</strong>.
          </p>

          <h2 id="deeper">Where to Go Deeper</h2>
          <p>
            This page is the orientation; the fuller, alphabetized reference —
            including the less common terms — lives in the{' '}
            <a href="/ownership/ferret-glossary">ferret glossary</a>. If you are
            still deciding whether a ferret fits your home, the vocabulary alone
            hints at the commitment: an exotic, social, vocal animal with its own
            language. The honest self-assessment is in{' '}
            <a href="/ownership/is-a-ferret-right-for-you">is a ferret right for
            you?</a>, and the practical setup steps in the{' '}
            <a href="/ownership/first-week-checklist">first-week checklist</a>.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Terminology reflects long-standing usage in ferret-keeping
            communities and in exotic-mammal veterinary practice, as documented
            in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and
            Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and
            in American Ferret Association owner resources. Locate primary
            publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            General reference information for new ferret owners, not
            individualized veterinary advice. Any health or behavior concern
            warrants a visit to an exotic-mammal veterinarian.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
