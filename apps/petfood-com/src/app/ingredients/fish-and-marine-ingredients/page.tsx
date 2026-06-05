import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Fish and Marine Ingredients in Pet Food | PetFood.com',
  description:
    'Salmon, whitefish, fish meal, and fish oil in pet diets, the omega-3 benefit, the thiamine and mercury considerations, and sustainability and sourcing.',
  path: '/ingredients/fish-and-marine-ingredients',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Fish and Marine Ingredients in Pet Food | PetFood.com',
  description:
    'Salmon, whitefish, fish meal, and fish oil in pet diets, the omega-3 benefit, the thiamine and mercury considerations, and sustainability and sourcing.',
  url: 'https://petfood.com/ingredients/fish-and-marine-ingredients',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
]

export default function FishAndMarineIngredientsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Fish and Marine Ingredients',
        subtitle:
          'Fish and marine ingredients bring valuable omega-3 fatty acids and high-quality protein to pet food, which is why salmon and whitefish recipes are popular and why fish oil is added to so many therapeutic diets. But marine ingredients also carry specific considerations — thiaminase in some raw fish, heavy-metal accumulation, and sustainability. This page covers the benefits and the caveats.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Fish and Marine Ingredients', href: '/ingredients/fish-and-marine-ingredients' },
      ]}
      relatedLinks={[
        { title: 'Ingredients Hub', href: '/ingredients' },
        { title: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
        { title: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
        { title: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Why Fish Is Used', href: '#why' },
              { label: 'Whole Fish vs Fish Meal', href: '#wholevsmeal' },
              { label: 'The Omega-3 Benefit', href: '#omega3' },
              { label: 'Thiamine and Raw Fish', href: '#thiamine' },
              { label: 'Mercury and Heavy Metals', href: '#mercury' },
              { label: 'Sustainability and Sourcing', href: '#sustainability' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
              { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
              { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="fish-and-marine-ingredients"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Fish and marine ingredients — named fish (salmon, whitefish, herring), fish meal, and fish oil — supply high-quality animal protein and, importantly, the long-chain omega-3 fatty acids EPA and DHA. They are valued both as a primary protein and as a functional omega-3 source. They also carry specific considerations around thiamine, contaminants, and sustainability that distinguish them from land-animal proteins. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a> and <a href="/supplements/fish-oil-omega-3">Fish Oil and Omega-3 Supplements</a>.</p>
        <h2 id="why">Why Fish Is Used</h2>
        <p>Fish provides a complete, highly digestible animal protein and is a leading natural source of EPA and DHA, the omega-3s with evidence for skin, joint, and other benefits. Named fish also serves as a novel protein for some animals in allergy management. These advantages make fish a desirable ingredient in both maintenance and therapeutic diets. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="wholevsmeal">Whole Fish vs Fish Meal</h2>
        <p>As with land animals, whole fish (for example, salmon) is the wet, unrendered ingredient, while fish meal is the rendered, dried, concentrated product. Named fish meal (salmon meal, herring meal) is nutrient- and protein-dense and contributes more finished-product protein per ingoing pound than whole fish, which is mostly water. Generic fish meal is less transparent than a species-named meal. The transparency and concentration logic mirrors that for poultry and meat. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="omega3">The Omega-3 Benefit</h2>
        <p>The standout nutritional advantage of marine ingredients is their EPA and DHA content. Diets built on fish, or supplemented with fish oil, deliver these omega-3s in their bioavailable pre-formed marine form — far more useful than the plant-derived alpha-linolenic acid that dogs and cats convert poorly. This is why fish-based and fish-oil-enriched diets feature in skin, joint, kidney, and cardiac nutrition. See <a href="/diets/joint-and-mobility-diets">Joint and Mobility Diets</a>.</p>
        <h2 id="thiamine">Thiamine and Raw Fish</h2>
        <p>Some raw fish contain thiaminase, an enzyme that destroys thiamine (vitamin B1), and diets heavy in certain raw fish have caused thiamine deficiency, particularly in cats. Cooking inactivates thiaminase, so cooked commercial fish diets are not a concern, and complete diets are supplemented with thiamine. The risk applies to raw or all-fish home diets, not properly formulated cooked commercial foods. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="mercury">Mercury and Heavy Metals</h2>
        <p>Fish can accumulate mercury and other heavy metals, with larger, longer-lived predatory species accumulating more. The levels in commercial pet food fish ingredients are generally low and regulated, and most diets use smaller forage fish or salmon rather than large predators. For animals eating fish-based diets long-term, sourcing from reputable manufacturers that test for contaminants is the relevant safeguard; this is a minor consideration in well-sourced foods.</p>
        <h2 id="sustainability">Sustainability and Sourcing</h2>
        <p>Marine ingredient sustainability varies with the fishery and species. Some manufacturers use byproducts of the human seafood industry or certified-sustainable sources; others do not disclose. For owners who weigh environmental impact, manufacturer transparency on fish sourcing and certification (such as Marine Stewardship Council) is the relevant signal. As with all ingredients, disclosure is the differentiator. See <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
