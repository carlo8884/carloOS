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
  title: 'Taurine and Essential Amino Acids in Pet Food | PetFood.com',
  description:
    'Why taurine is essential for cats, the amino-acid profile that defines protein quality, taurine and DCM in dogs, and the AAFCO amino-acid requirements.',
  path: '/nutrition/taurine-and-amino-acids',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Taurine and Essential Amino Acids in Pet Food | PetFood.com',
  description:
    'Why taurine is essential for cats, the amino-acid profile that defines protein quality, taurine and DCM in dogs, and the AAFCO amino-acid requirements.',
  url: 'https://petfood.com/nutrition/taurine-and-amino-acids',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function TaurineAndAminoAcidsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Taurine and Essential Amino Acids',
        subtitle:
          'Amino acids are the reason crude protein on a label tells you so little. The body does not need protein per se; it needs the specific amino acids that protein delivers, in the right proportions. Taurine sits at the center of this story — essential for cats, implicated in canine heart disease, and a clean illustration of why protein source matters more than protein quantity.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'Taurine and Essential Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Amino Acids and Protein Quality', href: '#quality' },
              { label: 'Essential vs Non-Essential', href: '#essential' },
              { label: 'Taurine in Cats', href: '#cats' },
              { label: 'Taurine and Canine DCM', href: '#dcm' },
              { label: 'Other Key Amino Acids', href: '#others' },
              { label: 'AAFCO Requirements', href: '#aafco' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
              { label: 'Dog vs Cat Nutrition', href: '/species/dog-vs-cat-nutrition-overview' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="taurine-and-amino-acids"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Protein is a delivery vehicle for amino acids. The biological value of a protein source depends on whether it supplies all the essential amino acids in proportions matching the animal&apos;s needs. A protein missing or short in one essential amino acid limits the use of all the others — the limiting-amino-acid principle. This is why protein quality, not just quantity, determines how well a diet supports the animal.</p>
        <h2 id="quality">Amino Acids and Protein Quality</h2>
        <p>Of the twenty-odd amino acids, a subset are essential — the animal cannot synthesize them quickly enough and must obtain them from diet. Animal proteins generally provide a complete, well-balanced essential amino-acid profile; many plant proteins are short in one or more (for example, methionine or lysine), which is why plant-heavy diets require complementary protein blending or synthetic amino-acid supplementation to be complete. Crude protein on the guaranteed analysis captures none of this. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="essential">Essential vs Non-Essential</h2>
        <p>Dogs require ten essential amino acids; cats require eleven, the additional one being taurine. Non-essential amino acids can be synthesized internally from other building blocks, so they need not be supplied directly. The line between essential and conditionally essential can shift with life stage and health status — arginine, for example, is critically essential in cats because a single arginine-deficient meal can precipitate dangerous hyperammonemia.</p>
        <h2 id="cats">Taurine in Cats</h2>
        <p>Cats cannot synthesize adequate taurine because they have low activity of the enzymes that make it and because they obligately use taurine (not glycine) to conjugate bile acids, continuously depleting their supply. Dietary taurine deficiency in cats causes feline central retinal degeneration (leading to blindness), dilated cardiomyopathy, and reproductive failure. The discovery of taurine-deficiency DCM in cats in the late 1980s led to mandatory taurine supplementation of cat foods and is one of the great successes of veterinary nutrition. Taurine is found in animal tissue and is destroyed or lost by some processing, so it is supplemented to guarantee adequacy.</p>
        <h2 id="dcm">Taurine and Canine DCM</h2>
        <p>Dogs synthesize taurine from cysteine and methionine and do not have a dietary taurine requirement under the AAFCO profile. However, certain breeds (Cocker Spaniels, Golden Retrievers, Newfoundlands, and others) appear prone to taurine-deficiency dilated cardiomyopathy, and taurine status became central to the FDA CVM investigation into diet-associated DCM in dogs eating grain-free, legume-heavy diets. The mechanism is not fully resolved — not all affected dogs are taurine-deficient — but taurine measurement and supplementation are part of the clinical work-up. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="others">Other Key Amino Acids</h2>
        <p>Methionine and cysteine (the sulfur amino acids) support taurine synthesis in dogs, coat keratin, and urinary acidification. Lysine is often the first limiting amino acid in cereal-based diets. Arginine is critical for the urea cycle in both species and acutely critical in cats. Tryptophan is a precursor to serotonin and, in cats, to niacin. The interplay of these amino acids is why formulators evaluate the full amino-acid profile, not just total protein.</p>
        <h2 id="aafco">AAFCO Amino-Acid Requirements</h2>
        <p>The AAFCO Dog and Cat Food Nutrient Profiles list minimum dry-matter requirements for each essential amino acid, with the cat profile including a taurine minimum (higher for canned than dry food, reflecting differing bioavailability and processing losses). Meeting the crude-protein minimum does not guarantee meeting every amino-acid minimum, which is why a complete diet is formulated to the amino-acid profile, not merely to a protein percentage. See <a href="/guides/aafco-completeness-explained">AAFCO Completeness Explained</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>U.S. Food and Drug Administration, Center for Veterinary Medicine. <em>FDA Provides Update on Investigation into Potential Connection Between Certain Diets and Cases of Canine Heart Disease</em> (27 June 2019).</li>
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
