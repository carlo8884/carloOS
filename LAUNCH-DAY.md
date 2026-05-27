# LAUNCH-DAY — Dog.com cutover runbook

Step-by-step for taking Dog.com live. Order matters. Every step is
Carlo-executable — no engineering work remains.

**Estimated total time:** ~75 minutes (most of it waiting for DNS to
propagate). Active hands-on time: ~30 minutes.

If anything goes sideways: scroll to §10 for the rollback path. Worst
case is a temporary blank page until DNS is reverted — no destructive
state.

---

## Phase 0 — Pre-flight (5 min)

Before doing anything Carlo-side, confirm the engineering side is
ready:

- [ ] `main` is green: `npx turbo run build` passes 5/5 locally
- [ ] Open PRs reviewed: any unmerged PR that needs to ship before
      launch? (PRs #8, #11 at time of writing — both docs/CI, safe
      to merge before or after launch)
- [ ] `/puppy-schedule` landing renders correctly on the Vercel
      production deploy of dog-com (preview URL or current production
      URL): hero, week table, FAQ all visible
- [ ] No fake-authority phrases in user-facing copy. The trust-guard
      CI check covers this; if PR #11 has merged, it's enforced.
      Otherwise: `node scripts/ci/trust-guard.mjs` from repo root.

If any of the above fail, fix before proceeding.

---

## Phase 1 — Mailchimp (10 min)

Lead-magnet email capture depends on this. Until completed, the
`EmailCapture` component renders `null` (intentional — see §11 of
STATUS.md).

1. Sign in to **mailchimp.com** → Audience → All audiences →
   **Create Audience**.
2. Name: `Dog.com`. From name: `Dog.com Editorial`. From email:
   `editor@dog.com` (or any Carlo-owned address — must verify before
   Mailchimp will send).
3. Click into the new audience → **Settings** → **Audience name and
   defaults** → copy the **Audience ID** (the string like
   `xxxxxxxxxx` near the top-right). Save it; you'll paste in §4.
4. Account → **Extras** → **API keys** → **Create A Key**. Name it
   `carloOS-dog-com-prod`. Copy the key (only shown once). Save it;
   you'll paste in §4.
5. Stay in the audience → **Automations** → **Customer Journeys**
   → start a new journey.
   - Trigger: "Subscriber tagged with" → `puppy-schedule`
   - Add 8 "Send email" steps using the markdown files in
     `apps/dog-com/src/content/email-sequences/puppy-onboarding/`
     (00 immediate, 01 after 3 days, 02 after 7, 03 after 14, 04
     after 21, 05 after 28, 06 after 42, 07 after 56).
   - Subject + preheader for each are in the frontmatter of each
     `.md` file.
6. Save and **publish** the journey (it won't fire until subscribers
   exist).

> **Important:** `/api/subscribe` already tags subscribers with the
> source string passed by `<EmailCapture source="puppy-schedule-...">`
> — that's how the journey will trigger. Don't change tag names.

---

## Phase 2 — GA4 (10 min)

1. Sign in to **analytics.google.com** → Admin (gear icon, bottom-
   left).
2. **Create Property**. Name: `Dog.com`. Reporting time zone:
   `(GMT-05:00) Eastern Time`. Currency: `USD`. **Next**.
3. Industry: `Pets & Animals`. Business size: appropriate. Business
   objectives: `Generate leads`, `Examine user behavior`. **Create**.
4. Choose a platform: **Web**. Website URL: `https://dog.com`.
   Stream name: `Dog.com production`. **Create stream**.
5. Copy the **Measurement ID** (format `G-XXXXXXXXXX`). You'll paste
   it in §4.
6. Optional but recommended — set up these custom events in GA4 (Admin
   → Events → Create event):
   - `email_signup` — already fired by `EmailCapture` on success;
     mark as a **conversion** in Admin → Conversions.
   - `affiliate_click` — already fired by `ReviewCard` on CTA click;
     mark as conversion.
   - Set both as conversions for Week-1 reporting.

> **Don't enable Enhanced Measurement's "form interactions"** for
> Dog.com yet — it double-fires alongside our explicit `email_signup`
> event and inflates conversion counts.

---

## Phase 3 — Search Console (5 min — most of it waiting)

Can run in parallel with Phase 2.

1. Sign in to **search.google.com/search-console**.
2. **Add property** → Domain (recommended) → enter `dog.com`.
3. Google will show a TXT record. Add it at your DNS provider.
   - Cloudflare: DNS → Records → Add record → Type `TXT`, Name `@`,
     Content `google-site-verification=...`
