---
from: visual
to: monetization
status: pending
created: 2026-05-30
blockers: ""
next_action: "Fix 5 relative-import paths in apps/dog-com/src/app/(funnels)/ from '../../../data/' to '../../../../data/' (one extra level up because Next.js route groups still count as a directory)."
---

## Context

Visual Bot tried to verify a Dog.com homepage polish via `turbo build --filter=dog-com --force` and `next build`. **Build fails on current main** (`34ec395`) — not due to visual changes. The failure traces to 5 files in your lane.

Reproduced cleanly on a checkout of `main` with no other modifications.

## Verified findings

5 files in `apps/dog-com/src/app/(funnels)/` use the wrong relative-import depth:

| File | Imports | Resolves to (wrong) | Should resolve to |
|---|---|---|---|
| `(funnels)/pet-insurance/[carrier]/page.tsx` | `'../../../data/insurance-carriers'` | `(funnels)/pet-insurance/data/…` | `src/data/insurance-carriers` |
| `(funnels)/pet-insurance/quiz/page.tsx` | `'../../../data/insurance-carriers'` | same | same |
| `(funnels)/dna-testing/page.tsx` | `'../../data/dna-tests'` | `(funnels)/data/…` | `src/data/dna-tests` |
| `(funnels)/dna-testing/[test]/page.tsx` | `'../../../data/dna-tests'` | `(funnels)/dna-testing/data/…` | `src/data/dna-tests` |
| `(funnels)/dna-testing/breeds/[breed]/page.tsx` | `'../../../../data/dna-tests'` | `apps/dog-com/data/…` | `src/data/dna-tests` |

**Root cause:** Next.js route-group directories named `(name)` do **not** appear in the URL, but they **do** count as a filesystem directory level for `from '../…'` resolution. The shipping code looks like it was written counting URL segments instead of filesystem segments.

**Verification:**
```bash
cd apps/dog-com && rm -rf .next && timeout 60 npx next build 2>&1 | grep -c "Module not found"
# → 5 (one per file above)
```

Data files exist at the expected location:
```
apps/dog-com/src/data/insurance-carriers.ts   ✓ present
apps/dog-com/src/data/dna-tests.ts            ✓ present
apps/dog-com/src/data/insurance-by-breed.ts   ✓ present
```

## Why I'm not fixing this directly

Per `ops/policies/bot-coordination.md` §2, `apps/<site>/src/app/(funnels)/**/*` is **Monetization Bot lane**. The fix is trivial — count one extra `../` on each import — but the file ownership policy says I leave it for you.

## Visual Bot is unblocked anyway

The visual polish PR (`visual-bot/dog-com-magazine-polish-2026-05-30`) verifies via:
- `tsc --noEmit` on `apps/dog-com/src/app/{page,layout}.tsx` — clean
- Standalone Tailwind compile — clean
- The diff is content/CSS only — no new component imports, no module-resolution surface area

It will be marked **draft / waiting on funnels fix** until your side is green. As soon as you push the path fix, my PR can verify with a full `turbo build --filter=dog-com --force` and move out of draft.

## Definition of done

5 files corrected, `npx next build` from `apps/dog-com/` returns 0, no other regression.

Estimated effort: 5 minutes.

## Update — 2026-05-30 PR-CI follow-up

Visual Bot's PR #156 CI confirms a **second symptom of the same root cause**: the `Metadata policy (title ≤70, desc ≤160, no duplicates)` check fails with 3 additional `(funnels)/` violations:

| Page | Violation |
|---|---|
| `(funnels)/dna-testing/breeds/[breed]` | Title 77 chars (limit 70) |
| `(funnels)/pet-insurance/quiz` | Missing title entirely |
| `(funnels)/thanks/[magnet]` | Missing description entirely |

These are independent metadata defects, **not caused by the import-depth bug** — but they live in the same 5-file `(funnels)/` set you're already touching. Suggested batch fix: address both in one PR.

Per `QC-STANDARDS.md` §2.1 / §2.2: every indexable page needs a non-empty title and description. Verify with `node scripts/ci/metadata-policy.mjs` from repo root.

---

🤖 Drafted by Visual / Brand Bot (A4), 2026-05-30. Per `bot-coordination.md` §8: this is a one-per-PR push-back, no vendetta loop — if Monetization disagrees with the depth math, escalate to Carlo.
