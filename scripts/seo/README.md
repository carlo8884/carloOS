# SEO tooling

## redirect-recovery.mjs

Finds dead URLs left behind by a platform migration (old pages Google still indexes
that now 404) and maps each to the best live target. Emits a CSV in **Shopify's
exact bulk URL-redirect import format**, plus a JSON report with confidence buckets.

### Why it's a script and not a checked-in CSV
A *verified* redirect map requires hitting the live site to confirm which old URLs
actually 404 today, and reading the live sitemap to find targets. The CI sandbox has
no outbound network access (Wayback, live sites, and `curl` are all blocked here), so
this must run from a normal machine.

### Run it
```bash
# Node 18+ (uses built-in fetch). No npm install needed.
node scripts/seo/redirect-recovery.mjs --domain statelinetack.com
node scripts/seo/redirect-recovery.mjs --domain horse.com --out horse-redirects.csv

# quick test run against the first 200 historical URLs:
node scripts/seo/redirect-recovery.mjs --domain statelinetack.com --limit 200
```

Outputs:
- `<domain>-redirects.csv` — upload-ready (`"Redirect from","Redirect to"`)
- `<domain>-redirect-report.json` — high / medium / needs-review buckets

### How it works
1. Pulls all historical URLs from the **Wayback CDX API**.
2. Pulls live URLs from the site's **XML sitemap(s)** (follows sitemap indexes + robots.txt).
3. Checks live HTTP status of each old URL — keeps only true `404`/`410` (skips ones
   already 200 or already redirected).
4. Maps each dead URL to a live target: exact slug → numeric-id → token fuzzy match.
5. Writes the CSV + report.

### Import (store owner's only step)
Shopify admin → **Online Store → Navigation → URL Redirects → Import** → upload the CSV.

### Trust note
Spot-check the **medium**-confidence rows and hand-map the **needs-review** rows before
import. Don't bulk-import blindly — a wrong 301 is worse than a 404. The script never
invents targets; if it isn't confident, the row lands in `needsReview`.
