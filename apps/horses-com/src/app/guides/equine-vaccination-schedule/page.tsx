import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, CrossPortfolioCard, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Vaccination Schedule — AAEP Core &amp; Risk-Based Vaccines',
  description:
    'AAEP-aligned vaccination schedule for horses. Core vaccines (tetanus, EEE/WEE, West Nile, rabies) and risk-based vaccines by life stage and discipline.',
  path: '/guides/equine-vaccination-schedule',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Equine Vaccination Schedule — AAEP Guidelines',
  description:
    'Vaccination protocols for adult horses, foals, broodmares, performance horses, and seniors — aligned with current AAEP vaccination guidelines.',
  url: 'https://horses.com/guides/equine-vaccination-schedule',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Equine Vaccination Schedule',
  description:
    'AAEP core and risk-based equine vaccines, scheduling by life stage, and rationale for each.',
  url: 'https://horses.com/guides/equine-vaccination-schedule',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-05-28',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: 'What are the AAEP "core" equine vaccines?',
    answer:
      'The AAEP designates five vaccines as "core" for all horses regardless of use or geographic location: tetanus, Eastern equine encephalomyelitis (EEE), Western equine encephalomyelitis (WEE), West Nile virus, and rabies. These are recommended for every horse because the diseases they prevent are widespread, have very high case-fatality rates, and pose human health risks (rabies, EEE) or unacceptable economic and welfare consequences (tetanus, West Nile). Core vaccines are typically administered annually, often as combination products.',
    answerText:
      'The AAEP core vaccines are tetanus, EEE, WEE, West Nile virus, and rabies. They are recommended for every horse regardless of use or location because the diseases have high case-fatality rates and pose human-health or unacceptable welfare consequences. Administered annually.',
  },
  {
    question: 'What are "risk-based" vaccines?',
    answer:
      'Risk-based vaccines are recommended based on the individual horse&apos;s exposure risk, geographic location, age, and use. The major risk-based vaccines are equine influenza, equine herpesvirus (EHV-1 and EHV-4), strangles, Potomac horse fever (PHF), botulism, rotavirus, anthrax, leptospirosis, and (in some regions) Venezuelan equine encephalomyelitis. The decision to vaccinate against each is made with your veterinarian based on the horse&apos;s exposure pattern.',
    answerText:
      'Risk-based vaccines are recommended based on exposure risk, geography, age, and use. Major risk-based vaccines include flu, EHV-1/EHV-4, strangles, Potomac horse fever, botulism, rotavirus, anthrax, and leptospirosis.',
  },
  {
    question: 'How often does a horse need a tetanus booster?',
    answer:
      'Annual boosters are standard for adult horses with up-to-date core vaccinations. If a horse sustains a deep puncture wound or surgical incision and is more than 6 months past the most recent tetanus booster, AAEP guidelines recommend an additional booster as soon as possible after injury. Foals and previously-unvaccinated horses need an initial primary series of two doses 4-6 weeks apart, then annual boosters.',
    answerText:
      'Annual boosters are standard for adult horses. After a deep puncture wound or surgery, if the horse is more than 6 months past the last tetanus shot, an additional booster is recommended. Foals need a two-dose primary series 4-6 weeks apart.',
  },
  {
    question: 'When do foals start their vaccines?',
    answer:
      'Foals from vaccinated mares typically begin their primary vaccination series at 4-6 months of age, when maternal antibody (from colostrum) has waned enough to allow the foal&apos;s immune system to respond. Foals from unvaccinated or unknown-status mares begin earlier (3-4 months) but require additional doses. Each core vaccine requires a primary series of 2-3 doses, 4-6 weeks apart, followed by annual boosters. The exact schedule for each vaccine is detailed in the AAEP "Vaccination Guidelines for Foals."',
    answerText:
      'Foals from vaccinated mares typically begin at 4-6 months of age, with primary series of 2-3 doses 4-6 weeks apart. Foals from unvaccinated mares start earlier. Annual boosters follow.',
  },
  {
    question: 'Do broodmares need extra vaccines?',
    answer:
      'Yes. Broodmares receive their routine core and risk-based vaccinations 4-6 weeks before foaling to boost colostral antibody concentrations for the foal. Additional vaccines specifically recommended for pregnant mares include EHV-1 (Pneumabort or Prodigy at 5, 7, and 9 months of gestation to reduce abortion risk), rotavirus (8, 9, and 10 months of gestation to provide colostral antibody for foal diarrhea prevention), and botulism Type B (in endemic regions, three doses during pregnancy). Inactivated vaccines are used in pregnancy; modified-live vaccines are generally contraindicated.',
    answerText:
      'Yes. Broodmares get routine vaccines 4-6 weeks pre-foaling to boost colostrum. Additional pregnancy-specific vaccines include EHV-1 at 5/7/9 months for abortion prevention, rotavirus at 8/9/10 months, and botulism Type B in endemic regions. Inactivated vaccines only.',
  },
  {
    question: 'Why do performance horses get flu and herpes boosters twice a year?',
    answer:
      'Horses competing under USEF or FEI rules must comply with vaccination requirements that exceed the once-yearly schedule. Current USEF rules require equine influenza and EHV-1/EHV-4 boosters within 6 months prior to entering competition grounds. Horses traveling, mixing with strange horses, and stressed by competition are at substantially higher infection risk than horses kept on a closed farm, and the antibody decline curve for flu and EHV makes twice-yearly boosters defensible regardless of competition requirements.',
    answerText:
      'USEF and FEI require flu and EHV-1/EHV-4 boosters within 6 months of competition. The antibody decline curve for these diseases makes biannual boosters appropriate for competition horses regardless of regulatory requirements.',
  },
  {
    question: 'Are there side effects to vaccinations?',
    answer:
      'Common short-term reactions include injection-site swelling and soreness (most horses, 1-3 days), mild fever (10-20 percent of vaccinations), and transient inappetence or lethargy. Serious adverse events are uncommon — anaphylaxis is rare but documented, and certain vaccines (notably some strangles vaccines) have higher reaction rates than others. Vaccine reactions should be reported to your veterinarian and to the vaccine manufacturer&apos;s adverse-event line. The benefit-risk balance overwhelmingly favors core vaccination — the diseases prevented have far higher mortality than the vaccines have adverse events.',
    answerText:
      'Common short-term reactions include injection-site soreness, mild fever, and lethargy lasting 1-3 days. Serious events including anaphylaxis are rare. The benefit-risk balance strongly favors core vaccination.',
  },
]

