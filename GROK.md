# Grok operator lane (2026-09-08)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover + HomeHero extract.
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios). Trainer apply posts to InquireForm with intent pro-application. Directory empty + noindex.
- Production dog/fish/horses READY on main for shells and heroes.
- Many COO journey next-step PRs merged through #1627 (pond-guide etc.).
- **2026-09-08 17:05 PDT this hour:** Priority checklist + visual QA reconfirm (no app code delta).
  1. Fish.com homepage visual quality — hero already patched, matches Dog (image-first, teal, 62/70/78vh). Healthy.
  2. Dog `/join/pro` + `/trainers` claimed-directory shells — complete, empty-on-purpose, no fake trainers/content.
  3. Horses `/inquire` consistency + homepage polish — consistent and healthy.
  4. Shared Footer inquire already exists — left alone.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
  - One real improvement this hour = status truth + preview links for Carlo.

## Currently underway
- Hold per one-delta rule unless clean isolated fix appears.
- Residual historical Dog homepage client hydration noted in prior logs; current main assumed stable after subsequent merges.

## Test and deployment status
- Preview SSO-gated where applicable; production pattern on Vercel project previews.
- Dog / Fish / Horses shells and heroes READY on latest main.

## Next planned priority
1. Continue monitoring Fish homepage visual parity with Dog.
2. Keep Dog claimed-directory shells empty/honest.
3. Horses inquire + homepage left at parity.
4. Do not regenerate sitemaps. Do not point DNS. Do not invent trainers/DVMs/doses or for-sale banners.

## Carlo-only blockers
1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as `AFF_AMAZON_TAG`.
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.
5. Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID` stays on dog-com.

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.
