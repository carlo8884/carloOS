import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Spay & Neuter — Benefits, Timing | Vets.co', description: 'Spay and neuter benefits, optimal timing, and why the answer is more nuanced for large breeds. Pyometra prevention, cancer risk reduction.', path: '/health/spay-neuter-benefits', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Spaying and Neutering Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/spaying-and-neutering', publisher: 'AVMA' },
  { label: 'Merck Veterinary Manual: Reproductive Physiology of Dogs', url: 'https://www.merckvetmanual.com/reproductive-system/reproductive-diseases-of-the-female-dog-and-cat/reproductive-physiology-of-the-dog', publisher: 'Merck Vet Manual' },
  { label: 'Hart BL et al. Front Vet Sci 2020 — Neutering and Health Outcomes', url: 'https://www.frontiersin.org/articles/10.3389/fvets.2020.00388/full', publisher: 'Frontiers in Veterinary Science' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Spay & Neuter Guide', description: 'Benefits, timing, and breed-specific considerations for spay and neuter in dogs.', url: 'https://vets.co/health/spay-neuter-benefits', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Spay & Neuter Guide for Dogs', description: 'Benefits, timing, and evidence for spay and neuter decisions.', url: 'https://vets.co/health/spay-neuter-benefits', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'Does neutering cause obesity in dogs?', answer: 'Neutering reduces resting metabolic rate by approximately 20-30%. Dogs on the same diet after neutering will gain weight unless portion is reduced. Neutering causes weight gain only if food intake is not adjusted — the surgery itself does not cause obesity. Reduce food by 20-25% after spay/neuter and monitor body condition monthly. An adjustable sliding dog-food scoop is how that 20–25% cut becomes a set mark instead of a guessed handful. Reusable dog-food portion cups keep the smaller daily ration pre-measured so every person in the house feeds the same amount. A dog weight-log book is where monthly body-condition notes go so the next clinic visit has a written trend instead of a remembered guess. These are household tools, not a weight-loss diet and not a substitute for veterinary guidance.' },
  { question: 'Does early spay/neuter stunt growth?', answer: 'Early spay/neuter removes the sex hormones that signal growth plate closure. The growth plates remain open longer, resulting in slightly taller dogs with longer limbs. This is generally not clinically significant in small breeds. For large breeds, earlier plate closure may have orthopedic benefits — which is one reason many orthopedic specialists recommend waiting until 12-18 months for large breeds.' },
  { question: 'Can I spay my dog while she is in heat?', answer: 'Spaying during estrus (heat) is more technically complex due to increased blood supply to the reproductive tract but is performed routinely. Most surgeons prefer to wait 8-12 weeks after the end of the heat cycle when possible. Emergency situations (pyometra, unwanted pregnancy) may require surgery regardless of cycle status.' },
]
export default function SpayNeuterPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Spay & Neuter — Benefits, Timing & Breed Considerations', subtitle: 'Spay and neuter are the most performed elective veterinary surgeries. The benefits for population control and individual health are well-established. The optimal timing — particularly for large breeds — has become more nuanced as newer research emerges on orthopedic and cancer outcomes.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Spay & Neuter', href: '/health/spay-neuter-benefits' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Weight Management', href: '/health/weight-management', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Key Benefits</div>
            {['Eliminates pyometra risk (females)', 'Eliminates testicular cancer (males)', 'Dramatically reduces mammary tumor risk', 'Reduces prostate disease risk', 'Eliminates unwanted pregnancy', 'May reduce roaming/marking behavior'].map(b => (
              <div key={b} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-green-600">✓</span>{b}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-spay-neuter" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog post-neuter calorie-cut checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog post-neuter calorie-cut checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the after-surgery portion notes — an
              adjustable sliding dog-food scoop so the
              20–25% cut is a set mark instead of a
              guessed handful, reusable dog-food portion
              cups so the smaller daily ration is
              pre-measured for everyone in the house,
              and a dog weight-log book so monthly body
              condition stays written down. Educational
              checklist, not a diagnosis, not a
              weight-loss diet, and not a substitute for
              the veterinary timing conversation.
              Kitchen gram scales, portion-control food
              scales, measuring cups, heat pants, belly
              bands, disposable diapers, inflatable
              collars, and airline crates stay on other
              pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog post-neuter calorie-cut checklist"
              subtitle="Email the scoop, portion-cup, and weight-log notes. No spam."
              ctaText="Email my dog post-neuter calorie-cut checklist"
              source="health-spay-neuter-benefits-under-hero"
            />
          </div>

          <h2>Benefits of Spaying (Females)</h2>
          <p><strong>Pyometra prevention:</strong> Pyometra — life-threatening uterine infection — affects approximately 25% of intact female dogs by age 10. It requires emergency surgery in most cases and carries significant mortality risk in older or ill dogs. Spaying eliminates this risk entirely.</p>
          <p><strong>Mammary tumor reduction:</strong> Spaying before the first heat is associated with very low subsequent mammary tumor risk in early observational work (Schneider et al., J Natl Cancer Inst 1969); later systematic reviews (Beauvais et al., J Small Anim Pract 2012) describe the evidence as weaker than the often-quoted ~99.5% figure but still consistent with meaningful risk reduction. After the third heat, the protective effect diminishes significantly. Mammary tumors are the most common tumors in intact female dogs, and approximately 50% are malignant. Early spay is the most effective prevention.</p>
          <p><strong>Eliminates estrus:</strong> Intact females cycle approximately every 6 months — attracting male dogs, vaginal bleeding, and behavioral changes. Spaying eliminates this entirely.</p>

          <h2>Benefits of Neutering (Males)</h2>
          <p><strong>Testicular cancer prevention:</strong> Neutering eliminates testicular cancer risk — testicular tumors are the second most common tumor in intact male dogs. Neutering before tumors develop removes the tissue at risk.</p>
          <p><strong>Prostate disease reduction:</strong> Benign prostatic hyperplasia (BPH) affects nearly all intact male dogs as they age — causing straining to defecate or urinate and discomfort. Neutering prevents BPH entirely and causes regression of existing BPH. Prostatic cancer risk, however, may be slightly increased by neutering (though prostatic cancer is rare in dogs overall).</p>
          <p><strong>Behavioral effects:</strong> Neutering reduces testosterone-driven behaviors: roaming (seeking females), marking (urine marking in the house), and inter-male aggression. Effects are most pronounced if neutered before these behaviors become strongly established habits. Aggression that is fear-based or dominance-related is not reliably improved by neutering.</p>

          <h2>Timing — The Evolving Evidence</h2>
          <p><strong>Small breeds:</strong> Traditional timing (6 months) remains appropriate. Sex hormone effects on orthopedic development and cancer risk are less significant in small breeds, and early spay/neuter's benefits (pyometra, mammary tumor prevention) are realized earlier.</p>
          <p><strong>Large and giant breeds (over 45 lbs):</strong> Research — particularly UC Davis studies on Golden Retrievers, Labrador Retrievers, and German Shepherds — has found associations between early neuter and increased incidence of certain joint disorders (hip dysplasia, cranial cruciate ligament disease) and some cancers (hemangiosarcoma, mast cell tumors, lymphoma) in these breeds. The hypothesis: sex hormones contribute to musculoskeletal development and immune regulation in ways that are more significant in large breeds.</p>
          <p>Current guidance for large breeds from many internal medicine and orthopedic specialists: consider waiting until 12–18 months for males (or considering alternatives such as vasectomy that preserve sex hormones while preventing reproduction); for females, the pyometra and mammary cancer risk reduction from early spay must be weighed against the orthopedic/cancer risk data. This is an evolving area — discuss with your veterinarian and consider a consultation with a board-certified internist or orthopedist for large breed dogs.</p>

          <p>After the procedure, the metabolic drop is the household job that sits beside the surgical aftercare the clinic already covers. An adjustable sliding dog-food scoop is how the 20–25% portion cut becomes a set mark instead of a guessed handful — it is not a kitchen measuring cup and not a gram scale. Reusable dog-food portion cups keep that smaller daily ration pre-measured so the cut survives a busy week and more than one person feeding. A dog weight-log book is where monthly body-condition notes go so the next clinic visit has a written trend. These are household tools, not treatments. They do not replace a veterinarian, they do not treat pyometra or mammary tumors, and they are not a ranked product list. Ask your veterinarian what the new daily portion should be for this dog.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <h2 id="kit">Post-neuter calorie-cut kit</h2>
          <p>
            Everyday physical supplies that match the
            after-surgery portion copy on this page —
            an adjustable sliding dog-food scoop so the
            20–25% cut is a set mark, reusable dog-food
            portion cups so the smaller daily ration is
            pre-measured for the whole household, and a
            dog weight-log book so monthly body
            condition stays written down. These are
            household tools, not treatments. They do
            not treat obesity, they do not replace a
            veterinarian or a weight-management plan,
            and they are not a ranked product list.
            Kitchen gram scales, portion-control food
            scales, digital pet food portion scales,
            kitchen measuring cups, heat pants, male
            belly bands, heavy-duty exercise pens,
            disposable female dog diapers, inflatable
            dog collars, hard-sided airline crates,
            surgical recovery suits, timed feeders,
            maze slow-feed bowls, and house-lines
            already live on other pages. This page
            does not hop medications. This page does
            not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (adjustable sliding dog-food scoop /
              reusable dog-food portion cups /
              dog weight-log book).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1058 digital+handheld+stopwatch /
              waterproof+field+notebook /
              foam+table+edge+bumper, #1057
              automatic+timed+dog+feeder /
              maze+slow+feed+dog+bowl /
              indoor+dog+house+line, #1056
              disposable+female+dog+diapers /
              inflatable+dog+collar /
              hard+sided+airline+dog+crate, #1041
              washable+dog+heat+pants /
              male+dog+belly+band /
              heavy+duty+dog+exercise+pen, and
              weight-management kitchen+gram+scale /
              portion+control+food+scale hops. Rx
              ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog post-neuter calorie-cut kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page after-surgery portion copy — an
              adjustable sliding dog-food scoop,
              reusable dog-food portion cups, and a dog
              weight-log book. Everyday physical
              supplies only. They are not a ranked
              product list, they are not a prescription
              or medication hop, they are not the #1058
              stopwatch / field-notebook / table-bumper
              hops, they are not the #1057 timed-feeder
              / maze-bowl / house-line hops, they are
              not the #1056 diaper / inflatable-collar /
              airline-crate hops, they are not the
              #1041 heat-pants / belly-band /
              exercise-pen hops, they are not kitchen
              gram-scale or portion-control food-scale
              hops, and they do not replace a
              veterinarian. Vets.co earns a commission
              on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/adjustable+sliding+dog+food+scoop?s=health-spay-neuter-benefits"
                amazonLabel="Browse adjustable sliding dog-food scoops on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/reusable+dog+food+portion+cups?s=health-spay-neuter-benefits"
                amazonLabel="Browse reusable dog-food portion cups on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dog+weight+log+book?s=health-spay-neuter-benefits"
                amazonLabel="Browse dog weight-log books on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
