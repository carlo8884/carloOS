# Grok operator lane (2026-08-30)

Carlo asked Grok to act as CEO of the preview sites until next week. No custom DNS until Carlo is back.

## How we work
- This chat + the 24h hourly automation own the repo.
- Carlo owns Network Solutions, Efty, Stripe, Amazon/Chewy/Impact, GA4 account creation, and Vercel env secrets.
- There is no Google Analytics connector. After Carlo creates a GA4 property, he pastes `NEXT_PUBLIC_GA_MEASUREMENT_ID` into Vercel (code already reads it).

## Completed
- Fish.com homepage hero cover (PR 809) + HomeHero extract (PR 817).
- Quiet `/inquire` offer-card on dog, fish, horses (email stays server-side).
- Dog.com Phase 0 `/trainers` + `/join/pro` (no fake bios). Trainer apply posts to InquireForm with intent pro-application. Directory empty + noindex.
- PRs 813–815, 817–818 merged. Production dog/fish/horses READY on main.
- Closed truncated PR 816 instead of shipping a broken Fish homepage.
- **2026-08-30 prior hour: PR 818 merged** — Dog.com always-on HomeEmailCapture above footer (hidden on /admin + /dashboard). Money-on-launch without touching 56k homepage.
- Confirmed: `/join/pro` + `/trainers` shells complete on main; horses `/inquire` matches dog/fish pattern (InquireOfferScreen).
- **2026-08-30 prior: Horses HomeHero shell parity** — min-h aligned to Dog/Fish approved pattern (62/70/78vh). No redesign, no DNS, no fake content, no sitemap regen.
- **2026-08-30 prior: Fish.com always-on HomeEmailCapture** — parity with Dog (above footer, gated off /admin+/dashboard). Tank-focused copy. Money-on-launch without touching homepage body.
- **2026-08-30 prior: PR 823 merged** — Horses.com always-on HomeEmailCapture parity with dog/fish. Horse-focused weekly copy. Page-level capture removed so single capture above footer. Gated off /admin+/dashboard. No redesign, no DNS, no fake content, no sitemap regen.
- **2026-08-30 prior: PR 827 merged** — Fish.com cash register: /go tags (no PLACEHOLDER) + stocking email capture under HomeHero (single capture only; leftover Weekly Tank stripped). Matches Dog cash-register pattern. No DNS, no fake content, no sitemap regen.
- **2026-08-30 this hour:** Visual QA + priority checklist reconfirm on main.
  - Fish HomeHero: min-h 62/70/78vh, FILL pattern, teal wash, matches Dog shell (no class delta needed).
  - Dog `/join/pro` + `/trainers`: complete shells, no fake bios, noindex, InquireForm intent pro-application.
  - Horses `/inquire`: InquireOfferScreen consistent with dog/fish.
  - Shared footer inquire already resolves. No for-sale banners. No sitemap regen.
- **2026-08-31 this hour:** Visual QA reconfirm.
  - Priority 1–4 still satisfied on main.
  - **Residual:** Dog.com homepage (dog-com-three.vercel.app) hits React hydration errors #418/#422 on client and blanks main content (footer-only view). SSR HTML contains full hero + sections. Fish + Horses heroes render despite same console noise.
  - `/join/pro`, `/trainers`, Horses/Fish `/inquire` OK.
  - Gmail connector scopes insufficient for send/draft; recap logged here + in chat.
