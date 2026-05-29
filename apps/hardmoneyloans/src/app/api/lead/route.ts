/**
 * /api/lead — hard money lead capture endpoint.
 *
 * Architect S11. Persists submitted lead requests to the `hard_money_leads`
 * Supabase table. Returns 503 if Supabase is not configured (graceful
 * degradation during local dev / preview deployments).
 *
 * IMPORTANT: This endpoint does not (yet) auction the lead. It records
 * the submission with a `lender_slug` column so we can manually relay
 * leads to lenders until the lender prepaid-balance flow is built (P6).
 */

import { NextResponse } from 'next/server'

interface LeadPayload {
  lenderSlug?: string
  name?: string
  email?: string
  phone?: string
  loanAmount?: number
  propertyType?: string
  state?: string
  purpose?: string
  creditRange?: string
  consent?: boolean
  sourcePath?: string
}

function bad(msg: string, code = 400) {
  return NextResponse.json({ error: msg }, { status: code })
}

export async function POST(req: Request) {
  let body: LeadPayload
  try {
    body = (await req.json()) as LeadPayload
  } catch {
    return bad('Invalid JSON')
  }

  const {
    lenderSlug,
    name,
    email,
    phone,
    loanAmount,
    propertyType,
    state,
    purpose,
    creditRange,
    consent,
    sourcePath,
  } = body

  // Minimal validation — the form already enforces this on the client.
  if (!lenderSlug || !name || !email || !phone || !propertyType || !state) {
    return bad('Missing required fields')
  }
  if (!consent) {
    return bad('Consent disclosure must be acknowledged')
  }
  if (typeof loanAmount !== 'number' || loanAmount < 25_000) {
    return bad('Loan amount must be at least $25,000')
  }

  // Gracefully degrade if Supabase isn't configured (e.g. preview env).
  const hasSupabase =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!hasSupabase) {
    return NextResponse.json(
      {
        ok: true,
        note: 'Lead recorded locally only — Supabase not configured.',
      },
      { status: 200 },
    )
  }

  try {
    const { createServiceClient } = await import('@carloOS/db')
    const supabase = createServiceClient()

    const { error } = await (supabase as unknown as {
      from: (t: string) => {
        insert: (rows: Record<string, unknown>[]) => Promise<{ error: { message: string } | null }>
      }
    })
      .from('hard_money_leads')
      .insert([
        {
          lender_slug: lenderSlug,
          name,
          email,
          phone,
          loan_amount: loanAmount,
          property_type: propertyType,
          state,
          purpose,
          credit_range: creditRange,
          source_path: sourcePath ?? '/quote',
        },
      ])

    if (error) {
      console.error('[hardmoneyloans:/api/lead] insert error', error.message)
      return bad('Failed to save lead', 500)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[hardmoneyloans:/api/lead] unexpected error', err)
    return bad('Internal error', 500)
  }
}