export default function VaccinationSchedulePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        relatedLinks={[
          { title: 'Guides Hub', href: '/guides', category: 'Guides' },
          { title: 'Equine Dental Care', href: '/guides/equine-dental-care' },
          { title: 'Deworming Program', href: '/care/deworming-program' },
          { title: 'Equine Health Hub', href: '/health' },
        ]}
        hero={{
          title: 'Equine Vaccination Schedule',
          subtitle:
            'A practical, AAEP-aligned vaccination schedule for horses across life stages and disciplines. The framework that follows divides equine vaccines into AAEP-designated "core" vaccines (recommended for every horse) and "risk-based" vaccines (recommended based on individual exposure, geography, and use). Specific scheduling, primary-series requirements, and adjuncts for foals, broodmares, performance horses, and seniors are summarized — and as with all medical content here, this is reference material to discuss with your veterinarian, not a substitute for a tailored individual plan.',
          category: 'Equine Health',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '17 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Vaccination Schedule', href: '/guides/equine-vaccination-schedule' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'Core vs Risk-Based', href: '#core-vs-risk' },
            { label: 'Core Vaccines', href: '#core' },
            { label: 'Risk-Based Vaccines', href: '#risk-based' },
            { label: 'Schedule by Life Stage', href: '#life-stage' },
            { label: 'Schedule by Discipline', href: '#discipline' },
            { label: 'Vaccine Reactions', href: '#reactions' },
            { label: 'Cost &amp; Logistics', href: '#cost' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Veterinary Disclaimer</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Vaccination decisions should be made with your veterinarian based on your horse&apos;s individual risk profile and local disease ecology. This article summarizes AAEP vaccination guidelines as a reference; your local AAEP-member veterinarian is the authoritative source for your horse&apos;s schedule.
            </p>
          </div>
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Equine Colic', href: '/health/colic' },
              { label: 'Equine Gastric Ulcers', href: '/health/equine-ulcers' },
              { label: 'Equine Dental Care', href: '/guides/equine-dental-care' },
              { label: 'First-Horse Roadmap', href: '/first-horse-roadmap' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="guide" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine health articles."
            source="guide-vaccination"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-05-28"
            reviewedBy="Editorial team"
          />

          <h2 id="core-vs-risk">Core vs Risk-Based — The AAEP Framework</h2>
          <p>The American Association of Equine Practitioners (AAEP) classifies equine vaccines into two categories. <strong>Core vaccines</strong> are those that protect against diseases that are endemic to a region, virulent or highly infectious, of significant public health concern, or required by law — and are recommended for every horse regardless of geographic location or intended use. <strong>Risk-based vaccines</strong> are those whose use is determined by individual horse risk based on exposure pattern, age, geographic location, and use.</p>

          <p>The current AAEP core vaccines are tetanus, Eastern equine encephalomyelitis (EEE), Western equine encephalomyelitis (WEE), West Nile virus, and rabies. The risk-based panel includes equine influenza, equine herpesvirus (EHV-1 and EHV-4), strangles, Potomac horse fever (PHF), botulism, rotavirus, anthrax, leptospirosis, and (in endemic regions) Venezuelan equine encephalomyelitis. The AAEP &ldquo;Vaccination Guidelines for Adult Horses,&rdquo; &ldquo;Vaccination Guidelines for Foals,&rdquo; and &ldquo;Vaccination Guidelines for Broodmares&rdquo; are the authoritative sources, available at aaep.org.</p>

          <h2 id="core">Core Vaccines</h2>

          <h3>Tetanus (Clostridium tetani)</h3>
          <p>Tetanus is caused by a neurotoxin produced by <em>Clostridium tetani</em>, a spore-forming anaerobe present in soil and equine intestinal flora. Horses are exquisitely sensitive to tetanus — the disease is nearly always fatal once clinical signs (muscle rigidity, third eyelid prolapse, sawhorse stance, inability to open the jaw) develop. Entry is through any wound, particularly deep puncture wounds, hoof punctures, and surgical sites. <strong>Schedule:</strong> primary series of two doses 4–6 weeks apart, then annual boosters. Additional booster recommended if a horse sustains a deep wound or undergoes surgery more than 6 months after the last tetanus dose. Available as monovalent tetanus toxoid or in combination with EEE/WEE/WNV (the standard combination product).</p>

          <h3>Eastern Equine Encephalomyelitis (EEE)</h3>
          <p>A mosquito-transmitted arbovirus causing acute viral encephalitis. EEE is one of the most lethal equine diseases — case fatality rate approaches 90 percent in unvaccinated horses that develop clinical disease. The virus is endemic in the eastern and southeastern US and parts of Canada and Central/South America. Vaccination is highly protective and is part of the standard core combination (typically tetanus + EEE + WEE + WNV). <strong>Schedule:</strong> primary series of two doses 4–6 weeks apart, annual booster timed before mosquito season (spring), and in heavy-pressure regions some practitioners give a second booster mid-season.</p>

          <h3>Western Equine Encephalomyelitis (WEE)</h3>
          <p>A mosquito-transmitted alphavirus closely related to EEE, with similar clinical presentation but a lower case-fatality rate (approximately 50 percent in unvaccinated clinical cases). Endemic west of the Mississippi River, in Canada, and in Mexico. Vaccinated with EEE in the standard core combination. <strong>Schedule:</strong> same as EEE — primary series of two doses 4–6 weeks apart, annual spring booster.</p>

          <h3>West Nile Virus (WNV)</h3>
          <p>A mosquito-transmitted flavivirus that emerged in North America in 1999 and has become endemic throughout the continent. Clinical signs include ataxia, muscle tremors, weakness, hyperaesthesia, behavior changes, and recumbency. Case fatality rate is approximately 30 percent in unvaccinated clinical cases. Vaccination is highly effective and is now standard in the core combination product. <strong>Schedule:</strong> primary series of two doses 4–6 weeks apart, annual booster timed for spring before mosquito season. In southern climates with year-round mosquito activity, some practitioners recommend twice-yearly boosters.</p>

          <h3>Rabies</h3>
          <p>A rhabdovirus transmitted by bite from a rabid mammal. Rabies in horses is uniformly fatal once clinical signs develop and is a serious public-health concern — a rabid horse can transmit the virus to humans. AAEP added rabies to the core vaccine list in 2008. The vaccine is highly effective; single-dose annual administration provides excellent protection in adult horses. <strong>Schedule:</strong> single annual dose in adult horses with previous vaccination; primary series of one dose (with manufacturer recommendations for a possible second dose at 4–6 weeks) in previously-unvaccinated adults; foals begin at 6 months of age.</p>

          <h2 id="risk-based">Risk-Based Vaccines</h2>

          <h3>Equine Influenza</h3>
          <p>Highly contagious respiratory disease caused by influenza A H3N8. Spread by aerosolized respiratory secretions; outbreaks travel rapidly through training barns, show grounds, and stables with frequent horse turnover. Clinical signs include fever, harsh dry cough, nasal discharge, and lethargy. The disease is rarely fatal in healthy adult horses but produces significant performance loss and barn-wide economic impact during outbreaks. <strong>Schedule:</strong> recommended for any horse in contact with other horses, particularly competition horses, training barns, lesson programs, and breeding operations. Inactivated vaccine: primary series of two doses 4–6 weeks apart, then twice-yearly boosters for at-risk horses (USEF and FEI rules require boosters within 6 months of competition). Modified-live intranasal vaccine: single dose primary, then annual.</p>

          <h3>Equine Herpesvirus (EHV-1 and EHV-4)</h3>
          <p>Two related herpesviruses cause distinct clinical syndromes. <strong>EHV-4</strong> causes respiratory disease (rhinopneumonitis) primarily in young horses. <strong>EHV-1</strong> causes respiratory disease, abortion in mares, and equine herpesvirus myeloencephalopathy (EHM) — a neurological form that has caused significant outbreaks in competition populations in recent years. Vaccines available cover EHV-1 and EHV-4 (most products combined). <strong>Schedule:</strong> primary series of two doses 4–6 weeks apart, then biannual boosters for at-risk horses. Pregnant mares receive a specific EHV-1 inactivated vaccine (Pneumabort-K, Prodigy) at 5, 7, and 9 months of gestation to reduce abortion risk. Note: currently licensed EHV vaccines reduce respiratory disease and (in mares) abortion, but evidence for protection against the neurologic EHM form is limited — vaccination is not a substitute for biosecurity during outbreaks.</p>

          <h3>Strangles (Streptococcus equi subsp. equi)</h3>
          <p>Highly contagious bacterial respiratory disease causing fever, mucopurulent nasal discharge, and abscessation of submandibular and retropharyngeal lymph nodes. Outbreaks are common in stables with horses of unknown origin. Vaccines: a killed intramuscular vaccine (StrepGuard, Strepvax II) and a modified-live intranasal vaccine (Pinnacle I.N.). Both reduce severity and duration of disease; neither provides sterilizing immunity. <strong>Schedule:</strong> primary series followed by annual or biannual boosters for at-risk horses. Vaccine reactions (injection-site abscesses, occasional purpura hemorrhagica) are more common with strangles vaccines than with most other equine vaccines — vaccinate only horses that have not had recent natural exposure and discuss the decision carefully with your veterinarian. Many practitioners now use targeted vaccination (e.g., new arrivals, outbreak management) rather than blanket annual vaccination.</p>

          <h3>Potomac Horse Fever (PHF — Neorickettsia risticii)</h3>
          <p>An intracellular bacterial disease transmitted via accidental ingestion of infected aquatic insects (caddisflies, mayflies). Endemic along major river systems in the eastern US, the Midwest, and parts of the West. Clinical signs include high fever, diarrhea, colic, and laminitis. Vaccines available; protection is partial (limited to the vaccine strain) and limited in duration. <strong>Schedule:</strong> recommended for horses in endemic regions, with primary series of two doses 4–6 weeks apart and biannual boosters during the active mosquito/aquatic-insect season. The vaccine does not eliminate risk — endemic-region management also requires reducing pasture/turnout near water and using stall fans/screens.</p>

          <h3>Botulism (Clostridium botulinum)</h3>
          <p>A neurotoxin-mediated disease causing flaccid paralysis. Risk factors include access to spoiled forage, hay or silage with animal carcass contamination, and (in foals) "shaker foal syndrome" caused by Type B toxin in endemic regions (mid-Atlantic, particularly Kentucky). Type B botulism toxoid vaccine is available and is recommended for broodmares and foals in endemic regions, and for any horses being fed silage or haylage. <strong>Schedule:</strong> primary series of three doses 4 weeks apart, then annual boosters. Broodmares: primary series given during pregnancy, with the last dose 4–6 weeks pre-foaling for colostral antibody.</p>

          <h3>Rotavirus</h3>
          <p>Common cause of severe foal diarrhea in the first weeks of life. Vaccine is for pregnant mares only (not for foals directly) to provide colostral antibody protection. <strong>Schedule:</strong> three doses at 8, 9, and 10 months of gestation. Recommended for broodmares on operations with previous rotavirus outbreaks.</p>

          <h3>Anthrax (Bacillus anthracis)</h3>
          <p>Soil-borne bacterial disease, rare but devastating. Recommended in known endemic regions only (parts of the western and southwestern US, with periodic outbreaks). <strong>Schedule:</strong> per regional veterinary recommendation.</p>

          <h3>Leptospirosis</h3>
          <p>An emerging recommendation. Leptospira interrogans causes uveitis (recurrent equine uveitis is a leading cause of equine blindness) and is associated with abortion and acute renal failure. A leptospirosis vaccine has been licensed for horses in recent years. <strong>Schedule:</strong> per AAEP risk-based guidance; recommended in endemic regions and for horses with wildlife (deer, raccoon) exposure.</p>

          <h2 id="life-stage">Schedule by Life Stage</h2>

          <h3>Foals (from vaccinated mares)</h3>
          <ul>
            <li><strong>4–6 months:</strong> begin core vaccine primary series (EEE/WEE/WNV/tetanus combination). Some practitioners begin at 6 months in regions with strong colostral antibody coverage.</li>
            <li><strong>6 months:</strong> rabies (first dose).</li>
            <li><strong>5–6 months and 6–7 months:</strong> second and third doses of core combination (3-dose primary series for foals).</li>
            <li><strong>6–7 months:</strong> EHV-1/EHV-4 primary series begins for at-risk foals.</li>
            <li><strong>9–12 months:</strong> influenza primary series begins for at-risk foals.</li>
            <li><strong>12 months:</strong> first annual booster of complete core combination.</li>
          </ul>

          <h3>Foals (from unvaccinated or unknown-status mares)</h3>
          <p>Begin core series earlier (3–4 months) and use a three-dose primary protocol; consult your veterinarian for a specific schedule.</p>

          <h3>Adult horses (low-exposure, closed farm)</h3>
          <ul>
            <li><strong>Annual:</strong> core combination (EEE/WEE/WNV/tetanus), rabies. Timed for spring before mosquito season.</li>
            <li><strong>Risk-based:</strong> add flu/EHV if any external exposure (boarding, hauling, lessons, breeding).</li>
          </ul>

          <h3>Adult horses (competition, frequent travel)</h3>
          <ul>
            <li><strong>Spring:</strong> core combination, rabies.</li>
            <li><strong>Spring:</strong> flu/EHV combination (or per show-circuit timing).</li>
            <li><strong>Fall (6 months later):</strong> flu/EHV booster — required for USEF/FEI competition.</li>
            <li><strong>As needed:</strong> strangles vaccine if entering new high-mix environments.</li>
            <li><strong>Regional:</strong> PHF in endemic regions (twice-yearly during insect season).</li>
          </ul>

          <h3>Broodmares</h3>
          <ul>
            <li><strong>4–6 weeks pre-foaling:</strong> routine core combination + rabies (boosts colostral antibody).</li>
            <li><strong>5, 7, 9 months gestation:</strong> EHV-1 (Pneumabort-K or Prodigy) for abortion prevention.</li>
            <li><strong>8, 9, 10 months gestation:</strong> rotavirus (if endemic on the operation).</li>
            <li><strong>10, 11 months gestation:</strong> botulism Type B (if in endemic region).</li>
            <li><strong>Use inactivated vaccines only during pregnancy — modified-live vaccines are generally contraindicated.</strong></li>
          </ul>

          <h3>Senior horses (15+ years)</h3>
          <p>Continue annual core vaccinations. Antibody response to vaccination declines modestly with age, but vaccination remains highly protective. Some practitioners recommend more attention to flu/EHV boosters in senior horses with concurrent immunosuppressive conditions (PPID/Cushing&apos;s disease, severe equine asthma on chronic corticosteroids). See your veterinarian for a senior-specific plan.</p>

          <h2 id="discipline">Schedule by Discipline</h2>

          <h3>Pasture-only pleasure horse, closed farm</h3>
          <p>Minimum: core vaccines annually. Add flu/EHV if any boarding or hauling.</p>

          <h3>Lesson barn horse</h3>
          <p>Core annually; flu/EHV biannually; strangles vaccination considered (high horse turnover and contact with horses of unknown vaccination status).</p>

          <h3>Performance horse — USEF / FEI competition</h3>
          <p>Core annually; flu/EHV biannually (required within 6 months of competition under USEF rules); regional risk-based vaccines (PHF, strangles) per veterinary recommendation. Maintain vaccination records on the FEI passport / USEF Drugs and Medications record.</p>

          <h3>Breeding operation</h3>
          <p>Core annually for all horses; risk-based vaccines as above for adults; specific broodmare protocol as detailed; specific foal protocol as detailed.</p>

          <h3>Racing barn (Thoroughbred / Standardbred)</h3>
          <p>Core annually; flu/EHV every 4–6 months due to constant horse turnover and travel; track-mandated vaccinations per individual racing jurisdiction.</p>

          <h2 id="reactions">Vaccine Reactions</h2>
          <p>Most vaccinated horses experience no significant adverse effects. When reactions do occur, they fall into a predictable spectrum:</p>

          <h3>Common (mild, self-limiting)</h3>
          <ul>
            <li>Injection-site swelling and soreness for 1–3 days. Common; the most common reaction overall.</li>
            <li>Mild fever (102–103°F) for 12–24 hours. Reported in approximately 10–20 percent of vaccinations.</li>
            <li>Lethargy and reduced appetite for 12–24 hours.</li>
            <li>Mild stiffness or muscle soreness — particularly with multi-vaccine sessions.</li>
          </ul>

          <h3>Less common (more significant local reactions)</h3>
          <ul>
            <li>Injection-site abscess — particularly with strangles vaccines. Requires drainage in some cases.</li>
            <li>Prolonged injection-site swelling or muscle soreness lasting &gt;3 days.</li>
          </ul>

          <h3>Rare (serious systemic)</h3>
          <ul>
            <li>Anaphylaxis — rare but documented. Signs include sudden onset of urticaria (hives), respiratory distress, or collapse within minutes of injection. Requires immediate veterinary intervention with epinephrine, corticosteroids, and supportive care.</li>
            <li>Purpura hemorrhagica — an immune-mediated vasculitis that can follow strangles vaccination (and natural strangles infection). Presents 1–6 weeks post-vaccination with edema, petechial hemorrhages, and severe lethargy. Treatment with corticosteroids and supportive care.</li>
            <li>Severe colic — uncommon but reported with some vaccines; mechanism unclear (possibly stress or pain-mediated).</li>
          </ul>

          <p>Best practices to minimize reactions:</p>
          <ul>
            <li>Don&apos;t vaccinate sick or stressed horses; postpone routine boosters during acute illness, recent transport, or post-surgical recovery.</li>
            <li>Don&apos;t vaccinate immediately before or after a major competition or stressful event.</li>
            <li>Avoid stacking too many vaccines in one visit (split into 2–3 visits 2–4 weeks apart for foals or for horses with previous reaction history).</li>
            <li>Use the smallest gauge needle appropriate and rotate injection sites.</li>
            <li>Observe the horse for 15–30 minutes after vaccination, particularly with strangles or known-reactive horses.</li>
            <li>Document any reaction in the horse&apos;s record; modify future vaccination protocols accordingly.</li>
          </ul>

          <h2 id="cost">Cost &amp; Logistics</h2>
          <p>Approximate US costs for a typical adult horse on a standard schedule (varies regionally; includes farm-call charge):</p>

          <ul>
            <li><strong>Spring core combination (5-way: EEE/WEE/WNV/tetanus + rabies):</strong> $50–90 vaccine cost + farm call.</li>
            <li><strong>Flu/EHV booster:</strong> $25–45 per vaccination.</li>
            <li><strong>Strangles vaccine:</strong> $25–45 per vaccination (intranasal slightly higher).</li>
            <li><strong>PHF vaccine:</strong> $30–50 per vaccination.</li>
            <li><strong>Broodmare full protocol:</strong> $200–400 across the gestation period.</li>
            <li><strong>Annual basic adult schedule:</strong> $100–200 typical for a pleasure horse on closed-farm management.</li>
            <li><strong>Annual competition horse schedule:</strong> $250–500 typical including biannual flu/EHV.</li>
          </ul>

          <p>Practical logistics: many veterinary practices offer barn-call discounts when multiple horses are vaccinated in one visit. Sharing a farm call with neighbors or boarders reduces per-horse cost. Maintain vaccination records (paper or digital — many practices offer online records); USEF and FEI competition both require documented vaccination records.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Association of Equine Practitioners. &ldquo;Vaccination Guidelines for Adult Horses,&rdquo; &ldquo;Vaccination Guidelines for Foals,&rdquo; and &ldquo;Vaccination Guidelines for Broodmares.&rdquo; aaep.org.</li>
            <li>American Association of Equine Practitioners. &ldquo;Core Vaccination Guidelines&rdquo; — specific guidance for tetanus, EEE, WEE, West Nile virus, and rabies. aaep.org.</li>
            <li>American Association of Equine Practitioners. &ldquo;Risk-Based Vaccination Guidelines&rdquo; — specific guidance for equine influenza, EHV, strangles, PHF, botulism, rotavirus, anthrax, and leptospirosis. aaep.org.</li>
            <li>USDA APHIS Veterinary Services. &ldquo;Equine Herpesvirus Myeloencephalopathy (EHM) Disease Information.&rdquo; aphis.usda.gov.</li>
            <li>Wilson WD. &ldquo;Equine Vaccination &mdash; A Practitioner&apos;s Perspective.&rdquo; <em>Veterinary Clinics of North America: Equine Practice</em>, 2007; 23(2):217–272.</li>
            <li>Slater J. &ldquo;Equine Herpesviruses.&rdquo; In: Sellon DC, Long MT (eds), <em>Equine Infectious Diseases</em>, 2nd edition. Elsevier, 2014.</li>
            <li>Sellon DC, Long MT (eds). <em>Equine Infectious Diseases</em>, 2nd edition. Elsevier, 2014 — comprehensive reference for all equine infectious diseases.</li>
            <li>Boyle AG, Timoney JF, Newton JR, et al. &ldquo;Streptococcus equi Infections in Horses: Guidelines for Treatment, Control, and Prevention of Strangles — Revised Consensus Statement.&rdquo; <em>Journal of Veterinary Internal Medicine</em>, 2018; 32(2):633–647.</li>
            <li>Lunn DP, Davis-Poynter N, Flaminio MJ, et al. &ldquo;Equine Herpesvirus-1 Consensus Statement.&rdquo; <em>Journal of Veterinary Internal Medicine</em>, 2009; 23(3):450–461.</li>
            <li>United States Equestrian Federation. &ldquo;USEF Equine Vaccination Rule&rdquo; (GR845). usef.org.</li>
            <li>Fédération Équestre Internationale. &ldquo;FEI Veterinary Regulations&rdquo; — vaccination requirements for international competition. inside.fei.org.</li>
            <li>USDA Equine 2015 Study, National Animal Health Monitoring System. &ldquo;Vaccination Coverage in U.S. Horse Operations.&rdquo; aphis.usda.gov.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
