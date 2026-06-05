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
  title: 'Are Pet Food By-Products Bad? — The Myth | PetFood.com',
  description:
    'What AAFCO by-products actually are, why the floor-sweepings framing is wrong, the real transparency concern, and how organ meats are nutritionally valuable.',
  path: '/myths/by-products-myth',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Are Pet Food By-Products Bad? — The Myth | PetFood.com',
  description:
    'What AAFCO by-products actually are, why the floor-sweepings framing is wrong, the real transparency concern, and how organ meats are nutritionally valuable.',
  url: 'https://petfood.com/myths/by-products-myth',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function ByProductsMythPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'The By-Products Myth',
        subtitle:
          'By-products is among the most effective negative marketing terms in pet food, evoking floor sweepings and waste. The AAFCO definition tells a different story: by-products are largely organ meats, which are nutritionally dense. The legitimate concern is transparency, not nutritional value. This page checks the by-products claim against the regulatory definition.',
        category: 'Myth-Busting',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Myths', href: '/myths' },
        { name: 'The By-Products Myth', href: '/myths/by-products-myth' },
      ]}
      relatedLinks={[
        { title: 'Myths Hub', href: '/myths' },
        { title: 'The Fillers Myth', href: '/myths/fillers-myth' },
        { title: 'Marketing Terms Decoded', href: '/myths/marketing-terms-decoded' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Claim', href: '#claim' },
              { label: 'What By-Products Are', href: '#whatare' },
              { label: 'Organ Meats Are Valuable', href: '#organ' },
              { label: 'What Is Excluded', href: '#excluded' },
              { label: 'The Real Concern — Transparency', href: '#transparency' },
              { label: 'The Verdict', href: '#verdict' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
              { label: 'Pet Food Fillers Myth', href: '/myths/fillers-myth' },
              { label: 'Corn in Pet Food Myth', href: '/myths/corn-in-pet-food-myth' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="by-products-myth"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>The claim is that by-products are low-quality waste — beaks, hooves, floor sweepings, diseased tissue — used as cheap filler, and that a food free of by-products is therefore superior. This framing has driven significant marketing, but it does not match the AAFCO ingredient definitions or the nutritional reality. By-products are a defined ingredient category consisting largely of nutritious organ meats. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="claim">The Claim</h2>
        <p>Premium and boutique brands frequently advertise no by-products as a quality marker, leaning on the negative connotation of the word. The implication is that by-products are nutritionally inferior or even unsafe. Examined against the regulatory definition and nutritional science, the claim conflates a transparency issue with a quality issue and overstates both.</p>
        <h2 id="whatare">What By-Products Are</h2>
        <p>AAFCO defines poultry by-products as the non-rendered clean parts of slaughtered poultry such as heads, feet, and viscera (internal organs), free from fecal content and foreign matter. Meat by-products are defined analogously for mammals and include organs such as liver, kidney, spleen, and lungs. These are the parts humans in many Western markets do not typically eat, not waste — and in many cultures they are prized human foods. See <a href="/myths/fillers-myth">Pet Food Fillers Myth</a>.</p>
        <h2 id="organ">Organ Meats Are Valuable</h2>
        <p>Organ meats are among the most nutrient-dense foods available: liver is rich in vitamin A, B-vitamins, iron, and copper; heart is a concentrated source of taurine and protein; kidney supplies B-vitamins and minerals. A whole prey animal, the cat&apos;s ancestral diet, is largely organ and muscle. Including organ-based by-products is nutritionally sound and, for some nutrients like taurine, advantageous. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="excluded">What Is Excluded</h2>
        <p>The AAFCO by-product definitions specifically exclude the parts the myth invokes: hair, horn, hooves, teeth, and (for by-products) the definitions require freedom from fecal content and foreign matter. The lurid imagery of the by-products myth describes material the definition does not permit. The ingredient is regulated, not a catch-all for waste.</p>
        <h2 id="transparency">The Real Concern — Transparency</h2>
        <p>There is a legitimate point inside the myth, but it is about transparency, not quality. A species-generic term like poultry by-product meal does not tell the owner which species or which specific tissues are used, and the composition can vary between production runs. For owners managing a suspected food allergy or doing an elimination trial, that lack of specificity is a real problem. A species-named by-product (chicken by-product meal) is more transparent. The criticism that holds up is the disclosure gap, not the nutritional value. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="verdict">The Verdict</h2>
        <p>By-products are not waste or filler — they are largely nutritious organ meats, formally defined and recognized by AAFCO and the FDA as appropriate pet food ingredients. The valid concern is transparency (species-generic terms reveal less), not quality. A no by-products claim is a marketing position, not a nutritional upgrade. Evaluate a food on its overall formulation and manufacturer transparency, not on the presence or absence of by-products. See <a href="/guides/methodology">Scoring Methodology</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>Pet Food Labels — General</em>; <em>Animal Food Ingredients: Regulatory Framework</em>; FDA CVM Recalls &amp; Withdrawals database.</li>
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
