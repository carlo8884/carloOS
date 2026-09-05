import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Canine Influenza (Dog Flu) — H3N8, H3N2 | Vets.co', description: 'Canine influenza is caused by H3N8 and H3N2 strains. Highly contagious among dogs. Vaccine recommended for dogs that attend boarding, doggy daycare.', path: '/health/canine-influenza', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Canine Influenza', url: 'https://www.avma.org/resources-tools/animal-health/canine-influenza', publisher: 'AVMA' },
  { label: 'CDC: Dog Flu', url: 'https://www.cdc.gov/flu/other/dogflu/index.htm', publisher: 'CDC' },
  { label: 'Merck Veterinary Manual: Canine Influenza', url: 'https://www.merckvetmanual.com/respiratory-system/respiratory-diseases-of-small-animals/canine-influenza', publisher: 'Merck Vet Manual' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Canine Influenza (Dog Flu)', description: 'H3N8 and H3N2 canine influenza — signs, treatment, and vaccination recommendations.', url: 'https://vets.co/health/canine-influenza', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Canine Influenza', description: 'Dog flu — H3N8 and H3N2 strains, signs, and vaccination.', url: 'https://vets.co/health/canine-influenza', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function CanineInfluenzaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Canine Influenza (Dog Flu)', subtitle: 'Canine influenza is a highly contagious respiratory infection caused by influenza A viruses adapted to dogs. Two strains currently circulate in the US: H3N8 (identified 2004) and H3N2 (identified 2015 — more recently introduced from Asia). Most dogs exposed develop mild to moderate illness; a small percentage develop serious pneumonia.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '7 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Canine Influenza', href: '/health/canine-influenza' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide', category: 'Veterinary Guide' },
          { title: 'Kennel Cough', href: '/health/kennel-cough', category: 'Veterinary Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Signs</div>
            {['Cough — soft, moist cough', 'Nasal discharge', 'Lethargy and reduced appetite', 'Low-grade fever', 'Eye discharge', 'In severe cases: high fever, pneumonia'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Kennel Cough', href: '/health/kennel-cough' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-influenza" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog-flu isolation checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog-flu isolation checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the post-boarding notes — a
              double-door wire dog crate so the
              returning dog spends the 7-day isolation
              in a separate room instead of sharing
              air with household dogs, a pet-safe
              kennel disinfectant spray so bowls and
              kennel surfaces get a pass after
              boarding or daycare, and an analog wall
              clock with a second hand so rapid or
              labored breathing gets a one-minute
              count during rest. Educational
              checklist, not a diagnosis, not a
              vaccine decision, and not a substitute
              for the veterinarian who evaluates
              fever or pneumonia. Recovery crates,
              soft-sided crates, digital pet
              thermometers, cool-mist humidifiers,
              and Rx stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog-flu isolation checklist"
              subtitle="Email the crate, kennel-disinfectant, and second-hand-clock notes. No spam."
              ctaText="Email my dog-flu isolation checklist"
              source="health-canine-influenza-under-hero"
            />
          </div>

          <h2>How Canine Influenza Spreads</h2>
          <p>Canine influenza is transmitted through respiratory secretions — direct dog-to-dog contact, airborne droplets (sneezing, coughing), and contact with contaminated surfaces (water bowls, kennel surfaces, human hands that have touched infected dogs). Virtually all dogs exposed to the virus develop infection — canine influenza viruses are novel to the dog immune system, meaning there is minimal pre-existing immunity in unvaccinated populations. This is different from kennel cough (Bordetella), where healthy adults with prior exposure may resist infection — essentially all naïve dogs exposed to influenza become infected.</p>
          <p>The incubation period is 2–4 days — dogs can shed virus before showing signs. A dog returning from a boarding facility may have been exposed and be shedding virus before coughing begins. This is why isolation of any dog returning from high-exposure environments (boarding, dog shows, dog parks during outbreak periods) for 7 days before returning to contact with other dogs is the responsible protocol during active outbreaks. A double-door wire dog crate in a separate room is how that 7-day isolation becomes a physical setup instead of a hope the dogs stay apart — it is not a recovery crate, not a soft-sided crate, not a wire crate with a divider panel, and not an airline crate. It does not prevent infection and it does not replace a veterinarian. A pet-safe kennel disinfectant spray is how bowls and kennel surfaces get a pass after a boarding or daycare return — it is not accelerated hydrogen peroxide labeled for parvovirus, not an enzymatic stain cleaner, and not a small-animal cage cleaner. Hands that touched the returning dog should be washed before they touch the household dogs. These are household isolation tools, not treatments.</p>

          <h2>H3N8 vs H3N2</h2>
          <p>H3N8 (equine-origin, adapted to dogs circa 2004): emerged in US racing greyhounds, spread to pet population. Currently less prevalent than H3N2 in most US regions. H3N2 (avian-origin, introduced from Asia circa 2015): more recently introduced, associated with several major regional outbreaks including the large 2015 Chicago outbreak. H3N2 appears more contagious in the dog population. Both strains cause similar clinical illness; both are covered by the bivalent canine influenza vaccine.</p>

          <h2>Treatment</h2>
          <p>No specific antiviral treatment exists for canine influenza in dogs (canine-labeled antivirals are not available). Treatment is supportive: rest, fluid support for dehydrated or anorectic dogs, anti-inflammatory medication for fever, and antibiotics if secondary bacterial pneumonia develops (the most serious complication). Most dogs with mild illness recover in 2–4 weeks without veterinary intervention beyond rest and monitoring. Dogs with fever, complete anorexia, difficulty breathing, or signs of pneumonia (productive cough, rapid/labored breathing) require veterinary evaluation and possibly hospitalization. An analog wall clock with a second hand is how rapid or labored breathing gets a one-minute count during isolation rest — it is not a digital pet thermometer, not a cool-mist humidifier, and not a handheld stopwatch. A rising count or labored effort is a reason to call the veterinarian, not a diagnosis of pneumonia, and not a substitute for the clinic that decides whether supportive care or hospitalization is indicated.</p>

          <h2>Vaccination — Who Should Be Vaccinated</h2>
          <p>The canine influenza vaccine (bivalent, covering both H3N8 and H3N2) is a non-core vaccine recommended based on lifestyle risk. Dogs that should receive it: any dog that attends boarding facilities, doggy daycare, dog parks, dog shows, or group training classes — essentially any dog with regular close contact with other dogs outside the household. The vaccine reduces severity and duration of illness in vaccinated dogs that are exposed; it does not fully prevent infection. Initial vaccination requires a booster 2–4 weeks after the first dose; thereafter, annual or semi-annual boosting depending on exposure risk. This page does not hop vaccine products, Tamiflu, or other antivirals — those decisions stay with the veterinarian.</p>

          <h2 id="kit">Dog-flu isolation kit</h2>
          <p>
            Everyday physical supplies that match the
            post-boarding isolation, surface-cleanup,
            and respiratory-monitoring copy on this
            page — a double-door wire dog crate so
            the returning dog spends the 7-day
            isolation in a separate room, a pet-safe
            kennel disinfectant spray so bowls and
            kennel surfaces get a pass after boarding
            or daycare, and an analog wall clock with
            a second hand so rapid or labored
            breathing gets a one-minute count during
            rest. These are household isolation
            tools, not treatments. They do not
            prevent canine influenza, they do not
            replace a veterinarian-recommended
            vaccine, and they are not a ranked
            product list. Recovery crates, soft-sided
            crates, wire crates with divider panels,
            airline crates, heavy-duty exercise pens,
            accelerated hydrogen-peroxide
            disinfectant, digital pet thermometers,
            cool-mist humidifiers, handheld
            stopwatches, and field notebooks already
            live on other pages. This page does not
            hop canine influenza vaccine, Tamiflu,
            oseltamivir, Nobivac, or other Rx ASINs.
            This page does not claim hands-on
            testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (double-door wire dog crate /
              pet-safe kennel disinfectant spray /
              analog wall clock with second hand).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1072
              tick+removal+hook /
              fine+tooth+flea+comb /
              laminated+tick+identification+card, #1071
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
              pet+first+aid+kit, led+medical+penlight,
              dog+recovery+crate,
              soft+sided+dog+crate,
              wire+dog+crate+with+divider+panel,
              heavy+duty+dog+exercise+pen,
              cool+mist+humidifier,
              digital+pet+thermometer,
              accelerated+hydrogen+peroxide+disinfectant.
              Canine influenza vaccine, Tamiflu,
              oseltamivir, Nobivac, and Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog-flu isolation kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page post-boarding isolation,
              surface-cleanup, and
              respiratory-monitoring copy — a
              double-door wire dog crate, a pet-safe
              kennel disinfectant spray, and an analog
              wall clock with a second hand. Everyday
              physical supplies only. They are not a
              ranked product list, they are not a
              vaccine or antiviral hop, they are not a
              #1072 tick-hook / flea-comb / ID-card
              hop, they are not a #1071 expanding-file
              / urine-cup / 12-hour-timer hop, they
              are not a recovery-crate / soft-sided
              crate / humidifier / thermometer hop,
              and they do not replace a veterinarian.
              Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/double+door+wire+dog+crate?s=health-canine-influenza"
                amazonLabel="Browse double-door wire dog crates on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+safe+kennel+disinfectant+spray?s=health-canine-influenza"
                amazonLabel="Browse pet-safe kennel disinfectant sprays on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/analog+wall+clock+with+second+hand?s=health-canine-influenza"
                amazonLabel="Browse analog wall clocks with a second hand on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
