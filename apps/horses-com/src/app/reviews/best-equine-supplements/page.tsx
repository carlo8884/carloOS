import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Best Equine Supplements 2026 — Joint, Gastric, Hoof, Calmer, Electrolyte',
  description:
    'Buyer&apos;s guide to equine supplements across the major categories. Platinum Performance, Cosequin, SmartPak, KER, Equithrive, Standlee. NASC Quality Seal, FEI prohibited substances, and the evidence behind each category.',
  path: '/reviews/best-equine-supplements',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Best Equine Supplements 2026',
  description:
    'Category-by-category equine supplement buyer&apos;s guide — joint, gastric, hoof, calmer, electrolyte, weight gain. Brand comparisons with NASC and FEI footnotes.',
  url: 'https://horses.com/reviews/best-equine-supplements',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const cosequinSchema = buildProductSchema({ name: 'Cosequin ASU Plus', description: 'Avocado-soybean unsaponifiables plus glucosamine and chondroitin sulfate for equine joint support.', url: 'https://www.smartpakequine.com', imageUrl: '', ratingValue: 9.1, reviewCount: 1 })
const platinumSchema = buildProductSchema({ name: 'Platinum Performance Equine', description: 'Comprehensive wellness supplement with omega-3, antioxidants, and amino acids.', url: 'https://www.platinumperformance.com', imageUrl: '', ratingValue: 9.0, reviewCount: 1 })
const smartGutSchema = buildProductSchema({ name: 'SmartPak SmartGut Ultra', description: 'Pelleted gastric support supplement with calcium, magnesium, glutamine, and sea buckthorn.', url: 'https://www.smartpakequine.com', imageUrl: '', ratingValue: 8.6, reviewCount: 1 })
const kerEoSchema = buildProductSchema({ name: 'KER EO-3 Marine Omega-3', description: 'Marine-source DHA/EPA omega-3 supplement from Kentucky Equine Research.', url: 'https://ker.com', imageUrl: '', ratingValue: 8.9, reviewCount: 1 })
const equithriveSchema = buildProductSchema({ name: 'Equithrive Original Pellets', description: 'Resveratrol-based anti-inflammatory and joint supplement.', url: 'https://equithrive.com', imageUrl: '', ratingValue: 8.5, reviewCount: 1 })
const standleeSchema = buildProductSchema({ name: 'Standlee Premium Forage', description: 'Premium baled and pelleted alfalfa, timothy, and orchard grass forage products.', url: 'https://standleeforage.com', imageUrl: '', ratingValue: 8.7, reviewCount: 1 })
const adamsSchema = buildProductSchema({ name: 'Adams Plus Equine Electrolyte', description: 'Sodium-chloride-balanced electrolyte powder for performance and travel.', url: 'https://www.smartpakequine.com', imageUrl: '', ratingValue: 8.3, reviewCount: 1 })
const allSchemas = combineSchemas(articleSchema, cosequinSchema, platinumSchema, smartGutSchema, kerEoSchema, equithriveSchema, standleeSchema, adamsSchema)

const PICKS = [
  { label: 'Best Joint (Evidence)', emoji: '🏆', name: 'Cosequin ASU Plus', subtitle: 'ASU + glucosamine + chondroitin · NASC sealed · Equine-specific trials', href: '#cosequin-asu' },
  { label: 'Best Comprehensive Wellness', emoji: '◎', name: 'Platinum Performance Equine', subtitle: 'Omega-3, antioxidants, amino acids · Senior &amp; performance dosing', href: '#platinum' },
  { label: 'Best Gastric Support', emoji: '🐴', name: 'SmartPak SmartGut Ultra', subtitle: 'Calcium &amp; magnesium buffering · NASC sealed · SmartPak auto-ship', href: '#smartgut' },
  { label: 'Best Marine Omega-3', emoji: '🐟', name: 'KER EO-3', subtitle: 'Marine DHA/EPA · Strongest equine omega-3 evidence', href: '#ker-eo3' },
]

