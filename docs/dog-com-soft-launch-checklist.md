# Dog.com — Soft-Launch Checklist

> **Scope:** Controlled soft launch (trusted traffic, no paid ads, organic indexing permitted).
> Complete every item in **Pre-Launch** before pointing the real domain.
> Complete **Post-Launch** items within 48 hours of DNS cutover.
>
> Last updated: 2026-05-27

---

## 0. Pre-conditions

Before starting this checklist, the following must already be true:

- [ ] `build-bot/phase3b-launch-blockers` merged to `main` (fonts, favicons, fake stats, broken CTAs)
- [ ] `build-bot/calculator-shell-fish-volume` and `build-bot/dog-food-cost-calculator` merged (or deferred)
- [ ] Vercel project for `dog-com` exists and the `main` branch deploys cleanly
- [ ] You have admin access to: Vercel, Mailchimp, Google Analytics, Google Search Console, your domain registrar

---

## 1. Vercel — Environment Variables

Set these in **Vercel → Project → Settings → Environment Variables** for the `dog-com` project.
All values are **Production** scope unless noted. Never commit real values to git.

| Variable | Where to get it | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 → Admin → Data Streams → Web stream | Format: `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API | Format: `https://xxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Project Settings → API → anon key | Safe for client-side |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Project Settings → API → service_role | **Server only** — never expose |
| `MAILCHIMP_API_KEY` | Mailchimp → Account → Extras → API Keys | Server only |
| `MAILCHIMP_AUDIENCE_ID` | Mailchimp → Audience → Settings → Audience ID | Dog.com-specific audience |
| `MAILCHIMP_SERVER_PREFIX` | From your Mailchimp API URL (e.g. `us1`, `us14`) | e.g. `us1` |
| `NEXT_PUBLIC_SITE_ID` | Hardcode | `dog-com` |
| `NEXT_PUBLIC_SITE_URL` | Hardcode | `https://dog.com` |

**After setting variables:**
- [ ] Trigger a new Vercel deployment (push empty commit or use "Redeploy" in dashboard)
- [ ] Confirm build passes without warnings on env var references
- [ ] Open the preview URL and verify fonts render (Playfair Display in headings, DM Sans in body)
- [ ] Verify favicon appears in the browser tab

---

## 2. Mailchimp

### 2a. Account and audience setup

- [ ] Create (or designate) a Mailchimp account for the CarloOS portfolio
- [ ] Create a **Dog.com audience** (separate from other sites — each site needs its own audience for segmentation)
  - Audience name: `Dog.com`
  - From name: `Dog.com`
  - From email: `hello@dog.com` (or a real forwarding address — see §6)
  - Default subject: `Dog health & breed tips`
  - Reminder text: "You subscribed at Dog.com"
