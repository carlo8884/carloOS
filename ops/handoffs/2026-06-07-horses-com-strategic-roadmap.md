---
from: horses-bot
to: csro
status: review
created: 2026-06-07
next_action: "CSRO: review roadmap; approve/dispatch only the top 1-2 clusters AFTER the launch cohort, as narrow non-overlapping tasks."
---

# Horses.com — Strategic Roadmap (Hybrid Equine Authority + Non-Wagering Racing Vertical)

**Scope of this doc:** STRATEGY / PLANNING ONLY. No pages built, no content PRs, no app-code edits. One handoff for CSRO review.

**Sequencing law:** The launch cohort (Vets / Ferret / PetFood / Dog / Fish) ships FIRST. Horses.com compounds in the background and must NOT distract from launch readiness. Nothing in this roadmap is "build now." It is a queue to draw from AFTER the cohort lands.

---

## 1. Hybrid positioning statement

Horses.com is positioned as the **broad, general-interest equine authority** — the canonical reference an owner, rider, or shopper reaches first for breeds, disciplines, health, nutrition, care, ownership economics, and tack — **with a prominent, clearly-bounded NON-WAGERING racing vertical** layered on top. The racing vertical is an *educational and reference* surface (race types, governance, bloodstock basics, ownership education, racehorse care and aftercare, training, and history), explicitly NOT a betting, handicapping, odds, or picks resource. The hybrid is the moat: most equine sites are either soft lifestyle blogs or narrow betting/handicapping plays; Horses.com is the depth-and-breadth reference that *also* explains racing to the millions who watch the Triple Crown and Breeders' Cup but never wager — a high-intent, high-citation, brand-safe audience that no wagering site can serve and no generic pet site has the authority to capture.

---

## 2. Current-state audit (verified against `apps/horses-com/src/app/**`)

**What exists now (real dirs/clusters):**

| Cluster | Hub | Spokes (verified count) | Notes |
|---|---|---|---|
| **Breeds** | `/breeds` (+ `[slug]` programmatic, `[slug]/health`) | **52 breeds** in `src/data/breeds.ts`; only `quarter-horse` has a static override dir | Data-driven, strong foundation. Health sub-route per breed already wired. |
| **Disciplines** | `/disciplines` (+ `[slug]/equipment`) | **14** (dressage, show-jumping, eventing, reining, cutting, barrel-racing, endurance, equitation, trail, western-pleasure, hunter-under-saddle, ranch-riding, vaulting, combined-driving) | Mature. Each has an `/equipment` sub-route — good monetization scaffold. |
| **Health** | `/health` | **20** (colic, laminitis, cushings-ppid, EMS, ulcers, strangles, navicular, ringbone, lameness, heaves, west-nile, etc.) | Deep, clinical-reference quality. Strong EEAT/GEO surface. |
| **Care** | `/care` | **14** (blanketing, body-clipping, deworming, farrier-schedule, fencing, fly-control, grooming, hoof-care, pasture, trailering, turnout, winter/summer) | Solid practical cluster. |
| **Nutrition** | `/nutrition` | **12** (forage, hay-types, grain, ration-balancers, beet-pulp, easy/hard-keeper, senior, performance, salt/electrolytes, toxic-plants, water) | Strong; feeds the BCS tool. |
| **Tack** | `/tack` | **10** (bits, bridles, girths, halters, helmets, martingales, saddle-pads, boots/wraps, stirrups, blanket-weights) | Commercial backbone. Each links discipline `/equipment`. |
| **Ownership** | `/ownership` | **10** (buying-first-horse, leasing, boarding, cost, insurance, pre-purchase-exam, choosing-a-vet, first-aid-kit, body-language, senior) | High-intent, lead-gen/affiliate-ready. |
| **Racing (non-wagering)** | `/racing` (+ `/racing/glossary`) | **11** (TB flat, harness, QH racing, jump racing, triple-crown, breeders-cup, race-types-and-classes, OTTB-aftercare, racehorse-training, the-people-of-racing, glossary) | Already explicitly non-wagering; cites Jockey Club, USTA, AQHA, TAA, AAEP. Excellent compliant base to expand. |
| **Guides** | `/guides` | **3** (dental-care, vaccination-schedule, saddle-fit) | Thin — needs to become a real cluster or fold into care/health. |
| **Reviews** | `/reviews` | **2** (best-equine-supplements, best-winter-blankets) | Thin. Highest monetization upside per page; most underbuilt. |
| **Supplements** | `/supplements` | **1** (joint-supplements) | Stub — should be a buying-guide cluster. |
| **Tools** | `/tools` | **1** (body-condition-score / Henneke) | One working calculator. Largest single GEO/engagement gap. |
| **Reference** | `/glossary`, `/first-horse-roadmap`, `/data`, `/editorial-standards`, `/disclosure`, `/legal/*` | — | Trust/infra surfaces present. |