const CATEGORY_TABLE = [
  { category: 'Joint', topPick: 'Cosequin ASU Plus', evidence: 'Strong (ASU + glucosamine + chondroitin)', priceRange: '$50–110/mo' },
  { category: 'Gastric / Ulcer Prevention', topPick: 'SmartGut Ultra (adjunct)', evidence: 'Moderate (calcium/Mg buffer); pharmacologic for active disease', priceRange: '$35–80/mo' },
  { category: 'Hoof', topPick: 'Farrier&apos;s Formula Double Strength', evidence: 'Strong (biotin, methionine, zinc, copper)', priceRange: '$30–55/mo' },
  { category: 'Calming', topPick: 'SmartCalm Ultra / Mare Magic', evidence: 'Limited (magnesium, L-tryptophan, raspberry leaf)', priceRange: '$25–60/mo' },
  { category: 'Electrolyte', topPick: 'Perform &apos;N Win / Adams Plus', evidence: 'Strong (Na/Cl/K replacement)', priceRange: '$20–40/mo' },
  { category: 'Weight Gain', topPick: 'Cool Calories 100 / Empower Boost', evidence: 'Strong (stabilized rice bran, vegetable oil)', priceRange: '$25–55/mo' },
  { category: 'Marine Omega-3', topPick: 'KER EO-3', evidence: 'Strong (marine DHA/EPA)', priceRange: '$45–85/mo' },
  { category: 'General Wellness', topPick: 'Platinum Performance Equine', evidence: 'Moderate (broad nutrient profile)', priceRange: '$85–140/mo' },
]

const FAQS = [
  {
    question: 'What is the NASC Quality Seal and why does it matter?',
    answer:
      'The National Animal Supplement Council (NASC) is an industry self-regulatory body for animal supplements. The NASC Quality Seal indicates a company has passed a third-party facility audit, maintains adverse-event reporting, and complies with NASC labeling and ingredient standards. The seal does not certify clinical efficacy of any product — but it does provide a meaningful baseline of manufacturing quality control that the equine supplement industry would otherwise lack. Look for the seal on the front of the package; it is a reasonable minimum standard for any supplement you feed.',
    answerText:
      'The NASC Quality Seal indicates the manufacturer has passed third-party facility audits and complies with NASC standards. It does not certify clinical efficacy but is a meaningful baseline of manufacturing quality control. Look for it on the package.',
  },
  {
    question: 'Are CBD supplements legal and safe for horses?',
    answer:
      'CBD products for horses are unregulated in the US, with widely variable purity, potency, and label accuracy. CBD is currently on the FEI prohibited-substances list (banned in competition) and on the USEF prohibited list — competition horses must not receive CBD. Beyond competition compliance, the equine evidence base for CBD is small; published pharmacokinetic studies show low oral bioavailability and significant inter-individual variability (Ryan D et al., Frontiers in Veterinary Science, 2021). Most CBD products marketed for horses make claims that exceed the published evidence.',
    answerText:
      'CBD is on the FEI and USEF prohibited-substances lists and is banned in competition. The equine evidence base is small with low oral bioavailability shown in pharmacokinetic studies. Most marketing claims exceed the published evidence.',
  },
  {
    question: 'What supplements are banned in FEI and USEF competition?',
    answer:
      'The FEI and USEF maintain prohibited-substances lists that include many common supplement ingredients — devil&apos;s claw, valerian, passionflower, hemp/CBD, kava, certain herbal calmers, and several stimulants. Caffeine (in some "energy" supplements), theobromine (cocoa-containing products), and morphine (from inadvertent contamination with poppy in forage) have all caused positive tests. Riders competing under FEI or USEF rules must check every supplement against the current prohibited list and observe published withdrawal times. The FEI Clean Sport portal and USEF Drugs and Medications resources are the authoritative references.',
    answerText:
      'The FEI and USEF prohibit devil&apos;s claw, valerian, passionflower, CBD, kava, several herbal calmers, and stimulants like caffeine. Check the FEI Clean Sport portal and USEF Drugs and Medications resource before competing.',
  },
  {
    question: 'How long should a supplement be tried before judging it ineffective?',
    answer:
      'It depends on the category. Electrolytes work immediately. Omega-3 supplementation produces measurable membrane fatty-acid changes within 4-6 weeks. Joint supplements typically need 60-90 days at recommended doses before a clinical effect can be assessed. Hoof supplements (which work by influencing hoof wall growth) require 6-12 months because hoof grows at about 6-10 mm per month and the supplemented horn must reach the ground before being evaluated. Gastric supplements offer a clearer feedback signal — if used as adjunctive support after gastroscopic diagnosis and pharmacologic treatment, the rescoping outcome is the answer.',
    answerText:
      'Electrolytes work immediately. Omega-3 takes 4-6 weeks. Joint supplements need 60-90 days. Hoof supplements need 6-12 months because hoof grows 6-10 mm/month. Gastric supplements are best judged against gastroscopy.',
  },
  {
    question: 'Are supplements a substitute for hay, grain, or veterinary care?',
    answer:
      'No. A horse with active disease — clinical lameness, ulcers, weight loss, behavior change — needs a diagnosis from a veterinarian, not a supplement decision. A horse on inadequate forage cannot be supplemented into health. Supplements work at the margin of an already-correct fundamentals stack: forage-first nutrition, appropriate concentrate matched to workload, fresh water, dental care, parasite control, and routine veterinary care. The "supplement-instead-of-vet" pattern is the single most common money-wasting trap in horse ownership.',
    answerText:
      'No. Supplements work at the margin of an already-correct fundamentals stack: forage, water, dental, parasite, and veterinary care. Active disease needs a vet, not a supplement.',
  },
]