4. Click **Verify** in Search Console. (May take 1–5 min for DNS to
   propagate; retry if first attempt fails.)
5. Once verified, in the left sidebar → **Sitemaps** → submit
   `https://dog.com/sitemap.xml`. Should show "Success" within a
   minute and discover ~130 URLs.
6. Bing Webmaster Tools is optional but the same flow at
   `bing.com/webmasters`. Use the **Import from Google Search
   Console** button to avoid repeating the verification.

> Sitemap submission is what triggers the actual indexing crawl;
> domain verification alone doesn't index anything.

---

## Phase 4 — Vercel env vars (5 min)

This is the step that turns hidden EmailCapture forms visible and
points analytics + Mailchimp at the right account.

1. Vercel → Projects → **dog-com** → Settings → **Environment
   Variables**.
2. Add (or update) the following, all scoped to **Production**
   (untick Preview and Development unless you want previews to also
   capture real emails):

   | Name | Value | Source |
   |---|---|---|
   | `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED` | `true` | (literal) |
   | `MAILCHIMP_API_KEY` | (key from Phase 1 step 4) | Mailchimp |
   | `MAILCHIMP_AUDIENCE_ID` | (ID from Phase 1 step 3) | Mailchimp |
   | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Phase 2 step 5 |

3. After saving, redeploy: Vercel project → Deployments → latest →
   ⋯ → **Redeploy** (without cache). Wait for green checkmark.

