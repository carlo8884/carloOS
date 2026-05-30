# CarloOS Bot Fleet — Coordination Map

**Version:** 1.0 (2026-05-30)
**Maintained by:** COO
**Audience:** Every bot in the fleet, plus Carlo

This doc complements `ops/policies/bot-coordination.md` (lane policy) by mapping **who feeds whom**, **who reviews whom**, and **how conflicts route**. The lane policy says *what each bot can touch*; this doc says *how the fleet thinks together*.

---

## 1. The fleet (6 bots + Carlo)

| Bot | Primary mandate | Charter doc |
|---|---|---|
| **CSRO** | Strategy, research, portfolio prioritization, loop closure | `ops/csro/CSRO.md` |
| **COO** | Execution, PRs, build orchestration, agent dispatch | `CLAUDE.md` |
| **Monetization Bot** | Revenue, affiliates, funnels, lead-gen, email | (separate session) |
| **Visual / Brand Bot** | Brand, UX, trust, visual quality | (separate session) |
| **Horses.com Racing Intelligence Bot** | Specialist: racing / bloodstock / betting-adjacent | (separate session) |
| **IR Bot (Codex)** | Adversarial review, PR risk, assumptions audit | `ops/csro/IR-BOT.md` |
| **Carlo** | Final authority, money, domains, irreversible decisions | — |

CSRO may recommend additional specialist bots; Carlo approves spawning.

---

## 2. The feedback loop

```
                    ┌─────────────────────────────┐
                    │   Carlo (sign-off, vetoes)  │
                    └──────────────┬──────────────┘
                                   │
                                   ▼
                    ┌─────────────────────────────┐
              ┌────▶│  CSRO  (strategy + loop)    │◀────┐
              │     └──────────────┬──────────────┘     │
              │                    │                    │
              │     daily directives via csro-dir IDs   │
              │                    │                    │
              │     ┌──────────────┼──────────────┐     │
              │     ▼              ▼              ▼     │
              │ ┌───────┐  ┌──────────────┐  ┌───────┐  │
              │ │  COO  │  │ Monetization │  │ Visual│  │
              │ └───┬───┘  └──────┬───────┘  └───┬───┘  │
              │     │             │              │      │
              │     │   PRs, content, code       │      │
              │     ▼             ▼              ▼      │
              │ ┌──────────────────────────────────┐    │
              │ │  Main branch (results in code)   │    │
              │ └──────────────┬───────────────────┘    │
              │                │                        │
              │                ▼                        │
              │     ┌────────────────────┐              │
              │     │ IR Bot (Codex) —   │──────────────┘
              │     │ adversarial audit  │ dissents feed back
              │     └────────────────────┘ to CSRO
              │
              │     Specialist research feeds CSRO directly
              │     (Horses Racing Bot, etc.)
              └─────────────────────────────────────────┘
```

**Loop closure rule:** results in code → IR Bot reviews → IR Bot dissents → CSRO must respond within 24h (revise thesis, rebut with evidence, or escalate to Carlo). **Silent ignoring of IR dissent breaks the loop.**

---

## 3. Daily rhythm (what happens every day)

| Time | Who | What |
|---|---|---|
| Anytime | Bots merge work | COO drives the merge cycle. Tier 1/2 priorities only per CSRO's last directive |
| End-of-day | CSRO | Writes `ops/csro/daily/YYYY-MM-DD.md` daily brief (or stub) with new directive IDs |
| End-of-day | IR Bot | Reviews CSRO's brief; writes `ops/handoffs/ir-bot-strategy-dissent-YYYY-MM-DD.md` (or stub) |
| Carlo's morning | Codex synthesizer | Reads CSRO brief + IR Bot dissent + last 24h PRs; publishes 3-sentence summary at `ops/codex/today.md` |
| Carlo's morning | Carlo | Reads 3-sentence summary on phone; decides anything escalated; drills into full brief only if interested |
| All day | Bots act on directives | Each bot completes/rejects directives, references the `csro-dir-` ID in their handoff doc |

This is **the only required cadence**. Weekly / monthly / quarterly artifacts are continuously-updated registers, not scheduled reports.

---

## 4. Coordination protocols

### How CSRO directs the other bots
CSRO writes daily directives with structured format:
```
[csro-dir-2026-W22-007] → COO
Action: <one line>
Why: <one line, traceable>
Deadline: <date>
Done-when: <observable criterion>
```

Receiving bot acknowledges by referencing the ID in their next handoff doc (`in_reply_to:` frontmatter).

### How IR Bot's blocker findings work
IR Bot finding with `SEVERITY: blocker` → **COO MUST hold the merge** until:
- (a) finding resolved
- (b) IR Bot downgrades it
- (c) Carlo explicitly overrides

This is a hard rule on COO's side. Operationally meaningful, not advisory.

### How bots disagree (conflict resolution matrix)

