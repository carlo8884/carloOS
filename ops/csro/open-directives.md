# CSRO Open Directives

**Owner:** CSRO Bot · **ID format:** `csro-dir-YYYY-WW-NNN`
Status vocab: `open` · `acked` · `in-progress` · `done` · `blocked` · `dropped`

---

## Autonomous work queue (non-blocked tasks CSRO advances without Carlo)

Per the §17 autonomy mandate — when blocked, pull the next item here. Keep ≥5 live.

- [ ] **Exit-valuation model** — once research agent returns comps, build a per-domain valuation/disposition model (sell-price vs build-to-earn NPV). *(research running)*
- [ ] **Per-cluster build-priority pass** — score the ~48 owned-but-unbuilt in-scope domains (redirect / sell / hold) on a consistent rubric. Provisional now; finalize as traffic is measured.
- [ ] **Dog.com / Fish.com acquirer revenue-trajectory angle** — draft the "small-but-growing revenue + traffic" narrative that justifies the step-up from the $2.3M/$1.45M offers. No Carlo input needed to draft.
- [ ] **Duplication/redirect map** — concrete 301 plan for PetFoods→PetFood, Ferrets→Ferret, and the cluster-support names → heroes. Hand to COO.
- [ ] **Free-tier vet-directory prep** (dir-010) — OSM + free-CSV-state + AAHA scoping; zero spend.
- [ ] **Competitive read-through** — for each EARN-NOW site (Ferret, PetFood, Vets insurance), who ranks/monetizes the same queries; what's the gap.
- [ ] **Bot-quality ledger refresh** — review COO/Monetization/Visual PRs as they land against the strategy.

---

## Open

### csro-dir-2026-W22-010 → COO — free-tier vet-directory prep (no spend) (new 2026-05-30)
- **Action:** Scope/prototype a $0 directory slice: OpenStreetMap `amenity=veterinary` (ODbL) + the ~20 states publishing free license CSVs + AAHA-accredited public listings as a "premium tier." Research/prep only — no build commitment, no spend.
- **Why:** Lets a credible directory subset go live without the paid state-board pipeline or Places spend (which is Carlo-gated). Keeps the directory progressing while the budget decision waits. `[CSRO DECISION — see vet-directory-position.md §4]`
- **Done-when:** feasibility note on coverage/quality of the free slice; go/no-go on de-noindexing a subset.
- **Status:** open.

### csro-dir-2026-W22-009 → Monetization Bot — monetize Ferret.com + re-target PetFood buy-box (new 2026-05-30) ⬆ TOP
- **Action:** (a) **Ferret.com (~11K/mo, zero revenue surface):** wire affiliate on existing high-traffic pages now — per the **ferret-com allow-list** (Amazon, Chewy, Marshall Pet Products, Wysong, Carniwhole) in `bot-coordination.md §5`; FTC disclosure surfaced. (b) **Re-target the D-006 buy-box from PetFoods.com (~30) to PetFood.com (~5K)** — PR #174 hit the wrong site. Full brief: `ops/handoffs/2026-05-30-csro-to-monetization-ferret-petfood-revenue.md`.
- **Why:** Ferret.com is the highest-leverage near-term revenue move — real traffic leaking with no monetization. PetFood retarget points high-intent buy-boxes at a live audience, not a dead site. `[FACT — traffic Carlo-provided]`
- **Deadline:** this week (no content build — pure wiring).
- **Done-when:** Ferret.com affiliate live w/ disclosure; buy-box live on PetFood.com.
- **Status:** open.

### csro-dir-2026-W22-006 → Carlo — Efty URLs (traffic half RECEIVED) (updated 2026-05-30)
- **Action:** Provide **per-domain Efty listing URLs**, at least for the Tier-C sell-domain names (DogPicture, hardmoneyloans, idog, allpets + thin product names).
- **Update:** ✅ **Traffic half satisfied** — Carlo provided the live snapshot (8 measured domains), now in `strategy-disposition.md §2` + `portfolio-ranking.md §A`. Remaining: Efty URLs (unblocks `dir-008`).
- **Status:** open (Efty URLs only).

### csro-dir-2026-W22-008 → COO — Efty footer link component (new 2026-05-30)
- **Action:** Add a config-driven `eftyUrl` field per site (`packages/config`) + a discreet footer link in the shared Footer that renders only when set. Tier A (Dog/Fish) left unset → renders nothing. Per `strategy-disposition.md §4`.
- **Why:** Carlo runs Efty and wants a clear footer pointer to each site's listing; needs to be tier-gated so flagships never show it. `[FACT]`
- **Deadline:** when Efty URLs arrive (dir-006).
- **Done-when:** component live; URLs wired per tier.
- **Status:** open (blocked on dir-006 URLs).

### csro-dir-2026-W22-005 → COO — petsupplies scaffold disposition (new 2026-05-30)
- **Action:** petsupplies.com is Tabcom (out of CarloOS scope). Decide the `apps/petsupplies` scaffold: hand to Tabcom or decommission from this repo. Do NOT launch it under CarloOS.
- **Why:** A built CarloOS scaffold pointing at a separate-business domain is a launch liability + lane confusion. `[FACT]`
- **Deadline:** next merge wave.
- **Done-when:** scaffold removed or formally handed off; noted in STATUS.md.
- **Status:** open.

### csro-dir-2026-W22-003 → Carlo / COO
- **Action:** Provide per-domain registrar + renewal dates, starting with the 15 built domains (Dog.com/Fish.com first).
- **Why:** Renewal lapse on an offer-validated T1 asset = catastrophic, irreversible value loss. `[FACT]`
- **Deadline:** this week.
- **Done-when:** dates logged in `domain-inventory.md`.
- **Status:** open

---

## Closed

### csro-dir-2026-W22-004 → Carlo — CLOSED 2026-05-30
- **Resolution:** (a) petsupplies.com = Tabcom, out of scope (→ dir-005 for the scaffold); (b) equiteric.com → set aside (CSRO decision); (c) hardmoneyloans.com → SELL-DOMAIN (CSRO decision). All logged in `domain-inventory.md §4` + `strategy-disposition.md`.

### csro-dir-2026-W22-001 → Carlo — CLOSED 2026-05-30
- **Action was:** obtain the authoritative owned-domain list.
- **Resolution:** Carlo supplied the full **74-domain** list directly. Transcribed verbatim into `domain-inventory.md` v5 (46 pet · 13 horse/equine · 15 set-aside personal/other-business). All 74 verified present.
- **Outcome:** the portfolio is now anchored to a real source. Master inventory = `domain-inventory.md` v5.

### csro-dir-2026-W22-002 → Carlo — CLOSED 2026-05-30 (VOID — was based on fabricated input)
- **What happened:** I raised this directive to "confirm ownership" of domains (Cat.com, PetInsuranceReviews.com, a clean cluster taxonomy) that **I had fabricated** and mis-cited to a nonexistent `MONETIZATION-ARCHITECT.md §9`. The Monetization Bot and Carlo correctly flagged the hallucination.
- **Resolution:** the entire premise was void — those domains were never real inputs. Superseded by the authoritative list under dir-001.
- **Lesson (permanent):** domains enter the inventory **only by transcription from an authoritative owner source.** Never synthesize a domain list; never cite a doc section without verifying it exists.
