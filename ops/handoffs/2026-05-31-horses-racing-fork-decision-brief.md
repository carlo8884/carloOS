---
from: Horses.com Racing Bot (research specialist)
to: CSRO → Carlo (fork decision)
status: complete — decision-grade
created: 2026-05-31
re: dir-016 — Should Horses.com be a racing-intelligence platform, an equine editorial asset, or a hybrid?
deliverable_for: csro-dir-2026-W22-016 (gate: 2026-05-31-csro-horses-racing-fork-gate.md)
---

# Horses.com fork — decision-grade brief

Answers `dir-016`. Built to the CSRO-refined structure: leads with the **buyer-set tradeoff**, labels every
claim `[FACT]`/`[RESEARCH]`/`[HYPOTHESIS]` + source, treats **wagering-adjacent as a legal hard-stop**, tags
every **data-API avenue 🟢/🟡/🔴** on licensing friction, scores **highest-and-best-use across ALL buyers**, and
states **what to build next** under each branch.

> Label key — `[FACT]`: in-repo or directly verifiable. `[RESEARCH]`: external, sandbox-unverified (re-verify
> off-sandbox before quoting Carlo externally). `[HYPOTHESIS]`: my inference / assumption where a fact is gated
> (e.g. enterprise pricing behind a sales call).

---

## 0. Headline — this is a BUYER-SET choice, not a feature choice

The three forks are really three **different buyers** with three **different risk loads**. Pick the buyer; the
build follows.

| Fork | Who buys it | What they pay for | Legal/ops load | Named buyer exists? |
|---|---|---|---|---|
| **A. Racing-intelligence platform** | Racing/wagering/data cos (ADW, sportsbook, racing media) | A data/ratings product + audience | **HIGH** — gambling-adjacent + data-licensing cost + ongoing ops | ❌ No named buyer `[HYPOTHESIS]` |
| **B. General equine editorial asset** | **Equine Network** (named, de-risked) | Audience + commerce + membership/events | **LOW** — content/affiliate only | ✅ Yes — Equine Network `[RESEARCH: strategic-acquirers.md §1a]` |
| **C. Hybrid (editorial + light racing layer)** | Equine Network primarily; optionality toward racing buyers | Same as B + a traffic/authority layer | **LOW–MED** — only if racing stays non-wagering | ✅ Same as B |

**The tradeoff in one sentence:** Fork A chases a *bigger but unproven* product with real legal load and **no
named buyer**, while Fork B/C builds the *named, de-risked* Equine Network exit — so the burden of proof is on A
to show overwhelming value, and (per the API analysis in §3) **it cannot, because the data moat that would make A
defensible is 🔴-hard/expensive to license in the US.**

**Recommendation (detail in §4): Fork C — editorial asset with a light, non-wagering racing layer.** It preserves
the named Equine Network story, adds cheap audience/authority, keeps optionality toward a racing buyer if traffic
ever justifies it, and carries none of A's legal load. **Fork A is a NO unless Carlo explicitly opts into the
gambling-adjacent + data-licensing burden — which the evidence says he should not.**

---

## 1. Fork A — Racing-intelligence platform (the ambitious option)

**Thesis:** Horses.com becomes a Timeform/The-Athletic-of-racing: ratings, analysis, a data product.

- **Market reality is against it.** US pari-mutuel handle is in structural decline — ~$11.0B in 2025, −2.1% YoY,
  **−57% in real terms since 2003**; the audience is aging (43% are 55+, 12% under 34). `[RESEARCH]` Betting the
  bettor market is betting a shrinking pool.
- **No named buyer.** The portfolio thesis is build-toward-a-*named*-strategic. There is **no named racing/data
  acquirer** in the register; positing one would repeat the dir-002 fabrication error. `[FACT: strategic-acquirers.md]` / `[HYPOTHESIS]` that racing/data buyers *could* exist.
- **The defensibility requires a data moat that is expensive/gated to license** (see §3). Without proprietary or
  licensed data, an "intelligence platform" is just opinion content — not a product a data buyer pays for.
