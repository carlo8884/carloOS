import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'
import { ArticleMasthead } from '../../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Skin and Coat Supplements for Pets — Evidence | PetFood.com',
  description:
    'What helps a dull coat — omega fatty acids, zinc, biotin, and protein — when the diet is the real fix, and why a poor coat can signal underlying disease.',
  path: '/supplements/skin-and-coat-supplements',
  type: 'article',
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
const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Skin and Coat Supplements for Pets — Evidence | PetFood.com',
  description:
    'What helps a dull coat — omega fatty acids, zinc, biotin, and protein — when the diet is the real fix, and why a poor coat can signal underlying disease.',
  url: 'https://petfood.com/supplements/skin-and-coat-supplements',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Skin and Coat Supplements for Pets — Evidence | PetFood.com',
  description:
    'What helps a dull coat — omega fatty acids, zinc, biotin, and protein — when the diet is the real fix, and why a poor coat can signal underlying disease.',
  url: 'https://petfood.com/supplements/skin-and-coat-supplements',
  authorName: 'PetFood.com Editorial',
  lastReviewed: '2026-06-01',
  medicalAudience: 'Caregiver',
})

const schema = combineSchemas(articleSchema, medicalSchema)


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
        { name: 'Supplements', href: '/supplements' },
        { name: 'Skin and Coat Supplements', href: '/supplements/skin-and-coat-supplements' },
      ]}
      relatedLinks={[
        { title: 'Supplements Hub', href: '/supplements' },
        { title: 'Fish Oil and Omega-3', href: '/supplements/fish-oil-omega-3' },
        { title: 'Probiotics for Pets', href: '/supplements/probiotics-for-pets' },
        { title: 'Glucosamine and Joint Support', href: '/supplements/glucosamine-and-joint-support' },
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
              { label: 'Where to Buy', href: '#buy' },
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
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:supplements-hero"
          alt="Skin-and-coat omega supplement for pets"
          eyebrow="Supplement Reference"
          priority
        />
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

        <h2 id="buy">Where to Buy</h2>
        <p>The best-supported skin-and-coat supplement is a marine omega-3, because essential fatty acids are the strongest nutritional lever for coat quality — many improvements credited to a coat supplement are really the effect of added EPA and DHA. Confirm the diet is complete and rule out underlying disease first; a supplement layered onto an inadequate diet or an undiagnosed problem treats the symptom, not the cause. These are over-the-counter picks, not a hands-on trial.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="omega-skin-coat"
          badge="Strongest Lever"
          badgeEmoji="🐟"
          name="Marine Omega-3 for Skin & Coat"
          subtitle="EPA/DHA fish oil — the best-supported coat supplement"
          score={9.0}
          winner
          description={
            <p>Omega-6 supports the skin barrier and shine while omega-3s (EPA, DHA) reduce skin inflammation, and fish oil is the most reliable omega-3 source. This is the highest-evidence skin-and-coat intervention. Buy on combined EPA/DHA per serving with antioxidant protection. See our <a href="/supplements/fish-oil-omega-3">fish oil and omega-3 reference</a> for the full buying detail.</p>
          }
          specs={[
            { label: 'Active', value: 'EPA + DHA', highlight: 'good' },
            { label: 'Evidence', value: 'Strongest for coat', highlight: 'good' },
            { label: 'Source', value: 'Marine fish / algal oil' },
          ]}
          pros={['Best-supported coat lever', 'Also benefits joints and skin inflammation', 'Algal option for fish-intolerant pets']}
          cons={['Adds calories', 'Oxidizes if stored poorly']}
          price="$15–35"
          ctaText="Find Omega-3 for Coat"
          ctaHref="/go/chewy-brand/dog+omega+3+skin+coat+fish+oil?s=supplements-skin-and-coat-supplements"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="dog+omega+3+skin+coat+fish+oil"
        />
        <ReviewCard
          id="skin-coat-multi"
          badge="Combination Chews"
          badgeEmoji="✨"
          name="Skin & Coat Support Chews"
          subtitle="EFA-forward chews with zinc and biotin"
          score={7.5}
          description={
            <p>Combination skin-and-coat chews bundle essential fatty acids with zinc and biotin. Zinc genuinely helps zinc-responsive dermatosis (under veterinary direction) and biotin matters in the rare true deficiency, but for most pets the active lever is still the fatty acids. Treat these as convenience formats and prefer NASC-sealed or third-party-tested products.</p>
          }
          specs={[
            { label: 'Contains', value: 'EFAs + zinc + biotin' },
            { label: 'Format', value: 'Soft chew' },
            { label: 'Quality filter', value: 'NASC / third-party', highlight: 'good' },
          ]}
          pros={['Convenient all-in-one format', 'Includes zinc and biotin', 'Palatable chew']}
          cons={['Fatty acids do most of the work', 'Biotin rarely the missing piece on a complete diet']}
          price="$18–35"
          ctaText="Compare Skin & Coat Chews"
          ctaHref="/go/amazon-brand/dog+skin+coat+supplement+omega+zinc?s=supplements-skin-and-coat-supplements"
          ctaAffiliateProgram="amazon-brand"
          ctaAffiliateProduct="dog+skin+coat+supplement+omega+zinc"
        />

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
