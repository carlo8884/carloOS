# CarloOS Fleet — Canonical Scheduled-Run Prompt

**Purpose:** one central place for the recurring instruction each bot session runs. A repo file can't *fire* on a
schedule by itself — the **trigger** must be set per session in the Claude Code app's scheduled/recurring-run
feature. But pointing each session's scheduled run at **"execute the prompt for your role in this file"** means the
*content* lives here and updates centrally — change it once, every bot's next run picks it up.

**How to wire it (Carlo, once per session):** in each bot's Claude Code session, set a recurring/scheduled task
(e.g. every 30–60 min) whose prompt is:
> `Read ops/csro/scheduled-run.md, run the section for your role, then stop.`

If your sessions don't have a scheduler, this file still works as the **paste-prompt** you drop in to re-fire a
bot — same content, manual trigger.

---

## ALL BOTS — standing loop (every scheduled run)

1. `git fetch origin main` and rebase/sync onto it (a merge wave is ongoing — stay current, avoid conflicts).
2. Re-read your queue in `ops/handoffs/2026-05-30-csro-fleet-activation.md` + your `csro-dir-*` items in
   `ops/csro/open-directives.md` + your lane in `ops/policies/bot-coordination.md`.
3. Take the top **in-lane** item, do it, commit + push to your own branch, open a PR (rebased on latest main).
4. Take the next item. Keep going.
5. **When blocked:** log it in a handoff/PR comment, move to the next non-blocked item. Never idle.
6. **GUARDRAIL — do not invent work.** Only real, in-lane, value-adding work from your queue or open-directives.
   If your queue is genuinely empty and nothing in open-directives applies to you: STOP and post
   "queue empty — awaiting direction." Do NOT manufacture thin content or busywork.
7. Respect QC-STANDARDS §1 (trust bar) and your lane. Leave main green (run the CI checks' intent before pushing).

---

## Per-role priorities (current — update centrally as state changes)

### COO
Vets.co insurance launch-readiness/trust-audit (`dir-007`) · Efty footer component (`dir-008`) · consolidation
redirects (PetFoods→PetFood, Ferrets→Ferret) · free-tier vet-directory prep (`dir-010`) · keep main green.

### Monetization Bot — TOP: live money
1. **`dir-015`** — fix the live Dog.com DNA affiliate 404s (`/go/embark-vet`, `/go/basepaws` unregistered) + the
   3 compliance items. **These are losing commission now.**
2. **`dir-009`** — Ferret.com (11K/mo, zero monetization) buy-boxes + PetFood.com buy-box retarget.
3. Confirm Vets.co carrier-enrollment realism (which carriers we can self-serve enroll with).

### Visual Bot
Launch-first visual sign-off: Ferret → Vets insurance → PetFood · buy-box / ReviewCard polish on monetized pages ·
audience-capture UX (email/lead-magnet placement). Per `dir-012` (note: horse-cluster is VALIDATE-FIRST, not build).

### Racing Bot
`dir-016` — deliver the Horses.com fork decision brief (racing-intelligence vs editorial vs hybrid). Test the
"informative + licensed racing-data-API analysis" hypothesis; tag every avenue 🟢/🟡/🔴 on legal-licensing friction
(default NO on 🔴 unless overwhelming value + Carlo opts in). Judge by highest-and-best-use across all buyers.

### IR Bot (read-only / chat-relay)
Self-run the adversarial loop (`IR-BOT.md §3a`). Next: **audit the Ferret/PetFood monetization PRs** with the same
rigor as the strategy pass. Report findings in chat → Carlo relays → CSRO files. You already caught `dir-015` + the
10-finding strategy pass; keep drawing blood.

---

## CSRO (me)
Runs its own coordination loop (see `CSRO.md §5a/§0c`): sweep merges + PRs, verify & file IR findings same-session,
advance the autonomous work queue, keep registers honest. Wakes on subscribed PR events; otherwise on Carlo check-in.

---

*Update the per-role priorities here as directives close/open — this is the single source the scheduled runs read.*
