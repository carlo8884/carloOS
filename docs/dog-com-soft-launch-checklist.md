# Dog.com — Soft-Launch Checklist

> **Canonical launch checklist for Dog.com.** Same pattern applies to all CarloOS sites — values differ per site.
> Complete §1–§6 before pointing the real domain. §7 is the cutover sequence. §8–§9 run after cutover.
>
> Companion docs: [GA4 readiness](./ga4-readiness.md) · [Search Console setup](./search-console-setup.md)
>
> Last updated: 2026-05-27

---

## 0. Pre-conditions

- [ ] Launch-blocker fixes merged to `main` (fonts loaded, favicons present, hero stats accurate, broken CTAs fixed, fabricated authority removed)
- [ ] Vercel `dog-com` project deploys cleanly from `main`
- [ ] Admin access: Vercel, Mailchimp, Google Analytics, Google Search Console, domain registrar

---

## 1. Vercel — Environment Variables

Set in **Vercel → `dog-com` project → Settings → Environment Variables**. Scope = **Production** unless noted.

| Variable | Source | Notes |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 → Data Streams | `G-XXXXXXXXXX` — see [GA4 readiness](./ga4-readiness.md) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Project Settings → API | `https://xxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → API | Client-safe |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → API | **Server only** — never expose |
| `MAILCHIMP_API_KEY` | Mailchimp → Account → API Keys | Server only |
| `MAILCHIMP_AUDIENCE_ID` | Mailchimp → Audience Settings | Dog.com-specific audience |
| `MAILCHIMP_SERVER_PREFIX` | From Mailchimp API URL | e.g. `us1`, `us14` |
| `NEXT_PUBLIC_SITE_ID` | Hardcode | `dog-com` |

After setting: trigger a redeploy. Open the preview URL — fonts render, favicon visible, no 5xx in Vercel logs.

---

## 2. Mailchimp

- [ ] Dog.com audience created (separate from other sites; double opt-in enabled in Audience → Settings → Signup forms)
- [ ] From-name `Dog.com`, from-email `hello@dog.com` (real inbox — see §6)
- [ ] Audience ID + server prefix recorded in Vercel env
- [ ] `/api/subscribe` decision made:
  - **Wire it:** implement POST to `https://{server_prefix}.api.mailchimp.com/3.0/lists/{audience_id}/members` with `status: "pending"` (double opt-in)
  - **Hide it:** add a feature flag, disable `<EmailCapture>` until ready — never ship visible forms that 503
- [ ] End-to-end test: enter email → confirmation arrives → subscriber appears in audience
- [ ] Welcome email created (subject: "Welcome — your first Dog.com guide"; link: highest-traffic article)

---

## 3. Google Analytics 4

Full setup: **[`docs/ga4-readiness.md`](./ga4-readiness.md)**

- [ ] Property + web stream created
- [ ] Measurement ID set in Vercel env + redeployed
- [ ] Verified in Realtime **and** DebugView
- [ ] Custom dimensions registered (`content_type`, `site_section`, `site_name`)
- [ ] Data retention set to 14 months
- [ ] Conversions identified (mark after first fire)
- [ ] Privacy page mentions GA4; cookie banner decision made if EU traffic expected

---

## 4. Google Search Console

Full setup: **[`docs/search-console-setup.md`](./search-console-setup.md)**

- [ ] Domain property added (`dog.com`)
- [ ] DNS TXT verification record set at registrar **before** DNS cutover
- [ ] Property verified (after TXT propagates)
- [ ] Sitemap submitted after cutover: `https://dog.com/sitemap.xml`
- [ ] Top 5 pages requested for manual indexing
- [ ] Day 0 baseline captured (Performance CSV + Coverage screenshot)

---

## 5. DNS Records

### Pre-cutover prep

- [ ] DNS TTL lowered to **300s** at least 24h before cutover (enables 5-min rollback if needed)
- [ ] Vercel project has `dog.com` and `www.dog.com` added as custom domains (Vercel shows the required record values)
- [ ] GSC TXT verification record already set (§4)

### Records to set at registrar

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` (Vercel apex IP) |
| `CNAME` | `www` | `cname.vercel-dns.com.` |
| `TXT` | `@` | GSC verification value |
| `MX` | `@` | Your email provider's MX records (so §6 inboxes work) |

---

## 6. Legal Inboxes

Real forwarding addresses. Set up at registrar/email host before launch.

| Address | Used on | Purpose |
|---|---|---|
| `privacy@dog.com` | `/privacy` | GDPR/CCPA requests |
| `editorial@dog.com` | `/editorial-standards` | Factual corrections |
| `legal@dog.com` | `/privacy`, `/terms` | DMCA, legal notices |
| `hello@dog.com` | Mailchimp from-address | General contact |

- [ ] All four addresses forward to a monitored inbox
- [ ] Legal pages reviewed end-to-end (`/privacy`, `/terms`, `/editorial-standards`)
- [ ] FTC affiliate disclosure visible in footer on every page with affiliate links
- [ ] Affiliate tags: status known — real tags wired through `affiliateHref()`, **or** explicitly accepted that tags are placeholders and revenue will be $0 until updated

---

## 7. Deployment Sequence

Strict order. **Each gate must clear before the next.** A failure stops the sequence — fix root cause, do not bypass.

```
G1  Env vars set in Vercel, production scope
       ↓
