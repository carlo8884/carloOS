import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Gastric Ulcers — EGUS, ESGD, EGGD, Treatment',
  description:
    'Equine Gastric Ulcer Syndrome (EGUS) — squamous (ESGD) vs glandular (EGGD) disease, risk factors, gastroscopy, omeprazole, and forage-first nutrition.',
  path: '/health/equine-ulcers',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Equine Gastric Ulcer Syndrome (EGUS)',
  description:
    'Reference guide to ESGD vs EGGD, risk factors by discipline, gastroscopy, omeprazole treatment, and forage-based management.',
  url: 'https://horses.com/health/equine-ulcers',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Equine Gastric Ulcer Syndrome',
  description:
    'Equine glandular gastric disease (EGGD) and equine squamous gastric disease (ESGD) — clinical signs, diagnosis, treatment, and nutritional management.',
  url: 'https://horses.com/health/equine-ulcers',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-05-28',
})

const combined = combineSchemas(articleSchema, medSchema)

export default function EquineUlcersPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        hero={{
          title: 'Equine Gastric Ulcer Syndrome (EGUS)',
          subtitle:
            "EGUS is the most prevalent — and the most consequential — chronic gastrointestinal disease in performance horses. Prevalence in actively training Thoroughbred racehorses approaches 90 percent (Murray et al., Equine Veterinary Journal). Squamous disease (ESGD) and glandular disease (EGGD) have different pathophysiology, different risk profiles, and different treatment success rates. The reference summary that follows draws on the 2015 and 2024 ECEIM consensus statements on equine gastric disease and is reference material — not a substitute for gastroscopy and veterinary management.",
          category: 'Equine Health',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Health', href: '/health' },
          { name: 'Equine Ulcers', href: '/health/equine-ulcers' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'ESGD vs EGGD', href: '#esgd-vs-eggd' },
            { label: 'Prevalence by Discipline', href: '#prevalence' },
            { label: 'Risk Factors', href: '#risk' },
            { label: 'Clinical Signs', href: '#signs' },
            { label: 'Diagnosis — Gastroscopy', href: '#diagnosis' },
            { label: 'Treatment — Omeprazole', href: '#treatment' },
            { label: 'Nutritional Management', href: '#nutrition' },
            { label: 'Supplements: Evidence Ladder', href: '#supplements' },
            { label: 'When to Call the Vet', href: '#call-vet' },
            { label: 'References', href: '#references' },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Veterinary Disclaimer</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              This article is reference material, not veterinary advice. If your horse is showing signs of gastric ulcers — poor appetite, weight loss, recurrent colic, behavior change — contact your veterinarian. Definitive diagnosis requires gastroscopy.
            </p>
          </div>
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Joint Supplements', href: '/supplements/joint-supplements' },
              { label: 'Quarter Horse Genetics', href: '/breeds/quarter-horse' },
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led articles for owners."
            source="health-egus"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="esgd-vs-eggd">ESGD vs EGGD — Two Diseases, Same Stomach</h2>
          <p>The equine stomach has two anatomically and functionally distinct regions, and the two regions develop ulcers for entirely different reasons. This is the single most important fact in EGUS management — &ldquo;ulcers&rdquo; is not one disease, and the right answer for one type can be the wrong answer for the other.</p>

          <p><strong>Equine Squamous Gastric Disease (ESGD)</strong> affects the squamous (non-glandular) mucosa, which lines the upper third of the stomach. The squamous mucosa is structurally similar to esophageal lining — it has no protective mucus layer and minimal buffering capacity. ESGD is a classic acid-injury disease: when gastric acid splashes onto unprotected squamous mucosa (especially during high-intensity exercise, when abdominal compression drives acid upward), the mucosa erodes. ESGD is the lesion type most strongly associated with intense exercise and intermittent feeding.</p>

          <p><strong>Equine Glandular Gastric Disease (EGGD)</strong> affects the glandular mucosa of the lower stomach, which produces acid and is protected by a mucus-bicarbonate layer. EGGD is not a simple acid-injury disease — the lesions develop where mucosal defense has failed, not where acid has overwhelmed defense. The 2024 European College of Equine Internal Medicine (ECEIM) consensus statement explicitly reframes EGGD as a mucosal-defense breakdown more analogous to NSAID gastropathy or stress-induced ulceration in other species (Sykes BW et al., <em>Journal of Veterinary Internal Medicine</em>, 2024 consensus).</p>

          <p>The clinical implication: ESGD responds well to acid suppression alone; EGGD does not. EGGD often requires longer treatment courses, adjunctive mucosal protection (sucralfate, misoprostol), and crucially the identification and removal of the underlying mucosal-defense stressor (NSAID exposure, training-program intensity, social stress).</p>

          <h2 id="prevalence">Prevalence by Discipline</h2>
          <p>Documented EGUS prevalence varies sharply with discipline, training intensity, and population studied. Key published rates:</p>

          <ul>
            <li><strong>Active Thoroughbred racehorses:</strong> 80–90 percent overall EGUS prevalence; ESGD predominates. Murray MJ et al. (<em>Equine Veterinary Journal</em>, 1996) reported 93 percent prevalence in 67 actively-training Thoroughbreds.</li>
            <li><strong>Standardbred racehorses:</strong> 60–75 percent (Dionne RM et al., <em>Canadian Veterinary Journal</em>, 2003).</li>
            <li><strong>Endurance horses:</strong> 67–93 percent during competition season (Nieto JE et al., <em>Journal of Veterinary Internal Medicine</em>, 2004; Tamzali Y et al., <em>Equine Veterinary Journal</em>, 2011). The drop from competition fitness to off-season pasture turnout is associated with significant healing without pharmacological intervention.</li>
            <li><strong>Sport horses (dressage, eventing, show jumping):</strong> 17–58 percent across studies. EGGD is comparatively more prominent in sport-horse populations than in racing populations.</li>
            <li><strong>Western performance (reining, cutting):</strong> 40–60 percent in active show horses; data thinner than English-discipline studies.</li>
            <li><strong>Pleasure and lightly-used horses:</strong> 11–37 percent baseline; ESGD predominates, EGGD less common.</li>
            <li><strong>Pastured horses (no training):</strong> approximately 10 percent or lower.</li>
          </ul>

          <p>The pattern: intensity of work, restricted forage access, and travel/competition stress are the strongest predictors. A pasture horse on free-choice hay has a near-zero baseline risk; an upper-level eventer in a competition season has odds approaching certainty.</p>

          <h2 id="risk">Risk Factors</h2>
          <p>The 2015 and 2024 ECEIM consensus statements and the bulk of the peer-reviewed literature identify the following risk factors, in approximate descending order of effect size:</p>

          <h3>Forage restriction and intermittent feeding</h3>
          <p>The single largest modifiable risk factor for ESGD. The equine stomach secretes hydrochloric acid continuously — approximately 60 liters per day — at a rate that does not pause when the horse is not eating (Andrews FM &amp; Nadeau JA, <em>Equine Veterinary Journal Supplement</em>, 1999). The mechanism of natural acid buffering is the bicarbonate-rich saliva produced when chewing forage. A horse without forage for more than 4–6 hours has effectively stopped buffering the acid bath that the squamous mucosa is sitting in. ESGD lesions can develop within 48–96 hours of forage restriction in feeding-trial models.</p>

          <h3>High-grain, low-forage diets</h3>
          <p>Diets greater than approximately 2 g starch/kg body weight/meal increase volatile fatty acid (VFA) production in the stomach, which contributes to squamous mucosal injury. The mechanism is independent of HCl — VFA-mediated injury — and is the reason that the simple equation &ldquo;more grain = more ulcers&rdquo; is well supported even when acid production itself is not the rate-limiting step.</p>

          <h3>NSAID use</h3>
          <p>Phenylbutazone, flunixin meglumine, and firocoxib reduce the prostaglandin-mediated mucosal defense of the glandular stomach. Phenylbutazone at therapeutic doses for as little as 5–7 days can induce glandular ulceration in healthy horses. Firocoxib is the COX-2-selective agent most often promoted as gastric-sparing, and while studies do show lower rates of glandular injury compared to phenylbutazone (Doucet MY et al., <em>Equine Veterinary Journal</em>, 2008), the risk is not zero — long-term firocoxib still carries EGGD risk.</p>

          <h3>Stress, transport, and stabling</h3>
          <p>Transport and stabling are independently associated with both ESGD and EGGD. Mechanisms include cortisol-mediated reduction of mucosal blood flow, behavioral disruption of feeding patterns, and social stress (single-stall confinement, weaning, group reshuffles). Horses transported &gt;12 hours have measurable mucosal changes on subsequent gastroscopy.</p>

          <h3>Exercise intensity</h3>
          <p>High-speed exercise increases intra-abdominal pressure and compresses the stomach, driving acid from the glandular region upward onto squamous mucosa. ESGD risk rises with sustained work above the lactate threshold; the racing and endurance prevalence data reflect this.</p>

          <h3>Other</h3>
          <p>Limited pasture access, infrequent turnout, water deprivation, intercurrent illness, and the temperament axis (more reactive horses appear at higher risk in some studies — though confounded by training intensity) round out the picture.</p>

          <h2 id="signs">Clinical Signs</h2>
          <p>Many horses with ulcers are subclinical, identified only when investigated for poor performance. When signs are present, they are nonspecific:</p>
          <ul>
            <li>Decreased appetite, particularly for grain; reluctance to finish feed.</li>
            <li>Slow eating with frequent pauses.</li>
            <li>Weight loss or failure to maintain condition on adequate calories.</li>
            <li>Dull, dry coat.</li>
            <li>Recurrent low-grade colic, often post-meal.</li>
            <li>Girthiness — flinching, biting, or kicking at the girth being tightened.</li>
            <li>Poor performance — backed-off racing speed, reluctance to extend in dressage, refusals at jumps, sour attitude.</li>
            <li>Behavior change — increased reactivity, cribbing or windsucking onset in adult horses, resistance under saddle.</li>
            <li>Bruxism (tooth grinding), especially in foals and weanlings.</li>
          </ul>
          <p>None of these signs is specific. The differential for &ldquo;poor performance and a sour attitude&rdquo; includes lameness, ill-fitting saddle, dental pain, ovarian or testicular pain, and primary behavioral issues. Gastroscopy is what separates EGUS from these mimics.</p>

          <h2 id="diagnosis">Diagnosis — Gastroscopy Is the Gold Standard</h2>
          <p>Definitive diagnosis of EGUS requires direct visualization of the gastric mucosa via a 3-meter endoscope passed through the nostril, esophagus, and into the stomach. The horse is sedated, fasted 12–16 hours, and water-deprived 4–6 hours. The procedure is well-tolerated, takes 15–20 minutes, and reveals lesions in the squamous region (cardia, lesser curvature, margo plicatus), the glandular region (pylorus, antrum), and the duodenum (rare). Each lesion is graded on standardized scales — the EGUS Council 0–4 scale for squamous lesions is the most widely used (EGUS Council, &ldquo;The Equine Gastric Ulcer Syndrome,&rdquo; 1999, updated).</p>

          <p>Empirical treatment without scoping — common in practice — risks two failures. First, treating a horse with no ulcers (the clinical signs were caused by something else). Second, missing the EGGD vs ESGD distinction, since the lesions affect different regions and respond differently to the same drug. The ECEIM 2015 consensus is explicit: where gastroscopy is available, it should be performed before initiating treatment and at the end of treatment to confirm healing (Sykes BW et al., <em>Journal of Veterinary Internal Medicine</em>, 2015 consensus).</p>

          <p>Blood and fecal tests for ulcers — including the &ldquo;Succeed Equine Fecal Blood Test&rdquo; — have low sensitivity and specificity and should not be used as a substitute for gastroscopy. Negative results do not rule out EGUS; positive results do not confirm location.</p>

          <h2 id="treatment">Treatment — Omeprazole and the Generics Question</h2>
          <p>The pharmacologic foundation of EGUS treatment is omeprazole, a proton-pump inhibitor that irreversibly binds the H+/K+ ATPase in gastric parietal cells. At therapeutic doses, omeprazole reduces 24-hour gastric acid secretion by &gt;90 percent within 3–5 days.</p>

          <h3>GastroGard (branded omeprazole paste)</h3>
          <p>GastroGard is a veterinarian-prescribed oral omeprazole paste carrying an FDA-approved treatment regimen for ESGD; the exact dose and duration must be determined by a veterinarian. It is the only equine omeprazole product with established bioavailability and dosing data from FDA approval. Healing rates in published trials reach 75–87 percent for ESGD at 28 days (Andrews FM et al., <em>Equine Veterinary Journal Supplement</em>, 1999; Sykes BW et al., 2015).</p>

          <h3>UlcerGard (prevention)</h3>
          <p>Same active ingredient as GastroGard but a lower prevention-oriented dose, marketed for prevention rather than treatment; dosing must be determined by a veterinarian. Indicated for horses entering high-risk periods (shipping, competition, training intensification). UlcerGard is not labeled or dosed for treatment of established ulcers.</p>

          <h3>Compounded omeprazole</h3>
          <p>Compounded omeprazole is widely used at lower cost than GastroGard. The pharmacokinetic problem: omeprazole is acid-labile, and the GastroGard formulation includes a proprietary acid-stable vehicle that protects the active ingredient through the equine stomach. Compounded paste and oral suspension products have repeatedly demonstrated lower bioavailability than GastroGard in controlled comparisons (Nieto JE et al., <em>American Journal of Veterinary Research</em>, 2002; multiple subsequent studies). Healing rates with compounded products are highly variable — some trials show 60–70 percent healing, others substantially less. Discuss the cost-vs-bioavailability trade-off with the prescribing veterinarian; an enteric-coated commercial alternative may be more reliable than compounded paste.</p>

          <h3>EGGD adjuncts</h3>
          <p>EGGD often does not respond to omeprazole monotherapy. Standard practice now combines omeprazole with sucralfate (given after omeprazole to allow gastric pH to drop) or with misoprostol (a prostaglandin E1 analog). These are veterinarian-prescribed, and dosing must be determined by a veterinarian. Misoprostol is teratogenic — pregnant women must not handle it without gloves, and it must not be given to pregnant mares.</p>

          <h3>Treatment duration and rescoping</h3>
          <p>The ECEIM consensus is to treat ESGD for a minimum of 28 days, rescope, and continue if not healed. EGGD typically requires 60–90 days of treatment; healing rates remain lower than ESGD even with appropriate combination therapy. Stopping omeprazole abruptly produces rebound hyperacidity; tapering is reasonable but not strongly evidence-based for horses.</p>

          <h2 id="nutrition">Nutritional Management — Forage First</h2>
          <p>Pharmacologic treatment of EGUS without addressing the diet that produced the ulcers is a short-term win with a near-certain relapse. The non-negotiable foundations of equine-ulcer nutrition:</p>

          <h3>Free-choice forage, or as close to it as possible</h3>
          <p>Continuous forage access is the single most protective dietary factor. Where unlimited hay is impractical (easy keepers, metabolic syndrome), slow-feed haynets (1.5-inch openings or smaller) extend a fixed quantity of hay over a longer feeding window. The goal is to avoid stretches greater than 4 hours without forage during waking hours, and longer stretches than 6–8 hours overnight.</p>

          <h3>Alfalfa</h3>
          <p>Alfalfa hay is genuinely protective against ESGD. The mechanism is twofold: alfalfa is higher in calcium and protein than grass hay, both of which buffer gastric acid, and alfalfa stimulates more saliva than equivalent grass hay (Lybbert TC et al., <em>Journal of Animal Science</em>, 2007; Nadeau JA et al., <em>Equine Veterinary Journal</em>, 2003). Practical application: an alfalfa flake fed 30 minutes before exercise (or replaced as approximately 30 percent of the forage ration) reduces ESGD risk significantly. Alfalfa is not without trade-offs — its calcium load can complicate ration balancing in young horses and stallions — but for an adult horse at risk of squamous ulcers, partial-alfalfa rations are evidence-based.</p>

          <h3>Reduce starch and sugar (NSC)</h3>
          <p>Concentrate meals should be kept below 2 g of starch/kg body weight per meal. For a 1,100 lb horse, that is approximately 1 kg of typical sweet feed per meal — a number that exceeds what many show and racing barns currently feed in a single meal. Splitting the same daily calorie load into more frequent smaller meals reduces VFA-mediated squamous injury. Replacing some starch calories with fat (vegetable oil, rice bran, stabilized rice bran) provides energy without the gastric injury cost.</p>

          <h3>Water and electrolytes</h3>
          <p>Continuous access to clean water is mandatory; intermittent water access is associated with EGUS. Hypertonic electrolyte pastes directly damage squamous mucosa in some studies; pre-mixing electrolytes into water or feed (rather than syringing concentrated paste onto the gums) is preferred.</p>

          <h2 id="supplements">Supplements — The Evidence Ladder</h2>
          <p>The EGUS supplement market is large and overwhelmingly promoted on marketing claims rather than peer-reviewed evidence. A more useful framing is an evidence ladder:</p>

          <p><strong>Tier 1 — Pharmacologic, evidence-strong:</strong> omeprazole (GastroGard/UlcerGard), sucralfate, misoprostol. Prescription drugs with controlled-trial evidence; the only treatments with robust healing-rate data.</p>

          <p><strong>Tier 2 — Direct buffering, evidence-moderate:</strong> Calcium-based antacids (calcium carbonate, calcium hydroxide). Effective for short-term acid neutralization but with brief duration (1–2 hours). The pre-exercise &ldquo;flake of alfalfa&rdquo; works through the same mechanism — calcium buffering — and has more sustained effect.</p>

          <p><strong>Tier 3 — Pectin-lecithin complexes:</strong> Marketed under various brand names. The hypothesis is that pectin and lecithin form a protective layer over squamous mucosa. Evidence is mixed; smaller trials suggest mild benefit, larger or independent trials show less effect (Murray MJ et al., 1997; Venner M et al., <em>Equine Veterinary Education</em>, 2010). Reasonable adjunctive use; not a substitute for omeprazole in active disease.</p>

          <p><strong>Tier 4 — Sea buckthorn berry (<em>Hippophae rhamnoides</em>):</strong> Trials in horses are small, and the published evidence is mixed. The mechanism (anti-oxidant, mucin-supportive) is plausible but the effect size is modest at best (Huff NK et al., <em>Equine Veterinary Journal</em>, 2012).</p>

          <p><strong>Tier 5 — Hindgut buffers, probiotics, glutamine, kaolin-pectin:</strong> Theoretical mechanisms exist; the controlled-trial evidence for ulcer-healing benefit is weak to absent. These products are often sold as &ldquo;ulcer supplements&rdquo; on marketing claims that exceed the data. Use with realistic expectations — they are not a replacement for the Tier 1 drugs they are sometimes marketed against.</p>

          <p><strong>Tier 6 — Aloe vera, slippery elm, marshmallow root:</strong> Anecdotal use is common; controlled trials are essentially absent in horses. A controlled trial of aloe vera vs omeprazole (Bush J et al., <em>Equine Veterinary Journal</em>, 2018) found omeprazole significantly more effective. These products may be benign but should not replace evidence-based therapy.</p>

          <h2 id="call-vet">When to Call the Vet</h2>
          <p>Same-day veterinary attention is warranted for any of: a horse off feed for more than 12–24 hours, repeated or severe colic, signs of dehydration, fever, or marked behavioral change. EGUS itself is rarely a life-threatening acute event, but the differential diagnoses for the same signs — impaction colic, sand colic, gastric impaction, gastric rupture, intussusception — can be life-threatening and time-sensitive.</p>

          <p>Routine scheduling: gastroscopy is appropriate for any horse with chronic poor performance, unexplained weight loss, recurrent low-grade colic, or significant behavior change under saddle in the absence of an obvious lameness or tack-fit explanation.</p>

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Sykes BW, Hewetson M, Hepburn RJ, Luthersson N, Tamzali Y. &ldquo;European College of Equine Internal Medicine Consensus Statement — Equine Gastric Ulcer Syndrome in Adult Horses.&rdquo; <em>Journal of Veterinary Internal Medicine</em>, 2015; 29:1288–1299.</li>
            <li>Sykes BW et al. ECEIM Consensus Statement (updated 2024) on EGGD pathophysiology and management. <em>Journal of Veterinary Internal Medicine</em>, 2024.</li>
            <li>Murray MJ, Schusser GF, Pipers FS, Gross SJ. &ldquo;Factors Associated with Gastric Lesions in Thoroughbred Racehorses.&rdquo; <em>Equine Veterinary Journal</em>, 1996; 28(5):368–374.</li>
            <li>Andrews FM, Nadeau JA. &ldquo;Clinical Syndromes of Gastric Ulceration in Foals and Mature Horses.&rdquo; <em>Equine Veterinary Journal Supplement</em>, 1999; 29:30–33.</li>
            <li>Nadeau JA, Andrews FM, Patton CS, Argenzio RA, Mathew AG, Saxton AM. &ldquo;Effect of Hydrochloric, Acetic, Butyric, and Propionic Acids on Pathogenesis of Ulcers in the Nonglandular Portion of the Stomach of Horses.&rdquo; <em>American Journal of Veterinary Research</em>, 2003; 64(4):404–412.</li>
            <li>Lybbert TC, Gibbs PG, Cohen ND, et al. &ldquo;Feeding Alfalfa Hay to Exercising Horses Reduces the Severity of Gastric Squamous Mucosal Ulceration.&rdquo; <em>Journal of Animal Science</em>, 2007.</li>
            <li>Nieto JE, Spier S, Pipers FS, et al. &ldquo;Comparison of Paste and Suspension Formulations of Omeprazole.&rdquo; <em>American Journal of Veterinary Research</em>, 2002; 63(11):1567–1573.</li>
            <li>Doucet MY, Bertone AL, Hendrickson D, et al. &ldquo;Comparison of Efficacy and Safety of Paste Formulations of Firocoxib and Phenylbutazone in Horses with Naturally Occurring Osteoarthritis.&rdquo; <em>Equine Veterinary Journal</em>, 2008.</li>
            <li>Tamzali Y, Marguet C, Priymenko N, Lyazrhi F. &ldquo;Prevalence of Gastric Ulcer Syndrome in High-Level Endurance Horses.&rdquo; <em>Equine Veterinary Journal</em>, 2011; 43(2):141–144.</li>
            <li>Nieto JE, Snyder JR, Vatistas NJ, Jones JH. &ldquo;Gastric Ulcers in Endurance Horses.&rdquo; <em>Journal of Veterinary Internal Medicine</em>, 2004; 18(4):524–527.</li>
            <li>Bush J, van den Boom R, Franklin S. &ldquo;Comparison of Aloe Vera and Omeprazole in the Treatment of Equine Gastric Ulcer Syndrome.&rdquo; <em>Equine Veterinary Journal</em>, 2018; 50(1):34–40.</li>
            <li>American Association of Equine Practitioners. &ldquo;Gastric Ulcers in Horses,&rdquo; client education resource. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
