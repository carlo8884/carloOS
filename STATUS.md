# CarloOS Status

Single source of truth for the operating state of the portfolio.
Replaces the previous five governance docs (`OPERATIONS`, `ROADMAP`,
`AGENTS`, `RELEASES`, `QC-STANDARDS`). Trust standards still live in
their own file: see [`QC-STANDARDS.md`](./QC-STANDARDS.md).

**Last updated:** 2026-05-27 (post PR #9 merge)

---

## 1. Current Phase

**Phase 4 — Dog.com soft-launch readiness.**

Dog.com is technically launch-ready. All content-side launch blockers
cleared. What remains is operational (Carlo-only): Mailchimp wiring,
GA4 property, DNS cutover, and a final visual check (optional).

Fish, Saddle, Lizard, Vets pods stay staged until Dog.com demonstrates:
live deployment stability · analytics flow · email capture · operational
cadence (≥ 7 days live).

## 2. Active PRs

| PR | Branch | Purpose | State |
|---|---|---|---|
| #8 | `agent3/docs-consolidation` | Collapse 5 governance docs → STATUS.md + QC-STANDARDS.md; refresh README | Open — this PR |

PRs #7 and #9 merged into main on 2026-05-27. PR #4 (governance docs,
`claude/ecstatic-shannon-tXkds`) is superseded by this PR — close
without merging once this lands.

## 3. Lanes

Two-lane model. No further role expansion.

| Lane | Who | Mandate | Limits |
|---|---|---|---|
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
