# Portfolio-Wide Lead-Magnet Brief

**Date:** 2026-05-28
**Author:** COO (research agent)
**Status:** Brainstorm / direction-setting — one recommendation per domain
**Context:** Dog.com soft-launches Friday 2026-05-29 with the `/puppy-schedule` landing → 8-email puppy-onboarding sequence. That pattern is the engine for the entire portfolio: a printable/interactive freebie produces a tagged email signup, which funnels into a sequence that segments the audience for affiliate and (eventually) membership monetization.

This brief picks **one** lead magnet per remaining domain so the next content-sprint wave can build each landing + sequence in parallel. Single recommendation per site — no five-option menus.

The Dog.com pattern we are replicating, in shorthand:

- **Landing page**: hero + above-the-fold email capture, what's-inside preview (give away the schedule itself — the magnet is the *printable + cadence*, not the secret information), second mid-page capture, FAQ. Article + FAQ schema. `source` tag passed to the `EmailCapture` component.
- **Sequence**: 8 emails over 8 weeks. `delay_after_signup` in front-matter. One short opinionated lesson per email, one CTA back to a deep article, one source citation. Affiliate links appear in the final round-up email only, with a clear disclosure.
- **Voice**: editorial, source-cited (AVMA / AAHA / AVSAB / WSAVA style). No upsells in the body. The list earns trust *first*, monetizes second.

Every magnet below is designed to fit that mold so the framework, components, and Mailchimp wiring are reused without rework.

---

## 1. Fish.com — "Aquarium Cycling Survival Kit"

**Lead-magnet name:** Aquarium Cycling Survival Kit

**What it is:** A printable two-page kit (PDF) plus an 8-email cycling drip. The PDF: a one-page cycling-log sheet (date, ammonia, nitrite, nitrate, pH, temp, water-change %, notes) the user prints fresh each week, plus a one-page diagnostic flowchart ("ammonia stuck high at week 3 → here are the four causes, in order of likelihood"). The 8 emails walk the new tank from day-1 ammonia source through fishless cycle, the nitrite spike, the nitrate plateau, water-change discipline, and a graduated first-stocking plan keyed to tank volume.

**Target-audience moment:** First-tank owner, somewhere between day 3 and week 5 of a fishless cycle, panicking that "nothing is happening" or that "the readings are wrong." High intent — they bought a tank, they have test strips in hand, and they will Google three times a day for the next month. This is the highest-pain, highest-search-volume moment in the fishkeeping lifecycle.

**Why this magnet wins:** The competition is forum threads from 2014 and YouTube videos that bury the actual numbers under sponsor reads. A trustworthy printable cycling log (with a flowchart for the four moments the user will need it) is the thing they actually wanted when they typed "ammonia stuck high" into Google. Nothing else in the niche is offered as a clean, dated, sourced PDF with a weekly companion email.

**Competitive landscape:** Aquarium Co-Op has a strong YouTube presence but no comparable signup magnet — their funnel is product purchase first, list second. 2HR Aquarist is plant-focused, not cycling-focused. Reddit r/Aquariums and r/PlantedTank thread answers are inconsistent and contradictory. The major brands (Tetra, API, Fluval) all publish cycling content but it routes to their own products. Our magnet wins by being brand-agnostic and citing sources by name — the kind of artifact a moderator would link to instead of typing a fresh answer.

**Search-intent volume:** "Fishless cycle" / "ammonia stuck" / "nitrite spike" / "how long does a cycle take" — collectively ~50K/mo US search volume by SEMrush estimates as of late 2025. Conversion ceiling on the landing page is high because every single one of these searchers is mid-problem with a credit card already validated (tank purchase preceded the search).

**Sequence theme (one-line per email):**
1. Welcome + the cycling log attached + the one mindset shift ("the bacteria are the pet, not the fish").
2. Why you cannot skip the cycle — what ammonia and nitrite actually do to gill tissue.
3. The four ammonia sources, ranked (pure ammonia > fish food > shrimp > live fish — and why the last is malpractice).
4. The nitrite spike week — what you'll see, why it's the scary one, how long it lasts.
5. Test kits: liquid vs. strips, why strips lie at low ranges, the one cheap upgrade that pays for itself.
6. "Cycle stalled" diagnostic — the four causes in order of likelihood, with the fix for each.
7. You're cycled — the first-stocking plan by tank volume, and the bioload math.
8. Library round-up — ongoing maintenance schedule, water-change cadence, filter media, plant primer (affiliate links here only).

**Affiliate hooks:** API Master Test Kit, Seachem Stability / Tetra SafeStart (bacterial supplements), Aqueon / Fluval filters, Seachem Prime (dechlorinator), specific live-plant starter packs (Buce Plant, Aquarium Co-Op). Hardware bias toward Amazon Associates + a direct Aquarium Co-Op affiliate where it pays better.

**Existing/needed page:** Existing — `/setup/aquarium-cycling-guide` (the page Agent K built tonight). Add the dual `EmailCapture` blocks (hero + mid-page) with `source="cycling-guide-landing-hero"` and `source="cycling-guide-landing-midpage"`. No new route needed.

**Build effort estimate:** **M.** Landing exists. PDF artwork is two pages of templated tables/flowchart. Sequence is 8 markdown files mirroring the puppy-onboarding structure. Agent T's cycling drip in flight this session should be reviewed for overlap and absorbed.

---

## 2. Saddle.com — "12-Point Saddle Fit Checklist"

**Lead-magnet name:** The 12-Point Saddle Fit Checklist (for new buyers)

