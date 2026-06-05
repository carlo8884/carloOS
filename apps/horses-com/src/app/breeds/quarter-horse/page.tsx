import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'American Quarter Horse — Breed Guide, Genetics, Disciplines',
  description:
    'The American Quarter Horse: history, conformation, disciplines, bloodlines, the AQHA 5-panel genetic test, and what to expect as a first-time owner.',
  path: '/breeds/quarter-horse',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'American Quarter Horse Breed Guide',
  description:
    'A reference guide to the American Quarter Horse: history, conformation, common disciplines, bloodlines, and the AQHA 5-panel genetic test.',
  url: 'https://horses.com/breeds/quarter-horse',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const AT_A_GLANCE: Array<[string, string]> = [
  ['Registry', 'American Quarter Horse Association (AQHA)'],
  ['Height', '14.0–16.0 hh (typical 14.3–15.3)'],
  ['Weight', '950–1,300 lb'],
  ['Lifespan', '25–30 years'],
  ['Coat colors', '17 recognized; sorrel most common'],
  ['Disciplines', 'Western pleasure, reining, ranch, cutting, racing, trail'],
  ['Temperament', 'Even-tempered, biddable, work-oriented'],
  ['Genetic panel', 'AQHA 5-panel (HYPP, GBED, HERDA, MH, PSSM1)'],
]

