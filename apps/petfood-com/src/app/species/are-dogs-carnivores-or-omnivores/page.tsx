import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Are Dogs Carnivores or Omnivores? — The Evidence | PetFood.com',
  description:
    'What domestication and starch-digestion genetics tell us about the canine diet, why dogs are facultative omnivores, and what this means for feeding.',
  path: '/species/are-dogs-carnivores-or-omnivores',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Are Dogs Carnivores or Omnivores? — The Evidence | PetFood.com',
  description:
    'What domestication and starch-digestion genetics tell us about the canine diet, why dogs are facultative omnivores, and what this means for feeding.',
  url: 'https://petfood.com/species/are-dogs-carnivores-or-omnivores',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function AreDogsCarnivoresOrOmnivoresPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Are Dogs Carnivores or Omnivores?',
        subtitle:
          'The claim that dogs are carnivores like their wolf ancestors is a popular premise behind raw and meat-heavy diets, but the genetics of domestication tell a more nuanced story. Dogs adapted to a starch-richer diet alongside humans and are best described as facultative omnivores. This page covers the evidence and what it means for how to feed a dog.',
        category: 'Species Nutrition',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Species', href: '/species' },
        { name: 'Are Dogs Carnivores or Omnivores?', href: '/species/are-dogs-carnivores-or-omnivores' },
      ]}
      relatedLinks={[
        { title: 'Species Hub', href: '/species' },
        { title: 'Cats Are Obligate Carnivores', href: '/species/cats-are-obligate-carnivores' },
        { title: 'Dog vs Cat Nutrition Overview', href: '/species/dog-vs-cat-nutrition-overview' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Wolf Comparison', href: '#wolf' },
              { label: 'Domestication and Amylase', href: '#amylase' },
              { label: 'Facultative Omnivore', href: '#facultative' },
              { label: 'What Dogs Can Synthesize', href: '#synthesize' },
              { label: 'Dietary Flexibility', href: '#flexibility' },
              { label: 'Practical Feeding', href: '#practical' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="are-dogs-carnivores-or-omnivores"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Dogs descend from wolves, and the assumption that they share the wolf&apos;s carnivorous physiology drives much of the meat-maximalist marketing in pet food. But dogs diverged from wolves through a long domestication process that included dietary adaptation, and modern dogs are not metabolically identical to wolves. The evidence points to the dog as a facultative omnivore — able to thrive on a meat-based diet but also adapted to use carbohydrate. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="wolf">The Wolf Comparison</h2>
        <p>While dogs and wolves are closely related, domestication over roughly 15,000 to 30,000 years selected for traits suited to living alongside humans, including the ability to digest the starch-rich scraps of human settlements. Treating the modern dog as a captive wolf ignores this adaptation. The wolf comparison is a starting point, not a conclusion about how to feed a dog.</p>
        <h2 id="amylase">Domestication and Amylase</h2>
        <p>A landmark genetic finding is that dogs, compared with wolves, carry expanded copy numbers of the gene for pancreatic amylase (AMY2B) and show adaptations improving starch and glucose digestion. This is direct molecular evidence that dogs adapted to a higher-starch diet during domestication — a key difference from their wolf ancestors and from obligate carnivores like the cat. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="facultative">Facultative Omnivore</h2>
        <p>The dog is best described as a facultative omnivore: primarily adapted to a meat-rich diet but able to digest and use carbohydrate and a broad range of ingredients. This is distinct from the cat (obligate carnivore) and from a true omnivore. The practical meaning is dietary flexibility — dogs can thrive on well-formulated diets across a range of ingredient compositions, provided the diet is complete and balanced.</p>
        <h2 id="synthesize">What Dogs Can Synthesize</h2>
        <p>Unlike cats, dogs can synthesize taurine (in most breeds) from sulfur amino acids, convert beta-carotene to vitamin A, and make arachidonic acid from linoleic acid. This metabolic flexibility is why dogs have no dietary requirement for several nutrients that cats must eat pre-formed, and why dog food can be formulated with a broader ingredient base than cat food. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="flexibility">Dietary Flexibility</h2>
        <p>Because dogs are flexible, there is no single correct macronutrient ratio for all dogs — a well-formulated higher-protein diet and a well-formulated moderate-carbohydrate diet can both support health. Individual needs vary with activity, life stage, and health. The flexibility does not mean carbohydrate is required (it is not) or that any diet works; it means the dog tolerates a range of complete diets. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="practical">Practical Feeding</h2>
        <p>For feeding a dog, the carnivore-versus-omnivore debate matters less than diet quality: feed a complete and balanced diet appropriate to life stage, with adequate high-quality protein and essential fatty acids, from a transparent manufacturer. The dog&apos;s omnivore flexibility means the ingredient base can vary; the completeness and balance cannot. Do not let the wolf myth drive an unbalanced meat-only home diet. See <a href="/compare/home-cooked-vs-commercial">Home-Cooked vs Commercial Diets</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
