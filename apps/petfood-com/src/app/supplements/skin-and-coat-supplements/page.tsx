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
  title: 'Skin and Coat Supplements for Pets — Evidence | PetFood.com',
  description:
    'What helps a dull coat — omega fatty acids, zinc, biotin, and protein — when the diet is the real fix, and why a poor coat can signal underlying disease.',
  path: '/supplements/skin-and-coat-supplements',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Skin and Coat Supplements for Pets — Evidence | PetFood.com',
  description:
    'What helps a dull coat — omega fatty acids, zinc, biotin, and protein — when the diet is the real fix, and why a poor coat can signal underlying disease.',
  url: 'https://petfood.com/supplements/skin-and-coat-supplements',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function SkinAndCoatSupplementsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Skin and Coat Supplements',
        subtitle:
          'A dull, flaky, or shedding coat is one of the most common reasons owners reach for a supplement, and some skin-and-coat ingredients genuinely help. But a poor coat is often a sign of an inadequate diet or an underlying medical problem, and the most reliable fix is usually a better diet rather than a topper. This page covers the ingredients that work and the reasons a coat goes wrong.',
        category: 'Supplement Reference',
        publishedAt: 'May 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Supplements' },
        { name: 'Skin and Coat Supplements', href: '/supplements/skin-and-coat-supplements' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Drives Coat Quality', href: '#drivers' },
              { label: 'Essential Fatty Acids', href: '#efa' },
              { label: 'Zinc and Biotin', href: '#zincbiotin' },
              { label: 'Protein and Amino Acids', href: '#protein' },
              { label: 'When the Coat Signals Disease', href: '#disease' },
              { label: 'Diet First', href: '#dietfirst' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
              { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="skin-and-coat-supplements"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>The skin and coat have high nutrient demands — the skin is the body&apos;s largest organ and hair is largely protein — so coat quality is a sensitive readout of nutritional status and overall health. Several supplement ingredients support skin and coat, but the most effective intervention is usually ensuring the diet is complete, adequate in essential fatty acids and high-quality protein, and that no underlying disease is undermining the coat. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="drivers">What Drives Coat Quality</h2>
        <p>A healthy coat depends on adequate energy, high-quality protein (hair is keratin, a protein), essential fatty acids, zinc, and several vitamins. Deficiency or imbalance in any of these shows up as a dull, dry, flaky, or thin coat. Because a complete diet supplies all of these, a coat problem in an animal on a good diet often points to a medical cause rather than a nutrient gap.</p>
        <h2 id="efa">Essential Fatty Acids</h2>
        <p>Omega-6 (linoleic acid) and omega-3 (EPA, DHA) fatty acids are the best-supported nutritional lever for skin and coat. Omega-6 supports the skin barrier and coat shine, while omega-3s reduce skin inflammation in allergic and inflammatory conditions. Fish oil is the most reliable omega-3 source. Many coat improvements attributed to a supplement are really the effect of added essential fatty acids. See <a href="/supplements/fish-oil-omega-3">Fish Oil and Omega-3 Supplements</a>.</p>
        <h2 id="zincbiotin">Zinc and Biotin</h2>
        <p>Zinc is essential for skin and coat, and zinc-responsive dermatosis occurs both from dietary deficiency and from a genetic absorption defect in certain northern breeds — these cases respond to zinc supplementation under veterinary direction. Biotin (vitamin B7) supports keratin formation; true biotin deficiency is uncommon on a complete diet, so biotin supplements help mainly in the rare deficiency state rather than as a general coat booster. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="protein">Protein and Amino Acids</h2>
        <p>Because hair is protein and the coat is continually renewed, adequate high-quality dietary protein and the sulfur amino acids (methionine, cystine) that build keratin are essential for a healthy coat. A diet inadequate in protein or amino-acid quality produces a poor coat. Ensuring the diet supplies enough high-biological-value protein addresses this directly. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="disease">When the Coat Signals Disease</h2>
        <p>A coat that deteriorates despite a good diet is a flag for underlying disease: hypothyroidism, Cushing&apos;s disease, parasites, allergies, and other conditions all affect the coat. Reaching for a supplement can delay diagnosis of a treatable disease. A persistently poor coat, hair loss, or skin lesions warrant veterinary evaluation rather than a longer trial of supplements.</p>
        <h2 id="dietfirst">Diet First</h2>
        <p>For most coat complaints, the right sequence is: confirm the diet is complete and balanced and adequate in essential fatty acids and protein; rule out parasites and underlying disease with the veterinarian; and only then consider a targeted supplement such as fish oil. A supplement layered onto an inadequate diet or an undiagnosed disease addresses the symptom, not the cause. See <a href="/supplements/multivitamins-for-pets">Multivitamins for Pets</a>.</p>

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