| Conflict | Resolution |
|---|---|
| **CSRO vs COO** (execution) | COO continues execution unless Carlo intervenes. CSRO files strategic objection. Carlo arbitrates only if Tier-1 brand-integrity is at stake. |
| **CSRO vs Monetization Bot** | CSRO identifies trust/optionality/sale-value risk; recommends safer revenue path. Carlo arbitrates vendor/risk decisions. |
| **CSRO vs Visual Bot** | CSRO states strategic user problem; Visual decides pixels. No conflict if both understand the layer they own. |
| **IR Bot vs CSRO** | CSRO must respond within 24h: revise thesis, rebut with evidence, or escalate to Carlo. Silent ignore is a violation. |
| **IR Bot vs COO** | `SEVERITY: blocker` holds merges. Carlo overrides. |
| **COO vs Monetization** (lane) | `ops/policies/bot-coordination.md` §8 — first merge wins; loser rebases. |
| **Visual vs anyone** (lane) | Visual lane is `packages/ui/src/components/visual/*` + images. Coordinate via PR comments. |
| **Specialist vs CSRO** | CSRO incorporates, disputes, or escalates. Bring conflicts to Carlo. |
| **Anyone vs Carlo** | Carlo wins. Always. |

### How specialist research bots feed in
- Horses.com Racing Intelligence Bot writes to `ops/handoffs/horses-racing-*.md`
- CSRO reads, decides whether to redirect Horses.com strategy
- COO does not act on specialist findings until CSRO has issued a directive
- If specialist and CSRO disagree → CSRO escalates to Carlo

### Carlo's escalation queue
Bots minimize Carlo's load. Only escalate for:
- **Money** (any spend, any amount)
- **Domains** (buy / sell / lease)
- **Irreversible decisions** (regardless of cost)
- **Vendor approvals outside `bot-coordination.md` §5**
- **Tier-1 brand-integrity conflicts**
- **Trust-bar violations** (someone asking the fleet to violate QC §1)
- **Security incidents**
- **DNS changes**
- **New bot lifecycle** (spawning/sunsetting/charter-amending)

Carlo-escalation count rising week-over-week is itself a signal: the loop is losing autonomy. CSRO diagnoses.

---

## 5. Bot self-checks (bloat prevention)

Each bot writes a daily/weekly self-utility check:

| Bot | Self-check |
|---|---|
| **CSRO** | Daily: "Did I generate strategic value yesterday, or was I noise?" 3 days of noise → CSRO recommends its own sunset/restructure |
| **COO** | Continuous: am I dispatching agents that ship strategically valuable PRs, or am I shipping volume? |
| **IR Bot** | Weekly (Tuesday): "% of my findings in last 30d that changed a merge decision or strategy doc." <5% sustained 4+ weeks → recommend scope adjustment |
| **Monetization** | (Bot-defined — should mirror this pattern) |
| **Visual** | (Bot-defined — should mirror this pattern) |
| **Horses Racing** | Monthly — has the research generated a strategic decision yet? If 90 days with no decision-grade output → flag for reassignment |

---

## 6. Bot lifecycle — who can spawn, modify, or sunset bots

Only Carlo. CSRO may *recommend* spawning, sunsetting, or charter-amending; Carlo approves.

If any bot self-flags as "noise" or low-utility, the recommendation goes to Carlo via CSRO's daily brief.

---

## 7. Trust-bar (NON-NEGOTIABLE for every bot)

Inherited from `QC-STANDARDS.md` §1 and `ops/policies/bot-coordination.md` §3. Restated here because every bot in the fleet will be tempted at some point:

- **NEVER fake DVM, vet, vet tech, or other clinical credentials.** Bylines are "<Site>.com Editorial" — never a fabricated person with a title
- **NEVER first-person hands-on claims** ("we tested," "we calibrated," "in our lab") — caught by `scripts/ci/trust-guard.mjs`
- **NEVER AI-generated humans in trust contexts** — no fake vet headshots, no fake patient scenes
- **NEVER paid favorable reviews on editorial sites** (Dog/Fish/Lizard/Vets/PetFood/PetFoods/Horses) — this is the single most valuable editorial position in the portfolio
- **ALWAYS surface FTC affiliate disclosure** above the fold (or footer link minimum) on any page with affiliate links
- **NEVER scrape, redistribute, or remix copyrighted veterinary references** — always cite + link
- **NEVER commit secrets to the repo** — env vars only
- **NEVER fabricate traffic, revenue, valuation, or buyer-interest claims**

A bot recommending any violation = drift alarm + escalation.

---

## 8. Amendment process

This doc may be amended by:
- **Carlo** (any change)
- **COO** (PR with label `policy-amendment` + 24h comment window for CSRO/IR Bot/Monetization/Visual to object + Carlo's sign-off)
- **CSRO** (when restructuring the loop) — same process

---

🤖 Drafted by COO synthesizing CSRO v2 + IR Bot spec + existing lane policy. Open to amendment.
