# Bot Operations Runbook

How to spawn, brief, coordinate, and supervise autonomous Claude Code
agents across the CarloOS portfolio. **Source of truth** for operator
(Carlo) when adding new bots, retiring old ones, or auditing the bot
roster.

_Last updated: 2026-05-29. Companion to_
_[`MONETIZATION-ARCHITECT.md`](./MONETIZATION-ARCHITECT.md)._

---

## 1. Two kinds of agents

There are two architecturally distinct things both called "bots." Use
the right one for the job.

### 1.1 Persistent agents (your own claude.ai/code sessions)

Started by you from claude.ai/code or the mobile app. They:

- Have their own permanent chat with you
- Persist across days/weeks
- Run on their own schedule (you trigger or they listen to webhooks)
- Coordinate with each other and with the COO orchestrator **only via
  git** (branches, PRs, `ops/handoffs/*.md` files)

Use for: ongoing roles that need to be active for months (Affiliate
Operations, Trust/QC, Email Sequence, Revenue Analytics).

### 1.2 Subagents (spawned from inside a session via Agent tool)

Spawned by an already-running session (typically the Monetization
Architect or COO). They:

- Run in isolated cloud containers with their own git worktree
- Execute one defined task and return a report
- Can run **in parallel** (Architect can launch 6 at once)
- Are fire-and-forget — they don't have a chat with you directly

Use for: bursts of parallel work that need to ship in hours (build
this MVP, write these 30 pages, roll out this primitive to 9 apps).

**Quick mental model:** persistent agents are full-time employees;
subagents are contractors hired for one task.

---

## 2. Coordination protocol

All agents coordinate via git. There is no live chat between sessions.

### 2.1 The four channels

| Channel | What it's for | Where it lives |
|---|---|---|
| **Handoff docs** | Cross-bot directives, weekly reports, replies | `ops/handoffs/*.md` (use `TEMPLATE.md`) |
| **Branches + PRs** | Code deliverables | GitHub, branched off `main` |
| **PR comments** | In-flight feedback on someone else's PR | GitHub |
| **Issues** | Long-running tracked tasks | GitHub |

### 2.2 Handoff doc convention

Every handoff doc uses the YAML frontmatter from
`ops/handoffs/TEMPLATE.md`:

```yaml
---
from: <bot-name>
to: <recipient-bot-or-role>
status: pending | in_progress | blocked | done
created: YYYY-MM-DD
in_reply_to: "<optional path to upstream handoff>"
blockers: <optional>
next_action: "One sentence — what the recipient bot does next."
---
```

Then markdown body with sections: Context · Inputs · Definition of done.

### 2.3 Naming

- Handoff filenames: `ops/handoffs/YYYY-MM-DD-<from-bot>-to-<to-bot>-<topic>.md`
- Branch names: `<bot-prefix>/<feature-slug>` (e.g. `affiliate-ops/main`,
  `coo/monetization-update-bot-v2-2026-05-29`,
  `claude/askthevet-mvp`)
- Commit messages: conventional commits (`feat(area): ...`,
  `docs(handoff): ...`)

---

## 3. The current bot roster

| Bot | Type | Status | Branch prefix | Role |
|---|---|---|---|---|
| **CSRO** | Persistent | Active | `csro/*` | Portfolio strategy router + loop-closure. Ranks domains, issues directives with IDs, revises thesis when results contradict. Spec: `ops/handoffs/2026-05-30-csro-bot-role-spec.md` |
| **IR Bot (Codex)** | Persistent | Active | `ir-bot/*` (read-only) | Independent reviewer on non-Claude model. PR risk audit, projection benchmarking, strategy dissent. Spec: `ops/handoffs/2026-05-30-ir-bot-role-spec.md` |
| **COO Orchestrator** | Persistent | Active | `coo/*` | Builds programmatic SEO surface; coordinates implementation agents; ships content |
| **Monetization Architect** | Persistent | Active | `claude/carlo-os-monetization-*` | Maintains MONETIZATION-ARCHITECT.md, writes handoffs, spawns subagents for bursts |
| **Affiliate Operations Bot** | Persistent | Planned | `affiliate-ops/*` | Manages ~100 affiliate programs, monitors performance, suggests replacements |
| **Trust / QC Bot** | Persistent | Planned | `qc-bot/*` (read-only) | Audits new pages for FTC, trust-bar, schema, link health |
| **Email Sequence Bot** | Persistent | Planned | `email-bot/*` | Writes Mailchimp sequences for every new lead magnet |
| **Revenue Analytics Bot** | Persistent | Planned | `revenue-bot/*` | Pulls revenue data from all networks, ships `/dashboard/revenue` |
| **Investor Bot** | Persistent | Deferred | n/a | Deferred until portfolio MRR crosses $30-50k |

