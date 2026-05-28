# CarloOS Status

Single source of truth for the operating state of the portfolio.
Replaces the previous five governance docs (`OPERATIONS`, `ROADMAP`,
`AGENTS`, `RELEASES`, `QC-STANDARDS`). Trust standards still live in
their own file: see [`QC-STANDARDS.md`](./QC-STANDARDS.md).

**Last updated:** 2026-05-28 (evening: parallel sprint pushed)

---

## 1. Current Phase

**Phase 4 — Dog.com soft-launch readiness.**

Dog.com remains soft-launch-ready (Friday 2026-05-29 soft-launch).
All content-side launch blockers cleared. What remains is operational
(Carlo-only): Mailchimp wiring, GA4 property, DNS cutover, and a final
visual check (optional).

Portfolio expanded to **7 domains** as of 2026-05-28: the 5 built sites
(dog-com, fish-com, lizard-com, saddle-com, vets-co) plus 2 scaffolded
in progress (horses-com, petfood-com) — see §6 Roadmap rows 11–12 and
§2a in-flight branches.

Fish, Saddle, Lizard, Vets pods stay staged until Dog.com demonstrates:
live deployment stability · analytics flow · email capture · operational
cadence (≥ 7 days live).

## 2. Active PRs

Source of truth for triage: [`ops/handoffs/2026-05-28-pr-triage.md`](./ops/handoffs/2026-05-28-pr-triage.md)
(on branch `coo/2026-05-28-pr-triage`, not yet merged). Saturday merge
order is enumerated there. **No merges happen Friday 2026-05-29 (launch day).**

| PR | Branch | Purpose | State |
|---|---|---|---|
| #19 | `agent2/pr3d-fish-launch-blockers` | fish-com launch blockers (homepage trust stats + heater hands-on claims) | NEEDS FIX — PR is the fix; merge **first** Saturday to unblock metadata-policy across the repo |
| #20 | `claude/fish-equipment-recommender` | fish.com `/tools/equipment-recommender` new route | READY |
| #21 | `agent4/visual-pass-vets-co` | Vets.co visual launch-polish (next/font + hero mobile) | READY |
| #22 | `agent4/visual-pass-fish-com` | Fish.com visual launch-polish (next/font + mobile hero + SVG icons) | READY |
| #23 | `agent4/visual-pass-saddle-com` | Saddle.com visual launch-polish (Bodoni + Jost) | READY |
| #24 | `agent4/visual-pass-lizard-com` | Lizard.com visual launch-polish | READY (rebase after #26) |
| #26 | `build-bot/phase3d-lizard-launch-blockers` | Lizard.com launch blockers | NEEDS FIX — clears after #19 lands |
| #27 | `build-bot/phase3e-vets-launch-blockers` | Vets.co launch blockers | NEEDS FIX — clears after #19 lands |
| #28 | `agent4/visual-brand-pass` | Dog.com visual + design audit MD | NEEDS FIX — metadata-policy likely clears after #19; review carefully |
| #29 | `build-bot/trust-guard-baseline-expand` | trust-guard CI baseline expansion (hands-on testing patterns) | BLOCKED-BY #19 + #26 (by design) |
| #30 | `build-bot/sitemap-freshness-check` | sitemap-freshness gate (`--check` mode + qc.yml job) | BLOCKED-BY follow-up fish-com sitemap PR; **defer to next week** |

## 2a. In-flight branches (not yet PR'd)

Pushed by parallel agents on 2026-05-28. Verify with
`git fetch origin && git branch -a | grep -E "(build-bot|claude/|coo/)"`.

| Branch | Description |
|---|---|
| `build-bot/fish-sitemap-priority-fix` | sitemap `priorityFor` codification (fish-com sitemap regenerated) — natural companion to PR #30 |
| `build-bot/phase3d-lizard-trust-fix` | 2 lizard review files cleaned of first-person testing claims |
| `build-bot/fish-metadata-trim` | 3 fish-com metadata strings trimmed — **unblocks metadata-policy CI across the repo** |
| `coo/2026-05-28-pr-triage` | Saturday PR triage report at `ops/handoffs/2026-05-28-pr-triage.md` |
| `claude/lizard-content-sprint-2026-05-28` (in flight) | leopard-gecko + veiled-chameleon expand, `/health/hypocalcemia` |
| `claude/saddle-content-sprint-2026-05-28` (in flight) | horse-nutrition + best-english-saddles expand, best-riding-boots |
| `claude/vets-content-sprint-2026-05-28` (in flight) | `/health/leptospirosis` + `/health/dog-eye-conditions` |
| `claude/fish-content-sprint-2026-05-28` (in flight) | betta expand + swordtail + aquarium-cycling-guide |
| `claude/dog-content-post-launch-2026-05-28` (in flight) | dog-allergies + raw-diet-risks + dog-seizures (post-launch material) |
| `claude/scaffold-horses-petfood` (in flight) | Horses.com + PetFood.com app shells |
| `coo/2026-05-28-monetization-briefs` (in flight) | Horses + PetFood monetization briefs in `ops/handoffs/` |