4. Smoke-test the redeploy URL (still `*.vercel.app` at this point —
   we haven't cut DNS yet):
   - Visit `/puppy-schedule` — the email capture forms should now
     be visible (they were null before this step).
   - Submit a test email from a personal inbox. Confirm:
     - Form returns success state in the browser
     - The address appears in Mailchimp Audience within ~30s
     - GA4 Realtime → Events shows an `email_signup` event

If any of the three smoke tests fail, do not proceed to DNS cutover.
Roll back the env vars and investigate.

---

## Phase 5 — DNS cutover (10 min active, 0–60 min propagation)

Only after Phase 4's smoke tests pass.

1. Vercel → dog-com project → **Domains** → Add → enter `dog.com`
   AND `www.dog.com`. Vercel will show the required DNS records.

2. At your registrar (likely Cloudflare given the existing TXT record
   workflow):
   - For `dog.com` (apex): add an **A record** pointing to
     `76.76.21.21` (Vercel's apex IP — current as of 2026)
   - For `www.dog.com`: add a **CNAME** pointing to
     `cname.vercel-dns.com`
   - If using Cloudflare, set **Proxy status: DNS only** (orange
     cloud OFF) for both records — Vercel handles its own SSL.

3. Back in Vercel → wait for the green checkmark next to each
   domain. SSL cert issuance is automatic and usually takes 1–5
   minutes.

4. Once both show green:
   - `dig dog.com +short` from any terminal returns `76.76.21.21`
   - Visit `https://dog.com` — should serve from Vercel with valid
     SSL

> **Cloudflare gotcha:** if "proxy" is on (orange cloud), Vercel
> can't issue SSL. Turn it off until the cert is issued; you can turn
> it on again later if you want Cloudflare's CDN/DDoS layer in front
> of Vercel.

---

## Phase 6 — Post-cutover smoke test (5 min)

Run through this checklist with a fresh browser session (no
extensions, no cached cookies):

- [ ] `https://dog.com` loads, no SSL warnings
- [ ] `https://www.dog.com` either loads OR redirects to `dog.com`
      (Vercel should auto-redirect)
- [ ] `https://dog.com/puppy-schedule` loads, capture form visible
- [ ] `https://dog.com/breeds/golden-retriever` loads
- [ ] `https://dog.com/reviews/best-pet-insurance` loads
- [ ] `https://dog.com/legal/privacy-policy` loads (no 404)
- [ ] `https://dog.com/sitemap.xml` returns XML with ~130 URLs
- [ ] `https://dog.com/robots.txt` returns the expected content
- [ ] `<title>` on homepage is `A Reference for Dog Owners | Dog.com`
      (one site-name, not doubled — view source)
- [ ] GA4 Realtime → Overview shows your live visit
- [ ] Submit a real test email at `/puppy-schedule` →
      receive email 00 within ~5 minutes (check spam folder first time)

If any step fails, see §10 rollback.

---

## Phase 7 — Submit to Google Search Console (2 min)

Only after Phase 6 smoke test all green.

1. Search Console → Sitemaps → resubmit `https://dog.com/sitemap.xml`
   (it was submitted in Phase 3 but the domain may not have been
   live then — resubmit to trigger immediate crawl).
2. Search Console → URL Inspection → enter `https://dog.com/` →
   Request Indexing.
3. Repeat URL Inspection for 5 priority URLs:
   - `/puppy-schedule` (the lead magnet)
   - `/reviews/best-pet-insurance` (the highest-intent monetized
     page)
   - `/reviews/best-dry-dog-food`
   - `/breeds/golden-retriever`
   - `/health/dog-vaccinations`

Manual URL Inspection requests jump these to the front of the indexing
queue. Without them, organic discovery via sitemap takes hours-to-days.

---

## Phase 8 — Announce (5 min, optional but high-leverage)

The launch isn't "real" to your audience until you tell people.
Low-pressure options:

- One post on your personal social: "I built dog.com — research-based
  reference for dog owners, free puppy schedule at dog.com/puppy-
  schedule".
- One email to 5 people in your network who own dogs or work in pet
  industry asking for honest feedback on the puppy-schedule landing
  page.
- (Optional) Submit to one launch-friendly venue: Hacker News
  "Show HN", Indie Hackers, or Product Hunt.

Don't pitch press yet — wait until you have 7 days of GA4 data so you
can mention real numbers ("X visitors in week one"). Empty-hand press
pitches at launch get ignored.

---

## Phase 9 — Watch Week 1 (5 min/day)

The first 7 days of GA4 data become the baseline for everything
downstream — partnership pitches, investor narrative, content strategy.

Daily check (~5 min):
- GA4 → Reports → Realtime + Engagement → Pages and screens
- Mailchimp → Audience → see new subscribers (with `puppy-schedule`
  tag)
- Search Console → Performance → Last 7 days. Will populate slowly;
  most data shows on day 3+.

After 7 days, compile metrics into STATUS.md §7 (release-log style)
so the launch baseline is a written artifact, not memory.

---

## Phase 10 — Rollback (if something is broken)

Each step is independently reversible. In rough order of
destructiveness:

| What broke | Roll back by |
|---|---|
| EmailCapture forms not appearing | Verify `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true` is set in Vercel **Production** scope (not just Preview). Redeploy. |
| Mailchimp not receiving submissions | Check the Vercel function logs for `/api/subscribe`. Common: wrong audience ID, or API key copied with a trailing newline. |
| GA4 not firing | Check `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set and starts with `G-`. Hard refresh the page; disable any ad blocker for the test. |
| SSL warning at `dog.com` | DNS proxy probably on (Cloudflare orange cloud). Turn it OFF, wait 2 min, refresh. |
| Wrong site rendered at `dog.com` | Vercel project mapping wrong. Check Vercel → dog-com project → Domains shows `dog.com` mapped, not another project. |
| Catastrophic: site totally down | DNS rollback: revert to whatever DNS records pointed at before today. The Vercel preview URL still works as a fallback. |

No step in this runbook touches the database. No subscribers can be
"lost" — Mailchimp keeps them even if you disconnect.

---

## Phase 11 — What this runbook does NOT do

- **Custom domain SSL renewal:** Vercel auto-renews. No action.
- **Email deliverability tuning (SPF/DKIM/DMARC):** Mailchimp's
  default sending domain is fine for week 1; configure custom sending
  later if open rates are low.
- **Stripe / payment setup:** out of scope. Dog.com is launching
  affiliate-only.
- **Other sites (fish, lizard, saddle, vets-co):** staged. Same
  runbook will replicate per site once Dog.com proves the pattern
  for 7 days.

---

## Appendix — Reference data

**Dog.com sitemap routes:** 130 URLs (see `apps/dog-com/src/app/sitemap.ts`)

**EmailCapture source tags currently in use:**
- `puppy-schedule-landing-hero`
- `puppy-schedule-landing-midpage`
- `training-puppy-schedule` (sidebar of /training/puppy-schedule)
- `training-socialization` (sidebar of /training/socialization-window)
- `reviews-index` (bottom of /reviews)
- `health-*` (various health articles)

All of these will route to the same audience `dog-com`; the source
string is preserved as a Mailchimp tag for segmentation.

**Affiliate programs configured:** Amazon Associates, Chewy, Trupanion,
Healthy Paws (per `packages/config/index.ts` site config). Affiliate
clicks fire `affiliate_click` events to GA4.

**Legal pages live at launch:** `/legal/privacy-policy`,
`/legal/terms`, `/legal/affiliate-disclosure`, `/editorial-standards`.
Footer links resolve. Privacy policy + Terms + Editorial Standards +
Affiliate Disclosure all reachable from every page footer.