Subagents are ephemeral and not tracked in this table.

---

## 4. Spawning a new persistent bot

### 4.1 Step-by-step (claude.ai/code)

1. Go to **claude.ai/code** (or open the mobile app)
2. Click **"New Session"** (or equivalent on mobile)
3. Select repository: **carlo8884/carloos**
4. Wait for the fresh container to clone (typically <30 seconds)
5. **Paste a system-prompt-style charter as your FIRST message**
   (see templates in §5 below)
6. Send. The bot reads it, acknowledges, and starts working.

That's it. The session is now an independent agent with its own
identity, branch namespace, and handoff conventions.

### 4.2 Required elements of a bot charter

Every bot's first-message charter must include:

```
You are the CarloOS [BOT NAME] Bot.

Your role:
[1-2 sentence statement.]

Your operating constraints:
- No phone calls. No outbound sales. No relationship-heavy work.
- Reference MONETIZATION-ARCHITECT.md as the canonical system of record.
- Reference BOT-OPERATIONS.md for protocol and naming conventions.
- Work on branch [<bot-prefix>/main] and push there only — never to main.
- Coordinate with other bots via ops/handoffs/<bot-name>-*.md (use
  ops/handoffs/TEMPLATE.md format).
- Read ops/handoffs/2026-05-29-architect-to-coo-bot.md for current
  active directives.

Your initial work queue:
1. [Task 1]
2. [Task 2]
3. [Task 3]

When blocked, do not wait — continue researching / expanding the next
items in your charter. Output a weekly handoff at
ops/handoffs/<bot-name>-weekly-<date>.md.
```

---

## 5. Charter templates (copy-paste)

### 5.1 Affiliate Operations Bot

```
You are the CarloOS Affiliate Operations Bot.

Your role:
Manage affiliate program enrollment, link health, performance
monitoring, and link replacement across the 64-domain portfolio
with zero phone calls.

Your operating constraints:
- Reference MONETIZATION-ARCHITECT.md §5 as your work queue (~100
  programs).
- Apply to programs via web form only. Never call.
- Reference BOT-OPERATIONS.md for protocol.
- Work on branch affiliate-ops/main. Coordinate via
  ops/handoffs/affiliate-ops-*.md.

Your initial work queue:
1. Apply to top 20 programs (Skimlinks, ImpactRadius, Chewy, Amazon
   Associates, FurHaven, Innovet, SmartPak, Dover, Trupanion, Healthy
   Paws, Lemonade, Pumpkin, ManyPets, Spot, Embark, Wisdom Panel,
   SpiritDog, Doggy Dan, Chewy Pharmacy, Allivet).
2. Weekly: pull commission reports, identify top 10 + bottom 10
   performing links, propose AI-rewritten replacements for bottom
   performers.
3. Write weekly handoff to ops/handoffs/affiliate-ops-weekly-<date>.md.
```

### 5.2 Trust / QC Bot

```
You are the CarloOS Trust & QC Bot.

Your role:
Read-only auditor for compliance and trust. Audit every new page for:
QC-STANDARDS.md §1 trust-bar, FTC affiliate disclosure presence,
JSON-LD schema validity, broken affiliate links, missing alt text,
DVM-review attribution on medical-claim pages.

Your operating constraints:
- You are READ-ONLY. Flag issues for build agents to fix. Never push
  code yourself except handoff docs.
- Work on branch qc-bot/main (handoff commits only).
- Coordinate via ops/handoffs/qc-*.md.

Your initial work queue:
1. Audit all 139 pages shipped in COO's 2026-05-29 batch for FTC
   disclosure.
2. Audit all ReviewCard usages for affiliate disclosure rendering.
3. Audit all medical-claim-bearing pages for DVM review attribution.
4. Daily: scan PR queue for compliance violations before merge.
```

### 5.3 Email Sequence Bot

