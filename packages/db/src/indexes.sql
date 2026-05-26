-- CarloOS Database Performance Indexes
-- Run in Supabase SQL Editor after schema.sql
-- These indexes optimize the most common query patterns across all 5 sites

-- ─── posts table ─────────────────────────────────────────────────────────────

-- Primary lookup: site + slug (used by getPost)
CREATE INDEX IF NOT EXISTS idx_posts_site_slug
  ON posts (site_id, slug)
  WHERE published = true;

-- Hub pages: all posts for a site by type
CREATE INDEX IF NOT EXISTS idx_posts_site_type
  ON posts (site_id, content_type, published_at DESC)
  WHERE published = true;

-- Full-text search index (pg_trgm for fuzzy, websearch for natural language)
CREATE INDEX IF NOT EXISTS idx_posts_fts_title
  ON posts USING GIN (to_tsvector('english', title));

CREATE INDEX IF NOT EXISTS idx_posts_fts_excerpt
  ON posts USING GIN (to_tsvector('english', coalesce(excerpt, '')));

-- Combined search index across title + excerpt
CREATE INDEX IF NOT EXISTS idx_posts_fts_combined
  ON posts USING GIN (
    to_tsvector('english', title || ' ' || coalesce(excerpt, '') || ' ' || coalesce(meta_description, ''))
  );

-- Tags search (GIN index for array containment @>)
CREATE INDEX IF NOT EXISTS idx_posts_tags
  ON posts USING GIN (tags);

-- Recent content feeds
CREATE INDEX IF NOT EXISTS idx_posts_published_at
  ON posts (site_id, published_at DESC)
  WHERE published = true;

-- ─── species table ────────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_species_site_slug
  ON species (site_id, slug)
  WHERE active = true;

CREATE INDEX IF NOT EXISTS idx_species_site_category
  ON species (site_id, category, subcategory)
  WHERE active = true;

-- ─── products table ───────────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_products_slug
  ON products (slug);

-- Array overlap for multi-site products
CREATE INDEX IF NOT EXISTS idx_products_sites
  ON products USING GIN (applicable_sites);

CREATE INDEX IF NOT EXISTS idx_products_category
  ON products (category);

-- ─── user_interactions (analytics) table ─────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_interactions_site_type
  ON user_interactions (site_id, event_type, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_interactions_site_path
  ON user_interactions (site_id, page_path, created_at DESC)
  WHERE event_type = 'page_view';

CREATE INDEX IF NOT EXISTS idx_interactions_session
  ON user_interactions (session_id, created_at DESC);

-- ─── email_subscriptions table ───────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_email_subs_site
  ON email_subscriptions (site_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_email_subs_source
  ON email_subscriptions (site_id, source)
  WHERE confirmed = true;

-- ─── memberships table ───────────────────────────────────────────────────────

CREATE INDEX IF NOT EXISTS idx_memberships_user_site
  ON memberships (user_id, site_id);

CREATE INDEX IF NOT EXISTS idx_memberships_stripe_sub
  ON memberships (stripe_subscription_id)
  WHERE stripe_subscription_id IS NOT NULL;

-- ─── Analyze all tables to update query planner statistics ───────────────────

ANALYZE posts;
ANALYZE species;
ANALYZE products;
ANALYZE user_interactions;
ANALYZE email_subscriptions;
ANALYZE memberships;

-- ─── Verify indexes created ──────────────────────────────────────────────────

SELECT
  tablename,
  indexname,
  pg_size_pretty(pg_relation_size(indexrelid)) as size
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename IN ('posts', 'species', 'products', 'user_interactions', 'email_subscriptions', 'memberships')
ORDER BY tablename, indexname;
