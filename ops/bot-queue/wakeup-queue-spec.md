# Bot Wakeup Queue — v1 Spec

**Author:** CSRO · **Date:** 2026-05-31 · **Approved by:** Carlo (via advisor)
**Implementation owner:** COO (`csro-dir-2026-W22-020`). **Keep it simple — no orchestrator yet.**

## Problem
Bots are turn-based sessions; they go idle when a turn ends and **only an external trigger wakes them.** v1 does NOT
solve waking (that needs a scheduler — §4). v1 solves the *other half*: **when a bot wakes, it instantly knows what
to do and never has to ask Carlo.** Carlo says "go"; the bot reads its queue.

## The files
`ops/bot-queue/<Bot>.md` for: COO, CSRO, Monetization, Visual, Horses-Racing, IR. Each carries, per item:
**directive ID · priority · owner · status (queued/in_progress/blocked/done) · next action · deadline · do-not-touch · restart prompt.**

## 1. What every bot READS on wake (in order)
1. its bot prompt
2. `ops/policies/bot-fleet.md` + `bot-coordination.md` (lane)
3. **its `ops/bot-queue/<Bot>.md`** ← the to-do list
4. latest `ops/csro/daily/` brief
5. relevant `ops/handoffs/`
→ unblocked work remains → **continue**. Empty/blocked → then ask Carlo.

## 2. What every bot UPDATES before it STOPS (mandatory)
In its queue file: (1) what it finished, (2) what remains, (3) what's blocked + on what, (4) next action on restart,
(5) whether Carlo is needed. **A bot that ends without updating its queue has failed the handoff.**

## 3. How CSRO detects STALLED directives
CSRO sweeps each session (part of the CSRO loop):
- **Stalled = status `in_progress`/`queued` with no related branch/PR/commit across ≥2 CSRO sessions** (fleet-time, not days).
- On stall, CSRO writes one line in the daily brief: directive ID + diagnosis (bad directive? bot not woken? blocked?) + action (re-scope / re-fire / close-lapsed).
- A directive `in_progress` with **zero git activity** = the bot was never woken → flag Carlo to re-fire that bot (not a bot failure).
- No directive lives forever: 2× past deadline with no progress → close as `lapsed` with a one-line reason.

## 4. Scheduler options — APPROVED NOW vs LATER
| Option | Does | Status |
|---|---|---|
| **GitHub Action** (mechanical checks) | runs deterministic gates every 12h, no session | ✅ **APPROVED + BUILT** (PR #260, `ir-guard.yml`) |
| **Codex automation** (IR/synthesis) | scheduled review in Codex | 🟡 APPROVED — Carlo sets up in Codex app when ready |
| **Manual Claude restart** | Carlo pastes restart prompt | ✅ current default (this queue makes it 1-line) |
| **Real orchestrator** (script starts Claude) | auto-wakes sessions | ❌ **LATER ONLY** — do NOT build (premortem: no complexity before revenue) |

## 5. Avoiding noisy queue churn
- **CSRO owns priorities; each bot owns its own status.** Don't rewrite the whole file — edit only the changed rows.
- **No churn commits:** update the queue in the **same commit** as the work, not as separate "touched queue" commits.
- **No stub/no-op updates** (mirrors IR's "no 'clean' stub files" rule). Update only on real state change.
- Queue files are **ops-only** → never trigger app builds (per the Vercel cost guard).
- Keep each file < ~1 screen. Archive done items; don't accumulate.

## Implementation directive
`csro-dir-2026-W22-020` → COO: CSRO has drafted the spec + README + 4 example queue files (CSRO, COO, Monetization,
Visual, Horses-Racing, IR all stubbed). COO: review, complete/normalize, commit as the canonical v1, and adopt the
read-on-wake / update-on-stop protocol fleet-wide. Do NOT build an orchestrator. Keep low-noise per §5.
