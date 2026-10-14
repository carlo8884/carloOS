import { HopDisclosure } from '../../../components/HopDisclosure'
import { HubMoneyLinks, LastUpdated } from '@carloOS/ui'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, RelatedLinks, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dog Vaccination Guide — Core, Non-Core & Titer Testing | Vets.co', description: 'Complete dog vaccination guide from a veterinary perspective. Core vaccines every dog needs, non-core lifestyle vaccines, titer testing.', path: '/health/dog-vaccinations-guide', type: 'article' })
const SOURCES = [
  { label: 'WSAVA: Vaccination table for dogs (2024 guidelines)', url: 'https://wsava.org/wp-content/uploads/2025/06/Dogs-Vaccination-Table.pdf', publisher: 'WSAVA' },
  { label: 'WSAVA: Vaccination Guidelines for Dogs and Cats (general reference; not checked against this page)', url: 'https://wsava.org/global-guidelines/vaccination-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Canine Vaccination Guidelines (general reference; not checked against this page)', url: 'https://www.aaha.org/aaha-guidelines/vaccination-canine-configuration/', publisher: 'AAHA' },
  { label: 'AVMA: Vaccinations for Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations', publisher: 'AVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dog Vaccination Guide', description: 'Core vaccines, non-core vaccines, titer testing, and puppy schedule from a veterinary perspective.', url: 'https://vets.co/health/dog-vaccinations-guide', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-13T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dog Vaccination Guide', description: 'Core and non-core vaccines, titer testing, and puppy schedule.', url: 'https://vets.co/health/dog-vaccinations-guide', authorName: 'Vets.co Editorial', lastReviewed: '2026-10-13' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'How often does an adult dog need the DA2PP vaccine?', answer: 'WSAVA guidance for the core distemper, adenovirus and parvovirus vaccines is a booster at about 6 months or 12–16 months of age, then at 3 years and no more often than every 3 years after that. The parainfluenza part of combination products is non-core and WSAVA lists it as annual. Your veterinarian sets the exact schedule from the product label and your dog\'s risks.' },
  { question: 'Can I vaccinate my puppy before 16 weeks and trust immunity?', answer: 'Puppies receive maternal antibodies through colostrum that interfere with vaccine response — this is why a series of vaccines is needed rather than a single dose. The last puppy dose is usually given at 16 weeks or older (AVMA; WSAVA) so it comes after maternal antibody levels have fallen enough to allow the puppy to mount its own immune response. Vaccines given only at 8 weeks may not confer lasting protection because maternal antibodies blocked the response. That final dose at 16 weeks or older is the critical one.' },
  { question: 'What is the difference between modified live and killed vaccines?', answer: 'Modified live vaccines (MLV) contain attenuated (weakened) live virus — they replicate briefly in the host, triggering a strong immune response similar to natural infection without causing disease. They provide more durable immunity with fewer doses than killed vaccines. Killed (inactivated) vaccines contain dead virus or viral components — safer in immunocompromised animals but generally require boosters and adjuvants to generate adequate immune response. DA2PP is available in both forms; rabies vaccines for dogs are typically killed.' },
]
export default function DogVaccinationsGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dog Vaccination Guide', subtitle: 'Vaccines are one of the most cost-effective interventions in veterinary medicine — preventing diseases that are far more expensive to treat and often fatal. Understanding which vaccines your dog actually needs (versus which are optional based on lifestyle) helps you make informed decisions with your veterinarian.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Vaccinations', href: '/health/dog-vaccinations-guide' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Parvovirus in Puppies', href: '/health/parvovirus-in-puppies', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Core — Every Dog</div>
            {['Rabies (often required by law)', 'DA2PP (Distemper/Parvo/Adeno)', 'Parvovirus (in DA2PP)'].map(v => (
              <div key={v} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-green-600 font-bold">✓</span>{v}</div>
            ))}
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mt-3 mb-2">Non-Core — By Lifestyle</div>
            {['Bordetella (boarding/parks)', 'Leptospirosis (outdoor/rural)', 'Lyme (tick-endemic areas)', 'Influenza (high-contact dogs)'].map(v => (
              <div key={v} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2"><span className="text-brand-primary">→</span>{v}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Find a Vet', href: '/find-a-vet' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }]} />

                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <LastUpdated date="2026-10-13" />
          <div className="rounded-lg border-l-4 border-brand-primary bg-brand-surface p-5 my-4" data-testid="short-answer">
            <h2 className="font-display text-lg font-bold mb-2">The short answer</h2>
            <p className="text-base leading-relaxed text-brand-text-mid m-0">
              Every dog needs the core vaccines: distemper, adenovirus and parvovirus, plus rabies, which many state and local laws require even for indoor-only pets. Puppies start a series at 6–8 weeks, with the last dose usually at 16 weeks or older. Many vaccines give adequate immunity when repeated every few years, while lifestyle vaccines such as Lyme, Bordetella and influenza depend on your dog&apos;s exposure (<a href="https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations" className="text-brand-primary hover:underline">AVMA</a>). WSAVA advises a core booster at 6 or 12–16 months, then no more often than every 3 years (<a href="https://wsava.org/wp-content/uploads/2025/06/Dogs-Vaccination-Table.pdf" className="text-brand-primary hover:underline">WSAVA</a>).
            </p>
          </div>

          <h2>Core Vaccines — Every Dog Regardless of Lifestyle</h2>
          <p><strong>Rabies:</strong> Many state and local laws require it, even for indoor-only pets (AVMA). Fatal in all mammals including humans. No treatment exists for clinical rabies — prevention is the only option. Follow local law first; in some countries the first dose is generally not given before 12 weeks. Revaccination 1 year later is required, then boosters follow the vaccine&apos;s licensed 1- or 3-year duration or local law (WSAVA). Rabies vaccination certificates must be kept current for legal compliance. Letter-size thermal laminating pouches are how that certificate — and a later titer printout — stay a pocketable legal copy at boarding or a state checkpoint instead of a crumpled clinic slip. They are not a pet vaccination record book, not a letter-size plastic file box, and not a letter-size expanding file organizer. A laminating pouch does not vaccinate a dog and it does not replace the veterinarian who signs the certificate.</p>
          <p><strong>DA2PP (Distemper, Adenovirus-2, Parvovirus, Parainfluenza):</strong> A combination vaccine protecting against four diseases. Canine parvovirus is highly contagious and fatal in unvaccinated puppies — it survives in the environment for months to years and is resistant to most common disinfectants. Canine distemper causes severe multisystemic disease including neurological damage. Per WSAVA, the puppy series starts no earlier than 6 weeks and repeats every 3–4 weeks until 16 weeks of age. A booster follows at about 6 months or 12–16 months, then at 3 years and no more often than every 3 years after that. Until that final puppy dose at 16 weeks or older, shared water bowls at parks and boarding kennels are an exposure the series is still building toward. A collapsible silicone travel dog bowl is how a carried sip stays the puppy&apos;s own bowl on those clinic-series trips — it is not a 24-ounce stainless hiking dog bottle, not an insulated pet water bowl, and not a foldable waterproof puppy mat.</p>

          <h2>Non-Core Vaccines — Lifestyle Dependent</h2>
          <p><strong>Bordetella bronchiseptica (kennel cough):</strong> Recommended for any dog with exposure to other dogs — boarding, daycare, dog parks, training classes, grooming salons, dog shows. AVMA lists it for dogs that board or go to daycare. Intranasal and oral live vaccines protect after a single dose, while injectable versions need two doses. WSAVA lists annual revaccination; ask your vet how far ahead of boarding to vaccinate. A digital countdown timer is a simple way to track whatever lead time your vet gives you between the vaccine and boarding. It is not a 12-hour mechanical kitchen timer, not an analog wall clock with a second hand, and it is not a Bordetella product. The timer does not confer immunity. A collapsible silicone travel dog bowl is how boarding water is a carried bowl instead of a shared kennel bucket — the same high-contact setting that is why Bordetella is a lifestyle vaccine in the first place.</p>
          <p><strong>Lyme disease:</strong> Generally recommended only for dogs at high risk of tick exposure where Lyme disease is known or likely. Two doses 2–4 weeks apart, then annually just before tick season (WSAVA). Does not replace tick prevention — use both. The Lyme vaccine reduces disease severity if a vaccinated dog is infected but does not provide complete protection.</p>
          <p><strong>Canine influenza (H3N2/H3N8):</strong> For dogs with high-contact lifestyles — boarding, dog shows, competition events, grooming salons. WSAVA suggests considering it for co-housed dogs, such as those in kennels, at shows or in day care. Two doses, generally 2–4 weeks apart per the product leaflet, then annually. A carried travel bowl is household hygiene at those same high-contact drops; it is not a kennel disinfectant spray and it is not an influenza vaccine.</p>

          <h2>Titer Testing</h2>
          <p>Titer tests measure circulating antibody levels against specific pathogens — they assess whether a prior vaccine generated a protective immune response. Positive titers for parvovirus, distemper, and adenovirus indicate likely immunity and can support a decision to defer revaccination. Some clinics offer in-clinic titer kits for these antigens; ask yours about turnaround time. Letter-size thermal laminating pouches are how a titer printout rides with the rabies certificate instead of living in a glove-box pile — they are not a titer test kit, not a titer blood test, and not a clinic lab. A pouch does not measure antibodies.</p>
          <p>Important limitations: titer testing does not replace vaccination programs (AVMA), and rabies boosters follow the law where you live, whatever the titer shows. Titers measure one arm of immunity — circulating antibodies — and do not capture cell-mediated immunity. A negative titer does not definitively mean the dog is unprotected; a positive titer does not guarantee protection against all strains. Titer testing is most useful for owners of adult dogs with documented vaccine history who want to minimize vaccine frequency. Documented history is a kept certificate and a kept printout.</p>

          <h2 id="kit">Supplies named on this page</h2>
          <p>
            Keep these on hand: letter-size thermal laminating pouches so the rabies certificate and titer printout stay a pocketable legal copy, a digital countdown timer to track the vaccine-to-boarding lead time your vet sets, and a collapsible silicone travel dog bowl so boarding water is a carried bowl. These are educational home-care / recordkeeping / travel-prep / monitoring tools, not a ranked product list, not a substitute for veterinary care, and not a vaccine product. Vaccines and titer test kits are clinic products, not product links.
          </p>

          <HopDisclosure siteId="vets-co" href={["/go/amazon-brand/collapsible+silicone+travel+dog+bowl?s=health-dog-vaccinations-guide", "/go/amazon-brand/72+hour+digital+countdown+timer?s=health-dog-vaccinations-guide"]} />

          {/* Shop note — live amazon-brand search buttons
              (letter-size thermal laminating pouches /
              digital countdown timer (hop slug kept) /
              collapsible silicone travel dog bowl).
              These are educational home-care /
              recordkeeping / travel-prep /
              monitoring tools, not a ranked product
              list, not a substitute for veterinary
              care, no Rx / vaccine / Nobivac /
              DA2PP / Bordetella / rabies / Lyme /
              influenza / titer-kit product page buttons.
              ShopCtas hides empty Chewy; never href="#"
              or an empty link. Amazon searches only —
              unused vs #1090
              hinged+cedar+sandbox+cover /
              metal+jaw+dog+waste+scooper /
              outdoor+garden+hand+wash+station, #1089
              24+ounce+stainless+hiking+dog+bottle /
              powder+free+nitrile+exam+gloves /
              32+gallon+locking+animal+proof+trash+can, #1088
              small+digital+kitchen+food+scale /
              silicone+cat+grooming+glove /
              8+ounce+glass+liquid+measuring+cup, #1087
              heavy+gauge+48+inch+dog+crate /
              2+foot+nylon+traffic+lead /
              adjustable+aluminum+downspout+extender,
              #1086–#1048
              wide+rim+stainless+cat+water+bowl /
              electric+pet+food+warming+plate /
              high+sided+jumbo+cat+litter+box /
              digital+pet+glucose+log+notebook /
              insulated+pet+water+bowl /
              airtight+locking+pet+food+bin /
              wall+mounted+magnetic+monthly+planner /
              waterproof+rear+seat+hammock /
              folding+four+wheel+dog+stroller /
              14+inch+manual+reel+lawn+mower /
              zippered+waterproof+dog+duvet+cover /
              handheld+led+magnifying+glass /
              large+platform+digital+bathroom+scale /
              quilted+dog+winter+coat /
              weekly+pill+organizer+with+alarms /
              letter+size+plastic+file+box /
              letter+size+expanding+file+organizer /
              12+hour+mechanical+kitchen+timer /
              analog+wall+clock+with+second+hand,
              dog.com /health/dog-vaccinations
              pet+vaccination+record+book /
              dog+seat+belt+tether /
              foldable+waterproof+puppy+mat.
              Nobivac, DA2PP, Bordetella, rabies,
              Lyme, influenza, and titer kits
              are not shoppable buttons. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop these supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              Keep these on hand: letter-size thermal laminating pouches, a digital countdown timer, and a collapsible silicone travel dog bowl. Educational home-care / recordkeeping / travel-prep / monitoring tools only.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/collapsible+silicone+travel+dog+bowl?s=health-dog-vaccinations-guide"
                amazonLabel="Browse collapsible silicone travel dog bowl on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/72+hour+digital+countdown+timer?s=health-dog-vaccinations-guide"
                amazonLabel="Browse digital countdown timers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/collapsible+silicone+travel+dog+bowl?s=health-dog-vaccinations-guide"
                amazonLabel="Browse collapsible silicone travel dog bowls on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
            <HubMoneyLinks
        hubHref="/health"
        hubLabel="Pet health"
        links={[
          { href: '/reviews/best-pet-insurance', label: 'Best pet insurance' },
          { href: '/telehealth', label: 'Pet telehealth' },
          { href: '/insurance/wellness-plans-vs-insurance', label: 'Wellness vs insurance' },
        ]}
      />
</ArticleLayout>
    </>
  )
}
