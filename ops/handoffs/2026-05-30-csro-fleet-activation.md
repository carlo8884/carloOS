---
from: CSRO
to: COO, Monetization Bot, Visual Bot, Horses.com Racing Bot, IR Bot
status: open
created: 2026-05-30
priority: standing directive
---

# CSRO Fleet Activation — every bot runs autonomously, nobody idles

**Carlo directive (2026-05-30):** the autonomy mandate is **fleet-wide.** No bot should sit waiting on CSRO,
Carlo, or another bot. The same rule I operate under applies to all of you:

## The standing rule (applies to every bot)

1. **Default to action** in your lane. Make decisions; ship; don't wait for permission on in-lane work.
2. **When blocked, route around it.** A dependency on another bot or Carlo NEVER stops your session. Drop the
   blocked item in a handoff/PR comment and immediately pick up the next non-blocked task in your queue.
3. **Keep a full queue.** Each bot maintains ≥5 ready tasks. Queues below to start; extend them yourself.
4. **Stay in lane** (`bot-coordination.md §2`) and respect the trust bar (`QC-STANDARDS.md §1`) — those are the
   only hard limits on autonomy.
5. **Report by doing.** Commits/PRs are the record; brief only when a decision or blocker needs another bot/Carlo.

---

## Per-bot starting queues (extend as you go)

### COO — heavily loaded already; ordered queue
1. **Vets.co insurance go-live readiness** (`dir-007`) — trust/diligence audit of the existing insurance hub +
   2,912 programmatic pages; sitemap/schema/disclosure; prep cutover checklist.
2. **Ferret.com launch readiness** — trust audit + ensure monetization (from Mon Bot) renders; first greenlight site.
3. **Consolidation redirects** (`consolidation-redirect-map.md`) — migrate unique surfaces then 301 PetFoods→PetFood, Ferrets→Ferret (after monetization lands).
4. **Free-tier vet-directory prep** (`dir-010`) — OSM + free-CSV states + AAHA, $0, no Carlo.
5. **Efty footer component** (`dir-008`) — config-driven `eftyUrl`, tier-gated (build now, wire URLs when Carlo sends them).
6. **petsupplies scaffold disposition** (`dir-005`) — it's Tabcom; hand off or decommission.
7. Backfill: schema/internal-link hygiene across the launch-first sites.

### Monetization Bot — loaded; ordered queue
1. **Ferret.com monetization** (`dir-009`) — TOP, money-now: buy-boxes on existing 11K/mo pages.
2. **PetFood.com buy-box retarget** (`dir-009`) — move D-006 from PetFoods (30) → PetFood (5K).
3. **Confirm Vets.co carrier-enrollment realism** (`dir-007`) — which of the 11 insurance carriers we can self-serve enroll with (gates real payout).
4. **Dog.com / Fish.com** — confirm affiliate surfaces live + clean on existing traffic (protect-asset; no risky changes).
5. **Horse-cluster commerce layer** (`dir-012` Layer 2) — tack buy-boxes on saddle/horses intent pages.
6. **Mediavine Journey staging** (`dir-011`) — prep the display-ad integration (all trafficked sites qualify; pending Carlo's free-to-join confirm).
7. Backfill: email lead-magnet sequences for the audience-capture layer (`dir-012` Layer 1).

### Visual Bot — UNDER-USED; dedicated queue (see also `csro-to-visual` brief below)
1. **Launch-first visual sign-off:** Ferret.com, then Vets.co insurance, then PetFood.com — magazine-baseline, no placeholders, mobile clean. These are the sites going live first; they need your gate cleared.
2. **Audience-capture UX** (`dir-012` Layer 1) — design the EmailCapture / lead-magnet placement on saddle/horses + ferret/petfood high-intent pages so it converts without hurting trust.
3. **Buy-box / ReviewCard visual polish** on the monetized pages (Ferret, PetFood) — commerce that looks credible converts better.
4. **Efty footer link styling** (`dir-008`) — discreet, on-brand, tier-appropriate (must NOT read "distressed seller").
5. **Per-site differentiation** continues on the trafficked sites (your existing lane work).

### Horses.com Racing Bot — IDLE; activated (see `csro-to-racing` brief below)
1. **Racing/bloodstock content + monetization angle for horses.com** — the racing vertical that gates Horses.com's tier. What's the betting-adjacent / bloodstock / supplement opportunity, within trust + compliance?
2. **Input to the horse-cluster build spec** (`dir-012`) — does a racing angle strengthen the Equine Network pitch or warrant a different buyer?
3. **Competitive read** on equestrian racing media (who monetizes racing traffic, how).

### IR Bot — IDLE; activated (see `csro-to-ir` brief below)
1. **Adversarial review of the CSRO strategy registers** — `strategy-disposition.md`, `valuation-model.md`,
   `strategic-acquirers.md`, `launch-readiness.md`. Where am I wrong? File dissent in
   `ops/handoffs/ir-bot-strategy-dissent-*.md`. (I respond within 24h per charter.)
2. **Audit the EARN-NOW monetization PRs** (Ferret, PetFood) for trust-bar compliance before they go live.
3. **Pressure-test the valuation `[EST]` figures** — they're sandbox-unverified; flag anything load-bearing that needs off-sandbox confirmation before it reaches Carlo.

---

## Coordination

- Lane conflicts → `bot-coordination.md §8` (first-merge-wins; one push-back then escalate).
- Cross-bot blockers → handoff in `ops/handoffs/`, tag the bot, keep moving.
- CSRO is the strategy/priority clearinghouse — if your queue empties, ping CSRO for the next priority rather than idling.

**Nobody waits. Everybody builds.**
