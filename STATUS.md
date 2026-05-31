# CarloOS Status

Single source of truth for the operating state of the portfolio.
Trust standards live in [`QC-STANDARDS.md`](./QC-STANDARDS.md).

**Last updated:** 2026-05-31 (6-bot fleet activated, tier policy in force, ~166 net new pages from today's mega-wave)

---

## 1. Current Phase

**Phase 4+ — autonomous fleet operation, Tier 1 protect-the-asset mode.**

The portfolio is now operated by a **6-bot fleet + Carlo** under explicit tier policy:

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

## 4. Soft-Launch Blockers (Carlo-only)

All remaining launch work is operational, not engineering.

| # | Item | Time | Priority |
|---|---|---|---|
| 1 | DNS pointing (10 production domains → Vercel) at Network Solutions | ~30 min | **P1 — blocks launch** |
| 2 | Rotate Vercel token (exposed in chat earlier this session) | ~2 min | P2 — security hygiene |
| 3 | Apply to Chewy Partners | ~5 min | P2 — free revenue stream |
| 4 | Apply to ImpactRadius (biggest LTV unlock — pet-insurance roster) | ~15 min | P2 |
| 5 | GA4 property + 10 data streams + set `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ~15 min | P2 — analytics blackout otherwise |
| 6 | Mailchimp / MailerLite / Beehiiv decision (deferred per cost) | ~30 min | P3 |
| 7 | Email forwarding `editor@<domain>.com` (10 domains) | ~20 min | P3 |
| 8 | Rotate Anthropic API key after `/ask` MVP validation | ~2 min | P3 |
| 9 | Vercel project bootstrap for 5 new scaffolds (askthevet/seniorpets/dogpicture/petsupplies/hardmoneyloans) — note: hardmoneyloans is sunset, skip | ~10 min | P3 |

**Already done:** Amazon Associates tag `boltonpets20-20` portfolio-wide · Skimlinks publisher live on Dog.com · Impact.com site-verification meta tag installed · 10 production Vercel projects bootstrapped.

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
