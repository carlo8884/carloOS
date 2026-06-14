# CarloOS Status

Single source of truth for the operating state of the portfolio.
Trust standards live in [`QC-STANDARDS.md`](./QC-STANDARDS.md).

**Last updated:** 2026-06-14 (COO — autonomous build run: #737 merged + dog/cat BCS tools, Lizard cost tool, Dataset schema, revenue/visual/ask strategy)

> **COO autonomous build run (2026-06-13 → 06-14 — PRs #737–#746 all merged):**
> **#737 merged** (CSRO cleared it as non-Carlo-gated): breed×health cluster + **Fish CO2 calculator bug fix** + **2 enforcing CI gates** (`calculator-integrity` pins 21 calculators' constants; `tool-schema-coverage` requires SoftwareApplication+HowTo+FAQPage on every tool) + **3 tools** (PetFood food-transition, Dog crate-size [revenue-wired to Amazon `/go`], Dog water-intake).
> **New tools shipped + merged:** Lizard reptile **cost-of-ownership** (#739); **Dog Body Condition Score** (#744); **Cat Body Condition Score** on Vets (#745) — the dog+cat BCS pair answers "is my pet overweight," WSAVA-grounded, vet-deferring, cross-linked from the obesity/weight pages (#746).
> **GEO:** `Dataset`/`DataCatalog` schema on the 4 `/data` partnership pages (#742) — primary-source data now eligible for Google Dataset Search + AI citation (§6).
> **Verified complete (two read-only audits):** monetization structure **100% wired, zero `/go` leaks**, FTC disclosures compliant portfolio-wide; **Vets.co launch-ready (P0 = none)**; all calculators math-correct and now CI-pinned.
> **Strategy teed up (no spend):** revenue-activation checklist (#738), Visual polish directive (#740), askthevet `/ask` build brief + Phase-0 corpus/guardrail spec (#741, #743).
> **Remaining gates are NOT COO-lane.** Carlo: affiliate accounts + env vars (Impact / Amazon `AFF_AMAZON_TAG`+`AFF_AMAZON_BRAND_TAG` / Chewy), Supabase un-pause, DNS, `/ask` API key + spend cap. Visual Bot: photography / identity. The COO lane is at launch-quality.

> **COO tools-acceptance + GEO/CI hardening block (2026-06-13 — branch `claude/happy-curie-AOZay`, pre-merge):**
> Portfolio-wide calculator **math audit** — verified ~all interactive tools across the 10 sites (Dog, Fish, Vets, PetFood, Horses, Lizard, Saddle). **One real bug found + fixed:** Fish CO2 calculator used the meq/L coefficient `12.839` against a dKH input → ~4.3× overestimate (4 dKH/6.8 pH read 81 ppm "Dangerous" vs. correct ~19 ppm "Healthy"); corrected to the standard `3 × dKH × 10^(7−pH)`, now matching the canonical CO2/pH/KH chart at every point. All other calculators math-verified sound (RER `70·kg^0.75`, weight-tape 330/11900, inverse-square UVB, insurance reimbursement min/cap, etc.).
> **Two new enforcing CI gates lock the audit in** (both negative-tested): `calculator-integrity.mjs` pins 14 calculators' golden formula constants (22 assertions; would have caught the CO2 bug), and `tool-schema-coverage.mjs` requires every production tool page (40) to carry the full SoftwareApplication + HowTo + FAQPage GEO stack. Both wired into the QC workflow.
> **GEO gap closed:** Ferret readiness-quiz was the one production tool missing FAQ schema — added FAQ + FAQPage (grounded in on-page facts). Tool schema coverage now 100% across production. Also trimmed the Horses `/racing/bloodstock` over-length meta description (187→158). All gates green; tsc clean.
> **Note:** the above accumulated on PR #737 while the GitHub MCP token was expired; **merged 2026-06-14** after CSRO confirmed it is code/tool/CI work, not a Carlo-only gate.

> **COO monetization-depth wave + launch-quality deep-verify (2026-06-13 — PRs #728–#735 merged):**
> **Monetization-depth wave COMPLETE (4/4, owner-directed "Both"):** PetFood #728, Dog #729, Horses #730, Vets #731. Vendor-liveness discipline held — only Amazon earns now; Chewy resolves (earns on account approval); SmartPak/RidingWarehouse/insurance carriers pending → NOT wired. Caught + fixed the Horses agent's non-live SmartPak/RidingWarehouse slip before merge (swapped to live amazon-brand). Vets is internal lead-gen funnel to `/reviews/best-pet-insurance` (no direct vendor, no PLACEHOLDER). Carlo action items: set `AFF_AMAZON_BRAND_TAG`, approve Chewy → `AFF_CHEWY_BRAND_TAG`, un-pause Supabase, DNS flip — see `ops/handoffs/2026-06-13-coo-to-carlo-depth-wave-complete.md`.
> **CI gate precision hardened (#732, #734, #735):** affiliate-link-integrity no longer false-flags compliant clinical pages (vet-referral CTAs) or genuinely-disclosed pages; polish-audit no longer false-flags redirect stubs, delegated-render shells (shared renderers like breed×insurance), schema-based breadcrumbs, or non-Article schema types (DefinedTermSet/WebPage/ItemList/etc.). The audits now tell the truth.
> **Portfolio quality DEEP-VERIFIED (all 10 sites):** thin pages **0 across the entire portfolio**; breadcrumb + schema coverage complete on every real content/hub page; enforcing orphan-check + hub-spoke + link-check + trust-guard + metadata-policy all green. Remaining audit residue is exclusively legitimately-exempt pages (noindex `/admin`+`/dashboard`, `/legal/*`, Monetization `(funnels)`). The §8a COO-lane launch-quality bar is genuinely met on cohort-5 — verified, not assumed.
> **Lane note:** COO recommends handing further monetization back to Monetization Bot (depth wave done) and returning to pure polish/maintain. The remaining launch gates are Visual (photography) + Carlo (affiliate env vars, Supabase, DNS). Dog.com stays go-ready.

> **COO zero-click / AI-citation build sprint (2026-06-11 — PRs #694–#699 merged):**
> Strategic context: research confirmed the zero-click shift is real (Ahrefs Feb-2026: AIO knocks #1 CTR 7.3%→1.6%; ~58–60% zero-click). Response = win the AI citation AND keep the high-intent interaction on-property.
> **Layout (Carlo phone review, #694):** hero photo "black-bar" bug fixed on 5 sites (figure aspect-ratio forced height-only → photo now covers); Dog calorie-calc tightened; owner-path tiles enlarged. Visual Bot directive filed for portfolio brightness/mood (Horses too dark) — `ops/handoffs/2026-06-11-coo-to-visual-portfolio-brightness-flow.md`.
> **Review hubs (#694, #695):** PetFood `/reviews` (best cat/senior-dog/puppy food, nutrition-analysis-led, differentiated from Dog.com) + Ferret `/reviews` (cage/litter/harness) — both with Monetization buy-box slots left for wiring. Dog `/guides` expanded 2→6 (vitals, microchipping, wellness exam, first-aid). Lizard tegu duplicate-content canonicalized.
> **Tool layer — 17 new calculators (#696, #697, #698):** the click-and-cite surfaces AI can't answer in-SERP. Horses 1→5 (weight, feed, gestation, height converter), Dog →7 (puppy-weight, chocolate-toxicity [poison-control-first, educational], whelping calendar, ideal-weight), Vets →3 (insurance-worth-it breakeven), Lizard 2→6 (reptile feeding, basking temp), Saddle 1→3 (fit checker, girth), Fish →8 (tank-mate compatibility). Each GEO-built: extractable formula + worked example + FAQ schema + sources.
> **Network moat (#699):** 6 missing cross-portfolio recommendation keys added + `CrossPortfolioCard` rendered on ~130 previously-"cold" pages (vets health, dog reviews, ferret diet/behavior, lizard setup, horses ownership/racing, fish health) — keeps users + crawlers in the 10-site network.
> **Carlo unlock (unchanged):** Amazon + Impact.com accounts → env vars per the affiliate turnkey doc = revenue starts. Optional: AnswerThePublic/AlsoAsked ($50–100/mo) → hand COO exports → demand-ranked content.

> **COO revenue-activation + SEO/GEO night wave (2026-06-11 — PRs #688 + #689 merged):**
> **#688 (revenue):** Vets breed×state funnel carrier CTAs 404'd across ~2,912 pages (`/pet-insurance/${slug}` route never existed) — re-pointed to `/go/${vendor}/breed-${breed}-${state}` with disclosure. **Affiliate activation turnkey** shipped (`ops/handoffs/2026-06-11-coo-to-carlo-affiliate-activation-turnkey.md`): ranked account order (Amazon → Impact → ShareASale → CJ → Skimlinks) + per-site env-var lists + **Gap E1: `AFF_AMAZON_BRAND_TAG`/`AFF_CHEWY_BRAND_TAG` are separate vars carrying most product CTAs — set BOTH or CTAs earn $0**. Ferret food-evaluator + tools hub now funnel to `/ferret-starter-kit`. Revenue-path QA verdict: all 6 candidates revenue-path-complete (zero /go 404s, zero disclosure violations, zero clinical-page CTAs).
> **#689 (SEO/GEO):** 36 indexable pages restored to sitemaps (all 3 new tools + 33-page horses racing cluster were crawl-invisible) + **new `scripts/ci/sitemap-drift.mjs` gate wired into QC workflow**. Stale 2025→2026 guide-year refresh on dog/lizard money pages. ItemList ×12 surfaces, Product (rating-less) on telehealth + 3 dog products, content-aware FAQPage ×~17 pages, HowTo ×2 training pages, TL;DR/verdict tables on funnels + grain-free. Link graph: ferret starter-kit first homepage inbound, heartworm de-orphaned, lizard health-hub routing, keyworded lizard/petfood homepage titles. Monetization handoff: vets funnel primary CTAs exit to dog.com (`2026-06-11-coo-to-monetization-vets-funnel-offdomain-cta.md`).
> **Carlo unlock (no code needed):** Amazon Associates + Impact.com accounts → env vars per the turnkey doc = portfolio starts earning.
> **FAQ/GEO waves (#691, #692 + follow-ups):** content-aware FAQPage schema rolled out portfolio-wide — Dog.com breeds 32/32 + health cluster, top species on Fish/Lizard, Ferret care/diet/health, PetFood ingredients 8/8, Vets breeds-health 9/9 — every answer sourced from on-page facts.

> **COO launch-readiness work block (2026-06-10 — PR #364 omnibus):**
> **4 product tools shipped + QA-verified** — Vets Insurance Coverage Finder (`/tools/insurance-finder`), Dog "Is this a dog emergency?" triage (`/tools/is-this-a-dog-emergency`), PetFood Compare Pet Foods (`/tools/compare-pet-foods`), Dog Breed Finder honesty refactor (killed `matchPercent`).
> **GEO authority:** `llms.txt` ×6 launch candidates · homepage Org/WebSite schema ×10 sites · BreadcrumbList dedup ×5 templates · `ItemList`+editorial `Product`/`Review` schema ×9 review pages (no fake ratings, QC §1.4).
> **Trust:** Dog first-person clinical-claim fix + `trust-guard` hardening · 5 carrier superlatives softened · Lizard/PetFoods/Ferrets dedup + noindex.
> **All 6 audits** (trust · affiliate-leak 0/14 · no-wagering · GEO · mobile · orphan-link) clean or routed.
> **Cohort-5 (Vets/Dog/Ferret/PetFood/Lizard) is now COO-clear.** Remaining gates: **Monetization** (Vets funnel-404, calc-CTAs, Ferret tools→starter-kit), **Visual** (imagery differentiation, Dog emoji→SVG, Lizard `/states` overflow), and the **deferred Carlo gates** (Impact.com activation, DNS, GA4) — now turnkey via `ops/handoffs/2026-06-09-coo-launch-execution-playbook.md`. See also the launch-readiness scorecard-v2, revenue-architecture, and acquirer-readiness handoffs (all 2026-06-09).

---

## 1. Current Phase

**Phase 5 — launch-quality polish (Carlo 2026-06-01 amendment to Phase 4 fleet operation).**

The 35-PR mega-wave and the 20+ PR overnight SEO/GEO/build-cost sweep created enough breadth. The next phase is depth and credibility: polish, QA, monetization wiring, visual quality, content cleanup — on a chosen cohort of 3–5 sites — until each one meets the launch-quality bar (CLAUDE.md §8a). DNS / GA4 / Mailchimp / email forwarding / Vercel scaffold bootstrap are DEFERRED until cohort-5 is ready. **Do not push Carlo on launch ops.**

Cohort-5 polish targets (CSRO to confirm; pending `ops/csro/launch-quality-criteria.md`): **Dog.com, Fish.com, Ferret.com, PetFood.com, Vets.co.**

Per-actor scope in this phase: see CLAUDE.md §8a.

The portfolio is operated by a **6-bot fleet + Carlo** under explicit tier policy:

| Tier | Sites | Posture | Target exit |
|---|---|---|---|
| **Tier 1 (confirmed by inbound offers)** | Dog.com ($2.3M offer), Fish.com ($1.45M offer) | Protect-the-asset · acquirer-diligence-ready · no aggressive monetization · no low-quality programmatic | $10M+ each |
| **Tier 2 with Tier 1 promotion path** | Vets.co, Saddle.com, Lizard.com | Build-to-sell, validate promotion criteria, evidence-driven | $5M+ each |
| **Tier 2** | Horses.com (pending Racing Bot), Ferret.com, PetFood.com | Niche-monetization specialty publications | $1-5M each |
| **Tier 3** | PetFoods.com, Ferrets.com + scaffolds | Free traffic-magnet databases that feed Tier 1/2 | varies |
| **Sunset** | hardmoneyloans.com | Confirmed by Carlo 2026-05-30 | n/a |

Full policy: `ops/csro/CSRO.md §8`. **Vets.co Tier-1 promotion criteria** (5 must be met before promotion): `ops/csro/CSRO.md §8`.

## 2. Fleet (6 actors + Carlo)

Specs: `ops/policies/bot-fleet.md` (coordination map) · `ops/policies/bot-coordination.md` (lane policy).

| Actor | Owns | Where it runs | Spec |
|---|---|---|---|
| **CSRO** | Strategy / research / prioritization / loop closure | Separate Claude Code session | `ops/csro/CSRO.md` |
| **COO** (this session) | Execution / PRs / build orchestration / agent dispatch | Claude Code | `CLAUDE.md` |
| **Monetization Bot** | Revenue / affiliates / funnels / lead-gen / email | Separate session | `ops/policies/bot-coordination.md §2` |
| **Visual / Brand Bot** | Brand / UX / trust / visual quality | Separate session | `ops/policies/bot-coordination.md §2` |
| **Horses.com Racing Intelligence Bot** | Specialist: racing / bloodstock / betting-adjacent research | Separate session | `ops/csro/CSRO.md §12` |
| **IR Bot** (Codex-hosted, chat-only by default) | Adversarial reviewer · audits PRs + CSRO · independent-model diversity | Codex | `ops/csro/IR-BOT.md` |
| **Carlo** | Final authority · money · domains · irreversible decisions | Direct chat | — |

**Carlo's standing autonomy rule (2026-05-31):** every bot works its lane autonomously. Decisions and ships are not gated on permission for in-lane work. Blocked work is routed around with a logged handoff; bots immediately pick the next queued task. Min 5 ready tasks queued at all times.

## 3. Today's mega-wave (2026-05-30 → 2026-05-31)

**35 PRs merged this session.** Net delta on main:

### Strategic infrastructure
- `ops/csro/CSRO.md` v2 — full CSRO spec with directive-ID protocol, loop closure, 10-dim scoring rubric, live registers, 74-domain inventory
- `ops/csro/IR-BOT.md` — independent reviewer spec (chat-only by default per 2026-05-30 guardrail tighten)
- `ops/csro/CSRO-PROMPT.md` + `ops/csro/IR-BOT-PROMPT.md` — operational kickoff prompts
- `ops/policies/bot-fleet.md` — full fleet coordination map (feedback loop diagram, conflict matrix, daily rhythm)
- `ops/handoffs/2026-05-30-portfolio-tier-architecture.md` — 3-tier model with per-site rationale
- 3 coordination handoffs to Monetization / Visual / Horses-Racing bots

### Content shipped
| PR | Site | What | Pages |
|---|---|---|---|
| #170 | Dog.com | Homepage redesign → owner's operating system (5 owner-path cards) | 1 |
| #171 | Fish.com | Homepage redesign → tank control center (6 problem cards + calculators banner) | 1 |
| #182 | Dog.com | `/symptoms` authority hub (22 symptoms, urgency-tiered) | 1 |
| #180 | Fish.com | JSON-LD HowTo + FAQ + SoftwareApplication schema on 5 calculators | 5 (additive) |
| #187 | Dog.com | "Which Pet?" cross-portfolio decision wizard (10 questions, 10 species) | 1 |
| #188 | Dog.com | `/compare` breed-vs-breed hub (30 pairwise comparisons) | 31 |
| #189 | Vets.co | Programmatic vet directory scaffold (city × specialty taxonomy) | 78 |
| #190 | 5 sites | `/data` partnership pages + Reddit/Quora syndication tracker | 5 |
| #191 | Lizard.com | Per-state reptile legality hub (50 states + index) | 51 |
| #173 | Vets.co | Programmatic breed × state insurance matrix | 1,695 |
| #174 | PetFoods.com | D-006 brand-page affiliate buy-boxes | 36 (additive) |
| #175 | Ferret.com | D-009 monetization surface for 11K/mo traffic | varies |
| #177 | Dog.com | D-010 insurance-routing CTAs on 7 high-cost condition pages | 7 (additive) |
| #183 | 4 sites | D-013 portfolio-wide affiliate-leak fix (53 URLs) | n/a |
| #184 | PetFood.com | D-014 buy-boxes on 9 therapeutic-diet pages | 9 (additive) |
| #145 | Saddle.com | 6 saddle-accessory buyer guides | 6 |
| #148 | PetFood.com | 6 condition-specific therapeutic diet pages + hub | 7 |
| #149 | Vets.co | 8 diagnostic-test deep-dive pages + hub | 9 |
| #150 | 7 sites | GEO retrofit (TL;DR + question-form H2s on 7 high-traffic pages) | 7 (additive) |
| #151 | Portfolio | CrossPortfolioCard applied to 14 SEO templates | 14 (additive) |
| #152 | Lizard.com | 5 species-class vivarium build guides + hub | 6 |
| #163 | 8 sites | Visual Bot OG-image rollout | 8 (additive) |
| #164 | 14 sites | Visual Bot per-site favicons | 14 (additive) |

**Net new pages this wave:** ~166 net new statically-rendered pages, plus extensive additive schema/affiliate enrichments across existing pages.

### Closed (stale / superseded / sunset)
#19, #26, #27, #59, #60, #61, #144, #167 (8 closed)

## 3a. Overnight COO sweep (2026-06-01)

20+ merged PRs hardening the portfolio against the post-mega-wave gaps. CSRO queue items 1 + 5–13 worked top-down.

### Build cost (csro-dir-014)
| PR | What |
|---|---|
| #268 | CI `TURBO_TOKEN`/`TURBO_TEAM` env wiring; `vercel-ignore.sh` patterns broadened (`.claude/*`, `.gitattributes`, `CODEOWNERS`, `*.txt`); Carlo dashboard click-by-click filed |
| #290 | New CI job `vercel-ignore` regression-tests the bash-case pattern set against 30 representative paths |

### Vets.co launch-readiness (dir-007)
| PR | What |
|---|---|
| #269 | IR F6 noindex-gate on the 2,912 breed×state cross-product insurance pages; hub + breed-only + state-only stay indexed |

### Sitemap / robots / 404 sweep (queue #7, #10)
| PR | What |
|---|---|
| #274 | Regenerate sitemaps post-mega-wave — 6 missing section-hub URLs across ferret/horses/saddle picked up |
| #303 | Extend `scripts/ci/link-check.mjs` to all 10 sites; fix 31 broken links — 15 legal/editorial stub pages on horses/petfood/petfoods/ferret/ferrets sites, plus `/reviews`, `/supplements`, `/brands`, `/ingredients` hubs |

### Schema / structured data (queue #8)
| PR | What |
|---|---|
| #276 | `ArticleLayout` auto-derives BreadcrumbList JSON-LD from existing `breadcrumbs` prop — ~300 editorial pages instantly schema-enriched |
| #280 | FAQPage on 2 PetFood.com brand-evaluation pages |
| #283 | MedicalWebPage on 13 lizard-com health pages (full cluster coverage) |
| #284 | MedicalWebPage on 4 remaining dog-com health pages — 40/40 coverage |
| #287 | Product schema on 3 buyer-guide top picks (best-horse-blankets, best-aquarium-heaters, best-aquarium-lighting) |
| #289 | HowTo schema on fish-com `/setup` |
| #294 | Product schema on 9 brand-review sub-products (Stubben/Pessoa/Collegiate lineups) |
| #295 | FAQPage on `petfood-com/guides/raw-pet-food-evaluation` |

### Internal linking (queue #6)
| PR | What |
|---|---|
| #278 | saddle-com `/reviews` orphan-link fix (`best-stirrups` was unlinked from the hub) |
| #293 | Refactor saddle-com `/reviews` to data-driven (`src/data/reviews.ts`) — drift-proof for future review additions |
| #296 | `ArticleLayout` `contentType` prop opt-in for `CrossPortfolioCard`; 27 dog-com breed pages get auto-rendered Vets.co recommendations |
| #301 | Wave-2 `contentType` opt-in across 91 editorial pages (dog/vets/lizard/ferret/horses/saddle/petfood) — total 118 pages |
| #305 | Tool ↔ content reciprocal links — 7 high-affinity content pages now point at their related calculators |

### Doc disposition (queue #11, #12)
| PR | What |
|---|---|
| #292 | Initial queue update reflecting the 9-PR sweep |
| #304 | petsupplies scaffold marked decommissioned in CLAUDE/STATUS/BACKLOG (PR #221 had removed the source tree but the overview docs still listed it) |

## 4. Launch ops (Carlo-only) — DEFERRED until cohort-5 polish complete

Per Carlo's 2026-06-01 directive, launch ops are NOT on the critical path. Do not push these. They re-enter the queue when cohort-5 sites pass the §8a launch-quality bar.

| # | Item | Time | Polish-mode status |
|---|---|---|---|
| 1 | DNS pointing for the chosen 3–5 launch sites (Network Solutions) | ~30 min | DEFERRED — depends on which sites CSRO names launch-ready |
| 2 | Rotate Vercel token (security hygiene) | ~2 min | Keep — security, do whenever convenient |
| 3 | Apply to Chewy Partners | ~5 min | DEFERRED — Monetization sweep in flight; revisit when affiliate plumbing is clean |
| 4 | Apply to ImpactRadius (pet-insurance LTV) | ~15 min | DEFERRED — same logic |
| 5 | GA4 property + per-launch-site stream + `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ~15 min | DEFERRED to launch-day |
| 6 | Mailchimp / MailerLite / Beehiiv decision | ~30 min | DEFERRED — cost-deferred per Carlo |
| 7 | Email forwarding `editor@<domain>.com` | ~20 min | DEFERRED to launch-day |
| 8 | Rotate Anthropic API key after `/ask` MVP validation | ~2 min | Keep — security |
| 9 | Vercel project bootstrap for 3 active scaffolds (askthevet/seniorpets/dogpicture) — petsupplies decommissioned (PR #221), hardmoneyloans sunset | ~10 min | DEFERRED — scaffolds aren't in the polish cohort |

**Already done:** Amazon Associates tag `boltonpets20-20` portfolio-wide · Skimlinks publisher live on Dog.com · Impact.com site-verification meta tag installed · 10 production Vercel projects bootstrapped · `dir-014` Vercel build-cost cuts shipped (PR #268, #290) · 31 broken links fixed portfolio-wide (PR #303).

## 5. Conflict-blocked PRs (bots own their rebases)

Per `bot-coordination.md §8` first-merge-wins: the losing bot rebases. COO does not force-rebase other bots' lanes.

| PR | Title | Lane |
|---|---|---|
| #21 | A4 Vets.co visual launch-polish | Visual |
| #22 | A4 Fish.com visual launch-polish | Visual |
| #156 | visual-bot: dog-com magazine polish | Visual |
| #161 | visual-bot: ScaffoldHomeShell on seniorpets/askthevet | Visual |
| #181 | D-011 dog-com breed insurance CTAs | Monetization |
| #185 | visual-bot: CalculatorShell + dog daily-calorie calculator | Visual (with COO-authorized lane crossover) |

## 6. Active risks

| Risk | Severity | Mitigation |
|---|---|---|
| Tier 1 brand-trust drift from short-term monetization | High | Protect-the-asset directive in CSRO.md §8 + bot-fleet.md trust-bar restatement. CSRO files drift alarm. |
| CSRO fleet-activation brief missing on main | Low | Logged 2026-05-31; CSRO will produce on day-1 task. COO operates from CLAUDE.md + bot-coordination.md meanwhile. |
| Bots ignoring CSRO directives (loop autonomy degradation) | Medium | Open-directive register at `ops/csro/open-directives.md`; Carlo escalation if directives lapse 2× past deadline |
| Codex/IR-Bot writing untracked review files | Resolved 2026-05-30 | Chat-only-by-default guardrail in PR #197 |
| Vercel preview rate limits at scale | Low (operational) | Local `turbo build` is authoritative gate |
| Single-key-person dependency on Carlo | Medium | 6-bot autonomous fleet now operational; minimizes Carlo touch points |

## 7. Operating Principles

- **"Launchable and improving" beats "internally perfect but not live."**
- **Tier 1 protect-the-asset is the highest-priority constraint** — never let short-term monetization damage Dog.com / Fish.com brand integrity. Acquirers diligence everything.
- Trust integrity is non-negotiable. See `QC-STANDARDS.md §1`.
- No new bots, no new governance docs, no new audit loops without a strategic justification CSRO has signed off on.
- Every domain becomes one of: media / lead-gen / affiliate / marketplace / data / licensing / acquisition target. CSRO classifies; COO executes.
- Speed matters. Daily rhythm > weekly/monthly calendar reports.

## 8. Update Protocol

Any PR that materially changes the operating state updates this file in the same PR. No separate docs-only PRs except this consolidation. Bump `Last updated:` at the top.

Stale-cleanup: STATUS.md is refreshed whenever a major wave merges OR weekly (Sunday) at minimum. Currently CSRO owns the bot-quality-ledger; COO owns this file.
