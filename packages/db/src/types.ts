/**
 * CarloOS Database Types
 * Auto-generated from Supabase schema.
 * Regenerate with: npx supabase gen types typescript --local > packages/db/src/types.ts
 *
 * This is the hand-written initial version — run supabase gen types after
 * running the schema SQL to get the fully accurate generated version.
 */

export type SiteIdEnum = 'dog-com' | 'vets-co' | 'fish-com' | 'saddle-com' | 'lizard-com'
export type ContentTypeEnum = 'article' | 'review' | 'breed' | 'guide' | 'location' | 'faq'
export type MembershipTierEnum = 'free' | 'premium'
export type SubscriptionStatusEnum = 'active' | 'trialing' | 'past_due' | 'canceled' | 'incomplete'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          display_name: string | null
          avatar_url: string | null
          primary_site: SiteIdEnum | null
          newsletter_subs: SiteIdEnum[]
          interest_tags: Record<string, string[]>
          onboarding_complete: boolean
          onboarding_data: Record<string, unknown>
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'> & {
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }

      memberships: {
        Row: {
          id: string
          user_id: string
          site_id: SiteIdEnum
          tier: MembershipTierEnum
          status: SubscriptionStatusEnum
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          stripe_price_id: string | null
          trial_ends_at: string | null
          current_period_start: string | null
          current_period_end: string | null
          canceled_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['memberships']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['memberships']['Insert']>
      }

      posts: {
        Row: {
          id: string
          site_id: SiteIdEnum
          content_type: ContentTypeEnum
          slug: string
          path: string
          title: string
          subtitle: string | null
          excerpt: string | null
          body_mdx: string | null
          body_html: string | null
          meta_title: string | null
          meta_description: string | null
          og_image: string | null
          author_name: string | null
          author_credentials: string | null
          author_avatar: string | null
          dvm_reviewed: boolean
          schema_type: string
          schema_data: Record<string, unknown>
          tags: string[]
          species: string | null
          breed: string | null
          published: boolean
          featured: boolean
          premium_only: boolean
          published_at: string | null
          updated_at: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['posts']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['posts']['Insert']>
      }

      products: {
        Row: {
          id: string
          name: string
          brand: string | null
          slug: string
          asin: string | null
          external_url: string | null
          applicable_sites: SiteIdEnum[]
          category: string | null
          subcategory: string | null
          description: string | null
          image_url: string | null
          price_range: string | null
          expert_score: number | null
          review_count: number
          affiliate_program: string | null
          specs: Record<string, unknown>
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['products']['Insert']>
      }

      species: {
        Row: {
          id: string
          site_id: SiteIdEnum
          slug: string
          common_name: string
          scientific_name: string | null
          aliases: string[]
          category: string | null
          subcategory: string | null
          care_data: Record<string, unknown>
          health_conditions: string[]
          post_id: string | null
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['species']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['species']['Insert']>
      }

      events: {
        Row: {
          id: string
          site_id: SiteIdEnum
          event_type: string
          event_data: Record<string, unknown>
          session_id: string | null
          post_id: string | null
          product_id: string | null
          user_id: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['events']['Row'], 'id' | 'created_at'> & {
          id?: string
          created_at?: string
        }
        Update: never
      }

      email_subscriptions: {
        Row: {
          id: string
          site_id: SiteIdEnum
          email: string
          confirmed: boolean
          unsubscribed: boolean
          source: string | null
          interest_tags: string[]
          mailchimp_id: string | null
          user_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['email_subscriptions']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Database['public']['Tables']['email_subscriptions']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      site_id: SiteIdEnum
      content_type: ContentTypeEnum
      membership_tier: MembershipTierEnum
      subscription_status: SubscriptionStatusEnum
    }
  }
}


// ── Convenience type aliases ──────────────────────────────────────────────────
// These give callers clean named types instead of Database['public']['Tables']['x']['Row']

export type Post              = Database['public']['Tables']['posts']['Row']
export type Product           = Database['public']['Tables']['products']['Row']
export type Species           = Database['public']['Tables']['species']['Row']
export type Membership        = Database['public']['Tables']['memberships']['Row']
export type EmailSubscription = Database['public']['Tables']['email_subscriptions']['Row']
export type Event             = Database['public']['Tables']['events']['Row']

// PostExtended adds a convenience alias for dvm_reviewed (already in Post, but explicit here)
export type PostExtended      = Post & { dvm_reviewed: boolean }