**What's strong:** Breeds (52, programmatic), Health (20, clinical depth), the non-wagering Racing vertical (already compliant and well-cited), Disciplines (14 with equipment sub-routes). This is a genuine authority spine.

**What's thin / missing:**
- **Reviews (2) and Supplements (1)** — the highest-monetization surfaces are the least built.
- **Tools (1)** — only the Henneke BCS calculator exists; no feed/weight/gestation/dosage calculators. Biggest GEO + engagement gap.
- **Guides (3)** — orphan-ish; no clear hub→spoke graph.
- **Bloodstock / ownership-of-racehorses education** — racing vertical covers the sport but not the *non-wagering ownership/economics* angle (syndicates, claiming basics, sales education) that is high-intent and brand-safe.
- **No buying-guide depth** under tack beyond category explainers (no "best X for Y" cluster tied to `/go`).

---

## 3. Prioritized cluster proposals (Top 10, ranked)

Every proposal carries all 8 packet fields. Racing clusters are marked **NON-WAGERING**. Anything needing Carlo approval is flagged, not proposed as ready-to-build.

### #1 — Horse Calculators & Tools cluster (expand `/tools`)
- **Why it matters:** Only one calculator exists. Calculators are the single highest-leverage GEO + engagement + internal-link asset; they get cited by AI Overviews/Perplexity and pull links. Largest gap vs. opportunity.
- **Target audience:** Owners, barn managers, new buyers — high-intent, repeat-use.
- **Buyer/acquirer relevance:** Tools = sticky, defensible, category-defining assets that raise valuation multiples; demonstrable engagement data.
- **Monetization path:** Each calculator feeds a buying decision → nutrition/supplement/tack `/go` links (e.g., feed calculator → ration balancer; weight tape → dewormer dosing → supplement). Indirect but durable.
- **Internal links:** Hub `/tools` ↔ `/nutrition`, `/health`, `/care`, `/ownership/cost-of-owning-a-horse`. Reciprocal with BCS.
- **Image/visual requirement:** Light — diagram/illustration per tool; no stock-human shots. Visual Bot can template.
- **Trust/compliance risk:** LOW. No clinical dosing *advice* — calculators output ranges with "consult your vet" framing; source-cite formulas (NRC, weight-tape method). No fabricated stats.
- **Done-when:** `/tools` has 5–7 working calculators (feed/forage, weight estimator, gestation/foaling-date, blanket-weight selector, BCS [done], boarding/cost estimator), each source-cited, each linking ≥2 reference clusters; trust-guard/metadata/link-check green.

### #2 — Tack & Gear Buying Guides ("best X" cluster under `/reviews` + `/tack`)
- **Why it matters:** Highest direct-monetization surface and currently the thinnest (2 reviews). Each guide is a compounding affiliate asset.
- **Target audience:** Active shoppers at purchase intent (helmets, blankets, boots, supplements, saddle pads).
- **Buyer/acquirer relevance:** Direct revenue surface acquirers underwrite; proves the site converts, not just informs.
- **Monetization path:** Every CTA via `/go/[vendor]/[sku]` (Monetization Bot owns the route; COO owns editorial structure). Amazon `boltonpets20-20` + Skimlinks + pending SmartPak/Dover.
- **Internal links:** `/reviews` hub ↔ `/tack/*` category explainers ↔ relevant `/disciplines/[slug]/equipment`. Reciprocal.
- **Image/visual requirement:** Product-category imagery (no fake "we tested" lab shots — trust bar). Visual Bot curated.
- **Trust/compliance risk:** MEDIUM. **No first-person "we tested/calibrated" claims** (QC §1). No paid favorable reviews (editorial site). Framing must be "based on cited specs and owner-relevant criteria." Coordinate with Monetization on `/go` wiring.
- **Done-when:** 10–15 buying guides live, all CTAs via `/go`, FTC disclosure above each monetized surface, zero affiliate-route leakage, no first-person testing claims, link-check green.