export default function QuarterHorseBreedPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="breed"
        relatedLinks={[
          { title: 'Horse Breeds Hub', href: '/breeds', category: 'Breeds' },
          { title: 'Disciplines Hub', href: '/disciplines' },
          { title: 'Reining', href: '/disciplines/reining' },
          { title: 'Barrel Racing', href: '/disciplines/barrel-racing' },
        ]}
        hero={{
          title: 'American Quarter Horse',
          subtitle:
            "The most populous horse breed in the United States and the breed that introduces more first-time owners to the sport than any other. The American Quarter Horse is short-coupled, heavily muscled, and built for explosive acceleration — the name comes from the breed's dominance at the quarter-mile sprint. Versatility is the through-line: the same family of horses appears under English saddles at IHSA shows, hauling cattle on working ranches, and posting six-figure earnings on the AQHA reining circuit.",
          category: 'Breed Guide',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '14 min',
          // Cover photo supplied via manifest-managed StockImage below.
          // Raw CDN URLs removed per QC §1 (Unsplash attribution required).
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breeds', href: '/breeds' },
          { name: 'Quarter Horse', href: '/breeds/quarter-horse' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'History & Origins', href: '#history' },
            { label: 'Conformation', href: '#conformation' },
            { label: 'Disciplines', href: '#disciplines' },
            { label: 'Notable Bloodlines', href: '#bloodlines' },
            { label: 'Genetic Concerns', href: '#genetics' },
            { label: 'Temperament', href: '#temperament' },
            { label: 'First-Time Owner', href: '#first-time' },
            { label: 'References', href: '#references' },
          ]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
            {AT_A_GLANCE.map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0 gap-3">
                <span className="text-brand-text-light">{k}</span>
                <span className="font-bold text-brand-dark text-right max-w-[60%]">{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks
            title="Quarter Horse Health Deep-Dive"
            links={[
              {
                label: 'Quarter Horse Health & Genetic Screening',
                href: '/breeds/quarter-horse/health',
              },
            ]}
          />
          <RelatedLinks
            title="Related Guides"
            links={[
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              { label: 'Joint Supplements', href: '/supplements/joint-supplements' },
              { label: 'Equine Ulcers', href: '/health/equine-ulcers' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="breed" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Discipline-aware buyer guides and reference articles."
            source="breed-quarter-horse"
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

          <h2 id="history">History &amp; Origins</h2>
          <p>The American Quarter Horse was, before it was a breed, a working type. Seventeenth-century English colonists in Virginia and the Carolinas crossed imported Galloway and Hobby mares with locally adapted Iberian and Chickasaw stock, then later with the Thoroughbred founder Janus (1746) and other early Thoroughbreds. The result was a compact horse that could outrun anything at distances under a quarter mile — hence "Quarter Horse." Match races on Main Street, often run between two horses for a side bet, were the breed's first proving ground (AQHA, &ldquo;Breed History,&rdquo; aqha.com).</p>

          <p>Westward expansion shifted the working brief. By the 1830s the same compact, fast-twitch type was being driven into Texas and the Southwest, where Spanish-Mexican mustang blood was added and the cattle industry put the breed to the work that would define it: turning a cow off a herd. The breed registry — the American Quarter Horse Association (AQHA) — was founded in 1940 in Fort Worth, Texas. The first foundation stallion registered was Wimpy P-1, a great-great-grandson of the foundation sire Old Sorrel; the second was Joe Reed P-3, a half-brother to Joe Reed II. By 2023 the AQHA had registered more than 6.4 million horses, making it the largest single-breed registry in the world (AQHA Annual Report, 2023).</p>

          <h2 id="conformation">Conformation</h2>
          <p>The breed standard is compact, heavily muscled, and built low to the ground. The classic Quarter Horse profile reads short-coupled (a relatively short back relative to overall length), with a deep heartgirth, well-defined withers that are nonetheless lower and broader than those of a Thoroughbred, a powerful hindquarter with prominent gaskin development, and clean, dense bone. Heads are short, broad, with small ears and a wide-set, kind eye. Average mature height for registered Quarter Horses is 14.3–15.3 hands; halter-type horses bred for heavier muscle can stand 15.0–16.0 hh, while ranch and racing types tend slightly taller and rangier.</p>

          <p>The trade-off in the conformation is straight-line speed and turning power versus reach and elasticity. The Quarter Horse hindquarter is built for the cow-stopping crouch and the explosive acceleration out of the box; it is not the long-strided, ground-covering gallop of a Thoroughbred. Practical implications: Quarter Horses excel at events requiring power and lateral agility, struggle in events requiring sustained speed over a mile or extended-trot dressage scoring.</p>

          <h2 id="disciplines">Common Disciplines</h2>
          <p>The breed's versatility means a Quarter Horse pedigree alone tells you very little about what the individual horse can do. Bloodlines specialize.</p>

          <h3>Western pleasure</h3>
          <p>The show-ring discipline most closely associated with the breed in the pleasure-class lineage. Horses are asked to perform a flat, low-headed, slow-cadenced walk, jog, and lope. Penalized: speed, head carriage above the withers, breaking gait. The conformation breeders selected for in this discipline — extremely level toplines, low natural head carriage, minimum knee action — drew increasing criticism through the 2000s and 2010s as judges rewarded ever-slower, ever-lower frames. The AQHA has since modified judging guidelines (notably in 2009 and again post-2018) to penalize horses that travel below level, with the goal of restoring forward motion (AQHA Rule Book, current edition, SHW §470).</p>

          <h3>Reining</h3>
          <p>The discipline that has come closest to defining Quarter Horse athleticism in the modern era. A reining pattern asks for fast circles, slow circles, flying lead changes, rundowns into sliding stops, spins, and rollbacks — all from one hand on the rein, executed willingly. Reining became an FEI discipline in 2000 (the first Western discipline to do so) and was a Pan American Games event from 2003 to 2015. The National Reining Horse Association (NRHA), founded in 1966, governs the sport in North America; the NRHA Futurity in Oklahoma City awards more than $2 million annually to three-year-olds.</p>

          <h3>Ranch and working cow horse</h3>
          <p>Ranch riding, ranch trail, ranch reining, ranch cutting, and the broader working cow horse (or &ldquo;reined cow horse&rdquo;) classes test the cattle work that the breed was selected to do. The reined cow horse pattern combines a reining run with a cow run — boxing, fence work, circling. AQHA Versatility Ranch Horse classes are the breed's all-around test, including conformation, cutting, trail, ranch riding, working ranch horse, and reining in a single weekend.</p>

          <h3>Cutting</h3>
          <p>The horse is asked to separate a cow from the herd and prevent its return for 2.5 minutes per cow, with the rider giving up rein contact once the cow is chosen. The National Cutting Horse Association (NCHA) is the largest single-discipline equine purse organization in North America; the NCHA Futurity in Fort Worth awards more than $4 million annually. Bloodlines: Doc Bar, Smart Little Lena, High Brow Cat, Metallic Cat.</p>

          <h3>Racing</h3>
          <p>The breed's original purpose. American Quarter Horse racing is conducted at distances from 220 yards (one furlong) to 870 yards, with the All American Futurity at Ruidoso Downs in New Mexico — the world's richest Quarter Horse race — paying out $3 million each Labor Day. The breed produces extreme speed over the sprint distance: world-record holders have run 440 yards in under 21 seconds, sustaining speeds above 50 mph. Racing-bred Quarter Horses are notably more Thoroughbred-influenced than show or ranch lines, reflecting decades of speed-focused outcrossing.</p>

          <h3>Other</h3>
          <p>English-discipline Quarter Horses compete in hunter under saddle, hunt seat equitation, and lower-level jumping; AQHA all-around shows include western and English classes at the same horse. The breed is the most common mount for trail riding clubs, 4-H programs, and intercollegiate horsemanship (IHSA, NCEA). They appear in mounted patrol, ranch outfitting, and rodeo (barrel racing, breakaway roping, team roping, steer wrestling — the bulk of professional rodeo horsepower is Quarter Horse).</p>

          <h2 id="bloodlines">Notable Bloodlines</h2>
          <p>The breed traces predominantly to a handful of foundation stallions and their immediate sons. Owners new to the breed often look at a four-generation pedigree and see the same names repeating; this is concentrated linebreeding to the foundation horses.</p>

          <h3>Doc Bar (1956)</h3>
          <p>A small, flashy chestnut who failed at the racetrack, Doc Bar became the most influential cutting and reined cow horse sire of the twentieth century. He stood for Stephen Jensen in California; his sons included Doc O' Lena (winner of the inaugural NCHA Futurity in 1970) and Doc's Remedy. Modern cutting and reined cow horse pedigrees are nearly all Doc Bar–stamped through one branch or another (NCHA Hall of Fame; AQHA Hall of Fame, 1992).</p>

          <h3>Poco Bueno (1944)</h3>
          <p>Bred by E. Paul Waggoner of the Waggoner Ranch in Texas, Poco Bueno was a foundation Quarter Horse of the working cattle-ranch and halter type — heavily muscled, dense-boned, with the calm temperament of his sire King P-234. He produced AQHA Champions and ROM (Register of Merit) earners in cutting, reining, and halter. His pedigree carries a known autosomal recessive deleterious allele (HERDA — see Genetic Concerns), which makes Poco Bueno an important cautionary case study in how foundation linebreeding concentrates both desirable traits and recessive disease alleles.</p>

          <h3>King P-234 (1932)</h3>
          <p>One of the most influential foundation stallions in AQHA history. King was a stocky bay bred by Byrne James, later owned by Jess Hankins. He sired more than 100 AQHA Champions and is in nearly every modern Quarter Horse pedigree somewhere — directly responsible for the broad, deep-bodied, calm-tempered ranch type that defines the working Quarter Horse. AQHA Hall of Fame inductee, 1989.</p>

          <h3>Three Bars (TB)</h3>
          <p>A Thoroughbred stallion (1940) admitted to the AQHA studbook in the era when registered Thoroughbreds could appear in Quarter Horse pedigrees. Three Bars introduced refinement, speed, and longer-strided action to the breed. His descendants dominate Quarter Horse racing pedigrees (Easy Jet, Dash for Cash, First Down Dash) and are common in modern reining and pleasure lines as well.</p>

          <h3>Two Eyed Jack (1961)</h3>
          <p>A versatile sire whose offspring excelled in halter, English pleasure, hunter under saddle, and western pleasure. Two Eyed Jack's name appears throughout modern all-around show pedigrees and is associated with strong temperaments and trainable dispositions.</p>

          <h2 id="genetics">Genetic Concerns &amp; the AQHA 5-Panel Test</h2>
          <p>Centuries of linebreeding to a small founder population have concentrated several deleterious recessive (and one dominant) alleles in modern Quarter Horse populations. AQHA mandates the five-panel genetic test on stallions standing to outside mares for the 2015 foal crop and forward; results are recorded on registration papers. Prospective buyers, breeders, and owners should obtain panel results before breeding, before purchasing a foal, and before purchase of any horse intended for athletic work in lines known to carry these conditions (AQHA, &ldquo;Genetic Testing,&rdquo; aqha.com/genetic-testing).</p>

          <h3>HYPP — Hyperkalemic Periodic Paralysis</h3>
          <p>An autosomal dominant disorder caused by a point mutation in the SCN4A gene, originally identified in 1992 by Sharon Spier and colleagues at the UC Davis Veterinary Genetics Laboratory and traced to a single foundation stallion: the 1969 AQHA World Champion Halter horse Impressive. HYPP causes intermittent episodes of muscle trembling, weakness, and (in severe cases) collapse and death due to elevated serum potassium triggering aberrant skeletal-muscle sodium-channel activity. Heterozygous (N/H) horses can be managed with dietary potassium restriction (low-potassium hay, avoidance of alfalfa and electrolytes containing potassium) and, when symptomatic, acetazolamide. Homozygous (H/H) horses are not breeding candidates; since 2007 AQHA has refused registration of H/H foals (AQHA Rule Book, REG §205.1; Spier SJ et al., <em>Journal of the American Veterinary Medical Association</em>, 1990).</p>

          <h3>GBED — Glycogen Branching Enzyme Deficiency</h3>
          <p>An autosomal recessive disorder of glycogen storage. Affected (G/G) foals lack the enzyme that builds the branched glycogen used by muscle and brain for energy storage; they are stillborn, born weak and unable to stand, or die within the first few months of life. Carriers (N/G) are clinically normal. GBED is traced to the foundation sire King P-234. Carrier frequency in the modern Quarter Horse population is estimated at approximately 8 percent; in cutting and reining sub-populations it may be higher (Ward TL et al., <em>Mammalian Genome</em>, 2004; UC Davis VGL test description).</p>

          <h3>HERDA — Hereditary Equine Regional Dermal Asthenia</h3>
          <p>An autosomal recessive collagen disorder caused by a missense mutation in the cyclophilin B (PPIB) gene. Affected (H/H) horses have weakened collagen in their dermis; their skin tears, lifts, and scars under saddle pressure. Most affected horses are euthanized by age 4 when they cannot be ridden. Carriers (N/H) are clinically normal. HERDA is concentrated in cutting-horse lines and traces to Poco Bueno. Carrier frequency in cutting-horse populations has been reported between 21 and 28 percent (Tryon RC et al., <em>Genomics</em>, 2007; UC Davis VGL).</p>

          <h3>MH — Malignant Hyperthermia</h3>
          <p>An autosomal dominant disorder caused by a missense mutation in the ryanodine receptor 1 (RYR1) gene. Affected horses experience life-threatening hyperthermia and rhabdomyolysis when triggered by certain anesthetic agents (halothane, isoflurane) or, less commonly, by exercise or stress. The mutation has been identified in Quarter Horses and related breeds (Aleman M et al., <em>Muscle &amp; Nerve</em>, 2004). Pre-anesthetic genetic testing is appropriate in performance Quarter Horses.</p>

          <h3>PSSM1 — Polysaccharide Storage Myopathy Type 1</h3>
          <p>An autosomal dominant disorder caused by a mutation in the glycogen synthase 1 (GYS1) gene that produces abnormal glycogen accumulation in skeletal muscle. PSSM1 horses present with exercise intolerance, tying-up (rhabdomyolysis), muscle stiffness, and reluctance to work. Management is dietary — low-starch, low-sugar, high-fat feeds (often supplemented with rice bran or oil), combined with consistent daily turnout and aerobic exercise. Many heterozygous horses are competition-sound with appropriate management. Prevalence in the Quarter Horse breed is approximately 6–10 percent depending on sub-population, higher in halter and draft-influenced lines (McCue ME et al., <em>Genomics</em>, 2008; Valberg SJ, University of Minnesota Equine Neuromuscular Diagnostic Laboratory).</p>

          <p>The 5-panel test, offered through the AQHA-recognized laboratory at the UC Davis Veterinary Genetics Laboratory (and several commercial labs), runs approximately $85 and returns N/N (clear), N/positive (carrier or heterozygous), or positive/positive results for each of the five conditions. AQHA also offers expanded panels including LWO (lethal white overo, relevant in solid-color paint-bred Quarter Horses), HYPP-only retests, and color genetics. A clean 5-panel on both sire and dam is the floor expectation before any modern Quarter Horse breeding.</p>

          <h2 id="temperament">Temperament Range</h2>
          <p>The defining trait the breed has been selected for, across all sub-populations, is biddability — willingness to take instruction and apply effort without conflict. Working ranch horses needed to think on a cow; show horses needed to perform in pressure environments; the Quarter Horse temperament is overwhelmingly even, work-oriented, and human-trusting. This is not a horse that decides for itself whether to participate in your plan.</p>

          <p>Within that overall character, sub-populations differ. Cutting and cow-bred horses tend to carry more intensity and reactivity — they were selected to read a cow with split-second decisions. Pleasure-bred horses tend lower-key and quieter. Racing-bred Quarter Horses carry more Thoroughbred sensitivity and forward energy. Halter-bred horses, especially the heavier-muscled lines, tend to be the calmest in temperament but can be the soundest only with attention to early management given their growth rate and load on developing joints.</p>

          <h2 id="first-time">What to Expect as a First-Time Owner</h2>
          <p>The Quarter Horse is the most common first-time owner mount in the United States, and the reasons are practical: a well-bred Quarter Horse with good early training is calm enough to forgive an inexperienced handler's mistakes, athletic enough to grow with the rider into more demanding disciplines, and embedded enough in the market that buying, selling, insuring, vetting, and finding a farrier who has shod one before is straightforward.</p>

          <p>Realistic expectations for a first-time owner:</p>
          <ul>
            <li><strong>Soundness.</strong> Lower-impact disciplines (trail, ranch, lower-level showing) on a moderately-sized horse with good conformation give the breed an excellent soundness record into the twenties. Performance work (reining, cutting, racing) at speed accumulates hock and stifle wear and is the most common source of mid-career maintenance bills.</li>
            <li><strong>Boarding cost.</strong> Quarter Horses board no differently from any other riding horse — expect $400–$1,200/month full-care depending on region and facility quality. Hay consumption: 1.5–2.5 percent of body weight per day in dry-matter forage.</li>
            <li><strong>Veterinary maintenance.</strong> Annual vaccinations and Coggins, twice-yearly dental floats once the horse passes age 15, farrier visits every 6–8 weeks. Geographic vaccinations (West Nile, EEE/WEE, rabies) are AAEP core; risk-based vaccinations (strangles, Potomac horse fever) follow local prevalence (American Association of Equine Practitioners core vaccination guidelines, current edition).</li>
            <li><strong>Genetic testing.</strong> Before purchase, ask for the 5-panel result. Carrier status (N/heterozygous) is not a deal-breaker for an unbroken pet or non-breeding gelding, but it is essential information for any horse intended to breed or for any HYPP-line horse being considered for purchase.</li>
            <li><strong>Tack.</strong> The wide, low-withered, short-backed Quarter Horse build asks for wide-tree saddles. Off-the-rack treeless and semi-quarter-horse-bar saddles often fit poorly; full-quarter-horse-bar (FQHB) Western trees, or English saddles with wide-to-extra-wide gullets, are the more common correct fit. See Saddle Fit Basics.</li>
          </ul>

          <p>The breed's broad market and clear-eyed registry make it one of the cleaner first-horse choices available. The risks are the same as any horse — over-faced training, under-conditioning, undiagnosed lameness — not breed-specific traps.</p>

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Quarter Horse Association. &ldquo;Breed History,&rdquo; &ldquo;Genetic Testing,&rdquo; AQHA Official Rule Book, current edition. aqha.com.</li>
            <li>Spier SJ, Carlson GP, Holliday TA, Cardinet GH, Pickar JG. &ldquo;Hyperkalemic Periodic Paralysis in Horses.&rdquo; <em>Journal of the American Veterinary Medical Association</em>, 1990; 197(8):1009–1017.</li>
            <li>Ward TL, Valberg SJ, Adelson DL, et al. &ldquo;Glycogen Branching Enzyme (GBE1) Mutation Causing Equine Glycogen Storage Disease IV.&rdquo; <em>Mammalian Genome</em>, 2004; 15(7):570–577.</li>
            <li>Tryon RC, White SD, Bannasch DL. &ldquo;Homozygosity Mapping Approach Identifies a Missense Mutation in Equine Cyclophilin B (PPIB) Associated with HERDA in the American Quarter Horse.&rdquo; <em>Genomics</em>, 2007; 90(1):93–102.</li>
            <li>Aleman M, Riehl J, Aldridge BM, et al. &ldquo;Association of a Mutation in the Ryanodine Receptor 1 Gene with Equine Malignant Hyperthermia.&rdquo; <em>Muscle &amp; Nerve</em>, 2004; 30(3):356–365.</li>
            <li>McCue ME, Valberg SJ, Miller MB, et al. &ldquo;Glycogen Synthase (GYS1) Mutation Causes a Novel Skeletal Muscle Glycogenosis.&rdquo; <em>Genomics</em>, 2008; 91(5):458–466.</li>
            <li>UC Davis Veterinary Genetics Laboratory. &ldquo;Horse Tests — 5-Panel,&rdquo; current test menu. vgl.ucdavis.edu.</li>
            <li>American Association of Equine Practitioners. &ldquo;Core and Risk-Based Vaccination Guidelines for Horses,&rdquo; current edition. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