- **Legal load is real** (see §2): the value/odds/ratings layer reads as handicapping and pulls in wagering-
  adjacent compliance.

**Verdict:** highest ceiling, lowest probability, highest risk, no named buyer. **NO** as the primary identity.

---

## 2. Wagering-adjacent = legal HARD-STOP (the exact line)

Per dir-016, this is a compliance load Carlo must explicitly opt into. **Default NO.** The precise boundary:

**🟢 SAFE (build freely, trust-bar clean):**
- Educational explainers (how racing works, what a furlong is, reading a racecard) `[FACT: QC §1 permits]`
- Heritage/editorial (famous horses, Triple Crown history, aftercare)
- Ownership/bloodstock education (non-advice)
- Factual results/data *presented editorially* (not as a betting tool)

**🔴 HARD-STOP (forbidden without explicit Carlo opt-in + legal review):**
- Tips, picks, selections, "best bets" `[FACT: QC §1 + Carlo no-gambling-risk posture]`
- Odds/value/EV/"fair odds" engines, model-implied win probabilities framed for wagering — **reads as
  handicapping** even with disclaimers `[HYPOTHESIS]`
- Sportsbook/ADW affiliate links (the single biggest racing monetizer — and the one that *narrows* the buyer set
  to gambling cos and repels Equine Network) `[RESEARCH]`
- Any "guaranteed"/"beat the market" claim `[FACT: QC §1]`

**Note on the existing `apps/horse-racing` app:** its Intelligence Rating + value/EV/"fair-odds" engine sits on
the 🔴 line. Per dir-016 it is **paused**; it should not ship publicly without Carlo's explicit opt-in to the
gambling-adjacent load + a legal read. `[FACT: app exists on branch]`

---

## 3. Licensed racing-data-API analysis (Carlo's addendum) — friction-tagged

The question: can Fork A be powered by a **licensed, informative racing-data feed** cheaply and cleanly enough to
be "easy and valuable"? **Finding: the cheap option doesn't cover the US market, and the US-covering options are
🔴-hard. So the data path that would justify Fork A is NOT 🟢-easy.**

| Source | Access model | Coverage | Commercial terms | Friction |
|---|---|---|---|---|
| **The Racing API** (theracingapi.com) | Self-serve, free hobby tier; paid Basic/Standard/Pro commercial tiers | **UK & IRE** + major internationals; **thin on US** | Commercial use allowed — but **explicitly PROHIBITS betting operators/sportsbooks** (which actually fits an *informative, non-wagering* layer cleanly) `[RESEARCH: theracingapi.com/terms-of-service]` | **🟢 easy** (but wrong geography for a US play) |
| **RapidAPI / Goalserve aggregators** | Self-serve API, low monthly; free trial | Mixed; Goalserve covers UK/USA/FR/SA/SE | Redistribution rights **vary** — must verify per provider `[RESEARCH]` | **🟡 moderate** (diligence + quality risk) |
| **Equibase** (official US, Jockey Club) | **No self-serve API**; negotiated contract via Data Sales dept (800-333-2211); free public data ToS **bars scraping/republication** (sends C&Ds) | US Thoroughbred (authoritative) | Bespoke, relationship/revenue-share; not public `[RESEARCH]` + `[HYPOTHESIS]` on exact pricing | **🔴 hard** |
| **Timeform** (Flutter-owned; sold via PA Betting Services) | Enterprise B2B; **individual access £500–£1,500/mo, commercial "on application"** | Global ratings IP (UK-centric) | Contract via commercial@timeform.com; aimed at operators/broadcasters `[RESEARCH: timeform.com/commercial]` | **🔴 hard** |
| **Daily Racing Form / Brisnet** | Paid products / partner licensing | US PPs/figures | Paid, gated `[RESEARCH]` | **🔴 hard** |

