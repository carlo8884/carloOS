---
from: monetization
to: all
status: done
created: 2026-05-30
next_action: "Every bot adopts the directive-ID protocol on its next handoff."
---

# Loop activation — CSRO + IR Bot live

**TL;DR:** Carlo has spawned the **CSRO** (Chief Strategy & Research
Officer) and the **IR Bot** (Codex Independent Reviewer). The
self-improving feedback loop is now live. This memo tells every other
bot what changes on Monday morning.

---

## What's new

Two persistent bots joined the roster (now in `BOT-OPERATIONS.md` §3):

- **CSRO** — branch `csro/main`. Routes intelligence between bots,
  ranks the 64-domain portfolio weekly, issues directives with unique
  IDs, and revises the portfolio thesis when results contradict it.
  Full spec: `ops/handoffs/2026-05-30-csro-bot-role-spec.md`.
- **IR Bot** (Codex) — branch `ir-bot/main`, read-mostly. Audits PRs,
  benchmarks projections, dissents against CSRO. Full spec:
  `ops/handoffs/2026-05-30-ir-bot-role-spec.md`.

The loop they close:

> Research → Portfolio thesis → Domain prioritization → Bot directives
> → Results review → Thesis revision → (repeat)

---

## What changes for COO, Monetization, Visual, and specialist bots

### 1. CSRO directives arrive with unique IDs

Starting with CSRO's first daily / weekly brief, every directive looks
like:

```
[csro-dir-2026-W22-007] → COO
Action: <one-line action>
Why: <one-line rationale>
Deadline: <date or "next CSRO brief">
Done-when: <observable success criterion>
```

When you complete (or reject) a directive, reference its ID in your
reply handoff doc:

```yaml
---
from: coo
to: csro
status: done
created: 2026-06-02
in_reply_to: ops/handoffs/csro-daily-2026-06-01.md#csro-dir-2026-W22-007
directive_id: csro-dir-2026-W22-007
next_action: "CSRO closes the directive in next weekly ranking."
---
```

`TEMPLATE.md` has been updated with the new `in_reply_to` and
`directive_id` fields. Use them. CSRO maintains an open / closed /
overdue register every Monday; if your directive ID never shows up
referenced, CSRO will read that as "ignored" and either escalate or
diagnose.

### 2. IR Bot will review your PRs

IR Bot prioritizes high-risk PRs first: Stripe / payments, affiliate
routes, medical content, AI flows, FTC pages, shared UI/config, CI
scripts, revenue dashboards, robots/sitemap/canonical, and any
multi-app change. Findings land at
`ops/handoffs/ir-bot-pr-review-PR-<num>.md` with severity tags.

If you see a `blocker` or `high` finding on your PR: address it before
merge or write a reasoned rebuttal in a follow-up handoff. Do not
silently ignore — IR Bot reports unaddressed blockers to CSRO, which
becomes a directive-completion signal.

### 3. Weekly Tuesday: projection audit feeds CSRO's Wednesday pacing

IR Bot publishes `ops/handoffs/ir-bot-projection-audit-YYYY-MM-DD.md`
every Tuesday. The final section is a CSRO-actionable table — CSRO
consumes it for any target adjustments. If you own a number that gets
flagged AGGRESSIVE or UNREALISTIC, expect a CSRO directive that week
to tighten it.

### 4. Daily IR dissent on CSRO output

Every day, IR Bot reads CSRO's latest brief and either publishes a
dissent file (when blind-spot patterns trigger) or a one-line stub
("no dissent today"). CSRO must respond within 24h with thesis
revision / reasoned rebuttal / Carlo escalation. This is the loop's
closure mechanism — don't expect either bot to go silent.

---

## What stays the same

- All existing handoff conventions in `BOT-OPERATIONS.md` §2 still
  apply. Directive IDs and `in_reply_to` are additive, not
  replacements.
- Branch naming per `BOT-OPERATIONS.md` §2.3.
- COO, Monetization, Visual, and specialist bots continue to ship on
  their own branches and own their domains. CSRO routes priorities;
  it does not override execution judgment.

---

## What Monetization Bot (this session) is committing to

I'll adopt the directive-ID protocol on my next handoff to or from
CSRO. When CSRO's first directive arrives, I'll reference the ID in
the reply and close it explicitly. If a CSRO directive conflicts with
something already in flight, I'll write a concise objection rather
than silently complying or silently ignoring.

I'll also incorporate IR Bot's projection audit into my next
MONETIZATION-ARCHITECT.md update — anything flagged UNREALISTIC gets
revised or labeled as a hypothesis to be validated.

---

## Open question for v3 (deferred per Carlo, 2026-05-30)

**Who owns numeric P&L pacing?** The current CSRO is the "Research"
flavor (rank domains, route directives, revise thesis). The earlier
"Revenue" flavor owned weekly numeric target-setting and
Wed/Fri pacing — that's no longer in CSRO's charter.

Two options for v3 review (a few days from now):

1. **COO owns it.** COO produces
   `ops/handoffs/coo-weekly-pacing-YYYY-WW.md` every Friday. CSRO
   consumes the pacing report as input for tier reassignment and
   directive recalibration. Pros: keeps CSRO purely strategic; COO
   already has execution-level visibility. Cons: COO charter needs
   updating; numeric and execution functions concentrate in one bot.
2. **Pull pacing back into CSRO.** Restore Wed + Fri numeric pacing
   docs from the earlier CSRO-as-Revenue charter. Pros: single throat
   to choke for "did the number go up." Cons: CSRO becomes both
   strategist and pacer; cognitive load risk.

No decision today. Carlo decides at v3.

---

## How to verify the loop is working (signals for Carlo)

After ~1 week:
- CSRO weekly portfolio ranking exists with diff section + open
  directive register
- IR Bot has produced at least one projection audit and one strategy
  dissent (or stub)
- At least one CSRO directive has been closed by a downstream bot
  with `directive_id:` in its handoff
- Carlo escalation count is flat or declining

If any of those four are missing after 7 days, the loop has a leak.
Diagnose: which bot didn't reference IDs, which dissent went silent,
which directive was bad. The loop is fragile in week one. Don't expect
it to be self-healing yet.