### #3 — Non-Wagering Racing Ownership & Bloodstock Education **[NON-WAGERING]**
- **Why it matters:** Extends the proven racing vertical into the *ownership/economics* angle nobody else covers cleanly — high-intent, brand-safe, citation-worthy.
- **Target audience:** Aspiring racehorse owners, syndicate-curious fans, OTTB adopters, students of the sport.
- **Buyer/acquirer relevance:** Differentiated, defensible content an equine-media acquirer cannot easily replicate; reinforces the hybrid moat.
- **Monetization path:** Lead-gen adjacency (ownership education → insurance, pre-purchase-exam, aftercare orgs); affiliate-light. Primarily authority/traffic value.
- **Internal links:** `/racing` hub ↔ `/ownership/*`, `/breeds/thoroughbred`, `/racing/off-track-thoroughbred-aftercare`, `/racing/the-people-of-racing`.
- **Image/visual requirement:** Editorial racing/farm imagery with full attribution; no AI-generated humans.
- **Trust/compliance risk:** LOW *as scoped* (syndicate basics, claiming-race *mechanics as education*, sales/auction *explainers*, ownership costs). **FLAG (needs Carlo approval, do NOT build):** anything touching claiming as an *investment/EV* angle, "how to profit," fair-value pricing of horses as a betting proxy, or links to bloodstock-as-speculation tools. Keep strictly educational.
- **Done-when:** 8–12 explainers (what is a syndicate, ownership costs, claiming mechanics explained, the sales/auction calendar, licensing basics, aftercare obligations), each cites a governing body (Jockey Club/TOBA/TAA), no wagering/EV language, green CI.

### #4 — Breeds deep-dive enrichment (upgrade the 52-breed programmatic set)
- **Why it matters:** Breeds is the broadest authority hub and already programmatic; enriching each entry (history, temperament, disciplines, health predispositions, buyer notes) turns thin templates into citation magnets and avoids thin-programmatic suppression.
- **Target audience:** Researchers, prospective buyers, students, AI answer surfaces.
- **Buyer/acquirer relevance:** Breadth + depth = the textbook authority signal acquirers value; 52 hubs interlinking is a major graph.
- **Monetization path:** Breed → discipline → tack/equipment funnels; breed → ownership cost. Indirect.
- **Internal links:** `/breeds/[slug]` ↔ `/breeds/[slug]/health` ↔ `/disciplines/*` ↔ `/care`, `/nutrition`. Cross-portfolio to Saddle.com where relevant.
- **Image/visual requirement:** One real attributed photo per breed (Visual Bot manifest). HIGH volume — sequence behind cohort.
- **Trust/compliance risk:** LOW. No fabricated breed stats; cite registries (AQHA, Jockey Club, breed associations). "Horses.com Editorial" byline only.
- **Done-when:** All 52 breed pages have substantive (non-thin) sections + ≥1 attributed image + health sub-route populated; no duplicate boilerplate; metadata-policy green.

### #5 — Equine Health Library expansion + symptom/condition hub structure
- **Why it matters:** Health (20) is already strong; deepening to a true hub→cluster (by body system / by symptom) maximizes EEAT and AI citation on the most-searched, most-cited equine queries.
- **Target audience:** Worried owners (high urgency, high search volume), AI answer surfaces.
- **Buyer/acquirer relevance:** Clinical-reference authority is the hardest-to-replicate, highest-trust asset class.
- **Monetization path:** Indirect — health → supplements/care products via `/go`; lead-gen to vet/insurance. Keep disclosures clean.
- **Internal links:** `/health` hub ↔ `/care`, `/nutrition`, `/ownership/choosing-a-vet`, breed health sub-routes. Cross-link to Vets.co.
- **Image/visual requirement:** Anatomical diagrams / condition illustrations; NO AI-generated clinical scenes (QC §1).
- **Trust/compliance risk:** MEDIUM. Strict trust bar — no DVM byline, "cite references" framing, no first-person clinical claims, no treatment-as-advice. trust-guard must stay green.
- **Done-when:** Health reorganized into body-system/symptom sub-hubs, 10–15 new condition spokes, each cites AAEP/Merck Vet Manual-class sources, no fabricated credentials, CI green.

