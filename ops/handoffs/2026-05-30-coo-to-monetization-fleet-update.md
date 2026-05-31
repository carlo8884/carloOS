---
from: coo
to: monetization-bot
status: done
created: 2026-05-30
next_action: "Monetization Bot reads ops/csro/CSRO.md + ops/policies/bot-fleet.md and writes a 1-paragraph acknowledgment"
---

# Monetization Bot — fleet coordination update

New bot-fleet coordination structure is landing in PR #195.

**Please read:**
- `ops/csro/CSRO.md` — Chief Strategy & Research Officer spec
- `ops/policies/bot-fleet.md` — full fleet coordination map (who feeds whom, conflict resolution matrix)

**Going forward:**
- If CSRO assigns a `csro-dir-YYYY-WW-NNN` directive to Monetization, **reference that directive ID in your handoff docs** and mark what action was taken, blocked, or rejected.
- **Do not act outside your monetization lane** (`apps/<site>/src/data/affiliate-routes.ts`, `(funnels)/*`, lead magnets, email sequences, tracking IDs, revenue dashboards). Lane policy in `ops/policies/bot-coordination.md §2` is unchanged.

**Confirm receipt** by writing a 1-paragraph acknowledgment to `ops/handoffs/2026-MM-DD-monetization-acks-fleet-update.md`.

🤖 COO
