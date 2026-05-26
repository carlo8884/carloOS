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
export type {
  Post,
  PostExtended,
  Product,
  Species,
  Membership,
  EmailSubscription,
  Event,
} from './types'

export type {
  SiteIdEnum,
  ContentTypeEnum,
  MembershipTierEnum,
  SubscriptionStatusEnum,
} from './types'
