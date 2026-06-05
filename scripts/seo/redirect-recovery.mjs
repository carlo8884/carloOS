#!/usr/bin/env node
/**
 * redirect-recovery.mjs — SEO redirect-recovery audit for a migrated store.
 *
 * Problem it solves: when a store migrates platforms (e.g. legacy cart -> Shopify),
 * old URLs that Google still has indexed start returning 404. Those pages had
 * ranking equity; a 301 to the right new page recovers it. This script finds those
 * dead URLs and maps each to the best live target, then emits a CSV in Shopify's
 * exact bulk URL-redirect import format.
 *
 * WHY A SCRIPT (not a finished CSV): producing a *verified* map requires hitting
 * the live site to confirm which old URLs actually 404 today. This must run from an
 * environment with normal outbound network access (a laptop/server), not a locked-down
 * CI sandbox. Run it once, hand the CSV to whoever owns the store.
 *
 * METHOD (the "best way"):
 *   1. Pull the full historical URL set from the Wayback Machine CDX API.
 *   2. Pull the current live URL set from the site's XML sitemap(s).
 *   3. For every historical URL, check its live HTTP status.
 *        - already 200 or already 301/302  -> healthy, skip
 *        - 404 / 410 / gone                 -> recovery candidate
 *   4. Map each dead URL to the best live target (exact slug -> numeric-id -> token fuzzy).
 *   5. Emit Shopify-ready CSV ("Redirect from","Redirect to") + a JSON report with
 *      confidence buckets so low-confidence guesses get human review before import.
 *
 * No npm dependencies — Node 18+ (built-in fetch). Be polite: it rate-limits itself.
 *
 * USAGE:
 *   node scripts/seo/redirect-recovery.mjs --domain statelinetack.com
 *   node scripts/seo/redirect-recovery.mjs --domain horse.com --out horse-redirects.csv
 *
 * FLAGS:
 *   --domain <d>        (required) apex domain, no scheme. e.g. statelinetack.com
 *   --out <file>        CSV output path. default: <domain>-redirects.csv
 *   --report <file>     JSON report path. default: <domain>-redirect-report.json
 *   --concurrency <n>   parallel live checks. default 8
 *   --limit <n>         cap historical URLs processed (for a quick test run)
 *   --min-confidence <x> only auto-include matches at/above this (0-1). default 0.45
 *
 * IMPORTING THE RESULT (store owner's only step):
 *   Shopify admin -> Online Store -> Navigation -> "URL Redirects" -> Import -> upload CSV.
 *   Columns are exactly: "Redirect from","Redirect to".
 */

import { writeFileSync } from "node:fs";

// ----------------------------- args -----------------------------
function parseArgs(argv) {
  const a = {};
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    if (k.startsWith("--")) a[k.slice(2)] = argv[i + 1]?.startsWith("--") || argv[i + 1] === undefined ? true : argv[++i];
  }
  return a;
}
const args = parseArgs(process.argv);
const DOMAIN = args.domain;
if (!DOMAIN || DOMAIN === true) {
  console.error("ERROR: --domain is required, e.g. --domain statelinetack.com");
  process.exit(1);
}
const OUT_CSV = args.out && args.out !== true ? args.out : `${DOMAIN}-redirects.csv`;
const OUT_REPORT = args.report && args.report !== true ? args.report : `${DOMAIN}-redirect-report.json`;
const CONCURRENCY = Number(args.concurrency) || 8;
const LIMIT = args.limit ? Number(args.limit) : Infinity;
const MIN_CONFIDENCE = args["min-confidence"] ? Number(args["min-confidence"]) : 0.45;

const UA =
  "Mozilla/5.0 (compatible; redirect-recovery-audit/1.0; +internal-seo-tool) " +
  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";

const ASSET_RE = /\.(?:js|css|png|jpe?g|gif|svg|webp|ico|woff2?|ttf|eot|pdf|zip|xml|json|txt|map|mp4|webm)(?:$|\?)/i;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, opts = {}, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": UA }, ...opts });
      return res;
    } catch (e) {
      if (attempt === retries) throw e;
      await sleep(500 * 2 ** attempt);
    }
  }
}

// ------------------- 1. historical URLs (Wayback CDX) -------------------
async function getHistoricalUrls(domain) {
  const urls = new Set();
  let resumeKey = "";
  let page = 0;
  // CDX paging via showResumeKey; collapse=urlkey de-dups; only status 200 originals.
  for (;;) {
    const u =
      `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(domain)}` +
      `&matchType=domain&fl=original,statuscode&collapse=urlkey&filter=statuscode:200` +
      `&output=json&limit=10000&showResumeKey=true` +
      (resumeKey ? `&resumeKey=${encodeURIComponent(resumeKey)}` : "");
    const res = await fetchText(u);
    if (!res.ok) throw new Error(`CDX HTTP ${res.status} (page ${page})`);
    const rows = await res.json();
    if (!rows.length) break;
    // Last non-empty row may be the resume key (single-column row after a blank line).
    resumeKey = "";
    for (const row of rows) {
      if (!Array.isArray(row)) continue;
      if (row.length === 1 && row[0]) { resumeKey = row[0]; continue; }
      const [orig] = row;
      if (!orig || orig === "original") continue;
      let parsed;
      try { parsed = new URL(orig); } catch { continue; }
      const host = parsed.hostname.replace(/^www\./, "");
      if (host !== domain.replace(/^www\./, "")) continue;          // apex/www only
      if (ASSET_RE.test(parsed.pathname + parsed.search)) continue; // skip assets
      parsed.hash = "";
      urls.add(parsed.toString());
    }
    page++;
    process.stderr.write(`\r  CDX page ${page}: ${urls.size} historical URLs collected`);
    if (!resumeKey) break;
    await sleep(300);
  }
  process.stderr.write("\n");
  return [...urls];
}