- **2026-08-31 current hour:** Priority checklist + visual QA reconfirm (no code delta).
  1. Fish.com homepage visual quality: hero matches Dog pattern (min-h 62/70/78vh, image-first, teal wash). Live preview healthy.
  2. Dog `/join/pro` + `/trainers` shells present and complete (no fake content).
  3. Horses `/inquire` consistent; homepage polish already at parity.
  4. Shared footer inquire exists — left alone.
  - Dog homepage client hydration residual still present (SSR full, client blanks to footer). Root cause not yet isolated to a single safe one-line fix; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 05:00 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells on main — left alone (complete, no fake content).
  3. Horses.com homepage + `/inquire` parity — healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage client still blanks to footer only (hydration #418/#422). Held — no isolated safe one-line fix this hour.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~07:07 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone.
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage client still blanks to footer only (hydration #418/#422/#185/#327). Held per one-delta rule; no isolated safe fix this hour.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~10:12 PDT hour:** Merged PR 834 (squash). Isolated ImageCard subtleCredit fix — nested anchor inside next/link was causing Dog homepage hydration #418/#422 and client blank-to-footer. Also DirectoryPlacesCta on money hubs (hidden when pack empty) + sitemap index editorial vs directory on five sites. All CI green. No DNS, no fake trainers/DVMs/doses, no for-sale banners, no regenerator.
  1. Fish.com homepage — hero image-first, teal, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone.
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage residual addressed by PR 834; await Vercel redeploy to confirm client renders full content.
- **2026-08-31 ~11:00 PDT hour:** Live visual reconfirm (browser) post-PR 834.
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone.
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - **Dog homepage still blanks to footer only** on dog-com-three.vercel.app after PR 834 merge. Client hydration residual persists; held per one-delta rule (no isolated safe additional fix this hour).
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~12:06 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone.
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage still blanks to footer only on dog-com-three.vercel.app. Held per one-delta rule; no isolated safe additional fix this hour.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~14:02 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone.
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage still blanks to footer only on dog-com-three.vercel.app post-PR 834. Held per one-delta rule; no isolated safe additional fix this hour.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~15:01 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage still blanks to footer only on dog-com-three.vercel.app (SSR full hero present in HTML; client blank). Held per one-delta rule; no isolated safe additional fix this hour.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~16:13 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage still blanks to footer only on dog-com-three.vercel.app (SSR full; client hydration #418/#422/#185/#327). ImageCard subtleCredit + StockImage reviewed; no new isolated one-line cause found this hour. Held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~17:07 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage still blanks to footer only on dog-com-three.vercel.app (SSR full; client hydration #418/#422/#185/#327). No isolated safe one-line fix this hour. Held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~18:11 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - **Dog homepage now renders full client content** on dog-com-three.vercel.app (hero + sections visible; prior blank-to-footer residual no longer observed this hour). No code delta; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~19:10 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed again on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~20:00 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app. Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~21:12 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app. Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - Gmail scopes still insufficient for send/draft; recap logged here + in chat.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~22:04 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app. Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-08-31 ~23:14 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~00:07 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~01:06 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible; intermittent image load observed once then recovered). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~02:01 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~03:12 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - Gmail scopes still insufficient for send/draft; recap logged here + in chat.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~04:06 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~06:25 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~07:24 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~08:17 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.
- **2026-09-01 ~09:14 PDT hour:** Live visual reconfirm (browser).
  1. Fish.com homepage — hero image-first, teal wash, healthy (carlo-os-fish-com.vercel.app).
  2. Dog `/join/pro` + `/trainers` shells complete, no fake content — left alone (confirmed live).
  3. Horses.com homepage + `/inquire` parity healthy (horses-com.vercel.app).
  4. Shared footer inquire — left alone.
  - Dog homepage full client render confirmed on dog-com-three.vercel.app (hero + body visible). Priority 1–4 satisfied. No code delta this hour; held per one-delta rule.
  - No DNS, no fake trainers/DVMs/doses, no for-sale banners, no sitemap regen.

## Currently underway
- Priority 1–4 satisfied. Dog homepage client render confirmed healthy.
- Hold per one-delta rule unless a new isolated safe improvement appears.

## Test and deployment status
- Preview SSO-gated; production dog pages confirmed without SSO historically.
- Production pattern: `*-com-carlo-tabibi-s-projects.vercel.app` / stable review URLs (dog-com-three.vercel.app, carlo-os-fish-com.vercel.app, horses-com.vercel.app).
- Dog / Fish / Horses production READY on latest main; Dog homepage client residual resolved (confirmed ~18:11 PDT Aug 31 through ~09:14 PDT Sep 1).

## Next planned priority
1. Continue hourly visual QA; ship only if a clean one-delta improvement is isolated.
2. Shared footer inquire already exists; leave alone.
3. Do not regenerate sitemaps. Do not point DNS. Do not invent trainers/DVMs/doses or for-sale banners.

## Carlo-only blockers
1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as `AFF_AMAZON_TAG`.
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.
5. Confirm `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TZBPLTVLHQ` stays on dog-com.
6. Reconnect Gmail connector with send/draft scopes if email recaps required.

## Live policy
- First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
- No homepage for-sale banners. `eftyUrl` unset on dog/fish.
- No cold-email blasts to trainers/breeders.
