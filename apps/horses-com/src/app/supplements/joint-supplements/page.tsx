import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, StockImage, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Joint Supplements — Evidence Ladder for Horse Owners',
  description:
    'Glucosamine, chondroitin, MSM, HA, ASU, omega-3, devil&apos;s claw (USEF/FEI banned). Joint supplements ranked by the evidence in the equine literature.',
  path: '/supplements/joint-supplements',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Equine Joint Supplements — Evidence Ladder',
  description:
    'Reference guide grading equine joint supplement ingredients by the peer-reviewed evidence base.',
  url: 'https://horses.com/supplements/joint-supplements',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const cosequinSchema = buildProductSchema({ name: 'Cosequin ASU Plus', description: 'Glucosamine, chondroitin, and ASU supplement for horses from Nutramax.', url: 'https://www.smartpakequine.com', imageUrl: '', ratingValue: 8.9, reviewCount: 1 })
const platinumSchema = buildProductSchema({ name: 'Platinum Performance CJ', description: 'Comprehensive equine joint and connective tissue supplement.', url: 'https://www.platinumperformance.com', imageUrl: '', ratingValue: 9.0, reviewCount: 1 })
const smartflexSchema = buildProductSchema({ name: 'SmartPak SmartFlex Senior', description: 'Glucosamine, chondroitin, MSM, and hyaluronic acid for senior horses.', url: 'https://www.smartpakequine.com', imageUrl: '', ratingValue: 8.5, reviewCount: 1 })
const allSchemas = combineSchemas(articleSchema, cosequinSchema, platinumSchema, smartflexSchema)

const PICKS = [
  { label: 'Best Evidence (ASU)', emoji: '🏆', name: 'Cosequin ASU Plus', subtitle: 'ASU + glucosamine + chondroitin · Best-studied combination', href: '#cosequin-asu' },
  { label: 'Best Comprehensive', emoji: '◎', name: 'Platinum Performance CJ', subtitle: 'Whole-system formula · Auto-ship subscription', href: '#platinum-cj' },
  { label: 'Best Senior', emoji: '🐴', name: 'SmartFlex Senior', subtitle: 'Glucosamine + chondroitin + MSM + HA · Senior dosing', href: '#smartflex' },
  { label: 'Reference: Omega-3', emoji: '🐟', name: 'Marine-source DHA/EPA', subtitle: 'Flax is not equivalent · Marine source matters', href: '#omega-3' },
]

