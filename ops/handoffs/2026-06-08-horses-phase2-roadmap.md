---
from: horses-bot
to: csro
status: review
created: 2026-06-08
in_reply_to: ops/handoffs/2026-06-08-csro-to-horses-directive.md
next_action: "CSRO/COO: approve the build ORDER below; dispatch only the top 1–2 clusters AFTER the launch cohort lands, as narrow non-overlapping tasks. Each cluster = its own gated PR."
---

# Horses.com — Phase-2 Racing/Equine Cluster Roadmap (Build ORDER, scored)

**Scope:** STRATEGY / PLANNING ONLY. No pages built here. This is the queue CSRO/COO draws from when bandwidth opens, AFTER the launch cohort (Dog/Fish/Ferret/PetFood/Vets) is polished and DNS-flipped per CLAUDE.md §8a.

**Hard constraints (apply to every cluster):**
- Racing content is **NON-WAGERING** — no odds, betting, handicapping, tips, or picks (QC §1).
- Nothing here re-proposes existing pages (see `2026-06-08-csro-to-horses-directive.md` §1). All candidates are **net-new clusters**.
- Each cluster is its own gated PR, cites this brief, meets `2026-06-08-horses-racing-quality-bar.md`.

---

## Recommended build ORDER (at a glance)

| # | Cluster | Priority | Effort | Why this slot |
|---|---|---|---|---|
| 1 | **Great Racehorses — historical profiles** | P1 | M | Highest citation-magnet + GEO; evergreen; zero wagering surface; feeds internal links to triple-crown/breeders-cup/history. |
| 2 | **Racing for Newcomers — "How to read a race card"** | P1 | S | Explanatory hub that captures Triple-Crown/Breeders'-Cup spectator intent; strong AI-Overview extractability; non-wagering by construction. |
| 3 | **Retired Racehorse Second Careers (OTTB expansion)** | P2 | M | Extends existing OTTB-aftercare into a real cluster; adoption + gear monetization; brand-safe, acquirer-loved. |
| 4 | **Racetrack / Venue Guides** | P2 | M | Place-based authority + travel/event intent; schema-rich; pairs with great-racehorses + triple-crown. |
| 5 | **Famous Trainers & Jockeys (historical)** | P2 | M | Completes the people-of-racing graph; biography citation magnets; links to great-racehorses. |
| 6 | **Racing Silks & Colors** | P3 | S | Niche, visual, citation-friendly explainer; light monetization; good internal-link glue. |
| 7 | **The Claiming Game — explainer** | P3 | S | Single deep explanatory page/mini-cluster; complements existing race-types/claiming; non-wagering economics angle. |
| 8 | **International Racing (Royal Ascot / Melbourne Cup, informational)** | P3 | M | Broadens topical authority + seasonal traffic; informational only; some duplication risk to manage. |
| 9 | **Thoroughbred Conformation & Gait** | P3 | M | Bridges racing ↔ broad-equine health/breeds; technical citation magnet; lower commercial intent. |

---

## Cluster scorecards (5-field format — CLAUDE.md §6)

