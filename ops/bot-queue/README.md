# Bot Wakeup Queue (v1)

**Purpose:** bots don't wake themselves — but when they DO wake, they must instantly know what to do, **without
asking Carlo.** This folder is the durable per-bot to-do list that survives session restarts. (Designed per Carlo's
advisor, 2026-05-31.)

## How it works

**When a bot STARTS, it reads (in order):**
1. its bot prompt
2. `ops/policies/bot-fleet.md` + `ops/policies/bot-coordination.md` (lanes)
3. **its own queue file** (`ops/bot-queue/<Bot>.md`) ← the to-do list
4. the latest CSRO daily brief (`ops/csro/daily/`)
5. relevant handoffs in `ops/handoffs/`

→ If unblocked work remains, it **continues**. It does **NOT** ask Carlo what to do unless its queue is empty or blocked.

**Before a bot ENDS a session, it MUST update its queue file with:**
1. what it finished
2. what remains
3. what's blocked (and on what/whom)
4. what to do next on restart
5. whether Carlo is needed

## Queue file format (each `<Bot>.md`)
Per item: **directive ID · priority · status (queued/in_progress/blocked/done) · next action · deadline · do-not-touch · restart prompt.**

## The honest limit
This does NOT auto-wake the bots — only an external scheduler can (see below). It fixes the *other* half: a woken
bot is instantly productive instead of asking Carlo to re-explain. Carlo still says "go"; the bot reads its queue.

## Scheduler options (simplest → strongest)
1. **GitHub Action** — for *mechanical* checks. ✅ BUILT: `.github/workflows/ir-guard.yml` (PR #260) runs the
   deterministic risk gates every 12h, no session needed. (Cannot do LLM thinking without API keys = spend = Carlo decision.)
2. **Codex automation** — for scheduled IR/synthesis in Codex (Carlo to set up in the Codex app).
3. **Manual Claude restart** — current state: Carlo pastes each bot's restart prompt. Works; depends on Carlo.
4. **Real orchestrator** — a script/service that periodically starts Claude Code with the right prompt. Powerful,
   more setup. **Future only — do NOT build yet** (per advisor + premortem: avoid complexity before revenue).

## Owner
CSRO maintains the queue files' priorities as directives open/close. Each bot updates its own file's status.