// ------------------- 2. live URL set (sitemap) -------------------
function extractTags(xml, tag) {
  const out = [];
  const re = new RegExp(`<${tag}>\\s*([^<]+?)\\s*</${tag}>`, "gi");
  let m;
  while ((m = re.exec(xml))) out.push(m[1].trim());
  return out;
}
async function getLiveUrls(domain) {
  const seeds = [
    `https://www.${domain}/sitemap.xml`,
    `https://${domain}/sitemap.xml`,
  ];
  // Also honor robots.txt Sitemap: directives.
  for (const robotsUrl of [`https://www.${domain}/robots.txt`, `https://${domain}/robots.txt`]) {
    try {
      const r = await fetchText(robotsUrl);
      if (r.ok) {
        const body = await r.text();
        for (const line of body.split("\n")) {
          const m = line.match(/^\s*sitemap:\s*(\S+)/i);
          if (m) seeds.push(m[1].trim());
        }
      }
    } catch { /* ignore */ }
  }

  const seen = new Set();
  const pages = new Set();
  const queue = [...new Set(seeds)];
  while (queue.length) {
    const sm = queue.shift();
    if (seen.has(sm)) continue;
    seen.add(sm);
    let res;
    try { res = await fetchText(sm); } catch { continue; }
    if (!res || !res.ok) continue;
    const xml = await res.text();
    // sitemap index -> child sitemaps live in <sitemap><loc>
    const isIndex = /<sitemapindex/i.test(xml);
    const locs = extractTags(xml, "loc");
    if (isIndex) {
      for (const loc of locs) if (!seen.has(loc)) queue.push(loc);
    } else {
      for (const loc of locs) {
        try { const p = new URL(loc); p.hash = ""; pages.add(p.toString()); } catch { /* skip */ }
      }
    }
    process.stderr.write(`\r  sitemap: ${pages.size} live URLs across ${seen.size} sitemap files`);
  }
  process.stderr.write("\n");
  return [...pages];
}

// ------------------- 3. live status check -------------------
async function liveStatus(url) {
  try {
    // manual redirect: a 3xx means the old URL is ALREADY handled -> healthy.
    let res = await fetch(url, { method: "HEAD", redirect: "manual", headers: { "user-agent": UA } });
    // Some servers reject HEAD; fall back to GET.
    if (res.status === 405 || res.status === 501)
      res = await fetch(url, { method: "GET", redirect: "manual", headers: { "user-agent": UA } });
    return res.status;
  } catch {
    return 0; // network error -> treat as unknown, not a candidate
  }
}

async function mapWithConcurrency(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker));
  return out;
}

// ------------------- 4. matching -------------------
const STOP = new Set(["the", "and", "for", "with", "shop", "buy", "p", "c", "product", "products", "category", "categories", "item", "html", "htm", "aspx", "php"]);
function tokenize(path) {
  return decodeURIComponent(path)
    .toLowerCase()
    .replace(/\.(html?|aspx|php)$/i, "")
    .split(/[^a-z0-9]+/)
    .filter((t) => t && !STOP.has(t) && !/^\d{4,}$/.test(t)); // drop long numeric ids from token set
}
function lastSlug(path) {
  const parts = decodeURIComponent(path).replace(/\/+$/, "").split("/");
  return (parts[parts.length - 1] || "").replace(/\.(html?|aspx|php)$/i, "").toLowerCase();
}
function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return inter / (a.size + b.size - inter);
}

function buildLiveIndex(liveUrls) {
  return liveUrls.map((u) => {
    const p = new URL(u);
    return { url: u, path: p.pathname, slug: lastSlug(p.pathname), tokens: new Set(tokenize(p.pathname)) };
  });
}

