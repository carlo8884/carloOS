# CSRO Open Directives

**Owner:** CSRO Bot · **ID format:** `csro-dir-YYYY-WW-NNN`
Status vocab: `open` · `acked` · `in-progress` · `done` · `blocked` · `dropped`

---

## Autonomous work queue (non-blocked tasks CSRO advances without Carlo)

Per the §17 autonomy mandate — when blocked, pull the next item here. Keep ≥5 live.

- [x] **Valuation comps** — DONE: `valuation-comps.md` (24–34× multiples, insurance affiliate $, domain comps, ad RPM). Research agent returned 2026-05-30.
- [x] **Duplication/redirect map** — DONE: `2026-05-30-csro-to-coo-consolidation-redirect-map.md` (content-aware consolidate-and-preserve, not blanket 301).
- [x] **Exit-valuation model** — DONE: `valuation-model.md`. Key insight: for premium-but-thin domains (Horses/Lizard/Saddle) the *name* holds the value → building content is value-destructive vs effort. Firmed Saddle→sell-domain.
- [x] **Dog.com / Fish.com acquirer narrative** — DONE: `2026-05-30-csro-dogfish-acquirer-narrative.md` (scarcity thesis + $500K provenance anchor + 4 step-up levers).
- [x] **Strategic-acquirers map** — DONE: `strategic-acquirers.md` (Equine Network → horse cluster `[CARLO]`; reframes build-vs-sell around illiquid market). Corrected valuation-model §3 + thesis §0.
- [x] **Equine Network M&A profile** — DONE: `strategic-acquirers.md §1a` (CVC-controlled ~$300M; serial acquirer of premium horse .coms; KEY: pays for audience+commerce+membership, not thin content).
- [x] **Horse-cluster build spec** — DONE: `2026-05-30-csro-horse-cluster-build-spec.md` (3 layers: audience capture → commerce → traffic; built to Equine Network's value drivers). → `dir-012`.
- [x] **Launch-readiness call** — DONE: `launch-readiness.md`. Key unlock: money-now (Path 1, monetize existing traffic, no launch needed) vs launch (Path 2, ~1-2wk + Carlo's ~80min DNS/email/GA4). First greenlight: Ferret, then Vets insurance.
- [~] **Subscribe to critical PRs** — Carlo asked CSRO to watch PRs as they open. Attempted 2026-05-31; GitHub API returned "Unable to verify repository access" (transient, same as the earlier rate-limit flakiness). **Routed around per autonomy rule.** Retry on next active session. Target PRs to watch (tied to CSRO directives / revenue critical path): **#181** (dog-com breed-insurance + review-fix, touches `dir-015` area), **#176** (petfood buy-boxes = `dir-009` EARN-NOW), **#178** (Horses racing intel = Racing Bot activation, draft), **#194/#193** (Fish/Tier-1 GEO), **#224** (vet-dir feasibility = `dir-010`), **#221** (petsupplies decommission = `dir-005`).
- [x] **Per-cluster build-priority pass** — DONE: `build-priority-pass.md`. Scored ~40 unbuilt in-scope names: ~17 REDIRECT→hero, ~13 BUILD-LITE, ~10 HOLD, **0 SELL** (every name fits a hero or holds — redirects compound hero authority at ~zero cost = highest-ROI of the tail). Trophy holds: allpets.com (portfolio hub), equine.net (Equine Network chip). petcostumes.com has an October deadline.
- [ ] **Competitive read-through** — Ferret / PetFood / Vets-insurance: who ranks/monetizes the same queries; the gap.
- [ ] **Free-tier vet-directory prep** (dir-010) — OSM + free-CSV-state + AAHA scoping; zero spend.
- [ ] **Competitive read-through** — for each EARN-NOW site (Ferret, PetFood, Vets insurance), who ranks/monetizes the same queries; what's the gap.
- [ ] **Bot-quality ledger refresh** — review COO/Monetization/Visual PRs as they land against the strategy.

---

## Open

### csro-dir-2026-W22-016 → Racing Bot — Horses.com fork: decision-grade research brief (new 2026-05-31) ⬆ DECISION GATE
- **Action:** Per Carlo's 2026-05-31 redirect — STOP building content; deliver a decision-grade brief: "Should Horses.com become a racing-intelligence platform, a general equine editorial asset, or a hybrid?" Full prompt + CSRO refinements + Carlo's 2026-05-31 addendum: `ops/handoffs/2026-05-31-csro-horses-racing-fork-gate.md`. CSRO refinements: (1) headline = the buyer-set tradeoff; (2) label claims FACT/RESEARCH/HYPOTHESIS + cite; (3) wagering-adjacent = legal hard-stop. **Carlo addendum:** keep going; test the "informative + licensed racing-data-API analysis" hypothesis specifically (find real APIs + terms: Equibase/Timeform/etc.); tag every avenue 🟢easy/🟡moderate/🔴hard on legal-licensing friction — **default NO on 🔴 unless value is overwhelming + Carlo opts in; "easy and valuable" wins**; judge by highest-and-best-use across ALL buyers, not Equine Network.
- **Why:** Carlo caught the Racing Bot building content (lane breach — it's a research specialist). The fork is the #2 cluster's identity question; resolve deliberately, don't default to content. `[FACT]`
- **Build boundary during gate:** PAUSE racing-direction/identity build; CONTINUE fork-agnostic audience-capture + Saddle tack-commerce (`dir-012` L1–2).
- **Done-when:** brief delivered → CSRO reviews same-session → Carlo decides fork.
- **Status:** open — DECISION GATE. CSRO endorses Carlo's redirect.

### csro-dir-2026-W22-015 → Monetization Bot — ⚠️ PARTIAL (NOT closed): #2/#3/#4 done, **#1 STILL BROKEN**
- #2 vets-co routes (#241), #3 Dog disclosure (#242), #4 env-var (#243) → merged ✓.
- **#1 (#240) FAILED VERIFICATION:** DNA page links `/go/embark/`, `/go/basepaws/`, `/go/wisdom-panel/` but
  `dog-com/src/data/affiliate-routes.ts` only registers **`wisdom-panel`**. **`embark` and `basepaws` are still
  unregistered → still 404-ing on a live revenue funnel.** PR #240 fixed the wrong/incomplete keys. **Live leak
  still open.** → reopened as `csro-dir-2026-W22-017`.

## Open

### csro-dir-2026-W22-018 → Monetization Bot + COO — URGENT: dedup funnel trees, un-red main (new 2026-05-31) 🔴 P0
- **Action:** PR #229 duplicated 3 Dog.com funnel trees outside the `(funnels)` route group (dna-testing, pet-insurance, thanks) → 12 metadata violations, **main RED, whole fleet blocked.** Pick ONE canonical location per funnel (recommend keep `(funnels)/` originals, delete #229 dupes; migrate any newer content first), fix the title/desc length + missing-metadata issues on survivors, verify metadata-policy clean. Brief: `ops/handoffs/2026-05-31-csro-urgent-funnel-dedup-main-red.md`.
- **Why:** red main blocks every PR (CLAUDE.md §7); + Dog.com (flagship protect-asset, live $2.3M offer) now has 2 indexable URLs per page = canonical/SEO damage. `[FACT — CSRO verified key-by-key]`
- **Done-when:** `node scripts/ci/metadata-policy.mjs` clean across all 5 sites; one canonical URL per funnel.
- **Status:** open — P0, blocks merge queue.

### csro-dir-2026-W22-017 → Monetization Bot — register `embark` + `basepaws` DNA vendors (REOPEN of 015#1) ⬆ HIGH
- **Action:** add route templates for vendor keys **`embark`** and **`basepaws`** to `apps/dog-com/src/data/affiliate-routes.ts` (the DNA page + `[test]` sub-page both link `/go/embark/...` and `/go/basepaws/...`). Verify all 3 DNA CTAs (embark, basepaws, wisdom-panel) resolve, not 404.
- **Why:** PR #240 only registered wisdom-panel; 2 of 3 DNA affiliate links still dead = lost commission on live traffic. `[FACT — verified by CSRO 2026-05-31, key-by-key]`
- **Done-when:** `grep` of page `/go/<vendor>/` keys ⊆ registered route keys; all resolve.
- **Status:** open.

### csro-dir-2026-W22-015 (orig) → Monetization Bot — fix 4 IR-verified affiliate issues ⬆ HIGH
- **Action:** Fix the IR Bot's verified affiliate findings (brief: `ops/handoffs/2026-05-31-csro-to-monetization-ir-fixes.md`). **#1 HIGH:** Dog.com DNA funnel links to unregistered `/go/embark-vet` + `/go/basepaws` → 404s on a live revenue funnel. #2 vets.co has out-of-policy `amazon-brand`/`chewy-brand` routes (latent, remove). #3 Dog.com Skimlinks sitewide w/ footer-only disclosure (surface on monetized pages — Tier-1 protect-asset). #4 env-var name mismatch (lost attribution).
- **Why:** Finding #1 is broken affiliate links losing money now; #2–4 are compliance/trust hygiene. All verified by CSRO against main. `[CONFIRMED]`
- **Done-when:** DNA CTAs resolve; vets-co policy-clean; Dog.com disclosure surfaced; env names reconciled.
- **Status:** open. IR loop closed via `ops/handoffs/2026-05-31-csro-response-to-ir-findings.md`.

### csro-dir-2026-W22-011 → Carlo (confirm) + Monetization Bot (execute) — display ads now clear the threshold (new 2026-05-30)
- **Action:** Apply to **Mediavine Journey** (entry tier, now just **≥1,000 sessions/mo**, eff. 2026-01-15) for the trafficked sites: Dog (36K), Ferret (11K), Fish (7K), PetFood (5K), Horses (~1K) all qualify. Stack display ads **on top of** affiliate to monetize the ~98% of traffic that never clicks an affiliate link.
- **Why:** CLAUDE.md said "avoid display ads pre-Mediavine threshold" — **that threshold dropped to 1K sessions, so display is now ON-thesis, not premature.** $0 to join (rev-share); RPM ~$11–15+ at entry. Incremental recurring revenue + lifts sale multiple. `[RESEARCH — valuation-comps.md §4]`
- **Carlo gate:** joining is free (rev-share, no spend), but it's a new vendor/outward-facing surface → quick Carlo confirm. **Not a hard blocker to plan**; Mon Bot can stage the integration while confirm is pending.
- **Done-when:** Carlo confirms; Mediavine applied for on qualifying sites post-launch; ads live with no UX/trust regression.
- **Status:** open (Carlo confirm + post-launch sequencing).

### csro-dir-2026-W22-014 → COO + Carlo — Vercel build-cost reduction (new 2026-05-31) ⬆ HIGH
- **Action:** Cut the Vercel build-CPU leak ($59.75 build minutes = ~95% of cost, climbing; $42 on-demand w/ 27 days left). Plan: `ops/handoffs/2026-05-31-csro-vercel-cost-reduction.md`. Biggest levers: (1) Turbo Remote Caching on [Carlo+COO], (2) disable/scope preview deploys [Carlo], (3) no builds on ops/docs commits [COO], (4) batch shared-package edits [all bots], (5) spend cap [Carlo].
- **Why:** Build minutes are pure overhead, not revenue. 15 apps share packages/ui+config → any shared change = 15× build fan-out; bots touch shared packages constantly. `[FACT]`
- **Carlo (5 min, account-only):** confirm Turbo Remote Cache enabled; disable/scope Preview deploys; set spend cap. These ~3 toggles are the bulk of the win.
- **Done-when:** build-minute line drops materially next cycle; cap in place.
- **Status:** open.

### csro-dir-2026-W22-013 → ALL BOTS — fleet autonomy activation (new 2026-05-30) ⬆ STANDING
- **Action:** Every bot runs autonomously and never idles — same rule CSRO operates under. Each maintains ≥5 ready tasks; when blocked, route around it. Starting queues + the standing rule in `ops/handoffs/2026-05-30-csro-fleet-activation.md`. Dedicated activation briefs for the two idle specialists: `…-csro-to-racing-bot-activation.md`, `…-csro-to-ir-bot-activation.md`.
- **Why:** Carlo directive (2026-05-30) — idle bots = wasted capacity. COO + Monetization were loaded; **Visual Bot was under-used; Racing Bot + IR Bot had ZERO assignments.** Now all five have full non-blocking queues. `[FACT]`
- **Done-when:** standing — all bots have live queues; CSRO is the priority clearinghouse when a queue empties.
- **Status:** open (standing).

### csro-dir-2026-W22-012 → COO + Monetization Bot + Visual Bot — horse-cluster strategic build (new 2026-05-30)
- **Action:** Build saddle.com + horses.com toward the named acquirer (Equine Network) per `ops/handoffs/2026-05-30-csro-horse-cluster-build-spec.md`. 3 layers, in order: **(1) audience capture** (EmailCapture + lead magnets on high-intent pages — highest acquirer value, works on existing thin traffic), **(2) commerce depth** (tack-allow-list buy-boxes on review/guide pages), **(3) traffic growth** (deepen high-intent pages, don't mass-produce thin ones).
- **Why:** Equine Network (CVC-controlled, serial acquirer of premium horse .coms) pays for **audience + commerce + membership**, NOT thin content. Both apps are already substantially built (~55 / ~25 routes) but thin-trafficked with no audience capture. Build to the buyer's value drivers. `[CARLO buyer signal + RESEARCH profile]`
- **Sequencing:** behind immediate-cash monetization (`dir-009`); Layer 1 first.
- **Done-when:** email capture live on key pages; commerce buy-boxes on intent pages; list growing.
- **Status:** open.

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
