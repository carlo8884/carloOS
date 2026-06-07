---
from: csro
to: carlo
status: ready
created: 2026-06-07
next_action: "Carlo: bookmark the Stable Review URL column below. Use these to review sites — they never change. Ignore the per-commit Vercel links in PR comments unless reviewing a specific unmerged PR."
---

# Stable Review URLs — CarloOS portfolio

**Problem this solves:** Vercel generates a brand-new URL for every commit/branch/PR
(e.g. `dog-com-git-some-branch-…-abc123.vercel.app`). Those change constantly and
make site review confusing. **Every Vercel project also has a permanent, stable
URL that always serves the latest `main` (production) build and never changes.**
Use the stable URLs below.

> Source: Vercel project API (`carlo-tabibi-s-projects` team), pulled 2026-06-07.
> These are verified project domains, not guesses.

---

## ⭐ The list — bookmark these (current production = latest `main`)

| Site | Stable Review URL (bookmark this) | Vercel project |
|---|---|---|
| **Dog.com** | https://dog-com-three.vercel.app | `dog-com` |
| **Fish.com** | https://carlo-os-fish-com.vercel.app | `carlo-os-fish-com` |
| **Ferret.com** | https://ferret-com.vercel.app | `ferret-com` |
| **PetFood.com** | https://petfood-com.vercel.app | `petfood-com` |
| **Vets.co** | https://carlo-os-vets-co.vercel.app | `carlo-os-vets-co` |
| **Horses.com** | https://horses-com.vercel.app | `horses-com` |
| **Saddle.com** | https://carlo-os-saddle-com.vercel.app | `carlo-os-saddle-com` |
| **Lizard.com** | https://carlo-os-lizard-com.vercel.app | `carlo-os-lizard-com` |
| **PetFoods.com** | https://petfoods-com.vercel.app | `petfoods-com` |
| **Ferrets.com** | https://ferrets-com.vercel.app | `ferrets-com` |

Each of these **always reflects whatever is currently merged to `main`**. When the
COO merges a PR, production rebuilds and these URLs update automatically — but the
**address stays the same**. Bookmark once, review forever.

> **Equivalent stable alias** (if a URL above ever misbehaves): every project also
> has `https://<project>-git-main-carlo-tabibi-s-projects.vercel.app`, which is
> pinned to the `main` branch. E.g. Dog.com = `dog-com-git-main-carlo-tabibi-s-projects.vercel.app`.
> Same content, also stable.

---

## The 4 kinds of URL you'll see (so you know which to trust)

| Type | Looks like | Changes? | Use it for |
|---|---|---|---|
| **1. Current live production** ⭐ | `dog-com-three.vercel.app`, `petfood-com.vercel.app` | **Never** | **Your normal site review.** Always = latest `main`. |
| **2. Branch preview** | `dog-com-git-<branch>-carlo-tabibi-s-projects.vercel.app` | Per **branch** (stable within a branch) | Reviewing one unmerged feature branch. |
| **3. PR / per-commit preview** | `dog-jnh4pxl9f-carlo-tabibi-s-projects.vercel.app` | **Every commit** (the confusing ones) | One-off check of a specific commit. Don't bookmark. |
| **4. Future custom domain** | `dog.com`, `vets.co` | Once DNS is pointed | Real public launch (DNS not done yet). |

**Rule going forward (CSRO directive):** site reviews link the **stable production
URL (type 1) first.** PR/branch preview URLs (types 2–3) are only provided when you
are specifically reviewing unmerged work, and will be labelled as such.

---

## Custom domains — status (no DNS changes made)

Two projects **already have their real domain added inside Vercel** (the project is
ready to serve it — only the DNS pointing at Network Solutions is missing):

| Domain | Added in Vercel? | DNS pointed? | Status |
|---|---|---|---|
| **vets.co** / www.vets.co | ✅ yes | ❌ no | Awaiting Carlo DNS (Network Solutions) |
| **ferret.com** / www.ferret.com | ✅ yes | ❌ no | Awaiting Carlo DNS (Network Solutions) |
| dog.com, fish.com, petfood.com, horses.com, saddle.com, lizard.com, petfoods.com, ferrets.com | ❌ not yet added | ❌ no | Add to Vercel project + DNS when Carlo approves launch |

**No DNS was changed and no production domain was touched** in producing this doc —
this is read-only inventory plus a repo document.

---

## Stable-alias proposal (optional, your call)

You **don't need any new infrastructure** — the type-1 URLs above are already
permanent aliases and solve the problem today.

If you'd prefer prettier, uniform review URLs (e.g. `dog-review.vercel.app`,
`vets-review.vercel.app`), Vercel lets us attach extra `.vercel.app` aliases to each
project at no cost and without touching DNS or the real domains. That's a small,
reversible config change — **say the word and CSRO/COO will set up a clean
`<site>-review.vercel.app` alias set.** Until then, use the verified URLs above.

---

## Notes / caveats

- These serve the **latest successful `main` build**. If a site looks stale right
  after a merge, the production rebuild is still running (~1–3 min) — refresh shortly.
- `dog.com` the bare `.vercel.app` name was globally taken, so Dog.com's stable URL
  is `dog-com-three.vercel.app` (Vercel's auto-assigned name). It is permanent.
- Imagery on several sites currently shows the branded paw placeholder pending an
  image sync — that's a known, separate item (see the image-sync brief), not a
  broken URL.