G2  Preview deploy verified:
       — Fonts render (Playfair Display in H1, DM Sans in body)
       — Favicon visible in browser tab
       — No 5xx in Vercel Functions log
       — /sitemap.xml resolves with valid XML
       — /robots.txt allows crawling
       ↓
G3  Mailchimp tested end-to-end on preview URL
       (or email-capture components hidden via feature flag)
       ↓
G4  GSC TXT verification record set at registrar
       (independent of A/CNAME — sets ownership pre-cutover)
       ↓
G5  DNS TTL lowered to 300s, ≥24h elapsed
       ↓
                                  ┃
                                  ┃  ← Carlo authority required
                                  ▼
G6  DNS cutover: A + CNAME → Vercel
       ↓
G7  SSL provisioned + curl checks pass (within 5 min):
       — curl -I https://dog.com           → 200
       — curl -I https://www.dog.com       → 308 → apex
       — https://dog.com/sitemap.xml       → 200, valid XML
       — https://dog.com/robots.txt        → 200
       ↓
G8  Sitemap submitted to GSC
       ↓
G9  GA4 Realtime confirmed firing on live domain
       ↓
G10 Uptime monitor armed (UptimeRobot, 5-min interval)
       ↓
G11 24-hour deploy freeze — no further changes to main
       ↓
G12 Top 5 pages requested for manual indexing in GSC
```

**Carlo-only gates:** G6 (DNS cutover) and G11 freeze enforcement. All other gates are verifiable by any operator.

---

## 8. Post-Launch Monitoring

### First 30 minutes

- [ ] GA4 Realtime: pageviews appearing
- [ ] Vercel Functions log: zero 5xx
- [ ] `curl -I https://dog.com` → 200
- [ ] Browser tab shows favicon
- [ ] Mobile spot-check at 375px viewport — layout intact

### First 24 hours

- [ ] GSC sitemap status: "Success"
- [ ] Uptime monitor: no incidents
- [ ] Vercel build log: no new warnings
- [ ] No spike in 404s in Vercel logs

### Ongoing (weekly)

| Check | Tool | Healthy threshold |
|---|---|---|
| Uptime | UptimeRobot | ≥99.9% |
| 404s | GSC → Coverage → Not Found | <5 new/week |
| Organic impressions | GSC → Performance | First by Day 7; sustained by Day 14 |
| Email signups | Mailchimp Reports | ≥1% of section visitors |
| Core Web Vitals | GSC → Core Web Vitals | LCP <2.5s, CLS <0.1 |
| Function errors | Vercel → Functions → Logs | <1% error rate |

### Uptime monitor (one-time setup)

- [ ] [UptimeRobot](https://uptimerobot.com) free account
- [ ] Monitor: HTTP, `https://dog.com`, 5-min interval
- [ ] Alert email: `carlo@tabibi.com`

---

## 9. Rollback

### Decision matrix

| Condition | Action | Recovery target |
|---|---|---|
| 5xx >5 min sustained | Vercel rollback | <60s |
| Site unreachable (DNS) >10 min | DNS rollback | <5 min (TTL 300s) |
| Legal/privacy error discovered | Vercel rollback OR hotfix | Same-day |
| Build broken on `main` | Vercel rollback | <60s |
| Affiliate-link earning $0 | **Not a rollback trigger** — fix forward | N/A |
| GA4 not firing | **Not a rollback trigger** — fix forward | N/A |
| Mailchimp 503s (known stub) | **Not a rollback trigger** — expected state | N/A |

### Execution

**A. Vercel rollback** *(deploy issue — fastest)*
1. Vercel → `dog-com` → Deployments → find last good deploy
2. `···` menu → **Promote to Production**
3. No DNS change required; recovery in seconds

**B. DNS rollback** *(cutover failure)*
1. At registrar: repoint A/CNAME to previous target (whatever was set before §5)
2. TTL 300s = recovery within ~5 min
3. Diagnose offline; retry from G5

**C. Hotfix forward** *(preferred for content errors)*
1. Branch from `main`, fix, PR, merge, deploy
2. Faster than rollback for small, non-urgent fixes (typo, dead link)

### Authority

Carlo executes all rollbacks. No agent or external collaborator initiates a rollback without Carlo confirmation. The rollback path itself should be **rehearsed pre-launch** — confirm Carlo's Vercel access includes "Promote to Production" before going live.

### Post-incident

- [ ] 5-line note in `OPERATIONS.md` (or `audits/`): what happened, what fixed it, what we learned
- [ ] If recurring or root-cause unclear: open a BACKLOG entry

---

## Go / No-Go Gate

All must be green before G6 (DNS cutover):

| # | Gate |
|---|---|
| 1 | Vercel env vars set in Production scope and redeployed |
| 2 | Preview URL: fonts render, favicon visible, no 5xx, sitemap and robots.txt resolve |
| 3 | Mailchimp end-to-end tested **or** email-capture hidden |
| 4 | GSC TXT verification record live, property verified |
| 5 | DNS TTL = 300s, ≥24h elapsed |
| 6 | Legal pages reviewed; 4 inboxes real; FTC disclosure present |
| 7 | GA4 measurement ID in env; Realtime + DebugView verified on preview |
| 8 | Uptime monitor configured |
| 9 | Rollback path rehearsed (Carlo confirmed Vercel "Promote to Production" access) |

**All 9 green → cleared for DNS cutover.**
