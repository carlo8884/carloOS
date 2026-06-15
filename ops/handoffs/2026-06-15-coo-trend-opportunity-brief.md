---
from: COO
to: Carlo (+ CSRO, Monetization, Visual)
status: roadmap (research-backed GEO opportunity wave — execution in progress)
created: 2026-06-15
next_action: ship the build wave (PRs #787-#789 + agent PRs), then Monetization wires affiliate on the commercial pages
---

# Trend-Opportunity Brief — June 2026 search-trend GEO wave

Carlo directive (2026-06-15): research what people are searching, find where Google +
AI answer surfaces will route traffic to us, recommend, and build. This brief records
the ranked roadmap behind the build wave now shipping. Sourced from June 2026 web
research (Google-trend roundups, pet-industry trend reports, primary clinical/regulatory
sources). Every item scored in the CLAUDE.md §6 five-field format.

## The thesis

AI answer surfaces (AI Overviews, ChatGPT, Claude, Perplexity) reward calibrated,
primary-source, well-structured answers to **rising** questions that incumbents haven't
covered yet. The biggest wins are first-mover GEO cornerstones on fast-climbing queries
where no pet authority owns the answer — captured with extractable TL;DRs + FAQPage
schema + cited primary sources.

## Shipped / in-flight this wave

| # | Asset | Site | Query signal | Status |
|---|---|---|---|---|
| 1 | Ozempic for Dogs / GLP-1 cornerstone | Dog.com | "ozempic for dogs", rising; no pet-authority answer | **Merged #787** |
| 2 | Ozempic for Cats / GLP-1 (cats-first) | PetFood.com | OKV-119 is cats-first; even lower competition | **Merged #788** |
| 3 | Cat Grimace Scale pain tool | Vets.co | "cat grimace scale" +679% | **PR #789** |
| 4 | Fresh vs kibble dog food | Dog.com | fresh dog food +86.5% since 2021 | agent PR in flight |
| 5 | Dog DNA tests explainer | Dog.com | ~135k searches/mo | agent PR in flight |
| 6 | Best small dogs for apartments | Dog.com | "small dog breeds" peaking at 100 | agent PR in flight |
| 7 | GLP-1-style pet foods (debunk) | PetFood.com | "Ozempic-like" food marketing 2026 | agent PR in flight |
| 8 | Pet food recall reference | PetFoods.com | "pet food recall 2026" recurring | agent PR in flight |

## Detailed scoring (§6 five-field)

### GLP-1 / "Ozempic for pets" cluster (#1, #2, #7) — P1, shipped
- **SEO:** Rising head-terms ("ozempic for dogs/cats") + long-tail GLP-1 cluster; low pet-vertical competition; freshness window open now.
- **GEO:** Highest in this wave. OKV-119 (Okava/Vivani) is the first pet GLP-1 in trials (cats-first, FDA filing ~2027-28). No pet authority owns the answer — first-mover citation magnet. Extractable TL;DR + FAQPage + primary sources (FDA-CVM, Pet Poison Helpline, APOP).
- **Monetization:** Indirect — funnels to weight-management diets / calorie tools. Trust-sensitive medical topic; intentionally not hard-commercial.
- **Build Effort:** S each (content). 3 pages, cross-linked, hub-wired.
- **Priority:** P1 — time-sensitive first-mover.

### Cat Grimace Scale tool (#3) — P1, PR #789
- **SEO:** +679% rising query, tool intent.
- **GEO:** Very high — interactive tool + full SoftwareApplication+HowTo+FAQPage stack + peer-reviewed source (Evangelista 2019). Uncopyable in-SERP.
- **Monetization:** Indirect (find-a-vet). Trust-sensitive; not monetized.
- **Build Effort:** M — interactive component + schema.
- **Priority:** P1.

### Fresh food (#4) & Dog DNA (#5) — P1/P2, COMMERCIAL — route to Monetization
- **SEO:** Fresh food +86.5% since 2021; DNA ~135k/mo. Both high-volume, high commercial intent.
- **GEO:** Moderate-high — buyer's-guide structure, comparison tables.
- **Monetization:** **HIGH and direct.** Fresh food (Nom Nom / Ollie / Farmer's Dog category) and DNA tests (Embark / Wisdom Panel) are strong affiliate categories. **These pages ship editorial-only (no /go links — COO lane rule); Monetization must wire affiliate CTAs.** See companion handoff `2026-06-15-coo-to-monetization-trend-commercial-pages.md`.
- **Build Effort:** S each.
- **Priority:** P1 (fresh food), P2 (DNA).

### Small dogs for apartments (#6) — P2
- **SEO:** "Small dog breeds" top-rising (peaked 100 Jan 2026); apartment-living angle is high-intent.
- **GEO:** Moderate — listicle + breed cross-links into existing breed hub.
- **Monetization:** Low-direct; feeds breed → product journeys.
- **Build Effort:** S. **Priority:** P2.

### Pet food recall reference (#8) — P2
- **SEO:** "Pet food recall 2026" recurring, high-volume, evergreen if built as process (not a dated list).
- **GEO:** High citation potential as the canonical "how to check / what to do" reference (FDA/AVMA-cited).
- **Monetization:** Low. Trust/authority asset.
- **Build Effort:** S. **Priority:** P2.

## Researched but NOT built this wave (backlog candidates)

| Opportunity | Signal | Why deferred / note |
|---|---|---|
| Dog/cat **age & senior** care depth | senior-pet care rising; longevity interest high | Fits existing health hubs; P2 expansion |
| **Robot vacuum / odor for pet hair** | 27k & 15k searches, +83% | Off-editorial-brand (gear commerce); better as a Monetization-led comparison if at all |
| **Hypoallergenic dog breeds** | consistently high | Breed-hub spoke; P2 |
| **GLP-1 for cats clinical depth** on Vets.co | clinical-authority angle | Possible Vets.co companion to #2 once cat trial reports (summer 2026) |
| **Cat pain / QoL** content cluster | pairs with #3 tool | Tool ships first; content cluster is a P2 follow-on |

## Cross-bot routing

- **Monetization:** wire affiliate on #4 (fresh food) and #5 (DNA) — see dedicated handoff. Prioritize fresh food (highest intent + volume).
- **Visual:** #3 (grimace tool) and the GLP-1 pages are high-traffic candidates; tool pages benefit from a clean hero. Visual's call.
- **CSRO:** this wave is net-new content during polish mode — Carlo explicitly slotted it (2026-06-15). Flagging for awareness; not a §8a violation.

## Trust note

Every page in this wave is built to QC §1: no fabricated stats (qualitative where a number
isn't verifiable), "Editorial team" bylines only, calibrated language, primary-source
citations, "consult your veterinarian" framing on all health/medical topics, and explicit
safety guidance (e.g., no human painkillers for cats). COO reviews each agent-drafted page
against the trust bar before merge — CI cannot catch fabricated facts.