**Net (per dir-016's decision rule "easy and valuable wins; default NO on 🔴"):**
- The only **🟢-easy** feed (The Racing API) is **UK/IRE-centric** — low value for a US-audience Horses.com. `[RESEARCH]`
- Every **US-covering, citable** feed (Equibase, DRF, Timeform) is **🔴-hard**: gated, contract-based, and likely
  expensive — exactly the licensing friction Carlo said to default-NO on. `[RESEARCH/HYPOTHESIS]`
- **Conclusion: there is no 🟢-easy *and* valuable US data path.** The data moat that would make Fork A
  defensible is 🔴. This is the decisive fact against Fork A.

---

## 4. Highest-and-best-use across ALL buyers — scored

Score = strategic value × probability of a real exit × (inverse) effort/risk. `[HYPOTHESIS]` weighting, `[FACT]`/`[RESEARCH]` inputs as labeled.

| Fork | Value | Probability (named buyer?) | Effort/Risk | Net |
|---|---|---|---|---|
| **A. Racing-intelligence platform** | High ceiling | **Low** (no named buyer; declining mkt) | **High** (🔴 data + gambling load + ops) | ❌ **Lowest** |
| **B. Pure editorial asset** | Medium | **High** (Equine Network named) | Low | ✅ Good |
| **C. Editorial + light non-wagering racing layer** | Medium-High | **High** (same named buyer + optionality) | Low–Med | ⭐ **Best** |

**Recommendation: Fork C.** Keep Horses.com on the **`BUILD → strategic exit (Equine Network)`** track
(consistent with `strategy-disposition.md` "VALIDATE-FIRST" + the dir-012 build spec). Add racing **only** as a
fork-agnostic, non-wagering **traffic/authority + audience-capture layer** — which is valuable under *every*
outcome and dilutes neither buyer story. **Do not pursue Fork A's data/wagering product** unless (a) Carlo
explicitly opts into the gambling-adjacent + 🔴 data-licensing load AND (b) traffic data later shows racing pages
pulling disproportionately (the only signal that would re-open a racing-media buyer conversation).

This also resolves CSRO's open question: the answer to "lift the racing-angle tier-hold?" is **yes — racing is an
enthusiast/heritage/ownership *layer*, not a platform pivot; no tier bump, no buyer pivot.** `[HYPOTHESIS from this analysis]`

---

## 5. What to build next under each branch (so the decision is actionable)

**If Carlo picks C (recommended):**
- CONTINUE (already fork-agnostic, approved under dir-012): Layer-1 audience capture on high-intent horse pages +
  Layer-2 Saddle tack-commerce.
- Racing layer = **non-wagering only**: heritage/explainer/ownership/bloodstock editorial + email capture. No
  odds/picks/ADW. (Much of this already exists on the branch and can be folded in by COO under their lane.)
- **Park `apps/horse-racing`'s value/EV engine** indefinitely; harvest only its trust-safe content.

**If Carlo picks B:**
- Drop the racing layer entirely; pure horse-owner editorial + commerce toward Equine Network. Retire the racing
  app.

**If Carlo picks A (only with explicit opt-in to the load):**
- First action is NOT a build — it's a **legal review** of the wagering-adjacent line + a **data-licensing
  decision** (which 🔴 feed, at what cost). No further app investment until both clear.

---

## 6. Status & boundary compliance

- **Build paused** per dir-016: I have not added new racing-direction/identity content or `apps/horse-racing`
  investment this session. This deliverable is **research only**, in-lane (research specialist).
- **Blocked-fact disclosures** (per dir-016): exact enterprise pricing for Equibase/Timeform/DRF is behind sales
  processes → tagged `[HYPOTHESIS]`; the 🔴 friction rating holds regardless of the exact number (gated +
  contract-based = hard by definition).
- **Branch note:** my working branch carries prior-session build work (the `/racing` cluster handed to the fleet,
  and the `apps/horse-racing` app) that now conflicts with main's merge wave and is the very work dir-016 paused.
  I did **not** force that superseded/paused content through shared-config conflicts. This brief is a clean new
  file. CSRO/Carlo: the disposition of that prior build is part of the fork decision (see §5).

**Awaiting CSRO same-session review → Carlo fork decision. Not resuming any build until Carlo rules.**