### 1. Great Racehorses — historical profiles  · **P1 · Effort M**
Hub `/racing/great-racehorses` + programmatic-or-static spokes (Secretariat, Man o' War, Seabiscuit, Citation, Affirmation/Affirmed, Kelso, Ruffian, Zenyatta, American Pharoah, Justify, Frankel, etc.). Each: career, lineage, connections, legacy, where to learn more.

- **SEO Impact:** High. Evergreen, durable head + long-tail demand ("secretariat", "fastest racehorse ever"); low freshness decay; strong internal-link sink for triple-crown/breeders-cup/history. Structured data: `Article` + (where applicable) `Person`/`Animal`-adjacent profile schema.
- **GEO Impact:** Very high. Biographies are prime citation magnets for ChatGPT/Perplexity/AI Overviews — factual, verifiable, primary-source-linkable (Jockey Club, breed registries, official racing records). Category of "definitive profile" pages AI surfaces preferentially cite.
- **Monetization Impact:** Indirect/moderate. Books & documentaries (Amazon — *Seabiscuit*, *Secretariat*), framed art/prints (POD-adjacent), zero wagering. Low commercial intent per page but high volume + strong brand-safety.
- **Build Effort:** **M.** New hub + ~10–20 spoke pages (data-driven model preferred, mirroring `/breeds`). New `racehorses.ts` data file; reuse ArticleLayout/Breadcrumb/FAQ primitives.
- **Priority:** **P1.** Best GEO/citation ROI in the queue, fully non-wagering, compounding evergreen asset. Build first when racing resumes.

### 2. Racing for Newcomers — "How to read a race card"  · **P1 · Effort S**
Explanatory hub `/racing/for-newcomers` (or `/racing/racing-for-beginners`) + spokes: reading a race card, what the numbers mean, race-day glossary in context, what happens on race day, how races are classified (links existing race-types), spectator etiquette. **Explicitly non-wagering** — explains the card as information, never as a betting aid.

- **SEO Impact:** Strong. "How to read a race card / racing program" is high-volume, recurring, seasonal-spiking (Derby/Breeders' Cup weeks). Moderate difficulty; freshness-friendly.
- **GEO Impact:** Very high. Step-by-step explanatory content is maximally extractable for AI Overviews + Perplexity; clear scope ("what each field means") = clean citations.
- **Monetization Impact:** Low-moderate. Beginner books/guides (Amazon), event-day apparel, binoculars/gear cross-links. Captures top-of-funnel spectators who later convert on ownership/OTTB pages.
- **Build Effort:** **S.** Small hub + 5–6 explanatory pages, mostly prose + diagrams (request imagery via Visual handoff — do NOT touch image-queries). Heavy reuse of existing glossary.
- **Priority:** **P1.** Cheapest high-GEO win; converts the "watch the Triple Crown, never wager" audience the hybrid thesis targets. Build alongside or right after #1.

### 3. Retired Racehorse Second Careers (OTTB expansion)  · **P2 · Effort M**
Expands existing `off-track-thoroughbred-aftercare` into a cluster `/racing/retired-racehorse-careers`: second-career disciplines (eventing, dressage, trail, lesson horse), retraining timeline, adoption pathways, RRP Thoroughbred Makeover overview, cost/care realities (links broad-equine care/health/ownership).

- **SEO Impact:** High. "OTTB for sale / retraining / off-track thoroughbred" is durable, high-intent; bridges racing ↔ broad-equine clusters, strengthening the whole site's graph.
- **GEO Impact:** High. Process + decision content; adoption org references (TAA-accredited orgs, RRP) are strong primary-source citations.
- **Monetization Impact:** **High (safe).** Retraining gear, beginner tack (Saddle.com cross-links), care/health affiliate surfaces, adoption is informational (no lead-gen on rescue). One of the best brand-safe revenue clusters in racing.
- **Build Effort:** **M.** New hub + ~6–10 spokes; reuses care/health/discipline link targets. Coordinate with Monetization Bot for `/go` gear routes (their lane).
- **Priority:** **P2.** Strong revenue + authority bridge; sequence after the two P1 GEO wins.

### 4. Racetrack / Venue Guides  · **P2 · Effort M**
Hub `/racing/racetracks` + spokes (Churchill Downs, Saratoga, Belmont Park, Santa Anita, Keeneland, Del Mar, Pimlico, Gulfstream, etc.): history, signature races, the track itself, visiting-as-a-spectator (informational, non-wagering).

- **SEO Impact:** High. Place-based + event queries ("Saratoga racing schedule", "Churchill Downs guide") with seasonal spikes; strong `Place`/`Event`-style structured data fit.
- **GEO Impact:** High. Venue facts (founded, surface, signature stakes) are clean, verifiable citation magnets.
- **Monetization Impact:** Moderate. Travel/event apparel, books, photography prints; informational venue guides (no ticketing/wagering affiliates).
- **Build Effort:** **M.** New hub + ~8–12 spokes; data-driven `racetracks.ts` model recommended. Imagery via Visual handoff.
- **Priority:** **P2.** Pairs naturally with #1 (great racehorses) and triple-crown; build after the OTTB cluster.

### 5. Famous Trainers & Jockeys (historical)  · **P2 · Effort M**
Hub `/racing/legends` (or extend `the-people-of-racing`) + historical biographies (Bill Shoemaker, Eddie Arcaro, Laffit Pincay Jr., D. Wayne Lukas, Bob Baffert-as-historical-figure, etc.). Strictly biographical/historical; no active-tipping or current-form angle.

- **SEO Impact:** Moderate-high. Biography demand is steady; completes the people-of-racing internal graph.
- **GEO Impact:** High. Person biographies are reliable citation magnets when primary-source-anchored (Hall of Fame, official records).
- **Monetization Impact:** Low. Books/biographies (Amazon); minimal direct commercial intent.
- **Build Effort:** **M.** Hub + ~10–15 bios; data-driven model. Careful sourcing (Racing Hall of Fame, Jockey Club).
- **Priority:** **P2.** Authority-completing but lower revenue than OTTB/venues; sequence mid-queue.

### 6. Racing Silks & Colors  · **P3 · Effort S**
Single deep explainer + small cluster `/racing/silks-and-colors`: what silks are, how colors are registered (Jockey Club), heraldry/history, notable silks. Highly visual.

- **SEO Impact:** Moderate. Niche but distinctive; low competition; good freshness durability.
- **GEO Impact:** Moderate-high. Self-contained "what are racing silks" answer = clean AI citation.
- **Monetization Impact:** Low. Visual/print merch angle; otherwise informational.
- **Build Effort:** **S.** 1 hub + 2–4 pages; visual-heavy (Visual handoff required).
- **Priority:** **P3.** Nice internal-link glue; backlog until core clusters land.

### 7. The Claiming Game — explainer  · **P3 · Effort S**
Deep explainer `/racing/the-claiming-game`: how claiming races work as a market mechanism, why they exist, risk to horses, the economics — complements existing race-types/claiming page without duplicating it. Non-wagering economics framing only.

- **SEO Impact:** Moderate. Targeted long-tail ("how do claiming races work"); low difficulty.
- **GEO Impact:** High for its niche. Mechanism-explainer content cites well.
- **Monetization Impact:** Low. Mostly editorial/authority value.
- **Build Effort:** **S.** 1–2 pages; must be carefully scoped to NOT overlap the existing race-types/claiming spoke (canonicalization risk — coordinate links).
- **Priority:** **P3.** Backlog; pair with OTTB (claiming → aftercare narrative).

### 8. International Racing (Royal Ascot / Melbourne Cup, informational)  · **P3 · Effort M**
Hub `/racing/international` + spokes (Royal Ascot, Melbourne Cup, Prix de l'Arc, Dubai World Cup, Grand National-as-event): the events, history, traditions — informational, non-wagering.

- **SEO Impact:** Moderate-high with strong seasonal spikes; broadens topical authority beyond US racing.
- **GEO Impact:** High. Event facts cite well across surfaces.
- **Monetization Impact:** Low-moderate. Travel/apparel/books; informational.
- **Build Effort:** **M.** Hub + ~6–8 spokes. **Duplication risk:** Grand National overlaps existing jump-racing; Melbourne Cup must not become a wagering surface (it is a heavy betting event globally — keep strictly informational). Manage canonical links carefully.
- **Priority:** **P3.** Valuable breadth but flag the wagering-adjacency and overlap; sequence later with extra QC.

### 9. Thoroughbred Conformation & Gait  · **P3 · Effort M**
`/racing/thoroughbred-conformation` (+ gait): how conformation relates to racing aptitude, gait mechanics, soundness — bridges racing ↔ broad-equine health/breeds.

- **SEO Impact:** Moderate. Technical long-tail; durable.
- **GEO Impact:** High for niche. Technical reference cites well when source-anchored (AAEP, veterinary/biomechanics sources).
- **Monetization Impact:** Low. Editorial/authority; some health-product adjacency.
- **Build Effort:** **M.** 4–8 technical pages; must align with broad-equine health voice and avoid clinical dose/diagnosis (QC §1.5/§3.3). Imagery via Visual.
- **Priority:** **P3.** Strong graph-bridge but lower commercial pull; backlog.

---

## Sequencing note for CSRO/COO

Build in numbered order, **one cluster per gated PR**, only after the launch cohort lands. The two **P1** clusters (Great Racehorses, Racing for Newcomers) deliver the highest GEO/citation ROI for the lowest brand-safety risk and should be the first dispatch when racing resumes. Items #8 and #7 carry duplication/wagering-adjacency flags and need extra QC review before dispatch.
