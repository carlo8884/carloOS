import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
  FAQAccordion,
  CalloutBox,
  EmailCapture,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import {
  LifeStages,
  getLifeStageBySlug,
  getRelatedLifeStages,
  type LifeStage,
} from '../../../data/life-stages'

// ─── Static generation ──────────────────────────────────────────────────────

export function generateStaticParams() {
  return LifeStages.map((s) => ({ slug: s.slug }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── Metadata ──────────────────────────────────────────────────────────────

function buildPerStageMetadata(stage: LifeStage): { title: string; description: string } {
  // Per-stage titles (≤70 chars) and descriptions (≤160 chars), written
  // explicitly. Falls back to a templated form if a slug is not in the map.
  const PER: Record<string, { title: string; description: string }> = {
    'puppy-growth': {
      title: 'Puppy Food — AAFCO Growth Profile Explained | PetFood.com',
      description:
        'What the AAFCO dog growth profile requires, what to read on the label, brand examples, and common feeding pitfalls during canine growth.',
    },
    'kitten-growth': {
      title: 'Kitten Food — AAFCO Growth Profile Explained | PetFood.com',
      description:
        'The AAFCO cat growth profile: taurine and arachidonic-acid minima, label reading for kitten food, brand examples, and feeding pitfalls.',
    },
    'adult-dog': {
      title: 'Adult Dog Food — AAFCO Maintenance Profile | PetFood.com',
      description:
        'AAFCO adult-maintenance dog food profile: required minima, label reading, brand examples, and the common overfeeding/transition pitfalls.',
    },
    'adult-cat': {
      title: 'Adult Cat Food — AAFCO Maintenance Profile | PetFood.com',
      description:
        'AAFCO adult-maintenance cat food profile: taurine and feline-essential nutrient context, label reading, brand examples, and pitfalls.',
    },
    'senior-dog': {
      title: 'Senior Dog Food — Why AAFCO Has No Senior Profile | PetFood.com',
      description:
        'AAFCO does not define a senior dog profile. What that means on the label, when therapeutic diets apply, and how to read senior-marketed bags.',
    },
    'senior-cat': {
      title: 'Senior Cat Food — Why AAFCO Has No Senior Profile | PetFood.com',
      description:
        'AAFCO does not define a senior cat profile. Reading senior-marketed cat food labels, protein and phosphorus considerations, and pitfalls.',
    },
    'large-breed-puppy': {
      title: 'Large-Breed Puppy Food — AAFCO Calcium Ceiling | PetFood.com',
      description:
        'The AAFCO large-breed growth qualifier: stricter calcium ceiling, why the orthopedic literature requires it, label reading, brand examples.',
    },
  }

  const entry = PER[stage.slug]
  if (entry) return entry

  const titleRaw = `${stage.name} — Pet Food Life-Stage Reference | PetFood.com`
  const descRaw = `${stage.name}: AAFCO statement, nutrient profile, label reading, brand examples, and common feeding pitfalls.`
  return {
    title: titleRaw.length <= 70 ? titleRaw : titleRaw.slice(0, 67) + '...',
    description: descRaw.length <= 160 ? descRaw : descRaw.slice(0, 157) + '...',
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const stage = getLifeStageBySlug(slug)
  if (!stage) {
    return buildMetadata({
      siteId: 'petfood-com',
      title: 'Life Stage Not Found',
      description: 'The requested life-stage reference page is not in the PetFood.com catalog.',
      path: `/life-stage/${slug}`,
    })
  }

  const { title, description } = buildPerStageMetadata(stage)

  return buildMetadata({
    siteId: 'petfood-com',
    title,
    description,
    path: `/life-stage/${stage.slug}`,
    type: 'article',
  })
}

// ─── TL;DR helper ──────────────────────────────────────────────────────────

function buildTldr(stage: LifeStage): string {
  if (stage.formalAafcoProfile) {
    return `${stage.name} is a formal AAFCO life-stage category. A complete-and-balanced bag for this stage carries the corresponding ${stage.category.toLowerCase()} statement on the label, and the manufacturer is bound to the relevant AAFCO ${stage.species} Food Nutrient Profile minima and maxima from the 2025 Official Publication, Chapter 6. This page summarises what those minima are, what to look for on the bag, and the common owner-side pitfalls.`
  }
  return `${stage.name} is a marketing classification, not a formal AAFCO life-stage profile. AAFCO Chapter 6 (2025) recognises only growth-and-reproduction and adult maintenance for ${stage.species.toLowerCase()}s; a bag marketed as ${stage.name.toLowerCase()} carries the underlying adult-maintenance (or all-life-stages) AAFCO statement plus manufacturer-defined formulation adjustments. This page explains what that means for label reading and what to discuss with the treating veterinarian.`
}

// ─── Per-stage FAQ ──────────────────────────────────────────────────────────

function buildStageFaq(stage: LifeStage): FAQItem[] {
  const SHARED: FAQItem = {
    question: 'Where do the AAFCO nutrient profiles come from?',
    answer: `The Association of American Feed Control Officials publishes the Official Publication annually. Life-stage nutrient profiles for dogs and cats are defined in Chapter 6 (Model Pet Food and Specialty Pet Food Regulations) and the associated Dog Food Nutrient Profiles and Cat Food Nutrient Profiles. The 2025 edition is current. AAFCO profiles set minima (and in some cases maxima) for dry-matter inclusion of protein, fat, individual amino acids, fatty acids, vitamins, and minerals; they are the regulatory baseline for any pet food sold in the United States that carries a complete-and-balanced AAFCO statement.`,
    answerText: `AAFCO Official Publication 2025, Chapter 6. Profiles set dry-matter minima (and some maxima) for nutrients and are the regulatory baseline for US complete-and-balanced pet food.`,
  }

  const PER: Record<string, FAQItem[]> = {
    'puppy-growth': [
      {
        question: 'Can I feed my puppy an "all life stages" food?',
        answer: `Yes — an "all life stages" food must meet the more restrictive growth-and-reproduction profile, so it is by definition adequate for a puppy. Confirm the AAFCO statement on the label explicitly names "all life stages" or "growth and reproduction." For puppies of large breeds (>70 lb projected adult weight), the additional "including growth of large size dogs" qualifier is required — see the large-breed-puppy page.`,
        answerText:
          '"All life stages" meets the growth profile minima and is adequate for puppies. For large-breed puppies, the "including growth of large size dogs" qualifier is also required.',
      },
      {
        question: 'When do I transition my puppy to adult food?',
        answer: `Generally around the end of skeletal growth — roughly 10-12 months for small and medium breeds, 12-24 months for large and giant breeds. The treating veterinarian sets the transition timing for individual dogs based on breed, body condition, and growth-plate closure. Transition over 7-10 days, mixing the new food into the old in increasing proportions.`,
        answerText:
          'Roughly 10-12 months for small/medium breeds; 12-24 months for large/giant breeds. The treating vet sets timing. Transition over 7-10 days.',
      },
      {
        question: 'How much should I feed?',
        answer: `Start with the manufacturer\'s per-age-and-weight feeding guide as a starting point, not a fixed amount. Body condition scoring (BCS) every 2-4 weeks is the practical check. A growing puppy should have visible waist and palpable but not visible ribs; substantial deviations in either direction indicate over- or under-feeding and warrant amount adjustment.`,
        answerText:
          'Start with the manufacturer per-age-and-weight chart, then adjust to maintain a normal body condition score (BCS) — palpable but not visible ribs, visible waist.',
      },
      SHARED,
    ],
    'kitten-growth': [
      {
        question: 'Can a kitten eat adult cat food?',
        answer: `Not as a sole diet for long. Adult cat food meets adult-maintenance protein and amino-acid minima but does not meet the higher minima of the growth profile. Short-term (a meal or two) is not a deficiency event; long-term feeding will produce growth deficits in protein-, amino-acid-, and energy-sensitive parameters.`,
        answerText:
          'Not long-term. Adult cat food meets maintenance minima, not the higher growth-profile minima for protein and several essential amino acids.',
      },
      {
        question: 'Why is the taurine minimum higher in wet kitten food than in dry?',
        answer: `Processing losses. The thermal and chemical processing of wet/canned cat food results in higher taurine attrition than the processing of dry/extruded food, so AAFCO sets the wet-food minimum (0.20% DM) higher than the dry-food minimum (0.10% DM) to compensate.`,
        answerText:
          'Processing losses. Wet/canned food loses more taurine in manufacturing than dry/extruded, so the wet-food minimum (0.20% DM) is higher than dry (0.10% DM).',
      },
      {
        question: 'Are vegan or plant-based kitten diets safe?',
        answer: `Only with full synthetic supplementation. Plant-only diets lack pre-formed taurine, arachidonic acid, and pre-formed vitamin A — all feline-essential. Commercial AAFCO-substantiated vegan kitten diets exist and include the necessary synthetics; the evidence base is still thinner than for animal-protein diets, and the treating veterinarian should be looped in.`,
        answerText:
          'Only with full synthetic supplementation and an AAFCO-substantiated formula. Plant-only diets lack feline-essential taurine, arachidonic acid, and pre-formed vitamin A.',
      },
      SHARED,
    ],
    'adult-dog': [
      {
        question: 'Is "adult maintenance" food enough for an active or working dog?',
        answer: `It can be, depending on activity level and the formula\'s energy density. For substantially higher-activity dogs (working, sporting, sledding) the appropriate intervention is usually a higher-energy-density maintenance formula or, where applicable, a performance-marketed maintenance formula, with feeding amount adjusted to body condition score. The treating veterinarian can advise.`,
        answerText:
          'It can be, with appropriate energy-density selection and feeding-amount adjustment to BCS. Performance-marketed maintenance formulas exist for higher-activity dogs.',
      },
      {
        question: 'Do I need a "weight management" formula for my overweight dog?',
        answer: `Not necessarily, but it can help. Weight-management formulas typically have lower energy density and higher fibre, which makes portion-controlled feeding easier without leaving the dog hungry. The same outcome can be achieved by reducing the feeding amount of a standard maintenance formula, but the practical compliance is usually better with a weight-management formula.`,
        answerText:
          'Not strictly required — a reduced amount of standard maintenance food has the same energy outcome. Weight-management formulas are typically lower energy density / higher fibre to aid compliance.',
      },
      {
        question: 'Is "grain-free" better for adult dogs?',
        answer: `Not on the AAFCO profile basis. Grain-free formulations meet the same adult-maintenance profile as grain-inclusive formulas. The FDA CVM 2018-ongoing dilated cardiomyopathy (DCM) investigation has raised questions about pulse-heavy grain-free formulas; see the /ingredients/grain-free-dcm-risk reference page on this site for the full record.`,
        answerText:
          'No. Both meet the same AAFCO profile. The FDA CVM DCM investigation is the relevant ongoing context; see /ingredients/grain-free-dcm-risk.',
      },
      SHARED,
    ],
    'adult-cat': [
      {
        question: 'Wet food vs dry food for adult cats — which is better?',
        answer: `Both can meet the AAFCO adult-maintenance profile. The most-cited reason to prefer wet (or wet + dry) is hydration, especially for cats prone to urinary disease. Dry food is more energy-dense per cup and is easier to portion-control by amount; wet contributes substantially more dietary water. Many veterinarians recommend a combination.`,
        answerText:
          'Both meet the AAFCO profile. Wet contributes more dietary water (relevant for urinary-disease risk); dry is more energy-dense per cup. Many vets recommend a combination.',
      },
      {
        question: 'Do indoor cats need a special "indoor" formula?',
        answer: `Not strictly. The relevant nutritional difference between an indoor-marketed and a standard adult-maintenance formula is typically energy density (lower in indoor formulas, reflecting indoor cats\' lower activity). The same effect can be achieved by feeding a smaller amount of a standard formula. The label utility of "indoor" is real but it is a portion-control aid, not a separate AAFCO category.`,
        answerText:
          'Not strictly. "Indoor" formulas are typically lower energy density; the same effect can be achieved by reducing the amount of a standard maintenance formula.',
      },
      {
        question: 'Can adult cats eat dog food in a pinch?',
        answer: `Not as anything other than a one-off meal. Dog food does not meet feline-essential nutrient requirements (taurine, arachidonic acid, pre-formed vitamin A) and prolonged feeding produces deficiency disease, including the well-documented taurine-deficiency dilated cardiomyopathy described in the cat literature.`,
        answerText:
          'One-off only. Dog food lacks feline-essential taurine, arachidonic acid, and pre-formed vitamin A; chronic feeding causes deficiency disease.',
      },
      SHARED,
    ],
    'senior-dog': [
      {
        question: 'When is my dog a "senior"?',
        answer: `Manufacturer-defined, not AAFCO-defined. Most senior formulas are marketed from 7 years old; for large and giant breeds the marketing threshold is sometimes earlier (5-6 years). There is no AAFCO senior life-stage. The functionally relevant question is whether the dog\'s activity, body condition, or diagnosed conditions warrant a diet change — that is a veterinary conversation.`,
        answerText:
          'Manufacturer-defined: typically 7+ years; sometimes 5-6+ for large/giant breeds. AAFCO does not define a senior life-stage; the question is veterinary, not regulatory.',
      },
      {
        question: 'Should I reduce my senior dog\'s protein intake?',
        answer: `Not as a general rule. Current veterinary nutrition consensus does not support generalised protein restriction in healthy older dogs. Protein restriction is appropriate for diagnosed chronic kidney disease, where a veterinary therapeutic diet is the intervention. For healthy seniors, maintained-to-moderately-higher protein intake helps preserve lean body mass.`,
        answerText:
          'No, generally. Protein restriction is for diagnosed kidney disease (veterinary therapeutic diet) — not for healthy aging. Maintained protein helps preserve muscle.',
      },
      {
        question: 'What about glucosamine and joint-support additions?',
        answer: `Common in senior formulas but the clinical evidence for kibble-included glucosamine at typical inclusion levels is mixed; the dosing reaching the dog at standard feeding amounts is generally below the levels studied in therapeutic supplementation. For a dog with diagnosed osteoarthritis, the treating veterinarian sets the management plan, which may include separate joint-support supplementation, weight management, and/or pain medication.`,
        answerText:
          'Evidence for kibble-included glucosamine is mixed; typical inclusion levels are below studied therapeutic dosing. Diagnosed OA is a veterinary management conversation.',
      },
      SHARED,
    ],
    'senior-cat': [
      {
        question: 'When is my cat a "senior"?',
        answer: `Manufacturer-defined, commonly 7-11+ for "mature" formulas and 11-12+ for "senior" or "aging" formulas. AAFCO does not define a senior life-stage for cats. A baseline geriatric workup (renal panel, thyroid panel, urinalysis) at 7-10 years and then more frequently is standard veterinary practice and informs diet appropriately.`,
        answerText:
          'Manufacturer-defined (commonly 7-11+ "mature," 11-12+ "senior"). AAFCO does not define a senior cat life-stage. A geriatric workup at 7-10+ informs diet.',
      },
      {
        question: 'Should I restrict protein in my senior cat?',
        answer: `Not as a general rule for healthy aging cats. Older cats are at risk of sarcopenia (loss of lean body mass), and the veterinary nutrition literature broadly supports maintained-to-moderately-higher protein intake. Phosphorus restriction is appropriate for diagnosed chronic kidney disease, where a veterinary therapeutic diet is the intervention.`,
        answerText:
          'Not for healthy aging cats — older cats are at sarcopenia risk and protein helps preserve muscle. Phosphorus restriction is for diagnosed kidney disease (therapeutic diet).',
      },
      {
        question: 'My senior cat has kidney disease — what diet?',
        answer: `Therapeutic kidney diets (Hill\'s k/d, Royal Canin Renal, Purina NF and others) are formulated for chronic kidney disease and require veterinary diagnosis and prescription. The diet is part of a broader management plan that includes hydration support, blood pressure monitoring, and staging according to International Renal Interest Society (IRIS) criteria. Do not self-substitute over-the-counter senior formulas for a prescribed therapeutic kidney diet.`,
        answerText:
          'Veterinary therapeutic kidney diet, prescribed and monitored. Part of an IRIS-staged management plan; do not self-substitute OTC senior formulas.',
      },
      SHARED,
    ],
    'large-breed-puppy': [
      {
        question: 'How big does my puppy have to be to need large-breed puppy food?',
        answer: `AAFCO\'s threshold is 70 lb expected adult weight. Practically, that includes most breeds in the AKC working, herding, sporting (larger end), and giant categories: Labrador Retrievers, Golden Retrievers, German Shepherds, Rottweilers, Great Danes, Bernese Mountain Dogs, Newfoundlands, and similar. If the projected adult weight is uncertain, ask the breeder, the rescue, or the treating veterinarian; when in doubt, the large-breed formulation is the safer choice.`,
        answerText:
          'AAFCO threshold: 70 lb expected adult weight. Covers most working, herding, larger sporting, and giant breeds. When projected weight is uncertain, large-breed is the safer choice.',
      },
      {
        question: 'What happens if I feed regular puppy food to a large-breed puppy?',
        answer: `Increased risk of developmental skeletal disease. The standard growth profile permits calcium up to a level that the orthopedic literature associates with hypertrophic osteodystrophy, osteochondrosis, and contributions to hip and elbow dysplasia in growing large-breed dogs. The AAFCO large-breed growth qualifier was created to address this — the calcium ceiling is the load-bearing difference.`,
        answerText:
          'Increased risk of developmental skeletal disease (HOD, OCD, contributions to hip/elbow dysplasia). The AAFCO large-breed calcium ceiling is the regulatory response.',
      },
      {
        question: 'Should I add a calcium supplement?',
        answer: `No. Calcium oversupplementation is one of the documented orthopedic risk factors for large-breed puppies; the AAFCO ceiling exists specifically to prevent it. A complete-and-balanced large-breed puppy formula already supplies adequate calcium at the appropriate ratio; adding more works against the very risk the formula is designed to mitigate.`,
        answerText:
          'No. Calcium oversupplementation is a documented large-breed orthopedic risk factor. Complete-and-balanced large-breed formulas already supply adequate calcium.',
      },
      SHARED,
    ],
  }

  return PER[stage.slug] ?? [SHARED]
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default async function LifeStagePage({ params }: PageProps) {
  const { slug } = await params
  const stage = getLifeStageBySlug(slug)
  if (!stage) notFound()

  const related = getRelatedLifeStages(stage.slug)
  const faqItems = buildStageFaq(stage)

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Life Stages', href: '/life-stage' },
    { name: stage.name, href: `/life-stage/${stage.slug}` },
  ]

  const articleSchema = buildArticleSchema({
    siteId: 'petfood-com',
    title: `${stage.name}: Pet Food Life-Stage Reference`,
    description: `Independent reference for ${stage.name}: AAFCO statement, nutrient-profile summary, label-reading guidance, brand examples, and common feeding pitfalls.`,
    url: `https://petfood.com/life-stage/${stage.slug}`,
    imageUrl: '',
    authorName: 'PetFood.com Editorial',
    publishedAt: '2026-05-29T00:00:00Z',
    modifiedAt: '2026-05-29T00:00:00Z',
  })

  const faqSchema = buildFAQSchema({
    questions: faqItems.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  })

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: breadcrumbItems.map((b) => ({
      name: b.name,
      url: `https://petfood.com${b.href}`,
    })),
  })

  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: `${stage.name}: Life-Stage Reference`,
        subtitle: `${stage.species} · ${stage.category} · ${stage.formalAafcoProfile ? 'Formal AAFCO profile' : 'Marketing classification — no formal AAFCO profile'}`,
        category: 'Life-Stage Reference',
        publishedAt: 'May 2026',
        readTime: '6 min',
      }}
      breadcrumbs={breadcrumbItems}
      schema={articleSchema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'TL;DR', href: '#tldr' },
              { label: 'At a Glance', href: '#at-a-glance' },
              { label: 'What AAFCO Requires', href: '#aafco' },
              { label: 'What to Look For on the Label', href: '#label' },
              { label: 'Brand Examples', href: '#brands' },
              { label: 'Common Pitfalls', href: '#pitfalls' },
              { label: 'Working With a Vet', href: '#vet' },
              ...(related.length > 0 ? [{ label: 'Related Life Stages', href: '#related' }] : []),
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Cornerstone References"
            links={[
              { label: 'All Life Stages', href: '/life-stage' },
              ...stage.cornerstoneLinks,
              { label: 'Methodology', href: '/guides/methodology' },
            ]}
          />
          <CrossPortfolioCard
            currentSite="petfood-com"
            contentType="nutrition"
            variant="sidebar"
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="life-stage-slug"
          />
        </>
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-05-29T00:00:00Z" updatedAt="2026-05-29T00:00:00Z" reviewedBy="Editorial team" />
        <p id="tldr">
          <strong>TL;DR.</strong> {buildTldr(stage)}
        </p>

        <h2 id="at-a-glance">At a Glance</h2>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13.5px',
            border: '1px solid var(--brand-border)',
            borderRadius: '8px',
            overflow: 'hidden',
            margin: '16px 0 16px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <Row label="Species" value={stage.species} />
              <Row label="Life-stage category" value={stage.category} />
              <Row
                label="Formal AAFCO profile"
                value={stage.formalAafcoProfile ? 'Yes (AAFCO 2025, Ch.6)' : 'No (marketing classification)'}
              />
              {stage.keyNutrients.map((n) => (
                <Row key={n.label} label={n.label} value={n.value} />
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', margin: '0 0 24px' }}>
          Nutrient minima/maxima are from the AAFCO 2025 Official Publication, Chapter 6. Where a
          stage is a marketing classification rather than a formal AAFCO profile, the table reports
          the underlying adult-maintenance baseline plus the typical manufacturer adjustments — the
          regulatory anchor remains the underlying AAFCO statement.
        </p>

        <h2 id="aafco">What AAFCO Requires</h2>
        <p>
          <strong>AAFCO statement (template).</strong> {stage.aafcoStatement}
        </p>
        <p>{stage.nutrientProfileSummary}</p>
        {!stage.formalAafcoProfile && (
          <CalloutBox variant="warning" title='"Senior" is not an AAFCO life stage'>
            <p style={{ margin: 0 }}>
              AAFCO defines two life-stage nutrient profiles for {stage.species.toLowerCase()}s:
              growth-and-reproduction, and adult maintenance. Senior, mature, and aging are
              manufacturer categories that sit on top of the adult-maintenance profile. The
              regulatory claim on the bag is still the underlying AAFCO statement — read that, not
              the marketing front.
            </p>
          </CalloutBox>
        )}

        <h2 id="label">What to Look For on the Label</h2>
        <p>
          A practical reading order, in PetFood.com&apos;s transparency rubric:
        </p>
        <ol>
          {stage.scoringConsiderations.map((c, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {c}
            </li>
          ))}
        </ol>
        <p>
          For the full explanation of AAFCO substantiation tiers (formulated-to-meet versus
          animal-feeding-tests) and what the difference implies for owner-facing claims, see{' '}
          <Link href="/guides/aafco-completeness-explained">/guides/aafco-completeness-explained</Link>.
          For the broader label decoder — product-name rules, guaranteed analysis on a dry-matter
          basis, ingredient panel, AAFCO statement, feeding directions — see{' '}
          <Link href="/guides/reading-pet-food-labels">/guides/reading-pet-food-labels</Link>.
        </p>

        <h2 id="brands">Brand Examples</h2>
        <p>
          Brand examples below are real product lines that publicly label against the{' '}
          {stage.name.toLowerCase()} category. PetFood.com does not declare a brand "best" — the
          notes describe what each brand discloses against the AAFCO statement and against the
          WSAVA Global Nutrition Committee guidelines for owner-facing manufacturer questions
          (board-certified veterinary nutritionists on staff, owned-and-operated manufacturing,
          published nutrient analyses beyond label minima, feeding-trial substantiation where
          available). Per-SKU AAFCO statements vary within a brand portfolio and must be verified
          on the specific product label.
        </p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '10px',
            margin: '12px 0 24px',
          }}
        >
          {stage.brandExamples.map((b) => (
            <div
              key={b.brand + b.line}
              style={{
                display: 'block',
                padding: '12px 14px',
                border: '1px solid var(--brand-border)',
                borderRadius: '6px',
                background: 'var(--brand-white)',
                color: 'var(--brand-text-dark)',
                lineHeight: 1.5,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  fontWeight: 700,
                  marginBottom: '2px',
                }}
              >
                {b.brand}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)', marginBottom: '6px' }}>
                {b.line}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--brand-text-mid)' }}>{b.note}</div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
                <a
                  href={`/go/chewy-brand/${encodeURIComponent(b.brand)}?s=life-stage-${slug}`}
                  rel="sponsored noopener"
                  style={{ fontSize: '12px', padding: '4px 10px', background: 'var(--brand-primary, #d2691e)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 600 }}
                >
                  Search on Chewy →
                </a>
                <a
                  href={`/go/amazon-brand/${encodeURIComponent(b.brand)}?s=life-stage-${slug}`}
                  rel="sponsored noopener"
                  style={{ fontSize: '12px', padding: '4px 10px', background: 'var(--brand-dark, #232f3e)', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 600 }}
                >
                  Search on Amazon →
                </a>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', margin: '0 0 24px' }}>
          The three brand examples above are common reference points in the WSAVA Global Nutrition
          Committee&apos;s manufacturer-selection framework; they are not the only manufacturers that
          meet the criteria. Brand inclusion in this catalog is descriptive of label disclosure,
          not a ranking of formulation quality. PetFood.com earns an affiliate commission when you
          purchase through these links — at no extra cost to you; commission does not influence
          editorial inclusion.
        </p>

        <h2 id="pitfalls">Common Pitfalls</h2>
        <ul>
          {stage.commonPitfalls.map((p, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>
              {p}
            </li>
          ))}
        </ul>

        <h2 id="vet">Working With a Vet</h2>
        <p>
          PetFood.com is reference material. The information here is intended to help an owner read
          a label and ask a manufacturer the right follow-up questions — it is not a substitute for
          individualised veterinary nutrition advice. For pets with diagnosed conditions
          (developmental orthopedic disease in large-breed puppies, chronic kidney disease in
          senior cats, diabetes, pancreatitis, food-responsive enteropathy, allergies), the diet
          conversation belongs in the exam room. The treating veterinarian can refer to a
          board-certified veterinary nutritionist (a diplomate of the American College of
          Veterinary Internal Medicine — Nutrition, or the European College of Veterinary and
          Comparative Nutrition) for complex cases.
        </p>
        <p>
          Questions worth asking the treating veterinarian for any {stage.name.toLowerCase()}{' '}
          {stage.species.toLowerCase()}: (1) is the current diet AAFCO-substantiated for this life
          stage; (2) for any therapeutic diet under consideration, what is the diagnostic basis;
          (3) what is the appropriate body-condition-score target; and (4) what is the appropriate
          re-check cadence (typically every 4-8 weeks for puppies, kittens, and seniors, with
          longer intervals for stable healthy adults).
        </p>

        {related.length > 0 && (
          <>
            <h2 id="related">Related Life Stages</h2>
            <p>Other entries in the life-stage catalog that share regulatory or nutritional context:</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '10px',
                margin: '12px 0 24px',
              }}
            >
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/life-stage/${r.slug}`}
                  style={{
                    display: 'block',
                    padding: '10px 14px',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '6px',
                    background: 'var(--brand-white)',
                    color: 'var(--brand-text-dark)',
                    textDecoration: 'none',
                    lineHeight: 1.4,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '14px',
                      fontWeight: 700,
                      marginBottom: '2px',
                    }}
                  >
                    {r.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--brand-text-mid)' }}>
                    {r.species} · {r.category}
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={faqItems} includeSchema={false} />

        <ArticleSourcesList
              sources={[
                {
                  label: 'AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)',
                  url: 'https://www.aafco.org/resources/publications/',
                  publisher: 'Association of American Feed Control Officials, 2025',
                },
                {
                  label: 'Nutrient Requirements of Dogs and Cats',
                  url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
                  publisher: 'National Research Council, National Academies Press, 2006',
                },
                {
                  label: 'WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods',
                  url: 'https://wsava.org/committees/global-nutrition-committee/',
                  publisher: 'World Small Animal Veterinary Association Global Nutrition Committee',
                },
                {
                  label: 'AAHA/ACVIM Consensus Guidelines — applicable condition-specific nutrition and management',
                  url: 'https://www.aaha.org/veterinary-resources/guidelines/',
                  publisher: 'American Animal Hospital Association / American College of Veterinary Internal Medicine',
                },
              ]}
            />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualised veterinary advice.
          Diet selection for pets with diagnosed conditions should be discussed with the treating
          veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}

// ─── Row helper ────────────────────────────────────────────────────────────

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr style={{ borderTop: '1px solid var(--brand-border)' }}>
      <th
        scope="row"
        style={{
          textAlign: 'left',
          padding: '10px 14px',
          background: 'var(--brand-surface)',
          fontWeight: 700,
          width: '38%',
          color: 'var(--brand-text-dark)',
          verticalAlign: 'top',
        }}
      >
        {label}
      </th>
      <td style={{ padding: '10px 14px', color: 'var(--brand-text-mid)' }}>{value}</td>
    </tr>
  )
}
