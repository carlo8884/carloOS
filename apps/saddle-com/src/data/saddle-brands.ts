/**
 * Per-brand saddle reference data for Saddle.com brand pages.
 *
 * Sources of truth (per brand): manufacturer "About" pages, Society of Master
 * Saddlers (SMS) qualified-saddler directory references, public dealer
 * disclosures, and publicly reported retail price ranges. Per QC-STANDARDS:
 * no fabricated reviews, no fake credentials, no testing badges.
 *
 * Citations live on the page itself as plain-text references — these strings
 * are the source URLs we relied on for the factual claims.
 */

export type SaddleDiscipline =
  | 'English (Dressage/Jumping/Eventing)'
  | 'Western'
  | 'Both'

export interface SaddleBrand {
  slug: string
  name: string
  foundedYear: number
  headquartersCountry: string
  discipline: SaddleDiscipline
  /** Approximate new-retail USD range across the current lineup. */
  priceRangeUsd: [number, number]
  keyTechnology: string
  bestKnownFor: string
  fitNotes: string
  warrantyTerms?: string
  affiliateProgram?: string
  citations: string[]

  // Extended editorial fields used by the brand page template.
  tagline: string
  history: string
  signatureModels: Array<{
    name: string
    discipline: string
    notes: string
    approxPriceUsd: string
  }>
  whoItSuits: string
  supportNotes: string
  comparedWith: string
  faq: Array<{ question: string; answer: string }>
  /** Slug of a related on-site review page (deep-link target for ReviewCard). */
  relatedReviewSlug?: string
  /** Manufacturer dealer-locator / brand site (used for affiliate hook). */
  brandUrl: string
}