export default function JointSupplementsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://horses.com/' }, { name: 'Supplements', url: 'https://horses.com/supplements' }, { name: 'Joint Supplements', url: 'https://horses.com/supplements/joint-supplements' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Evidence-Based Reference · May 2026</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Equine Joint Supplements — An Evidence Ladder
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          The equine joint-supplement market is large, lightly regulated, and dominated by marketing claims that outpace the data. This guide grades each ingredient by what the peer-reviewed literature actually supports — plus the prohibited-substance footnote that every competitive rider needs to know.
        </p>
      </div>

      {/* Cover photo — show-jumper mid-flight. Manifest-managed so photographer
          attribution is always rendered per QC §1. */}
      <div className="px-container-sm sm:px-container">
        <StockImage
          manifestKey="horses-com:supplement-joint"
          alt="A show jumper mid-flight over a fence — the explosive-impact sport horse joint supplements are designed for"
          aspect="16:9"
          variant="wide"
          priority
        />
      </div>

      <QuickPicks items={PICKS} />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/supplements" className="hover:text-brand-primary no-underline">Supplements</Link><span>›</span>
        <span className="text-brand-text-mid">Joint Supplements</span>
      </nav>

      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the equine joint-supplement checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Equine joint-supplement checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the joint-supplement notes that
                match the evidence-ladder copy on this
                page — diagnose first so a lame horse
                gets a lameness exam rather than a
                supplement decision, ASU at
                clinically-relevant doses (Cosequin
                ASU Plus) as the strongest equine
                oral ingredient, Platinum Performance
                CJ when one comprehensive formula is
                preferred to a stack, marine DHA/EPA
                rather than flax, and devil&apos;s claw
                off any FEI/USEF competition horse.
                Educational buyer checklist, not a
                new product hop and not a substitute
                for a veterinarian. The existing
                Platinum CJ Amazon search stays
                below. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="horses-com"
                title="Equine joint-supplement checklist"
                subtitle="Email the ASU, marine-omega-3, and FEI notes. No spam."
                ctaText="Email my equine joint-supplement checklist"
                source="supplements-joint-supplements-under-hero"
              />
            </div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Supplements Are Not a Substitute for Veterinary Diagnosis</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                A horse with active lameness needs a lameness exam, not a supplement decision. Many products marketed as &ldquo;joint supplements&rdquo; would be more honestly described as connective-tissue maintenance. Genuine osteoarthritis often requires intra-articular medication (corticosteroid + hyaluronate, IRAP, PRP), systemic chondroprotectants (Adequan, Legend), or NSAIDs — managed by a veterinarian. Supplements support these treatments; they do not replace them.
              </p>
            </div>

            <ScoreMethodology />

            <h2>Evidence Ladder — How Joint Ingredients Stack Up</h2>
            <p>The following ranking summarizes peer-reviewed equine and (where equine data is thin) extrapolated mammalian data on each ingredient. Inclusion of an ingredient in a high-grossing branded product is not the same thing as that ingredient having evidence; commercial popularity and evidence base often disagree.</p>

            <h3>Tier 1 — Strongest equine evidence</h3>

            <p><strong>Avocado/Soybean Unsaponifiables (ASU):</strong> The lipid fraction extracted from avocados and soybeans. ASU has the strongest equine-specific evidence base of the common joint-supplement ingredients. Kawcak et al. (<em>American Journal of Veterinary Research</em>, 2007) and subsequent studies have shown chondroprotective effects on cartilage in induced-osteoarthritis models. ASU is the active in the Cosequin ASU and Dasuquin product lines from Nutramax — those are the equine-formulated combinations that include ASU at clinically-relevant doses.</p>

            <p><strong>Polysulfated glycosaminoglycan (PSGAG) — Adequan i.m.:</strong> Not an oral supplement but worth naming here because it is the systemic chondroprotectant with the cleanest equine evidence base. Administered intramuscularly on a loading + maintenance schedule, Adequan is FDA-approved for equine non-infectious degenerative joint disease. Strong evidence supports its use in moderate equine osteoarthritis (Burba DJ et al., <em>Journal of Equine Veterinary Science</em>; manufacturer FDA submission data).</p>

            <p><strong>Hyaluronic acid (HA) — intra-articular and intravenous:</strong> Hyaluronan injected directly into the joint (or, via the IV Legend brand, given intravenously) has strong evidence as a chondroprotective and anti-inflammatory in equine joint disease. The route matters enormously — oral HA bioavailability is low and the equine literature on oral HA is much weaker than the literature on IA or IV HA.</p>

            <h3>Tier 2 — Moderate equine evidence</h3>

            <p><strong>Glucosamine and chondroitin sulfate (oral):</strong> The most-studied oral joint supplement combination in horses. Equine pharmacokinetic studies have shown that orally-administered glucosamine reaches synovial fluid at low concentrations (Laverty S et al., <em>American Journal of Veterinary Research</em>, 2005). Clinical trial evidence is mixed: some studies show modest improvement in lameness scores in horses with osteoarthritis, others show no statistically significant effect compared to placebo. The 2012 meta-analyses in human osteoarthritis (which guide most extrapolation) showed glucosamine + chondroitin produces small effects that approach but do not consistently exceed clinical significance. For horses, evidence supports use as adjunctive — alongside other management — rather than as a standalone osteoarthritis treatment. Quality control matters: look for NASC (National Animal Supplement Council) Quality Seal products with documented label-claim glucosamine and chondroitin content.</p>

            <p><strong>MSM (methylsulfonylmethane):</strong> A naturally-occurring organosulfur compound. Equine evidence is modest but real — small-trial data shows anti-inflammatory effects and possible analgesic benefit at doses of 10–20 g/day for an adult horse (Marañón G et al., <em>Acta Veterinaria Scandinavica</em>, 2008). MSM is one of the more cost-effective joint-supplement ingredients per gram of demonstrated effect; it appears in most combination products.</p>

            <p><strong>Marine-source omega-3 (DHA/EPA):</strong> Marine-source omega-3 (algal or fish oil) has documented anti-inflammatory effects in horses, with some evidence supporting its use in joint inflammation specifically. Critically, the equine literature shows that marine-source omega-3 is not interchangeable with plant-source (flax, chia) omega-3 — the conversion from ALA (plant omega-3) to EPA/DHA (the inflammation-modulating forms) is inefficient in horses. Hess TM et al. (<em>Journal of Equine Veterinary Science</em>, 2013) reports clear differences between marine and plant sources. If you are paying for omega-3 for joint support, the source needs to be marine-derived.</p>

            <h3>Tier 3 — Limited equine evidence; mechanistic interest</h3>

            <p><strong>Oral hyaluronic acid:</strong> The injectable forms (IA and IV) have strong evidence. Oral HA has limited bioavailability and a much smaller equine evidence base; equine clinical trials are small and the results are equivocal. Most combination supplements include oral HA at sub-clinical doses; the ingredient appearing on the label is not a guarantee of clinical effect.</p>

            <p><strong>Collagen peptides (hydrolyzed collagen):</strong> Mechanistically attractive, with some equine trial data showing modest improvements. The evidence base is younger and smaller than that for ASU or glucosamine.</p>

            <p><strong>Curcumin / turmeric:</strong> Anti-inflammatory in vitro and in small-animal models. Equine pharmacokinetic studies show very low oral bioavailability of unmodified curcumin; products combining curcumin with absorption enhancers (piperine, lipids) may overcome this. Evidence base in horses specifically is small.</p>

            <p><strong>Boswellia (Indian frankincense):</strong> Some equine clinical-trial data shows lameness improvement in osteoarthritic horses at appropriate doses. The evidence is suggestive rather than definitive.</p>

            <h3>Tier 4 — Use With Caution: Devil&apos;s Claw and USEF/FEI Prohibited Substances</h3>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 my-6">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-amber-800 mb-2">Competition Rule: Devil&apos;s Claw is FEI/USEF Banned</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                <strong>Devil&apos;s Claw (<em>Harpagophytum procumbens</em>)</strong> is anti-inflammatory and is included in numerous over-the-counter equine &ldquo;natural pain relief&rdquo; products marketed as joint or muscle support. The active constituent, harpagoside, and its metabolites are <strong>prohibited substances</strong> under the Fédération Équestre Internationale (FEI) Equine Prohibited Substances List and the United States Equestrian Federation (USEF) Equine Drugs and Medications Rules. A horse that competes in any USEF or FEI sanctioned event must not have detectable harpagoside metabolites in plasma or urine. Withdrawal times for devil&apos;s claw products vary by formulation; documented detection windows extend at least several days after the last dose. Competitive riders should treat devil&apos;s claw as ineligible for any horse in competition, full stop.
              </p>
              <p className="text-xs text-brand-text-mid m-0 mt-3 leading-relaxed">References: FEI Equine Prohibited Substances List, current edition (fei.org); USEF Equine Drugs and Medications Rules GR4, current edition (usef.org).</p>
            </div>

            <p>Other prohibited or restricted substances that appear in supplements: capsaicin (banned in FEI/USEF), arnica (restricted in some FEI disciplines), kava kava, valerian, and various adaptogens. Competitive riders should check every ingredient on a supplement label against the current FEI Equine Prohibited Substances Database before adding it to a competition-eligible horse.</p>

            <h3>Tier 5 — Marketing claims exceed the data</h3>

            <p><strong>Green-lipped mussel (<em>Perna canaliculus</em>):</strong> Marketed with strong claims based on canine and human data. Equine evidence is limited and mixed; the ingredient may have benefit but the equine literature does not yet support the marketing.</p>

            <p><strong>Trace mineral &ldquo;joint formulas&rdquo; based on copper, zinc, manganese:</strong> Adequate trace mineral status is required for connective-tissue health. Supplementation beyond NRC requirements (National Research Council, <em>Nutrient Requirements of Horses</em>, 6th ed.) has not been shown to improve joint outcomes in horses already on a balanced ration. If the horse&apos;s overall mineral status is poor, address the base ration; do not paper over a poorly balanced diet with a &ldquo;joint formula.&rdquo;</p>

            <p><strong>&ldquo;Proprietary blends&rdquo; without per-ingredient amounts:</strong> Any product whose label lists ingredients but not the milligram quantity of each cannot be evaluated for clinical relevance. NASC-Quality-Seal products disclose ingredient amounts; choose those preferentially.</p>

            <h2>Reviewed Products</h2>
            <AffiliateDisclosure variant="inline" siteId="horses-com" />

            <ReviewCard
              id="cosequin-asu"
              badge="Best Evidence (ASU)"
              name="Nutramax Cosequin ASU Plus"
              subtitle="Avocado/Soybean Unsaponifiables + Glucosamine + Chondroitin"
              score={8.9}
              winner
              description={<>
                <p>Cosequin ASU Plus is the equine formulation of the supplement family that has accumulated the strongest published evidence in induced-osteoarthritis models. The ASU component is what differentiates it from the broad &ldquo;glucosamine + chondroitin&rdquo; category — and ASU has among the strongest peer-reviewed equine evidence of the common joint-supplement ingredients. Nutramax is NASC Quality Seal certified and discloses ingredient amounts on the label.</p>
                <p>Reasonable choice for: an adult performance horse where joint maintenance is preventive rather than rescue, or an early-grade osteoarthritis horse used as part of a broader management plan that includes veterinary diagnosis. Not a replacement for intra-articular medication when synovitis or active osteoarthritis is documented.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'ASU, glucosamine HCl, chondroitin sulfate', highlight: 'good' },
                { label: 'NASC certified', value: 'Yes', highlight: 'good' },
                { label: 'Evidence tier', value: 'Tier 1 (ASU is best-studied equine ingredient)', highlight: 'good' },
                { label: 'Best use case', value: 'Maintenance, early OA adjunct' },
              ]}
              pros={['Strongest equine ingredient evidence (ASU)', 'NASC Quality Seal documented', 'Per-ingredient amounts disclosed', 'Long manufacturer track record']}
              cons={['Premium price per scoop', 'Not a substitute for IA or systemic chondroprotectant when indicated']}
              price="$60–95 per 30-day supply"
              ctaText="Compare at SmartPak →"
              ctaHref="/go/smartpak/cosequin-asu-plus?s=supplements-joint-supplements"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="cosequin-asu-plus"
            />

            <ReviewCard
              id="platinum-cj"
              badge="Best Comprehensive"
              name="Platinum Performance CJ"
              subtitle="Whole-system formula with joint-targeted CJ blend"
              score={9.0}
              description={<>
                <p>Platinum Performance CJ adds a joint-targeted supplement matrix (glucosamine, chondroitin, MSM, HA, ASU, cetyl myristoleate) onto the Platinum Performance Equine Wellness Formula base — a whole-ration supplement that addresses fatty-acid balance, antioxidant, and trace-mineral support in addition to joint inputs. The advantage is dose-coordination across the supplement profile (no stacking redundant glucosamine, no antagonistic mineral interactions). The disadvantage is cost — Platinum is the highest-AOV premium supplement in the category.</p>
                <p>Most relevant for the performance horse in active competition where the owner is willing to pay for the auto-ship subscription convenience and the integrated formulation.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'Glucosamine, chondroitin, MSM, HA, ASU, CMO, omega-3', highlight: 'good' },
                { label: 'Auto-ship model', value: 'Standard subscription pricing' },
                { label: 'Evidence tier', value: 'Mixed Tier 1–3 ingredients in one product' },
                { label: 'Best use case', value: 'Performance horse, integrated supplementation' },
              ]}
              pros={['Comprehensive ingredient profile in one product', 'No need to stack multiple supplements', 'Premium quality control']}
              cons={['Significantly more expensive than category average', 'Some ingredients in the formula are Tier 3 evidence', 'Auto-ship lock-in']}
              price="$130–180 per 30-day supply"
              ctaText="Visit Platinum Performance →"
              ctaHref="/go/amazon-brand/platinum+performance+CJ+joint+supplement?s=supplements-joint-supplements"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="platinum-cj"
            />

            <ReviewCard
              id="smartflex"
              badge="Best Senior"
              name="SmartPak SmartFlex Senior"
              subtitle="Glucosamine + chondroitin + MSM + HA at senior-targeted dosing"
              score={8.5}
              description={<>
                <p>SmartFlex Senior is SmartPak&apos;s house-brand senior-horse joint supplement, formulated at higher glucosamine and MSM doses than the standard SmartFlex Maintenance product and including HA. Practical choice for older horses with established joint maintenance needs, especially when used with the SmartPak auto-shipped daily-dose Smart Packs that prevent dose-counting errors.</p>
                <p>The dose-per-scoop is in the clinically-relevant range, NASC Quality Seal documented, and the per-day cost is competitive with branded equivalents at the same ingredient level.</p>
              </>}
              specs={[
                { label: 'Active ingredients', value: 'Glucosamine HCl, chondroitin sulfate, MSM, HA' },
                { label: 'Daily packaging', value: 'SmartPak Smart Pak auto-ship' },
                { label: 'Evidence tier', value: 'Tier 2 ingredient stack at senior doses' },
                { label: 'Best use case', value: 'Senior horse maintenance' },
              ]}
              pros={['Senior-dose ingredient amounts', 'Auto-shipped daily packs reduce dosing error', 'NASC Quality Seal']}
              cons={['No ASU component', 'House-brand HA at oral dose has limited evidence', 'Auto-ship requires SmartPak account']}
              price="$45–65 per 28-day supply"
              ctaText="Shop at SmartPak →"
              ctaHref="/go/smartpak/smartflex-senior?s=supplements-joint-supplements"
              ctaAffiliateProgram="smartpak"
              ctaAffiliateProduct="smartflex-senior"
            />

            <ReviewCard
              id="omega-3"
              badge="Reference Ingredient"
              name="Marine-Source Omega-3 (DHA/EPA)"
              subtitle="Algal or fish-oil source — flax is not equivalent"
              score={8.6}
              description={<>
                <p>Marine-source omega-3 is the ingredient most commonly stocked from non-equine-targeted retailers (Riding Warehouse, Dover, and Amazon all carry equine-formulated marine omega-3 in both fish-oil and algal varieties). The category here is not a branded product but the ingredient itself — the evidence for marine-source EPA/DHA in equine inflammation is solid enough that the supplement is reasonable to add to most performance-horse rations.</p>
                <p>Critically: a product that lists &ldquo;omega-3&rdquo; without specifying the form is usually flax (ALA). Equine ALA → EPA/DHA conversion is poor; if you are paying for omega-3 for joint or inflammation support, confirm the label says fish oil or algal DHA/EPA, not flax.</p>
              </>}
              specs={[
                { label: 'Active form', value: 'EPA + DHA (marine)', highlight: 'good' },
                { label: 'Daily dose target', value: '10–20 g EPA+DHA combined' },
                { label: 'Evidence tier', value: 'Tier 2 (marine only — flax does not substitute)' },
                { label: 'Best use case', value: 'Performance horse anti-inflammatory support' },
              ]}
              pros={['Documented anti-inflammatory effects in horses', 'Synergizes with other joint inputs', 'Wide availability']}
              cons={['Flax-source ALA does not deliver equivalent benefit', 'Cold storage extends shelf life', 'Smell — some horses initially refuse']}
              price="$25–60 per 30-day supply"
              ctaText="Compare at Riding Warehouse →"
              ctaHref="/go/ridingwarehouse/marine-omega-3?s=supplements-joint-supplements"
              ctaAffiliateProgram="ridingwarehouse"
              ctaAffiliateProduct="marine-omega-3"
            />

            <h2>How to Choose</h2>
            <p>The framework that maximizes the evidence-per-dollar in this category:</p>
            <ol>
              <li><strong>Diagnose first.</strong> An undiagnosed lame horse is not a candidate for supplement decisions. Get the lameness exam; manage active disease with the right tools (IA medication, systemic chondroprotectant, NSAIDs) under veterinary direction.</li>
              <li><strong>Pick one product with Tier 1 ingredients in clinically-relevant doses.</strong> Cosequin ASU Plus and Platinum CJ both qualify; SmartFlex Senior at senior dosing for an older horse.</li>
              <li><strong>Add marine-source omega-3 if not already included.</strong> The anti-inflammatory effect compounds with the joint-direct ingredients.</li>
              <li><strong>Do not stack redundant products.</strong> Three different glucosamine sources at the same time is wasted money — pick one combination product and use it at label dose.</li>
              <li><strong>Check competition eligibility.</strong> Every ingredient against current FEI and USEF prohibited-substance lists if the horse competes.</li>
              <li><strong>Re-evaluate at 60–90 days.</strong> Joint supplements with real effects show change in lameness scores or veterinary flexion-test results over weeks, not days. If no change at 90 days, the supplement is not contributing.</li>
            </ol>

            <h2>Affiliate Disclosure</h2>
            <p>Horses.com participates in affiliate programs with SmartPak Equine, Dover Saddlery, Riding Warehouse, Platinum Performance, and Amazon Associates. We may earn commission on purchases made through links on this page. Affiliate participation does not influence the evidence assessments or rankings — the same products would receive the same rankings on the same evidence regardless of program participation. See our editorial standards page for the full policy.</p>

            <h2>References</h2>
            <ol className="text-sm text-brand-text-mid">
              <li>Kawcak CE, Frisbie DD, McIlwraith CW, et al. &ldquo;Evaluation of Avocado and Soybean Unsaponifiable Extracts for Treatment of Horses with Experimentally Induced Osteoarthritis.&rdquo; <em>American Journal of Veterinary Research</em>, 2007; 68(6):598–604.</li>
              <li>Laverty S, Sandy JD, Celeste C, et al. &ldquo;Synovial Fluid Levels and Serum Pharmacokinetics in a Large Animal Model Following Treatment with Oral Glucosamine.&rdquo; <em>American Journal of Veterinary Research</em>, 2005.</li>
              <li>Hess TM, Rexford JK, Hansen DK, et al. &ldquo;Effects of Two Different Dietary Sources of Long Chain Omega-3 Highly Unsaturated Fatty Acids on Incorporation into the Plasma and Red Blood Cells in Horses.&rdquo; <em>Journal of Equine Veterinary Science</em>, 2013.</li>
              <li>Marañón G, Muñoz-Escassi B, Manley W, et al. &ldquo;The Effect of Methyl Sulphonyl Methane Supplementation on Biomarkers of Oxidative Stress in Sport Horses Following Jumping Exercise.&rdquo; <em>Acta Veterinaria Scandinavica</em>, 2008; 50:45.</li>
              <li>McIlwraith CW, Frisbie DD, Kawcak CE. &ldquo;The Horse as a Model of Naturally Occurring Osteoarthritis.&rdquo; <em>Bone &amp; Joint Research</em>, 2012; 1(11):297–309.</li>
              <li>National Research Council. <em>Nutrient Requirements of Horses</em>, 6th revised edition. National Academies Press, 2007.</li>
              <li>Fédération Équestre Internationale. <em>Equine Prohibited Substances List</em>, current edition. fei.org/cleansport.</li>
              <li>United States Equestrian Federation. <em>Equine Drugs and Medications Rules</em> (GR4) and Prohibited Substance Database, current edition. usef.org.</li>
              <li>National Animal Supplement Council (NASC). &ldquo;NASC Quality Seal Program — Standards.&rdquo; nasc.cc.</li>
              <li>Pearson W, Lindinger MI. &ldquo;Critical Review of Equine Joint Nutraceutical Research,&rdquo; <em>Equine Veterinary Journal</em>.</li>
            </ol>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Use Case</div>
              {[
                ['Maintenance, sound horse', 'Cosequin ASU Plus'],
                ['Active performance horse', 'Platinum CJ + marine omega-3'],
                ['Senior, 15+ years', 'SmartFlex Senior'],
                ['Documented OA, vet-managed', 'IA medication + ASU adjunct'],
                ['FEI / USEF competition', 'No devil&apos;s claw; check every ingredient'],
                ['Budget-conscious', 'Generic glucosamine + chondroitin (NASC)'],
              ].map(([u, r]) => (
                <div key={u} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light" dangerouslySetInnerHTML={{ __html: u }} />
                  <div className="text-xs font-bold text-brand-dark" dangerouslySetInnerHTML={{ __html: r }} />
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Equine Ulcers (EGUS)', href: '/health/equine-ulcers' },
                { label: 'Quarter Horse Guide', href: '/breeds/quarter-horse' },
                { label: 'Best Winter Blankets', href: '/reviews/best-winter-horse-blankets' },
                { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Practical Horse Reference"
              subtitle="Evidence-led articles for owners."
              source="supplements-joint"
            />
          </aside>
        </div>
      </div>
    </>
  )
}
