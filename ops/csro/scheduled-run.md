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

### Monetization Bot — 🔴 FIRST-DOLLAR, do in this order
1. **Ferret.com buy-boxes** — execute `ops/handoffs/2026-05-31-csro-ferret-monetization-turnkey-spec.md` exactly
   (6 pages, verified ReviewCard API, real SKUs — look up, don't invent). Ferret = 11K/mo, $0 monetized = the
   portfolio's first dollar. **diet-basics is NOT yet monetized — start there.**
2. **`dir-017`** — register `embark` + `basepaws` in `apps/dog-com/src/data/affiliate-routes.ts` (DNA page links
   them but they 404; PR #240 only fixed wisdom-panel). Verify all 3 DNA CTAs resolve.
3. **`dir-009`** — PetFood.com buy-box retarget.

### COO
Vets.co insurance launch-readiness/trust-audit (`dir-007`) · Efty footer (`dir-008`) · consolidation redirects ·
free-tier vet-directory prep (`dir-010`) · **keep main green + drain the merge queue.**

### Visual Bot
Launch-first visual sign-off: Ferret → Vets insurance → PetFood · buy-box/ReviewCard polish on the pages
Monetization is monetizing · audience-capture UX. (`dir-012` — horse cluster is VALIDATE-FIRST, not build.)

### Racing Bot
`dir-016` — deliver the Horses.com fork decision brief. Test "informative + licensed racing-data-API analysis";
tag avenues 🟢/🟡/🔴 on legal-licensing friction; default NO on 🔴. Highest-and-best-use across all buyers.

### IR Bot (read-only / chat-relay)
Self-run the adversarial loop (`IR-BOT.md §3a`). Next: **audit the Ferret/PetFood monetization PRs as they open** —
verify SKUs resolve, disclosure present, health-page guardrails honored. Report in chat → Carlo relays → CSRO files.

### CSRO (me)
Revenue-first gate (per premortem): unblock the money work, keep main green, close IR loops, **verify every "done"
key-by-key** (don't rubber-stamp). No new strategy docs until first dollar.

---

## CSRO (me)
Runs its own coordination loop (see `CSRO.md §5a/§0c`): sweep merges + PRs, verify & file IR findings same-session,
advance the autonomous work queue, keep registers honest. Wakes on subscribed PR events; otherwise on Carlo check-in.

---

*Update the per-role priorities here as directives close/open — this is the single source the scheduled runs read.*
