import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Additives — Vitamins, Minerals, Flavors | PetFood.com',
  description:
    'What the long list of additives at the end of the ingredient panel means — vitamin and mineral premixes, palatants, emulsifiers, colors, and which to watch.',
  path: '/ingredients/additives-and-supplements-on-labels',
  type: 'article',
})

const FAQ = [
  {
    question: 'Why does pet food have so many chemical-sounding ingredients at the end of the label?',
    answer:
      'Because the ingredient panel is ordered by weight, the additives present in tiny amounts cluster at the bottom. Most of that long tail is the vitamin and mineral premix that brings the food to AAFCO completeness, plus functional additives for palatability, texture, and preservation. The chemical names simply name the specific compound supplying each nutrient — a long additive tail is normal on a complete diet, and its absence would more likely indicate an incomplete product.',
  },
  {
    question: 'What is animal digest in pet food?',
    answer:
      'Animal digest, despite the unappetizing name, is a flavor enhancer made from enzymatically treated animal tissue. It is a normal, safe additive used as a palatant — especially important for cats and for therapeutic diets that are otherwise less palatable. "Natural flavor" is a defined term covering these palatants.',
  },
  {
    question: 'Are chelated minerals better than regular minerals?',
    answer:
      'Minerals listed as a proteinate, amino-acid complex, or chelate (such as zinc proteinate) are organic chelated forms, generally more bioavailable than inorganic mineral salts. Their presence indicates the manufacturer chose a more absorbable mineral source — a modest quality signal, not a red flag.',
  },
  {
    question: 'Should I avoid artificial colors in pet food?',
    answer:
      'Artificial colors add no nutritional value and exist purely to make the food look appealing to the human buyer — the animal does not care about color. Colors are the one additive category an owner can reasonably prefer to avoid since they serve no purpose for the pet, though approved colors are not established as harmful at use levels. Many higher-end foods omit them.',
  },
]

const schema = combineSchemas(
  buildArticleSchema({
    siteId: 'petfood-com',
    title: 'Pet Food Additives — Vitamins, Minerals, Flavors | PetFood.com',
    description:
      'What the long list of additives at the end of the ingredient panel means — vitamin and mineral premixes, palatants, emulsifiers, colors, and which to watch.',
    url: 'https://petfood.com/ingredients/additives-and-supplements-on-labels',
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-06-01T00:00:00Z',
    modifiedAt: '2026-06-11T00:00:00Z',
  }),
  buildFAQSchema({ questions: FAQ }),
)

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
    {
      label: "Pet Food Labels — General; Animal Food Ingredients: Regulatory Framework; FDA CVM Recalls & Withdrawals",
      url: "https://www.fda.gov/animal-veterinary/animal-food-feeds/pet-food",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]

export default function AdditivesAndSupplementsOnLabelsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Additives on Pet Food Labels',
        subtitle:
          'The tail end of a pet food ingredient list — a long string of vitamins, minerals, and chemical-sounding names — alarms many owners, but most of it is the supplement premix that makes the food complete. This page decodes the additives at the bottom of the panel: which are essential, which are functional, and which (like artificial colors) add nothing nutritional.',
        category: 'Ingredient Reference',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Ingredients', href: '/ingredients' },
        { name: 'Additives on Pet Food Labels', href: '/ingredients/additives-and-supplements-on-labels' },
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
              { label: 'The Bottom of the Panel', href: '#bottom' },
              { label: 'Vitamin and Mineral Premix', href: '#premix' },
              { label: 'Chelated Minerals', href: '#chelated' },
              { label: 'Palatants and Flavors', href: '#palatants' },
              { label: 'Emulsifiers and Texturizers', href: '#emulsifiers' },
              { label: 'Colors — Cosmetic Only', href: '#colors' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Preservatives in Pet Food', href: '/ingredients/preservatives-pet-food' },
            ]}
          />
          <RelatedLinks
            title="Compare &amp; Evaluate Brands"
            links={[
              { label: 'Compare Food Types', href: '/compare' },
              { label: 'Brand Evaluations', href: '/brands' },
              { label: 'Blue Buffalo — Independent Evaluation', href: '/brands/blue-buffalo-evaluation' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="additives-and-supplements-on-labels"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />
        <p>After the main ingredients, a complete pet food lists a long series of added vitamins, minerals, amino acids, and other additives. The chemical-sounding names can look concerning, but most are the supplement premix that brings the food to AAFCO completeness, plus functional additives for palatability, texture, and preservation. Understanding what each group does removes most of the alarm. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a> and <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="bottom">The Bottom of the Panel</h2>
        <p>Because the panel is ordered by weight, the additives present in tiny amounts cluster at the bottom. Their position reflects their small quantity, not low importance — many are essential nutrients added in milligram or microgram amounts. A long additive tail is normal and expected on a complete diet; its absence would more likely indicate an incomplete product. See <a href="/nutrition/guaranteed-analysis-explained">The Guaranteed Analysis Explained</a>.</p>
        <h2 id="premix">Vitamin and Mineral Premix</h2>
        <p>The string of vitamin names (vitamin E supplement, thiamine mononitrate, pyridoxine hydrochloride, vitamin B12 supplement, and so on) and mineral sources (zinc sulfate, copper sulfate, ferrous sulfate, and others) is the premix added to guarantee the diet meets AAFCO nutrient profiles after processing losses. These are essential nutrients, not unnecessary chemicals — their chemical names simply name the specific compound supplying the nutrient. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="chelated">Chelated Minerals</h2>
        <p>Minerals listed as a proteinate, amino-acid complex, or chelate (zinc proteinate, copper amino-acid complex) are organic chelated forms, generally more bioavailable than inorganic mineral salts. Their presence indicates the manufacturer chose a more absorbable mineral source. This is a modest quality signal, not a red flag. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="palatants">Palatants and Flavors</h2>
        <p>Palatants — natural flavor, animal digest, hydrolyzed liver — make the food appealing, especially important for cats and for therapeutic diets that are otherwise less palatable. Animal digest, despite the unappetizing name, is a flavor enhancer made from enzymatically treated animal tissue and is a normal, safe additive. Natural flavor is a defined term covering these. They serve the real function of getting the animal to eat. See <a href="/myths/marketing-terms-decoded">Pet Food Marketing Terms</a>.</p>
        <h2 id="emulsifiers">Emulsifiers and Texturizers</h2>
        <p>Canned and some other foods include emulsifiers, gums (guar gum, carrageenan, xanthan gum), and humectants that control texture, moisture, and consistency. These are functional additives that keep the product stable and palatable. Carrageenan has drawn some debate, but it remains an approved additive; the evidence for harm at use levels in pet food is not established. Most texturizers are benign functional ingredients.</p>
        <h2 id="colors">Colors — Cosmetic Only</h2>
        <p>Artificial colors (dyes named with numbers, such as Red 40 or Yellow 5) and some natural colorants add no nutritional value and exist purely to make the food look appealing to the human buyer — the animal does not care about color. Colors are the one additive category an owner can reasonably prefer to avoid, since they serve no purpose for the pet, though approved colors are not established as harmful at use levels. Many higher-end foods omit artificial colors. See <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <h2 id="faq">Common Questions</h2>
        <p><strong>Why does pet food have so many chemical-sounding ingredients at the end of the label?</strong></p>
        <p>
          Because the ingredient panel is ordered by weight, the additives present in tiny amounts
          cluster at the bottom. Most of that long tail is the vitamin and mineral premix that
          brings the food to AAFCO completeness, plus functional additives for palatability,
          texture, and preservation. The chemical names simply name the specific compound supplying
          each nutrient — a long additive tail is normal on a complete diet, and its absence would
          more likely indicate an incomplete product.
        </p>
        <p><strong>What is animal digest in pet food?</strong></p>
        <p>
          Animal digest, despite the unappetizing name, is a flavor enhancer made from
          enzymatically treated animal tissue. It is a normal, safe additive used as a palatant —
          especially important for cats and for therapeutic diets that are otherwise less
          palatable. &quot;Natural flavor&quot; is a defined term covering these palatants.
        </p>
        <p><strong>Are chelated minerals better than regular minerals?</strong></p>
        <p>
          Minerals listed as a proteinate, amino-acid complex, or chelate (such as zinc proteinate)
          are organic chelated forms, generally more bioavailable than inorganic mineral salts.
          Their presence indicates the manufacturer chose a more absorbable mineral source — a
          modest quality signal, not a red flag.
        </p>
        <p><strong>Should I avoid artificial colors in pet food?</strong></p>
        <p>
          Artificial colors add no nutritional value and exist purely to make the food look
          appealing to the human buyer — the animal does not care about color. Colors are the one
          additive category an owner can reasonably prefer to avoid since they serve no purpose for
          the pet, though approved colors are not established as harmful at use levels. Many
          higher-end foods omit them.
        </p>

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