- [ ] Note the **Audience ID** from Audience → Settings → Audience ID
- [ ] Set the **GDPR fields** if you expect EU traffic (Mailchimp's "GDPR-friendly" form option)
- [ ] Enable **double opt-in** (Audience → Settings → Signup forms → Enable double opt-in)
  - Required for CAN-SPAM and GDPR baseline compliance

### 2b. Wire the `/api/subscribe` endpoint

The current `apps/dog-com/src/app/api/subscribe/route.ts` returns HTTP 503.

To wire it up, implement the Mailchimp Marketing API:
```
POST https://us{prefix}.api.mailchimp.com/3.0/lists/{audience_id}/members
Authorization: Basic base64(anystring:MAILCHIMP_API_KEY)
Body: { email_address, status: "pending" (double opt-in) or "subscribed" }
```

Until wired, two options:
- **Option A (preferred):** Implement the endpoint before launch so forms work
- **Option B (fallback):** Hide all `<EmailCapture>` components with a feature flag until ready

- [ ] Endpoint wired OR email capture components hidden
- [ ] Test the full flow: enter email → confirmation email arrives → subscriber appears in Mailchimp audience

### 2c. Welcome sequence

- [ ] Create a welcome email triggered on subscribe confirmation
  - Subject: "Welcome — your first Dog.com guide"
  - Link to the most-read article (e.g. `/health/dog-symptoms-guide`)
- [ ] If the 8-week Puppy Schedule email course (`/puppy-schedule`) is active, create the 8-email automation in Mailchimp triggered by the `puppy-schedule` source tag
- [ ] Set sending cadence (weekly Tuesday as stated on the homepage) in an RSS or campaign schedule

---

## 3. Google Analytics 4

### 3a. Property creation

- [ ] Go to [analytics.google.com](https://analytics.google.com) → Admin → Create Property
  - Property name: `Dog.com`
  - Timezone: your primary audience timezone
  - Currency: USD
- [ ] Create a **Web data stream**
  - URL: `https://dog.com`
  - Stream name: `Dog.com Web`
- [ ] Copy the **Measurement ID** (`G-XXXXXXXXXX`) → set as `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel

### 3b. Verify tracking is firing

- [ ] Open the Vercel production URL (before DNS cutover, force the env var into a preview deploy)
- [ ] GA4 → Admin → DebugView → confirm `page_view` events appear
- [ ] Confirm the `site_name` custom dimension fires (mapped to `dimension3` in `layout.tsx`)

### 3c. Conversions and events

- [ ] Mark `email_signup` as a conversion (if `/api/subscribe` sends a GA4 event on success)
- [ ] Mark `affiliate_click` as a conversion when ReviewCard CTAs are wired through `affiliateHref()`
- [ ] Create an **Audience** for users who visited `/reviews/*` (retargeting baseline for later)

### 3d. Privacy / consent

- [ ] Confirm the Privacy Policy at `/privacy` mentions Google Analytics and the opt-out mechanism
- [ ] If EU traffic is expected: implement a cookie consent banner before enabling GA4 in production (GA4 requires consent mode for GDPR)
- [ ] GA4 → Admin → Data Settings → Data Retention: set to 14 months (maximum for free tier)

---

## 4. Google Search Console

### 4a. Property setup

- [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Add property → **Domain** type (covers www and non-www): `dog.com`
  - Verify via DNS TXT record at your registrar (recommended)
  - Alternative: HTML tag verification via `apps/dog-com/src/app/layout.tsx` metadata
- [ ] If using DNS verification: add the TXT record before DNS cutover so verification resolves immediately

### 4b. Sitemap submission

- [ ] After DNS cutover, submit: `https://dog.com/sitemap.xml`
  - The sitemap is generated by `apps/dog-com/src/app/sitemap.ts`
  - Verify it resolves and contains all expected URLs before submitting
- [ ] If the sitemap was recently regenerated via `node scripts/regenerate-sitemaps.mjs`, confirm the output matches current routes

### 4c. Initial coverage check

- [ ] GSC → Coverage → review Excluded / Error pages
- [ ] Confirm no unintended `noindex` directives are set
- [ ] Request indexing for the 5 highest-priority pages manually:
  1. `https://dog.com/` (homepage)
  2. `https://dog.com/breeds` (breed directory)
  3. `https://dog.com/health/dog-symptoms-guide`
  4. `https://dog.com/reviews/best-dry-dog-food`
  5. `https://dog.com/reviews/best-pet-insurance`

### 4d. Performance baseline

- [ ] Note the date of first indexing — this becomes your Day 0 baseline for organic traffic
- [ ] Screenshot or export GSC performance report on Day 0 for comparison at Day 30

---

## 5. DNS and Domain Connection

### 5a. Pre-cutover preparation

- [ ] Lower DNS TTL to **300 seconds (5 minutes)** at least 24 hours before cutover
  - This minimises propagation delay if you need to roll back the DNS change
- [ ] Confirm the Vercel project has `dog.com` (and `www.dog.com`) added as a custom domain
  - Vercel → Project → Settings → Domains
  - Vercel will show the required A record / CNAME values

### 5b. DNS records to set at registrar

| Type | Name | Value | Notes |
|---|---|---|---|
| `A` | `@` (apex) | `76.76.21.21` | Vercel's IP for apex domains |
| `CNAME` | `www` | `cname.vercel-dns.com.` | Vercel CNAME |
| `TXT` | `@` | GSC verification value | Google Search Console ownership |
| `MX` | `@` | Your email provider's MX records | So `@dog.com` addresses work — see §6 |

- [ ] A record set for apex (`dog.com`)
- [ ] CNAME set for `www`
- [ ] Vercel dashboard shows green checkmark for both `dog.com` and `www.dog.com`
- [ ] SSL certificate auto-provisioned (Vercel does this automatically; allow up to 60 seconds)
- [ ] `https://dog.com` loads the production build
- [ ] `https://www.dog.com` redirects to `https://dog.com` (or vice versa — be consistent; Vercel handles this)

### 5c. Post-cutover checks

- [ ] Run `curl -I https://dog.com` — confirm `200 OK`, `content-type: text/html`, no redirect loop
- [ ] Run `curl -I https://www.dog.com` — confirm `308` or `301` redirect to apex
- [ ] Check `https://dog.com/robots.txt` — resolves and contains `Sitemap: https://dog.com/sitemap.xml`
- [ ] Check `https://dog.com/sitemap.xml` — resolves with valid XML

---

## 6. Legal, Privacy, and Contact Emails

### 6a. Email addresses to create

The legal pages and editorial-standards page reference contact addresses that must be real inboxes before launch. Set these up as forwards to your personal email or a shared inbox.

| Address | Purpose | Used on |
|---|---|---|
| `privacy@dog.com` | Privacy policy requests, GDPR deletion, CCPA opt-out | `/privacy` |
| `editorial@dog.com` | Factual corrections, editorial feedback | `/editorial-standards` |
| `legal@dog.com` | DMCA takedowns, legal notices | `/privacy`, `/terms` |
| `hello@dog.com` | General contact, Mailchimp from-address | General use |

Create these as email aliases at your domain registrar or email host, forwarding to `carlo@tabibi.com` (or a team inbox).

- [ ] `privacy@dog.com` → real inbox
- [ ] `editorial@dog.com` → real inbox
- [ ] `legal@dog.com` → real inbox
- [ ] `hello@dog.com` → real inbox (also set as Mailchimp from-address)

### 6b. Legal page review

- [ ] Read `/privacy` end-to-end — confirm all contact emails are accurate and the last-updated date is within 90 days
- [ ] Read `/terms` end-to-end — confirm all contact emails are accurate
- [ ] Read `/editorial-standards` — confirm the correction process and contact email are stated
- [ ] Confirm FTC affiliate disclosure appears on every page that has `showAffiliateDisclosure` set (Footer prop in layout.tsx — dog-com sets this to `true`)
- [ ] Confirm Amazon Associates and Chewy affiliate disclosures are in place before any affiliate links go live

### 6c. Affiliate tags — blocker for revenue

> The current affiliate tags in `packages/config/affiliate.ts` are **placeholders** (`carloOS-20`, `carloOS`). No commission is earned until real tags are substituted and ReviewCard CTAs call the `affiliateHref()` helper.

- [ ] Apply to **Amazon Associates**: [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
  - Wait for approval (can take 1–7 days; requires the site to be live)
  - Replace `carloOS-20` with your real tag in `packages/config/affiliate.ts`
- [ ] Apply to **Chewy Affiliate Program** (via Impact or direct)
  - Replace `carloOS` with your real tag
- [ ] Apply to **Trupanion** affiliate (trupanion.com/partners or Impact)
- [ ] Apply to **Healthy Paws** affiliate
- [ ] Wire ReviewCard CTAs through `affiliateHref()` once tags are approved *(app code change — separate PR)*

---

## 7. Post-Launch Monitoring

### 7a. Immediate (first 2 hours)

- [ ] GA4 Realtime: confirm `page_view` events are firing on the live domain
- [ ] Vercel Functions log: check for any 500 errors on `/api/` routes
- [ ] Click 3 review-page affiliate links manually — confirm they open the correct product pages
- [ ] Submit a test email signup — confirm the response (503 if Mailchimp not wired, or success message if wired)
- [ ] Check the browser tab — favicon visible
- [ ] Check on mobile — layout correct at 375px viewport

### 7b. First 24 hours

- [ ] GSC: check that the property has been verified (DNS TXT record resolves)
- [ ] GSC: submit sitemap
- [ ] Vercel deployment log: no build errors, no missing env var warnings
- [ ] Check `/health/dog-symptoms-guide` and `/reviews/best-dry-dog-food` on mobile and desktop — fonts rendering (Playfair Display in headers)
- [ ] Spot-check 5 internal links from the homepage — all resolve without 404

### 7c. Ongoing (weekly)

| Check | Tool | Action if failing |
|---|---|---|
| Uptime | UptimeRobot (free) or Better Uptime — set 5-min check on `https://dog.com` | Investigate Vercel logs; rollback if needed |
| 404 rate | GSC → Coverage → Not Found | Fix routes or add redirects |
| Organic impressions (Day 7, 14, 30) | GSC → Performance | Normal: impressions appear at Day 7–14 |
| Email signup rate | Mailchimp → Reports | Target: >1% of visitors from email capture section |
| Affiliate clicks | Amazon Associates / Chewy reporting | Target: >0 clicks/day once real tags live |
| Core Web Vitals | GSC → Core Web Vitals or PageSpeed Insights | LCP < 2.5s, CLS < 0.1 |
| Vercel Function errors | Vercel → Functions → Logs | Investigate and fix any recurring 5xx |

### 7d. Set up uptime monitoring

- [ ] Create a free [UptimeRobot](https://uptimerobot.com) account
- [ ] Add monitor: HTTP, `https://dog.com`, 5-minute interval
- [ ] Set alert email: `carlo@tabibi.com`
- [ ] Optionally add monitors for: `/sitemap.xml`, `/api/subscribe` (expect 503 until wired, then 200)

---

## 8. Rollback Plan

### Trigger criteria — roll back if any of these occur within 48 hours of launch

- Site returns 500 for > 5 minutes (checked by uptime monitor)
- Build fails to deploy after a hotfix push
- All `/api/subscribe` calls begin returning 500 (not 503 — active failure vs planned stub)
- DNS misconfiguration leaves `dog.com` unreachable for > 10 minutes
- A legal/privacy error is discovered that requires immediate remediation

### Rollback procedure

**Option A: Vercel instant rollback (< 60 seconds)**
1. Vercel Dashboard → `dog-com` project → Deployments tab
2. Find the last known-good deployment (the one before the problem commit)
3. Click `···` → **Promote to Production**
4. Vercel rolls back without a DNS change — the domain stays pointed at Vercel

**Option B: DNS rollback (if domain was pointed away from Vercel)**
1. At your registrar: repoint the A record / CNAME to the previous target
2. DNS propagation takes up to TTL seconds (should be 300s if you lowered it pre-launch)
3. Notify: post a brief note to the staging Slack/email thread

**Option C: Emergency disable (if content error requires immediate takedown)**
1. In Vercel: add an Environment Variable `NEXT_PUBLIC_MAINTENANCE_MODE=1`
2. Redeploy — the app must check this variable and render a maintenance page
   *(Note: this requires a maintenance mode gate in layout.tsx — add before launch if desired)*

### Rollback decision authority

| Scenario | Who can rollback without approval |
|---|---|
| Site down > 5 min | Carlo — immediate Vercel rollback |
| Legal/privacy error | Carlo — immediate, notify legal@ |
| Content error (wrong stat, broken link) | Carlo — hotfix commit preferred over rollback |
| Affiliate link earning $0 | Not a rollback trigger — track and fix in next deploy |

### Post-rollback

- [ ] Document what failed (add entry to `audits/` or a `post-mortems/` file)
- [ ] Fix root cause on a branch
- [ ] Re-validate on Vercel preview URL before re-launching
- [ ] Lower DNS TTL again before second attempt

---

## Checklist Summary — Go / No-Go Gate

| Gate | Status |
|---|---|
| Fonts load (Playfair Display + DM Sans) | ⬜ |
| Favicon visible in tab | ⬜ |
| No fake stats in hero (30 breeds, 60+ products) | ⬜ |
| All 8 HEALTH_CATEGORIES CTAs resolve | ⬜ |
| `/privacy` email addresses are real inboxes | ⬜ |
| FTC affiliate disclosure visible on review pages | ⬜ |
| GA4 measurement ID set in Vercel env | ⬜ |
| GA4 DebugView shows `page_view` on preview URL | ⬜ |
| Mailchimp: double opt-in enabled | ⬜ |
| Mailchimp: `/api/subscribe` wired OR email capture hidden | ⬜ |
| Vercel custom domain shows green SSL | ⬜ |
| `https://dog.com/sitemap.xml` resolves | ⬜ |
| GSC property verified and sitemap submitted | ⬜ |
| Uptime monitor active on `https://dog.com` | ⬜ |
| Rollback path tested (Vercel instant rollback confirmed accessible) | ⬜ |

**All 15 gates green → cleared for soft launch.**
