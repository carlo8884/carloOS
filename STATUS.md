# CarloOS Status

Single source of truth for the operating state of the portfolio.
Replaces the previous five governance docs (`OPERATIONS`, `ROADMAP`,
`AGENTS`, `RELEASES`, `QC-STANDARDS`). Trust standards still live in
their own file: see [`QC-STANDARDS.md`](./QC-STANDARDS.md).

**Last updated:** 2026-05-27

---

## 1. Current Phase

**Phase 4 — Dog.com launch.**

Dog.com is the prototype launch system for the broader portfolio.
Fish, Saddle, Lizard, and additional pods stay staged until Dog.com
demonstrates: live deployment stability · analytics flow · email
capture · operational cadence (≥ 7 days live).

## 2. Active PRs

| PR | Branch | Purpose | State |
|---|---|---|---|
| #7 | `agent1/dog-com-puppy-lead-magnet` | Puppy Schedule lead-magnet landing + 8-email sequence + homepage banner | Open · 5/5 Vercel green · awaiting Carlo spot-check |
| (new) | `agent3/docs-consolidation` | Collapse 5 governance docs → STATUS.md + QC-STANDARDS.md; refresh README | This PR |

## 3. Lanes

Two-lane model. No further role expansion.

| Lane | Who | Mandate | Limits |
|---|---|---|---|
| Build | Claude (Agent 1 / A3) | Implements, ships PRs. Touches code, scripts, docs in the same PR. | Cannot merge to main. |
| Audit | Claude (Agent 2) | Read-only verification. Reports findings; only Blocker-severity halts a launch. | Cannot edit app code. |
| Decisions | Carlo | Merges, live keys, DNS, partnerships, money. | Final authority. |

Visual, Strategy, SEO, Ops, Deal, Investor work happen as briefs that
Build or Carlo executes. No standalone bots for those domains.

## 4. Soft-Launch Blockers (Carlo-only)

| # | Item | Time | Unblocks |
|---|---|---|---|
| 1 | Mailchimp audience `dog-com` | 10 min | Lead-magnet email capture goes live |
| 2 | GA4 measurement ID for dog.com | 10 min | Analytics flow |
| 3 | DNS cutover dog.com → Vercel | 30 min | Site is live |
| 4 | Mailbox `privacy@dog.com` + `legal@dog.com` | depends on Carlo's mail setup | Legal pages compliant |

## 5. Active Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Carlo bottleneck on launch ops | High | Time-boxed at 30–60 min total |
| A4 visual direction outstanding | Medium | Deadline set: this week. Does not block launch. |
| `/api/og` route load-untested | Low | First-week traffic minimal; harden post-launch |
| Three-pod parallelism temptation | Medium | Fish/Saddle pods explicitly held |

## 6. Roadmap Snapshot

| Phase | State | Notes |
|---|---|---|
| 1 — Core build & deployment foundation | ✅ shipped | `2d3030a` → `9709150` |
| 2 — Trust cleanup & stabilization | ✅ shipped | `4c27988` (PR #2) |
| 2a — Trust-badge sweep | ✅ shipped | `caead17` (PR #5) |
| 3 — SEO & infrastructure stabilization | ✅ shipped | `ccf079d` (PR #4 / GitHub #6) |
| 4 — **Dog.com launch** | 🟡 in progress | Lead magnet PR #7 open · 4 Carlo-only blockers remaining |
| 5 — Visual / UX pass | ⬜ blocked on A4 direction | Deadline this week |
| 6 — Fish.com build-out | ⬜ staged | Gated on Dog.com 7-day metrics |
| 7 — Saddle.com build-out | ⬜ staged | Same gating |
| 8 — Shared CI checks (link-check, metadata, trust-guard) | ⬜ briefed | A6 dispatched but not yet executed |
| 9 — PetFood / Ferret / Horses positioning | ⬜ deferred | Strategy work post-launch |
| 10 — Monetization wiring (Stripe webhook, real Mailchimp) | ⬜ deferred | After Dog.com first revenue signal |

## 7. Release Log

Append-only. Source of truth is git log; this is the human index.

| Commit | Date | What |
|---|---|---|
| `ccf079d` | 2026-05-27 | PR #4 — SEO & Infrastructure Stabilization (6 commits, 300 files) |
| `caead17` | 2026-05-27 | PR #5 — Trust-badge cleanup (21 files, +25/-25) |
| `4c27988` | 2026-05-26 | PR #2 — Trust cleanup & stabilization (8 batches, ~480 files) |
| `9709150` | 2026-05-26 | CarloOS V2 — build fixes, stubs, 37 new content pages |
| `2d3030a` | 2026-05-25 | Initial monorepo — 5 apps, shared packages, Turborepo + Supabase |

## 8. Page Counts (current)

| Site | Routable pages | Status |
|---|---|---|
| dog-com | 129 | Pre-launch — prototype |
| fish-com | 72 | Staged |
| lizard-com | 49 | Staged |
| saddle-com | 40 | Staged |
| vets-co | 36 | De-prioritized (repurpose-as-trust-hub assumption) |
| **Total** | **326** | (sitemap-verified) |

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