export default function BestEquineSupplementsPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer&apos;s Guide · May 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Equine Supplements 2026
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          A category-by-category buyer&apos;s guide to the equine supplement market — joint, gastric, hoof, calmer, electrolyte, weight gain, marine omega-3, and comprehensive wellness. Brands and products evaluated against the NASC Quality Seal, FEI/USEF prohibited-substance rules, and the peer-reviewed evidence base behind each category.
        </p>
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Equine Supplements</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Supplements Are Not a Substitute for Veterinary Care</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                Active clinical disease — lameness, weight loss, gastric ulcers, behavior changes — calls for a veterinary diagnosis, not a supplement decision. Supplements operate at the margin of an already-correct fundamentals stack (forage, water, dental, parasite, vet care), not as a replacement for it. The AAEP and NASC both repeatedly emphasize that supplements are not therapeutic agents, and any product making disease-treatment claims is either making them unlawfully or is actually a drug.
              </p>
            </div>

            <ScoreMethodology />

            <h2>How to Read the Equine Supplement Aisle</h2>
            <p>Three filters separate useful equine supplements from money-wasting marketing:</p>

            <h3>1. The NASC Quality Seal</h3>
            <p>The National Animal Supplement Council Quality Seal is the closest thing the equine supplement industry has to a baseline manufacturing standard. NASC member companies pass third-party facility audits, maintain adverse-event reporting, comply with NASC labeling rules, and submit to periodic compliance verification. The seal does not certify that a product works — but it does indicate that a product is made in a controlled facility, labeled accurately, and tracked for safety signals. Buying supplements without the NASC seal puts you at the mercy of an industry with no other quality floor; buying supplements with the seal is the minimum bar.</p>

            <h3>2. The FEI / USEF prohibited-substances rules</h3>
            <p>If you compete under FEI (international) or USEF (US national) rules, the prohibited-substance list directly determines which supplements you can and cannot use. Devil&apos;s claw is the textbook example — it&apos;s an effective NSAID-class herbal anti-inflammatory that is prohibited in FEI/USEF competition and produces positive drug tests at very low doses. Other commonly-included supplement ingredients that are FEI-prohibited or controlled: valerian, passionflower, kava, hemp/CBD, capsaicin, certain calming herbs. Riders competing must reference the current FEI Clean Sport prohibited-substances database and the USEF Drugs and Medications resource — manufacturer claims of "competition-safe" are not authoritative.</p>

            <h3>3. The evidence pyramid</h3>
            <p>The strongest evidence comes from peer-reviewed equine clinical trials. Weaker evidence comes from in-vitro mechanism studies, small-mammal extrapolations, and human trials. The weakest "evidence" — abundant in supplement marketing — is testimonial, before-and-after photo claims, and "studies" funded and reported only by the manufacturer. Categories like joint (glucosamine/chondroitin/ASU), marine omega-3, and electrolyte have substantial peer-reviewed equine literature. Categories like calming, hindgut buffering, and most herbal/botanical ingredients have far thinner evidence. The price tier of a supplement is not a useful proxy for the evidence behind it.</p>

            <h2>Category Map</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                    <th className="p-3 font-bold text-brand-dark">Category</th>
                    <th className="p-3 font-bold text-brand-dark">Top Pick</th>
                    <th className="p-3 font-bold text-brand-dark">Evidence Strength</th>
                    <th className="p-3 font-bold text-brand-dark">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {CATEGORY_TABLE.map(row => (
                    <tr key={row.category} className="border-b border-brand-border">
                      <td className="p-3 font-bold text-brand-dark">{row.category}</td>
                      <td className="p-3 text-brand-text-mid">{row.topPick}</td>
                      <td className="p-3 text-brand-text-mid">{row.evidence}</td>
                      <td className="p-3 text-brand-text-mid">{row.priceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Joint Supplements</h2>
            <p>The most-marketed and most-studied equine supplement category. The strongest evidence is for combinations including avocado/soybean unsaponifiables (ASU) with glucosamine and chondroitin sulfate. See our <Link href="/supplements/joint-supplements" className="text-brand-primary">joint supplements evidence-ladder guide</Link> for the full ingredient-level analysis.</p>

            <ReviewCard
              id="cosequin-asu"
              badge="Best Joint Evidence"
              badgeEmoji="🏆"
              name="Cosequin ASU Plus (Nutramax)"
              subtitle="Avocado-soybean unsaponifiables + glucosamine + chondroitin · NASC sealed"
              score={9.1}
              winner
              description={<>
                <p>Cosequin from Nutramax is the most peer-reviewed equine joint supplement brand on the market. The ASU formulations specifically have the strongest published equine clinical-trial evidence of any oral joint supplement, with chondroprotective effects demonstrated in induced-osteoarthritis models (Kawcak CE et al., <em>American Journal of Veterinary Research</em>, 2007). Nutramax is NASC-sealed and runs its own pharmaceutical-grade manufacturing.</p>
                <p>The trade-off: Cosequin ASU runs at the higher end of the joint-supplement price range, and the loading-dose-then-maintenance protocol increases first-month cost. For horses with diagnosed osteoarthritis or significant work-related joint loading, the evidence justifies the price.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'ASU 30g/lb + glucosamine HCl + chondroitin sulfate', highlight: 'good' },
                { label: 'NASC Quality Seal', value: 'Yes', highlight: 'good' },
                { label: 'Manufacturer', value: 'Nutramax (US pharma-grade)', highlight: 'good' },
                { label: 'FEI/USEF compliance', value: 'No prohibited ingredients', highlight: 'good' },
                { label: 'Loading dose', value: '4-6 weeks recommended' },
              ]}
              pros={['Strongest peer-reviewed equine evidence in the category', 'NASC Quality Seal', 'Established pharmaceutical-grade manufacturer', 'Multiple formulations for life stage']}
              cons={['Higher price tier', 'Loading dose adds first-month cost', 'Pellet palatability variable across horses']}
              price="$80–110/mo"
              ctaText="Shop at SmartPak →"
              ctaHref="/go/smartpak/cosequin-asu-plus?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="cosequin-asu-plus"
            />

            <h2>Comprehensive Wellness</h2>

            <ReviewCard
              id="platinum"
              badge="Best Comprehensive"
              badgeEmoji="◎"
              name="Platinum Performance Equine"
              subtitle="Omega-3 + antioxidants + amino acids · Veterinary distribution model"
              score={9.0}
              description={<>
                <p>Platinum Performance Equine is the broad-spectrum wellness formulation that the brand built its reputation on. The product combines marine-source omega-3 (DHA + EPA), antioxidant vitamins (E, C), amino acids (lysine, methionine), trace minerals, and joint precursors in a single daily ration top-dress. Platinum&apos;s veterinary-distribution model and its long-standing visibility in upper-level performance barns have established the brand as a default for horses where one comprehensive product is preferred to a stack of single-purpose supplements.</p>
                <p>The trade-off: Platinum Performance is among the most expensive equine supplements per month, and many of the same nutrient targets can be met more cheaply by combining a marine omega-3, a vitamin E supplement, and a balancer feed. For owners who value the simplicity of one product and the brand&apos;s veterinary positioning, the premium is defensible.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'Marine omega-3, vitamin E, amino acids, trace minerals', highlight: 'good' },
                { label: 'NASC Quality Seal', value: 'Yes', highlight: 'good' },
                { label: 'Distribution', value: 'Veterinary and direct-to-consumer' },
                { label: 'FEI/USEF compliance', value: 'No prohibited ingredients', highlight: 'good' },
                { label: 'Specialty formulations', value: 'CJ (joint), Senior, Performance' },
              ]}
              pros={['Single-product approach simplifies daily ration', 'NASC sealed', 'Strong brand and veterinary presence', 'Marine-source omega-3 (not flax)']}
              cons={['Premium price tier', 'Same nutrient targets cheaper as separate products', 'Auto-ship lock-in pricing structure']}
              price="$95–140/mo"
              ctaText="Shop at Platinum →"
              ctaHref="/go/amazon-brand/platinum+performance+equine+wellness?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="platinum-performance-equine"
            />

            <h2>Gastric Support</h2>
            <p>An important distinction: gastric supplements provide adjunctive support — they are not pharmacologic treatments for diagnosed Equine Gastric Ulcer Syndrome (EGUS). Active disease requires gastroscopy and prescription omeprazole (see our <Link href="/health/equine-ulcers" className="text-brand-primary">EGUS reference</Link>). Gastric supplements are appropriate as adjuncts during treatment, during high-risk periods (shipping, competition), or as part of long-term management in a multi-pronged ulcer-prevention program alongside forage management.</p>

            <ReviewCard
              id="smartgut"
              badge="Best Gastric Adjunct"
              badgeEmoji="🐴"
              name="SmartPak SmartGut Ultra"
              subtitle="Calcium &amp; magnesium buffering · Glutamine · Sea buckthorn · NASC sealed"
              score={8.6}
              description={<>
                <p>SmartGut Ultra is SmartPak&apos;s most comprehensive gastric-support pellet, combining calcium and magnesium (buffering), L-glutamine (mucosal substrate), sea buckthorn berry (modest equine evidence — Huff NK et al., <em>Equine Veterinary Journal</em>, 2012), and additional mucosal-support ingredients. The product is most usefully positioned as an adjunct during high-risk periods (shipping, show seasons, training intensification) or as part of a long-term prevention stack alongside forage-first management.</p>
                <p>The honest framing: SmartGut Ultra is not a substitute for GastroGard in an actively ulcerated horse. For a horse with diagnosed ulcers, omeprazole is the standard. For a horse at risk who is already on omeprazole or who is in a maintenance phase, SmartGut is a reasonable adjunct.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'Calcium, magnesium, glutamine, sea buckthorn, pectin-lecithin', highlight: 'good' },
                { label: 'NASC Quality Seal', value: 'Yes', highlight: 'good' },
                { label: 'Format', value: 'Pelleted daily top-dress' },
                { label: 'FEI/USEF compliance', value: 'No prohibited ingredients', highlight: 'good' },
                { label: 'SmartPak SmartPaks', value: 'Available pre-portioned daily', highlight: 'good' },
              ]}
              pros={['NASC sealed', 'Comprehensive gastric-adjunct formulation', 'SmartPak SmartPak pre-portioning available', 'Reasonable price relative to category']}
              cons={['Not a substitute for omeprazole in active disease', 'Some ingredients have modest evidence at best', 'Palatability variable in picky eaters']}
              price="$60–80/mo"
              ctaText="Shop at SmartPak →"
              ctaHref="/go/smartpak/smartgut-ultra?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="smartgut-ultra"
            />

            <h2>Marine Omega-3</h2>
            <p>The omega-3 category requires a specific source distinction. Marine-source omega-3 (DHA + EPA, from fish oil or algal sources) has documented anti-inflammatory effects in horses (Hess TM et al., <em>Journal of Equine Veterinary Science</em>, 2013). Plant-source omega-3 (ALA from flax or chia) requires conversion in the horse&apos;s body to DHA/EPA — and that conversion is inefficient. If you are paying for omega-3, the source must be marine-derived to deliver the actual anti-inflammatory effect.</p>

            <ReviewCard
              id="ker-eo3"
              badge="Best Marine Omega-3"
              badgeEmoji="🐟"
              name="KER EO-3 (Kentucky Equine Research)"
              subtitle="Marine DHA + EPA · Equine-research-backed formulation · Liquid"
              score={8.9}
              description={<>
                <p>EO-3 from Kentucky Equine Research is the marine omega-3 supplement most often cited in the equine performance and research literature. KER has published extensively on omega-3 metabolism in horses, and the EO-3 product is the formulation used in many of their internal trials. The product is a liquid (top-dressed on the feed) with documented DHA and EPA content per serving.</p>
                <p>The trade-off: liquid omega-3 products can be messy in winter (viscosity increases at low temperatures) and have a shorter shelf life once opened than pelleted products. Buy in the smallest unit you can use within the recommended use-by window.</p>
              </>}
              specs={[
                { label: 'Source', value: 'Marine fish oil (DHA + EPA)', highlight: 'good' },
                { label: 'Format', value: 'Liquid, top-dressed' },
                { label: 'Equine research backing', value: 'KER published equine trials', highlight: 'good' },
                { label: 'FEI/USEF compliance', value: 'No prohibited ingredients', highlight: 'good' },
                { label: 'Antioxidant protection', value: 'Tocopherol-stabilized' },
              ]}
              pros={['Marine source — actual DHA/EPA, not ALA', 'Research-grade formulation', 'KER&apos;s published equine trials use this product', 'Strong palatability in most horses']}
              cons={['Liquid format messier than pellets in cold weather', 'Shelf life once opened is shorter than pellets', 'Premium pricing in the category']}
              price="$55–85/mo"
              ctaText="Shop at KER →"
              ctaHref="/go/amazon-brand/kentucky+equine+research+EO-3+omega+3?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="ker-eo-3"
            />

            <h2>Resveratrol &amp; Anti-Inflammatory</h2>

            <ReviewCard
              id="equithrive"
              badge="Best Resveratrol"
              badgeEmoji="⭐"
              name="Equithrive Original Pellets"
              subtitle="Trans-resveratrol · Anti-inflammatory and joint support"
              score={8.5}
              description={<>
                <p>Equithrive&apos;s Original Pellets are built around trans-resveratrol, a polyphenol antioxidant that has shown anti-inflammatory effects in equine studies (Watts AE et al., <em>Equine Veterinary Journal</em>, multiple). The brand was founded by a veterinarian at the University of Kentucky and has been one of the more research-active US equine supplement companies. Equithrive products are NASC sealed.</p>
                <p>Resveratrol is more usefully framed as a complement to (rather than substitute for) traditional joint-supplement ingredients. Horses with mild joint inflammation or post-injection support needs are the most common use case.</p>
              </>}
              specs={[
                { label: 'Active ingredient', value: 'Trans-resveratrol', highlight: 'good' },
                { label: 'NASC Quality Seal', value: 'Yes', highlight: 'good' },
                { label: 'Format', value: 'Pelleted' },
                { label: 'FEI/USEF compliance', value: 'No prohibited ingredients', highlight: 'good' },
                { label: 'Research base', value: 'University of Kentucky equine trials' },
              ]}
              pros={['NASC sealed', 'Veterinarian-founded brand', 'Trans-resveratrol with published equine trial data', 'Reasonable monthly cost']}
              cons={['Complement to other joint support, not a standalone', 'Evidence base smaller than ASU / glucosamine', 'Lower brand visibility than mainstream alternatives']}
              price="$45–65/mo"
              ctaText="Shop at Equithrive →"
              ctaHref="/go/amazon-brand/equithrive+original+pellets+resveratrol?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="equithrive-original-pellets"
            />

            <h2>Forage and Forage-Replacement</h2>
            <p>The single most powerful equine "supplement" is appropriate forage. Standlee Premium Forage is the leading US producer of premium pelleted and baled forage products. Standlee alfalfa, timothy, and orchard grass products serve as forage-extension (slow-feeders, soaked products for senior horses with dental compromise), pre-exercise gastric buffer (an alfalfa flake 30 minutes before work reduces ESGD risk), and travel/competition forage where consistent hay supply matters.</p>

            <ReviewCard
              id="standlee"
              badge="Best Forage Products"
              badgeEmoji="🌾"
              name="Standlee Premium Forage"
              subtitle="Premium alfalfa, timothy, orchard grass · Pelleted, cubed, and baled"
              score={8.7}
              description={<>
                <p>Standlee Premium Forage is the dominant US brand for shelf-stable, consistent-quality forage products — pelleted alfalfa, alfalfa-orchard blends, timothy pellets and cubes, beet pulp, and various forage-extender products. The product line is most useful for horses needing soaked forage (senior horses with dental compromise, post-colic recovery, travel where local hay quality is unpredictable) and for owners using alfalfa as a pre-exercise gastric buffer.</p>
                <p>Standlee is not a "supplement" in the traditional sense, but it earns mention here because the forage stack is the foundation of all equine nutrition decisions, and standardized commercial forage products solve real ration consistency problems that no pelleted supplement can address.</p>
              </>}
              specs={[
                { label: 'Product range', value: 'Pellets, cubes, baled, chopped, beet pulp' },
                { label: 'Forage species', value: 'Alfalfa, timothy, orchard grass, oat hay' },
                { label: 'Quality control', value: 'Lab-tested NSC and nutrient profile', highlight: 'good' },
                { label: 'Use cases', value: 'Senior soaked, gastric buffer, travel, forage-extension' },
                { label: 'Shelf stability', value: 'Long shelf life sealed', highlight: 'good' },
              ]}
              pros={['Consistent nutritional profile', 'Wide product range', 'Senior-horse soaking options', 'National distribution']}
              cons={['Cost-per-pound higher than local baled hay', 'Not a "supplement" in the marketing sense']}
              price="Varies by product"
              ctaText="Shop at Standlee →"
              ctaHref="/go/amazon-brand/standlee+premium+forage+pellets?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="standlee-premium-forage"
            />

            <h2>Electrolytes</h2>

            <ReviewCard
              id="adams"
              badge="Best Electrolyte"
              badgeEmoji="💧"
              name="Adams Plus Equine Electrolyte"
              subtitle="Sodium chloride balanced with potassium · For performance and travel"
              score={8.3}
              description={<>
                <p>Electrolyte replacement is the most evidence-grounded supplement category — the science is straightforward sodium, chloride, and potassium replacement to match sweat losses during work, travel, or heat stress. Adams Plus Equine Electrolyte is a reliable, NASC-sealed, sodium-chloride-balanced product with potassium adjustment that suits routine performance and travel use.</p>
                <p>The category is largely commoditized — most established brands deliver the same basic ingredients at similar prices. The product to avoid is the high-sugar "energy drink" style equine electrolyte, which delivers more dextrose than electrolyte and can produce paradoxical gastric injury when given as paste on dry mucosa.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'Sodium chloride, potassium chloride, dextrose carrier' },
                { label: 'NASC Quality Seal', value: 'Yes', highlight: 'good' },
                { label: 'Format', value: 'Powder, top-dressed or mixed in water' },
                { label: 'FEI/USEF compliance', value: 'No prohibited ingredients', highlight: 'good' },
                { label: 'Use case', value: 'Performance, travel, hot weather' },
              ]}
              pros={['NASC sealed', 'Reliable category-standard formulation', 'Reasonable price', 'Wide availability']}
              cons={['Commoditized category — many similar alternatives', 'Powder format requires consistent water access to be effective']}
              price="$20–35/mo"
              ctaText="Shop at SmartPak →"
              ctaHref="/go/smartpak/adams-plus-electrolyte?s=reviews-best-equine-supplements"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="adams-plus-electrolyte"
            />

            <h2>What to Avoid</h2>
            <p>The equine supplement market includes legitimate, evidence-backed products and a wide range of marketing-driven products that are best avoided. Common pitfalls:</p>

            <h3>Unregulated CBD products</h3>
            <p>CBD products marketed for horses are unregulated in the US and frequently mis-labeled for potency. CBD is on the FEI and USEF prohibited-substances lists — competition horses must not receive it. Published pharmacokinetic studies show low oral bioavailability in horses (Ryan D et al., <em>Frontiers in Veterinary Science</em>, 2021). Most CBD products marketed for horses make claims that exceed the published evidence base.</p>

            <h3>"Magic" oils and proprietary blends</h3>
            <p>Products built around proprietary herbal or essential oil blends often hide the active dose behind trade-secret framings. When you cannot verify that an ingredient is present at a clinically-relevant dose, you cannot evaluate the claim. NASC-sealed products with disclosed active-ingredient quantities allow apples-to-apples comparison; "proprietary blend" products do not.</p>

            <h3>FEI/USEF prohibited ingredients in competition horses</h3>
            <p>Devil&apos;s claw, valerian, passionflower, kava, and several other herbal ingredients are effective enough at their stated purpose to produce positive drug tests — and prohibited under competition rules. Riders competing under FEI or USEF rules must reference the current prohibited-substances database, not just the manufacturer&apos;s "competition-safe" marketing. Penalties for a positive test include disqualification, points, and prize money forfeiture.</p>

            <h3>"All-in-one" megaproducts that duplicate the existing ration</h3>
            <p>Many comprehensive wellness supplements duplicate nutrients already provided by a properly-formulated commercial concentrate or ration balancer. Stacking a balancer pellet plus a daily multivitamin plus a "comprehensive wellness" supplement can produce nutrient excesses (selenium, vitamin A, vitamin D) that are themselves harmful. A ration analysis from an independent equine nutritionist is the way to avoid this; otherwise the rule of thumb is "one comprehensive product, not three."</p>

            <h3>"Treats ulcers" / "cures arthritis" / "prevents colic" claims</h3>
            <p>Supplements are not drugs, and claims that a supplement "treats," "cures," or "prevents" any specific disease are at minimum FDA-noncompliant and at worst actively misleading. Trust evidence-grounded support claims; distrust disease-treatment claims on supplement packaging.</p>

            <h2>How to Buy</h2>
            <p>A practical buying framework:</p>
            <ol>
              <li><strong>Diagnose first.</strong> A horse with active disease needs a veterinary diagnosis, not a supplement decision.</li>
              <li><strong>Forage and balanced ration first.</strong> Get the foundation right before adding supplements.</li>
              <li><strong>Pick one category at a time.</strong> Joint, gastric, hoof, omega-3. Don&apos;t buy ten supplements.</li>
              <li><strong>NASC seal as the minimum.</strong> Skip products without it.</li>
              <li><strong>Verify FEI/USEF compliance if you compete.</strong> Check the current prohibited-substances list.</li>
              <li><strong>Give it the right amount of time.</strong> Joint supplements 60–90 days, hoof supplements 6–12 months, electrolytes immediate.</li>
              <li><strong>Track outcomes.</strong> Note baseline, retest at the end of the trial, decide whether to continue.</li>
            </ol>

            <h2 id="faq">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS} />

            <h2>Affiliate Disclosure</h2>
            <p>Horses.com participates in affiliate programs with SmartPak Equine, Platinum Performance, Kentucky Equine Research, Equithrive, Standlee, Dover Saddlery, Riding Warehouse, and Amazon Associates. We may earn commission on purchases made through links on this page. Affiliate participation does not influence the assessments or rankings — the same products would receive the same evaluations on the same data regardless of program participation. See our editorial standards page for the full policy.</p>

            <h2>References</h2>
            <ol className="text-sm text-brand-text-mid">
              <li>National Animal Supplement Council (NASC). &ldquo;NASC Quality Seal — Standards and Audit Requirements.&rdquo; nasc.cc.</li>
              <li>Fédération Équestre Internationale (FEI). &ldquo;Equine Prohibited Substances List&rdquo; and FEI Clean Sport portal. inside.fei.org/clean-sport.</li>
              <li>United States Equestrian Federation (USEF). &ldquo;Drugs and Medications Resource&rdquo; and Equine Drugs and Medications Program. usef.org.</li>
              <li>American Association of Equine Practitioners. &ldquo;Nutritional Supplements for Horses — Client Education.&rdquo; aaep.org.</li>
              <li>Kawcak CE, Frisbie DD, McIlwraith CW, et al. &ldquo;Evaluation of Avocado-Soybean Unsaponifiable Extracts for Treatment of Horses with Experimentally Induced Osteoarthritis.&rdquo; <em>American Journal of Veterinary Research</em>, 2007; 68(6):598–604.</li>
              <li>Laverty S, Sandy JD, Celeste C, Vachon P, Marier JF, Plaas AHK. &ldquo;Synovial Fluid Levels and Serum Pharmacokinetics in a Large Animal Model Following Treatment with Oral Glucosamine at Clinically Relevant Doses.&rdquo; <em>American Journal of Veterinary Research</em>, 2005.</li>
              <li>Hess TM, Rexford JK, Hansen DK, Harris M, Schauermann N, Ross T, Hudson L. &ldquo;Effects of Two Different Dietary Sources of Omega-3 Fatty Acids on Inflammation and Muscle Activity in Horses.&rdquo; <em>Journal of Equine Veterinary Science</em>, 2013.</li>
              <li>Huff NK, Auer AD, Garza F, et al. &ldquo;Effect of Sea Buckthorn Berries and Pulp in a Liquid Emulsion on Gastric Ulcer Scores and Gastric Juice pH in Horses.&rdquo; <em>Equine Veterinary Journal</em>, 2012.</li>
              <li>Watts AE, Dabareiner R, Marsh C, Carter GK, Cummings KJ. &ldquo;A Randomized, Controlled Trial of the Effects of Resveratrol Administration in Performance Horses with Lameness Localized to the Distal Tarsal Joints.&rdquo; <em>Journal of the American Veterinary Medical Association</em>, 2016; 249(6):650–659.</li>
              <li>Ryan D, McKemie DS, Kass PH, Puschner B, Knych HK. &ldquo;Pharmacokinetics and Effects on Arachidonic Acid Metabolism of Cannabidiol in Horses.&rdquo; <em>Frontiers in Veterinary Science</em>, 2021.</li>
              <li>National Research Council. <em>Nutrient Requirements of Horses</em>, 6th revised edition. National Academies Press, 2007.</li>
              <li>McIlwraith CW, Frisbie DD, Kawcak CE. &ldquo;The Horse as a Model of Naturally Occurring Osteoarthritis.&rdquo; <em>Bone &amp; Joint Research</em>, 2012; 1(11):297–309.</li>
            </ol>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[
                ['Performance osteoarthritis', 'Cosequin ASU Plus'],
                ['Senior comprehensive', 'Platinum Performance'],
                ['Gastric adjunct', 'SmartGut Ultra'],
                ['Omega-3 anti-inflammatory', 'KER EO-3'],
                ['Resveratrol joint support', 'Equithrive Original'],
                ['Performance hydration', 'Adams Plus Electrolyte'],
                ['Senior soaked forage', 'Standlee Alfalfa Pellets'],
              ].map(([u, r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{u}</div>
                  <div className="text-xs font-bold text-brand-dark">{r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Joint Supplements — Evidence Ladder', href: '/supplements/joint-supplements' },
                { label: 'Equine Gastric Ulcers (EGUS)', href: '/health/equine-ulcers' },
                { label: 'Equine Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
                { label: 'Equine Dental Care', href: '/guides/equine-dental-care' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Practical Horse Reference"
              subtitle="Evidence-led equine buyer guides."
              source="review-best-supplements"
            />
          </aside>
        </div>
      </div>
    </>
  )
}
