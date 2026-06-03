# CarloOS Overnight Conveyor — Multi-Lane Standing Queue

**Owner:** CSRO (orchestrator). **Created:** 2026-06-03 (overnight autonomous run).
**Directive (Carlo, 2026-06-03):** run Visual + Monetization + IR + Design-bot in dynamic-workflow
(parallel sub-agent) mode; keep everyone's queue deep; operate autonomously overnight; if anyone hits
a question, pick the highest-value interpretation and proceed — do not let questions stall progress.

**Governing law (unchanged):** every item is REAL — no filler. An item earns a slot only if it raises
asset value, traffic, revenue, trust, or launch quality. Capacity target is large (toward 1000) and is
filled by the *generation framework* below as inspection surfaces genuine gaps — NOT by padding.

**Cohort order (D16):** Ferret -> PetFood -> Vets -> Fish -> Dog (Dog last, most polish).

---

## ORCHESTRATION RULES (how the conveyor runs overnight)

1. **Lane non-overlap by file-territory.** Visual touches page hero/visual regions + `image-queries.json`.
   Monetization touches CTAs/`/go`/disclosures. IR is read-only + writes `ops/handoffs/`. COO touches
   `scripts/ci`, hubs, metadata, docs. Never two agents in the same file.
2. **Manifest is single-writer.** `scripts/image-queries.json` may be edited by only ONE in-flight agent
   at a time (it is a shared file; concurrent edits = guaranteed merge conflict). Serialize all Visual
   photo-coverage agents. (Learned the hard way: PR #475 forked pre-#473 and had to be union-merged.)
3. **Site non-overlap for same-lane parallelism.** Two Visual agents may run only on different sites.
4. **Every agent:** work in an isolated worktree, run the 3 gates (trust-guard, metadata-policy,
   link-check) + per-app `tsc --noEmit`, confirm any added component is IMPORTED (the recurring bug),
   open a DRAFT PR, report back. CSRO verifies imports + union-safety, then merges on `verify` green.
5. **Min 5 active queue items.** Refill from the generation framework whenever the wave drains.
6. **No Carlo interrupts overnight** except QC §1 trust-bar conflicts, security incidents, or anything
   costing > $0. Everything else: pick best value, proceed, log it here.

---

## STATUS KEY
`[ ]` queued · `[~]` in flight (PR open) · `[x]` shipped · `[hold:REASON]` serialized/blocked

---

## LANE V — VISUAL / PREMIUM DESIGN BOT
Source of truth: `ops/handoffs/2026-06-03-visual-premium-design-review.md` (scores: Dog 3.8, PetFood
3.6, Fish 3.5, Vets 3.4, Ferret 3.3). Goal: drive every cohort site to >=4.5 premium.

- [x] Photo coverage on Dog/PetFood/Vets hubs (14 slots) — PR #473.
- [~] Unsplash TOS-attribution fix (33 rendered + 10 meta URLs -> StockImage) — PR #475.
- [ ] **Photo coverage on Fish + Ferret hubs** (the 2 sites #473 skipped). *hold:MANIFEST until #475 merges.*
- [ ] **Hero positioning P0** — heroes sit in a white band below the masthead on all 5; composite into
      the dark band as a full-bleed treatment. Per-site layout work; start with Dog (highest value).
- [ ] **Mobile layout audit P1** — hardcoded `gridTemplateColumns`/`flex-row` that break on narrow
      viewports across the 5 cohort homepages + hubs. One site per agent.
- [ ] Per-site visual differentiation pass — ensure each cohort site reads distinct, not templated
      (Dog mass-market / Vets clinical / Fish magazine / PetFood reference / Ferret indie hobbyist).
- [ ] Remaining slots from the review's 27-slot gap table not covered by #473/#475.
- [ ] OG-image coverage audit — every hub/tool page has a real `ogImage` (post-sync), not a raw CDN URL.

## LANE M — MONETIZATION
Source: `ops/handoffs/2026-06-03-csro-premium-scorecard-and-marching-orders.md` + §8a marching orders.

- [x] Cohort disclosure audit 5/5 (Fish #470 last; Dog/Vets/PetFood/Ferret prior).
- [ ] **Horses.com + Saddle.com direct-CTA -> /go sweep** — §8a flags direct commercial CTAs bypassing
      the `/go/[vendor]/[sku]` click-tracker; route them all + disclosure above. *Non-cohort, free now.*
- [ ] **Clinical / medicated buy-box sweep (Vets + PetFood)** — any medicated/Rx product CTA needs the
      D14-style safety microcopy + disclosure above the buy-box; no buy-box on pure-editorial clinical pages.
- [ ] **Ferret comfort-supply buy-box** — if/when added, must carry the exact D14 microcopy
      ("Comfort supplies do not treat adrenal disease, insulinoma, or other medical conditions. Work with
      an exotic-pet veterinarian for diagnosis and treatment.") + disclosure above.
- [ ] Portfolio-wide `/go` leakage scan — confirm ZERO commercial CTAs link direct to vendor across all
      10 sites (not just cohort); convert any stragglers.
- [ ] Petfoods.com + Lizard.com disclosure + CTA-routing pass (non-cohort, but real assets).
- [ ] New-tool monetization tie-ins — calculators/quizzes should surface a relevant disclosed `/go` CTA
      where genuinely useful (e.g. dog-calorie -> food picks), never forced.

## LANE I — IR (TRUST / VALUATION REVIEW)
Source: `ops/handoffs/2026-06-03-ir-tier1-risk-review.md` (cohort: Ferret/Fish clear; PetFood/Vets/Dog
minor, remediated; no Tier-1).

- [x] Cohort Tier-1 risk review v1 + remediations.
- [ ] **Re-review post-Visual/Monetization wave** — re-scan the 5 cohort sites after #473/#475 + the
      monetization sweeps; confirm no NEW Tier-1 risk introduced; sign off each site against §8a bar.
- [ ] Trust-framing review of the NEW interactive tools (ferret readiness-quiz, all calculators) — ensure
      no implied medical/diagnostic authority; calibrated language; vet-deferral where health-adjacent.
- [ ] Citation/primary-source audit on the highest-traffic editorial pages per cohort site (EEAT/GEO).
- [ ] Affiliate-disclosure placement spot-audit (above-the-fold on every monetized surface) post-sweeps.

## LANE C — COO (CSRO-EXECUTED, my lane)
- [ ] **Unsplash CI guard** — add a `scripts/ci` rule failing the build on any hardcoded
      `images.unsplash.com` / raw Pexels CDN URL in `apps/**`, locking in #475 so the violation can't
      regress. *Add AFTER #475 merges (else it fails on the not-yet-removed URLs).*
- [ ] Hub/spoke/orphan + metadata/schema/breadcrumb audit on Fish + Ferret (deepest, last reviewed).
- [ ] Non-cohort hygiene pass (Horses, Saddle, Lizard, Petfoods, Ferrets) — orphans, thin pages, dup titles.
- [ ] Standing: re-run the 3 gates before every push; add each new tool to its tools-hub ItemList + sitemap.

---

## GENERATION FRAMEWORK (how the queue refills toward capacity — never padded)
When a lane drains below 5 items, generate the next real items by running these inspections and slotting
ONLY what they surface:
- **Per site x per hub:** does it have a hero image, schema (ItemList/DefinedTermSet/WebApplication),
  breadcrumb, intro, >=8 linked spokes, and a disclosed CTA where commercial? Each missing piece = 1 item.
- **Per tool/calculator:** compute-QA, schema, mobile layout, a relevant disclosed CTA = up to 4 items.
- **Per editorial spoke:** thin-content check, primary-source citation, internal-link reciprocity,
  metadata length, image presence = up to 5 items.
- **Per site:** premium-rubric re-score (8 dims) -> each dim below 4.5 = 1 targeted item.
- This is how capacity grows toward 1000: breadth(10 sites) x surfaces x dimensions, all real.

---

## REPORTING (for Carlo's morning check-in)
- Top of this file shows live `[~]`/`[x]` state per lane.
- Each merged PR # is logged against its item.
- Anything that hit a >$0 / vendor / DNS / trust-bar decision is parked in a "FOR CARLO" list at run end.
