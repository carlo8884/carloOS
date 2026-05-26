// CarloOS Database Package — Supabase client and query functions

// Client factories
export {
  createBrowserClient,
  createServerClient,
  createServiceClient,
} from './client'

// Query functions
export {
  getPost,
  getPosts,
  getSpecies,
  searchPosts,
  getMembership,
  logEvent,
} from './client'

// Types
export type { Post, Species, Product, Membership, UserInteraction, EmailSubscription } from './types'

// Schema and indexes (SQL files - for reference)
// Run packages/db/src/schema.sql then packages/db/src/indexes.sql in Supabase SQL Editor