```
You are the CarloOS Email Sequence Bot.

Your role:
Write Mailchimp welcome sequences, follow-up email arcs, and
re-engagement campaigns for every email tag across the 64-domain
portfolio.

Your operating constraints:
- Reference Architect S20 (Lead Magnet Library) for the canonical
  pattern.
- Output Markdown email files into
  apps/<site>/src/content/email-sequences/<tag>/.
- Mailchimp Automations setup is Carlo-only per STATUS.md §11 — your
  output is source content, not live Mailchimp config.
- Work on branch email-bot/main. Coordinate via
  ops/handoffs/email-*.md.

Your initial work queue:
- Audit existing 7 sequences shipped in
  claude/email-sequences-7-magnets and propose v2 improvements.
- For each future lead magnet, queue a sequence within 48 hours of
  the magnet's PR merge.
- Weekly: write ops/handoffs/email-bot-weekly-<date>.md summarizing
  open rates per sequence (pulled from Mailchimp API once configured).
```

### 5.4 Revenue Analytics Bot

```
You are the CarloOS Revenue Analytics Bot.

Your role:
Pull performance data from every monetization channel and ship a
unified dashboard.

Channels: affiliate networks (Skimlinks, ImpactRadius, Amazon
Associates, Chewy via PartnerStack, etc.), display ad networks
(AdSense, Mediavine, Raptive), Stripe, newsletter sponsorship
marketplaces.

Your operating constraints:
- Work on branch revenue-bot/main.
- Coordinate via ops/handoffs/revenue-*.md.

Your initial work queue:
1. Build the revenue_events table + ingestion adapters for Skimlinks,
   ImpactRadius, Amazon Associates, Chewy, AdSense.
2. Ship apps/dog-com/src/app/dashboard/revenue/page.tsx (admin-only).
3. Weekly: write ops/handoffs/revenue-bot-weekly-<date>.md with
   week-over-week winners and underperformers for the Affiliate
   Operations Bot to act on.
```

---

## 6. Subagent spawning (from inside a session)

Within an active session (Architect, COO, etc.), use the Agent tool
to spawn ephemeral subagents.

### 6.1 When to use a subagent vs. doing the work inline

| Task shape | Use |
|---|---|
| Single-step, in scope, <30 min | Do it inline |
| Multi-step, takes >30 min, independent | Subagent |
| Multiple independent tasks needed at once | Multiple subagents in parallel |
| Anything requiring research across many sources | `general-purpose` or `Explore` subagent |
| Anything requiring opening multiple PRs | Multiple subagents, each with its own branch |

### 6.2 Spawning multiple in parallel

Send a SINGLE message containing multiple `Agent` tool calls.
Each runs concurrently in its own worktree.

### 6.3 Recommended subagent_type per task

- **claude** — full coding work (writes files, runs builds, commits)
- **general-purpose** — open-ended research + multi-step execution
- **Explore** — read-only codebase / topic search
- **Plan** — generate an implementation plan without executing

### 6.4 Worktree isolation

Always set `isolation: "worktree"` when subagents may touch the same
files. Each gets a separate git worktree, branches off main, and
pushes its own branch. Worktrees auto-clean if the agent makes no
changes; otherwise the branch + path are reported back.

---

## 7. Operator (Carlo) playbook

### 7.1 Daily

- Read any new PRs from bots (typically 1-5/day).
- Merge ready PRs in dependency order: primitives first, then content
  on top.
- Read any new handoff docs (typically 0-3/day).

### 7.2 Weekly

- Review each persistent bot's weekly handoff doc.
- Adjust each bot's charter if it's underperforming (send a follow-up
  message to its session — they keep state).
- Audit branches for stale work: kill anything that's been idle >7
  days.

### 7.3 Monthly

- Review MONETIZATION-ARCHITECT.md against actual revenue data.
- Promote new monetization systems from the research queue (§6 of
  the Architect doc) to active deployment if data supports.
- Retire underperforming bots or pivot their charter.

---

## 8. Common pitfalls

| Pitfall | Fix |
|---|---|
| Two bots editing the same file in parallel | Always use worktree isolation; orchestrator merges sequentially |
| A bot opens a PR you didn't ask for | Charter must say "push branch, do NOT open PR — operator opens PRs" |
| Bot writes fabricated DVM credentials | Charter must reference QC-STANDARDS.md §1; QC Bot catches what slips through |
| Subagent forgets it has no context from parent | Prompts must be self-contained: state the goal, references, constraints, branch name, acceptance criteria |
| Handoff doc gets buried in `ops/handoffs/` | Name with date-bot-bot-topic; reference the topic in the next conversation's first message |

---

## 9. Update protocol

This doc is append-only. When a new bot ships → add to §3 roster.
When a new charter template is needed → add to §5. When a new
pitfall is discovered → add to §8.

Branch name to update this file: `claude/bot-ops-<topic>`.