### #6 — Discipline technique & training guides (deepen the 14 disciplines)
- **Why it matters:** Disciplines hub exists but is mostly overview-level; technique/training/progression guides add depth and pull long-tail + AI citations.
- **Target audience:** Active riders, students, instructors.
- **Buyer/acquirer relevance:** Engagement + dwell-time signal; rounds out the "complete reference" claim.
- **Monetization path:** Technique → equipment `/equipment` sub-routes → `/go`. Indirect-to-direct.
- **Internal links:** `/disciplines/[slug]` ↔ `/disciplines/[slug]/equipment` ↔ `/tack/*`, `/breeds/*`.
- **Image/visual requirement:** Action/instructional imagery, attributed; no AI humans.
- **Trust/compliance risk:** LOW. Editorial byline; no credentialed-instructor fabrication.
- **Done-when:** Each of 14 disciplines has 3–5 technique/progression spokes interlinked to equipment; link-check green.

### #7 — Ownership economics & lead-gen cluster (deepen `/ownership`)
- **Why it matters:** Ownership (10) is the highest commercial-intent general cluster (insurance, boarding, pre-purchase exam, cost) — lead-gen gold, low trust risk.
- **Target audience:** First-time and prospective buyers (decision-stage).
- **Buyer/acquirer relevance:** Lead-gen surfaces have clear revenue attribution acquirers like.
- **Monetization path:** Insurance/boarding/finance lead-gen; pre-purchase-exam → vet referral. Coordinate with Monetization.
- **Internal links:** `/ownership` ↔ `/tools/cost-estimator`, `/health/choosing-a-vet`, `/breeds`, `/racing` ownership.
- **Image/visual requirement:** Lifestyle/barn imagery, attributed.
- **Trust/compliance risk:** LOW–MEDIUM. Disclosures above lead-gen forms; no inflated cost stats.
- **Done-when:** 8–10 decision-stage guides + cost-estimator tool integration, disclosures present, green CI.

### #8 — Racing history & explainers expansion **[NON-WAGERING]**
- **Why it matters:** Triple Crown / Breeders' Cup / great-horses content captures the massive casual-fan, brand-safe seasonal audience that never wagers — pure authority + traffic.
- **Target audience:** Casual race-watchers, students, history buffs.
- **Buyer/acquirer relevance:** Seasonal traffic spikes + evergreen library; brand-safe.
- **Monetization path:** Display-ad (post-threshold) + soft merch/book affiliate. Low direct, high traffic.
- **Internal links:** `/racing` hub ↔ triple-crown, breeders-cup, the-people-of-racing, breeds/thoroughbred.
- **Image/visual requirement:** Historical/editorial imagery, fully attributed.
- **Trust/compliance risk:** LOW. **FLAG:** no odds, no "best bets," no handicapping, no sportsbook/ADW links — strictly history/explainer.
- **Done-when:** 10–12 history/explainer spokes (great horses, race-day explained, governance, surfaces, careers), all non-wagering, cite Jockey Club/NTRA, CI green.

### #9 — Nutrition & feeding decision guides (deepen `/nutrition` + tie to tools)
- **Why it matters:** Nutrition (12) is solid but can become a decision system feeding the feed-calculator; high-intent, supplement-adjacent.
- **Target audience:** Owners managing weight/performance/metabolic horses.
- **Buyer/acquirer relevance:** Supplement affiliate adjacency; ties tools to commerce.
- **Monetization path:** Feed/supplement `/go` links from decision guides; coordinate with Monetization on clinical/medicated buy-box rules.
- **Internal links:** `/nutrition` ↔ `/tools` (feed calc) ↔ `/health` (EMS, ulcers) ↔ `/supplements`.
- **Image/visual requirement:** Feed/forage imagery, attributed.
- **Trust/compliance risk:** MEDIUM. No medicated-product claims; disclosures above buy-boxes; no fabricated nutrient stats — cite NRC.
- **Done-when:** 6–8 decision guides linked to feed calculator + supplement guides, disclosures clean, CI green.

