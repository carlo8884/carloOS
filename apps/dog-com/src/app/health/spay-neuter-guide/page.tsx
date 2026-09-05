import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'AVMA: Spaying and Neutering — Policy and Owner Resources', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/spay-neuter-your-pet', publisher: 'AVMA' },
  { label: 'Torres de la Riva G et al. Neutering dogs: effects on joint disorders and cancers in Golden Retrievers. PLoS ONE. 2013;8(2):e55937.', publisher: 'PLoS ONE' },
  { label: 'AAHA: Canine Life Stage Guidelines — Spay/Neuter Timing Recommendations', url: 'https://www.aaha.org/aaha-guidelines/life-stage-canine-2019/life-stage-canine-home/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Reproductive System Overview — Spay and Neuter in Dogs', url: 'https://www.merckvetmanual.com/reproductive-system/small-animal-reproduction/overview-of-small-animal-reproduction', publisher: 'Merck Vet Manual' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'When to Spay or Neuter Your Dog — Timing by Breed | Dog.com', description: 'The science on spay/neuter timing has changed. Large breeds benefit from waiting until 12-24 months. Reference guide to timing, benefits, risks.', path: '/health/spay-neuter-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'When to Spay or Neuter Your Dog', description: 'Updated spay/neuter timing guidance by breed size — what the research shows.', url: 'https://dog.com/health/spay-neuter-guide', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const medSchema = buildMedicalWebPageSchema({ name: 'When to Spay or Neuter Your Dog', description: 'Spay/neuter timing by breed and size.', url: 'https://dog.com/health/spay-neuter-guide', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, medSchema)

const FAQS = [
  { question: 'Does early spay/neuter increase cancer risk?', answer: 'For certain large breeds, yes — research from UC Davis showed that Golden Retrievers neutered before 12 months had significantly higher rates of certain joint disorders and some cancers compared to those neutered later. The mechanism appears to involve sex hormones influencing the closure of bone growth plates and some immune functions. This is breed and size dependent — the effect is less clear in small breeds.' },
  { question: 'What about population control arguments for early spay/neuter?', answer: 'Population control is a genuine concern addressed through early spay/neuter programs in shelters. For owners with a personally-managed dog not at risk of unintended breeding, the timing can be made based on the individual dog\'s health interests. Both considerations are valid — the optimal timing depends on your specific situation.' },
  { question: 'What are alternatives to traditional spay/neuter?', answer: 'Ovary-sparing spay (removes uterus, leaves ovaries) preserves hormonal benefits while eliminating pregnancy and pyometra risk. Vasectomy in males preserves testosterone while eliminating reproduction. These are offered by some veterinary surgeons. Discuss with your vet if you are considering alternatives to traditional procedures.' },
]

export default function SpayNeuterGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'When to Spay or Neuter Your Dog', subtitle: 'The standard advice of spay/neuter at 6 months is being revised by research. For large and giant breeds especially, the timing has meaningful health implications. Here\'s what the current evidence shows.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Spay/Neuter Guide', href: '/health/spay-neuter-guide' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Vaccinations', href: '/health/dog-vaccinations', category: 'Dog Health' }, { title: 'German Shepherd Health', href: '/health/german-shepherd-health', category: 'Dog Health' }, { title: 'Labrador Health', href: '/health/labrador-health', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Timing by Size</div>
            {[['Small breeds (under 25 lbs)', '6 months — traditional timing appropriate'], ['Medium breeds (25-50 lbs)', '6-12 months — discuss with vet'], ['Large breeds (50-80 lbs)', '12-18 months'], ['Giant breeds (80+ lbs)', '18-24 months']].map(([k, v]) => (
              <div key={k} className="py-2.5 border-b border-brand-border last:border-0">
                <div className="text-2xs text-brand-text-light mb-0.5">{k}</div>
                <div className="text-xs font-bold text-brand-dark">{v}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Golden Retriever Health', href: '/health/golden-retriever-health' }, { label: 'Puppy Schedule', href: '/training/puppy-schedule' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-spay-neuter" />
        </>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the spay-neuter timing checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Spay-neuter timing checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the delayed-timing and surgery-day
              notes — disposable female dog diapers so
              the bloody phase of a heat cycle stays off
              furniture while a large-breed owner waits
              12–24 months, an inflatable dog collar so
              a midline spay or neuter incision stays
              out of reach after the procedure, and a
              hard-sided airline dog crate so drop-off
              and same-day pickup have a rigid carrier
              the clinic can load. Educational
              checklist, not a diagnosis, not a
              pyometra treatment, and not a substitute
              for the veterinary timing conversation.
              Washable heat pants, male belly bands,
              heavy-duty exercise pens, surgical
              recovery suits, soft recovery collars,
              soft recovery cones, and GPS collars stay
              on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="dog-com"
              title="Spay-neuter timing checklist"
              subtitle="Email the diaper, inflatable-collar, and airline-crate notes. No spam."
              ctaText="Email my spay-neuter timing checklist"
              source="health-spay-neuter-guide-under-hero"
            />
          </div>

          <h2>The Research That Changed Recommendations</h2>
          <p>A series of studies from UC Davis (Hart et al., 2014 and subsequent follow-up research) examined the relationship between spay/neuter timing and health outcomes in Golden Retrievers, Labrador Retrievers, German Shepherds, and other breeds. The findings showed that early gonadectomy (before 12 months) in large breeds was associated with significantly higher rates of certain joint disorders (hip dysplasia, cranial cruciate ligament rupture, elbow dysplasia) and some cancers compared to dogs neutered after 12 months or left intact.</p>
          <p>The mechanism: sex hormones (estrogen, testosterone) influence the closure of bone growth plates and play roles in some immune functions. Removing them before natural closure of growth plates changes skeletal development. This effect appears most pronounced in large and giant breeds where growth periods are longer.</p>
          <p>Importantly, these findings are breed and size-specific — the UC Davis research did not find the same pattern in all breeds, and small breed dogs did not show the same associations.</p>

          <h2>Current Recommendations by Breed Size</h2>
          <p><strong>Small breeds (under 25 lbs expected adult weight):</strong> Traditional timing (around 6 months) remains appropriate. The growth plate effect is less significant at smaller sizes and shorter growth periods. The population control and uterine health benefits (eliminating pyometra risk in females) support earlier timing.</p>
          <p><strong>Medium breeds (25–50 lbs):</strong> The evidence is less clear-cut. Most veterinarians recommend 6–12 months depending on the individual dog. Discuss with your vet.</p>
          <p><strong>Large breeds (50–80 lbs):</strong> Current evidence supports waiting until 12–18 months for males and females. This allows growth plates to close normally and sex hormone influence during the critical growth period. For females: the risk of pyometra (uterine infection — life-threatening if untreated) increases with each heat cycle, which must be weighed against the benefits of delayed surgery. Disposable female dog diapers are a household cover for the bloody phase of those heat cycles so furniture and bedding stay clean while you wait; they do not treat pyometra, they do not replace a veterinary exam if she is listless, drinking more, or has a vaginal discharge between heats, and they are not the washable heat pants used on the timing-guide page.</p>
          <p><strong>Giant breeds (80+ lbs):</strong> 18–24 months is the current recommendation from many veterinary internal medicine and orthopedic specialists. Breeds like Great Danes, Mastiffs, Saint Bernards, and Irish Wolfhounds have extended growth periods and the highest risk of the orthopedic conditions associated with early neutering. The same heat-cycle cover applies during that longer wait; it does not change the 18–24 month timing conversation.</p>

          <h2>Benefits of Spay/Neuter (All Sizes)</h2>
          <ul>
            <li><strong>Females:</strong> Eliminates pyometra risk (20–25% of intact females develop this life-threatening infection), reduces mammary tumor risk (significant reduction if done before first heat), prevents unwanted pregnancy, eliminates ovarian and uterine disease.</li>
            <li><strong>Males:</strong> Eliminates testicular cancer, reduces benign prostatic hyperplasia risk, may reduce perianal adenoma risk, reduces roaming and some testosterone-driven behaviors.</li>
            <li><strong>Both:</strong> Population control benefit.</li>
          </ul>

          <h2>The Conversation to Have With Your Vet</h2>
          <p>Bring your dog's expected adult weight and breed. Ask specifically about breed-specific research if yours is one of the studied breeds (Golden Retriever, Labrador, German Shepherd, Vizsla, Bernese Mountain Dog — all have published timing research). Ask about the prophylactic gastropexy (surgical stomach tacking that prevents GDV) option — this can be performed simultaneously with spay/neuter in predisposed breeds and changes the cost-benefit calculation for timing. A hard-sided airline dog crate is the rigid carrier many clinics want for drop-off and same-day pickup — it is not a recovery crate, a wire crate with a divider, or a soft-sided vet-visit carrier, and it does not replace the pre-anesthetic bloodwork the clinic orders. After the procedure, an inflatable dog collar keeps a midline spay or neuter incision out of the dog's reach while the skin closes; it is not a substitute for the cone or suit the surgeon sends home, it is not a surgical recovery suit, and it does not change whether the incision is healing.</p>

          <h2 id="kit">A Simple Spay-Neuter Timing Kit</h2>
          <p>
            Three everyday physical supplies match the
            delayed-timing and surgery-day copy above:
            disposable female dog diapers so the bloody
            phase of a heat cycle stays off furniture
            while a large- or giant-breed owner waits
            12–24 months, an inflatable dog collar so a
            midline spay or neuter incision stays out of
            reach after the procedure, and a hard-sided
            airline dog crate so drop-off and same-day
            pickup have a rigid carrier the clinic can
            load. These are household home-care tools,
            not treatments. They do not diagnose
            pyometra, they do not set spay or neuter
            timing, they do not replace the veterinary
            conversation about breed, expected adult
            weight, or prophylactic gastropexy, they do
            not replace the cone the surgeon sends home,
            and they are not a ranked product list.
            Washable dog heat pants, male dog belly
            bands, heavy-duty dog exercise pens, dog
            surgical recovery suits, non-slip dog socks,
            adjustable-height dog bowls, locking kitchen
            trash cans, walk-through pet gates, airtight
            dog-food storage containers, dog pill
            pockets, dry-erase monthly calendars, dog
            medical-alert collar tags, soft recovery
            collars, soft recovery cones, soft e-collars,
            pet recovery cones, GPS collars, Fi collars,
            wire crates with divider panels, soft-sided
            vet-visit carriers, and dog long-line
            leashes already live on other pages. This
            page does not hop medications. This page
            does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="dog-com" />

          {/* Money path — live amazon-brand search hops
              (disposable female dog diapers /
              inflatable dog collar / hard-sided
              airline dog crate). ShopCtas hides empty
              Chewy; never href="#" or PLACEHOLDER.
              Category searches only — unused vs #1055
              dog surgical recovery suit / non-slip dog
              socks / adjustable-height dog bowls, #1054
              locking kitchen trash can / walk-through
              pet gate / airtight dog-food storage
              container, #1053 dog pill pockets /
              dry-erase monthly calendar / dog
              medical-alert collar tag, #1041 washable
              dog heat pants / male dog belly band /
              heavy-duty dog exercise pen, and earlier
              soft-recovery-collar / cone / e-collar /
              pet-recovery-cone / GPS / Fi-collar /
              wire-crate / soft-sided-carrier /
              long-line hops. Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the spay-neuter timing kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page delayed-timing and surgery-day
              copy — disposable female dog diapers, an
              inflatable dog collar, and a hard-sided
              airline dog crate. Everyday physical
              supplies only. They are not a ranked
              product list, they are not a pyometra or
              hormone hop, they are not the #1055
              recovery-suit / non-slip-sock /
              adjustable-bowl hops, they are not the
              #1054 locking-trash / kitchen-gate /
              airtight-storage hops, they are not the
              #1053 pill-pocket / dry-erase-calendar /
              medical-alert-tag hops, they are not the
              #1041 heat-pants / belly-band /
              exercise-pen hops, they are not
              soft-recovery-collar, soft-recovery-cone,
              soft-e-collar, pet-recovery-cone, GPS,
              Fi-collar, wire-crate, soft-sided-carrier,
              or long-line hops, and they do not
              replace a veterinarian. Dog.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/disposable+female+dog+diapers?s=health-spay-neuter-guide"
                amazonLabel="Browse disposable female dog diapers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/inflatable+dog+collar?s=health-spay-neuter-guide"
                amazonLabel="Browse inflatable dog collars on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/hard+sided+airline+dog+crate?s=health-spay-neuter-guide"
                amazonLabel="Browse hard-sided airline dog crates on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
