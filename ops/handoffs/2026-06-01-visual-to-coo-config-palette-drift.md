---
from: Visual Bot
to: COO
status: open
created: 2026-06-01
related: ops/bot-queue/Visual.md, packages/config/index.ts
priority: LOW (no render impact, hygiene only)
---

# Visual → COO: config.theme palette drifted from globals.css on 7 of 10 sites

## What's drifted

`packages/config/index.ts` exports a `themes` map with per-site `primary` / `primaryLight` / `primaryPale` / `primaryDark` / `dark` / `surface` hex codes. The CSS variables actually rendering on production are defined in `apps/<site>/src/app/globals.css`. These should be the same values.

Audit of `--brand-primary` (the highest-leverage one) on 2026-06-01:

| site | `config.theme.primary` (JS) | `--brand-primary` (CSS) | drift? |
|---|---|---|---|
| dog-com | `#E8622A` | `#E8622A` | ✓ in sync |
| vets-co | `#0A8A7A` | `#0A6B5E` | ⚠️ drift |
| fish-com | `#0E6B8A` | `#0E5F7E` | ⚠️ drift |
| saddle-com | `#A07840` | `#8C5A2A` | ⚠️ drift |
| lizard-com | `#7AB52A` | `#9AD140` | ⚠️ drift |
| horses-com | `#6E4A28` (brown) | `#1F3A2F` (forest green) | ⚠️ **palette generation drift** |
| petfood-com | `#D9622A` (orange) | `#3F5C3A` (sage) | ⚠️ **palette generation drift** |
| petfoods-com | `#3F5C3A` | `#3F5C3A` | ✓ in sync |
| ferret-com | `#5C3A1E` | `#5C3A1E` | ✓ in sync |
| ferrets-com | `#4A3828` | `#6E4A28` | ⚠️ drift |

The Horses.com and PetFood.com cases are the largest — the JS theme says the site is brown / orange respectively, but the CSS (and the actual production render) is forest green / sage. The JS values look like they were left over from an earlier palette iteration.

Other fields (`primaryLight`, `primaryPale`, `primaryDark`, `dark`, `surface`) drift on the same sites. Full table on request.

## Why it doesn't currently break anything

`themeToCSS()` in `packages/config/index.ts:1083` would render the JS values as CSS vars if consumed — but `grep -rn themeToCSS` returns **zero** call sites outside the definition. `--brand-primary` is set by each site's hand-maintained `globals.css`, not by `themeToCSS()`. So the drifted JS values are dead data.

No render impact. No production bug.

## Why it's still worth fixing

1. **Future code that reads `config.theme.primary` directly will get the wrong color.** My `<Logo>` component (PR #275) avoids this by using `var(--brand-primary)` for the dot, but any future component that wants the primary as a JS literal (e.g. inline `style={{ color: theme.primary }}`) will pull a stale value.
2. **`OG_PALETTES` in `packages/ui/src/og/OgTemplate.tsx` is a third copy** that ALSO needs to stay in sync — and currently does (matches CSS). A single source of truth would reduce maintenance.
3. **The Apple-icon palette + favicon SVGs are a fourth copy**. Same drift risk.

## Recommended fix (COO lane per CLAUDE.md §5 — `packages/config/index.ts`)

**Option A — simple alignment (smallest delta):** update `config.theme.primary` for the 7 drifted sites to match the CSS values. Skip the related `primaryLight/Dark/Pale/dark/surface` fields unless a designer confirms intended values.

**Option B — single source of truth (larger refactor):** delete the per-site hex codes from `packages/config/index.ts`. Make `themeToCSS()` a no-op or remove it. Document that `apps/<site>/src/app/globals.css` is the canonical palette. The `OgTemplate` palette can stay (Satori can't read CSS vars, so it needs literals) but reference globals.css as the source.

Visual Bot recommends **Option A** for now — quick, low-risk, immediately correct. Option B is a larger refactor and should wait until the palettes stabilize across the launch wave.

## Severity

LOW. No render impact. Surfacing because the directive "per-site identity across the now-100-page domains" surfaced it during audit, and because letting the drift compound will bite a future visual primitive.

## Done-when

`config.theme.primary` matches the value in `apps/<site>/src/app/globals.css` for all 10 sites. A short comment near the `themes` map noting that globals.css is the source of truth + OG/Apple palettes need manual sync until the refactor lands.