These branches are NOT yet open PRs. Carlo triages Saturday 2026-05-30
after launch settles.

## 3. Lanes

Two-lane model for execution. COO layer sits above as the strategic
& coordination layer (installed 2026-05-28 — see [`COO.md`](./COO.md)).

| Lane | Who | Mandate | Limits |
|---|---|---|---|
| COO | Claude (COO role per [`COO.md`](./COO.md)) | Strategy, prioritization, triage, handoffs, portfolio planning. Writes briefs & ops docs; does not write app code. Installed 2026-05-28. | Sits above Build/Audit; does not merge or ship code. |
| Build | Claude (Agent 1 / A3) | Implements, ships PRs. Touches code, scripts, docs in the same PR. | Cannot merge to main. |
| Audit | Claude (Agent 2) | Read-only verification. Reports findings; only Blocker-severity halts a launch. | Cannot edit app code. |
| Decisions | Carlo | Merges, live keys, DNS, partnerships, money. | Final authority. |

Visual, Strategy, SEO, Ops, Deal, Investor work happen as briefs that
Build or Carlo executes. No standalone bots for those domains.

**Lane-crossing note (informational):** PR #9 was authored by A2 and
edited app code. The work was correct and the launch blockers were
real, so the PR shipped — but this is the kind of crossing that
should normally be flagged. Audit reports; Build implements.

## 4. Soft-Launch Blockers (Carlo-only)

All remaining launch work is operational, not engineering.

| # | Item | Time | What it unblocks |
|---|---|---|---|
| 1 | Create Mailchimp audience `dog-com`; capture API key + audience ID | ~10 min | Live email capture |
| 2 | Set `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` in Vercel env (dog-com project) | ~5 min | Forms become visible + functional. See §11. |
| 3 | Create GA4 property; set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel env | ~10 min | Analytics flow |
| 4 | DNS cutover `dog.com` → Vercel (CNAME or A record at registrar) | ~30 min | Site goes live |
| 5 | (Optional) Real mailboxes `privacy@dog.com`, `legal@dog.com` | depends on Carlo's mail setup | Legal pages fully compliant |
| 6 | (Optional) Final visual check / A4 direction-proposal review | depends on A4 delivery | PR #5 visual pass scheduled or deferred |

Items 1–4 total: ~55 minutes of Carlo's time. Item 5 and 6 do not
block launch.

## 5. Active Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Vercel preview deploys hitting free-tier rate limit (24h reset window) | Medium (operational) | Either wait for reset OR upgrade to Vercel Pro. Local `turbo build` is the authoritative gate; Vercel previews are nice-to-have for QA. |
| Carlo bottleneck on launch ops | Medium | All ~55 min worth of work, batchable in one block |
| A4 visual direction outstanding | Low (deferred) | Launch does not wait. PR #5 scheduled if/when A4 delivers. |
| `/api/og` route load-untested | Low | First-week traffic minimal; harden post-launch |
| Single-key-person dependency (Carlo + Claude) | High (long-term) | Stabilizer CI checks + SOPs erode this over weeks |

## 6. Roadmap Snapshot