**What it is:** A printable PDF checklist a buyer takes with them to a try-on / fitting appointment. Twelve numbered checks the master-saddler community considers non-negotiable: wither clearance (three fingers, daylight visible front-to-back along the gullet), panel contact (even pressure along the full length, no bridging, no rocking), channel width (clear of the spine bilaterally), tree width vs. shoulder, balance point (deepest part of the seat sits over the horse's center of gravity, not back on the loin), billet alignment (straight drop to the girth groove, no forward/backward swing), girth-groove engagement, gullet plate angle, flap length relative to thigh, stirrup-bar position relative to seat, panel symmetry, post-ride sweat-pattern read. Each item has a one-paragraph "how to check" instruction and a "pass / re-check" box. The 8-email sequence walks the buyer from "do I even need a fitter" through static check → dynamic check → trial period → re-flock cadence.

**Target-audience moment:** A rider buying their first saddle for a specific horse (often a first-horse owner — handoff opportunity with Horses.com), or buying a used saddle online and needing to evaluate it before the trial-period clock runs out. They're afraid of spending $2K–$6K on a saddle that the horse will reject in three months. They want a *checklist*, not an essay.

**Why this magnet wins:** Saddle fit is the single most expensive mistake in English/Western tack, and the existing content online is either (a) brand marketing dressed up as advice or (b) intimidating master-saddler blogs that assume the reader already knows what a "tree point" is. A clean numbered checklist with a paragraph of plain-English per item, designed to live in the buyer's truck on the day of the appointment, is novel in the space. Sourcing the 12 points to Society of Master Saddlers / Master Saddlers Association of North America standards makes it citable.

**Competitive landscape:** Schleese publishes detailed saddle-fit content but it's brand-bound (every road leads to a Schleese saddle). County Saddlery has fitter guides but no public freebie. The Society of Master Saddlers website is authoritative but visually dated and offers no downloadable artifact for end-buyers. EquiSearch / Horse&Hound publish fit articles but no checklist. Trumbull Mountain and Pelham Saddlery (the leading used-saddle resellers) have advice pages but no email magnets. There is no existing "the saddle fit checklist" PDF that ranks for the obvious search terms — the gap is open.

**Search-intent volume:** "Saddle fit" / "saddle fitting" / "how do I know if my saddle fits" / "used saddle fit check" — lower absolute volume than Fish.com (~15K/mo US) but dramatically higher per-signup value. The average saddle purchase is $2K–$6K, the average pad/shim system $80–$300, and these buyers tend to compound purchases over a 5–10 year horse-ownership horizon.

**Sequence theme:**
1. Welcome + checklist attached + the one rule ("the horse vetoes the saddle, not the rider").
2. Why fit changes — horse shape changes seasonally, by fitness, by age; re-fit cadence.
3. Static check: the 6 points you do with the saddle on a bare back, no rider.
4. Dynamic check: the 4 points you can only see at walk/trot/canter under saddle.
5. Sweat-pattern reads — what an even pattern means, what dry spots mean, what a "rub" means.
6. The trial period — what to test, how to document, how to return without losing money.
7. Working with a fitter — what to ask, what credentials to look for (SMS / MSA-NA / Society qualified), what a fitting should cost.
8. Library round-up — re-flock vs. re-tree, when to retire a saddle, the brands with the strongest used-market resale (affiliate links: pad brands, shim systems, Schleese / County / Custom Saddlery fitter directories).

**Affiliate hooks:** Saddle-pad brands (ThinLine, Mattes, Ecogold), shim systems (Total Saddle Fit, Equifit), saddle-fit assessment tools (gullet gauges, flexible curves), tack-shop affiliates (Dover, SmartPak), used-saddle marketplaces with affiliate programs (Trumbull Mountain, Pelham Saddlery).

**Existing/needed page:** **New route** — `/guides/saddle-fit-checklist`. Mirror the puppy-schedule structure: hero with `EmailCapture`, 12-point preview table (the same way the puppy schedule previews weeks 8–16), second capture, FAQ. Existing saddle-fit articles (already in the 42-page Saddle.com inventory) become the "deep read" CTAs at the bottom of each email.

**Build effort estimate:** **M-L.** New landing page, but the components are reusable. The PDF artwork is the heavier lift — diagrams of wither clearance, panel contact, balance point, etc. — and probably wants commissioned line illustrations rather than stock photography. Budget 1 sprint for the page + sequence and 1 sprint for the illustrated PDF.

---

## 3. Horses.com — "First-Horse Owner's 90-Day Roadmap"

**Lead-magnet name:** The First-Horse Owner's 90-Day Roadmap

**What it is:** A printable 90-day calendar (PDF, three landscape pages — one per month) plus an 8-email roadmap drip stretched to one email per 10–11 days across the 90-day window. The calendar is dated relative to "Day 0 = horse arrives at your barn" and pre-loads the appointments most first-owners miss: farrier (every 4–6 weeks, scheduled before the horse arrives), vet wellness exam + Coggins + vaccine plan in week 1, dentist within the first 60 days, fecal egg count before deworming, hay analysis if buying in bulk, insurance enrollment in the first 30 days (pre-existing condition deadline), and weekly weight-tape / body-condition-score entries. The emails carry the *decisions* the calendar implies: how to pick a boarding barn, how to interview a vet, how to build the first-aid kit, when to call vs. when to wait, basic ground manners in the first 30 days, the feed-program transition (slow! 10 days minimum), what every first-owner under-budgets for.

**Target-audience moment:** Brand-new horse owner — either bought the horse already, or signed the lease, or has a purchase pending. Overwhelmed. Has a calendar appointment with reality in 2–6 weeks. Searching for "first horse checklist" and "what I wish I knew before buying my first horse." Will pay attention to every email in week 1 and unsubscribe by week 6 if the content isn't useful — so the early emails have to be unmissable.

**Why this magnet wins:** Horse ownership is uniquely high-stakes (animal cost, board cost, recurring vet/farrier cost, the animal itself), uniquely under-documented in checklist form, and uniquely vulnerable to bad early decisions (wrong boarding barn, wrong feed program, no insurance signed before the first colic episode). Most existing "first horse" content is either rescue-org tone ("are you SURE you can afford this?") or hobbyist forum advice. A dated 90-day calendar with vet/farrier/dental/insurance deadlines pre-loaded is the artifact a new owner will actually print and stick on the tack-room wall.

**Competitive landscape:** The Horse magazine (TheHorse.com) is the closest competitor with strong veterinary editorial — but their content is article-based, not artifact-based, and their email list is publication-flavored rather than onboarding-flavored. Practical Horseman and Equus are similar. SmartPak runs strong content marketing but it's product-funnel. The American Association of Equine Practitioners (AAEP) publishes owner-facing material but with no signup mechanism. Cherry Hill's books are the canonical reference but they're long-form paid products, not lead magnets. The gap is a *dated, decision-loaded calendar* — every existing piece of content explains *what to do* without telling the owner *when*.

**Search-intent volume:** "First horse" / "buying my first horse" / "horse ownership checklist" / "horse boarding questions to ask" — ~20K/mo US combined. Lower volume than Fish.com but the per-signup LTV is the highest in the portfolio after pet insurance: a new horse owner spends $400–$1,200/mo on board alone for years, and our affiliate exposure compounds across feed, supplements, tack, vet products, and insurance.

**Sequence theme:**
1. Welcome + 90-day calendar attached + Day 0 = the day your horse arrives.
2. Picking a boarding barn — the 8 questions that matter, the 3 that are red flags.
3. Building the vet relationship — what a wellness exam covers, what to ask, Coggins + vaccines.
4. The farrier — every 4–6 weeks, why you book the standing appointment now.
5. The first-aid kit + when to call the vet (with vital-sign baselines: temp, pulse, respiration, gum color, gut sounds).
6. The feed transition — 10-day minimum, why colic risk spikes with abrupt change, hay-first philosophy.
7. Insurance — major medical, mortality, surgical; the 30-day enrollment window matters.
8. Library round-up — ground manners, basic groundwork, when to start under-saddle work, picking a trainer.

**Affiliate hooks:** Pet/horse insurance affiliates (SmartPak Health, ASPCA Equine, Markel — Markel runs a real referral program), first-aid kit components (SmartPak, Dover, Schneiders), supplement brands (Platinum Performance, SmartPak ColiCare), feed brands (Tribute, Triple Crown — many run grain-by-grain affiliate programs through equestrian retailers), books (Cherry Hill's *Horsekeeping on a Small Acreage*).

**Existing/needed page:** **New route** — `/guides/first-horse-roadmap`. Horses.com is scaffold-only, so this landing is one of the first real pages on the domain. That's an opportunity: the landing both captures emails and signals "this site is for first-time owners," which positions the whole domain.

**Build effort estimate:** **L.** Largest of the six. The PDF calendar needs three landscape pages of design work (dated grid with pre-loaded appointments), the emails are long-form (this is the highest-stakes audience and they expect depth), and the destination articles linked from each email's "deep read" don't exist yet on the scaffold — so this magnet is partially gated on having ~10 supporting articles published. Activation order #4 (after Dog stable) is correct.

---

## 4. PetFood.com — "Reading the Pet Food Label" Guide

**Lead-magnet name:** Reading the Pet Food Label (the AAFCO-Honest Guide)

**What it is:** *V1 ships as a printable guide, not the interactive tool.* A 6-page printable PDF that decodes a real pet-food bag photo, panel by panel: the AAFCO nutritional adequacy statement (the one sentence that tells you whether the food is "complete and balanced" and *how that was determined* — formulation vs. feeding trial), the guaranteed analysis (and why "min protein" is not "protein"), the ingredient list (split-ingredient tricks, named-meat vs. meat-meal, "with chicken" vs. "chicken dinner" — the AAFCO 25/95/3 rules), the manufacturer line (co-pack vs. own-plant, what "manufactured by" vs. "manufactured for" means), the calorie statement (kcal/cup vs. kcal/kg — the per-100-kcal math that lets you actually compare brands), and the recall lookup (FDA + manufacturer site). The 8-email sequence is one decoding lesson per email, ending with a "pick your top 3 brands and run them through the checklist" exercise.

**Target-audience moment:** Owner who just watched a viral TikTok / read a Reddit thread about a brand they've been feeding and is now standing in the pet-food aisle trying to figure out *which bag is actually better*. High urgency, high confusion, low trust in any single brand's marketing. They want a literacy framework, not a "best food" listicle that obviously took money from the #1 pick.

**Why this magnet wins:** The pet-food category is the most marketing-saturated in the portfolio, and every existing freebie is funded by a brand. A guide that teaches *how to read any bag* — and explicitly names the labeling tricks the FTC has called out — is the rarest thing in the space: a neutral literacy tool. It positions PetFood.com as the site that doesn't have a horse in the kibble race.

**Competitive landscape:** All About Dog Food (UK) has a comparison-tool ancestor we should study — they've been doing this for years and have a clear monetization model. Dog Food Advisor is the biggest US name but they've taken criticism (warranted) for their rating methodology and brand opacity. Truth About Pet Food is independent but has a strident voice that limits mainstream reach. WSAVA's guideline document is the source-of-truth but it's a 4-page PDF written for vets, not consumers. Our guide wins by being mainstream-tone, vet-aligned (WSAVA-citing), and giving the reader a *framework* instead of a *list*. The interactive tool, when it ships in v2, will be the strongest US analog to All About Dog Food.

**Defer the comparison tool to v2.** The interactive `/tools/compare` build (user picks 2 SKUs, gets a scorecard) is the right long-term magnet — but it's a real engineering project (SKU database, AAFCO data ingestion, recall-history scraping, price-per-100-kcal math, ongoing data freshness). Shipping the guide first proves the audience exists and validates the angle before the tool gets built. The tool then becomes a *member benefit* once membership goes live.

**Sequence theme:**
1. Welcome + the guide attached + the one sentence on every bag that matters most (the AAFCO statement).
2. AAFCO "complete and balanced" — what it means, what "formulated to meet" vs. "feeding trial" means.
3. Guaranteed analysis — converting "as fed" to "dry matter basis" so you can compare wet to dry.
4. The ingredient list — split-ingredient tricks, named-meat vs. by-product, the 25/95/3 naming rules.
5. The manufacturer line — who actually made this food, co-packers, and why it matters for recalls.
6. Kcal math — the per-100-kcal comparison that exposes "premium" brands that are mostly air.
7. Recall lookup — FDA pet-food recall feed, manufacturer transparency, the WSAVA brand questions.
8. Library round-up — the WSAVA-compliant brand list, life-stage feeding, the grain-free / DCM question, raw-feeding risks (affiliate links: pet-food retailers, scales, storage containers, books).

**Affiliate hooks:** Chewy (broad SKU coverage), pet-food retailer affiliates (Petco, Pet Supplies Plus), kitchen scales for accurate measuring, food-storage containers (Vittles Vault, Gamma2), books (Linda Case's *Dog Food Logic*).

**Existing/needed page:** **New route** — `/guides/reading-pet-food-labels`. Same template as puppy-schedule: hero capture, what's-in-the-guide preview (a screenshot of a fake-bag-panel decode), second capture, FAQ. PetFood.com is scaffold-only, so this is also one of the domain's first real pages.

**Build effort estimate:** **M** for v1 (guide). **L** for v2 (the interactive comparison tool) — defer to post-launch and probably gate as a member benefit. Activation order #5 is correct; this is gated on Horses.com being stable since both sites share scaffold-build effort.

---

## 5. Lizard.com — "Reptile First-Year Care Schedule"

**Lead-magnet name:** The Reptile First-Year Care Schedule

**What it is:** A printable 52-week schedule (PDF — one landscape page) for first-time reptile keepers, species-agnostic on purpose. The schedule columns: week, UVB bulb age (with the 6-month / 12-month replacement reminder on the correct weeks), feeding cadence by life stage (hatchling weekly schedule → juvenile → sub-adult transition points), supplementation rotation (calcium with D3, calcium without D3, multivitamin — the Mon/Wed/Fri pattern most vet behaviorists endorse), enclosure-cleaning cadence (spot daily, deep monthly), brumation prep window (Oct–Nov for temperate species, with a "skip this row if your species doesn't brumate" note), annual vet wellness, weight-log column, shed-log column. The 8-email sequence is *not* species-specific but addresses the seven decisions every keeper makes in the first year regardless of species.

**Target-audience moment:** First-time keeper, 1–8 weeks into their first reptile, realizing that the care sheet that came with the animal is wrong, the pet-store advice was wrong, and there is no single "reptile schedule" on the internet because every species page is written in isolation. They want one piece of paper that says "every week, do X; on these specific weeks, do Y."

**Why this magnet wins:** Reptile content online is either (a) species-specific deep-dives on individual forum threads or (b) generic "reptile care" articles that are too high-level to actually use. A *dated* 52-week schedule that handles the species-agnostic mechanics (UVB cycle, supplementation rotation, vet cadence, brumation window) and then points to species-specific deep reads on Lizard.com fills a real gap. It also positions the domain for keepers across species (bearded dragons, leopard geckos, ball pythons, crested geckos, blue-tongue skinks) without requiring 5 separate magnets.

**Competitive landscape:** Reptifiles publishes excellent species-specific care guides but has no portfolio-level signup magnet. ReptileBoards and Tortoise Forum are forum-only. ARAV (Association of Reptile and Amphibian Veterinarians) is authoritative but consumer-distant. Major reptile-product brands (Zoo Med, Exo Terra, Arcadia) all publish care content but it's product-funnel. YouTube creators (Snake Discovery, Reptiliatus, Wickens Wicked Reptiles) have strong audiences but their funnel is YouTube subscribe / Patreon, not an email list. A neutral species-agnostic schedule positions Lizard.com as the *non-tribal* reference in a tribal niche.

**Sequence theme:**
1. Welcome + the 52-week schedule attached + the one rule ("husbandry, not heroics").
2. UVB — why the bulb dies before it goes dark, the 6-month vs. 12-month brand split, solarmeter check.
3. Heat — gradient, basking surface vs. ambient air, the IR thermometer routine.
4. Supplementation — the Mon/Wed/Fri rotation, why D3 timing matters, the species exceptions.
5. Feeding — life-stage transitions, gut-loading insects, the obesity problem in adult lizards.
6. Brumation — what it is, what triggers it, when to facilitate vs. interrupt (species-specific notes).
7. Finding a reptile vet — ARAV directory, what an annual wellness covers, what bloodwork to ask for.
8. Library round-up — species-specific deep reads, enclosure upgrades, breeder ethics, books (affiliate links: UVB bulbs, thermometers, calcium supplements, enclosure brands).

**Affiliate hooks:** Arcadia / Zoo Med UVB bulbs, Solarmeter 6.5R (the UVB meter), Repashy / Pangea (crested gecko diet — high LTV), Zilla / Exo Terra enclosures, calcium and multivitamin brands (Repashy Calcium Plus, Zoo Med Reptivite), books (Philippe de Vosjoli's species guides), insect-feeder subscription services (Josh's Frogs, Dubia.com).

**Existing/needed page:** **New route** — `/guides/first-year-care-schedule`. Lizard.com has 51 existing pages, mostly species-specific care pages, which become the perfect "deep read" CTAs at the bottom of each email. The 51 existing pages also mean the supporting content already exists — the magnet doesn't need new article scaffolding, just the landing + sequence.

**Build effort estimate:** **M.** Landing is templated. PDF is a single landscape page with conditional rows the keeper crosses out (e.g. "ignore brumation rows if your species is tropical"). Sequence is 8 markdown files. The 51 existing species pages do the heavy lifting on linked-deep-read CTAs.

---

## 6. Vets.co — "Pet Emergency Triage Card"

**Lead-magnet name:** The Pet Emergency Triage Card (Wallet + Fridge)

**What it is:** A printable two-page PDF: page 1 is a wallet-card (cut on the dotted line, fold in half, slip into a wallet) listing the four-bucket triage — "ER NOW / ER within 1 hr / call primary care today / monitor at home" — keyed to specific symptoms (bloat / GDV, seizures, traumatic injury, ingestion of common toxins, respiratory distress, eye trauma, unproductive vomiting, neuro signs). Page 2 is a fridge card listing vital-sign baselines (temp, pulse, respiration, CRT, mucous-membrane color) by species (dog, cat, rabbit, ferret, small reptile), the ASPCA poison-control number, and a 12-item home first-aid kit checklist. The 8-email sequence is shorter-form than the others (each email is a single triage scenario worked through end-to-end) because the audience trusts brevity at this anxiety level.

**Target-audience moment:** Pet owner who just had a 2 AM scare — pet vomited blood, pet was hit by a car, pet ate chocolate, pet had a seizure — and is now Googling "is X an emergency" with their hands shaking. Also: thoughtful owner who reads about a friend's pet emergency and decides they want to be prepared *before* it happens. Either way, they want a single trusted card they can pull out without making decisions in panic.

**Why this magnet wins:** The triage decision (ER vs. wait vs. call) is the moment owners most want a vet's voice and most often don't have one. The card format is unusually durable — owners actually keep these — and the Vets.co brand has the standing to publish it credibly. It also has the highest emotional resonance of any magnet in the portfolio: the lifetime value of an email from a list of owners who *prepared for emergencies* is high, and it maps perfectly to pet-insurance affiliate revenue.

**Competitive landscape:** ASPCA Animal Poison Control publishes great content but their funnel is donations and the poison-control consult fee, not a list. AVMA publishes triage material but it's vet-facing. Pet insurance companies (Healthy Paws, Trupanion) publish triage articles to fuel acquisition but their funnel is the insurance quote — they would arguably welcome our list as a referral partner. VECCS (Veterinary Emergency and Critical Care Society) is the authoritative source we'll cite but they're not consumer-facing. No major player has shipped the wallet-card format, and the card itself is the thing the audience will photograph and share — which gives this magnet the highest organic-share potential of any in the portfolio.

**Sequence theme:**
1. Welcome + the triage card attached + the one rule ("call, don't drive — most ERs triage by phone").
2. Bloat / GDV — the #1 surgical emergency in deep-chested dogs, symptoms, the 60-minute clock.
3. Toxin ingestion — the ASPCA poison control workflow, the top 10 toxins by exposure volume, induce-vomiting myths.
4. Seizures — what to do during, what to do after, when a single seizure is and isn't an emergency.
5. Traumatic injury — moving safely, controlling bleeding, the spinal-stabilization basics.
6. Respiratory distress — open-mouth breathing in cats is always an emergency; what blue gums mean.
7. Finding an ER vet before you need one — VECCS directory, what to expect on cost, why pre-existing-condition insurance enrollment matters now.
8. Library round-up — the full first-aid kit, CPR basics (with the AVMA caveat), insurance, when to discuss DNR/quality-of-life decisions (affiliate links: pet-insurance partners, first-aid kits, thermometers, muzzles for injured pets).

**Affiliate hooks:** Pet-insurance affiliates (Healthy Paws, Trupanion, Lemonade — all have strong referral programs, this is the highest-LTV affiliate category in the portfolio), first-aid kits (Kurgo, ARCA pet-specific kits), digital rectal thermometers, basket muzzles, pet poison-control hotline subscriptions (ASPCA APCC).

**Existing/needed page:** **New route** — `/guides/emergency-triage-card`. Vets.co has 38 existing pages, mostly clinical-condition reference articles — perfect deep-read targets for the sequence.

**Build effort estimate:** **S-M.** Smallest of the six. The card is two pages of clean typography (no illustration required). The sequence is short-form. Landing is templated. The 38 existing pages give the sequence its "deep read" links without new articles. This is the cheapest magnet to ship and arguably has the highest per-signup LTV via insurance affiliates — strong candidate for an earlier-than-listed slot if Horses.com lags.

---

## Prioritization Table — what to build next

Activation order in COO.md §6 puts Fish.com #2 and Saddle.com #3. This brief endorses that order with one caveat: the **Vets.co triage card** is small enough and high-LTV enough that it should be slotted in as a "parallel small build" alongside the bigger ones — it does not need to wait for an activation slot.

| Priority | Domain | Magnet | Gated on | Build effort | Estimated revenue lever |
|---|---|---|---|---|---|
| **1 (next)** | **Fish.com** | Aquarium Cycling Survival Kit | Dog.com 7-day signup & open-rate metrics validating the loop | M | Test-kit + bacterial-supplement + filter affiliate; recurring (water testing is weekly forever) |
| **2 (parallel small)** | **Vets.co** | Pet Emergency Triage Card | Nothing — small enough to ship alongside Fish.com | S-M | Pet-insurance affiliate (highest LTV per signup in the portfolio) |
| 3 | Saddle.com | 12-Point Saddle Fit Checklist | Fish.com stable + illustrator availability for the PDF diagrams | M-L | High-AOV tack affiliate (saddles, pads, shim systems) — fewer signups but each one is high-intent |
| 4 | Horses.com | First-Horse Owner's 90-Day Roadmap | Dog.com stable + ~10 supporting articles published on Horses.com scaffold | L | Equine insurance (Markel) + SmartPak supplement / feed affiliate; high LTV, longer payback |
| 5 | Lizard.com | Reptile First-Year Care Schedule | Maintenance-only domain — slot opportunistically into a content sprint with slack | M | UVB bulb + supplement affiliate; lower per-signup LTV but high organic-traffic capture |
| 6 | PetFood.com | Reading the Pet Food Label | Horses.com stable + scaffold pages built | M (guide) → L (tool v2) | Chewy / Petco affiliate; gates membership feature (the comparison tool) |

**The two to build next: Fish.com + Vets.co.** Fish.com because the page already exists and the audience is sitting in the highest-pain moment of the fishkeeping lifecycle (immediate validation of the cross-domain pattern). Vets.co because it is the cheapest build, the highest per-signup LTV, and creates the second data point on whether the puppy-schedule pattern generalizes — without consuming a full activation slot. Saddle.com follows once those two prove the loop and an illustrator is lined up.

**What we're gating on for Fish.com specifically:** Dog.com's 7-day metrics from the Friday soft-launch. Specifically, we want to see (a) landing-page signup conversion >= 20% on organic traffic, (b) email 1 open rate >= 60%, (c) email 1 → email 2 retention >= 70%. If those numbers hold, the pattern is validated and we ship Fish.com in week 2.

---

## Mailchimp Tag Taxonomy

Shared `source_tag` naming convention so journeys are wired identically across domains and we can build cross-domain segments without re-mapping.

**Convention:** `<magnet-slug>` — lowercase, hyphenated, short enough to read in a Mailchimp interface, matching the slug used in the `EmailCapture` `source` prop.

| Domain | `source_tag` | `EmailCapture` `source` prop (hero / midpage) |
|---|---|---|
| Dog.com | `puppy-schedule` | `puppy-schedule-landing-hero` / `puppy-schedule-landing-midpage` |
| Fish.com | `cycling-guide` | `cycling-guide-landing-hero` / `cycling-guide-landing-midpage` |
| Saddle.com | `saddle-fit` | `saddle-fit-landing-hero` / `saddle-fit-landing-midpage` |
| Horses.com | `first-horse` | `first-horse-landing-hero` / `first-horse-landing-midpage` |
| PetFood.com | `food-labels` | `food-labels-landing-hero` / `food-labels-landing-midpage` |
| Lizard.com | `first-year-reptile` | `first-year-reptile-landing-hero` / `first-year-reptile-landing-midpage` |
| Vets.co | `emergency-triage` | `emergency-triage-landing-hero` / `emergency-triage-landing-midpage` |

**Secondary tag (applied automatically on signup):** `domain-<siteId>` — e.g. `domain-dog-com`, `domain-fish-com`. Lets us segment by domain regardless of magnet, useful once a single subscriber holds multiple magnets across the portfolio.

**Tertiary tag (applied by the sequence itself):** `sequence-complete-<magnet-slug>` — applied when the user reaches email 8. This is the segment that monetization journeys (membership upsell, affiliate-roundup emails, cross-domain magnet promotions) draw from. Users tagged `sequence-complete-puppy-schedule` are the warmest segment in the portfolio and earn the first cross-sell offer.

**Cross-domain rule:** when a user signs up for a second magnet on a different domain, do *not* drop them from the first journey — they get both. The journeys are short enough that overlap is fine and the cross-domain audience is the highest-value segment we'll ever build.

**Unsubscribe granularity:** Mailchimp groups, not full-list unsubscribe — so a user can unsubscribe from `cycling-guide` without losing `emergency-triage`. This is the single most important deliverability setting in the platform; verify it's configured before Fish.com ships.

---

## Production-pattern notes (shared across all six builds)

These are the things the puppy-schedule build got right and that every replication should preserve:

1. **Give away the magnet itself on the landing page.** The puppy-schedule landing previews all 9 weeks in a table. The signup is not for the *information* — it's for the *printable artifact + the cadence*. Every magnet above is designed the same way: the landing previews the contents, the signup is for the PDF and the email cadence. This is the conversion lever.

2. **Two captures, never three.** Hero + mid-page. The puppy-schedule landing does not have a third capture in the FAQ section, and conversion-tested patterns suggest a third capture reduces trust more than it lifts signups at the volume we expect.

3. **Email 1 ships the deliverable immediately.** Email 1 is the welcome with the PDF attached. `delay_after_signup: 0 minutes`. No "confirm your email" double opt-in friction unless deliverability forces it.

4. **Affiliate disclosure once, in the round-up email only.** The puppy-onboarding pattern puts the FTC-required affiliate disclosure in email 8, not in emails 1–7. The body emails are editorial; the round-up is reviews. This separation is load-bearing for trust.

5. **Every email cites at least one source.** AVMA / AAHA / AVSAB on the dog side; equivalent governing bodies per domain: SMS / MSA-NA (Saddle), AAEP (Horses), AAFCO / FDA (PetFood), ARAV (Lizard), VECCS / AVMA (Vets), fishkeeping is forum-credibility (no governing body, but cite Aquarium Co-Op / 2HR Aquarist / Diana Walstad for plants). The voice is "the editorial standard, not the loudest opinion." Hold the line.

6. **Each email links to exactly one "deep read"** on the same domain. This is the SEO + retention lever: emails feed traffic back to the long-form articles, articles feed signups back to the magnet, magnet feeds emails. The loop only closes if every email has the link.

7. **Front-matter is the contract.** Every email markdown file in every sequence uses the same front-matter keys: `subject`, `preheader`, `delay_after_signup`, `tag`. The Mailchimp import tooling depends on this being identical across domains. Do not improvise schema per site.

---

## Risks & mitigations

**1. The puppy-schedule pattern may not generalize as cleanly as we expect.**
The Dog.com audience is uniquely large, uniquely high-intent (new puppy = forcing function), and uniquely well-served by a calendar-based magnet (the developmental window is biologically dated). The Fish.com cycling audience is the closest analog — also dated, also forcing-function — which is why it's the right next test. Saddle.com and PetFood.com are less calendar-shaped and may need format tweaks. Mitigation: ship Fish.com and Vets.co first (the most-similar and the most-different cases), measure, and adjust the Saddle/Horses/PetFood/Lizard builds based on what we learn.

**2. PDF production overhead is the hidden cost.**
The puppy-schedule PDF is one page of typography. The saddle-fit checklist needs illustrated diagrams. The 90-day horse roadmap needs three landscape pages with dated grids. The pet-food label decode needs annotated photography of real bags. If we treat PDFs as "draft in Markdown, render as PDF" we ship faster; if we treat them as "design artifacts" we ship slower but get more shareable assets. Mitigation: ship Fish.com (typography-only) first to validate the loop, then commission illustration for Saddle and PetFood as separate sprints.

**3. Deliverability degrades as the portfolio grows.**
Six new magnets across six new domains, each driving signups to a shared Mailchimp account, can trigger reputation issues if any single domain has poor list hygiene. Mitigation: keep each domain on its own Mailchimp audience (not just tags within a single audience), monitor bounce rates per domain weekly, and use Mailchimp's group-based unsubscribe so cross-domain unsubscribers don't lose other journeys.

**4. Affiliate disclosure compliance varies by jurisdiction.**
FTC requires "clear and conspicuous" disclosure; EU and UK have their own rules; CA requires CCPA-style data disclosures. Mitigation: standardize the email-8 affiliate disclosure block across all sequences, link to a per-domain `/legal/affiliate-disclosure` page (this exists on Dog.com — replicate across the portfolio), and keep the body emails (1–7) free of affiliate links so the compliance surface stays small.

**5. The magnets cannibalize each other if a user signs up for two.**
A user who signs up for both the dog and cat magnets in week 1 receives 16 emails in 8 weeks. Mitigation: the cross-domain rule above (do not drop them from either journey) plus a 24-hour rate limit per recipient in Mailchimp Journeys. The cross-domain audience is the most valuable segment we'll build, so we accept higher unsubscribes from this group in exchange for the segmentation data.

**6. Editorial standards drift across domains and authors.**
The puppy-onboarding sequence is tightly source-cited (AVMA / AAHA / AVSAB). If the saddle or reptile sequences get drafted by a less rigorous author and ship with weaker citation, the portfolio voice fragments and the trust asset erodes. Mitigation: lock the email front-matter convention, require a "Sources" footer in every email, and have the COO or editorial lead sign off on each sequence's email 1 and email 8 (the bookends carry the most reputational weight).

---

## What this brief does not decide

- **Membership tier design.** Several magnets above (PetFood.com comparison tool, Vets.co triage card → live triage chat, Horses.com roadmap → 1:1 coaching) have natural upsell paths to a paid tier. The decision on which becomes the first paid product is downstream of seeing actual subscriber behavior on the free tier. Revisit after Fish.com + Vets.co data lands.

- **Quiz-style magnets.** A "what's the right [puppy / horse / saddle / reptile / food] for you" quiz is a strong alternative magnet format that could replace or supplement the PDFs at any time. Not picked here because quizzes require dynamic content and the printable-PDF + email cadence pattern is the one we know works. Worth revisiting at the 90-day portfolio review.

- **Paid acquisition.** Every magnet above is sized for organic search traffic. Paid acquisition (Meta, Google) changes the economics meaningfully and is a separate decision once the LTV per signup is measured per domain.

---

## Metrics that determine "the loop is working"

The puppy-schedule launch is the calibration. The numbers we expect to see at 7 days post-launch, and that we'll use as gating thresholds for the Fish.com and Vets.co builds:

| Metric | Target | Acceptable | Bad |
|---|---|---|---|
| Landing-page signup conversion (organic traffic) | >= 20% | 12–20% | < 12% |
| Email 1 open rate | >= 60% | 45–60% | < 45% |
| Email 1 → email 2 retention (unsubscribe rate) | <= 2% | 2–5% | > 5% |
| Email 8 open rate | >= 35% | 25–35% | < 25% |
| Email 8 affiliate click-through | >= 8% | 4–8% | < 4% |
| Sequence-complete tag rate (reached email 8) | >= 50% | 35–50% | < 35% |

If Dog.com lands in "Target" or "Acceptable" on all six, we proceed with Fish.com + Vets.co as planned. If two or more land in "Bad," we pause cross-domain expansion and iterate on Dog.com's sequence content before replicating the pattern.

**The single most diagnostic metric is sequence-complete tag rate.** A user who reaches email 8 has invested 8 weeks in our voice and is the warmest possible audience for cross-domain magnets, membership offers, and affiliate revenue. If that rate is below 35% the magnet content is wrong, the cadence is wrong, or the audience-fit is wrong — and replicating the pattern across six more domains will multiply the problem, not solve it.

---

## Cross-magnet user journeys (what we can do once 2+ are live)

Once Fish.com ships alongside Dog.com, and Vets.co lands as a parallel-small build, three cross-domain journeys become possible — these are the membership-revenue precursor patterns we want to test in the first 90 days post-portfolio-launch:

1. **Dog.com → Vets.co.** A puppy-schedule subscriber, around week 4 of the sequence (the vaccination week), receives a contextual offer for the Vets.co emergency triage card. This is the natural cross-sell — they already trust the voice, the magnet is adjacent, and the LTV uplift on a dual-signup household is roughly 1.6x the single-signup baseline.

2. **Vets.co → first-tank-owner contextual.** A Vets.co triage-card subscriber whose email engagement shows interest in exotic-pet content (open patterns on the rabbit/ferret/reptile triage emails) gets a soft introduction to the Fish.com or Lizard.com magnet. Lower conversion but higher per-conversion value because these are the multi-pet households.

3. **Horses.com → Saddle.com.** Mechanical cross-sell — the 90-day roadmap email 6 ("equipment for the first 90 days") seeds the saddle-fit checklist as a "read this before you buy a saddle" CTA. This is the highest-value cross-magnet journey in the portfolio because both audiences are pre-validated big spenders.

We will not build any of these until both ends of each journey are live and have run for >= 30 days independently. The risk of cross-promoting too early is that we burn the second list before validating it has its own organic engagement signal.

---

## First-90-days portfolio roadmap

A week-by-week view of how the six magnets sequence relative to the Dog.com soft-launch on 2026-05-29. Dates are targets, not commitments.

**Week 1 (2026-05-29 → 06-04):** Dog.com soft-launches. Monitor the six metrics above daily. Agent T finalizes Fish.com cycling drip. Agent K reviews the existing `/setup/aquarium-cycling-guide` landing for the dual `EmailCapture` placement. No new magnet builds start.

**Week 2 (2026-06-05 → 06-11):** Dog.com 7-day metrics review (Friday 06-05). Go/no-go decision on Fish.com + Vets.co. If green-lit, Fish.com landing-page revisions ship by Wednesday, Fish.com 8-email sequence drafted by Friday. Vets.co landing route created and FAQ drafted in parallel.

**Week 3 (2026-06-12 → 06-18):** Fish.com soft-launch. Vets.co triage-card PDF design (two pages, no illustrator needed). Vets.co 8-email sequence drafted.

**Week 4 (2026-06-19 → 06-25):** Vets.co soft-launch. Cross-domain signup data collection begins (the Dog → Vets cross-sell test). Saddle.com illustrator scoping conversation begins (12 diagrams is the long-pole item).

**Weeks 5–8 (2026-06-26 → 07-23):** Saddle.com build. Landing page first, then sequence, then PDF illustrations as they arrive from the illustrator. Saddle.com soft-launches week 8 if illustrations are on schedule.

**Weeks 9–12 (2026-07-24 → 08-20):** Horses.com build. Largest of the six — supporting article scaffolding for the email "deep read" CTAs is the gating dependency. Horses.com soft-launches week 12.

**Weeks 13–16:** Lizard.com and PetFood.com builds in parallel (both are dependent on slack capacity, both are lower-priority). The 90-day portfolio review lands at week 13 — that's when we revisit the membership-tier decision, the quiz-format alternative, and whether to introduce paid acquisition.

**Hard milestones:**
- 2026-06-05 — Dog.com 7-day metrics review (go/no-go on Fish.com).
- 2026-06-19 — Vets.co live (validates the small-build pattern).
- 2026-08-28 — All 7 domains have at least one live lead magnet.
- 2026-08-29 — 90-day portfolio review, membership-tier design begins.

---

## Production budget envelope (rough)

Order-of-magnitude estimates so the COO can size the content sprint correctly. Costs are budget-only, not committed.

| Magnet | Copywriting (8 emails + landing) | PDF design | Illustrations | Total |
|---|---|---|---|---|
| Fish.com cycling kit | $1.2K | $300 | — | $1.5K |
| Vets.co triage card | $1.0K | $400 | — | $1.4K |
| Saddle.com fit checklist | $1.5K | $600 | $1.5K (12 diagrams) | $3.6K |
| Horses.com 90-day roadmap | $2.0K | $800 | $400 (stock + minor) | $3.2K |
| Lizard.com 52-week schedule | $1.4K | $400 | — | $1.8K |
| PetFood.com label guide | $1.8K | $700 | $600 (annotated panel art) | $3.1K |
| **Total** | **$8.9K** | **$3.2K** | **$2.5K** | **$14.6K** |

Per-signup payback at conservative $3 LTV * year 1: portfolio breaks even at ~5K total signups across the six magnets. At the Dog.com signup velocity we've modeled (~50–80/day at steady state), the six magnets combined hit ~150–250/day and break even within 30–45 days of launch. Anything beyond that is upside that funds the Horses.com and PetFood.com scaffold buildouts.

---

## Next-step checklist for the content-sprint lead

- [ ] Confirm Fish.com cycling-guide landing has dual `EmailCapture` blocks with `source="cycling-guide-landing-hero"` and `source="cycling-guide-landing-midpage"` (review Agent K's output).
- [ ] Draft the Fish.com 8-email sequence in `apps/fish-com/src/content/email-sequences/aquarium-cycling/` mirroring puppy-onboarding structure.
- [ ] Commission PDF artwork for: cycling log (2 pages), saddle fit checklist (4-6 pages with diagrams), 90-day horse roadmap (3 landscape pages), 52-week reptile schedule (1 landscape page), pet emergency triage card (2 pages), pet food label decode (6 pages).
- [ ] Wire Mailchimp tag taxonomy in the platform — verify groups (not full-list) for unsubscribes.
- [ ] Decide illustrator vendor (saddle-fit diagrams + pet-food label decode both benefit; horse roadmap could use stock photography).
- [ ] Build new landing routes: `/guides/saddle-fit-checklist`, `/guides/first-horse-roadmap`, `/guides/reading-pet-food-labels`, `/guides/first-year-care-schedule`, `/guides/emergency-triage-card`. Reuse the puppy-schedule page as the template.
- [ ] Schedule the Dog.com 7-day metrics review for 2026-06-05.

---

## Glossary (shorthand used in this brief and in sprint discussions)

- **Magnet** — the printable PDF or interactive tool a user receives in exchange for an email signup. Always paired with a sequence.
- **Sequence** — the 8-email drip that fires from `delay_after_signup: 0` (welcome with magnet attached) through `delay_after_signup: 56 days` (round-up + affiliate disclosure).
- **Loop** — the full pattern: organic search → landing page → email capture → magnet delivery → sequence → affiliate revenue + segmented tags.
- **The pattern** — the puppy-schedule architecture: hero landing + dual capture + preview table + FAQ + 8-email source-cited sequence + email-8 affiliate disclosure block.
- **Round-up** — email 8 in any sequence. The only email containing affiliate links. The library + the affiliate disclosure live here.
- **Cross-domain audience** — subscribers tagged on more than one domain. Highest-LTV segment in the portfolio.
- **Sequence-complete** — tag automatically applied when a user receives email 8. The warmest segment for cross-sells.

---

*End of brief.*
