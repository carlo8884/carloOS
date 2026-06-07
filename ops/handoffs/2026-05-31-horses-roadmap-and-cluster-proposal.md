---
from: Horses.com Vertical Specialist (Racing/Equine Bot)
to: CSRO (for approval / dispatch)
status: proposal — awaiting CSRO prioritization
created: 2026-05-31
re: Horses.com strategic roadmap + prioritized cluster proposal (Hybrid decision, Carlo 2026-05-31)
aligns_with: strategy-disposition.md (Horses = VALIDATE-FIRST), horse-cluster-build-spec (dir-012), dir-016 (fork = Hybrid)
---

# Horses.com — Strategic Roadmap & Cluster Proposal

**Carlo's decision (2026-05-31):** Horses.com is **Hybrid** — a broad general equine authority **with a prominent
non-wagering racing vertical.** This roadmap operationalizes that.

**My role (per Carlo's charter):** vertical specialist under CSRO. I plan, research, scope, and propose. I build
**only** a narrow task CSRO assigns. No solo content dumps. This document is a **proposal for CSRO to approve or
dispatch** — not a build.

**Sequencing reality (do not skip):** `strategy-disposition.md` has Horses.com as **VALIDATE-FIRST, behind the
Ferret/PetFood launch cohort.** So nothing here competes with the launch cohort. The immediate ask is the
**cheap validation probe** (§4) — low cost, no build — and everything else is staged to dispatch only after it
clears + CSRO re-prioritizes.

Label key: `[FACT]` in-repo/verifiable · `[RESEARCH]` external, sandbox-unverified · `[HYPOTHESIS]` inference.

---

## 1. Architecture — what Horses.com IS under the Hybrid decision

Two pillars on one premium domain, sharing nav, schema, internal-link graph, and audience capture:

**Pillar A — Broad equine authority** (the bulk of search + the EEAT backbone)
- Breeds · Health & conditions · Care & ownership · Nutrition & supplements · Disciplines · Tack (coordinated with
  Saddle.com to avoid duplication)

**Pillar B — Non-wagering racing vertical** (the differentiator + the affluent, high-intent audience)
- Race types & major races · Bloodstock basics · Ownership education · Training/safety · Racehorse care &
  aftercare · Racing history · Beginner explainers

**Hard line (Carlo's racing rules):** racing content stays inside the **allowed** list. **No** odds/picks/fair-
odds/EV/best-bets/sportsbook/ADW/handicapping/scraped-or-licensed-racing-data without explicit Carlo approval.
The §3 friction analysis from dir-016 stands: the value/EV engine in `apps/horse-racing` stays **parked**; only
its trust-safe editorial harvests into Pillar B.

**Asset-reuse note (value-preserving):** the prior-session `apps/horse-racing` app contains trust-safe content
(ownership education, bloodstock basics, racing history, beginner "first Derby", race-type explainers) that maps
directly onto Pillar B. **Recommendation: harvest that content into the horses.com racing vertical (COO-dispatched)
and retire the standalone app's identity** — the Hybrid decision means racing lives on horses.com, not a separate
app. This converts already-written, CI-green content into the approved structure at near-zero cost. `[FACT]`

---

## 2. Prioritized cluster proposal (each carries the mandated 8 fields)

Priority = (search demand × commercial/acquirer value × trust-safety) ÷ build effort, **gated behind validation +
launch-cohort sequencing.** Full per-page specs live in the private backlog (§5); the cluster-level cases are here.

### P0 — Validate before any big build (cheap, no/low build)
See §4 — the demand/monetization/keyword probe. This is the only P0; it gates everything below.

---

### P1-a — Horse Health & Conditions hub  ⭐ highest authority+commerce value
- **Why it matters:** mirrors the proven Dog.com `/symptoms` + `/conditions` model — the highest-EEAT, highest-
  citation, highest-recurring-search surface in any pet vertical. Anchors Horses.com as a *reference*, not a blog. `[HYPOTHESIS from Dog.com precedent — FACT that the model exists]`
- **Target audience:** worried/searching horse owners (broad, year-round, high volume).
- **Buyer/acquirer relevance:** a structured conditions reference = the "authority + audience" asset every equine/
  media buyer underwrites; strongest EEAT signal on the domain.
- **Monetization path:** equine supplement + vet-telehealth + insurance affiliate (Carlo-gated vendors); display
  (Mediavine Journey once traffic clears). High recurring-purchase intent on joint/gut/hoof conditions.
- **Internal links:** hub → condition spokes → relevant breed pages + nutrition cluster + care cluster.
- **Image/visual requirement:** premium, NON-clinical, NO AI-generated animals or fake vets (QC §1). Real
  licensed equine photography per condition where credible; diagram-style illustrations for anatomy. **Visual Bot scope.**
- **Trust/compliance risk:** MEDIUM — health content must be "Editorial team / sourced from cited references,"
  no fabricated DVM bylines, no individualized medical advice; defer-to-vet callouts. trust-guard enforced.
- **Done-when:** hub + an initial vetted set of high-search conditions live with schema, sourced references,
  internal links, disclosure; trust-guard/link-check/metadata-policy green; Visual sign-off; CSRO dispatch only.

### P1-b — Racehorse Ownership & Syndicates (racing vertical anchor)  ⭐ highest racing monetization
- **Why it matters:** the affluent, high-intent racing audience that converts — without touching wagering.
  Fractional ownership is growing fast (MyRacehorse ~100k owners, $50M+ fractionalized). `[RESEARCH]`
- **Target audience:** affluent ownership-curious fans; gift/bucket-list buyers.
- **Buyer/acquirer relevance:** an affluent, captured ownership audience is exactly the membership-grade list a
  media/events buyer pays up for; also the cleanest racing money (no gambling load).
- **Monetization path:** ownership/syndicate **referral** + equine **insurance** affiliate (both Carlo-gated
  vendors); a paid "first-time owner" guide (digital product). NO wagering.
- **Internal links:** ownership hub → cost/fractional/syndicate explainers → bloodstock cluster → care/aftercare.
- **Image/visual requirement:** aspirational ownership imagery (paddock, winner's-circle-style, foal/mare) —
  licensed, no AI humans. **Visual Bot scope.**
- **Trust/compliance risk:** MEDIUM — fractional shares are securities; **educate, do not solicit**; no
  guaranteed-return language. Already drafted trust-safe in `apps/horse-racing` (harvestable).
- **Done-when:** ownership hub + 3 explainers + cost calculator live, disclosure inline, schema, Visual sign-off,
  monetization seams documented for Monetization Bot; CSRO dispatch only.

### P1-c — Major Races & Race Types (seasonal traffic + GEO citation magnet)
- **Why it matters:** Triple Crown / Derby / Breeders' Cup drive enormous seasonal spikes (~16M Derby viewers,
  52% female) — the top-of-funnel that feeds the whole domain. `[RESEARCH]`
- **Target audience:** casual + seasonal viewers (the casual→committed conversion wedge).
- **Buyer/acquirer relevance:** seasonal traffic + a "your way into the sport" on-ramp = audience growth engine.
- **Monetization path:** display (seasonal RPM), experience/travel affiliate (Carlo-gated), funnel into ownership
  + newsletter. NO odds/betting.
- **Internal links:** race hub → individual race explainers → how-racing-works → ownership + history.
- **Image/visual requirement:** marquee race-day photography (licensed; no trademarked logos/marks). **Visual scope.**
- **Trust/compliance risk:** LOW (factual/heritage) — must avoid trademark misuse + any wagering framing.
- **Done-when:** race hub + Triple Crown + Derby + Breeders' Cup + "how racing works" live, schema, links,
  Visual sign-off; CSRO dispatch only.

### P2 — Equine Nutrition & Supplements (recurring-commerce engine)
- **Why:** highest recurring-purchase intent in the equine space (joint, gut, hoof, senior). **Monetization:**
  supplement affiliate (high AOV, recurring). **Audience:** active owners. **Acquirer:** commerce depth.
  **Links:** nutrition hub ↔ health conditions ↔ breeds (breed-specific needs). **Visual:** product-context +
  feeding imagery (no AI). **Risk:** MEDIUM — no fabricated testing claims ("we tested"), buyer's-guide framing
  only; coordinate buy-box wiring with Monetization. **Done-when:** hub + top recurring-need guides, dispatched.

### P2 — Care & Ownership 101 (audience-capture backbone)
- **Why:** first-horse, feeding, hoof, dental, vaccination schedules = the high-intent pages dir-012 Layer-1
  names for **email capture.** **Monetization:** lead magnets → list (the acquirer-legible asset) + supplement/
  tack affiliate. **Audience:** new/aspiring owners. **Acquirer:** the email list headline. **Links:** care hub ↔
  health ↔ nutrition. **Visual:** approachable how-to imagery (no AI). **Risk:** LOW-MED (no medical advice).
  **Done-when:** Layer-1 lead magnets live on the named high-intent pages (coordinate COO/Monetization).

### P3 — Disciplines, Racing History, Aftercare/OTTB, Bloodstock basics (authority + heritage breadth)
- Lower-priority breadth that compounds authority and internal-linking. Each scoped individually in the backlog;
  Aftercare/OTTB is a strong EEAT/trust asset (retired-racehorse second careers) with an engaged audience.
  Activate only after P1 clears and only on demand evidence.

---

## 3. Cross-lane + coordination map (so nothing overlaps)

| Work | Lane | My role |
|---|---|---|
| Page builds (content) | **COO** | I scope; CSRO dispatches; COO builds |
| EmailCapture / lead magnets / funnels | **Monetization Bot** | I identify placement; they wire |
| Affiliate routes / buy-boxes / `/go` | **Monetization Bot** | I name the monetization path; they implement |
| Photography / visual identity | **Visual Bot** | I specify the visual *requirement* per cluster; they execute |
| Tack/equipment (avoid Saddle.com dup) | **Saddle.com + Monetization** | I flag overlap; CSRO arbitrates split |
| Cluster strategy / research / roadmap | **ME (this lane)** | owned |

**Saddle.com de-duplication flag:** tack/equipment buyer's guides exist on Saddle.com (~55 routes). Horses.com
should link to, not duplicate, Saddle.com tack content — keeps the cross-portfolio graph clean and avoids
canonicalization conflicts. CSRO to confirm the split. `[FACT — Saddle has the tack lane]`

---

## 4. The P0 validation probe (immediate, cheap, no build) — recommend CSRO greenlight this only, now

Per `strategy-disposition.md` stage-gate, before any cluster build:
1. **Keyword/demand math** — pull search-volume + difficulty for the P1 cluster heads (horse health conditions,
   racehorse ownership, Triple Crown/Derby) to confirm real pull. *Needs:* Carlo's traffic data (`dir-006`) +/or
   a keyword source. I can draft the target-term list now; the volume pull may be Carlo-gated.
2. **Monetization model** — per-cluster revenue concept (affiliate RPM × intent × volume) — I can draft from the
   vendor allow-list + comps.
3. **Cheap buyer probe** — confirm the audience+commerce framing lands (CSRO/Carlo lane).
**Done-when:** a one-page validation verdict per P1 cluster → CSRO decides which (if any) to dispatch to COO.

---

## 5. The private idea backlog (maintained, not dumped)

Seeded and maintained at `ops/handoffs/horses-idea-backlog.md` — the living, prioritized idea list (the "1000-item
backlog" grows there over time). **Policy: activate only the highest-value clusters; the backlog is a reservoir,
not a build queue.** Nothing in it builds without a CSRO dispatch.

---

## 6. What I'm asking CSRO for

1. **Approve the architecture** (Pillar A + non-wagering Pillar B) and the P1 ranking (health → ownership → races).
2. **Greenlight the P0 validation probe** (cheap, no build) so the stage-gate runs before any build effort.
3. **Rule on the `apps/horse-racing` harvest-and-retire** recommendation (§1) — convert trust-safe content into
   Pillar B, park the value/EV engine.
4. **Confirm the Saddle.com tack split** (§3) to prevent duplication.
5. **Dispatch nothing to build yet** unless you choose to — I will not build absent a narrow assigned task.

*Reporting to CSRO per operating rhythm. Launch cohort (Ferret/PetFood) still comes first; this is staged behind
it and gated on validation.*