| Phase | State | Notes |
|---|---|---|
| 1 — Core build & deployment foundation | ✅ shipped | `2d3030a` → `9709150` |
| 2 — Trust cleanup & stabilization | ✅ shipped | `4c27988` (PR #2) |
| 2a — Trust-badge sweep | ✅ shipped | `caead17` (PR #5) |
| 3 — SEO & infrastructure stabilization | ✅ shipped | `ccf079d` (PR #4 / GitHub #6) |
| 4 — Dog.com launch readiness | ✅ shipped (engineering side) | `12e12fc` (PR #7 lead magnet) + `9065110` (PR #9 launch blockers). Operational ops (Mailchimp/GA4/DNS) pending Carlo. |
| 4a — Dog.com live | 🟡 pending Carlo ops | See §4 |
| 5 — Visual / UX pass | ⬜ blocked on A4 direction | Deadline this week. Does not block launch. |
| 6 — Fish.com build-out | ⬜ staged | Gated on Dog.com 7-day metrics |
| 7 — Saddle.com build-out | ⬜ staged | Same gating |
| 8 — Shared CI checks (link-check, metadata, trust-guard) | ⬜ briefed | A6 dispatched but not yet executed |
| 9 — PetFood / Ferret / Horses positioning | ⬜ deferred | Strategy work post-launch |
| 10 — Monetization wiring (Stripe webhook, real Mailchimp full integration) | ⬜ deferred | After Dog.com first revenue signal |
| 11 — Horses.com scaffold | 🟡 scaffold in flight | Ownership confirmed 2026-05-28. App shell on `claude/scaffold-horses-petfood`; monetization brief on `coo/2026-05-28-monetization-briefs`. |
| 12 — PetFood.com scaffold | 🟡 scaffold in flight | Ownership confirmed 2026-05-28. App shell on `claude/scaffold-horses-petfood`; monetization brief on `coo/2026-05-28-monetization-briefs`. |

## 7. Release Log

Append-only. Source of truth is git log; this is the human index.

| Commit | Date | What |
|---|---|---|
| `9065110` | 2026-05-27 | PR #9 — Dog.com launch blockers cleared (hero stats, HEALTH_CATEGORIES, fake-authority H1s, EmailCapture gating). 4 files. |
| `12e12fc` | 2026-05-27 | PR #7 — Dog.com puppy-schedule lead magnet + 8-email sequence + homepage banner. 14 files. |
| `ccf079d` | 2026-05-27 | PR #4 — SEO & Infrastructure Stabilization (6 commits, 300 files) |
| `caead17` | 2026-05-27 | PR #5 — Trust-badge cleanup (21 files, +25/-25) |
| `4c27988` | 2026-05-26 | PR #2 — Trust cleanup & stabilization (8 batches, ~480 files) |
| `9709150` | 2026-05-26 | CarloOS V2 — build fixes, stubs, 37 new content pages |
| `2d3030a` | 2026-05-25 | Initial monorepo — 5 apps, shared packages, Turborepo + Supabase |

## 8. Page Counts (current)

| Site | Routable pages | Status |
|---|---|---|
| dog-com | 130 | Pre-launch — soft-launch-ready (added `/puppy-schedule`) |
| fish-com | 72 | Staged |
| lizard-com | 49 | Staged |
| saddle-com | 40 | Staged |
| vets-co | 36 | Staged (back in scope per latest global update) |
| **Total** | **327** | (sitemap-verified) |

## 9. Operating Principles

- "Launchable and improving" beats "internally perfect but not live."
- Trust integrity is non-negotiable. See QC-STANDARDS.md §1.
- No new bots, no new governance docs, no new audit loops without a launch-velocity justification.
- Every domain becomes one of: media / lead-gen / affiliate / marketplace / data / licensing / acquisition target. Defined per domain when that domain activates, not in advance.

## 10. Update Protocol

Any PR that materially changes the operating state updates this file
in the same PR. No separate docs-only PRs except this consolidation.
Bump `Last updated:` at the top.

The "Active PRs" table is the live queue. The "Release Log" is the
post-merge record. The "Soft-Launch Blockers" section drops items as
Carlo completes them.

## 11. Operational Notes

### EmailCapture gating (post-PR-#9)

The shared `EmailCapture` component (`packages/ui/src/components/
EmailCapture.tsx`) returns `null` unless `NEXT_PUBLIC_EMAIL_CAPTURE_
ENABLED=true` is set in the deploy environment. This is intentional:
prevents form submissions hitting a 503 from `/api/subscribe` when no
ESP is wired.

Affects **all five sites uniformly** (shared component). When Carlo
flips the env var on for a given site's Vercel project, that site's
forms reappear and post to the live `/api/subscribe`, which routes to
Mailchimp.

**To enable Dog.com email capture:**
1. Vercel project `dog-com` → Settings → Environment Variables
2. Add `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` (Production scope)
3. Add `MAILCHIMP_API_KEY=<key from Mailchimp Account → Extras → API Keys>`
4. Add `MAILCHIMP_AUDIENCE_ID=<audience ID from Mailchimp Audience → Settings>`
5. Trigger a redeploy

Until enabled, the puppy-schedule lead-magnet landing page renders but
its capture forms are invisible (the banner still routes to it; the
page content still shows; only the form disappears).

### Vercel rate limits

Free-tier Vercel limits how many Preview deployments can run per
window. PR #9 hit this limit at merge time (5/5 previews failed with
"Deployment rate limited — retry in 24 hours") — **the code was fine**,
the local `turbo build` was green, and the merge proceeded based on
local verification. Production deploys are unaffected.

If launch cadence requires more reliable previews, upgrading the
Vercel project to Pro removes the cap. Otherwise, free-tier previews
recover automatically within 24h.

### Mailchimp wiring is Carlo-only

`/api/subscribe` exists and routes correctly. Mailchimp account
creation, audience setup, API key generation, and Vercel env var
configuration all happen in Carlo's accounts — not delegable. The
8-email puppy autoresponder sequence is staged in
`apps/dog-com/src/content/email-sequences/puppy-onboarding/` as
Mailchimp-paste-ready markdown.
