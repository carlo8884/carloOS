# StateLineTack — full working report
**Prepared:** 2026-06-05 · **Status:** handoff package ready · **PR:** carlo8884/carloOS#492 (draft)

This is the complete record of what we worked through — the thinking at the start, what got built in the middle, and where things stand now — so you have one document to work from and a clean email to send Glenn (separate file: `glenn-email-draft.md`).

---

## 1. The situation (where we started)

- StateLineTack is a strong, ~45-year brand on **Shopify Plus** — good platform footing, real category depth.
- The work that actually moves value isn't growth-for-growth's-sake; it's **margin quality and recovering leaks**.
- **Constraint that shaped everything:** Glenn is time-pressed and tends to read suggestions as criticism. So the entire strategy is built to **hand him finished gifts**, framed as things that *save money / add upside* — never as "here's what's broken."

### The core insight
The biggest lever is the always-on tiered discount + branded **coupon-site leakage** (Honey/RetailMeNot skimming commission on sales already earned and training customers to never pay full price). But that's the *sensitive* one — so we lead with low-friction, non-offensive wins first and save the discount conversation for after trust is built.

---

## 2. The strategy (what we agreed to do)

Two buckets:

**A. Things we control 100%** — no Glenn sign-off needed:
- Build authority content + tools on **our own equestrian properties (Saddle.com / Horses.com)** that rank, get cited by AI search, and funnel high-intent buyers toward StateLineTack.
- Build **drop-in tools/calculators** Glenn can paste into his site — finished gifts, zero risk to him.
- Plan **Pinterest** (equestrian is hugely Pinterest-driven; owned channel, no budget needed).

**B. Things that need Glenn or store access** — package so his step is one click:
- Redirect recovery, branded deals page, product schema, the discount restructure (later).

### How to approach Glenn (sequencing matters as much as content)
A busy, defensive owner hears *a list of fixes* as *a list of his failures*. So: **hand him one finished gift, let him win, then the next.** Never dump the whole list at once.

---

## 3. What got built (all on PR #492)

| # | Deliverable | What it does | Glenn's effort | Status |
|---|---|---|---|---|
| 1 | **Horse blanket size calculator** (`tools/horse-blanket-size-calculator.html`) | Measure → recommended US size + UK equivalent; reduces wrong-size **returns** | Paste one file / iframe | ✅ ready |
| 2 | **Redirect-recovery script** (`scripts/seo/redirect-recovery.mjs`) | Finds old URLs that now 404 and maps them to live pages → Shopify-ready CSV; recovers lost Google traffic | Run once, upload CSV | ✅ ready |
| 3 | **Branded deals/coupon page** (`tools/statelinetack-deals-page.html`) | Ranks for "StateLineTack coupon," shows real offers, starves Honey/RetailMeNot | Paste page, add real offers | ✅ ready |
| 4 | **Product schema spec** (`ops/statelinetack/product-schema-spec.md`) | Star ratings + price in Google results + AI-search citation; reviews only if real | Paste Liquid snippet | ✅ ready |
| 5 | **Pinterest strategy** (`ops/statelinetack/pinterest-strategy.md`) | Boards, 12 ready pin titles+descriptions, funnel map, seasonal calendar, graphic spec | Owned channel (ours) | ✅ ready |
| 6 | **Master backlog** (`ops/statelinetack/BACKLOG.md`) | ~60 prioritized tasks, scored, controllable vs access-gated | n/a | ✅ living doc |

### The honest part about execution
- The dev environment **can't reach the live sites** (bot-blocked, 403) or archive.org, and `curl` is locked down. So I could not pull StateLineTack's URL list from here. Rather than fake a redirect file, I built the **script** that produces a *verified* CSV when run on any normal machine. That's the honest, higher-integrity path.
- Everything else was buildable here and is done.

---

## 4. What's ready for Glenn right now (the gifts)

In recommended order of "hand him next":

1. **Blanket size calculator** — the icebreaker. Frame: *"reduces blanket returns."* Saves him money; impossible to read as an attack.
2. **Branded deals page** — additive, never references anything "broken"; recaptures his own brand searches.
3. **Product schema** — purely additive; more clicks from rankings he already has.
4. **Redirect recovery** — the most generous (we do all the work; he just uploads). Needs one input from him: run the script, **or** send his Google Search Console "Pages" export and we generate the CSV.

---

## 5. What still needs Glenn / access (don't push yet)

- Reconnect Shopify **or** Search Console export → finalizes the redirect CSV.
- Order/margin data → quantifies the discount-leakage recovery in real dollars (this is what makes the eventual discount conversation land).
- The **discount restructure itself** — highest impact, highest sensitivity. Save it for after 2–3 gifts have built trust.

---

## 6. What's still in motion (the loop)

Controllable items still queued that I can keep building without Glenn:
- Saddle.com / Horses.com blanket buying-guide content cluster (funnel → SLT)
- More drop-in tools: fly-sheet selector, girth/cinch calculator, bit-fit guide
- Email lead-magnet (printable measuring chart) + capture
- "What I shipped this week" one-pager for Glenn

These ship one at a time on request and get committed to the same branch.

---

## 7. Bottom line

You have **5 finished, low-risk deliverables** to put in front of Glenn — all framed as gifts that save money or add upside, none requiring a re-platform, added headcount, or a hard conversation. Lead with the calculator, drip the rest. The redirect CSV is the one that needs a single small input from him.

The discount/leakage fix — the real EBITDA mover — stays in your back pocket until the gifts have earned the room to raise it.