export const SADDLE_BRANDS: SaddleBrand[] = [
  // ─── ENGLISH ───────────────────────────────────────────────────────────────
  {
    slug: 'stubben',
    name: 'Stübben',
    foundedYear: 1894,
    headquartersCountry: 'Germany',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [2400, 5500],
    keyTechnology:
      'Quick-Change Gullet System — 5 widths (XN–XW) adjusted by the dealer in seconds',
    bestKnownFor:
      'Hand-finished German leather, longevity, and strong used-market resale',
    fitNotes:
      'Wool-flocked panels by default; tends to suit medium-wide to wide horses with prominent withers — the Quick-Change tree lets you re-fit as the horse changes shape.',
    warrantyTerms:
      'Stübben North America publishes a 10-year tree warranty on most current models (verify on individual product page).',
    affiliateProgram: 'Stübben dealer network (no public affiliate program)',
    citations: [
      'https://www.stubbennorthamerica.com',
      'https://www.stubben.com',
      'https://www.mastersaddlers.co.uk',
    ],
    tagline:
      'A 130-year-old German workshop best known for the Quick-Change tree and exceptional leather.',
    history:
      'Stübben was founded by Johann Stübben in Krefeld, Germany in 1894 and remains family-owned. The brand has supplied Olympic and FEI dressage and show-jumping riders for decades and is one of the few European saddleries that still controls leather selection, tree building, and panel flocking in-house. Stübben North America (based in Niagara Falls, NY) handles distribution, fitter certification, and warranty work for the US market.',
    signatureModels: [
      { name: 'Roxane', discipline: 'Dressage', notes: 'Deep seat, long flap — the long-running flagship dressage model.', approxPriceUsd: '$3,200–$4,500 new' },
      { name: 'Portos', discipline: 'Show Jumping', notes: 'Forward-cut jumping flap with the Quick-Change tree.', approxPriceUsd: '$2,800–$4,200 new' },
      { name: 'Aramis', discipline: 'All-Purpose / Eventing', notes: 'Semi-forward flap — the bridge model between Roxane and Portos.', approxPriceUsd: '$2,400–$3,800 new' },
    ],
    whoItSuits:
      'Adult amateur and pro riders who value longevity, want a tree they can re-fit as the horse changes, and prefer a wool-flocked panel that a Master Saddler can adjust locally. Less ideal for riders who specifically want foam panels or a very close-contact jumping feel.',
    supportNotes:
      'Stübben North America maintains a published dealer locator and a network of independent saddle fitters; warranty work is handled through the importer, not the original retailer.',
    comparedWith:
      'Versus Pessoa, Stübben is heavier, longer-lasting, and holds resale value better. Versus Bates, Stübben uses wool flocking and a tool-adjustable tree rather than CAIR air panels and Easy-Change gullet plates. Versus Custom Saddlery, Stübben is a stock-fit-then-adjust brand rather than fully bespoke.',
    faq: [
      {
        question: 'Is Stübben really still made in Germany?',
        answer:
          'Yes — Stübben publishes its manufacturing in Krefeld, Germany, with the leather sourced primarily from European tanneries. The company also runs a satellite operation in Switzerland for some components.',
      },
      {
        question: 'How long does a Stübben saddle last?',
        answer:
          'Well-maintained Stübbens routinely stay in active use for 20+ years; the resale market routinely lists Roxanes and Portos models from the 1990s–2000s in serviceable condition. Tree life is the limiting factor, and the published 10-year tree warranty reflects the company\'s confidence in that component.',
      },
      {
        question: 'Can I adjust the tree myself?',
        answer:
          'No — the Quick-Change Gullet System is a dealer/fitter operation. The dealer uses a Stübben tool to swap the gullet width; the change takes a few minutes but is not designed for end-user adjustment.',
      },
    ],
    relatedReviewSlug: 'stubben-saddle-review',
    brandUrl: 'https://www.stubbennorthamerica.com',
  },
  {
    slug: 'pessoa',
    name: 'Pessoa',
    foundedYear: 1986,
    headquartersCountry: 'France (Bourrellerie de Saumur) / Brazil (Pessoa family)',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [1800, 4500],
    keyTechnology:
      'AMS (Adjustable Multifit System) tree and interchangeable knee blocks across the Gen X / Tomboy / Legacy lines',
    bestKnownFor:
      'Show jumping and hunter close-contact — co-developed with five-time Olympic show jumper Nelson Pessoa and his son Rodrigo Pessoa',
    fitNotes:
      'Foam-panel construction on most current models; tends to suit medium-narrow to medium horses with a flatter wither. Forward-cut flap geometry favors short-to-medium femurs.',
    warrantyTerms:
      'Pessoa USA publishes a limited lifetime tree warranty on current production saddles to the original purchaser.',
    affiliateProgram:
      'Sold through Dover Saddlery, SmartPak, and Bit of Britain — affiliate revenue flows through those retailers',
    citations: [
      'https://www.pessoasaddles.com',
      'https://www.doversaddlery.com',
      'https://www.smartpakequine.com',
    ],
    tagline:
      'The hunter/jumper close-contact standard, developed with Olympic show jumper Nelson Pessoa.',
    history:
      'The Pessoa saddle line was developed by Brazilian Olympic show jumper Nelson Pessoa together with French saddlery Bourrellerie de Saumur in the mid-1980s and expanded by his son Rodrigo Pessoa (2004 Olympic gold). The brand is now distributed in North America by Pessoa USA, with the Gen X, A/O, and Legacy as the cornerstone jumping/hunter platforms. The brand has been part of the hunter/equitation ring at Devon, Indoors, and WEF for decades.',
    signatureModels: [
      { name: 'Gen X Pro', discipline: 'Jumper / Hunter', notes: 'Forward-cut flap, deep seat, the modern flagship jumping saddle.', approxPriceUsd: '$3,200–$4,500 new' },
      { name: 'A/O (Amateur Owner)', discipline: 'Hunter / Equitation', notes: 'Flatter seat, more traditional flap — the equitation-ring standard.', approxPriceUsd: '$2,800–$3,800 new' },
      { name: 'Legacy', discipline: 'All-Purpose / Hunter', notes: 'Entry into the Pessoa range — close-contact construction at a lower price.', approxPriceUsd: '$1,800–$2,600 new' },
    ],
    whoItSuits:
      'Hunter, equitation, and jumper riders who want a minimal, close-contact feel and forward-cut flap geometry; particularly common on the A and AA circuits.',
    supportNotes:
      'Pessoa is sold through tack retailers rather than direct — Dover Saddlery (US) is the primary national dealer, and warranty claims are routed through the retailer back to Pessoa USA.',
    comparedWith:
      'Versus Stübben, Pessoa is lighter, more close-contact, and foam-paneled rather than wool-flocked. Versus County, Pessoa is mass-produced rather than bespoke. Versus Bates, Pessoa lacks the CAIR air panel and Easy-Change gullet system.',
    faq: [
      {
        question: 'Are Pessoa saddles actually made in France?',
        answer:
          'Pessoa saddles are produced at Bourrellerie de Saumur in France for the flagship lines; lower-priced models in the broader range have been produced in other facilities at various times. The current product page on Pessoa USA discloses the country of manufacture for each model.',
      },
      {
        question: 'Is the Gen X the same as the Gen X Pro?',
        answer:
          'No — the Gen X Pro is the current flagship with the AMS adjustable tree; older "Gen X" saddles from the 2000s use the original fixed-tree construction. Resale listings often blur the two — check the model year and tree specification before buying used.',
      },
      {
        question: 'Can a Pessoa be re-fitted as my horse changes shape?',
        answer:
          'Foam panels are not re-flockable in the way wool panels are; the AMS tree allows some width adjustment by a qualified fitter, but major refit work typically means a new saddle. Owners whose horses change shape seasonally often prefer wool-flocked alternatives.',
      },
    ],
    relatedReviewSlug: 'pessoa-saddle-review',
    brandUrl: 'https://www.pessoasaddles.com',
  },
  {
    slug: 'bates',
    name: 'Bates',
    foundedYear: 1934,
    headquartersCountry: 'Australia',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [1600, 3200],
    keyTechnology:
      'CAIR Cushion System (air-bag panels) and Easy-Change Fit Solution (interchangeable gullet plates the owner can swap in minutes)',
    bestKnownFor:
      'Owner-adjustable fit — the Easy-Change gullet plate system across the Caprilli, Innova, Artiste, and Isabell lines',
    fitNotes:
      'CAIR air panels conform to a wide range of back shapes; Easy-Change gullet plates cover narrow through extra-wide. Best suited to horses with average to slightly wide conformation and to riders who share saddles across more than one horse.',
    warrantyTerms:
      'Bates Saddles publishes a 10-year tree warranty on current production; the CAIR system carries a separate 5-year air-panel warranty.',
    affiliateProgram:
      'Sold through Dover Saddlery, SmartPak, and Riding Warehouse — affiliate flows through retailers',
    citations: [
      'https://www.batessaddles.com',
      'https://www.wintec.net.au',
      'https://www.doversaddlery.com',
    ],
    tagline:
      'Owner-adjustable English saddles built around the CAIR air-panel and Easy-Change gullet systems.',
    history:
      'Bates Saddles was founded in Melbourne, Australia in 1934 and now operates as part of the Bates Wintec family under Saddleworld Australia. The brand pioneered the air-panel concept (CAIR) and the owner-swappable gullet plate (Easy-Change Fit Solution), both of which it shares with sister brand Wintec. Bates is the leather-paneled side of the family; Wintec is the synthetic side.',
    signatureModels: [
      { name: 'Caprilli Close Contact', discipline: 'Jumper / Hunter', notes: 'Forward-cut close-contact jumping saddle with CAIR + Easy-Change.', approxPriceUsd: '$1,900–$2,600 new' },
      { name: 'Isabell', discipline: 'Dressage', notes: 'Designed with Isabell Werth (FEI dressage Olympian) — deep seat, long flap.', approxPriceUsd: '$2,400–$3,200 new' },
      { name: 'Innova', discipline: 'All-Purpose', notes: 'AP geometry with knee block options and Easy-Change Fit.', approxPriceUsd: '$1,600–$2,200 new' },
    ],
    whoItSuits:
      'Adult amateurs and juniors who want a tree they can re-fit at home, who share a saddle between horses, or whose horses change shape seasonally. Also a strong fit for riders in regions with no local Master Saddler.',
    supportNotes:
      'Bates maintains a North American distribution network through Weatherbeeta USA. Easy-Change gullet plates can be ordered direct from major tack retailers — owners are expected to do the swap themselves.',
    comparedWith:
      'Versus Wintec, Bates is the leather-paneled equivalent — same tree platform, same CAIR option, leather rather than synthetic. Versus Stübben, Bates trades wool-flocked panels for CAIR air panels and longevity for owner-adjustability.',
    faq: [
      {
        question: 'What does CAIR actually do?',
        answer:
          'CAIR replaces traditional wool flocking with sealed air bladders in the panel. The marketing claim is even pressure distribution across the panel; the practical effect is a panel that conforms to a wider range of backs out of the box. CAIR is non-adjustable — you cannot add or remove air the way you can wool — but the air bag is sealed for the life of the panel.',
      },
      {
        question: 'How do I swap the gullet plate?',
        answer:
          'Pull back the front panel flap, remove three screws holding the existing gullet plate, set the new (color-coded) plate in place, and re-tighten the screws. Bates publishes step-by-step instructions and the necessary tool ships with the saddle.',
      },
      {
        question: 'Is the Isabell really designed with Isabell Werth?',
        answer:
          'Yes — Bates publishes the collaboration on its product page. The current Isabell model is a third-generation revision; older versions are common on the used market and the gullet plate system is compatible across generations.',
      },
    ],
    brandUrl: 'https://www.batessaddles.com',
  },
  {
    slug: 'wintec',
    name: 'Wintec',
    foundedYear: 1973,
    headquartersCountry: 'Australia',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [800, 1800],
    keyTechnology:
      'Equi-Suede / Equi-Leather synthetic panel plus the same CAIR Cushion System and Easy-Change gullet plates as Bates',
    bestKnownFor:
      'Synthetic English saddles — washable, weatherproof, and the most popular entry-level English saddle in the US and UK',
    fitNotes:
      'Identical CAIR + Easy-Change platform to Bates — covers narrow through extra-wide via owner-swappable gullet plates. Synthetic panel does not break in the way leather does, which is a feature (consistency) or a flaw (less mold-to-horse) depending on the use case.',
    warrantyTerms:
      '10-year tree warranty published by Wintec on current production saddles; CAIR panels carry a separate 5-year warranty.',
    affiliateProgram:
      'Sold through Dover Saddlery, SmartPak, Riding Warehouse, and Amazon — affiliate flows through retailers',
    citations: [
      'https://www.wintec.net.au',
      'https://www.batessaddles.com',
      'https://www.doversaddlery.com',
    ],
    tagline:
      'The default entry-level synthetic English saddle — washable, weatherproof, and owner-adjustable.',
    history:
      'Wintec launched in Australia in 1973 as the first synthetic-leather English saddle brand. It now sits inside the same Bates Wintec / Saddleworld group and shares its tree platform, CAIR air panel, and Easy-Change gullet system with Bates. Wintec is heavily used in riding schools, pony clubs, and endurance — anywhere weatherproofing and cleanability matter more than the appearance of leather.',
    signatureModels: [
      { name: 'Wintec 500', discipline: 'All-Purpose', notes: 'The cornerstone AP — most-sold synthetic English saddle in its category.', approxPriceUsd: '$900–$1,300 new' },
      { name: 'Wintec Pro Dressage', discipline: 'Dressage', notes: 'Deep-seat dressage geometry with HART (Hi-Performance Air-Riding Technology) panel option.', approxPriceUsd: '$1,400–$1,800 new' },
      { name: 'Wintec 2000', discipline: 'All-Purpose with knee block', notes: 'Adjustable knee block; popular junior/teen AP.', approxPriceUsd: '$1,100–$1,500 new' },
    ],
    whoItSuits:
      'Riding schools and lesson programs; pony club and junior riders; endurance and trail riders who want a saddle they can hose off; and budget-conscious adult amateurs who want CAIR + Easy-Change fit without paying for leather.',
    supportNotes:
      'Distributed in North America through Weatherbeeta USA; gullet plates, CAIR panels, and accessories are stocked by all major tack retailers.',
    comparedWith:
      'Versus Bates, Wintec is the synthetic-paneled equivalent at roughly half the price. Versus Collegiate or Thorowgood, Wintec is fully synthetic and the Easy-Change system is built around owner self-service rather than a paid fitter visit.',
    faq: [
      {
        question: 'Can I really wash a Wintec?',
        answer:
          'Yes — Wintec publishes care instructions confirming the synthetic panel can be hosed off and wiped clean. This is one of the brand\'s primary selling points for trail, endurance, and lesson barns.',
      },
      {
        question: 'Is Wintec the same as Bates?',
        answer:
          'Same parent company, same tree platform, same CAIR + Easy-Change systems. The difference is the panel material — leather on Bates, synthetic on Wintec — and the price point.',
      },
      {
        question: 'Will a Wintec hold its value?',
        answer:
          'No — synthetic saddles do not appreciate on the resale market the way leather Stübben or County saddles can. Plan to treat a Wintec as a working tool, not a long-term asset.',
      },
    ],
    brandUrl: 'https://www.wintec.net.au',
  },
  {
    slug: 'county',
    name: 'County',
    foundedYear: 1968,
    headquartersCountry: 'United Kingdom (now US-distributed)',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [4500, 9000],
    keyTechnology:
      'Hand-built wool-flocked panels and a wide range of tree shapes (Innovation, Perfection, Sensation, Solution) for non-standard back conformation',
    bestKnownFor:
      'Hard-to-fit horses — wide trees, mutton withers, table-top backs, and asymmetry that defeats stock brands',
    fitNotes:
      'County saddles are fitted by a certified County representative to the specific horse; the tree is often built to order. Excels at the horses that a stock Stübben or Pessoa fitter has to turn away.',
    warrantyTerms:
      'County publishes a tree warranty on current production; coverage terms are tied to fit by a County rep (off-rep purchases may not be covered).',
    affiliateProgram:
      'County USA dealer network — no public affiliate program; warranty tied to rep fitting',
    citations: [
      'https://www.countysaddlery.com',
      'https://www.mastersaddlers.co.uk',
      'https://www.doversaddlery.com',
    ],
    tagline:
      'Hand-built English saddles for hard-to-fit horses — a fitter-network brand, not a stock-tack brand.',
    history:
      'County Saddlery was founded in England in 1968 and built its reputation on bespoke fitting for difficult conformation. The brand now operates under County USA out of Pennsylvania with a network of certified County saddle fitters covering most of North America. The line spans dressage (Perfection), jumper (Innovation), AP (Sensation), and the wide-tree Solution for the broadest backs.',
    signatureModels: [
      { name: 'Perfection Dressage', discipline: 'Dressage', notes: 'The dressage flagship — long flap, deep seat, broad panel options.', approxPriceUsd: '$5,500–$8,500 new' },
      { name: 'Innovation', discipline: 'Show Jumper', notes: 'Close-contact jumper with County\'s standard panel work.', approxPriceUsd: '$5,000–$7,500 new' },
      { name: 'Solution', discipline: 'Wide-tree AP', notes: 'For draft crosses, wide warmbloods, and mutton-withered horses other brands cannot fit.', approxPriceUsd: '$4,500–$6,500 new' },
    ],
    whoItSuits:
      'Owners of horses that stock brands cannot fit — wide warmbloods, Friesians, draft crosses, mutton-withered cobs, asymmetric backs. Also serious adult amateurs and pros who want a saddle built around their specific horse rather than a stock fit adjusted afterward.',
    supportNotes:
      'County is a fitter-network brand — the warranty is tied to the involvement of a certified County rep. Used County saddles can be excellent value but should be re-fitted by a rep before purchase.',
    comparedWith:
      'Versus Stübben and Custom Saddlery, County leans further toward bespoke (built around your horse) versus stock-with-adjustment. Versus Pessoa, County is a different category — wool-flocked, hand-built, fitter-network rather than retail-distributed.',
    faq: [
      {
        question: 'Do I have to go through a County rep?',
        answer:
          'Effectively yes — County\'s warranty and fitting model are tied to a certified rep. You can buy a used County off-rep, but the manufacturer\'s warranty is unlikely to transfer, and a rep visit to re-fit is part of the cost of buying used.',
      },
      {
        question: 'How long does a County saddle take to order?',
        answer:
          'New County orders are typically 4–8 months depending on model and rep workload. Reps often have demo saddles you can ride during the wait.',
      },
      {
        question: 'Is County worth the cost for a normal horse?',
        answer:
          'For a horse that fits a stock Stübben, Bates, or Pessoa, the County premium is usually not justified. The brand earns its price on the horses other brands cannot fit.',
      },
    ],
    brandUrl: 'https://www.countysaddlery.com',
  },
  {
    slug: 'custom-saddlery',
    name: 'Custom Saddlery',
    foundedYear: 1996,
    headquartersCountry: 'United States (Lakeville, MA) / built in Argentina',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [4500, 8500],
    keyTechnology:
      'Wool-flocked panels with extensive tree-shape options, Argentinian leather construction, and a US-based certified fitter network',
    bestKnownFor:
      'Dressage at the FEI level — the Wolfgang Solo and Icon Star are widely used by US Dressage team riders',
    fitNotes:
      'Wool-flocked panels are adjusted (added, removed, redistributed) by a Custom-certified fitter. The brand emphasizes panel customization to the individual horse over a few stock options.',
    warrantyTerms:
      'Custom Saddlery publishes a tree warranty; coverage typically requires the saddle to be fitted by a Custom-certified fitter.',
    affiliateProgram: 'Custom Saddlery dealer network (no public affiliate program)',
    citations: [
      'https://www.customsaddlery.com',
      'https://www.dressage-news.com',
      'https://www.usdf.org',
    ],
    tagline:
      'Argentinian-leather, US-fitted dressage and jumping saddles with deep customization at the panel.',
    history:
      'Custom Saddlery was founded in 1996 in Lakeville, Massachusetts and produces in Argentina using South American leather. The brand built its reputation in US dressage — the Wolfgang Solo became one of the most-used FEI dressage saddles in North America during the 2000s. Custom maintains a network of certified fitters around the US who manage panel adjustments, wool re-flocking, and warranty work.',
    signatureModels: [
      { name: 'Wolfgang Solo', discipline: 'Dressage', notes: 'The flagship — deep seat, long straight flap, widely used at FEI level.', approxPriceUsd: '$5,500–$8,000 new' },
      { name: 'Icon Star', discipline: 'Dressage', notes: 'Modern dressage geometry, lower-profile knee block.', approxPriceUsd: '$5,500–$7,500 new' },
      { name: 'Steffen Genesis', discipline: 'Dressage', notes: 'Named for Olympic dressage rider Steffen Peters — narrower twist.', approxPriceUsd: '$5,800–$8,500 new' },
    ],
    whoItSuits:
      'Serious adult amateur and pro dressage riders who want extensive panel customization to their horse, a wool-flocked panel a fitter can adjust, and Argentinian leather quality. Also a strong fit for hard-to-fit dressage horses where panel work matters more than tree-width adjustment.',
    supportNotes:
      'Custom is a fitter-network brand. Fitter visits are paid separately from the saddle; re-flocking is typically every 12–18 months on a working horse.',
    comparedWith:
      'Versus County, Custom leans more on panel work than tree-shape variety. Versus Stübben, Custom is more bespoke at the panel and less adjustable at the tree. Versus Pessoa, Custom is wool-flocked and dressage-focused rather than foam and jumper-focused.',
    faq: [
      {
        question: 'Is Custom Saddlery really made in Argentina?',
        answer:
          'Yes — Custom publishes Argentinian production with South American leather. US-based fitters handle final fitting, flocking adjustments, and warranty service.',
      },
      {
        question: 'How often do Custom saddles need re-flocking?',
        answer:
          'On a horse in regular work, plan on a fitter visit every 12–18 months — wool compresses over time and the panel needs to be re-evened. Working FEI-level horses sometimes need more frequent adjustments.',
      },
      {
        question: 'Can I buy a used Custom safely?',
        answer:
          'Yes, but budget for a fitter visit immediately — the panel work that made the saddle right for the previous horse will likely need to be redone for yours.',
      },
    ],
    brandUrl: 'https://www.customsaddlery.com',
  },
  {
    slug: 'antares',
    name: 'Antares',
    foundedYear: 2000,
    headquartersCountry: 'France (Saintes)',
    discipline: 'English (Dressage/Jumping/Eventing)',
    priceRangeUsd: [5500, 9500],
    keyTechnology:
      'Made-to-measure French saddles built from a rider/horse measurement template — every saddle is constructed for the individual',
    bestKnownFor:
      'High-end show jumping and equitation — common on the US AA/Grand Prix circuit and FEI show-jumping ring',
    fitNotes:
      'Each Antares is built to a measurement template the company takes from the horse and rider. Foam panels are the default; wool-flocked options exist. Fit refinement is done by an Antares rep, not third-party fitters.',
    warrantyTerms:
      'Antares publishes a multi-year tree warranty tied to the rep network; specific terms vary by model and country.',
    affiliateProgram: 'Antares rep network (no public affiliate program)',
    citations: [
      'https://www.antaressellier.com',
      'https://www.chronofhorse.com',
      'https://www.equestrian.fei.org',
    ],
    tagline:
      'Made-to-measure French show-jumping saddles — every unit built around the rider and horse.',
    history:
      'Antares Sellier was founded in 2000 in Saintes, France and rapidly became one of the dominant French saddleries in international show jumping. The brand operates a rep-network model: each Antares is built to a measurement template that the rep takes in person, then constructed in France. The Antares fitting model has been copied by competitors (CWD, Devoucoux) but the brand remains a benchmark in the discipline.',
    signatureModels: [
      { name: 'Origin', discipline: 'Show Jumping', notes: 'The original made-to-measure jumping flagship.', approxPriceUsd: '$6,500–$9,000 new' },
      { name: 'Evolution', discipline: 'Show Jumping', notes: 'Updated flap geometry; common on the Grand Prix circuit.', approxPriceUsd: '$7,000–$9,500 new' },
      { name: 'Spooner', discipline: 'Dressage', notes: 'The dressage line — narrower twist, deeper seat.', approxPriceUsd: '$6,500–$8,500 new' },
    ],
    whoItSuits:
      'Adult amateur and pro show jumpers and equitation riders who want a saddle built around their leg length, femur angle, and seat preference, and whose horse benefits from a custom-built tree. Premium price point — generally not the right fit for entry-level riders.',
    supportNotes:
      'Antares is a rep-network brand; new orders are placed through a rep visit, and warranty work is tied to that rep. Used Antares can be excellent value but the made-to-measure nature means a used saddle was built for someone else\'s leg.',
    comparedWith:
      'Versus Pessoa, Antares is genuinely made-to-measure rather than stock with options. Versus CWD and Devoucoux (also French, also rep-network), Antares is the original of the model and the closest competitor in feel and price.',
    faq: [
      {
        question: 'How long does an Antares order take?',
        answer:
          'Typical lead times are 3–6 months from the measurement appointment to delivery. Reps usually have demo saddles you can ride during the wait.',
      },
      {
        question: 'Is a used Antares worth buying?',
        answer:
          'It can be — but remember the saddle was measured for the original rider\'s leg. Buy used Antares only if the seat size, flap length, and twist roughly match you; otherwise the made-to-measure value is gone.',
      },
      {
        question: 'Antares vs CWD vs Devoucoux — what is the difference?',
        answer:
          'All three are French rep-network brands using a similar made-to-measure model. Differences are at the margin: panel feel, leather choice, rep network density in your region. The right answer is usually the brand whose rep covers your area well.',
      },
    ],
    brandUrl: 'https://www.antaressellier.com',
  },

  // ─── WESTERN ───────────────────────────────────────────────────────────────
  {
    slug: 'billy-cook',
    name: 'Billy Cook',
    foundedYear: 1965,
    headquartersCountry: 'United States (Sulphur, OK and Greenville, TX)',
    discipline: 'Western',
    priceRangeUsd: [1200, 3500],
    keyTechnology:
      'Hand-tooled leather construction on a wooden tree (no fiberglass), with maker mark identifying Sulphur OK or Greenville TX origin',
    bestKnownFor:
      'Trail, ranch, and pleasure Western saddles — durability and traditional construction; one of the most widely sold US-made Western brands',
    fitNotes:
      'Built on full or semi-Quarter Horse bars with standard tree widths; suits the medium-to-stout Western horse. Confirm the bar specification on the underside before buying — Billy Cook has been produced by two related but separate companies (Sulphur, OK and Greenville, TX) and bar standards vary.',
    warrantyTerms:
      'Billy Cook Saddlery (Sulphur) and Billy Cook Maker (Greenville) each publish their own warranty terms; confirm with the specific maker before purchase.',
    affiliateProgram:
      'Sold through HorseSaddleShop, Statelinetack, NRS World, and Amazon — affiliate flows through those retailers',
    citations: [
      'https://www.billycooksaddlery.com',
      'https://www.horsesaddleshop.com',
      'https://www.statelinetack.com',
    ],
    tagline:
      'Hand-tooled, wooden-tree Western saddles — one of the most widely sold US-made Western brands.',
    history:
      'Billy Cook started building saddles in the 1960s and the brand splits into two related but legally separate companies: Billy Cook Saddlery in Sulphur, Oklahoma and Billy Cook Maker in Greenville, Texas. Both produce hand-tooled leather Western saddles on wooden trees and both use the Billy Cook name. Buyers should check the maker mark to know which factory produced a given saddle, because warranty, bar specs, and dealer support differ.',
    signatureModels: [
      { name: 'Pleasure Trail (Sulphur)', discipline: 'Trail / Pleasure', notes: 'Hand-tooled trail saddle on a wooden tree.', approxPriceUsd: '$1,400–$2,200 new' },
      { name: 'Wide Ranch Roper', discipline: 'Ranch Work', notes: 'Heavy ranch saddle built for working cattle.', approxPriceUsd: '$1,800–$3,000 new' },
      { name: 'Show Reining (Greenville)', discipline: 'Reining / Show', notes: 'Show-quality tooling, close-contact skirt.', approxPriceUsd: '$2,400–$3,500 new' },
    ],
    whoItSuits:
      'Trail riders, ranch workers, and pleasure riders who want a US-made hand-tooled Western saddle in the mid-to-upper price tier. Less ideal for serious cutting or barrel competitors who want a discipline-specialist build.',
    supportNotes:
      'Two separate companies share the name. Sulphur OK and Greenville TX each have their own warranty terms, dealer networks, and reputations. Verify the maker mark before buying — used Billy Cook listings sometimes blur the two.',
    comparedWith:
      'Versus Circle Y, Billy Cook is the more traditional hand-tooled option; Circle Y leans further into competition-specific designs. Versus Reinsman, Billy Cook is heavier construction; Reinsman is lighter and more competition-tuned.',
    faq: [
      {
        question: 'How do I tell Sulphur Billy Cook from Greenville Billy Cook?',
        answer:
          'Check the maker mark on the saddle (usually on the underside of the skirt or the back of the cantle). Sulphur saddles are stamped Billy Cook Saddlery, Sulphur, OK; Greenville saddles are stamped Billy Cook Maker, Greenville, TX.',
      },
      {
        question: 'Are Billy Cook saddles still hand-tooled?',
        answer:
          'Yes — both companies publish hand-tooling on their flagship lines. Lower-priced models in the broader catalog may use stamped tooling rather than hand-tooled; confirm on the specific product page.',
      },
      {
        question: 'Will a Billy Cook fit a wide horse?',
        answer:
          'Most Billy Cooks ship on full-Quarter-Horse bars (semi-QH is also common). Confirm the bar specification before buying — a wide-backed horse may need a specific wide-tree order rather than a stock saddle.',
      },
    ],
    brandUrl: 'https://www.billycooksaddlery.com',
  },
  {
    slug: 'circle-y',
    name: 'Circle Y',
    foundedYear: 1960,
    headquartersCountry: 'United States (Yoakum, TX)',
    discipline: 'Western',
    priceRangeUsd: [1300, 4500],
    keyTechnology:
      'Flex2 and Tucker tree systems (flexible wooden tree with a moving bar pivot for a closer fit on horses that change shape)',
    bestKnownFor:
      'Trail, ranch, and barrel — and for the Flex2 line of flexible-tree saddles that became a category benchmark in the 2000s',
    fitNotes:
      'Standard Quarter Horse and Arabian tree options across the range; Flex2 line specifically targets horses that need accommodation in the bar (mutton withers, sensitive backs).',
    warrantyTerms:
      'Circle Y publishes a tree warranty on current production saddles. Tucker (a Circle Y brand) has its own warranty terms.',
    affiliateProgram:
      'Sold through HorseSaddleShop, Statelinetack, NRS World, and Amazon — affiliate flows through retailers',
    citations: [
      'https://www.circley.com',
      'https://www.tuckersaddlery.com',
      'https://www.horsesaddleshop.com',
    ],
    tagline:
      'A Yoakum, Texas saddlery best known for the Flex2 flexible-tree line and the Tucker trail brand.',
    history:
      'Circle Y was founded in Yoakum, Texas in 1960 and remains one of the largest US Western saddlery operations. The brand owns the Tucker Trail Saddles line (acquired in 2010) and the High Horse value brand, in addition to its own Circle Y models. The Flex2 flexible-tree line introduced in the 2000s reshaped expectations for trail-saddle fit on horses that do not suit a rigid tree.',
    signatureModels: [
      { name: 'Flex2 Park & Trail', discipline: 'Trail / Pleasure', notes: 'The flagship Flex2 trail saddle — flexible wooden tree.', approxPriceUsd: '$1,800–$2,800 new' },
      { name: 'Josey Ultimate Cash', discipline: 'Barrel Racing', notes: 'Designed with WPRA barrel racer Martha Josey — close-contact, light.', approxPriceUsd: '$1,500–$2,200 new' },
      { name: 'Tucker Cheyenne Frontier', discipline: 'Trail / Endurance', notes: 'Tucker-line cushioned trail saddle with gel seat.', approxPriceUsd: '$2,400–$3,400 new' },
    ],
    whoItSuits:
      'Trail and pleasure riders who want a flexible-tree option; barrel racers buying the Josey-line models; ranch and recreational riders who want a name-brand Texas-made saddle in the mid-to-upper price tier.',
    supportNotes:
      'Distributed through a wide US tack-retailer network; warranty claims are routed through the retailer back to Yoakum, TX. Tucker saddles share the same support network.',
    comparedWith:
      'Versus Billy Cook, Circle Y leans further toward discipline-specific designs (barrel, reining, endurance) and toward flexible-tree fit. Versus Reinsman, both are competition-oriented; Reinsman is more concentrated on rough-stock and timed-event riders.',
    faq: [
      {
        question: 'What is the Flex2 tree actually doing?',
        answer:
          'The Flex2 is a wooden tree with a pivoting bar that allows some flex front-to-back. The intent is closer contact and accommodation for horses whose back shape changes during work or seasons. It is not a fully flexible tree — the tree shape is still defined.',
      },
      {
        question: 'Is Tucker the same company as Circle Y?',
        answer:
          'Yes — Circle Y acquired Tucker in 2010. The brands share manufacturing and warranty support but remain distinct product lines.',
      },
      {
        question: 'Will a Circle Y fit my Arabian?',
        answer:
          'Circle Y publishes an Arabian-tree option on most trail and pleasure models. Confirm the bar specification on the product page before ordering.',
      },
    ],
    brandUrl: 'https://www.circley.com',
  },
  {
    slug: 'reinsman',
    name: 'Reinsman',
    foundedYear: 1992,
    headquartersCountry: 'United States (built in Mexico for Reinsman USA)',
    discipline: 'Western',
    priceRangeUsd: [1200, 3800],
    keyTechnology:
      'TackTec / Ralide tree options, Tacky-Too non-slip pad pairing, and a strong barrel-racing focus',
    bestKnownFor:
      'Barrel racing, team roping, and timed events — common at NFR-level competition',
    fitNotes:
      'Built on standard QH and Arabian bars with semi- and full-QH widths; the Charmayne James and Sharon Camarillo signature lines target the barrel-racing-specific horse and rider geometry.',
    warrantyTerms:
      'Reinsman publishes a tree warranty on current production; coverage terms posted on the product page.',
    affiliateProgram:
      'Sold through NRS World, HorseSaddleShop, and Statelinetack — affiliate flows through retailers',
    citations: [
      'https://www.reinsman.com',
      'https://www.nrsworld.com',
      'https://www.prorodeo.com',
    ],
    tagline:
      'Barrel-racing and timed-event Western saddles — Charmayne James and Sharon Camarillo signature lines.',
    history:
      'Reinsman was founded in 1992 and built its US reputation on the barrel-racing circuit with signature lines from WPRA Hall of Famers Charmayne James and Sharon Camarillo. The brand is part of the Equibrand Corporation portfolio (alongside Rattler Ropes and Classic Equine). Manufacturing is in Mexico for Reinsman USA; warranty and support run through Equibrand in Granbury, TX.',
    signatureModels: [
      { name: 'Charmayne James Signature', discipline: 'Barrel Racing', notes: 'Designed with 11-time WPRA World Champion Charmayne James.', approxPriceUsd: '$1,800–$2,800 new' },
      { name: 'Sharon Camarillo Signature', discipline: 'Barrel Racing', notes: 'Designed with WPRA Hall of Famer Sharon Camarillo.', approxPriceUsd: '$1,800–$2,800 new' },
      { name: 'Wade Ranch', discipline: 'Ranch Work', notes: 'Heavy ranch saddle with wade-style swell.', approxPriceUsd: '$2,400–$3,500 new' },
    ],
    whoItSuits:
      'Barrel racers, team ropers, and timed-event competitors — particularly those drawn to the Charmayne James or Sharon Camarillo signature lines. Trail riders are typically better served by Circle Y or Billy Cook.',
    supportNotes:
      'Distributed through the Equibrand network and major Western tack retailers; warranty claims route through Equibrand in Granbury, TX.',
    comparedWith:
      'Versus Circle Y\'s Josey line, both are credentialed barrel-racing options; Reinsman\'s Charmayne James line has slightly different tree geometry and rough-out fender options. Versus Billy Cook, Reinsman is lighter, more competition-tuned, and less hand-tooled in feel.',
    faq: [
      {
        question: 'Where are Reinsman saddles made?',
        answer:
          'Reinsman manufactures in Mexico for Reinsman USA; warranty and US support are handled by Equibrand Corporation in Granbury, TX.',
      },
      {
        question: 'Are the signature lines actually designed by the named riders?',
        answer:
          'Yes — Reinsman publishes the design collaboration with Charmayne James and Sharon Camarillo. Tree geometry, skirt cut, and stirrup placement reflect the named rider\'s specifications.',
      },
      {
        question: 'Will a Reinsman work for a trail rider?',
        answer:
          'A Reinsman can work for trail use, but the brand\'s strength is competition geometry. Trail-specific riders are typically better served by Circle Y\'s Tucker line or a Billy Cook pleasure-trail model.',
      },
    ],
    brandUrl: 'https://www.reinsman.com',
  },
]

export function getBrandBySlug(slug: string): SaddleBrand | undefined {
  return SADDLE_BRANDS.find((b) => b.slug === slug)
}

export function getAllBrandSlugs(): string[] {
  return SADDLE_BRANDS.map((b) => b.slug)
}
