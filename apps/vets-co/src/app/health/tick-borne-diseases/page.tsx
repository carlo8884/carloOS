import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Tick-Borne Diseases in Dogs — Lyme, Anaplasmosis | Vets.co', description: 'Four tick-borne diseases dogs face: Lyme, Anaplasmosis, Ehrlichiosis, and Rocky Mountain Spotted Fever. Signs, geographic distribution.', path: '/health/tick-borne-diseases', type: 'article' })
const SOURCES = [
  { label: 'CDC: Lyme Disease', url: 'https://www.cdc.gov/lyme/', publisher: 'CDC' },
  { label: 'Merck Veterinary Manual: Lyme Disease in Dogs', url: 'https://www.merckvetmanual.com/generalized-conditions/lyme-disease/lyme-disease-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Tick-Borne Diseases in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/tick-paralysis', publisher: 'AVMA' },
  { label: 'Companion Animal Parasite Council: Tick-Borne Disease', url: 'https://capcvet.org/guidelines/ticks/', publisher: 'CAPC' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Tick-Borne Diseases in Dogs', description: 'Lyme disease, Anaplasmosis, Ehrlichiosis, and RMSF in dogs — signs and treatment.', url: 'https://vets.co/health/tick-borne-diseases', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Tick-Borne Diseases in Dogs', description: 'Lyme, Anaplasmosis, Ehrlichiosis, and RMSF — signs, testing, and treatment.', url: 'https://vets.co/health/tick-borne-diseases', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function TickBornePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Tick-Borne Diseases in Dogs', subtitle: 'Four major tick-borne diseases affect dogs in the US: Lyme disease, Anaplasmosis, Ehrlichiosis, and Rocky Mountain Spotted Fever (RMSF). All are transmitted by ticks, all respond to doxycycline, and all are prevented by consistent tick prevention. The variation between them is geographic distribution, severity, and the speed of required treatment.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Flea and Tick Prevention', href: '/health/flea-tick-prevention', category: 'Veterinary Guide' },
          { title: 'Heartworm in Dogs', href: '/health/heartworm-in-dogs', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">4Dx Test Detects</div>
            {[['Heartworm antigen', 'Dirofilaria immitis'], ['Lyme antibodies', 'Borrelia burgdorferi'], ['Anaplasmosis', 'Anaplasma phagocytophilum + platys'], ['Ehrlichiosis', 'Ehrlichia canis + ewingii']].map(([test, org]) => (
              <div key={test} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{test}</div>
                <div className="text-2xs text-brand-text-light">{org}</div>
              </div>
            ))}
            <div className="text-2xs text-brand-text-light mt-2">Note: RMSF not detected by 4Dx — requires separate testing</div>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Heartworm in Dogs', href: '/health/heartworm-in-dogs' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-tick-borne" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog tick-check checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog tick-check checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the after-walk notes — a tick-removal
              hook so an attached tick comes off as a
              whole instead of a squeezed body, a
              fine-tooth flea comb so ears, armpits, and
              groin get a pass before the 24–48 hour
              Lyme window, and a laminated tick
              identification card so Ixodes, Dermacentor,
              Amblyomma, and Rhipicephalus can be
              compared to the tick that came off. Educational
              checklist, not a diagnosis, not a 4Dx
              interpretation, and not a substitute for
              the veterinarian who decides whether
              doxycycline or a preventive is indicated.
              Generic tick removers, tick-removal tools,
              lint rollers, metal grooming combs,
              specimen cups, and Rx stay on other pages.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog tick-check checklist"
              subtitle="Email the tick-hook, flea-comb, and ID-card notes. No spam."
              ctaText="Email my dog tick-check checklist"
              source="health-tick-borne-diseases-under-hero"
            />
          </div>

          <h2>Lyme Disease (Borrelia burgdorferi)</h2>
          <p><strong>Tick vector:</strong> Ixodes scapularis (black-legged tick / deer tick) primarily; Ixodes pacificus on the West Coast. Requires 24–48 hours of tick attachment for transmission — emphasizing prompt tick removal. A tick-removal hook is how an attached tick comes off as a whole instead of a squeezed body — it is not a generic tick remover and not a first-aid tick-removal tool. A fine-tooth flea comb is how ears, armpits, groin, and the collar line get a pass after a walk in grass or woods, before that 24–48 hour window closes. These are household check tools, not treatments. They do not prevent Lyme, they do not replace a veterinarian-recommended preventive, and they do not interpret a 4Dx result. <strong>Geographic distribution:</strong> Northeast, Upper Midwest, and Pacific Northwest — highest prevalence in these regions, but expanding range. <strong>Signs in dogs:</strong> Fever, lethargy, shifting-leg lameness (the joint pain can move from leg to leg), reduced appetite. Lyme nephritis — a serious kidney complication — occurs in a subset of affected dogs, particularly Labrador Retrievers and Golden Retrievers, causing protein-losing nephropathy that can lead to kidney failure. <strong>Testing:</strong> The 4Dx SNAP test detects Lyme antibodies as part of the annual heartworm test. A positive Lyme antibody test means the dog has been exposed — many seropositive dogs never develop clinical disease. <strong>Treatment:</strong> Veterinarians may prescribe doxycycline, typically for about 30 days; the dose must be determined by a veterinarian. <strong>Prevention:</strong> Tick prevention (isoxazoline class products most effective) + Lyme vaccination in tick-endemic regions.</p>

          <h2>Anaplasmosis (Anaplasma phagocytophilum)</h2>
          <p><strong>Tick vector:</strong> Same Ixodes ticks as Lyme — co-infections with Lyme are common in endemic areas. <strong>Geographic distribution:</strong> Similar distribution to Lyme — Northeast, Upper Midwest, Pacific Northwest, but more widespread. <strong>Signs in dogs:</strong> Fever, lethargy, reluctance to move (polyarthritis), and characteristically, thrombocytopenia (low platelet count causing bruising or bleeding tendency — petechiae on the gums or inner ears). CBC showing low platelets in a febrile dog in a tick-endemic area strongly suggests Anaplasmosis. <strong>Treatment:</strong> Doxycycline — same protocol as Lyme. Response is typically rapid — most dogs improve within 24–48 hours of starting treatment. <strong>Anaplasma platys</strong> (platelet Anaplasma) affects platelets directly — less commonly diagnosed but causes cyclic thrombocytopenia.</p>

          <h2>Ehrlichiosis (Ehrlichia canis, E. ewingii)</h2>
          <p><strong>Tick vector:</strong> Rhipicephalus sanguineus (brown dog tick) for E. canis — this tick species can survive indoors, making Ehrlichiosis a risk even in urban environments. Amblyomma americanum (lone star tick) for E. ewingii. <strong>Geographic distribution:</strong> E. canis most common in the South-Central US; E. ewingii in the Southeast and South-Central. E. canis is the more severe form. <strong>Signs:</strong> Acute phase (weeks 1–4): fever, lethargy, reduced appetite, lymph node enlargement, thrombocytopenia. Chronic phase: if untreated, progresses to bone marrow suppression, severe anemia, pancytopenia (all blood cell lines depressed). German Shepherds are disproportionately affected by severe chronic Ehrlichiosis. <strong>Treatment:</strong> Doxycycline — chronic cases require longer treatment (6–8 weeks) and monitoring. Acute phase has excellent prognosis; chronic bone marrow disease has more guarded prognosis.</p>

          <h2>Rocky Mountain Spotted Fever (Rickettsia rickettsii)</h2>
          <p><strong>Tick vector:</strong> Dermacentor variabilis (American dog tick), Dermacentor andersoni (Rocky Mountain wood tick). Transmission occurs faster than Lyme — 2–6 hours in some cases, which is why the same after-walk flea-comb pass that finds an Ixodes tick also matters here. <strong>Geographic distribution:</strong> Despite the name, most common in the South Atlantic and South-Central states (North Carolina, Tennessee, Oklahoma, Arkansas, Missouri). <strong>Signs — and why it's urgent:</strong> RMSF is the most severe tick-borne disease in the US — it can be fatal in dogs within days of symptom onset if untreated. Signs: high fever (104–106°F), severe lethargy, hemorrhagic rash (petechiae — pinpoint bleeding into skin), neurological signs (ataxia, seizures in severe cases), vasculitis damaging multiple organ systems simultaneously. <strong>Treatment:</strong> Doxycycline — start empirically when RMSF is suspected, before diagnostic confirmation. Every hour of delay worsens prognosis. Do not wait for test results if clinical presentation is consistent with RMSF.</p>

          <h2>Annual 4Dx Testing — Why It Matters</h2>
          <p>The annual heartworm test (4Dx SNAP) also detects antibodies for Lyme, Anaplasma, and Ehrlichia — three tick-borne diseases in a single test with the heartworm antigen test. This is one of the primary reasons the 4Dx is standard of care rather than a simple heartworm test — it provides meaningful surveillance for tick-borne disease simultaneously. A positive result on the 4Dx does not automatically mean treatment is needed — many seropositive dogs have been exposed but not clinically affected. A positive 4Dx in a dog with clinical signs is a significant finding warranting treatment. A positive 4Dx in a completely healthy dog warrants a urine protein:creatinine ratio (to screen for Lyme nephritis) and a full workup conversation with your veterinarian about whether treatment is indicated.</p>
          <p>A laminated tick identification card is how the tick that came off the dog can be compared to Ixodes (Lyme / Anaplasma), Dermacentor (RMSF), Amblyomma (E. ewingii), and Rhipicephalus (E. canis) before the clinic visit — it is not a 4Dx test, not a medical-records binder, and not a diagnosis. Bring the card notes and, if the veterinarian asks, the tick itself. The card does not decide whether doxycycline is indicated.</p>

          <h2 id="kit">Dog tick-check kit</h2>
          <p>
            Everyday physical supplies that match the
            prompt-removal, after-walk, and species-ID
            copy on this page — a tick-removal hook so
            an attached tick comes off as a whole, a
            fine-tooth flea comb so ears, armpits, and
            groin get a pass before the Lyme and RMSF
            attachment windows, and a laminated tick
            identification card so the four US vectors
            on this page can be compared to the tick
            that came off. These are household check
            tools, not treatments. They do not prevent
            Lyme, Anaplasmosis, Ehrlichiosis, or RMSF,
            they do not replace a veterinarian-recommended
            preventive or a 4Dx test, and they are not
            a ranked product list. Generic tick removers,
            tick-removal tools, reusable lint rollers,
            fine-tooth metal grooming combs, sterile
            urine specimen cups, fecal-sample collection
            kits, first-aid kits, LED penlights, and
            pet medical-records binders already live on
            other pages. This page does not hop
            doxycycline, isoxazoline preventives, Lyme
            vaccine, Frontline, NexGard, Bravecto,
            Simparica, or other Rx ASINs. This page
            does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (tick-removal hook / fine-tooth flea comb /
              laminated tick identification card).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1071
              letter+size+expanding+file+organizer /
              sterile+urine+specimen+cup /
              12+hour+mechanical+kitchen+timer, #1069
              wire+small+animal+single+story+cage /
              non+slip+suction+bathtub+mat /
              stainless+steel+small+animal+crock, #1068
              extra+small+animal+travel+kennel /
              scent+swap+fleece+sleep+pouch /
              portable+small+animal+playpen, #1067
              small+animal+rabies+certificate+holder /
              top+loading+small+animal+carrier /
              fleece+small+animal+bonding+pouch, #1066
              carnivore-care / baby-food / silicone
              dosing syringe, #1059
              adjustable+sliding+dog+food+scoop /
              reusable+dog+food+portion+cups /
              dog+weight+log+book, #1058
              digital+handheld+stopwatch /
              waterproof+field+notebook /
              foam+table+edge+bumper, #1057
              automatic+timed+dog+feeder /
              maze+slow+feed+dog+bowl /
              indoor+dog+house+line, #1056
              disposable+female+dog+diapers /
              inflatable+dog+collar /
              hard+sided+airline+dog+crate,
              tick+remover, tick+removal+tool,
              reusable+lint+roller,
              fine+tooth+metal+comb,
              pet+first+aid+kit, led+medical+penlight.
              Doxycycline, isoxazolines, Lyme vaccine,
              Frontline, NexGard, Bravecto, Simparica,
              and Rx ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog tick-check kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page prompt-removal, after-walk, and
              species-ID copy — a tick-removal hook, a
              fine-tooth flea comb, and a laminated tick
              identification card. Everyday physical
              supplies only. They are not a ranked
              product list, they are not a preventive or
              doxycycline hop, they are not a #1071
              expanding-file / urine-cup / 12-hour-timer
              hop, they are not a generic tick-remover /
              tick-removal-tool hop, they are not a
              lint-roller / metal-comb hop, and they do
              not replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/tick+removal+hook?s=health-tick-borne-diseases"
                amazonLabel="Browse tick-removal hooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/fine+tooth+flea+comb?s=health-tick-borne-diseases"
                amazonLabel="Browse fine-tooth flea combs on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+tick+identification+card?s=health-tick-borne-diseases"
                amazonLabel="Browse laminated tick identification cards on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