### #10 — Glossary & reference-system consolidation (fold `/guides` into real clusters)
- **Why it matters:** `/guides` (3) and `/glossary` are orphan-prone; consolidating into a proper reference graph fixes internal-linking and indexing efficiency.
- **Target audience:** All segments + AI surfaces (glossaries are citation magnets).
- **Buyer/acquirer relevance:** Indexing hygiene + internal-link strength = crawl efficiency acquirers' SEO diligence checks.
- **Monetization path:** Indirect (link equity routing to commercial pages).
- **Internal links:** Glossary terms ↔ relevant health/care/tack/racing spokes; retire orphan guides into care/health.
- **Image/visual requirement:** Minimal.
- **Trust/compliance risk:** LOW.
- **Done-when:** `/guides` items rehomed or hubbed, glossary cross-linked bidirectionally, zero orphan pages, link-check strict green.

---

## 4. Private 1000-item backlog (summarized — themed buckets, not a content dump)

Approximate counts to show the *shape* of the long-term queue:

| Bucket | Approx. count | Trust/monetization shape |
|---|---|---|
| Breed deep-dives & enrichment (52 base × variants/sub-topics) | ~120 | Authority; indirect monetization |
| Discipline technique & training guides | ~90 | Engagement; equipment-funnel |
| Health/condition spokes (by body system & symptom) | ~110 | High-trust; strict QC §1 |
| Care & management how-tos (seasonal, facility, hoof, parasite) | ~80 | Practical; light monetization |
| Nutrition & feeding decision guides | ~70 | Supplement-adjacent; cite NRC |
| Tack/gear buying guides ("best X") | ~80 | **HIGH monetization** via `/go` |
| Supplement & product category guides | ~50 | **HIGH monetization**; medicated-claim caution |
| Ownership economics & lead-gen | ~60 | Lead-gen; disclosures required |
| Calculators & interactive tools | ~25 | **HIGH GEO/engagement**; low risk |
| **Non-wagering racing explainers** | ~70 | Brand-safe; **NON-WAGERING only** |
| **Non-wagering racing ownership/bloodstock education** | ~40 | Differentiated; some items **FLAG for Carlo** |
| Racing history & great-horses library | ~50 | Seasonal traffic; non-wagering |
| Glossary & reference terms | ~90 | Citation magnets; indexing hygiene |
| Comparison/decision wizards (breed-finder, discipline-finder) | ~15 | Category-defining tools |
| Cross-portfolio/internal-link & schema hardening tasks | ~30 | Infra/SEO hygiene |
| **Total** | **~1000** | |

Racing buckets are scoped strictly to allowed topics (race types, major races, bloodstock *basics*, ownership *education*, training/safety, racehorse care, history, beginner explainers). Any item drifting toward odds/picks/EV/handicapping/sportsbook/ADW/scraped data is held behind a Carlo-approval flag and excluded from the build-ready queue.

---

## 5. CSRO recommendation

**Activate FIRST (after the launch cohort lands), in this order:**

1. **#1 — Calculators & Tools cluster.** Highest combined GEO × engagement × acquirer-value at LOW trust risk. Tools are category-defining, get AI-cited, pull links, and feed every commercial cluster downstream. One narrow, non-overlapping task; minimal lane conflict (COO tools lane + light Visual). This is the single best compounding asset to seed in the background.

2. **#2 — Tack & Gear Buying Guides.** Highest *direct* monetization surface and currently the thinnest. Pairs naturally with #1 (calculators route into buying guides). Requires Monetization coordination for `/go` wiring and strict QC §1 (no first-person "we tested" claims, no paid reviews) — so dispatch only as a tightly-scoped, disclosure-gated task.

**Why this pair:** Together they maximize **monetization × acquirer-value × low-trust-risk** — tools build the defensible engagement/citation moat while buying guides turn that traffic into revenue, and both can compound quietly without competing for launch-cohort attention. The **non-wagering racing ownership cluster (#3)** is the strongest *differentiation* play but should follow these two, since it is authority-rich but monetization-light and carries items that need Carlo approval before any build.

**Hold for Carlo approval (do NOT dispatch):** any racing item touching odds, picks, EV/fair-value, handicapping, sportsbook/ADW links, or scraped/licensed racing data, and the "claiming-as-investment" angle inside #3.