function bestMatch(deadUrl, liveIndex) {
  const dp = new URL(deadUrl);
  const dSlug = lastSlug(dp.pathname);
  const dTokens = new Set(tokenize(dp.pathname));

  // exact slug match wins
  const exact = liveIndex.filter((l) => l.slug && l.slug === dSlug);
  if (exact.length === 1) return { target: exact[0].url, confidence: 0.95, how: "exact-slug" };
  if (exact.length > 1) {
    // disambiguate exact-slug collisions by token overlap
    let best = exact[0], score = -1;
    for (const l of exact) { const s = jaccard(dTokens, l.tokens); if (s > score) { score = s; best = l; } }
    return { target: best.url, confidence: 0.8, how: "exact-slug+token" };
  }

  // token fuzzy across everything
  let best = null, score = 0;
  for (const l of liveIndex) {
    const s = jaccard(dTokens, l.tokens);
    if (s > score) { score = s; best = l; }
  }
  if (best && score >= MIN_CONFIDENCE) return { target: best.url, confidence: Number(score.toFixed(2)), how: "token-fuzzy" };
  return { target: null, confidence: best ? Number(score.toFixed(2)) : 0, how: "no-confident-match" };
}

// ----------------------------- main -----------------------------
function csvEscape(s) { return `"${String(s).replace(/"/g, '""')}"`; }

(async function main() {
  console.error(`\n# Redirect-recovery audit: ${DOMAIN}\n`);

  console.error("1/4  Pulling historical URLs from Wayback CDX...");
  let historical = await getHistoricalUrls(DOMAIN);
  if (historical.length > LIMIT) historical = historical.slice(0, LIMIT);
  console.error(`     ${historical.length} historical content URLs.\n`);

  console.error("2/4  Pulling live URLs from sitemap...");
  const live = await getLiveUrls(DOMAIN);
  console.error(`     ${live.length} live URLs.\n`);
  if (!live.length) console.error("     WARNING: no live URLs found — sitemap may be blocked from this network. Targets cannot be mapped; rerun where the sitemap is reachable.\n");
  const liveIndex = buildLiveIndex(live);
  const livePathSet = new Set(liveIndex.map((l) => l.path));

  console.error(`3/4  Checking live status of ${historical.length} historical URLs (concurrency ${CONCURRENCY})...`);
  let checked = 0;
  const statuses = await mapWithConcurrency(historical, CONCURRENCY, async (url) => {
    // skip ones that still exist verbatim in the live sitemap (definitely healthy)
    let path;
    try { path = new URL(url).pathname; } catch { return { url, status: -1 }; }
    if (livePathSet.has(path)) { checked++; return { url, status: 200 }; }
    const status = await liveStatus(url);
    checked++;
    if (checked % 25 === 0) process.stderr.write(`\r     checked ${checked}/${historical.length}`);
    return { url, status };
  });
  process.stderr.write(`\r     checked ${checked}/${historical.length}\n\n`);

  const dead = statuses.filter((s) => s.status === 404 || s.status === 410);
  console.error(`4/4  ${dead.length} dead URLs (404/410). Matching to live targets...\n`);

  const rows = [];
  const buckets = { high: [], medium: [], review: [] };
  for (const { url } of dead) {
    const fromPath = new URL(url).pathname + (new URL(url).search || "");
    const match = bestMatch(url, liveIndex);
    const rec = { from: fromPath, fromFull: url, ...match };
    rows.push(rec);
    if (match.target && match.confidence >= 0.8) buckets.high.push(rec);
    else if (match.target && match.confidence >= MIN_CONFIDENCE) buckets.medium.push(rec);
    else buckets.review.push(rec);
  }

  // CSV: Shopify bulk URL-redirect import format. Only rows with a target.
  const importable = rows.filter((r) => r.target);
  const csv =
    ['"Redirect from","Redirect to"']
      .concat(importable.map((r) => `${csvEscape(r.from)},${csvEscape(new URL(r.target).pathname)}`))
      .join("\n") + "\n";
  writeFileSync(OUT_CSV, csv);

  const report = {
    domain: DOMAIN,
    generatedAt: new Date().toISOString(),
    counts: {
      historical: historical.length,
      live: live.length,
      dead: dead.length,
      importable: importable.length,
      highConfidence: buckets.high.length,
      mediumConfidence: buckets.medium.length,
      needsReview: buckets.review.length,
    },
    note: "Import high+medium after a spot-check. 'needsReview' rows had no confident target — map by hand or point to the nearest collection. Re-run anytime; it's idempotent.",
    highConfidence: buckets.high,
    mediumConfidence: buckets.medium,
    needsReview: buckets.review,
  };
  writeFileSync(OUT_REPORT, JSON.stringify(report, null, 2));

  console.error("------------------------------------------------------------");
  console.error(`Dead URLs found:        ${dead.length}`);
  console.error(`  high confidence:      ${buckets.high.length}`);
  console.error(`  medium confidence:    ${buckets.medium.length}`);
  console.error(`  needs manual review:  ${buckets.review.length}`);
  console.error(`\nCSV  (Shopify import):  ${OUT_CSV}   (${importable.length} redirects)`);
  console.error(`JSON (full report):     ${OUT_REPORT}`);
  console.error(`\nImport: Shopify admin -> Online Store -> Navigation -> URL Redirects -> Import.`);
  console.error("------------------------------------------------------------\n");
})().catch((e) => {
  console.error("\nFAILED:", e.message);
  console.error("If this is a network/allowlist error, run from a machine with normal outbound access.");
  process.exit(1);
});
